export class Question{
    constructor(public Caption: string, public Answers: string[], public CorrectIndex:number )
    {

    }
    print(){
        console.log(this.Caption);
        for (let index = 0; index < this.Answers.length; index++) {
            let ans = this.Answers[index];
            console.log(`${index}. ${ans}`);
        }
        console.log();
    }

}