"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
// const usuario ={
//     nome: 'caina',
//     idade: '20',
//     endereco:{
//         cidade: 'Ferraz de Vasconcelos',
//         estado: 'SP',
//     },
// };
// function mostraNome({ nome }){
//     console.log(`Na func ${nome}`);
// }
// mostraNome(usuario);
// const { nome, idade, endereco: {cidade, estado} } = usuario;
// console.log(`Nome: ${nome}, ${idade} anos.`);
// console.log(`Cidade: ${cidade} - ${estado}`);
/////////////////////////////////////////////////////////////////////////////////////
// Operadores rest/spread
var usuario = {
  nome: 'Caina',
  idade: '20',
  empresa: 'xd'
}; // REST

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]);

console.log(nome);
console.log(resto);
var arr = [1, 2, 3, 4];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(a);
console.log(b);
console.log(c);

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 4, 7, 8)); // SPREAD

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3);
var usuario1 = {
  nome: 'caina',
  idade: '20'
};

var usuario2 = _objectSpread({}, usuario1, {
  nome: 'Gabriel'
});

console.log(usuario2);
