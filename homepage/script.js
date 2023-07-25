const express = require('express');
const { spawn } = require('child_process');
const app = express();

app.get('/start/user', (req, res) => {
    const userLoginProcess = spawn('npm', ['start'], { cwd: './user' });

    userLoginProcess.stdout.on('data', (data) => {
        console.log(`User Login: ${data}`);
    });

    userLoginProcess.stderr.on('data', (data) => {
        console.error(`User Login Error: ${data}`);
    });

    res.send('User login project started.');
});

app.get('/start/admin', (req, res) => {
    const adminLoginProcess = spawn('/path/to/node_modules/npm/bin/npm', ['start'], { cwd: './admin' });


    adminLoginProcess.stdout.on('data', (data) => {
        console.log(`Admin Login: ${data}`);
    });

    adminLoginProcess.stderr.on('data', (data) => {
        console.error(`Admin Login Error: ${data}`);
    });

    res.send('Admin login project started.');
});

app.listen(9000, () => {
    console.log('Server running on port 9000.');
});
