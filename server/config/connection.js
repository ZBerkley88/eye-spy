const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URI || 'mongodb://127.0.0.1:27017/privateeye', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;