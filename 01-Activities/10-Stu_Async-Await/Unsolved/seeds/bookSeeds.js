const sequelize = require('../config/connection'); // Import the connection to the database.

const Book = require('../models/Book');
const Library = require('../models/Library');

const bookSeedData = require('./bookSeedData.json');
const librarySeedData = require('./librarySeedData.json'); 

// TODO Use async / await to Refactor the seedDatabase function below
const seedDatabase = async () => { 
  await sequelize.sync({ force: true }); // Add the `async` keyword to the function `seedDatabase` to make Asynchronous.

// Add the `await` keyword infront of the expressions inside the `async` function.
  await Book.bulkCreate(bookSeedData); // Once JavaScript recogonizes the `await` keyword it waits for the promise to be fufilled before moving on.

  await Library.bulkCreate(librarySeedData);

  process.exit(0); // This is the last line of the function, so it will be the last thing to run.
};

seedDatabase(); // This is the function call that starts the process of seeding the database.
