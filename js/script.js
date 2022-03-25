// Copyright (c) 2022 Emilie All rights reserved
//
// Created by: Emilie
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  const base = parseInt(document.getElementById('base-of-triangle').value)
  const height = parseInt(document.getElementById('height-of-triangle').value)

  // process
  const area = (base * height)/2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
   cm'
}