if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const d=e=>r(e,o),u={module:{uri:o},exports:c,require:d};s[o]=Promise.all(i.map((e=>u[e]||d(e)))).then((e=>(n(...e),c)))}}define(["./workbox-adccf1a1"],(function(e){"use strict";e.setCacheNameDetails({prefix:"glory"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/assets/img/Group 2989@2x.png",revision:"fff4cf0e8e99ef40dbd48ee2ef570a81"},{url:"/assets/img/Group 3030.png",revision:"bffbc65a8dc786044bc9595eb9f752de"},{url:"/assets/img/Group 3030@2x.png",revision:"dcbc2cbbc3d619633ee504a1aad0da67"},{url:"/assets/img/Group 3036.png",revision:"02d37c14cd2bd329374d910555fa3661"},{url:"/assets/img/Group 3036@2x.png",revision:"295b6a4d043ca965f1719cd60fbf6bac"},{url:"/assets/img/Group 3037.png",revision:"e9e8624f05169ac98503f6f9b3c45371"},{url:"/assets/img/Group 3037@2x.png",revision:"82e9d6654bc0a3020989410012dc015e"},{url:"/assets/img/Group_2989.png",revision:"6a673523f3113e63533c3202ea60dadf"},{url:"/css/app.7464a793.css",revision:null},{url:"/css/chunk-vendors.a4f1d654.css",revision:null},{url:"/index.html",revision:"a937ad71d497254be0448c30c284d6cb"},{url:"/js/app.389693c4.js",revision:null},{url:"/js/chunk-vendors.2535bd67.js",revision:null},{url:"/manifest.json",revision:"7f4e7064d1cdd1f34d34a94a02df9a9a"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
