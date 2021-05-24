import { Exam } from "./exam";
import { Question } from "./question";
import questionsJson from './data/exam1.json';

let exam1 = new Exam();

for (const q of questionsJson.questions) {
    exam1.addQuestion(q);
}

exam1.print();

let ans1: number[] = [1, 0, 1, 2];
let ans2: number[] = [2, 0, 5, 2];
let ans3: number[] = [1, 3, 2, 3, 2, 3];
console.log(`Answers: ${ans1}  Grade: ${exam1.grade(ans1)}`);
console.log(`Answers: ${ans2}  Grade: ${exam1.grade(ans2)}`);
console.log(`Answers: ${ans3}  Grade: ${exam1.grade(ans3)}`);