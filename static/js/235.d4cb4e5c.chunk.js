"use strict";(self.webpackChunkfirst_project=self.webpackChunkfirst_project||[]).push([[235],{7235:function(e,t,i){i.r(t);var n=i(1413),r=i(3263),s=i(549),o=i(8687),a=i(7689),c=i(2791),A=i(491),l=i(5796),d=i(1134),m=i(8308),p=i(1853),u=i(184),g=function(e){return(0,u.jsxs)("div",{className:r.Z.comment,children:[(0,u.jsxs)("div",{className:r.Z.com_header,children:[(0,u.jsx)("img",{className:r.Z.com_ava,src:null===e.ava?p:e.ava,alt:""}),(0,u.jsx)("div",{className:r.Z.com_name,children:e.name})]}),(0,u.jsx)("div",{className:r.Z.com_text,children:e.text})]})},h=(0,o.$j)((function(e){return{post:e.news.currentPost,posts:e.news.postData,login:e.auth.login,photo:e.auth.photo,likeList:e.auth.likedPosts,isAuth:e.auth.isAuth}}),{openPost:A.gk,addComment:A.Ir,addToLikeList:l.iS,like:A.vL})((function(e){var t=(0,d.cI)(),i=t.register,o=t.handleSubmit,A=t.reset,l=(0,a.UO)(),p=(0,a.s0)();(0,c.useEffect)((function(){e.posts.filter((function(t){t.id===l.id&&e.openPost(t.id,t.userId,t.name,t.time,t.posttext,t.like_count,t.postimage,t.avatar,t.comments)}))}),[l]);var h=e.post.comments.map((function(e){return(0,u.jsx)(g,{ava:e.avatar,name:e.name,text:e.text})}));return(0,u.jsx)("div",{className:r.Z.post,children:(0,u.jsxs)("div",{className:r.Z.inner,children:[(0,u.jsxs)("div",{className:r.Z.header,children:[(0,u.jsx)("div",{className:r.Z.avatar,children:(0,u.jsx)("img",{src:e.post.avatar,alt:""})}),(0,u.jsx)("div",{className:r.Z.name,children:e.post.name}),(0,u.jsx)("div",{className:r.Z.date,children:e.post.time})]}),(0,u.jsx)("div",{className:r.Z.post_image,children:(0,u.jsx)("img",{src:e.post.postimage,alt:""})}),(0,u.jsx)("div",{className:r.Z.text_block,children:(0,u.jsx)("p",{children:e.post.posttext})}),(0,u.jsxs)("div",{className:r.Z.footer,children:[(0,u.jsxs)("div",{className:r.Z.left_block,children:[(0,u.jsx)("button",{className:r.Z.comments,children:(0,u.jsx)("img",{src:s,alt:""})}),(0,u.jsx)("div",{className:r.Z.comments_counter,children:e.post.comments.length})]}),(0,u.jsxs)("div",{className:r.Z.right_block,children:[(0,u.jsx)("div",{className:r.Z.likes_dislikes__counter,children:e.post.like_count}),(0,u.jsx)("div",{className:r.Z.like,children:(0,u.jsx)("button",{disabled:e.likeList.some((function(t){return t===e.post.id})),onClick:function(){!0===e.isAuth&&(e.like(e.post.id),e.addToLikeList(e.post.id),p("/post/"+e.post.id))},type:"button",className:"".concat(r.Z.like_btn," ").concat(e.likeList.some((function(t){return t===e.post.id}))&&e.isAuth&&r.Z.liked),children:"\u2764"})})]})]}),(0,u.jsxs)("div",{className:r.Z.comments_box,children:[e.isAuth&&(0,u.jsxs)("form",{onSubmit:o((function(t){e.addComment(l.id,e.photo,e.login,t.com),p("/post/"+e.post.id),A()})),className:r.Z.form,children:[(0,u.jsx)("div",{className:r.Z.textbox,children:(0,u.jsx)(m.g,(0,n.Z)((0,n.Z)({required:!0},i("com")),{},{placeholder:"Comment"}))}),(0,u.jsx)("div",{className:r.Z.btn_box,children:(0,u.jsx)("input",{className:"quick-posting__btn",type:"submit"})})]}),h]})]})})}));t.default=h},8308:function(e,t,i){i.d(t,{g:function(){return y}});var n=i(7762),r=i(2791),s=i(7462),o=i(3366),a=r.useLayoutEffect,c=function(e,t){"function"!==typeof e?e.current=t:e(t)},A=function(e,t){var i=(0,r.useRef)();return(0,r.useCallback)((function(n){e.current=n,i.current&&c(i.current,null),i.current=t,t&&c(t,n)}),[t])},l={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},d=function(e){Object.keys(l).forEach((function(t){e.style.setProperty(t,l[t],"important")}))},m=null;var p=function(){},u=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],g=!!document.documentElement.currentStyle,h=function(e){var t=function(e){var t=r.useRef(e);return a((function(){t.current=e})),t}(e);(0,r.useLayoutEffect)((function(){var e=function(e){t.current(e)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[])},b=function(e,t){var i=e.cacheMeasurements,n=e.maxRows,a=e.minRows,c=e.onChange,l=void 0===c?p:c,b=e.onHeightChange,v=void 0===b?p:b,x=(0,o.Z)(e,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]);var _=void 0!==x.value,w=(0,r.useRef)(null),I=A(w,t),f=(0,r.useRef)(0),M=(0,r.useRef)(),B=function(){var e=w.current,t=i&&M.current?M.current:function(e){var t=window.getComputedStyle(e);if(null===t)return null;var i,n=(i=t,u.reduce((function(e,t){return e[t]=i[t],e}),{})),r=n.boxSizing;return""===r?null:(g&&"border-box"===r&&(n.width=parseFloat(n.width)+parseFloat(n.borderRightWidth)+parseFloat(n.borderLeftWidth)+parseFloat(n.paddingRight)+parseFloat(n.paddingLeft)+"px"),{sizingStyle:n,paddingSize:parseFloat(n.paddingBottom)+parseFloat(n.paddingTop),borderSize:parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth)})}(e);if(t){M.current=t;var r=function(e,t,i,n){void 0===i&&(i=1),void 0===n&&(n=1/0),m||((m=document.createElement("textarea")).setAttribute("tabindex","-1"),m.setAttribute("aria-hidden","true"),d(m)),null===m.parentNode&&document.body.appendChild(m);var r=e.paddingSize,s=e.borderSize,o=e.sizingStyle,a=o.boxSizing;Object.keys(o).forEach((function(e){var t=e;m.style[t]=o[t]})),d(m),m.value=t;var c=function(e,t){var i=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?i+t.borderSize:i-t.paddingSize}(m,e);m.value="x";var A=m.scrollHeight-r,l=A*i;"border-box"===a&&(l=l+r+s),c=Math.max(l,c);var p=A*n;return"border-box"===a&&(p=p+r+s),[c=Math.min(p,c),A]}(t,e.value||e.placeholder||"x",a,n),s=r[0],o=r[1];f.current!==s&&(f.current=s,e.style.setProperty("height",s+"px","important"),v(s,{rowHeight:o}))}};return(0,r.useLayoutEffect)(B),h(B),(0,r.createElement)("textarea",(0,s.Z)({},x,{onChange:function(e){_||B(),l(e)},ref:I}))},v=(0,r.forwardRef)(b),x=i(3704),_=i(9692),w=(0,i(7581).k)((function(e){return{input:{paddingTop:e.spacing.xs,paddingBottom:e.spacing.xs}}})),I=i(1856),f=i(7745),M=Object.defineProperty,B=Object.defineProperties,k=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,N=function(e,t,i){return t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i},z=function(e,t){for(var i in t||(t={}))Z.call(t,i)&&N(e,i,t[i]);if(E){var r,s=(0,n.Z)(E(t));try{for(s.s();!(r=s.n()).done;){i=r.value;j.call(t,i)&&N(e,i,t[i])}}catch(o){s.e(o)}finally{s.f()}}return e},C=function(e,t){return B(e,k(t))},D={autosize:!1,size:"sm",__staticSelector:"Textarea"},y=(0,r.forwardRef)((function(e,t){var i=(0,_.N4)("Textarea",D,e),s=i.autosize,o=i.maxRows,a=i.minRows,c=i.label,A=i.error,l=i.description,d=i.id,m=i.className,p=i.required,u=i.style,g=i.wrapperProps,h=i.classNames,b=i.styles,M=i.size,B=i.__staticSelector,k=i.sx,N=i.errorProps,y=i.descriptionProps,G=i.labelProps,Y=i.inputWrapperOrder,R=i.inputContainer,Q=i.unstyled,L=i.withAsterisk,T=i.variant,S=function(e,t){var i={};for(var r in e)Z.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&E){var s,o=(0,n.Z)(E(e));try{for(o.s();!(s=o.n()).done;)r=s.value,t.indexOf(r)<0&&j.call(e,r)&&(i[r]=e[r])}catch(a){o.e(a)}finally{o.f()}}return i}(i,["autosize","maxRows","minRows","label","error","description","id","className","required","style","wrapperProps","classNames","styles","size","__staticSelector","sx","errorProps","descriptionProps","labelProps","inputWrapperOrder","inputContainer","unstyled","withAsterisk","variant"]),W=(0,x.M)(d),P=w(),H=P.classes,J=P.cx,O=(0,I.x)(S),U=O.systemStyles,F=O.rest,V=z({required:p,ref:t,error:A,id:W,classNames:C(z({},h),{input:J(H.input,null==h?void 0:h.input)}),styles:b,__staticSelector:B,size:M,multiline:!0,unstyled:Q,variant:T},F);return r.createElement(f.I.Wrapper,z(z({label:c,error:A,id:W,description:l,required:p,style:u,className:m,classNames:h,styles:b,size:M,__staticSelector:B,sx:k,errorProps:N,labelProps:G,descriptionProps:y,inputContainer:R,inputWrapperOrder:Y,unstyled:Q,withAsterisk:L,variant:T},U),g),s?r.createElement(f.I,C(z({},V),{component:v,maxRows:o,minRows:a})):r.createElement(f.I,C(z({},V),{component:"textarea",rows:a})))}));y.displayName="@mantine/core/Textarea"},3263:function(e,t){t.Z={post:"post_post__asiHQ",inner:"post_inner__RufdX",header:"post_header__phl+T",avatar:"post_avatar__+BbsT",name:"post_name__KvdFH",date:"post_date__qIppz",post_image:"post_post_image__MST5Y",text_block:"post_text_block__Du+nD",footer:"post_footer__rfB7H",left_block:"post_left_block__eIxAb",comments:"post_comments__zxgqG",comments_counter:"post_comments_counter__xp+v0",right_block:"post_right_block__r3IM0",like:"post_like__yg2vP",like_btn:"post_like_btn__7AP2Y",liked:"post_liked__y6FR7",likes_dislikes__counter:"post_likes_dislikes__counter__IKD5D",dislike:"post_dislike__QFkdu",error:"post_error__3mtui",comments_box:"post_comments_box__7QqfE",comment:"post_comment__kRZ7y",com_header:"post_com_header__vFAEC",com_ava:"post_com_ava__imquc",com_name:"post_com_name__dl1ed",com_text:"post_com_text__Y9+ia",form:"post_form__xSXDs",textbox:"post_textbox__Lm8oe",btn_box:"post_btn_box__2oN6i"}},549:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF82lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDMgMTE2LmRkYzdiYzQsIDIwMjEvMDgvMTctMTM6MTg6MzcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMDQtMjZUMTE6MDI6MzYrMTA6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDQtMjZUMTE6MDI6MzYrMTA6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA0LTI2VDExOjAyOjM2KzEwOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc5NzNkYjk0LWY2M2ItMmE0Zi1hYTljLWJkY2U1MGRlYTdiNyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmUyOGUwMGQ1LWQ2ZGQtMDA0Mi05MmFhLTI5ZWE0Zjc5MGU1MCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmRkN2IwYWM1LWRkYmEtMDQ0MS05ZTlkLThiZGJhMWM3NjQyNyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZGQ3YjBhYzUtZGRiYS0wNDQxLTllOWQtOGJkYmExYzc2NDI3IiBzdEV2dDp3aGVuPSIyMDIzLTA0LTI2VDExOjAyOjM2KzEwOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjc5NzNkYjk0LWY2M2ItMmE0Zi1hYTljLWJkY2U1MGRlYTdiNyIgc3RFdnQ6d2hlbj0iMjAyMy0wNC0yNlQxMTowMjozNisxMDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjFKwnQAAAbMSURBVHic7ds9dhxVEIbhOz4OWQEZERtjeaQshn0QkA0BEsiypfnrnq6q73nO8SGzG9+qV3fa0ul8Pi8g05ejHwA4jgBAMAGAYAIAwQQAggkABBMACCYAEEwAIJgAQDABgGACAMEEAIIJAAQTAAgmABBMACCYAEAwAYBgAgDBBACCCQAEEwAIJgAQTAAgmABAMAGAYAIAwQQAggkABBMACCYAEEwAIJgAQDABgGACAMEEAIIJAAQTAAgmABBMACCYAEAwAYBgAgDBBACCfT36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"}}]);
//# sourceMappingURL=235.d4cb4e5c.chunk.js.map