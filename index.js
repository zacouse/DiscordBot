const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '..';

client.once('ready', () => {
    console.log('Your bot is online!');
});

client.on('message', message => {
    try {
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        if (command === 'penis') {
            peniscmd(message);
        }
        else if (command === 'gay') {
            gaycmd(message);
        }
        else if (command === 'pog') {
            pogcmd(message);
        }
    }
    catch (e) {
        if (!message.content.indexOf('//debug') == -1) {
            message.channel.send('I crashed :(');
        }
        else {
            message.channel.send(e.message);
        }

    }
});

client.login('Nzc0ODAwNTIwMjc5MzU5NTEw.X6dDNw.8Y7Y8PyKmOf2cjkFNnhlX7rlYTg');


function peniscmd(message) {
    let scale = '';
    let scaleindex = '\n The scales go in this order: Tiny < Small < OK < Big < Huge.';
    if (message.author.username.toLowerCase() == 'zacouse') {
        scale = 'Huge PP';
    }
    else if (message.author.username.toLowerCase() == 'gru') {
        scale = 'Tiny PP';
    }
    else if (message.author.username.toLowerCase() == 'vesebe') {
        scale = 'Long PP';
    }
    else if (message.author.username.toLowerCase() == 'lumberjohn') {
        scale = 'Short and wide PP';
    }
    else {
        let usernameid = 0

        for (let i = 0; i < message.author.username.length; i++) {
            usernameid += message.author.username.charCodeAt(i);
        }

        if (usernameid % 2 == 0) {
            scale = 'OK PP';
        }
        else if (usernameid % 3 == 0) {
            scale = 'Small PP';
        }
        else if (usernameid % 5 == 0) {
            scale = 'Big PP';
        }
        else if (usernameid % 7 == 0) {
            scale = 'Tiny PP';
        }
        else if (usernameid % 11 == 0) {
            scale = 'Huge PP';
        }
        else {
            scale = 'No PP';
        }
    }
    message.channel.send('You have: ' + scale + scaleindex);
}

function gaycmd(message) {
    let gayness = '';
    if (message.author.username.toLowerCase() == 'zacouse') {
        gayness = 'not gay';
    }
    else if (message.author.username.toLowerCase() == 'gru') {
        gayness = 'a twink';
    }
    else if (message.author.username.toLowerCase() == 'magos knight') {
        gayness = 'a chad';
    }
    else {
        let usernameid = 0

        for (let i = 0; i < message.author.username.length; i++) {
            usernameid += message.author.username.charCodeAt(i);
        }

        if (usernameid % 2 == 0) {
            gayness = 'gay';
        }
        else {
            gayness = 'not gay';
        }
    }
    message.channel.send('You\'re ' + gayness);
}

function pogcmd(message) {
    message.channel.send('<:Pog:769419365447368705> That\'s Pog, my dude! <:Pog:769419365447368705>');
}

function memecmd(message) {
    
}