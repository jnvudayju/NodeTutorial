//Streams are the objects that let you read data from a source or write data to a
//destination in continous fashion.
//Readable, Writeable, Duplex-(read && write)
//Transform(same as duplex but output computed base on input

// Each type of Stream is an EventEmitter instance and 
// throws several events at different instance of times.
// Some commonly used events are 
// data - this event is fired when there is data is available to read 
// end - this event is fired when there is no data to read
// error - this event is fired when there is an error while receiving or writng data
// finish - this event is fired when all the data has been flushed to underlying system


const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res)=>{
    //normal way of reading file
    /*fs.readFile("input.txt", (err, data)=>{
        if(err){
            return console.log(err);
        }

        res.end(data.toString());
    }); */
    //Stream way: Reading from stream, create a readable stream, handle stream events-data,end,error
    const rstream = fs.createReadStream("input.txt");

    /*rstream.on("data", (chunkdata)=>{
        res.write(chunkdata);
    });

    rstream.on("end", ()=>{
        res.end();
    }); */
    //3rd way
    //stream.pipe(), the method is used to take a readable stream and connect it to a writeable stream
    rstream.pipe(res);


});

server.listen(3000, "127.0.0.1", ()=>{
    console.log("listening to the server ");
}); 

