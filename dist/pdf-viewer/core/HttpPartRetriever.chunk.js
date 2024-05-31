(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[0],{434:function(t,e,r){r.r(e),r.d(e,"ByteRangeRequest",(function(){return v}));var s=r(1),i=r(0);r.n(i);var n=r(2),a=r(147);t=r(94);var u=r(246),o=r(73),c=r(71),h=r(245),f=r(163);r=r(376);var d,l=[],p=[],b=window,O=function(){this.um=1};!function(t){t[t.UNSENT=0]="UNSENT",t[t.DONE=4]="DONE"}(d||(d={}));var v=function(){function t(t,e,r,s){var n=this;this.url=t,this.range=e,this.jf=r,this.withCredentials=s,this.e2=d,this.request=new XMLHttpRequest,this.request.open("GET",this.url,!0),b.Uint8Array&&(this.request.responseType="arraybuffer"),s&&(this.request.withCredentials=s),E.DISABLE_RANGE_HEADER||(Object(i.isUndefined)(e.stop)?this.request.setRequestHeader("Range","bytes="+e.start):this.request.setRequestHeader("Range",["bytes=",e.start,"-",e.stop-1].join(""))),r&&Object.keys(r).forEach((function(t){n.request.setRequestHeader(t,r[t])})),this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined"),this.status=h.a.NOT_STARTED}return t.prototype.start=function(t){var e=this,r=this.request;r.onreadystatechange=function(){if(e.aborted)return e.status=h.a.ABORTED,t({code:h.a.ABORTED});if(this.readyState===e.e2.DONE){e.tC();var s=0===window.document.URL.indexOf("file:///");200===r.status||206===r.status||s&&0===r.status?(s=b.QT(this),e.ku(s,t)):(e.status=h.a.ERROR,t({code:e.status,status:e.status}))}},this.request.send(null),this.status=h.a.STARTED},t.prototype.ku=function(t,e){if(this.status=h.a.SUCCESS,e)return e(!1,t)},t.prototype.abort=function(){this.tC(),this.aborted=!0,this.request.abort()},t.prototype.tC=function(){var e=Object(f.c)(this.url,this.range,p);if(-1!==e&&p.splice(e,1),0<l.length){var r=new t((e=l.shift()).url,e.range,this.jf,this.withCredentials);e.request=r,p.push(e),r.start(Object(f.d)(e))}},t.prototype.extend=function(t){var e=Object.assign({},this,t.prototype);return e.constructor=t,e},t}(),E=function(t){function e(e,r,s,i,n){return(s=t.call(this,e,s,i)||this).xm={},s.YA=r,s.url=e,s.DISABLE_RANGE_HEADER=!1,s.Tx=v,s.NN=3,s.jf=n||{},s}return Object(s.c)(e,t),e.prototype.Rv=function(t,e,r){var s=-1===t.indexOf("?")?"?":"&";switch(r){case!1:case c.a.NEVER_CACHE:t=t+s+"_="+Object(i.uniqueId)();break;case!0:case c.a.CACHE:t=t+s+"_="+e.start+","+(Object(i.isUndefined)(e.stop)?"":e.stop)}return t},e.prototype.HR=function(t,e,r,s){return void 0===r&&(r={}),new this.Tx(t,e,r,s)},e.prototype.V9=function(t,e,r,s,n){for(var a=0;a<l.length;a++)if(Object(i.isEqual)(l[a].range,e)&&Object(i.isEqual)(l[a].url,t))return l[a].Vg.push(s),l[a].xD++,null;for(a=0;a<p.length;a++)if(Object(i.isEqual)(p[a].range,e)&&Object(i.isEqual)(p[a].url,t))return p[a].Vg.push(s),p[a].xD++,null;return r={url:t,range:e,YA:r,Vg:[s],xD:1},0===l.length&&p.length<this.NN?(p.push(r),r.request=this.HR(t,e,n,this.withCredentials),r):(l.push(r),null)},e.prototype.oo=function(t,e,r){var s=this.Rv(t,e,this.YA);return(t=this.V9(s,e,this.YA,r,this.jf))&&t.request.start(Object(f.d)(t)),function(){var t=Object(f.c)(s,e,p);if(-1!==t){var r=--p[t].xD;0===r&&p[t].request&&p[t].request.abort()}else-1!==(t=Object(f.c)(s,e,l))&&0==(r=--l[t].xD)&&l.splice(t,1)}},e.prototype.pT=function(){return{start:-a.a}},e.prototype.vca=function(){var t=-(a.a+a.e);return{start:t-a.d,end:t}},e.prototype.ot=function(t){var e=this;this.dB=!0;var r=a.a;this.oo(this.url,this.pT(),(function(s,i,a){function c(){var r=e.de.lT();e.oo(e.url,r,(function(s,i){return s?(Object(n.j)("Error loading central directory: "+s),t(s)):(i=Object(o.a)(i)).length!==r.stop-r.start?t("Invalid XOD file: Zip central directory data is wrong size! Should be "+(r.stop-r.start)+" but is "+i.length):(e.de.iX(i),e.vH=!0,e.dB=!1,t(!1))}))}if(s)return Object(n.j)("Error loading end header: "+s),t(s,i,a);if((i=Object(o.a)(i)).length!==r)return t("Invalid XOD file: Zip end header data is wrong size!");try{e.de=new u.a(i)}catch(e){return t(e)}e.de.bea?e.oo(e.url,e.vca(),(function(r,s){if(r)return Object(n.j)("Error loading zip64 header: "+r),t(r);s=Object(o.a)(s),e.de.uea(s),c()})):c()}))},e.prototype.MT=function(t){t(Object.keys(this.de.Ln))},e.prototype.uL=function(t,e){var r=this;if(this.de.zR(t)){var s=this.de.oC(t);if(s in this.xm){var i=this.bi[t];i.$r=this.xm[s],i.$r.um++,i.cancel=i.$r.cancel}else{var a=this.de.Kaa(t),u=this.oo(this.url,a,(function(i,u){i?(Object(n.j)('Error loading part "'+t+'": '+i),r.oo(r.url,a,(function(i,n){if(i)return e(i,t);r.mX(n,a,s,t,e)}))):r.mX(u,a,s,t,e)})),o=this.bi[t];o&&(o.vZ=!0,o.cancel=function(){o.$r.um--,0===o.$r.um&&(u(),delete r.xm[s])},this.xm[s]=new O(s),o.$r=this.xm[s],o.$r.cancel=o.cancel)}}else delete this.bi[t],e(Error('File not found: "'+t+'"'),t)},e.prototype.mX=function(t,e,r,s,i){if(t.length!==e.stop-e.start)i(Error("Part data is wrong size!"),s);else{do{if(!this.xm[r])return;s=this.xm[r].um;for(var n=e.Nq.length,a=0;a<n;++a){var u=e.Nq[a];i(!1,u.Jq,t["string"==typeof t?"substring":"subarray"](u.start,u.stop),this.de.PU(u.Jq)),u.Jq in this.bi&&delete this.bi[u.Jq]}}while(s!==this.xm[r].um);delete this.xm[r]}},e.DISABLE_RANGE_HEADER=!1,e.NN=3,e}(t.a);!function(t){Object(s.c)((function(e,r,s){var n,a=t.call(this)||this;for(n in e)a[n]=e[n];return a.Hpa=e,a.startOffset=r,a.endOffset=s,a.HR=function(t,r,s,n){return Object(i.isUndefined)(r.stop)?(r.start+=a.endOffset,r.stop=a.endOffset):(r.start+=a.startOffset,r.stop+=a.startOffset),t=a.Rv(a.url,r,a.YA),new e.Tx(t,r,s,n)},a}),t)}(E),Object(r.a)(E),Object(r.b)(E),e.default=E}}])}).call(this||window);