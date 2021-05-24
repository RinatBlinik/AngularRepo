import {Question} from "./question";
export class Exam{
    private questions: Question[]=[];

    addQuestion(q:Question){
        this.questions.push(q);
    }
    print(){
        console.log("Exam");
        for (let index = 0; index < this.questions.length; index++) {
            let q = this.questions[index];
            q.print();
        }
    }

    grade(correctAnswers: number[]):number{
        let correctCount=0;
        let length = Math.min(this.questions.length, correctAnswers.length);
        for (let index = 0; index < length; index++) {
            let correctAns = correctAnswers[index];
            if(this.questions[index].CorrectIndex == correctAns){
                correctCount++;
            }
        }
        return 100 * (correctCount/length);

    }

}