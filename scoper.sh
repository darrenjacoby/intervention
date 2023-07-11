#!/bin/bash
echo "# Removing the vendor folder..."

rm -r -f vendor
rm composer.lock

echo "# Running Composer..."

composer update

echo "# Running Scoper..."

vendor/bin/php-scoper add-prefix --force

echo "# Importing Build..."

rm -r -f vendor
mv build/vendor vendor
rm -r -f build
composer update --no-dev

cat << "EOF"
   /  _/___  / /____  ______   _____  ____  / /_(_)___  ____ 
   / // __ \/ __/ _ \/ ___/ | / / _ \/ __ \/ __/ / __ \/ __ \
 _/ // / / / /_/  __/ /   | |/ /  __/ / / / /_/ / /_/ / / / /
/___/_/ /_/\__/\___/_/    |___/\___/_/ /_/\__/_/\____/_/ /_/ 
EOF
