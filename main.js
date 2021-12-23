x=0;
y=0;

draw_circle=" ";
draw_rect=" ";

function setup(){
    canvas=createCanvas(900,600);
}

function draw(){
    if(draw_circle=="set"){
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="The System has drawn the circle!!!";
        draw_circle=" ";
    }
    if(draw_rect=="set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML="The System has drawn the rectangle!!!";
        draw_rect=" ";
    }
}

var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
document.getElementById("status").innerHTML="System is Listening. Please Speak!!!";
recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("status").innerHTML="The Speech has been accurately been recognised as:" + Content;
    if(Content=="circle"){
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML="The computer has drawn a circle!!!";
    draw_circle="set";
    }
    if(Content=="rectangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="The computer has drawn a rectangle!!!";
        draw_rect="set";
        }
}