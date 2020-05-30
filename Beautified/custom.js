javascript:(function(){
	var h = prompt('Enter your desired ToDoIst window height (in pixels):');
	var w = prompt('Enter your desired ToDoIst window width (in pixels):');
	alert("Copy and paste the following code into the URL section of a new bookmark: " + "javascript:(function(){var w = window.open('https://todoist.com', null, 'width=" + w + ", height=" + h + "');w.focus();})();");
})();
