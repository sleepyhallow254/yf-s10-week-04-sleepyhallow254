let students = [];

function addStudent() {
    let name = document.getElementById("name").value;
    let score = document.getElementById("score").value;

    if (name === "" || score === "") {
        alert("Fill all fields");
        return;
    }

    let student = {
        name: name,
        score: Number(score)
    };

    students.push(student);

    displayStudents();
    calculateStats();
}

function displayStudents() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    students.forEach(student => {
        let li = document.createElement("li");
        li.textContent = `${student.name} - ${student.score}`;
        list.appendChild(li);
    });
}

function calculateStats() {
    let total = students.reduce((sum, s) => sum + s.score, 0);
    let avg = total / students.length;

    document.getElementById("average").textContent =
        "Average: " + avg.toFixed(2);

    let scores = students.map(s => s.score);

    document.getElementById("highest").textContent =
        "Highest: " + Math.max(...scores);

    document.getElementById("lowest").textContent =
        "Lowest: " + Math.min(...scores);
}