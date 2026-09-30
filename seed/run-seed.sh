#!/usr/bin/env bash
# Sends seed.graphql to the AppSync API in amplify_outputs.json using its API key.
# Run from the project root: bash seed/run-seed.sh
set -euo pipefail

node -e "
const o = require('./amplify_outputs.json').data;
const query = require('fs').readFileSync('seed/seed.graphql', 'utf8');
fetch(o.url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'x-api-key': o.api_key },
  body: JSON.stringify({ query }),
})
  .then((r) => r.json())
  .then((r) => {
    const created = Object.values(r.data || {}).filter(Boolean).length;
    console.log('Created', created, 'records');
    (r.errors || []).slice(0, 5).forEach((e) => console.log('Error:', e.message));
  });
"
