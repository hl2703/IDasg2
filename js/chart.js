var ctx = document.getElementById("myChart");//get chart id

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "March", "April", "May", "June","July","Aug","Sep","Oct","Nov","Dec"],
    datasets: [{
      label: 'Expenses',
      data: [],
      backgroundColor: [
        'rgba(223, 165, 124, 0.86)'
      ],
      borderColor: [
        'rgba(255,99,132,1)'
      ],
      borderWidth: 1
    },
    {
      label: 'Income',
      data: [],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1
    }
  ]
  },
  options: {
    title:{
      display: true,
      text: "Budget tracking"
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

for (var i=1;i<13;i++){
    var newExpense = Number($('tr').eq(i).find('td').eq(2).text());
    var newIncome = Number($('tr').eq(i).find('td').eq(1).text());
    myChart.data.datasets[0].data.push(newExpense);
    myChart.data.datasets[1].data.push(newIncome);
    
    myChart.update();
    
}
console.log(myChart.data.datasets[0].data);
