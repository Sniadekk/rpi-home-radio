<p align="center">
  <img width="375" height="375" src="https://github.com/Sniadekk/rusty-radio/blob/master/logo.png">
</p>

Give your old radios a second life and turn them into on demand music players!

## What it is?

Rusty radio is an application that lets you broadcast your favourite songs via radio, so you can listen it on every device with fm receiver.

## What features does it have?
* Persist all of the previously played songs in database, making them easily accessible in the future 
* While nothing is currently scheduled, it plays random songs saved in the database
* Schedule songs and have the queue synchronized across all connected devices
* Download songs from youtube
* Fetch your favourite songs from Spotify, so you can always easily access songs you currently like to listen


## Installation

```
git clone https://github.com/Sniadekk/rusty-radio.git
chmod +x ./install.sh
./install.sh
```
and that should be it!
<p>Be patient. Compiling all of the code might take some time on RPi</p>

## Getting started

In order to turn on the application simply go to the rusty-radio directory and 
```
chmod +x ./run.sh
./run.sh
``` 
and soon app should be accesible in the browser with RPi's IP.
The above script produces file capable of stopping the application which is named `stop.sh`.
If you want to stop your application just simply do `./stop.sh`. 

## How to be able to login into Spotify?

Because of the strict rules of Spotify's API, it needs to know all of the possible domains it can redirect to, so we need a little hack.
Simply add DNS record in your local network pointing `rusty-radio` to your RPi IP.

## Legal notes
In a lot of countries broadcasting without permission is restricted, thus I do not take responsibility for harmful actions done with code made by me.
Using small antennas, not capable of broadcasting signal strong enough to leave our property should not cause any harm to others, so please do not use stronger hardware than you need.

## References
Huge thanks to [miegl](https://github.com/miegl), creator of the [PiFmAdv](https://github.com/miegl/PiFmAdv) library without which the rusty-radio wouldn't exist!
