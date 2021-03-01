(function(){
	var byeSpeaker = {};

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
var speakWord = "Good Bye";
byeSpeaker.speak = function (name) {
  		console.log(speakWord + " " + name);
	}

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2

window.byeSpeaker = byeSpeaker;

})();