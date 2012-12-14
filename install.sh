#!/bin/bash
VERSION=ccnx-0.7.0
echo "================================================================================"
echo "=                                                                              ="
echo "=                                                                              ="
echo "================================================================================"
echo "grab the latest $VERSION"
cd external
wget https://github.com/ProjectCCNx/ccnx/zipball/$VERSION -O $VERSION.zip
unzip $VERSION.zip
mv ProjectCCNx* $VERSION
cd $VERSION
./configure
if [ x`which gmake` != "x" ]; then
  echo "Using GNU make";
  gmake
else
  make
fi
