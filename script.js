function ShowCourses() {
    fetch("https://backend-deploy-1-0pp6.onrender.com/course")
    .then((response) => response.json())
    .then((courses) => {
        const datatable = document.getElementById("coursetable");
        datatable.innerHTML = ""; // optional: clear existing rows

        courses.forEach(course => {
            const row = `
                <tr>
                    <td>${course.coursId}</td>
                    <td>${course.courseName}</td>
                    <td>${course.trainer}</td>
                    <td>${course.duration}</td>
                </tr>
            `;
            datatable.innerHTML += row;
        });
    });
}

function EndrolledStundets() {
    fetch("https://backend-deploy-1-0pp6.onrender.com/enrolled")
    .then((response) => response.json())
    .then((students) => {
        const datatable = document.getElementById("stundenttable");
        datatable.innerHTML = ""; // optional: clear existing rows

        students.forEach(student => {
            const row = `
                <tr>
                    <td>${student.name}</td>
                    <td>${student.emailId}</td>
                    <td>${student.corsName}</td>
                    
                </tr>
            `;
            datatable.innerHTML += row;
        });
    });
}
