const express = require("express");
const app = express();
var cors = require('cors')
const PORT = process.env.PORT || 3030;

// your code

app.use(cors())

app.get ('/',(req,res)=>{
    res.send('Hi all');
})

app.get ('/data',(req,res)=>{
    var data =['mouhamad','rony','kamil','joelle']
    res.send(data);
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});