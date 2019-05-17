# install sqlite 
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install sqlite3
sudo apt-get install nginx -y --fix-missing
sudo apt-get install wget
sudo apt-get install libsndfile1-dev
sudo wget https://yt-dl.org/downloads/latest/youtube-dl -O /usr/local/bin/youtube-dl
sudo chmod a+rx /usr/local/bin/youtube-dl

sudo mv ./default /etc/nginx/sites-available/default     

# clone needed repositories
git clone https://github.com/Sniadekk/home-fm-server
# let's just download minified client app without doing all the heavy work on rpi
git clone https://github.com/Miegl/PiFmAdv.git

# go to server directory
cd home-fm-server

# setup db and run migration, selfmade script, because compiling
# diesel-cli simply takes too long and its use for my usecase is little
sqlite3 db < setup.sql

# copy client files into client directory which is hosted by home-fm-server
mkdir static
cd static
mkdir client
cp -a ../../client ./
cd ..
# setup db
./setup_db
# install rust
curl https://sh.rustup.rs -sSf | sh

# set nightly toolchain
rustup default nightly

# build the server
cargo build

# go to PiFmAdv directory and make it
cd ../PiFmAdv/src
# make it
make clean
make