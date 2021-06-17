const newDiv = document.createElement("h1");

// and give it some content
const newContent = document.createTextNode("Hello World!");
newDiv.appendChild(newContent);
document.body.appendChild(newDiv);

// add the text node to the newly created div
document.write('<h1>Hello World</h1>');
console.log("HELLO!");