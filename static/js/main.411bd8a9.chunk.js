(this.webpackJsonpmyposts=this.webpackJsonpmyposts||[]).push([[0],{26:function(e,t,s){},27:function(e,t,s){},29:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var c=s(16),a=s(17),i=s(2),n=s(18),l=s.n(n),r=(s(26),s(9)),d=s(3),o=(s(27),s(1)),u=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Welcome back bro!!"}),Object(o.jsxs)("p",{children:["Please ",Object(o.jsx)("a",{className:"refresh",href:"https://KapadiaShubham.github.io/MyPosts",children:"click here"})," if your previous posts are not visible"]}),Object(o.jsxs)("div",{className:"Inputdiv",children:[Object(o.jsx)("div",{className:"webflow-style-input",children:Object(o.jsx)("input",{className:"input",type:"email",placeholder:"What's on your mind bro?"})}),Object(o.jsx)("button",{className:"add",children:Object(o.jsx)("i",{class:"fas fa-paper-plane"})})]}),Object(o.jsx)("div",{class:"container"})]})},j=s(21),h=(s(29),s(11)),m=s(20),b=function(){var e=Object(i.useState)(!1),t=Object(j.a)(e,2),s=t[0],c=t[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("nav",{className:"main-nav",children:[Object(o.jsx)("div",{className:"logo",children:Object(o.jsxs)("h2",{children:[Object(o.jsx)("span",{children:"M"}),"y",Object(o.jsx)("span",{children:"P"}),"osts"]})}),Object(o.jsx)("div",{className:s?"menu-link mobile-menu-link":"menu-link",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/about",children:"Sign In"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/service",children:"Sign Up"})})]})}),Object(o.jsxs)("div",{className:"social-media",children:[Object(o.jsxs)("ul",{className:"social-media-desktop",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://www.facebook.com/",target:"_thapa",children:Object(o.jsx)(h.a,{className:"facebook"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://www.instagram.com/",target:"_thapa",children:Object(o.jsx)(h.b,{className:"instagram"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://www.youtube.com/",target:"_thapa",children:Object(o.jsx)(h.c,{className:"youtube"})})})]}),Object(o.jsx)("div",{className:"hamburger-menu",children:Object(o.jsx)("a",{href:"#",onClick:function(){return c(!s)},children:Object(o.jsx)(m.a,{})})})]})]})})},p=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("section",{className:"signup",children:Object(o.jsx)("div",{className:"container mt-5",children:Object(o.jsxs)("div",{className:"signup-form",children:[Object(o.jsx)("h1",{children:"Sign Up"}),Object(o.jsxs)("form",{action:"noaction.php",className:"form",children:[Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",name:"",placeholder:"Enter your Name"})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",name:"",placeholder:"Enter your Email Id"})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",name:"",placeholder:"Enter your Phone Number"})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"password",name:"",placeholder:"Enter password"})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"password",name:"",placeholder:"Confirm password"})}),Object(o.jsx)("button",{className:"btn",children:"Sign Up"})]})]})})})})},v=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Sign In"}),Object(o.jsx)("div",{className:"form",children:Object(o.jsxs)("form",{action:"noaction.php",children:[Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",name:"",placeholder:"Enter your Email Id"})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"password",name:"",placeholder:"Enter password"})}),Object(o.jsx)("button",{className:"btn",children:"Sign In"})]})})]})};var x=function(){return Object(o.jsx)("div",{class:"container"})},O=function(){return Object(o.jsxs)(r.a,{children:[Object(o.jsx)(b,{}),Object(o.jsx)("main",{children:Object(o.jsxs)(d.c,{children:[Object(o.jsxs)(d.a,{path:"/",exact:!0,children:[Object(o.jsx)(u,{}),Object(o.jsx)(x,{})]}),Object(o.jsxs)(d.a,{path:"/MyPosts",exact:!0,children:[Object(o.jsx)(u,{}),Object(o.jsx)(x,{})]}),Object(o.jsx)(d.a,{path:"/about",exact:!0,children:Object(o.jsx)(v,{})}),Object(o.jsx)(d.a,{path:"/service",exact:!0,children:Object(o.jsx)(p,{})})]})})]})};l.a.render(Object(o.jsx)(O,{}),document.getElementById("root"));var f=document.querySelector(".container"),g=document.querySelector(".input"),y=document.querySelector(".add"),k=(document.querySelector(".likes"),document.querySelector(".dislikes"),[]);if(void 0==window.localStorage.getItem("todos")){var w=[];window.localStorage.setItem("todos",JSON.stringify(w))}for(var N=window.localStorage.getItem("todos"),S=(w=JSON.parse(N),0);S<w.length;S++)k.push({key:w[S],value:[0,0,0,0]});console.log(k);var L=function(){function e(t){Object(c.a)(this,e),this.createItem(t)}return Object(a.a)(e,[{key:"createItem",value:function(e){var t=this,s=document.createElement("div");s.classList.add("item");var c=document.createElement("input");c.type="text",c.disabled=!0,c.value=e,console.log(e),c.classList.add("item_input");var a=document.createElement("button");a.classList.add("edit"),a.innerHTML='<i class="fas fa-user-edit"></i>',a.addEventListener("click",(function(){c.classList.toggle("editing"),c.classList.toggle("textbox"),c.classList.contains("editing")?a.innerHTML='<i class="fas fa-check" style="color:blue"></i>':a.innerHTML='<i class="fas fa-user-edit"></i>',t.editfunc(c,e)}));var i=document.createElement("button");i.classList.add("remove"),i.innerHTML='<i class="fas fa-trash"></i>',i.addEventListener("click",(function(){return t.remove(s,e)}));var n=document.createElement("div");n.classList.add("likes_and_share");var l=document.createElement("div"),r=document.createElement("div"),d=document.createElement("div");r.classList.add("like"),d.classList.add("dislike");var o=document.createElement("div");l.classList.add("like_dislike"),o.classList.add("share"),o.innerHTML='<i class="fas fa-share"></i>',r.innerHTML='<i class="far fa-thumbs-up"></i><div class="likes">0</div>',d.innerHTML='<i class="far fa-thumbs-down"></i><div class="dislikes">0</div>';var u=document.createElement("div");f.appendChild(s),s.appendChild(u),s.appendChild(n),n.appendChild(l),n.appendChild(o),l.appendChild(r),l.appendChild(d),u.appendChild(c),u.appendChild(a),u.appendChild(i)}},{key:"editfunc",value:function(e,t){if(1==e.disabled)e.disabled=!e.disabled;else{e.disabled=!e.disabled;var s=w.indexOf(t);w[s]=e.value,window.localStorage.setItem("todos",JSON.stringify(w))}}},{key:"remove",value:function(e,t){e.parentNode.removeChild(e);var s=w.indexOf(t);w.splice(s,1),window.localStorage.setItem("todos",JSON.stringify(w))}}]),e}();function E(){""!=g.value&&(new L(g.value),w.push(g.value),k.push(g.value),window.localStorage.setItem("todos",JSON.stringify(w)),g.value="")}y.addEventListener("click",E),window.addEventListener("keydown",(function(e){13==e.which&&E()}));for(var I=0;I<w.length;I++)new L(w[I]);for(var M=function(e){var t=document.querySelectorAll(".like"),s=document.querySelectorAll(".dislike");t[e].addEventListener("click",(function(){!function(e){var t=document.querySelectorAll(".like"),s=document.querySelectorAll(".dislike");0==k[e].value[0]&&(k[e].value[0]=1,1==k[e].value[2]&&(k[e].value[3]-=1),k[e].value[2]=0,k[e].value[1]+=1,t[e].innerHTML='<i class="fas fa-thumbs-up"></i><div class="likes">'.concat(k[e].value[1],"</div>"),s[e].innerHTML='<i class="far fa-thumbs-down"></i><div class="dislikes">'.concat(k[e].value[3],"</div>"))}(e)})),s[e].addEventListener("click",(function(){!function(e){var t=document.querySelectorAll(".like"),s=document.querySelectorAll(".dislike");0==k[e].value[2]&&(k[e].value[2]=1,1==k[e].value[0]&&(k[e].value[1]-=1),k[e].value[0]=0,k[e].value[3]+=1,s[e].innerHTML='<i class="fas fa-thumbs-down"></i><div class="dislikes">'.concat(k[e].value[3],"</div>"),t[e].innerHTML='<i class="far fa-thumbs-up"></i><div class="likes">'.concat(k[e].value[1],"</div>"))}(e)}))},C=0;C<k.length;C++)M(C)}},[[38,1,2]]]);
//# sourceMappingURL=main.411bd8a9.chunk.js.map