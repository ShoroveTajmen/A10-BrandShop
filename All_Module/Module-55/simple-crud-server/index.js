const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");

//middleware
const corsOptions ={
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))
//for findingg post body
app.use(express.json());



const uri =
  "mongodb+srv://user:1234@cluster0.es62grd.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const database = client.db('usersDB');
    const userCollection = database.collection('users');

    app.get('/users', async(req, res)=> {
        const cursor = userCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })

    app.post('/users', async(req, res)=>{
        const user = req.body;
        console.log('new user', user);
        const result = await userCollection.insertOne(user);
        res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





app.get("/", (req, res) => {
  res.send("SIMPLE CRUD IS RUNNINGG");
});

app.listen(port, () => {
  console.log(`simple crud is running on port, ${port}`);
});
