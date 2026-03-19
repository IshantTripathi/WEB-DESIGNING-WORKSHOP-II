// Select elements
const heading = document.querySelector("h2");
const input = document.querySelector("input");
const para = document.querySelector("p");
const container = document.querySelector(".container");

// Change Heading
document.getElementById("chngheading").addEventListener("click", () => {
    if (input.value.trim() !== "") {
        heading.textContent = input.value;
    } else {
        alert("Please enter a heading!");
    }
});

// Change Font
document.getElementById("chngfont").addEventListener("click", () => {
    heading.style.fontFamily = "Courier New, monospace";
    heading.style.color = "blue";
});

// Change Background
document.getElementById("chngbg").addEventListener("click", () => {
    container.style.backgroundColor =
        container.style.backgroundColor === "lightyellow" ? "white" : "lightyellow";
});

// Show/Hide Paragraph
document.getElementById("chngpara").addEventListener("click", () => {
    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
});

// Reset
document.getElementById("reset").addEventListener("click", () => {
    heading.textContent = "Welocome to JAVA Script Lab";
    heading.style.fontFamily = "";
    heading.style.color = "";
    container.style.backgroundColor = "";
    para.style.display = "block";
    input.value = "";
});