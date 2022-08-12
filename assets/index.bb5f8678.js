const sm=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}};sm();document.querySelector(".name");document.querySelector(".three-d");const am=document.querySelector(".test-my-work"),om=document.querySelector(".technology-animation");window.addEventListener("scroll",()=>{let o=window.scrollY;am.style.transform=`translateX(${o-800}px)`,om.style.transform=`translateX(${-o-800}px)`});function hi(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Qf(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},bs={duration:.5,overwrite:!1,delay:0},qc,Sn=1e8,st=1/Sn,dc=Math.PI*2,lm=dc/4,cm=0,ed=Math.sqrt,um=Math.cos,hm=Math.sin,Rt=function(e){return typeof e=="string"},Lt=function(e){return typeof e=="function"},yi=function(e){return typeof e=="number"},jc=function(e){return typeof e=="undefined"},Mi=function(e){return typeof e=="object"},an=function(e){return e!==!1},td=function(){return typeof window!="undefined"},qa=function(e){return Lt(e)||Rt(e)},nd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Gt=Array.isArray,pc=/(?:-?\.?\d|\.)+/gi,id=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ls=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,gl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,rd=/[+-]=-?[.\d]+/,sd=/[^,'"\[\]\s]+/gi,fm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,lt,qn,mc,Yc,gn={},Vo={},ad,od=function(e){return(Vo=Cr(e,gn))&&kn},Kc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Go=function(e,t){return!t&&console.warn(e)},ld=function(e,t){return e&&(gn[e]=t)&&Vo&&(Vo[e]=t)||gn},ya=function(){return 0},Zc={},Vi=[],gc={},cd,hn={},_l={},Lu=30,Lo=[],$c="",Jc=function(e){var t=e[0],n,i;if(Mi(t)||Lt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Lo.length;i--&&!Lo[i].targetTest(t););n=Lo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Pd(e[i],n)))||e.splice(i,1);return e},yr=function(e){return e._gsap||Jc(wn(e))[0]._gsap},ud=function(e,t,n){return(n=e[t])&&Lt(n)?e[t]():jc(n)&&e.getAttribute&&e.getAttribute(t)||n},on=function(e,t){return(e=e.split(",")).forEach(t)||e},mt=function(e){return Math.round(e*1e5)/1e5||0},Ut=function(e){return Math.round(e*1e7)/1e7||0},ds=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},dm=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ho=function(){var e=Vi.length,t=Vi.slice(0),n,i;for(gc={},Vi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},hd=function(e,t,n,i){Vi.length&&Ho(),e.render(t,n,i),Vi.length&&Ho()},fd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(sd).length<2?t:Rt(e)?e.trim():e},dd=function(e){return e},Cn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},pm=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Cr=function(e,t){for(var n in t)e[n]=t[n];return e},Ru=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Mi(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},Wo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ca=function(e){var t=e.parent||lt,n=e.keyframes?pm(Gt(e.keyframes)):Cn;if(an(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},mm=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},pd=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e[i],a;if(r)for(a=t[r];s&&s[r]>a;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=s,t.parent=t._dp=e,t},il=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,s=t._next;r?r._next=s:e[n]===t&&(e[n]=s),s?s._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},gi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Mr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},gm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},_m=function o(e){return!e||e._ts&&o(e.parent)},Pu=function(e){return e._repeat?Ss(e._tTime,e=e.duration()+e._rDelay)*e:0},Ss=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Xo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},rl=function(e){return e._end=Ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||st)||0))},Qc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ut(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),rl(e),n._dirty||Mr(n,e)),e},md=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Xo(e.rawTime(),t),(!t._dur||Ua(0,t.totalDuration(),n)-t._tTime>st)&&t.render(n,!0)),Mr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-st}},Kn=function(e,t,n,i){return t.parent&&gi(t),t._start=Ut((yi(n)?n:n||e!==lt?xn(e,n,t):e._time)+t._delay),t._end=Ut(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),pd(e,t,"_first","_last",e._sort?"_start":0),_c(t)||(e._recent=t),i||md(e,t),e},gd=function(e,t){return(gn.ScrollTrigger||Kc("scrollTrigger",t))&&gn.ScrollTrigger.create(t,e)},_d=function(e,t,n,i){if(tu(e,t),!e._initted)return 1;if(!n&&e._pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&cd!==fn.frame)return Vi.push(e),e._lazy=[t,i],1},xm=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},_c=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},vm=function(e,t,n,i){var r=e.ratio,s=t<0||!t&&(!e._start&&xm(e)&&!(!e._initted&&_c(e))||(e._ts<0||e._dp._ts<0)&&!_c(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Ua(0,e._tDur,t),u=Ss(l,a),e._yoyo&&u&1&&(s=1-s),u!==Ss(e._tTime,a)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||i||e._zTime===st||!t&&e._zTime){if(!e._initted&&_d(e,t,i,n))return;for(h=e._zTime,e._zTime=t||(n?st:0),n||(n=t&&!h),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;e._startAt&&t<0&&e._startAt.render(t,!0,!0),e._onUpdate&&!n&&Tn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Tn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&gi(e,1),n||(Tn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ym=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ws=function(e,t,n,i){var r=e._repeat,s=Ut(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:Ut(s*(r+1)+e._rDelay*r):s,a>0&&!i?Qc(e,e._tTime=e._tDur*a):e.parent&&rl(e),n||Mr(e.parent,e),e},Du=function(e){return e instanceof sn?Mr(e):ws(e,e._dur)},Mm={_start:0,endTime:ya,totalDuration:ya},xn=function o(e,t,n){var i=e.labels,r=e._recent||Mm,s=e.duration()>=Sn?r.endTime(!1):e._dur,a,l,c;return Rt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=s),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Gt(n)?n[0]:n).totalDuration()),a>1?o(e,t.substr(0,a-1),n)+l:s+l)):t==null?s:+t},ua=function(e,t,n){var i=yi(t[1]),r=(i?2:1)+(e<2?0:1),s=t[r],a,l;if(i&&(s.duration=t[1]),s.parent=n,e){for(a=s,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=an(l.vars.inherit)&&l.parent;s.immediateRender=an(a.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new Ct(t[0],s,t[r+1])},Zi=function(e,t){return e||e===0?t(e):t},Ua=function(e,t,n){return n<e?e:n>t?t:n},Vt=function(e,t){return!Rt(e)||!(t=fm.exec(e))?"":t[1]},bm=function(e,t,n){return Zi(n,function(i){return Ua(e,t,i)})},xc=[].slice,xd=function(e,t){return e&&Mi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Mi(e[0]))&&!e.nodeType&&e!==qn},Sm=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Rt(i)&&!t||xd(i,1)?(r=n).push.apply(r,wn(i)):n.push(i)})||n},wn=function(e,t,n){return Rt(e)&&!n&&(mc||!Ts())?xc.call((t||Yc).querySelectorAll(e),0):Gt(e)?Sm(e,n):xd(e)?xc.call(e,0):e?[e]:[]},wm=function(e){return e=wn(e)[0]||Go("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return wn(t,n.querySelectorAll?n:n===e?Go("Invalid scope")||Yc.createElement("div"):e)}},vd=function(e){return e.sort(function(){return .5-Math.random()})},yd=function(e){if(Lt(e))return e;var t=Mi(e)?e:{each:e},n=br(t.ease),i=t.from||0,r=parseFloat(t.base)||0,s={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return Rt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var p=(g||t).length,m=s[p],_,y,b,M,x,w,C,v,T;if(!m){if(T=t.grid==="auto"?0:(t.grid||[1,Sn])[1],!T){for(C=-Sn;C<(C=g[T++].getBoundingClientRect().left)&&T<p;);T--}for(m=s[p]=[],_=l?Math.min(T,p)*u-.5:i%T,y=T===Sn?0:l?p*h/T-.5:i/T|0,C=0,v=Sn,w=0;w<p;w++)b=w%T-_,M=y-(w/T|0),m[w]=x=c?Math.abs(c==="y"?M:b):ed(b*b+M*M),x>C&&(C=x),x<v&&(v=x);i==="random"&&vd(m),m.max=C-v,m.min=v,m.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(T>p?p-1:c?c==="y"?p/T:T:Math.max(T,p/T))||0)*(i==="edges"?-1:1),m.b=p<0?r-p:r,m.u=Vt(t.amount||t.each)||0,n=n&&p<0?Cd(n):n}return p=(m[f]-m.min)/m.max||0,Ut(m.b+(n?n(p):p)*m.v)+m.u}},vc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Math.round(parseFloat(n)/e)*e*t;return(i-i%1)/t+(yi(n)?0:Vt(n))}},Md=function(e,t){var n=Gt(e),i,r;return!n&&Mi(e)&&(i=n=e.radius||Sn,e.values?(e=wn(e.values),(r=!yi(e[0]))&&(i*=i)):e=vc(e.increment)),Zi(t,n?Lt(e)?function(s){return r=e(s),Math.abs(r-s)<=i?r:s}:function(s){for(var a=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=Sn,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:s,r||u===s||yi(s)?u:u+Vt(s)}:vc(e))},bd=function(e,t,n,i){return Zi(Gt(e)?!t:n===!0?!!(n=0):!i,function(){return Gt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Tm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,s){return s(r)},i)}},Em=function(e,t){return function(n){return e(parseFloat(n))+(t||Vt(n))}},Am=function(e,t,n){return wd(e,t,0,1,n)},Sd=function(e,t,n){return Zi(n,function(i){return e[~~t(i)]})},Cm=function o(e,t,n){var i=t-e;return Gt(e)?Sd(e,o(0,e.length),t):Zi(n,function(r){return(i+(r-e)%i)%i+e})},Lm=function o(e,t,n){var i=t-e,r=i*2;return Gt(e)?Sd(e,o(0,e.length-1),t):Zi(n,function(s){return s=(r+(s-e)%r)%r||0,e+(s>i?r-s:s)})},Ma=function(e){for(var t=0,n="",i,r,s,a;~(i=e.indexOf("random(",t));)s=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,s-i-7).match(a?sd:pc),n+=e.substr(t,i-t)+bd(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=s+1;return n+e.substr(t,e.length-t)},wd=function(e,t,n,i,r){var s=t-e,a=i-n;return Zi(r,function(l){return n+((l-e)/s*a||0)})},Rm=function o(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var s=Rt(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),s)e={p:e},t={p:t};else if(Gt(e)&&!Gt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(o(e[c-1],e[c]));h--,r=function(g){g*=h;var p=Math.min(f,~~g);return u[p](g-p)},n=t}else i||(e=Cr(Gt(e)?[]:{},e));if(!u){for(l in t)eu.call(a,e,l,"get",t[l]);r=function(g){return ru(g,a)||(s?e.p:e)}}}return Zi(n,r)},Iu=function(e,t,n){var i=e.labels,r=Sn,s,a,l;for(s in i)a=i[s]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=s,r=a);return l},Tn=function(e,t,n){var i=e.vars,r=i[t],s,a;if(!!r)return s=i[t+"Params"],a=i.callbackScope||e,n&&Vi.length&&Ho(),s?r.apply(a,s):r.call(a)},na=function(e){return gi(e),e.scrollTrigger&&e.scrollTrigger.kill(!1),e.progress()<1&&Tn(e,"onInterrupt"),e},cs,Pm=function(e){e=!e.name&&e.default||e;var t=e.name,n=Lt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:ya,render:ru,add:eu,kill:jm,modifier:qm,rawVars:0},s={targetTest:0,get:0,getSetter:iu,aliases:{},register:0};if(Ts(),e!==i){if(hn[t])return;Cn(i,Cn(Wo(e,r),s)),Cr(i.prototype,Cr(r,Wo(e,s))),hn[i.prop=t]=i,e.targetTest&&(Lo.push(i),Zc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ld(t,i),e.register&&e.register(kn,i,ln)},rt=255,ia={aqua:[0,rt,rt],lime:[0,rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,rt],navy:[0,0,128],white:[rt,rt,rt],olive:[128,128,0],yellow:[rt,rt,0],orange:[rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[rt,0,0],pink:[rt,192,203],cyan:[0,rt,rt],transparent:[rt,rt,rt,0]},xl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*rt+.5|0},Td=function(e,t,n){var i=e?yi(e)?[e>>16,e>>8&rt,e&rt]:0:ia.black,r,s,a,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ia[e])i=ia[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+r+r+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&rt,i&rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&rt,e&rt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(pc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,s=u<=.5?u*(c+1):u+c-u*c,r=u*2-s,i.length>3&&(i[3]*=1),i[0]=xl(l+1/3,r,s),i[1]=xl(l,r,s),i[2]=xl(l-1/3,r,s);else if(~e.indexOf("="))return i=e.match(id),n&&i.length<4&&(i[3]=1),i}else i=e.match(pc)||ia.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/rt,s=i[1]/rt,a=i[2]/rt,h=Math.max(r,s,a),f=Math.min(r,s,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(s-a)/d+(s<a?6:0):h===s?(a-r)/d+2:(r-s)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Ed=function(e){var t=[],n=[],i=-1;return e.split(Gi).forEach(function(r){var s=r.match(ls)||[];t.push.apply(t,s),n.push(i+=s.length+1)}),t.c=n,t},Fu=function(e,t,n){var i="",r=(e+i).match(Gi),s=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Td(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Ed(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Gi,"1").split(ls),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||s+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Gi),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h]},Gi=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ia)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),Dm=/hsl[a]?\(/,Ad=function(e){var t=e.join(" "),n;if(Gi.lastIndex=0,Gi.test(t))return n=Dm.test(t),e[1]=Fu(e[1],n),e[0]=Fu(e[0],n,Ed(e[1])),!0},ba,fn=function(){var o=Date.now,e=500,t=33,n=o(),i=n,r=1e3/240,s=r,a=[],l,c,u,h,f,d,g=function p(m){var _=o()-i,y=m===!0,b,M,x,w;if(_>e&&(n+=_-t),i+=_,x=i-n,b=x-s,(b>0||y)&&(w=++h.frame,f=x-h.time*1e3,h.time=x=x/1e3,s+=b+(b>=r?4:r-b),M=1),y||(l=c(p)),M)for(d=0;d<a.length;d++)a[d](x,f,w,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){ad&&(!mc&&td()&&(qn=mc=window,Yc=qn.document||{},gn.gsap=kn,(qn.gsapVersions||(qn.gsapVersions=[])).push(kn.version),od(Vo||qn.GreenSockGlobals||!qn.gsap&&qn||{}),u=qn.requestAnimationFrame),l&&h.sleep(),c=u||function(m){return setTimeout(m,s-h.time*1e3+1|0)},ba=1,g(2))},sleep:function(){(u?qn.cancelAnimationFrame:clearTimeout)(l),ba=0,c=ya},lagSmoothing:function(m,_){e=m||1/st,t=Math.min(_,e,0)},fps:function(m){r=1e3/(m||240),s=h.time*1e3+r},add:function(m,_,y){var b=_?function(M,x,w,C){m(M,x,w,C),h.remove(b)}:m;return h.remove(m),a[y?"unshift":"push"](b),Ts(),b},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&d>=_&&d--},_listeners:a},h}(),Ts=function(){return!ba&&fn.wake()},qe={},Im=/^[\d.\-M][\d.\-,\s]/,Fm=/["']/g,Nm=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,s=n.length,a,l,c;r<s;r++)l=n[r],a=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Fm,"").trim():+c,i=l.substr(a+1).trim();return t},Om=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},km=function(e){var t=(e+"").split("("),n=qe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Nm(t[1])]:Om(e).split(",").map(fd)):qe._CE&&Im.test(e)?qe._CE("",e):n},Cd=function(e){return function(t){return 1-e(1-t)}},Ld=function o(e,t){for(var n=e._first,i;n;)n instanceof sn?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},br=function(e,t){return e&&(Lt(e)?e:qe[e]||km(e))||t},Nr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},s;return on(e,function(a){qe[a]=gn[a]=r,qe[s=a.toLowerCase()]=n;for(var l in r)qe[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=qe[a+"."+l]=r[l]}),r},Rd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},vl=function o(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),s=r/dc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*hm((u-s)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Rd(a);return r=dc/r,l.config=function(c,u){return o(e,c,u)},l},yl=function o(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Rd(n);return i.config=function(r){return o(e,r)},i};on("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;Nr(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});qe.Linear.easeNone=qe.none=qe.Linear.easeIn;Nr("Elastic",vl("in"),vl("out"),vl());(function(o,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?o*a*a:a<n?o*Math.pow(a-1.5/e,2)+.75:a<i?o*(a-=2.25/e)*a+.9375:o*Math.pow(a-2.625/e,2)+.984375};Nr("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);Nr("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});Nr("Circ",function(o){return-(ed(1-o*o)-1)});Nr("Sine",function(o){return o===1?1:-um(o*lm)+1});Nr("Back",yl("in"),yl("out"),yl());qe.SteppedEase=qe.steps=gn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,s=1-st;return function(a){return((i*Ua(0,s,a)|0)+r)*n}}};bs.ease=qe["quad.out"];on("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return $c+=o+","+o+"Params,"});var Pd=function(e,t){this.id=cm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ud,this.set=t?t.getSetter:iu},Sa=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ws(this,+t.duration,1,1),this.data=t.data,ba||fn.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ws(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ts(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Qc(this,n),!r._dp||r.parent||md(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Kn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===st||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),hd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Pu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Pu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ss(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-st?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Xo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-st?0:this._rts,this.totalTime(Ua(-this._delay,this._tDur,i),!0),rl(this),gm(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ts(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==st&&(this._tTime-=st)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Kn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(an(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Xo(i.rawTime(n),this):this._tTime:this._tTime},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Du(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Du(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(xn(this,n),an(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,an(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-st:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-st,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-st)},e.eventCallback=function(n,i,r){var s=this.vars;return arguments.length>1?(i?(s[n]=i,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},e.then=function(n){var i=this;return new Promise(function(r){var s=Lt(n)?n:dd,a=function(){var c=i.then;i.then=null,Lt(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),r(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){na(this)},o}();Cn(Sa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-st,_prom:0,_ps:!1,_rts:1});var sn=function(o){Qf(e,o);function e(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=an(n.sortChildren),lt&&Kn(n.parent||lt,hi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&gd(hi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,s){return ua(0,arguments,this),this},t.from=function(i,r,s){return ua(1,arguments,this),this},t.fromTo=function(i,r,s,a){return ua(2,arguments,this),this},t.set=function(i,r,s){return r.duration=0,r.parent=this,ca(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ct(i,r,xn(this,s),1),this},t.call=function(i,r,s){return Kn(this,Ct.delayedCall(0,i,r),s)},t.staggerTo=function(i,r,s,a,l,c,u){return s.duration=r,s.stagger=s.stagger||a,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new Ct(i,s,xn(this,l)),this},t.staggerFrom=function(i,r,s,a,l,c,u){return s.runBackwards=1,ca(s).immediateRender=an(s.immediateRender),this.staggerTo(i,r,s,a,l,c,u)},t.staggerFromTo=function(i,r,s,a,l,c,u,h){return a.startAt=s,ca(a).immediateRender=an(a.immediateRender),this.staggerTo(i,r,a,l,c,u,h)},t.render=function(i,r,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ut(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,p,m,_,y,b,M,x,w,C;if(this!==lt&&u>l&&i>=0&&(u=l),u!==this._tTime||s||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,M=this._start,b=this._ts,_=!b,h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,s);if(f=Ut(u%m),u===l?(p=this._repeat,f=c):(p=~~(u/m),p&&p===u/m&&(f=c,p--),f>c&&(f=c)),x=Ss(this._tTime,m),!a&&this._tTime&&x!==p&&(x=p),w&&p&1&&(f=c-f,C=1),p!==x&&!this._lock){var v=w&&x&1,T=v===(w&&p&1);if(p<x&&(v=!v),a=v?0:c,this._lock=1,this.render(a||(C?0:Ut(p*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Tn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Ld(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=ym(this,Ut(a),Ut(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!r&&(Tn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,r,s);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,s),f!==this._time||!this._ts&&!_){y=0,g&&(u+=this._zTime=-st);break}}d=g}else{d=this._last;for(var I=i<0?i:f;d;){if(g=d._prev,(d._act||I<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,r,s);if(d.render(d._ts>0?(I-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(I-d._start)*d._ts,r,s),f!==this._time||!this._ts&&!_){y=0,g&&(u+=this._zTime=I?-st:st);break}}d=g}}if(y&&!r&&(this.pause(),y.render(f>=a?0:-st)._zTime=f>=a?1:-1,this._ts))return this._start=M,rl(this),this.render(i,r,s);this._onUpdate&&!r&&Tn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&gi(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(Tn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var s=this;if(yi(r)||(r=xn(this,r,i)),!(i instanceof Sa)){if(Gt(i))return i.forEach(function(a){return s.add(a,r)}),this;if(Rt(i))return this.addLabel(i,r);if(Lt(i))i=Ct.delayedCall(0,i);else return this}return this!==i?Kn(this,i,r):this},t.getChildren=function(i,r,s,a){i===void 0&&(i=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=-Sn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ct?r&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===i)return r[s]},t.remove=function(i){return Rt(i)?this.removeLabel(i):Lt(i)?this.killTweensOf(i):(il(this,i),i===this._recent&&(this._recent=this._last),Mr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ut(fn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=xn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,s){var a=Ct.delayedCall(0,r||ya,s);return a.data="isPause",this._hasPause=1,Kn(this,a,xn(this,i))},t.removePause=function(i){var r=this._first;for(i=xn(this,i);r;)r._start===i&&r.data==="isPause"&&gi(r),r=r._next},t.killTweensOf=function(i,r,s){for(var a=this.getTweensOf(i,s),l=a.length;l--;)Fi!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var s=[],a=wn(i),l=this._first,c=yi(r),u;l;)l instanceof Ct?dm(l._targets,a)&&(c?(!Fi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(u=l.getTweensOf(a,r)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(i,r){r=r||{};var s=this,a=xn(s,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Ct.to(s,Cn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale())||st,onStart:function(){if(s.pause(),!d){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale());g._dur!==m&&ws(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,s){return this.tweenTo(r,Cn({startAt:{time:xn(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Iu(this,xn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Iu(this,xn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+st)},t.shiftChildren=function(i,r,s){s===void 0&&(s=0);for(var a=this._first,l=this.labels,c;a;)a._start>=s&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=s&&(l[c]+=i);return Mr(this)},t.invalidate=function(){var i=this._first;for(this._lock=0;i;)i.invalidate(),i=i._next;return o.prototype.invalidate.call(this)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Mr(this)},t.totalDuration=function(i){var r=0,s=this,a=s._last,l=Sn,c,u,h;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(h=s.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,Kn(s,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!s._dp||h&&h.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;ws(s,s===lt&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(lt._ts&&(hd(lt,Xo(i,lt)),cd=fn.frame),fn.frame>=Lu){Lu+=pn.autoSleep||120;var r=lt._first;if((!r||!r._ts)&&pn.autoSleep&&fn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||fn.sleep()}}},e}(Sa);Cn(sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var zm=function(e,t,n,i,r,s,a){var l=new ln(this._pt,e,t,0,1,kd,null,r),c=0,u=0,h,f,d,g,p,m,_,y;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Ma(i)),s&&(y=[n,i],s(y,e,t),n=y[0],i=y[1]),f=n.match(gl)||[];h=gl.exec(i);)g=h[0],p=i.substring(c,h.index),d?d=(d+1)%5:p.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:m,c:g.charAt(1)==="="?ds(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=gl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(rd.test(i)||_)&&(l.e=0),this._pt=l,l},eu=function(e,t,n,i,r,s,a,l,c){Lt(i)&&(i=i(r||0,e,s));var u=e[t],h=n!=="get"?n:Lt(u)?c?e[t.indexOf("set")||!Lt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=Lt(u)?c?Hm:Nd:nu,d;if(Rt(i)&&(~i.indexOf("random(")&&(i=Ma(i)),i.charAt(1)==="="&&(d=ds(h,i)+(Vt(h)||0),(d||d===0)&&(i=d))),h!==i||yc)return!isNaN(h*i)&&i!==""?(d=new ln(this._pt,e,t,+h||0,i-(h||0),typeof u=="boolean"?Xm:Od,0,f),c&&(d.fp=c),a&&d.modifier(a,this,e),this._pt=d):(!u&&!(t in e)&&Kc(t,i),zm.call(this,e,t,h,i,f,l||pn.stringFilter,c))},Um=function(e,t,n,i,r){if(Lt(e)&&(e=ha(e,r,t,n,i)),!Mi(e)||e.style&&e.nodeType||Gt(e)||nd(e))return Rt(e)?ha(e,r,t,n,i):e;var s={},a;for(a in e)s[a]=ha(e[a],r,t,n,i);return s},Dd=function(e,t,n,i,r,s){var a,l,c,u;if(hn[e]&&(a=new hn[e]).init(r,a.rawVars?t[e]:Um(t[e],i,r,s,n),n,i,s)!==!1&&(n._pt=l=new ln(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==cs))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Fi,yc,tu=function o(e,t){var n=e.vars,i=n.ease,r=n.startAt,s=n.immediateRender,a=n.lazy,l=n.onUpdate,c=n.onUpdateParams,u=n.callbackScope,h=n.runBackwards,f=n.yoyoEase,d=n.keyframes,g=n.autoRevert,p=e._dur,m=e._startAt,_=e._targets,y=e.parent,b=y&&y.data==="nested"?y.parent._targets:_,M=e._overwrite==="auto"&&!qc,x=e.timeline,w,C,v,T,I,N,X,j,D,U,k,B,H;if(x&&(!d||!i)&&(i="none"),e._ease=br(i,bs.ease),e._yEase=f?Cd(br(f===!0?i:f,bs.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!x&&!!n.runBackwards,!x||d&&!n.stagger){if(j=_[0]?yr(_[0]).harness:0,B=j&&n[j.prop],w=Wo(n,Zc),m&&(gi(m.render(-1,!0)),m._lazy=0),r)if(gi(e._startAt=Ct.set(_,Cn({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:an(a),startAt:null,delay:0,onUpdate:l,onUpdateParams:c,callbackScope:u,stagger:0},r))),t<0&&!s&&!g&&e._startAt.render(-1,!0),s){if(t>0&&!g&&(e._startAt=0),p&&t<=0){t&&(e._zTime=t);return}}else g===!1&&(e._startAt=0);else if(h&&p){if(m)!g&&(e._startAt=0);else if(t&&(s=!1),v=Cn({overwrite:!1,data:"isFromStart",lazy:s&&an(a),immediateRender:s,stagger:0,parent:y},w),B&&(v[j.prop]=B),gi(e._startAt=Ct.set(_,v)),t<0&&e._startAt.render(-1,!0),e._zTime=t,!s)o(e._startAt,st);else if(!t)return}for(e._pt=e._ptCache=0,a=p&&an(a)||a&&!p,C=0;C<_.length;C++){if(I=_[C],X=I._gsap||Jc(_)[C]._gsap,e._ptLookup[C]=U={},gc[X.id]&&Vi.length&&Ho(),k=b===_?C:b.indexOf(I),j&&(D=new j).init(I,B||w,e,k,b)!==!1&&(e._pt=T=new ln(e._pt,I,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(W){U[W]=T}),D.priority&&(N=1)),!j||B)for(v in w)hn[v]&&(D=Dd(v,w,e,k,I,b))?D.priority&&(N=1):U[v]=T=eu.call(e,I,v,"get",w[v],k,b,0,n.stringFilter);e._op&&e._op[C]&&e.kill(I,e._op[C]),M&&e._pt&&(Fi=e,lt.killTweensOf(I,U,e.globalTime(t)),H=!e.parent,Fi=0),e._pt&&a&&(gc[X.id]=1)}N&&zd(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!H,d&&t<=0&&x.render(Sn,!0,!0)},Bm=function(e,t,n,i,r,s,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h;if(!l)for(l=e._ptCache[t]=[],u=e._ptLookup,h=e._targets.length;h--;){if(c=u[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t;)c=c._next;if(!c)return yc=1,e.vars[t]="+=0",tu(e,a),yc=0,1;l.push(c)}for(h=l.length;h--;)c=l[h],c.s=(i||i===0)&&!r?i:c.s+(i||0)+s*c.c,c.c=n-c.s,c.e&&(c.e=mt(n)+Vt(c.e)),c.b&&(c.b=c.s+Vt(c.b))},Vm=function(e,t){var n=e[0]?yr(e[0]).harness:0,i=n&&n.aliases,r,s,a,l;if(!i)return t;r=Cr({},t);for(s in i)if(s in r)for(l=i[s].split(","),a=l.length;a--;)r[l[a]]=r[s];return r},Gm=function(e,t,n,i){var r=t.ease||i||"power1.inOut",s,a;if(Gt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(s in t)a=n[s]||(n[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:t[s],e:r})},ha=function(e,t,n,i,r){return Lt(e)?e.call(t,n,i,r):Rt(e)&&~e.indexOf("random(")?Ma(e):e},Id=$c+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Fd={};on(Id+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Fd[o]=1});var Ct=function(o){Qf(e,o);function e(n,i,r,s){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=o.call(this,s?i:ca(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,p=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,y=i.parent||lt,b=(Gt(n)||nd(n)?yi(n[0]):"length"in i)?[n]:wn(n),M,x,w,C,v,T,I,N;if(a._targets=b.length?Jc(b):Go("GSAP target "+n+" not found. https://greensock.com",!pn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||qa(c)||qa(u)){if(i=a.vars,M=a.timeline=new sn({data:"nested",defaults:p||{}}),M.kill(),M.parent=M._dp=hi(a),M._start=0,f||qa(c)||qa(u)){if(C=b.length,I=f&&yd(f),Mi(f))for(v in f)~Id.indexOf(v)&&(N||(N={}),N[v]=f[v]);for(x=0;x<C;x++)w=Wo(i,Fd),w.stagger=0,_&&(w.yoyoEase=_),N&&Cr(w,N),T=b[x],w.duration=+ha(c,hi(a),x,T,b),w.delay=(+ha(u,hi(a),x,T,b)||0)-a._delay,!f&&C===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),M.to(T,w,I?I(x,T,b):0),M._ease=qe.none;M.duration()?c=u=0:a.timeline=0}else if(g){ca(Cn(M.vars.defaults,{ease:"none"})),M._ease=br(g.ease||i.ease||"none");var X=0,j,D,U;if(Gt(g))g.forEach(function(k){return M.to(b,k,">")});else{w={};for(v in g)v==="ease"||v==="easeEach"||Gm(v,g[v],w,g.easeEach);for(v in w)for(j=w[v].sort(function(k,B){return k.t-B.t}),X=0,x=0;x<j.length;x++)D=j[x],U={ease:D.e,duration:(D.t-(x?j[x-1].t:0))/100*c},U[v]=D.v,M.to(b,U,X),X+=U.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return d===!0&&!qc&&(Fi=hi(a),lt.killTweensOf(b),Fi=0),Kn(y,hi(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===Ut(y._time)&&an(h)&&_m(hi(a))&&y.data!=="nested")&&(a._tTime=-st,a.render(Math.max(0,-u))),m&&gd(hi(a),m),a}var t=e.prototype;return t.render=function(i,r,s){var a=this._time,l=this._tDur,c=this._dur,u=i>l-st&&i>=0?l:i<st?0:i,h,f,d,g,p,m,_,y,b;if(!c)vm(this,i,r,s);else if(u!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=i<0){if(h=u,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,r,s);if(h=Ut(u%g),u===l?(d=this._repeat,h=c):(d=~~(u/g),d&&d===u/g&&(h=c,d--),h>c&&(h=c)),m=this._yoyo&&d&1,m&&(b=this._yEase,h=c-h),p=Ss(this._tTime,g),h===a&&!s&&this._initted)return this._tTime=u,this;d!==p&&(y&&this._yEase&&Ld(y,m),this.vars.repeatRefresh&&!m&&!this._lock&&(this._lock=s=1,this.render(Ut(g*d),!0).invalidate()._lock=0))}if(!this._initted){if(_d(this,i<0?i:h,s,r))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,r,s)}if(this._tTime=u,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(b||this._ease)(h/c),this._from&&(this.ratio=_=1-_),h&&!a&&!r&&(Tn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(_,f.d),f=f._next;y&&y.render(i<0?i:!h&&m?-st:y._dur*y._ease(h/this._dur),r,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(i<0&&this._startAt&&this._startAt.render(i,!0,s),Tn(this,"onUpdate")),this._repeat&&d!==p&&this.vars.onRepeat&&!r&&this.parent&&Tn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(i<0&&this._startAt&&!this._onUpdate&&this._startAt.render(i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&gi(this,1),!r&&!(i<0&&!a)&&(u||a)&&(Tn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),o.prototype.invalidate.call(this)},t.resetTo=function(i,r,s,a){ba||fn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||tu(this,l),c=this._ease(l/this._dur),Bm(this,i,r,s,a,c,l)?this.resetTo(i,r,s,a):(Qc(this,0),this.parent||pd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?na(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Fi&&Fi.vars.overwrite!==!0)._first||na(this),this.parent&&s!==this.timeline.totalDuration()&&ws(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=i?wn(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,p,m,_;if((!r||r==="all")&&mm(a,l))return r==="all"&&(this._pt=0),na(this);for(h=this._op=this._op||[],r!=="all"&&(Rt(r)&&(p={},on(r,function(y){return p[y]=1}),r=p),r=Vm(a,r)),_=a.length;_--;)if(~l.indexOf(a[_])){f=c[_],r==="all"?(h[_]=r,g=f,d={}):(d=h[_]=h[_]||{},g=r);for(p in g)m=f&&f[p],m&&((!("kill"in m.d)||m.d.kill(p)===!0)&&il(this,m,"_pt"),delete f[p]),d!=="all"&&(d[p]=1)}return this._initted&&!this._pt&&u&&na(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return ua(1,arguments)},e.delayedCall=function(i,r,s,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(i,r,s){return ua(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,s){return lt.killTweensOf(i,r,s)},e}(Sa);Cn(Ct.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});on("staggerTo,staggerFrom,staggerFromTo",function(o){Ct[o]=function(){var e=new sn,t=xc.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var nu=function(e,t,n){return e[t]=n},Nd=function(e,t,n){return e[t](n)},Hm=function(e,t,n,i){return e[t](i.fp,n)},Wm=function(e,t,n){return e.setAttribute(t,n)},iu=function(e,t){return Lt(e[t])?Nd:jc(e[t])&&e.setAttribute?Wm:nu},Od=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Xm=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},kd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},ru=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},qm=function(e,t,n,i){for(var r=this._pt,s;r;)s=r._next,r.p===i&&r.modifier(e,t,n),r=s},jm=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?il(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Ym=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},zd=function(e){for(var t=e._pt,n,i,r,s;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:s)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:s=t,t=n}e._pt=r},ln=function(){function o(t,n,i,r,s,a,l,c,u){this.t=n,this.s=r,this.c=s,this.p=i,this.r=a||Od,this.d=l||this,this.set=c||nu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Ym,this.m=n,this.mt=r,this.tween=i},o}();on($c+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Zc[o]=1});gn.TweenMax=gn.TweenLite=Ct;gn.TimelineLite=gn.TimelineMax=sn;lt=new sn({sortChildren:!1,defaults:bs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pn.stringFilter=Ad;var qo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Pm(i)})},timeline:function(e){return new sn(e)},getTweensOf:function(e,t){return lt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Rt(e)&&(e=wn(e)[0]);var r=yr(e||{}).get,s=n?dd:fd;return n==="native"&&(n=""),e&&(t?s((hn[t]&&hn[t].get||r)(e,t,n,i)):function(a,l,c){return s((hn[a]&&hn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=wn(e),e.length>1){var i=e.map(function(u){return kn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var s=hn[t],a=yr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=s?function(u){var h=new s;cs._pt=0,h.init(e,n?u+n:u,cs,0,[e]),h.render(1,h),cs._pt&&ru(1,cs)}:a.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=kn.to(e,Cr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),s=function(l,c,u){return r.resetTo(t,l,c,u)};return s.tween=r,s},isTweening:function(e){return lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=br(e.ease,bs.ease)),Ru(bs,e||{})},config:function(e){return Ru(pn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!hn[a]&&!gn[a]&&Go(t+" effect requires "+a+" plugin.")}),_l[t]=function(a,l,c){return n(wn(a),Cn(l||{},r),c)},s&&(sn.prototype[t]=function(a,l,c){return this.add(_l[t](a,Mi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){qe[e]=br(t)},parseEase:function(e,t){return arguments.length?br(e,t):qe},getById:function(e){return lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new sn(e),i,r;for(n.smoothChildTiming=an(e.smoothChildTiming),lt.remove(n),n._dp=0,n._time=n._tTime=lt._time,i=lt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Ct&&i.vars.onComplete===i._targets[0]))&&Kn(n,i,i._start-i._delay),i=r;return Kn(lt,n,0),n},utils:{wrap:Cm,wrapYoyo:Lm,distribute:yd,random:bd,snap:Md,normalize:Am,getUnit:Vt,clamp:bm,splitColor:Td,toArray:wn,selector:wm,mapRange:wd,pipe:Tm,unitize:Em,interpolate:Rm,shuffle:vd},install:od,effects:_l,ticker:fn,updateRoot:sn.updateRoot,plugins:hn,globalTimeline:lt,core:{PropTween:ln,globals:ld,Tween:Ct,Timeline:sn,Animation:Sa,getCache:yr,_removeLinkedListItem:il,suppressOverwrites:function(e){return qc=e}}};on("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return qo[o]=Ct[o]});fn.add(sn.updateRoot);cs=qo.to({},{duration:0});var Km=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Zm=function(e,t){var n=e._targets,i,r,s;for(i in t)for(r=n.length;r--;)s=e._ptLookup[r][i],s&&(s=s.d)&&(s._pt&&(s=Km(s,i)),s&&s.modifier&&s.modifier(t[i],e,n[r],i))},Ml=function(e,t){return{name:e,rawVars:1,init:function(i,r,s){s._onInit=function(a){var l,c;if(Rt(r)&&(l={},on(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Zm(a,r)}}}},kn=qo.registerPlugin({name:"attr",init:function(e,t,n,i,r){var s,a;for(s in t)a=this.add(e,"setAttribute",(e.getAttribute(s)||0)+"",t[s],i,r,0,0,s),a&&(a.op=s),this._props.push(s)}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n])}},Ml("roundProps",vc),Ml("modifiers"),Ml("snap",Md))||qo;Ct.version=sn.version=kn.version="3.10.4";ad=1;td()&&Ts();qe.Power0;qe.Power1;qe.Power2;qe.Power3;qe.Power4;qe.Linear;qe.Quad;qe.Cubic;qe.Quart;qe.Quint;qe.Strong;qe.Elastic;qe.Back;qe.SteppedEase;qe.Bounce;qe.Sine;qe.Expo;qe.Circ;/*!
 * CSSPlugin 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Nu,Ni,ps,su,pr,Ou,$m=function(){return typeof window!="undefined"},qi={},rr=180/Math.PI,ms=Math.PI/180,Vr=Math.atan2,ku=1e8,Ud=/([A-Z])/g,Jm=/(left|right|width|margin|padding|x)/i,Qm=/[\s,\(]\S/,Oi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Bd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},eg=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},tg=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ng=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Vd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Gd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ig=function(e,t,n){return e.style[t]=n},rg=function(e,t,n){return e.style.setProperty(t,n)},sg=function(e,t,n){return e._gsap[t]=n},ag=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},og=function(e,t,n,i,r){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},lg=function(e,t,n,i,r){var s=e._gsap;s[t]=n,s.renderTransform(r,s)},Ot="transform",ji=Ot+"Origin",Hd,Mc=function(e,t){var n=Ni.createElementNS?Ni.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ni.createElement(e);return n.style?n:Ni.createElement(e)},_i=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Ud,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,Es(t)||t,1)||""},zu="O,Moz,ms,Ms,Webkit".split(","),Es=function(e,t,n){var i=t||pr,r=i.style,s=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(zu[s]+e in r););return s<0?null:(s===3?"ms":s>=0?zu[s]:"")+e},bc=function(){$m()&&window.document&&(Nu=window,Ni=Nu.document,ps=Ni.documentElement,pr=Mc("div")||{style:{}},Mc("div"),Ot=Es(Ot),ji=Ot+"Origin",pr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Hd=!!Es("perspective"),su=1)},bl=function o(e){var t=Mc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,s;if(ps.appendChild(t),t.appendChild(this),this.style.display="block",e)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(s=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ps.removeChild(t),this.style.cssText=r,s},Uu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Wd=function(e){var t;try{t=e.getBBox()}catch{t=bl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===bl||(t=bl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Uu(e,["x","cx","x1"])||0,y:+Uu(e,["y","cy","y1"])||0,width:0,height:0}:t},Xd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Wd(e))},wa=function(e,t){if(t){var n=e.style;t in qi&&t!==ji&&(t=Ot),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Ud,"-$1").toLowerCase())):n.removeAttribute(t)}},ki=function(e,t,n,i,r,s){var a=new ln(e._pt,t,n,0,1,s?Gd:Vd);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Bu={deg:1,rad:1,turn:1},Yi=function o(e,t,n,i){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",a=pr.style,l=Jm.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,p,m,_;return i===s||!r||Bu[i]||Bu[s]?r:(s!=="px"&&!f&&(r=o(e,t,n,"px")),_=e.getCTM&&Xd(e),(d||s==="%")&&(qi[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],mt(d?r/g*h:r/100*g)):(a[l?"width":"height"]=h+(f?s:i),p=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Ni||!p.appendChild)&&(p=Ni.body),m=p._gsap,m&&d&&m.width&&l&&m.time===fn.time?mt(r/m.width*h):((d||s==="%")&&(a.position=_i(e,"position")),p===e&&(a.position="static"),p.appendChild(pr),g=pr[u],p.removeChild(pr),a.position="absolute",l&&d&&(m=yr(p),m.time=fn.time,m.width=p[u]),mt(f?g*r/h:g&&r?h/g*r:0))))},sr=function(e,t,n,i){var r;return su||bc(),t in Oi&&t!=="transform"&&(t=Oi[t],~t.indexOf(",")&&(t=t.split(",")[0])),qi[t]&&t!=="transform"?(r=Ea(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Yo(_i(e,ji))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=jo[t]&&jo[t](e,t,n)||_i(e,t)||ud(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Yi(e,t,r,n)+n:r},cg=function(e,t,n,i){if(!n||n==="none"){var r=Es(t,e,1),s=r&&_i(e,r,1);s&&s!==n?(t=r,n=s):t==="borderColor"&&(n=_i(e,"borderTopColor"))}var a=new ln(this._pt,e.style,t,0,1,kd),l=0,c=0,u,h,f,d,g,p,m,_,y,b,M,x;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=_i(e,t)||i,e.style[t]=n),u=[n,i],Ad(u),n=u[0],i=u[1],f=n.match(ls)||[],x=i.match(ls)||[],x.length){for(;h=ls.exec(i);)m=h[0],y=i.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(p=f[c++]||"")&&(d=parseFloat(p)||0,M=p.substr((d+"").length),m.charAt(1)==="="&&(m=ds(d,m)+M),_=parseFloat(m),b=m.substr((_+"").length),l=ls.lastIndex-b.length,b||(b=b||pn.units[t]||M,l===i.length&&(i+=b,a.e+=b)),M!==b&&(d=Yi(e,t,p,b)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:_-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Gd:Vd;return rd.test(i)&&(a.e=0),this._pt=a,a},Vu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ug=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Vu[n]||n,t[1]=Vu[i]||i,t.join(" ")},hg=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,s=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],qi[a]&&(l=1,a=a==="transformOrigin"?ji:Ot),wa(n,a);l&&(wa(n,Ot),s&&(s.svg&&n.removeAttribute("transform"),Ea(n,1),s.uncache=1))}},jo={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var s=e._pt=new ln(e._pt,t,n,0,0,hg);return s.u=i,s.pr=-10,s.tween=r,e._props.push(n),1}}},Ta=[1,0,0,1,0,0],qd={},jd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Gu=function(e){var t=_i(e,Ot);return jd(t)?Ta:t.substr(7).match(id).map(mt)},au=function(e,t){var n=e._gsap||yr(e),i=e.style,r=Gu(e),s,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ta:r):(r===Ta&&!e.offsetParent&&e!==ps&&!n.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent)&&(c=1,a=e.nextSibling,ps.appendChild(e)),r=Gu(e),l?i.display=l:wa(e,"display"),c&&(a?s.insertBefore(e,a):s?s.appendChild(e):ps.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Sc=function(e,t,n,i,r,s){var a=e._gsap,l=r||au(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],p=l[2],m=l[3],_=l[4],y=l[5],b=t.split(" "),M=parseFloat(b[0])||0,x=parseFloat(b[1])||0,w,C,v,T;n?l!==Ta&&(C=d*m-g*p)&&(v=M*(m/C)+x*(-p/C)+(p*y-m*_)/C,T=M*(-g/C)+x*(d/C)-(d*y-g*_)/C,M=v,x=T):(w=Wd(e),M=w.x+(~b[0].indexOf("%")?M/100*w.width:M),x=w.y+(~(b[1]||b[0]).indexOf("%")?x/100*w.height:x)),i||i!==!1&&a.smooth?(_=M-c,y=x-u,a.xOffset=h+(_*d+y*p)-_,a.yOffset=f+(_*g+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=x,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[ji]="0px 0px",s&&(ki(s,a,"xOrigin",c,M),ki(s,a,"yOrigin",u,x),ki(s,a,"xOffset",h,a.xOffset),ki(s,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",M+" "+x)},Ea=function(e,t){var n=e._gsap||new Pd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,s="px",a="deg",l=_i(e,ji)||"0",c,u,h,f,d,g,p,m,_,y,b,M,x,w,C,v,T,I,N,X,j,D,U,k,B,H,W,R,ee,te,Q,fe;return c=u=h=g=p=m=_=y=b=0,f=d=1,n.svg=!!(e.getCTM&&Xd(e)),w=au(e,n.svg),n.svg&&(k=(!n.uncache||l==="0px 0px")&&!t&&e.getAttribute("data-svg-origin"),Sc(e,k||l,!!k||n.originIsAbsolute,n.smooth!==!1,w)),M=n.xOrigin||0,x=n.yOrigin||0,w!==Ta&&(I=w[0],N=w[1],X=w[2],j=w[3],c=D=w[4],u=U=w[5],w.length===6?(f=Math.sqrt(I*I+N*N),d=Math.sqrt(j*j+X*X),g=I||N?Vr(N,I)*rr:0,_=X||j?Vr(X,j)*rr+g:0,_&&(d*=Math.abs(Math.cos(_*ms))),n.svg&&(c-=M-(M*I+x*X),u-=x-(M*N+x*j))):(fe=w[6],te=w[7],W=w[8],R=w[9],ee=w[10],Q=w[11],c=w[12],u=w[13],h=w[14],C=Vr(fe,ee),p=C*rr,C&&(v=Math.cos(-C),T=Math.sin(-C),k=D*v+W*T,B=U*v+R*T,H=fe*v+ee*T,W=D*-T+W*v,R=U*-T+R*v,ee=fe*-T+ee*v,Q=te*-T+Q*v,D=k,U=B,fe=H),C=Vr(-X,ee),m=C*rr,C&&(v=Math.cos(-C),T=Math.sin(-C),k=I*v-W*T,B=N*v-R*T,H=X*v-ee*T,Q=j*T+Q*v,I=k,N=B,X=H),C=Vr(N,I),g=C*rr,C&&(v=Math.cos(C),T=Math.sin(C),k=I*v+N*T,B=D*v+U*T,N=N*v-I*T,U=U*v-D*T,I=k,D=B),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),f=mt(Math.sqrt(I*I+N*N+X*X)),d=mt(Math.sqrt(U*U+fe*fe)),C=Vr(D,U),_=Math.abs(C)>2e-4?C*rr:0,b=Q?1/(Q<0?-Q:Q):0),n.svg&&(k=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!jd(_i(e,Ot)),k&&e.setAttribute("transform",k))),Math.abs(_)>90&&Math.abs(_)<270&&(r?(f*=-1,_+=g<=0?180:-180,g+=g<=0?180:-180):(d*=-1,_+=_<=0?180:-180)),t=t||n.uncache,n.x=c-((n.xPercent=c&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=h+s,n.scaleX=mt(f),n.scaleY=mt(d),n.rotation=mt(g)+a,n.rotationX=mt(p)+a,n.rotationY=mt(m)+a,n.skewX=_+a,n.skewY=y+a,n.transformPerspective=b+s,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[ji]=Yo(l)),n.xOffset=n.yOffset=0,n.force3D=pn.force3D,n.renderTransform=n.svg?dg:Hd?Yd:fg,n.uncache=0,n},Yo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Sl=function(e,t,n){var i=Vt(t);return mt(parseFloat(t)+parseFloat(Yi(e,"x",n+"px",i)))+i},fg=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Yd(e,t)},Qi="0deg",qs="0px",er=") ",Yd=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,p=n.scaleY,m=n.transformPerspective,_=n.force3D,y=n.target,b=n.zOrigin,M="",x=_==="auto"&&e&&e!==1||_===!0;if(b&&(h!==Qi||u!==Qi)){var w=parseFloat(u)*ms,C=Math.sin(w),v=Math.cos(w),T;w=parseFloat(h)*ms,T=Math.cos(w),s=Sl(y,s,C*T*-b),a=Sl(y,a,-Math.sin(w)*-b),l=Sl(y,l,v*T*-b+b)}m!==qs&&(M+="perspective("+m+er),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(x||s!==qs||a!==qs||l!==qs)&&(M+=l!==qs||x?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+er),c!==Qi&&(M+="rotate("+c+er),u!==Qi&&(M+="rotateY("+u+er),h!==Qi&&(M+="rotateX("+h+er),(f!==Qi||d!==Qi)&&(M+="skew("+f+", "+d+er),(g!==1||p!==1)&&(M+="scale("+g+", "+p+er),y.style[Ot]=M||"translate(0, 0)"},dg=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,p=n.yOrigin,m=n.xOffset,_=n.yOffset,y=n.forceCSS,b=parseFloat(s),M=parseFloat(a),x,w,C,v,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ms,c*=ms,x=Math.cos(l)*h,w=Math.sin(l)*h,C=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(u*=ms,T=Math.tan(c-u),T=Math.sqrt(1+T*T),C*=T,v*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),x*=T,w*=T)),x=mt(x),w=mt(w),C=mt(C),v=mt(v)):(x=h,v=f,w=C=0),(b&&!~(s+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(b=Yi(d,"x",s,"px"),M=Yi(d,"y",a,"px")),(g||p||m||_)&&(b=mt(b+g-(g*x+p*C)+m),M=mt(M+p-(g*w+p*v)+_)),(i||r)&&(T=d.getBBox(),b=mt(b+i/100*T.width),M=mt(M+r/100*T.height)),T="matrix("+x+","+w+","+C+","+v+","+b+","+M+")",d.setAttribute("transform",T),y&&(d.style[Ot]=T)},pg=function(e,t,n,i,r){var s=360,a=Rt(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?rr:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=r.split("_")[1],h==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),h==="cw"&&c<0?c=(c+s*ku)%s-~~(c/s)*s:h==="ccw"&&c>0&&(c=(c-s*ku)%s-~~(c/s)*s)),e._pt=f=new ln(e._pt,t,n,i,c,eg),f.e=u,f.u="deg",e._props.push(n),f},Hu=function(e,t){for(var n in t)e[n]=t[n];return e},mg=function(e,t,n){var i=Hu({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[Ot]=t,a=Ea(n,1),wa(n,Ot),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ot],s[Ot]=t,a=Ea(n,1),s[Ot]=c);for(l in qi)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(d=Vt(c),g=Vt(u),h=d!==g?Yi(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new ln(e._pt,a,l,h,f-h,Bd),e._pt.u=g||0,e._props.push(l));Hu(a,i)};on("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",r="Left",s=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?o+a:"border"+a+o});jo[e>1?"border"+o:o]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=s.map(function(g){return sr(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},s.forEach(function(g,p){return d[g]=f[p]=f[p]||f[(p-1)/2|0]}),a.init(l,d,h)}});var Kd={name:"css",register:bc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var s=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,p,m,_,y,b,M,x,w,C;su||bc();for(p in t)if(p!=="autoRound"&&(u=t[p],!(hn[p]&&Dd(p,t,n,i,e,r)))){if(d=typeof u,g=jo[p],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ma(u)),g)g(this,e,p,u,n)&&(C=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),u+="",Gi.lastIndex=0,Gi.test(c)||(m=Vt(c),_=Vt(u)),_?m!==_&&(c=Yi(e,p,c,_)+_):m&&(u+=m),this.add(a,"setProperty",c,u,i,r,0,0,p),s.push(p);else if(d!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(n,i,e,r):l[p],Rt(c)&&~c.indexOf("random(")&&(c=Ma(c)),Vt(c+"")||(c+=pn.units[p]||Vt(sr(e,p))||""),(c+"").charAt(1)==="="&&(c=sr(e,p))):c=sr(e,p),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),p in Oi&&(p==="autoAlpha"&&(f===1&&sr(e,"visibility")==="hidden"&&h&&(f=0),ki(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),p!=="scale"&&p!=="transform"&&(p=Oi[p],~p.indexOf(",")&&(p=p.split(",")[0]))),b=p in qi,b){if(M||(x=e._gsap,x.renderTransform&&!t.parseTransform||Ea(e,t.parseTransform),w=t.smoothOrigin!==!1&&x.smooth,M=this._pt=new ln(this._pt,a,Ot,0,1,x.renderTransform,x,0,-1),M.dep=1),p==="scale")this._pt=new ln(this._pt,x,"scaleY",x.scaleY,(y?ds(x.scaleY,y+h):h)-x.scaleY||0),s.push("scaleY",p),p+="X";else if(p==="transformOrigin"){u=ug(u),x.svg?Sc(e,u,0,w,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==x.zOrigin&&ki(this,x,"zOrigin",x.zOrigin,_),ki(this,a,p,Yo(c),Yo(u)));continue}else if(p==="svgOrigin"){Sc(e,u,1,w,0,this);continue}else if(p in qd){pg(this,x,p,f,y?ds(f,y+u):u);continue}else if(p==="smoothOrigin"){ki(this,x,"smooth",x.smooth,u);continue}else if(p==="force3D"){x[p]=u;continue}else if(p==="transform"){mg(this,u,e);continue}}else p in a||(p=Es(p)||p);if(b||(h||h===0)&&(f||f===0)&&!Qm.test(u)&&p in a)m=(c+"").substr((f+"").length),h||(h=0),_=Vt(u)||(p in pn.units?pn.units[p]:m),m!==_&&(f=Yi(e,p,c,_)),this._pt=new ln(this._pt,b?x:a,p,f,(y?ds(f,y+h):h)-f,!b&&(_==="px"||p==="zIndex")&&t.autoRound!==!1?ng:Bd),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=tg);else if(p in a)cg.call(this,e,p,c,y?y+u:u);else if(p in e)this.add(e,p,c||e[p],y?y+u:u,i,r);else{Kc(p,u);continue}s.push(p)}}C&&zd(this)},get:sr,aliases:Oi,getSetter:function(e,t,n){var i=Oi[t];return i&&i.indexOf(",")<0&&(t=i),t in qi&&t!==ji&&(e._gsap.x||sr(e,"x"))?n&&Ou===n?t==="scale"?ag:sg:(Ou=n||{})&&(t==="scale"?og:lg):e.style&&!jc(e.style[t])?ig:~t.indexOf("-")?rg:iu(e,t)},core:{_removeProperty:wa,_getMatrix:au}};kn.utils.checkPrefix=Es;(function(o,e,t,n){var i=on(o+","+e+","+t,function(r){qi[r]=1});on(e,function(r){pn.units[r]="deg",qd[r]=1}),Oi[i[13]]=o+","+e,on(n,function(r){var s=r.split(":");Oi[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");on("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){pn.units[o]="px"});kn.registerPlugin(Kd);var zn=kn.registerPlugin(Kd)||kn;zn.core.Tween;function Wu(o,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}function gg(o,e,t){return e&&Wu(o.prototype,e),t&&Wu(o,t),o}/*!
 * Observer 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var $t,wc,dn,mr,gr,gs,Zd,ar,fa,$d,pi,In,Jd=function(){return $t||typeof window!="undefined"&&($t=window.gsap)&&$t.registerPlugin&&$t},Qd=1,us=[],et=[],ei=[],da=Date.now,Tc=function(e,t){return t},_g=function(){var e=fa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,et),i.push.apply(i,ei),et=n,ei=i,Tc=function(s,a){return t[s](a)}},Hi=function(e,t){return~ei.indexOf(e)&&ei[ei.indexOf(e)+1][t]},Ro=function(e){return!!~$d.indexOf(e)},tn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Wt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ja="scrollLeft",Ya="scrollTop",Xu=function(){return pi&&pi.isPressed||et.cache++},Ko=function(e,t){var n=function i(r){if(r||r===0){Qd&&(dn.history.scrollRestoration="manual");var s=pi&&pi.isPressed;r=i.v=Math.round(r)||(pi&&pi.iOS?1:0),e(r),i.cacheID=et.cache,s&&Tc("ss",r)}else(t||et.cache!==i.cacheID||Tc("ref"))&&(i.cacheID=et.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Zt={s:ja,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ko(function(o){return arguments.length?dn.scrollTo(o,Tt.sc()):dn.pageXOffset||mr[ja]||gr[ja]||gs[ja]||0})},Tt={s:Ya,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Zt,sc:Ko(function(o){return arguments.length?dn.scrollTo(Zt.sc(),o):dn.pageYOffset||mr[Ya]||gr[Ya]||gs[Ya]||0})},nn=function(e){return $t.utils.toArray(e)[0]||(typeof e=="string"&&$t.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ki=function(e,t){var n=t.s,i=t.sc,r=et.indexOf(e),s=i===Tt.sc?1:2;return!~r&&(r=et.push(e)-1),et[r+s]||(et[r+s]=Ko(Hi(e,n),!0)||(Ro(e)?i:Ko(function(a){return arguments.length?e[n]=a:e[n]})))},Ec=function(e,t,n){var i=e,r=e,s=da(),a=s,l=t||50,c=Math.max(500,l*3),u=function(g,p){var m=da();p||m-s>l?(r=i,i=g,a=s,s=m):n?i+=g:i=r+(g-r)/(m-a)*(s-a)},h=function(){r=i=n?0:i,a=s=0},f=function(g){var p=a,m=r,_=da();return(g||g===0)&&g!==i&&u(g),s===a||_-a>c?0:(i+(n?m:-m))/((n?_:s)-p)*1e3};return{update:u,reset:h,getVelocity:f}},js=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},qu=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},ep=function(){fa=$t.core.globals().ScrollTrigger,fa&&fa.core&&_g()},tp=function(e){return $t=e||Jd(),$t&&typeof document!="undefined"&&document.body&&(dn=window,mr=document,gr=mr.documentElement,gs=mr.body,$d=[dn,mr,gr,gs],$t.utils.clamp,ar="onpointerenter"in gs?"pointer":"mouse",Zd=yt.isTouch=dn.matchMedia&&dn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in dn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,In=yt.eventTypes=("ontouchstart"in gr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in gr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Qd=0},500),ep(),wc=1),wc};Zt.op=Tt;et.cache=0;var yt=function(){function o(t){this.init(t)}var e=o.prototype;return e.init=function(n){wc||tp($t)||console.warn("Please gsap.registerPlugin(Observer)"),fa||ep();var i=n.tolerance,r=n.dragMinimum,s=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,p=n.event,m=n.onDragStart,_=n.onDragEnd,y=n.onDrag,b=n.onPress,M=n.onRelease,x=n.onRight,w=n.onLeft,C=n.onUp,v=n.onDown,T=n.onChangeX,I=n.onChangeY,N=n.onChange,X=n.onToggleX,j=n.onToggleY,D=n.onHover,U=n.onHoverEnd,k=n.onMove,B=n.ignoreCheck,H=n.isNormalizer,W=n.onGestureStart,R=n.onGestureEnd,ee=n.onWheel,te=n.onEnable,Q=n.onDisable,fe=n.onClick,ve=n.scrollSpeed,V=n.capture,Fe=n.allowClicks,Se=n.lockAxis,Re=n.onLockAxis;this.target=a=nn(a)||gr,this.vars=n,d&&(d=$t.utils.toArray(d)),i=i||0,r=r||0,g=g||1,ve=ve||1,s=s||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(dn.getComputedStyle(gs).lineHeight)||22);var ce,Ne,pe,ye,je,tt,Ye,q=this,nt=0,Ce=0,dt=Ki(a,Zt),pt=Ki(a,Tt),L=dt(),S=pt(),Y=~s.indexOf("touch")&&!~s.indexOf("pointer")&&In[0]==="pointerdown",ne=Ro(a),$=a.ownerDocument||mr,le=[0,0,0],xe=[0,0,0],A=0,Z=function(){return A=da()},re=function(J,ge){return(q.event=J)&&d&&~d.indexOf(J.target)||ge&&Y&&J.pointerType!=="touch"||B&&B(J,ge)},oe=function(){q._vx.reset(),q._vy.reset(),Ne.pause(),h&&h(q)},P=function(){var J=q.deltaX=qu(le),ge=q.deltaY=qu(xe),Ae=Math.abs(J)>=i,Pe=Math.abs(ge)>=i;N&&(Ae||Pe)&&N(q,J,ge,le,xe),Ae&&(x&&q.deltaX>0&&x(q),w&&q.deltaX<0&&w(q),T&&T(q),X&&q.deltaX<0!=nt<0&&X(q),nt=q.deltaX,le[0]=le[1]=le[2]=0),Pe&&(v&&q.deltaY>0&&v(q),C&&q.deltaY<0&&C(q),I&&I(q),j&&q.deltaY<0!=Ce<0&&j(q),Ce=q.deltaY,xe[0]=xe[1]=xe[2]=0),(ye||pe)&&(k&&k(q),Re&&tt&&Re(q),pe&&(y(q),pe=!1),ye=tt=!1),je&&(ee(q),je=!1),ce=0},se=function(J,ge,Ae){le[Ae]+=J,xe[Ae]+=ge,q._vx.update(J),q._vy.update(ge),c?ce||(ce=requestAnimationFrame(P)):P()},ae=function(J,ge){Ye!=="y"&&(le[2]+=J,q._vx.update(J,!0)),Ye!=="x"&&(xe[2]+=ge,q._vy.update(ge,!0)),Se&&!Ye&&(q.axis=Ye=Math.abs(J)>Math.abs(ge)?"x":"y",tt=!0),c?ce||(ce=requestAnimationFrame(P)):P()},he=function(J){if(!re(J,1)){J=js(J,u);var ge=J.clientX,Ae=J.clientY,Pe=ge-q.x,St=Ae-q.y,Oe=q.isDragging;q.x=ge,q.y=Ae,(Oe||Math.abs(q.startX-ge)>=r||Math.abs(q.startY-Ae)>=r)&&(y&&(pe=!0),Oe||(q.isDragging=!0),ae(Pe,St),Oe||m&&m(q))}},ue=q.onPress=function(Be){re(Be,1)||(q.axis=Ye=null,Ne.pause(),q.isPressed=!0,Be=js(Be),nt=Ce=0,q.startX=q.x=Be.clientX,q.startY=q.y=Be.clientY,q._vx.reset(),q._vy.reset(),tn(H?a:$,In[1],he,u,!0),q.deltaX=q.deltaY=0,b&&b(q))},me=function(J){if(!re(J,1)){Wt(H?a:$,In[1],he,!0);var ge=q.isDragging&&(Math.abs(q.x-q.startX)>3||Math.abs(q.y-q.startY)>3),Ae=js(J);ge||(q._vx.reset(),q._vy.reset(),u&&Fe&&$t.delayedCall(.08,function(){if(da()-A>300&&!J.defaultPrevented){if(J.target.click)J.target.click();else if($.createEvent){var Pe=$.createEvent("MouseEvents");Pe.initMouseEvent("click",!0,!0,dn,1,Ae.screenX,Ae.screenY,Ae.clientX,Ae.clientY,!1,!1,!1,!1,0,null),J.target.dispatchEvent(Pe)}}})),q.isDragging=q.isGesturing=q.isPressed=!1,h&&!H&&Ne.restart(!0),_&&ge&&_(q),M&&M(q,ge)}},ie=function(J){return J.touches&&J.touches.length>1&&(q.isGesturing=!0)&&W(J,q.isDragging)},Te=function(){return(q.isGesturing=!1)||R(q)},Ue=function(J){if(!re(J)){var ge=dt(),Ae=pt();se((ge-L)*ve,(Ae-S)*ve,1),L=ge,S=Ae,h&&Ne.restart(!0)}},Ve=function(J){if(!re(J)){J=js(J,u),ee&&(je=!0);var ge=(J.deltaMode===1?l:J.deltaMode===2?dn.innerHeight:1)*g;se(J.deltaX*ge,J.deltaY*ge,0),h&&!H&&Ne.restart(!0)}},ct=function(J){if(!re(J)){var ge=J.clientX,Ae=J.clientY,Pe=ge-q.x,St=Ae-q.y;q.x=ge,q.y=Ae,ye=!0,(Pe||St)&&ae(Pe,St)}},gt=function(J){q.event=J,D(q)},Si=function(J){q.event=J,U(q)},Ji=function(J){return re(J)||js(J,u)&&fe(q)};Ne=q._dc=$t.delayedCall(f||.25,oe).pause(),q.deltaX=q.deltaY=0,q._vx=Ec(0,50,!0),q._vy=Ec(0,50,!0),q.scrollX=dt,q.scrollY=pt,q.isDragging=q.isGesturing=q.isPressed=!1,q.enable=function(Be){return q.isEnabled||(tn(ne?$:a,"scroll",Xu),s.indexOf("scroll")>=0&&tn(ne?$:a,"scroll",Ue,u,V),s.indexOf("wheel")>=0&&tn(a,"wheel",Ve,u,V),(s.indexOf("touch")>=0&&Zd||s.indexOf("pointer")>=0)&&(tn(a,In[0],ue,u,V),tn($,In[2],me),tn($,In[3],me),Fe&&tn(a,"click",Z,!1,!0),fe&&tn(a,"click",Ji),W&&tn($,"gesturestart",ie),R&&tn($,"gestureend",Te),D&&tn(a,ar+"enter",gt),U&&tn(a,ar+"leave",Si),k&&tn(a,ar+"move",ct)),q.isEnabled=!0,Be&&Be.type&&ue(Be),te&&te(q)),q},q.disable=function(){q.isEnabled&&(us.filter(function(Be){return Be!==q&&Ro(Be.target)}).length||Wt(ne?$:a,"scroll",Xu),q.isPressed&&(q._vx.reset(),q._vy.reset(),Wt(H?a:$,In[1],he,!0)),Wt(ne?$:a,"scroll",Ue,V),Wt(a,"wheel",Ve,V),Wt(a,In[0],ue,V),Wt($,In[2],me),Wt($,In[3],me),Wt(a,"click",Z,!0),Wt(a,"click",Ji),Wt($,"gesturestart",ie),Wt($,"gestureend",Te),Wt(a,ar+"enter",gt),Wt(a,ar+"leave",Si),Wt(a,ar+"move",ct),q.isEnabled=q.isPressed=q.isDragging=!1,Q&&Q(q))},q.kill=function(){q.disable();var Be=us.indexOf(q);Be>=0&&us.splice(Be,1),pi===q&&(pi=0)},us.push(q),H&&Ro(a)&&(pi=q),q.enable(p)},gg(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o}();yt.version="3.10.4";yt.create=function(o){return new yt(o)};yt.register=tp;yt.getAll=function(){return us.slice()};yt.getById=function(o){return us.filter(function(e){return e.vars.id===o})[0]};Jd()&&$t.registerPlugin(yt);/*!
 * ScrollTrigger 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var De,hr,Xe,ut,mi,ht,np,Zo,$o,hs,Po,Ka,It,sl,Ac,jt,ju,Yu,as,ip,wl,rp,vn,sp,ap,op,or,Tl,ra=1,Yt=Date.now,El=Yt(),An=0,Za=0,Ku=function(){return sl=1},Zu=function(){return sl=0},Ii=function(e){return e},Aa=function(e){return Math.round(e*1e5)/1e5||0},lp=function(){return typeof window!="undefined"},cp=function(){return De||lp()&&(De=window.gsap)&&De.registerPlugin&&De},Lr=function(e){return!!~np.indexOf(e)},up=function(e){return Hi(e,"getBoundingClientRect")||(Lr(e)?function(){return zo.width=Xe.innerWidth,zo.height=Xe.innerHeight,zo}:function(){return di(e)})},xg=function(e,t,n){var i=n.d,r=n.d2,s=n.a;return(s=Hi(e,"getBoundingClientRect"))?function(){return s()[i]}:function(){return(t?Xe["inner"+r]:e["client"+r])||0}},vg=function(e,t){return!t||~ei.indexOf(e)?up(e):function(){return zo}},zi=function(e,t){var n=t.s,i=t.d2,r=t.d,s=t.a;return(n="scroll"+i)&&(s=Hi(e,n))?s()-up(e)()[r]:Lr(e)?(mi[n]||ht[n])-(Xe["inner"+i]||mi["client"+i]||ht["client"+i]):e[n]-e["offset"+i]},$a=function(e,t){for(var n=0;n<as.length;n+=3)(!t||~t.indexOf(as[n+1]))&&e(as[n],as[n+1],as[n+2])},jn=function(e){return typeof e=="string"},Fn=function(e){return typeof e=="function"},sa=function(e){return typeof e=="number"},Do=function(e){return typeof e=="object"},Ja=function(e){return Fn(e)&&e()},$u=function(e,t){return function(){var n=Ja(e),i=Ja(t);return function(){Ja(n),Ja(i)}}},Ys=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Al=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Gr=Math.abs,hp="left",fp="top",ou="right",lu="bottom",Sr="width",wr="height",pa="Right",ma="Left",ga="Top",_a="Bottom",vt="padding",Mn="margin",As="Width",cu="Height",qt="px",Zn=function(e){return Xe.getComputedStyle(e)},yg=function(e){var t=Zn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Ju=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},di=function(e,t){var n=t&&Zn(e)[Ac]!=="matrix(1, 0, 0, 1, 0, 0)"&&De.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Cc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},dp=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},Mg=function(e){return function(t){return De.utils.snap(dp(e),t)}},uu=function(e){var t=De.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,s){s===void 0&&(s=.001);var a;if(!r)return t(i);if(r>0){for(i-=s,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=s;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,s){s===void 0&&(s=.001);var a=t(i);return!r||Math.abs(a-i)<s||a-i<0==r<0?a:t(r<0?i-e:i+e)}},bg=function(e){return function(t,n){return uu(dp(e))(t,n.direction)}},Qa=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Ft=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},At=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},eo=function(e,t,n){return n&&n.wheelHandler&&e(t,"wheel",n)},Qu={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},to={toggleActions:"play",anticipatePin:0},Jo={top:0,left:0,center:.5,bottom:1,right:1},Io=function(e,t){if(jn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Jo?Jo[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},no=function(e,t,n,i,r,s,a,l){var c=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,d=r.fontWeight,g=ut.createElement("div"),p=Lr(n)||Hi(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,_=p?ht:n,y=e.indexOf("start")!==-1,b=y?c:u,M="border-color:"+b+";font-size:"+h+";color:"+b+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((m||l)&&p?"fixed;":"absolute;"),(m||l||!p)&&(M+=(i===Tt?ou:lu)+":"+(s+parseFloat(f))+"px;"),a&&(M+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=M,g.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+i.op.d2],Fo(g,0,i,y),g},Fo=function(e,t,n,i){var r={display:"block"},s=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+s+As]=1,r["border"+a+As]=0,r[n.p]=t+"px",De.set(e,r)},Ke=[],Lc={},Rc,eh=function(){return Yt()-An>34&&Ra()},Hr=function(){(!vn||!vn.isPressed||vn.startX>ht.clientWidth)&&(et.cache++,Rc||(Rc=requestAnimationFrame(Ra)),An||Rr("scrollStart"),An=Yt())},th=function(){op=Xe.innerWidth,ap=Xe.innerHeight},aa=function(){et.cache++,!It&&!rp&&!ut.fullscreenElement&&!ut.webkitFullscreenElement&&(!sp||op!==Xe.innerWidth||Math.abs(Xe.innerHeight-ap)>Xe.innerHeight*.25)&&Zo.restart(!0)},Ca={},Sg=[],ft=[],_s,nh,ih=function(e){var t=De.ticker.frame,n=[],i=0,r;if(nh!==t||ra){for(Qo();i<ft.length;i+=4)r=Xe.matchMedia(ft[i]).matches,r!==ft[i+3]&&(ft[i+3]=r,r?n.push(i):Qo(1,ft[i])||Fn(ft[i+2])&&ft[i+2]());for(mp(),i=0;i<n.length;i++)r=n[i],_s=ft[r],ft[r+2]=ft[r+1](e);_s=0,hr&&xs(0,1),nh=t,Rr("matchMedia")}},pp=function o(){return At(Ze,"scrollEnd",o)||xs(!0)},Rr=function(e){return Ca[e]&&Ca[e].map(function(t){return t()})||Sg},yn=[],mp=function(e){for(var t=0;t<yn.length;t+=5)(!e||yn[t+4]===e)&&(yn[t].style.cssText=yn[t+1],yn[t].getBBox&&yn[t].setAttribute("transform",yn[t+2]||""),yn[t+3].uncache=1)},Qo=function(e,t){var n;for(jt=0;jt<Ke.length;jt++)n=Ke[jt],(!t||n.media===t)&&(e?n.kill(1):n.revert());t&&mp(t),t||Rr("revert")},gp=function(){return et.cache++&&et.forEach(function(e){return typeof e=="function"&&(e.rec=0)})},La,No=0,xs=function(e,t){if(An&&!e){Ft(Ze,"scrollEnd",pp);return}La=!0;var n=Rr("refreshInit");ip&&Ze.sort(),t||Qo(),Ke.slice(0).forEach(function(i){return i.refresh()}),Ke.forEach(function(i){return i.vars.end==="max"&&i.setPositions(i.start,zi(i.scroller,i._dir))}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),gp(),Zo.pause(),No++,La=!1,Rr("refresh")},rh=0,Oo=1,fr,Ra=function(){if(!La){Ze.isUpdating=!0,fr&&fr.update(0);var e=Ke.length,t=Yt(),n=t-El>=50,i=e&&Ke[0].scroll();if(Oo=rh>i?-1:1,rh=i,n&&(An&&!sl&&t-An>200&&(An=0,Rr("scrollEnd")),Po=El,El=t),Oo<0){for(jt=e;jt-- >0;)Ke[jt]&&Ke[jt].update(0,n);Oo=1}else for(jt=0;jt<e;jt++)Ke[jt]&&Ke[jt].update(0,n);Ze.isUpdating=!1}Rc=0},Pc=[hp,fp,lu,ou,Mn+_a,Mn+pa,Mn+ga,Mn+ma,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ko=Pc.concat([Sr,wr,"boxSizing","max"+As,"max"+cu,"position",Mn,vt,vt+ga,vt+pa,vt+_a,vt+ma]),wg=function(e,t,n){Pa(n);var i=e._gsap;if(i.spacerIsNative)Pa(i.spacerState);else if(e.parentNode===t){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}},Cl=function(e,t,n,i){if(e.parentNode!==t){for(var r=Pc.length,s=t.style,a=e.style,l;r--;)l=Pc[r],s[l]=n[l];s.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(s.display="inline-block"),a[lu]=a[ou]=s.flexBasis="auto",s.overflow="visible",s.boxSizing="border-box",s[Sr]=Cc(e,Zt)+qt,s[wr]=Cc(e,Tt)+qt,s[vt]=a[Mn]=a[fp]=a[hp]="0",Pa(i),a[Sr]=a["max"+As]=n[Sr],a[wr]=a["max"+cu]=n[wr],a[vt]=n[vt],e.parentNode.insertBefore(t,e),t.appendChild(e)}},Tg=/([A-Z])/g,Pa=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,s;for((e.t._gsap||De.core.getCache(e.t)).uncache=1;i<n;i+=2)s=e[i+1],r=e[i],s?t[r]=s:t[r]&&t.removeProperty(r.replace(Tg,"-$1").toLowerCase())}},io=function(e){for(var t=ko.length,n=e.style,i=[],r=0;r<t;r++)i.push(ko[r],n[ko[r]]);return i.t=e,i},Eg=function(e,t,n){for(var i=[],r=e.length,s=n?8:0,a;s<r;s+=2)a=e[s],i.push(a,a in t?t[a]:e[s+1]);return i.t=e.t,i},zo={left:0,top:0},sh=function(e,t,n,i,r,s,a,l,c,u,h,f,d){Fn(e)&&(e=e(l)),jn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Io("0"+e.substr(3),n):0));var g=d?d.time():0,p,m,_;if(d&&d.seek(0),sa(e))a&&Fo(a,n,i,!0);else{Fn(t)&&(t=t(l));var y=e.split(" "),b,M,x,w;_=nn(t)||ht,b=di(_)||{},(!b||!b.left&&!b.top)&&Zn(_).display==="none"&&(w=_.style.display,_.style.display="block",b=di(_),w?_.style.display=w:_.style.removeProperty("display")),M=Io(y[0],b[i.d]),x=Io(y[1]||"0",n),e=b[i.p]-c[i.p]-u+M+r-x,a&&Fo(a,x,i,n-x<20||a._isStart&&x>20),n-=n-x}if(s){var C=e+n,v=s._isStart;p="scroll"+i.d2,Fo(s,C,i,v&&C>20||!v&&(h?Math.max(ht[p],mi[p]):s.parentNode[p])<=C+1),h&&(c=di(a),h&&(s.style[i.op.p]=c[i.op.p]-i.op.m-s._offset+qt))}return d&&_&&(p=di(_),d.seek(f),m=di(_),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},Ag=/(webkit|moz|length|cssText|inset)/i,ah=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,s,a;if(t===ht){e._stOrig=r.cssText,a=Zn(e);for(s in a)!+s&&!Ag.test(s)&&a[s]&&typeof r[s]=="string"&&s!=="0"&&(r[s]=a[s]);r.top=n,r.left=i}else r.cssText=e._stOrig;De.core.getCache(e).uncache=1,t.appendChild(e)}},oh=function(e,t){var n=Ki(e,t),i="_scroll"+t.p2,r,s,a=function l(c,u,h,f,d){var g=l.tween,p=u.onComplete,m={};return h=h||n(),d=f&&d||0,f=f||c-h,g&&g.kill(),r=Math.round(h),u[i]=c,u.modifiers=m,m[i]=function(_){return _=Aa(n()),_!==r&&_!==s&&Math.abs(_-r)>2&&Math.abs(_-s)>2?(g.kill(),l.tween=0):_=h+f*g.ratio+d*g.ratio*g.ratio,s=r,r=Aa(_)},u.onComplete=function(){l.tween=0,p&&p.call(g)},g=l.tween=De.to(e,u),g};return e[i]=n,n.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},Ft(e,"wheel",n.wheelHandler),a},Ze=function(){function o(t,n){hr||o.register(De)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}var e=o.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Za){this.update=this.refresh=this.kill=Ii;return}n=Ju(jn(n)||sa(n)||n.nodeType?{trigger:n}:n,to);var r=n,s=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,d=r.pin,g=r.pinSpacing,p=r.invalidateOnRefresh,m=r.anticipatePin,_=r.onScrubComplete,y=r.onSnapComplete,b=r.once,M=r.snap,x=r.pinReparent,w=r.pinSpacer,C=r.containerAnimation,v=r.fastScrollEnd,T=r.preventOverlaps,I=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Zt:Tt,N=!h&&h!==0,X=nn(n.scroller||Xe),j=De.core.getCache(X),D=Lr(X),U=("pinType"in n?n.pinType:Hi(X,"pinType")||D&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],B=N&&n.toggleActions.split(" "),H="markers"in n?n.markers:to.markers,W=D?0:parseFloat(Zn(X)["border"+I.p2+As])||0,R=this,ee=n.onRefreshInit&&function(){return n.onRefreshInit(R)},te=xg(X,D,I),Q=vg(X,D),fe=0,ve=0,V=Ki(X,I),Fe,Se,Re,ce,Ne,pe,ye,je,tt,Ye,q,nt,Ce,dt,pt,L,S,Y,ne,$,le,xe,A,Z,re,oe,P,se,ae,he,ue,me,ie,Te,Ue,Ve,ct,gt;if(R.media=_s,R._dir=I,m*=45,R.scroller=X,R.scroll=C?C.time.bind(C):V,ce=V(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(ip=1,n.refreshPriority===-9999&&(fr=R)),j.tweenScroll=j.tweenScroll||{top:oh(X,Tt),left:oh(X,Zt)},R.tweenTo=Fe=j.tweenScroll[I.p],R.scrubDuration=function(J){ue=sa(J)&&J,ue?he?he.duration(J):he=De.to(i,{ease:"expo",totalProgress:"+=0.001",duration:ue,paused:!0,onComplete:function(){return _&&_(R)}}):(he&&he.progress(1).kill(),he=0)},i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(h),se=0,l||(l=i.vars.id)),Ke.push(R),M&&((!Do(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in ht.style&&De.set(D?[ht,mi]:X,{scrollBehavior:"auto"}),Re=Fn(M.snapTo)?M.snapTo:M.snapTo==="labels"?Mg(i):M.snapTo==="labelsDirectional"?bg(i):M.directional!==!1?function(J,ge){return uu(M.snapTo)(J,Yt()-ve<500?0:ge.direction)}:De.utils.snap(M.snapTo),me=M.duration||{min:.1,max:2},me=Do(me)?hs(me.min,me.max):hs(me,me),ie=De.delayedCall(M.delay||ue/2||.1,function(){var J=V(),ge=Yt()-ve<500,Ae=Fe.tween;if((ge||Math.abs(R.getVelocity())<10)&&!Ae&&!sl&&fe!==J){var Pe=(J-pe)/Ce,St=i&&!N?i.totalProgress():Pe,Oe=ge?0:(St-ae)/(Yt()-Po)*1e3||0,E=De.utils.clamp(-Pe,1-Pe,Gr(Oe/2)*Oe/.185),O=Pe+(M.inertia===!1?0:E),G=hs(0,1,Re(O,R)),z=Math.round(pe+G*Ce),K=M,we=K.onStart,_e=K.onInterrupt,Me=K.onComplete;if(J<=ye&&J>=pe&&z!==J){if(Ae&&!Ae._initted&&Ae.data<=Gr(z-J))return;M.inertia===!1&&(E=G-Pe),Fe(z,{duration:me(Gr(Math.max(Gr(O-St),Gr(G-St))*.185/Oe/.05||0)),ease:M.ease||"power3",data:Gr(z-J),onInterrupt:function(){return ie.restart(!0)&&_e&&_e(R)},onComplete:function(){R.update(),fe=V(),se=ae=i&&!N?i.totalProgress():R.progress,y&&y(R),Me&&Me(R)}},J,E*Ce,z-J-E*Ce),we&&we(R,Fe.tween)}}else R.isActive&&fe!==J&&ie.restart(!0)}).pause()),l&&(Lc[l]=R),f=R.trigger=nn(f||d),gt=f&&f._gsap&&f._gsap.stRevert,gt&&(gt=gt(R)),d=d===!0?f:nn(d),jn(a)&&(a={targets:f,className:a}),d&&(g===!1||g===Mn||(g=!g&&Zn(d.parentNode).display==="flex"?!1:vt),R.pin=d,n.force3D!==!1&&De.set(d,{force3D:!0}),Se=De.core.getCache(d),Se.spacer?dt=Se.pinState:(w&&(w=nn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Se.spacerIsNative=!!w,w&&(Se.spacerState=io(w))),Se.spacer=S=w||ut.createElement("div"),S.classList.add("pin-spacer"),l&&S.classList.add("pin-spacer-"+l),Se.pinState=dt=io(d)),R.spacer=S=Se.spacer,P=Zn(d),A=P[g+I.os2],ne=De.getProperty(d),$=De.quickSetter(d,I.a,qt),Cl(d,S,P),L=io(d)),H){nt=Do(H)?Ju(H,Qu):Qu,Ye=no("scroller-start",l,X,I,nt,0),q=no("scroller-end",l,X,I,nt,0,Ye),Y=Ye["offset"+I.op.d2];var Si=nn(Hi(X,"content")||X);je=this.markerStart=no("start",l,Si,I,nt,Y,0,C),tt=this.markerEnd=no("end",l,Si,I,nt,Y,0,C),C&&(ct=De.quickSetter([je,tt],I.a,qt)),!U&&!(ei.length&&Hi(X,"fixedMarkers")===!0)&&(yg(D?ht:X),De.set([Ye,q],{force3D:!0}),re=De.quickSetter(Ye,I.a,qt),oe=De.quickSetter(q,I.a,qt))}if(C){var Ji=C.vars.onUpdate,Be=C.vars.onUpdateParams;C.eventCallback("onUpdate",function(){R.update(0,0,1),Ji&&Ji.apply(Be||[])})}R.previous=function(){return Ke[Ke.indexOf(R)-1]},R.next=function(){return Ke[Ke.indexOf(R)+1]},R.revert=function(J){var ge=J!==!1||!R.enabled,Ae=It;ge!==R.isReverted&&(ge&&(R.scroll.rec||!It||!La||(R.scroll.rec=V()),Ue=Math.max(V(),R.scroll.rec||0),Te=R.progress,Ve=i&&i.progress()),je&&[je,tt,Ye,q].forEach(function(Pe){return Pe.style.display=ge?"none":"block"}),ge&&(It=1),R.update(ge),It=Ae,d&&(ge?wg(d,S,dt):(!x||!R.isActive)&&Cl(d,S,Zn(d),Z)),R.isReverted=ge)},R.refresh=function(J,ge){if(!((It||!R.enabled)&&!ge)){if(d&&J&&An){Ft(o,"scrollEnd",pp);return}!La&&ee&&ee(R),It=1,ve=Yt(),Fe.tween&&(Fe.tween.kill(),Fe.tween=0),he&&he.pause(),p&&i&&i.time(-.01,!0).invalidate(),R.isReverted||R.revert();for(var Ae=te(),Pe=Q(),St=C?C.duration():zi(X,I),Oe=0,E=0,O=n.end,G=n.endTrigger||f,z=n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),K=R.pinnedContainer=n.pinnedContainer&&nn(n.pinnedContainer),we=f&&Math.max(0,Ke.indexOf(R))||0,_e=we,Me,be,We,ze,Le,ke,Pt,Vn,ii,kt;_e--;)ke=Ke[_e],ke.end||ke.refresh(0,1)||(It=1),Pt=ke.pin,Pt&&(Pt===f||Pt===d)&&!ke.isReverted&&(kt||(kt=[]),kt.unshift(ke),ke.revert()),ke!==Ke[_e]&&(we--,_e--);for(Fn(z)&&(z=z(R)),pe=sh(z,f,Ae,I,V(),je,Ye,R,Pe,W,U,St,C)||(d?-.001:0),Fn(O)&&(O=O(R)),jn(O)&&!O.indexOf("+=")&&(~O.indexOf(" ")?O=(jn(z)?z.split(" ")[0]:"")+O:(Oe=Io(O.substr(2),Ae),O=jn(z)?z:pe+Oe,G=f)),ye=Math.max(pe,sh(O||(G?"100% 0":St),G,Ae,I,V()+Oe,tt,q,R,Pe,W,U,St,C))||-.001,Ce=ye-pe||(pe-=.01)&&.001,Oe=0,_e=we;_e--;)ke=Ke[_e],Pt=ke.pin,Pt&&ke.start-ke._pinPush<pe&&!C&&ke.end>0&&(Me=ke.end-ke.start,(Pt===f||Pt===K)&&!sa(z)&&(Oe+=Me*(1-ke.progress)),Pt===d&&(E+=Me));if(pe+=Oe,ye+=Oe,R._pinPush=E,je&&Oe&&(Me={},Me[I.a]="+="+Oe,K&&(Me[I.p]="-="+V()),De.set([je,tt],Me)),d)Me=Zn(d),ze=I===Tt,We=V(),le=parseFloat(ne(I.a))+E,!St&&ye>1&&((D?ht:X).style["overflow-"+I.a]="scroll"),Cl(d,S,Me),L=io(d),be=di(d,!0),Vn=U&&Ki(X,ze?Zt:Tt)(),g&&(Z=[g+I.os2,Ce+E+qt],Z.t=S,_e=g===vt?Cc(d,I)+Ce+E:0,_e&&Z.push(I.d,_e+qt),Pa(Z),U&&V(Ue)),U&&(Le={top:be.top+(ze?We-pe:Vn)+qt,left:be.left+(ze?Vn:We-pe)+qt,boxSizing:"border-box",position:"fixed"},Le[Sr]=Le["max"+As]=Math.ceil(be.width)+qt,Le[wr]=Le["max"+cu]=Math.ceil(be.height)+qt,Le[Mn]=Le[Mn+ga]=Le[Mn+pa]=Le[Mn+_a]=Le[Mn+ma]="0",Le[vt]=Me[vt],Le[vt+ga]=Me[vt+ga],Le[vt+pa]=Me[vt+pa],Le[vt+_a]=Me[vt+_a],Le[vt+ma]=Me[vt+ma],pt=Eg(dt,Le,x)),i?(ii=i._initted,wl(1),i.render(i.duration(),!0,!0),xe=ne(I.a)-le+Ce+E,Ce!==xe&&U&&pt.splice(pt.length-2,2),i.render(0,!0,!0),ii||i.invalidate(),wl(0)):xe=Ce;else if(f&&V()&&!C)for(be=f.parentNode;be&&be!==ht;)be._pinOffset&&(pe-=be._pinOffset,ye-=be._pinOffset),be=be.parentNode;kt&&kt.forEach(function($e){return $e.revert(!1)}),R.start=pe,R.end=ye,ce=Ne=V(),C||(ce<Ue&&V(Ue),R.scroll.rec=0),R.revert(!1),ie&&(fe=-1,R.isActive&&V(pe+Ce*Te),ie.restart(!0)),It=0,i&&N&&(i._initted||Ve)&&i.progress()!==Ve&&i.progress(Ve,!0).render(i.time(),!0,!0),(Te!==R.progress||C)&&(i&&!N&&i.totalProgress(Te,!0),R.progress=Te,R.update(0,0,1)),d&&g&&(S._pinOffset=Math.round(R.progress*xe)),u&&u(R)}},R.getVelocity=function(){return(V()-Ne)/(Yt()-Po)*1e3||0},R.endAnimation=function(){Ys(R.callbackAnimation),i&&(he?he.progress(1):i.paused()?N||Ys(i,R.direction<0,1):Ys(i,i.reversed()))},R.labelToScroll=function(J){return i&&i.labels&&(pe||R.refresh()||pe)+i.labels[J]/i.duration()*Ce||0},R.getTrailing=function(J){var ge=Ke.indexOf(R),Ae=R.direction>0?Ke.slice(0,ge).reverse():Ke.slice(ge+1);return(jn(J)?Ae.filter(function(Pe){return Pe.vars.preventOverlaps===J}):Ae).filter(function(Pe){return R.direction>0?Pe.end<=pe:Pe.start>=ye})},R.update=function(J,ge,Ae){if(!(C&&!Ae&&!J)){var Pe=R.scroll(),St=J?0:(Pe-pe)/Ce,Oe=St<0?0:St>1?1:St||0,E=R.progress,O,G,z,K,we,_e,Me,be;if(ge&&(Ne=ce,ce=C?V():Pe,M&&(ae=se,se=i&&!N?i.totalProgress():Oe)),m&&!Oe&&d&&!It&&!ra&&An&&pe<Pe+(Pe-Ne)/(Yt()-Po)*m&&(Oe=1e-4),Oe!==E&&R.enabled){if(O=R.isActive=!!Oe&&Oe<1,G=!!E&&E<1,_e=O!==G,we=_e||!!Oe!=!!E,R.direction=Oe>E?1:-1,R.progress=Oe,we&&!It&&(z=Oe&&!E?0:Oe===1?1:E===1?2:3,N&&(K=!_e&&B[z+1]!=="none"&&B[z+1]||B[z],be=i&&(K==="complete"||K==="reset"||K in i))),T&&(_e||be)&&(be||h||!i)&&(Fn(T)?T(R):R.getTrailing(T).forEach(function(ke){return ke.endAnimation()})),N||(he&&!It&&!ra?((C||fr&&fr!==R)&&he.render(he._dp._time-he._start),he.resetTo?he.resetTo("totalProgress",Oe,i._tTime/i._tDur):(he.vars.totalProgress=Oe,he.invalidate().restart())):i&&i.totalProgress(Oe,!!It)),d){if(J&&g&&(S.style[g+I.os2]=A),!U)$(Aa(le+xe*Oe));else if(we){if(Me=!J&&Oe>E&&ye+1>Pe&&Pe+1>=zi(X,I),x)if(!J&&(O||Me)){var We=di(d,!0),ze=Pe-pe;ah(d,ht,We.top+(I===Tt?ze:0)+qt,We.left+(I===Tt?0:ze)+qt)}else ah(d,S);Pa(O||Me?pt:L),xe!==Ce&&Oe<1&&O||$(le+(Oe===1&&!Me?xe:0))}}M&&!Fe.tween&&!It&&!ra&&ie.restart(!0),a&&(_e||b&&Oe&&(Oe<1||!Tl))&&$o(a.targets).forEach(function(ke){return ke.classList[O||b?"add":"remove"](a.className)}),s&&!N&&!J&&s(R),we&&!It?(N&&(be&&(K==="complete"?i.pause().totalProgress(1):K==="reset"?i.restart(!0).pause():K==="restart"?i.restart(!0):i[K]()),s&&s(R)),(_e||!Tl)&&(c&&_e&&Al(R,c),k[z]&&Al(R,k[z]),b&&(Oe===1?R.kill(!1,1):k[z]=0),_e||(z=Oe===1?1:3,k[z]&&Al(R,k[z]))),v&&!O&&Math.abs(R.getVelocity())>(sa(v)?v:2500)&&(Ys(R.callbackAnimation),he?he.progress(1):Ys(i,!Oe,1))):N&&s&&!It&&s(R)}if(oe){var Le=C?Pe/C.duration()*(C._caScrollDist||0):Pe;re(Le+(Ye._isFlipped?1:0)),oe(Le)}ct&&ct(-Pe/C.duration()*(C._caScrollDist||0))}},R.enable=function(J,ge){R.enabled||(R.enabled=!0,Ft(X,"resize",aa),Ft(D?ut:X,"scroll",Hr),ee&&Ft(o,"refreshInit",ee),J!==!1&&(R.progress=Te=0,ce=Ne=fe=V()),ge!==!1&&R.refresh())},R.getTween=function(J){return J&&Fe?Fe.tween:he},R.setPositions=function(J,ge){d&&(le+=J-pe,xe+=ge-J-Ce),R.start=pe=J,R.end=ye=ge,Ce=ge-J,R.update()},R.disable=function(J,ge){if(R.enabled&&(J!==!1&&R.revert(),R.enabled=R.isActive=!1,ge||he&&he.pause(),Ue=0,Se&&(Se.uncache=1),ee&&At(o,"refreshInit",ee),ie&&(ie.pause(),Fe.tween&&Fe.tween.kill()&&(Fe.tween=0)),!D)){for(var Ae=Ke.length;Ae--;)if(Ke[Ae].scroller===X&&Ke[Ae]!==R)return;At(X,"resize",aa),At(X,"scroll",Hr)}},R.kill=function(J,ge){R.disable(J,ge),he&&!ge&&he.kill(),l&&delete Lc[l];var Ae=Ke.indexOf(R);Ae>=0&&Ke.splice(Ae,1),Ae===jt&&Oo>0&&jt--,Ae=0,Ke.forEach(function(Pe){return Pe.scroller===R.scroller&&(Ae=1)}),Ae||(R.scroll.rec=0),i&&(i.scrollTrigger=null,J&&i.render(-1),ge||i.kill()),je&&[je,tt,Ye,q].forEach(function(Pe){return Pe.parentNode&&Pe.parentNode.removeChild(Pe)}),fr===R&&(fr=0),d&&(Se&&(Se.uncache=1),Ae=0,Ke.forEach(function(Pe){return Pe.pin===d&&Ae++}),Ae||(Se.spacer=0)),n.onKill&&n.onKill(R)},R.enable(!1,!1),gt&&gt(R),!i||!i.add||Ce?R.refresh():De.delayedCall(.01,function(){return pe||ye||R.refresh()})&&(Ce=.01)&&(pe=ye=0)},o.register=function(n){return hr||(De=n||cp(),lp()&&window.document&&o.enable(),hr=Za),hr},o.defaults=function(n){if(n)for(var i in n)to[i]=n[i];return to},o.disable=function(n,i){Za=0,Ke.forEach(function(s){return s[i?"kill":"disable"](n)}),At(Xe,"wheel",Hr),At(ut,"scroll",Hr),clearInterval(Ka),At(ut,"touchcancel",Ii),At(ht,"touchstart",Ii),Qa(At,ut,"pointerdown,touchstart,mousedown",Ku),Qa(At,ut,"pointerup,touchend,mouseup",Zu),Zo.kill(),$a(At);for(var r=0;r<et.length;r+=3)eo(At,et[r],et[r+1]),eo(At,et[r],et[r+2])},o.enable=function(){if(Xe=window,ut=document,mi=ut.documentElement,ht=ut.body,De&&($o=De.utils.toArray,hs=De.utils.clamp,wl=De.core.suppressOverwrites||Ii,De.core.globals("ScrollTrigger",o),ht)){Za=1,yt.register(De),o.isTouch=yt.isTouch,or=yt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ft(Xe,"wheel",Hr),np=[Xe,ut,mi,ht],o.matchMedia({"(orientation: portrait)":function(){return th(),th}}),Ft(ut,"scroll",Hr);var n=ht.style,i=n.borderTopStyle,r,s;for(n.borderTopStyle="solid",r=di(ht),Tt.m=Math.round(r.top+Tt.sc())||0,Zt.m=Math.round(r.left+Zt.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Ka=setInterval(eh,250),De.delayedCall(.5,function(){return ra=0}),Ft(ut,"touchcancel",Ii),Ft(ht,"touchstart",Ii),Qa(Ft,ut,"pointerdown,touchstart,mousedown",Ku),Qa(Ft,ut,"pointerup,touchend,mouseup",Zu),Ac=De.utils.checkPrefix("transform"),ko.push(Ac),hr=Yt(),Zo=De.delayedCall(.2,xs).pause(),as=[ut,"visibilitychange",function(){var a=Xe.innerWidth,l=Xe.innerHeight;ut.hidden?(ju=a,Yu=l):(ju!==a||Yu!==l)&&aa()},ut,"DOMContentLoaded",xs,Xe,"load",xs,Xe,"resize",aa],$a(Ft),Ke.forEach(function(a){return a.enable(0,1)}),s=0;s<et.length;s+=3)eo(At,et[s],et[s+1]),eo(At,et[s],et[s+2])}},o.config=function(n){"limitCallbacks"in n&&(Tl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ka)||(Ka=i)&&setInterval(eh,i),"ignoreMobileResize"in n&&(sp=o.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&($a(At)||$a(Ft,n.autoRefreshEvents||"none"),rp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(n,i){var r=nn(n),s=et.indexOf(r),a=Lr(r);~s&&et.splice(s,a?6:2),i&&(a?ei.unshift(Xe,i,ht,i,mi,i):ei.unshift(r,i))},o.matchMedia=function(n){var i,r,s,a,l;for(r in n)s=ft.indexOf(r),a=n[r],_s=r,r==="all"?a():(i=Xe.matchMedia(r),i&&(i.matches&&(l=a()),~s?(ft[s+1]=$u(ft[s+1],a),ft[s+2]=$u(ft[s+2],l)):(s=ft.length,ft.push(r,a,l),i.addListener?i.addListener(ih):i.addEventListener("change",ih)),ft[s+3]=i.matches)),_s=0;return ft},o.clearMatchMedia=function(n){n||(ft.length=0),n=ft.indexOf(n),n>=0&&ft.splice(n,4)},o.isInViewport=function(n,i,r){var s=(jn(n)?nn(n):n).getBoundingClientRect(),a=s[r?Sr:wr]*i||0;return r?s.right-a>0&&s.left+a<Xe.innerWidth:s.bottom-a>0&&s.top+a<Xe.innerHeight},o.positionInViewport=function(n,i,r){jn(n)&&(n=nn(n));var s=n.getBoundingClientRect(),a=s[r?Sr:wr],l=i==null?a/2:i in Jo?Jo[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(s.left+l)/Xe.innerWidth:(s.top+l)/Xe.innerHeight},o}();Ze.version="3.10.4";Ze.saveStyles=function(o){return o?$o(o).forEach(function(e){if(e&&e.style){var t=yn.indexOf(e);t>=0&&yn.splice(t,5),yn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),De.core.getCache(e),_s)}}):yn};Ze.revert=function(o,e){return Qo(!o,e)};Ze.create=function(o,e){return new Ze(o,e)};Ze.refresh=function(o){return o?aa():(hr||Ze.register())&&xs(!0)};Ze.update=Ra;Ze.clearScrollMemory=gp;Ze.maxScroll=function(o,e){return zi(o,e?Zt:Tt)};Ze.getScrollFunc=function(o,e){return Ki(nn(o),e?Zt:Tt)};Ze.getById=function(o){return Lc[o]};Ze.getAll=function(){return Ke.filter(function(o){return o.vars.id!=="ScrollSmoother"})};Ze.isScrolling=function(){return!!An};Ze.snapDirectional=uu;Ze.addEventListener=function(o,e){var t=Ca[o]||(Ca[o]=[]);~t.indexOf(e)||t.push(e)};Ze.removeEventListener=function(o,e){var t=Ca[o],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ze.batch=function(o,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,s=function(c,u){var h=[],f=[],d=De.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),r<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Fn(e[a])&&a!=="onRefreshInit"?s(a,e[a]):e[a];return Fn(r)&&(r=r(),Ft(Ze,"refresh",function(){return r=e.batchMax()})),$o(o).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Ze.create(c))}),t};var lh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Ll=function o(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(yt.isTouch?" pinch-zoom":""):"none",e===mi&&o(ht,t)},ch={auto:1,scroll:1},Cg=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,s=r._gsap||De.core.getCache(r),a=Yt(),l;if(!s._isScrollT||a-s._isScrollT>2e3){for(;r&&r.scrollHeight<=r.clientHeight;)r=r.parentNode;s._isScroll=r&&!Lr(r)&&r!==n&&(ch[(l=Zn(r)).overflowY]||ch[l.overflowX]),s._isScrollT=a}(s._isScroll||i==="x")&&(t._gsapAllow=!0)},_p=function(e,t,n,i){return yt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Cg,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ft(ut,yt.eventTypes[0],hh,!1,!0)},onDisable:function(){return At(ut,yt.eventTypes[0],hh,!0)}})},Lg=/(input|label|select|textarea)/i,uh,hh=function(e){var t=Lg.test(e.target.tagName);(t||uh)&&(e._gsapAllow=!0,uh=t)},Rg=function(e){Do(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,s,a,l=nn(e.target)||mi,c=De.core.globals().ScrollSmoother,u=or&&(e.content&&nn(e.content)||c&&c.get()&&c.get().content()),h=Ki(l,Tt),f=Ki(l,Zt),d=1,g=(yt.isTouch&&Xe.visualViewport?Xe.visualViewport.scale*Xe.visualViewport.width:Xe.outerWidth)/Xe.innerWidth,p=0,m=Fn(i)?function(){return i(s)}:function(){return i||2.8},_,y,b=_p(l,e.type,!0,r),M=function(){return _=!1},x=Ii,w=Ii,C=function(){a=zi(l,Tt),w=hs(or?1:0,a),n&&(x=hs(0,zi(l,Zt))),y=No},v=function(){if(_){requestAnimationFrame(M);var U=Aa(s.deltaY/2),k=w(h.v-U);return u&&k!==h.v+h.offset&&(h.offset=k-h.v,u.style.transform="translateY("+-h.offset+"px)",u._gsap&&(u._gsap.y=-h.offset+"px"),h.cacheID=et.cache,Ra()),!0}u&&(u.style.transform="translateY(0px)",h.offset=h.cacheID=0,u._gsap&&(u._gsap.y="0px")),_=!0},T,I,N,X,j=function(){C(),T.isActive()&&T.vars.scrollY>a&&(h()>a?T.progress(1)&&h(a):T.resetTo("scrollY",a))};return e.ignoreCheck=function(D){return or&&D.type==="touchmove"&&v()||d>1.05&&D.type!=="touchstart"||s.isGesturing||D.touches&&D.touches.length>1},e.onPress=function(){var D=d;d=Aa((Xe.visualViewport&&Xe.visualViewport.scale||1)/g),T.pause(),D!==d&&Ll(l,d>1.01?!0:n?!1:"x"),_=!1,I=f(),N=h(),C(),y=No},e.onRelease=e.onGestureStart=function(D,U){if(u&&(u.style.transform="translateY(0px)",h.offset=h.cacheID=0,u._gsap&&(u._gsap.y="0px")),!U)X.restart(!0);else{et.cache++;var k=m(),B,H;n&&(B=f(),H=B+k*.05*-D.velocityX/.227,k*=lh(f,B,H,zi(l,Zt)),T.vars.scrollX=x(H)),B=h(),H=B+k*.05*-D.velocityY/.227,k*=lh(h,B,H,zi(l,Tt)),T.vars.scrollY=w(H),T.invalidate().duration(k).play(.01),(or&&T.vars.scrollY>=a||B>=a-1)&&De.to({},{onUpdate:j,duration:k})}},e.onWheel=function(){T._ts&&T.pause(),Yt()-p>1e3&&(y=0,p=Yt())},e.onChange=function(D,U,k,B,H){No!==y&&C(),U&&n&&f(x(B[2]===U?I+(D.startX-D.x):f()+U-B[1])),k&&h(w(H[2]===k?N+(D.startY-D.y):h()+k-H[1])),Ra()},e.onEnable=function(){Ll(l,n?!1:"x"),Ft(Xe,"resize",j),b.enable()},e.onDisable=function(){Ll(l,!0),At(Xe,"resize",j),b.kill()},s=new yt(e),s.iOS=or,or&&!h()&&h(1),X=s._dc,T=De.to(s,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:X.vars.onComplete}),s};Ze.sort=function(o){return Ke.sort(o||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Ze.observe=function(o){return new yt(o)};Ze.normalizeScroll=function(o){if(typeof o=="undefined")return vn;if(o===!0&&vn)return vn.enable();if(o===!1)return vn&&vn.kill();var e=o instanceof yt?o:Rg(o);return vn&&vn.target===e.target&&vn.kill(),Lr(e.target)&&(vn=e),e};Ze.core={_getVelocityProp:Ec,_inputObserver:_p,_scrollers:et,_proxies:ei,bridge:{ss:function(){An||Rr("scrollStart"),An=Yt()},ref:function(){return It}}};cp()&&De.registerPlugin(Ze);zn.registerPlugin(Ze);const Pg=document.querySelector(".contact-info"),Dg=document.querySelector(".contact-form");zn.from(Pg,{scrollTrigger:{trigger:".footer",toggleActions:"play none none none"},y:200,duration:1,opacity:0});zn.from(Dg,{scrollTrigger:{trigger:".footer",toggleActions:"play none none none"},x:-200,duration:1,opacity:0});/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hu="141",Wr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ig=0,fh=1,Fg=2,xp=1,Ng=2,oa=3,Cs=0,Nn=1,Pr=2,Og=1,Wi=0,vs=1,dh=2,ph=3,mh=4,kg=5,os=100,zg=101,Ug=102,gh=103,_h=104,Bg=200,Vg=201,Gg=202,Hg=203,vp=204,yp=205,Wg=206,Xg=207,qg=208,jg=209,Yg=210,Kg=0,Zg=1,$g=2,Dc=3,Jg=4,Qg=5,e_=6,t_=7,al=0,n_=1,i_=2,xi=0,r_=1,s_=2,a_=3,o_=4,l_=5,Mp=300,Ls=301,Rs=302,Ic=303,Fc=304,ol=306,Ps=1e3,bn=1001,el=1002,Nt=1003,Nc=1004,Oc=1005,rn=1006,bp=1007,zs=1008,Dr=1009,c_=1010,u_=1011,Sp=1012,h_=1013,_r=1014,Ui=1015,Da=1016,f_=1017,d_=1018,ys=1020,p_=1021,m_=1022,En=1023,g_=1024,__=1025,Tr=1026,Ds=1027,x_=1028,v_=1029,y_=1030,M_=1031,b_=1033,Rl=33776,Pl=33777,Dl=33778,Il=33779,xh=35840,vh=35841,yh=35842,Mh=35843,S_=36196,bh=37492,Sh=37496,wh=37808,Th=37809,Eh=37810,Ah=37811,Ch=37812,Lh=37813,Rh=37814,Ph=37815,Dh=37816,Ih=37817,Fh=37818,Nh=37819,Oh=37820,kh=37821,zh=36492,Ia=2300,Is=2301,Fl=2302,Uh=2400,Bh=2401,Vh=2402,w_=2500,T_=2501,E_=1,wp=2,Ir=3e3,Qe=3001,A_=3200,C_=3201,Or=0,L_=1,fi="srgb",xr="srgb-linear",Nl=7680,R_=519,kc=35044,Gh="300 es",zc=1035;class kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const Dt=[];for(let o=0;o<256;o++)Dt[o]=(o<16?"0":"")+o.toString(16);let Hh=1234567;const xa=Math.PI/180,Fa=180/Math.PI;function On(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[o&255]+Dt[o>>8&255]+Dt[o>>16&255]+Dt[o>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Bt(o,e,t){return Math.max(e,Math.min(t,o))}function fu(o,e){return(o%e+e)%e}function P_(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function D_(o,e,t){return o!==e?(t-o)/(e-o):0}function va(o,e,t){return(1-t)*o+t*e}function I_(o,e,t,n){return va(o,e,1-Math.exp(-t*n))}function F_(o,e=1){return e-Math.abs(fu(o,e*2)-e)}function N_(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function O_(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function k_(o,e){return o+Math.floor(Math.random()*(e-o+1))}function z_(o,e){return o+Math.random()*(e-o)}function U_(o){return o*(.5-Math.random())}function B_(o){o!==void 0&&(Hh=o);let e=Hh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function V_(o){return o*xa}function G_(o){return o*Fa}function Uc(o){return(o&o-1)===0&&o!==0}function Tp(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function tl(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function H_(o,e,t,n,i){const r=Math.cos,s=Math.sin,a=r(t/2),l=s(t/2),c=r((e+n)/2),u=s((e+n)/2),h=r((e-n)/2),f=s((e-n)/2),d=r((n-e)/2),g=s((n-e)/2);switch(i){case"XYX":o.set(a*u,l*h,l*f,a*c);break;case"YZY":o.set(l*f,a*u,l*h,a*c);break;case"ZXZ":o.set(l*h,l*f,a*u,a*c);break;case"XZX":o.set(a*u,l*g,l*d,a*c);break;case"YXY":o.set(l*d,a*u,l*g,a*c);break;case"ZYZ":o.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function W_(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function X_(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var q_=Object.freeze({__proto__:null,DEG2RAD:xa,RAD2DEG:Fa,generateUUID:On,clamp:Bt,euclideanModulo:fu,mapLinear:P_,inverseLerp:D_,lerp:va,damp:I_,pingpong:F_,smoothstep:N_,smootherstep:O_,randInt:k_,randFloat:z_,randFloatSpread:U_,seededRandom:B_,degToRad:V_,radToDeg:G_,isPowerOfTwo:Uc,ceilPowerOfTwo:Tp,floorPowerOfTwo:tl,setQuaternionFromProperEuler:H_,normalize:X_,denormalize:W_});class Ie{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jn{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],p=i[0],m=i[3],_=i[6],y=i[1],b=i[4],M=i[7],x=i[2],w=i[5],C=i[8];return r[0]=s*p+a*y+l*x,r[3]=s*m+a*b+l*w,r[6]=s*_+a*M+l*C,r[1]=c*p+u*y+h*x,r[4]=c*m+u*b+h*w,r[7]=c*_+u*M+h*C,r[2]=f*p+d*y+g*x,r[5]=f*m+d*b+g*w,r[8]=f*_+d*M+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*r*u+n*a*l+i*r*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*s-a*c,f=a*l-u*r,d=c*r-s*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(i*c-u*n)*p,e[2]=(a*n-i*s)*p,e[3]=f*p,e[4]=(u*t-i*l)*p,e[5]=(i*r-a*t)*p,e[6]=d*p,e[7]=(n*l-c*t)*p,e[8]=(s*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-i*c,i*l,-i*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],s=i[3],a=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*r+n*l,i[3]=t*s+n*c,i[6]=t*a+n*u,i[1]=-n*r+t*l,i[4]=-n*s+t*c,i[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Ep(o){for(let e=o.length-1;e>=0;--e)if(o[e]>65535)return!0;return!1}function Na(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Er(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Uo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Ol={[fi]:{[xr]:Er},[xr]:{[fi]:Uo}},Ln={legacyMode:!0,get workingColorSpace(){return xr},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(Ol[e]&&Ol[e][t]!==void 0){const n=Ol[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},Ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wt={r:0,g:0,b:0},Rn={h:0,s:0,l:0},ro={h:0,s:0,l:0};function kl(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function so(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class Ee{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ln.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=xr){return this.r=e,this.g=t,this.b=n,Ln.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=xr){if(e=fu(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=kl(s,r,e+1/3),this.g=kl(s,r,e),this.b=kl(s,r,e-1/3)}return Ln.toWorkingColorSpace(this,i),this}setStyle(e,t=fi){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Ln.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Ln.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Ln.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Ln.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=fi){const n=Ap[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Ln.fromWorkingColorSpace(so(this,wt),e),Bt(wt.r*255,0,255)<<16^Bt(wt.g*255,0,255)<<8^Bt(wt.b*255,0,255)<<0}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xr){Ln.fromWorkingColorSpace(so(this,wt),t);const n=wt.r,i=wt.g,r=wt.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const h=s-a;switch(c=u<=.5?h/(s+a):h/(2-s-a),s){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xr){return Ln.fromWorkingColorSpace(so(this,wt),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=fi){return Ln.fromWorkingColorSpace(so(this,wt),e),e!==fi?`color(${e} ${wt.r} ${wt.g} ${wt.b})`:`rgb(${wt.r*255|0},${wt.g*255|0},${wt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Rn),Rn.h+=e,Rn.s+=t,Rn.l+=n,this.setHSL(Rn.h,Rn.s,Rn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(ro);const n=va(Rn.h,ro.h,t),i=va(Rn.s,ro.s,t),r=va(Rn.l,ro.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ee.NAMES=Ap;let qr;class Cp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qr===void 0&&(qr=Na("canvas")),qr.width=e.width,qr.height=e.height;const n=qr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Na("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=Er(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Er(t[n]/255)*255):t[n]=Er(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Lp{constructor(e=null){this.isSource=!0,this.uuid=On(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(zl(i[s].image)):r.push(zl(i[s]))}else r=zl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function zl(o){return typeof HTMLImageElement!="undefined"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&o instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&o instanceof ImageBitmap?Cp.getDataURL(o):o.data?{data:Array.prototype.slice.call(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let j_=0;class Jt extends kr{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=bn,i=bn,r=rn,s=zs,a=En,l=Dr,c=1,u=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=On(),this.name="",this.source=new Lp(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ps:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case el:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ps:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case el:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Mp;class at{constructor(e=0,t=0,n=0,i=1){this.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],p=l[2],m=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(d+1)/2,x=(_+1)/2,w=(u+f)/4,C=(h+p)/4,v=(g+m)/4;return b>M&&b>x?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=w/n,r=C/n):M>x?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=w/i,r=v/i):x<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(x),n=C/r,i=v/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-p)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xi extends kr{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:rn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Lp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rp extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Y_ extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Un{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,s,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[s+0],d=r[s+1],g=r[s+2],p=r[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=p;return}if(h!==p||l!==f||c!==d||u!==g){let m=1-a;const _=l*f+c*d+u*g+h*p,y=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){const x=Math.sqrt(b),w=Math.atan2(x,_*y);m=Math.sin(m*w)/x,a=Math.sin(a*w)/x}const M=a*y;if(l=l*m+f*M,c=c*m+d*M,u=u*m+g*M,h=h*m+p*M,m===1-a){const x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,s){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[s],f=r[s+1],d=r[s+2],g=r[s+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(s){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(s-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+s)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+s)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(s-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+i*c-r*l,this._y=i*u+s*l+r*a-n*c,this._z=r*u+s*c+n*l-i*a,this._w=s*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let a=s*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){this.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,a=e.z,l=e.w,c=l*t+s*i-a*n,u=l*n+a*t-r*i,h=l*i+r*n-s*t,f=-r*t-s*n-a*i;return this.x=c*l+f*-r+u*-a-h*-s,this.y=u*l+f*-s+h*-r-c*-a,this.z=h*l+f*-a+c*-s-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*s-n*l,this.z=n*a-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ul.copy(this).projectOnVector(e),this.sub(Ul)}reflect(e){return this.sub(Ul.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ul=new F,Wh=new Un;class Us{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>s&&(s=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,s,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>s&&(s=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,s,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=tr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let s=0,a=r.count;s<a;s++)tr.fromBufferAttribute(r,s).applyMatrix4(e.matrixWorld),this.expandByPoint(tr)}else n.boundingBox===null&&n.computeBoundingBox(),Bl.copy(n.boundingBox),Bl.applyMatrix4(e.matrixWorld),this.union(Bl);const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,tr),tr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),ao.subVectors(this.max,Ks),jr.subVectors(e.a,Ks),Yr.subVectors(e.b,Ks),Kr.subVectors(e.c,Ks),Ti.subVectors(Yr,jr),Ei.subVectors(Kr,Yr),nr.subVectors(jr,Kr);let t=[0,-Ti.z,Ti.y,0,-Ei.z,Ei.y,0,-nr.z,nr.y,Ti.z,0,-Ti.x,Ei.z,0,-Ei.x,nr.z,0,-nr.x,-Ti.y,Ti.x,0,-Ei.y,Ei.x,0,-nr.y,nr.x,0];return!Vl(t,jr,Yr,Kr,ao)||(t=[1,0,0,0,1,0,0,0,1],!Vl(t,jr,Yr,Kr,ao))?!1:(oo.crossVectors(Ti,Ei),t=[oo.x,oo.y,oo.z],Vl(t,jr,Yr,Kr,ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return tr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(tr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new F,new F,new F,new F,new F,new F,new F,new F],tr=new F,Bl=new Us,jr=new F,Yr=new F,Kr=new F,Ti=new F,Ei=new F,nr=new F,Ks=new F,ao=new F,oo=new F,ir=new F;function Vl(o,e,t,n,i){for(let r=0,s=o.length-3;r<=s;r+=3){ir.fromArray(o,r);const a=i.x*Math.abs(ir.x)+i.y*Math.abs(ir.y)+i.z*Math.abs(ir.z),l=e.dot(ir),c=t.dot(ir),u=n.dot(ir);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const K_=new Us,Xh=new F,lo=new F,Gl=new F;class Bs{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):K_.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Gl.subVectors(e,this.center);const t=Gl.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Gl.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?lo.set(0,0,1).multiplyScalar(e.radius):lo.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Xh.copy(e.center).add(lo)),this.expandByPoint(Xh.copy(e.center).sub(lo)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new F,Hl=new F,co=new F,Ai=new F,Wl=new F,uo=new F,Xl=new F;class du{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.direction).multiplyScalar(t).add(this.origin),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Hl.copy(e).add(t).multiplyScalar(.5),co.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(Hl);const r=e.distanceTo(t)*.5,s=-this.direction.dot(co),a=Ai.dot(this.direction),l=-Ai.dot(co),c=Ai.lengthSq(),u=Math.abs(1-s*s);let h,f,d,g;if(u>0)if(h=s*l-a,f=s*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const p=1/u;h*=p,f*=p,d=h*(h+s*f+2*a)+f*(s*h+f+2*l)+c}else f=r,h=Math.max(0,-(s*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(s*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-s*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(s*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=s>0?-r:r,h=Math.max(0,-(s*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(co).multiplyScalar(f).add(Hl),d}intersectSphere(e,t){si.subVectors(e.center,this.origin);const n=si.dot(this.direction),i=si.dot(si)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,l=n+s;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),n>s||r>i||((r>n||n!==n)&&(n=r),(s<i||i!==i)&&(i=s),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,i,r){Wl.subVectors(t,e),uo.subVectors(n,e),Xl.crossVectors(Wl,uo);let s=this.direction.dot(Xl),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Ai.subVectors(this.origin,e);const l=a*this.direction.dot(uo.crossVectors(Ai,uo));if(l<0)return null;const c=a*this.direction.dot(Wl.cross(Ai));if(c<0||l+c>s)return null;const u=-a*Ai.dot(Xl);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,s,a,l,c,u,h,f,d,g,p,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=s,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=d,_[7]=g,_[11]=p,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Zr.setFromMatrixColumn(e,0).length(),r=1/Zr.setFromMatrixColumn(e,1).length(),s=1/Zr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=s*u,d=s*h,g=a*u,p=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-p*c,t[9]=-a*l,t[2]=p-f*c,t[6]=g+d*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,p=c*h;t[0]=f+p*a,t[4]=g*a-d,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-a,t[2]=d*a-g,t[6]=p+f*a,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,p=c*h;t[0]=f-p*a,t[4]=-s*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=s*u,t[9]=p-f*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,d=s*h,g=a*u,p=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+p,t[1]=l*h,t[5]=p*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,d=s*c,g=a*l,p=a*c;t[0]=l*u,t[4]=p-f*h,t[8]=g*h+d,t[1]=h,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-p*h}else if(e.order==="XZY"){const f=s*l,d=s*c,g=a*l,p=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+p,t[5]=s*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Z_,e,$_)}lookAt(e,t,n){const i=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Ci.crossVectors(n,cn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Ci.crossVectors(n,cn)),Ci.normalize(),ho.crossVectors(cn,Ci),i[0]=Ci.x,i[4]=ho.x,i[8]=cn.x,i[1]=Ci.y,i[5]=ho.y,i[9]=cn.y,i[2]=Ci.z,i[6]=ho.z,i[10]=cn.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],p=n[6],m=n[10],_=n[14],y=n[3],b=n[7],M=n[11],x=n[15],w=i[0],C=i[4],v=i[8],T=i[12],I=i[1],N=i[5],X=i[9],j=i[13],D=i[2],U=i[6],k=i[10],B=i[14],H=i[3],W=i[7],R=i[11],ee=i[15];return r[0]=s*w+a*I+l*D+c*H,r[4]=s*C+a*N+l*U+c*W,r[8]=s*v+a*X+l*k+c*R,r[12]=s*T+a*j+l*B+c*ee,r[1]=u*w+h*I+f*D+d*H,r[5]=u*C+h*N+f*U+d*W,r[9]=u*v+h*X+f*k+d*R,r[13]=u*T+h*j+f*B+d*ee,r[2]=g*w+p*I+m*D+_*H,r[6]=g*C+p*N+m*U+_*W,r[10]=g*v+p*X+m*k+_*R,r[14]=g*T+p*j+m*B+_*ee,r[3]=y*w+b*I+M*D+x*H,r[7]=y*C+b*N+M*U+x*W,r[11]=y*v+b*X+M*k+x*R,r[15]=y*T+b*j+M*B+x*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],p=e[7],m=e[11],_=e[15];return g*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+p*(+t*l*d-t*c*f+r*s*f-i*s*d+i*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*s*h+n*s*d+r*a*u-n*c*u)+_*(-i*a*u-t*l*h+t*a*f+i*s*h-n*s*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],p=e[13],m=e[14],_=e[15],y=h*m*c-p*f*c+p*l*d-a*m*d-h*l*_+a*f*_,b=g*f*c-u*m*c-g*l*d+s*m*d+u*l*_-s*f*_,M=u*p*c-g*h*c+g*a*d-s*p*d-u*a*_+s*h*_,x=g*h*l-u*p*l-g*a*f+s*p*f+u*a*m-s*h*m,w=t*y+n*b+i*M+r*x;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=y*C,e[1]=(p*f*r-h*m*r-p*i*d+n*m*d+h*i*_-n*f*_)*C,e[2]=(a*m*r-p*l*r+p*i*c-n*m*c-a*i*_+n*l*_)*C,e[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*C,e[4]=b*C,e[5]=(u*m*r-g*f*r+g*i*d-t*m*d-u*i*_+t*f*_)*C,e[6]=(g*l*r-s*m*r-g*i*c+t*m*c+s*i*_-t*l*_)*C,e[7]=(s*f*r-u*l*r+u*i*c-t*f*c-s*i*d+t*l*d)*C,e[8]=M*C,e[9]=(g*h*r-u*p*r-g*n*d+t*p*d+u*n*_-t*h*_)*C,e[10]=(s*p*r-g*a*r+g*n*c-t*p*c-s*n*_+t*a*_)*C,e[11]=(u*a*r-s*h*r-u*n*c+t*h*c+s*n*d-t*a*d)*C,e[12]=x*C,e[13]=(u*p*i-g*h*i+g*n*f-t*p*f-u*n*m+t*h*m)*C,e[14]=(g*a*i-s*p*i-g*n*l+t*p*l+s*n*m-t*a*m)*C,e[15]=(s*h*i-u*a*i+u*n*l-t*h*l-s*n*f+t*a*f)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,a=e.y,l=e.z,c=r*s,u=r*a;return this.set(c*s+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*s,0,c*l-i*a,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,a=t._z,l=t._w,c=r+r,u=s+s,h=a+a,f=r*c,d=r*u,g=r*h,p=s*u,m=s*h,_=a*h,y=l*c,b=l*u,M=l*h,x=n.x,w=n.y,C=n.z;return i[0]=(1-(p+_))*x,i[1]=(d+M)*x,i[2]=(g-b)*x,i[3]=0,i[4]=(d-M)*w,i[5]=(1-(f+_))*w,i[6]=(m+y)*w,i[7]=0,i[8]=(g+b)*C,i[9]=(m-y)*C,i[10]=(1-(f+p))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Zr.set(i[0],i[1],i[2]).length();const s=Zr.set(i[4],i[5],i[6]).length(),a=Zr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Pn.copy(this);const c=1/r,u=1/s,h=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,t.setFromRotationMatrix(Pn),n.x=r,n.y=s,n.z=a,this}makePerspective(e,t,n,i,r,s){s===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(s+r)/(s-r),d=-2*s*r/(s-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,s){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(s-r),h=(t+e)*l,f=(n+i)*c,d=(s+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zr=new F,Pn=new Je,Z_=new F(0,0,0),$_=new F(1,1,1),Ci=new F,ho=new F,cn=new F,qh=new Je,jh=new Un;class Ba{constructor(e=0,t=0,n=0,i=Ba.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Bt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jh.setFromEuler(this),this.setFromQuaternion(jh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ba.DefaultOrder="XYZ";Ba.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Pp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let J_=0;const Yh=new F,$r=new Un,ai=new Je,fo=new F,Zs=new F,Q_=new F,e0=new Un,Kh=new F(1,0,0),Zh=new F(0,1,0),$h=new F(0,0,1),t0={type:"added"},Jh={type:"removed"};class bt extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DefaultUp.clone();const e=new F,t=new Ba,n=new Un,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new Jn}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=bt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Pp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Kh,e)}rotateY(e){return this.rotateOnAxis(Zh,e)}rotateZ(e){return this.rotateOnAxis($h,e)}translateOnAxis(e,t){return Yh.copy(e).applyQuaternion(this.quaternion),this.position.add(Yh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kh,e)}translateY(e){return this.translateOnAxis(Zh,e)}translateZ(e){return this.translateOnAxis($h,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fo.copy(e):fo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Zs,fo,this.up):ai.lookAt(fo,Zs,this.up),this.quaternion.setFromRotationMatrix(ai),i&&(ai.extractRotation(i.matrixWorld),$r.setFromRotationMatrix(ai),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(t0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Jh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,Q_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),f=s(e.skeletons),d=s(e.animations),g=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}bt.DefaultUp=new F(0,1,0);bt.DefaultMatrixAutoUpdate=!0;const Dn=new F,oi=new F,ql=new F,li=new F,Jr=new F,Qr=new F,Qh=new F,jl=new F,Yl=new F,Kl=new F;class $n{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Dn.subVectors(e,t),i.cross(Dn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Dn.subVectors(i,t),oi.subVectors(n,t),ql.subVectors(e,t);const s=Dn.dot(Dn),a=Dn.dot(oi),l=Dn.dot(ql),c=oi.dot(oi),u=oi.dot(ql),h=s*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,g=(s*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,li),li.x>=0&&li.y>=0&&li.x+li.y<=1}static getUV(e,t,n,i,r,s,a,l){return this.getBarycoord(e,t,n,i,li),l.set(0,0),l.addScaledVector(r,li.x),l.addScaledVector(s,li.y),l.addScaledVector(a,li.z),l}static isFrontFacing(e,t,n,i){return Dn.subVectors(n,t),oi.subVectors(e,t),Dn.cross(oi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Dn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return $n.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,a;Jr.subVectors(i,n),Qr.subVectors(r,n),jl.subVectors(e,n);const l=Jr.dot(jl),c=Qr.dot(jl);if(l<=0&&c<=0)return t.copy(n);Yl.subVectors(e,i);const u=Jr.dot(Yl),h=Qr.dot(Yl);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Jr,s);Kl.subVectors(e,r);const d=Jr.dot(Kl),g=Qr.dot(Kl);if(g>=0&&d<=g)return t.copy(r);const p=d*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Qr,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Qh.subVectors(r,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(Qh,a);const _=1/(m+p+f);return s=p*_,a=f*_,t.copy(n).addScaledVector(Jr,s).addScaledVector(Qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let n0=0;class Mt extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=On(),this.name="",this.type="Material",this.blending=vs,this.side=Cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=vp,this.blendDst=yp,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Dc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nl,this.stencilZFail=Nl,this.stencilZPass=Nl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Og;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(n.blending=this.blending),this.side!==Cs&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const l=r[a];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}Mt.fromType=function(){return null};class Bi extends Mt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new F,po=new Ie;class mn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=kc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new Ee),t[n++]=s.r,t[n++]=s.g,t[n++]=s.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new Ie),t[n++]=s.x,t[n++]=s.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new F),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new at),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z,t[n++]=s.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)po.fromBufferAttribute(this,t),po.applyMatrix3(e),this.setXY(t,po.x,po.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Dp extends mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ip extends mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vi extends mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let i0=0;const _n=new Je,Zl=new bt,es=new F,un=new Us,$s=new Us,Et=new F;class ti extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ep(e)?Ip:Dp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return Zl.lookAt(e),Zl.updateMatrix(),this.applyMatrix4(Zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new vi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const a=t[r];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(un.min,$s.min),un.expandByPoint(Et),Et.addVectors(un.max,$s.max),un.expandByPoint(Et)):(un.expandByPoint($s.min),un.expandByPoint($s.max))}un.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)Et.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Et));if(t)for(let r=0,s=t.length;r<s;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Et.fromBufferAttribute(a,c),l&&(es.fromBufferAttribute(e,c),Et.add(es)),i=Math.max(i,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,s=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<a;I++)c[I]=new F,u[I]=new F;const h=new F,f=new F,d=new F,g=new Ie,p=new Ie,m=new Ie,_=new F,y=new F;function b(I,N,X){h.fromArray(i,I*3),f.fromArray(i,N*3),d.fromArray(i,X*3),g.fromArray(s,I*2),p.fromArray(s,N*2),m.fromArray(s,X*2),f.sub(h),d.sub(h),p.sub(g),m.sub(g);const j=1/(p.x*m.y-m.x*p.y);!isFinite(j)||(_.copy(f).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(j),y.copy(d).multiplyScalar(p.x).addScaledVector(f,-m.x).multiplyScalar(j),c[I].add(_),c[N].add(_),c[X].add(_),u[I].add(y),u[N].add(y),u[X].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let I=0,N=M.length;I<N;++I){const X=M[I],j=X.start,D=X.count;for(let U=j,k=j+D;U<k;U+=3)b(n[U+0],n[U+1],n[U+2])}const x=new F,w=new F,C=new F,v=new F;function T(I){C.fromArray(r,I*3),v.copy(C);const N=c[I];x.copy(N),x.sub(C.multiplyScalar(C.dot(N))).normalize(),w.crossVectors(v,N);const j=w.dot(u[I])<0?-1:1;l[I*4]=x.x,l[I*4+1]=x.y,l[I*4+2]=x.z,l[I*4+3]=j}for(let I=0,N=M.length;I<N;++I){const X=M[I],j=X.start,D=X.count;for(let U=j,k=j+D;U<k;U+=3)T(n[U+0]),T(n[U+1]),T(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new F,r=new F,s=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),p=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,m),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const s=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,u=Math.min(l.length,s.length-c);for(let h=0,f=c;h<u;h++,f++)s[f]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let p=0,m=l.length;p<m;p++){a.isInterleavedBufferAttribute?d=l[p]*a.data.stride+a.offset:d=l[p]*u;for(let _=0;_<u;_++)f[g++]=c[d++]}return new mn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ti,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ef=new Je,ts=new du,$l=new Bs,Li=new F,Ri=new F,Pi=new F,Jl=new F,Ql=new F,ec=new F,mo=new F,go=new F,_o=new F,xo=new Ie,vo=new Ie,yo=new Ie,tc=new F,Mo=new F;class Qn extends bt{constructor(e=new ti,t=new Bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),$l.copy(n.boundingSphere),$l.applyMatrix4(r),e.ray.intersectsSphere($l)===!1)||(ef.copy(r).invert(),ts.copy(e.ray).applyMatrix4(ef),n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1))return;let s;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,d=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,m=d.length;p<m;p++){const _=d[p],y=i[_.materialIndex],b=Math.max(_.start,g.start),M=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let x=b,w=M;x<w;x+=3){const C=a.getX(x),v=a.getX(x+1),T=a.getX(x+2);s=bo(this,y,e,ts,l,c,u,h,f,C,v,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const p=Math.max(0,g.start),m=Math.min(a.count,g.start+g.count);for(let _=p,y=m;_<y;_+=3){const b=a.getX(_),M=a.getX(_+1),x=a.getX(_+2);s=bo(this,i,e,ts,l,c,u,h,f,b,M,x),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,m=d.length;p<m;p++){const _=d[p],y=i[_.materialIndex],b=Math.max(_.start,g.start),M=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let x=b,w=M;x<w;x+=3){const C=x,v=x+1,T=x+2;s=bo(this,y,e,ts,l,c,u,h,f,C,v,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const p=Math.max(0,g.start),m=Math.min(l.count,g.start+g.count);for(let _=p,y=m;_<y;_+=3){const b=_,M=_+1,x=_+2;s=bo(this,i,e,ts,l,c,u,h,f,b,M,x),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function r0(o,e,t,n,i,r,s,a){let l;if(e.side===Nn?l=n.intersectTriangle(s,r,i,!0,a):l=n.intersectTriangle(i,r,s,e.side!==Pr,a),l===null)return null;Mo.copy(a),Mo.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(Mo);return c<t.near||c>t.far?null:{distance:c,point:Mo.clone(),object:o}}function bo(o,e,t,n,i,r,s,a,l,c,u,h){Li.fromBufferAttribute(i,c),Ri.fromBufferAttribute(i,u),Pi.fromBufferAttribute(i,h);const f=o.morphTargetInfluences;if(r&&f){mo.set(0,0,0),go.set(0,0,0),_o.set(0,0,0);for(let g=0,p=r.length;g<p;g++){const m=f[g],_=r[g];m!==0&&(Jl.fromBufferAttribute(_,c),Ql.fromBufferAttribute(_,u),ec.fromBufferAttribute(_,h),s?(mo.addScaledVector(Jl,m),go.addScaledVector(Ql,m),_o.addScaledVector(ec,m)):(mo.addScaledVector(Jl.sub(Li),m),go.addScaledVector(Ql.sub(Ri),m),_o.addScaledVector(ec.sub(Pi),m)))}Li.add(mo),Ri.add(go),Pi.add(_o)}o.isSkinnedMesh&&(o.boneTransform(c,Li),o.boneTransform(u,Ri),o.boneTransform(h,Pi));const d=r0(o,e,t,n,Li,Ri,Pi,tc);if(d){a&&(xo.fromBufferAttribute(a,c),vo.fromBufferAttribute(a,u),yo.fromBufferAttribute(a,h),d.uv=$n.getUV(tc,Li,Ri,Pi,xo,vo,yo,new Ie)),l&&(xo.fromBufferAttribute(l,c),vo.fromBufferAttribute(l,u),yo.fromBufferAttribute(l,h),d.uv2=$n.getUV(tc,Li,Ri,Pi,xo,vo,yo,new Ie));const g={a:c,b:u,c:h,normal:new F,materialIndex:0};$n.getNormal(Li,Ri,Pi,g.normal),d.face=g}return d}class Va extends ti{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,s,r,0),g("z","y","x",1,-1,n,t,-e,s,r,1),g("x","z","y",1,1,e,n,t,i,s,2),g("x","z","y",1,-1,e,n,-t,i,s,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new vi(c,3)),this.setAttribute("normal",new vi(u,3)),this.setAttribute("uv",new vi(h,2));function g(p,m,_,y,b,M,x,w,C,v,T){const I=M/C,N=x/v,X=M/2,j=x/2,D=w/2,U=C+1,k=v+1;let B=0,H=0;const W=new F;for(let R=0;R<k;R++){const ee=R*N-j;for(let te=0;te<U;te++){const Q=te*I-X;W[p]=Q*y,W[m]=ee*b,W[_]=D,c.push(W.x,W.y,W.z),W[p]=0,W[m]=0,W[_]=w>0?1:-1,u.push(W.x,W.y,W.z),h.push(te/C),h.push(1-R/v),B+=1}}for(let R=0;R<v;R++)for(let ee=0;ee<C;ee++){const te=f+ee+U*R,Q=f+ee+U*(R+1),fe=f+(ee+1)+U*(R+1),ve=f+(ee+1)+U*R;l.push(te,Q,ve),l.push(Q,fe,ve),H+=6}a.addGroup(d,H,T),d+=H,f+=B}}static fromJSON(e){return new Va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function zt(o){const e={};for(let t=0;t<o.length;t++){const n=Fs(o[t]);for(const i in n)e[i]=n[i]}return e}const s0={clone:Fs,merge:zt};var a0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Mt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=a0,this.fragmentShader=o0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Fp extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Kt extends Fp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=90,is=1;class l0 extends bt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Kt(ns,is,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new F(1,0,0)),this.add(i);const r=new Kt(ns,is,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new F(-1,0,0)),this.add(r);const s=new Kt(ns,is,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new F(0,1,0)),this.add(s);const a=new Kt(ns,is,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new F(0,-1,0)),this.add(a);const l=new Kt(ns,is,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new F(0,0,1)),this.add(l);const c=new Kt(ns,is,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new F(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,s,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=xi,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Np extends Jt{constructor(e,t,n,i,r,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ls,super(e,t,n,i,r,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class c0 extends Xi{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Np(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Va(5,5,5),r=new bi({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nn,blending:Wi});r.uniforms.tEquirect.value=t;const s=new Qn(i,r),a=t.minFilter;return t.minFilter===zs&&(t.minFilter=rn),new l0(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}const nc=new F,u0=new F,h0=new Jn;class lr{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=nc.subVectors(n,t).cross(u0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(nc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||h0.getNormalMatrix(e),i=this.coplanarPoint(nc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new Bs,So=new F;class pu{constructor(e=new lr,t=new lr,n=new lr,i=new lr,r=new lr,s=new lr){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],s=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],g=n[10],p=n[11],m=n[12],_=n[13],y=n[14],b=n[15];return t[0].setComponents(a-i,h-l,p-f,b-m).normalize(),t[1].setComponents(a+i,h+l,p+f,b+m).normalize(),t[2].setComponents(a+r,h+c,p+d,b+_).normalize(),t[3].setComponents(a-r,h-c,p-d,b-_).normalize(),t[4].setComponents(a-s,h-u,p-g,b-y).normalize(),t[5].setComponents(a+s,h+u,p+g,b+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSprite(e){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(So.x=i.normal.x>0?e.max.x:e.min.x,So.y=i.normal.y>0?e.max.y:e.min.y,So.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(So)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Op(){let o=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function f0(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=o.createBuffer();o.bindBuffer(u,d),o.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,d=u.updateRange;o.bindBuffer(h,c),d.count===-1?o.bufferSubData(h,0,f):(t?o.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):o.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:s,remove:a,update:l}}class mu extends ti{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],p=[],m=[];for(let _=0;_<u;_++){const y=_*f-s;for(let b=0;b<c;b++){const M=b*h-r;g.push(M,-y,0),p.push(0,0,1),m.push(b/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let y=0;y<a;y++){const b=y+c*_,M=y+c*(_+1),x=y+1+c*(_+1),w=y+1+c*_;d.push(b,M,w),d.push(M,x,w)}this.setIndex(d),this.setAttribute("position",new vi(g,3)),this.setAttribute("normal",new vi(p,3)),this.setAttribute("uv",new vi(m,2))}static fromJSON(e){return new mu(e.width,e.height,e.widthSegments,e.heightSegments)}}var d0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,p0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,g0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,x0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v0="vec3 transformed = vec3( position );",y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,b0=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,S0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,D0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,I0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,F0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U0="gl_FragColor = linearToOutputTexel( gl_FragColor );",B0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,$0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,J0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q0=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,ex=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tx=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,nx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ix=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,rx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,ax=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ox=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lx=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ux=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,hx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,px=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,mx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_x=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Sx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,wx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Tx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Ex=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Px=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Dx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ix=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ox=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,kx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ux=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hx=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Wx=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xx=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,qx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Kx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$x=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ev=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tv=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,nv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,iv=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,rv=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,sv=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,av=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,ov=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,lv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,cv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hv=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dv=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_v=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bv=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tv=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ev=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Av=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Iv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ov=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Bv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ge={alphamap_fragment:d0,alphamap_pars_fragment:p0,alphatest_fragment:m0,alphatest_pars_fragment:g0,aomap_fragment:_0,aomap_pars_fragment:x0,begin_vertex:v0,beginnormal_vertex:y0,bsdfs:M0,iridescence_fragment:b0,bumpmap_pars_fragment:S0,clipping_planes_fragment:w0,clipping_planes_pars_fragment:T0,clipping_planes_pars_vertex:E0,clipping_planes_vertex:A0,color_fragment:C0,color_pars_fragment:L0,color_pars_vertex:R0,color_vertex:P0,common:D0,cube_uv_reflection_fragment:I0,defaultnormal_vertex:F0,displacementmap_pars_vertex:N0,displacementmap_vertex:O0,emissivemap_fragment:k0,emissivemap_pars_fragment:z0,encodings_fragment:U0,encodings_pars_fragment:B0,envmap_fragment:V0,envmap_common_pars_fragment:G0,envmap_pars_fragment:H0,envmap_pars_vertex:W0,envmap_physical_pars_fragment:tx,envmap_vertex:X0,fog_vertex:q0,fog_pars_vertex:j0,fog_fragment:Y0,fog_pars_fragment:K0,gradientmap_pars_fragment:Z0,lightmap_fragment:$0,lightmap_pars_fragment:J0,lights_lambert_vertex:Q0,lights_pars_begin:ex,lights_toon_fragment:nx,lights_toon_pars_fragment:ix,lights_phong_fragment:rx,lights_phong_pars_fragment:sx,lights_physical_fragment:ax,lights_physical_pars_fragment:ox,lights_fragment_begin:lx,lights_fragment_maps:cx,lights_fragment_end:ux,logdepthbuf_fragment:hx,logdepthbuf_pars_fragment:fx,logdepthbuf_pars_vertex:dx,logdepthbuf_vertex:px,map_fragment:mx,map_pars_fragment:gx,map_particle_fragment:_x,map_particle_pars_fragment:xx,metalnessmap_fragment:vx,metalnessmap_pars_fragment:yx,morphcolor_vertex:Mx,morphnormal_vertex:bx,morphtarget_pars_vertex:Sx,morphtarget_vertex:wx,normal_fragment_begin:Tx,normal_fragment_maps:Ex,normal_pars_fragment:Ax,normal_pars_vertex:Cx,normal_vertex:Lx,normalmap_pars_fragment:Rx,clearcoat_normal_fragment_begin:Px,clearcoat_normal_fragment_maps:Dx,clearcoat_pars_fragment:Ix,iridescence_pars_fragment:Fx,output_fragment:Nx,packing:Ox,premultiplied_alpha_fragment:kx,project_vertex:zx,dithering_fragment:Ux,dithering_pars_fragment:Bx,roughnessmap_fragment:Vx,roughnessmap_pars_fragment:Gx,shadowmap_pars_fragment:Hx,shadowmap_pars_vertex:Wx,shadowmap_vertex:Xx,shadowmask_pars_fragment:qx,skinbase_vertex:jx,skinning_pars_vertex:Yx,skinning_vertex:Kx,skinnormal_vertex:Zx,specularmap_fragment:$x,specularmap_pars_fragment:Jx,tonemapping_fragment:Qx,tonemapping_pars_fragment:ev,transmission_fragment:tv,transmission_pars_fragment:nv,uv_pars_fragment:iv,uv_pars_vertex:rv,uv_vertex:sv,uv2_pars_fragment:av,uv2_pars_vertex:ov,uv2_vertex:lv,worldpos_vertex:cv,background_vert:uv,background_frag:hv,cube_vert:fv,cube_frag:dv,depth_vert:pv,depth_frag:mv,distanceRGBA_vert:gv,distanceRGBA_frag:_v,equirect_vert:xv,equirect_frag:vv,linedashed_vert:yv,linedashed_frag:Mv,meshbasic_vert:bv,meshbasic_frag:Sv,meshlambert_vert:wv,meshlambert_frag:Tv,meshmatcap_vert:Ev,meshmatcap_frag:Av,meshnormal_vert:Cv,meshnormal_frag:Lv,meshphong_vert:Rv,meshphong_frag:Pv,meshphysical_vert:Dv,meshphysical_frag:Iv,meshtoon_vert:Fv,meshtoon_frag:Nv,points_vert:Ov,points_frag:kv,shadow_vert:zv,shadow_frag:Uv,sprite_vert:Bv,sprite_frag:Vv},de={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Jn},uv2Transform:{value:new Jn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Jn}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Jn}}},Yn={basic:{uniforms:zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.fog,de.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:zt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:zt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:zt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:zt([de.points,de.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:zt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:zt([de.common,de.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:zt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:zt([de.sprite,de.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Jn},t2D:{value:null}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},cube:{uniforms:zt([de.envmap,{opacity:{value:1}}]),vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:zt([de.common,de.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:zt([de.lights,de.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Yn.physical={uniforms:zt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};function Gv(o,e,t,n,i,r){const s=new Ee(0);let a=i===!0?0:1,l,c,u=null,h=0,f=null;function d(p,m){let _=!1,y=m.isScene===!0?m.background:null;y&&y.isTexture&&(y=e.get(y));const b=o.xr,M=b.getSession&&b.getSession();M&&M.environmentBlendMode==="additive"&&(y=null),y===null?g(s,a):y&&y.isColor&&(g(y,1),_=!0),(o.autoClear||_)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ol)?(c===void 0&&(c=new Qn(new Va(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Fs(Yn.cube.uniforms),vertexShader:Yn.cube.vertexShader,fragmentShader:Yn.cube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,(u!==y||h!==y.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Qn(new mu(2,2),new bi({name:"BackgroundMaterial",uniforms:Fs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Cs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==o.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,f=o.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,m){t.buffers.color.setClear(p.r,p.g,p.b,m,r)}return{getClearColor:function(){return s},setClearColor:function(p,m=1){s.set(p),a=m,g(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(s,a)},render:d}}function Hv(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function h(D,U,k,B,H){let W=!1;if(s){const R=p(B,k,U);c!==R&&(c=R,d(c.object)),W=_(D,B,k,H),W&&y(D,B,k,H)}else{const R=U.wireframe===!0;(c.geometry!==B.id||c.program!==k.id||c.wireframe!==R)&&(c.geometry=B.id,c.program=k.id,c.wireframe=R,W=!0)}H!==null&&t.update(H,34963),(W||u)&&(u=!1,v(D,U,k,B),H!==null&&o.bindBuffer(34963,t.get(H).buffer))}function f(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function d(D){return n.isWebGL2?o.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?o.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function p(D,U,k){const B=k.wireframe===!0;let H=a[D.id];H===void 0&&(H={},a[D.id]=H);let W=H[U.id];W===void 0&&(W={},H[U.id]=W);let R=W[B];return R===void 0&&(R=m(f()),W[B]=R),R}function m(D){const U=[],k=[],B=[];for(let H=0;H<i;H++)U[H]=0,k[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:B,object:D,attributes:{},index:null}}function _(D,U,k,B){const H=c.attributes,W=U.attributes;let R=0;const ee=k.getAttributes();for(const te in ee)if(ee[te].location>=0){const fe=H[te];let ve=W[te];if(ve===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&(ve=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&(ve=D.instanceColor)),fe===void 0||fe.attribute!==ve||ve&&fe.data!==ve.data)return!0;R++}return c.attributesNum!==R||c.index!==B}function y(D,U,k,B){const H={},W=U.attributes;let R=0;const ee=k.getAttributes();for(const te in ee)if(ee[te].location>=0){let fe=W[te];fe===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor));const ve={};ve.attribute=fe,fe&&fe.data&&(ve.data=fe.data),H[te]=ve,R++}c.attributes=H,c.attributesNum=R,c.index=B}function b(){const D=c.newAttributes;for(let U=0,k=D.length;U<k;U++)D[U]=0}function M(D){x(D,0)}function x(D,U){const k=c.newAttributes,B=c.enabledAttributes,H=c.attributeDivisors;k[D]=1,B[D]===0&&(o.enableVertexAttribArray(D),B[D]=1),H[D]!==U&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,U),H[D]=U)}function w(){const D=c.newAttributes,U=c.enabledAttributes;for(let k=0,B=U.length;k<B;k++)U[k]!==D[k]&&(o.disableVertexAttribArray(k),U[k]=0)}function C(D,U,k,B,H,W){n.isWebGL2===!0&&(k===5124||k===5125)?o.vertexAttribIPointer(D,U,k,H,W):o.vertexAttribPointer(D,U,k,B,H,W)}function v(D,U,k,B){if(n.isWebGL2===!1&&(D.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const H=B.attributes,W=k.getAttributes(),R=U.defaultAttributeValues;for(const ee in W){const te=W[ee];if(te.location>=0){let Q=H[ee];if(Q===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){const fe=Q.normalized,ve=Q.itemSize,V=t.get(Q);if(V===void 0)continue;const Fe=V.buffer,Se=V.type,Re=V.bytesPerElement;if(Q.isInterleavedBufferAttribute){const ce=Q.data,Ne=ce.stride,pe=Q.offset;if(ce.isInstancedInterleavedBuffer){for(let ye=0;ye<te.locationSize;ye++)x(te.location+ye,ce.meshPerAttribute);D.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ye=0;ye<te.locationSize;ye++)M(te.location+ye);o.bindBuffer(34962,Fe);for(let ye=0;ye<te.locationSize;ye++)C(te.location+ye,ve/te.locationSize,Se,fe,Ne*Re,(pe+ve/te.locationSize*ye)*Re)}else{if(Q.isInstancedBufferAttribute){for(let ce=0;ce<te.locationSize;ce++)x(te.location+ce,Q.meshPerAttribute);D.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ce=0;ce<te.locationSize;ce++)M(te.location+ce);o.bindBuffer(34962,Fe);for(let ce=0;ce<te.locationSize;ce++)C(te.location+ce,ve/te.locationSize,Se,fe,ve*Re,ve/te.locationSize*ce*Re)}}else if(R!==void 0){const fe=R[ee];if(fe!==void 0)switch(fe.length){case 2:o.vertexAttrib2fv(te.location,fe);break;case 3:o.vertexAttrib3fv(te.location,fe);break;case 4:o.vertexAttrib4fv(te.location,fe);break;default:o.vertexAttrib1fv(te.location,fe)}}}}w()}function T(){X();for(const D in a){const U=a[D];for(const k in U){const B=U[k];for(const H in B)g(B[H].object),delete B[H];delete U[k]}delete a[D]}}function I(D){if(a[D.id]===void 0)return;const U=a[D.id];for(const k in U){const B=U[k];for(const H in B)g(B[H].object),delete B[H];delete U[k]}delete a[D.id]}function N(D){for(const U in a){const k=a[U];if(k[D.id]===void 0)continue;const B=k[D.id];for(const H in B)g(B[H].object),delete B[H];delete k[D.id]}}function X(){j(),u=!0,c!==l&&(c=l,d(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:j,dispose:T,releaseStatesOfGeometry:I,releaseStatesOfProgram:N,initAttributes:b,enableAttribute:M,disableUnusedAttributes:w}}function Wv(o,e,t,n){const i=n.isWebGL2;let r;function s(c){r=c}function a(c,u){o.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=o,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,u,h),t.update(u,r,h)}this.setMode=s,this.render=a,this.renderInstances=l}function Xv(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext!="undefined"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&o instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=o.getParameter(34930),f=o.getParameter(35660),d=o.getParameter(3379),g=o.getParameter(34076),p=o.getParameter(34921),m=o.getParameter(36347),_=o.getParameter(36348),y=o.getParameter(36349),b=f>0,M=s||e.has("OES_texture_float"),x=b&&M,w=s?o.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:b,floatFragmentTextures:M,floatVertexTextures:x,maxSamples:w}}function qv(o){const e=this;let t=null,n=0,i=!1,r=!1;const s=new lr,a=new Jn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const g=h.length!==0||f||n!==0||i;return i=f,t=u(h,d,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,d){const g=h.clippingPlanes,p=h.clipIntersection,m=h.clipShadows,_=o.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,b=y*4;let M=_.clippingState||null;l.value=M,M=u(g,f,b,d);for(let x=0;x!==b;++x)M[x]=t[x];_.clippingState=M,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const p=h!==null?h.length:0;let m=null;if(p!==0){if(m=l.value,g!==!0||m===null){const _=d+p*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<_)&&(m=new Float32Array(_));for(let b=0,M=d;b!==p;++b,M+=4)s.copy(h[b]).applyMatrix4(y,a),s.normal.toArray(m,M),m[M+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function jv(o){let e=new WeakMap;function t(s,a){return a===Ic?s.mapping=Ls:a===Fc&&(s.mapping=Rs),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Ic||a===Fc)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new c0(l.height/2);return c.fromEquirectangularTexture(o,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class gu extends Fp{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fs=4,tf=[.125,.215,.35,.446,.526,.582],dr=20,ic=new gu,nf=new Ee;let rc=null;const cr=(1+Math.sqrt(5))/2,ss=1/cr,rf=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,cr,ss),new F(0,cr,-ss),new F(ss,0,cr),new F(-ss,0,cr),new F(cr,ss,0),new F(-cr,ss,0)];class sf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){rc=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rc),e.scissorTest=!1,wo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ls||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rc=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Da,format:En,encoding:Ir,depthBuffer:!1},i=af(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=af(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yv(r)),this._blurMaterial=Kv(r,e,t)}return i}_compileMaterial(e){const t=new Qn(this._lodPlanes[0],e);this._renderer.compile(t,ic)}_sceneToCubeUV(e,t,n,i){const a=new Kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(nf),u.toneMapping=xi,u.autoClear=!1;const d=new Bi({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),g=new Qn(new Va,d);let p=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(nf),p=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):y===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const b=this._cubeSize;wo(i,y*b,_>2?b:0,b,b),u.setRenderTarget(i),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ls||e.mapping===Rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=of());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Qn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;wo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,ic)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=rf[(i-1)%rf.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Qn(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*dr-1),p=r/g,m=isFinite(r)?1+Math.floor(u*p):dr;m>dr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${dr}`);const _=[];let y=0;for(let C=0;C<dr;++C){const v=C/p,T=Math.exp(-v*v/2);_.push(T),C===0?y+=T:C<m&&(y+=2*T)}for(let C=0;C<_.length;C++)_[C]=_[C]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=_,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const M=this._sizeLods[i],x=3*M*(i>b-fs?i-b+fs:0),w=4*(this._cubeSize-M);wo(t,x,w,3*M,2*M),l.setRenderTarget(t),l.render(h,ic)}}function Yv(o){const e=[],t=[],n=[];let i=o;const r=o-fs+1+tf.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);t.push(a);let l=1/a;s>o-fs?l=tf[s-o+fs-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,p=3,m=2,_=1,y=new Float32Array(p*g*d),b=new Float32Array(m*g*d),M=new Float32Array(_*g*d);for(let w=0;w<d;w++){const C=w%3*2/3-1,v=w>2?0:-1,T=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];y.set(T,p*g*w),b.set(f,m*g*w);const I=[w,w,w,w,w,w];M.set(I,_*g*w)}const x=new ti;x.setAttribute("position",new mn(y,p)),x.setAttribute("uv",new mn(b,m)),x.setAttribute("faceIndex",new mn(M,_)),e.push(x),i>fs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function af(o,e,t){const n=new Xi(o,e,t);return n.texture.mapping=ol,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wo(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function Kv(o,e,t){const n=new Float32Array(dr),i=new F(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function of(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function lf(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function _u(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zv(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ic||l===Fc,u=l===Ls||l===Rs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new sf(o)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new sf(o));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function $v(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Jv(o,e,t,n){const i={},r=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const p=d[g];for(let m=0,_=p.length;m<_;m++)e.update(p[m],34962)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let p=0;if(d!==null){const y=d.array;p=d.version;for(let b=0,M=y.length;b<M;b+=3){const x=y[b+0],w=y[b+1],C=y[b+2];f.push(x,w,w,C,C,x)}}else{const y=g.array;p=g.version;for(let b=0,M=y.length/3-1;b<M;b+=3){const x=b+0,w=b+1,C=b+2;f.push(x,w,w,C,C,x)}}const m=new(Ep(f)?Ip:Dp)(f,1);m.version=p;const _=r.get(h);_&&e.remove(_),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Qv(o,e,t,n){const i=n.isWebGL2;let r;function s(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){o.drawElements(r,d,a,f*l),t.update(d,r,1)}function h(f,d,g){if(g===0)return;let p,m;if(i)p=o,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,d,a,f*l,g),t.update(d,r,g)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h}function ey(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,a){switch(t.calls++,s){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ty(o,e){return o[0]-e[0]}function ny(o,e){return Math.abs(e[1])-Math.abs(o[1])}function sc(o,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),o.divideScalar(t)}function iy(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,s=new at,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let _=r.get(u);if(_===void 0||_.count!==m){let k=function(){D.dispose(),r.delete(u),u.removeEventListener("dispose",k)};var g=k;_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let I=0;M===!0&&(I=1),x===!0&&(I=2),w===!0&&(I=3);let N=u.attributes.position.count*I,X=1;N>e.maxTextureSize&&(X=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const j=new Float32Array(N*X*4*m),D=new Rp(j,N,X,m);D.type=Ui,D.needsUpdate=!0;const U=I*4;for(let B=0;B<m;B++){const H=C[B],W=v[B],R=T[B],ee=N*X*4*B;for(let te=0;te<H.count;te++){const Q=te*U;M===!0&&(s.fromBufferAttribute(H,te),H.normalized===!0&&sc(s,H),j[ee+Q+0]=s.x,j[ee+Q+1]=s.y,j[ee+Q+2]=s.z,j[ee+Q+3]=0),x===!0&&(s.fromBufferAttribute(W,te),W.normalized===!0&&sc(s,W),j[ee+Q+4]=s.x,j[ee+Q+5]=s.y,j[ee+Q+6]=s.z,j[ee+Q+7]=0),w===!0&&(s.fromBufferAttribute(R,te),R.normalized===!0&&sc(s,R),j[ee+Q+8]=s.x,j[ee+Q+9]=s.y,j[ee+Q+10]=s.z,j[ee+Q+11]=R.itemSize===4?s.w:1)}}_={count:m,texture:D,size:new Ie(N,X)},r.set(u,_),u.addEventListener("dispose",k)}let y=0;for(let M=0;M<d.length;M++)y+=d[M];const b=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(o,"morphTargetBaseInfluence",b),f.getUniforms().setValue(o,"morphTargetInfluences",d),f.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const p=d===void 0?0:d.length;let m=n[u.id];if(m===void 0||m.length!==p){m=[];for(let x=0;x<p;x++)m[x]=[x,0];n[u.id]=m}for(let x=0;x<p;x++){const w=m[x];w[0]=x,w[1]=d[x]}m.sort(ny);for(let x=0;x<8;x++)x<p&&m[x][1]?(a[x][0]=m[x][0],a[x][1]=m[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(ty);const _=u.morphAttributes.position,y=u.morphAttributes.normal;let b=0;for(let x=0;x<8;x++){const w=a[x],C=w[0],v=w[1];C!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+x)!==_[C]&&u.setAttribute("morphTarget"+x,_[C]),y&&u.getAttribute("morphNormal"+x)!==y[C]&&u.setAttribute("morphNormal"+x,y[C]),i[x]=v,b+=v):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),y&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const M=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(o,"morphTargetBaseInfluence",M),f.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function ry(o,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function s(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const kp=new Jt,zp=new Rp,Up=new Y_,Bp=new Np,cf=[],uf=[],hf=new Float32Array(16),ff=new Float32Array(9),df=new Float32Array(4);function Vs(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=cf[i];if(r===void 0&&(r=new Float32Array(i),cf[i]=r),e!==0){n.toArray(r,0);for(let s=1,a=0;s!==e;++s)a+=t,o[s].toArray(r,a)}return r}function Qt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function en(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function ll(o,e){let t=uf[e];t===void 0&&(t=new Int32Array(e),uf[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function sy(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function ay(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;o.uniform2fv(this.addr,e),en(t,e)}}function oy(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;o.uniform3fv(this.addr,e),en(t,e)}}function ly(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;o.uniform4fv(this.addr,e),en(t,e)}}function cy(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;df.set(n),o.uniformMatrix2fv(this.addr,!1,df),en(t,n)}}function uy(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;ff.set(n),o.uniformMatrix3fv(this.addr,!1,ff),en(t,n)}}function hy(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;hf.set(n),o.uniformMatrix4fv(this.addr,!1,hf),en(t,n)}}function fy(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function dy(o,e){const t=this.cache;Qt(t,e)||(o.uniform2iv(this.addr,e),en(t,e))}function py(o,e){const t=this.cache;Qt(t,e)||(o.uniform3iv(this.addr,e),en(t,e))}function my(o,e){const t=this.cache;Qt(t,e)||(o.uniform4iv(this.addr,e),en(t,e))}function gy(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function _y(o,e){const t=this.cache;Qt(t,e)||(o.uniform2uiv(this.addr,e),en(t,e))}function xy(o,e){const t=this.cache;Qt(t,e)||(o.uniform3uiv(this.addr,e),en(t,e))}function vy(o,e){const t=this.cache;Qt(t,e)||(o.uniform4uiv(this.addr,e),en(t,e))}function yy(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||kp,i)}function My(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Up,i)}function by(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Bp,i)}function Sy(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||zp,i)}function wy(o){switch(o){case 5126:return sy;case 35664:return ay;case 35665:return oy;case 35666:return ly;case 35674:return cy;case 35675:return uy;case 35676:return hy;case 5124:case 35670:return fy;case 35667:case 35671:return dy;case 35668:case 35672:return py;case 35669:case 35673:return my;case 5125:return gy;case 36294:return _y;case 36295:return xy;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return yy;case 35679:case 36299:case 36307:return My;case 35680:case 36300:case 36308:case 36293:return by;case 36289:case 36303:case 36311:case 36292:return Sy}}function Ty(o,e){o.uniform1fv(this.addr,e)}function Ey(o,e){const t=Vs(e,this.size,2);o.uniform2fv(this.addr,t)}function Ay(o,e){const t=Vs(e,this.size,3);o.uniform3fv(this.addr,t)}function Cy(o,e){const t=Vs(e,this.size,4);o.uniform4fv(this.addr,t)}function Ly(o,e){const t=Vs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Ry(o,e){const t=Vs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function Py(o,e){const t=Vs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Dy(o,e){o.uniform1iv(this.addr,e)}function Iy(o,e){o.uniform2iv(this.addr,e)}function Fy(o,e){o.uniform3iv(this.addr,e)}function Ny(o,e){o.uniform4iv(this.addr,e)}function Oy(o,e){o.uniform1uiv(this.addr,e)}function ky(o,e){o.uniform2uiv(this.addr,e)}function zy(o,e){o.uniform3uiv(this.addr,e)}function Uy(o,e){o.uniform4uiv(this.addr,e)}function By(o,e,t){const n=e.length,i=ll(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||kp,i[r])}function Vy(o,e,t){const n=e.length,i=ll(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||Up,i[r])}function Gy(o,e,t){const n=e.length,i=ll(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||Bp,i[r])}function Hy(o,e,t){const n=e.length,i=ll(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||zp,i[r])}function Wy(o){switch(o){case 5126:return Ty;case 35664:return Ey;case 35665:return Ay;case 35666:return Cy;case 35674:return Ly;case 35675:return Ry;case 35676:return Py;case 5124:case 35670:return Dy;case 35667:case 35671:return Iy;case 35668:case 35672:return Fy;case 35669:case 35673:return Ny;case 5125:return Oy;case 36294:return ky;case 36295:return zy;case 36296:return Uy;case 35678:case 36198:case 36298:case 36306:case 35682:return By;case 35679:case 36299:case 36307:return Vy;case 35680:case 36300:case 36308:case 36293:return Gy;case 36289:case 36303:case 36311:case 36292:return Hy}}class Xy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=wy(t.type)}}class qy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Wy(t.type)}}class jy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const ac=/(\w+)(\])?(\[|\.)?/g;function pf(o,e){o.seq.push(e),o.map[e.id]=e}function Yy(o,e,t){const n=o.name,i=n.length;for(ac.lastIndex=0;;){const r=ac.exec(n),s=ac.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===i){pf(t,c===void 0?new Xy(a,o,e):new qy(a,o,e));break}else{let h=t.map[a];h===void 0&&(h=new jy(a),pf(t,h)),t=h}}}class Bo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);Yy(r,s,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function mf(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let Ky=0;function Zy(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}function $y(o){switch(o){case Ir:return["Linear","( value )"];case Qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function gf(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Zy(o.getShaderSource(e),s)}else return i}function Jy(o,e){const t=$y(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Qy(o,e){let t;switch(e){case r_:t="Linear";break;case s_:t="Reinhard";break;case a_:t="OptimizedCineon";break;case o_:t="ACESFilmic";break;case l_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function eM(o){return[o.extensionDerivatives||!!o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(la).join(`
`)}function tM(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nM(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),s=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[s]={type:r.type,location:o.getAttribLocation(e,s),locationSize:a}}return t}function la(o){return o!==""}function _f(o,e){return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xf(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(o){return o.replace(iM,rM)}function rM(o,e){const t=Ge[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Bc(t)}const sM=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,aM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vf(o){return o.replace(aM,Vp).replace(sM,oM)}function oM(o,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Vp(o,e,t,n)}function Vp(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function yf(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lM(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===xp?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Ng?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===oa&&(e="SHADOWMAP_TYPE_VSM"),e}function cM(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ls:case Rs:e="ENVMAP_TYPE_CUBE";break;case ol:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uM(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Rs:e="ENVMAP_MODE_REFRACTION";break}return e}function hM(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case al:e="ENVMAP_BLENDING_MULTIPLY";break;case n_:e="ENVMAP_BLENDING_MIX";break;case i_:e="ENVMAP_BLENDING_ADD";break}return e}function fM(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function dM(o,e,t,n){const i=o.getContext(),r=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=lM(t),c=cM(t),u=uM(t),h=hM(t),f=fM(t),d=t.isWebGL2?"":eM(t),g=tM(r),p=i.createProgram();let m,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(la).join(`
`),m.length>0&&(m+=`
`),_=[d,g].filter(la).join(`
`),_.length>0&&(_+=`
`)):(m=[yf(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),_=[d,yf(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==xi?Qy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.encodings_pars_fragment,Jy("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(la).join(`
`)),s=Bc(s),s=_f(s,t),s=xf(s,t),a=Bc(a),a=_f(a,t),a=xf(a,t),s=vf(s),a=vf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=y+m+s,M=y+_+a,x=mf(i,35633,b),w=mf(i,35632,M);if(i.attachShader(p,x),i.attachShader(p,w),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),o.debug.checkShaderErrors){const T=i.getProgramInfoLog(p).trim(),I=i.getShaderInfoLog(x).trim(),N=i.getShaderInfoLog(w).trim();let X=!0,j=!0;if(i.getProgramParameter(p,35714)===!1){X=!1;const D=gf(i,x,"vertex"),U=gf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+D+`
`+U)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(I===""||N==="")&&(j=!1);j&&(this.diagnostics={runnable:X,programLog:T,vertexShader:{log:I,prefix:m},fragmentShader:{log:N,prefix:_}})}i.deleteShader(x),i.deleteShader(w);let C;this.getUniforms=function(){return C===void 0&&(C=new Bo(i,p)),C};let v;return this.getAttributes=function(){return v===void 0&&(v=nM(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Ky++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=x,this.fragmentShader=w,this}let pM=0;class mM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new gM(e);t.set(e,n)}return t.get(e)}}class gM{constructor(e){this.id=pM++,this.code=e,this.usedTimes=0}}function _M(o,e,t,n,i,r,s){const a=new Pp,l=new mM,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,T,I,N,X){const j=N.fog,D=X.geometry,U=v.isMeshStandardMaterial?N.environment:null,k=(v.isMeshStandardMaterial?t:e).get(v.envMap||U),B=!!k&&k.mapping===ol?k.image.height:null,H=g[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const W=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,R=W!==void 0?W.length:0;let ee=0;D.morphAttributes.position!==void 0&&(ee=1),D.morphAttributes.normal!==void 0&&(ee=2),D.morphAttributes.color!==void 0&&(ee=3);let te,Q,fe,ve;if(H){const Ne=Yn[H];te=Ne.vertexShader,Q=Ne.fragmentShader}else te=v.vertexShader,Q=v.fragmentShader,l.update(v),fe=l.getVertexShaderID(v),ve=l.getFragmentShaderID(v);const V=o.getRenderTarget(),Fe=v.alphaTest>0,Se=v.clearcoat>0,Re=v.iridescence>0;return{isWebGL2:u,shaderID:H,shaderName:v.type,vertexShader:te,fragmentShader:Q,defines:v.defines,customVertexShaderID:fe,customFragmentShaderID:ve,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:X.isInstancedMesh===!0,instancingColor:X.isInstancedMesh===!0&&X.instanceColor!==null,supportsVertexTextures:f,outputEncoding:V===null?o.outputEncoding:V.isXRRenderTarget===!0?V.texture.encoding:Ir,map:!!v.map,matcap:!!v.matcap,envMap:!!k,envMapMode:k&&k.mapping,envMapCubeUVHeight:B,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===L_,tangentSpaceNormalMap:v.normalMapType===Or,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Qe,clearcoat:Se,clearcoatMap:Se&&!!v.clearcoatMap,clearcoatRoughnessMap:Se&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:Se&&!!v.clearcoatNormalMap,iridescence:Re,iridescenceMap:Re&&!!v.iridescenceMap,iridescenceThicknessMap:Re&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===vs,alphaMap:!!v.alphaMap,alphaTest:Fe,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!D.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!j,useFog:v.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:X.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:ee,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:v.toneMapped?o.toneMapping:xi,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Pr,flipSided:v.side===Nn,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)T.push(I),T.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(_(T,v),y(T,v),T.push(o.outputEncoding)),T.push(v.customProgramCacheKey),T.join()}function _(v,T){v.push(T.precision),v.push(T.outputEncoding),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.combine),v.push(T.vertexUvs),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function y(v,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),T.fog&&a.enable(33),v.push(a.mask),a.disableAll(),T.useFog&&a.enable(0),T.flatShading&&a.enable(1),T.logarithmicDepthBuffer&&a.enable(2),T.skinning&&a.enable(3),T.morphTargets&&a.enable(4),T.morphNormals&&a.enable(5),T.morphColors&&a.enable(6),T.premultipliedAlpha&&a.enable(7),T.shadowMapEnabled&&a.enable(8),T.physicallyCorrectLights&&a.enable(9),T.doubleSided&&a.enable(10),T.flipSided&&a.enable(11),T.useDepthPacking&&a.enable(12),T.dithering&&a.enable(13),T.specularIntensityMap&&a.enable(14),T.specularColorMap&&a.enable(15),T.transmission&&a.enable(16),T.transmissionMap&&a.enable(17),T.thicknessMap&&a.enable(18),T.sheen&&a.enable(19),T.sheenColorMap&&a.enable(20),T.sheenRoughnessMap&&a.enable(21),T.decodeVideoTexture&&a.enable(22),T.opaque&&a.enable(23),v.push(a.mask)}function b(v){const T=g[v.type];let I;if(T){const N=Yn[T];I=s0.clone(N.uniforms)}else I=v.uniforms;return I}function M(v,T){let I;for(let N=0,X=c.length;N<X;N++){const j=c[N];if(j.cacheKey===T){I=j,++I.usedTimes;break}}return I===void 0&&(I=new dM(o,T,v,r),c.push(I)),I}function x(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),v.destroy()}}function w(v){l.remove(v)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:b,acquireProgram:M,releaseProgram:x,releaseShaderCache:w,programs:c,dispose:C}}function xM(){let o=new WeakMap;function e(r){let s=o.get(r);return s===void 0&&(s={},o.set(r,s)),s}function t(r){o.delete(r)}function n(r,s,a){o.get(r)[s]=a}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function vM(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Mf(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function bf(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(h,f,d,g,p,m){let _=o[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:p,group:m},o[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=d,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=p,_.group=m),e++,_}function a(h,f,d,g,p,m){const _=s(h,f,d,g,p,m);d.transmission>0?n.push(_):d.transparent===!0?i.push(_):t.push(_)}function l(h,f,d,g,p,m){const _=s(h,f,d,g,p,m);d.transmission>0?n.unshift(_):d.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||vM),n.length>1&&n.sort(f||Mf),i.length>1&&i.sort(f||Mf)}function u(){for(let h=e,f=o.length;h<f;h++){const d=o[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function yM(){let o=new WeakMap;function e(n,i){let r;return o.has(n)===!1?(r=new bf,o.set(n,[r])):i>=o.get(n).length?(r=new bf,o.get(n).push(r)):r=o.get(n)[i],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function MM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ee};break;case"SpotLight":t={position:new F,direction:new F,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new F,halfWidth:new F,halfHeight:new F};break}return o[e.id]=t,t}}}function bM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let SM=0;function wM(o,e){return(e.castShadow?1:0)-(o.castShadow?1:0)}function TM(o,e){const t=new MM,n=bM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new F);const r=new F,s=new Je,a=new Je;function l(u,h){let f=0,d=0,g=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,m=0,_=0,y=0,b=0,M=0,x=0,w=0;u.sort(wM);const C=h!==!0?Math.PI:1;for(let T=0,I=u.length;T<I;T++){const N=u[T],X=N.color,j=N.intensity,D=N.distance,U=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=X.r*j*C,d+=X.g*j*C,g+=X.b*j*C;else if(N.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(N.sh.coefficients[k],j);else if(N.isDirectionalLight){const k=t.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*C),N.castShadow){const B=N.shadow,H=n.get(N);H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=U,i.directionalShadowMatrix[p]=N.shadow.matrix,M++}i.directional[p]=k,p++}else if(N.isSpotLight){const k=t.get(N);if(k.position.setFromMatrixPosition(N.matrixWorld),k.color.copy(X).multiplyScalar(j*C),k.distance=D,k.coneCos=Math.cos(N.angle),k.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),k.decay=N.decay,N.castShadow){const B=N.shadow,H=n.get(N);H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=U,i.spotShadowMatrix[_]=N.shadow.matrix,w++}i.spot[_]=k,_++}else if(N.isRectAreaLight){const k=t.get(N);k.color.copy(X).multiplyScalar(j),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),i.rectArea[y]=k,y++}else if(N.isPointLight){const k=t.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*C),k.distance=N.distance,k.decay=N.decay,N.castShadow){const B=N.shadow,H=n.get(N);H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,H.shadowCameraNear=B.camera.near,H.shadowCameraFar=B.camera.far,i.pointShadow[m]=H,i.pointShadowMap[m]=U,i.pointShadowMatrix[m]=N.shadow.matrix,x++}i.point[m]=k,m++}else if(N.isHemisphereLight){const k=t.get(N);k.skyColor.copy(N.color).multiplyScalar(j*C),k.groundColor.copy(N.groundColor).multiplyScalar(j*C),i.hemi[b]=k,b++}}y>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const v=i.hash;(v.directionalLength!==p||v.pointLength!==m||v.spotLength!==_||v.rectAreaLength!==y||v.hemiLength!==b||v.numDirectionalShadows!==M||v.numPointShadows!==x||v.numSpotShadows!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=y,i.point.length=m,i.hemi.length=b,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=x,i.spotShadowMatrix.length=w,v.directionalLength=p,v.pointLength=m,v.spotLength=_,v.rectAreaLength=y,v.hemiLength=b,v.numDirectionalShadows=M,v.numPointShadows=x,v.numSpotShadows=w,i.version=SM++)}function c(u,h){let f=0,d=0,g=0,p=0,m=0;const _=h.matrixWorldInverse;for(let y=0,b=u.length;y<b;y++){const M=u[y];if(M.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),f++}else if(M.isSpotLight){const x=i.spot[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),g++}else if(M.isRectAreaLight){const x=i.rectArea[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(_),a.identity(),s.copy(M.matrixWorld),s.premultiply(_),a.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),p++}else if(M.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(_),d++}else if(M.isHemisphereLight){const x=i.hemi[m];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function Sf(o,e){const t=new TM(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function EM(o,e){let t=new WeakMap;function n(r,s){let a;return t.has(r)===!1?(a=new Sf(o,e),t.set(r,[a])):s>=t.get(r).length?(a=new Sf(o,e),t.get(r).push(a)):a=t.get(r)[s],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class Gp extends Mt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=A_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hp extends Mt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const AM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function LM(o,e,t){let n=new pu;const i=new Ie,r=new Ie,s=new at,a=new Gp({depthPacking:C_}),l=new Hp,c={},u=t.maxTextureSize,h={0:Nn,1:Cs,2:Pr},f=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:AM,fragmentShader:CM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ti;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Qn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xp,this.render=function(M,x,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const C=o.getRenderTarget(),v=o.getActiveCubeFace(),T=o.getActiveMipmapLevel(),I=o.state;I.setBlending(Wi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let N=0,X=M.length;N<X;N++){const j=M[N],D=j.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const U=D.getFrameExtents();if(i.multiply(U),r.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/U.x),i.x=r.x*U.x,D.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/U.y),i.y=r.y*U.y,D.mapSize.y=r.y)),D.map===null&&!D.isPointLightShadow&&this.type===oa&&(D.map=new Xi(i.x,i.y),D.map.texture.name=j.name+".shadowMap",D.mapPass=new Xi(i.x,i.y),D.camera.updateProjectionMatrix()),D.map===null){const B={minFilter:Nt,magFilter:Nt,format:En};D.map=new Xi(i.x,i.y,B),D.map.texture.name=j.name+".shadowMap",D.camera.updateProjectionMatrix()}o.setRenderTarget(D.map),o.clear();const k=D.getViewportCount();for(let B=0;B<k;B++){const H=D.getViewport(B);s.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),I.viewport(s),D.updateMatrices(j,B),n=D.getFrustum(),b(x,w,D.camera,j,this.type)}!D.isPointLightShadow&&this.type===oa&&_(D,w),D.needsUpdate=!1}m.needsUpdate=!1,o.setRenderTarget(C,v,T)};function _(M,x){const w=e.update(p);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,o.setRenderTarget(M.mapPass),o.clear(),o.renderBufferDirect(x,null,w,f,p,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,o.setRenderTarget(M.map),o.clear(),o.renderBufferDirect(x,null,w,d,p,null)}function y(M,x,w,C,v,T){let I=null;const N=w.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(N!==void 0?I=N:I=w.isPointLight===!0?l:a,o.localClippingEnabled&&x.clipShadows===!0&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0){const X=I.uuid,j=x.uuid;let D=c[X];D===void 0&&(D={},c[X]=D);let U=D[j];U===void 0&&(U=I.clone(),D[j]=U),I=U}return I.visible=x.visible,I.wireframe=x.wireframe,T===oa?I.side=x.shadowSide!==null?x.shadowSide:x.side:I.side=x.shadowSide!==null?x.shadowSide:h[x.side],I.alphaMap=x.alphaMap,I.alphaTest=x.alphaTest,I.clipShadows=x.clipShadows,I.clippingPlanes=x.clippingPlanes,I.clipIntersection=x.clipIntersection,I.displacementMap=x.displacementMap,I.displacementScale=x.displacementScale,I.displacementBias=x.displacementBias,I.wireframeLinewidth=x.wireframeLinewidth,I.linewidth=x.linewidth,w.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(w.matrixWorld),I.nearDistance=C,I.farDistance=v),I}function b(M,x,w,C,v){if(M.visible===!1)return;if(M.layers.test(x.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===oa)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,M.matrixWorld);const N=e.update(M),X=M.material;if(Array.isArray(X)){const j=N.groups;for(let D=0,U=j.length;D<U;D++){const k=j[D],B=X[k.materialIndex];if(B&&B.visible){const H=y(M,B,C,w.near,w.far,v);o.renderBufferDirect(w,null,N,H,M,k)}}}else if(X.visible){const j=y(M,X,C,w.near,w.far,v);o.renderBufferDirect(w,null,N,j,M,null)}}const I=M.children;for(let N=0,X=I.length;N<X;N++)b(I[N],x,w,C,v)}}function RM(o,e,t){const n=t.isWebGL2;function i(){let P=!1;const se=new at;let ae=null;const he=new at(0,0,0,0);return{setMask:function(ue){ae!==ue&&!P&&(o.colorMask(ue,ue,ue,ue),ae=ue)},setLocked:function(ue){P=ue},setClear:function(ue,me,ie,Te,Ue){Ue===!0&&(ue*=Te,me*=Te,ie*=Te),se.set(ue,me,ie,Te),he.equals(se)===!1&&(o.clearColor(ue,me,ie,Te),he.copy(se))},reset:function(){P=!1,ae=null,he.set(-1,0,0,0)}}}function r(){let P=!1,se=null,ae=null,he=null;return{setTest:function(ue){ue?ve(2929):V(2929)},setMask:function(ue){se!==ue&&!P&&(o.depthMask(ue),se=ue)},setFunc:function(ue){if(ae!==ue){if(ue)switch(ue){case Kg:o.depthFunc(512);break;case Zg:o.depthFunc(519);break;case $g:o.depthFunc(513);break;case Dc:o.depthFunc(515);break;case Jg:o.depthFunc(514);break;case Qg:o.depthFunc(518);break;case e_:o.depthFunc(516);break;case t_:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);ae=ue}},setLocked:function(ue){P=ue},setClear:function(ue){he!==ue&&(o.clearDepth(ue),he=ue)},reset:function(){P=!1,se=null,ae=null,he=null}}}function s(){let P=!1,se=null,ae=null,he=null,ue=null,me=null,ie=null,Te=null,Ue=null;return{setTest:function(Ve){P||(Ve?ve(2960):V(2960))},setMask:function(Ve){se!==Ve&&!P&&(o.stencilMask(Ve),se=Ve)},setFunc:function(Ve,ct,gt){(ae!==Ve||he!==ct||ue!==gt)&&(o.stencilFunc(Ve,ct,gt),ae=Ve,he=ct,ue=gt)},setOp:function(Ve,ct,gt){(me!==Ve||ie!==ct||Te!==gt)&&(o.stencilOp(Ve,ct,gt),me=Ve,ie=ct,Te=gt)},setLocked:function(Ve){P=Ve},setClear:function(Ve){Ue!==Ve&&(o.clearStencil(Ve),Ue=Ve)},reset:function(){P=!1,se=null,ae=null,he=null,ue=null,me=null,ie=null,Te=null,Ue=null}}}const a=new i,l=new r,c=new s;let u={},h={},f=new WeakMap,d=[],g=null,p=!1,m=null,_=null,y=null,b=null,M=null,x=null,w=null,C=!1,v=null,T=null,I=null,N=null,X=null;const j=o.getParameter(35661);let D=!1,U=0;const k=o.getParameter(7938);k.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(k)[1]),D=U>=1):k.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),D=U>=2);let B=null,H={};const W=o.getParameter(3088),R=o.getParameter(2978),ee=new at().fromArray(W),te=new at().fromArray(R);function Q(P,se,ae){const he=new Uint8Array(4),ue=o.createTexture();o.bindTexture(P,ue),o.texParameteri(P,10241,9728),o.texParameteri(P,10240,9728);for(let me=0;me<ae;me++)o.texImage2D(se+me,0,6408,1,1,0,6408,5121,he);return ue}const fe={};fe[3553]=Q(3553,3553,1),fe[34067]=Q(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ve(2929),l.setFunc(Dc),je(!1),tt(fh),ve(2884),pe(Wi);function ve(P){u[P]!==!0&&(o.enable(P),u[P]=!0)}function V(P){u[P]!==!1&&(o.disable(P),u[P]=!1)}function Fe(P,se){return h[P]!==se?(o.bindFramebuffer(P,se),h[P]=se,n&&(P===36009&&(h[36160]=se),P===36160&&(h[36009]=se)),!0):!1}function Se(P,se){let ae=d,he=!1;if(P)if(ae=f.get(se),ae===void 0&&(ae=[],f.set(se,ae)),P.isWebGLMultipleRenderTargets){const ue=P.texture;if(ae.length!==ue.length||ae[0]!==36064){for(let me=0,ie=ue.length;me<ie;me++)ae[me]=36064+me;ae.length=ue.length,he=!0}}else ae[0]!==36064&&(ae[0]=36064,he=!0);else ae[0]!==1029&&(ae[0]=1029,he=!0);he&&(t.isWebGL2?o.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function Re(P){return g!==P?(o.useProgram(P),g=P,!0):!1}const ce={[os]:32774,[zg]:32778,[Ug]:32779};if(n)ce[gh]=32775,ce[_h]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(ce[gh]=P.MIN_EXT,ce[_h]=P.MAX_EXT)}const Ne={[Bg]:0,[Vg]:1,[Gg]:768,[vp]:770,[Yg]:776,[qg]:774,[Wg]:772,[Hg]:769,[yp]:771,[jg]:775,[Xg]:773};function pe(P,se,ae,he,ue,me,ie,Te){if(P===Wi){p===!0&&(V(3042),p=!1);return}if(p===!1&&(ve(3042),p=!0),P!==kg){if(P!==m||Te!==C){if((_!==os||M!==os)&&(o.blendEquation(32774),_=os,M=os),Te)switch(P){case vs:o.blendFuncSeparate(1,771,1,771);break;case dh:o.blendFunc(1,1);break;case ph:o.blendFuncSeparate(0,769,0,1);break;case mh:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case vs:o.blendFuncSeparate(770,771,1,771);break;case dh:o.blendFunc(770,1);break;case ph:o.blendFuncSeparate(0,769,0,1);break;case mh:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,b=null,x=null,w=null,m=P,C=Te}return}ue=ue||se,me=me||ae,ie=ie||he,(se!==_||ue!==M)&&(o.blendEquationSeparate(ce[se],ce[ue]),_=se,M=ue),(ae!==y||he!==b||me!==x||ie!==w)&&(o.blendFuncSeparate(Ne[ae],Ne[he],Ne[me],Ne[ie]),y=ae,b=he,x=me,w=ie),m=P,C=null}function ye(P,se){P.side===Pr?V(2884):ve(2884);let ae=P.side===Nn;se&&(ae=!ae),je(ae),P.blending===vs&&P.transparent===!1?pe(Wi):pe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const he=P.stencilWrite;c.setTest(he),he&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),q(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ve(32926):V(32926)}function je(P){v!==P&&(P?o.frontFace(2304):o.frontFace(2305),v=P)}function tt(P){P!==Ig?(ve(2884),P!==T&&(P===fh?o.cullFace(1029):P===Fg?o.cullFace(1028):o.cullFace(1032))):V(2884),T=P}function Ye(P){P!==I&&(D&&o.lineWidth(P),I=P)}function q(P,se,ae){P?(ve(32823),(N!==se||X!==ae)&&(o.polygonOffset(se,ae),N=se,X=ae)):V(32823)}function nt(P){P?ve(3089):V(3089)}function Ce(P){P===void 0&&(P=33984+j-1),B!==P&&(o.activeTexture(P),B=P)}function dt(P,se){B===null&&Ce();let ae=H[B];ae===void 0&&(ae={type:void 0,texture:void 0},H[B]=ae),(ae.type!==P||ae.texture!==se)&&(o.bindTexture(P,se||fe[P]),ae.type=P,ae.texture=se)}function pt(){const P=H[B];P!==void 0&&P.type!==void 0&&(o.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function L(){try{o.compressedTexImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function S(){try{o.texSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{o.texSubImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{o.texStorage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{o.texStorage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{o.texImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function A(){try{o.texImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(P){ee.equals(P)===!1&&(o.scissor(P.x,P.y,P.z,P.w),ee.copy(P))}function re(P){te.equals(P)===!1&&(o.viewport(P.x,P.y,P.z,P.w),te.copy(P))}function oe(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),u={},B=null,H={},h={},f=new WeakMap,d=[],g=null,p=!1,m=null,_=null,y=null,b=null,M=null,x=null,w=null,C=!1,v=null,T=null,I=null,N=null,X=null,ee.set(0,0,o.canvas.width,o.canvas.height),te.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ve,disable:V,bindFramebuffer:Fe,drawBuffers:Se,useProgram:Re,setBlending:pe,setMaterial:ye,setFlipSided:je,setCullFace:tt,setLineWidth:Ye,setPolygonOffset:q,setScissorTest:nt,activeTexture:Ce,bindTexture:dt,unbindTexture:pt,compressedTexImage2D:L,texImage2D:xe,texImage3D:A,texStorage2D:$,texStorage3D:le,texSubImage2D:S,texSubImage3D:Y,compressedTexSubImage2D:ne,scissor:Z,viewport:re,reset:oe}}function PM(o,e,t,n,i,r,s){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,S){return _?new OffscreenCanvas(L,S):Na("canvas")}function b(L,S,Y,ne){let $=1;if((L.width>ne||L.height>ne)&&($=ne/Math.max(L.width,L.height)),$<1||S===!0)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap){const le=S?tl:Math.floor,xe=le($*L.width),A=le($*L.height);p===void 0&&(p=y(xe,A));const Z=Y?y(xe,A):p;return Z.width=xe,Z.height=A,Z.getContext("2d").drawImage(L,0,0,xe,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+xe+"x"+A+")."),Z}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function M(L){return Uc(L.width)&&Uc(L.height)}function x(L){return a?!1:L.wrapS!==bn||L.wrapT!==bn||L.minFilter!==Nt&&L.minFilter!==rn}function w(L,S){return L.generateMipmaps&&S&&L.minFilter!==Nt&&L.minFilter!==rn}function C(L){o.generateMipmap(L)}function v(L,S,Y,ne,$=!1){if(a===!1)return S;if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let le=S;return S===6403&&(Y===5126&&(le=33326),Y===5131&&(le=33325),Y===5121&&(le=33321)),S===33319&&(Y===5126&&(le=33328),Y===5131&&(le=33327),Y===5121&&(le=33323)),S===6408&&(Y===5126&&(le=34836),Y===5131&&(le=34842),Y===5121&&(le=ne===Qe&&$===!1?35907:32856),Y===32819&&(le=32854),Y===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function T(L,S,Y){return w(L,Y)===!0||L.isFramebufferTexture&&L.minFilter!==Nt&&L.minFilter!==rn?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function I(L){return L===Nt||L===Nc||L===Oc?9728:9729}function N(L){const S=L.target;S.removeEventListener("dispose",N),j(S),S.isVideoTexture&&g.delete(S)}function X(L){const S=L.target;S.removeEventListener("dispose",X),U(S)}function j(L){const S=n.get(L);if(S.__webglInit===void 0)return;const Y=L.source,ne=m.get(Y);if(ne){const $=ne[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&D(L),Object.keys(ne).length===0&&m.delete(Y)}n.remove(L)}function D(L){const S=n.get(L);o.deleteTexture(S.__webglTexture);const Y=L.source,ne=m.get(Y);delete ne[S.__cacheKey],s.memory.textures--}function U(L){const S=L.texture,Y=n.get(L),ne=n.get(S);if(ne.__webglTexture!==void 0&&(o.deleteTexture(ne.__webglTexture),s.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let $=0;$<6;$++)o.deleteFramebuffer(Y.__webglFramebuffer[$]),Y.__webglDepthbuffer&&o.deleteRenderbuffer(Y.__webglDepthbuffer[$]);else{if(o.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&o.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let $=0;$<Y.__webglColorRenderbuffer.length;$++)Y.__webglColorRenderbuffer[$]&&o.deleteRenderbuffer(Y.__webglColorRenderbuffer[$]);Y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let $=0,le=S.length;$<le;$++){const xe=n.get(S[$]);xe.__webglTexture&&(o.deleteTexture(xe.__webglTexture),s.memory.textures--),n.remove(S[$])}n.remove(S),n.remove(L)}let k=0;function B(){k=0}function H(){const L=k;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),k+=1,L}function W(L){const S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.encoding),S.join()}function R(L,S){const Y=n.get(L);if(L.isVideoTexture&&dt(L),L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){const ne=L.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(Y,L,S);return}}t.activeTexture(33984+S),t.bindTexture(3553,Y.__webglTexture)}function ee(L,S){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){Se(Y,L,S);return}t.activeTexture(33984+S),t.bindTexture(35866,Y.__webglTexture)}function te(L,S){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){Se(Y,L,S);return}t.activeTexture(33984+S),t.bindTexture(32879,Y.__webglTexture)}function Q(L,S){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){Re(Y,L,S);return}t.activeTexture(33984+S),t.bindTexture(34067,Y.__webglTexture)}const fe={[Ps]:10497,[bn]:33071,[el]:33648},ve={[Nt]:9728,[Nc]:9984,[Oc]:9986,[rn]:9729,[bp]:9985,[zs]:9987};function V(L,S,Y){if(Y?(o.texParameteri(L,10242,fe[S.wrapS]),o.texParameteri(L,10243,fe[S.wrapT]),(L===32879||L===35866)&&o.texParameteri(L,32882,fe[S.wrapR]),o.texParameteri(L,10240,ve[S.magFilter]),o.texParameteri(L,10241,ve[S.minFilter])):(o.texParameteri(L,10242,33071),o.texParameteri(L,10243,33071),(L===32879||L===35866)&&o.texParameteri(L,32882,33071),(S.wrapS!==bn||S.wrapT!==bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(L,10240,I(S.magFilter)),o.texParameteri(L,10241,I(S.minFilter)),S.minFilter!==Nt&&S.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(S.type===Ui&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Da&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(o.texParameterf(L,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Fe(L,S){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",N));const ne=S.source;let $=m.get(ne);$===void 0&&($={},m.set(ne,$));const le=W(S);if(le!==L.__cacheKey){$[le]===void 0&&($[le]={texture:o.createTexture(),usedTimes:0},s.memory.textures++,Y=!0),$[le].usedTimes++;const xe=$[L.__cacheKey];xe!==void 0&&($[L.__cacheKey].usedTimes--,xe.usedTimes===0&&D(S)),L.__cacheKey=le,L.__webglTexture=$[le].texture}return Y}function Se(L,S,Y){let ne=3553;S.isDataArrayTexture&&(ne=35866),S.isData3DTexture&&(ne=32879);const $=Fe(L,S),le=S.source;if(t.activeTexture(33984+Y),t.bindTexture(ne,L.__webglTexture),le.version!==le.__currentVersion||$===!0){o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const xe=x(S)&&M(S.image)===!1;let A=b(S.image,xe,!1,u);A=pt(S,A);const Z=M(A)||a,re=r.convert(S.format,S.encoding);let oe=r.convert(S.type),P=v(S.internalFormat,re,oe,S.encoding,S.isVideoTexture);V(ne,S,Z);let se;const ae=S.mipmaps,he=a&&S.isVideoTexture!==!0,ue=le.__currentVersion===void 0||$===!0,me=T(S,A,Z);if(S.isDepthTexture)P=6402,a?S.type===Ui?P=36012:S.type===_r?P=33190:S.type===ys?P=35056:P=33189:S.type===Ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Tr&&P===6402&&S.type!==Sp&&S.type!==_r&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=_r,oe=r.convert(S.type)),S.format===Ds&&P===6402&&(P=34041,S.type!==ys&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ys,oe=r.convert(S.type))),ue&&(he?t.texStorage2D(3553,1,P,A.width,A.height):t.texImage2D(3553,0,P,A.width,A.height,0,re,oe,null));else if(S.isDataTexture)if(ae.length>0&&Z){he&&ue&&t.texStorage2D(3553,me,P,ae[0].width,ae[0].height);for(let ie=0,Te=ae.length;ie<Te;ie++)se=ae[ie],he?t.texSubImage2D(3553,ie,0,0,se.width,se.height,re,oe,se.data):t.texImage2D(3553,ie,P,se.width,se.height,0,re,oe,se.data);S.generateMipmaps=!1}else he?(ue&&t.texStorage2D(3553,me,P,A.width,A.height),t.texSubImage2D(3553,0,0,0,A.width,A.height,re,oe,A.data)):t.texImage2D(3553,0,P,A.width,A.height,0,re,oe,A.data);else if(S.isCompressedTexture){he&&ue&&t.texStorage2D(3553,me,P,ae[0].width,ae[0].height);for(let ie=0,Te=ae.length;ie<Te;ie++)se=ae[ie],S.format!==En?re!==null?he?t.compressedTexSubImage2D(3553,ie,0,0,se.width,se.height,re,se.data):t.compressedTexImage2D(3553,ie,P,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?t.texSubImage2D(3553,ie,0,0,se.width,se.height,re,oe,se.data):t.texImage2D(3553,ie,P,se.width,se.height,0,re,oe,se.data)}else if(S.isDataArrayTexture)he?(ue&&t.texStorage3D(35866,me,P,A.width,A.height,A.depth),t.texSubImage3D(35866,0,0,0,0,A.width,A.height,A.depth,re,oe,A.data)):t.texImage3D(35866,0,P,A.width,A.height,A.depth,0,re,oe,A.data);else if(S.isData3DTexture)he?(ue&&t.texStorage3D(32879,me,P,A.width,A.height,A.depth),t.texSubImage3D(32879,0,0,0,0,A.width,A.height,A.depth,re,oe,A.data)):t.texImage3D(32879,0,P,A.width,A.height,A.depth,0,re,oe,A.data);else if(S.isFramebufferTexture){if(ue)if(he)t.texStorage2D(3553,me,P,A.width,A.height);else{let ie=A.width,Te=A.height;for(let Ue=0;Ue<me;Ue++)t.texImage2D(3553,Ue,P,ie,Te,0,re,oe,null),ie>>=1,Te>>=1}}else if(ae.length>0&&Z){he&&ue&&t.texStorage2D(3553,me,P,ae[0].width,ae[0].height);for(let ie=0,Te=ae.length;ie<Te;ie++)se=ae[ie],he?t.texSubImage2D(3553,ie,0,0,re,oe,se):t.texImage2D(3553,ie,P,re,oe,se);S.generateMipmaps=!1}else he?(ue&&t.texStorage2D(3553,me,P,A.width,A.height),t.texSubImage2D(3553,0,0,0,re,oe,A)):t.texImage2D(3553,0,P,re,oe,A);w(S,Z)&&C(ne),le.__currentVersion=le.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function Re(L,S,Y){if(S.image.length!==6)return;const ne=Fe(L,S),$=S.source;if(t.activeTexture(33984+Y),t.bindTexture(34067,L.__webglTexture),$.version!==$.__currentVersion||ne===!0){o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const le=S.isCompressedTexture||S.image[0].isCompressedTexture,xe=S.image[0]&&S.image[0].isDataTexture,A=[];for(let ie=0;ie<6;ie++)!le&&!xe?A[ie]=b(S.image[ie],!1,!0,c):A[ie]=xe?S.image[ie].image:S.image[ie],A[ie]=pt(S,A[ie]);const Z=A[0],re=M(Z)||a,oe=r.convert(S.format,S.encoding),P=r.convert(S.type),se=v(S.internalFormat,oe,P,S.encoding),ae=a&&S.isVideoTexture!==!0,he=$.__currentVersion===void 0||ne===!0;let ue=T(S,Z,re);V(34067,S,re);let me;if(le){ae&&he&&t.texStorage2D(34067,ue,se,Z.width,Z.height);for(let ie=0;ie<6;ie++){me=A[ie].mipmaps;for(let Te=0;Te<me.length;Te++){const Ue=me[Te];S.format!==En?oe!==null?ae?t.compressedTexSubImage2D(34069+ie,Te,0,0,Ue.width,Ue.height,oe,Ue.data):t.compressedTexImage2D(34069+ie,Te,se,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?t.texSubImage2D(34069+ie,Te,0,0,Ue.width,Ue.height,oe,P,Ue.data):t.texImage2D(34069+ie,Te,se,Ue.width,Ue.height,0,oe,P,Ue.data)}}}else{me=S.mipmaps,ae&&he&&(me.length>0&&ue++,t.texStorage2D(34067,ue,se,A[0].width,A[0].height));for(let ie=0;ie<6;ie++)if(xe){ae?t.texSubImage2D(34069+ie,0,0,0,A[ie].width,A[ie].height,oe,P,A[ie].data):t.texImage2D(34069+ie,0,se,A[ie].width,A[ie].height,0,oe,P,A[ie].data);for(let Te=0;Te<me.length;Te++){const Ve=me[Te].image[ie].image;ae?t.texSubImage2D(34069+ie,Te+1,0,0,Ve.width,Ve.height,oe,P,Ve.data):t.texImage2D(34069+ie,Te+1,se,Ve.width,Ve.height,0,oe,P,Ve.data)}}else{ae?t.texSubImage2D(34069+ie,0,0,0,oe,P,A[ie]):t.texImage2D(34069+ie,0,se,oe,P,A[ie]);for(let Te=0;Te<me.length;Te++){const Ue=me[Te];ae?t.texSubImage2D(34069+ie,Te+1,0,0,oe,P,Ue.image[ie]):t.texImage2D(34069+ie,Te+1,se,oe,P,Ue.image[ie])}}}w(S,re)&&C(34067),$.__currentVersion=$.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function ce(L,S,Y,ne,$){const le=r.convert(Y.format,Y.encoding),xe=r.convert(Y.type),A=v(Y.internalFormat,le,xe,Y.encoding);n.get(S).__hasExternalTextures||($===32879||$===35866?t.texImage3D($,0,A,S.width,S.height,S.depth,0,le,xe,null):t.texImage2D($,0,A,S.width,S.height,0,le,xe,null)),t.bindFramebuffer(36160,L),Ce(S)?f.framebufferTexture2DMultisampleEXT(36160,ne,$,n.get(Y).__webglTexture,0,nt(S)):o.framebufferTexture2D(36160,ne,$,n.get(Y).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ne(L,S,Y){if(o.bindRenderbuffer(36161,L),S.depthBuffer&&!S.stencilBuffer){let ne=33189;if(Y||Ce(S)){const $=S.depthTexture;$&&$.isDepthTexture&&($.type===Ui?ne=36012:$.type===_r&&(ne=33190));const le=nt(S);Ce(S)?f.renderbufferStorageMultisampleEXT(36161,le,ne,S.width,S.height):o.renderbufferStorageMultisample(36161,le,ne,S.width,S.height)}else o.renderbufferStorage(36161,ne,S.width,S.height);o.framebufferRenderbuffer(36160,36096,36161,L)}else if(S.depthBuffer&&S.stencilBuffer){const ne=nt(S);Y&&Ce(S)===!1?o.renderbufferStorageMultisample(36161,ne,35056,S.width,S.height):Ce(S)?f.renderbufferStorageMultisampleEXT(36161,ne,35056,S.width,S.height):o.renderbufferStorage(36161,34041,S.width,S.height),o.framebufferRenderbuffer(36160,33306,36161,L)}else{const ne=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let $=0;$<ne.length;$++){const le=ne[$],xe=r.convert(le.format,le.encoding),A=r.convert(le.type),Z=v(le.internalFormat,xe,A,le.encoding),re=nt(S);Y&&Ce(S)===!1?o.renderbufferStorageMultisample(36161,re,Z,S.width,S.height):Ce(S)?f.renderbufferStorageMultisampleEXT(36161,re,Z,S.width,S.height):o.renderbufferStorage(36161,Z,S.width,S.height)}}o.bindRenderbuffer(36161,null)}function pe(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),R(S.depthTexture,0);const ne=n.get(S.depthTexture).__webglTexture,$=nt(S);if(S.depthTexture.format===Tr)Ce(S)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,$):o.framebufferTexture2D(36160,36096,3553,ne,0);else if(S.depthTexture.format===Ds)Ce(S)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,$):o.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function ye(L){const S=n.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");pe(S.__webglFramebuffer,L)}else if(Y){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]=o.createRenderbuffer(),Ne(S.__webglDepthbuffer[ne],L,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=o.createRenderbuffer(),Ne(S.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function je(L,S,Y){const ne=n.get(L);S!==void 0&&ce(ne.__webglFramebuffer,L,L.texture,36064,3553),Y!==void 0&&ye(L)}function tt(L){const S=L.texture,Y=n.get(L),ne=n.get(S);L.addEventListener("dispose",X),L.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=o.createTexture()),ne.__version=S.version,s.memory.textures++);const $=L.isWebGLCubeRenderTarget===!0,le=L.isWebGLMultipleRenderTargets===!0,xe=M(L)||a;if($){Y.__webglFramebuffer=[];for(let A=0;A<6;A++)Y.__webglFramebuffer[A]=o.createFramebuffer()}else{if(Y.__webglFramebuffer=o.createFramebuffer(),le)if(i.drawBuffers){const A=L.texture;for(let Z=0,re=A.length;Z<re;Z++){const oe=n.get(A[Z]);oe.__webglTexture===void 0&&(oe.__webglTexture=o.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&Ce(L)===!1){const A=le?S:[S];Y.__webglMultisampledFramebuffer=o.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer);for(let Z=0;Z<A.length;Z++){const re=A[Z];Y.__webglColorRenderbuffer[Z]=o.createRenderbuffer(),o.bindRenderbuffer(36161,Y.__webglColorRenderbuffer[Z]);const oe=r.convert(re.format,re.encoding),P=r.convert(re.type),se=v(re.internalFormat,oe,P,re.encoding),ae=nt(L);o.renderbufferStorageMultisample(36161,ae,se,L.width,L.height),o.framebufferRenderbuffer(36160,36064+Z,36161,Y.__webglColorRenderbuffer[Z])}o.bindRenderbuffer(36161,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=o.createRenderbuffer(),Ne(Y.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if($){t.bindTexture(34067,ne.__webglTexture),V(34067,S,xe);for(let A=0;A<6;A++)ce(Y.__webglFramebuffer[A],L,S,36064,34069+A);w(S,xe)&&C(34067),t.unbindTexture()}else if(le){const A=L.texture;for(let Z=0,re=A.length;Z<re;Z++){const oe=A[Z],P=n.get(oe);t.bindTexture(3553,P.__webglTexture),V(3553,oe,xe),ce(Y.__webglFramebuffer,L,oe,36064+Z,3553),w(oe,xe)&&C(3553)}t.unbindTexture()}else{let A=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?A=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(A,ne.__webglTexture),V(A,S,xe),ce(Y.__webglFramebuffer,L,S,36064,A),w(S,xe)&&C(A),t.unbindTexture()}L.depthBuffer&&ye(L)}function Ye(L){const S=M(L)||a,Y=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ne=0,$=Y.length;ne<$;ne++){const le=Y[ne];if(w(le,S)){const xe=L.isWebGLCubeRenderTarget?34067:3553,A=n.get(le).__webglTexture;t.bindTexture(xe,A),C(xe),t.unbindTexture()}}}function q(L){if(a&&L.samples>0&&Ce(L)===!1){const S=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],Y=L.width,ne=L.height;let $=16384;const le=[],xe=L.stencilBuffer?33306:36096,A=n.get(L),Z=L.isWebGLMultipleRenderTargets===!0;if(Z)for(let re=0;re<S.length;re++)t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+re,36161,null),t.bindFramebuffer(36160,A.__webglFramebuffer),o.framebufferTexture2D(36009,36064+re,3553,null,0);t.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,A.__webglFramebuffer);for(let re=0;re<S.length;re++){le.push(36064+re),L.depthBuffer&&le.push(xe);const oe=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(oe===!1&&(L.depthBuffer&&($|=256),L.stencilBuffer&&($|=1024)),Z&&o.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[re]),oe===!0&&(o.invalidateFramebuffer(36008,[xe]),o.invalidateFramebuffer(36009,[xe])),Z){const P=n.get(S[re]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,P,0)}o.blitFramebuffer(0,0,Y,ne,0,0,Y,ne,$,9728),d&&o.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Z)for(let re=0;re<S.length;re++){t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+re,36161,A.__webglColorRenderbuffer[re]);const oe=n.get(S[re]).__webglTexture;t.bindFramebuffer(36160,A.__webglFramebuffer),o.framebufferTexture2D(36009,36064+re,3553,oe,0)}t.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function nt(L){return Math.min(h,L.samples)}function Ce(L){const S=n.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function dt(L){const S=s.render.frame;g.get(L)!==S&&(g.set(L,S),L.update())}function pt(L,S){const Y=L.encoding,ne=L.format,$=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===zc||Y!==Ir&&(Y===Qe?a===!1?e.has("EXT_sRGB")===!0&&ne===En?(L.format=zc,L.minFilter=rn,L.generateMipmaps=!1):S=Cp.sRGBToLinear(S):(ne!==En||$!==Dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Y)),S}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=R,this.setTexture2DArray=ee,this.setTexture3D=te,this.setTextureCube=Q,this.rebindTextures=je,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Ce}function DM(o,e,t){const n=t.isWebGL2;function i(r,s){let a;if(r===Dr)return 5121;if(r===f_)return 32819;if(r===d_)return 32820;if(r===c_)return 5120;if(r===u_)return 5122;if(r===Sp)return 5123;if(r===h_)return 5124;if(r===_r)return 5125;if(r===Ui)return 5126;if(r===Da)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===p_)return 6406;if(r===En)return 6408;if(r===g_)return 6409;if(r===__)return 6410;if(r===Tr)return 6402;if(r===Ds)return 34041;if(r===x_)return 6403;if(r===m_)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===zc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===v_)return 36244;if(r===y_)return 33319;if(r===M_)return 33320;if(r===b_)return 36249;if(r===Rl||r===Pl||r===Dl||r===Il)if(s===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Rl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Dl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Il)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Rl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Dl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Il)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xh||r===vh||r===yh||r===Mh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===xh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===vh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Mh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===S_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===bh||r===Sh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===bh)return s===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Sh)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wh||r===Th||r===Eh||r===Ah||r===Ch||r===Lh||r===Rh||r===Ph||r===Dh||r===Ih||r===Fh||r===Nh||r===Oh||r===kh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===wh)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Th)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Eh)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ah)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ch)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Lh)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Rh)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ph)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Dh)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ih)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fh)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Nh)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Oh)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kh)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===zh)return s===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ys?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class IM extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vr extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FM={type:"move"};class oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(FM))),c&&e.hand){s=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const y=new vr;y.matrixAutoUpdate=!1,y.visible=!1,c.joints[p.jointName]=y,c.add(y)}const _=c.joints[p.jointName];m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}}class NM extends Jt{constructor(e,t,n,i,r,s,a,l,c,u){if(u=u!==void 0?u:Tr,u!==Tr&&u!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Tr&&(n=_r),n===void 0&&u===Ds&&(n=ys),super(null,i,r,s,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1}}class OM extends kr{constructor(e,t){super();const n=this;let i=null,r=1,s=null,a="local-floor",l=null,c=null,u=null,h=null,f=null,d=null;const g=t.getContextAttributes();let p=null,m=null;const _=[],y=new Map,b=new Kt;b.layers.enable(1),b.viewport=new at;const M=new Kt;M.layers.enable(2),M.viewport=new at;const x=[b,M],w=new IM;w.layers.enable(1),w.layers.enable(2);let C=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let R=_[W];return R===void 0&&(R=new oc,_[W]=R),R.getTargetRaySpace()},this.getControllerGrip=function(W){let R=_[W];return R===void 0&&(R=new oc,_[W]=R),R.getGripSpace()},this.getHand=function(W){let R=_[W];return R===void 0&&(R=new oc,_[W]=R),R.getHandSpace()};function T(W){const R=y.get(W.inputSource);R!==void 0&&R.dispatchEvent({type:W.type,data:W.inputSource})}function I(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",N),y.forEach(function(W,R){W!==void 0&&W.disconnect(R)}),y.clear(),C=null,v=null,e.setRenderTarget(p),f=null,h=null,u=null,i=null,m=null,H.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",I),i.addEventListener("inputsourceschange",N),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const R={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,R),i.updateRenderState({baseLayer:f}),m=new Xi(f.framebufferWidth,f.framebufferHeight,{format:En,type:Dr,encoding:e.outputEncoding})}else{let R=null,ee=null,te=null;g.depth&&(te=g.stencil?35056:33190,R=g.stencil?Ds:Tr,ee=g.stencil?ys:_r);const Q={colorFormat:e.outputEncoding===Qe?35907:32856,depthFormat:te,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(Q),i.updateRenderState({layers:[h]}),m=new Xi(h.textureWidth,h.textureHeight,{format:En,type:Dr,depthTexture:new NM(h.textureWidth,h.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,R),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const fe=e.properties.get(m);fe.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,s=await i.requestReferenceSpace(a),H.setContext(i),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(W){const R=i.inputSources;for(let ee=0;ee<R.length;ee++){const te=R[ee].handedness==="right"?1:0;y.set(R[ee],_[te])}for(let ee=0;ee<W.removed.length;ee++){const te=W.removed[ee],Q=y.get(te);Q&&(Q.dispatchEvent({type:"disconnected",data:te}),y.delete(te))}for(let ee=0;ee<W.added.length;ee++){const te=W.added[ee],Q=y.get(te);Q&&Q.dispatchEvent({type:"connected",data:te})}}const X=new F,j=new F;function D(W,R,ee){X.setFromMatrixPosition(R.matrixWorld),j.setFromMatrixPosition(ee.matrixWorld);const te=X.distanceTo(j),Q=R.projectionMatrix.elements,fe=ee.projectionMatrix.elements,ve=Q[14]/(Q[10]-1),V=Q[14]/(Q[10]+1),Fe=(Q[9]+1)/Q[5],Se=(Q[9]-1)/Q[5],Re=(Q[8]-1)/Q[0],ce=(fe[8]+1)/fe[0],Ne=ve*Re,pe=ve*ce,ye=te/(-Re+ce),je=ye*-Re;R.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(je),W.translateZ(ye),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const tt=ve+ye,Ye=V+ye,q=Ne-je,nt=pe+(te-je),Ce=Fe*V/Ye*tt,dt=Se*V/Ye*tt;W.projectionMatrix.makePerspective(q,nt,Ce,dt,tt,Ye)}function U(W,R){R===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(R.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;w.near=M.near=b.near=W.near,w.far=M.far=b.far=W.far,(C!==w.near||v!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),C=w.near,v=w.far);const R=W.parent,ee=w.cameras;U(w,R);for(let Q=0;Q<ee.length;Q++)U(ee[Q],R);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),W.position.copy(w.position),W.quaternion.copy(w.quaternion),W.scale.copy(w.scale),W.matrix.copy(w.matrix),W.matrixWorld.copy(w.matrixWorld);const te=W.children;for(let Q=0,fe=te.length;Q<fe;Q++)te[Q].updateMatrixWorld(!0);ee.length===2?D(w,b,M):w.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(W){h!==null&&(h.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)};let k=null;function B(W,R){if(c=R.getViewerPose(l||s),d=R,c!==null){const te=c.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let Q=!1;te.length!==w.cameras.length&&(w.cameras.length=0,Q=!0);for(let fe=0;fe<te.length;fe++){const ve=te[fe];let V=null;if(f!==null)V=f.getViewport(ve);else{const Se=u.getViewSubImage(h,ve);V=Se.viewport,fe===0&&(e.setRenderTargetTextures(m,Se.colorTexture,h.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(m))}let Fe=x[fe];Fe===void 0&&(Fe=new Kt,Fe.layers.enable(fe),Fe.viewport=new at,x[fe]=Fe),Fe.matrix.fromArray(ve.transform.matrix),Fe.projectionMatrix.fromArray(ve.projectionMatrix),Fe.viewport.set(V.x,V.y,V.width,V.height),fe===0&&w.matrix.copy(Fe.matrix),Q===!0&&w.cameras.push(Fe)}}const ee=i.inputSources;for(let te=0;te<_.length;te++){const Q=ee[te],fe=y.get(Q);fe!==void 0&&fe.update(Q,R,l||s)}k&&k(W,R),d=null}const H=new Op;H.setAnimationLoop(B),this.setAnimationLoop=function(W){k=W},this.dispose=function(){}}}function kM(o,e){function t(p,m){p.fogColor.value.copy(m.color),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,_,y,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),u(p,m)):m.isMeshPhongMaterial?(i(p,m),c(p,m)):m.isMeshStandardMaterial?(i(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,b)):m.isMeshMatcapMaterial?(i(p,m),d(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),g(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&s(p,m)):m.isPointsMaterial?a(p,m,_,y):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===Nn&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===Nn&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const M=o.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*M}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let y;m.map?y=m.map:m.specularMap?y=m.specularMap:m.displacementMap?y=m.displacementMap:m.normalMap?y=m.normalMap:m.bumpMap?y=m.bumpMap:m.roughnessMap?y=m.roughnessMap:m.metalnessMap?y=m.metalnessMap:m.alphaMap?y=m.alphaMap:m.emissiveMap?y=m.emissiveMap:m.clearcoatMap?y=m.clearcoatMap:m.clearcoatNormalMap?y=m.clearcoatNormalMap:m.clearcoatRoughnessMap?y=m.clearcoatRoughnessMap:m.iridescenceMap?y=m.iridescenceMap:m.iridescenceThicknessMap?y=m.iridescenceThicknessMap:m.specularIntensityMap?y=m.specularIntensityMap:m.specularColorMap?y=m.specularColorMap:m.transmissionMap?y=m.transmissionMap:m.thicknessMap?y=m.thicknessMap:m.sheenColorMap?y=m.sheenColorMap:m.sheenRoughnessMap&&(y=m.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let b;m.aoMap?b=m.aoMap:m.lightMap&&(b=m.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uv2Transform.value.copy(b.matrix))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function s(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,_,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=y*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b;m.map?b=m.map:m.alphaMap&&(b=m.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Nn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function d(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function zM(){const o=Na("canvas");return o.style.display="block",o}function Wp(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:zM(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,s=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,a=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ir,this.physicallyCorrectLights=!1,this.toneMapping=xi,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let m=!1,_=0,y=0,b=null,M=-1,x=null;const w=new at,C=new at;let v=null,T=e.width,I=e.height,N=1,X=null,j=null;const D=new at(0,0,T,I),U=new at(0,0,T,I);let k=!1;const B=new pu;let H=!1,W=!1,R=null;const ee=new Je,te=new Ie,Q=new F,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return b===null?N:1}let V=t;function Fe(E,O){for(let G=0;G<E.length;G++){const z=E[G],K=e.getContext(z,O);if(K!==null)return K}return null}try{const E={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:s,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hu}`),e.addEventListener("webglcontextlost",P,!1),e.addEventListener("webglcontextrestored",se,!1),e.addEventListener("webglcontextcreationerror",ae,!1),V===null){const O=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&O.shift(),V=Fe(O,E),V===null)throw Fe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Se,Re,ce,Ne,pe,ye,je,tt,Ye,q,nt,Ce,dt,pt,L,S,Y,ne,$,le,xe,A,Z;function re(){Se=new $v(V),Re=new Xv(V,Se,o),Se.init(Re),A=new DM(V,Se,Re),ce=new RM(V,Se,Re),Ne=new ey(V),pe=new xM,ye=new PM(V,Se,ce,pe,Re,A,Ne),je=new jv(p),tt=new Zv(p),Ye=new f0(V,Re),Z=new Hv(V,Se,Ye,Re),q=new Jv(V,Ye,Ne,Z),nt=new ry(V,q,Ye,Ne),$=new iy(V,Re,ye),S=new qv(pe),Ce=new _M(p,je,tt,Se,Re,Z,S),dt=new kM(p,pe),pt=new yM,L=new EM(Se,Re),ne=new Gv(p,je,ce,nt,u,s),Y=new LM(p,nt,Re),le=new Wv(V,Se,Ne,Re),xe=new Qv(V,Se,Ne,Re),Ne.programs=Ce.programs,p.capabilities=Re,p.extensions=Se,p.properties=pe,p.renderLists=pt,p.shadowMap=Y,p.state=ce,p.info=Ne}re();const oe=new OM(p,V);this.xr=oe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const E=Se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(E){E!==void 0&&(N=E,this.setSize(T,I,!1))},this.getSize=function(E){return E.set(T,I)},this.setSize=function(E,O,G){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=E,I=O,e.width=Math.floor(E*N),e.height=Math.floor(O*N),G!==!1&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(T*N,I*N).floor()},this.setDrawingBufferSize=function(E,O,G){T=E,I=O,N=G,e.width=Math.floor(E*G),e.height=Math.floor(O*G),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(D)},this.setViewport=function(E,O,G,z){E.isVector4?D.set(E.x,E.y,E.z,E.w):D.set(E,O,G,z),ce.viewport(w.copy(D).multiplyScalar(N).floor())},this.getScissor=function(E){return E.copy(U)},this.setScissor=function(E,O,G,z){E.isVector4?U.set(E.x,E.y,E.z,E.w):U.set(E,O,G,z),ce.scissor(C.copy(U).multiplyScalar(N).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(E){ce.setScissorTest(k=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){j=E},this.getClearColor=function(E){return E.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(E=!0,O=!0,G=!0){let z=0;E&&(z|=16384),O&&(z|=256),G&&(z|=1024),V.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",P,!1),e.removeEventListener("webglcontextrestored",se,!1),e.removeEventListener("webglcontextcreationerror",ae,!1),pt.dispose(),L.dispose(),pe.dispose(),je.dispose(),tt.dispose(),nt.dispose(),Z.dispose(),Ce.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Ue),oe.removeEventListener("sessionend",Ve),R&&(R.dispose(),R=null),ct.stop()};function P(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const E=Ne.autoReset,O=Y.enabled,G=Y.autoUpdate,z=Y.needsUpdate,K=Y.type;re(),Ne.autoReset=E,Y.enabled=O,Y.autoUpdate=G,Y.needsUpdate=z,Y.type=K}function ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function he(E){const O=E.target;O.removeEventListener("dispose",he),ue(O)}function ue(E){me(E),pe.remove(E)}function me(E){const O=pe.get(E).programs;O!==void 0&&(O.forEach(function(G){Ce.releaseProgram(G)}),E.isShaderMaterial&&Ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,G,z,K,we){O===null&&(O=fe);const _e=K.isMesh&&K.matrixWorld.determinant()<0,Me=Pe(E,O,G,z,K);ce.setMaterial(z,_e);let be=G.index;const We=G.attributes.position;if(be===null){if(We===void 0||We.count===0)return}else if(be.count===0)return;let ze=1;z.wireframe===!0&&(be=q.getWireframeAttribute(G),ze=2),Z.setup(K,z,Me,G,be);let Le,ke=le;be!==null&&(Le=Ye.get(be),ke=xe,ke.setIndex(Le));const Pt=be!==null?be.count:We.count,Vn=G.drawRange.start*ze,ii=G.drawRange.count*ze,kt=we!==null?we.start*ze:0,$e=we!==null?we.count*ze:1/0,Br=Math.max(Vn,kt),_t=Math.min(Pt,Vn+ii,kt+$e)-1,Gn=Math.max(0,_t-Br+1);if(Gn!==0){if(K.isMesh)z.wireframe===!0?(ce.setLineWidth(z.wireframeLinewidth*ve()),ke.setMode(1)):ke.setMode(4);else if(K.isLine){let wi=z.linewidth;wi===void 0&&(wi=1),ce.setLineWidth(wi*ve()),K.isLineSegments?ke.setMode(1):K.isLineLoop?ke.setMode(2):ke.setMode(3)}else K.isPoints?ke.setMode(0):K.isSprite&&ke.setMode(4);if(K.isInstancedMesh)ke.renderInstances(Br,Gn,K.count);else if(G.isInstancedBufferGeometry){const wi=Math.min(G.instanceCount,G._maxInstanceCount);ke.renderInstances(Br,Gn,wi)}else ke.render(Br,Gn)}},this.compile=function(E,O){f=L.get(E),f.init(),g.push(f),E.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights(p.physicallyCorrectLights),E.traverse(function(G){const z=G.material;if(z)if(Array.isArray(z))for(let K=0;K<z.length;K++){const we=z[K];ge(we,E,G)}else ge(z,E,G)}),g.pop(),f=null};let ie=null;function Te(E){ie&&ie(E)}function Ue(){ct.stop()}function Ve(){ct.start()}const ct=new Op;ct.setAnimationLoop(Te),typeof self!="undefined"&&ct.setContext(self),this.setAnimationLoop=function(E){ie=E,oe.setAnimationLoop(E),E===null?ct.stop():ct.start()},oe.addEventListener("sessionstart",Ue),oe.addEventListener("sessionend",Ve),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;E.autoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(O),O=oe.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,O,b),f=L.get(E,g.length),f.init(),g.push(f),ee.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),B.setFromProjectionMatrix(ee),W=this.localClippingEnabled,H=S.init(this.clippingPlanes,W,O),h=pt.get(E,d.length),h.init(),d.push(h),gt(E,O,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(X,j),H===!0&&S.beginShadows();const G=f.state.shadowsArray;if(Y.render(G,E,O),H===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(h,E),f.setupLights(p.physicallyCorrectLights),O.isArrayCamera){const z=O.cameras;for(let K=0,we=z.length;K<we;K++){const _e=z[K];Si(h,E,_e,_e.viewport)}}else Si(h,E,O);b!==null&&(ye.updateMultisampleRenderTarget(b),ye.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(p,E,O),Z.resetDefaultState(),M=-1,x=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function gt(E,O,G,z){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||B.intersectsSprite(E)){z&&Q.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ee);const _e=nt.update(E),Me=E.material;Me.visible&&h.push(E,_e,Me,G,Q.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Ne.render.frame&&(E.skeleton.update(),E.skeleton.frame=Ne.render.frame),!E.frustumCulled||B.intersectsObject(E))){z&&Q.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ee);const _e=nt.update(E),Me=E.material;if(Array.isArray(Me)){const be=_e.groups;for(let We=0,ze=be.length;We<ze;We++){const Le=be[We],ke=Me[Le.materialIndex];ke&&ke.visible&&h.push(E,_e,ke,G,Q.z,Le)}}else Me.visible&&h.push(E,_e,Me,G,Q.z,null)}}const we=E.children;for(let _e=0,Me=we.length;_e<Me;_e++)gt(we[_e],O,G,z)}function Si(E,O,G,z){const K=E.opaque,we=E.transmissive,_e=E.transparent;f.setupLightsView(G),we.length>0&&Ji(K,O,G),z&&ce.viewport(w.copy(z)),K.length>0&&Be(K,O,G),we.length>0&&Be(we,O,G),_e.length>0&&Be(_e,O,G),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Ji(E,O,G){const z=Re.isWebGL2;R===null&&(R=new Xi(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Da:Dr,minFilter:zs,samples:z&&r===!0?4:0})),p.getDrawingBufferSize(te),z?R.setSize(te.x,te.y):R.setSize(tl(te.x),tl(te.y));const K=p.getRenderTarget();p.setRenderTarget(R),p.clear();const we=p.toneMapping;p.toneMapping=xi,Be(E,O,G),p.toneMapping=we,ye.updateMultisampleRenderTarget(R),ye.updateRenderTargetMipmap(R),p.setRenderTarget(K)}function Be(E,O,G){const z=O.isScene===!0?O.overrideMaterial:null;for(let K=0,we=E.length;K<we;K++){const _e=E[K],Me=_e.object,be=_e.geometry,We=z===null?_e.material:z,ze=_e.group;Me.layers.test(G.layers)&&J(Me,O,G,be,We,ze)}}function J(E,O,G,z,K,we){E.onBeforeRender(p,O,G,z,K,we),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(p,O,G,z,E,we),K.transparent===!0&&K.side===Pr?(K.side=Nn,K.needsUpdate=!0,p.renderBufferDirect(G,O,z,K,E,we),K.side=Cs,K.needsUpdate=!0,p.renderBufferDirect(G,O,z,K,E,we),K.side=Pr):p.renderBufferDirect(G,O,z,K,E,we),E.onAfterRender(p,O,G,z,K,we)}function ge(E,O,G){O.isScene!==!0&&(O=fe);const z=pe.get(E),K=f.state.lights,we=f.state.shadowsArray,_e=K.state.version,Me=Ce.getParameters(E,K.state,we,O,G),be=Ce.getProgramCacheKey(Me);let We=z.programs;z.environment=E.isMeshStandardMaterial?O.environment:null,z.fog=O.fog,z.envMap=(E.isMeshStandardMaterial?tt:je).get(E.envMap||z.environment),We===void 0&&(E.addEventListener("dispose",he),We=new Map,z.programs=We);let ze=We.get(be);if(ze!==void 0){if(z.currentProgram===ze&&z.lightsStateVersion===_e)return Ae(E,Me),ze}else Me.uniforms=Ce.getUniforms(E),E.onBuild(G,Me,p),E.onBeforeCompile(Me,p),ze=Ce.acquireProgram(Me,be),We.set(be,ze),z.uniforms=Me.uniforms;const Le=z.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Le.clippingPlanes=S.uniform),Ae(E,Me),z.needsLights=Oe(E),z.lightsStateVersion=_e,z.needsLights&&(Le.ambientLightColor.value=K.state.ambient,Le.lightProbe.value=K.state.probe,Le.directionalLights.value=K.state.directional,Le.directionalLightShadows.value=K.state.directionalShadow,Le.spotLights.value=K.state.spot,Le.spotLightShadows.value=K.state.spotShadow,Le.rectAreaLights.value=K.state.rectArea,Le.ltc_1.value=K.state.rectAreaLTC1,Le.ltc_2.value=K.state.rectAreaLTC2,Le.pointLights.value=K.state.point,Le.pointLightShadows.value=K.state.pointShadow,Le.hemisphereLights.value=K.state.hemi,Le.directionalShadowMap.value=K.state.directionalShadowMap,Le.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Le.spotShadowMap.value=K.state.spotShadowMap,Le.spotShadowMatrix.value=K.state.spotShadowMatrix,Le.pointShadowMap.value=K.state.pointShadowMap,Le.pointShadowMatrix.value=K.state.pointShadowMatrix);const ke=ze.getUniforms(),Pt=Bo.seqWithValue(ke.seq,Le);return z.currentProgram=ze,z.uniformsList=Pt,ze}function Ae(E,O){const G=pe.get(E);G.outputEncoding=O.outputEncoding,G.instancing=O.instancing,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Pe(E,O,G,z,K){O.isScene!==!0&&(O=fe),ye.resetTextureUnits();const we=O.fog,_e=z.isMeshStandardMaterial?O.environment:null,Me=b===null?p.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Ir,be=(z.isMeshStandardMaterial?tt:je).get(z.envMap||_e),We=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ze=!!z.normalMap&&!!G.attributes.tangent,Le=!!G.morphAttributes.position,ke=!!G.morphAttributes.normal,Pt=!!G.morphAttributes.color,Vn=z.toneMapped?p.toneMapping:xi,ii=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,kt=ii!==void 0?ii.length:0,$e=pe.get(z),Br=f.state.lights;if(H===!0&&(W===!0||E!==x)){const Hn=E===x&&z.id===M;S.setState(z,E,Hn)}let _t=!1;z.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Br.state.version||$e.outputEncoding!==Me||K.isInstancedMesh&&$e.instancing===!1||!K.isInstancedMesh&&$e.instancing===!0||K.isSkinnedMesh&&$e.skinning===!1||!K.isSkinnedMesh&&$e.skinning===!0||$e.envMap!==be||z.fog===!0&&$e.fog!==we||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==S.numPlanes||$e.numIntersection!==S.numIntersection)||$e.vertexAlphas!==We||$e.vertexTangents!==ze||$e.morphTargets!==Le||$e.morphNormals!==ke||$e.morphColors!==Pt||$e.toneMapping!==Vn||Re.isWebGL2===!0&&$e.morphTargetsCount!==kt)&&(_t=!0):(_t=!0,$e.__version=z.version);let Gn=$e.currentProgram;_t===!0&&(Gn=ge(z,O,K));let wi=!1,Ws=!1,pl=!1;const Ht=Gn.getUniforms(),Xs=$e.uniforms;if(ce.useProgram(Gn.program)&&(wi=!0,Ws=!0,pl=!0),z.id!==M&&(M=z.id,Ws=!0),wi||x!==E){if(Ht.setValue(V,"projectionMatrix",E.projectionMatrix),Re.logarithmicDepthBuffer&&Ht.setValue(V,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),x!==E&&(x=E,Ws=!0,pl=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const Hn=Ht.map.cameraPosition;Hn!==void 0&&Hn.setValue(V,Q.setFromMatrixPosition(E.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ht.setValue(V,"isOrthographic",E.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||K.isSkinnedMesh)&&Ht.setValue(V,"viewMatrix",E.matrixWorldInverse)}if(K.isSkinnedMesh){Ht.setOptional(V,K,"bindMatrix"),Ht.setOptional(V,K,"bindMatrixInverse");const Hn=K.skeleton;Hn&&(Re.floatVertexTextures?(Hn.boneTexture===null&&Hn.computeBoneTexture(),Ht.setValue(V,"boneTexture",Hn.boneTexture,ye),Ht.setValue(V,"boneTextureSize",Hn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ml=G.morphAttributes;return(ml.position!==void 0||ml.normal!==void 0||ml.color!==void 0&&Re.isWebGL2===!0)&&$.update(K,G,z,Gn),(Ws||$e.receiveShadow!==K.receiveShadow)&&($e.receiveShadow=K.receiveShadow,Ht.setValue(V,"receiveShadow",K.receiveShadow)),Ws&&(Ht.setValue(V,"toneMappingExposure",p.toneMappingExposure),$e.needsLights&&St(Xs,pl),we&&z.fog===!0&&dt.refreshFogUniforms(Xs,we),dt.refreshMaterialUniforms(Xs,z,N,I,R),Bo.upload(V,$e.uniformsList,Xs,ye)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Bo.upload(V,$e.uniformsList,Xs,ye),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ht.setValue(V,"center",K.center),Ht.setValue(V,"modelViewMatrix",K.modelViewMatrix),Ht.setValue(V,"normalMatrix",K.normalMatrix),Ht.setValue(V,"modelMatrix",K.matrixWorld),Gn}function St(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Oe(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,O,G){pe.get(E.texture).__webglTexture=O,pe.get(E.depthTexture).__webglTexture=G;const z=pe.get(E);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=G===void 0,z.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,O){const G=pe.get(E);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,G=0){b=E,_=O,y=G;let z=!0;if(E){const be=pe.get(E);be.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),z=!1):be.__webglFramebuffer===void 0?ye.setupRenderTarget(E):be.__hasExternalTextures&&ye.rebindTextures(E,pe.get(E.texture).__webglTexture,pe.get(E.depthTexture).__webglTexture)}let K=null,we=!1,_e=!1;if(E){const be=E.texture;(be.isData3DTexture||be.isDataArrayTexture)&&(_e=!0);const We=pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(K=We[O],we=!0):Re.isWebGL2&&E.samples>0&&ye.useMultisampledRTT(E)===!1?K=pe.get(E).__webglMultisampledFramebuffer:K=We,w.copy(E.viewport),C.copy(E.scissor),v=E.scissorTest}else w.copy(D).multiplyScalar(N).floor(),C.copy(U).multiplyScalar(N).floor(),v=k;if(ce.bindFramebuffer(36160,K)&&Re.drawBuffers&&z&&ce.drawBuffers(E,K),ce.viewport(w),ce.scissor(C),ce.setScissorTest(v),we){const be=pe.get(E.texture);V.framebufferTexture2D(36160,36064,34069+O,be.__webglTexture,G)}else if(_e){const be=pe.get(E.texture),We=O||0;V.framebufferTextureLayer(36160,36064,be.__webglTexture,G||0,We)}M=-1},this.readRenderTargetPixels=function(E,O,G,z,K,we,_e){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){ce.bindFramebuffer(36160,Me);try{const be=E.texture,We=be.format,ze=be.type;if(We!==En&&A.convert(We)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=ze===Da&&(Se.has("EXT_color_buffer_half_float")||Re.isWebGL2&&Se.has("EXT_color_buffer_float"));if(ze!==Dr&&A.convert(ze)!==V.getParameter(35738)&&!(ze===Ui&&(Re.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-z&&G>=0&&G<=E.height-K&&V.readPixels(O,G,z,K,A.convert(We),A.convert(ze),we)}finally{const be=b!==null?pe.get(b).__webglFramebuffer:null;ce.bindFramebuffer(36160,be)}}},this.copyFramebufferToTexture=function(E,O,G=0){const z=Math.pow(2,-G),K=Math.floor(O.image.width*z),we=Math.floor(O.image.height*z);ye.setTexture2D(O,0),V.copyTexSubImage2D(3553,G,0,0,E.x,E.y,K,we),ce.unbindTexture()},this.copyTextureToTexture=function(E,O,G,z=0){const K=O.image.width,we=O.image.height,_e=A.convert(G.format),Me=A.convert(G.type);ye.setTexture2D(G,0),V.pixelStorei(37440,G.flipY),V.pixelStorei(37441,G.premultiplyAlpha),V.pixelStorei(3317,G.unpackAlignment),O.isDataTexture?V.texSubImage2D(3553,z,E.x,E.y,K,we,_e,Me,O.image.data):O.isCompressedTexture?V.compressedTexSubImage2D(3553,z,E.x,E.y,O.mipmaps[0].width,O.mipmaps[0].height,_e,O.mipmaps[0].data):V.texSubImage2D(3553,z,E.x,E.y,_e,Me,O.image),z===0&&G.generateMipmaps&&V.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(E,O,G,z,K=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=E.max.x-E.min.x+1,_e=E.max.y-E.min.y+1,Me=E.max.z-E.min.z+1,be=A.convert(z.format),We=A.convert(z.type);let ze;if(z.isData3DTexture)ye.setTexture3D(z,0),ze=32879;else if(z.isDataArrayTexture)ye.setTexture2DArray(z,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,z.flipY),V.pixelStorei(37441,z.premultiplyAlpha),V.pixelStorei(3317,z.unpackAlignment);const Le=V.getParameter(3314),ke=V.getParameter(32878),Pt=V.getParameter(3316),Vn=V.getParameter(3315),ii=V.getParameter(32877),kt=G.isCompressedTexture?G.mipmaps[0]:G.image;V.pixelStorei(3314,kt.width),V.pixelStorei(32878,kt.height),V.pixelStorei(3316,E.min.x),V.pixelStorei(3315,E.min.y),V.pixelStorei(32877,E.min.z),G.isDataTexture||G.isData3DTexture?V.texSubImage3D(ze,K,O.x,O.y,O.z,we,_e,Me,be,We,kt.data):G.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(ze,K,O.x,O.y,O.z,we,_e,Me,be,kt.data)):V.texSubImage3D(ze,K,O.x,O.y,O.z,we,_e,Me,be,We,kt),V.pixelStorei(3314,Le),V.pixelStorei(32878,ke),V.pixelStorei(3316,Pt),V.pixelStorei(3315,Vn),V.pixelStorei(32877,ii),K===0&&z.generateMipmaps&&V.generateMipmap(ze),ce.unbindTexture()},this.initTexture=function(E){ye.setTexture2D(E,0),ce.unbindTexture()},this.resetState=function(){_=0,y=0,b=null,ce.reset(),Z.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class UM extends Wp{}UM.prototype.isWebGL1Renderer=!0;class BM extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class VM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=kc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new F;class xu{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class GM extends Mt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wf=new F,Tf=new at,Ef=new at,HM=new F,Af=new Je;class WM extends Qn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Je,this.bindMatrixInverse=new Je}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Tf.fromBufferAttribute(i.attributes.skinIndex,e),Ef.fromBufferAttribute(i.attributes.skinWeight,e),wf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=Ef.getComponent(r);if(s!==0){const a=Tf.getComponent(r);Af.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(HM.copy(wf).applyMatrix4(Af),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Xp extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class XM extends Jt{constructor(e=null,t=1,n=1,i,r,s,a,l,c=Nt,u=Nt,h,f){super(null,s,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cf=new Je,qM=new Je;class vu{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const a=e[r]?e[r].matrixWorld:qM;Cf.multiplyMatrices(a,t[r]),Cf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new vu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Tp(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new XM(t,e,e,En,Ui);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new Xp),this.bones.push(s),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class cl extends Mt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lf=new F,Rf=new F,Pf=new Je,lc=new du,To=new Bs;class yu extends bt{constructor(e=new ti,t=new cl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Lf.fromBufferAttribute(t,i-1),Rf.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Lf.distanceTo(Rf);e.setAttribute("lineDistance",new vi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(i),To.radius+=r,e.ray.intersectsSphere(To)===!1)return;Pf.copy(i).invert(),lc.copy(e.ray).applyMatrix4(Pf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new F,u=new F,h=new F,f=new F,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,s.start),y=Math.min(g.count,s.start+s.count);for(let b=_,M=y-1;b<M;b+=d){const x=g.getX(b),w=g.getX(b+1);if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,w),lc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(f);v<e.near||v>e.far||t.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,s.start),y=Math.min(m.count,s.start+s.count);for(let b=_,M=y-1;b<M;b+=d){if(c.fromBufferAttribute(m,b),u.fromBufferAttribute(m,b+1),lc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Df=new F,If=new F;class jM extends yu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Df.fromBufferAttribute(t,i),If.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Df.distanceTo(If);e.setAttribute("lineDistance",new vi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class YM extends yu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Mu extends Mt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ff=new Je,Vc=new du,Eo=new Bs,Ao=new F;class KM extends bt{constructor(e=new ti,t=new Mu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(i),Eo.radius+=r,e.ray.intersectsSphere(Eo)===!1)return;Ff.copy(i).invert(),Vc.copy(e.ray).applyMatrix4(Ff);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let g=f,p=d;g<p;g++){const m=c.getX(g);Ao.fromBufferAttribute(h,m),Nf(Ao,m,l,i,e,t,this)}}else{const f=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let g=f,p=d;g<p;g++)Ao.fromBufferAttribute(h,g),Nf(Ao,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Nf(o,e,t,n,i,r,s){const a=Vc.distanceSqToPoint(o);if(a<t){const l=new F;Vc.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:s})}}new F;new F;new F;new F;new $n;class ZM extends Mt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ee(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class $M extends bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ga extends Mt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $i extends Ga{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class JM extends Mt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ee(16777215),this.specular=new Ee(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class QM extends Mt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ee(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class eb extends Mt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class tb extends Mt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class nb extends Mt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ee(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Or,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ib extends cl{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const rb={ShadowMaterial:ZM,SpriteMaterial:GM,RawShaderMaterial:$M,ShaderMaterial:bi,PointsMaterial:Mu,MeshPhysicalMaterial:$i,MeshStandardMaterial:Ga,MeshPhongMaterial:JM,MeshToonMaterial:QM,MeshNormalMaterial:eb,MeshLambertMaterial:tb,MeshDepthMaterial:Gp,MeshDistanceMaterial:Hp,MeshBasicMaterial:Bi,MeshMatcapMaterial:nb,LineDashedMaterial:ib,LineBasicMaterial:cl,Material:Mt};Mt.fromType=function(o){return new rb[o]};const ot={arraySlice:function(o,e,t){return ot.isTypedArray(o)?new o.constructor(o.subarray(e,t!==void 0?t:o.length)):o.slice(e,t)},convertArray:function(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)},isTypedArray:function(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)},getKeyframeOrder:function(o){function e(i,r){return o[i]-o[r]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(o,e,t){const n=o.length,i=new o.constructor(n);for(let r=0,s=0;s!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[s++]=o[a+l]}return i},flattenJSON:function(o,e,t,n){let i=1,r=o[0];for(;r!==void 0&&r[n]===void 0;)r=o[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(e.push(r.time),t.push.apply(t,s)),r=o[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=o[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(e.push(r.time),t.push(s)),r=o[i++];while(r!==void 0)},subclip:function(o,e,t,n,i=30){const r=o.clone();r.name=e;const s=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],u=c.getValueSize(),h=[],f=[];for(let d=0;d<c.times.length;++d){const g=c.times[d]*i;if(!(g<t||g>=n)){h.push(c.times[d]);for(let p=0;p<u;++p)f.push(c.values[d*u+p])}}h.length!==0&&(c.times=ot.convertArray(h,c.times.constructor),c.values=ot.convertArray(f,c.values.constructor),s.push(c))}r.tracks=s;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r},makeClipAdditive:function(o,e=0,t=o,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let s=0;s<i;++s){const a=t.tracks[s],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=o.tracks.find(function(_){return _.name===a.name&&_.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const g=a.times.length-1;let p;if(r<=a.times[0]){const _=u,y=h-u;p=ot.arraySlice(a.values,_,y)}else if(r>=a.times[g]){const _=g*h+u,y=_+h-u;p=ot.arraySlice(a.values,_,y)}else{const _=a.createInterpolant(),y=u,b=h-u;_.evaluate(r),p=ot.arraySlice(_.resultBuffer,y,b)}l==="quaternion"&&new Un().fromArray(p).normalize().conjugate().toArray(p);const m=c.times.length;for(let _=0;_<m;++_){const y=_*d+f;if(l==="quaternion")Un.multiplyQuaternionsFlat(c.values,y,p,0,c.values,y);else{const b=d-f*2;for(let M=0;M<b;++M)c.values[y+M]-=p[M]}}}return o.blendMode=T_,o}};class Ha{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let s;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){const a=n+s>>>1;e<t[a]?s=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class sb extends Ha{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uh,endingEnd:Uh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,a=i[r],l=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case Bh:r=e,a=2*t-n;break;case Vh:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bh:s=e,l=2*n-t;break;case Vh:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),p=g*g,m=p*g,_=-f*m+2*f*p-f*g,y=(1+f)*m+(-1.5-2*f)*p+(-.5+f)*g+1,b=(-1-d)*m+(1.5+d)*p+.5*g,M=d*m-d*p;for(let x=0;x!==a;++x)r[x]=_*s[u+x]+y*s[c+x]+b*s[l+x]+M*s[h+x];return r}}class ab extends Ha{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=s[c+f]*h+s[l+f]*u;return r}}class ob extends Ha{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ni{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ot.convertArray(t,this.TimeBufferType),this.values=ot.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ot.convertArray(e.times,Array),values:ot.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ob(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ab(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ia:t=this.InterpolantFactoryMethodDiscrete;break;case Is:t=this.InterpolantFactoryMethodLinear;break;case Fl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ia;case this.InterpolantFactoryMethodLinear:return Is;case this.InterpolantFactoryMethodSmooth:return Fl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=ot.arraySlice(n,r,s),this.values=ot.arraySlice(this.values,r*a,s*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,s),e=!1;break}s=l}if(i!==void 0&&ot.isTypedArray(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=ot.arraySlice(this.times),t=ot.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Fl,r=e.length-1;let s=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const p=t[h+g];if(p!==t[f+g]||p!==t[d+g]){l=!0;break}}}if(l){if(a!==s){e[s]=e[a];const h=a*n,f=s*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++s}}if(r>0){e[s]=e[r];for(let a=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[a+c];++s}return s!==e.length?(this.times=ot.arraySlice(e,0,s),this.values=ot.arraySlice(t,0,s*n)):(this.times=e,this.values=t),this}clone(){const e=ot.arraySlice(this.times,0),t=ot.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=Is;class Gs extends ni{}Gs.prototype.ValueTypeName="bool";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Ia;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class qp extends ni{}qp.prototype.ValueTypeName="color";class Oa extends ni{}Oa.prototype.ValueTypeName="number";class lb extends Ha{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Un.slerpFlat(r,0,s,c-a,s,c,l);return r}}class Fr extends ni{InterpolantFactoryMethodLinear(e){return new lb(this.times,this.values,this.getValueSize(),e)}}Fr.prototype.ValueTypeName="quaternion";Fr.prototype.DefaultInterpolation=Is;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;class Hs extends ni{}Hs.prototype.ValueTypeName="string";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=Ia;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;class ka extends ni{}ka.prototype.ValueTypeName="vector";class cb{constructor(e,t=-1,n,i=w_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=On(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,a=n.length;s!==a;++s)t.push(hb(n[s]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(ni.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,s=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=ot.getKeyframeOrder(l);l=ot.sortedArray(l,1,u),c=ot.sortedArray(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new Oa(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const s=[];for(const a in i)s.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,p){if(d.length!==0){const m=[],_=[];ot.flattenJSON(d,m,_,g),m.length!==0&&p.push(new h(f,m,_))}},i=[],r=e.name||"default",s=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let p=0;p<f[g].morphTargets.length;p++)d[f[g].morphTargets[p]]=-1;for(const p in d){const m=[],_=[];for(let y=0;y!==f[g].morphTargets.length;++y){const b=f[g];m.push(b.time),_.push(b.morphTarget===p?1:0)}i.push(new Oa(".morphTargetInfluence["+p+"]",m,_))}l=d.length*s}else{const d=".bones["+t[h].name+"]";n(ka,d+".position",f,"pos",i),n(Fr,d+".quaternion",f,"rot",i),n(ka,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ub(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Oa;case"vector":case"vector2":case"vector3":case"vector4":return ka;case"color":return qp;case"quaternion":return Fr;case"bool":case"boolean":return Gs;case"string":return Hs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function hb(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ub(o.type);if(o.times===void 0){const t=[],n=[];ot.flattenJSON(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Ns={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class fb{constructor(e,t,n){const i=this;let r=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,a),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const db=new fb;class Wa{constructor(e){this.manager=e!==void 0?e:db,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const ci={};class jp extends Wa{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ns.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ci[e]!==void 0){ci[e].push({onLoad:t,onProgress:n,onError:i});return}ci[e]=[],ci[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;const u=ci[e],h=c.body.getReader(),f=c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let p=0;const m=new ReadableStream({start(_){y();function y(){h.read().then(({done:b,value:M})=>{if(b)_.close();else{p+=M.byteLength;const x=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:d});for(let w=0,C=u.length;w<C;w++){const v=u[w];v.onProgress&&v.onProgress(x)}_.enqueue(M),y()}})}}});return new Response(m)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Ns.add(e,c);const u=ci[e];delete ci[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=ci[e];if(u===void 0)throw this.manager.itemError(e),c;delete ci[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class pb extends Wa{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Ns.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const a=Na("img");function l(){u(),Ns.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class mb extends Wa{constructor(e){super(e)}load(e,t,n,i){const r=new Jt,s=new pb(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class bu extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Of=new Je,kf=new F,zf=new F;class Su{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pu,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;kf.setFromMatrixPosition(e.matrixWorld),t.position.copy(kf),zf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zf),t.updateMatrixWorld(),Of.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Of),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gb extends Su{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Fa*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class _b extends bu{constructor(e,t,n=0,i=Math.PI/3,r=0,s=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DefaultUp),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.shadow=new gb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Uf=new Je,Js=new F,cc=new F;class xb extends Su{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Js.setFromMatrixPosition(e.matrixWorld),n.position.copy(Js),cc.copy(n.position),cc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(cc),n.updateMatrixWorld(),i.makeTranslation(-Js.x,-Js.y,-Js.z),Uf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uf)}}class vb extends bu{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class yb extends Su{constructor(){super(new gu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ul extends bu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DefaultUp),this.updateMatrix(),this.target=new bt,this.shadow=new yb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ar{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Mb extends Wa{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Ns.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Ns.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const wu="\\[\\]\\.:\\/",bb=new RegExp("["+wu+"]","g"),Tu="[^"+wu+"]",Sb="[^"+wu.replace("\\.","")+"]",wb=/((?:WC+[\/:])*)/.source.replace("WC",Tu),Tb=/(WCOD+)?/.source.replace("WCOD",Sb),Eb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tu),Ab=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tu),Cb=new RegExp("^"+wb+Tb+Eb+Ab+"$"),Lb=["material","materials","bones"];class Rb{constructor(e,t,n){const i=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class it{constructor(e,t,n){this.path=t,this.parsedPath=n||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,n):new it(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bb,"")}static parseTrackName(e){const t=Cb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Lb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const a=r[s];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=Rb;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Bf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Wn=new Uint32Array(512),Xn=new Uint32Array(512);for(let o=0;o<256;++o){const e=o-127;e<-27?(Wn[o]=0,Wn[o|256]=32768,Xn[o]=24,Xn[o|256]=24):e<-14?(Wn[o]=1024>>-e-14,Wn[o|256]=1024>>-e-14|32768,Xn[o]=-e-1,Xn[o|256]=-e-1):e<=15?(Wn[o]=e+15<<10,Wn[o|256]=e+15<<10|32768,Xn[o]=13,Xn[o|256]=13):e<128?(Wn[o]=31744,Wn[o|256]=64512,Xn[o]=24,Xn[o|256]=24):(Wn[o]=31744,Wn[o|256]=64512,Xn[o]=13,Xn[o|256]=13)}const Yp=new Uint32Array(2048),Xa=new Uint32Array(64),Pb=new Uint32Array(64);for(let o=1;o<1024;++o){let e=o<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,Yp[o]=e|t}for(let o=1024;o<2048;++o)Yp[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)Xa[o]=o<<23;Xa[31]=1199570944;Xa[32]=2147483648;for(let o=33;o<63;++o)Xa[o]=2147483648+(o-32<<23);Xa[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(Pb[o]=1024);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hu}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hu);const Vf={type:"change"},uc={type:"start"},Gf={type:"end"};class Db extends kr{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wr.ROTATE,MIDDLE:Wr.DOLLY,RIGHT:Wr.PAN},this.touches={ONE:Xr.ROTATE,TWO:Xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",pt),this._domElementKeyEvents=A},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Vf),n.update(),r=i.NONE},this.update=function(){const A=new F,Z=new Un().setFromUnitVectors(e.up,new F(0,1,0)),re=Z.clone().invert(),oe=new F,P=new Un,se=2*Math.PI;return function(){const he=n.object.position;A.copy(he).sub(n.target),A.applyQuaternion(Z),a.setFromVector3(A),n.autoRotate&&r===i.NONE&&T(C()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ue=n.minAzimuthAngle,me=n.maxAzimuthAngle;return isFinite(ue)&&isFinite(me)&&(ue<-Math.PI?ue+=se:ue>Math.PI&&(ue-=se),me<-Math.PI?me+=se:me>Math.PI&&(me-=se),ue<=me?a.theta=Math.max(ue,Math.min(me,a.theta)):a.theta=a.theta>(ue+me)/2?Math.max(ue,a.theta):Math.min(me,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),A.setFromSpherical(a),A.applyQuaternion(re),he.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||oe.distanceToSquared(n.object.position)>s||8*(1-P.dot(n.object.quaternion))>s?(n.dispatchEvent(Vf),oe.copy(n.object.position),P.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Y),n.domElement.removeEventListener("pointerdown",je),n.domElement.removeEventListener("pointercancel",q),n.domElement.removeEventListener("wheel",dt),n.domElement.removeEventListener("pointermove",tt),n.domElement.removeEventListener("pointerup",Ye),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",pt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const s=1e-6,a=new Bf,l=new Bf;let c=1;const u=new F;let h=!1;const f=new Ie,d=new Ie,g=new Ie,p=new Ie,m=new Ie,_=new Ie,y=new Ie,b=new Ie,M=new Ie,x=[],w={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function T(A){l.theta-=A}function I(A){l.phi-=A}const N=function(){const A=new F;return function(re,oe){A.setFromMatrixColumn(oe,0),A.multiplyScalar(-re),u.add(A)}}(),X=function(){const A=new F;return function(re,oe){n.screenSpacePanning===!0?A.setFromMatrixColumn(oe,1):(A.setFromMatrixColumn(oe,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(re),u.add(A)}}(),j=function(){const A=new F;return function(re,oe){const P=n.domElement;if(n.object.isPerspectiveCamera){const se=n.object.position;A.copy(se).sub(n.target);let ae=A.length();ae*=Math.tan(n.object.fov/2*Math.PI/180),N(2*re*ae/P.clientHeight,n.object.matrix),X(2*oe*ae/P.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(re*(n.object.right-n.object.left)/n.object.zoom/P.clientWidth,n.object.matrix),X(oe*(n.object.top-n.object.bottom)/n.object.zoom/P.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(A){n.object.isPerspectiveCamera?c/=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*A)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(A){n.object.isPerspectiveCamera?c*=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/A)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(A){f.set(A.clientX,A.clientY)}function B(A){y.set(A.clientX,A.clientY)}function H(A){p.set(A.clientX,A.clientY)}function W(A){d.set(A.clientX,A.clientY),g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const Z=n.domElement;T(2*Math.PI*g.x/Z.clientHeight),I(2*Math.PI*g.y/Z.clientHeight),f.copy(d),n.update()}function R(A){b.set(A.clientX,A.clientY),M.subVectors(b,y),M.y>0?D(v()):M.y<0&&U(v()),y.copy(b),n.update()}function ee(A){m.set(A.clientX,A.clientY),_.subVectors(m,p).multiplyScalar(n.panSpeed),j(_.x,_.y),p.copy(m),n.update()}function te(A){A.deltaY<0?U(v()):A.deltaY>0&&D(v()),n.update()}function Q(A){let Z=!1;switch(A.code){case n.keys.UP:j(0,n.keyPanSpeed),Z=!0;break;case n.keys.BOTTOM:j(0,-n.keyPanSpeed),Z=!0;break;case n.keys.LEFT:j(n.keyPanSpeed,0),Z=!0;break;case n.keys.RIGHT:j(-n.keyPanSpeed,0),Z=!0;break}Z&&(A.preventDefault(),n.update())}function fe(){if(x.length===1)f.set(x[0].pageX,x[0].pageY);else{const A=.5*(x[0].pageX+x[1].pageX),Z=.5*(x[0].pageY+x[1].pageY);f.set(A,Z)}}function ve(){if(x.length===1)p.set(x[0].pageX,x[0].pageY);else{const A=.5*(x[0].pageX+x[1].pageX),Z=.5*(x[0].pageY+x[1].pageY);p.set(A,Z)}}function V(){const A=x[0].pageX-x[1].pageX,Z=x[0].pageY-x[1].pageY,re=Math.sqrt(A*A+Z*Z);y.set(0,re)}function Fe(){n.enableZoom&&V(),n.enablePan&&ve()}function Se(){n.enableZoom&&V(),n.enableRotate&&fe()}function Re(A){if(x.length==1)d.set(A.pageX,A.pageY);else{const re=xe(A),oe=.5*(A.pageX+re.x),P=.5*(A.pageY+re.y);d.set(oe,P)}g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const Z=n.domElement;T(2*Math.PI*g.x/Z.clientHeight),I(2*Math.PI*g.y/Z.clientHeight),f.copy(d)}function ce(A){if(x.length===1)m.set(A.pageX,A.pageY);else{const Z=xe(A),re=.5*(A.pageX+Z.x),oe=.5*(A.pageY+Z.y);m.set(re,oe)}_.subVectors(m,p).multiplyScalar(n.panSpeed),j(_.x,_.y),p.copy(m)}function Ne(A){const Z=xe(A),re=A.pageX-Z.x,oe=A.pageY-Z.y,P=Math.sqrt(re*re+oe*oe);b.set(0,P),M.set(0,Math.pow(b.y/y.y,n.zoomSpeed)),D(M.y),y.copy(b)}function pe(A){n.enableZoom&&Ne(A),n.enablePan&&ce(A)}function ye(A){n.enableZoom&&Ne(A),n.enableRotate&&Re(A)}function je(A){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",tt),n.domElement.addEventListener("pointerup",Ye)),ne(A),A.pointerType==="touch"?L(A):nt(A))}function tt(A){n.enabled!==!1&&(A.pointerType==="touch"?S(A):Ce(A))}function Ye(A){$(A),x.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",tt),n.domElement.removeEventListener("pointerup",Ye)),n.dispatchEvent(Gf),r=i.NONE}function q(A){$(A)}function nt(A){let Z;switch(A.button){case 0:Z=n.mouseButtons.LEFT;break;case 1:Z=n.mouseButtons.MIDDLE;break;case 2:Z=n.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case Wr.DOLLY:if(n.enableZoom===!1)return;B(A),r=i.DOLLY;break;case Wr.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;H(A),r=i.PAN}else{if(n.enableRotate===!1)return;k(A),r=i.ROTATE}break;case Wr.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;k(A),r=i.ROTATE}else{if(n.enablePan===!1)return;H(A),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(uc)}function Ce(A){if(n.enabled!==!1)switch(r){case i.ROTATE:if(n.enableRotate===!1)return;W(A);break;case i.DOLLY:if(n.enableZoom===!1)return;R(A);break;case i.PAN:if(n.enablePan===!1)return;ee(A);break}}function dt(A){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(A.preventDefault(),n.dispatchEvent(uc),te(A),n.dispatchEvent(Gf))}function pt(A){n.enabled===!1||n.enablePan===!1||Q(A)}function L(A){switch(le(A),x.length){case 1:switch(n.touches.ONE){case Xr.ROTATE:if(n.enableRotate===!1)return;fe(),r=i.TOUCH_ROTATE;break;case Xr.PAN:if(n.enablePan===!1)return;ve(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Xr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Fe(),r=i.TOUCH_DOLLY_PAN;break;case Xr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Se(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(uc)}function S(A){switch(le(A),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Re(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ce(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;pe(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ye(A),n.update();break;default:r=i.NONE}}function Y(A){n.enabled!==!1&&A.preventDefault()}function ne(A){x.push(A)}function $(A){delete w[A.pointerId];for(let Z=0;Z<x.length;Z++)if(x[Z].pointerId==A.pointerId){x.splice(Z,1);return}}function le(A){let Z=w[A.pointerId];Z===void 0&&(Z=new Ie,w[A.pointerId]=Z),Z.set(A.pageX,A.pageY)}function xe(A){const Z=A.pointerId===x[0].pointerId?x[1]:x[0];return w[Z.pointerId]}n.domElement.addEventListener("contextmenu",Y),n.domElement.addEventListener("pointerdown",je),n.domElement.addEventListener("pointercancel",q),n.domElement.addEventListener("wheel",dt,{passive:!1}),this.update()}}class Ib extends Wa{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zb(t)}),this.register(function(t){return new Xb(t)}),this.register(function(t){return new qb(t)}),this.register(function(t){return new Bb(t)}),this.register(function(t){return new Vb(t)}),this.register(function(t){return new Gb(t)}),this.register(function(t){return new Hb(t)}),this.register(function(t){return new kb(t)}),this.register(function(t){return new Wb(t)}),this.register(function(t){return new Ub(t)}),this.register(function(t){return new Nb(t)}),this.register(function(t){return new jb(t)})}load(e,t,n,i){const r=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=Ar.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new jp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,s,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const s={},a={};if(typeof e=="string")r=e;else if(Ar.decodeText(new Uint8Array(e,0,4))===Kp){try{s[He.KHR_BINARY_GLTF]=new Yb(e)}catch(h){i&&i(h);return}r=s[He.KHR_BINARY_GLTF].content}else r=Ar.decodeText(new Uint8Array(e));const l=JSON.parse(r);if(l.asset===void 0||l.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new oS(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);a[h.name]=h,s[h.name]=!0}if(l.extensionsUsed)for(let u=0;u<l.extensionsUsed.length;++u){const h=l.extensionsUsed[u],f=l.extensionsRequired||[];switch(h){case He.KHR_MATERIALS_UNLIT:s[h]=new Ob;break;case He.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:s[h]=new $b;break;case He.KHR_DRACO_MESH_COMPRESSION:s[h]=new Kb(l,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:s[h]=new Zb;break;case He.KHR_MESH_QUANTIZATION:s[h]=new Jb;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(s),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Fb(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class Nb{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ee(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ul(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new vb(u),c.distance=h;break;case"spot":c=new _b(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Ob{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return Bi}extendParams(e,t,n){const i=[];e.color=new Ee(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Qe))}return Promise.all(i)}}class kb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class zb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$i}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const a=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ie(a,a)}return Promise.all(r)}}class Ub{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$i}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class Bb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$i}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];return s.sheenColorFactor!==void 0&&t.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,Qe)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class Vb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$i}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class Gb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$i}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||0;const a=s.attenuationColor||[1,1,1];return t.attenuationColor=new Ee(a[0],a[1],a[2]),Promise.all(r)}}class Hb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$i}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Wb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$i}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const a=s.specularColorFactor||[1,1,1];return t.specularColor=new Ee(a[0],a[1],a[2]),s.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,Qe)),Promise.all(r)}}class Xb{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class qb{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],a=i.images[s.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class jb{constructor(e){this.name=He.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([r,s.ready]).then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new ArrayBuffer(u*h),d=new Uint8Array(a[0],l,c);return s.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})}else return null}}const Kp="glTF",Qs=12,Hf={JSON:1313821514,BIN:5130562};class Yb{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Qs);if(this.header={magic:Ar.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Kp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Qs,i=new DataView(e,Qs);let r=0;for(;r<n;){const s=i.getUint32(r,!0);r+=4;const a=i.getUint32(r,!0);if(r+=4,a===Hf.JSON){const l=new Uint8Array(e,Qs+r,s);this.content=Ar.decodeText(l)}else if(a===Hf.BIN){const l=Qs+r;this.body=e.slice(l,l+s)}r+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Kb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,a={},l={},c={};for(const u in s){const h=Hc[u]||u.toLowerCase();a[h]=s[u]}for(const u in e.attributes){const h=Hc[u]||u.toLowerCase();if(s[u]!==void 0){const f=n.accessors[e.attributes[u]],d=za[f.componentType];c[h]=d,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const d in f.attributes){const g=f.attributes[d],p=l[d];p!==void 0&&(g.normalized=p)}h(f)},a,c)})})}}class Zb{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Gc extends Ga{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),r=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),s=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new Ee().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(l){for(const c in a)l.uniforms[c]=a[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",r).replace("#include <lights_physical_fragment>",s)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(l){a.specular.value=l}},specularMap:{get:function(){return a.specularMap.value},set:function(l){a.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(l){a.glossiness.value=l}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(l){a.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class $b{constructor(){this.name=He.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return Gc}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new Ee(1,1,1),e.opacity=1;const r=[];if(Array.isArray(i.diffuseFactor)){const s=i.diffuseFactor;e.color.fromArray(s),e.opacity=s[3]}if(i.diffuseTexture!==void 0&&r.push(n.assignTexture(e,"map",i.diffuseTexture,Qe)),e.emissive=new Ee(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new Ee(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const s=i.specularGlossinessTexture;r.push(n.assignTexture(e,"glossinessMap",s)),r.push(n.assignTexture(e,"specularMap",s,Qe))}return Promise.all(r)}createMaterial(e){const t=new Gc(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=Or,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class Jb{constructor(){this.name=He.KHR_MESH_QUANTIZATION}}class Eu extends Ha{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[r+s];return t}}Eu.prototype.interpolate_=function(o,e,t,n){const i=this.resultBuffer,r=this.sampleValues,s=this.valueSize,a=s*2,l=s*3,c=n-e,u=(t-e)/c,h=u*u,f=h*u,d=o*l,g=d-l,p=-2*f+3*h,m=f-h,_=1-p,y=m-h+u;for(let b=0;b!==s;b++){const M=r[g+b+s],x=r[g+b+a]*c,w=r[d+b+s],C=r[d+b]*c;i[b]=_*M+y*x+p*w+m*C}return i};const Qb=new Un;class eS extends Eu{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Qb.fromArray(r).normalize().toArray(r),r}}const ui={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},za={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wf={9728:Nt,9729:rn,9984:Nc,9985:bp,9986:Oc,9987:zs},Xf={33071:bn,33648:el,10497:Ps},qf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Hc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tS={CUBICSPLINE:void 0,LINEAR:Is,STEP:Ia},hc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nS(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Ga({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Cs})),o.DefaultMaterial}function ea(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ur(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function iS(o,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(o);const s=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):o.attributes.position;s.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):o.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):o.attributes.color;l.push(f)}}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(o.morphAttributes.position=u),i&&(o.morphAttributes.normal=h),r&&(o.morphAttributes.color=f),o.morphTargetsRelative=!0,o})}function rS(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sS(o){const e=o.extensions&&o.extensions[He.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+jf(e.attributes):t=o.indices+":"+jf(o.attributes)+":"+o.mode,t}function jf(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function Wc(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function aS(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class oS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Fb,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap=="undefined"||n||i&&r<98?this.textureLoader=new mb(this.options.manager):this.textureLoader=new Mb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const a={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};ea(r,a,i),ur(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i].joints;for(let a=0,l=s.length;a<l;a++)e[s[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(s,a)=>{const l=this.associations.get(s);l!=null&&this.associations.set(a,l);for(const[c,u]of s.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(Ar.resolveURL(t.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const a=s[0],l=qf[i.type],c=za[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let p,m;if(d&&d!==h){const _=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let b=t.cache.get(y);b||(p=new c(a,_*d,i.count*d/u),b=new VM(p,d/u),t.cache.add(y,b)),m=new xu(b,l,f%d/u,g)}else a===null?p=new c(i.count*l):p=new c(a,f,i.count*l),m=new mn(p,l,g);if(i.sparse!==void 0){const _=qf.SCALAR,y=za[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,x=new y(s[1],b,i.sparse.count*_),w=new c(s[2],M,i.sparse.count*l);a!==null&&(m=new mn(m.array.slice(),m.itemSize,m.normalized));for(let C=0,v=x.length;C<v;C++){const T=x[C];if(m.setX(T,w[C*l]),l>=2&&m.setY(T,w[C*l+1]),l>=3&&m.setZ(T,w[C*l+2]),l>=4&&m.setW(T,w[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,s=t.images[r];let a=this.textureLoader;if(s.uri){const l=n.manager.getHandler(s.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,s=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,s.name&&(u.name=s.name);const f=(r.samplers||{})[s.sampler]||{};return u.magFilter=Wf[f.magFilter]||rn,u.minFilter=Wf[f.minFilter]||zs,u.wrapS=Xf[f.wrapS]||Ps,u.wrapT=Xf[f.wrapT]||Ps,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const s=i.images[e],a=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:s.mimeType});return l=a.createObjectURL(f),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(p){const m=new Jt(p);m.needsUpdate=!0,f(m)}),t.load(Ar.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=s.mimeType||aS(s.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(s){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[He.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(s);s=r.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),r.associations.set(s,l)}}return i!==void 0&&(s.encoding=i),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Mu,Mt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new cl,Mt.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(i||r||s){let a="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),s&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Ga}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let s;const a={},l=r.extensions||{},c=[];if(l[He.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const h=i[He.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];s=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else if(l[He.KHR_MATERIALS_UNLIT]){const h=i[He.KHR_MATERIALS_UNLIT];s=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Ee(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Qe)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),s=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Pr);const u=r.alphaMode||hc.OPAQUE;if(u===hc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===hc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==Bi&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ie(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&s!==Bi&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==Bi&&(a.emissive=new Ee().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&s!==Bi&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Qe)),Promise.all(c).then(function(){let h;return s===Gc?h=i[He.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):h=new s(a),r.name&&(h.name=r.name),ur(h,r),t.associations.set(h,{materials:e}),r.extensions&&ea(i,h,r),h})}createUniqueName(e){const t=it.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Yf(l,a,t)})}const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=sS(c),h=i[u];if(h)s.push(h.promise);else{let f;c.extensions&&c.extensions[He.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Yf(new ti,c,t),i[u]={primitive:c,promise:f},s.push(f)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],s=r.primitives,a=[];for(let l=0,c=s.length;l<c;l++){const u=s[l].material===void 0?nS(this.cache):this.getDependency("material",s[l].material);a.push(u)}return a.push(t.loadGeometries(s)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const p=u[d],m=s[d];let _;const y=c[d];if(m.mode===ui.TRIANGLES||m.mode===ui.TRIANGLE_STRIP||m.mode===ui.TRIANGLE_FAN||m.mode===void 0)_=r.isSkinnedMesh===!0?new WM(p,y):new Qn(p,y),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),m.mode===ui.TRIANGLE_STRIP?_.geometry=Kf(_.geometry,E_):m.mode===ui.TRIANGLE_FAN&&(_.geometry=Kf(_.geometry,wp));else if(m.mode===ui.LINES)_=new jM(p,y);else if(m.mode===ui.LINE_STRIP)_=new yu(p,y);else if(m.mode===ui.LINE_LOOP)_=new YM(p,y);else if(m.mode===ui.POINTS)_=new KM(p,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&rS(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),ur(_,r),m.extensions&&ea(i,_,m),t.assignFinalMaterial(_),h.push(_)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return h[0];const f=new vr;t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Kt(q_.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new gu(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ur(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const n=this.json.animations[e],i=[],r=[],s=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],f=n.samplers[h.sampler],d=h.target,g=d.node!==void 0?d.node:d.id,p=n.parameters!==void 0?n.parameters[f.input]:f.input,m=n.parameters!==void 0?n.parameters[f.output]:f.output;i.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",p)),s.push(this.getDependency("accessor",m)),a.push(f),l.push(d)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(s),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2],d=c[3],g=c[4],p=[];for(let _=0,y=u.length;_<y;_++){const b=u[_],M=h[_],x=f[_],w=d[_],C=g[_];if(b===void 0)continue;b.updateMatrix(),b.matrixAutoUpdate=!0;let v;switch(Di[C.path]){case Di.weights:v=Oa;break;case Di.rotation:v=Fr;break;case Di.position:case Di.scale:default:v=ka;break}const T=b.name?b.name:b.uuid,I=w.interpolation!==void 0?tS[w.interpolation]:Is,N=[];Di[C.path]===Di.weights?b.traverse(function(j){j.morphTargetInfluences&&N.push(j.name?j.name:j.uuid)}):N.push(T);let X=x.array;if(x.normalized){const j=Wc(X.constructor),D=new Float32Array(X.length);for(let U=0,k=X.length;U<k;U++)D[U]=X[U]*j;X=D}for(let j=0,D=N.length;j<D;j++){const U=new v(N[j]+"."+Di[C.path],M.array,X,I);w.interpolation==="CUBICSPLINE"&&(U.createInterpolant=function(B){const H=this instanceof Fr?eS:Eu;return new H(this.times,this.values,this.getValueSize()/3,B)},U.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(U)}}const m=n.name?n.name:"animation_"+e;return new cb(m,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(a){if(!!a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(e){const t=this.json,n=this.extensions,i=this,r=t.nodes[e],s=r.name?i.createUniqueName(r.name):"";return function(){const a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(r.isBone===!0?l=new Xp:a.length>1?l=new vr:a.length===1?l=a[0]:l=new bt,l!==a[0])for(let c=0,u=a.length;c<u;c++)l.add(a[c]);if(r.name&&(l.userData.name=r.name,l.name=s),ur(l,r),r.extensions&&ea(n,l,r),r.matrix!==void 0){const c=new Je;c.fromArray(r.matrix),l.applyMatrix4(c)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],r=this,s=new vr;i.name&&(s.name=r.createUniqueName(i.name)),ur(s,i),i.extensions&&ea(n,s,i);const a=i.nodes||[],l=[];for(let c=0,u=a.length;c<u;c++)l.push(Zp(a[c],s,t,r));return Promise.all(l).then(function(){const c=u=>{const h=new Map;for(const[f,d]of r.associations)(f instanceof Mt||f instanceof Jt)&&h.set(f,d);return u.traverse(f=>{const d=r.associations.get(f);d!=null&&h.set(f,d)}),h};return r.associations=c(s),s})}}function Zp(o,e,t,n){const i=t.nodes[o];return n.getDependency("node",o).then(function(r){if(i.skin===void 0)return r;let s;return n.getDependency("skin",i.skin).then(function(a){s=a;const l=[];for(let c=0,u=s.joints.length;c<u;c++)l.push(n.getDependency("node",s.joints[c]));return Promise.all(l)}).then(function(a){return r.traverse(function(l){if(!l.isMesh)return;const c=[],u=[];for(let h=0,f=a.length;h<f;h++){const d=a[h];if(d){c.push(d);const g=new Je;s.inverseBindMatrices!==void 0&&g.fromArray(s.inverseBindMatrices.array,h*16),u.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',s.joints[h])}l.bind(new vu(c,u),l.matrixWorld)}),r})}).then(function(r){e.add(r);const s=[];if(i.children){const a=i.children;for(let l=0,c=a.length;l<c;l++){const u=a[l];s.push(Zp(u,r,t,n))}}return Promise.all(s)})}function lS(o,e,t){const n=e.attributes,i=new Us;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),a.normalized){const u=Wc(za[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new F,l=new F;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const p=Wc(za[f.componentType]);l.multiplyScalar(p)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const s=new Bs;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=s}function Yf(o,e,t){const n=e.attributes,i=[];function r(s,a){return t.getDependency("accessor",s).then(function(l){o.setAttribute(a,l)})}for(const s in n){const a=Hc[s]||s.toLowerCase();a in o.attributes||i.push(r(n[s],a))}if(e.indices!==void 0&&!o.index){const s=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});i.push(s)}return ur(o,e),lS(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?iS(o,e.targets,t):o})}function Kf(o,e){let t=o.getIndex();if(t===null){const s=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)s.push(l);o.setIndex(s),t=o.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=t.count-2,i=[];if(e===wp)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=o.clone();return r.setIndex(i),r}const cS=document.querySelector(".three-d"),zr=new Wp;cS.appendChild(zr.domElement);const Os=new Kt(45,600/400,.1,1e3);Os.position.set(20,10,20);zr.setSize(window.innerWidth,window.innerHeight,!1);const Ur=new BM;Ur.background=new Ee(1381653);let nl;const uS=new Ib;uS.load("https://raw.githubusercontent.com/LukaszPietrzykowski16/portfolio/main/tag3.gltf",o=>{nl=o.scene,Ur.add(nl)});zr.render(Ur,Os);const hl=new ul(16777215,.8);Ur.add(hl);hl.position.set(-30,50,0);hl.receiveShadow=!0;hl.shadow.camera.bottom=12;const fl=new ul(16777215,.8);Ur.add(fl);fl.position.set(30,20,-20);fl.receiveShadow=!0;fl.shadow.camera.bottom=12;const dl=new ul(16777215,.8);Ur.add(dl);dl.position.set(20,50,10);dl.receiveShadow=!0;dl.shadow.camera.bottom=-12;new Db(Os,zr.domElement);function hS(){nl&&(nl.rotation.y+=.01),zr.render(Ur,Os)}zr.setAnimationLoop(hS);window.addEventListener("resize",()=>{Os.aspect=window.innerWidth/window.innerHeight,Os.updateProjectionMatrix(),zr.setSize(window.innerWidth,window.innerHeight,!1)});const Zf=document.querySelector(".name h1");window.addEventListener("DOMContentLoaded",()=>{dS()});function fS(o){return new Promise(e=>setTimeout(e,o))}async function dS(){zn.from(Zf,{y:-100,duration:.8,opacity:0}),await fS(1e3),Zf.classList.toggle("under")}const pS="Hello I am frontend developer, who love learning new technologies and dive deep into new topics. So... That is it! If you scroll down you will see my work";var $f=pS.split(""),mS;async function $p(){$f.length>0?document.querySelector(".typed-text").innerHTML+=$f.shift():clearTimeout(mS),setTimeout($p,30)}$p();zn.registerPlugin(Ze);const Bn=document.querySelector(".second-carousel"),ks=document.querySelectorAll(".second-carousel-card");document.querySelectorAll(".second-carousel-card img");Bn.clientWidth;let Ms=ks[0].clientWidth,Jp=ks.length*Ms,Co=0,Jf=0,Qp=0,ta=0;const gS=(o,e,t)=>o*(1-t)+e*t,em=o=>{zn.set(ks,{x:e=>e*Ms+o,modifiers:{x:(e,t)=>`${zn.utils.wrap(-Ms,Jp-Ms,parseInt(e))}px`}})};em(0);let Xc=0,fc=0,Au=!1;const tm=o=>{Xc=o.clientX||o.touches[0].clientX,Au=!0,Bn.classList.add("is-dragging")},nm=o=>{!Au||(fc=o.clientX||o.touches[0].clientX,Qp+=(fc-Xc)*2.5,Xc=fc)},Cu=()=>{Au=!1,Bn.classList.remove("is-dragging")};Bn.addEventListener("touchstart",tm);Bn.addEventListener("touchmove",nm);Bn.addEventListener("touchend",Cu);Bn.addEventListener("mousedown",tm);Bn.addEventListener("mousemove",nm);Bn.addEventListener("mouseleave",Cu);Bn.addEventListener("mouseup",Cu);Bn.addEventListener("selectstart",()=>!1);window.addEventListener("resize",()=>{Ms=ks[0].clientWidth,Jp=ks.length*Ms});const im=()=>{requestAnimationFrame(im),ta=gS(ta,Qp,.1),em(ta),Co=ta-Jf,Jf=ta,zn.to(ks,{skewX:-Co*.2,rotate:Co*.01,scale:1-Math.min(100,Math.abs(Co))*.003})};im();let rm=zn.utils.toArray(".second-carousel-card");rm.forEach(o=>{const e=o.querySelector(".second-carousel-card"),t=zn.timeline({paused:!0});t.set(o,{autoAlpha:1}),t.from(o,1.5,{yPercent:100,ease:"power2",opacity:0}),t.from(e,2.5,{xPercent:100,scale:1.3,delay:-1.5,ease:"power2"}),o.animation=t});Ze.batch(rm,{onEnter:o=>o.forEach((e,t)=>e.animation.delay(t*.2).restart(!0)),once:!0});
