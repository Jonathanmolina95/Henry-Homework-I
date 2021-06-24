function numeroParImpar (num) {
    //Obtiene un numero como paramtero
    //evalúa si es positivo o negativo
    //devuelve falso en caso de ser cero
    if (num === 0){
        return false;
    } else if (num > 0){
        return "Es positivo"
    } else {
        return "Es negativo"
    }
}