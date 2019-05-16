# install sqlite 
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install sqlite3
# clone needed repositories
git clone https://github.com/Sniadekk/home-fm-server
# let's just download minified client app without doing all the heavy work on rpi
git clone https://github.com/markondej/fm_transmitter.git
cd home-fm-server
# copy client files into client directory which is hosted by home-fm-server
mkdir static
cd static
mkdir client
cp -a ../../client ./client
# install rust
curl https://sh.rustup.rs -sSf | sh
# set nightly toolchain
rustup default nightly
# install cargo tools to run migration
cargo install diesel_cli
# build the server
cargo build
# run migration
cargo install basic-http-server
diesel setup
diesel run migration
# download fm_transmitter lib
cd ../fm_transmitter
# make it
make