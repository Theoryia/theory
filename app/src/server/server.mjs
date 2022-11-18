import express from 'express';

const app = express();

app.use(express.static('./picwebapp'));

app.listen(8080, () => {
  console.log('server working...');
});