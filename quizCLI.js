//Initialization
var readlinesync = require("readline-sync");
var chalk = require("chalk");
console.log(chalk.blue("Welcome to F.R.I.E.N.D.S quiz\n"));
console.log("Quiz instructions :\n");
console.log(
	"There will be 10 questions in this quiz.\nIf you get 10/10 you WIN\nEnter your answer in options (a/b/c/d)\n"
);
var username = readlinesync.question(
	"Please enter your name to start the quiz : "
);
console.log("\n---------------------\n");

//Processing answer checking
function answerChecking(question, options, quizAnswer) {
	console.log(question);
	console.log(options);
	var userAnswer = readlinesync.question();

	if (quizAnswer.toUpperCase() === userAnswer.toUpperCase()) {
		console.log(chalk.black.bgGreen("You are right !"));
		score++;
		console.log("Score is: " + chalk.bold(score));
	} else {
		console.log(chalk.bgRed("Wrong"));
		// console.log("Correct answer is: "+quizAnswer);
	}
}

//Question bank
var quizQuestion = [
	{
		question: "1.The series Friends is set in which city?\n",
		options: `a. Los Angeles
b. New York City
c. Miami
d. Seattle\n
Your answer is: `,
		quizAnswer: "b",
	},
	{
		question: "2.What pet did Ross own?\n",
		options: `a. A dog named Keith
b. A rabbit called Lancelot
c. A monkey named Marcel
d. A lizard named Alistair\n
Your answer is: `,
		quizAnswer: "c",
	},
	{
		question:
			"3.What kind of uniform does Joey wear to Monica and Chandler’s wedding?\n",
		options: `a. Chef
b. Soldier
c. Fire fighter
d. A baseball player\n
Your answer is: `,
		quizAnswer: "b",
	},
	{
		question: "4.What’s the name of Joey’s penguin?\n",
		options: `a. Snowflake
b. Waddle
c. Huggsy
d. Bobber\n
Your answer is: `,
		quizAnswer: "c",
	},
	{
		question: "5.What’s the name of Janice’s first husband?\n",
		options: `a. Gary Litman
b. Sid Goralnik
c. Rob Bailystock
d. Nick Layster\n
Your answer is: `,
		quizAnswer: "a",
	},
	{
		question: "6.What song is Phoebe best known for?\n",
		options: `a. Smelly Cat
b. Smelly Dog
c. Smelly Rabbit
d. Smelly Worm\n
Your answer is: `,
		quizAnswer: "a",
	},
	{
		question: "7.What job does Ross have?\n",
		options: `a. Paleontologist
b. Artist
c. Photographer
d. Insurance salesman\n
Your answer is: `,
		quizAnswer: "a",
	},
	{
		question: "8.What does Joey never share?\n",
		options: `a. His books
b. His information
c. His food
d. His DVDs\n
Your answer is: `,
		quizAnswer: "c",
	},
	{
		question: "9.What is Chandler’s middle name?\n",
		options: `a. Muriel
b. Jason
c. Kim
d. Zachary\n
Your answer is: `,
		quizAnswer: "a",
	},
	{
		question: "10.What is the name of Phoebe’s alter-ego?\n",
		options: `a. Phoebe Neeby
b. Monica Bing
c. Regina Phalange
d. Elaine Benes\n
Your answer is: `,
		quizAnswer: "c",
	},
];

mainLoop: while (1) {
	//While loop added so we can ask play again wala part
	//Input main loop
	var score = 0;
	for (let i = 0; i < quizQuestion.length; i++) {
		answerChecking(
			quizQuestion[i].question,
			quizQuestion[i].options,
			quizQuestion[i].quizAnswer
		);
		console.log("\n---------------------\n");
	}

	//Highest score database
	highestScore = [
		{
			name: username,
			userscore: score,
		},
		{
			name: "Kalyani",
			userscore: 7,
		},
	];

	//Last messege
	if (score === 10) {
		console.log(
			chalk.magenta("Congratulation " + username + " you have won this quiz !")
		);
	} else if (score == 8 || score == 9) {
		console.log(chalk.magenta("Ohh! that is pretty close.\n"));
		if (highestScore[0].userscore > highestScore[1].userscore)
			console.log(
				"You have beaten 'kalyani's score 8' your score is " +
					chalk.bold.blue(score + "/10")
			);
	} else {
		console.log(
			chalk.magenta("Better luck next time !\n\n") +
				"Your total score is " +
				chalk.bold.blue(score + "/10")
		);
	}

	// Play again wala part
	var playAgain = readlinesync.keyInYN("\nDo you want take this quiz again?");
	if (playAgain !== true) {
		console.log("\n---------------------\n");
		break;
	}
	console.log("\n---------------------\n");
}
console.log(chalk.blue("Thank you for participating"));

// YAY! You SCORED:  1
// Check out the high scores, if you should be there ping me and I'll update it
// Tanay  :  3
// Akash  :  2
