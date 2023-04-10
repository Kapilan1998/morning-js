const http = require('http');
const requestHandler = require('./request-response');

            // using normal function
/*
function requestListener(myRequest,myResponse){
    console.log(myRequest);
}
const server = http.createServer(requestListener);
*/

            // using arrow function
const server = http.createServer(requestHandler.myHandler).listen(3000);
  


