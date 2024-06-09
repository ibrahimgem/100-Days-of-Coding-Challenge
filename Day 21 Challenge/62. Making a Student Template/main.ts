// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

// Explain & TIP: This blueprint, called an interface, helps ensure all students have the same kind of information, making your code more organized.


interface Student {
    id: number;
    studentName: string;
    class: number;
    subjects: string[];
}

let student: Student = {
    id: 1,
    studentName: "Ayaz",
    class: 7,
    subjects: ["Math", "Physics", "Chemistry"]
};

console.log(student);