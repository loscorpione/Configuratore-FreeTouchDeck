if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let d={};const s=e=>n(e,a),o={module:{uri:a},exports:d,require:s};i[a]=Promise.all(r.map((e=>o[e]||s(e)))).then((e=>(c(...e),d)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"e97985c09335a92cd20481434b730499"},{url:"android-chrome-512x512.png",revision:"081057f0bed1c480c8dd6f7d2efd03d4"},{url:"apple-touch-icon.png",revision:"9e8f5ce3b3bd1aed73238ddecceb7963"},{url:"assets/icon-ef61ace4.svg",revision:null},{url:"assets/index-5b1468f4.css",revision:null},{url:"assets/index-b701c41c.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"browserconfig.xml",revision:"cddc3a0dd646047c322aa5ef2bafd6ab"},{url:"CNAME",revision:"06bc5a0a92f3082839a63756574c4004"},{url:"favicon-16x16.png",revision:"96331c383d75151b4f8cb81399baad6b"},{url:"favicon-32x32.png",revision:"cff6a4f5e1b83f7980d7410cf3d71da7"},{url:"favicon.ico",revision:"4a2c8420d2d4b15bf64a72313ad123da"},{url:"index.html",revision:"1db7bc9d9447c7acda04c2309a9eefc6"},{url:"manifest.webmanifest",revision:"12041341e5cae8262505e620f39c5a0c"},{url:"mstile-150x150.png",revision:"2a3a514123a030f2c0ed17898cd511cf"},{url:"safari-pinned-tab.svg",revision:"1ecbe5d5892b16fe258a5ab0daa26b6e"},{url:"android-chrome-192x192.png",revision:"e97985c09335a92cd20481434b730499"},{url:"CNAME",revision:"06bc5a0a92f3082839a63756574c4004"},{url:"android-chrome-512x512.png",revision:"081057f0bed1c480c8dd6f7d2efd03d4"},{url:"apple-touch-icon.png",revision:"9e8f5ce3b3bd1aed73238ddecceb7963"},{url:"browserconfig.xml",revision:"cddc3a0dd646047c322aa5ef2bafd6ab"},{url:"favicon-16x16.png",revision:"96331c383d75151b4f8cb81399baad6b"},{url:"favicon-32x32.png",revision:"cff6a4f5e1b83f7980d7410cf3d71da7"},{url:"favicon.ico",revision:"4a2c8420d2d4b15bf64a72313ad123da"},{url:"mstile-150x150.png",revision:"2a3a514123a030f2c0ed17898cd511cf"},{url:"safari-pinned-tab.svg",revision:"1ecbe5d5892b16fe258a5ab0daa26b6e"},{url:"manifest.webmanifest",revision:"12041341e5cae8262505e620f39c5a0c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
