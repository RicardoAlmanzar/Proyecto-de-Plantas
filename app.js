const express = require('express')
const app = express(); 
const port = process.env.PORT || 3000;

app.set('view engine','ejs');
app.set('views',path.join(dirname, 'views'))
app.use(express.static(path.join(dirname,'../public')));

app.get('/', (req, res)=>{
    res.render('/pages/home')
})

app.get('/contacts',(req, res)=>{res.render('/pages/contacts')})
app.listen(port, ()=>{
console.log(`Servidor corriendo en http://localhost:${port}`);
})