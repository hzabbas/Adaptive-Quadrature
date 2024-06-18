# Adaptive Quadrature Algorithm 📈

This project demonstrates the implementation of an adaptive quadrature algorithm to approximate the integral of a given function. The adaptive quadrature algorithm used here specifically employs Simpson's rule for numerical integration. The project is implemented in HTML with embedded CSS and JavaScript, and it utilizes Plotly.js for plotting the function curve and integration process.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Example Function](#example-function)
- [Visualization](#visualization)

## Introduction 🌟
Adaptive quadrature is a method of numerical integration that recursively subdivides the integration interval and applies a quadrature rule to each subinterval. This project showcases how to use adaptive quadrature to approximate the integral of the function \( f(x) = \frac{100}{x^2} \sin \left(\frac{10}{x}\right) \).

## Features ✨
- Implementation of adaptive quadrature using Simpson's rule.
- Responsive web page design using Pico.css.
- Function curve visualization using Plotly.js.
- Subscription form for user engagement.

## Getting Started 🚀
To run this project, simply open the `index.html` file in your web browser. The page will display the function curve and the result of the adaptive quadrature integration.
- Also see online through the [link](https://hzabbas.github.io/Adaptive-Quadrature/) ✨


### Prerequisites 📋
- A modern web browser that supports JavaScript.
- Internet connection to load external libraries (Pico.css and Plotly.js).

### Installation 💻
No installation is required. Just download or clone this repository and open the `index.html` file in your browser.

## Usage 📘
1. Open the `index.html` file in your web browser.
2. The web page will automatically display the function curve and the result of the adaptive quadrature integration.
3. The result section shows the approximate integral of the function within the specified interval.

## Example Function 🔢
The function used in this example is:

\[ f(x) = \frac{100}{x^2} \sin \left(\frac{10}{x}\right) \]

The integration interval is from \( a = 1.0 \) to \( b = 3.0 \) with a tolerance of \( 1 \times 10^{-4} \).

## Visualization 📊
The function curve is plotted using Plotly.js. The curve visualizes the behavior of the function over the specified interval, providing insight into the function's characteristics and the integration process.

## Acknowledgements 🙌
- [Pico.css](https://picocss.com/)
- [Plotly.js](https://plotly.com/javascript/)
