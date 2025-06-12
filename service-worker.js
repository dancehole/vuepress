/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "47985fd0f7fd5b186bb8231f3198da3d"
  },
  {
    "url": "assets/css/0.styles.f0d21de3.css",
    "revision": "80f60e0b29b62dcc1788ba125653ff35"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.77c84099.js",
    "revision": "7c1ebcf9fe573b18f0c309ba7013c908"
  },
  {
    "url": "assets/js/10.71d27edc.js",
    "revision": "af93c989f1fff43806cafaa62d7e017f"
  },
  {
    "url": "assets/js/11.830e99b5.js",
    "revision": "3ffaaf5700c0575d9f55c4ee66f197db"
  },
  {
    "url": "assets/js/12.ff7996f9.js",
    "revision": "c09a58f5ad3f7c98f5f0e72152a46e3b"
  },
  {
    "url": "assets/js/13.e8093db4.js",
    "revision": "9691d4a7fee60fa50d7cc75b55615814"
  },
  {
    "url": "assets/js/14.fac215e7.js",
    "revision": "e07b30925466dfd882d4dc88e150c69d"
  },
  {
    "url": "assets/js/15.9efeca51.js",
    "revision": "ba007d4dd0625ccde6a5c6e0b82fcb16"
  },
  {
    "url": "assets/js/16.8f238c73.js",
    "revision": "403ac8e28b8268494a7ff18672b1e117"
  },
  {
    "url": "assets/js/17.3f4a997e.js",
    "revision": "780694597ad3952a3683746e85012d42"
  },
  {
    "url": "assets/js/18.cc610c69.js",
    "revision": "13a9b85235618b60a8f9a3b88d22a831"
  },
  {
    "url": "assets/js/19.9eea06f4.js",
    "revision": "97e5a9aaeac304ee615ae4fd7e4ac172"
  },
  {
    "url": "assets/js/2.6c550d98.js",
    "revision": "368b3eaa30858e16616c400b37218b6d"
  },
  {
    "url": "assets/js/20.3c8e15e5.js",
    "revision": "22f15a4f6d955073654baa39df9c9438"
  },
  {
    "url": "assets/js/21.ea7e71e8.js",
    "revision": "49573aa85cd180d39213b6a8bbb5916d"
  },
  {
    "url": "assets/js/22.bdbb1354.js",
    "revision": "631cc427888aea28d4b1b7cf38a2e99e"
  },
  {
    "url": "assets/js/23.9d059854.js",
    "revision": "5ac1d9318e9581bba27e8fd9ef7bfb3e"
  },
  {
    "url": "assets/js/24.5ad7d89e.js",
    "revision": "f8eed21830b958ecd8efc6f78449dc18"
  },
  {
    "url": "assets/js/25.3b60c34c.js",
    "revision": "e0b32af726d17bdf1833cf1533b09f5b"
  },
  {
    "url": "assets/js/26.9b90a281.js",
    "revision": "bf496ae88c7408e9fd4d42a7580ca002"
  },
  {
    "url": "assets/js/27.42fb7a3b.js",
    "revision": "68f70756678abfe4d7cc2f90ef00ab4d"
  },
  {
    "url": "assets/js/28.dd8ba057.js",
    "revision": "99c1efaf72c116a6de25682cd6908f80"
  },
  {
    "url": "assets/js/3.126a0def.js",
    "revision": "3258d67b924e32df78f738855fa346c1"
  },
  {
    "url": "assets/js/4.25b40126.js",
    "revision": "399c72cbaf981213644fceb896846f93"
  },
  {
    "url": "assets/js/5.952bbed7.js",
    "revision": "0a949542a5bde85681ff608c10731e85"
  },
  {
    "url": "assets/js/6.af5be3a6.js",
    "revision": "dec9dd9ab5732c709b1d49184aba8836"
  },
  {
    "url": "assets/js/7.bf9beb90.js",
    "revision": "da12cc804ddb659e12ef8b86893388e5"
  },
  {
    "url": "assets/js/app.19a7eae7.js",
    "revision": "25eb081a4cf5d6c5552f310f9337b57b"
  },
  {
    "url": "assets/js/vendors~docsearch.5b076cc2.js",
    "revision": "411f22d9279082036324329298ea14c6"
  },
  {
    "url": "guide/quickstart.html",
    "revision": "916a33df022f094805899078d44342c7"
  },
  {
    "url": "guide/VuePress创建文档网站.html",
    "revision": "5aef02fd586b17ab471b98650ece146e"
  },
  {
    "url": "images/book.jpg",
    "revision": "31a8c253a9dce15d1d4b2850d86c4f41"
  },
  {
    "url": "index.html",
    "revision": "e675eff2b8611d4c1beb3893d126d831"
  },
  {
    "url": "link/contact.html",
    "revision": "f79d537f23e1295c8dc9a290f6b66d7b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
