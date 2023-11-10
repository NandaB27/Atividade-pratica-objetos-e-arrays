/*Considere o seguinte array:*/
const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99,
1290.00, 15000.00]

/*a. Imprima no console o índice do primeiro salário maior que 7.500 utilizando o findIndex
b. Crie uma nova lista filtrada com os salários que são maior que 8.000 utilizando o filter*/

const maiores = salarios.findIndex(function(salariomaior) {
    return salariomaior > 7500
    
})

console.log(maiores)

/*James estava criando uma array com as cores do arco-íris, e ele esqueceu algumas cores. As cores padrão de um arco-íris são normalmente listadas nesta ordem:
const rainbow = ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul","Roxo"];

mas James tinha isto:*/

const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"]

/*Usando somente o método splice insira as cores que faltam na array e remova a cor "Preto", seguindo estes passos:

//a. Remova "Preto"
//b. Adicione "Amarelo" e "Verde"
//c. Adicione "Roxo"*/

rainbow.splice(2,1)
rainbow.splice(2,0, "Amarelo", "Verde")
rainbow.splice(5,0, "Roxo")
console.log(rainbow)

/*Crie um cadastro de pessoas onde o usuário informe o nome, idade e se está trabalhando ou não, se a pessoa estiver trabalhando
pergunte para ele o salário que está ganhando. Para cada pessoa cadastrada, pergunte ao usuário se ele deseja continuar cadastrando ou não. No final, mostre as pessoas que estão
desempregadas, as pessoas que estão empregadas separadas pelas que ganham mais que 2500 e menos que 2500.

Exemplo de resultado:
Pessoas desempregadas:
Nome: Alessandro, Idade: 28
Nome: Alessandro, Idade: 28

Pessoas empregadas com salários menores que 2500:
Nome: Alessandro, Idade: 28, Salário: 1500
Nome: Alessandro, Idade: 28, Salário: 2400

Pessoas empregadas com salários maiores que 2500:
Nome: Alessandro, Idade: 28, Salário: 2700
Nome: Alessandro, Idade: 28, Salário: 3000*/


const pessoasdesempregadas = []
const salariosmenores = []
const salariosmaiores = []

let continuar = true
do {
    const nome = prompt('Insira um nome.')
    const idade = Number(prompt('Insira uma idade'))
    const trabalho = confirm('Você trabalha atualmente?')

    if (trabalho == false) {
        pessoasdesempregadas.push(nome, idade)
    } else {
        const salario = Number(prompt('Qual é o seu salario?'))
        if (salario < 2500) {
            salariosmenores.push(nome, idade, salario)
        } else {
            salariosmaiores.push(nome, idade, salario)
        }
    } 
    continuar = confirm('Deseja continuar inserindo valores?')
} while(continuar)

if (pessoasdesempregadas.length > 0) console.log(`Pessoas desempregadas: 
Nome: ${pessoasdesempregadas[0]} Idade: ${pessoasdesempregadas[1]}`)

if (salariosmenores.length > 0) console.log(`Pessoas empregadas com salários menores que 2500
Nome: ${salariosmenores[0]} Idade: ${salariosmenores[1]} Salário: $${salariosmenores[2]}`) 

if (salariosmaiores.length > 0) { console.log(`Pessoas empregadas com salários maiores que 2500
Nome: ${salariosmaiores[0]} Idade: ${salariosmaiores[1]} Salário: $${salariosmaiores[2]}`) } else {
    console.log(`Faltaram informações e ou não respondeu.`)
}