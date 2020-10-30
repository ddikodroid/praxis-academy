#!/bin/zsh 

 if [[   (($x -lt  8) && ($y -ge 32))

      || (($z -gt 32) && ($w -eq 16))  ]]

 then

     print "complex combinations"

     print "are not a problem.";

 fi
