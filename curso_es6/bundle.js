"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
// const usuario = {
//     nome:'Caina',
//     idade: '20',
//     empresa: 'xd'
// };
// // REST
// const { nome, ...resto } = usuario;
// console.log(nome);
// console.log(resto);
// const arr = [ 1, 2, 3, 4 ];
// const [ a, b, ...c ] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// function soma(...params){
//     return params.reduce((total, next) => total + next);
// }
// console.log(soma(1, 4, 7, 8));
// // SPREAD
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);
// const usuario1={
//     nome: 'caina',
//     idade: '20',
// };
// const usuario2 = { ...usuario1, nome:'Gabriel' };
// console.log(usuario2);
/////////////////////////////////////////////////////////////////////////////////
// Template literals
//Usar variaveis dentro de strings a partir do es6
// const nome = "Caina";
// const idade = 20;
// console.log("Meu nome eh " + nome + " e tenho " + idade + " anos.");
// console.log(`Meu nome eh ${nome} e tenho ${idade} anos.`);
/////////////////////////////////////////////////////////////////////////////////
// Object Short Syntax
// const nome = "Caina";
// const idade = 20;
// const usuario = {
//     nome: nome,
//     idade: idade,
//     empresa: "XD",
// }
// const usuarioComShortSyntax = {
//     nome,// quando o nome da propriedade e igual ao nome da variavel, e possivel esse tipo de codigo
//     idade,
//     empresa: "XD",
// }
// console.log(usuario);
// console.log(usuarioComShortSyntax);
///////////////////////////////////////////////////////////////////////////////////////
// Exercicio 1
var User =
/*#__PURE__*/
function () {
  function User(Email, Senha) {
    _classCallCheck(this, User);

    this.email = Email, this.senha = Senha, this.admin = false;
  }

  _createClass(User, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin ? true : false;
    }
  }]);

  return User;
}();

var Admin =
/*#__PURE__*/
function (_User) {
  _inherits(Admin, _User);

  function Admin(Email, Senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, Email, Senha));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(User);

var usuario = new User('teste@gmail.com', 123);
var admin = new Admin('teste2@gmail.com', 321);
console.log("usuario " + usuario.isAdmin());
console.log("admin " + admin.isAdmin()); // Exercicio 2

var usuarios = [{
  nome: 'Caina',
  idade: 20,
  empresa: 'xd'
}, {
  nome: 'Eduardo',
  idade: 15,
  empresa: 'xd'
}, {
  nome: 'Rafael',
  idade: 30,
  empresa: 'gg'
}];
var idades = usuarios.map(function (data) {
  return data.idade;
});
console.log(idades);
var xd = usuarios.filter(function (data) {
  return data.empresa == 'xd' ? data : null;
});
console.log(xd);
var google = usuarios.find(function (data) {
  return data.empresa == 'Google' ? data : null;
});
console.log(google);
var menor50 = usuarios.map(function (data) {
  data.idade *= 2;
  return data;
}).filter(function (data) {
  return data.idade <= 50 ? data : null;
});
console.log(menor50);
