# to run this script, you need permission.
# to do this (from your root workspace directory):
# -cd tools
# - chmod +x scripts/webp.sh

# to run (from your root workspace directory):
# tools/shell/webp.sh ./<PATH_TO_IMAGES>

# SCRIPT STARTS HERE

#!/usr/bin/env bash
DIR=${1?Error: no directory provided. pls provide a relative path to the directory containing png images.}

echo $DIR
cd $DIR
mkdir ./public
rm ./public/*.webp
for file in *; do
    if [[ "$file" =~ \.(png|jpg|jpeg|gif)$ ]]; then
        cwebp -q 80 "$file" -o "./public/${file%.*}.webp"
    fi
done
