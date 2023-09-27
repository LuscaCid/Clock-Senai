
import { JSfunctions} from "./JSfunctions.js"

const Functions = JSfunctions({
   
})
let x = 0;


const second = document.querySelector('#seccond')
setInterval(()=>{
    let dateTimers = new Date()
    let hours = document.querySelector('#hour')
    let minute = document.querySelector('#minute')

    hours.innerHTML = dateTimers.getHours()
    minute.innerHTML = dateTimers.getMinutes()
    second.innerHTML = dateTimers.getSeconds()
        
}, 1000)

/***
 * 
 * git clone permite que eu tenha o url do remote ja linkado no meu projeto aonde quer que eu va, apenas dando um git clone <https://github...> la no cmd dentro da pasta que eu quero pesquisando com o cd <caminho da pasta de destino>
 */
    
/**
 * git pull tem como funcao retornar as alterações que foram
 * feitas em outras maquinas ou somente por fora do meu arquivo
 * no meu vscode para q eu tenha acesso atualizado aos ultimos 
 * commits e pushs feitos pela minha equipe, meus colegas
 * 
 */
