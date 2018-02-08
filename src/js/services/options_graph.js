export default function graph(data)
{
    var j = 0
    var temP = [0,0,0,0,0]
    var humP = [0,0,0,0,0]

    for(let i=0; i<(data.list).length -1; i++ )
    {
        if( i<39 && ((data.list[i].dt_txt).slice(0,10) !== (data.list[i+1].dt_txt).slice(0,10)))
        {
            j++
        }
        temP[j] =  temP[j] + data.list[i].main.temp
        humP[j] = humP[j] + data.list[i].main.humidity
    }

    var ctx = document.getElementById("graph");
    var myChart = new Chart(ctx, {
    responsive: true,
    type: 'line',
    data: {
        labels: ["", "", "", "", ""],
        datasets: [
            {
                data:   [humP[0]/(((data.list).length-32)*10), humP[1]/80, humP[2]/80, humP[3]/80, humP[4]/80],
                borderWidth: 1,
                borderColor: 'rgba(244,234,130,1)',
                backgroundColor:  'rgba(244,234,130,0.8)',
                borderWidth: 2,
                pointRadius: 0
            },
            {
                data:  [temP[0]/((data.list).length-32), temP[1]/8, temP[2]/8, temP[3]/8, temP[4]/8],
                borderColor:  'rgba(73,190,179,1)',
                backgroundColor:   'rgba(73,190,179,0.8)',
                borderWidth: 2,
                pointRadius: 0,

            }
        ]
    },
    options: {
        layout:
        {
            padding:
            {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
        },
        legend:
        {
            display: false
        },
        scales:
        {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                display: false
            }]
        }
    }
});

}

