var history;

$(document).ready(function(){
    setInterval(rotator, 3000);
});

function fader() {
    document.getElementById("fade").style.opacity = 1;
}

function rotator() {   
    var words = new Array("run.", "play tennis.", "be myself.", "use java.", "stay up late.", "workout.", "swim.", "sleep in.", "play fantasy baseball.", "code.", "throw frisbee.","have fun.", "be outside.", "play video games.", "compete.", "play baseball.", "fall asleep to thunderstorms.", "watch sports.", "make brackets for everything.", "play hockey.", "skate.", "make videos.", "be a creator.", "invent.", "be with my friends.", "watch the sunset.", "make things better.", "engineer.", "create websites.", "learn.", "catch up with friends.", "work on my computer.", "program.", "challenge myself.", "improve.", "be happy.", "spend time with family.", "make new things.", "innovate.");
    var random = Math.floor(Math.random()*words.length);
    while (random == history) {
        random = Math.floor(Math.random()*words.length);
    }
    history = random;
    $("#word").text(words[random]);
}

function resize() {
    var height = document.getElementById('code').clientHeight;
    var x = "" + height + "px";
    document.getElementById('video').style.height = x;
}