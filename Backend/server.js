const express = require('express');

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World');

})


app.post('/calculate', (req, res) => {
  let { left, right, operation } = req.body;
  console.log(req.body)

  
    res.status(200).send( {response: eval(`${left} ${operation} ${right}`), exp: `${left} ${operation} ${right}`})
  
})

app.listen(8000, () => {
  console.log('Listening on port 8000...')
})