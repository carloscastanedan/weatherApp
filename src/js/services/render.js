
//Assets
import mapIcon from './map_icons'

export default function render(data) {
    //Render Temp
    let temp = document.getElementsByClassName('temperature')[0]
    temp.textContent = `${Math.round(data.list[0].main.temp)} °C`
    //Render icon
    let icon = document.getElementsByClassName('icon')[0]
    if((Date().slice(16,18)) > 6 &&  (Date().slice(16,18)) < 18)
        icon.className = `icon wi ${mapIcon.dayWather[ data.list[0].weather[0].icon]}`
    else
        icon.className = `icon wi ${mapIcon.nightWather[ data.list[0].weather[0].icon]}`
    //render country
    let location = document.getElementsByClassName('location')[0]
    location.textContent = `${data.city.name} ${data.city.country}`

    //render next tempertures
    var nxT = document.querySelectorAll('.record-temperature p')
    var nxIcon = document.querySelectorAll('.record-temperature i')

    for(let i=0; i<=3; i++)
    {

    if( (data.list[i].dt_txt).slice(11,13) > 6 &&  (data.list[i].dt_txt).slice(11,13) < 18 )
        nxIcon[i].className = `icon wi ${mapIcon.dayWather[ data.list[i].weather[0].icon]}`
    else
        nxIcon[i].className = `icon wi ${mapIcon.nightWather[ data.list[i].weather[0].icon]}`

        let hora = (data.list[i].dt_txt).slice(11,13)
        if(hora <= 11)
        {
            nxT[i].textContent = `${hora}am`
        }
        else if(hora == 12)
        {
            nxT[i].textContent = `${hora}pm`
        }
        else
        {
            nxT[i].textContent = `${hora-12}pm`
        }
    }

    //Render week
   let week = document.getElementsByClassName('days')[0].children
   var d = new Date()
   var n = parseInt(d.getDay())
   for(let i=0; i<=3; i++)
   {
        let w = n + i
        if (w > 6)
        w = n + i - 7
        week[i].textContent = `${mapIcon.week[w]}`
   }
}
