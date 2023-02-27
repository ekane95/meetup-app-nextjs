import { MongoClient } from "mongodb";

// /api/new-meetup
//POST /api/new-meetup

async function handler(req, res) {

    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect(process.env.DB_URI);
        const db = client.db();

        const meetupCollection = db.collection('meetups');

        const result = await meetupCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Meetup Inserted' });

    }

}

export default handler;