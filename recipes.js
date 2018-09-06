const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const data = require('./data.js')

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const recipeSchema = new Schema ({
  title: { type: String, unique: true, required: true },
  level: { type: String, enum: ['Easy Peasy','Amateur Chef','UltraPro Chef']},
  ingredients: {type: Array},
  cousine: {type: String, required: true},
  dishtype: {type: String, enum: ['Breakfast', 'Dish', 'Snack', 'Drink', 'Dessert', 'Other']},
  image: {type: String, default: 'https://images.media-allrecipes.com/images/75131.jpg'},
  duration: {type: Number, min: 0},
  creator: {type: String},
  created: {type: Date, default: Date.now},
})

const recipe = mongoose.model('Recipe', recipeSchema);

// recipe.updateOne({ title:'Rigatoni alla Genovese'}, {duration: 100})

// .then((success)=> {
//   console.log(success);
//   console.log('ya did it!')
// })

// .catch((err)=> {
//   console.log(err)
// })

// recipe.deleteOne({title:'Carrot Cake'})

// .then((success)=> {
//   console.log(success);
// })

// .catch((err)=> {
//   console.log(err)
// })

// recipe.insertMany(data)

// .then((theRecies)=> {
//   console.log(theRecies)

// })
// .catch((err)=>{
//   console.log(err)
// })

// recipe.create({title:'Tuna Linguini', level:'Amateur', ingredients: ['Tuna','Linguini'], cousine:'Nautical Italian', dishtype:'Other', duration:'120', creator:'Chef Maria',})
// .then ((response)=> {
//   console.log(response)
//   console.log(recipe.title)
// })
// .catch ((err)=> {
//   console.log(err)
// })