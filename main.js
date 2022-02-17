var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start(){
    document.getElementById("textBox").innerHTML="";
    Recognition.start();
}
Recognition.onresult= function run(event){
    var content=event.results[0][0].transcript;
    document.getElementById("textBox").innerHTML=content;
}