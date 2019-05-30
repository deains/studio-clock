(function() {
	function padZero(n, length) {
		length = length || 2;
		var s = '' + n;
		return '0'.repeat(Math.max(0, length - s.length)) + s;
	}

	function frame() {
		requestAnimationFrame(function() {
			var d = new Date();

			document.body.className = 'time-' + d.getSeconds();
			document.querySelector('.digital .hours').innerHTML = padZero(d.getHours());
			document.querySelector('.digital .minutes').innerHTML = padZero(d.getMinutes());
			document.querySelector('.digital .seconds').innerHTML = padZero(d.getSeconds());

			frame();
		});
	};
	frame();
})();

(function() {
	var el = document.getElementById('about');
	var opener = document.getElementById('open-about');
	['click', 'touchend'].forEach(function(type) {
		document.addEventListener(type, function(event) {
			if (event.target instanceof Node && !opener.contains(event.target) && opener !== event.target) {
				el.style.opacity = '';
				setTimeout(function() {
					el.classList.remove('open');
				}, 200);
			}
		});
	});
	opener.addEventListener('click', function() {
		if (!el.classList.contains('open')) {
			el.classList.add('open');
			setTimeout(function() {
				el.style.opacity = '1';
			}, 4);
		} else {
			el.style.opacity = '';
			setTimeout(function() {
				el.classList.remove('open');
			}, 200);
		}
	});
})();
