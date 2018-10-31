const fs = require('fs');
const request = require('request');

// The name of the audio file to transcribe
const fileName = './OSR_us_000_0010_8k.wav';

// Reads a local audio file and converts it to base64
const file = fs.readFileSync(fileName);
const audioBytes = file.toString('base64');



var data={
    "audio": {
        "content":audioBytes
    },
    "config": {
        "enableAutomaticPunctuation": true,
        "encoding": "LINEAR16",
        "languageCode": "en-US",
        "model": "default"
    }
}

request.post('https://speech.googleapis.com/v1p1beta1/speech:recognize', {
    json: data,
    headers: {
        'Content-Type': 'application/json',
        'Authorization':'Bearer ya29.c.ElpHBukryleKOtPWiMOLFl9oLEsRX33qZ0_kWBwjZV2-vljMZ2M0lMWU3gviv9l-BvpqlrkXk2ONJIrajouSe3VjPu4kssNciTjVRztDIu8AfxNZW02tWrmgx5I'
    }
}, (error, res, body) => {
    if (error) {
        console.error(error)
        return
    }
    console.log(`statusCode: ${res.statusCode}`)
    console.log(JSON.stringify(body))
})


