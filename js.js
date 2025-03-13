function search() {
    var startStation = document.getElementById("startStation").value;
    var endStation = document.getElementById("endStation").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    date = date.replace(/-/g, "");
    time = time.split(":").join("");
    if (startStation == "" || endStation == "" || date == "" || time == "") {
        alert("בבקשה מלא את כל השדות");
        
    }
    else{
        if (startStation == endStation)
        {
            alert("תחנת היציאה ותחנת היעד זהות");
        return;
        }
        else{
        window.location.href = `https://www.cfir.co.il/train-search-result/?FSID=${startStation}&TSID=${endStation}&Date=${date}&Hour=${time}&IDT=true&ILT=false`;
    }}
}
