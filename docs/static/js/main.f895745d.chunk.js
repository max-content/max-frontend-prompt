(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{31:function(e,n,t){},51:function(e,n,t){},58:function(e,n,t){"use strict";t.r(n);var a,c,i,r,o,l,s=t(0),d=t.n(s),h=t(23),p=t.n(h),b=(t(31),t(13)),j=t(12),x=t(7),u=t(59),g=t(24),m=t.n(g),O=(t(50),t(51),t(5)),v=t(6),f=v.a.header(a||(a=Object(O.a)(["\n    background: var(--green);\n    color: var(--offWhite);\n    padding: 20px;\n    h1 {\n        color: var(--offWhite);\n        text-shadow: 3px 2px var(--black);\n    }\n"]))),S=v.a.div(c||(c=Object(O.a)(["\n    width: 95%;\n    max-width: 600px;\n    margin: 0 auto;\n    padding-bottom: 60px;\n    h2 {\n        color: var(--green);\n    }\n    div {\n        color: var(--lime);\n    }\n"]))),k=v.a.div(i||(i=Object(O.a)(["\n    margin-left: 100px;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n    input {\n        width: 300px;\n        margin-top: 15px;\n    }\n"]))),w=v.a.button(r||(r=Object(O.a)(["\n    background-color: var(--darkGreen);\n    color: var(--lime);\n    border: 1px solid var(--white);\n    border-radius: 5px;\n    height: 30px;\n    margin-left: 10px;\n    margin-right: 20px;\n    text-decoration: none;\n    padding: -5px;\n    &:hover {\n        background-color: var(--green);\n        color: var(--offWhite);\n        border: 1px solid var(--black);\n    }\n"]))),y=v.a.div(o||(o=Object(O.a)(["\n    display: flex;\n    flex-wrap: wrap; \n    width: 1500px;\n    margin-left: -400px;\n"]))),C=Object(v.a)(u.a.div)(l||(l=Object(O.a)(["\n    border-radius: 15px;\n    padding: 15px;\n    margin: 10px;\n    width: max-content;\n    height: calc(max-content + 5px);\n    background-color: var(--darkGreen);\n    box-shadow: 1px 1px 15px rgba(0,0,0,0.4);\n    h1 {\n        color: var(--lime);\n        font-size: 1.5rem;\n    }\n    img {\n        width: 100px;\n    }\n"]))),T=t(1);function I(e){var n=e.onChange,t=e.onSubmitHandler,a=e.placeholder,c=e.query;return Object(T.jsxs)(k,{children:[Object(T.jsx)("input",{className:"SearchInput",type:"text",onChange:n,placeholder:a,value:c}),Object(T.jsx)(w,{onClick:t,children:"Search"})]})}var F,N=function(e){return Object(T.jsxs)(C,{children:[Object(T.jsxs)("div",{className:"flexy",children:[Object(T.jsx)("h1",{children:e.title}),Object(T.jsxs)("p",{children:["(",e.year,")"]})]}),Object(T.jsx)("img",{src:e.poster,alt:e.title}),e.children]})};var D=Object(v.a)(u.a.nav)(F||(F=Object(O.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: 25vw;\n    height: 100vh;\n    padding: 35px;\n    background: var(--darkGreen);\n    box-shadow: 3px 3px 50px var(--black);\n    z-index: 10;\n    ul {\n        padding: 0;\n        margin: 0;\n    }\n    li {\n        display: block;\n        text-align: left;\n        padding: 0;\n        margin: 0;\n        font-size: 2rem;\n        color: var(--lime);    \n    }\n"]))),P={open:{x:0},closed:{x:"-100%",transition:{delay:.2}}},z=t(57),B="https://www.omdbapi.com/",G="apikey=15b7ffe4",L="&type=movie",W=function(){var e=Object(s.useState)(!0),n=Object(x.a)(e,2),t=(n[0],n[1],Object(s.useState)([])),a=Object(x.a)(t,2),c=a[0],i=(a[1],Object(s.useState)("")),r=Object(x.a)(i,2),o=r[0],l=r[1],d=Object(s.useState)([]),h=Object(x.a)(d,2),p=h[0],g=h[1],O=Object(s.useState)([]),v=Object(x.a)(O,2),k=v[0],C=v[1],F=Object(s.useState)(""),W=Object(x.a)(F,2),Y=W[0],H=W[1],J=Object(s.useState)(!1),q=Object(x.a)(J,2),E=q[0],M=q[1];return Object(T.jsxs)("div",{children:[Object(T.jsxs)(f,{children:[Object(T.jsx)("h1",{children:"The Shoppies Nominations!"}),Object(T.jsx)(w,{onClick:function(){return M(!0)},style:{textDecoration:"none"},children:"Nominations"}),Object(T.jsxs)(D,{variants:P,initial:"closed",animate:E?"open":"closed",transition:{damping:300},children:[Object(T.jsx)(w,{style:{marginLeft:"-300px",marginTop:"-300px",marginBottom:"10px"},onClick:function(){return M(!1)},children:"Close"}),Object(T.jsx)(u.a.ul,{children:k.map((function(e){return Object(T.jsx)(u.a.li,{children:e})}))})]})]}),Object(T.jsxs)(S,{children:[Object(T.jsx)(I,{onChange:function(e){return l(z(e.target.value,"+"))},onSubmitHandler:function(){m.a.get("".concat(B,'?s="').concat(o,'"&').concat(G)).then((function(e){console.log(e),console.log(e.data.Search),console.log("".concat(B,"?s=").concat(o,"&").concat(G,"&").concat(L)),console.log("I am here"),void 0===e.data.Search?H("This movie is unavailable please try to nominate something else."):""===e.data.Search?H(""):e.data.Search.type!==L?H("Please enter a movie not a series"):(e.data.Search.type,H(""))})).catch((function(e){console.log(e)}))},value:o,placeholder:"Search"}),Object(T.jsx)("div",{children:Y}),Object(T.jsx)(y,{children:Object(T.jsx)(T.Fragment,{children:c.map((function(e,n){return Object(T.jsx)(N,Object(b.a)(Object(b.a)({title:e.Title,poster:e.Poster,year:e.Year},c),{},{children:Object(T.jsx)(w,{type:"submit",onClick:function(n){return function(e){if(5===p.length)alert("You have selected 5 movies");else if(function(e,n){for(var t=!1,a=0;a<n.length;a++)e.imdbID===n[a].imdbID&&(t=!0);return t}(e,p))alert("You have already nominated this movie");else{var n=Object(j.a)(p),t=Object(j.a)(k);n.push(e),t.push(e.Title),g(n),C(t)}}(e)},children:"Nominate"})}),n)}))})})]})]})},Y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,60)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),a(e),c(e),i(e),r(e)}))};p.a.render(Object(T.jsx)(d.a.StrictMode,{children:Object(T.jsx)(W,{})}),document.getElementById("root")),Y()}},[[58,1,2]]]);
//# sourceMappingURL=main.f895745d.chunk.js.map