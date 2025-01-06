import input from "./input.js"

//1. feladat
//Isograms
function isIsogram(str){
    return !str.match(/([a-z]).*\1/i);
}
//2. feladat
//Invert values
function invert(array) {
    return array.map(x => x === 0 ? x : -x);
}
 //3. feladat
 //String cleaning
 function stringClean(s){
    return s.replace(/\d/g, "");
}
//4. feladat
//Leap Years
function isLeapYear(year) {
    if(year%400 == 0 ) return true;
    if(year%100 == 0) return false;
    if(year%4 == 0) return true;
    return false;
}
