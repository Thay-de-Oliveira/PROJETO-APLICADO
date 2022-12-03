new Chart(document.getElementById('metaDeConsumo'), {
  type: 'bar',
  data: {
    labels: ['Consumo máximo', 'Consumo atual'],
    datasets: [{
      label: 'Meta de consumo',
      backgroundColor: ['rgb(151, 215, 232)', 'rgb(16, 137, 184)'],
      borderColor: ['rgb(151, 215, 232)', 'rgb(16, 137, 184)'],
      fill: true,
      tension	: 0.4,
      data: [3000, 1284],
      borderWidth: 1,
    }]
  },
  options: {
    indexAxis: 'y',
    scales: {
      y: {
      beginAtZero: true
      }
    },
    duration: 3000,
  }
});

new Chart(document.getElementById('consumoPorDia'), {
  type: 'line',
  data: {
    labels: ['13-10-2022', '14-10-2022', '15-10-2022', '16-10-2022', '17-10-2022', '18-10-2022', '19-10-2022'],
    datasets: [{
      label: 'Litros consumidos por dia',
      backgroundColor: 'rgb(16, 137, 184)',
      borderColor: 'rgb(16, 137, 184)',
      fill: true,
      tension	: 0.4,
      data: [110, 114, 99, 105, 112, 150, 117],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
      beginAtZero: true
      }
    },
    duration: 3000,
  }
});

new Chart(document.getElementById('consumoPorMes'), {
  type: 'line',
  data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
      label: 'Litros consumidos por mês',
      backgroundColor: 'rgb(151, 215, 232)',
      borderColor: 'rgb(151, 215, 232)',
      fill: true,
      tension	: 0.4,
      data: [3127, 2800, 3090, 2997, 2670, 2946, 3015],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
      beginAtZero: true
      }
    },
    duration: 3000,
  }
});