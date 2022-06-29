const express = require('express')
const app = express()
const port = process.env.PORT || 5000
// const uri = "mongodb+srv://ieltsAdmin:1w33fjwxjdPEG20i@cluster0.f4xqs.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb+srv://ieltsAdmin:wwaqTSw4r9ruB300@cluster0.f4xqs.mongodb.net/?retryWrites=true&w=majority";
const cors = require('cors');
// middle wares ------------------- 
app.use(cors())
app.use(express.json())


const { MongoClient, ServerApiVersion } = require('mongodb');
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();

        app.get('/to', async (req, res) => {
            res.send('THIS READy')
        })


    } finally {

    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Hello World IELTS!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
