#!/bin/bash
echo "================================================================================"
echo "=                                                                              ="
echo "=                                                                              ="
echo "================================================================================"
echo "grab the latest CCNx package v0.7.0rc1"
cd external
wget https://github.com/ProjectCCNx/ccnx/zipball/ccnx-0.7.0rc1 -O ccnx-0.7.0rc1.zip
unzip ccnx-0.7.0rc1.zip
mv ProjectCCNx* ccnx-0.7.0rc1
cd ccnx-0.7.0rc1
./configure
if [ x`which gmake` != "x" ]; then
  echo "Using GNU make";
  gmake
else
  make
fi
