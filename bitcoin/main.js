function getKurs() {
    var x = new XMLHttpRequest();
    x.onreadystatechange = function() {
        if(x.readyState == x.DONE && x.status == 200) {
            var response = JSON.parse(x.responseText);
            var e = response["bpi"]["EUR"]["rate_float"];
            document.getElementById("output").hidden = false;
            document.getElementById("output").innerText = document.getElementById("output").innerText.replace("%btc", e);

        }
    };
    x.open("get", "https://api.coindesk.com/v1/bpi/currentprice.json");
    x.send();
}