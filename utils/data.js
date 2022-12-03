const usernames = [
  ['Yogi Bear', 'yogi@gmail.com' ],
  ['Boo Boo', 'booboo@gmail.com' ],
  ['Fred Flintstone', 'fred@gmail.com' ],
  ['Barney Rubble', 'barney@gmail.com' ],
  ['Bugs Bunny', 'bugs@gmail.com' ],
  ['GI Joe', 'joe@gmail.com'],
  ['Doc Holiday', 'doc@gmail.com'],
  ['Wyatt Yerrrp', 'wyatt@gmail.com']
];

const thoughts = [
  'Yabba dabba doo',
  'But Yogi, the ranger?',
  'Screw the ranger Boo Boo',
  'Whats up Doc?',
  'Smarter than your average bear!',
  'Great space coaster!',
  'I\'ll buy that for a dollar!',
  'And knowing is half the battle'
];

  // Load names
const loadUserProfiles = (int) => {
  const userResults = [];
  for (let i = 0; i < int; i++) {
    userResults.push({
      thoughtUsername: usernames[i]
    });
  }
  return userResults;
};

// Load thoughts
const loadThoughts = (int) => {
  const thoughtResults = [];
  for (let i = 0; i < int; i++) {
    userResults.push({
      thoughtTitle: thoughts[i]
    });
  }
  return thoughtResults;
};


module.exports = { loadUserProfiles, loadThoughts };
