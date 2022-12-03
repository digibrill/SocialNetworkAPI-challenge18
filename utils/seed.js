const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { loadUserProfiles, loadThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  // empty the db
  await User.deleteMany({});
  await Thought.deleteMany({});

  // load thoughts and names and init user array
  const thoughts = loadThoughts();
  const userProfiles = loadUserProfiles();
  const users = [];

  // loading
  for (let i = 0; i < 8; i++) {
    currUserName = userProfiles[i][0];
    currUserEmail = userProfiles[i][1];
    users.push({
      currUserName,
      currUserEmail,
    });
  }

  await User.collection.insertMany(users);

  await Thought.collection.insertMany(thoughts);

  //process.exit(0);
});
