(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{14:function(e,c,t){},8:function(e,c,t){"use strict";t.r(c);var n=t(0),a=t(7),r=t(5),s=t(1),i=t(6),o=t.n(i),l=(t(14),function(e){return Object(n.jsx)("button",{className:"square",onClick:e.onClickEvent,children:e.value})}),u=function(){var e=Array(9).fill(null),c=Object(s.useState)(e),t=Object(r.a)(c,2),i=t[0],o=t[1],u=Object(s.useState)(!0),j=Object(r.a)(u,2),b=j[0],d=j[1],O=function(e){return Object(n.jsx)(l,{value:i[e],onClickEvent:function(){return function(e){var c=Object(a.a)(i);c[e]=b?"X":"O",o(c),d(!b)}(e)}})},v=function(e){var c=e.slice(0,3),t=e.slice(3,6),n=e.slice(6,9);function a(e){var c=e[0],t=e[1],n=e[2];if(c&&c===t&&t===n)return"O"===c?"O":"X"}[c,t,n].forEach(a)}(i),f=v?"winner: ".concat(v):"Next player: ".concat(b?"X":"O");return Object(n.jsxs)("div",{style:{backgroundColor:"skyblue",margin:10,padding:10},children:[Object(n.jsx)("div",{className:"status",children:f}),Object(n.jsxs)("div",{className:"board-row",children:[O(0),O(1),O(2)]}),Object(n.jsxs)("div",{className:"board-row",children:[O(3),O(4),O(5)]}),Object(n.jsxs)("div",{className:"board-row",children:[O(6),O(7),O(8)]})]})},j=function(){return Object(n.jsxs)("div",{className:"game",children:[" Tic-Tac-Toe",Object(n.jsx)(u,{})]})};o.a.render(Object(n.jsx)(j,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.5df1f4cb.chunk.js.map