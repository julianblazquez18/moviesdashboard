const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();

//ruta de las api de movies
const apiMoviesRouter = require('./routes/api/movies')
//ruta de las api de genres
const apiGenresRouter = require('./routes/api/genres')
//ruta de las api de series
const apiSeriesRouter = require('./routes/api/series')

app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.use('/api/movies',apiMoviesRouter);
app.use('/api/genres',apiGenresRouter);
app.use('/api/series',apiSeriesRouter);

app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
