"use strict";var b=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var l=b(function(I,d){
var r=require('@stdlib/number-float64-base-to-float32/dist'),y=require('@stdlib/math-base-assert-is-nanf/dist'),c=require('@stdlib/math-base-special-absf/dist');function g(a,e,n,O){var s,q,f,u,o,v,i,t,m;if(a<=0)return 0;if(f=O,n===0)return y(e[f])?0:r(a*e[f]);for(s=0,q=0,u=0,m=0;m<a;m++)v=e[f],y(v)===!1&&(i=r(s+v),c(s)>=c(v)?t=r(r(s-i)+v):t=r(r(v-i)+s),s=i,i=r(u+t),c(u)>=c(t)?o=r(r(u-i)+t):o=r(r(t-i)+u),u=i,q=r(q+o)),f+=n;return r(s+r(u+q))}d.exports=g
});var j=b(function(J,k){
var h=require('@stdlib/strided-base-stride2offset/dist'),w=l();function z(a,e,n){return w(a,e,n,h(a,n))}k.exports=z
});var _=b(function(K,R){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=j(),B=l();A(x,"ndarray",B);R.exports=x
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=_(),p,E=D(C(__dirname,"./native.js"));F(E)?p=G:p=E;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
