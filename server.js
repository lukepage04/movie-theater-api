const express = require('express');
const app = express();

const usersRouter = require('./routes/users');
const showsRouter = require('./routes/shows');

app.use('/users', usersRouter);
app.use('/shows', showsRouter);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
