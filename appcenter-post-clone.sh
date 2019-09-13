#!/usr/bin/env bash

#Install PODs
if [ "$PLATAFORM_IOS" == "true" ]
then
    echo "Running POD INSTALL"
    cd ios && pod install
fi
