function calcular(){
    let nota = parseFloat(document.getElementById("a").value, 10);
    if (nota >= 0 && nota <= 10){
        //Nota válida
        document.getElementById("resultado").innerHTML = "La nota es valida";
            if (nota >= 0 && nota < 5){
                document.getElementById("resultado").innerHTML = "suspenso"
            }
            if(nota >= 5 && nota < 7){
                document.getElementById("resultado").innerHTML="suficiente"
            }
            if (nota >= 7 && nota < 8){
                document.getElementById("resultado").innerHTML = "BIEN"
            }
            if (nota <=10 && nota >= 8){
                document.getElementById("resultado").innerHTML= "excelente"
            }
    }
    else{
        document.getElementById("resultado").innerHTML = "Esta nota no es valida";
    }
}


