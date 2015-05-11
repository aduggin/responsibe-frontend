#!/bin/bash

mkdir temp
mkdir temp/html

curl http://localhost:5000/ > temp/html/index.html
curl http://localhost:5000/base > temp/html/base.html
curl http://localhost:5000/form > temp/html/form.html