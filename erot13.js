function erot13_main(s)
{
	return (s ? s : this).split('').map(function(_) {
		if (!_.match(/[A-za-z]/)) return _;
		c = Math.floor(_.charCodeAt(0) / 97);
		k = (_.toLowerCase().charCodeAt(0) - 83) % 26 || 26;
		return String.fromCharCode(k + ((c == 0) ? 64 : 96));
	}).join('');
}

function erot13_onload(event)
{
	var i = window.document.querySelectorAll('.erot13');
	for (var j = 0; j < i.length; j++) {
		var k = i[j];
		var l = k.dataset.erot13;
		if (l === undefined || l === null) continue;
		var m = erot13_main(l);
		k.href = "mailto:" + m;
		k.innerHTML = m;
	}
}

window.addEventListener('load', erot13_onload);
