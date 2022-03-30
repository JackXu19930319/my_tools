$(document).ready(function () {
    test_data()
})

function test_data() {
    data = [
        ['台灣', '香蕉', '批發'],
        ['紐西蘭', '牛奶', '零售']
    ]
    creat_activity_table(data)
}
function creat_activity_table(table_data) {
    table_data = table_data
    $("#data_table").DataTable({
        data: table_data,
        columns: [{ title: "國家別" }, { title: "產品別" }, { title: "批發/零售" }],
        responsive: true,
        rowReorder: true,
        destroy: true,

        language: {
            decimal: "",
            emptyTable: "此查詢日期區間無資料",
            info: "顯示 _START_ 到 _END_ 共 _TOTAL_ 項目",
            infoEmpty: "Showing 0 to 0 of 0 entries",
            infoFiltered: "(filtered from _MAX_ total entries)",
            infoPostFix: "",
            thousands: ",",
            lengthMenu: "顯示每頁 _MENU_ 個項目",
            loadingRecords: "Loading...",
            processing: "Processing...",
            search: "搜尋:",
            zeroRecords: "No matching records found",
            paginate: {
                first: "第一頁",
                last: "最後頁",
                next: "後一頁",
                previous: "前一頁",
            },
            aria: {
                sortAscending: ": activate to sort column ascending",
                sortDescending: ": activate to sort column descending",
            },
        },
    })
    $('.chart_box').show()
    if (table_data.length > 0) {
        $('.download_btn').show()
    }
}