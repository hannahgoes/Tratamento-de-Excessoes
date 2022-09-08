//forçando erro para aprender validar o tamanho de um campo
let cpf = "0000000000"

//método para capturar o tamanho da string 1
//console.log(cpf.length)

//método para capturar o tamanho da string 2
let array = Array.from(cpf)
//console.log(array.length)

try {
    
    if(cpf.length != 11){
        throw "Tamanho do CPF inválido"
    }else{
        console.log("Tamanho do CPF válido")
    }

}catch (erro) {
    console.log(erro)
}