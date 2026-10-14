#!/bin/bash
set -e

echo "====================================================="
echo "   Pushing Portfolio to GitHub (with correct src/ structure)"
echo "====================================================="
echo ""
echo "If you don't have a token yet, create one in 10 seconds at:"
echo "👉 https://github.com/settings/tokens/new"
echo "   (Give it any note like 'portfolio', tick [x] 'repo', click 'Generate token')"
echo ""
printf "Paste your GitHub Token (starts with ghp_): "
read -s TOKEN
echo ""

if [ -z "$TOKEN" ]; then
  echo "❌ Token cannot be empty. Aborting."
  exit 1
fi

echo "Pushing code to GitHub..."
git remote set-url origin "https://Pratik14581:${TOKEN}@github.com/Pratik14581/pratik-s.portfolio.git"
git push -u origin main --force
git remote set-url origin "https://github.com/Pratik14581/pratik-s.portfolio.git"

echo ""
echo "====================================================="
echo "🎉 SUCCESS! All files and folders pushed to GitHub!"
echo "Vercel is now automatically rebuilding your website."
echo "====================================================="
