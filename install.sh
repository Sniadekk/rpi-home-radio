# clone needed repositories
git clone https://github.com/Sniadekk/home-fm-server
# git clone https://github.com/Sniadekk/home-fm-client
# let's just download minified client app without doing all the heavy work on rpi
git clone https://github.com/markondej/fm_transmitter.git
cd home-fm-server
# install rust
curl https://sh.rustup.rs -sSf | sh
# install cargo tools to run migration
cargo install diesel_cli
# build the server
cargo build
# run migration
diesel run migration
# download fm_transmitter lib
cd ../fm_transmitter
# make it
make