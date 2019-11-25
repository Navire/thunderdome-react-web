const express = require('express');
const HID = require('node-hid');

const app = express();
const port = process.env.PORT || 3001;

const devices = HID.devices();
const device = new HID.HID(
    5730, //vid
    24291 //pid
);

app.get('/api/mensagem', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));