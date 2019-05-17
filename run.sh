cd ./home-fm-server
nohup cargo run > /dev/null 2>&1 & echo "kill -9 $!" > ../stop.sh
chmod +x ../stop.sh