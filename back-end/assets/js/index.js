

$("#add_product").submit(function (event) {
    arlet("Data inserted successfully")
})

$("#update_product").submit(function (event) {
    event.preventDefault()

    var unindexed_arr = $(this).serializeArray()
    var data = {}

    $.map(unindexed_arr, function (n, i) {
        data[n['name']] = n['value']
    })

    var request = {
        "url": `http://localhost:3000/api/products/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function (response) {
        arlet("Data update succesfully")
    })
    console.log(data)
})

if (window.location.pathname == "/") {
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function () {
        var id = $(this).attr("data-id")

        var request = {
            "url": `http://localhost:3000/api/products/${id}`,
            "method": "DELETE"
        }

        if (confirm("Do you really want to delete this record?")) {
            $.ajax(request).done(function (response) {
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}