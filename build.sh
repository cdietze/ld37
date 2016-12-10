#!/bin/bash
set -e
git rm -rf --ignore-unmatch ld37 index.html favicon.ico
git clone git@github.com:cdietze/ld37.git build
mvn -f build/pom.xml -Phtml package
cp -rv build/html/target/ld37-html-1.0-SNAPSHOT/ .
rm -rf META-INF WEB-INF
rm -rf build
git add .
git commit -a -m "Rebuilt HTML project"
