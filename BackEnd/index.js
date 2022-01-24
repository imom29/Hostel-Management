const connectToMongo = require('./db');
const express = require('express');
const app = express();
const cors = require('cors')
connectToMongo();

const PORT = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
app.listen(PORT,()=>{
    console.log(`Hostel management server running on http://localhost:${PORT}`);
}) 