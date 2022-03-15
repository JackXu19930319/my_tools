function btn_export(tabel_thead, table_data) {
  var table_html = ""
  table_html += `<thead>`
  table_html += `<tr>`
  for (var i = 0; i < tabel_thead.length; i++) {
    table_html += `<td>${tabel_thead[i]}</td>`
  }
  table_html += `</tr>`
  table_html += `</thead>`

  table_html += `<tbody>`
  for (i = 0; i < table_data.length; i++) {
    table_html += `<tr>`
    for (ii = 0; ii < table_data[i].length; ii++) {
      table_html += `<td>${table_data[i][ii]}</td>`
    }
    table_html += `</tr>`
  }
  table_html += `</tbody>`

  $("#outputTable").html(table_html)
  var table1 = document.getElementById("outputTable")
  var sheet = XLSX.utils.table_to_sheet(table1) //將一個table物件轉換成一個sheet物件
  openDownloadDialog(sheet2blob(sheet), "下載.xlsx")
}