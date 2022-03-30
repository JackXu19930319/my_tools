//創建一個物件，利用toBase64Image將要下載的圖檔與它(opendata_chart_bar)連接，下載
function download_opendata_img() {
  var a = document.createElement("a")
  a.href = opendata_chart_bar.toBase64Image()
  a.download = "分析圖檔.png"
  a.click()
}