# Week 03 - JavaScript Events

In this lesson we will learn a bit about JavaScript Events,  and how to use jQuery ajax to download data.

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

In this example, the content of the <h1> element is changed when a user clicks on it:

## 📌 Query & AJAX Example

This example shows how to use **jQuery** to fetch data from an external API using AJAX.

## 📜 HTML & jQuery Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery AJAX Example</title>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>

    <h1>Random User Generator</h1>
    <button id="fetchUser">Get Random User</button>
    <p id="userInfo">Click the button to fetch a user.</p>

    <script>
        $(document).ready(function() {
            $("#fetchUser").click(function() {
                $.ajax({
                    url: "https://randomuser.me/api/",
                    method: "GET",
                    success: function(data) {
                        var user = data.results[0];
                        var fullName = user.name.first + " " + user.name.last;
                        $("#userInfo").html("User: <b>" + fullName + "</b>");
                    },
                    error: function() {
                        $("#userInfo").html("Error fetching user.");
                    }
                });
            });
        });
    </script>

</body>
</html>



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

