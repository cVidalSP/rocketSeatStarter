// Exercicios Modulo 3

// Transformar os trechos de codigo utilizando async/await


// Funcão delay aciona o .then após 1s
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// function umPorSegundo() {
//     delay().then(() => {
//         console.log('1s');

//         delay().then(() => {
//             console.log('2s');

//             delay().then(() => {
//                 console.log('3s');
//             });
//         })
//     });
// }

// umPorSegundo();

// // async function umPorSegundo2(){
// //     await delay();
// //         console.log('1s');
// //     await delay();
// //         console.log('2s');
// //     await delay();
// //         console.log('3s');
    
// // }

// // Com arrow function 
// const umPorSegundo2 = async () =>{
//     await delay();
//         console.log('1s');
//     await delay();
//         console.log('2s');
//     await delay();
//         console.log('3s');
    
// }

// umPorSegundo2();




// import axios from 'axios';

// function getUserFromGithub(user) {
//     axios.get(`https://api.github.com/users/${user}`)
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(err => {
//         console.log('Usuário não existe');
//     })
// }
// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');


// async function getUserFromGithub2(user) {
//     try{
//         const response = await axios.get(`https://api.github.com/users/${user}`);

//         console.log(response);
//     }catch(err){
//         console.log('Usuário não existe');
//     }
// }
// getUserFromGithub2('cVidalSP');
// getUserFromGithub2('cVidalSPASUDHFLKAS');


// import axios from 'axios';

// class Github {
//     static getRepositories(repo) {
//     axios.get(`https://api.github.com/repos/${repo}`)
//         .then(response => {
//            console.log(response.data);
//         })
//         .catch(err => {
//             console.log('Repositório não existe');
//         })
//     }
// }
// Github.getRepositories('rocketseat/rocketseat.com.br');
// Github.getRepositories('rocketseat/dslkvmskv');

// class Github2 {
//     static async getRepositories(repo) {
//         try{
//             const response = await axios.get(`https://api.github.com/repos/${repo}`);
//             console.log(response.data);
//         }catch(err){
//             console.log('Repositório não existe');
//         }
//     }
// }
// Github2.getRepositories('rocketseat/rocketseat.com.br');
// Github2.getRepositories('rocketseat/dslkvmskv');


// const buscaUsuario = user => {
//     axios.get(`https://api.github.com/users/${user}`)
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(err => {
//         console.warn(err);
//         console.log('Usuário não existe');
//     });
// }
// buscaUsuario('diego3g');

// const buscaUsuario2 = async(user) => {
//     try{
//         const response = await axios.get(`https://api.github.com/users/${user}`);
//         console.log(response.data);
//     }catch(err){
//         console.warn(err);
//         console.log('Usuário não existe');
//     }
// }
// buscaUsuario2('diego3g');
