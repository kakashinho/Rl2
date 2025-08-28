# 📝 RL2: Sistema de Cadastro de Clientes

## 📚 Descrição da Atividade

Este projeto foi desenvolvido como parte de uma atividade prática de JavaScript, com foco no desenvolvimento de **funções construtoras, encapsulamento de dados** e **manipulação de objetos**. A proposta simula um sistema de cadastro de clientes, incluindo informações de contato e endereço.

Durante a atividade, foram aplicados os seguintes conceitos:

- Funções construtoras
- Encapsulamento com variáveis privadas
- Métodos `get` e `set` para acesso controlado
- Métodos para conversão de dados para caixa alta/baixa
- Geração de descrição formatada de objetos
- Ordenação de clientes em arrays

## 🎯 Objetivo

O objetivo principal foi construir uma estrutura orientada a objetos que representasse clientes com seus respectivos:

- Nome
- Telefone celular (com DDD e número)
- Endereço (estado, cidade, rua e número)

O sistema deveria:

1. Criar objetos `Cliente`, `TelefoneCelular` e `Endereco` com **funções construtoras**.
2. Implementar métodos de acesso (`get`) e modificação (`set`) para cada atributo.
3. Criar métodos que retornassem os dados em **caixa alta** e **caixa baixa** (para atributos do tipo texto).
4. Gerar uma **descrição formatada** do cliente, incluindo os dados do telefone e endereço.
5. Criar uma função que **ordenasse um array de clientes** alfabeticamente pelo nome.

## 💻 Exemplos de Uso

```javascript
let telefone = new TelefoneCelular('11', '999999999');
let endereco = new Endereco('SP', 'São Paulo', 'Av. Paulista', '987');
let cliente = new Cliente('Carlos Conrado Heinz', telefone, 'carlos.conrado@app.com', endereco);

console.log(cliente.descricao);

## 📤 Saída esperada:
---------------
Informações do Cliente:
Carlos Conrado Heinz
---------------
---------------
Telefone:
DDD: 11
Número: 999999999
---------------
Endereço:
Rua: Av. Paulista
Número: 987
Cidade: São Paulo
Estado: SP
---------------

## ⚙️ ordenação de clientes por nome.
