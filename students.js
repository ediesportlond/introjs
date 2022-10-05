const students = require("./students.json");

//display all the students first names one at a time, one per line.
function showStudents(studentList) {
    for (student of students) {
        console.log(student.firstName);
    }
}

showStudents(students);