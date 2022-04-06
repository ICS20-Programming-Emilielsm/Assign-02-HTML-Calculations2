// Copyright (c) 2022 Ms Raffin All rights reserved
// Created by: Emilie
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates area of the triangle.
 */
function calculate () {
  // input
  let radius = parseFloat(document.getElementById('radius').value)

  
  // process
  let area = Math.PI * radius**2 
  let circumfrence = 2 * Math.PI * radius 
  
  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area.toFixed(2) + ' cm²'
   document.getElementById('circumfrence').innerHTML = 'Circumfrence is: ' + circumfrence.toFixed(2) + ' cm'
}