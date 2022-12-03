const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { loadUserProfiles, loadThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  // empty the db
  await User.deleteMany({});
  await Thought.deleteMany({});

  // load thoughts and names and init user array
  const thoughts = loadThoughts(8);
  const userProfiles = loadUserProfiles(8);
  const users = [];

  // loading
  for (let i = 0; i < 8; i++) {
    let currUserName = userProfiles[i][0];
    console.log(currUserName);
    let currUserEmail = userProfiles[i][1];
    users.push({
      username: currUserName,
      email: currUserEmail,
    });
  }

  await User.collection.insertMany(users);

  await Thought.collection.insertMany(thoughts);

  //process.exit(0);
});
