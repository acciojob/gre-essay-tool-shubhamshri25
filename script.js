//your code here
const text = document.querySelector("evaluatedText");
const h3 = document.querySelector("#wordCount");

	function handeleInput(e){
		const sentence = e.target.value;
		const match = sentence.match(/\S+/ig).length;
		h3.textContent = match;
	}

text.addEventListener("input",handeleInput);