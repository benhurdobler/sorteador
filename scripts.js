function sorteador(){

    const min = Math.ceil(parseFloat(document.querySelector(".input-min").value))
    const max = Math.floor(parseFloat(document.querySelector(".input-max").value))
    const drawnNumber = document.querySelector(".result")

    if(min >= max){
        alert("O valor minimo deve ser MENOR que o valor máximo")
    }else{


    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    drawnNumber.value = result

}
}

