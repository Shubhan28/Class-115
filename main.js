noseX = 0;
noseY = 0;
function preload()
{
  clown_nose = loadImage('https://i.postimg.cc/4dx2m3SP/red-nose.png');
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    classifier = ml5.poseNet(video, modelLoaded);
    classifier.on('pose', gotposes);
}
function draw()
{
  image(video, 0, 0, 300, 300);
  image(clown_nose, noseX, noseY, 30, 30);
}
function take_snapshot()
{
    save('filter.png');
}
function show(message)
{
    console.log(message);
}
function modelLoaded()
{
   show("PoseNet is loaded!!");
}
function gotposes(results)
{
    if(results.length > 0)
    {
        show(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
        console.log("nose_x = "+noseX);
        console.log("nose_y = "+noseY);
    }
}
