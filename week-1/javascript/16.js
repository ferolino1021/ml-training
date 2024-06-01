/**
 * Write a function that computes the average marks of the following students: Then this average is used to determine the corresponding grade.
 * - John: 90
 * - Jane: 85
 * - Joe: 95
 * - Tom: 65
 * - Nancy: 75
 *
 * Grade computed as follows:
 * < 60 : F
 * 60-70 : D
 * 70-80 : C
 * 80-90 : B
 * > 90 : A
 * @return {number} The average marks of the students.
 */

const students = [
  { name: "John", mark: 90 },
  { name: "Jane", mark: 85 },
  { name: "Joe", mark: 95 },
  { name: "Tom", mark: 65 },
  { name: "Nancy", mark: 75 },
];
function computeAverage() {
  let totalMarks = 0;
  for (let student of students) {
      totalMarks += student.mark;
  }
  const average = totalMarks / students.length;
  let grade;
  if (average < 60) {
      grade = 'F';
  } 
  else if (average < 70) {
      grade = 'D';
  } 
  else if (average < 80) {
      grade = 'C';
  } 
  else if (average < 90) {
      grade = 'B';
  } 
  else{
      grade = 'A';
  }
  return { average, grade };
}

const { average, grade } = computeAverage();
console.log(`The average marks of the students is ${average}.`);
