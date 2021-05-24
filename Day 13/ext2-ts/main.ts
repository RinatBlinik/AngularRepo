import { Exam } from "./exam";
import { Question } from "./question";
let exam1= new Exam();
let q1= new Question("Q1",["1.1","1.2","1.3","1.4"],1);
let q2= new Question("Q2",["2.1","2.2","2.3","2.4"],0);
let q3= new Question("Q3",["3.1","3.2","3.3","3.4"],1);
let q4= new Question("Q4",["4.1","4.2","4.3","4.4"],2);
exam1.addQuestion(q1);
exam1.addQuestion(q2);
exam1.addQuestion(q3);
exam1.addQuestion(q4);
exam1.print();

let ans1: number[]=[1,0,1,2,];
let ans2: number[]=[2,0,5,2,];
let ans3: number[]=[1,0,1,1,];
console.log(`Grade: ${exam1.grade(ans1)}`);
console.log(`Grade: ${exam1.grade(ans2)}`);
console.log(`Grade: ${exam1.grade(ans3)}`);