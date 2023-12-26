const quesJSON = [
  {
    correctAnswer: "Three ",
    options: ["Two", "Three ", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: "L. Frank Baum",
    options: [
      "Suzanne Collins",
      "James Fenimore Cooper",
      "L. Frank Baum",
      "Donna Leon",
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: "Atlanta United",
    options: [
      "Atlanta United",
      "Atlanta Impact",
      "Atlanta Bulls",
      "Atlanta Stars",
    ],
    question: "Which of these is a soccer team based in Atlanta?",
  },
  {
    correctAnswer: "A Nanny",
    options: ["A Sow", "A Lioness", "A Hen", "A Nanny"],
    question: "A female goat is known as what?",
  },
  {
    correctAnswer: "P. L. Travers",
    options: [
      "J. R. R. Tolkien",
      "P. L. Travers",
      "Lewis Carroll",
      "Enid Blyton",
    ],
    question: "Which author wrote 'Mary Poppins'?",
  },
];
let score = 0;
let currentQuestion = 0;
let queCount = 0;
let totalScore = quesJSON.length;

// destructuring
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next");
const questionCount = document.getElementById("que-count");
const questionCountDiv = document.querySelector("#btn h3");

showQuestion(quesJSON);
nextBtn.addEventListener("click", () => {
  nextQuestion();
  scoreEl.textContent = `Score: ${score}`;
});

function showQuestion() {
  const { correctAnswer, options, question } = quesJSON[currentQuestion];
  console.log(correctAnswer, options, question);

  questionEl.textContent = question;
  // options button
  const newOptions = ShuffleOptions(options);
  newOptions.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    optionsEl.appendChild(btn);
    btn.addEventListener("click", () => {
      if (opt === correctAnswer) {
        score++;
      } else {
        score = score - 0.25;
      }
      scoreEl.textContent = `Score: ${score} / ${totalScore}`;
      nextQuestion();
    });
  });
}
function nextQuestion() {
  currentQuestion++;
  queCount++;
  questionCount.textContent = `${queCount}/5`;
  optionsEl.textContent = "";
  if (currentQuestion >= quesJSON.length) {
    questionCountDiv.textContent = "";
    questionEl.textContent = `Quiz Completed!`;
    nextBtn.remove();

    const completeImg = document.getElementById("endIimg");
    // Replace the URL below with your actual image URL
    // completeImg.src =
    //   "https://t4.ftcdn.net/jpg/05/72/54/67/360_F_572546714_2mn39TUv2f5Lmg7JRT9yvSkuTJERGyg8.jpg";
    if (score > 4) {
      completeImg.setAttribute(
        "src",
        "./images/cup-trophy.png"
      );
    } else {
            completeImg.setAttribute("src", "./images/nice-try.png");

    }
  } else {
    showQuestion();
  }

}
// shuffle the options
function ShuffleOptions(optionArr) {
  for (let i = optionArr.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i);
    // destructuring
    [optionArr[i], optionArr[j]] = [optionArr[j], optionArr[i]];
    console.log(optionArr);
  }
  return optionArr;
}
