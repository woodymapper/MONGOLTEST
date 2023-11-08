
const { MongoClient } = require('mongodb');

const url = "mongodb+srv://woodymapper:chuj2@cluster0.qlfwipq.mongodb.net/?retryWrites=true&w=majority";



async function connect() {
    const client =  new MongoClient(url);
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Lista dziala (Ping)");
        return client;
    } catch (e) {
        console.log("Error" + e);
        process.exit(1);
    }
}

async function getAllListings(client) {
  
    const collection = await client.db('sample_airbnb').collection('listingsAndReviews');

    let list = collection.find().toArray();
    return list;
}

function close(client) {
    client.close();
    console.log("Wylaczone");
}

module.exports = {connect, getAllListings, close}