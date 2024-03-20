
## Temperature Conversion App with JWT Authentication

```bash
#installation
$ npm install

# development
$ npm run start
```

### Implementation of JWT Authentication

- Initialised JWT Module from `nestjs/jwt` package in `auth.module.ts` file
  - using `secret` from `.env` file
  - setting expiration time as 24 hours
 
- Created an API POST `auth/login`
  - which allows user to login via email and password
  - returns `accessToken` is user is valid
 
    <img width="1403" alt="image" src="https://github.com/kashyapkathrani/temperature-conversion/assets/138456813/3d279729-4cd2-4442-9f94-353adb560db9">

- To `/temperature-conversion` API passing accessToken in header
  - retrieveing accessToken from header
  - verfying and decoding accessToken using JWT Service
    - throwing error if its invalid
  - If token is valid
    - storing decoded data to request object in order to access them while processing the request
 
#### Valid Access Token
<img width="1390" alt="image" src="https://github.com/kashyapkathrani/temperature-conversion/assets/138456813/a0163f8b-4ec9-494b-9d02-0373a5941b29">

#### Invalid Access Token
<img width="1387" alt="image" src="https://github.com/kashyapkathrani/temperature-conversion/assets/138456813/503a6027-0595-4ce1-b7a6-4a1db5ed59aa">

