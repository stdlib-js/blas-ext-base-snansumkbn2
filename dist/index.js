"use strict";var l=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var b=l(function(H,d){
var r=require('@stdlib/number-float64-base-to-float32/dist'),y=require('@stdlib/math-base-assert-is-nanf/dist'),q=require('@stdlib/math-base-special-absf/dist');function O(a,e,v,F){var n,o,f,s,c,u,i,t,m;if(a<=0)return 0;if(f=F,v===0)return y(e[f])?0:r(a*e[f]);for(n=0,o=0,s=0,m=0;m<a;m++)u=e[f],y(u)===!1&&(i=r(n+u),q(n)>=q(u)?t=r(r(n-i)+u):t=r(r(u-i)+n),n=i,i=r(s+t),q(s)>=q(t)?c=r(r(s-i)+t):c=r(r(t-i)+s),s=i,o=r(o+c)),f+=v;return r(n+r(s+o))}d.exports=O
});var j=l(function(I,k){
var T=require('@stdlib/strided-base-stride2offset/dist'),g=b();function h(a,e,v){return g(a,e,v,T(a,v))}k.exports=h
});var _=l(function(J,R){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=j(),z=b();w(x,"ndarray",z);R.exports=x
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=_(),p,E=B(A(__dirname,"./native.js"));C(E)?p=D:p=E;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
