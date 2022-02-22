var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start(){
    document.getElementById("textBox").innerHTML="";
    Recognition.start();
}
Recognition.onresult= function run(event){
    var content=event.results[0][0].transcript;
    document.getElementById("textBox").innerHTML=content;
    speak();
    Webcam.attach(camera);
}
function speak(){
    var synth=window.speechSynthesis;
    speakData=document.getElementById("textBox").value;
    var utterThis=new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
