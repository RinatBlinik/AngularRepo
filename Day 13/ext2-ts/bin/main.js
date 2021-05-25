"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var exam_1 = require("./exam");
var exam1_json_1 = __importDefault(require("./data/exam1.json"));
var exam1 = new exam_1.Exam();
for (var _i = 0, _a = exam1_json_1.default.questions; _i < _a.length; _i++) {
    var q = _a[_i];
    exam1.addQuestion(q);
}
exam1.print();
var ans1 = [1, 0, 1, 2];
var ans2 = [2, 0, 5, 2];
var ans3 = [1, 3, 2, 3, 2, 3];
console.log("Answers: " + ans1 + "  Grade: " + exam1.grade(ans1));
console.log("Answers: " + ans2 + "  Grade: " + exam1.grade(ans2));
console.log("Answers: " + ans3 + "  Grade: " + exam1.grade(ans3));
//# sourceMappingURL=main.js.map