function calcular() {
    let a =parseInt(document.getElementById("a").value);
    let b = a % 2;
    
if (b == 0){
    document.getElementById("resultado").innerHTML =("tu numero es par");
}
else{
    document.getElementById("resultado").innerHTML =("tu nnumero es impar");
}
}



