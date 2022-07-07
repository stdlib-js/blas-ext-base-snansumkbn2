// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,l=n.__defineSetter__,u=n.__lookupGetter__,i=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var c,f,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((f="value"in e)&&(u.call(r,t)||i.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=c):r[t]=e.value),y="get"in e,p="set"in e,f&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,t,e.get),p&&l&&l.call(r,t,e.set),r};var c=t;var f="function"==typeof Math.fround?Math.fround:null;var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var p=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;var _,v="function"==typeof Symbol?Symbol.toStringTag:"";_=y&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,o,a;if(null==r)return p.call(r);e=r[v],a=v,t=null!=(o=r)&&b.call(o,a);try{r[v]=void 0}catch(t){return p.call(r)}return n=p.call(r),t?r[v]=e:delete r[v],n}:function(r){return p.call(r)};var d=_,m="function"==typeof Float32Array;var s=Number.POSITIVE_INFINITY,g="function"==typeof Float32Array?Float32Array:null;var j,w="function"==typeof Float32Array?Float32Array:void 0;j=function(){var r,t,e;if("function"!=typeof g)return!1;try{t=new g([1,3.14,-3.14,5e40]),e=t,r=(m&&e instanceof Float32Array||"[object Float32Array]"===d(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===s}catch(t){r=!1}return r}()?w:function(){throw new Error("not implemented")};var h=new j(1);var S="function"==typeof f?f:function(r){return h[0]=r,h[0]};function A(r){return r!=r}function F(r){return Math.abs(r)}function O(r,t,e){var n,o,a,l,u,i,c,f,y;if(r<=0)return 0;if(1===r||0===e)return A(t[0])?0:t[0];for(a=e<0?(1-r)*e:0,n=0,o=0,l=0,y=0;y<r;y++)!1===A(i=t[a])&&(c=S(n+i),f=F(n)>=F(i)?S(S(n-c)+i):S(S(i-c)+n),n=c,c=S(l+f),u=F(l)>=F(f)?S(S(l-c)+f):S(S(f-c)+l),l=c,o=S(o+u)),a+=e;return S(n+S(l+o))}function P(r,t,e,n){var o,a,l,u,i,c,f,y,p;if(r<=0)return 0;if(1===r||0===e)return A(t[n])?0:t[n];for(l=n,o=0,a=0,u=0,p=0;p<r;p++)!1===A(c=t[l])&&(f=S(o+c),y=F(o)>=F(c)?S(S(o-f)+c):S(S(c-f)+o),o=f,f=S(u+y),i=F(u)>=F(y)?S(S(u-f)+y):S(S(y-f)+u),u=f,a=S(a+i)),l+=e;return S(o+S(u+a))}c(O,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:P});export{O as default,P as ndarray};
//# sourceMappingURL=mod.js.map
