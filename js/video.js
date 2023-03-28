var vid = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");

	// Setting Autoplay to False 
	vid.autoplay = false;
	console.log("Auto play is set to false");

	// Setting Loop to False
	vid.loop = false;
	console.log("Loop is set to false");
});

document.querySelector("#play").addEventListener("click", function() {
	vid.play();
	console.log("Play Video");

	// Update the volume information
	let vol = vid.volume;
	vol = vol * 100;
	document.querySelector("#volume").textContent = vol + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	vid.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	// Set it to be 10% slower each time the button is clicked
	vid.playbackRate -= 0.1;
	console.log(vid.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	// Set it to be 10% faster each time the button is clicked
	vid.playbackRate += 0.1;
	console.log(vid.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if ((vid.currentTime + 10) > vid.duration) {
		vid.currentTime = 0
	}
	else {
		vid.currentTime += 10;
	}
	console.log(vid.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (vid.muted) {
		vid.muted = false;
		// Video is no longer muted
		document.querySelector('#mute').innerHTML = 'Mute';
	}
	else {
		vid.muted = true;
		// Video is now muted
		document.querySelector('#mute').innerHTML = 'Unmute';
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	// slider updates
	var val = document.querySelector('#slider').value;
	console.log(val)
	vid.volume = val / 100;

	// Update the volume information
	let vol = vid.volume;
	vol = vol * 100;
	document.querySelector("#volume").textContent = vol + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	vid.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	vid.classList.remove("oldSchool");
});