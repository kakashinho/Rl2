//O que são funções Construtoras?
// São funções que usamos para criar múltiplos objetos semelhantes com facilidade

function Cliente(nome, telefone, email, endereco){
    this.nome = nome
    this.telefone = telefone
    this.email = email
    this.endereco = endereco

    this.getNome = function () {
        return this.nome
    }

    this.getNomeMaiusculo = function () {
        return this.nome.toUpperCase()
    }

    this.getNomeMinusculo = function () {
        return this.nome.toLowerCase()
    }

    this.setNome = function (novoNome) {
        this.nome = novoNome
    }

    this.getTelefone = function () {
        return this.telefone
    }

    this.setTelefone = function (novoTelefone) {
        this.telefone = novoTelefone
    }

    this.getEmail = function () {
        return this.email
    }

    this.getEmailMaiusculo = function () {
        return this.email.toUpperCase()
    }

    this.getEstadoMinusculo = function () {
        return this.email.toLowerCase()
    }

    this.setEmail = function (novoEmail) {
        this.email = novoEmail
    }

    this.getEndereco = function () {
        return this.endereco
    }

    this.setEndereco = function (novoEndereco) {
        this.endereco = novoEndereco
    }

    // ---------------
    // Informações do Cliente:
    // Carlos Conrado Heinz
    // ---------------
    // ---------------
    // Telefone:
    // DDD: 11
    // Número: 999999999
    // ---------------
    // Endereço:
    // Rua: Av. Paulista
    // Número: 987
    // Cidade: São Paulo
    // Estado: SP
    // ---------------
    // Definindo getter corretamente
    Object.defineProperty(this, 'descricao', {
        get: function () {
            return (
`---------------
Informações do Cliente:
${this.nome}
---------------
Telefone:
DDD: ${this.telefone.getDDD()}
Número: ${this.telefone.getNumero()}
---------------
Endereço:
Rua: ${this.endereco.getRua()}
Número: ${this.endereco.getNumero()}
Cidade: ${this.endereco.getCidade()}
Estado: ${this.endereco.getEstado()}
---------------`)
        }
    })
}

function TelefoneCelular(ddd, numero){
    this.ddd = ddd
    this.numero = numero

    this.getDDD = function (){
        return this.ddd
    }
    this.getDDDMaiusculo = function (){
        return this.ddd.toUpperCase()
    }
    this.getDDD = function (){
        return this.ddd.toLowerCase()
    }

    this.setDDD = function (novoDDD){
        return this.ddd = novoDDD
    }

    this.getNumero = function (){
        return this.numero
    }
    this.getNumeroMaiusculo = function (){
        return this.numero.toUpperCase()
    }
    this.getNumeroMinusculo = function (){
        return this.numero.toLowerCase()
    }

    this.setNumero = function (novoNumero) {
    this.numero = novoNumero
    }
}

function Endereco(estado, cidade, rua, numero) {
    this.estado = estado
    this.cidade = cidade
    this.rua = rua
    this.numero = numero

    this.getEstado = function (){
        return this.estado
    }
    
    this.getEstadoMaiusculo = function () {
        return this.estado.toUpperCase()
    }

    this.getEstadoMinusculo = function () {
        return this.estado.toLowerCase()
    }

    this.setEstado = function (novoEstado){
        this.estado = novoEstado
    }

    this.getCidade = function () {
        return this.cidade
    }

    this.getCidadeMaiusculo = function () {
        return this.cidade.toUpperCase()
    }

    this.getCidadeMinusculo = function () {
        return this.cidade.toLowerCase()
    }

    this.setCidade = function(novaCidade){
        this.cidade = novaCidade
    }

    this.getRua = function (){
        return this.rua
    }

    this.getRuaMaiusculo = function () {
        return this.rua.toUpperCase()
    }

    this.getRuaMinusculo = function () {
        return this.rua.toLowerCase()
    }

    this.setRua = function(novaRua){
        this.rua = novaRua
    }

    this.getNumero = function (){
        return this.numero
    }
    this.getNumeroMaiusculo = function (){
        return this.numero.toUpperCase()
    }
    this.getNumeroMinusculo = function (){
        return this.numero.toLowerCase()
    }

    this.setNumero = function (novoNumero){
        this.numero = novoNumero
    }

}

let telefone1 = new TelefoneCelular('11','999999999')
let endereco1 = new Endereco('SP', 'São Paulo', 'Av. Paulista', '987')
let cliente1 = new Cliente('Carlos Conrado Heinz', telefone1, 'carlos.conrado@app.com', endereco1)

/* Para isso, desenvolva uma função que receba um 
Array de clientes e devolva um outro Array, contendo 
os mesmo clientes, porém ordenados alfabeticamente pelo nome
*/

let clientes = []

clientes.push(cliente1)

function adicionarCliente(nome, telefone, email, endereco){
    clientes.push(new Cliente(nome, telefone, email, endereco))
}

adicionarCliente(
    'Ana Paula Souza',
    new TelefoneCelular('21', '988888888'),
    'ana.souza@app.com',
    new Endereco('RJ', 'Rio de Janeiro', 'Rua das Laranjeiras', '321')
)

adicionarCliente(
    'Bruno Henrique',
    new TelefoneCelular('31', '977777777'),
    'bruno.h@app.com',
    new Endereco('MG', 'Belo Horizonte', 'Av. Afonso Pena', '456')
)

function ordenar(clientes){
    let lista = clientes.slice() //criando uma cópia
    lista = lista.sort((a, b) => a.getNomeMinusculo().localeCompare(b.getNomeMinusculo()));
    // a e b representa dois clientes sendo comparado da lista e localeCompare faz comparação de string
    return lista 
}

let clientesOrdenados = ordenar(clientes);
console.log(cliente1.descricao)

// Percorrendo clientes ordenados
clientesOrdenados.forEach(cliente => {
  console.log(cliente.getNome());
});

// console.log(cliente1.getNomeMaiusculo())
// console.log(cliente1.telefone.getDDDMaiusculo())
// console.table(telefone1)
// cliente1.setNome('João')