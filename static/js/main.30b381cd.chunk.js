(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{14:function(e,t,c){},8:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(7),r=c(5),s=c(1),o=c(6),i=c.n(o),l=(c(14),function(e){return Object(n.jsx)("button",{className:"square",onClick:e.onClickEvent,children:e.value})}),u=function(){var e=Array(9).fill(null),t=Object(s.useState)(e),c=Object(r.a)(t,2),o=c[0],i=c[1],u=Object(s.useState)(!0),j=Object(r.a)(u,2),d=j[0],O=j[1],v=function(e){return Object(n.jsx)(l,{value:o[e],onClickEvent:function(){return function(e){var t=Object(a.a)(o),c=Boolean(b(t)),n=Boolean(t[e]);c||n||(t[e]=d?"X":"O",i(t),O(!d))}(e)}})},f=b(o),h=f?"winner: ".concat(f):"Next player: ".concat(d?"X":"O");return Object(n.jsxs)("div",{style:{backgroundColor:"skyblue",margin:10,padding:10},children:[Object(n.jsx)("div",{className:"status",children:h}),Object(n.jsxs)("div",{className:"board-row",children:[v(0),v(1),v(2)]}),Object(n.jsxs)("div",{className:"board-row",children:[v(3),v(4),v(5)]}),Object(n.jsxs)("div",{className:"board-row",children:[v(6),v(7),v(8)]})]})},j=function(){return Object(n.jsxs)("div",{className:"game",children:[" Tic-Tac-Toe",Object(n.jsx)(u,{})]})};function b(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],c=0;c<t.length;c++){var n=t[c],a=n[0],r=n[1],s=n[2];if(e[a]&&e[a]==e[r]&&e[r]==e[s]&&e[s]==e[a])return e[a]}}i.a.render(Object(n.jsx)(j,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.30b381cd.chunk.js.map