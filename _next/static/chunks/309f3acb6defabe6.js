(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,81413,e=>{"use strict";var t=e.i(43476),r=e.i(45009),o=e.i(71645),i=e.i(10557),n=e.i(36807),s=e.i(43090);e.i(47167);var a=e.i(7558);let d=function(e){let{children:t,defer:r=!1,fallback:i=null}=e,[n,s]=o.useState(!1);return(0,a.default)(()=>{r||s(!0)},[r]),o.useEffect(()=>{r&&s(!0)},[r]),n?t:i};var l=e.i(614),c=e.i(19646),u=e.i(79426),h=e.i(29198),p=e.i(53044);let g={desktop:{width:"100%",icon:"tabler-device-imac"},tablet:{width:850,icon:"tabler-device-tablet"},mobile:{width:425,icon:"tabler-device-mobile"}};function f({icon:e,screen:r,screenSize:o,onScreenChange:i}){let n=o===r?"grey.300":"grey.100";return(0,t.jsx)(s.default,{sx:{width:36,height:36,bgcolor:n,border:"1px solid",borderColor:o===r?"grey.600":"grey.300","&.MuiIconButton-root:hover":{borderColor:"grey.600",bgcolor:n}},onClick:()=>i(r),"aria-label":r,children:(0,t.jsx)(u.default,{..."string"==typeof e?{name:e}:{...e},size:20,color:"text.primary"})})}function b({src:e,defaultHeight:r}){let s,a=(0,i.useTheme)(),b=(0,o.useRef)(null),m=(0,o.useId)(),[x,y]=(0,o.useState)("desktop"),[w,v]=(0,o.useState)(450),[j,k]=(0,o.useState)(!1),[T,C]=(0,o.useState)(!1),S=e=>{let t=b.current;if(t&&t.contentWindow?.document){let r=t.contentWindow.document.documentElement?.scrollHeight,o=t.contentWindow.document.documentElement?.offsetHeight;v("screenChange"===e?o:"load"===e&&r>o?o>450?o:450:r)}};(0,o.useEffect)(()=>{let e=b?.current?.contentWindow?.document;if(e&&e.documentElement&&"undefined"!=typeof ResizeObserver){let t=new ResizeObserver(()=>S());try{t.observe(e.documentElement)}catch(e){console.error("ResizeObserver error:",e)}return()=>t.disconnect()}},[j]);let R=(0,o.useCallback)(()=>{setTimeout(()=>{S("load"),setTimeout(()=>{k(!j)},500)},500)},[]);(0,o.useEffect)(()=>{if(T){let e=b.current;if(e)return e.addEventListener("load",R),()=>{e.removeEventListener("load",R)}}},[T]);let E=e=>{e===x||-1!==Object.keys(g).indexOf(e)&&(y(e),setTimeout(()=>S("screenChange"),100))};return(0,t.jsxs)(c.default,{sx:{border:"1px solid",borderColor:"grey.300",borderRadius:3,..."desktop"!=x&&{background:(0,p.getBackgroundDots)(a.vars.palette.grey[400],60,20),bgcolor:(0,h.withAlpha)(a.vars.palette.grey[50],.5)}},children:[(0,t.jsxs)(l.default,{direction:"row",sx:{justifyContent:"space-between",p:2,border:"1px solid",borderColor:"grey.300",borderRadius:3,mt:"-1px",mx:"-1px",bgcolor:"grey.50"},children:[(0,t.jsx)(l.default,{direction:"row",sx:{display:{xs:"none",md:"flex"},gap:1},children:Object.keys(g).map((e,r)=>(0,t.jsx)(o.Fragment,{children:(0,t.jsx)(f,{icon:g[e].icon,screen:e,screenSize:x,onScreenChange:E})},r))}),(0,t.jsx)(l.default,{direction:"row",sx:{gap:1,flexWrap:"wrap"},children:(0,t.jsx)(n.default,{endIcon:(0,t.jsx)(u.default,{name:"tabler-arrow-up-right",size:20,color:"text.primary"}),href:e,sx:{color:"text.primary",px:1.5,py:1},target:"_blank",rel:"noopener noreferrer",children:"Preview"})})]}),(0,t.jsx)(l.default,{direction:"row",sx:{justifyContent:"center"},children:(0,t.jsx)(d,{children:(0,t.jsx)(l.default,{sx:{maxWidth:g[x].width,width:1,height:1,..."desktop"!=x&&{boxShadow:`5px 0 4px -4px ${a.vars.palette.grey[300]}, -5px 0 4px -4px ${a.vars.palette.grey[300]}`}},children:(0,t.jsx)("iframe",{ref:b,id:m,srcDoc:(s=(0,i.useTheme)(),`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Linear Progress Loader</title>
    <style>
    body {
      margin: 0;
      }
      .progress-bar-container {
        width: 100%;
        background-color: ${s.vars.palette.primary.lighter}; /* This is the background for the progress bar */
        border-radius: 4px;
        overflow: hidden;
      }

      .progress-bar {
        height: 4px; /* Thickness of the progress bar */
        width: 0; /* Set this to 0 initially */
        background-color: ${s.vars.palette.primary.main};
        animation: load 1.5s linear infinite;
      }

      @keyframes load {
        0% {
          width: 30%;
        }
        50% {
          margin-left: 40%;
          width: 50%;
        }
        100% {
          width: 30%;
          margin-left: 100%;
        }
      }
    </style>
  </head>
  <body>
    <div class="progress-bar-container">
      <div class="progress-bar"></div>
    </div>
  </body>
</html>
`),onLoad:e=>{let t=e.currentTarget;t&&(t.removeAttribute("srcdoc"),r||C(!T))},style:{width:"100%",height:r||w||"100%",border:"none",..."desktop"===x&&{borderBottomLeftRadius:12,borderBottomRightRadius:12}},src:e,title:"section-simulator"})})})})]})}f.propTypes={icon:r.default.any,screen:r.default.string,screenSize:r.default.string,onScreenChange:r.default.func},b.propTypes={src:r.default.string,defaultHeight:r.default.number},e.s(["default",()=>b],81413)}]);