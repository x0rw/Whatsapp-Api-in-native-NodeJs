const http = require('http');
const https = require('https');


const APP_ID=3719XXX703;
const APP_SECRET="36b254fXXXXX1264ab03f5";
const RECIPIENT_WAID="PHONE NUMBER FORMAT 212605175022";
const VERSION="v20.0";
const PHONE_NUMBER_ID="SET";
const ACCESS_TOKEN="EAAFSPZCpHuXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXWA7UvHjKedwDdYc5IZD";
const body = "this is a test message";
const server = http.createServer((req, res) => {
  // Routing


const data = JSON.stringify({
    "messaging_product": "whatsapp",
    "preview_url": false,
    "recipient_type": "individual",
    "to": RECIPIENT_WAID,
    "type": "text",
    "text": {
        "body": body
    }
  });
const options = {
    hostname: `graph.facebook.com`,
    path: `/${VERSION}/${PHONE_NUMBER_ID}/messages`,
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
    },
};
    


  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, worlds!');
    console.log('Status Code:', VERSION);
  } else if (req.url === '/send') {
        const reqs = https.request(options, (res) => {
            let responseData = '';
        
            res.on('data', (chunk) => {
            responseData += chunk;
            });
        
            res.on('end', () => {
            console.log('Response:', responseData);
            });
        });
        
        reqs.on('error', (error) => {
            console.error('Error:', error);
        });
        
        reqs.write(data);
        reqs.end();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('POST');



  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
