/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.soma = soma;\n\nfunction soma(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./funcoes.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _funcoes = __webpack_require__(/*! ./funcoes */ \"./funcoes.js\");\n\n// Classe em ES6 LEMBRANDO que nao existe classe de verdade, o babel faz a compilacao de codigo, trasnformando em javascript normal. E possivel ver isso no bundle.js\n// class List{\n//     constructor(){\n//         this.data=[];\n//     }\n//     add(data){\n//         this.data.push(data);\n//         console.log(this.data);\n//     }\n// }\n//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n// Heranca entre classes\n// class TodoList extends List{\n//     constructor(){\n//         super();// chama o constructor da classe pai\n//         this.usuario = \"Caina\";\n//     }\n//     mostraUsuario(){\n//         console.log(this.usuario);\n//     }\n// }\n// const MinhaLista = new TodoList();\n// document.getElementById('novotodo').onclick = function(){\n//     MinhaLista.add('Novo todo');\n// }\n// MinhaLista.mostraUsuario();\n//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n// TRABALHANDO COM METODOS ESTATICOS\n// class TodoList{\n//     constructor(){\n//         this.todos = [];\n//     }\n//     static addTodo(){\n//         this.todos.push('Novo todo');\n//         console.log(this.todos);\n//     }\n// }\n//     //  Dara erro, pois quando se declara como estatico,\n//     //o metodo nao enxerga a propria classe\n// TodoList.addTodo();\n// OU SEJA, metodos estaticos devem ser utilizados para realizar acoes\n// para fora do sua classe  por assim dizer. Por exemplo: \n// class Matematica{\n//     static soma(a,b){\n//         return a + b;\n//     }\n// }\n// console.log(Matematica.soma(1, 2));\n//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n// const => valor nao pode ser reatribuido\n// const e possivel \"mutar\"\n//ex: \n// const usuario = { nome: 'Caina' };\n// usuario.nome = 'Cleiton';\n// console.log(usuario); // Funciona\n// function teste (x){\n//     let y = 2; // LET variavel de escopo ou seja, dentros das ' {}'\n//                // em que foi declarado.\n//     if (x > 5){\n//         console.log(x, y);\n//     }\n// }\n// teste(10);\n//////////////////////////////////////////////////////////////////////////////\n// // Operacoes em array\n// const arr = [1,3,4,5,8,9];\n// //Executa uma funcao para cada item e retorna um novo array\n// const newArr = arr.map(function(item){\n//     return item * 2; \n// });\n// console.log(newArr);\n// //Executa uma acao em detrimento do array inteiro, por exemplo a soma de todos os numeros e retorna uma variavel\n// const sum = arr.reduce(function(total, next){\n//     return total+next;\n// })\n// console.log(sum);\n// //Filtra a array com os itens que correspondem a pesquisa (item % 2 === 0 ou seja, numeros pares no exemplo)\n// const filter = arr.filter(function(item){\n//     return item % 2 === 0;\n// })\n// console.log(filter);\n// //Busca de dentro da array itens que correspondem a pesquisa\n// const find = arr.find(function(item){\n//     return item === 2;\n// })\n// console.log(find);\n////////////////////////////////////////////////////////////////////////////////////////\n//Arrow Functions\n// const arr = [1,3,4,5,6];\n// const newArr = arr.map(function(item){\n//     return item*2;\n// });\n// console.log(newArr);\n// const newArrArrow = arr.map(item => item *2);\n// console.log(newArrArrow);\n// const teste = () =>{\n//     console.log('teste');\n// }\n// console.log(teste);\n// const teste1 = () => [1, 2, 3];\n// console.log(teste1());\n// const teste2 = () => \"teste2\";\n// console.log(teste2());\n// const teste3 = () =>  42;\n// console.log(teste3());\n// const testeErro = () => { nome : \"Caina\"};\n// console.log(testeErro()); // \"{  }\" definem o corpo da function. Logo deve estar dentro de um \"( )\", representando um return\n// const teste4 = () => ({ nome : \"Caina\"});\n// console.log(teste4()); // \"{  }\" definem o corpo da function. Logo deve estar dentro de um \"( )\", representando um return\n//////////////////////////////////////////////////////////////////////////////////////////////////\n// Valores padrao\n// function soma(a,b){\n//     return a+b;\n// }\n// console.log(soma(1)); // return NaN\n// console.log(soma());  // return NaN\n// //E possivel definir valores padrao caso nao seja fornecido\n// function somaComValorPadrao( a =3 ,b = 6){\n//     return a+b;\n// }\n// console.log(somaComValorPadrao(1)); \n// console.log(somaComValorPadrao());\n// //Arrow function\n// const somaArrow = (a = 3, b = 6) => a+b;\n// console.log(somaComValorPadrao(1)); \n// console.log(somaComValorPadrao());\n///////////////////////////////////////////////////////////////////////////////////////////////////\n//Desestruturacao\n// const usuario ={\n//     nome: 'caina',\n//     idade: '20',\n//     endereco:{\n//         cidade: 'Ferraz de Vasconcelos',\n//         estado: 'SP',\n//     },\n// };\n// function mostraNome({ nome }){\n//     console.log(`Na func ${nome}`);\n// }\n// mostraNome(usuario);\n// const { nome, idade, endereco: {cidade, estado} } = usuario;\n// console.log(`Nome: ${nome}, ${idade} anos.`);\n// console.log(`Cidade: ${cidade} - ${estado}`);\n/////////////////////////////////////////////////////////////////////////////////////\n// Operadores rest/spread\n// const usuario = {\n//     nome:'Caina',\n//     idade: '20',\n//     empresa: 'xd'\n// };\n// // REST\n// const { nome, ...resto } = usuario;\n// console.log(nome);\n// console.log(resto);\n// const arr = [ 1, 2, 3, 4 ];\n// const [ a, b, ...c ] = arr;\n// console.log(a);\n// console.log(b);\n// console.log(c);\n// function soma(...params){\n//     return params.reduce((total, next) => total + next);\n// }\n// console.log(soma(1, 4, 7, 8));\n// // SPREAD\n// const arr1 = [1, 2, 3];\n// const arr2 = [4, 5, 6];\n// const arr3 = [...arr1, ...arr2];\n// console.log(arr3);\n// const usuario1={\n//     nome: 'caina',\n//     idade: '20',\n// };\n// const usuario2 = { ...usuario1, nome:'Gabriel' };\n// console.log(usuario2);\n/////////////////////////////////////////////////////////////////////////////////\n// Template literals\n//Usar variaveis dentro de strings a partir do es6\n// const nome = \"Caina\";\n// const idade = 20;\n// console.log(\"Meu nome eh \" + nome + \" e tenho \" + idade + \" anos.\");\n// console.log(`Meu nome eh ${nome} e tenho ${idade} anos.`);\n/////////////////////////////////////////////////////////////////////////////////\n// Object Short Syntax\n// const nome = \"Caina\";\n// const idade = 20;\n// const usuario = {\n//     nome: nome,\n//     idade: idade,\n//     empresa: \"XD\",\n// }\n// const usuarioComShortSyntax = {\n//     nome,// quando o nome da propriedade e igual ao nome da variavel, e possivel esse tipo de codigo\n//     idade,\n//     empresa: \"XD\",\n// }\n// console.log(usuario);\n// console.log(usuarioComShortSyntax);\n///////////////////////////////////////////////////////////////////////////////////////\n// Exercicio 1\n// class User {\n//     constructor(Email, Senha){\n//         this.email = Email,\n//         this.senha = Senha,\n//         this.admin = false\n//     }\n//     isAdmin(){\n//         return(this.admin? true : false)\n//     }\n// }\n// class Admin extends User{\n//     constructor(Email, Senha){\n//         super(Email, Senha);\n//         this.admin = true;\n//     }\n// }\n// const usuario = new User('teste@gmail.com', 123);\n// const admin = new Admin('teste2@gmail.com', 321);\n// console.log(\"usuario \" + usuario.isAdmin());\n// console.log(\"admin \" + admin.isAdmin());\n////////////////////////////////////////////////////////////////////////\n// // Exercicio 2\n// const usuarios = [\n//     { nome: 'Caina', idade: 20, empresa: 'xd' },\n//     { nome: 'Eduardo', idade: 15, empresa: 'xd' },\n//     { nome: 'Rafael', idade: 30, empresa: 'gg' },\n// ];\n// const idades = usuarios.map((data) =>{\n//     return(data.idade);\n// })\n// console.log(idades);\n// const xd = usuarios.filter((data) => {\n//     return(data.empresa == 'xd'? data: null);\n// })\n// console.log(xd);\n// const google = usuarios.find((data)=>{\n//     return(data.empresa == 'Google'? data : null);\n// });\n// console.log(google);\n// const menor50 = usuarios.map((data) => {\n//     data.idade*=2;\n//     return(data);\n// }).filter((data) =>{\n//     return(data.idade <=50? data : null);\n// });\n// console.log(menor50);\n////////////////////////////////////////////////////////////////////////\n// Exercicio 3\n// const arr = [1, 2, 3, 4, 5];\n// const itens = arr.map((item) =>item +10);\n// console.log(itens); \n// const usuario = { nome: 'Diego', idade: 23 };\n// const idade = (object) => object.idade;\n// console.log(idade(usuario));\n// const nome = \"Diego\";\n// const idade = 23;\n// const mostraUsuario = (nome = 'Diego', idade = 18) =>{\n//     return ( nome, idade );\n// }\n// console.log(mostraUsuario(nome, idade));\n// console.log(mostraUsuario(nome));\n// const promise = function() {\n//     return new Promise(function(resolve,reject){\n//         return resolve();\n//     })\n// }\n// const promise1 = () =>{\n//     return new Promise((resolve, reject) =>{\n//         return resolve();\n//     })\n// }\n// console.log(promise());\n// console.log(promise1());\n/////////////////////////////////////////////////////////////////////////\n// Exercicio 4\n// const empresa = {\n//     nome: 'Rocketseat',\n//     idade: '3',\n//     endereco: {\n//         cidade: 'Rio do Sul',\n//         estado: 'SC',\n//     }\n// };\n// const { nome, endereco: { cidade, estado } } = empresa;\n// console.log(nome);\n// console.log(cidade);\n// console.log(estado);\n// function mostraInfo({ nome, idade }){\n//     return `${nome} tem ${idade} anos.`\n// }\n// console.log(mostraInfo(empresa));\n///////////////////////////////////////////////////////////////////////\n// Exercicio 5\n// const arr = [1, 2, 3, 4, 5, 6];\n// const [ x, ...y ] = arr;\n// console.log(x);\n// console.log(y);\n// const soma = (...params) => {\n//     return params.reduce((total, next) => total + next);\n// }\n// console.log(soma(2, 4 ,6, 8, 10));\n// const usuario = {\n//     nome: 'Diego',\n//     idade: 23,\n//     endereco: {\n//         cidade: 'Rio do Sul',\n//         uf: 'SC',\n//         pais: 'Brasil',\n//     }\n// };\n// const usuario2 = { ...usuario, nome : 'Gabriel' }\n// const usuario3 = { ...usuario, endereco: { ...usuario.endereco, cidade : 'Lontras' } }\n// console.log(usuario2);\n// console.log(usuario3);\n/////////////////////////////////////////////////////////////////////////////////\n// Exercicio 6\n// const usuario = 'Diego';\n// const idade = 23;\n// console.log(`O usuario ${usuario} possui ${idade} anos.`);\n//////////////////////////////////////////////////////////////////////////////////\n// Exercicio 7\n// const nome = 'Diego';\n// const idade = 23;\n// const usuario = {\n//     nome,\n//     idade,\n//     cidade: 'Rio do Sul',\n// };\n// console.log(usuario);\n////////////////////////////////////////////////////////////////////////////////////\n// WEBPACK - Configuracao\nconsole.log((0, _funcoes.soma)(1, 2));\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });