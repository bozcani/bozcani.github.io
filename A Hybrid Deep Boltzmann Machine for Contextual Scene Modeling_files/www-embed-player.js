(function(){var l,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba;
if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={sa:!0},ea={};try{ea.__proto__=da;ca=ea.sa;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;
function n(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.o=b.prototype}
for(var ia="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ja="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ka=function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}(),la=ja,ma=["Reflect",
"construct"],na=0;na<ma.length-1;na++){var oa=ma[na];oa in la||(la[oa]={});la=la[oa]}var pa=ma[ma.length-1];ka!=la[pa]&&null!=ka&&ia(la,pa,{configurable:!0,writable:!0,value:ka});var p=this;function q(a){return void 0!==a}
function r(a){return"string"==typeof a}
function t(a,b,c){a=a.split(".");c=c||p;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&q(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function v(a,b){for(var c=a.split("."),d=b||p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function qa(){}
function ra(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function w(a){return"array"==ra(a)}
function sa(a){var b=ra(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function ta(a){return"function"==ra(a)}
function ua(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var va="closure_uid_"+(1E9*Math.random()>>>0),wa=0;function xa(a,b,c){return a.call.apply(a.bind,arguments)}
function ya(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function x(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?x=xa:x=ya;return x.apply(null,arguments)}
function y(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var z=Date.now||function(){return+new Date};
function A(a,b){function c(){}
c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Wa=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function B(a){if(Error.captureStackTrace)Error.captureStackTrace(this,B);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
A(B,Error);B.prototype.name="CustomError";var za=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function Aa(a){if(!Ba.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Ca,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Fa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ga,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ha,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ia,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ja,"&#0;"));return a}
var Ca=/&/g,Fa=/</g,Ga=/>/g,Ha=/"/g,Ia=/'/g,Ja=/\x00/g,Ba=/[\x00&<>"']/;function Ka(a,b){return a<b?-1:a>b?1:0}
function La(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ma=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Na=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=r(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},Oa=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=r(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e};
function Pa(a,b){a:{var c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function Qa(a,b){var c=Ma(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ra(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Sa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(sa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Ta;a:{var Ua=p.navigator;if(Ua){var Va=Ua.userAgent;if(Va){Ta=Va;break a}}Ta=""}function D(a){return-1!=Ta.indexOf(a)}
;function Wa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Xa(a,b){var c=sa(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Ya(a){var b=Za,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function $a(a){for(var b in a)return!1;return!0}
function ab(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function bb(a){var b={},c;for(c in a)b[c]=a[c];return b}
var cb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function db(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<cb.length;f++)c=cb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function eb(a,b){var c=fb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var gb=D("Opera"),E=D("Trident")||D("MSIE"),hb=D("Edge"),ib=D("Gecko")&&!(-1!=Ta.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),jb=-1!=Ta.toLowerCase().indexOf("webkit")&&!D("Edge");function lb(){var a=p.document;return a?a.documentMode:void 0}
var mb;a:{var nb="",ob=function(){var a=Ta;if(ib)return/rv\:([^\);]+)(\)|;)/.exec(a);if(hb)return/Edge\/([\d\.]+)/.exec(a);if(E)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(jb)return/WebKit\/(\S+)/.exec(a);if(gb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ob&&(nb=ob?ob[1]:"");if(E){var pb=lb();if(null!=pb&&pb>parseFloat(nb)){mb=String(pb);break a}}mb=nb}var qb=mb,fb={};
function F(a){return eb(a,function(){for(var b=0,c=za(String(qb)).split("."),d=za(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=Ka(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||Ka(0==g[2].length,0==h[2].length)||Ka(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var rb;var sb=p.document;rb=sb&&E?lb()||("CSS1Compat"==sb.compatMode?parseInt(qb,10):5):void 0;var tb=!E||9<=Number(rb);!ib&&!E||E&&9<=Number(rb)||ib&&F("1.9.1");E&&F("9");function ub(){this.b="";this.g=vb}
ub.prototype.W=!0;ub.prototype.J=function(){return this.b};
function wb(a){return a instanceof ub&&a.constructor===ub&&a.g===vb?a.b:"type_error:TrustedResourceUrl"}
var vb={};function G(){this.b="";this.g=xb}
G.prototype.W=!0;G.prototype.J=function(){return this.b};
function yb(a){return a instanceof G&&a.constructor===G&&a.g===xb?a.b:"type_error:SafeUrl"}
var zb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Ab(a){if(a instanceof G)return a;a=a.W?a.J():String(a);zb.test(a)||(a="about:invalid#zClosurez");return Bb(a)}
var xb={};function Bb(a){var b=new G;b.b=a;return b}
Bb("about:blank");function Cb(){this.b=""}
Cb.prototype.W=!0;Cb.prototype.J=function(){return this.b};
function Db(a){var b=new Cb;b.b=a;return b}
Db("<!DOCTYPE html>");Db("");Db("<br>");function Eb(a,b){var c=b instanceof G?b:Ab(b);a.href=yb(c)}
function Fb(a,b,c){a.rel=c;a.href=-1!=c.toLowerCase().indexOf("stylesheet")?wb(b):b instanceof ub?wb(b):b instanceof G?yb(b):Ab(b).J()}
function Gb(a,b){a.src=wb(b)}
;function Hb(a,b){this.width=a;this.height=b}
l=Hb.prototype;l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ib(a){var b=document;return r(a)?b.getElementById(a):a}
function Jb(a,b){Wa(b,function(b,d){b&&b.W&&(b=b.J());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Kb.hasOwnProperty(d)?a.setAttribute(Kb[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Kb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Lb(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!tb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Aa(g.name),'"');if(g.type){f.push(' type="',Aa(g.type),'"');var h={};db(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(r(g)?f.className=g:w(g)?f.className=g.join(" "):Jb(f,g));2<d.length&&Mb(e,f,d);return f}
function Mb(a,b,c){function d(c){c&&b.appendChild(r(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];if(!sa(f)||ua(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(ua(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if(ta(f)){g="function"==typeof f.item;break a}}g=!1}C(g?Ra(f):f,d)}}}
function Nb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Ob(a){Pb();var b=new ub;b.b=a;return b}
var Pb=qa;var Qb=document,H=window;function Rb(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Sb=(new Date).getTime();function Tb(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Ub(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;u=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],k=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var u=1518500249}else m=d^f^h,u=1859775393;else 60>c?(m=d&f|h&(d|f),u=2400959708):(m=d^f^h,u=3395469782);m=((a<<5|a>>>27)&4294967295)+m+k+u+b[c]&4294967295;k=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+k&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64;for(;d<c;)if(f[m++]=a[d++],u++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64}
function d(){var a=[],d=8*u;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var k=24;0<=k;k-=8)a[d++]=e[g]>>k&255;return a}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,u;a();return{reset:a,update:c,digest:d,ua:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Vb(a,b,c){var d=[],e=[];if(1==(w(c)?2:1))return e=[b,a],C(d,function(a){e.push(a)}),Wb(e.join(" "));
var f=[],g=[];C(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(a){e.push(a)});
a=Wb(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Wb(a){var b=Ub();b.update(a);return b.ua().toLowerCase()}
;function Xb(a){this.b=a||{cookie:""}}
l=Xb.prototype;l.isEnabled=function(){return navigator.cookieEnabled};
l.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');q(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(z()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
l.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=za(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=q(this.get(a));this.set(a,"",0,b,c);return d};
l.isEmpty=function(){return!this.b.cookie};
l.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=za(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Yb=new Xb("undefined"==typeof document?null:document);Yb.g=3950;function Zb(){var a=[],b=Tb(String(p.location.href)),c=p.__OVERRIDE_SID;null==c&&(c=(new Xb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,null==b&&(b=(new Xb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(p.location.href);return d&&b&&c?[c,Vb(Tb(d),b,a||null)].join(" "):null}return null}
;function $b(a,b,c){this.h=c;this.f=a;this.i=b;this.g=0;this.b=null}
$b.prototype.get=function(){if(0<this.g){this.g--;var a=this.b;this.b=a.next;a.next=null}else a=this.f();return a};
function ac(a,b){a.i(b);a.g<a.h&&(a.g++,b.next=a.b,a.b=b)}
;function bc(a){p.setTimeout(function(){throw a;},0)}
var cc;
function dc(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=x(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(q(c.next)){c=c.next;var a=c.ia;c.ia=null;a()}};
return function(a){d.next={ia:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function ec(){this.g=this.b=null}
var gc=new $b(function(){return new fc},function(a){a.reset()},100);
ec.prototype.add=function(a,b){var c=gc.get();c.set(a,b);this.g?this.g.next=c:this.b=c;this.g=c};
ec.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.g=null),a.next=null);return a};
function fc(){this.next=this.scope=this.b=null}
fc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
fc.prototype.reset=function(){this.next=this.scope=this.b=null};function hc(a,b){ic||jc();kc||(ic(),kc=!0);lc.add(a,b)}
var ic;function jc(){if(-1!=String(p.Promise).indexOf("[native code]")){var a=p.Promise.resolve(void 0);ic=function(){a.then(mc)}}else ic=function(){var a=mc;
!ta(p.setImmediate)||p.Window&&p.Window.prototype&&!D("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(cc||(cc=dc()),cc(a)):p.setImmediate(a)}}
var kc=!1,lc=new ec;function mc(){for(var a;a=lc.remove();){try{a.b.call(a.scope)}catch(b){bc(b)}ac(gc,a)}kc=!1}
;function I(){this.g=this.g;this.B=this.B}
I.prototype.g=!1;I.prototype.dispose=function(){this.g||(this.g=!0,this.l())};
function nc(a,b){a.g?q(void 0)?b.call(void 0):b():(a.B||(a.B=[]),a.B.push(q(void 0)?x(b,void 0):b))}
I.prototype.l=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function oc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function pc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];sa(d)?pc.apply(null,d):oc(d)}}
;function qc(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function rc(a,b){if(a.classList)var c=a.classList.contains(b);else c=qc(a),c=0<=Ma(c,b);return c}
function sc(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):rc(a,"inverted-hdpi")&&(a.className=Na(qc(a),function(a){return"inverted-hdpi"!=a}).join(" "))}
;var tc="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function uc(){}
uc.prototype.next=function(){throw tc;};
uc.prototype.T=function(){return this};
function vc(a){if(a instanceof uc)return a;if("function"==typeof a.T)return a.T(!1);if(sa(a)){var b=0,c=new uc;c.next=function(){for(;;){if(b>=a.length)throw tc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function wc(a,b){if(sa(a))try{C(a,b,void 0)}catch(c){if(c!==tc)throw c;}else{a=vc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==tc)throw c;}}}
function xc(a){if(sa(a))return Ra(a);a=vc(a);var b=[];wc(a,function(a){b.push(a)});
return b}
;E&&F("9");!jb||F("528");ib&&F("1.9b")||E&&F("8")||gb&&F("9.5")||jb&&F("528");ib&&!F("8")||E&&F("9");(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
p.addEventListener("test",qa,b);p.removeEventListener("test",qa,b);return a})();function yc(a){var b=[];zc(new Ac,a,b);return b.join("")}
function Ac(){}
function zc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(w(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),zc(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Bc(d,c),c.push(":"),zc(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Bc(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Cc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Dc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Bc(a,b){b.push('"',a.replace(Dc,function(a){var b=Cc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Cc[a]=b);return b}),'"')}
;function Ec(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function Fc(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function J(a,b){this.b=0;this.m=void 0;this.h=this.g=this.f=null;this.i=this.j=!1;if(a!=qa)try{var c=this;a.call(b,function(a){Gc(c,2,a)},function(a){Gc(c,3,a)})}catch(d){Gc(this,3,d)}}
function Hc(){this.next=this.context=this.g=this.h=this.b=null;this.f=!1}
Hc.prototype.reset=function(){this.context=this.g=this.h=this.b=null;this.f=!1};
var Ic=new $b(function(){return new Hc},function(a){a.reset()},100);
function Jc(a,b,c){var d=Ic.get();d.h=a;d.g=b;d.context=c;return d}
function Kc(a){return new J(function(b,c){c(a)})}
function Lc(a,b,c){Mc(a,b,c,null)||hc(y(b,a))}
function Nc(a){return new J(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],Lc(e,b,c)})}
function Oc(a){return new J(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{aa:!0,value:f}:{aa:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Lc(g,y(e,f,!0),y(e,f,!1));
else b(d)})}
J.prototype.then=function(a,b,c){return Pc(this,ta(a)?a:null,ta(b)?b:null,c)};
Ec(J);function Qc(a,b){var c=Jc(b,b,void 0);c.f=!0;Rc(a,c);return a}
function Sc(a,b){return Pc(a,null,b,void 0)}
J.prototype.cancel=function(a){0==this.b&&hc(function(){var b=new Tc(a);Uc(this,b)},this)};
function Uc(a,b){if(0==a.b)if(a.f){var c=a.f;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.f||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Uc(c,b):(f?(d=f,d.next==c.h&&(c.h=d),d.next=d.next.next):Vc(c),Wc(c,e,3,b)))}a.f=null}else Gc(a,3,b)}
function Rc(a,b){a.g||2!=a.b&&3!=a.b||Xc(a);a.h?a.h.next=b:a.g=b;a.h=b}
function Pc(a,b,c,d){var e=Jc(null,null,null);e.b=new J(function(a,g){e.h=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.g=c?function(b){try{var e=c.call(d,b);!q(e)&&b instanceof Tc?g(b):a(e)}catch(m){g(m)}}:g});
e.b.f=a;Rc(a,e);return e.b}
J.prototype.u=function(a){this.b=0;Gc(this,2,a)};
J.prototype.A=function(a){this.b=0;Gc(this,3,a)};
function Gc(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,Mc(c,a.u,a.A,a)||(a.m=c,a.b=b,a.f=null,Xc(a),3!=b||c instanceof Tc||Yc(a,c)))}
function Mc(a,b,c,d){if(a instanceof J)return Rc(a,Jc(b||qa,c||null,d)),!0;if(Fc(a))return a.then(b,c,d),!0;if(ua(a))try{var e=a.then;if(ta(e))return Zc(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function Zc(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Xc(a){a.j||(a.j=!0,hc(a.B,a))}
function Vc(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.h=null);return b}
J.prototype.B=function(){for(var a;a=Vc(this);)Wc(this,a,this.b,this.m);this.j=!1};
function Wc(a,b,c,d){if(3==c&&b.g&&!b.f)for(;a&&a.i;a=a.f)a.i=!1;if(b.b)b.b.f=null,$c(b,c,d);else try{b.f?b.h.call(b.context):$c(b,c,d)}catch(e){ad.call(null,e)}ac(Ic,b)}
function $c(a,b,c){2==b?a.h.call(a.context,c):a.g&&a.g.call(a.context,c)}
function Yc(a,b){a.i=!0;hc(function(){a.i&&ad.call(null,b)})}
var ad=bc;function Tc(a){B.call(this,a)}
A(Tc,B);Tc.prototype.name="cancel";function K(a){I.call(this);this.j=1;this.h=[];this.i=0;this.b=[];this.f={};this.m=!!a}
A(K,I);l=K.prototype;l.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function bd(a,b,c,d){if(b=a.f[b]){var e=a.b;(b=Pa(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.D(b)}}
l.D=function(a){var b=this.b[a];if(b){var c=this.f[b];0!=this.i?(this.h.push(a),this.b[a+1]=qa):(c&&Qa(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
l.G=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];cd(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.D(c)}}return 0!=e}return!1};
function cd(a,b,c){hc(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.f[a];b&&(C(b,this.D,this),delete this.f[a])}else this.b.length=0,this.f={}};
l.l=function(){K.o.l.call(this);this.clear();this.h.length=0};function dd(a){this.b=a}
dd.prototype.set=function(a,b){q(b)?this.b.set(a,yc(b)):this.b.remove(a)};
dd.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
dd.prototype.remove=function(a){this.b.remove(a)};function ed(a){this.b=a}
A(ed,dd);function fd(a){this.data=a}
function gd(a){return!q(a)||a instanceof fd?a:new fd(a)}
ed.prototype.set=function(a,b){ed.o.set.call(this,a,gd(b))};
ed.prototype.g=function(a){a=ed.o.get.call(this,a);if(!q(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ed.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,!q(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function hd(a){this.b=a}
A(hd,ed);hd.prototype.set=function(a,b,c){if(b=gd(b)){if(c){if(c<z()){hd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=z()}hd.o.set.call(this,a,b)};
hd.prototype.g=function(a,b){var c=hd.o.g.call(this,a);if(c){var d;if(d=!b){d=c.creation;var e=c.expiration;d=!!e&&e<z()||!!d&&d>z()}if(d)hd.prototype.remove.call(this,a);else return c}};function id(a){this.b=a}
A(id,hd);function jd(){}
;function kd(){}
A(kd,jd);kd.prototype.clear=function(){var a=xc(this.T(!0)),b=this;C(a,function(a){b.remove(a)})};function ld(a){this.b=a}
A(ld,kd);l=ld.prototype;l.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.b.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.b.removeItem(a)};
l.T=function(a){var b=0,c=this.b,d=new uc;d.next=function(){if(b>=c.length)throw tc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
l.clear=function(){this.b.clear()};
l.key=function(a){return this.b.key(a)};function md(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
A(md,ld);function nd(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
A(nd,ld);function od(a){if(!ta(a))if(a&&"function"==typeof a.handleEvent)a=x(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(5E3)?-1:p.setTimeout(a,5E3)}
function pd(){var a=null;return Sc(new J(function(b,c){a=od(function(){b(void 0)});
-1==a&&c(Error("Failed to schedule timer."))}),function(b){p.clearTimeout(a);
throw b;})}
;var qd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function L(a){return a.match(qd)}
function rd(a){return a?decodeURI(a):a}
function sd(a,b,c){if(w(b))for(var d=0;d<b.length;d++)sd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function td(a){var b=[],c;for(c in a)sd(c,a[c],b);return b.join("&")}
function ud(a,b){var c=td(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var vd=!1,wd="";function xd(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(vd=!0,a.description)){wd=xd(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){vd=!0;wd="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],vd=!(!a||!a.enabledPlugin))){wd=xd(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");vd=!0;wd=xd(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");vd=!0;wd="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),vd=!0,wd=xd(b.GetVariable("$version"))}catch(c){}})();
var yd=vd,zd=wd;function Ad(a,b){var c="script";c=void 0===c?"":c;var d=a.createElement("link");Fb(d,b,"preload");c&&(d.as=c);(c=a.getElementsByTagName("head")[0])&&c.appendChild(d)}
;var Bd=/^\.google\.(com?\.)?[a-z]{2,3}$/,Cd=/\.(cn|com\.bi|do|sl)$/;function Fd(a){return Bd.test(a)&&!Cd.test(a)}
var Gd=p;function Hd(a){a="https://"+("adservice"+a+"/adsid/integrator.js");var b=["domain="+encodeURIComponent(p.location.hostname)];M[3]>=z()&&b.push("adsid="+encodeURIComponent(M[1]));return a+"?"+b.join("&")}
var M,N;function Id(){Gd=p;M=Gd.googleToken=Gd.googleToken||{};var a=z();M[1]&&M[3]>a&&0<M[2]||(M[1]="",M[2]=-1,M[3]=-1,M[4]="",M[6]="");N=Gd.googleIMState=Gd.googleIMState||{};Fd(N[1])||(N[1]=".google.com");w(N[5])||(N[5]=[]);"boolean"==typeof N[6]||(N[6]=!1);w(N[7])||(N[7]=[]);"number"==typeof N[8]||(N[8]=0)}
function Jd(){Id();return M[1]}
var O={ka:function(){return 0<N[8]},
Ja:function(){N[8]++},
Ka:function(){0<N[8]&&N[8]--},
La:function(){N[8]=0},
shouldRetry:function(){return!1},
ja:function(){return N[5]},
ha:function(a){try{a()}catch(b){p.setTimeout(function(){throw b;},0)}},
fa:function(){if(!O.ka()){var a=p.document,b=function(b){var c=Hd(b);Ad(a,c);b=a.createElement("script");b.type="text/javascript";b.onerror=function(){return p.processGoogleToken({},2)};
c=Ob(c);Gb(b,c);try{(a.head||a.body||a.documentElement).appendChild(b),O.Ja()}catch(f){}},c=N[1];
b(c);".google.com"!=c&&b(".google.com");p.setTimeout(function(){return p.processGoogleToken({},1)},1E3)}}};
function Kd(a){Id();var b=Gd.googleToken[5]||0;a&&(0!=b||M[3]>=z()?O.ha(a):(O.ja().push(a),O.fa()));M[3]>=z()&&M[2]>=z()||O.fa()}
function Ld(a){p.processGoogleToken=p.processGoogleToken||function(a,c){var b=a,e=c;b=void 0===b?{}:b;e=void 0===e?0:e;var f=b.newToken||"",g=parseInt(b.freshLifetimeSecs||"",10)||3600,h=parseInt(b.validLifetimeSecs||"",10)||86400,k=b["1p_jar"]||"";b=b.pucrd||"";Id();1==e?O.La():O.Ka();if(1E-5>Math.random()){var m="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+e;p.google_image_requests||(p.google_image_requests=[]);var u=p.document.createElement("img");u.src=m;p.google_image_requests.push(u)}if(!f&&
O.shouldRetry())Fd(".google.com")&&(N[1]=".google.com"),O.fa();else{m=Gd.googleToken=Gd.googleToken||{};u=0==e&&f&&r(f)&&0<g&&0<h&&r(k);var ha=!(M[3]>=z())&&(5==e||4==e||2==e);if(u||ha)u=z(),m[5]=e,m[1]=f,m[2]=u+1E3*g,m[3]=u+1E3*h,m[4]=k,m[6]=b,Id();if(f||!O.ka()){e=O.ja();for(f=0;f<e.length;f++)O.ha(e[f]);e.length=0}}};
Kd(a)}
;function Md(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var Nd=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var Od=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",Od,void 0);function P(a){Md(Od,arguments)}
function Q(a,b){return a in Od?Od[a]:b}
function R(a){return Q(a,void 0)}
;function Pd(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){S(b)}}:a}
function S(a,b){var c=v("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=Q("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),P("ERRORS",c))}
;function T(a){return Q("EXPERIMENT_FLAGS",{})[a]}
;function Qd(a){a&&(a.dataset?a.dataset[Rd("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Sd(a,b){return a?a.dataset?a.dataset[Rd(b)]:a.getAttribute("data-"+b):null}
var Td={};function Rd(a){return Td[a]||(Td[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function U(a,b){ta(a)&&(a=Pd(a));return window.setTimeout(a,b)}
function Ud(a){window.clearTimeout(a)}
;var Vd=v("ytPubsubPubsubInstance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.D;K.prototype.publish=K.prototype.G;K.prototype.clear=K.prototype.clear;t("ytPubsubPubsubInstance",Vd,void 0);var Wd=v("ytPubsubPubsubSubscribedKeys")||{};t("ytPubsubPubsubSubscribedKeys",Wd,void 0);var Xd=v("ytPubsubPubsubTopicToKeys")||{};t("ytPubsubPubsubTopicToKeys",Xd,void 0);var Yd=v("ytPubsubPubsubIsSynchronous")||{};t("ytPubsubPubsubIsSynchronous",Yd,void 0);
function Zd(a,b){var c=$d();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){Wd[d]&&b.apply(window,c)};
try{Yd[a]?f():U(f,0)}catch(g){S(g)}},void 0);
Wd[d]=!0;Xd[a]||(Xd[a]=[]);Xd[a].push(d);return d}return 0}
function ae(a){var b=$d();b&&("number"==typeof a?a=[a]:r(a)&&(a=[parseInt(a,10)]),C(a,function(a){b.unsubscribeByKey(a);delete Wd[a]}))}
function be(a,b){var c=$d();c&&c.publish.apply(c,arguments)}
function ce(a){var b=$d();if(b)if(b.clear(a),a)de(a);else for(var c in Xd)de(c)}
function $d(){return v("ytPubsubPubsubInstance")}
function de(a){Xd[a]&&(a=Xd[a],C(a,function(a){Wd[a]&&delete Wd[a]}),a.length=0)}
;var ee=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,fe=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function ge(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(ee,""),c=c.replace(fe,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else he(a,b)}
function he(a,b){var c=ie(a),d=document.getElementById(c),e=d&&Sd(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){e=Zd(c,b);var g=""+(b[va]||(b[va]=++wa));je[g]=e}f||(d=ke(a,c,function(){Sd(d,"loaded")||(Qd(d),be(c),U(y(ce,c),0))}))}}
function ke(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
Gb(d,Ob(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function le(a){a=ie(a);var b=document.getElementById(a);b&&(ce(a),b.parentNode.removeChild(b))}
function me(a,b){if(a&&b){var c=""+(b[va]||(b[va]=++wa));(c=je[c])&&ae(c)}}
function ie(a){var b=document.createElement("a");Eb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+La(a)}
var je={};var ne=null;function oe(){var a=Q("BG_I",null),b=Q("BG_IU",null),c=Q("BG_P",void 0);b?ge(b,function(){window.botguard?pe(c):(le(b),S(Error("Unable to load Botguard from "+b),"WARNING"))}):a&&(eval(a),window.botguard?pe(c):S(Error("Unable to load Botguard from JS"),"WARNING"))}
function pe(a){ne=new window.botguard.bg(a);T("botguard_periodic_refresh")&&Nd()}
function qe(){return null!=ne}
function re(){return ne?ne.invoke():null}
;z();var se=q(XMLHttpRequest)?function(){return new XMLHttpRequest}:q(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function te(){if(!se)return null;var a=se();return"open"in a?a:null}
function ue(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function ve(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?w(b[f])?Sa(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
;var we={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},xe=!1;
function ye(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=L(a)[1]||null,e=rd(L(a)[3]||null);d&&e?(d=c,c=L(a),d=L(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?rd(L(c)[3]||null)==e&&(Number(L(c)[4]||null)||null)==(Number(L(a)[4]||null)||null):!0;for(var f in we){if((e=d=Q(we[f]))&&!(e=c)){e=f;var g=Q("CORS_HEADER_WHITELIST")||{},h=rd(L(a)[3]||null);e=h?(g=g[h])?0<=Ma(g,e):!1:!0}e&&(b[f]=d)}return b}
function ze(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Ae(a,b);var d=Be(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&Ud(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||p;c?b.C&&b.C.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.ea&&b.ea.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.la&&0<b.timeout&&(f=U(function(){e||(e=!0,Ud(f),b.la.call(b.context||p))},b.timeout))}else Ce(a,b)}
function Ce(a,b){var c=b.format||"JSON";a=Ae(a,b);var d=Be(a,b),e=!1,f,g=De(a,function(a){if(!e){e=!0;f&&Ud(f);var d=ue(a),g=null;if(d||400<=a.status&&500>a.status)g=Ee(c,a,b.Ya);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};var h=b.context||p;d?b.C&&b.C.call(h,a,g):b.onError&&b.onError.call(h,a,g);b.ea&&b.ea.call(h,a,g)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.K&&0<b.timeout&&(f=U(function(){e||(e=!0,g.abort(),Ud(f),b.K.call(b.context||p,g))},b.timeout))}
function Ae(a,b){b.za&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME",void 0),d=b.Ua;if(d){d[c]&&delete d[c];d=d||{};var e=a.split("#",2);c=e[0];e=1<e.length?"#"+e[1]:"";var f=c.split("?",2);c=f[0];f=ve(f[1]||"");for(var g in d)f[g]=d[g];a=ud(c,f)+e}return a}
function Be(a,b){var c=Q("XSRF_FIELD_NAME",void 0),d=Q("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.w,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.Za||rd(L(a)[3]||null)&&!b.withCredentials&&rd(L(a)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.w&&b.w[g]||(f||(f={}),f[c]=d);f&&r(e)&&(e=ve(e),db(e,f),e=b.ma&&"JSON"==b.ma?JSON.stringify(e):td(e));f=e||f&&!$a(f);!xe&&f&&"POST"!=b.method&&(xe=!0,S(Error("AJAX request with postData should use POST")));
return e}
function Ee(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Fe(b):null)d={},C(b.getElementsByTagName("*"),function(a){d[a.tagName]=Ge(a)})}c&&He(d);
return d}
function He(a){if(ua(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Db(a[b]);a[c]=d}else He(a[b])}}
function Fe(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ge(a){var b="";C(a.childNodes,function(a){b+=a.nodeValue});
return b}
function Ie(a,b){b.method="POST";b.w||(b.w={});Ce(a,b)}
function De(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Pd(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=te();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c;if(e=ye(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
;var Je={},Ke=0;function Le(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Ta,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=Lb("IFRAME",{src:'javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a)):e?De(a,b,"POST",e,d):Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?De(a,b,"GET","",d):Me(a,b))}
function Me(a,b){var c=new Image,d=""+Ke++;Je[d]=c;c.onload=c.onerror=function(){b&&Je[d]&&b();delete Je[d]};
c.src=a}
;var Ne={},Oe=0;
function Pe(a,b,c,d,e,f){f=f||{};f.name=c||Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=Oe)){e=a.stacktrace;c=a.columnNumber;d=v("window.location.href");if(r(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};else{var g=!1;try{var h=a.lineNumber||a.line||"Not available"}catch(ha){h="Not available",g=!0}try{var k=
a.fileName||a.filename||a.sourceURL||p.$googDebugFname||d}catch(ha){k="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(c)||(h=h+":"+c);if(!(Ne[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){k=e;h={Ua:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),
line:h,level:void 0===b?"ERROR":b,"client.name":f.name},w:{url:Q("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(h["client.version"]=f.version);k&&(h.w.stack=k);for(var m in f)h.w["client."+m]=f[m];if(m=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var u in m)h.w[u]=m[u];Ce("/error_204",h);Ne[a.message]=!0;Oe++}}}
;var Qe=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};t("yt.msgs_",Qe,void 0);function Re(a){Md(Qe,arguments)}
;function Se(a,b){var c=5E3;isNaN(c)&&(c=void 0);var d=v("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):U(a,c||0)}
function Te(a){if(!isNaN(a)){var b=v("yt.scheduler.instance.cancelJob");b?b(a):Ud(a)}}
;var Ue=[],Ve=!1;function We(){function a(){Ve=!0;"google_ad_status"in window?P("DCLKSTAT",1):P("DCLKSTAT",2)}
ge("//static.doubleclick.net/instream/ad_status.js",a);Ue.push(Se(function(){Ve||"google_ad_status"in window||(me("//static.doubleclick.net/instream/ad_status.js",a),P("DCLKSTAT",3))},1))}
function Xe(){return parseInt(Q("DCLKSTAT",0),10)}
;var Ye=0;t("ytDomDomGetNextId",v("ytDomDomGetNextId")||function(){return++Ye},void 0);var Ze={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function $e(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Ze||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
$e.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
$e.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
$e.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Za=v("ytEventsEventsListeners")||{};t("ytEventsEventsListeners",Za,void 0);var af=v("ytEventsEventsCounter")||{count:0};t("ytEventsEventsCounter",af,void 0);function bf(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ya(function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function cf(a,b,c){var d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=bf(a,b,c,d);if(e)return e;e=++af.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new $e(d);if(!Nb(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new $e(b);
b.currentTarget=a;return c.call(a,b)};
g=Pd(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Za[e]=[a,b,c,g,d];return e}
function df(a){a&&("string"==typeof a&&(a=[a]),C(a,function(a){if(a in Za){var b=Za[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Za[a]}}))}
;function ef(){if(null==v("_lact",window)){var a=parseInt(Q("LACT"),10);a=isFinite(a)?z()-Math.max(a,0):-1;t("_lact",a,window);t("_fact",a,window);-1==a&&ff();cf(document,"keydown",ff);cf(document,"keyup",ff);cf(document,"mousedown",ff);cf(document,"mouseup",ff);Zd("page-mouse",ff);Zd("page-scroll",ff);Zd("page-resize",ff)}}
function ff(){null==v("_lact",window)&&ef();var a=z();t("_lact",a,window);-1==v("_fact",window)&&t("_fact",a,window);(a=v("ytglobal.ytUtilActivityCallback_"))&&a()}
function gf(){var a=v("_lact",window);return null==a?-1:Math.max(z()-a,0)}
;function hf(a,b,c,d,e){this.f=a;this.i=b;this.h=c;this.g=d;this.b=e}
var jf=1;function kf(a){var b={};void 0!==a.f?b.trackingParams=a.f:(b.veType=a.i,null!=a.h&&(b.veCounter=a.h),null!=a.g&&(b.elementIndex=a.g));void 0!==a.b&&(b.dataElement=kf(a.b));return b}
;var lf={log_event:"events",log_interaction:"interactions"},mf=Object.create(null);mf.log_event="GENERIC_EVENT_LOGGING";mf.log_interaction="INTERACTION_LOGGING";var nf={},of={},pf=0,V=v("ytLoggingTransportLogPayloadsQueue_")||{};t("ytLoggingTransportLogPayloadsQueue_",V,void 0);var qf=v("ytLoggingTransportTokensToCttTargetIds_")||{};t("ytLoggingTransportTokensToCttTargetIds_",qf,void 0);var rf=v("ytLoggingTransportDispatchedStats_")||{};t("ytLoggingTransportDispatchedStats_",rf,void 0);
t("ytytLoggingTransportCapturedTime_",v("ytLoggingTransportCapturedTime_")||{},void 0);function sf(a,b){of[a.endpoint]=b;if(a.V){var c=a.V;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);qf[a.V.token]=d;c=tf(a.endpoint,a.V.token)}else c=tf(a.endpoint);c.push(a.payload);c.length>=(Number(T("web_logging_max_batch")||0)||20)?uf():vf()}
function uf(){Ud(pf);if(!$a(V)){for(var a in V){var b=nf[a];if(!b){var c=of[a];if(!c)continue;b=new c;nf[a]=b}c=void 0;var d=a,e=b,f=lf[d],g=rf[d]||{};rf[d]=g;b=Math.round(Nd());for(c in V[d]){var h=e.b;h={client:{hl:h.Ca,gl:h.Ba,clientName:h.Aa,clientVersion:h.innertubeContextClientVersion}};Q("DELEGATED_SESSION_ID")&&(h.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});h={context:h};h[f]=tf(d,c);g.dispatchedEventCount=g.dispatchedEventCount||0;g.dispatchedEventCount+=h[f].length;h.requestTimeMs=
b;var k=qf[c];if(k)a:{var m=h,u=c;if(k.videoId)var ha="VIDEO";else if(k.playlistId)ha="PLAYLIST";else break a;m.credentialTransferTokenTargetId=k;m.context=m.context||{};m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=[{token:u,scope:ha}]}delete qf[c];wf(e,d,h)}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete V[a]}$a(V)||
vf()}}
function vf(){Ud(pf);pf=U(uf,Q("LOGGING_BATCH_TIMEOUT",1E4))}
function tf(a,b){b||(b="");V[a]=V[a]||{};V[a][b]=V[a][b]||[];return V[a][b]}
;function xf(a,b,c,d,e){var f={};f.eventTimeMs=Math.round(d||Nd());f[a]=b;f.context={lastActivityMs:String(d?-1:gf())};sf({endpoint:"log_event",payload:f,V:e},c)}
;function yf(a,b,c){zf(Af,{attachChild:{csn:a,parentVisualElement:kf(b),visualElements:[kf(c)]}})}
function zf(a,b,c){b.eventTimeMs=c?c:Math.round(Nd());b.lactMs=gf();sf({endpoint:"log_interaction",payload:b},a)}
;function Bf(){if(!Cf&&!Df||!window.JSON)return null;try{var a=Cf.get("yt-player-two-stage-token")}catch(b){}if(!r(a))try{a=Df.get("yt-player-two-stage-token")}catch(b){}if(!r(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var Df,Ef=new md;Df=Ef.isAvailable()?new id(Ef):null;var Cf,Ff=new nd;Cf=Ff.isAvailable()?new id(Ff):null;function Gf(){var a=Q("ROOT_VE_TYPE",void 0);return a?new hf(void 0,a,void 0):null}
function Hf(){var a=Q("client-screen-nonce")||Q("EVENT_ID");return a?a:null}
;function If(a,b,c){Yb.set(""+a,b,c,"/","youtube.com",!1)}
;function Jf(a){if(a){a=a.itct||a.ved;var b=v("yt.logging.screen.storeParentElement");a&&b&&b(new hf(a))}}
;function Kf(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=Q("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=Q("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=rd(L(window.location.href)[3]||null);f&&e.push(f);f=rd(L(d)[3]||null);if(0<=Ma(e,f)||!f&&0==d.lastIndexOf("/",0))if(T("autoescape_tempdata_url")&&(e=document.createElement("a"),Eb(e,d),d=e.href),d){f=L(d);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
Hf();if(h){var h=parseInt(h,10);isFinite(h)&&0<h&&(d="ST-"+La(d).toString(36),e=b?td(b):"",If(d,e,h||5),Jf(b))}else h="ST-"+La(d).toString(36),d=b?td(b):"",If(h,d,5),Jf(b)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var u=void 0===u?window:u;c=u.location;a=ud(a,k)+m;a=a instanceof G?a:Ab(a);c.href=yb(a)}return!0}
;t("yt.abuse.botguardInitialized",v("yt.abuse.botguardInitialized")||qe,void 0);t("yt.abuse.invokeBotguard",v("yt.abuse.invokeBotguard")||re,void 0);t("yt.abuse.dclkstatus.checkDclkStatus",v("yt.abuse.dclkstatus.checkDclkStatus")||Xe,void 0);t("yt.player.exports.navigate",v("yt.player.exports.navigate")||Kf,void 0);t("yt.util.activity.init",v("yt.util.activity.init")||ef,void 0);t("yt.util.activity.getTimeSinceActive",v("yt.util.activity.getTimeSinceActive")||gf,void 0);
t("yt.util.activity.setTimestamp",v("yt.util.activity.setTimestamp")||ff,void 0);function Lf(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b}
;function Af(a){this.b=a||{apiaryHost:R("APIARY_HOST"),Va:R("APIARY_HOST_FIRSTPARTY"),gapiHintOverride:!!Q("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:R("GAPI_HINT_PARAMS"),innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),Aa:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ca:R("INNERTUBE_CONTEXT_HL"),Ba:R("INNERTUBE_CONTEXT_GL"),xhrApiaryHost:R("XHR_APIARY_HOST")||"",Da:R("INNERTUBE_HOST_OVERRIDE")||""}}
function wf(a,b,c){var d={};!Q("VISITOR_DATA")&&.01>Math.random()&&S(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":Q("VISITOR_DATA","")},method:"POST",w:c,ma:"JSON",K:function(){d.K()},
la:d.K,C:function(a,b){d.C&&d.C(b)},
bb:function(a){d.C&&d.C(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
ab:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f=Zb();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=Q("SESSION_INDEX",0));var g="",h=a.b.Da;h&&(g=h);f&&!g&&(e.headers["x-origin"]=window.location.origin);a=""+g+Lf(a.b.innertubeApiVersion,b,c)+"?alt=json&key="+a.b.innertubeApiKey;T("use_fetch_for_op_xhr")?ze(a,e):Ie(a,e)}
;function Mf(a){a=a||{};this.url=a.url||"";this.args=a.args||bb(Nf);this.assets=a.assets||{};this.attrs=a.attrs||bb(Of);this.params=a.params||bb(Pf);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Nf={enablejsapi:1},Of={},Pf={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function Qf(a){a instanceof Mf||(a=new Mf(a));return a}
function Rf(a){var b=new Mf,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==ra(d)?bb(d):d}return b}
;function Sf(){I.call(this);this.b=[]}
n(Sf,I);Sf.prototype.l=function(){for(;this.b.length;){var a=this.b.pop();a.target.removeEventListener(a.name,a.Xa)}I.prototype.l.call(this)};var Tf=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Uf(a){a=a||"";if(window.spf){var b=a.match(Tf);spf.style.load(a,b?b[1]:"",void 0)}else Vf(a)}
function Vf(a){var b=Wf(a),c=document.getElementById(b),d=c&&Sd(c,"loaded");d||c&&!d||(c=Xf(a,b,function(){Sd(c,"loaded")||(Qd(c),be(b),U(y(ce,b),0))}))}
function Xf(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Ob(a);Fb(d,a,"stylesheet");(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Wf(a){var b=document.createElement("A");a=Bb(a);Eb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+La(b)}
;var Yf={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},Zf;var $f=Ta;$f=$f.toLowerCase();if(-1!=$f.indexOf("android")){var ag=$f.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(ag)Zf=parseFloat(ag[1]);else{var bg=[],cg=0,dg;for(dg in Yf)bg[cg++]=dg;var eg=$f.match("("+bg.join("|")+")");Zf=eg?Yf[eg[0]]:0}}else Zf=void 0;var fg=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],gg=['audio/mp4; codecs="mp4a.40.2"'];var hg=v("ytLoggingLatencyUsageStats_")||{};t("ytLoggingLatencyUsageStats_",hg,void 0);var ig=0;function jg(a){hg[a]=hg[a]||{count:0};var b=hg[a];b.count++;b.time=Nd();ig||(ig=Se(kg,0));return 10<b.count?(11==b.count&&Pe(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1}
function kg(){var a=Nd(),b;for(b in hg)6E4<a-hg[b].time&&delete hg[b];ig=0}
;function lg(a,b){this.version=a;this.args=b}
;function mg(a){this.topic=a}
mg.prototype.toString=function(){return this.topic};var ng=v("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.D;K.prototype.publish=K.prototype.G;K.prototype.clear=K.prototype.clear;t("ytPubsub2Pubsub2Instance",ng,void 0);t("ytPubsub2Pubsub2SubscribedKeys",v("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);t("ytPubsub2Pubsub2TopicToKeys",v("ytPubsub2Pubsub2TopicToKeys")||{},void 0);t("ytPubsub2Pubsub2IsAsync",v("ytPubsub2Pubsub2IsAsync")||{},void 0);
t("ytPubsub2Pubsub2SkipSubKey",null,void 0);function og(a,b){var c=v("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;function pg(){var a=Q("TIMING_TICK_EXPIRATION");a||(a={},P("TIMING_TICK_EXPIRATION",a));return a}
function qg(){var a=pg(),b;for(b in a)Te(a[b]);P("TIMING_TICK_EXPIRATION",{})}
;function rg(a,b){lg.call(this,1,arguments)}
n(rg,lg);function sg(a,b){lg.call(this,1,arguments)}
n(sg,lg);var wg=new mg("aft-recorded"),xg=new mg("timing-sent");var W=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};var yg=z().toString();var zg={vc:!0},Ag={ad_allowed:"adTypesAllowed",ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",yt_ad_an:"adNetworks",p:"httpProtocol",t:"transportProtocol",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",nr:"webInfo.navigationReason",ncnp:"webInfo.nonPreloadedNodeCount",plid:"videoId",paused:"playerInfo.isPausedOnLoad",fmt:"playerInfo.itag",yt_pl:"watchInfo.isPlaylist",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",
st:"serverTimeMs",vph:"viewportHeight",vpw:"viewportWidth",yt_vis:"isVisible"},Bg="ap c cver ei srt yt_fss yt_li ba vpil vpni vpst yt_eil pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt pc prerender psc rc start yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),Cg="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),Dg=!1;
function Eg(a){if("_"!=a[0]){var b=a;W.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),W.mark(b))}b=Fg();var c=Nd();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;b=pg();if(c=b[a])Te(c),b[a]=0;Gg()["tick_"+a]=void 0;Nd();T("csi_on_gel")?(b=Hg(),"_start"==a?jg("baseline_"+b)||xf("latencyActionBaselined",{clientActionNonce:b},Af,void 0,void 0):jg("tick_"+a+"_"+b)||xf("latencyActionTicked",{tickName:a,clientActionNonce:b},Af,void 0,void 0),a=!0):a=!1;if(a=!a)a=!v("yt.timing.pingSent_");
if(a&&(b=R("TIMING_ACTION"),a=Fg(),v("ytglobal.timingready_")&&b&&a._start&&(b=Ig()))){T("tighter_critical_section")&&!Dg&&(og(wg,new rg(Math.round(b-a._start),void 0)),Dg=!0);b=!0;c=Q("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Jg()}}
function Kg(){var a=Lg().info.yt_lt="hot_bg";Gg().info_yt_lt=a;if(T("csi_on_gel"))if("yt_lt"in Ag){var b={},c=Ag.yt_lt;0<=Ma(Cg,c)&&(a=!!a);c=c.split(".");for(var d=b,e=0;e<c.length-1;e++)d[c[e]]=d[c[e]]||{},d=d[c[e]];b[c[c.length-1]]=a;a=Hg();c=Object.keys(b).join("");jg("info_"+c+"_"+a)||(b.clientActionNonce=a,xf("latencyActionInfo",b,Af,void 0,void 0))}else 0<=Ma(Bg,"yt_lt")||S(Error("Unknown label yt_lt logged with GEL CSI."))}
function Ig(){var a=Fg();if(a.aft)return a.aft;for(var b=Q("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Jg(){qg();if(!T("csi_on_gel")){var a=Fg(),b=Lg().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&w(a[d])){var e=d.slice(1);if(e in zg){var f=Oa(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=v("ytglobal.timingReportbuilder_")){if(f=f(a,b,void 0))Mg(f,e),Ng(),Og(),Pg(!1,void 0),Q("TIMING_ACTION")&&P("PREVIOUS_ACTION",Q("TIMING_ACTION")),P("TIMING_ACTION","")}else{var g=Q("CSI_SERVICE_NAME","youtube");f={v:2,s:g,action:Q("TIMING_ACTION",void 0)};var h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var k=window.location.protocol+v("ytplayer.config.assets.js");(k=W.getEntriesByName?W.getEntriesByName(k)[0]:null)?b.h5jse=Math.round(b.h5jse-k.responseEnd):
delete b.h5jse}a.aft=Ig();Qg()&&"youtube"==g&&(Kg(),g=a.vc,k=a.pbs,delete a.aft,b.aft=Math.round(k-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=Nd();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=v("ytdebug.logTiming"))&&a(f,b);Mg(f,e,void 0);og(xg,new sg(b.aft+(h||0),void 0))}}}
var Og=x(W.clearResourceTimings||W.webkitClearResourceTimings||W.mozClearResourceTimings||W.msClearResourceTimings||W.oClearResourceTimings||qa,W);
function Mg(a,b,c){if(T("debug_csi_data")){var d=v("yt.timing.csiData");d||(d=[],t("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||Le(a,void 0,void 0,void 0,f)}catch(g){Le(a,void 0,void 0,void 0,f)}}else Le(a);Pg(!0,c)}
function Hg(){var a=Lg().nonce;if(!a){a:{if(window.crypto&&window.crypto.getRandomValues)try{var b=Array(16),c=new Uint8Array(16);window.crypto.getRandomValues(c);for(a=0;a<b.length;a++)b[a]=c[a];var d=b;break a}catch(e){}d=Array(16);for(b=0;16>b;b++){c=z();for(a=0;a<c%23;a++)d[b]=Math.random();d[b]=Math.floor(256*Math.random())}if(yg)for(b=1,c=0;c<yg.length;c++)d[b%16]=d[b%16]^d[(b-1)%16]/4^yg.charCodeAt(c),b++}b=[];for(c=0;c<d.length;c++)b.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[c]&
63));a=b.join("");Lg().nonce=a}return a}
function Fg(){return Lg().tick}
function Gg(){var a=Lg();"gel"in a||(a.gel={});return a.gel}
function Lg(){return v("ytcsi.data_")||Ng()}
function Ng(){var a={tick:{},info:{}};t("ytcsi.data_",a,void 0);return a}
function Pg(a,b){t("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Qg(){var a=Fg(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Lg().info.yt_pvis}
;function Rg(a,b){I.call(this);this.m=this.R=a;this.I=b;this.u=!1;this.f={};this.O=this.H=null;this.A=new K;nc(this,y(oc,this.A));this.i={};this.M=this.P=this.h=this.Z=this.b=null;this.L=!1;this.j=this.F=null;this.S={};this.qa=["onReady"];this.Y=null;this.ga=NaN;this.N={};Sg(this);this.U("WATCH_LATER_VIDEO_ADDED",x(this.Fa,this));this.U("WATCH_LATER_VIDEO_REMOVED",x(this.Ga,this));this.U("onAdAnnounce",x(this.ta,this));this.ra=new Sf;nc(this,y(oc,this.ra))}
n(Rg,I);l=Rg.prototype;
l.da=function(a,b){if(!this.g){this.Z=a;this.b=Rf(a);this.h=this.b.attrs.id||this.h;"video-player"==this.h&&(this.h=this.I,this.b.attrs.id=this.I);this.m.id==this.h&&(this.h+="-player",this.b.attrs.id=this.h);this.b.args.enablejsapi="1";this.b.args.playerapiid=this.I;this.P||(this.P=Tg(this,this.b.args.jsapicallback||"onYouTubePlayerReady"));this.b.args.jsapicallback=null;var c=this.b.attrs.width;c&&(this.m.style.width=Rb(Number(c)||c));if(c=this.b.attrs.height)this.m.style.height=Rb(Number(c)||c);
if(!this.g){if(!b&&!q(this.b.disable.html5)){c=!0;void 0!=this.b.args.deviceHasDisplay&&(c=this.b.args.deviceHasDisplay);if(2.2==Zf)var d=!0;else{a:{var e=c;c=v("yt.player.utils.videoElement_");c||(c=document.createElement("VIDEO"),t("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType){e=e?fg:gg;for(var f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}}d="fmt.noneavailable"}catch(g){d="html5.missingapi"}}d=!d}d=d&&(Ug(this)||this.b.assets.js);this.b.disable.html5=!d;d||(this.b.args.html5_unavailable=
"1")}Vg(this)}this.u&&Wg(this)}};
l.wa=function(){return this.Z};
function Wg(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function Ug(a){var b=!0,c=Xg(a);c&&a.b&&(a=a.b,b=Sd(c,"version")==a.assets.js);return b&&!!v("yt.player.Application.create")}
function Vg(a){if(!a.L){var b=Ug(a);if(b&&"html5"==(Xg(a)?"html5":null))a.M="html5",a.u||a.X();else if(Yg(a),a.M="html5",b&&a.j)a.R.appendChild(a.j),a.X();else{a.b.loaded=!0;var c=!1;a.F=x(function(){c=!0;var a=Rf(this.b);v("yt.player.Application.create")(this.R,a);this.X()},a);
a.L=!0;b?a.F():(ge(a.b.assets.js,a.F),Uf(a.b.assets.css),Zg(a)&&!c&&t("yt.player.Application.create",null,void 0))}}}
function Xg(a){var b=Ib(a.h);!b&&a.m&&a.m.querySelector&&(b=a.m.querySelector("#"+a.h));return b}
l.X=function(){if(!this.g){var a=Xg(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b){if(this.L=!1,!a.isNotServable||!a.isNotServable(this.b.args.video_id)){Sg(this);this.u=!0;a=Xg(this);a.addEventListener&&(this.H=$g(this,a,"addEventListener"));a.removeEventListener&&(this.O=$g(this,a,"removeEventListener"));b=a.getApiInterface();b=b.concat(a.getInternalApiInterface());for(var c=0;c<b.length;c++){var d=b[c];this.f[d]||(this.f[d]=$g(this,a,d))}for(var e in this.i)this.H(e,
this.i[e]);Wg(this);this.P&&this.P(this.f);this.A.G("onReady",this.f)}}else this.ga=U(x(this.X,this),50)}};
function $g(a,b,c){var d=b[c];return function(){try{return a.Y=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Y=e,S(e,"WARNING"))}}}
function Sg(a){a.u=!1;if(a.O)for(var b in a.i)a.O(b,a.i[b]);for(var c in a.N)Ud(parseInt(c,10));a.N={};a.H=null;a.O=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=x(a.U,a);a.f.removeEventListener=x(a.Ma,a);a.f.destroy=x(a.dispose,a);a.f.getLastError=x(a.xa,a);a.f.getPlayerType=x(a.ya,a);a.f.getCurrentVideoConfig=x(a.wa,a);a.f.loadNewVideoConfig=x(a.da,a);a.f.isReady=x(a.Ea,a)}
l.Ea=function(){return this.u};
l.U=function(a,b){if(!this.g){var c=Tg(this,b);if(c){if(!(0<=Ma(this.qa,a)||this.i[a])){var d=ah(this,a);this.H&&this.H(a,d)}this.A.subscribe(a,c);"onReady"==a&&this.u&&U(y(c,this.f),0)}}};
l.Ma=function(a,b){if(!this.g){var c=Tg(this,b);c&&bd(this.A,a,c)}};
function Tg(a,b){var c=b;if("string"==typeof b){if(a.S[b])return a.S[b];c=function(){var a=v(b);a&&a.apply(p,arguments)};
a.S[b]=c}return c?c:null}
function ah(a,b){var c="ytPlayer"+b+a.I,d=x(function(a){if("html5"==(Xg(this)?"html5":null)){var c=this.b&&this.b.args&&this.b.args.fflags;if(c&&0>c.indexOf("use_html5_player_event_timeout=true")){this.A.G(b,a);return}}var d=U(x(function(){if(!this.g){this.A.G(b,a);var c=this.N,e=String(d);e in c&&delete c[e]}},this),0);
ab(this.N,String(d))},a);
a.i[b]=c;p[c]=d;return c}
l.ta=function(a){be("a11y-announce",a)};
l.Fa=function(a){be("WATCH_LATER_VIDEO_ADDED",a)};
l.Ga=function(a){be("WATCH_LATER_VIDEO_REMOVED",a)};
l.ya=function(){return this.M||(Xg(this)?"html5":null)};
l.xa=function(){return this.Y};
function Yg(a){Eg("dcp");a.cancel();Sg(a);a.M=null;a.b&&(a.b.loaded=!1);var b=Xg(a);"html5"==(Xg(a)?"html5":null)&&(Ug(a)||!Zg(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));for(a=a.R;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.F&&me(this.b.assets.js,this.F);Ud(this.ga);this.L=!1};
l.l=function(){Yg(this);if(this.j&&this.b&&this.j.destroy)try{this.j.destroy()}catch(b){S(b)}this.S=null;for(var a in this.i)p[this.i[a]]=null;this.Z=this.b=this.f=null;delete this.R;delete this.m;I.prototype.l.call(this)};
function Zg(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var bh={},ch="player_uid_"+(1E9*Math.random()>>>0);function dh(a){var b="player";b=r(b)?Ib(b):b;a=Qf(a);var c=ch+"_"+(b[va]||(b[va]=++wa)),d=bh[c];if(d)return d.da(a),d.f;d=new Rg(b,c);bh[c]=d;be("player-added",d.f);nc(d,y(eh,d));U(function(){d.da(a)},0);
return d.f}
function eh(a){delete bh[a.I]}
;function fh(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function gh(a,b,c){r(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return hh(a)}
function hh(a,b,c){if(ua(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function ih(a,b,c,d){if(ua(a)&&!w(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};r(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function jh(a){var b=a.video_id||a.videoId;if(r(b)){var c=Bf()||{},d=Bf()||{};q(void 0)?d[b]=void 0:delete d[b];var e=z()+3E5,f=Df;if(f&&window.JSON){r(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function kh(a){I.call(this);this.f=a;this.f.subscribe("command",this.na,this);this.h={};this.i=!1}
A(kh,I);l=kh.prototype;l.start=function(){this.i||this.g||(this.i=!0,lh(this.f,"RECEIVING"))};
l.na=function(a,b){if(this.i&&!this.g){var c=b||{};switch(a){case "addEventListener":if(r(c.event)&&(c=c.event,!(c in this.h))){var d=x(this.Oa,this,c);this.h[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":r(c.event)&&mh(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=nh(a,b||{}),c=this.b[a].apply(this.b,c),(c=oh(a,c))&&this.i&&!this.g&&lh(this.f,a,c))}}};
l.Oa=function(a,b){this.i&&!this.g&&lh(this.f,a,this.ba(a,b))};
l.ba=function(a,b){if(null!=b)return{value:b}};
function mh(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
l.l=function(){var a=this.f;a.g||bd(a.b,"command",this.na,this);this.f=null;for(var b in this.h)mh(this,b);kh.o.l.call(this)};function ph(a,b){kh.call(this,b);this.b=a;this.start()}
A(ph,kh);ph.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
ph.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function nh(a,b){switch(a){case "loadVideoById":return b=hh(b),jh(b),[b];case "cueVideoById":return b=hh(b),jh(b),[b];case "loadVideoByPlayerVars":return jh(b),[b];case "cueVideoByPlayerVars":return jh(b),[b];case "loadPlaylist":return b=ih(b),jh(b),[b];case "cuePlaylist":return b=ih(b),jh(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function oh(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
ph.prototype.ba=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return ph.o.ba.call(this,a,b)};
ph.prototype.l=function(){ph.o.l.call(this);delete this.b};function qh(a,b,c,d){I.call(this);this.f=b||null;this.u="*";this.h=c||null;this.sessionId=null;this.channel=d||null;this.F=!!a;this.m=x(this.A,this);window.addEventListener("message",this.m)}
n(qh,I);qh.prototype.A=function(a){if(!("*"!=this.h&&a.origin!=this.h||this.f&&a.source!=this.f)&&r(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.F&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.h=this.u=a.origin);this.f=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(!this.j||0<=Ma(this.j,b.func))&&this.i(b.func,b.args)}}};
qh.prototype.sendMessage=function(a,b){var c=b||this.f;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=yc(a);c.postMessage(d,this.u)}catch(e){S(e,"WARNING")}}};
qh.prototype.l=function(){window.removeEventListener("message",this.m);I.prototype.l.call(this)};function rh(a,b,c){qh.call(this,a,b,c||Q("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(rh,qh);function sh(){var a=this.g=new rh(!!Q("WIDGET_ID_ENFORCE")),b=x(this.Ia,this);a.i=b;a.j=null;this.g.channel="widget";if(a=Q("WIDGET_ID"))this.g.sessionId=a;this.h=[];this.j=!1;this.i={}}
l=sh.prototype;l.Ia=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.i[c]||"onReady"==c||(this.addEventListener(c,th(this,c)),this.i[c]=!0)}else this.pa(a,b)};
l.pa=function(){};
function th(a,b){return x(function(a){this.sendMessage(b,a)},a)}
l.addEventListener=function(){};
l.va=function(){this.j=!0;this.sendMessage("initialDelivery",this.ca());this.sendMessage("onReady");C(this.h,this.oa,this);this.h=[]};
l.ca=function(){return null};
function uh(a,b){a.sendMessage("infoDelivery",b)}
l.oa=function(a){this.j?this.g.sendMessage(a):this.h.push(a)};
l.sendMessage=function(a,b){this.oa({event:a,info:void 0==b?null:b})};
l.dispose=function(){this.g=null};function vh(a){sh.call(this);this.b=a;this.f=[];this.addEventListener("onReady",x(this.Ha,this));this.addEventListener("onVideoProgress",x(this.Sa,this));this.addEventListener("onVolumeChange",x(this.Ta,this));this.addEventListener("onApiChange",x(this.Na,this));this.addEventListener("onPlaybackQualityChange",x(this.Pa,this));this.addEventListener("onPlaybackRateChange",x(this.Qa,this));this.addEventListener("onStateChange",x(this.Ra,this))}
A(vh,sh);l=vh.prototype;l.pa=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&fh(a)){var c=b;if(ua(c[0])&&!w(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=hh.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=gh.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=ih.apply(window,c)}c=d}jh(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);fh(a)&&uh(this,this.ca())}};
l.Ha=function(){var a=x(this.va,this);this.g.b=a};
l.addEventListener=function(a,b){this.f.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
l.ca=function(){if(!this.b)return null;var a=this.b.getApiInterface();Qa(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(k){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=z()/1E3;return b};
l.Ra=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());uh(this,a)};
l.Pa=function(a){uh(this,{playbackQuality:a})};
l.Qa=function(a){uh(this,{playbackRate:a})};
l.Na=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.b.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.Ta=function(){uh(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
l.Sa=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());uh(this,a)};
l.dispose=function(){vh.o.dispose.call(this);for(var a=0;a<this.f.length;a++){var b=this.f[a];this.b.removeEventListener(b.eventType,b.listener)}this.f=[]};function wh(){I.call(this);this.b=new K;nc(this,y(oc,this.b))}
A(wh,I);wh.prototype.subscribe=function(a,b,c){return this.g?0:this.b.subscribe(a,b,c)};
wh.prototype.D=function(a){return this.g?!1:this.b.D(a)};
wh.prototype.j=function(a,b){this.g||this.b.G.apply(this.b,arguments)};function xh(a,b,c){wh.call(this);this.f=a;this.h=b;this.i=c}
A(xh,wh);function lh(a,b,c){if(!a.g){var d=a.f;d.g||a.h!=d.b||(a={id:a.i,command:b},c&&(a.data=c),d.b.postMessage(yc(a),d.h))}}
xh.prototype.l=function(){this.h=this.f=null;xh.o.l.call(this)};function yh(a,b,c){I.call(this);this.b=a;this.h=c;this.i=cf(window,"message",x(this.j,this));this.f=new xh(this,a,b);nc(this,y(oc,this.f))}
A(yh,I);yh.prototype.j=function(a){var b;if(b=!this.g)if(b=a.origin==this.h)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,r(a))){try{a=JSON.parse(a)}catch(d){return}a.command&&(b=this.f,b.g||b.j("command",a.command,a.data))}};
yh.prototype.l=function(){df(this.i);this.b=null;yh.o.l.call(this)};function zh(){var a=Xa(window,"settings","experiments","flags","html5_serverside_pagead_id_sets_cookie")||Q("EXP_HTML5_SERVERSIDE_PAGEAD_ID_SETS_COOKIE",!1)||T("html5_serverside_pagead_id_sets_cookie")?"//googleads.g.doubleclick.net/pagead/id?exp=nomnom":"//googleads.g.doubleclick.net/pagead/id",b=bb(Ah);return new J(function(c,d){b.C=function(a){ue(a)?c(a):d(new Bh("Request failed, status="+a.status,"net.badstatus"))};
b.onError=function(){d(new Bh("Unknown request error","net.unknown"))};
b.K=function(){d(new Bh("Request timed out","net.timeout"))};
Ce(a,b)})}
function Bh(a,b){B.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(Bh,B);function Ch(a){this.f=void 0===a?null:a;this.g=0;this.b=null}
Ch.prototype.then=function(a,b,c){return this.f?this.f.then(a,b,c):1===this.g&&a?(a=a.call(c,this.b),Fc(a)?a:Dh(a)):2===this.g&&b?(a=b.call(c,this.b),Fc(a)?a:Eh(a)):this};
Ch.prototype.getValue=function(){return this.b};
Ec(Ch);function Eh(a){var b=new Ch;a=void 0===a?null:a;b.g=2;b.b=void 0===a?null:a;return b}
function Dh(a){var b=new Ch;a=void 0===a?null:a;b.g=1;b.b=void 0===a?null:a;return b}
;function Fh(a){B.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Gh;this.isTimeout=a instanceof Bh&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Tc}
n(Fh,B);Fh.prototype.name="BiscottiError";function Gh(){B.call(this,"Biscotti ID is missing from server")}
n(Gh,B);Gh.prototype.name="BiscottiMissingError";var Ah={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Hh=null;function Ih(){if("1"===Xa(Q("PLAYER_CONFIG",{}),"args","privembed"))return Kc(Error("Biscotti ID is not available in private embed mode"));Hh||(Hh=Sc(zh().then(Jh),function(a){return Kh(2,a)}));
return Hh}
function Jh(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Gh;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Gh;a=a.id;Lh(a);Hh=Dh(a);Mh(18E5,2);return a}
function Kh(a,b){var c=new Fh(b);Lh("");Hh=Eh(c);0<a&&Mh(12E4,a-1);throw c;}
function Mh(a,b){U(function(){Sc(zh().then(Jh,function(a){return Kh(b,a)}),qa)},a)}
function Lh(a){t("yt.ads.biscotti.lastId_",a,void 0)}
function Nh(){try{var a=v("yt.ads.biscotti.getId_");return a?a():Ih()}catch(b){return Kc(b)}}
;function Oh(a){B.apply(this,arguments)}
n(Oh,B);Oh.prototype.name="MutsuError";function Ph(){var a=new Oh("ID is missing"),b=new Oh("Timeout"),c=null,d=!1;Ld(function(){c=Jd();d=!0});
if(d)return c?Dh(c):Eh(a);var e=new J(function(b,c){Ld(function(){var d=Jd();d?b(d):c(a)})}),f=pd().then(function(){return Kc(b)});
return Qc(Nc([e,f]),function(){return f.cancel()})}
;function Qh(a){if("1"!==Xa(Q("PLAYER_CONFIG",{}),"args","privembed")){a&&!v("yt.ads.biscotti.getId_")&&t("yt.ads.biscotti.getId_",Ih,void 0);try{var b=Nh();if(T("enable_mutsu")){v("yt.ads.mutsu.getId_")||t("yt.ads.mutsu.getId_",Ph,void 0);try{var c=v("yt.ads.mutsu.getId_")()}catch(d){c=Kc(d)}}else c=Kc(new Oh("unimplemented"));Oc([b,c]).then(function(a){var b=a[0];a=a[1];if(b.aa||a.aa){b=b.value;a=a.value;var c={};c.dt=Sb;c.flash=zd||"0";a:{try{var d=window.top.location.href}catch(kb){d=2;break a}d=
null!=d?d==window.document.location.href?0:1:2}d=(c.frm=d,c);d.u_tz=-(new Date).getTimezoneOffset();var h=void 0===h?H:h;try{var k=h.history.length}catch(kb){k=0}d.u_his=k;d.u_java=!!H.navigator&&"unknown"!==typeof H.navigator.javaEnabled&&!!H.navigator.javaEnabled&&H.navigator.javaEnabled();H.screen&&(d.u_h=H.screen.height,d.u_w=H.screen.width,d.u_ah=H.screen.availHeight,d.u_aw=H.screen.availWidth,d.u_cd=H.screen.colorDepth);H.navigator&&H.navigator.plugins&&(d.u_nplug=H.navigator.plugins.length);
H.navigator&&H.navigator.mimeTypes&&(d.u_nmime=H.navigator.mimeTypes.length);d.ca_type=yd?"flash":"image";if(T("enable_server_side_search_pyv")||T("enable_server_side_mweb_search_pyv")){k=window;try{var m=k.screenX;var u=k.screenY}catch(kb){}try{var ha=k.outerWidth;var tg=k.outerHeight}catch(kb){}try{var ug=k.innerWidth;var vg=k.innerHeight}catch(kb){}m=[k.screenLeft,k.screenTop,m,u,k.screen?k.screen.availWidth:void 0,k.screen?k.screen.availTop:void 0,ha,tg,ug,vg];u=window.top;try{if(u.document&&
!u.document.body)var X=new Hb(-1,-1);else{var Da=(u||window).document,Dd="CSS1Compat"==Da.compatMode?Da.documentElement:Da.body;X=(new Hb(Dd.clientWidth,Dd.clientHeight)).round()}var Ea=X}catch(kb){Ea=new Hb(-12245933,-12245933)}X={};Da=0;p.SVGElement&&p.document.createElementNS&&(Da|=1);X.bc=Da;X.bih=Ea.height;X.biw=Ea.width;X.brdim=m.join();Ea=(X.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[Qb.webkitVisibilityState||Qb.mozVisibilityState||Qb.visibilityState||""]||0,X.wgl=!!H.WebGLRenderingContext,
X);for(var Ed in Ea)d[Ed]=Ea[Ed]}void 0!==b&&(d.bid=b);void 0!==a&&(d.mutsuid=a);d.bsq=Rh++;Ie("//www.youtube.com/ad_data_204",{za:!1,w:d})}});
U(Qh,18E5)}catch(d){S(d)}}}
var Rh=0;var Y=v("ytglobal.prefsUserPrefsPrefs_")||{};t("ytglobal.prefsUserPrefsPrefs_",Y,void 0);function Z(){this.b=Q("ALT_PREF_COOKIE_NAME","PREF");var a=Yb.get(""+this.b,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Y[d]=c.toString())}}}
Z.prototype.get=function(a,b){Sh(a);Th(a);var c=void 0!==Y[a]?Y[a].toString():null;return null!=c?c:b?b:""};
Z.prototype.set=function(a,b){Sh(a);Th(a);if(null==b)throw Error("ExpectedNotNull");Y[a]=b.toString()};
Z.prototype.remove=function(a){Sh(a);Th(a);delete Y[a]};
Z.prototype.clear=function(){for(var a in Y)delete Y[a]};
function Th(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Sh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Uh(a){a=void 0!==Y[a]?Y[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Z.b=void 0;Z.getInstance=function(){return Z.b?Z.b:Z.b=new Z};var Vh=null,Wh=null,Xh=null,Yh={};function Zh(a){xf(a.payload_name,a.payload,Af,void 0,void 0)}
function $h(a){var b=a.id;a=a.ve_type;var c=jf++;a=new hf(void 0,a,c,void 0,void 0);Yh[b]=a;b=Hf();c=Gf();b&&c&&yf(b,c,a)}
function ai(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(P("client-screen-nonce",b),P("ROOT_VE_TYPE",a),a=Gf()))for(var c in Yh){var d=Yh[c];d&&yf(b,a,d)}}
function bi(a){Yh[a.id]=new hf(a.tracking_params)}
function ci(a){var b=Hf();a=Yh[a.id];b&&a&&zf(Af,{click:{csn:b,visualElement:kf(a)}})}
function di(a){a=a.ids;var b=Hf();if(b)for(var c=0;c<a.length;c++){var d=Yh[a[c]];if(d){var e=b,f=Af;T("interaction_logging_on_gel_web")?xf("visualElementShown",{csn:e,ve:kf(d),eventType:1},f):zf(f,{visibilityUpdate:{csn:e,visualElements:[kf(d)]}},void 0)}}}
function ei(){var a=Vh;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;t("yt.setConfig",P,void 0);t("yt.config.set",P,void 0);t("yt.setMsg",Re,void 0);t("yt.msgs.set",Re,void 0);t("yt.logging.errors.log",Pe,void 0);
t("writeEmbed",function(){var a=Q("PLAYER_CONFIG",void 0);Qh(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=Q("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);Q("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&jh(a.args);Vh=a=dh(a);a.addEventListener("onScreenChanged",ai);a.addEventListener("onLogClientVeCreated",$h);a.addEventListener("onLogServerVeCreated",bi);a.addEventListener("onLogToGel",Zh);
a.addEventListener("onLogVeClicked",ci);a.addEventListener("onLogVesShown",di);a.addEventListener("onReady",ei);b=Q("POST_MESSAGE_ID","player");Q("ENABLE_JS_API")?Xh=new vh(a):Q("ENABLE_POST_API")&&r(b)&&r(c)&&(Wh=new yh(window.parent,b,c),Xh=new ph(a,Wh.f));Q("BG_P")&&(Q("BG_I")||Q("BG_IU"))&&oe();We()},void 0);
t("yt.www.watch.ads.restrictioncookie.spr",function(a){Le(a+"mac_204?action_fcts=1");return!0},void 0);
var fi=Pd(function(){Eg("ol");var a=Z.getInstance(),b=!!((Uh("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&rc(document.body,"exp-invert-logo"))if(c&&!rc(document.body,"inverted-hdpi")){var d=document.body;d.classList?d.classList.add("inverted-hdpi"):rc(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")}else!c&&rc(document.body,"inverted-hdpi")&&sc();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Uh(b)||0;d=c?d|67108864:d&-67108865;
0==d?delete Y[b]:Y[b]=d.toString(16).toString();a=a.b;c=[];for(var e in Y)c.push(e+"="+encodeURIComponent(String(Y[e])));If(a,c.join("&"),63072E3)}}),gi=Pd(function(){var a=Vh;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();Q("PL_ATT")&&(ne=null);a=0;for(var b=Ue.length;a<b;a++)Te(Ue[a]);Ue.length=0;le("//static.doubleclick.net/instream/ad_status.js");Ve=!1;P("DCLKSTAT",0);pc(Xh,Wh);if(a=Vh)a.removeEventListener("onScreenChanged",ai),a.removeEventListener("onLogClientVeCreated",$h),a.removeEventListener("onLogServerVeCreated",bi),a.removeEventListener("onLogToGel",Zh),a.removeEventListener("onLogVeClicked",ci),a.removeEventListener("onLogVesShown",di),a.removeEventListener("onReady",
ei),a.destroy();Yh={}});
window.addEventListener?(window.addEventListener("load",fi),window.addEventListener("unload",gi)):window.attachEvent&&(window.attachEvent("onload",fi),window.attachEvent("onunload",gi));}).call(this);
