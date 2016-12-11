/**
 * Created by tema on 27.11.16.
 */

const express = require('express');

const app = express();

app.use('/', express.static(`${__dirname}/prod`));
app.use('/css', express.static(`${__dirname}/prod/css`));
app.use('/js', express.static(`${__dirname}/prod/js`));

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Listening on ${port}`);
});
