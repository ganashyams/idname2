function change(){
    console.log("btn clicked");

    // step 1
    var xhttp = new XMLHttpRequest();
    // step 2
    xhttp.open("GET","data.txt",true);
    // step 3
    xhttp.send();
    // step 4
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            console.log(this.responseText)
            document.getElementById('tutu').innerText=this.responseText
        }
    }
}