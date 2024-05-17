
//Access current project composition and time at playhead
var comp = app.project.activeItem;


//Joonas styling

var win = new Window("palette", "Add Marker", undefined, {resizeable: true}); 
    win.text = "Set marker in timeline"; 
    win.orientation = "column"; 
    win.alignChildren = ["center","top"]; 
    win.spacing = 10; 
    win.margins = 16; 

var keyframe = win.add("button", undefined, undefined, {name: "keyframe"}); 
    keyframe.helpTip = "Set marker for keyframe (red)"; 
    keyframe.text = "Key"; 

var breakdown = win.add("button", undefined, undefined, {name: "breakdown"}); 
    breakdown.text = "Breakdown"; 

var anticipation = win.add("button", undefined, undefined, {name: "anticipation"}); 
    anticipation.text = "Anticipation"; 

var overshoot = win.add("button", undefined, undefined, {name: "overshoot"}); 
    overshoot.text = "Overshoot"; 

var preset = win.add("button", undefined, undefined, {name: "preset"});
    preset.text = "Preset";

var other = win.add("button", undefined, undefined, {name: "other"}); 
    other.text = "Other"; 

var start = win.add("button", undefined, undefined, {name: "start"}); 
start.text = "Start"; 

var end = win.add("button", undefined, undefined, {name: "end"}); 
end.text = "End"; 

win.show();

// onClick functions

keyframe.onClick = function(){
    setKey();
}

breakdown.onClick = function(){
    setBreakdown();
}

anticipation.onClick = function(){
    setAnticipation();
}

overshoot.onClick = function(){
    setOvershoot();
}

preset.onClick = function() {
    setPreset();
}

other.onClick = function(){
    setOther();
}

start.onClick = function(){
    setStart();
}

end.onClick = function(){
    setEnd();
}

// Button assignment functions
function setKey() {
    var time = app.project.activeItem.time;
    comp.markerProperty.setValueAtTime(time, compMarkerKey);
}

function setBreakdown() {
    var time = app.project.activeItem.time;
comp.markerProperty.setValueAtTime(time, compMarkerBreakdown);
}

function setAnticipation() {
    var time = app.project.activeItem.time;
comp.markerProperty.setValueAtTime(time, compMarkerAnticipation);
}

function setOvershoot() {
    var time = app.project.activeItem.time;
comp.markerProperty.setValueAtTime(time, compMarkerOvershoot);
}

function setPreset() {
    var time = app.project.activeItem.time;
comp.markerProperty.setValueAtTime(time, compMarkerPreset);
}

function setOther() {
    var time = app.project.activeItem.time;
comp.markerProperty.setValueAtTime(time, compMarkerOther);
}

function setStart() {
    var time = app.project.activeItem.time;
comp.markerProperty.setValueAtTime(time, compMarkerStart);
}

function setEnd() {
    var time = app.project.activeItem.time;
comp.markerProperty.setValueAtTime(time, compMarkerEnd);
}


// Marker styling

var compMarkerKey = new MarkerValue("Key");
compMarkerKey.duration = 0;
compMarkerKey.label = 1;

var compMarkerBreakdown = new MarkerValue("BD");
compMarkerBreakdown.duration = 0;
compMarkerBreakdown.label = 2;

var compMarkerAnticipation = new MarkerValue("Antic");
compMarkerAnticipation.duration = 0;
compMarkerAnticipation.label = 3;

var compMarkerOvershoot = new MarkerValue("OS");
compMarkerOvershoot.duration = 0;
compMarkerOvershoot.label = 4;

var compMarkerPreset = new MarkerValue("Prst");
compMarkerPreset.duration = 0;
compMarkerPreset.label = 6;

var compMarkerOther = new MarkerValue("Note");
compMarkerOther.duration = 0;
compMarkerOther.label = 5;

var compMarkerStart = new MarkerValue("Start");
compMarkerOther.duration = 0;
compMarkerOther.label = 7;

var compMarkerEnd = new MarkerValue("End");
compMarkerOther.duration = 0;
compMarkerOther.label = 8;

/* Boilerplate

comp.markerProperty.setValueAtTime(time, compMarker);

var compMarker = new MarkerValue("This is a comp marker!");
compMarker.duration = 1; */