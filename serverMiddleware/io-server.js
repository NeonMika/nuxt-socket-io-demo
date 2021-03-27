// Setup a socket.io server on port 3001 that has CORS disabled (do not set this to port 3000 as port 3000 is where the nuxt dev server serves your nuxt application)
const io = require("socket.io")(3001, {
    cors: {
        // No CORS at all
        origin: '*',
    }
});

var i = 0;
// broadcast "tick" event every second
// or... do whatever you want with io ;)
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