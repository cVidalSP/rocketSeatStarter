"use strict";

// Classe em ES6 LEMBRANDO que nao existe classe de verdade, o babel faz a compilacao de codigo, trasnformando em javascript normal. E possivel ver isso no bundle.js
// class List{
//     constructor(){
//         this.data=[];
//     }
//     add(data){
//         this.data.push(data);
//         console.log(this.data);
//     }
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Heranca entre classes
// class TodoList extends List{
//     constructor(){
//         super();// chama o constructor da classe pai
//         this.usuario = "Caina";
//     }
//     mostraUsuario(){
//         console.log(this.usuario);
//     }
// }
// const MinhaLista = new TodoList();
// document.getElementById('novotodo').onclick = function(){
//     MinhaLista.add('Novo todo');
// }
// MinhaLista.mostraUsuario();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TRABALHANDO COM METODOS ESTATICOS
// class TodoList{
//     constructor(){
//         this.todos = [];
//     }
//     static addTodo(){
//         this.todos.push('Novo todo');
//         console.log(this.todos);
//     }
// }
//     //  Dara erro, pois quando se declara como estatico,
//     //o metodo nao enxerga a propria classe
// TodoList.addTodo();
// OU SEJA, metodos estaticos devem ser utilizados para realizar acoes
// para fora do sua classe  por assim dizer. Por exemplo: 
// class Matematica{
//     static soma(a,b){
//         return a + b;
//     }
// }
// console.log(Matematica.soma(1, 2));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const => valor nao pode ser reatribuido
// const e possivel "mutar"
//ex: 
// const usuario = { nome: 'Caina' };
// usuario.nome = 'Cleiton';
// console.log(usuario); // Funciona
// function teste (x){
//     let y = 2; // LET variavel de escopo ou seja, dentros das ' {}'
//                // em que foi declarado.
//     if (x > 5){
//         console.log(x, y);
//     }
// }
// teste(10);
//////////////////////////////////////////////////////////////////////////////
// // Operacoes em array
// const arr = [1,3,4,5,8,9];
// //Executa uma funcao para cada item e retorna um novo array
// const newArr = arr.map(function(item){
//     return item * 2; 
// });
// console.log(newArr);
// //Executa uma acao em detrimento do array inteiro, por exemplo a soma de todos os numeros e retorna uma variavel
// const sum = arr.reduce(function(total, next){
//     return total+next;
// })
// console.log(sum);
// //Filtra a array com os itens que correspondem a pesquisa (item % 2 === 0 ou seja, numeros pares no exemplo)
// const filter = arr.filter(function(item){
//     return item % 2 === 0;
// })
// console.log(filter);
// //Busca de dentro da array itens que correspondem a pesquisa
// const find = arr.find(function(item){
//     return item === 2;
// })
// console.log(find);
////////////////////////////////////////////////////////////////////////////////////////
//Arrow Functions
// const arr = [1,3,4,5,6];
// const newArr = arr.map(function(item){
//     return item*2;
// });
// console.log(newArr);
// const newArrArrow = arr.map(item => item *2);
// console.log(newArrArrow);
// const teste = () =>{
//     console.log('teste');
// }
// console.log(teste);
// const teste1 = () => [1, 2, 3];
// console.log(teste1());
// const teste2 = () => "teste2";
// console.log(teste2());
// const teste3 = () =>  42;
// console.log(teste3());
// const testeErro = () => { nome : "Caina"};
// console.log(testeErro()); // "{  }" definem o corpo da function. Logo deve estar dentro de um "( )", representando um return
// const teste4 = () => ({ nome : "Caina"});
// console.log(teste4()); // "{  }" definem o corpo da function. Logo deve estar dentro de um "( )", representando um return
//////////////////////////////////////////////////////////////////////////////////////////////////
// Valores padrao
// function soma(a,b){
//     return a+b;
// }
// console.log(soma(1)); // return NaN
// console.log(soma());  // return NaN
// //E possivel definir valores padrao caso nao seja fornecido
// function somaComValorPadrao( a =3 ,b = 6){
//     return a+b;
// }
// console.log(somaComValorPadrao(1)); 
// console.log(somaComValorPadrao());
// //Arrow function
// const somaArrow = (a = 3, b = 6) => a+b;
// console.log(somaComValorPadrao(1)); 
// console.log(somaComValorPadrao());
///////////////////////////////////////////////////////////////////////////////////////////////////
//Desestruturacao
var usuario = {
  nome: 'caina',
  idade: '20',
  endereco: {
    cidade: 'Ferraz de Vasconcelos',
    estado: 'SP'
  }
};

function mostraNome(_ref) {
  var nome = _ref.nome;
  console.log("Na func ".concat(nome));
}

mostraNome(usuario);
var nome = usuario.nome,
    idade = usuario.idade,
    _usuario$endereco = usuario.endereco,
    cidade = _usuario$endereco.cidade,
    estado = _usuario$endereco.estado;
console.log("Nome: ".concat(nome, ", ").concat(idade, " anos."));
console.log("Cidade: ".concat(cidade, " - ").concat(estado));
