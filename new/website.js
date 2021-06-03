$(document).ready(function(){
    setInterval(rotator, 2000);
});

function fader() {
    
    document.getElementById("fade").style.opacity = 1;
    //setInterval(rotator, 2000);
}

function rotator() {   
    var words = new Array("run.", "play tennis.", "be myself.", "stay up late.", "workout.", "swim.", "sleep in.", "play fantasy baseball.", "code.", "have fun.", "be outside.", "play video games.", "compete.", "play baseball.", "fall asleep to thunderstorms.", "watch sports.", "make brackets for everything.", "play hockey.", "skate.", "make videos.", "be a creator.", "invent.", "be with my friends.", "watch the sunset.", "make things better.", "engineer.", "create websites.", "learn.", "catch up with friends.", "work on my computer.", "program.", "challenge myself.", "improve.", "be happy.", "spend time with family.", "make new things.", "innovate.");
    var random = Math.floor(Math.random()*words.length);
    $("#word").text(words[random]);
    
}