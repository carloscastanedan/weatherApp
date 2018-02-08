export default function getLocation(){
    return new Promise((resolve, reject) => {
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition((location) => {
                resolve(location)
            });
        }
        else
        {
            reject('Navegador no soporte api geolocation')
        }
    })
}
