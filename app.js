const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req,res) => {
	res.send('mmasi my baby girl, kee way?');
})

app.get('/demo', (req, res) => {
	res.set('X-full-stack', 'baby boy 4l')
	res.status(418);
	res.send('i prefer monster energy drink');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
