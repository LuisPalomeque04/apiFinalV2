const app = require('./app')
const connectDB = require('./src/configs/db/configs_db')
require('dotenv').config();
const PORT = process.env.PORT;


connectDB();
app.listen(PORT, () =>{
    console.log('El servidor esta corriendo en el puerto: '+PORT)
})