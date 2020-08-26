//background listener

//ytp-ad-skip-button ytp-button
//ytp-ad-overlay-close-button
//document.getElementsByClassName('ytp-ad-overlay-close-button')[0].click();
//document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0].click();


setInterval(lookToSkip, 300);

function lookToSkip(){

	console.log("looking for ads");

		try{
			document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0].click();
		} catch(e){
			//console.log("no ads yet");
		}

		try{
			document.getElementsByClassName('ytp-ad-overlay-close-button')[0].click();
		} catch(e){
			//console.log("no ads banner yet");
		}

}
