var contactbody = document.getElementById("contactbody");
if(contactbody){
    alert("Accept Cookies")
}
// document.getElementById("contactbody").alert("Accept Cockies");


var playbutton = document.getElementById("conc1");
const audio = document.getElementById("audio1");
playbutton.addEventListener('click', function(){
    if(audio.paused){
        audio.play();
    }
    else{
        audio.pause();
    }
})

var playbutton2 = document.getElementById("conc2");
const audio2 = document.getElementById("audio2");
playbutton2.addEventListener('click', function(){
    if(audio2.paused){
        audio2.play();
    }
    else{
        audio2.pause();
    }
})

var playbutton3 = document.getElementById("conc3");
const audio3 = document.getElementById("audio3");
playbutton3.addEventListener('click', function(){
    if(audio3.paused){
        audio3.play();
    }
    else{
        audio3.pause();
    }
})
var playbutton4 = document.getElementById("conc4");
const audio4 = document.getElementById("audio4");
playbutton4.addEventListener('click', function(){
    if(audio4.paused){
        audio4.play();
    }
    else{
        audio4.pause();
    }
})

var typeData = new Typed(".name", {
    strings: [
        "Tunes",
        "Time"
    ],
    loop : true,
    typeSpeed : 500,
    backSpeed : 500,
    backDelay: 1000,
})




