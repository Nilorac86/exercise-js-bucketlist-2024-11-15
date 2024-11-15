/* #1. Create a <p> using the createElement method. When you have a reference to your 
new element, change its innerText to something that you would like to have on your 
bucket list, and then append it to the DOM with the appendChild method. Where does 
this element go? How can you get it do be added directly after the already existing <p>.
*/
const ptag = document.createElement("p");

ptag.innerText= "Skydiving";

const newList = document.querySelector(".list");

newList.appendChild(ptag);

/*
#2. Create another <p> with an item you would like to have on you bucket list. This 
time add it to the DOM, right after your existing <p>-tags with the help of the 
insertAdjecentElement method. This method accepts a position argument. Which value 
should that argument have?

afterbegin
afterend
beforebegin
beforeend
Try them out!
*/
 
const ptag2 = document.createElement("p");
const ptag3 = document.createElement("p");
const ptag4 = document.createElement("p");
const ptag5 = document.createElement("p");

ptag2.innerText= "Bungyjump";
ptag3.innerText= "Horseback riding in Island";
ptag4.innerText= "Travel in all continents";
ptag5.innerText= "Have a pool";

newList.insertAdjacentElement("afterbegin",ptag2);
newList.insertAdjacentElement("afterend",ptag3);
newList.insertAdjacentElement("beforebegin",ptag4);
newList.insertAdjacentElement("beforeend",ptag5);

/*
#3. innerHTML is an interesting property that exists on HTML elements.
 With that property we can get and set the inner HTML of a HTML element very easy. 
 Try to get (or do you already have it?) the inner HTML from the element that contains 
 all the <p>-tags of your bucket list. Log that to the console.
*/
 console.log(newList);
/*
#4. In order to set the innerHTML of an element we need to create a string that 
contains the HTML code that we want to add to the DOM. It can look something like this:

 "<div>This is a div element as a string</div>";

Now create that string that contains a new item that you want to add to your bucket list.
*/

/*
#5. Set the innerHTML of the list with the new item you just created. What happens 
when you do that?

 */