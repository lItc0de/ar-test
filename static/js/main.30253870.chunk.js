(this["webpackJsonpar-test"]=this["webpackJsonpar-test"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),c=n(3),i=n.n(c),a=(n(9),n(4)),d=THREE,s=d.Color,u=d.WebGLRenderer,l=function(e){var t=new u({alpha:!0,canvas:e});return t.setClearColor(new s("lightgrey"),0),t.setSize(window.innerWidth,window.innerHeight),t.domElement.style.position="absolute",t.domElement.style.top="0px",t.domElement.style.left="0px",t},m=n.p+"static/media/camera_para.fb94e301.dat",f=THREEx,p=f.ArMarkerControls,E=f.ArToolkitContext,h=f.ArToolkitSource,w=n(0),j=THREE,v=j.Camera,b=j.Scene,x=function(){var e=Object(r.useState)(!1),t=Object(a.a)(e,2),n=t[0],o=t[1],c=null;Object(r.useEffect)((function(){var e=l(c),t=new b,n=new v;t.add(n);var r=[];(function(e,t){return new p(e,t,{type:"nft",descriptorsUrl:"ar-test/markers/digitalls_marker",changeMatrixMode:"cameraTransformMatrix"})})(function(e,t,n){E.baseURL="../";var r=new h({sourceType:"webcam"}),o=function(){r.onResizeElement(),r.copyElementSizeTo(e.domElement),null!==c.arController&&r.copyElementSizeTo(c.arController.canvas)};r.init((function(){o()})),window.addEventListener("resize",(function(){o()}));var c=new E({cameraParametersUrl:m,detectionMode:"mono"});return c.init((function(){t.projectionMatrix.copy(c.getProjectionMatrix())})),n.push((function(){!1!==r.ready&&c.update(r.domElement)})),c}(e,n,r),n).addEventListener("markerFound",(function(){o(!0)})),r.push((function(){e.render(t,n)}))}),[]);return Object(w.jsxs)("div",{children:[Object(w.jsx)("canvas",{ref:function(e){c=e}}),!n&&Object(w.jsx)("div",{children:Object(w.jsx)("h1",{children:"Marker found"})})]})},g=function(){var e=.01*(document&&document.documentElement&&document.documentElement.clientHeight||window.innerHeight);return document.documentElement.style.setProperty("--vh","".concat(e,"px")),window.addEventListener("resize",(function(){e=.01*(document&&document.documentElement&&document.documentElement.clientHeight||window.innerHeight),document.documentElement.style.setProperty("--vh","".concat(e,"px"))})),Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(x,{})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),o(e),c(e),i(e)}))};i.a.render(Object(w.jsx)(o.a.StrictMode,{children:Object(w.jsx)(g,{})}),document.getElementById("root")),y()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.30253870.chunk.js.map