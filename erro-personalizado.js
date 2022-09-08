//criando uma classe de erro customizado herdando da classe Error
class ErroFormulario extends Error {
    //construtor de objeto da classe Erroformulario
    constructor(message){
        //recebendo e sobreescrevendo a propriedade message com a mensagem de erro externa
        super(message)

        //definindo o valor da propriedade name do objeto da classe ErrorFormulario
        this.name = "ErroFormulario"
    }
}

try {
    
    let nome = "Hannah"
    let idade = 24
    let profissao 

    if(!nome || idade == null || profissao == null){
        
        //criando novo objeto da classe ErrorFormulario, passando uma mensagem personalizada
        let erro = new ErroFormulario("Campos em branco não são permitidos")
        //lançando o erro para o catch
        throw erro
    
    }else{
        console.log("Usuário válido")
    }
//recebendo o erro do throw
} catch (error) {
    //imprimindo o erro
    console.log(error)
}