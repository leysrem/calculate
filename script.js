function Calcul(id){

    const value1 = +document.getElementById("value1").value;
    const value2 = +document.getElementById("value2").value;

    if(id === "+") {
        document.getElementById("result").textContent = "La somme est : " + (value1 + value2);
    } else if (id === "-") {
        document.getElementById("result").textContent = "La somme est : " + (value1 - value2);
    } else if (id === "/") {
        document.getElementById("result").textContent = "La somme est : " + (value1 / value2);
    } else if (id === "*") {
        document.getElementById("result").textContent = "La somme est : " + (value1 * value2);
    }
}



