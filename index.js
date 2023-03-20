const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

// your code

app.get ('/',(req,res)=>{
    res.send('Hi all');
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});