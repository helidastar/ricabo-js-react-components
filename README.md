# JS & React/NextJS Components

## Overview

This repository contains solutions for the **JavaScript Fundamentals & React/NextJS Components** activity.  
It is divided into two parts:

- **Part A:** JavaScript Fundamentals (variables, functions, arrays, objects, DOM manipulation, event handling)
- **Part B:** React/Next.js Components (WelcomeCard, Counter, StudentInfo)

---

## How to Run This Project

This project has two parts:  
**Part A: JavaScript Fundamentals** (runs in your browser)  
**Part B: React/Next.js Components** (runs with Node.js and npm)

---

### 1. Clone the Repository

First, you need to clone this repository to your local machine:

```sh
git clone https://github.com/your-username/ricabo-js-react-components.git
```

Replace `your-username` with your actual GitHub username.

---

### 2. Part A – JavaScript Fundamentals

**Location:** `partA-javascript/`

#### Steps:
1. Open the folder `partA-javascript` in your file explorer.
2. Double-click `ricabo.html` to open it in your web browser.
3. You will see the JavaScript Fundamentals UI.
   - Click the button to see JavaScript output and DOM manipulation in action.

---

### 3. Part B – React/Next.js Components

**Location:** `partb-react-components/`

#### Steps:
1. Make sure you have [Node.js and npm](https://nodejs.org/) installed.
2. Open a terminal (Command Prompt, PowerShell, or VS Code terminal).
3. Navigate to the `partb-react-components` folder:
   ```sh
   cd partb-react-components
   ```
4. Install the dependencies (only needed the first time):
   ```sh
   npm install
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```
6. Open your browser and go to [http://localhost:3000](http://localhost:3000)
   - You will see the React/Next.js UI with the WelcomeCard, Counter, and StudentInfo components.

---

## File Structure

```
partA-javascript/
  ricabo.html
  ricabo.js

partb-react-components/
  Components/
    WelcomeCard.js
    Counter.js
    StudentInfo.js
  pages/
    index.js
  styles/
    globals.css
  package.json
  ...
```

---

## Component Explanations

- **WelcomeCard:**  
  Receives a `name` prop and displays a welcome message.

- **Counter:**  
  Uses React's `useState` to manage and display a counter value. Includes buttons to increase, decrease, and reset the count.

- **StudentInfo:**  
  Contains a form with inputs for name, course, and year. Uses state to handle and display the entered information.

---

## Author

Charity T. Ricabo
BSCpE-2

---

## License

This project is for educational purposes.
