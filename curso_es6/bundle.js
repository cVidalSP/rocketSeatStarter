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
// class User {
//     constructor(Email, Senha){
//         this.email = Email,
//         this.senha = Senha,
//         this.admin = false
//     }
//     isAdmin(){
//         return(this.admin? true : false)
//     }
// }
// class Admin extends User{
//     constructor(Email, Senha){
//         super(Email, Senha);
//         this.admin = true;
//     }
// }
// const usuario = new User('teste@gmail.com', 123);
// const admin = new Admin('teste2@gmail.com', 321);
// console.log("usuario " + usuario.isAdmin());
// console.log("admin " + admin.isAdmin());
////////////////////////////////////////////////////////////////////////
// // Exercicio 2
// const usuarios = [
//     { nome: 'Caina', idade: 20, empresa: 'xd' },
//     { nome: 'Eduardo', idade: 15, empresa: 'xd' },
//     { nome: 'Rafael', idade: 30, empresa: 'gg' },
// ];
// const idades = usuarios.map((data) =>{
//     return(data.idade);
// })
// console.log(idades);
// const xd = usuarios.filter((data) => {
//     return(data.empresa == 'xd'? data: null);
// })
// console.log(xd);
// const google = usuarios.find((data)=>{
//     return(data.empresa == 'Google'? data : null);
// });
// console.log(google);
// const menor50 = usuarios.map((data) => {
//     data.idade*=2;
//     return(data);
// }).filter((data) =>{
//     return(data.idade <=50? data : null);
// });
// console.log(menor50);
////////////////////////////////////////////////////////////////////////
// Exercicio 3
// const arr = [1, 2, 3, 4, 5];
// const itens = arr.map((item) =>item +10);
// console.log(itens); 
// const usuario = { nome: 'Diego', idade: 23 };
// const idade = (object) => object.idade;
// console.log(idade(usuario));
// const nome = "Diego";
// const idade = 23;
// const mostraUsuario = (nome = 'Diego', idade = 18) =>{
//     return ( nome, idade );
// }
// console.log(mostraUsuario(nome, idade));
// console.log(mostraUsuario(nome));
// const promise = function() {
//     return new Promise(function(resolve,reject){
//         return resolve();
//     })
// }
// const promise1 = () =>{
//     return new Promise((resolve, reject) =>{
//         return resolve();
//     })
// }
// console.log(promise());
// console.log(promise1());
/////////////////////////////////////////////////////////////////////////
// Exercicio 4
// const empresa = {
//     nome: 'Rocketseat',
//     idade: '3',
//     endereco: {
//         cidade: 'Rio do Sul',
//         estado: 'SC',
//     }
// };
// const { nome, endereco: { cidade, estado } } = empresa;
// console.log(nome);
// console.log(cidade);
// console.log(estado);
// function mostraInfo({ nome, idade }){
//     return `${nome} tem ${idade} anos.`
// }
// console.log(mostraInfo(empresa));
///////////////////////////////////////////////////////////////////////
// Exercicio 5
// const arr = [1, 2, 3, 4, 5, 6];
// const [ x, ...y ] = arr;
// console.log(x);
// console.log(y);
// const soma = (...params) => {
//     return params.reduce((total, next) => total + next);
// }
// console.log(soma(2, 4 ,6, 8, 10));
// const usuario = {
//     nome: 'Diego',
//     idade: 23,
//     endereco: {
//         cidade: 'Rio do Sul',
//         uf: 'SC',
//         pais: 'Brasil',
//     }
// };
// const usuario2 = { ...usuario, nome : 'Gabriel' }
// const usuario3 = { ...usuario, endereco: { ...usuario.endereco, cidade : 'Lontras' } }
// console.log(usuario2);
// console.log(usuario3);
/////////////////////////////////////////////////////////////////////////////////
// Exercicio 6
// const usuario = 'Diego';
// const idade = 23;
// console.log(`O usuario ${usuario} possui ${idade} anos.`);
//////////////////////////////////////////////////////////////////////////////////
// Exercicio 7
var nome = 'Diego';
var idade = 23;
var usuario = {
  nome: nome,
  idade: idade,
  cidade: 'Rio do Sul'
};
console.log(usuario);
