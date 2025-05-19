const http = require('http');

const PORT = process.env.PORT || 8080;

const requestHandler = (req, res) => {
    res.end('This is my first Node.js server with docker!')
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

gcloud run deploy my-app --image gcr.io/glowing-jetty-460313-d7/my-app-image:v1 --platform managed --region asia-northeast1 --allow-unauthenticated
