window.addEventListener('DOMContentLoaded', function () {
   const btn = document.createElement('BUTTON');
   btn.textContent = "Click me!";

   let btnSubmit = document.getElementById('btnSubmit');
   let inputText = document.getElementById('inputText');

   let count = 0;

   document.body.appendChild(btn);

   btn.addEventListener('click', function () {
       alert('Hello, friend.')
   });

   btnSubmit.addEventListener('click', function () {
       alert(inputText.value);
   });

   document.getElementById('myDiv').addEventListener("mouseover", function () {
       myDiv.style.backgroundColor = "red";
   });

   document.getElementById('myDiv').addEventListener("mouseout", function () {
       myDiv.style.backgroundColor = "black";
   });

   document.getElementById('paragraph').addEventListener('click', function () {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);

    paragraph.style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
   });

   document.getElementById('nameBtn').addEventListener('click', function () {
      let emptyDiv = document.getElementById('emptyDiv');
      let nameSpan = document.createElement('span');
      let nameText = document.createTextNode('Colin');

      nameSpan.appendChild(nameText);
      emptyDiv.appendChild(nameSpan);
   });

   document.getElementById('friendBtn').addEventListener('click', function () {
       let friendList = document.getElementById('friendList');
       let friendNames = ['Holden', 'Naomi', 'Amos', 'Alex', 'Bobbie', 'Chrisjen', 'Drummer', 'Peaches', 'Miller', 'Cotyar'];

       let friend = document.createElement('li');
       friend.append(friendNames[count]);
       friendList.appendChild(friend);
       count++;

       
   });

});