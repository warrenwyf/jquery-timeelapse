jQuery Timeelapse Plugin
=================

It is a jQuery plugin that makes it easier to support elpase time expressing. e.g. 3hours 30minutes 7seconds .

## Usage

Load jQuery and this plugin first.

```html
<script src="jquery.min.js" type="text/javascript"></script>
<script src="jquery.timeelapse.js" type="text/javascript"></script>
```

Then you can use $.timeelapse to format pretty readable string.
```html
<script type="text/javascript">
<!--
	$.timeelapse.settings.showMsecs = true; // Show milliseconds.
	$.timeelapse.settings.patterns = {			
		milliseconds : '%d毫秒',
		seconds: '%d秒',
		minutes: '%d分',
		hours: '%d小时',
		days: '%d天',
		years: '%d年',
		separator: ' '
	}; // Localization settings.
	var str = $.timeelapse(deltaMsecs);
//-->
</script>
```