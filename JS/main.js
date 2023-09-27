
import { JSfunctions} from "./JSfunctions.js"

const Functions = JSfunctions({
   
})
let x = 0;


const seccond = document.querySelector('#seccond')
setInterval(()=>{
    let datetimers = new Date()
    let hours = document.querySelector('#hour')
    let minute = document.querySelector('#minute')

    hours.innerHTML = datetimers.getHours()
    minute.innerHTML = datetimers.getMinutes()
    seccond.innerHTML = datetimers.getSeconds()
        
}, 1000)


    
