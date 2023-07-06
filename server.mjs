import express from 'express'
const app = express();

app.use(express.static('./Website'));

app.listen(8080, () => {
  console.log('server working...');
});