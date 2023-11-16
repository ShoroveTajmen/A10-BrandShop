const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

//middleare
app.use(cors());
app.use(express.json());


const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.es62grd.mongodb.net/?retryWrites=true&w=majority`;

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

    const menuCollection = client.db("bistroDb").collection("menu");
    const usersCollection = client.db("bistroDb").collection("users");
    const reviewsCollection = client.db("bistroDb").collection("reviews");
    const cartsCollection = client.db("bistroDb").collection("carts");

    //users related api
    app.get('/users', async(req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    })


    app.post('/users', async(req, res) => {
      const user = req.body;
      //insert email if user doesn't exists:
      //you can do this many ways (1. email uniqque, 2. upsert, 3.simple checking)
      const query = {email: user.email}
      const existingUser = await usersCollection.findOne(query);
      if(existingUser){
        return res.send({message: 'user already exists', insertedId: null})
      }
      const result = await usersCollection.insertOne(user);
      res.send(result);
    })



    app.get('/menu', async(req,res)=> {
        const result = await menuCollection.find().toArray();
        res.send(result);
    })

    app.get('/reviews', async(req,res)=> {
        const result = await reviewsCollection.find().toArray();
        res.send(result);
    })

    //carts collection
    app.get('/carts', async(req, res) => {
        const email = req.query.email;
        const query = {email: email};
        const result = await cartsCollection.find(query).toArray();
        res.send(result)
    })

    app.post('/carts', async(req, res) => {
        const cartItem = req.body;
        const result = await cartsCollection.insertOne(cartItem);
        res.send(result);
    })

    app.delete('/carts/:id', async(req, res) => {
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await cartsCollection.deleteOne(query);
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
  res.send("boss is sitting");
});

app.listen(port, () => {
  console.log(`Bistro bosss is sitting on port ${port}`);
});