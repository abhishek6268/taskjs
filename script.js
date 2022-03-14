 //display html tag used in the website or document
var element;
element = document;
console.log(element);


// return html element in the form of an array
var element;
element = document.all;
console.log(element);

// display a specific tag present in array at given index
var element; 
element = document.all[5];
console.log(element);

// display content present in head tag 
var element;
element = document.head;
console.log(element);

// display text present in title 
var element;
element = document.title;
console.log(element);

// display content present in  body
var element;
element = document.body;
console.log(element);


// display content in link form
var element;
element = document.links;
console.log(element);

// return images  present in web page in array form 
var element;
element = document.images;
console.log(element);

// returnforms  present in web page in array form 
var element;
element = document.forms;
console.log(element);

// return  the url of the website 
var element;
element = document.URL;
console.log(element);

// return content available in target id 
var element;
element = document.getElementById("demo");
console.log(element);

// return content available in target class id 
var element;
element = document.getElementsByClassName("navbar");
console.log(element);

// retrun content by targeting a specific tag
var element;
element = document.getElementsByTagName("h1");
console.log(element);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// dom get element methods

// inner text : return the text present inside that particular id or tag
var element;

element =  document.getElementById("demo").innerText;

console.log(element);

// inner html : return the html present in that particular tag or id
var element;

element =  document.getElementById("demo").innerHTML;

console.log(element);

// get attribute :  return the name or tags used inside a particular id or tag

var element;

element = document.getElementById("demo").getAttribute("style");

console.log(element);

// get attribute node :  return the name or tags used inside a particular id or tag

var element;

element = document.getElementById("demo").getAttributeNode("style");

console.log(element);

// attribute :  return all the attributes or tags or object used in that particular id in the for of array

var element;

element = document.getElementById("demo").attributes;

console.log(element);

/////////////////////////////////////////////////////////////////////////////

// dom set methods

// we can set inner text of id with this method

var element;

element = document.getElementById("demo").innerText="Hello world";

console.log(element);

/////////////////////////////////////////////////////////////////////////////

// inner html : we can set inner html with the help of this method

var element;

element = document.getElementById("demo").innerHTML="<h1>hello</h1>";

console.log(element);

// set attribute we can set html tags and there properties with this method

var change;

change =  document.getElementById("demo").setAttribute("style","border : 10px dotted yellow;");

document.getElementById("demo").setAttribute("class","header");

var change = document.getElementById("demo").getAttribute("class");  

console.log(change);

// 13/3/21


// dom set methods

// removeattribute

let ele;

ele = document.getElementById("demo").removeAttribute("h1");

console.log(ele);

/// the above code will remove the given tag from the document


// dom query seelector & query selector all

// query selector : we can use query slector as a alternative of dom set values we can set values of id,classs,tag without using different methids tis will only target the first method present in the given tag

let newvalue;

newvalue = document.querySelector(".navbar").innerHTML;

console.log(newvalue);


newvalue =  document.querySelector("#demo").innerHTML = "<h1>New heading</h1>";

console.log(newvalue);


// query all 
// doubt 

let svalue;

svalue = document.querySelectorAll(".middle-box-container").innerHTML;

console.log(svalue);

// dom css styling methods

//  style : it s used to get and set style in document or modify style with the help of js 

let abhi;

abhi = document.querySelector("#demo").style.backgroundColor = "tan";
console.log(abhi);
abhi = document.querySelector("#demo").style.color = "red";
console.log(abhi);

// class name : it is used to create new class in the document with the help of dom

let silence;

silence =  document.querySelector("#demo1").innerHTML;
console.log(silence);
silence=document.querySelector("#demo1").className = "xyz";
console.log(silence);
silence=document.querySelector(".xyz").style.color = " green ";
console.log(silence);


// class list : it have multiple methids by which we can add or remove a class from given tag

let tar;

tar=document.querySelector("#demo1").classList.add("new","old","easy");
tar=document.querySelector("#demo1").classList;
console.log(tar);
// adding mew classes 
tar = document.getElementsByClassName("new").innerHTML = "<h1>New class </h1>"
tar = document.querySelector(".new").style.color = "yellow";
console.log(tar);
tar=document.querySelector(".old").style.innerHTML="<p>this is a class</p>"
tar=document.querySelector("#demo1").classList;
console.log(tar);
tar=document.querySelector(".old").innerHTML="<p>this is a class</p>"
tar=document.querySelector(".old ").style.color = "tar";
console.log(tar);
// removing new classes







