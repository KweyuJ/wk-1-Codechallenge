// Create a function named studentGrade
// Use grade as a parameter

function studentGrade(grade) {
  if (grade > 79) {
    return "A";
  } else if (grade >= 60 && grade <= 79) {
    return "B";
  } else if (grade > 49 && grade <= 59) {
    return "C";
  } else if (grade >= 40 && grade <= 49) {
    return "D";
  } else if (grade < 40) {
    return "E";
  }
}
// EXample below shows an example that will take 85 as an argument and return a grade for the student
console.log(studentGrade(85));
