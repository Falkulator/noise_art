!function e(t,n,r){function o(s,a){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+s+"'")}var f=n[s]={exports:{}};t[s][0].call(f.exports,function(e){var n=t[s][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t){(function(){var n=e("./vendor/noise.js"),r=function(e,t){this.noise=new n,this.noise.seed(Math.random()),this.pos={x:e.x,y:e.y},this.nx=0,this.ny=0,this.n=this.noise.perlin2(this.pos.x,this.pos.y),this.maxLength=20+800*Math.random();var r=.001+.015*Math.random();this.randRot=300+20*Math.random(),this.randSize=5+15*Math.random(),this.randSpeed=this.randRot+100*Math.random(),this.strokeWidth=20+30*Math.random(),this.chue=30*this.n;var o=9+21*Math.random();this.vector=new paper.Point({angle:360*Math.random(),length:o*this.randSize}),this.chue=200*this.n,this.fillColor={hue:t+this.chue,saturation:Math.random(),brightness:1},this.path=new paper.Path,this.path.strokeWidth=this.strokeWidth,this.path.strokeColor=this.fillColor,this.path.strokeCap="round",this.remove=!1,this.dead=!1;this.draw=function(e,t){this.nx+=r,this.ny+=r,this.n=this.noise.perlin2(this.nx,this.ny),this.vector.angle+=this.n*this.randRot,this.pos.x+=this.vector.x,this.pos.y+=this.vector.y;5*paper.view.bounds.width,5*paper.view.bounds.height;this.path.segments.length>this.maxLength?(t||(this.path.removeSegment(0),this.maxLength-=1),this.maxLength<=0&&(this.remove=!0)):this.paperRender()},this.paperRender=function(){this.path.add(new paper.Point(this.pos.x,this.pos.y)),this.path.smooth()}};t.exports=r}).call(this,e("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/chooser.js","/")},{"./vendor/noise.js":3,buffer:4,oMfpAn:7}],2:[function(e){(function(){function t(){paper.view.onFrame=r}function n(){u.width=window.innerWidth,u.height=window.innerHeight,t()}function r(e){f>1&&o();for(var t=0;t<a.length;t++){var n=a[t];n.draw(e.delta,l),n.remove&&a.splice(t,1)}f+=e.delta}function o(){for(;a.length<9;){var e={x:Math.random()*paper.view.bounds.width/3,y:Math.random()*paper.view.bounds.height/3},t=new s(e,i);a.push(t)}f=0}var i,s=e("./chooser.js"),a=[];window.onload=function(){var e=document.getElementById("canvas");e.width=window.innerWidth,e.height=window.innerHeight,paper.setup(e),paper.view.zoom=.039,i=360*Math.random(),setCss(),n()};{var u=document.getElementById("canvas");u.getContext("2d")}window.addEventListener("resize",n,!1);var f=0,h=new paper.Tool,l=!1;h.onMouseUp=function(){l=!l},setCss=function(){var e=new tinycolor({h:i,s:100,v:100});$("i").hover(function(){$(this).css("color",e.toRgbString())},function(){$(this).css("color","white")})}}).call(this,e("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_c430706d.js","/")},{"./chooser.js":1,buffer:4,oMfpAn:7}],3:[function(e,t){(function(){function e(e){function t(e,t,n){this.x=e,this.y=t,this.z=n}function n(e){return e*e*e*(e*(6*e-15)+10)}function r(e,t,n){return(1-n)*e+n*t}var o=e.noise={};t.prototype.dot2=function(e,t){return this.x*e+this.y*t},t.prototype.dot3=function(e,t,n){return this.x*e+this.y*t+this.z*n};var i=[new t(1,1,0),new t(-1,1,0),new t(1,-1,0),new t(-1,-1,0),new t(1,0,1),new t(-1,0,1),new t(1,0,-1),new t(-1,0,-1),new t(0,1,1),new t(0,-1,1),new t(0,1,-1),new t(0,-1,-1)],s=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],a=new Array(512),u=new Array(512);o.seed=function(e){e>0&&1>e&&(e*=65536),e=Math.floor(e),256>e&&(e|=e<<8);for(var t=0;256>t;t++){var n;n=1&t?s[t]^255&e:s[t]^e>>8&255,a[t]=a[t+256]=n,u[t]=u[t+256]=i[n%12]}},o.seed(0);var f=.5*(Math.sqrt(3)-1),h=(3-Math.sqrt(3))/6,l=1/3,d=1/6;o.simplex2=function(e,t){var n,r,o,i,s,l=(e+t)*f,d=Math.floor(e+l),c=Math.floor(t+l),g=(d+c)*h,p=e-d+g,w=t-c+g;p>w?(i=1,s=0):(i=0,s=1);var y=p-i+h,v=w-s+h,m=p-1+2*h,b=w-1+2*h;d&=255,c&=255;var E=u[d+a[c]],I=u[d+i+a[c+s]],A=u[d+1+a[c+1]],B=.5-p*p-w*w;0>B?n=0:(B*=B,n=B*B*E.dot2(p,w));var M=.5-y*y-v*v;0>M?r=0:(M*=M,r=M*M*I.dot2(y,v));var L=.5-m*m-b*b;return 0>L?o=0:(L*=L,o=L*L*A.dot2(m,b)),70*(n+r+o)},o.simplex3=function(e,t,n){var r,o,i,s,f,h,c,g,p,w,y=(e+t+n)*l,v=Math.floor(e+y),m=Math.floor(t+y),b=Math.floor(n+y),E=(v+m+b)*d,I=e-v+E,A=t-m+E,B=n-b+E;I>=A?A>=B?(f=1,h=0,c=0,g=1,p=1,w=0):I>=B?(f=1,h=0,c=0,g=1,p=0,w=1):(f=0,h=0,c=1,g=1,p=0,w=1):B>A?(f=0,h=0,c=1,g=0,p=1,w=1):B>I?(f=0,h=1,c=0,g=0,p=1,w=1):(f=0,h=1,c=0,g=1,p=1,w=0);var M=I-f+d,L=A-h+d,_=B-c+d,U=I-g+2*d,x=A-p+2*d,C=B-w+2*d,S=I-1+3*d,k=A-1+3*d,T=B-1+3*d;v&=255,m&=255,b&=255;var j=u[v+a[m+a[b]]],N=u[v+f+a[m+h+a[b+c]]],F=u[v+g+a[m+p+a[b+w]]],D=u[v+1+a[m+1+a[b+1]]],W=.6-I*I-A*A-B*B;0>W?r=0:(W*=W,r=W*W*j.dot3(I,A,B));var R=.6-M*M-L*L-_*_;0>R?o=0:(R*=R,o=R*R*N.dot3(M,L,_));var z=.6-U*U-x*x-C*C;0>z?i=0:(z*=z,i=z*z*F.dot3(U,x,C));var q=.6-S*S-k*k-T*T;return 0>q?s=0:(q*=q,s=q*q*D.dot3(S,k,T)),32*(r+o+i+s)},o.perlin2=function(e,t){var o=Math.floor(e),i=Math.floor(t);e-=o,t-=i,o=255&o,i=255&i;var s=u[o+a[i]].dot2(e,t),f=u[o+a[i+1]].dot2(e,t-1),h=u[o+1+a[i]].dot2(e-1,t),l=u[o+1+a[i+1]].dot2(e-1,t-1),d=n(e);return r(r(s,h,d),r(f,l,d),n(t))},o.perlin3=function(e,t,o){var i=Math.floor(e),s=Math.floor(t),f=Math.floor(o);e-=i,t-=s,o-=f,i=255&i,s=255&s,f=255&f;var h=u[i+a[s+a[f]]].dot3(e,t,o),l=u[i+a[s+a[f+1]]].dot3(e,t,o-1),d=u[i+a[s+1+a[f]]].dot3(e,t-1,o),c=u[i+a[s+1+a[f+1]]].dot3(e,t-1,o-1),g=u[i+1+a[s+a[f]]].dot3(e-1,t,o),p=u[i+1+a[s+a[f+1]]].dot3(e-1,t,o-1),w=u[i+1+a[s+1+a[f]]].dot3(e-1,t-1,o),y=u[i+1+a[s+1+a[f+1]]].dot3(e-1,t-1,o-1),v=n(e),m=n(t),b=n(o);return r(r(r(h,g,v),r(l,p,v),b),r(r(d,w,v),r(c,y,v),b),m)}}var n=function(){return e(this),this.noise};t.exports=n}).call(this,e("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/vendor/noise.js","/vendor")},{buffer:4,oMfpAn:7}],4:[function(e,t,n){(function(t,r,o){function o(e,t,n){if(!(this instanceof o))return new o(e,t,n);var r=typeof e;if("base64"===t&&"string"===r)for(e=x(e);e.length%4!==0;)e+="=";var i;if("number"===r)i=S(e);else if("string"===r)i=o.byteLength(e,t);else{if("object"!==r)throw new Error("First argument needs to be a number, array or string.");i=S(e.length)}var s;o._useTypedArrays?s=o._augment(new Uint8Array(i)):(s=this,s.length=i,s._isBuffer=!0);var a;if(o._useTypedArrays&&"number"==typeof e.byteLength)s._set(e);else if(T(e))for(a=0;i>a;a++)s[a]=o.isBuffer(e)?e.readUInt8(a):e[a];else if("string"===r)s.write(e,0,t);else if("number"===r&&!o._useTypedArrays&&!n)for(a=0;i>a;a++)s[a]=0;return s}function i(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r),r>i&&(r=i)):r=i;var s=t.length;J(s%2===0,"Invalid hex string"),r>s/2&&(r=s/2);for(var a=0;r>a;a++){var u=parseInt(t.substr(2*a,2),16);J(!isNaN(u),"Invalid hex string"),e[n+a]=u}return o._charsWritten=2*a,a}function s(e,t,n,r){var i=o._charsWritten=R(N(t),e,n,r);return i}function a(e,t,n,r){var i=o._charsWritten=R(F(t),e,n,r);return i}function u(e,t,n,r){return a(e,t,n,r)}function f(e,t,n,r){var i=o._charsWritten=R(W(t),e,n,r);return i}function h(e,t,n,r){var i=o._charsWritten=R(D(t),e,n,r);return i}function l(e,t,n){return $.fromByteArray(0===t&&n===e.length?e:e.slice(t,n))}function d(e,t,n){var r="",o="";n=Math.min(e.length,n);for(var i=t;n>i;i++)e[i]<=127?(r+=z(o)+String.fromCharCode(e[i]),o=""):o+="%"+e[i].toString(16);return r+z(o)}function c(e,t,n){var r="";n=Math.min(e.length,n);for(var o=t;n>o;o++)r+=String.fromCharCode(e[o]);return r}function g(e,t,n){return c(e,t,n)}function p(e,t,n){var r=e.length;(!t||0>t)&&(t=0),(!n||0>n||n>r)&&(n=r);for(var o="",i=t;n>i;i++)o+=j(e[i]);return o}function w(e,t,n){for(var r=e.slice(t,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}function y(e,t,n,r){r||(J("boolean"==typeof n,"missing or invalid endian"),J(void 0!==t&&null!==t,"missing offset"),J(t+1<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i;return n?(i=e[t],o>t+1&&(i|=e[t+1]<<8)):(i=e[t]<<8,o>t+1&&(i|=e[t+1])),i}}function v(e,t,n,r){r||(J("boolean"==typeof n,"missing or invalid endian"),J(void 0!==t&&null!==t,"missing offset"),J(t+3<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i;return n?(o>t+2&&(i=e[t+2]<<16),o>t+1&&(i|=e[t+1]<<8),i|=e[t],o>t+3&&(i+=e[t+3]<<24>>>0)):(o>t+1&&(i=e[t+1]<<16),o>t+2&&(i|=e[t+2]<<8),o>t+3&&(i|=e[t+3]),i+=e[t]<<24>>>0),i}}function m(e,t,n,r){r||(J("boolean"==typeof n,"missing or invalid endian"),J(void 0!==t&&null!==t,"missing offset"),J(t+1<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i=y(e,t,n,!0),s=32768&i;return s?-1*(65535-i+1):i}}function b(e,t,n,r){r||(J("boolean"==typeof n,"missing or invalid endian"),J(void 0!==t&&null!==t,"missing offset"),J(t+3<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i=v(e,t,n,!0),s=2147483648&i;return s?-1*(4294967295-i+1):i}}function E(e,t,n,r){return r||(J("boolean"==typeof n,"missing or invalid endian"),J(t+3<e.length,"Trying to read beyond buffer length")),H.read(e,t,n,23,4)}function I(e,t,n,r){return r||(J("boolean"==typeof n,"missing or invalid endian"),J(t+7<e.length,"Trying to read beyond buffer length")),H.read(e,t,n,52,8)}function A(e,t,n,r,o){o||(J(void 0!==t&&null!==t,"missing value"),J("boolean"==typeof r,"missing or invalid endian"),J(void 0!==n&&null!==n,"missing offset"),J(n+1<e.length,"trying to write beyond buffer length"),q(t,65535));var i=e.length;if(!(n>=i))for(var s=0,a=Math.min(i-n,2);a>s;s++)e[n+s]=(t&255<<8*(r?s:1-s))>>>8*(r?s:1-s)}function B(e,t,n,r,o){o||(J(void 0!==t&&null!==t,"missing value"),J("boolean"==typeof r,"missing or invalid endian"),J(void 0!==n&&null!==n,"missing offset"),J(n+3<e.length,"trying to write beyond buffer length"),q(t,4294967295));var i=e.length;if(!(n>=i))for(var s=0,a=Math.min(i-n,4);a>s;s++)e[n+s]=t>>>8*(r?s:3-s)&255}function M(e,t,n,r,o){o||(J(void 0!==t&&null!==t,"missing value"),J("boolean"==typeof r,"missing or invalid endian"),J(void 0!==n&&null!==n,"missing offset"),J(n+1<e.length,"Trying to write beyond buffer length"),P(t,32767,-32768));var i=e.length;n>=i||(t>=0?A(e,t,n,r,o):A(e,65535+t+1,n,r,o))}function L(e,t,n,r,o){o||(J(void 0!==t&&null!==t,"missing value"),J("boolean"==typeof r,"missing or invalid endian"),J(void 0!==n&&null!==n,"missing offset"),J(n+3<e.length,"Trying to write beyond buffer length"),P(t,2147483647,-2147483648));var i=e.length;n>=i||(t>=0?B(e,t,n,r,o):B(e,4294967295+t+1,n,r,o))}function _(e,t,n,r,o){o||(J(void 0!==t&&null!==t,"missing value"),J("boolean"==typeof r,"missing or invalid endian"),J(void 0!==n&&null!==n,"missing offset"),J(n+3<e.length,"Trying to write beyond buffer length"),O(t,3.4028234663852886e38,-3.4028234663852886e38));var i=e.length;n>=i||H.write(e,t,n,r,23,4)}function U(e,t,n,r,o){o||(J(void 0!==t&&null!==t,"missing value"),J("boolean"==typeof r,"missing or invalid endian"),J(void 0!==n&&null!==n,"missing offset"),J(n+7<e.length,"Trying to write beyond buffer length"),O(t,1.7976931348623157e308,-1.7976931348623157e308));var i=e.length;n>=i||H.write(e,t,n,r,52,8)}function x(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function C(e,t,n){return"number"!=typeof e?n:(e=~~e,e>=t?t:e>=0?e:(e+=t,e>=0?e:0))}function S(e){return e=~~Math.ceil(+e),0>e?0:e}function k(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function T(e){return k(e)||o.isBuffer(e)||e&&"object"==typeof e&&"number"==typeof e.length}function j(e){return 16>e?"0"+e.toString(16):e.toString(16)}function N(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(127>=r)t.push(e.charCodeAt(n));else{var o=n;r>=55296&&57343>=r&&n++;for(var i=encodeURIComponent(e.slice(o,n+1)).substr(1).split("%"),s=0;s<i.length;s++)t.push(parseInt(i[s],16))}}return t}function F(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t}function D(e){for(var t,n,r,o=[],i=0;i<e.length;i++)t=e.charCodeAt(i),n=t>>8,r=t%256,o.push(r),o.push(n);return o}function W(e){return $.toByteArray(e)}function R(e,t,n,r){for(var o=0;r>o&&!(o+n>=t.length||o>=e.length);o++)t[o+n]=e[o];return o}function z(e){try{return decodeURIComponent(e)}catch(t){return String.fromCharCode(65533)}}function q(e,t){J("number"==typeof e,"cannot write a non-number as a number"),J(e>=0,"specified a negative value for writing an unsigned value"),J(t>=e,"value is larger than maximum value for type"),J(Math.floor(e)===e,"value has a fractional component")}function P(e,t,n){J("number"==typeof e,"cannot write a non-number as a number"),J(t>=e,"value larger than maximum allowed value"),J(e>=n,"value smaller than minimum allowed value"),J(Math.floor(e)===e,"value has a fractional component")}function O(e,t,n){J("number"==typeof e,"cannot write a non-number as a number"),J(t>=e,"value larger than maximum allowed value"),J(e>=n,"value smaller than minimum allowed value")}function J(e,t){if(!e)throw new Error(t||"Failed assertion")}var $=e("base64-js"),H=e("ieee754");n.Buffer=o,n.SlowBuffer=o,n.INSPECT_MAX_BYTES=50,o.poolSize=8192,o._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(n){return!1}}(),o.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.isBuffer=function(e){return!(null===e||void 0===e||!e._isBuffer)},o.byteLength=function(e,t){var n;switch(e+="",t||"utf8"){case"hex":n=e.length/2;break;case"utf8":case"utf-8":n=N(e).length;break;case"ascii":case"binary":case"raw":n=e.length;break;case"base64":n=W(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=2*e.length;break;default:throw new Error("Unknown encoding")}return n},o.concat=function(e,t){if(J(k(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new o(0);if(1===e.length)return e[0];var n;if("number"!=typeof t)for(t=0,n=0;n<e.length;n++)t+=e[n].length;var r=new o(t),i=0;for(n=0;n<e.length;n++){var s=e[n];s.copy(r,i),i+=s.length}return r},o.prototype.write=function(e,t,n,r){if(isFinite(t))isFinite(n)||(r=n,n=void 0);else{var o=r;r=t,t=n,n=o}t=Number(t)||0;var l=this.length-t;n?(n=Number(n),n>l&&(n=l)):n=l,r=String(r||"utf8").toLowerCase();var d;switch(r){case"hex":d=i(this,e,t,n);break;case"utf8":case"utf-8":d=s(this,e,t,n);break;case"ascii":d=a(this,e,t,n);break;case"binary":d=u(this,e,t,n);break;case"base64":d=f(this,e,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":d=h(this,e,t,n);break;default:throw new Error("Unknown encoding")}return d},o.prototype.toString=function(e,t,n){var r=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,n=void 0!==n?Number(n):n=r.length,n===t)return"";var o;switch(e){case"hex":o=p(r,t,n);break;case"utf8":case"utf-8":o=d(r,t,n);break;case"ascii":o=c(r,t,n);break;case"binary":o=g(r,t,n);break;case"base64":o=l(r,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":o=w(r,t,n);break;default:throw new Error("Unknown encoding")}return o},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},o.prototype.copy=function(e,t,n,r){var i=this;if(n||(n=0),r||0===r||(r=this.length),t||(t=0),r!==n&&0!==e.length&&0!==i.length){J(r>=n,"sourceEnd < sourceStart"),J(t>=0&&t<e.length,"targetStart out of bounds"),J(n>=0&&n<i.length,"sourceStart out of bounds"),J(r>=0&&r<=i.length,"sourceEnd out of bounds"),r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var s=r-n;if(100>s||!o._useTypedArrays)for(var a=0;s>a;a++)e[a+t]=this[a+n];else e._set(this.subarray(n,n+s),t)}},o.prototype.slice=function(e,t){var n=this.length;if(e=C(e,n,0),t=C(t,n,n),o._useTypedArrays)return o._augment(this.subarray(e,t));for(var r=t-e,i=new o(r,void 0,!0),s=0;r>s;s++)i[s]=this[s+e];return i},o.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},o.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},o.prototype.readUInt8=function(e,t){return t||(J(void 0!==e&&null!==e,"missing offset"),J(e<this.length,"Trying to read beyond buffer length")),e>=this.length?void 0:this[e]},o.prototype.readUInt16LE=function(e,t){return y(this,e,!0,t)},o.prototype.readUInt16BE=function(e,t){return y(this,e,!1,t)},o.prototype.readUInt32LE=function(e,t){return v(this,e,!0,t)},o.prototype.readUInt32BE=function(e,t){return v(this,e,!1,t)},o.prototype.readInt8=function(e,t){if(t||(J(void 0!==e&&null!==e,"missing offset"),J(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length)){var n=128&this[e];return n?-1*(255-this[e]+1):this[e]}},o.prototype.readInt16LE=function(e,t){return m(this,e,!0,t)},o.prototype.readInt16BE=function(e,t){return m(this,e,!1,t)},o.prototype.readInt32LE=function(e,t){return b(this,e,!0,t)},o.prototype.readInt32BE=function(e,t){return b(this,e,!1,t)},o.prototype.readFloatLE=function(e,t){return E(this,e,!0,t)},o.prototype.readFloatBE=function(e,t){return E(this,e,!1,t)},o.prototype.readDoubleLE=function(e,t){return I(this,e,!0,t)},o.prototype.readDoubleBE=function(e,t){return I(this,e,!1,t)},o.prototype.writeUInt8=function(e,t,n){n||(J(void 0!==e&&null!==e,"missing value"),J(void 0!==t&&null!==t,"missing offset"),J(t<this.length,"trying to write beyond buffer length"),q(e,255)),t>=this.length||(this[t]=e)},o.prototype.writeUInt16LE=function(e,t,n){A(this,e,t,!0,n)},o.prototype.writeUInt16BE=function(e,t,n){A(this,e,t,!1,n)},o.prototype.writeUInt32LE=function(e,t,n){B(this,e,t,!0,n)},o.prototype.writeUInt32BE=function(e,t,n){B(this,e,t,!1,n)},o.prototype.writeInt8=function(e,t,n){n||(J(void 0!==e&&null!==e,"missing value"),J(void 0!==t&&null!==t,"missing offset"),J(t<this.length,"Trying to write beyond buffer length"),P(e,127,-128)),t>=this.length||(e>=0?this.writeUInt8(e,t,n):this.writeUInt8(255+e+1,t,n))},o.prototype.writeInt16LE=function(e,t,n){M(this,e,t,!0,n)},o.prototype.writeInt16BE=function(e,t,n){M(this,e,t,!1,n)},o.prototype.writeInt32LE=function(e,t,n){L(this,e,t,!0,n)},o.prototype.writeInt32BE=function(e,t,n){L(this,e,t,!1,n)},o.prototype.writeFloatLE=function(e,t,n){_(this,e,t,!0,n)},o.prototype.writeFloatBE=function(e,t,n){_(this,e,t,!1,n)},o.prototype.writeDoubleLE=function(e,t,n){U(this,e,t,!0,n)},o.prototype.writeDoubleBE=function(e,t,n){U(this,e,t,!1,n)},o.prototype.fill=function(e,t,n){if(e||(e=0),t||(t=0),n||(n=this.length),"string"==typeof e&&(e=e.charCodeAt(0)),J("number"==typeof e&&!isNaN(e),"value is not a number"),J(n>=t,"end < start"),n!==t&&0!==this.length){J(t>=0&&t<this.length,"start out of bounds"),J(n>=0&&n<=this.length,"end out of bounds");for(var r=t;n>r;r++)this[r]=e}},o.prototype.inspect=function(){for(var e=[],t=this.length,r=0;t>r;r++)if(e[r]=j(this[r]),r===n.INSPECT_MAX_BYTES){e[r+1]="...";break}return"<Buffer "+e.join(" ")+">"},o.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(o._useTypedArrays)return new o(this).buffer;for(var e=new Uint8Array(this.length),t=0,n=e.length;n>t;t+=1)e[t]=this[t];return e.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")};var X=o.prototype;o._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=X.get,e.set=X.set,e.write=X.write,e.toString=X.toString,e.toLocaleString=X.toString,e.toJSON=X.toJSON,e.copy=X.copy,e.slice=X.slice,e.readUInt8=X.readUInt8,e.readUInt16LE=X.readUInt16LE,e.readUInt16BE=X.readUInt16BE,e.readUInt32LE=X.readUInt32LE,e.readUInt32BE=X.readUInt32BE,e.readInt8=X.readInt8,e.readInt16LE=X.readInt16LE,e.readInt16BE=X.readInt16BE,e.readInt32LE=X.readInt32LE,e.readInt32BE=X.readInt32BE,e.readFloatLE=X.readFloatLE,e.readFloatBE=X.readFloatBE,e.readDoubleLE=X.readDoubleLE,e.readDoubleBE=X.readDoubleBE,e.writeUInt8=X.writeUInt8,e.writeUInt16LE=X.writeUInt16LE,e.writeUInt16BE=X.writeUInt16BE,e.writeUInt32LE=X.writeUInt32LE,e.writeUInt32BE=X.writeUInt32BE,e.writeInt8=X.writeInt8,e.writeInt16LE=X.writeInt16LE,e.writeInt16BE=X.writeInt16BE,e.writeInt32LE=X.writeInt32LE,e.writeInt32BE=X.writeInt32BE,e.writeFloatLE=X.writeFloatLE,e.writeFloatBE=X.writeFloatBE,e.writeDoubleLE=X.writeDoubleLE,e.writeDoubleBE=X.writeDoubleBE,e.fill=X.fill,e.inspect=X.inspect,e.toArrayBuffer=X.toArrayBuffer,e}}).call(this,e("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/index.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer")},{"base64-js":5,buffer:4,ieee754:6,oMfpAn:7}],5:[function(e,t,n){(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(t){"use strict";function n(e){var t=e.charCodeAt(0);return t===s||t===l?62:t===a||t===d?63:u>t?-1:u+10>t?t-u+26+26:h+26>t?t-h:f+26>t?t-f+26:void 0}function r(e){function t(e){f[l++]=e}var r,o,s,a,u,f;if(e.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var h=e.length;u="="===e.charAt(h-2)?2:"="===e.charAt(h-1)?1:0,f=new i(3*e.length/4-u),s=u>0?e.length-4:e.length;var l=0;for(r=0,o=0;s>r;r+=4,o+=3)a=n(e.charAt(r))<<18|n(e.charAt(r+1))<<12|n(e.charAt(r+2))<<6|n(e.charAt(r+3)),t((16711680&a)>>16),t((65280&a)>>8),t(255&a);return 2===u?(a=n(e.charAt(r))<<2|n(e.charAt(r+1))>>4,t(255&a)):1===u&&(a=n(e.charAt(r))<<10|n(e.charAt(r+1))<<4|n(e.charAt(r+2))>>2,t(a>>8&255),t(255&a)),f}function o(t){function n(t){return e.charAt(t)}function r(e){return n(e>>18&63)+n(e>>12&63)+n(e>>6&63)+n(63&e)}var o,i,s,a=t.length%3,u="";for(o=0,s=t.length-a;s>o;o+=3)i=(t[o]<<16)+(t[o+1]<<8)+t[o+2],u+=r(i);switch(a){case 1:i=t[t.length-1],u+=n(i>>2),u+=n(i<<4&63),u+="==";break;case 2:i=(t[t.length-2]<<8)+t[t.length-1],u+=n(i>>10),u+=n(i>>4&63),u+=n(i<<2&63),u+="="}return u}var i="undefined"!=typeof Uint8Array?Uint8Array:Array,s="+".charCodeAt(0),a="/".charCodeAt(0),u="0".charCodeAt(0),f="a".charCodeAt(0),h="A".charCodeAt(0),l="-".charCodeAt(0),d="_".charCodeAt(0);t.toByteArray=r,t.fromByteArray=o}("undefined"==typeof n?this.base64js={}:n)}).call(this,e("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")},{buffer:4,oMfpAn:7}],6:[function(e,t,n){(function(){n.read=function(e,t,n,r,o){var i,s,a=8*o-r-1,u=(1<<a)-1,f=u>>1,h=-7,l=n?o-1:0,d=n?-1:1,c=e[t+l];for(l+=d,i=c&(1<<-h)-1,c>>=-h,h+=a;h>0;i=256*i+e[t+l],l+=d,h-=8);for(s=i&(1<<-h)-1,i>>=-h,h+=r;h>0;s=256*s+e[t+l],l+=d,h-=8);if(0===i)i=1-f;else{if(i===u)return s?0/0:1/0*(c?-1:1);s+=Math.pow(2,r),i-=f}return(c?-1:1)*s*Math.pow(2,i-r)},n.write=function(e,t,n,r,o,i){var s,a,u,f=8*i-o-1,h=(1<<f)-1,l=h>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,c=r?0:i-1,g=r?1:-1,p=0>t||0===t&&0>1/t?1:0;for(t=Math.abs(t),isNaN(t)||1/0===t?(a=isNaN(t)?1:0,s=h):(s=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-s))<1&&(s--,u*=2),t+=s+l>=1?d/u:d*Math.pow(2,1-l),t*u>=2&&(s++,u/=2),s+l>=h?(a=0,s=h):s+l>=1?(a=(t*u-1)*Math.pow(2,o),s+=l):(a=t*Math.pow(2,l-1)*Math.pow(2,o),s=0));o>=8;e[n+c]=255&a,c+=g,a/=256,o-=8);for(s=s<<o|a,f+=o;f>0;e[n+c]=255&s,c+=g,s/=256,f-=8);e[n+c-g]|=128*p}}).call(this,e("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754")},{buffer:4,oMfpAn:7}],7:[function(e,t){(function(e){function n(){}var e=t.exports={};e.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var n=[];return window.addEventListener("message",function(e){var t=e.source;if((t===window||null===t)&&"process-tick"===e.data&&(e.stopPropagation(),n.length>0)){var r=n.shift();r()}},!0),function(e){n.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=n,e.addListener=n,e.once=n,e.off=n,e.removeListener=n,e.removeAllListeners=n,e.emit=n,e.binding=function(){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(){throw new Error("process.chdir is not supported")}}).call(this,e("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process/browser.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process")},{buffer:4,oMfpAn:7}]},{},[2]);