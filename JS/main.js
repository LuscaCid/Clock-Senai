import { Elements } from "./elements.js"
import { JSfunctions} from "./JSfunctions.js"
const htmlElements = Elements()
const Functions = JSfunctions({
    htmlElements
})
let x = 0;
countdown()
setInterval(function countdown(){
    x+=1
    console.log(x)
    countdown()
},1000)

imprimirolamundo()

    setInterval(()=>{
        htmlElements.hours.innerText = `${htmlElements.actualHour}`
        htmlElements.minute.innerText = `${htmlElements.actualMin}`
        htmlElements.seccond.innerText = `${htmlElements.actualsec}`
        

        if(htmlElements.hours.textContent == "20")return;
    }, 1000)


    function imprimirolamundo(){
        console.log('olamuendo')
    }

    
