const express = require('express')
const app = express()
const port = process.env.PORT || 5000
// const uri = "mongodb+srv://ieltsAdmin:1w33fjwxjdPEG20i@cluster0.f4xqs.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb+srv://ieltsAdmin:wwaqTSw4r9ruB300@cluster0.f4xqs.mongodb.net/?retryWrites=true&w=majority";
const cors = require('cors');
// middle wares ------------------- 
app.use(cors())
app.use(express.json())


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const todoCollection = client.db("IELTSTodo").collection("task");

        app.post('/task', async (req, res) => {
            const users = req.body;
            const result = await todoCollection.insertOne(users)
            res.send(result)
        })
        app.get('/task/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email }
            const result = await todoCollection.find(query).toArray()
            res.send(result)
        })
        app.delete('/task/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: ObjectId(id) }
            const result = await todoCollection.deleteOne(filter)
            res.send(result);
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
