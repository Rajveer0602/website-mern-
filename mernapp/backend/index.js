const express = require('express')
const app = express()
const port = 4000
const mongoDB =require("./db")

app.use((req , res , next) =>{
  res.setHeader("Access-Control-Allow-Origin", "http://localhost: 4000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  nexr();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use('/api' , require("./Routes/CreateUser"));
// mongoDB();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})