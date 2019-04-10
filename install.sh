# clone needed repositories
git clone https://github.com/Sniadekk/home-fm-server
cd home-fm-server
curl https://sh.rustup.rs -sSf | sh
cargo build
diesel run migration
git clone https://github.com/Sniadekk/home-fm-client
cd ../home-fm-client
npm install
git clone https://github.com/markondej/fm_transmitter.git
cd ../hm_transmitter
make