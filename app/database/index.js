import stitch from "mongodb-stitch";

const client = new stitch.StitchClient('sourcingtrack-zjdxn');
const db = client.service('mongodb', 'mongodb-atlas').db('sourcingTrack1');

function connectToDB() {

    return client.login()
        .then(() =>
            db.collection('users').updateOne({owner_id: client.authedId()}, {$set: {number: 42}}, {upsert: true})
        )
        .then(() =>
            db.collection('users').find({owner_id: client.authedId()})
        )
        .then(docs => {
            console.log("Found docs", docs);
            console.log("[MongoDB Stitch] Connected to Stitch")
        })
        .catch(err => {
            console.error(err)
        });
}

export {connectToDB};