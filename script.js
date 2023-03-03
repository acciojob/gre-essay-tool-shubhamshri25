//your code here
const text = document.queryselector(#evaluatedText);
const wordCount = document.queryselector(#wordCount);

	function handelInput(e){
		const sentence = e.target.value;
		const match = sentence.mathc(/\S+/ig).length;
		wordCount.textContent = match;
	}

text.addEventListner('input',handelInput);