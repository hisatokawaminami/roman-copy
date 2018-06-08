# Epicodus Week3 Day 4 Roman Numerals Converter

## Created

06/07/2018

## About

Create a webpage for Roman Numeral Converter

## Specification


|Spec|Input Numbers|Roman Numeral Output|
|:--------|:-------------:|:--------------:|
|Program Input does not take alphabetical characters |Hello| invalid  
|Program check if the inputted numbers are more than 0 and less than 3,999|4,001|invalid
|Program gathers value converts into parseInt "no decimals"| "1.847"| 2
|Convert "1" into "I"|1|I
|Convert "5" into "V"|5|V
|Convert "10" into "X"|10|X
|Convert "50" into "L"|50|L
|Convert "100" into "C"|100|C
|Convert "500" into "D"|500|D
|Convert "1,000" into "M"|1,000|M
|Add the value of all the symbols|2 |II
|When two of the same identical characters in a row the value is added| 20| XX
|When there is three of the same characters in a row side by side the value added|30|XXX
|If a smaller valued character is on the right side of the character this means it is added and the value changes|6|VI
|If a smaller valued character is on the left side of the character this means it is subtracted and changes the value| 4| IV
|Only a single smaller denomination character can be on the lefthand side of the bigger denomination| IIV (3)| invalid (IV or XL are the correct form)
|Add the value of all the symbols|66 |LXVI
|No more than three characters in a row|90|XC NOT LXXXX




## Technology Used

HTML, CSS, Javascript, jQuery, bootstrap

## Installation
Clone from: https://github.com/bpalowski/roman-numeral-converter
or https://github.com/hisatokawaminami/roman-numeral-converter

## Credits
Brian Palowski
Hisato Kawaminami


## License

The MIT License (MIT)

Copyright (c) 2015 Chris Kibble

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
