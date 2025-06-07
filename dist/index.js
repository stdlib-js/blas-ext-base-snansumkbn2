"use strict";var b=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var l=b(function(I,d){
var r=require('@stdlib/number-float64-base-to-float32/dist'),y=require('@stdlib/math-base-assert-is-nanf/dist'),c=require('@stdlib/math-base-special-absf/dist');function g(a,e,t,O){var n,q,f,s,o,u,i,v,m;if(a<=0)return 0;if(f=O,t===0)return y(e[f])?0:r(a*e[f]);for(n=0,q=0,s=0,m=0;m<a;m++)u=e[f],y(u)===!1&&(i=r(n+u),c(n)>=c(u)?v=r(r(n-i)+u):v=r(r(u-i)+n),n=i,i=r(s+v),c(s)>=c(v)?o=r(r(s-i)+v):o=r(r(v-i)+s),s=i,q=r(q+o)),f+=t;return r(n+r(s+q))}d.exports=g
});var j=b(function(J,k){
var h=require('@stdlib/strided-base-stride2offset/dist'),w=l();function z(a,e,t){return w(a,e,t,h(a,t))}k.exports=z
});var _=b(function(K,R){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=j(),B=l();A(x,"ndarray",B);R.exports=x
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=_(),p,E=D(C(__dirname,"./native.js"));F(E)?p=G:p=E;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
