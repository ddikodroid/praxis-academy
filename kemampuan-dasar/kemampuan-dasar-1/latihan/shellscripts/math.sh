#!/bin/zsh

a=27; b=4; c=98; (( a += (a + b * c) - 4 ))
print $a;
