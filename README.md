# Todoist-Bookmarklet
A resource-light bookmarklet alternative for the Todoist extension.

## Installation
If you would like the Todoist pop-up window to have the same dimensions as the Chrome extension, try the **Classic.js** bookmarklet, but if you're looking for some additional customization, install the **Custom.js** bookmarklet.

### Classic.js
Copy and paste the code below into the URL section of a new bookmark.
```javascript
javascript:(function(){var w = window.open('https://todoist.com', null, 'width=480, height=550');w.focus();})();
```
**NOTE**: You can view the beautified JS file here: [classic.js](../master/Beautified/classic.js)

### Custom.js
1. Copy and paste the code below into the URL section of a new bookmark.
```javascript
javascript:(function(){var h = prompt('Enter your desired ToDoIst window height (in pixels):');var w = prompt('Enter your desired ToDoIst window width (in pixels):');alert("Copy and paste the following code into the URL section of a new bookmark: " + "javascript:(function(){var w = window.open('https://todoist.com', null, 'width=" + w + ", height=" + h + "');w.focus();})();");})();
```
2. Run the bookmarklet by simply clicking on it (doesn't matter what webpage you're on).
3. A prompt will immediately appear on the screen asking for your desired Todoist window height (in pixels), which will be followed by another prompt asking for the width. (NOTE: Make sure to only enter a **number**, otherwise, the bookmarklet will not function properly.)
4. After submitting both prompts, you will get an alert telling you to copy and paste the code the bookmarklet has generated into a new bookmark (same steps you took to install `custom.js`).
5. Try out your newly-generated, customized bookmarklet, and if you like it, you can go ahead and delete the `custom.js` bookmark. If not, you can experiment with different dimensions, until you get a bookmarklet that suits your taste.
<br><br>
**NOTE**: You can view the beautified JS file here: [custom.js](../master/Beautified/custom.js)

### Usage
Simply click the bookmarklet when needed, and a Todoist window will pop-up on your screen, where you will be able to add tasks, set due dates, plan projects, prioritize tasks by color, and use all of the other features that the extension has, while consuming less resources. Using a bookmarklet generated from `custom.js` will perform the same as `classic.js`, but with different dimensions.

### Troubleshooting
If the bookmarklet  doesn't run properly in Firefox, that's most likely because you do not have pop-ups enabled. If you would like to enable pop-ups on Firefox, please follow the steps below:
1. Click the menu button, which has three horizontal lines, on the top right.
2. Select `⚙️ Preferences`.
3. Select the `🔒 Privacy & Security` panel.
4. Scroll down to the `Permissions` section, and uncheck the box next to `Block pop-up windows`.
5. The pop-up blocker will now be disabled altogether, and the Todoist bookmarklet should function normally.

### Compatability
Browser | Supported
--------|------------
Chrome |     ✓
Firefox|     ✓
Safari |     ✓
