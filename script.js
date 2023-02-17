let graph = document.getElementById('graph').getContext('2d')

new Chart(graph, {
    type: "line",
    data: {
        labels: [
            '5Nov',
            '6Nov',
            '7Nov',
            '8Nov',
            '9Nov',
            '10Nov',
            '11Nov',
            '12Nov',
            '13Nov',
            '14Nov',
            '15Nov',
            '16Nov',
        ],
        datasets: [
            // données du graphique ETH
            {
                label: 'ETH',
                data: [150, 600, 300, 250, 100, 350, 200, 300, 700, 350, 100, 400],
                borderColor: '#4D91A5',
                backgroundColor: 'transparent'
            },
            // données du graphique BTC
            {
                label: 'BTC',
                data: [null, 200, 450, 600, 650, 500, 435, 600, 500, 600, 400, null],
                borderColor: '#592795',
                backgroundColor: 'transparent'
            }
        ]
    },
    // supprimer les annotation en haut du graphique 
    options: {
        legend: {
            display: false
        }
    },
    tooltips: {
        callbacks: {
            label: function(tooltipItem, data) {
                return "$" + tooltipItem.yLabel;
            }
        }
    },
    scales: {
        yAxes: [{
            ticks: {
                callback: function(value, index, values) {
                    return "$" + value;
                }
            }
        }]
    }
})