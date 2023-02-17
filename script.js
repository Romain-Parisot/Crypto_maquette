// ----------------------------graph-----------------------------------
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
    // permet d'ajouter le $ a chaque data de l'axe Y 
    tooltips: {
        callbacks: {
            label: function(tooltipItem, data) {
                return "$" + tooltipItem.yLabel;
            }
        }
    },
    // change la couleur de l'axe X et Y
    scales: {
        xAxes: [{
            ticks: {
                fontColor: "white",
                opacity: 0.7
            },
            gridLines: {
                color: "rgba(255, 255, 255, 0.7)"
            }
        }],
        yAxes: [{
            ticks: {
                fontColor: "white",
                opacity: 0.7,
                callback: function(value, index, values) {
                    return "$" + value;
                }
            },
            gridLines: {
                color: "rgba(255, 255, 255, 0.7)"
            }
        }]
    }
});




// ---------------------------------- burger menu -----------------------------------------
function toggleburger(){
    let burger=document.querySelector('.burger_bt')
    let barUp=document.querySelector('.bar_up')
    let barDown=document.querySelector('.bar_down')
    let barMid=document.querySelector('.bar_mid')
    let menu_burger=document.querySelector('.burger')
    burger.addEventListener('click', ()=>{
        barMid.classList.toggle('none');
        barUp.classList.toggle('barAnimationTop');
        barDown.classList.toggle('barAnimationBot');
        menu_burger.classList.toggle('none')
        burger.classList.toggle('burger_bt_cross')
    })  
}
toggleburger();