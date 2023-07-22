//Nodejs has a built in module called "Events"
//where we can create, fire, and listen for -> our own events
//ex-1 Registering for the event to be fired only one time using once.
//ex-1 Create and event emitter instance and register a couple of callbacks
//ex-1 Registering for the event with callback parameters

const EventEmitter = require("events");
const event = new EventEmitter();

// event.on("sayMyName", ()=>{
//     console.log("my name is Uday");
// });

// event.on("sayMyName", ()=>{
//     console.log("my name is Pratap");
// });

// event.on("sayMyName", ()=>{
//     console.log("my name is Yadav");
// });

event.on("checkPage", (sc, msg)=>{
    console.log(`status code is  ${sc} and the page is ${msg}`);
});

event.emit("checkPage", 200, "ok");
