(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(29)},23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(10),s=n.n(a);n(23),n(5);var c=e=>{let{name:t,email:n,id:r}=e;return o.a.createElement("div",{className:" tc bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200*200")}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,n)))};var i=e=>{let{robots:t}=e;return o.a.createElement("div",null,t.map(e=>o.a.createElement(c,{key:e.id,id:e.id,name:e.name,email:e.email})))};var l=e=>{let{searchchange:t}=e;return o.a.createElement("div",null,o.a.createElement("input",{id:"seachbox",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))};var d=e=>o.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children);var h=class extends r.Component{constructor(e){super(e),this.state={hasError:!1}}componentDidCatch(e,t){this.setState({hasError:!0})}render(){return this.state.hasError?o.a.createElement("h1",null,"Error occured while fetching robofriends"):this.props.children}};var u=n(31);var g=n(8);var b=Object(g.b)(e=>({searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}),e=>({onSearchChange:t=>e((e=>({type:"CHANGE_SEARCH_FIELD",payload:e}))(t.target.value)),onRequestRobots:()=>e(e=>{e({type:"REQUEST_ROBOTS_PENDING"}),u.a.get("https://jsonplaceholder.typicode.com/users").then(t=>{console.log(t.data),e({type:"REQUEST_ROBOTS_SUCCESS",payload:t.data})}).catch(t=>e({type:"REQUEST_ROBOTS_FAILURE",payload:t}))})}))(e=>{const[t,n]=Object(r.useState)(!0),{searchField:a,onSearchChange:s,robots:c,onRequestRobots:u}=e;Object(r.useEffect)(()=>{u(),n(!1)},[u]);const g=c.filter(e=>e.name.toLowerCase().includes(a.toLowerCase()));return t?o.a.createElement("h1",null,".....Loading"):o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"},"RoboFriends"),o.a.createElement(l,{searchchange:s}),o.a.createElement(d,null,o.a.createElement(h,null,o.a.createElement(i,{robots:g}))))});var E=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then(t=>{let{getCLS:n,getFID:r,getFCP:o,getLCP:a,getTTFB:s}=t;n(e),r(e),o(e),a(e),s(e)})};const p={searchField:""},m={isPending:!1,robots:[],error:""};var v=n(9),w=n(12),f=n(13);const S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=(()=>{const n=e.installing;null!=n&&(n.onstatechange=(()=>{"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}))})}).catch(e=>{console.error("Error during service worker registration:",e)})}const O=Object(v.b)({searchRobots:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILURE":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),y=Object(w.createLogger)(),C=Object(v.c)(O,Object(v.a)(f.a,y));s.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g.a,{store:C},o.a.createElement(b,null)))),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const t="".concat("","/service-worker.js");S?(function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(n=>{const r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):R(e,t)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):R(t,e)})}}(),E()}},[[14,1,2]]]);
//# sourceMappingURL=main.ed23d91a.chunk.js.map