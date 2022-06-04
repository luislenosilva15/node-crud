const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://app:app@dbmongo.es6pw.mongodb.net/?retryWrites=true&w=majority');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });

kitty.save().then(() => console.log('meow'));