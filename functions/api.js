const express = require('express');
const serverless = require('serverless-http');
const router = express.Router();

const app = express();
router.get('/',(req,res)=>{
   res.send("this is the main page!");
});

router.get('/services',(req,res)=>{
   res.send("this is a services page!");
});

app.use('./netlify/functions/api',router);
module.exports.handler = serverless(app);