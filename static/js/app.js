// from data.js
var tableData = data;

// YOUR CODE HERE!
const tbody = d3.select("tbody");

tableData.forEach((UFO) => {
    let row = tbody.append("tr");
    for (key in UFO){
        let cell = tbody.append("td");
        cell.text(UFO[key]);
    }
});

let filter_btn = d3.select("#filter-btn")

filter_btn.on("click", function() {
    d3.event.preventDefault();
    const input_date = d3.select("#datetime");
    const date = input_date.property("value");
    console.log(date);
    const filtered_tbl = tableData.filter(UFO => UFO.datetime === date);
    console.log(filtered_tbl);

    // experiment zone

    d3.select("tbody").selectAll("td").remove()

    // experiment zone
    

    filtered_tbl.forEach((UFO) => {
        let row = tbody.append("tr");
        for (key in UFO){
            let cell = tbody.append("td");
            cell.text(UFO[key]);
        }
    });
})
