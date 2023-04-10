const http = require('http');                   //  import {createServer} from 'http';
const dataPassed = require('./detail');         // import dataPassed from './detail';
http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'application\json'});
    response.write(JSON.stringify(dataPassed));
    response.end();
}).listen(3000);
