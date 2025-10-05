

<h1>Emergency Hotline lists are Here in this website</h1>

<br>
<ol>
  <h2>Answer these questions</h2>
  <li>What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? </li>
  <p> <b>Answer: </b> <br> <br>
    <b> getElementById:</b> This function only select the specific element declared with id in DOM and only work for that particular element. <br><br>
    <b> getElementsByClassName: </b> This function selects all the element with same class name in DOM and works for those particular elements. <br><br>
    <b> querySelector:</b> Used to select the first element that matches a CSS selector (like .class, #id, div p, etc.). You can use any CSS-style selector with it. Example: document.querySelector(".item") selects the first element with class="item". Returns The first matching element (or null if not found).<br><br>
   <b> querySelectorAll: </b> <br> This function selects all elements that match a given CSS selector and returns them as a NodeList.
  </p> <br> <br>


  
  <li> How do you create and insert a new element into the DOM? </li>
  <p> <b>Answer: </b> <br><br> 
  To create and insert a new element into the DOM, first use document.createElement() to create the element in memory, then add content using textContent or innerHTML, and finally insert it into the webpage using appendChild() inside a parent element.
  </p>
 <br><br>
  <li>What is Event Bubbling and how does it work?</li>
   <p> <b>Answer: </b> <br><br>
   Event Bubbling is a process in JavaScript where an event starts from the innermost element (the one that was actually clicked or interacted with) and then bubbles up to its parent elements one by one until it reaches the document root.
In simple terms, the event is first handled by the target element and then moves upward through its ancestors in the DOM hierarchy.
   </p> <br> <br>
  
  <li>What is Event Delegation in JavaScript? Why is it useful?</li>
  <p> <b>Answer: </b> <br> <br>
  Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of adding listeners to multiple child elements. The parent listens for events on its children using event bubbling.

<b> Why it is useful: </b>
<ul>
  <li> 
Reduces the number of event listeners, improving performance.</li>
<li>
Works for dynamically added elements, which don’t exist when the page first loads.</li>
<li>
Makes code simpler and easier to manage.
  </li>
</ul>
  </p>
  <br><br>
  <li>What is the difference between preventDefault() and stopPropagation() methods?</li>
  <p> <b>Answer: </b> <br><br> 
  <b>preventDefault():</b> This method prevents the default action of an event from happening. For example, it can stop a link from navigating or a form from submitting.

<b> stopPropagation():</b> This method stops the event from bubbling or capturing further up or down the DOM tree, so parent or ancestor elements don’t receive the event.
  </p>
</ol>
