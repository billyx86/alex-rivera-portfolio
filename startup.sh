#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

if [ ! -d node_modules ]; then
  npm install
fi

# Kill anything already on 8080 so this is idempotent
if command -v fuser >/dev/null 2>&1; then
  fuser -k 8080/tcp 2>/dev/null || true
elif command -v lsof >/dev/null 2>&1; then
  lsof -ti:8080 | xargs -r kill -9 2>/dev/null || true
fi

# Prefer npm run dev if package scripts exist
if npm run | grep -q " dev"; then
  nohup npm run dev > /tmp/portfolio-dev.log 2>&1 &
else
  nohup npx vite dev --host 0.0.0.0 --port 8080 > /tmp/portfolio-dev.log 2>&1 &
fi

echo "Dev server starting on 0.0.0.0:8080 (log: /tmp/portfolio-dev.log)"
