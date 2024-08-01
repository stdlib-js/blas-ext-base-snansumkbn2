"use strict";var k=function(f,n){return function(){return n||f((n={exports:{}}).exports,n),n.exports}};var F=k(function(I,x){
var a=require('@stdlib/number-float64-base-to-float32/dist'),j=require('@stdlib/math-base-assert-is-nanf/dist'),m=require('@stdlib/math-base-special-abs/dist');function h(f,n,l){var s,v,q,u,t,c,r,e,o;if(f<=0)return 0;if(f===1||l===0)return j(n[0])?0:n[0];for(l<0?q=(1-f)*l:q=0,s=0,v=0,u=0,o=0;o<f;o++)c=n[q],j(c)===!1&&(r=a(s+c),m(s)>=m(c)?e=a(a(s-r)+c):e=a(a(c-r)+s),s=r,r=a(u+e),m(u)>=m(e)?t=a(a(u-r)+e):t=a(a(e-r)+u),u=r,v=a(v+t)),q+=l;return a(s+a(u+v))}x.exports=h
});var _=k(function(J,T){
var i=require('@stdlib/number-float64-base-to-float32/dist'),R=require('@stdlib/math-base-assert-is-nanf/dist'),b=require('@stdlib/math-base-special-abs/dist');function w(f,n,l,s){var v,q,u,t,c,r,e,o,p;if(f<=0)return 0;if(f===1||l===0)return R(n[s])?0:n[s];for(u=s,v=0,q=0,t=0,p=0;p<f;p++)r=n[u],R(r)===!1&&(e=i(v+r),b(v)>=b(r)?o=i(i(v-e)+r):o=i(i(r-e)+v),v=e,e=i(t+o),b(t)>=b(o)?c=i(i(t-e)+o):c=i(i(o-e)+t),t=e,q=i(q+c)),u+=l;return i(v+i(t+q))}T.exports=w
});var d=k(function(K,O){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=F(),A=_();z(E,"ndarray",A);O.exports=E
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),G=d(),y,g=C(B(__dirname,"./native.js"));D(g)?y=G:y=g;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
