let nomeDoCampeão = "Eren";
let nivelDoCampeão = 0;
let nivel; 

if (nivelDoCampeão < 1000) {
    nivel = "ferro";
} else if (nivelDoCampeão >= 1001 && nivelDoCampeão <= 2000) {
    nivel = "Bronze";
} else if (nivelDoCampeão >= 2001 && nivelDoCampeão <= 5000) {
    nivel = "Prata";
} else if (nivelDoCampeão >= 5001 && nivelDoCampeão <= 7000) {
    nivel = "Ouro";
} else if (nivelDoCampeão >= 7001 && nivelDoCampeão <= 8000) {
    nivel = "Platina";
} else if (nivelDoCampeão >= 8001 && nivelDoCampeão <= 9000) {
    nivel = "Diamante";
} else if (nivelDoCampeão >= 9001 && nivelDoCampeão <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}


console.log("O Herói de nome " + nomeDoCampeão + " está no nível de " + nivel);
