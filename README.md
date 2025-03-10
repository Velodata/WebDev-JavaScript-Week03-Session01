# Week 03 - JavaScript Events

In this lesson we will learn a bit about JavaScript Events,  and how to use jQuery ajax to download data.

Events are a super important tool in JavaScript. They allow web pages to "react" to a user's decisions.

Events are especially useful in front end development. By using JavaScript events we enable the user to have engagement with a web page,  and ideally they are able to trigger changes to the page. This could be fade on scroll, highlight on hover and more. 

Take your time learning about events and make sure to have a go at trying each lesson in this repository. 

Ultimately,  you will learn how to add cool event triggers to your web pages.  

## 📌 Reacting to Events

The cool thing about JavaScript events is we can execute specific code event occurs, like when a user clicks on an HTML element. 

Some notable examples (but by no means all) of JavaScript events are:

-   When a user clicks the mouse
-   When a web page has loaded
-   When an image has been loaded
-   When the mouse moves over an element
-   When an input field is changed
-   When an HTML form is submitted
-   When a user enters a specific keystroke 

In this next example, the content of the `<h1>` element gets  changed when a user clicks on it:

```html
<!DOCTYPE html>
<html>
    <body>
        <h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>
    </body>
</html>
```



## 📌 Some Notable Event Types

 **INPUT EVENTS**
 -  onChange | listens for a change that the user does to a field (input)
 -  onFocus | user engages in the input field
 -  onBlur | leave the area that had the focus
 -  onSubmit | What happens after something is submitted
 -  onReset | what happens when it is done and resets

 **MOUSE EVENTS**
 -  onMouseOver | mouse hovering
 -  onMouseOut | When then mouse is removed from that hovering

 **CLICK EVENTS**
 -  onClick | what function occurs when the item clicked
 -  onDblClick | same as above but with the double click

 **LOAD EVENTS**
 -  onLoad | what happens when the page loads, when an item loads
 -  onError | Set that to be when an error occurs

 **SCROLL**
-   Watches for intersecting elements to trigger events


## 📌 The oninput Event

The `oninput` event is often use to perform a certain action when a user is entering data.

Below is an example of how to use the oninput to change the content of an input field.

```html
<input type="text" id="fname" oninput="upperCase()">
```



## 📌 A jQuery and AJAX Example

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
```



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

