#!bin/bash

DIRECTORY=$(pwd)
if find . -iname "*.java"; then
    echo "Ada file Java pada direktori" $DIRECTORY
else
    echo "Tidak ada file Java pada direktori" $DIRECTORY

fi
