#!/bin/bash

# Initial startup script

echo "[INFO] Installing express dependencies"
npm install

echo "[INFO] Installing angular dependencies"
cd angular-src && npm install

cd ..
if [ fuser 3000/tcp ]; then
	echo "[INFO] Killing existing express server"
	fuser -k 3000/tcp
fi

echo "[INFO] Starting fresh express server"
node server &

echo "[INFO] Starting angular server"
cd angular-src && npm start
