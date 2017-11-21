const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/contactusers",
  {
    useMongoClient: true
  }
);

const userSeed = [
  {
    call_sign: "K0ECS",
    email: "TRAINING@K0ECS.ORG",
    comments: "Johnson County, KS Emergency Communications Services, Inc.",
    date: new Date(Date.now())
  },
  {
    call_sign: "KS0SA",
    email: "KSMOSATERN@GMAIL.COM",
    comments:
      "Kansas/Wester Missouri SATERN EOC, Kansas City, MO",
    date: new Date(Date.now())
  }  
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
