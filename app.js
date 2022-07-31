let n = Number(prompt("ingrese la cantidad de primeros numeros primos que desea hallar"))
let aux = 0
let numero = 0
    while(aux < n) { 
     let bool = true
        for(let i=0; i<numero; i++){ 
            if((numero%i)==0 && (i!=1)){
                bool = false
            }
        }

        if(bool == true){
            aux++
            console.log(numero)
        }
        numero++
    }

