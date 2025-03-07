function functionif() {
    let hora
    hora = parseFloat(document.getElementById("a").value, 10);
        if (hora > 6 && hora <= 11){
            document.getElementById("resultado").innerHTMLS = "Buenos dias";
        }
        if (hora > 12 && hora <= 21){
            document.getElementById("resultado").innerHTMLS = "buenas tardes";
        }
        if ((hora > 21 && hora <= 24) || (hora > 0 && hora < 7)){
            document.getElementById("resultado").innerHTMLS = "buenas noches";
        }
        if (hora > 24){
            document.getElementById("resultado").innerHTMLS = "error";
        }
    }
        function functionswitch() {
    
            let hora
            hora = parseFloat(document.getElementById("a").value, 10);
    switch(hora){
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            document.getElementById("resultado").innierHTML = "buenos dias"        
        break; 
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
            document.getElementById("resultado").innierHTML = "buenas tardes"
        break;
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 22:
        case 23:
        case 24:
            document.getElementById("resultado").innerHTML = "buenas noches"
        break;
        default:
            document.getElementById("resultado").innierHTML = "error"
    }
}


