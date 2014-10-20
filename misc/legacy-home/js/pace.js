(function(){var e,t,n,r,s,o,i,a,u,c,l,p,h,d,f,g,m,y,w,v,P,b,S,q,k,L,R,T,x,E,M,A,N,_,O,F,C,j,U,X,W=[].slice,D={}.hasOwnProperty,H=function(e,t){function n(){this.constructor=e}for(var r in t)D.call(t,r)&&(e[r]=t[r]);return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e},I=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1};w={catchupTime:500,initialRate:.03,minTime:500,ghostTime:250,maxProgressPerFrame:10,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!1}},L=function(){var e;return null!=(e="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?e:+new Date},T=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,y=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==T&&(T=function(e){return setTimeout(e,50)},y=function(e){return clearTimeout(e)}),E=function(e){var t,n;return t=L(),(n=function(){var r;return r=L()-t,t=L(),e(r,function(){return T(n)})})()},x=function(){var e,t,n;return n=arguments[0],t=arguments[1],e=3<=arguments.length?W.call(arguments,2):[],"function"==typeof n[t]?n[t].apply(n,e):n[t]},v=function(){var e,t,n,r,s,o,i;for(t=arguments[0],r=2<=arguments.length?W.call(arguments,1):[],o=0,i=r.length;i>o;o++)if(n=r[o])for(e in n)D.call(n,e)&&(s=n[e],null!=t[e]&&"object"==typeof t[e]&&null!=s&&"object"==typeof s?v(t[e],s):t[e]=s);return t},f=function(e){var t,n,r,s,o;for(n=t=0,s=0,o=e.length;o>s;s++)r=e[s],n+=Math.abs(r),t++;return n/t},b=function(e,t){var n,r,s;if(null==e&&(e="options"),null==t&&(t=!0),s=document.querySelector("[data-pace-"+e+"]")){if(n=s.getAttribute("data-pace-"+e),!t)return n;try{return JSON.parse(n)}catch(o){return r=o,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",r):void 0}}},null==window.Pace&&(window.Pace={}),R=Pace.options=v(w,window.paceOptions,b()),a=function(e){function t(){return U=t.__super__.constructor.apply(this,arguments)}return H(t,e),t}(Error),t=function(){function e(){this.progress=0}return e.prototype.getElement=function(){var e;if(null==this.el){if(e=document.querySelector(R.target),!e)throw new a;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace("pace-done",""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=e.firstChild?e.insertBefore(this.el,e.firstChild):e.appendChild(this.el)}return this.el},e.prototype.finish=function(){var e;return e=this.getElement(),e.className=e.className.replace("pace-active",""),e.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},e.prototype.update=function(e){return this.progress=e,this.render()},e.prototype.destroy=function(){return this.getElement().parentNode.removeChild(this.getElement()),this.el=void 0},e.prototype.render=function(){var e,t;return null==document.querySelector(R.target)?!1:(e=this.getElement(),e.children[0].style.width=""+this.progress+"%",(!this.lastRenderedProgress||0|(this.lastRenderedProgress|0!==this.progress))&&(e.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?t="99":(t=this.progress<10?"0":"",t+=0|this.progress),e.children[0].setAttribute("data-progress",""+t)),this.lastRenderedProgress=this.progress)},e.prototype.done=function(){return this.progress>=100},e}(),i=function(){function e(){this.bindings={}}return e.prototype.trigger=function(e,t){var n,r,s,o,i;if(null!=this.bindings[e]){for(o=this.bindings[e],i=[],r=0,s=o.length;s>r;r++)n=o[r],i.push(n.call(this,t));return i}},e.prototype.on=function(e,t){var n;return null==(n=this.bindings)[e]&&(n[e]=[]),this.bindings[e].push(t)},e}(),F=window.XMLHttpRequest,O=window.XDomainRequest,_=window.WebSocket,P=function(e,t){var n,r,s,o;o=[];for(r in t.prototype)try{s=t.prototype[r],o.push(null==e[r]&&"function"!=typeof s?e[r]=s:void 0)}catch(i){n=i}return o},u=function(e){function t(){var e,n=this;t.__super__.constructor.apply(this,arguments),e=function(e){var t;return t=e.open,e.open=function(r,s){var o;return o=(null!=r?r:"GET").toUpperCase(),I.call(R.ajax.trackMethods,o)>=0&&n.trigger("request",{type:r,url:s,request:e}),t.apply(e,arguments)}},window.XMLHttpRequest=function(t){var n;return n=new F(t),e(n),n},P(window.XMLHttpRequest,F),null!=O&&(window.XDomainRequest=function(){var t;return t=new O,e(t),t},P(window.XDomainRequest,O)),null!=_&&R.ajax.trackWebSockets&&(window.WebSocket=function(e,t){var r;return r=new _(e,t),n.trigger("request",{type:"socket",url:e,protocols:t,request:r}),r},P(window.WebSocket,_))}return H(t,e),t}(i),C=null,S=function(){return null==C&&(C=new u),C},R.restartOnRequestAfter!==!1&&S().on("request",function(t){var n,r,s;return s=t.type,r=t.request,Pace.running?void 0:(n=arguments,setTimeout(function(){var t,o,i,a,u,c,l;if(o="socket"===s?r.readyState<2:0<(u=r.readyState)&&4>u){for(Pace.restart(),c=Pace.sources,l=[],i=0,a=c.length;a>i;i++){if(t=c[i],t instanceof e){t.watch.apply(t,n);break}l.push(void 0)}return l}},R.restartOnRequestAfter))}),e=function(){function e(){var e=this;this.elements=[],S().on("request",function(){return e.watch.apply(e,arguments)})}return e.prototype.watch=function(e){var t,n,r;return r=e.type,t=e.request,n="socket"===r?new p(t):new h(t),this.elements.push(n)},e}(),h=function(){function e(e){var t,n,r,s,o,i,a=this;if(this.progress=0,null!=window.ProgressEvent)for(n=null,e.addEventListener("progress",function(e){return a.progress=e.lengthComputable?100*e.loaded/e.total:a.progress+(100-a.progress)/2}),i=["load","abort","timeout","error"],r=0,s=i.length;s>r;r++)t=i[r],e.addEventListener(t,function(){return a.progress=100});else o=e.onreadystatechange,e.onreadystatechange=function(){var t;return 0===(t=e.readyState)||4===t?a.progress=100:3===e.readyState&&(a.progress=50),"function"==typeof o?o.apply(null,arguments):void 0}}return e}(),p=function(){function e(e){var t,n,r,s,o=this;for(this.progress=0,s=["error","open"],n=0,r=s.length;r>n;n++)t=s[n],e.addEventListener(t,function(){return o.progress=100})}return e}(),r=function(){function e(e){var t,n,r,o;for(null==e&&(e={}),this.elements=[],null==e.selectors&&(e.selectors=[]),o=e.selectors,n=0,r=o.length;r>n;n++)t=o[n],this.elements.push(new s(t))}return e}(),s=function(){function e(e){this.selector=e,this.progress=0,this.check()}return e.prototype.check=function(){var e=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return e.check()},R.elements.checkInterval)},e.prototype.done=function(){return this.progress=100},e}(),n=function(){function e(){var e,t,n=this;this.progress=null!=(t=this.states[document.readyState])?t:100,e=document.onreadystatechange,document.onreadystatechange=function(){return null!=n.states[document.readyState]&&(n.progress=n.states[document.readyState]),"function"==typeof e?e.apply(null,arguments):void 0}}return e.prototype.states={loading:0,interactive:50,complete:100},e}(),o=function(){function e(){var e,t,n,r,s,o=this;this.progress=0,e=0,s=[],r=0,n=L(),t=setInterval(function(){var i;return i=L()-n-50,n=L(),s.push(i),s.length>R.eventLag.sampleCount&&s.shift(),e=f(s),++r>=R.eventLag.minSamples&&e<R.eventLag.lagThreshold?(o.progress=100,clearInterval(t)):o.progress=100*(3/(e+3))},50)}return e}(),l=function(){function e(e){this.source=e,this.last=this.sinceLastUpdate=0,this.rate=R.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=x(this.source,"progress"))}return e.prototype.tick=function(e,t){var n;return null==t&&(t=x(this.source,"progress")),t>=100&&(this.done=!0),t===this.last?this.sinceLastUpdate+=e:(this.sinceLastUpdate&&(this.rate=(t-this.last)/this.sinceLastUpdate),this.catchup=(t-this.progress)/R.catchupTime,this.sinceLastUpdate=0,this.last=t),t>this.progress&&(this.progress+=this.catchup*e),n=1-Math.pow(this.progress/100,R.easeFactor),this.progress+=n*this.rate*e,this.progress=Math.min(this.lastProgress+R.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},e}(),A=null,M=null,g=null,N=null,d=null,m=null,Pace.running=!1,q=function(){return R.restartOnPushState?Pace.restart():void 0},null!=window.history.pushState&&(j=window.history.pushState,window.history.pushState=function(){return q(),j.apply(window.history,arguments)}),null!=window.history.replaceState&&(X=window.history.replaceState,window.history.replaceState=function(){return q(),X.apply(window.history,arguments)}),c={ajax:e,elements:r,document:n,eventLag:o},(k=function(){var e,n,r,s,o,i,a,u,p;for(Pace.sources=A=[],a=["ajax","elements","document","eventLag"],r=0,o=a.length;o>r;r++)n=a[r],R[n]!==!1&&A.push(new c[n](R[n]));for(p=null!=(u=R.extraSources)?u:[],s=0,i=p.length;i>s;s++)e=p[s],A.push(new e(R));return Pace.bar=g=new t,M=[],N=new l})(),Pace.stop=function(){return Pace.running=!1,g.destroy(),m=!0,null!=d&&("function"==typeof y&&y(d),d=null),k()},Pace.restart=function(){return Pace.stop(),Pace.go()},Pace.go=function(){return Pace.running=!0,g.render(),m=!1,d=E(function(e,t){var n,r,s,o,i,a,u,c,p,h,d,f,y,w,v,P,b,S;for(c=100-g.progress,r=y=0,s=!0,a=w=0,P=A.length;P>w;a=++w)for(d=A[a],h=null!=M[a]?M[a]:M[a]=[],i=null!=(S=d.elements)?S:[d],u=v=0,b=i.length;b>v;u=++v)o=i[u],p=null!=h[u]?h[u]:h[u]=new l(o),s&=p.done,p.done||(r++,y+=p.tick(e));return n=y/r,g.update(N.tick(e,n)),f=L(),g.done()||s||m?(g.update(100),setTimeout(function(){return g.finish(),Pace.running=!1},Math.max(R.ghostTime,Math.min(R.minTime,L()-f)))):t()})},Pace.start=function(e){v(R,e),Pace.running=!0;try{g.render()}catch(t){a=t}return document.querySelector(".pace")?Pace.go():setTimeout(Pace.start,50)},"function"==typeof define&&define.amd?define(function(){return Pace}):"object"==typeof exports?module.exports=Pace:R.startOnPageLoad&&Pace.start()}).call(this);