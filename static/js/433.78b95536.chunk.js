"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[433],{11:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var r=t(439),i=t(791),a=t(87),o={container:"Home_container__MGYYT",secondHeading:"Home_secondHeading__+B+zA",error:"Home_error__tKZbo",list:"Home_list__axoM8"},c=t(184),s=function(e){var n=e.handleFetching,t=(0,i.useState)([]),s=(0,r.Z)(t,2),l=s[0],d=s[1],u=(0,i.useState)(!1),h=(0,r.Z)(u,2),m=h[0],_=h[1];return(0,i.useEffect)((function(){n("https://api.themoviedb.org/3/trending/movie/day?language=en-US").then((function(e){return e.results})).then((function(e){return d(e)})).catch((function(){return _(!0)}))}),[n]),(0,c.jsx)("main",{children:(0,c.jsxs)("div",{className:o.container,children:[(0,c.jsx)("h2",{className:o.secondHeading,children:"Trending today"}),(m||!l)&&(0,c.jsx)("p",{className:o.error,children:"Error: Failed to get information from the server."}),l&&(0,c.jsx)("div",{children:l.length>0&&(0,c.jsx)("ul",{className:o.list,children:l.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{className:o.link,to:"/movies/".concat(e.id),children:e.title})},e.id)}))})})]})})}}}]);
//# sourceMappingURL=433.78b95536.chunk.js.map