#!/bin/sh
here=`pwd`
git submodule update --init
git submodule foreach "cd $here/\$path && $0"