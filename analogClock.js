/*
#################################################################
# -*- coding: utf-8 -*-
@Author: Gian Catrina
@Email: gian.catrina@gmx.ch
@Date: 19-11-2025 10:34:14
@Reference1: https://www.w3schools.com/cssref/css_units.php
@Last Modified by: Gian Catrina
@Last Modified time: 19-11-2025 16:13:53
@Description: CSS of a analog clock 
#################################################################
*/


// This is the way, that we can change the html file without directly changing it
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');            // @Reference1: https://www.w3schools.com/jsref/met_document_queryselector.asp
const secondHand = document.querySelector('.second-hand');


function updateClock() {
  const now = new Date(); 

  const hours = now.getHours();   
  const minutes = now.getMinutes();             // @Reference2: https://www.w3schools.com/jsref/jsref_getHours.asp
  const seconds = now.getSeconds(); 

let stunden = hours % 12;                      // This is there, if it is 23:00 the clock couldnt show it without this line of code
   
let hourDegree = stunden * 30;
hourHand.style.transform = "rotate(" + hourDegree + "deg)";


let minutDegree = minutes * 6;
minHand.style.transform = "rotate(" + minutDegree + "deg)";


let secondDegree = seconds * 6;
secondHand.style.transform = "rotate(" + secondDegree + "deg)";

}


setInterval(updateClock, 1000);


updateClock();
