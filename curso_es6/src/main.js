import axios from 'axios';

// class Api{
//     static async getUserInfo(username){
//         const response = await axios.get(`https://api.github.com/users/${username}`);

//         console.log(response);
//     }
// }

// Api.getUserInfo('cVidalSP'); // Retorna os dados do perfil do git

//                             // Caso seja invalido, seria usado o catch, mas o async eh usado o try/catch
//
// O Axios retorna promises em suas funcoes, por isso eh possivel usar o asyn/await
class Api{
    static async getUserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);

            console.log(response);

        } catch(err){
            console.warn('Erro na API');
        }
        
    }
}

Api.getUserInfo('cVidalSP');
Api.getUserInfo('cVidalSPasdasd');