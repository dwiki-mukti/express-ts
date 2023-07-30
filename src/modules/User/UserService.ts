import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import UserAdit from "../../models/UserAdit";

export default class UserService {
    public static async listUserMongoDB() {

        const uri = "mongodb+srv://243dwikicom:Omw1J61yGxEPQy5a@firstcluster.ycbzpqz.mongodb.net/library_app?retryWrites=true&w=majority";
        const client = new MongoClient(uri);
        await client.connect();

        const dbName = "library_app";
        const collectionName = "books";

        const database = client.db(dbName);
        const collection = database.collection(collectionName);


        try {
            const insertManyResult = await collection.insertMany([{ name: 'Dwiki' }, { name: 'Adit' }]);
            console.log(`${insertManyResult.insertedCount} documents successfully inserted.\n`);
        } catch (err) {
            console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
        }
        var cursor: any = []

        try {
            cursor = await collection.find({ prepTimeInMinutes: { $lt: 45 } }).sort({ name: 1 });
            await cursor.forEach((recipe: any) => {
                console.log(`${recipe.name} has ${recipe.ingredients.length} ingredients and takes ${recipe.prepTimeInMinutes} minutes to make.`);
            });
            // add a linebreak
            console.log();
        } catch (err) {
            console.error(`Something went wrong trying to find the documents: ${err}\n`);
        }

        return cursor
    }



    public static async listUserMongoose() {
        let uri = "mongodb+srv://243dwikicom:Omw1J61yGxEPQy5a@firstcluster.ycbzpqz.mongodb.net/?retryWrites=true&w=majority"
        uri = "mongodb+srv://mongo:A6kCIRGKmwb8w6ZO@cluster0.roxyhkr.mongodb.net/?retryWrites=true&w=majority"
        mongoose.connect(uri)
            .then(() => console.info("Connected to database!."))
            .catch((err) => console.log(err));

        const data = await UserAdit.find();

        return data
    }
}