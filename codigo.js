//Declaracion de variables
let jugadas = prompt("Ingresa el numero de jugadas!");
let eleccion;
let jugadaPC;
let resultado;
let contEmpate = 0;
let contVictoria = 0;
let contDerrota = 0;
//con la funcion verifica convierto el numero random de jugadaPC en un string para luego compararlo con mi jugada
function retornaJugadaPc() {
    jugadaPC = Math.floor(Math.random() * 3)
    if (jugadaPC === 0) {
        jugadaPC = "tijera"
    } else if (jugadaPC === 1) {
        jugadaPC = "papel"
    } else if (jugadaPC === 2) {
        jugadaPC = "piedra"
    }
    return jugadaPC
}
//aqui comienza el ciclo segun lo indicado para la variblea jugadas
for (i = 0; i < jugadas; i++) {
    let eleccion = prompt("Elige tu jugada (piedra, papel o tijera)").toLowerCase().trim(); //Con .toLowerCase() convierto mayusculas a minusculas
    let jugadaPC = retornaJugadaPc(); //declaro la variable jugadaPC que tenga el contenido de la funcion verifica()
    //condiciones para el resultado
    if (eleccion === jugadaPC) {
        resultado = "Empate"
        contEmpate += 1;
    } else if (eleccion === "tijera" && jugadaPC === "papel" ||
        eleccion === "piedra" && jugadaPC === "tijera" ||
        eleccion === "papel" && jugadaPC === "piedra") {
        resultado = "Winner!!! Haz Ganado!"
        contVictoria += 1;
    } else if (eleccion === "tijera" && jugadaPC === "piedra" ||
        eleccion === "piedra" && jugadaPC === "papel" ||
        eleccion === "papel" && jugadaPC === "tijera") {
        resultado = "Ha ganado la maquina :("
        contDerrota += 1;
    } else {
        alert("Opcion no valida, Intenta de nuevo")
        break
    }
    alert(resultado + " El pc ha elegido: " + jugadaPC)
    document.write("<br>")
    document.write("Jugada: " + (i + 1) + " - Resultado: " + resultado + " - Tu jugada fue: " + eleccion + " - La Jugada del PC fue: " + jugadaPC)
}
//resultado total
if (contVictoria === contDerrota) {
    document.write("<h2>EMPATE!!!</h2>")
    imprimeResultado(contVictoria, contDerrota, contEmpate);
} else if (contVictoria > contDerrota) {
    document.write("<h2>FELICIDADES HAS GANADO!!!</h2>")
    imprimeResultado(contVictoria, contDerrota, contEmpate);
} else {
    document.write("<h2>HAS PERDIDO CONTRA EL PC!!! BUUU!!!</h2>")
    imprimeResultado(contVictoria, contDerrota, contEmpate);
}

//funcion que imprime cantidad de victorias, derrotas y empates
function imprimeResultado(victorias, derrotas, empates) {
    document.write("<br>")
    document.write("Victorias: " + victorias)
    document.write("<br>")
    document.write("Derrotas: " + derrotas)
    document.write("<br>")
    document.write("Empate: " + empates)
    document.write("<br>")
}