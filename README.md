# google-auth-qr-cli

`google-auth-qr-cli` is a simple tool for printing qr code of google authanticator key. You can scan qr code quickly for adding it to Google Authanticator app.

# Installing:

Installation via `npm`:

     npm install google-auth-qr-cli -g

This will install `google-auth-qr-cli` globally so that it may be run from the command line.

## Usage:

     google-auth-qr-cli [options]


## Options:

    -V, --version                output the version number
    -s, --secretKey <secretKey>  Auth secret key
    -t, --type [totp|hotp]       Key format type. (default: totp)
    -l, --label <value>          Label value for identifying which account a key is associated with.
    -i, --issuer [value]         Issuer value (default: )
    -h, --help                   output usage information

