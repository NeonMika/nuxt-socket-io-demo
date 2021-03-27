const io = require("socket.io")(3001, {
    cors: {
        // No CORS at all
        origin: '*',
    }
});

var i = 0;
// broadcast "tick" event every second 
setInterval(() => {
    i++;
    io.emit("tick", i);
}, 1000);

// the above code is executed only once when the server is started
// yet, since we are a serverMiddleware, we have to return a handler, even if this it does nothing
// this server.js should probably better be written as a module :D
export default function (req, res, next) {
    next()
}