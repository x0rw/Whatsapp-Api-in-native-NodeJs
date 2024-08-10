# Whatsapp-Api-in-native-NodeJs
Node.js script that creates an HTTP server capable of sending a message via the WhatsApp API using Facebook's Graph API

## How to configure
  Stage 1: Create app on Meta for Developers.
  Stage 2: Set up API access.
  Stage 3: Send a test message using the the builtin curl command.
  Stage 4: Copy appid, app secret and access token to app.js
 ```node
  const APP_ID=3719XXX703;
  const APP_SECRET="36b254fXXXXX1264ab03f5";
  const RECIPIENT_WAID="PHONE NUMBER FORMAT 212605175022";
  const VERSION="v20.0";
  const PHONE_NUMBER_ID="THE SENDER PHONE NUMBER (should be set in the app first)";
  const ACCESS_TOKEN="EAAFSPZCpHuXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXWA7UvHjKedwDdYc5IZD";
  const MESSAGE = "this is a test message";
```

## How To Run
```
$ git clone https://github.com/x0rw/Whatsapp-Api-in-native-NodeJs.git
$ cd Whatsapp-Api-in-native-NodeJs
$ node app.js
   
```
## Dependencies
 no dependencies
