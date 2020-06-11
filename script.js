function sayHello() {
        var hi = document.getElementById('name').value;
        var message = "<h2>"+ hi +"<h2>";
       // document.getElementById('content').textContent = message;
       document.getElementById('content').innerHTML = message;
}
