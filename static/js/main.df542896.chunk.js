(this["webpackJsonpar-test"]=this["webpackJsonpar-test"]||[]).push([[0],{11:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),o=n(4),i=n.n(o),a=(n(11),n(3)),u=n.n(a),s=n(5),d=n(6),l=n.p+"static/media/camera_para.fb94e301.dat",m=n(0),f=function(t){console.error("Error while intizalizing arController",t)},h=function(t){t.loadNFTMarker("ar-test/static/markers/digitalls_marker").then((function(e){t.trackNFTMarker(e)})).catch((function(t){console.log("Error in loading marker on Worker",t)})),t.addEventListener("getNFTMarker",(function(t){var e={type:"found",matrix:JSON.stringify(t.data.matrix)};console.log("markerFound",e)}))},p=function(){var t=Object(s.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d.ARController.initWithDimensions(640,480,l).then(h).catch(f);case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){return Object(r.useEffect)((function(){p()})),Object(m.jsx)("div",{children:"Hello"})},j=function(){var t=.01*(document&&document.documentElement&&document.documentElement.clientHeight||window.innerHeight);return document.documentElement.style.setProperty("--vh","".concat(t,"px")),window.addEventListener("resize",(function(){t=.01*(document&&document.documentElement&&document.documentElement.clientHeight||window.innerHeight),document.documentElement.style.setProperty("--vh","".concat(t,"px"))})),Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(g,{})})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),r(t),c(t),o(t),i(t)}))};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(j,{})}),document.getElementById("root")),k()}},[[14,1,2]]]);
//# sourceMappingURL=main.df542896.chunk.js.map