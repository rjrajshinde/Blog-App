// what we do in the server.js 
// we are doing exact same routing and returning html pages using express and app.js

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose');
// const Blog = require('./models/blog')
const blogRoutes = require('./routes/blogroutes')

// express app
const app = express();

//connection through mongodb atlas cluster //online mongodb cloud
const db = 'mongodb+srv://user:user@node-blog.xahqd.mongodb.net/blog-king?retryWrites=true&w=majority';
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true  }).then((result)=>{
  app.listen(3000);console.log('Connected to DB')
}).catch((err)=>{
  console.log(err)
})

//ejs new engine
app.set('view engine', 'ejs');

//middlewares and static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});


//blog routes
app.use('/blogs',blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});