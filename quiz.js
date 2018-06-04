(function(){
	function buildQuiz(){}
	
	function showResults(){}

	//display quiz right away
	buildQuiz();

	//on submit, show results
	submitButton.addEventListener('click', showResults);


})


const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
	{
		question: "Who is the strongest?",
		answers: {
			a: "Superman",
			b: "The Terminator",
			c: "Waluigi, obviously"
		},
		correctAnswer: "c"
	},
	{
		question: "What is the best site ever created?",
		answers: {
			a: "Sitepoint",
			b: "Simple Steps Code",
			c: "Trick question; they're both the best"
		},
		correctAnswer: "c"
	},
	{
		question: "Where is Waldo really?",
		answers: {
			a: "Antartica",
			b: "Exploring the Pacific Ocean",
			c: "Sitting in a tree",
			d: "Minding his own business, so stop asking"
		},
		correctAnswer: "d"
	}
];