function clr() {
  document.getElementById("result").value = "";
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
}

function solve(val) {
  var a = Number(document.getElementById("a").value);
  var b = Number(document.getElementById("b").value);
  var result = 0;
  switch (val) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "/":
      result = a / b;
      break;
    case "*":
      result = a * b;
      break;
    default:
      result = "Error";
  }
  document.getElementById("result").value = result;
}