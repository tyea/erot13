function rot13(string) {
	var from = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	var to = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
	var index = function (character) {
		return from.indexOf(character);
	};
	var translate = function (character) {
		var position = index(character);
		return position > -1 ? to[position] : character;
	};
	return string.split("").map(translate).join("");
}

function erot13() {
	var elements = document.querySelectorAll("a[data-erot13]");
	for (var i = 0; i < elements.length; i += 1) {
		var element = elements[i];
		var emailAddress = rot13(element.dataset.erot13);
		element.href = "mailto:" + emailAddress;
		var overwrite = element.dataset.hasOwnProperty("erot13Overwrite");
		if (overwrite) {
			element.innerText = emailAddress;
		}
	}
}

document.addEventListener("DOMContentLoaded", erot13);

