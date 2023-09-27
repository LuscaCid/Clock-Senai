export function JSfunctions({
    htmlElements
}){
    function updateTime(){
        htmlElements.hours.innerText = `${htmlElements.actualHour}`
        htmlElements.minute.innerText = `${htmlElements.actualMin}`
        htmlElements.seccond.innerText = `${htmlElements.actualsec}`
        alterateTime()
    }

    return {
        updateTime
    }

}