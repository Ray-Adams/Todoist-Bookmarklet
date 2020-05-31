# Todoist-Bookmarklet
A resource-light bookmarklet alternative for the Todoist extension.

## Installation
If you would like the Todoist pop-up window to have the same dimensions as the Chrome extension, try the **Classic.min.js** bookmarklet, but if you're looking for some additional customization, install the **Custom.min.js** bookmarklet.

### Classic.min.js
Copy and paste the code below into the URL section of a new bookmark.
```javascript
javascript:window.open("https://todoist.com",null,"width=480, height=550").focus();
```

### Custom.min.js
1. Copy and paste the code below into the URL section of a new bookmark.
```javascript
javascript:(function(){var h=prompt("Enter your desired ToDoIst window height (in pixels):"),w=prompt("Enter your desired ToDoIst window width (in pixels):");alert("Copy and paste the following code into the URL section of a new bookmark: javascript:window.open('https://todoist.com',null,'width="+w+", height="+h+"').focus();");})();
```
2. Run the bookmarklet by simply clicking on it (doesn't matter what webpage you're on).
3. A prompt will immediately appear on the screen asking for your desired Todoist window height (in pixels), which will be followed by another prompt asking for the width. (NOTE: Make sure to only enter a **number**, otherwise, the bookmarklet will not function properly.)
4. After submitting both prompts, you will get an alert telling you to copy and paste the code the bookmarklet has generated into a new bookmark (same steps you took to install `custom.min.js`).
5. Try out your newly-generated, customized bookmarklet, and if you like it, you can go ahead and delete the `custom.min.js` bookmark. If not, you can experiment with different dimensions, until you get a bookmarklet that suits your taste.

### Usage
Simply click the bookmarklet when needed, and a Todoist window will appear on your screen, where you will be able to add tasks, set due dates, plan projects, prioritize tasks by color, and use all of the other features that the extension has, while consuming less resources. Keep in mind that using a bookmarklet generated from `custom.min.js` will function the same as `classic.min.js`, but with different dimensions.

### Compatability
Browser | Supported
--------|------------
Chrome |     ✓
Firefox|     ✓
Safari |     ✓
