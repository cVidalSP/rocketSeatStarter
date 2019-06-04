// Async/await

// promise  sao formas de realizar acoes de forma assincrona como solicitacoes para apis

const minhaPromise = () => new Promise((resolve, reject)=>{
    setTimeout(() => {resolve('OK')}, 1000);
});
const minhaPromise2 = () => new Promise((resolve, reject)=>{
    setTimeout(() => {resolve('OK2')}, 1000);
});

// minhaPromise().then(response=>{
//     console.log(response);
// })
// .catch(err =>{
//     //Capturar os erros.
// });

async function executaPromise(){
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());

    //Sem o async/await :

    minhaPromise().then(response => {
        console.log(response);

        minhaPromise().then(response =>{
            console.log(response);

            minhaPromise().then(response =>{
                console.log(response);
            })
        })
    })
}

const executaPromiseComArrowFunct = async () => {
    console.log(await minhaPromise2());
    console.log(await minhaPromise2());
    console.log(await minhaPromise2());
}


// A partir do momento que a funcao eh async, ela vira uma promise
// porem o "await" so pode ser usado dentro da funcao async
// tendo assim que se usar o .then

// executaPromise.then(response ...) // Por exemplo
executaPromise();
executaPromiseComArrowFunct();

