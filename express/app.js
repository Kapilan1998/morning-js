let express = require("express");
let app = express();
app.get('/', function (request, response) {
    // response.send("<h1>You are in the <mark> home </mark> page</h1>");
    response.sendFile(__dirname + "/form.html");
});
app.get('/gallery', function (request, response) {
    response.send("<h1>You are in the <mark> gallery </mark> page</h1>")
});
app.get('/price', function (request, response) {
    response.send("<h1>You are in the <mark> price </mark> page</h1>")
});
app.get('/detail', function (request, response) {
    let first_name = request.query.fname;
    let last_name = request.query.lname;
    let my_age = request.query.age;

    // response.send(`<h1 style='color:blue;'>Here is the details obtained from ${first_name} form</h1>`);
    response.send(`<table border=2> <tr> <th> First Name </th>  <td> ${first_name}</td> </tr>  <tr>  <th> Last Name</th> <td>${last_name} </td> </tr>  <tr> <th>Age </th> <td> ${my_age}</td>  </tr> </table>`);
});
app.listen(3000, function () {
    console.log(`here my express is running in the ${3000}`);
})