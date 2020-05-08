# Erot13

## About

Erot13 is a small JavaScript script for hiding your email address from spammers.

## Installation

You can use Yarn as follows:

	yarn add https://github.com/tyea/erot13.git#1.0.0

## Usage

1. Create a `data-erot13` attribute on your `a` tag
2. Apply the rot13 cipher to your email address
3. Set `data-erot13` to your obfuscated email address

Optionally, if you want the inner HTML of that `a` tag	to also be the email address, add a `data-erot13-overwrite` attribute.

## Example

These two links:

	<p><a data-erot13="sbb@rknzcyr.pbz">Click here</a> to send me an email.</p>
	<p>My email address is <a data-erot13="sbb@rknzcyr.pbz" data-erot13-overwrite></a>.</p>

Will become:

	<p><a href="mailto:foo@example.com">Click here</a> to send me an email.</p>
	<p>My email address is <a href="mailto:foo@example.com">foo@example.com</a>.</p>

## Notes

* You don't need to add the `mailto:` prefix to your email address
* This script only works for `a` tags

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
