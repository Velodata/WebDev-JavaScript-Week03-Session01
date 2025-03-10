# Week 03 - JavaScript Events

In this lesson we will learn a bit about JavaScript Events, and how to use jQuery ajax to download data.

Events are a super important tool in JavaScript. They allow web pages to "react" to a user's decisions.

Events are especially useful in front end development. By using JavaScript events we enable the user to have engagement with a web page, and ideally they are able to trigger changes to the page. This could be fade on scroll, highlight on hover and more.

Take your time learning about events and make sure to have a go at trying each lesson in this repository.

Ultimately, you will learn how to add cool event triggers to your web pages.

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

In this next example, the content of the `<h1>` element gets changed when a user clicks on it:

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

-   onChange | listens for a change that the user does to a field (input)
-   onFocus | user engages in the input field
-   onBlur | leave the area that had the focus
-   onSubmit | What happens after something is submitted
-   onReset | what happens when it is done and resets

**MOUSE EVENTS**

-   onMouseOver | mouse hovering
-   onMouseOut | When then mouse is removed from that hovering

**CLICK EVENTS**

-   onClick | what function occurs when the item clicked
-   onDblClick | same as above but with the double click

**LOAD EVENTS**

-   onLoad | what happens when the page loads, when an item loads
-   onError | Set that to be when an error occurs

**SCROLL**

-   Watches for intersecting elements to trigger events

## 📌 The oninput Event

The `oninput` event is often use to perform a certain action when a user is entering data.

Below is an example of how to use the oninput to change the content of an input field.

```html
<input type="text" id="fname" oninput="upperCase()" />
```

## 📌 The onchange Event

The `onchange` event is often used in combination with validation of input fields.

Below is an example of how to use the onchange. The `upperCase()` function will be called when a user changes the content of an input field.

```html
<input type="text" id="fname" onchange="lowerCase()" />
```

## 📌 The onmouseover and onmouseout Events

The `onmouseover` and `onmouseout` events can be used to trigger a function when the user mouses over, or out of, an HTML element:

-   Example: Mouse Over Me - we can run this code in Lesson 01 of this respository

```html
<!DOCTYPE html>
<html>
	<body>
		<h1>JavaScript HTML Events</h1>
		<h2>The onmouseover Attribute</h2>
		<div onMouseOver="mOver(this)" onMouseOut="mOut(this)" style="background-color:#D94A38;width:120px;height:20px;padding:40px;">Mouse Over Me</div>
		<script>
			function mOver(obj) {
				obj.innerHTML = "Thank You";
			}
			function mOut(obj) {
				obj.innerHTML = "Mouse Over Me";
			}
		</script>
	</body>
</html>
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

# Week 03 - JavaScript Functions

So now it's time to learn about JavaScript functions.

At the end of learning about functions we will have a go at writing functions and changing elements using events in the Lessons included in this Repository.

&nbsp;

&nbsp;

## 📌 JavaScript Function Definitions

JavaScript functions are **defined** with the `function` keyword.

You can use a function **declaration** or a function **expression**.

&nbsp;

&nbsp;

## 📌 Function Declarations

Functions are declared with the following syntax:

```js
function functionName(parameters) {
	// code to be executed
}
```

Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).

-   Example

```js
function myFunction(a, b) {
	return a * b;
}
```

&nbsp;

&nbsp;

## 📌 Function Expressions

A JavaScript function can also be defined using an expression.

A function expression can be stored in a variable:

```js
const x = function (a, b) {
	return a * b;
};
```

After a function expression has been stored in a variable, the variable can be used as a function:

-   Example

```js
const x = function (a, b) {
	return a * b;
};
let z = x(4, 3);
```

&nbsp;

&nbsp;

## 📌 Functions Can Be Used as Values

JavaScript functions can be used as values:

In this next example we can how a variable `x` gets created by feeding it the output value of a function.

```js
function myFunction(a, b) {
	return a * b;
}
let x = myFunction(4, 3);
```

&nbsp;

&nbsp;

## 📌 Using Parameters with JavaScript Functions

A JavaScript function does not perform any checking on parameter values (arguments)

Function **parameters** are the **names** listed in the function definition.

Function **arguments** are the real **values** passed to (and received by) the function.

-   JavaScript function definitions do not specify data types for parameters.

-   JavaScript functions do not perform type checking on the passed arguments.

-   JavaScript functions do not check the number of arguments received.

```js
function F0_Populate_ChildDataTable(laRowData, lcAction) {
	if ($.fn.DataTable.isDataTable("#ChildDataTable")) {
		//  YES!  initialised
		$("#ChildDataTableContainer").empty();
		$("#ChildDataTableContainer").append(F0_FormatChildDataTable());
	}

	var lcString = laRowData[0];
	$("#Modal_Tyres_Single_Logo").attr("src", "/assets/img/LOGO_LARGE_" + lcString.toUpperCase() + ".png");
	F0_Ajax_ChildDataTable(laRowData, lcAction);
	format_column_width();
}
```

&nbsp;

&nbsp;

## 📌 Calling a JavaScript Function

The code inside a JavaScript function will execute when "something" invokes it.

The code inside a function is not executed when the function is **defined**.

The code inside a function is executed when the function is **invoked**.

It's really common to use the term **"call a function"** instead of **"invoke a function"**.

-   Invoking a Function as a Function

```js
function myFunction(a, b) {
	return a * b;
}

myFunction(10, 2); // Will return 20
```

The function above does not belong to any object. But in JavaScript there is always a default global object.

In HTML the default global object is the HTML page itself, so the function above "belongs" to the HTML page.

In a browser the page object is the browser window. The function above automatically becomes a window function.

&nbsp;

&nbsp;

## 📌 What is the `this` object?

In JavaScript, the `this` keyword refers to an object.

Which object depends on how `this` is being invoked (used or called).

The `this` keyword refers to different objects depending on how it is used:

In an object method, `this` refers to the object.

Alone, this refers to the global object.

When used in a function, `this` refers to the global object.

When used in an event, `this` refers to the element that received the event.

&nbsp;

&nbsp;

## 📌 Functions can be used in intricate Object Methods

The example below creates an object with 3 properties, firstName, lastName, fullName.

```js
const person = {
	firstName: "John",
	lastName: "Doe",
	fullName: function () {
		return this.firstName + " " + this.lastName;
	},
};

// This will return "John Doe":
console.log("You just created a person name " + person.fullName());
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

# A Brief History of jQuery

## Origins (2006)

-   jQuery was created by John Resig and released in January 2006 at BarCamp NYC.

-   At the time, JavaScript was clunky to work with due to cross-browser inconsistencies.

-   Developers had to write separate code for Internet Explorer, Firefox, and Safari, making web development frustrating.

## Why jQuery?

-   JavaScript had no easy way to select HTML elements, manipulate the DOM, or handle AJAX requests.

-   Developers had to use long, repetitive vanilla JS or rely on multiple libraries.

-   jQuery was introduced as a lightweight, fast, and easy-to-use JavaScript library that simplified DOM manipulation.


## Early Adoption (2006 - 2010)

-   jQuery quickly became the most popular JavaScript library.
-   It provided an easy way to do:
    -   DOM selection: $("#element").hide();
    -   Event handling: $("button").click(function() {...});
    -   AJAX requests: $.ajax({...});
    -   Animations: $("#box").fadeOut();
-   By 2010, over 50% of top websites were using jQuery.

## Peak Popularity (2010 - 2015)

-   Major companies like Google, Microsoft, IBM, and Netflix adopted jQuery.
-   jQuery UI and jQuery Mobile were introduced to help build interactive web apps and mobile-friendly websites.
-   It was included by default in WordPress, Bootstrap, and many CMS platforms.

## Is jQuery Still Relevant?

-   While not as dominant, jQuery is still used in:
-   Legacy projects that rely on older tech.
-   WordPress and Bootstrap (though newer versions phase it out).
-   Quick prototyping due to its simplicity.
-   However, for new projects, many developers prefer modern frameworks.

## jQuery in One Sentence

*"jQuery was a game-changing JavaScript library that simplified web development by making DOM manipulation, event handling, and AJAX easy, but with the rise of modern JavaScript frameworks, its usage has declined."*

Would you like a simple timeline graphic for your students?

&nbsp;

&nbsp;

&nbsp;

&nbsp;

# A Random User Generator

# 🎯 Here's a jQuery AJAX + Radio Buttons + Formatted User example system

### 🔥 Features:
- ✅ **AJAX request** to fetch a **random user**.
- ✅ **Dynamically populates a user card** with:
  - 🏷️ Full Name
  - 🌎 Country
  - ✉️ Email
  - 📷 Profile Picture
- ✅ **Nicely formatted UI** using **CSS**.
- ✅ **Radio buttons for gender selection**.

---

## 📜 HTML, CSS & jQuery Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formatted AJAX User Data</title>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <style>
        /* Center everything */
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
            background-color: #f4f4f4;
        }

        /* Style the radio button container */
        .radio-group {
            display: flex;
            flex-direction: column;  
            align-items: center;     
            gap: 10px;               
            margin-bottom: 20px;
        }

        /* Button styling */
        button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            font-size: 16px;
            border-radius: 5px;
        }

        button:hover {
            background-color: #0056b3;
        }

        /* User Card */
        .user-card {
            background: white;
            padding: 20px;
            margin: 20px auto;
            width: 300px;
            border-radius: 10px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            text-align: center;
        }

        .user-card img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin-bottom: 10px;
        }

        .user-card p {
            margin: 5px 0;
            font-size: 16px;
            color: #333;
        }
    </style>
</head>
<body>

    <h1>Get a Random User</h1>

    <!-- Radio Buttons for Gender Selection -->
    <div class="radio-group">
        <label>
            <input type="radio" name="gender" value="male" checked> Male
        </label>
        <label>
            <input type="radio" name="gender" value="female"> Female
        </label>
    </div>

    <button id="fetchUser">Fetch User</button>

    <!-- User Info Card -->
    <div class="user-card" id="userCard" style="display: none;">
        <img id="userImage" src="" alt="User Photo">
        <p><strong>Name:</strong> <span id="userName"></span></p>
        <p><strong>Country:</strong> <span id="userCountry"></span></p>
        <p><strong>Email:</strong> <span id="userEmail"></span></p>
    </div>

    <script>
        $(document).ready(function() {
            $("#fetchUser").click(function() {
                var selectedGender = $("input[name='gender']:checked").val();

                $.ajax({
                    url: "https://randomuser.me/api/?gender=" + selectedGender,
                    method: "GET",
                    success: function(data) {
                        var user = data.results[0];

                        $("#userImage").attr("src", user.picture.medium);
                        $("#userName").text(user.name.first + " " + user.name.last);
                        $("#userCountry").text(user.location.country);
                        $("#userEmail").text(user.email);

                        $("#userCard").fadeIn();
                    },
                    error: function() {
                        alert("Error fetching user.");
                    }
                });
            });
        });
    </script>

</body>
</html>
