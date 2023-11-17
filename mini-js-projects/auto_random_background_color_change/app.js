/**
 * Project Requirements:
 * - Change the background color by generating random rbg color by clicking a button
 */

// Steps

// Step 1 - create onload handler
window.onload = () => {
	main();
};

function main() {
	const root = document.getElementById('root');
	const btn = document.getElementById('change-btn');
	const autobtn=document.getElementById('change-btn-auto');
	const autobtnstop=document.getElementById('change-btn-auto-stop');
    
	let txtcolor = document.getElementById('text-color');

    //initially hide the stop button
	autobtnstop.style.display="none";

	//click event for 'change color' button
	btn.addEventListener('click', function () {
		const bgColor = generateRGBColor();
		root.style.backgroundColor = bgColor;
		txtcolor.innerText=bgColor;
	});

	//click event for 'Auto change color' button
    autobtn.addEventListener('click',function () {

		/*when auto change color button clicked it will hide 
		it self and display Stop auto change button */
		autobtn.style.display="none";
		autobtnstop.style.display="block";
		
		//then auto change event will fire
		var intervalId=window.setInterval(function() {
		const bgColor = generateRGBColor();
		root.style.backgroundColor = bgColor;
		txtcolor.innerText=bgColor;	
		},5000);
		
	//click event for 'Stop auto change color' button 	
	autobtnstop.addEventListener('click', function (){

		/*when stop auto change color button clicked it will hide 
		it self and display auto change button and stop the auto change*/

		autobtn.style.display="block";
		autobtnstop.style.display="none";
		clearInterval(intervalId);
		
	})
		
	});

}

// step 2 - random color generator function
function generateRGBColor() {
	// rgb(0, 0, 0), rgb(255, 255, 255)
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);

	return `rgb(${red}, ${green}, ${blue})`;
}

// step 3 - collect all necessary references

// step 4 - handle the click event
