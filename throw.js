let x; 

x = 11; 

try {
    
    if(x <= 10){
        console.log("Número aceito")
    }else{
        throw "Erro! número não aceito"
    }

} catch (erro) {
    console.log(erro)

}