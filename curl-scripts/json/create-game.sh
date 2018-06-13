!/bin/bash

curl "https://tic-tac-toe-wdi.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data
{
}
  # "game": {
  #   "id": ,
  #   "cells": ["","","","","","","","",""],
  #   "over": false,
  #   "player_x": {
  #     "id": 1,
  #     "email": "and@and.com"
  #   },
  #   "player_o": null
  # }
