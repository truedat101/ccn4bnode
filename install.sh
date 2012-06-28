#!/bin/bash
echo "================================================================================"
echo "=                                                                              ="
echo "=                                                                              ="
echo "================================================================================"
echo "grab the latest CCNx package v0.6.0"
cd external
wget https://github.com/ProjectCCNx/ccnx/zipball/ccnx-0.6.0 -O ccnx-0.6.0.zip
unzip ccnx-0.6.0.zip
mv ProjectCCNx* ccnx-0.6.0
cd ccnx-0.6.0
if [ x`which gmake` != "x" ]; then
  echo "Using GNU make";
  gmake
else
  make
fi
