const express = require('express')
const app = express()
const PORT = 5000 

app.get('/', (req, res) => {
    res.send('Hello World! 3')
    
})

app.listen(PORT,()=>console.log('server listening on port',PORT))

//connection db 
const db_user ='root'
const db_password ='example'
const db_port = 27017
const db_host = 'localhost'
mongoose.connect('mongodb://root:example@mongo:27017').then(()=>console.log('db connected'))

 var test = document.getElementById()