var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start(){
    document.getElementById("textBox").innerHTML="";
    Recognition.start();
}
Recognition.onresult= function run(event){
    var content=event.results[0][0].transcript;
    document.getElementById("textBox").innerHTML=content;
    if (content=="Take my selfie."){
        speak();
    }
    Webcam.attach(camera);
    
}
function speak(){
    var synth=window.speechSynthesis;
    speakData="Taking your selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='selfie_image' src='"+data_uri+"'>";
        
    }
    );
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}