function ajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);


            xhttp.open("GET", "grocery.json", true);
            xhttp.send();
            var item = response.people
            console.log("response")
            var output = "";
            for (i = 0; i < item.length; i++) {
                output += item[i].name;
            }
            document.getElementById("demo").innerHTML = output;
        }
    }
}