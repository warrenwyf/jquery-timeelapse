 /**
 *
 * jQuery Time Elapse Plugin
 *
 * Copyright (c) 2013 Wu Yongfeng (warrenwyf [at] gmail.com)
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 * https://github.com/warrenwyf/jquery-timeelapse
 *
 * Version: 1.0.0
 *
 */
 (function($){
	$.timeelapse = function(deltaMsecs){
		return toPrettyString(deltaMsecs);
	};
	
	$$ = $.timeelapse;
	
	$.extend($$, {
		settings: {
			showMsecs: false,
			patterns: {
				milliseconds : '%d ms',
				seconds: '%d s',
				minutes: '%d m',
				hours: '%d Hours',
				days: '%d Days',
				years: '%d Years',
				separator: ' '
			}
		},
		
		/**
		* Replace %d in pattern with the number.
		*/
		getString: function(patternName, number) {
			if( patternName && number > 0 ){
				var p = this.settings.patterns[patternName];
				if(p===undefined)
					return;
				if(patternName==='milliseconds' && !this.settings.showMsecs)
					return;				
				
				return p.replace(/%d/g, number);
			}
		},
	
		/**
		* Format milliseconds to readable string.
		*/
		toPrettyString: function(deltaMsecs) {	
			var milliseconds = Math.abs(deltaMsecs);
			var dMilliseconds = Math.floor(milliseconds % 1000);
			var seconds = milliseconds / 1000;
			var dSeconds = Math.floor(seconds % 60);
			var minutes = seconds / 60;
			var dMinutes = Math.floor(minutes % 60);
			var hours = minutes / 60;
			var dHours = Math.floor(hours % 24);
			var days = hours / 24;
			var dDays = Math.floor(days % 365);
			var dYears = Math.floor(days / 365);
			
			var p = this.settings.patterns;
			var words = [
				this.getString('years', Math.floor(dYears)) ,
				this.getString('days', Math.floor(dDays)) ,
				this.getString('hours', Math.floor(dHours)) ,
				this.getString('minutes', Math.floor(dMinutes)) ,
				this.getString('seconds', Math.floor(dSeconds)),
				this.getString('milliseconds', Math.floor(dMilliseconds))];
			var separator = p.separator===undefined ? " " : p.separator;			
			return $.trim(words.join(separator));
		}
	});
	
	function toPrettyString(deltaMsecs) {
		return $$.toPrettyString(deltaMsecs);
	}
	
 })(jQuery);