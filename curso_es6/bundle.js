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
// Operacoes em array
var arr = [1, 3, 4, 5, 8, 9]; //Executa uma funcao para cada item e retorna um novo array

var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr); //Executa uma acao em detrimento do array inteiro, por exemplo a soma de todos os numeros e retorna uma variavel

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); //Filtra a array com os itens que correspondem a pesquisa (item % 2 === 0 ou seja, numeros pares no exemplo)

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); //Busca de dentro da array itens que correspondem a pesquisa

var find = arr.find(function (item) {
  return item === 2;
});
console.log(find);
