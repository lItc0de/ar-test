(this["webpackJsonpar-test"]=this["webpackJsonpar-test"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(5),o=n.n(c),i=(n(12),n(7)),s=n(2),d=n.n(s),u=n(4),l=n(6),m=n.p+"static/media/camera_para.fb94e301.dat",f=n(0),h=function(){var e=Object(u.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={audio:!1,video:{facingMode:"user",width:640,height:480,frameRate:{max:30}}},e.next=3,navigator.mediaDevices.getUserMedia(n);case 3:r=e.sent,console.log("init camera"),t(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){console.error("Error while intizalizing arController",e)},p=function(e){e.loadNFTMarker("ar-test/static/markers/digitalls_marker").then((function(t){e.trackNFTMarkerId(t)})).catch((function(e){console.log("Error in loading marker on Worker",e)})),e.addEventListener("getNFTMarker",(function(e){var t={type:"found",matrix:JSON.stringify(e.data.matrix)};console.log("markerFound",t)}))},j=function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.ARController.initWithDimensions(640,480,m).then(p).catch(g);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.createRef)();return Object(r.useEffect)((function(){h(a)}),[]),Object(f.jsx)(f.Fragment,{children:n?Object(f.jsx)("video",{ref:c,srcObject:n,onLoadedMetadata:function(){console.log("loaded metadata"),c.play()},loadedData:function(){console.log("Camera is ready"),j()}}):Object(f.jsx)("h1",{children:"Video loading..."})})},b=function(){var e=.01*(document&&document.documentElement&&document.documentElement.clientHeight||window.innerHeight);return document.documentElement.style.setProperty("--vh","".concat(e,"px")),window.addEventListener("resize",(function(){e=.01*(document&&document.documentElement&&document.documentElement.clientHeight||window.innerHeight),document.documentElement.style.setProperty("--vh","".concat(e,"px"))})),Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(v,{})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(b,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.d9a5b611.chunk.js.map