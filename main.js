song = "";

function preload()
{
	song = loadSound("music.mp3");
	song = loadSound("music2.mp3")

}

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
	scoreRightWrist =  results[0].pose.keypoints[10].score;
	scoreLeftWrist =  results[0].pose.keypoints[9].score;
	console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);
	
	rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
	console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
	console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
		
  }
}

function draw() {
	image(video, 0, 0, 600, 500);

	fill("#FF0000");
	stroke("#FF0000");
	

	

	if(scoreRightWrist = 100)
	{ 
		circle(rightWristX,rightWristY,20);

		if(rightWristY >0 && rightWristY <= 100)
		{
			document.getElementById("music2.mp3").innerHTML ;		
			
		}
		else if(rightWristY >100 && rightWristY <= 200)
		{
			document.getElementById("music2.mp3").innerHTML ;		
			
		}
		else if(rightWristY >200 && rightWristY <= 300)
		{
			document.getElementById("music2.mp3").innerHTML;	
			
		}
		else if(rightWristY >300 && rightWristY <= 400)
		{
			document.getElementById("music2.mp3").innerHTML ;	
			
		}
		else if(rightWristY >400 && rightWristY <=500)
		{
			document.getElementById("music2.mp3").innerHTML ;		
			
		}

		if(rightWristY >0 && rightWristY <=100)
		{
			document.getElementById("music.mp3").innerHTML;

		}
		else if(rightWristY >100 && rightWristY <= 200)
		{
			document.getElementById("music.mp3").innerHTML ;		
			
		}
		else if(rightWristY >200 && rightWristY <= 300)
		{
			document.getElementById("music.mp3").innerHTML;	
			
		}
		else if(rightWristY >300 && rightWristY <= 400)
		{
			document.getElementById("music.mp3").innerHTML ;	
			
		}
		else if(rightWristY >400 &&rightWristY <=100)
		{
			document.getElementById("music.mp3").innerHTML ;		
			
		}




	}

	

}

function play()
{
	song.play();
	
}
