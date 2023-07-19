const express = require('express');
const cors = require('cors');
const app = express();

// app.get('/test', (req,res) => {
//     // request and response
//     res.json('test ok5');
// });

app.use(cors());
// need another middleware
app.use(express.json());

app.post('/register', (req,res) => {
    const {username,password} = req.body;
    res.json({requestData:{username,password}});
});

app.listen(4000);
// menggunakan localhost pada port 4000
