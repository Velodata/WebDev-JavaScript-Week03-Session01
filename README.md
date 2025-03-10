# WebDev-JavaScript-Week03-Session01

In this lesson we will learn a bit about JavaScript Events,  and how to use jQuery ajax to download data.





# Week 03 - JavaScript Events

Events are a super important tool in JavaScript. They allow web pages to "react" to a user's decisions.

Events are especially useful in front end development. By using JavaScript events we enable the user to have engagement with a web page,  and ideally they are able to trigger changes to the page. This could be fade on scroll, highlight on hover and more. 

Take your time learning about events and make sure to have a go at trying each lesson in this repository. 

Ultimately,  you will learn how to add cool event triggers to your web pages.  

## 📌 Reacting to Events

A JavaScript can be executed when an event occurs, like when a user clicks on an HTML element. 

An event can cause JavaScript to be executed when say,  a user clicks on an element.

Examples of HTML events:

-   When a user clicks the mouse
-   When a web page has loaded
-   When an image has been loaded
-   When the mouse moves over an element
-   When an input field is changed
-   When an HTML form is submitted
-   When a user strokes a key

-   A string (or a text string) is a series of characters like `John Doe`
-   Strings are written with quotes. You can use single or double quotes:
-   For example:

    ```js
    // Using double quotes:
    let carName1 = "Volvo XC60";

    // Using single quotes:
    let carName2 = "Volvo XC60";
    ```

-   You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

-   For Example: You can double quotes insides single quotes, or single quotes inside double quotes:

    ```js
    // Single quote inside double quotes:
    let answer1 = "It's alright";

    // Single quotes inside double quotes:
    let answer2 = "He is called 'Johnny'";

    // Double quotes inside single quotes:
    let answer3 = 'He is called "Johnny"';
    ```

## 📌 JavaScript Numbers

-   All JavaScript numbers are stored as decimal numbers (floating point).
-   Numbers can be written with, or without decimals:
-   For example: The following statements are equivalent in JavaScript:

    ```js
    // With decimals:
    let x1 = 34.0;

    // Without decimals:
    let x2 = 34;
    ```

    ### Exponential Notation

    Extra large or extra small numbers can be written with scientific (exponential) notation:

    A good practice is to put spaces around operators ( = + - \* / ):

    For example:

    ```js
    let y = 123e5; // 12300000
    let z = 123e-5; // 0.00123
    ```

    ### the JavaScript Big Integer

    By default, all JavaScript numbers are stored in a 64-bit floating-point format.

    However, a new datatype (ES2020) was recently introduced which can be used to store integer values that are
    too big to be represented by a normal JavaScript Number.

    For example:

    ```js
    let x = BigInt("123456789012345678901234567890");
    ```

