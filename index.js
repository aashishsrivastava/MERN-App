const express = require("express");
const app = express();
// const port = 3000;
const port = process.env.PORT || 5000;

// yt se liya hai server ko host kerne ke liye......
const path = require("path");

const cors = require("cors");
// middle ware
app.use(cors());
app.use(express.json());

// ftudKa9AyECFeXB5

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// mongodb configuration
// mongodb configuration

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://mern-book-store:ftudKa9AyECFeXB5@cluster0.ehz71.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    await client.connect();

    // create a collection of documents
    const bookcollections = client.db("BookInventory").collection("books");

    // insert a book into the database: post method
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await bookcollections.insertOne(data);
      res.send(result);
    });

    //! comment out for category finding
    //  get all books from the database
    // app.get("/all-books", async (req, res) => {
    //   const books = bookcollections.find();
    //   const result = await books.toArray();
    //   res.send(result);
    // });

    // update a book data : patch or update method
    // update a book data : patch or update method

    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;

      // ! const {id} = req.params.id;
      //!       id ko {id} aise likhne par database me data as a new data ke form me add ho jatat hai naki update hota hai ok

      // console.log(id);
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };

      const updateDoc = {
        $set: {
          ...updateBookData,
        },
      };
      const options = { upsert: true };
      // update
      const result = await bookcollections.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    // delete a book data api
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookcollections.deleteOne(filter);
      res.send(result);
    });

    // find by category
    // find by category
    // !  Check Category Values in DATABASE: Ensure that the category values in your database exactly match the query parameter you're using. For example, if you search with category=Fiction, ensure that the database has entries with category: "Fiction".
    //? Consider case sensitivity.......
    // Ensure your category values match exactly.
    // Consider case sensitivity.
    // Use logging to debug the query.
    // Handle empty results properly
    // !  keep in lower-case only beacuse mujhe aisi hi mila Fiction ki jagah fiction likhne se ............   category: "fiction"   ..................
    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
        //? below line chat-gpt se li hai
        // query = { category: req.query.category.toLowerCase() };
      }
      const result = await bookcollections.find(query).toArray();
      // res.send(result);
      //? chatGPT se below msg wala code liya hai
      if (result.length === 0) {
        res.status(404).send({ message: "No books found for this category" });
      } else {
        res.send(result);
      }
    });

    //! code me jyada bakchodi kerne se mongodb clustor se data ki lag jati hai --- data delete ho jata hai

    // to get a single book from data
    //! to get a single book from data
    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookcollections.findOne(filter);
      res.send(result);
    });

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
  app.use(express.static(path.resolve(__dirname, "mern-client", "build")));
  res.sendFile(path.resolve(__dirname, "mern-client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
