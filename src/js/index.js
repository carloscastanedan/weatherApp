//Assets
import graph from './services/options_graph'
import getLocation from './services/location'
import {key} from '../../config'
import render from './services/render';

function ready()
{
    getLocation()
        .then(location => {
        var latitude = location.coords.latitude
        var longitud = location.coords.longitude
        var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitud}&units=metric&APPID=${key}`
        fetch(url)
            .then( r => r.json() )
            .then( data => {
                render(data)
                graph(data)
            })
        .catch( err => console.log( err) )
    })
    .catch(err => {
        console.log(err)
    })
}

window.addEventListener('load', ready, false)
