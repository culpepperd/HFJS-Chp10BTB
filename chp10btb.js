var midi = true;
var type = "piano";
var midiInterface;

function play(sequence) {
    print("play() function")
}

var pause = function() {
    print("pause function")
    stop();
}

function stop() {
    print("stop() function")
}

function createMidi() {
    print("createMidi() function")
}

if (midi) {
    midiInterface = function(type) {
        print("midiInterface function")
    };
}