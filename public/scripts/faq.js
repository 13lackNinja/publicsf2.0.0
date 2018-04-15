
// Expanding FAQs
const question1 = document.getElementById("question-box-1");
const question2 = document.getElementById("question-box-2");
const question3 = document.getElementById("question-box-3");

const answer1 = document.getElementById("answer-box-1");
const answer2 = document.getElementById("answer-box-2");
const answer3 = document.getElementById("answer-box-3");

question1.addEventListener("click", function() {

  if (answer1.style.display == "block") {answer1.style.display = "none"}
  else {answer1.style.display = "block"};
});
question2.addEventListener("click", function() {
  if (answer2.style.display == "block") {answer2.style.display = "none"}
  else {answer2.style.display = "block"};
});
question3.addEventListener("click", function() {
  if (answer3.style.display == "block") {answer3.style.display = "none"}
  else {answer3.style.display = "block"};
});
