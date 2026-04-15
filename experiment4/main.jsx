function CalculateResult() {
      let numSubjects = parseInt(document.getElementById("Subjects").value);
      if (isNaN(numSubjects) || numSubjects <= 0) {
        alert("Please enter a valid number of subjects");
        return;
      }
      let total = 0;
      for (let i = 1; i <= numSubjects; i++) {
        let marks = prompt("Enter marks for subject " + i);
        // If user clicks Cancel, stop the process
        if (marks === null) {
          alert("Process cancelled.");
          return;
        }
        marks = parseInt(marks);
        if (isNaN(marks) || marks < 0) {
          alert("Invalid input, please enter numbers only.");
          return;
        }
total += marks;
      }
      let average = total / numSubjects;
      let grade;
      if (average <= 30) {
        grade = "D";
      } else if (average <= 50) {
        grade = "C";
      } else if (average <= 70) {
        grade = "B";
      } else {
        grade = "A";
      }
      let result = average >= 40 ? "Pass" : "Fail";
      document.getElementById("output").innerHTML =
        `<h3>Total Marks: ${total}</h3>
         <h3>Average Marks: ${average.toFixed(2)}</h3>
         <h3>Grade: ${grade}</h3>
         <h3>Result: ${result}</h3>`;
    }