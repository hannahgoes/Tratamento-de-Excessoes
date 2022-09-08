let frutas = ["banana", "maça", "uva"]

try{
    if(!frutas.includes("melacia")){
    throw "Erro"
    }
} catch (error) {
    console.log(error)
}