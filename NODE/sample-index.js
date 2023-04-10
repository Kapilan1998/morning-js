const http = require("http");               // http module used for build web server
http.createServer((request1,Response1) =>{
    Response1.write("<b>This is my <mark>first</mark> node testing code</b>");
    Response1.write("<marquee scrollamount=20 bgcolor='green'><font size=40>vvyuvyvuttu </font></marquee>")
    Response1.end();
}).listen(3000);                    // at 3000 port it is going to work