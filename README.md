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

- Click the green **"Code"** button on the GitHub page of this repository.
- Select **"Open with GitHub Desktop"** and follow the prompts to clone the repository to your computer.
- After cloning, open the folder in **Visual Studio Code**.

---

### 2. Run Part A – JavaScript Fundamentals

**Location:** `partA-javascript/`

#### Steps:
1. Open the `partA-javascript` folder in your file explorer.
2. Double-click `ricabo.html` to open it in your web browser.
3. You will see the JavaScript Fundamentals UI.
   - Click the button to see JavaScript output and DOM manipulation in action.

---

### 3. Run Part B – React/Next.js Components

**Location:** `partb-react-components/`

#### Steps:
1. Make sure you have [Node.js and npm](https://nodejs.org/) installed.
2. Open a terminal (VS Code is preferred: open VS Code, then press `Ctrl + \`` to open the integrated terminal. You can also use Command Prompt or PowerShell).
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

**Note:**  
You must clone or download the repository to your computer before running any part of the project. It cannot be run directly from GitHub.

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
