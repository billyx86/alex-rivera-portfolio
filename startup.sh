#!/bin/sh
set -eu
cd "$(dirname "$0")"

if curl -sf -o /dev/null --max-time 2 http://127.0.0.1:8080/; then
  exit 0
fi

if [ -f package.json ] && [ -d node_modules ]; then
  npm run dev >>/tmp/app-startup.log 2>&1 &
elif [ -f package.json ]; then
  npm install >>/tmp/app-startup.log 2>&1
  npm run dev >>/tmp/app-startup.log 2>&1 &
elif [ -f docs/index.html ]; then
  (cd docs && python3 -m http.server 8080 --bind 0.0.0.0) >>/tmp/app-startup.log 2>&1 &
else
  echo "No app entry found" >&2
  exit 1
fi
