var ctx
var chart_bar
//先創立物件，然後初始化圖表
$(document).ready(function () {
ctx = document.getElementById("barChart")
  chart_bar = new Chart(ctx, {
    plugins: [ChartDataLabels],
    type: "bar",
    data: {
      labels: "chart_labels",
      datasets: [
        {
          label: "label",
          data: [],
          backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)", "rgba(255, 206, 86, 0.5)", "rgba(75, 192, 192, 0.5)"],
          borderWidth: 1,
          datalabels: {
            align: "end",
            anchor: "end",
            font: {
              size: datalabels_font_size,
            },
          },
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          display: true,
          title: {
            display: false,
            text: "單位:千元",
          },
          ticks: {
            font: {
              size: 20,
            },
          },
        },
        x: {
          ticks: {
            font: {
              size: 20,
            },
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            // This more specific font property overrides the global property
            font: {
              size: 18,
              weight: "bold",
            },
          },
        },
      },
    },
  })
})

//後面再利用update更新圖表
function barChart(label, chart_labels, chart_data) {
  chart_bar.data.datasets[0].label = label
  chart_bar.data.labels = chart_labels
  chart_bar.data.datasets[0].data = chart_data
  chart_bar.data.datasets[0].datalabels.font.size = datalabels_font_size

  chart_bar.update()
}