function startCountdown() {
  let num = document.getElementById("numberInput").value;
  let display = document.getElementById("display");

  let i = num;

  let timer = setInterval(function() {
    display.innerText = i;
    i--;

    if (i < 0) {
      clearInterval(timer);
      display.innerText = "Done!";
    }
  }, 1000);
}

