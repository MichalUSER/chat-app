const PORT = process.env.PORT || 5000;

const io = require("socket.io")(PORT);

const users = [];

console.log("Server started");

io.set('origins', '*:*');
io.on("connection", socket => {
	socket.on("new-user", name => {
		users[socket.id] = name;
		socket.broadcast.emit("user-connected", name);
	});
	socket.on("send-chat-message", data => {
		//channel: data.channel,
		socket.broadcast.emit("chat-message", {
			message: data,
			name: users[socket.id]
		});
	});
	socket.on("disconnect", () => {
		socket.broadcast.emit("user-disconnected", users[socket.id]);
		delete users[socket.id];
	});
});
