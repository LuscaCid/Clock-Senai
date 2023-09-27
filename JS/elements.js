export function Elements(){
    const hours = document.querySelector('#hour')
    const minute = document.querySelector('#minute')
    const seccond = document.querySelector('#seccond')
    const updater = new Date()
    const actualHour = updater.getHours()
    const actualMin = updater.getMinutes()
    const actualsec = updater.getSeconds()
    return {
        actualHour,
        actualMin,
        actualsec,
        updater,
        hours,
        minute,
        seccond,
    }

}

    