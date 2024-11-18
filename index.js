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
newList.insertAdjacentElement("afterbegin",ptag4);
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
 const newString = "<p>Scuba diving</p>";
 console.log (newString);
/*
#5. Set the innerHTML of the list with the new item you just created. What happens 
when you do that?

Då ersätts hela listan av den nya strängen.
 */

const main = document.querySelector("main");
// main.innerHTML= newString;

/* #6.Comment out that previous line(s) of code and the three items that you had before 
you should exist again. How can you add that last item and still keep the three other
 ones? There is a method that is very similar to the insertAdjecentElement that will 
 take your HTML string and add it to the list. Try to add your new item to the 
 beginning of the list. */

 main.innerHTML += newString;

/* #7. Add three more items to the end of list, but try and do it with a loop instead. 
Less repetitive code. */

const newString2 = "<p>Try zipline</p>";
const newstring3 = "<p>Learn to dance</p>";
const newstring4 = "<p>See my children grow up</p>";

let addToListAsStrings = [newString2, newstring3, newstring4];


for (let addToList of addToListAsStrings){

     const main = document.querySelector("main");
     main.innerHTML += addToList;
     newList.innerHTML += addToList;

}

console.log("#7. ", newList);

/* #8. How many items do you have in your bucket list now? Log it to the console. 
Use the children property. */

const listCount = newList.children.length;
console.log(listCount);



/* #9. Change the content of the h2 at the to top of the HTML document do have your 
name instead of "Bucky's"; */

const newName = "<h2>Carolin</h2>"

const ownerName= document.querySelector("h2");
ownerName.innerHTML = newName;

/* #10. Replace the first item in your list with a new item. There are several ways 
to do this, but try the replaceChild method out. */



const parentContainer = document.querySelector(".list");
const oldText = parentContainer.querySelector("p");
const newText = document.createElement("p");
newText.innerText = "Travel in Australia";

parentContainer.replaceChild(newText, oldText);


/* #11. Now try replace an element in the middle of the list to a new one. 
Use the same method as before or get creative. */


const theList = parentContainer.querySelectorAll("p");

const oldStatment = theList[4];  

if (oldStatment) {
 
  const newStatment = document.createElement("p");
  newStatment.innerText = "Surf in Hawaii";

  parentContainer.replaceChild(newStatment, oldStatment);
}


/* #12. Remove the last element in the list. lastChildElement combine with the removeChild 
method might work. */

newList.removeChild(newList.lastElementChild);

console.log(newList.lastElementChild);