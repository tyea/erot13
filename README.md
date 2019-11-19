# Erot13

## About

Erot13 is a small JavaScript script for hiding your email address from spammers.

## Installation

Just include the `erot13.js` script somewhere on your webpage, like so:

	<script src="/js/erot13.js"></script>

## Usage

1. Create a `data-erot13` attribute to your `a` tag.
2. Use rot13.com to rot13 your email address.
3. Set the value of the `data-erot13` attribute to your obfuscated email address.
4. If you want the inner HTML of that element to also be the email address, add a `data-erot13-overwrite` attribute.

## Example

Here's an example of just setting `href` property and leaving the inner HTML intact.

	<p><a data-erot13="sbb@rknzcyr.pbz">Click here</a> to send me an email.</p>
	<p><a href="mailto:foo@example.com">Click here</a> to send me an email.</p>

Here's an example of setting the `href` and inner HTML to an email address.

	<p>My email address is <a data-erot13="sbb@rknzcyr.pbz" data-erot13-overwrite></a>.</p>
	<p>My email address is <a href="mailto:foo@example.com">foo@example.com</a>.</p>

It's worth noting:

* You don't need to add the `mailto:` prefix to your email address.
* This script only works for `a` tags.

## Support

* IE9 and above
* Firefox 3.5 and above
* Chrome
* Safari
* Opera
* Chrome for Android
* Safari for iOS

## Author

Written by Tom Yeadon in January 2017.
