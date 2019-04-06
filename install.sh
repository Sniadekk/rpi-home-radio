# Install gcc
sudo apt-get install make gcc g++
# Install ffmpeg & other libraries in RaspberryPi by the following steps-->
sudo apt-get install libmp3lame-dev
cd /usr/src
sudo git clone git://git.videolan.org/x264
cd x264
sudo ./configure --host=arm-unknown-linux-gnueabi --enable-static --disable-opencl --enable-shared
sudo make
sudo make install
# This installs libmp3lame and x264 libraries
cd /usr/src
sudo git clone git://source.ffmpeg.org/ffmpeg.git ffmpeg
cd ffmpeg
sudo ./configure --arch=armv7-a --target-os=linux --enable-gpl --enable-libx264 --enable-nonfree --enable-libmp3lame --extra-cflags='-march=armv7-a -mfpu=neon-vfpv4 -mfloat-abi=hard'
sudo make -j4
sudo make install
sudo ldconfig
# clone needed repositories
git clone https://github.com/Sniadekk/home-fm-server
git clone https://github.com/Sniadekk/home-fm-client
git clone https://github.com/somu1795/fm_transmitter.git
# install needed dependencies
cd home-fm-client
npm install
# build server
cd ../home-fm-server
cargo build
