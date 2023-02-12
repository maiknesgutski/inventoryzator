'use strict';

const express = require('express');
const path = require('path');
const fs = require('fs');

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