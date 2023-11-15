/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 */

// Steps

// Step 1 - create onload handler

window.onload = () =>{
	main();
}

// step 2 - random color generator function

function generateHexColor(){
	const red=Math.floor(Math.random()*255);
	const blue=Math.floor(Math.random()*255);
	const green=Math.floor(Math.random()*255);
	return `#${red.toString(16)}${blue.toString(16)}${green.toString(16)}`;

}


function main(){
     
	// step 3 - collect all necessary references
	const root = document.getElementById('root');
	const btn = document.getElementById('change-btn');
    const output=document.getElementById('output');


	// step 4 - handle the click event

	btn.addEventListener('click',function(){
		
		//call the color generate function to generate random color
		const bgcolor=generateHexColor();

		//change the background color
		root.style.backgroundColor=bgcolor;

		//display the background color hexadecimal number
		output.value=bgcolor;
	})
}




