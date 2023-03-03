//your code here
const text = document.queryselector("#evaluatedText");
const h3 = document.queryselector("#wordCount");

	function handelInput(e){
		const sentence = e.target.value;
		const match = sentence.match(/\S+/ig).length;
		h3.textContent = match;
	}

text.addEventListner("input",handelInput);