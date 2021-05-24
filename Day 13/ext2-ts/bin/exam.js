"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exam = void 0;
var Exam = /** @class */ (function () {
    function Exam() {
        this.questions = [];
    }
    Exam.prototype.addQuestion = function (q) {
        this.questions.push(q);
    };
    Exam.prototype.print = function () {
        console.log("Exam");
        for (var index = 0; index < this.questions.length; index++) {
            var q = this.questions[index];
            q.print();
        }
    };
    Exam.prototype.grade = function (correctAnswers) {
        var correctCount = 0;
        var length = Math.min(this.questions.length, correctAnswers.length);
        for (var index = 0; index < length; index++) {
            var correctAns = correctAnswers[index];
            if (this.questions[index].CorrectIndex == correctAns) {
                correctCount++;
            }
        }
        return 100 * (correctCount / length);
    };
    return Exam;
}());
exports.Exam = Exam;
//# sourceMappingURL=exam.js.map