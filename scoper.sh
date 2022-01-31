#!/bin/bash
#
# composer global require humbug/php-scoper
#
echo "# Removing the vendor folder..."

rm -r -f vendor
rm composer.lock

echo "# Running Composer..."

composer update --prefer-lowest --with-all-dependencies

echo "# Running Scoper..."

php-scoper add-prefix --force

echo "# Build Housekeeping..."

cd build

composer update nothing --no-dev

composer dump-autoload

rm -r composer.json

rm -r composer.lock

cd ../

echo "# Importing Build..."

rm -r -f vendor

mv build/vendor vendor

rm -r -f build

cat << "EOF"
   /  _/___  / /____  ______   _____  ____  / /_(_)___  ____ 
   / // __ \/ __/ _ \/ ___/ | / / _ \/ __ \/ __/ / __ \/ __ \
 _/ // / / / /_/  __/ /   | |/ /  __/ / / / /_/ / /_/ / / / /
/___/_/ /_/\__/\___/_/    |___/\___/_/ /_/\__/_/\____/_/ /_/ 
EOF
