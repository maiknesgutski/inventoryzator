'use strict';

import { User } from './models/user.js';
import express from 'express';
import path from 'path';

// Constants
const PORT = 9595;
const HOST = "0.0.0.0";

// APP
const app = express();

// Host all the static files frome the public directory
app.use(express.static(path.resolve('public')));

app.listen(PORT, HOST, () => {
    console.log(`Listening on http://${HOST}:${PORT}`);
});

app.get('/ha', async (req, res) => {
    let user = new User();
    console.log(user.rand_users.toString());
    console.log(await user.test_db_connection());
    res.send(user.rand_users.toString())
});