(this["webpackJsonpar-test"]=this["webpackJsonpar-test"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=(n(12),n(7)),s=n(3),d=n.n(s),u=n(5),m=n(6),g=n.p+"static/media/camera_para.fb94e301.dat",l=n(1),f=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.ARController.initWithDimensions(640,480,g);case 2:(t=e.sent).artoolkit.addNFTMarker(t.id,"ar-test/static/markers/digitalls_markerrr").then((function(e){console.log("Marker added with marker ID",e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(r.useState)(Object(r.createRef)()),t=Object(c.a)(e,1)[0],n={audio:!1,video:{facingMode:"user",width:640,height:480,frameRate:{max:30}}},a=function(e){console.log("error",e)},i=function(e){t.current.srcObject=e,f()};return Object(r.useEffect)((function(){navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.oGetUserMedia,navigator.getUserMedia&&navigator.getUserMedia(n,i,a)})),Object(l.jsx)("video",{ref:t,autoPlay:!0})},v=function(){var e=.01*(document&&document.documentElement&&document.documentElement.clientHeight||window.innerHeight);return document.documentElement.style.setProperty("--vh","".concat(e,"px")),window.addEventListener("resize",(function(){e=.01*(document&&document.documentElement&&document.documentElement.clientHeight||window.innerHeight),document.documentElement.style.setProperty("--vh","".concat(e,"px"))})),Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(h,{})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),i(e),o(e)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.5acef4ee.chunk.js.map