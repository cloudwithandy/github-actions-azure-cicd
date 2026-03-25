const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
const filePath = path.join(__dirname, "index.html");

fs.readFile(filePath, (err, content) => {
if (err) {
res.writeHead(500, { "Content-Type": "text/plain" });
res.end("Server error");
return;
}

res.writeHead(200, { "Content-Type": "text/html" });
res.end(content);
});
});

server.listen(port, () => {
console.log(`Server running on port ${port}`);
});
