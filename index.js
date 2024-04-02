// Function that grades based on the marks
function getGrade(marks) {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 50 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}

// Function ptompting the user for input
function promptForMarks() {
    let marks = parseFloat(prompt("Enter the student's marks (between 0 and 100):"));
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Invalid input. Marks must be between 0 and 100.");
        promptForMarks(); // Recursive call to prompt again
    } else {
        let grade = getGrade(marks);
        alert("The grade for marks " + marks + " is: " + grade);
    }
}

// Call function to start program
promptForMarks();