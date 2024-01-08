var nosex=0
var nosey=0
function preload(){
   clownnose=loadImage("mustache-15021.png") 
}
function setup(){
canvas=createCanvas(400,400)
canvas.center()
video=createCapture(VIDEO)
video.hide()
posenet=ml5.poseNet(video, modelloaded)
posenet.on("pose", gotposes)
}
function draw(){
image(video,0,0,400,400)
fill("black")
image(clownnose, nosex, nosey, 100, 50)
}
function modelloaded(){
   console.log("posenet is ready")
}
function gotposes(results){
if (results.length>0) {
   console.log(results)
   nosex=results[0].pose.nose.x-175
   nosey=results[0].pose.nose.y-70
   console.log(nosex, nosey)
}
}
