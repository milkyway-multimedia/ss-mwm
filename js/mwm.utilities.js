var mwm=window.mwm||{jquery:null};mwm.jquery=function(t,e){function n(t){return t.constructor===Array||"undefined"!=typeof t.length&&"undefined"!=typeof t.item}function r(){null===e&&(e=window.jQuery||window.Zepto||window.Sprint||null)}function o(t){t=t||{};for(var e=1;e<arguments.length;e++){var n=arguments[e];if(n)for(var r in n)n.hasOwnProperty(r)&&("object"==typeof n[r]?o(t[r],n[r]):t[r]=n[r])}return t}function i(t,n,o){return r(),e&&e.hasOwnProperty(t)?e[t].apply(this,n):o()}var a,s=t.jquery||null,u=[],c=function(t){function o(n,o,i,a){return r(),a||(a=t),e&&e.hasOwnProperty(n)?e(a)[n].apply(this,o):i(a)}function i(t,e,n){if(n.addEventListener)n.addEventListener(t,e,!1);else if(n.attachEvent)n.attachEvent(t,e);else{var r="on"+t;if(!n.hasOwnProperty(r))return!1;n[r]=e}}if(r(),e)return e(t);var a=this;return t?("string"==typeof t||t instanceof String)&&(t=document.querySelectorAll(t)):t=window,this.ready=function(t,e){return o("ready",[t],function(){"loading"!=document.readyState?t():document.addEventListener("DOMContentLoaded",t)},e)},this.on=function(t,e,n){return o("on",[t,e],function(n){var r=t.split(" "),o=0;for(o;o<r.length;o++)i(r[o],e,n);return a},n)},this.off=function(t,e,n){return o("off",[t,e],function(n){var r=t.split(" "),o=0;for(o;o<r.length;o++)n.removeEventListener(r[o],e);return a},n)},this.once=function(t,e,n){return o("once",[t,n],function(e){return a.on(t,e,function(r){n.apply(this,arguments),e.removeEventListener?e.removeEventListener("click",callbackFn,!1):e.attachEvent?e.detachEvent(t,callbackFn):e.hasOwnProperty("on"+t)&&(e["on"+t]=null)})},e)},this.trigger=function(t,e,r){return o("trigger",[t,e],function(r){var o,i=function(t){return document.body&&"undefined"!=typeof document.body["on"+t]},s=function(t,e){e||(e=window),"string"==typeof t||t instanceof String?e.fireEvent(t):e.dispatchEvent(t)};if(i(t)?document.createEvent?(o=document.createEvent("HTMLEvents"),o.initEvent(t,!0,!1)):o="on"+t:window.CustomEvent?o=new CustomEvent(t,{detail:e}):document.createEvent&&(o=document.createEvent("CustomEvent"),o.initCustomEvent(t,!0,!0,e)),n(r))for(var u=0;u<r.length;u++)s(o,r[u]);else s(o,r);return a},r)},this};u.ajax=function(t){var e=this;return i("ajax",[t],function(){var n=t.hasOwnProperty("type")?t.type:"GET",r=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");if(r.open(n,t.url,!0),r.setRequestHeader("X-Requested-With","XMLHttpRequest"),"POST"===n&&r.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),(t.hasOwnProperty("success")||t.hasOwnProperty("error")||t.hasOwnProperty("complete"))&&(r.onreadystatechange=function(){if(4==this.readyState){var e=this.responseText;if(t.hasOwnProperty("dataType")&&"JSON"===t.dataType)try{e=window.JSON?JSON.parse(e):{}}catch(n){e={}}t.hasOwnProperty("success")&&this.status>=200&&this.status<400?t.success(e,this.status,this):t.hasOwnProperty("error")&&t.error(e,this.status,this),t.hasOwnProperty("complete")&&t.complete(e,this.status,this)}}),"POST"===n){var o=t.hasOwnProperty("data")?t.data:{};r.send(o)}else r.send();return e})},u.extend=function(t,e){var n=[].slice.call(arguments),r=[].slice.call(arguments);return n.shift(),t!==!0&&r.shift(),i("extend",r,function(){if(t===!0)return o.apply(this,n);e=e||{};for(var r=1;r<n.length;r++)if(n[r])for(var i in n[r])n[r].hasOwnProperty(i)&&(e[i]=n[r][i]);return e})},u.param=function(t){return i("param",[t],function(){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e.join("&")})};for(a in u)u.hasOwnProperty(a)&&(c.prototype[a]=u[a]);if(null===s){s=function(t){return this.constructor===c?this:new c(t)};for(a in u)u.hasOwnProperty(a)&&(s[a]=u[a])}return s}(window.mwm||{},window.jQuery||window.Zepto||window.Sprint||null);var mwm=window.mwm||{utilities:{}};mwm.utilities=function(t,e){var n=t.utilities||{},r={};r.setJquery=function(){null===e&&(e=window.jQuery||window.zepto||window.Sprint||t._jquery)},r.$=function(){return e},r.attachToEvent=function(t,r,o,i){n.setJquery(),e&&(i?e(t).once(r,o):e(t).on(r,o))},r.triggerCustomEvent=function(t,r,o){n.setJquery(),e&&e(t).trigger(r,o)},r.requestViaAjax=function(t,r,o,i,a){n.setJquery(),e&&e.ajax(t,{type:"JSON"===r?"GET":r,dataType:"JSON"===r?r:null,success:o,error:i,complete:a})},r.deferJsFiles=function(t,e,r){t=t.constructor===Array?t:[t];for(var o,i=document.getElementsByTagName("script"),a=!1,s=function(t,e){n.attachToEvent(t,"load",function(){n.triggerCustomEvent(window,"mwm::loaded:js",[e]),r&&r(e)})},u=0;u<t.length;u++){for(var c=i.length;c--;)if(i[c].src==t[u]){a=!0;break}a?a=!1:(o=document.createElement("script"),o.src=t[u],e||(o.async=!0,o.defer=!0),document.getElementsByTagName("body")[0].appendChild(o),s(o,t[u]))}n.triggerCustomEvent(window,"mwm::injected:js",[t])},r.deferCssFiles=function(t,e){if(null!==t&&"object"!=typeof t){var r={};r[t]={},t=r}var o,a=document.getElementsByTagName("link"),s=!1,u=function(t,r){n.attachToEvent(t,"load",function(){n.triggerCustomEvent(window,"mwm::loaded:css",[r]),e&&e(r)})};for(var c in t)if(t.hasOwnProperty(c)){for(var d=a.length;d--;)if(a[d].href==c){s=!0;break}if(s){s=!1;continue}o=document.createElement("link"),o.href=c,o.rel="stylesheet",o.type="text/css",t[c].hasOwnProperty("media")&&(o.media=t[c].media),document.getElementsByTagName("head")[0].appendChild(o),u(o,t[i])}n.triggerCustomEvent(window,"mwm::injected:css",[t])};for(var o in r)r.hasOwnProperty(o)&&!n.hasOwnProperty(o)&&(n[o]=r[o]);return n}(window.mwm||{},window.jQuery||window.Zepto||window.Sprint||(window.mwm&&mwm.jquery?mwm.jquery:null));