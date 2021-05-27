import { Question } from "./question";

export class QuizQuestions
{
    static questions: Question[] =[
        {
            caption: 'If ( 1=3 , 2=3 , 3=5 , 4=4 , 5=4 )  then 6=?', 
            answers: [
                '2', 
                '3', 
                '5', 
                '8'
            ], 
            correctAnswer: 1,
            userAnswer: -1
        },
        {
            caption: 'If (16 | 06|68 |88 |X|98) then X=?', 
            answers: [
                '28', 
                '69', 
                '96', 
                '87'
            ], 
            correctAnswer: 3,
            userAnswer: -1
        },
        {
            caption: 'If ( 1=5 , 2=25 , 3=325 ) then 4=?', 
            answers: [
                '3425', 
                '2535', 
                '4325', 
                '4425'
            ], 
            correctAnswer: 2,
            userAnswer: -1
        },
        {
            caption: 'If ( 3=18 , 4=32 , 5=50 ) then 6=?', 
            answers: [
                '84', 
                '76', 
                '68', 
                '72'
            ], 
            correctAnswer: 3,
            userAnswer: -1
        },
        {
            caption: 'If( 2+3=8 , 3+7=27 , 4+5=32 , 5+8=60 ) then 7+8=?', 
            answers: [
                '54', 
                '76', 
                '98', 
                '92'
            ], 
            correctAnswer: 2,
            userAnswer: -1
        },
        {
            caption: 'If ( 1-1=0 , 2-1=3 , 3-1=8 ) then 4-1=?', 
            answers: [
                '12', 
                '16', 
                '9', 
                '15'
            ], 
            correctAnswer: 3,
            userAnswer: -1
        },
        {
            caption: 'If ( 1+5=18 , 2+10=36 , 3+15=54 ) then 4+20=?', 
            answers: [
                '72', 
                '76', 
                '92', 
                '84'
            ], 
            correctAnswer: 0,
            userAnswer: -1
        },
        {
            caption: 'If ( 2+4=10 , 4+6=28 , 5+2=15 ) 7+9=?', 
            answers: [
                '70', 
                '16', 
                '32', 
                '18'
            ], 
            correctAnswer: 0,
            userAnswer: -1
        },
        {
            caption: 'If ( 3+2=165 , 2+1=123 , 4+2=286 )  then 6+1=?', 
            answers: [
                '142', 
                '216', 
                '567', 
                '154'
            ], 
            correctAnswer: 2,
            userAnswer: -1
        },
        {
            caption: 'If ( 6+3=39 , 9+4=513 , 18+16=234 ) then 6+5=?', 
            answers: [
                '120', 
                '111', 
                '345', 
                '105'
            ], 
            correctAnswer: 1,
            userAnswer: -1
        }
    ]
   
}