const fs = require('fs');

 const requestHandler=(myRequest,myResponse) =>{


  //   console.log(myRequest);
  //  console.log(myRequest.url);        // it will show the url after port number 
  //  console.log(myRequest.method);       // it will show get as method
  //  console.log(myRequest.headers);
  // process.exit();   // to stop the execution of event loop if not it will run continusously

  

  const pageURL = myRequest.url;
  const pageMethod = myRequest.method;
  if (pageURL === '/'){             // if it's route path have only 127.0.0.1:3000 then if block will be executed
    myResponse.setHeader('Content-type','text/html');   // for set the headers of responses
    myResponse.write('<html>')
    myResponse.write('<head><title>Fill the form</title></head>')
    myResponse.write('<body><form enctype="multipart/form-data" action="/message" method="post"><input type= "text" name="message1" placeholder="enter any text"> </br>')
   // myResponse.write('<input type="file" name="file"> ')  // for upload files and check checkhow large data is splitted
    myResponse.write('<input type="submit"> </form></body> </html>')
    return myResponse.end();         // to indicate response has been finished
  }
  else if(pageURL ==='/about'){
    myResponse.setHeader('Content-type','text/html');
    myResponse.write('<html>')
    myResponse.write('<head><title>About</title></head>')
    myResponse.write('<body><h1 style="color:green;">About node js</h1>')
    myResponse.write('<h3>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.</h3>')
    myResponse.write('</body></html>')
    return myResponse.end();         // to indicate response has been finished
  }

          // code for redirection 
  if (pageURL === '/message' && pageMethod =='POST') {

    const array1 = [];        // inserting all the buffer values inside an array to change as readable format

    myRequest.on('data',(chunk) => {                // chunk data means data comes as user input (request) and converted into unreadable format
    console.log("chunk data is shown here to you .....");
    array1.push(chunk);
        console.log(chunk);         // chunk data is divided by npm and splitted into many parts (to check use images file upload method using html)
});

                  // end means after all data received only it will execute this process. it indicates as asynchronous, non
    myRequest.on('end', () => {
      let readableData = Buffer.concat(array1).toString();    //convert unreadable data to readable data
      console.log("end data received");
      // console.log("The text you entered = "+readableData);
      let changedData = readableData.split('=');
      for(let a=0;a< changedData.length; a++){
      fs.writeFileSync('chunk.txt', ` ${a} ---> ${changedData[a]}`);
      }
    });


    fs.writeFileSync('hello.txt', ' some data are inserted here ....');
    console.log("data entered");
    myResponse.setHeader('Location','/')            // it will redirect this '/message' page to home page('/') 
    myResponse.statusCode =302;   // 302 is for redirection in node
    return myResponse.end();
  }
  myResponse.setHeader('Content-type','text/html');
  myResponse.write('<html>')
  myResponse.write('<head><title>Controlling ....</title></head>')
  myResponse.write('<body><h1 style="color:blue; size:56px; font-weight:800; text-decoration:underline"> Every one need to study node js </h1></body>')
  myResponse.write('<html>')
  myResponse.end();         // to indicate response has been finished

}

module.exports = {
  myHandler:requestHandler,
  someText: "here is some text"
};
