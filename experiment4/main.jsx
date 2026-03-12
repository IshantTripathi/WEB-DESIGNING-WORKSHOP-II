function calculateResult(){

let subjects = document.getElementById("subjects").value;

subjects = parseInt(subjects);

if(subjects <= 0 || isNaN(subjects)){
alert("Please enter valid number of subjects");
return;
}

let total = 0;

for(let i=1;i<=subjects;i++){

let marks = prompt("Enter marks for Subject " + i);

marks = parseFloat(marks);

if(isNaN(marks) || marks < 0 || marks > 100){

alert("Enter valid marks between 0-100");
i--;
continue;

}

total = total + marks;

}

let average = total / subjects;

let grade;
let result;

if(average >= 90){
grade = "A";
result = "PASS";
}

else if(average >= 70){
grade = "B";
result = "PASS";
}

else if(average >= 50){
grade = "C";
result = "PASS";
}

else if(average >= 33){
grade = "D";
result = "PASS";
}

else{
grade = "F";
result = "FAIL";
}

document.getElementById("total").innerHTML = "Total Marks: " + total;

document.getElementById("average").innerHTML = "Average Marks: " + average.toFixed(2);

document.getElementById("grade").innerHTML = "Grade: " + grade;

document.getElementById("result").innerHTML = "Result: " + result;

}