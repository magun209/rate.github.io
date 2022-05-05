console.log("hsa");

let num;

numberRate1 = () => {
    num = document.getElementById("number1").innerHTML;
    document.getElementById("number1").style.backgroundColor = "var(--Orange)";
    document.getElementById("number2").style.backgroundColor = "var(--Dark-Blue)";
    document.getElementById("number3").style.backgroundColor = "var(--Dark-Blue)";
    document.getElementById("number4").style.backgroundColor = "var(--Dark-Blue)";
    document.getElementById("number5").style.backgroundColor = "var(--Dark-Blue)";
} 

numberRate2 = () => {
    num = document.getElementById("number2").innerHTML;
    document.getElementById("number2").style.backgroundColor = "var(--Orange)";
    document.getElementById("number1").style.backgroundColor = "var(--Dark-Blue)";
    document.getElementById("number3").style.backgroundColor = "var(--Dark-Blue)";
    document.getElementById("number4").style.backgroundColor = "var(--Dark-Blue)";
    document.getElementById("number5").style.backgroundColor = "var(--Dark-Blue)";
} 

numberRate3 = () => {
    num = document.getElementById("number3").innerHTML;
    document.getElementById("number3").style.backgroundColor = "var(--Orange)";
    document.getElementById("number1").style.backgroundColor = "var(--Dark-Blue)";
    document.getElementById("number2").style.backgroundColor = "var(--Dark-Blue)";
    document.getElementById("number4").style.backgroundColor = "var(--Dark-Blue)";
    document.getElementById("number5").style.backgroundColor = "var(--Dark-Blue)";
} 

numberRate4 = () => {
    num = document.getElementById("number4").innerHTML;
    document.getElementById("number4").style.backgroundColor = "var(--Orange)";
    document.getElementById("number1").style.backgroundColor = "var(--Dark-Blue)";
    document.getElementById("number2").style.backgroundColor = "var(--Dark-Blue)";
    document.getElementById("number3").style.backgroundColor = "var(--Dark-Blue)";
    document.getElementById("number5").style.backgroundColor = "var(--Dark-Blue)";
} 

numberRate5 = () => {
    num = document.getElementById("number5").innerHTML;
    document.getElementById("number5").style.backgroundColor = "var(--Orange)";
    document.getElementById("number1").style.backgroundColor = "var(--Dark-Blue)";
    document.getElementById("number2").style.backgroundColor = "var(--Dark-Blue)";
    document.getElementById("number3").style.backgroundColor = "var(--Dark-Blue)";
    document.getElementById("number4").style.backgroundColor = "var(--Dark-Blue)";
} 

submit = () => {
    if (num === undefined) {
    } else {
    document.getElementById("first-card").style.display = "none";
    document.getElementById("second-card").style.display = "flex";
    document.getElementById("number-rate-res").innerHTML = num;
}
}