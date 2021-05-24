"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
var Question = /** @class */ (function () {
    function Question(Caption, Answers, CorrectIndex) {
        this.Caption = Caption;
        this.Answers = Answers;
        this.CorrectIndex = CorrectIndex;
    }
    Question.prototype.print = function () {
        console.log(this.Caption);
        for (var index = 0; index < this.Answers.length; index++) {
            var ans = this.Answers[index];
            console.log(index + ". " + ans);
        }
        console.log();
    };
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=question.js.map