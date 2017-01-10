# erot13

## Introduction

This small JavaScript sciprt will allow you to hide your email address from pesky spammers! Load it on your webpage and tag up email addresses with a specific tag and you're ready to go.

## Installation

Download the `erot13.min.js` (or the `erot.js` if you want a readable script) and include it on your webpage like so:

	<script src="/js/erot13.js"></script>

## Usage
	
1. Add a class of `erot13` to any element that contains an email address.
2. Copy the email address and rot13 it. (Use [this website](http://www.rot13.com) if in doubt.)
3. Add the rot13 email address into a data attribute called `data-erot13`.
4. Remove the email address from element.

If you follow the instructions above your email address element will end up looking like this:

	My email address is <a class="erot13" data-erot13="sbbone@rknzcyr.pbz"></a>, so drop me a line!
	
And upon render will look like this:

	My email address is <a href="mailto:foobar@example.com" class="erot13" data-erot13="sbbone@rknzcyr.pbz">foobar@example.com</a>, so drop me a line!

Whenever the page loads this script will loop over any elements with a class of `erot13` and populate them with their real email address. For `<a>` elements it will add a `href="mailto:"` attribute as well.

## Support

* IE9 and above
* Firefox 3.5 and above
* Chrome
* Safari
* Opera
* Chrome for Android
* Safari for iOS

## About

The name is a combination of email and ROT13... simple, huh?

## Author

Tom Yeadon
