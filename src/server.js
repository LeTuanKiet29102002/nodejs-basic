import configViewEngine  from './configs/viewEngine.js';
import express from 'express';
import initWebRoute from './router/web.js';
require('dotenv').config(); 
const app = express()
const port =  process.env.PORT ||9696
configViewEngine(app);

initWebRoute(app);


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})