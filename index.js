#!/usr/bin/env node

const program = require('commander');
const exec = require('child_process').exec;
const qr = require('qrcode');
const base32 = require('thirty-two');

program
    .version('0.1.0')
    .option('-s, --secretKey <secretKey>', 'Auth secret key')
    .option('-t, --type [totp|hotp]', 'Key format type.', "totp")
    .option('-l, --label <value>', 'Label value for identifying which account a key is associated with.')
    .option('-i, --issuer [value]', 'Issuer value', '')
    .parse(process.argv);

// console.log(' type: %j', program.type);
// console.log(' label: %j', program.label);
// console.log(' issuer: %j', program.issuer);
// console.log(' secretKey: %j', program.secretKey);

if (!program.label) {
    console.log(' err: label option is required'); return;
}
if(program.type!=='totp'&&program.type!=='hotp'){
    console.log(' err: invalid type option value');return;
}
if (!program.secretKey) {
    console.log(' err: secretKey option is required'); return;
}

function print(text) {
    qr.toString(text, { type:'terminal' }, function (err, text) {
        if (err) {
            console.error('Error:', err.message)
            process.exit(1)
        }

        console.log(text)
        console.log('\n')
    })
}

// var key = base32.encode(program.secretKey.toUpperCase()).toString('utf8');
// key = key.trim().toUpperCase();

var text = `otpauth://${program.type}/${program.issuer}:${program.label}?secret=${program.secretKey}&issuer=${program.issuer}`;

print(text);