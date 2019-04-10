# clone needed repositories
git clone https://github.com/Sniadekk/home-fm-server
git clone https://github.com/Sniadekk/home-fm-client
git clone https://github.com/markondej/fm_transmitter.git
cd home-fm-server
curl https://sh.rustup.rs -sSf | sh
cargo build
diesel run migration
cd ../home-fm-client
npm install
cd ../fm_transmitter
make