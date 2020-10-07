npm install http-server -g
http-server -p $PORT &
chmod +x aria.sh && npm install && tsc && ./aria.sh && npm start
