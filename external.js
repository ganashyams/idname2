function change(){
    console.log("btn clicked");

    // step 1
    var xhttp = new XMLHttpRequest();
    // step 2
    xhttp.open("GET","https://jsonplaceholder.typicode.com/users",true);
    // step 3
    xhttp.send();
    // step 4
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            console.log(this.responseText)
            var json = JSON.parse(this.responseText);
            let val ="";
            for (let i = 0; i <json.length; i++) {
                val += `<table>
                
                <tr>
                    <td>${json[i].name}</td>
                    <td>${json[i].username}</td>
                    <td>${json[i].address.city}</td>`
              
                document.getElementById("table").innerHTML = val; 
            } 
     
        }
    }
    }