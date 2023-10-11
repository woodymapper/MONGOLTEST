const mongoString = "mongodb+srv://woodymapper:chuj2@cluster0.qlfwipq.mongodb.net/?retryWrites=true&w=majority";
const { MongoClient } = require('mongodb');//sterownik o nazwie MongoClient

//stworzenie połączenia z bazą
const client = new MongoClient(mongoString); 


async function main(){


    await client.connect();

    await client.close();


}
main();
