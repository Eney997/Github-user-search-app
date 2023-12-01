const icon = document.getElementById('iconmoonnsun')
const headh2 = document.getElementById('headh2')

icon.onclick = function () {
    document.body.classList.toggle('Light-mode')
    if(document.body.classList.contains('Light-mode')){
        headh2.innerHTML = 'DARK'
        icon.src = '/assets/Moon-mob.svg'
    }else {
        icon.src = '/assets/Sun-mob.svg'
        headh2.innerHTML = 'LIGHT'
    }
}



