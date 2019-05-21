// class List{
//     constructor(){
//         this.data=[];
//     }
//     add(data){
//         this.data.push(data);
//         console.log(this.data);
//     }
// }
// // Heranca entre classes
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

class Matematica{
    static soma(a,b){
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));