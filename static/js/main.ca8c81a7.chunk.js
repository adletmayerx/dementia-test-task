(this["webpackJsonpdementia-test"]=this["webpackJsonpdementia-test"]||[]).push([[0],{18:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),s=n(13),a=n.n(s),r=(n(18),n(10)),i=n(11),u=n(12),d=n.p+"static/media/clock.67d837c0.png",g=n(2),l=function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1],s=Object(c.useRef)(!1);return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h1",{children:"\u041d\u0430\u0440\u0438\u0441\u0443\u0439\u0442\u0435 \u0447\u0430\u0441\u044b"}),Object(g.jsxs)("div",{className:"canvas-container",children:[Object(g.jsx)("img",{src:d,alt:"\u0447\u0430\u0441\u044b",className:"clock"}),Object(g.jsx)("div",{className:"canvas",children:Object(g.jsx)(u.c,{width:650,height:400,onMouseDown:function(t){s.current=!0;var e=t.target.getStage().getPointerPosition();o([].concat(Object(r.a)(n),[{points:[e.x,e.y]}]))},onMousemove:function(t){if(s.current){var e=t.target.getStage().getPointerPosition(),c=n[n.length-1];c.points=c.points.concat([e.x,e.y]),n.splice(n.length-1,1,c),o(n.concat())}},onMouseup:function(){s.current=!1},children:Object(g.jsx)(u.a,{children:n.map((function(t,e){return Object(g.jsx)(u.b,{points:t.points,stroke:"#df4b26",strokeWidth:5,tension:.5,lineCap:"round",opacity:1},e)}))})})}),Object(g.jsx)("button",{type:"button",className:"save-button",onClick:function(){var t,e=document.createElement("a"),n=document.querySelector(".links-container");e.download="download.png",e.href=document.querySelector("canvas").toDataURL();var c=new Date,o=function(){var t=c;return/1/.test(parseInt((t+"").charAt(0)))?"th":1===(t=parseInt((t+"").charAt(1)))?"st":2===t?"nd":3===t?"rd":"th"}(),s=t+(c.getDate()<10)?"0"+c.getDate()+o:c.getDate()+o,a=["January","February","March","April","May","June","July","August","September","October","November","December"][c.getMonth()],r=c.getFullYear();t=(c.getHours()>12?c.getHours()-12:c.getHours()<10?"0"+c.getHours():c.getHours())+":"+(c.getMinutes()<10?"0"+c.getMinutes():c.getMinutes())+":"+(c.getSeconds()<10?"0"+c.getSeconds():c.getSeconds())+(c.getHours()>12?"PM":"AM")+" "+s+" of "+a+", "+r,e.textContent=t,n.append(e)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}),Object(g.jsx)("div",{className:"links-container"})]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),o(t),s(t),a(t)}))};a.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(l,{})}),document.getElementById("root")),b()}},[[23,1,2]]]);
//# sourceMappingURL=main.ca8c81a7.chunk.js.map