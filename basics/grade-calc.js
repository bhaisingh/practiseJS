
let gradeCalc = function(score, maxScore) {
    let percent = (score / maxScore) * 100;
    let letterGrade = "";

    if (percent >= 90) {
        letterGrade = "A";
    } else if (percent >= 80) {
        letterGrade = "B";
    } else if (percent >= 70) {
        letterGrade = "C";
    } else if (percent >= 60) {
        letterGrade = "D"
    } else {
        letterGrade = "F"
    }

    return `You got an ${letterGrade} with a ${percent}%`;
}

let result = gradeCalc(9, 20);
console.log(result);
