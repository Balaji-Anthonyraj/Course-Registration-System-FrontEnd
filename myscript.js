function showCourses(){
    fetch("http://localhost:8080/courses") //API End point
    .then((response) => response.json())
    .then((courses) => {
        const dataTable = document.getElementById("coursetable")

        courses.forEach(course => {
            var row = `<tr>
            <td>${course.courseId}</td>
            <td>${course.courseName}</td>
            <td>${course.trainer}</td>
            <td>${course.durationInWeeks}</td>
            </tr>`

            dataTable.innerHTML+=row;
        });
    });
}

function showEnrolledStudents(){
    fetch("http://localhost:8080/courses/enrolled") //API End point
    .then((response) => response.json()) //Http response into json object
    .then((students) => {
        const dataTable = document.getElementById("enrolledtable")

        students.forEach(student => {
            var row = `<tr>
            <td>${student.name}</td>
            <td>${student.emailId}</td>
            <td>${student.courseName}</td>
            </tr>`

            dataTable.innerHTML+=row;
        });
    });
}