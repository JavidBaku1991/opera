"use strict";(self.webpackChunkopera=self.webpackChunkopera||[]).push([[903],{3472:(t,e,o)=>{o.r(e),o.d(e,{default:()=>it});var i=o(5043),a=o(1325),n=o(6131),r=o(6023),s=o(6446),c=o(8587),l=o(8168),m=o(8606),p=o(8387),d=o(4535),g=o(1070),u=o(7056),f=o(2400);function h(t){return(0,f.Ay)("MuiImageList",t)}(0,u.A)("MuiImageList",["root","masonry","quilted","standard","woven"]);const v=i.createContext({});var A=o(579);const w=["children","className","cols","component","rowHeight","gap","style","variant"],b=(0,d.Ay)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant]]}})((t=>{let{ownerState:e}=t;return(0,l.A)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===e.variant&&{display:"block"})})),x=i.forwardRef((function(t,e){const o=(0,g.A)({props:t,name:"MuiImageList"}),{children:a,className:n,cols:r=2,component:s="ul",rowHeight:d="auto",gap:u=4,style:f,variant:x="standard"}=o,I=(0,c.A)(o,w),j=i.useMemo((()=>({rowHeight:d,gap:u,variant:x})),[d,u,x]);i.useEffect((()=>{0}),[]);const y="masonry"===x?(0,l.A)({columnCount:r,columnGap:u},f):(0,l.A)({gridTemplateColumns:"repeat(".concat(r,", 1fr)"),gap:u},f),k=(0,l.A)({},o,{component:s,gap:u,rowHeight:d,variant:x}),S=(t=>{const{classes:e,variant:o}=t,i={root:["root",o]};return(0,m.A)(i,h,e)})(k);return(0,A.jsx)(b,(0,l.A)({as:s,className:(0,p.A)(S.root,S[x],n),ref:e,style:y,ownerState:k},I,{children:(0,A.jsx)(v.Provider,{value:j,children:a})}))}));o(805);var I=o(154);function j(t){return(0,f.Ay)("MuiImageListItem",t)}const y=(0,u.A)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),k=["children","className","cols","component","rows","style"],S=(0,d.Ay)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[{["& .".concat(y.img)]:e.img},e.root,e[o.variant]]}})((t=>{let{ownerState:e}=t;return(0,l.A)({display:"block",position:"relative"},"standard"===e.variant&&{display:"flex",flexDirection:"column"},"woven"===e.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},{["& .".concat(y.img)]:(0,l.A)({objectFit:"cover",width:"100%",height:"100%",display:"block"},"standard"===e.variant&&{height:"auto",flexGrow:1})})})),B=i.forwardRef((function(t,e){const o=(0,g.A)({props:t,name:"MuiImageListItem"}),{children:a,className:n,cols:r=1,component:s="li",rows:d=1,style:u}=o,f=(0,c.A)(o,k),{rowHeight:h="auto",gap:w,variant:b}=i.useContext(v);let x="auto";"woven"===b?x=void 0:"auto"!==h&&(x=h*d+w*(d-1));const y=(0,l.A)({},o,{cols:r,component:s,gap:w,rowHeight:h,rows:d,variant:b}),B=(t=>{const{classes:e,variant:o}=t,i={root:["root",o],img:["img"]};return(0,m.A)(i,j,e)})(y);return(0,A.jsx)(S,(0,l.A)({as:s,className:(0,p.A)(B.root,B[b],n),ref:e,style:(0,l.A)({height:x,gridColumnEnd:"masonry"!==b?"span ".concat(r):void 0,gridRowEnd:"masonry"!==b?"span ".concat(d):void 0,marginBottom:"masonry"===b?w:void 0,breakInside:"masonry"===b?"avoid":void 0},u),ownerState:y},f,{children:i.Children.map(a,(t=>i.isValidElement(t)?"img"===t.type||(0,I.A)(t,["Image"])?i.cloneElement(t,{className:(0,p.A)(B.img,t.props.className)}):t:null))}))}));var L=o(6803);function N(t){return(0,f.Ay)("MuiImageListItemBar",t)}(0,u.A)("MuiImageListItemBar",["root","positionBottom","positionTop","positionBelow","titleWrap","titleWrapBottom","titleWrapTop","titleWrapBelow","titleWrapActionPosLeft","titleWrapActionPosRight","title","subtitle","actionIcon","actionIconActionPosLeft","actionIconActionPosRight"]);const R=["actionIcon","actionPosition","className","subtitle","title","position"],P=(0,d.Ay)("div",{name:"MuiImageListItemBar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e["position".concat((0,L.A)(o.position))]]}})((t=>{let{theme:e,ownerState:o}=t;return(0,l.A)({position:"absolute",left:0,right:0,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",fontFamily:e.typography.fontFamily},"bottom"===o.position&&{bottom:0},"top"===o.position&&{top:0},"below"===o.position&&{position:"relative",background:"transparent",alignItems:"normal"})})),W=(0,d.Ay)("div",{name:"MuiImageListItemBar",slot:"TitleWrap",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.titleWrap,e["titleWrap".concat((0,L.A)(o.position))],o.actionIcon&&e["titleWrapActionPos".concat((0,L.A)(o.actionPosition))]]}})((t=>{let{theme:e,ownerState:o}=t;return(0,l.A)({flexGrow:1,padding:"12px 16px",color:(e.vars||e).palette.common.white,overflow:"hidden"},"below"===o.position&&{padding:"6px 0 12px",color:"inherit"},o.actionIcon&&"left"===o.actionPosition&&{paddingLeft:0},o.actionIcon&&"right"===o.actionPosition&&{paddingRight:0})})),M=(0,d.Ay)("div",{name:"MuiImageListItemBar",slot:"Title",overridesResolver:(t,e)=>e.title})((t=>{let{theme:e}=t;return{fontSize:e.typography.pxToRem(16),lineHeight:"24px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}})),C=(0,d.Ay)("div",{name:"MuiImageListItemBar",slot:"Subtitle",overridesResolver:(t,e)=>e.subtitle})((t=>{let{theme:e}=t;return{fontSize:e.typography.pxToRem(12),lineHeight:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}})),H=(0,d.Ay)("div",{name:"MuiImageListItemBar",slot:"ActionIcon",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.actionIcon,e["actionIconActionPos".concat((0,L.A)(o.actionPosition))]]}})((t=>{let{ownerState:e}=t;return(0,l.A)({},"left"===e.actionPosition&&{order:-1})})),T=i.forwardRef((function(t,e){const o=(0,g.A)({props:t,name:"MuiImageListItemBar"}),{actionIcon:i,actionPosition:a="right",className:n,subtitle:r,title:s,position:d="bottom"}=o,u=(0,c.A)(o,R),f=(0,l.A)({},o,{position:d,actionPosition:a}),h=(t=>{const{classes:e,position:o,actionIcon:i,actionPosition:a}=t,n={root:["root","position".concat((0,L.A)(o))],titleWrap:["titleWrap","titleWrap".concat((0,L.A)(o)),i&&"titleWrapActionPos".concat((0,L.A)(a))],title:["title"],subtitle:["subtitle"],actionIcon:["actionIcon","actionIconActionPos".concat((0,L.A)(a))]};return(0,m.A)(n,N,e)})(f);return(0,A.jsxs)(P,(0,l.A)({ownerState:f,className:(0,p.A)(h.root,n),ref:e},u,{children:[(0,A.jsxs)(W,{ownerState:f,className:h.titleWrap,children:[(0,A.jsx)(M,{className:h.title,children:s}),r?(0,A.jsx)(C,{className:h.subtitle,children:r}):null]}),i?(0,A.jsx)(H,{ownerState:f,className:h.actionIcon,children:i}):null]}))})),E=o.p+"static/media/1.6910f49d1e881b9fae83.jpeg",z=o.p+"static/media/karmen1.9fb7d4765afd9a3c27b4.jpg",F=o.p+"static/media/karmen2.33af5f4ede4db39b69c7.jpg",G=o.p+"static/media/karmen3.2bbfd1975f69a6237304.jpg",O=o.p+"static/media/karmen4.73613c1b09309db7c327.jpg",q=o.p+"static/media/karmen5.ea7cddcc6a771b7bb6f1.jpg",D=o.p+"static/media/karmen6.1ef652d8cbd1de24cd93.jpg",V=o.p+"static/media/karmen7.705bce6d08fdae4f200c.jpg",Y=o.p+"static/media/karmen8.4b853676432793152633.jpg",J=o.p+"static/media/karmen9.ca8fcf7096e28dea780c.jpg",K=o.p+"static/media/karmen11.2c4f554805a1702a008a.jpg",Q=o.p+"static/media/karmen12.281866003fc3850de89f.jpg",U=o.p+"static/media/karmen13.a17734621ee98fefe457.jpg",X=o.p+"static/media/karmen14.94eff1287a19189ad86e.jpg",Z=o.p+"static/media/karmen15.c320d5cbbcd134d76cb3.jpg",$=o.p+"static/media/filarkons.3019312721a9a5d7af8e.png",_=window.innerWidth>900,tt=[{img:z,title:"Bed"},{img:F,title:"Books"},{img:G,title:"Sink"},{img:O,title:"Blinds"},{img:q,title:"Storage"},{img:D,title:"Chairs"},{img:V,title:"Laptop"},{img:Y,title:"Coffee"},{img:J,title:"Candle"},{img:K,title:"Candle"},{img:K,title:"Candle"},{img:Q,title:"Candle"},{img:U,title:"Bed"},{img:X,title:"Bed"},{img:Z,title:"Bed"},{img:E,title:"Books"},{img:$,title:"Books"}],et=()=>(0,A.jsx)(s.A,{className:"photoslist-container mt-10",children:(0,A.jsx)(s.A,{className:"hero-photos",sx:{scrollbarWidth:"none"},children:(0,A.jsx)(x,{variant:"masonry",cols:_?3:2,gap:20,children:tt.map((t=>(0,A.jsxs)(B,{children:[(0,A.jsx)("img",{className:"photo box-shadow ",srcSet:"".concat(t.img,"?w=248&fit=crop&auto=format&dpr=2 2x"),src:"".concat(t.img,"?w=248&fit=crop&auto=format"),alt:t.title,loading:"lazy"}),(0,A.jsx)(T,{position:"below",title:t.author})]},t.img)))})})});var ot=o(1395);const it=function(){return(0,A.jsxs)("div",{className:"photos-container",children:[(0,A.jsx)(a.A,{}),(0,A.jsxs)("div",{className:"ml-3 mr-3 ",children:[(0,A.jsx)("br",{}),(0,A.jsx)("br",{}),(0,A.jsx)("br",{}),(0,A.jsx)("br",{}),(0,A.jsx)("br",{}),(0,A.jsx)("br",{}),(0,A.jsx)(ot.A,{title:"\u015e\u0259kill\u0259r"}),(0,A.jsx)("br",{}),(0,A.jsx)("br",{}),(0,A.jsx)(et,{}),(0,A.jsx)(r.A,{})]}),(0,A.jsx)(n.A,{})]})}}}]);
//# sourceMappingURL=903.a025ce98.chunk.js.map