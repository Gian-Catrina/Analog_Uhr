# 🕒 Analog Clock – JavaScript Project

Welcome to my GitHub repository!   
This project showcases a simple **analog clock** built using **JavaScript, CSS, and HTML**.  
Please note: the **HTML file was not created or modified by me**.

---

## 📌 Overview

This project demonstrates how to create a functional analog clock using basic web technologies.

**Main Features:**
- Moving hour, minute, and second hands  
- Responsive CSS design  
- Smooth background fade effect  
- Clean and minimal structure  

**Technologies Used:**
- **HTML** – Base structure (original file by another creator)  
- **CSS** – Clock design, layout, animations, background effects  
- **JavaScript** – Functionality of the clock hands

---

## 🛠️ JavaScript

The JavaScript file is responsible for calculating and updating the positions of the clock hands based on the current system time.

### 📚 References Used
- `querySelector`:  
  https://www.w3schools.com/jsref/met_document_queryselector.asp
- `Date().getHours()` / `getMinutes()` / `getSeconds()`:  
  https://www.w3schools.com/jsref/jsref_getHours.asp

### 🔧 What the script does:
- Fetches current time using `Date()`  
- Calculates rotation angles for each hand  
- Applies rotation using inline styles  

---

## 🎨 CSS

The CSS file defines the clock layout, visual styling, and animation effects.

### 📚 Reference Used
- `vmin` CSS unit:  
  https://www.w3schools.com/cssref/css_units.php

### 🎨 What the CSS does:
- Creates the clock frame and hands  
- Controls responsive sizing  
- Adds a background fade effect  
- Positions and styles all elements  

---

## 🧩 HTML

The HTML file **was not written by me**.  
It was created by **@retofroelicher**, and serves as the structural base that connects the CSS and JavaScript.

### ✔ Purpose of the HTML:
- Load CSS and JS files  
- Provide the clock container and elements  
- No functional logic, only structure  