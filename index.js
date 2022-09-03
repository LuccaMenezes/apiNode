const express = require('express');
const session = require('express-session');
const fileupload = require('express-fileupload');
const cors = require('cors');
const app = express();
var path = require('path');

const port = 5000;

app.use(session({secret: 'shauidxbgsaiuxsavbxsiauxvxuiaxvsaxsauisavasui'}))
app.use(express.json());
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'temp')
}))
app.use(cors());

app.get('/login', ((req, res) => {
    res.status(200).send('Hello World')
}))

app.listen(port,()=> {
    console.log('Rodando na porta 5000');
})

