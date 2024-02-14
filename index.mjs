// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";function n(r,n,i){var a,d,m,o,f,l,j,p,u;if(r<=0)return 0;if(1===r||0===i)return e(n[0])?0:n[0];for(m=i<0?(1-r)*i:0,a=0,d=0,o=0,u=0;u<r;u++)l=n[m],!1===e(l)&&(j=t(a+l),p=s(a)>=s(l)?t(t(a-j)+l):t(t(l-j)+a),a=j,j=t(o+p),f=s(o)>=s(p)?t(t(o-j)+p):t(t(p-j)+o),o=j,d=t(d+f)),m+=i;return t(a+t(o+d))}function i(r,n,i,a){var d,m,o,f,l,j,p,u,b;if(r<=0)return 0;if(1===r||0===i)return e(n[a])?0:n[a];for(o=a,d=0,m=0,f=0,b=0;b<r;b++)j=n[o],!1===e(j)&&(p=t(d+j),u=s(d)>=s(j)?t(t(d-p)+j):t(t(j-p)+d),d=p,p=t(f+u),l=s(f)>=s(u)?t(t(f-p)+u):t(t(u-p)+f),f=p,m=t(m+l)),o+=i;return t(d+t(f+m))}r(n,"ndarray",i);export{n as default,i as ndarray};
//# sourceMappingURL=index.mjs.map
