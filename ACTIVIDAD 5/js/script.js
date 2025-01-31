function calcular() {
 let a =parseInt(document.getElementById("a").value);
 let b =parseInt(document.getElementById("b").value);
 document.getElementById("resultado").innerHTML ="El primer numero es:" + a + "<br>El segundo numero es: " + b + "<br>La suma es: " + (a+b) + "<br>La resta es " + (a-b) + "<br>la multiplicacion es " + (a*b) + "<br>La division es " + (a/b) + "<br>El resto es " + (a%b) +"";
}



