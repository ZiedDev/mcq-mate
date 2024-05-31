(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[14],{443:function(t,e,s){s.r(e);var r=s(1),i=s(0);s.n(i);var n=s(2),a=s(147);t=s(51);var h=s(94),u=s(246),o=s(71),c=s(245);s=s(376);var E,f=window,l=function(){function t(t,e,s){var r=-1===t.indexOf("?")?"?":"&";e===o.a.NEVER_CACHE?this.url=t+r+"_="+Object(i.uniqueId)():this.url=t,this.jf=s,this.request=new XMLHttpRequest,this.request.open("GET",this.url,!0),this.request.setRequestHeader("X-Requested-With","XMLHttpRequest"),this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined"),this.status=c.a.NOT_STARTED}return t.prototype.start=function(e,s){var r,i=this,n=this,a=this.request;n.lx=0,e&&Object.keys(e).forEach((function(t){i.request.setRequestHeader(t,e[t])})),s&&(this.request.withCredentials=s),this.XD=setInterval((function(){var e=0===window.document.URL.indexOf("file:///");if(e=200===a.status||e&&0===a.status,a.readyState!==c.b.DONE||e){try{a.responseText}catch(t){return}n.lx<a.responseText.length&&(r=n.Iga())&&n.trigger(t.Events.DATA,[r]),0===a.readyState&&(clearInterval(n.XD),n.trigger(t.Events.DONE))}else clearInterval(n.XD),n.trigger(t.Events.DONE,["Error received return status "+a.status])}),1e3),this.request.send(null),this.status=c.a.STARTED},t.prototype.Iga=function(){var e=this.request,s=e.responseText;if(0!==s.length){if(this.lx!==s.length)return s=Math.min(this.lx+3e6,s.length),e=f.QT(e,this.lx,!0,s),this.lx=s,e;clearInterval(this.XD),this.trigger(t.Events.DONE)}},t.prototype.abort=function(){clearInterval(this.XD);var e=this;this.request.onreadystatechange=function(){return Object(n.j)("StreamingRequest aborted"),e.status=c.a.ABORTED,e.trigger(t.Events.ABORTED)},this.request.abort()},t.prototype.finish=function(){var e=this;this.request.onreadystatechange=function(){return e.status=c.a.SUCCESS,e.trigger(t.Events.DONE)},this.request.abort()},t.Events={DONE:"done",DATA:"data",ABORTED:"aborted"},t}();Object(t.a)(l),function(t){t[t.LOCAL_HEADER=0]="LOCAL_HEADER",t[t.FILE=1]="FILE",t[t.CENTRAL_DIR=2]="CENTRAL_DIR"}(E||(E={}));var d=function(t){function e(){var e=t.call(this)||this;return e.buffer="",e.state=E.LOCAL_HEADER,e.IM=4,e.em=null,e.ut=a.c,e.Ln={},e}return Object(r.c)(e,t),e.prototype.Bga=function(t){var s;for(t=this.buffer+t;t.length>=this.ut;)switch(this.state){case E.LOCAL_HEADER:if(this.em=s=this.Mga(t.slice(0,this.ut)),s.cu!==a.g)throw Error("Wrong signature in local header: "+s.cu);t=t.slice(this.ut),this.state=E.FILE,this.ut=s.lH+s.Bq+s.jw+this.IM,this.trigger(e.Events.HEADER,[s]);break;case E.FILE:this.em.name=t.slice(0,this.em.Bq),this.Ln[this.em.name]=this.em,s=this.ut-this.IM;var r=t.slice(this.em.Bq+this.em.jw,s);if(this.trigger(e.Events.FILE,[this.em.name,r,this.em.CH]),(t=t.slice(s)).slice(0,this.IM)!==a.h)return this.state=E.CENTRAL_DIR,!0;this.state=E.LOCAL_HEADER,this.ut=a.c}return this.buffer=t,!1},e.Events={HEADER:"header",FILE:"file"},e}(u.a);Object(t.a)(d),t=function(t){function e(e,s,r,i,n){return(r=t.call(this,e,r,i)||this).url=e,r.stream=new l(e,s),r.de=new d,r.RW=window.createPromiseCapability(),r.sX={},r.jf=n,r}return Object(r.c)(e,t),e.prototype.Zx=function(t){var e=this;return this.request([this.Aj,this.Sk,this.zj]),this.stream.addEventListener(l.Events.DATA,(function(s){try{if(e.de.Bga(s))return e.stream.finish()}catch(s){throw e.stream.abort(),e.fw(s),t(s),s}})),this.stream.addEventListener(l.Events.DONE,(function(s){e.gga=!0,e.RW.resolve(),s&&(e.fw(s),t(s))})),this.de.addEventListener(d.Events.HEADER,Object(i.bind)(this.rX,this)),this.de.addEventListener(d.Events.FILE,Object(i.bind)(this.bha,this)),this.stream.start(this.jf,this.withCredentials)},e.prototype.MT=function(t){var e=this;this.RW.promise.then((function(){t(Object.keys(e.de.Ln))}))},e.prototype.yo=function(){return!0},e.prototype.request=function(t){var e=this;this.gga&&t.forEach((function(t){e.sX[t]||e.Dla(t)}))},e.prototype.rX=function(){},e.prototype.abort=function(){this.stream&&this.stream.abort()},e.prototype.Dla=function(t){this.trigger(h.a.Events.PART_READY,[{cb:t,error:"Requested part not found",Ki:!1,cg:!1}])},e.prototype.bha=function(t,e,s){this.sX[t]=!0,this.trigger(h.a.Events.PART_READY,[{cb:t,data:e,Ki:!1,cg:!1,error:null,gd:s}])},e}(h.a),Object(s.a)(t),Object(s.b)(t),e.default=t}}])}).call(this||window);