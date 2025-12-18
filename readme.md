# Emergency Service Directory

A comprehensive web application providing quick access to government emergency services in Bangladesh. This project allows users to easily find and call emergency hotlines with an interactive interface.

## 🚀 Features

- **Interactive Service Cards**: Display emergency services with icons, names, and hotline numbers
- **Favorite System**: Mark your frequently used services with heart icons
- **One-Click Calling**: Quick call functionality with coin-based system
- **Copy to Clipboard**: Copy hotline numbers instantly for later use
- **Call History**: Track all your emergency calls with timestamps
- **Responsive Design**: Fully responsive layout for mobile and desktop devices

## 🛠️ Technology Stack

- HTML5
- Tailwind CSS
- Vanilla JavaScript (DOM Manipulation)
- Font Awesome Icons

---

## 📚 JavaScript Concepts - Q&A

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**getElementById**: This method selects a single element by its unique ID attribute. It returns only one element because IDs should be unique on a page. It's the fastest method for selecting elements.

```javascript
const element = document.getElementById('myId');
```

**getElementsByClassName**: This method selects all elements that have a specific class name. It returns a live HTMLCollection (which automatically updates when the DOM changes). You can access elements using index numbers.

```javascript
const elements = document.getElementsByClassName('myClass');
```

**querySelector**: This method uses CSS selectors to find the first matching element. It's very flexible because you can use any valid CSS selector. It returns a single element or null if not found.

```javascript
const element = document.querySelector('.myClass');
const element2 = document.querySelector('#myId');
```

**querySelectorAll**: Similar to querySelector but returns all matching elements as a static NodeList (doesn't update automatically). It's also very flexible with CSS selectors.

```javascript
const elements = document.querySelectorAll('.myClass');
```

**Key Difference**: querySelector/querySelectorAll are more flexible and modern, while getElement methods are older and slightly faster. querySelector returns static lists while getElementsByClassName returns live collections.

---

### 2. How do you create and insert a new element into the DOM?

Creating and inserting elements into the DOM involves multiple steps:

**Step 1 - Create the Element**:
```javascript
const newDiv = document.createElement('div');
```

**Step 2 - Add Content and Attributes**:
```javascript
newDiv.textContent = 'Hello World';
newDiv.className = 'my-class';
newDiv.id = 'myDiv';
```

**Step 3 - Insert into DOM**:
There are several methods to insert elements:

- **appendChild()**: Adds as the last child
```javascript
parentElement.appendChild(newDiv);
```

- **append()**: Can add multiple elements or text
```javascript
parentElement.append(newDiv, 'Some text');
```

- **prepend()**: Adds at the beginning
```javascript
parentElement.prepend(newDiv);
```

- **insertBefore()**: Inserts before a specific element
```javascript
parentElement.insertBefore(newDiv, referenceElement);
```

- **innerHTML**: Set HTML content directly (less safe)
```javascript
parentElement.innerHTML = '<div class="my-class">Hello</div>';
```

---

### 3. What is Event Bubbling and how does it work?

Event bubbling is the process where an event triggered on a child element propagates (bubbles up) through its parent elements in the DOM tree. When you click on a child element, the event first fires on that element, then on its parent, then on its grandparent, and so on until it reaches the document root.

**Example**:
```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

```javascript
document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent clicked');
});

document.getElementById('child').addEventListener('click', () => {
  console.log('Child clicked');
});
```

**Output when clicking the button**:
1. "Child clicked" (fires first)
2. "Parent clicked" (bubbles up to parent)

This happens automatically and is the default behavior in JavaScript. The event travels from the target element upward through the DOM tree.

---

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique where instead of adding event listeners to individual child elements, you add a single event listener to a parent element. The parent then handles events from all its children using event bubbling.

**Example**:
```javascript
// Instead of adding listeners to each button
document.getElementById('parent').addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    console.log('Button clicked:', e.target.textContent);
  }
});
```

**Why It's Useful**:

1. **Performance**: Only one event listener instead of many reduces memory usage
2. **Dynamic Elements**: Works automatically for elements added later to the DOM
3. **Cleaner Code**: Less code to write and maintain
4. **Better Memory Management**: Easier to remove listeners when needed

In this project, I could use event delegation for the service cards instead of adding individual listeners to each card.

---

### 5. What is the difference between preventDefault() and stopPropagation() methods?

**preventDefault()**:
- Prevents the browser's default action for that event
- Does NOT stop event bubbling
- Used when you want to override default browser behavior

```javascript
link.addEventListener('click', (e) => {
  e.preventDefault(); // Prevents navigation
  // Link won't navigate but event still bubbles
});
```

**Common Uses**:
- Prevent form submission
- Prevent link navigation
- Prevent context menu from appearing

**stopPropagation()**:
- Stops the event from bubbling up to parent elements
- Does NOT prevent default browser behavior
- Used when you want to handle event only at current level

```javascript
child.addEventListener('click', (e) => {
  e.stopPropagation(); // Stops bubbling
  // Parent's click handler won't fire
});
```

**Common Uses**:
- Prevent parent handlers from executing
- Isolate event handling to specific elements
- Avoid unwanted triggers in nested elements

**Key Difference**: preventDefault() stops browser actions, stopPropagation() stops event flow through the DOM tree. You can use both together if needed.

---

## 📦 Project Structure

```
emergency-service-directory/
├── assets/
│   ├── logo.png
│   ├── heart.png
│   ├── coin.png
│   └── [other icons]
├── js/
│   └── script.js
├── index.html
└── README.md
```

## 🎯 Assignment Completion

### Main Requirements (50 Marks) ✅
- [x] Navbar with logo, heart count, coin count, and copy count
- [x] Hero section with gradient background and logo
- [x] Minimum 6 service cards with all required elements
- [x] Call History section with dynamic updates
- [x] Responsive design for mobile devices

### Functionalities ✅
- [x] Heart icon increases count in navbar
- [x] Call button shows alert and deducts 20 coins
- [x] Insufficient coins alert
- [x] Call history updates dynamically
- [x] Clear history button functionality

### Challenges (10 Marks) ✅
- [x] Copy button shows alert and increases copy count (3 marks)
- [x] Hotline number copied to clipboard (4 marks)
- [x] Call time displayed in history section (3 marks)

## 🚀 How to Run

1. Clone the repository
2. Open `index.html` in a web browser
3. Ensure all asset files are in the correct folders

## 👨‍💻 Author

Created as part of Assignment-005

## 📝 License

This project is created for educational purposes.