// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1hFkf":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "f708cf535930f2c26076f484fd92a775";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"XPJbz":[function(require,module,exports) {
var _gsapDistGsap = require("gsap/dist/gsap");
var _gsapDistScrollTrigger = require("gsap/dist/ScrollTrigger");
var _barbaCore = require("@barba/core");
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _barbaCoreDefault = _parcelHelpers.interopDefault(_barbaCore);
var _imagesloaded = require("imagesloaded");
var _imagesloadedDefault = _parcelHelpers.interopDefault(_imagesloaded);
var _smoothScrollbar = require("smooth-scrollbar");
var _smoothScrollbarDefault = _parcelHelpers.interopDefault(_smoothScrollbar);
_gsapDistGsap.gsap.registerPlugin(_gsapDistScrollTrigger.ScrollTrigger);
let bodyScrollBar;
const select = e => document.querySelector(e);
const selectAll = e => document.querySelectorAll(e);
const sections = selectAll(".cv-column");
const loader = select(".a-loader");
const loaderInner = select(".a-loader .inner");
const progressBar = select(".a-loader .progress");
const loaderMask = select(".loader-mask");
// images loaded
function init() {
  // show loader on page load
  _gsapDistGsap.gsap.set(loader, {
    autoAlpha: 1
  });
  // scale loader down
  _gsapDistGsap.gsap.set(loaderInner, {
    scaleY: 0.005,
    transformOrigin: "bottom"
  });
  // make a tween that scales the loader
  const progressTween = _gsapDistGsap.gsap.to(progressBar, {
    paused: true,
    scaleX: 0,
    ease: "none",
    transformOrigin: "right"
  });
  let loadedImageCount = 0, imageCount;
  const container = select(".a-main");
  // setup Images loaded
  const preloadImages = _imagesloadedDefault.default(container);
  imageCount = preloadImages.images.length;
  // set the initial progress to 0
  updateProgress(0);
  // triggered after each item is loaded
  preloadImages.on("progress", function () {
    loadedImageCount++;
    updateProgress(loadedImageCount);
  });
  // update the progress of progressBar tween
  function updateProgress(value) {
    _gsapDistGsap.gsap.to(progressTween, {
      progress: value / imageCount,
      duration: 0.3,
      ease: "power1.out"
    });
  }
  preloadImages.on("done", function (instance) {
    _gsapDistGsap.gsap.set(progressBar, {
      autoAlpha: 0,
      onComplete: initPageTransitions
    });
  });
}
init();
function pageTransitionIn({container}) {
  // timeline to stretch the loader over the whole screen
  const tl = _gsapDistGsap.gsap.timeline({
    defaults: {
      duration: 0.8,
      ease: "power1.inOut"
    }
  });
  tl.set(loaderInner, {
    autoAlpha: 0
  }).fromTo(loader, {
    yPercent: -100
  }, {
    yPercent: 0
  }).fromTo(loaderMask, {
    yPercent: 80
  }, {
    yPercent: 0
  }, 0).to(container, {
    y: 150
  }, 0);
  return tl;
}
function pageTransitionOut({container}) {
  // timeline to move loader away down
  const tl = _gsapDistGsap.gsap.timeline({
    defaults: {
      duration: 0.8,
      ease: "power1.inOut"
    },
    onComplete: () => initContent()
  });
  tl.to(loader, {
    yPercent: 100
  }).to(loaderMask, {
    yPercent: -80
  }, 0).from(container, {
    y: -150
  }, 0);
  return tl;
}
function initPageTransitions() {
  // do something before the transition starts
  _barbaCoreDefault.default.hooks.before(() => {
    select("html").classList.add("is-transitioning");
  });
  // do something after the transition finishes
  _barbaCoreDefault.default.hooks.after(() => {
    select("html").classList.remove("is-transitioning");
  });
  // scroll to the top of the page
  _barbaCoreDefault.default.hooks.enter(() => {
    window.scrollTo(0, 0);
  });
  _barbaCoreDefault.default.init({
    transitions: [{
      once() {
        // do something once on the initial page load
        initLoader();
      },
      async leave({current}) {
        // animate loading screen in
        await pageTransitionIn(current);
      },
      enter({next}) {
        // animate loading screen away
        pageTransitionOut(next);
      }
    }]
  });
}
function initLoader() {
  const tlLoaderIn = _gsapDistGsap.gsap.timeline({
    id: "tlLoaderIn",
    defaults: {
      duration: 1.1,
      ease: "power2.out"
    },
    onComplete: () => initContent()
  });
  const image = select(".loader-image img");
  const mask = select(".loader-image-mask");
  const line1 = select(".loader-title-mask:nth-child(1) span");
  const line2 = select(".loader-title-mask:nth-child(2) span");
  const lines = selectAll(".loader-title-mask");
  const loaderContent = select(".loader-content");
  tlLoaderIn.set(loaderContent, {
    autoAlpha: 1
  }).to(loaderInner, {
    scaleY: 1,
    transformOrigin: "bottom",
    ease: "power1.inOut"
  }).addLabel("revealImage").from(mask, {
    yPercent: 100
  }, "revealImage-=0.6").from(image, {
    yPercent: -80
  }, "revealImage-=0.6").from([line1, line2], {
    yPercent: 100,
    stagger: 0.1
  }, "revealImage-=0.4");
  const tlLoaderOut = _gsapDistGsap.gsap.timeline({
    id: "tlLoaderOut",
    defaults: {
      duration: 1.2,
      ease: "power2.inOut"
    },
    delay: 1
  });
  tlLoaderOut.to(lines, {
    yPercent: -500,
    stagger: 0.2
  }, 0).to([loader, loaderContent], {
    yPercent: -100
  }, 0.2).from(".a-main", {
    y: 150
  }, 0.2);
  const tlLoader = _gsapDistGsap.gsap.timeline();
  tlLoader.add(tlLoaderIn).add(tlLoaderOut);
}
function initContent() {
  select("body").classList.remove("is-loading");
  initSmoothScrollbar();
  // initNavigation()
  initHeaderTilt();
  // initHoverReveal()
  initPortfolioHover();
  initImageParallax();
  initPinSteps();
  initScrollTo();
}
const updateBodyColor = color => {
  document.documentElement.style.setProperty("--bcg-fill-color", color);
};
const getTextHeight = textCopy => {
  return textCopy.clientHeight;
};
// Smoooth Scrollbar
function initSmoothScrollbar() {
  bodyScrollBar = _smoothScrollbarDefault.default.init(select("#viewport"), {
    damping: 0.07
  });
  // remove horizontal scrollbar
  bodyScrollBar.track.xAxis.element.remove();
  // keep ScrollTrigger in sync with Smooth Scrollbar
  _gsapDistScrollTrigger.ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value;
      }
      return bodyScrollBar.scrollTop;
    }
  });
  // when the smooth scroller updates, tell ScrollTrigger to update() too:
  bodyScrollBar.addListener(_gsapDistScrollTrigger.ScrollTrigger.update);
}
// Navigation Away - with updated trigger
function initNavigation() {
  const mainNavLinks = _gsapDistGsap.gsap.utils.toArray(".a-nav a");
  const mainNavLinksRev = _gsapDistGsap.gsap.utils.toArray(".a-nav a").reverse();
  mainNavLinks.forEach(link => {
    link.addEventListener("mouseleave", e => {
      // add class
      link.classList.add("animate-out");
    });
    link.ontransitionend = function () {
      // remove class
      link.classList.remove("animate-out");
    };
  });
  function navAnimation(direction) {
    const scrollingDown = direction === 1;
    const links = scrollingDown ? mainNavLinks : mainNavLinksRev;
    return _gsapDistGsap.gsap.to(links, {
      duration: 0.3,
      stagger: 0.05,
      autoAlpha: () => scrollingDown ? 0 : 1,
      y: () => scrollingDown ? 20 : 0,
      ease: "power4.out"
    });
  }
  // updated trigger to .a-main instead of absolute 100
  _gsapDistScrollTrigger.ScrollTrigger.create({
    trigger: ".a-main",
    start: "top top-=100",
    end: "bottom bottom-=200",
    toggleClass: {
      targets: "body",
      className: "has-scrolled"
    },
    onEnter: ({direction}) => navAnimation(direction),
    onLeaveBack: ({direction}) => navAnimation(direction)
  });
}
// Header Tilt
function initHeaderTilt() {
  select("header").addEventListener("mousemove", moveImages);
}
function moveImages(e) {
  const {offsetX, offsetY, target} = e;
  const {clientWidth, clientHeight} = target;
  // get 0 0 in the center
  const xPos = offsetX / clientWidth - 0.5;
  const yPos = offsetY / clientHeight - 0.5;
  const leftImages = _gsapDistGsap.gsap.utils.toArray(".hg-left .hg-image");
  const rightImages = _gsapDistGsap.gsap.utils.toArray(".hg-right .hg-image");
  const modifier = index => index * 1.2 + 0.5;
  // move left 3 images
  leftImages.forEach((image, index) => {
    _gsapDistGsap.gsap.to(image, {
      duration: 1.2,
      x: xPos * 20 * modifier(index),
      y: yPos * 30 * modifier(index),
      rotationY: xPos * 40,
      rotationX: yPos * 10,
      ease: "power3.out"
    });
  });
  // move right 3 images
  rightImages.forEach((image, index) => {
    _gsapDistGsap.gsap.to(image, {
      duration: 1.2,
      x: xPos * 20 * modifier(index),
      y: -yPos * 30 * modifier(index),
      rotationY: xPos * 40,
      rotationX: yPos * 10,
      ease: "power3.out"
    });
  });
  _gsapDistGsap.gsap.to(".decor-circle", {
    duration: 1.7,
    x: 100 * xPos,
    y: 120 * yPos,
    ease: "power4.out"
  });
}
// Core Values
function initHoverReveal() {
  sections.forEach(section => {
    // get componenets for animation
    section.imageBlock = section.querySelector(".cv-image");
    section.image = section.querySelector(".cv-image img");
    section.mask = section.querySelector(".cv-image-mask");
    section.text = section.querySelector(".cv-text");
    section.textCopy = section.querySelector(".cv-text-copy");
    section.textMask = section.querySelector(".cv-text-mask");
    section.textP = section.querySelector(".cv-text-copy p");
    // reset the initial position
    _gsapDistGsap.gsap.set([section.imageBlock, section.textMask], {
      yPercent: -101
    });
    _gsapDistGsap.gsap.set([section.mask, section.textP], {
      yPercent: 100
    });
    _gsapDistGsap.gsap.set(section.image, {
      scale: 1.2
    });
    // add event listeners to each section
    section.addEventListener("mouseenter", createHoverReveal);
    section.addEventListener("mouseleave", createHoverReveal);
  });
}
function createHoverReveal(e) {
  const {imageBlock, mask, text, textCopy, textMask, textP, image, dataset} = e.target;
  const {color} = dataset;
  let tl = _gsapDistGsap.gsap.timeline({
    defaults: {
      duration: 1.8,
      ease: "power4.out"
    }
  });
  if (e.type === "mouseenter") {
    tl.to([mask, imageBlock, textMask, textP], {
      yPercent: 0,
      onStart: () => updateBodyColor(color)
    }).to(text, {
      y: () => -getTextHeight(textCopy) / 2
    }, 0).to(image, {
      duration: 1.1,
      scale: 1
    }, 0);
  } else if (e.type === "mouseleave") {
    tl.to([mask, textP], {
      yPercent: 100
    }).to([imageBlock, textMask], {
      yPercent: -101
    }, 0).to(text, {
      y: 0
    }, 0).to(image, {
      scale: 1.2
    }, 0);
  }
  return tl;
}
// Portfolio Hover
function initPortfolioHover() {
  allLinks.forEach(link => {
    link.addEventListener("mouseenter", createPortfolioHover);
    link.addEventListener("mouseleave", createPortfolioHover);
    link.addEventListener("mousemove", createPortfolioMove);
  });
}
const allLinks = _gsapDistGsap.gsap.utils.toArray(".portfolio-categories a");
const largeImage = select(".portfolio-image-l");
const smallImage = select(".portfolio-image-s");
function createPortfolioHover(e) {
  const lInside = select(".portfolio-image-l .image_inside");
  const sInside = select(".portfolio-image-s .image_inside");
  if (e.type === "mouseenter") {
    const {color, imagelarge, imagesmall} = e.target.dataset;
    const allSiblings = allLinks.filter(item => item !== e.target);
    const tl = _gsapDistGsap.gsap.timeline({
      onStart: () => updateBodyColor(color)
    });
    tl.set(lInside, {
      backgroundImage: `require(${imagelarge})`
    }).set(sInside, {
      backgroundImage: `require(${imagesmall})`
    }).to([largeImage, smallImage], {
      autoAlpha: 1
    }).to(allSiblings, {
      color: "#fff",
      autoAlpha: 0.2
    }, 0).to(e.target, {
      color: "#fff",
      autoAlpha: 1
    }, 0);
  } else if (e.type === "mouseleave") {
    const tl = _gsapDistGsap.gsap.timeline({
      onStart: () => updateBodyColor("#ACB7AE")
    });
    tl.to([largeImage, smallImage], {
      autoAlpha: 0
    }).to(allLinks, {
      color: "#fff",
      autoAlpha: 1
    }, 0);
  }
}
function createPortfolioMove(e) {
  const {clientY} = e;
  // move large image
  _gsapDistGsap.gsap.to(largeImage, {
    duration: 1.2,
    y: getPortfolioOffset(clientY) / 6,
    ease: "power3.out"
  });
  // move small image
  _gsapDistGsap.gsap.to(smallImage, {
    duration: 1.5,
    y: getPortfolioOffset(clientY) / 3,
    ease: "power3.out"
  });
}
function getPortfolioOffset(clientY) {
  return -(select(".portfolio-categories").clientHeight - clientY);
}
// Parallax Images
function initImageParallax() {
  // select all sections .with-parallax
  _gsapDistGsap.gsap.utils.toArray(".with-parallax").forEach(section => {
    // get the image
    const image = section.querySelector("img");
    // create tween for the image
    _gsapDistGsap.gsap.to(image, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        scrub: true
      }
    });
  });
}
// Fixed navigation
function initPinSteps() {
  _gsapDistScrollTrigger.ScrollTrigger.create({
    trigger: ".fixed-nav",
    start: "top center",
    endTrigger: "#stage4",
    end: "center center",
    pin: true,
    pinReparent: true
  });
  const getVh = () => {
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    return vh;
  };
  _gsapDistGsap.gsap.utils.toArray(".stage").forEach((stage, index) => {
    const navLinks = _gsapDistGsap.gsap.utils.toArray(".fixed-nav li");
    _gsapDistScrollTrigger.ScrollTrigger.create({
      trigger: stage,
      start: "top center",
      end: () => `+=${stage.clientHeight + getVh() / 10}`,
      toggleClass: {
        targets: navLinks[index],
        className: "is-active"
      },
      onEnter: () => updateBodyColor(stage.dataset.color),
      onEnterBack: () => updateBodyColor(stage.dataset.color)
    });
  });
}
function initScrollTo() {
  // find all links and animate to the right position
  _gsapDistGsap.gsap.utils.toArray(".fixed-nav a").forEach(link => {
    const target = link.getAttribute("href");
    link.addEventListener("click", e => {
      e.preventDefault();
      console.log(select(target));
      bodyScrollBar.scrollIntoView(select(target), {
        damping: 0.07,
        offsetTop: 100
      });
    });
  });
}
// Media query
function handleWithChange(mq) {
  if (mq.matches) {
    removeHoverReveal();
    initMobileNavigation();
  } else {
    initHoverReveal();
    initNavigation();
  }
}
const mq = window.matchMedia("screen and (max-width: 480px)");
// first page load
handleWithChange(mq);
mq.addEventListener("change", handleWithChange(mq));
// reset all props
function resetProps(elements) {
  // stop all tweens
  _gsapDistGsap.gsap.killTweensOf("*");
  if (elements.length) {
    elements.forEach(el => {
      el && _gsapDistGsap.gsap.set(el, {
        clearProps: "all"
      });
    });
  }
}
function removeHoverReveal() {
  sections.forEach(section => {
    section.removeEventListener("mouseenter", createHoverReveal);
    section.removeEventListener("mouseleave", createHoverReveal);
    const {imageBlock, mask, text, textCopy, textMask, textP, image, dataset} = section;
    resetProps([imageBlock, mask, text, textCopy, textMask, textP, image, dataset]);
  });
}
function initMobileNavigation() {
  _gsapDistScrollTrigger.ScrollTrigger.create({
    trigger: ".a-main",
    start: "top top-=100",
    end: "bottom bottom-=200",
    toggleClass: {
      targets: "body",
      className: "has-scrolled-mobile"
    }
  });
}

},{"gsap/dist/gsap":"1iecp","gsap/dist/ScrollTrigger":"426Wb","@barba/core":"1Tv25","imagesloaded":"v9R4A","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","smooth-scrollbar":"613xV"}],"1iecp":[function(require,module,exports) {
var define;
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = global || self, factory(global.window = global.window || ({})));
})(this, function (exports) {
  "use strict";
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  /*!
  * GSAP 3.6.1
  * https://greensock.com
  *
  * @license Copyright 2008-2021, GreenSock. All rights reserved.
  * Subject to the terms at https://greensock.com/standard-license or for
  * Club GreenSock members, the agreement issued with that membership.
  * @author: Jack Doyle, jack@greensock.com
  */
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  }, _defaults = {
    duration: .5,
    overwrite: false,
    delay: 0
  }, _suppressOverwrites, _bigNum = 1e8, _tinyNum = 1 / _bigNum, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString = function _isString(value) {
    return typeof value === "string";
  }, _isFunction = function _isFunction(value) {
    return typeof value === "function";
  }, _isNumber = function _isNumber(value) {
    return typeof value === "number";
  }, _isUndefined = function _isUndefined(value) {
    return typeof value === "undefined";
  }, _isObject = function _isObject(value) {
    return typeof value === "object";
  }, _isNotFalse = function _isNotFalse(value) {
    return value !== false;
  }, _windowExists = function _windowExists() {
    return typeof window !== "undefined";
  }, _isFuncOrString = function _isFuncOrString(value) {
    return _isFunction(value) || _isString(value);
  }, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || (function () {}), _isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[#\-+.]*\b[a-z\d-=+%.]+/gi, _unitExp = /[\d.+\-=]+(?:e[-+]\d*)*/i, _globalTimeline, _win, _coreInitted, _doc, _globals = {}, _installScope = {}, _coreReady, _install = function _install(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  }, _missingPlugin = function _missingPlugin(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  }, _warn = function _warn(message, suppress) {
    return !suppress && console.warn(message);
  }, _addGlobal = function _addGlobal(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  }, _emptyFunc = function _emptyFunc() {
    return 0;
  }, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _lastRenderedFrame, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness(targets) {
    var target = targets[0], harnessPlugin, i;
    _isObject(target) || _isFunction(target) || (targets = [targets]);
    if (!(harnessPlugin = (target._gsap || ({})).harness)) {
      i = _harnessPlugins.length;
      while (i-- && !_harnessPlugins[i].targetTest(target)) {}
      harnessPlugin = _harnessPlugins[i];
    }
    i = targets.length;
    while (i--) {
      targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    }
    return targets;
  }, _getCache = function _getCache(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  }, _getProperty = function _getProperty(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
  }, _forEachName = function _forEachName(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  }, _round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
  }, _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
    var l = toFind.length, i = 0;
    for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {}
    return i < l;
  }, _parseVars = function _parseVars(params, type, parent) {
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars;
    isLegacy && (vars.duration = params[1]);
    vars.parent = parent;
    if (type) {
      irVars = vars;
      while (parent && !(("immediateRender" in irVars))) {
        irVars = parent.vars.defaults || ({});
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }
      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
    }
    return vars;
  }, _lazyRender = function _lazyRender() {
    var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for (i = 0; i < l; i++) {
      tween = a[i];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  }, _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
    _lazyTweens.length && _lazyRender();
    animation.render(time, suppressEvents, force);
    _lazyTweens.length && _lazyRender();
  }, _numericIfPossible = function _numericIfPossible(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
  }, _passThrough = function _passThrough(p) {
    return p;
  }, _setDefaults = function _setDefaults(obj, defaults) {
    for (var p in defaults) {
      (p in obj) || (obj[p] = defaults[p]);
    }
    return obj;
  }, _setKeyframeDefaults = function _setKeyframeDefaults(obj, defaults) {
    for (var p in defaults) {
      (p in obj) || p === "duration" || p === "ease" || (obj[p] = defaults[p]);
    }
  }, _merge = function _merge(base, toMerge) {
    for (var p in toMerge) {
      base[p] = toMerge[p];
    }
    return base;
  }, _mergeDeep = function _mergeDeep(base, toMerge) {
    for (var p in toMerge) {
      p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    }
    return base;
  }, _copyExcluding = function _copyExcluding(obj, excluding) {
    var copy = {}, p;
    for (p in obj) {
      (p in excluding) || (copy[p] = obj[p]);
    }
    return copy;
  }, _inheritDefaults = function _inheritDefaults(vars) {
    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults : _setDefaults;
    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }
    return vars;
  }, _arraysMatch = function _arraysMatch(a1, a2) {
    var i = a1.length, match = i === a2.length;
    while (match && i-- && a1[i] === a2[i]) {}
    return i < 0;
  }, _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = parent[lastProp], t;
    if (sortBy) {
      t = child[sortBy];
      while (prev && prev[sortBy] > t) {
        prev = prev._prev;
      }
    }
    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }
    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  }, _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = child._prev, next = child._next;
    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }
    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }
    child._next = child._prev = child.parent = null;
  }, _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
    child._act = 0;
  }, _uncache = function _uncache(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      var a = animation;
      while (a) {
        a._dirty = 1;
        a = a.parent;
      }
    }
    return animation;
  }, _recacheAncestors = function _recacheAncestors(animation) {
    var parent = animation.parent;
    while (parent && parent.parent) {
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }
    return animation;
  }, _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
  }, _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  }, _animationCycle = function _animationCycle(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
  }, _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  }, _setEnd = function _setEnd(animation) {
    return animation._end = _round(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  }, _alignPlayhead = function _alignPlayhead(animation, totalTime) {
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _round(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
      _setEnd(animation);
      parent._dirty || _uncache(parent, animation);
    }
    return animation;
  }, _postAddChecks = function _postAddChecks(timeline, child) {
    var t;
    if (child._time || child._initted && !child._dur) {
      t = _parentToChildTotalTime(timeline.rawTime(), child);
      if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
        child.render(t, true);
      }
    }
    if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
      if (timeline._dur < timeline.duration()) {
        t = timeline;
        while (t._dp) {
          t.rawTime() >= 0 && t.totalTime(t._tTime);
          t = t._dp;
        }
      }
      timeline._zTime = -_tinyNum;
    }
  }, _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _round(position + child._delay);
    child._end = _round(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
    timeline._recent = child;
    skipChecks || _postAddChecks(timeline, child);
    return timeline;
  }, _scrollTrigger = function _scrollTrigger(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  }, _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
    _initTween(tween, totalTime);
    if (!tween._initted) {
      return 1;
    }
    if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);
      tween._lazy = [totalTime, suppressEvents];
      return 1;
    }
  }, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
  }, _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) || (tween._ts < 0 || tween._dp._ts < 0) && tween.data !== "isFromStart" && tween.data !== "isStart") ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      prevIteration = _animationCycle(tween._tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
      if (iteration !== prevIteration) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }
    if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
        return;
      }
      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt = tween._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);
        if (!suppressEvents) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  }, _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
      child = animation._first;
      while (child && child._start <= time) {
        if (!child._dur && child.data === "isPause" && child._start > prevTime) {
          return child;
        }
        child = child._next;
      }
    } else {
      child = animation._last;
      while (child && child._start >= time) {
        if (!child._dur && child.data === "isPause" && child._start < prevTime) {
          return child;
        }
        child = child._prev;
      }
    }
  }, _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _round(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _round(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  }, _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  }, _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc
  }, _parsePosition = function _parsePosition(animation, position) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset;
    if (_isString(position) && (isNaN(position) || (position in labels))) {
      i = position.charAt(0);
      if (i === "<" || i === ">") {
        return (i === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0);
      }
      i = position.indexOf("=");
      if (i < 0) {
        (position in labels) || (labels[position] = clippedDuration);
        return labels[position];
      }
      offset = +(position.charAt(i - 1) + position.substr(i + 1));
      return i > 1 ? _parsePosition(animation, position.substr(0, i - 1)) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
  }, _conditionalReturn = function _conditionalReturn(value, func) {
    return value || value === 0 ? func(value) : func;
  }, _clamp = function _clamp(min, max, value) {
    return value < min ? min : value > max ? max : value;
  }, getUnit = function getUnit(value) {
    if (typeof value !== "string") {
      return "";
    }
    var v = _unitExp.exec(value);
    return v ? value.substr(v.index + v[0].length) : "";
  }, clamp = function clamp(min, max, value) {
    return _conditionalReturn(value, function (v) {
      return _clamp(min, max, v);
    });
  }, _slice = [].slice, _isArrayLike = function _isArrayLike(value, nonEmpty) {
    return value && _isObject(value) && ("length" in value) && (!nonEmpty && !value.length || (value.length - 1 in value) && _isObject(value[0])) && !value.nodeType && value !== _win;
  }, _flatten = function _flatten(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }
    return ar.forEach(function (value) {
      var _accumulator;
      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  }, toArray = function toArray(value, leaveStrings) {
    return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call(_doc.querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  }, shuffle = function shuffle(a) {
    return a.sort(function () {
      return .5 - Math.random();
    });
  }, distribute = function distribute(v) {
    if (_isFunction(v)) {
      return v;
    }
    var vars = _isObject(v) ? v : {
      each: v
    }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if (_isString(from)) {
      ratioX = ratioY = ({
        center: .5,
        edges: .5,
        end: 1
      })[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }
    return function (i, target, a) {
      var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
        if (!wrapAt) {
          max = -_bigNum;
          while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}
          wrapAt--;
        }
        distances = cache[l] = [];
        originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
        originY = ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum;
        for (j = 0; j < l; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max && (max = d);
          d < min && (min = d);
        }
        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l < 0 ? base - l : base;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease = ease && l < 0 ? _invertEase(ease) : ease;
      }
      l = (distances[i] - distances.min) / distances.max || 0;
      return _round(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
    };
  }, _roundModifier = function _roundModifier(v) {
    var p = v < 1 ? Math.pow(10, (v + "").length - 2) : 1;
    return function (raw) {
      var n = Math.round(parseFloat(raw) / v) * v * p;
      return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  }, snap = function snap(snapTo, value) {
    var isArray = _isArray(snapTo), radius, is2D;
    if (!isArray && _isObject(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum;
      if (snapTo.values) {
        snapTo = toArray(snapTo.values);
        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function (raw) {
      var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
      while (i--) {
        if (is2D) {
          dx = snapTo[i].x - x;
          dy = snapTo[i].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i] - x);
        }
        if (dx < min) {
          min = dx;
          closest = i;
        }
      }
      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  }, random = function random(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  }, pipe = function pipe() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }
    return function (value) {
      return functions.reduce(function (v, f) {
        return f(v);
      }, value);
    };
  }, unitize = function unitize(func, unit) {
    return function (value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  }, normalize = function normalize(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  }, _wrapArray = function _wrapArray(a, wrapper, value) {
    return _conditionalReturn(value, function (index) {
      return a[~~wrapper(index)];
    });
  }, wrap = function wrap(min, max, value) {
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
      return (range + (value - min) % range) % range + min;
    });
  }, wrapYoyo = function wrapYoyo(min, max, value) {
    var range = max - min, total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
      value = (total + (value - min) % total) % total || 0;
      return min + (value > range ? total - value : value);
    });
  }, _replaceRandom = function _replaceRandom(value) {
    var prev = 0, s = "", i, nums, end, isArray;
    while (~(i = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i);
      isArray = value.charAt(i + 7) === "[";
      nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
      s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }
    return s + value.substr(prev, value.length - prev);
  }, mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value, function (value) {
      return outMin + ((value - inMin) / inRange * outRange || 0);
    });
  }, interpolate = function interpolate(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function (p) {
      return (1 - p) * start + p * end;
    };
    if (!func) {
      var isString = _isString(start), master = {}, p, i, interpolators, l, il;
      progress === true && (mutate = 1) && (progress = null);
      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l = start.length;
        il = l - 2;
        for (i = 1; i < l; i++) {
          interpolators.push(interpolate(start[i - 1], start[i]));
        }
        l--;
        func = function func(p) {
          p *= l;
          var i = Math.min(il, ~~p);
          return interpolators[i](p - i);
        };
        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }
      if (!interpolators) {
        for (p in end) {
          _addPropTween.call(master, start, p, "get", end[p]);
        }
        func = function func(p) {
          return _renderPropTweens(p, master) || (isString ? start.p : start);
        };
      }
    }
    return _conditionalReturn(progress, func);
  }, _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
    var labels = timeline.labels, min = _bigNum, p, distance, label;
    for (p in labels) {
      distance = labels[p] - fromTime;
      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p;
        min = distance;
      }
    }
    return label;
  }, _callback = function _callback(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], params, scope;
    if (!callback) {
      return;
    }
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    return params ? callback.apply(scope, params) : callback.call(scope);
  }, _interrupt = function _interrupt(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(false);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  }, _quickTween, _createPlugin = function _createPlugin(config) {
    config = !config.name && config["default"] || config;
    var name = config.name, isFunc = _isFunction(config), Plugin = name && !isFunc && config.init ? function () {
      this._props = [];
    } : config, instanceDefaults = {
      init: _emptyFunc,
      render: _renderPropTweens,
      add: _addPropTween,
      kill: _killPropTweensOf,
      modifier: _addPluginModifier,
      rawVars: 0
    }, statics = {
      targetTest: 0,
      get: 0,
      getSetter: _getSetter,
      aliases: {},
      register: 0
    };
    _wake();
    if (config !== Plugin) {
      if (_plugins[name]) {
        return;
      }
      _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics));
      _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));
      _plugins[Plugin.prop = name] = Plugin;
      if (config.targetTest) {
        _harnessPlugins.push(Plugin);
        _reservedProps[name] = 1;
      }
      name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
    }
    _addGlobal(name, Plugin);
    config.register && config.register(gsap, Plugin, PropTween);
  }, _255 = 255, _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  }, _hue = function _hue(h, m1, m2) {
    h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
  }, splitColor = function splitColor(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
    if (!a) {
      if (v.substr(-1) === ",") {
        v = v.substr(0, v.length - 1);
      }
      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length < 6) {
          r = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
        }
        if (v.length === 9) {
          a = parseInt(v.substr(1, 6), 16);
          return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
        }
        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_strictNumExp);
        if (!toHSL) {
          h = +a[0] % 360 / 360;
          s = +a[1] / 100;
          l = +a[2] / 100;
          g = l <= .5 ? l * (s + 1) : l + s - l * s;
          r = l * 2 - g;
          a.length > 3 && (a[3] *= 1);
          a[0] = _hue(h + 1 / 3, r, g);
          a[1] = _hue(h, r, g);
          a[2] = _hue(h - 1 / 3, r, g);
        } else if (~v.indexOf("=")) {
          a = v.match(_numExp);
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }
      } else {
        a = v.match(_strictNumExp) || _colorLookup.transparent;
      }
      a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
      r = a[0] / _255;
      g = a[1] / _255;
      b = a[2] / _255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      l = (max + min) / 2;
      if (max === min) {
        h = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h *= 60;
      }
      a[0] = ~~(h + .5);
      a[1] = ~~(s * 100 + .5);
      a[2] = ~~(l * 100 + .5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
  }, _colorOrderData = function _colorOrderData(v) {
    var values = [], c = [], i = -1;
    v.split(_colorExp).forEach(function (v) {
      var a = v.match(_numWithUnitExp) || [];
      values.push.apply(values, a);
      c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
  }, _formatColors = function _formatColors(s, toHSL, orderMatchData) {
    var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
    if (!colors) {
      return s;
    }
    colors = colors.map(function (color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
      d = _colorOrderData(s);
      c = orderMatchData.c;
      if (c.join(result) !== d.c.join(result)) {
        shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
        l = shell.length - 1;
        for (; i < l; i++) {
          result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }
    if (!shell) {
      shell = s.split(_colorExp);
      l = shell.length - 1;
      for (; i < l; i++) {
        result += shell[i] + colors[i];
      }
    }
    return result + shell[l];
  }, _colorExp = (function () {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
    for (p in _colorLookup) {
      s += "|" + p + "\\b";
    }
    return new RegExp(s + ")", "gi");
  })(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter(a) {
    var combined = a.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a[1] = _formatColors(a[1], toHSL);
      a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
      return true;
    }
  }, _tickerActive, _ticker = (function () {
    var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1000 / 240, _nextTime = _gap, _listeners = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick(v) {
      var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
      elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time = _lastUpdate - _startTime;
      overlap = time - _nextTime;
      if (overlap > 0 || manual) {
        frame = ++_self.frame;
        _delta = time - _self.time * 1000;
        _self.time = time = time / 1000;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }
      manual || (_id = _req(_tick));
      if (dispatch) {
        for (_i = 0; _i < _listeners.length; _i++) {
          _listeners[_i](time, _delta, frame, v);
        }
      }
    };
    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1000 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || ({});
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || ({}));
            _raf = _win.requestAnimationFrame;
          }
          _id && _self.sleep();
          _req = _raf || (function (f) {
            return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
          });
          _tickerActive = 1;
          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || 1 / _tinyNum;
        _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
      },
      fps: function fps(_fps) {
        _gap = 1000 / (_fps || 240);
        _nextTime = _self.time * 1000 + _gap;
      },
      add: function add(callback) {
        _listeners.indexOf(callback) < 0 && _listeners.push(callback);
        _wake();
      },
      remove: function remove(callback) {
        var i;
        ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
      },
      _listeners: _listeners
    };
    return _self;
  })(), _wake = function _wake() {
    return !_tickerActive && _ticker.wake();
  }, _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString(value) {
    var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
    for (; i < l; i++) {
      val = split[i];
      index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }
    return obj;
  }, _valueInParentheses = function _valueInParentheses(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  }, _configEaseFromString = function _configEaseFromString(name) {
    var split = (name + "").split("("), ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  }, _invertEase = function _invertEase(ease) {
    return function (p) {
      return 1 - ease(1 - p);
    };
  }, _propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
    var child = timeline._first, ease;
    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase(child.timeline, isYoyo);
        } else {
          ease = child._ease;
          child._ease = child._yEase;
          child._yEase = ease;
          child._yoyo = isYoyo;
        }
      }
      child = child._next;
    }
  }, _parseEase = function _parseEase(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  }, _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut(p) {
        return 1 - easeIn(1 - p);
      };
    }
    if (easeInOut === void 0) {
      easeInOut = function easeInOut(p) {
        return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
      };
    }
    var ease = {
      easeIn: easeIn,
      easeOut: easeOut,
      easeInOut: easeInOut
    }, lowercaseName;
    _forEachName(names, function (name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
      for (var p in ease) {
        _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
      }
    });
    return ease;
  }, _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
    return function (p) {
      return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
    };
  }, _configElastic = function _configElastic(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut(p) {
      return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function (p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2;
    ease.config = function (amplitude, period) {
      return _configElastic(type, amplitude, period);
    };
    return ease;
  }, _configBack = function _configBack(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }
    var easeOut = function easeOut(p) {
      return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function (p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    ease.config = function (overshoot) {
      return _configBack(type, overshoot);
    };
    return ease;
  };
  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
    var power = i < 5 ? i + 1 : i;
    _insertEase(name + ",Power" + (power - 1), i ? function (p) {
      return Math.pow(p, power);
    } : function (p) {
      return p;
    }, function (p) {
      return 1 - Math.pow(1 - p, power);
    }, function (p) {
      return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
  });
  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
  (function (n, c) {
    var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut(p) {
      return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
    };
    _insertEase("Bounce", function (p) {
      return 1 - easeOut(1 - p);
    }, easeOut);
  })(7.5625, 2.75);
  _insertEase("Expo", function (p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
  });
  _insertEase("Circ", function (p) {
    return -(_sqrt(1 - p * p) - 1);
  });
  _insertEase("Sine", function (p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
  });
  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }
      var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
      return function (p) {
        return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
      };
    }
  };
  _defaults.ease = _easeMap["quad.out"];
  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
    return _callbackNames += name + "," + name + "Params,";
  });
  var GSCache = function GSCache(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = (function () {
    function Animation(vars, time) {
      var parent = vars.parent || _globalTimeline;
      this.vars = vars;
      this._delay = +vars.delay || 0;
      if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }
      this._ts = 1;
      _setDuration(this, +vars.duration, 1, 1);
      this.data = vars.data;
      _tickerActive || _ticker.wake();
      parent && _addToTimeline(parent, this, time || time === 0 ? time : parent._time, 1);
      vars.reversed && this.reverse();
      vars.paused && this.paused(true);
    }
    var _proto = Animation.prototype;
    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }
      return this._delay;
    };
    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }
      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();
      if (!arguments.length) {
        return this._tTime;
      }
      var parent = this._dp;
      if (parent && parent.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);
        !parent._dp || parent.parent || _postAddChecks(parent, this);
        while (parent.parent) {
          if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
            parent.totalTime(parent._tTime, true);
          }
          parent = parent.parent;
        }
        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }
      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
        this._ts || (this._pTime = _totalTime);
        _lazySafeRender(this, _totalTime, suppressEvents);
      }
      return this;
    };
    _proto.time = function time(value, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % this._dur || (value ? this._dur : 0), suppressEvents) : this._time;
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    };
    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };
    _proto.timeScale = function timeScale(value) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }
      if (this._rts === value) {
        return this;
      }
      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
      return _recacheAncestors(this.totalTime(_clamp(-this._delay, this._tDur, tTime), true));
    };
    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }
      if (this._ps !== value) {
        this._ps = value;
        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();
          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && (this._tTime -= _tinyNum) && Math.abs(this._zTime) !== _tinyNum);
        }
      }
      return this;
    };
    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = value;
        var parent = this.parent || this._dp;
        parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
        return this;
      }
      return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent = this.parent || this._dp;
      return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.globalTime = function globalTime(rawTime) {
      var animation = this, time = arguments.length ? rawTime : animation.rawTime();
      while (animation) {
        time = animation._start + time / (animation._ts || 1);
        animation = animation._dp;
      }
      return time;
    };
    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value === Infinity ? -2 : value;
        return _onUpdateTotalDuration(this);
      }
      return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        this._rDelay = value;
        return _onUpdateTotalDuration(this);
      }
      return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }
      return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
      return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };
    _proto.play = function play(from, suppressEvents) {
      from != null && this.seek(from, suppressEvents);
      return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
      from != null && this.seek(from || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };
    _proto.resume = function resume() {
      return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
        return this;
      }
      return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
      this._initted = this._act = 0;
      this._zTime = -_tinyNum;
      return this;
    };
    _proto.isActive = function isActive() {
      var parent = this.parent || this._dp, start = this._start, rawTime;
      return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;
      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }
        return this;
      }
      return vars[type];
    };
    _proto.then = function then(onFulfilled) {
      var self = this;
      return new Promise(function (resolve) {
        var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve() {
          var _then = self.then;
          self.then = null;
          _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
          resolve(f);
          self.then = _then;
        };
        if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
          _resolve();
        } else {
          self._prom = _resolve;
        }
      });
    };
    _proto.kill = function kill() {
      _interrupt(this);
    };
    return Animation;
  })();
  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });
  var Timeline = (function (_Animation) {
    _inheritsLoose(Timeline, _Animation);
    function Timeline(vars, time) {
      var _this;
      if (vars === void 0) {
        vars = {};
      }
      _this = _Animation.call(this, vars, time) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _this.parent && _postAddChecks(_this.parent, _assertThisInitialized(_this));
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }
    var _proto2 = Timeline.prototype;
    _proto2.to = function to(targets, vars, position) {
      new Tween(targets, _parseVars(arguments, 0, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
      return this;
    };
    _proto2.from = function from(targets, vars, position) {
      new Tween(targets, _parseVars(arguments, 1, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
      return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      new Tween(targets, _parseVars(arguments, 2, this), _parsePosition(this, _isNumber(fromVars) ? arguments[4] : position));
      return this;
    };
    _proto2.set = function set(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position), 1);
      return this;
    };
    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), _parsePosition(this, position));
    };
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = this !== _globalTimeline && totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime, crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }
        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;
        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }
        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _round(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration);
          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }
          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : dur;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _round(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
              return this;
            }
            dur = this._dur;
            tDur = this._tDur;
            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -0.0001;
              this.render(prevTime, true);
            }
            this._lock = 0;
            if (!this._ts && !prevPaused) {
              return this;
            }
            _propagateYoyoEase(this, isYoyo);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _round(prevTime), _round(time));
          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }
        this._tTime = tTime;
        this._time = time;
        this._act = !timeScale;
        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }
        !prevTime && time && !suppressEvents && _callback(this, "onStart");
        if (time >= prevTime && totalTime >= 0) {
          child = this._first;
          while (child) {
            next = child._next;
            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }
            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;
          while (child) {
            next = child._prev;
            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }
            child = next;
          }
        }
        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
          if (this._ts) {
            this._start = prevStart;
            _setEnd(this);
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
          (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
          if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }
      return this;
    };
    _proto2.add = function add(child, position) {
      var _this2 = this;
      _isNumber(position) || (position = _parsePosition(this, position));
      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function (obj) {
            return _this2.add(obj, position);
          });
          return this;
        }
        if (_isString(child)) {
          return this.addLabel(child, position);
        }
        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }
      return this !== child ? _addToTimeline(this, child, position) : this;
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }
      if (tweens === void 0) {
        tweens = true;
      }
      if (timelines === void 0) {
        timelines = true;
      }
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum;
      }
      var a = [], child = this._first;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a.push(child);
          } else {
            timelines && a.push(child);
            nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
          }
        }
        child = child._next;
      }
      return a;
    };
    _proto2.getById = function getById(id) {
      var animations = this.getChildren(1, 1, 1), i = animations.length;
      while (i--) {
        if (animations[i].vars.id === id) {
          return animations[i];
        }
      }
    };
    _proto2.remove = function remove(child) {
      if (_isString(child)) {
        return this.removeLabel(child);
      }
      if (_isFunction(child)) {
        return this.killTweensOf(child);
      }
      _removeLinkedListItem(this, child);
      if (child === this._recent) {
        this._recent = this._last;
      }
      return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }
      this._forcing = 1;
      if (!this._dp && this._ts) {
        this._start = _round(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }
      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
      this._forcing = 0;
      return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
      var t = Tween.delayedCall(0, callback || _emptyFunc, params);
      t.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition(this, position);
      while (child) {
        if (child._start === position && child.data === "isPause") {
          _removeFromParent(child);
        }
        child = child._next;
      }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
      while (i--) {
        _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
      }
      return this;
    };
    _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
      var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
      while (child) {
        if (child instanceof Tween) {
          if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
            a.push(child);
          }
        } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
          a.push.apply(a, children);
        }
        child = child._next;
      }
      return a;
    };
    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || ({});
      var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, tween = Tween.to(tl, _setDefaults({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && ("time" in startAt) ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          var duration = vars.duration || Math.abs((endTime - tl._time) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }, vars));
      return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults({
        startAt: {
          time: _parsePosition(this, fromPosition)
        }
      }, vars));
    };
    _proto2.recent = function recent() {
      return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }
      var child = this._first, labels = this.labels, p;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }
        child = child._next;
      }
      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }
      return _uncache(this);
    };
    _proto2.invalidate = function invalidate() {
      var child = this._first;
      this._lock = 0;
      while (child) {
        child.invalidate();
        child = child._next;
      }
      return _Animation.prototype.invalidate.call(this);
    };
    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }
      var child = this._first, next;
      while (child) {
        next = child._next;
        this.remove(child);
        child = next;
      }
      this._dp && (this._time = this._tTime = this._pTime = 0);
      includeLabels && (this.labels = {});
      return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
      var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
      if (arguments.length) {
        return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
      }
      if (self._dirty) {
        parent = self.parent;
        while (child) {
          prev = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;
          if (start > prevStart && self._sort && child._ts && !self._lock) {
            self._lock = 1;
            _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }
          if (start < 0 && child._ts) {
            max -= start;
            if (!parent && !self._dp || parent && parent.smoothChildTiming) {
              self._start += start / self._ts;
              self._time -= start;
              self._tTime -= start;
            }
            self.shiftChildren(-start, false, -1e999);
            prevStart = 0;
          }
          child._end > max && child._ts && (max = child._end);
          child = prev;
        }
        _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
        self._dirty = 0;
      }
      return self._tDur;
    };
    Timeline.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
        _lastRenderedFrame = _ticker.frame;
      }
      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
          while (child && !child._ts) {
            child = child._next;
          }
          child || _ticker.sleep();
        }
      }
    };
    return Timeline;
  })(Animation);
  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (stringFilter) {
      a = [start, end];
      stringFilter(a, target, prop);
      start = a[0];
      end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }
      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          s: startNum,
          c: endNum.charAt(1) === "=" ? parseFloat(endNum.substr(2)) * (endNum.charAt(0) === "-" ? -1 : 1) : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : "";
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) {
      pt.e = 0;
    }
    this._pt = pt;
    return pt;
  }, _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }
      if (end.charAt(1) === "=") {
        end = parseFloat(parsedStart) + parseFloat(end.substr(2)) * (end.charAt(0) === "-" ? -1 : 1) + (getUnit(parsedStart) || 0);
      }
    }
    if (parsedStart !== end) {
      if (!isNaN(parsedStart * end)) {
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }
      !currentValue && !((prop in target)) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  }, _processVars = function _processVars(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }
    var copy = {}, p;
    for (p in vars) {
      copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }
    return copy;
  }, _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i = plugin._props.length;
        while (i--) {
          ptLookup[plugin._props[i]] = pt;
        }
      }
    }
    return plugin;
  }, _overwritingTween, _initTween = function _initTween(tween, time) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }
    if (!tl) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);
      prevStartAt && prevStartAt.render(-1, true).kill();
      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent: parent,
          immediateRender: true,
          lazy: _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate: onUpdate,
          onUpdateParams: onUpdateParams,
          callbackScope: callbackScope,
          stagger: 0
        }, startAt)));
        if (immediateRender) {
          if (time > 0) {
            autoRevert || (tween._startAt = 0);
          } else if (dur && !(time < 0 && prevStartAt)) {
            time && (tween._zTime = time);
            return;
          }
        } else if (autoRevert === false) {
          tween._startAt = 0;
        }
      } else if (runBackwards && dur) {
        if (prevStartAt) {
          !autoRevert && (tween._startAt = 0);
        } else {
          time && (immediateRender = false);
          p = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            lazy: immediateRender && _isNotFalse(lazy),
            immediateRender: immediateRender,
            stagger: 0,
            parent: parent
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars);
          _removeFromParent(tween._startAt = Tween.set(targets, p));
          if (!immediateRender) {
            _initTween(tween._startAt, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }
      tween._pt = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;
      for (i = 0; i < targets.length; i++) {
        target = targets[i];
        gsData = target._gsap || _harness(targets)[i]._gsap;
        tween._ptLookup[i] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i : fullTargets.indexOf(target);
        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
          plugin._props.forEach(function (name) {
            ptLookup[name] = pt;
          });
          plugin.priority && (hasPriority = 1);
        }
        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }
        tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;
          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(0));
          overwritten = !tween.parent;
          _overwritingTween = 0;
        }
        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }
      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }
    tween._from = !tl && !!vars.runBackwards;
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
  }, _addAliasesToVars = function _addAliasesToVars(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
    if (!propertyAliases) {
      return vars;
    }
    copy = _merge({}, vars);
    for (p in propertyAliases) {
      if ((p in copy)) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;
        while (i--) {
          copy[aliases[i]] = copy[p];
        }
      }
    }
    return copy;
  }, _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  }, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", _staggerPropsToSkip = (_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger").split(",");
  var Tween = (function (_Animation2) {
    _inheritsLoose(Tween, _Animation2);
    function Tween(targets, vars, time, skipInherit) {
      var _this3;
      if (typeof vars === "number") {
        time.duration = vars;
        vars = time;
        time = null;
      }
      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars), time) || this;
      var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = _this3.parent, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : ("length" in vars)) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;
      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults || ({})
        });
        tl.kill();
        tl.parent = tl._dp = _assertThisInitialized(_this3);
        tl._start = 0;
        if (keyframes) {
          _setDefaults(tl.vars.defaults, {
            ease: "none"
          });
          keyframes.forEach(function (frame) {
            return tl.to(parsedTargets, frame, ">");
          });
        } else {
          l = parsedTargets.length;
          staggerFunc = stagger ? distribute(stagger) : _emptyFunc;
          if (_isObject(stagger)) {
            for (p in stagger) {
              if (~_staggerTweenProps.indexOf(p)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p] = stagger[p];
              }
            }
          }
          for (i = 0; i < l; i++) {
            copy = {};
            for (p in vars) {
              if (_staggerPropsToSkip.indexOf(p) < 0) {
                copy[p] = vars[p];
              }
            }
            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i];
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
            if (!stagger && l === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }
            tl.to(curTarget, copy, staggerFunc(i, curTarget, parsedTargets));
          }
          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        }
        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }
      if (overwrite === true && !_suppressOverwrites) {
        _overwritingTween = _assertThisInitialized(_this3);
        _globalTimeline.killTweensOf(parsedTargets);
        _overwritingTween = 0;
      }
      parent && _postAddChecks(parent, _assertThisInitialized(_this3));
      if (immediateRender || !duration && !keyframes && _this3._start === _round(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
        _this3._tTime = -_tinyNum;
        _this3.render(Math.max(0, -delay));
      }
      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }
    var _proto3 = Tween.prototype;
    _proto3.render = function render(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._tDur, dur = this._dur, tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase;
      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
        time = tTime;
        timeline = this.timeline;
        if (this._repeat) {
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _round(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          isYoyo = this._yoyo && iteration & 1;
          if (isYoyo) {
            yoyoEase = this._yEase;
            time = dur - time;
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          if (time === prevTime && !force && this._initted) {
            return this;
          }
          if (iteration !== prevIteration) {
            timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);
            if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
              this._lock = force = 1;
              this.render(_round(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }
        if (!this._initted) {
          if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
            this._tTime = 0;
            return this;
          }
          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._tTime = tTime;
        this._time = time;
        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }
        this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }
        time && !prevTime && !suppressEvents && _callback(this, "onStart");
        pt = this._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
        timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * ratio, suppressEvents, force) || this._startAt && (this._zTime = totalTime);
        if (this._onUpdate && !suppressEvents) {
          totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force);
          _callback(this, "onUpdate");
        }
        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
          if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }
      return this;
    };
    _proto3.targets = function targets() {
      return this._targets;
    };
    _proto3.invalidate = function invalidate() {
      this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate();
      return _Animation2.prototype.invalidate.call(this);
    };
    _proto3.kill = function kill(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }
      if (!targets && (!vars || vars === "all")) {
        this._lazy = this._pt = 0;
        return this.parent ? _interrupt(this) : this;
      }
      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
        return this;
      }
      var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }
      overwrittenProps = this._op = this._op || [];
      if (vars !== "all") {
        if (_isString(vars)) {
          p = {};
          _forEachName(vars, function (name) {
            return p[name] = 1;
          });
          vars = p;
        }
        vars = _addAliasesToVars(parsedTargets, vars);
      }
      i = parsedTargets.length;
      while (i--) {
        if (~killingTargets.indexOf(parsedTargets[i])) {
          curLookup = propTweenLookup[i];
          if (vars === "all") {
            overwrittenProps[i] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || ({});
            props = vars;
          }
          for (p in props) {
            pt = curLookup && curLookup[p];
            if (pt) {
              if (!(("kill" in pt.d)) || pt.d.kill(p) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }
              delete curLookup[p];
            }
            if (curOverwriteProps !== "all") {
              curOverwriteProps[p] = 1;
            }
          }
        }
      }
      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };
    Tween.to = function to(targets, vars) {
      return new Tween(targets, vars, arguments[2]);
    };
    Tween.from = function from(targets, vars) {
      return new Tween(targets, _parseVars(arguments, 1));
    };
    Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay: delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };
    Tween.fromTo = function fromTo(targets, fromVars, toVars) {
      return new Tween(targets, _parseVars(arguments, 2));
    };
    Tween.set = function set(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween(targets, vars);
    };
    Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween;
  })(Animation);
  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });
  _forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
    Tween[name] = function () {
      var tl = new Timeline(), params = _slice.call(arguments, 0);
      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });
  var _setterPlain = function _setterPlain(target, property, value) {
    return target[property] = value;
  }, _setterFunc = function _setterFunc(target, property, value) {
    return target[property](value);
  }, _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
    return target[property](data.fp, value);
  }, _setterAttribute = function _setterAttribute(target, property, value) {
    return target.setAttribute(property, value);
  }, _getSetter = function _getSetter(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  }, _renderPlain = function _renderPlain(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000, data);
  }, _renderBoolean = function _renderBoolean(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  }, _renderComplexString = function _renderComplexString(ratio, data) {
    var pt = data._pt, s = "";
    if (!ratio && data.b) {
      s = data.b;
    } else if (ratio === 1 && data.e) {
      s = data.e;
    } else {
      while (pt) {
        s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s;
        pt = pt._next;
      }
      s += data.c;
    }
    data.set(data.t, data.p, s, data);
  }, _renderPropTweens = function _renderPropTweens(ratio, data) {
    var pt = data._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  }, _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
    var pt = this._pt, next;
    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  }, _killPropTweensOf = function _killPropTweensOf(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while (pt) {
      next = pt._next;
      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }
      pt = next;
    }
    return !hasNonDependentRemaining;
  }, _setterWithModifier = function _setterWithModifier(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  }, _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
    var pt = parent._pt, next, pt2, first, last;
    while (pt) {
      next = pt._next;
      pt2 = first;
      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }
      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }
      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }
      pt = next;
    }
    parent._pt = first;
  };
  var PropTween = (function () {
    function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;
      if (next) {
        next._prev = this;
      }
    }
    var _proto4 = PropTween.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };
    return PropTween;
  })();
  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
    return _reservedProps[name] = 1;
  });
  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;
  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      args.forEach(function (config) {
        return _createPlugin(config);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
      _isString(target) && (target = toArray(target)[0]);
      var getter = _getCache(target || ({})).get, format = unit ? _passThrough : _numericIfPossible;
      unit === "native" && (unit = "");
      return !target ? target : !property ? function (property, unit, uncache) {
        return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
      } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray(target);
      if (target.length > 1) {
        var setters = target.map(function (t) {
          return gsap.quickSetter(t, property, unit);
        }), l = setters.length;
        return function (value) {
          var i = l;
          while (i--) {
            setters[i](value);
          }
        };
      }
      target = target[0] || ({});
      var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || ({}))[property] || property, setter = Plugin ? function (value) {
        var p = new Plugin();
        _quickTween._pt = 0;
        p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p.render(1, p);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p);
      return Plugin ? setter : function (value) {
        return setter(target, p, unit ? value + unit : value, cache, 1);
      };
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
      value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
      return _mergeDeep(_defaults, value || ({}));
    },
    config: function config(value) {
      return _mergeDeep(_config, value || ({}));
    },
    registerEffect: function registerEffect(_ref2) {
      var name = _ref2.name, effect = _ref2.effect, plugins = _ref2.plugins, defaults = _ref2.defaults, extendTimeline = _ref2.extendTimeline;
      (plugins || "").split(",").forEach(function (pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
      });
      _effects[name] = function (targets, vars, tl) {
        return effect(toArray(targets), _setDefaults(vars || ({}), defaults), tl);
      };
      if (extendTimeline) {
        Timeline.prototype[name] = function (targets, vars, position) {
          return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && ({}), this), position);
        };
      }
    },
    registerEase: function registerEase(name, ease) {
      _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }
      var tl = new Timeline(vars), child, next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
      _globalTimeline.remove(tl);
      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;
      while (child) {
        next = child._next;
        if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
          _addToTimeline(tl, child, child._start - child._delay);
        }
        child = next;
      }
      _addToTimeline(_globalTimeline, tl, 0);
      return tl;
    },
    utils: {
      wrap: wrap,
      wrapYoyo: wrapYoyo,
      distribute: distribute,
      random: random,
      snap: snap,
      normalize: normalize,
      getUnit: getUnit,
      clamp: clamp,
      splitColor: splitColor,
      toArray: toArray,
      mapRange: mapRange,
      pipe: pipe,
      unitize: unitize,
      interpolate: interpolate,
      shuffle: shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween: PropTween,
      globals: _addGlobal,
      Tween: Tween,
      Timeline: Timeline,
      Animation: Animation,
      getCache: _getCache,
      _removeLinkedListItem: _removeLinkedListItem,
      suppressOverwrites: function suppressOverwrites(value) {
        return _suppressOverwrites = value;
      }
    }
  };
  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
    return _gsap[name] = Tween[name];
  });
  _ticker.add(Timeline.updateRoot);
  _quickTween = _gsap.to({}, {
    duration: 0
  });
  var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
    var pt = plugin._pt;
    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }
    return pt;
  }, _addModifiers = function _addModifiers(tween, modifiers) {
    var targets = tween._targets, p, i, pt;
    for (p in modifiers) {
      i = targets.length;
      while (i--) {
        pt = tween._ptLookup[i][p];
        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p);
          }
          pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
        }
      }
    }
  }, _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
    return {
      name: name,
      rawVars: 1,
      init: function init(target, vars, tween) {
        tween._onInit = function (tween) {
          var temp, p;
          if (_isString(vars)) {
            temp = {};
            _forEachName(vars, function (name) {
              return temp[name] = 1;
            });
            vars = temp;
          }
          if (modifier) {
            temp = {};
            for (p in vars) {
              temp[p] = modifier(vars[p]);
            }
            vars = temp;
          }
          _addModifiers(tween, vars);
        };
      }
    };
  };
  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
      var p, pt;
      for (p in vars) {
        pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
        pt && (pt.op = p);
        this._props.push(p);
      }
    }
  }, {
    name: "endArray",
    init: function init(target, value) {
      var i = value.length;
      while (i--) {
        this.add(target, i, target[i] || 0, value[i]);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.6.1";
  _coreReady = 1;
  if (_windowExists()) {
    _wake();
  }
  var Power0 = _easeMap.Power0, Power1 = _easeMap.Power1, Power2 = _easeMap.Power2, Power3 = _easeMap.Power3, Power4 = _easeMap.Power4, Linear = _easeMap.Linear, Quad = _easeMap.Quad, Cubic = _easeMap.Cubic, Quart = _easeMap.Quart, Quint = _easeMap.Quint, Strong = _easeMap.Strong, Elastic = _easeMap.Elastic, Back = _easeMap.Back, SteppedEase = _easeMap.SteppedEase, Bounce = _easeMap.Bounce, Sine = _easeMap.Sine, Expo = _easeMap.Expo, Circ = _easeMap.Circ;
  var _win$1, _doc$1, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _windowExists$1 = function _windowExists() {
    return typeof window !== "undefined";
  }, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum$1 = 1e8, _capsExp = /([A-Z])/g, _horizontalExp = /(?:left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  }, _renderCSSProp = function _renderCSSProp(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
  }, _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
  }, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
  }, _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
  }, _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  }, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  }, _setterCSSStyle = function _setterCSSStyle(target, property, value) {
    return target.style[property] = value;
  }, _setterCSSProp = function _setterCSSProp(target, property, value) {
    return target.style.setProperty(property, value);
  }, _setterTransform = function _setterTransform(target, property, value) {
    return target._gsap[property] = value;
  }, _setterScale = function _setterScale(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  }, _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  }, _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  }, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _supports3D, _createElement = function _createElement(type, ns) {
    var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
    return e.style ? e : _doc$1.createElement(type);
  }, _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || "";
  }, _prefixes = ("O,Moz,ms,Ms,Webkit").split(","), _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
    var e = element || _tempDiv, s = e.style, i = 5;
    if ((property in s) && !preferPrefix) {
      return property;
    }
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while (i-- && !((_prefixes[i] + property in s))) {}
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
  }, _initCore = function _initCore() {
    if (_windowExists$1() && window.document) {
      _win$1 = window;
      _doc$1 = _win$1.document;
      _docElement = _doc$1.documentElement;
      _tempDiv = _createElement("div") || ({
        style: {}
      });
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _pluginInitted = 1;
    }
  }, _getBBoxHack = function _getBBoxHack(swapIfPossible) {
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
    _docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox;
        this.getBBox = _getBBoxHack;
      } catch (e) {}
    } else if (this._gsapBBox) {
      bbox = this._gsapBBox();
    }
    if (oldParent) {
      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }
    }
    _docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
  }, _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
    var i = attributesArray.length;
    while (i--) {
      if (target.hasAttribute(attributesArray[i])) {
        return target.getAttribute(attributesArray[i]);
      }
    }
  }, _getBBox = function _getBBox(target) {
    var bounds;
    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  }, _isSVG = function _isSVG(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  }, _removeProperty = function _removeProperty(target, property) {
    if (property) {
      var style = target.style;
      if ((property in _transformProps) && property !== _transformOriginProp) {
        property = _transformProp;
      }
      if (style.removeProperty) {
        if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
          property = "-" + property;
        }
        style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        style.removeAttribute(property);
      }
    }
  }, _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
  }, _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  }, _convertToUnit = function _convertToUnit(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) {
      parent = (target.ownerSVGElement || ({})).parentNode;
    }
    if (!parent || parent === _doc$1 || !parent.appendChild) {
      parent = _doc$1.body;
    }
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time) {
      return _round(curValue / cache.width * amount);
    } else {
      (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static");
      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";
      if (horizontal && toPercent) {
        cache = _getCache(parent);
        cache.time = _ticker.time;
        cache.width = parent[measureProperty];
      }
    }
    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  }, _get = function _get(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if ((property in _propertyAliases) && property !== "transform") {
      property = _propertyAliases[property];
      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }
    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];
      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
      }
    }
    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  }, _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
    if (!start || start === "none") {
      var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
      if (s && s !== start) {
        prop = p;
        start = s;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }
    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, relative, endValues;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (end === "auto") {
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      target.style[prop] = start;
    }
    a = [start, end];
    _colorStringFilter(a);
    start = a[0];
    end = a[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];
    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);
        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }
        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
          if (relative) {
            endValue = endValue.substr(2);
          }
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _numWithUnitExp.lastIndex - endUnit.length;
          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;
            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }
          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }
          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            s: startNum,
            c: relative ? relative * endNum : endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }
      pt.c = index < end.length ? end.substring(index, end.length) : "";
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }
    _relExp.test(end) && (pt.e = 0);
    this._pt = pt;
    return pt;
  }, _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  }, _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
    var split = value.split(" "), x = split[0], y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      value = x;
      x = y;
      y = value;
    }
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  }, _renderClearProps = function _renderClearProps(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i = props.length;
        while (--i > -1) {
          prop = props[i];
          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }
          _removeProperty(target, prop);
        }
      }
      if (clearTransforms) {
        _removeProperty(target, _transformProp);
        if (cache) {
          cache.svg && target.removeAttribute("transform");
          _parseTransform(target, 1);
          cache.uncache = 1;
        }
      }
    }
  }, _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;
        plugin._props.push(property);
        return 1;
      }
    }
  }, _identity2DMatrix = [1, 0, 0, 1, 0, 0], _rotationalProperties = {}, _isNullTransform = function _isNullTransform(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  }, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
  }, _getMatrix = function _getMatrix(target, force2D) {
    var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      temp = style.display;
      style.display = "block";
      parent = target.parentNode;
      if (!parent || !target.offsetParent) {
        addedToDOM = 1;
        nextSibling = target.nextSibling;
        _docElement.appendChild(target);
      }
      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style.display = temp : _removeProperty(target, "display");
      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }
    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  }, _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
      x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y;
    }
    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";
    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  }, _parseTransform = function _parseTransform(target, uncache) {
    var cache = target._gsap || new GSCache(target);
    if (("x" in cache) && !uncache && !cache.uncache) {
      return cache;
    }
    var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
      t1 = !cache.uncache && !uncache && target.getAttribute("data-svg-origin");
      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
      a = matrix[0];
      b = matrix[1];
      c = matrix[2];
      d = matrix[3];
      x = a12 = matrix[4];
      y = a22 = matrix[5];
      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
        skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
        if (cache.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }
        angle = _atan2(-c, a33);
        rotationY = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c = t3;
        }
        angle = _atan2(b, a);
        rotation = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }
        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }
        scaleX = _round(Math.sqrt(a * a + b * b + c * c));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }
      if (cache.svg) {
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }
    cache.x = x - ((cache.xPercent = x && (cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  }, _firstTwoOnly = function _firstTwoOnly(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  }, _addPxTranslate = function _addPxTranslate(target, start, value) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  }, _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
  }, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }
    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }
    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }
    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }
    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }
    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }
    target.style[_transformProp] = transforms || "translate(0, 0)";
  }, _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }
    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;
      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;
        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }
      a11 = _round(a11);
      a21 = _round(a21);
      a12 = _round(a12);
      a22 = _round(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round(tx + xPercent / 100 * temp.width);
      ty = _round(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp);
  }, _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue, relative) {
    var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = relative ? endNum * relative : endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
      direction = endValue.split("_")[1];
      if (direction === "short") {
        change %= cap;
        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }
      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum$1) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum$1) % cap - ~~(change / cap) * cap;
      }
    }
    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
  }, _assign = function _assign(target, source) {
    for (var p in source) {
      target[p] = source[p];
    }
    return target;
  }, _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
    var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      _removeProperty(target, _transformProp);
      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp];
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      style[_transformProp] = startValue;
    }
    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];
      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;
        plugin._props.push(p);
      }
    }
    _assign(endCache, startCache);
  };
  _forEachName("padding,margin,Width,Radius", function (name, index) {
    var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
      return index < 2 ? name + side : "border" + side + name;
    });
    _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
      var a, vars;
      if (arguments.length < 4) {
        a = props.map(function (prop) {
          return _get(plugin, prop, property);
        });
        vars = a.join(" ");
        return vars.split(a[0]).length === 5 ? a[0] : vars;
      }
      a = (endValue + "").split(" ");
      vars = {};
      props.forEach(function (prop, i) {
        return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });
  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init(target, vars, tween, index, targets) {
      var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority;
      _pluginInitted || _initCore();
      for (p in vars) {
        if (p === "autoRound") {
          continue;
        }
        endValue = vars[p];
        if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
          continue;
        }
        type = typeof endValue;
        specialProp = _specialProps[p];
        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }
        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }
        if (specialProp) {
          specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
        } else if (p.substr(0, 2) === "--") {
          startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
          endValue += "";
          _colorExp.lastIndex = 0;
          if (!_colorExp.test(startValue)) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
          }
          endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
          this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        } else if (type !== "undefined") {
          if (startAt && (p in startAt)) {
            startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
            (p in _config.units) && !getUnit(startValue) && (startValue += _config.units[p]);
            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
          } else {
            startValue = _get(target, p);
          }
          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);
          if ((p in _propertyAliases)) {
            if (p === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }
              _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }
            if (p !== "scale" && p !== "transform") {
              p = _propertyAliases[p];
              ~p.indexOf(",") && (p = p.split(",")[0]);
            }
          }
          isTransformRelated = (p in _transformProps);
          if (isTransformRelated) {
            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
              transformPropTween.dep = 1;
            }
            if (p === "scale") {
              this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, relative ? relative * endNum : endNum - cache.scaleY);
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              endValue = _convertKeywordsToPercentages(endValue);
              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }
              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);
              continue;
            } else if ((p in _rotationalProperties)) {
              _addRotationalPropTween(this, cache, p, startNum, endValue, relative);
              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
              continue;
            } else if (p === "force3D") {
              cache[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);
              continue;
            }
          } else if (!((p in style))) {
            p = _checkPropPrefix(p) || p;
          }
          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && (p in style)) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || ((p in _config.units) ? _config.units[p] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, relative ? relative * endNum : endNum - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;
            if (startUnit !== endUnit) {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!((p in style))) {
            if ((p in target)) {
              this.add(target, p, target[p], endValue, index, targets);
            } else {
              _missingPlugin(p, endValue);
              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p, startValue, endValue);
          }
          props.push(p);
        }
      }
      hasPriority && _sortPropTweensByPriority(this);
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p = _propertyAliases[property];
      p && p.indexOf(",") < 0 && (property = p);
      return (property in _transformProps) && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || ({})) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
      _removeProperty: _removeProperty,
      _getMatrix: _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;
  (function (positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function (name) {
      _transformProps[name] = 1;
    });
    _forEachName(rotation, function (name) {
      _config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    _forEachName(aliases, function (name) {
      var split = name.split(":");
      _propertyAliases[split[1]] = all[split[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
    _config.units[name] = "px";
  });
  gsap.registerPlugin(CSSPlugin);
  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap, TweenMaxWithCSS = gsapWithCSS.core.Tween;
  exports.Back = Back;
  exports.Bounce = Bounce;
  exports.CSSPlugin = CSSPlugin;
  exports.Circ = Circ;
  exports.Cubic = Cubic;
  exports.Elastic = Elastic;
  exports.Expo = Expo;
  exports.Linear = Linear;
  exports.Power0 = Power0;
  exports.Power1 = Power1;
  exports.Power2 = Power2;
  exports.Power3 = Power3;
  exports.Power4 = Power4;
  exports.Quad = Quad;
  exports.Quart = Quart;
  exports.Quint = Quint;
  exports.Sine = Sine;
  exports.SteppedEase = SteppedEase;
  exports.Strong = Strong;
  exports.TimelineLite = Timeline;
  exports.TimelineMax = Timeline;
  exports.TweenLite = Tween;
  exports.TweenMax = TweenMaxWithCSS;
  exports.default = gsapWithCSS;
  exports.gsap = gsapWithCSS;
  if (typeof window === 'undefined' || window !== exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
  } else {
    delete window.default;
  }
});

},{}],"426Wb":[function(require,module,exports) {
var define;
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = global || self, factory(global.window = global.window || ({})));
})(this, function (exports) {
  "use strict";
  /*!
  * ScrollTrigger 3.6.1
  * https://greensock.com
  *
  * @license Copyright 2008-2021, GreenSock. All rights reserved.
  * Subject to the terms at https://greensock.com/standard-license or for
  * Club GreenSock members, the agreement issued with that membership.
  * @author: Jack Doyle, jack@greensock.com
  */
  var gsap, _coreInitted, _win, _doc, _docEl, _body, _root, _resizeDelay, _raf, _request, _toArray, _clamp, _time2, _syncInterval, _refreshing, _pointerIsDown, _transformProp, _i, _prevWidth, _prevHeight, _autoRefresh, _sort, _suppressOverwrites, _ignoreResize, _limitCallbacks, _startup = 1, _proxies = [], _scrollers = [], _getTime = Date.now, _time1 = _getTime(), _lastScrollTime = 0, _enabled = 1, _passThrough = function _passThrough(v) {
    return v;
  }, _round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
  }, _windowExists = function _windowExists() {
    return typeof window !== "undefined";
  }, _getGSAP = function _getGSAP() {
    return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
  }, _isViewport = function _isViewport(e) {
    return !!~_root.indexOf(e);
  }, _getProxyProp = function _getProxyProp(element, property) {
    return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
  }, _getScrollFunc = function _getScrollFunc(element, _ref) {
    var s = _ref.s, sc = _ref.sc;
    var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
    !~i && (i = _scrollers.push(element) - 1);
    return _scrollers[i + offset] || (_scrollers[i + offset] = _getProxyProp(element, s) || (_isViewport(element) ? sc : function (value) {
      return arguments.length ? element[s] = value : element[s];
    }));
  }, _getBoundsFunc = function _getBoundsFunc(element) {
    return _getProxyProp(element, "getBoundingClientRect") || (_isViewport(element) ? function () {
      _winOffsets.width = _win.innerWidth;
      _winOffsets.height = _win.innerHeight;
      return _winOffsets;
    } : function () {
      return _getBounds(element);
    });
  }, _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref2) {
    var d = _ref2.d, d2 = _ref2.d2, a = _ref2.a;
    return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function () {
      return a()[d];
    } : function () {
      return (isViewport ? _win["inner" + d2] : scroller["client" + d2]) || 0;
    };
  }, _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
    return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function () {
      return _winOffsets;
    };
  }, _maxScroll = function _maxScroll(element, _ref3) {
    var s = _ref3.s, d2 = _ref3.d2, d = _ref3.d, a = _ref3.a;
    return (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? Math.max(_docEl[s], _body[s]) - (_win["inner" + d2] || _docEl["client" + d2] || _body["client" + d2]) : element[s] - element["offset" + d2];
  }, _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
    for (var i = 0; i < _autoRefresh.length; i += 3) {
      (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
    }
  }, _isString = function _isString(value) {
    return typeof value === "string";
  }, _isFunction = function _isFunction(value) {
    return typeof value === "function";
  }, _isNumber = function _isNumber(value) {
    return typeof value === "number";
  }, _isObject = function _isObject(value) {
    return typeof value === "object";
  }, _callIfFunc = function _callIfFunc(value) {
    return _isFunction(value) && value();
  }, _combineFunc = function _combineFunc(f1, f2) {
    return function () {
      var result1 = _callIfFunc(f1), result2 = _callIfFunc(f2);
      return function () {
        _callIfFunc(result1);
        _callIfFunc(result2);
      };
    };
  }, _abs = Math.abs, _scrollLeft = "scrollLeft", _scrollTop = "scrollTop", _left = "left", _top = "top", _right = "right", _bottom = "bottom", _width = "width", _height = "height", _Right = "Right", _Left = "Left", _Top = "Top", _Bottom = "Bottom", _padding = "padding", _margin = "margin", _Width = "Width", _Height = "Height", _px = "px", _horizontal = {
    s: _scrollLeft,
    p: _left,
    p2: _Left,
    os: _right,
    os2: _Right,
    d: _width,
    d2: _Width,
    a: "x",
    sc: function sc(value) {
      return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
    }
  }, _vertical = {
    s: _scrollTop,
    p: _top,
    p2: _Top,
    os: _bottom,
    os2: _Bottom,
    d: _height,
    d2: _Height,
    a: "y",
    op: _horizontal,
    sc: function sc(value) {
      return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
    }
  }, _getComputedStyle = function _getComputedStyle(element) {
    return _win.getComputedStyle(element);
  }, _makePositionable = function _makePositionable(element) {
    return element.style.position = _getComputedStyle(element).position === "absolute" ? "absolute" : "relative";
  }, _setDefaults = function _setDefaults(obj, defaults) {
    for (var p in defaults) {
      (p in obj) || (obj[p] = defaults[p]);
    }
    return obj;
  }, _getBounds = function _getBounds(element, withoutTransforms) {
    var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
      x: 0,
      y: 0,
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0
    }).progress(1), bounds = element.getBoundingClientRect();
    tween && tween.progress(0).kill();
    return bounds;
  }, _getSize = function _getSize(element, _ref4) {
    var d2 = _ref4.d2;
    return element["offset" + d2] || element["client" + d2] || 0;
  }, _getLabelRatioArray = function _getLabelRatioArray(timeline) {
    var a = [], labels = timeline.labels, duration = timeline.duration(), p;
    for (p in labels) {
      a.push(labels[p] / duration);
    }
    return a;
  }, _getClosestLabel = function _getClosestLabel(animation) {
    return function (value) {
      return gsap.utils.snap(_getLabelRatioArray(animation), value);
    };
  }, _getLabelAtDirection = function _getLabelAtDirection(timeline) {
    return function (value, st) {
      var a = _getLabelRatioArray(timeline), i;
      a.sort(function (a, b) {
        return a - b;
      });
      if (st.direction > 0) {
        value -= 1e-4;
        for (i = 0; i < a.length; i++) {
          if (a[i] >= value) {
            return a[i];
          }
        }
        return a.pop();
      } else {
        i = a.length;
        value += 1e-4;
        while (i--) {
          if (a[i] <= value) {
            return a[i];
          }
        }
      }
      return a[0];
    };
  }, _multiListener = function _multiListener(func, element, types, callback) {
    return types.split(",").forEach(function (type) {
      return func(element, type, callback);
    });
  }, _addListener = function _addListener(element, type, func) {
    return element.addEventListener(type, func, {
      passive: true
    });
  }, _removeListener = function _removeListener(element, type, func) {
    return element.removeEventListener(type, func);
  }, _markerDefaults = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  }, _defaults = {
    toggleActions: "play",
    anticipatePin: 0
  }, _keywords = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1
  }, _offsetToPx = function _offsetToPx(value, size) {
    if (_isString(value)) {
      var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
      if (~eqIndex) {
        value.indexOf("%") > eqIndex && (relative *= size / 100);
        value = value.substr(0, eqIndex - 1);
      }
      value = relative + ((value in _keywords) ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
    }
    return value;
  }, _createMarker = function _createMarker(type, name, container, direction, _ref5, offset, matchWidthEl) {
    var startColor = _ref5.startColor, endColor = _ref5.endColor, fontSize = _ref5.fontSize, indent = _ref5.indent, fontWeight = _ref5.fontWeight;
    var e = _doc.createElement("div"), useFixedPosition = _isViewport(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    css += "position:" + (isScroller && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e._isStart = isStart;
    e.setAttribute("class", "gsap-marker-" + type);
    e.style.cssText = css;
    e.innerText = name || name === 0 ? type + "-" + name : type;
    parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
    e._offset = e["offset" + direction.op.d2];
    _positionMarker(e, 0, direction, isStart);
    return e;
  }, _positionMarker = function _positionMarker(marker, start, direction, flipped) {
    var vars = {
      display: "block"
    }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
    marker._isFlipped = flipped;
    vars[direction.a + "Percent"] = flipped ? -100 : 0;
    vars[direction.a] = flipped ? "1px" : 0;
    vars["border" + side + _Width] = 1;
    vars["border" + oppositeSide + _Width] = 0;
    vars[direction.p] = start + "px";
    gsap.set(marker, vars);
  }, _triggers = [], _ids = {}, _sync = function _sync() {
    return _request || (_request = _raf(_updateAll));
  }, _onScroll = function _onScroll() {
    if (!_request) {
      _request = _raf(_updateAll);
      _lastScrollTime || _dispatch("scrollStart");
      _lastScrollTime = _getTime();
    }
  }, _onResize = function _onResize() {
    return !_refreshing && !_ignoreResize && !_doc.fullscreenElement && _resizeDelay.restart(true);
  }, _listeners = {}, _emptyArray = [], _media = [], _creatingMedia, _lastMediaTick, _onMediaChange = function _onMediaChange(e) {
    var tick = gsap.ticker.frame, matches = [], i = 0, index;
    if (_lastMediaTick !== tick || _startup) {
      _revertAll();
      for (; i < _media.length; i += 4) {
        index = _win.matchMedia(_media[i]).matches;
        if (index !== _media[i + 3]) {
          _media[i + 3] = index;
          index ? matches.push(i) : _revertAll(1, _media[i]) || _isFunction(_media[i + 2]) && _media[i + 2]();
        }
      }
      _revertRecorded();
      for (i = 0; i < matches.length; i++) {
        index = matches[i];
        _creatingMedia = _media[index];
        _media[index + 2] = _media[index + 1](e);
      }
      _creatingMedia = 0;
      _coreInitted && _refreshAll(0, 1);
      _lastMediaTick = tick;
      _dispatch("matchMedia");
    }
  }, _softRefresh = function _softRefresh() {
    return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
  }, _dispatch = function _dispatch(type) {
    return _listeners[type] && _listeners[type].map(function (f) {
      return f();
    }) || _emptyArray;
  }, _savedStyles = [], _revertRecorded = function _revertRecorded(media) {
    for (var i = 0; i < _savedStyles.length; i += 4) {
      if (!media || _savedStyles[i + 3] === media) {
        _savedStyles[i].style.cssText = _savedStyles[i + 1];
        _savedStyles[i + 2].uncache = 1;
      }
    }
  }, _revertAll = function _revertAll(kill, media) {
    var trigger;
    for (_i = 0; _i < _triggers.length; _i++) {
      trigger = _triggers[_i];
      if (!media || trigger.media === media) {
        if (kill) {
          trigger.kill(1);
        } else {
          trigger.scroll.rec || (trigger.scroll.rec = trigger.scroll());
          trigger.revert();
        }
      }
    }
    _revertRecorded(media);
    media || _dispatch("revert");
  }, _refreshAll = function _refreshAll(force, skipRevert) {
    if (_lastScrollTime && !force) {
      _addListener(ScrollTrigger, "scrollEnd", _softRefresh);
      return;
    }
    var refreshInits = _dispatch("refreshInit");
    _sort && ScrollTrigger.sort();
    skipRevert || _revertAll();
    for (_i = 0; _i < _triggers.length; _i++) {
      _triggers[_i].refresh();
    }
    refreshInits.forEach(function (result) {
      return result && result.render && result.render(-1);
    });
    _i = _triggers.length;
    while (_i--) {
      _triggers[_i].scroll.rec = 0;
    }
    _resizeDelay.pause();
    _dispatch("refresh");
  }, _lastScroll = 0, _direction = 1, _updateAll = function _updateAll() {
    var l = _triggers.length, time = _getTime(), recordVelocity = time - _time1 >= 50, scroll = l && _triggers[0].scroll();
    _direction = _lastScroll > scroll ? -1 : 1;
    _lastScroll = scroll;
    if (recordVelocity) {
      if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
        _lastScrollTime = 0;
        _dispatch("scrollEnd");
      }
      _time2 = _time1;
      _time1 = time;
    }
    if (_direction < 0) {
      _i = l;
      while (_i-- > 0) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }
      _direction = 1;
    } else {
      for (_i = 0; _i < l; _i++) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }
    }
    _request = 0;
  }, _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex"], _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]), _swapPinOut = function _swapPinOut(pin, spacer, state) {
    _setState(state);
    if (pin.parentNode === spacer) {
      var parent = spacer.parentNode;
      if (parent) {
        parent.insertBefore(pin, spacer);
        parent.removeChild(spacer);
      }
    }
  }, _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
    if (pin.parentNode !== spacer) {
      var i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
      while (i--) {
        p = _propNamesToCopy[i];
        spacerStyle[p] = cs[p];
      }
      spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
      cs.display === "inline" && (spacerStyle.display = "inline-block");
      pinStyle[_bottom] = pinStyle[_right] = "auto";
      spacerStyle.overflow = "visible";
      spacerStyle.boxSizing = "border-box";
      spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
      spacerStyle[_height] = _getSize(pin, _vertical) + _px;
      spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
      _setState(spacerState);
      pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
      pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
      pinStyle[_padding] = cs[_padding];
      pin.parentNode.insertBefore(spacer, pin);
      spacer.appendChild(pin);
    }
  }, _capsExp = /([A-Z])/g, _setState = function _setState(state) {
    if (state) {
      var style = state.t.style, l = state.length, i = 0, p, value;
      (state.t._gsap || gsap.core.getCache(state.t)).uncache = 1;
      for (; i < l; i += 2) {
        value = state[i + 1];
        p = state[i];
        if (value) {
          style[p] = value;
        } else if (style[p]) {
          style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
        }
      }
    }
  }, _getState = function _getState(element) {
    var l = _stateProps.length, style = element.style, state = [], i = 0;
    for (; i < l; i++) {
      state.push(_stateProps[i], style[_stateProps[i]]);
    }
    state.t = element;
    return state;
  }, _copyState = function _copyState(state, override, omitOffsets) {
    var result = [], l = state.length, i = omitOffsets ? 8 : 0, p;
    for (; i < l; i += 2) {
      p = state[i];
      result.push(p, (p in override) ? override[p] : state[i + 1]);
    }
    result.t = state.t;
    return result;
  }, _winOffsets = {
    left: 0,
    top: 0
  }, _parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax) {
    _isFunction(value) && (value = value(self));
    if (_isString(value) && value.substr(0, 3) === "max") {
      value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
    }
    if (!_isNumber(value)) {
      _isFunction(trigger) && (trigger = trigger(self));
      var element = _toArray(trigger)[0] || _body, bounds = _getBounds(element) || ({}), offsets = value.split(" "), localOffset, globalOffset, display;
      if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
        display = element.style.display;
        element.style.display = "block";
        bounds = _getBounds(element);
        display ? element.style.display = display : element.style.removeProperty("display");
      }
      localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
      globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
      value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
      markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
      scrollerSize -= scrollerSize - globalOffset;
    } else if (markerScroller) {
      _positionMarker(markerScroller, scrollerSize, direction, true);
    }
    if (marker) {
      var position = value + scrollerSize, isStart = marker._isStart;
      scrollerMax = "scroll" + direction.d2;
      _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[scrollerMax], _docEl[scrollerMax]) : marker.parentNode[scrollerMax]) <= position + 1);
      if (useFixedPosition) {
        scrollerBounds = _getBounds(markerScroller);
        useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
      }
    }
    return Math.round(value);
  }, _prefixExp = /(?:webkit|moz|length|cssText|inset)/i, _reparent = function _reparent(element, parent, top, left) {
    if (element.parentNode !== parent) {
      var style = element.style, p, cs;
      if (parent === _body) {
        element._stOrig = style.cssText;
        cs = _getComputedStyle(element);
        for (p in cs) {
          if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
            style[p] = cs[p];
          }
        }
        style.top = top;
        style.left = left;
      } else {
        style.cssText = element._stOrig;
      }
      gsap.core.getCache(element).uncache = 1;
      parent.appendChild(element);
    }
  }, _getTweenCreator = function _getTweenCreator(scroller, direction) {
    var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, lastScroll1, lastScroll2, getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
      var tween = getTween.tween, onComplete = vars.onComplete, modifiers = {};
      tween && tween.kill();
      lastScroll1 = Math.round(initialValue);
      vars[prop] = scrollTo;
      vars.modifiers = modifiers;
      modifiers[prop] = function (value) {
        value = _round(getScroll());
        if (value !== lastScroll1 && value !== lastScroll2 && Math.abs(value - lastScroll1) > 2) {
          tween.kill();
          getTween.tween = 0;
        } else {
          value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
        }
        lastScroll2 = lastScroll1;
        return lastScroll1 = _round(value);
      };
      vars.onComplete = function () {
        getTween.tween = 0;
        onComplete && onComplete.call(tween);
      };
      tween = getTween.tween = gsap.to(scroller, vars);
      return tween;
    };
    scroller[prop] = getScroll;
    scroller.addEventListener("wheel", function () {
      return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
    });
    return getTween;
  };
  _horizontal.op = _vertical;
  var ScrollTrigger = (function () {
    function ScrollTrigger(vars, animation) {
      _coreInitted || ScrollTrigger.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
      this.init(vars, animation);
    }
    var _proto = ScrollTrigger.prototype;
    _proto.init = function init(vars, animation) {
      this.progress = this.start = 0;
      this.vars && this.kill(1);
      if (!_enabled) {
        this.update = this.refresh = this.kill = _passThrough;
        return;
      }
      vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
        trigger: vars
      } : vars, _defaults);
      var direction = vars.horizontal ? _horizontal : _vertical, _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap = _vars.snap, pinReparent = _vars.pinReparent, isToggle = !scrub && scrub !== 0, scroller = _toArray(vars.scroller || _win)[0], scrollerCache = gsap.core.getCache(scroller), isViewport = _isViewport(scroller), useFixedPosition = ("pinType" in vars) ? vars.pinType === "fixed" : isViewport || _getProxyProp(scroller, "pinType") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = ("markers" in vars) ? vars.markers : _defaults.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self = this, onRefreshInit = vars.onRefreshInit && (function () {
        return vars.onRefreshInit(self);
      }), getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), tweenTo, pinCache, snapFunc, isReverted, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, markerEndSetter, cs, snap1, snap2, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevProgress, prevScroll, prevAnimProgress;
      self.media = _creatingMedia;
      anticipatePin *= 45;
      _triggers.push(self);
      self.scroller = scroller;
      self.scroll = _getScrollFunc(scroller, direction);
      scroll1 = self.scroll();
      self.vars = vars;
      animation = animation || vars.animation;
      ("refreshPriority" in vars) && (_sort = 1);
      scrollerCache.tweenScroll = scrollerCache.tweenScroll || ({
        top: _getTweenCreator(scroller, _vertical),
        left: _getTweenCreator(scroller, _horizontal)
      });
      self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
      if (animation) {
        animation.vars.lazy = false;
        animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.render(0, true, true);
        self.animation = animation.pause();
        animation.scrollTrigger = self;
        scrubSmooth = _isNumber(scrub) && scrub;
        scrubSmooth && (scrubTween = gsap.to(animation, {
          ease: "power3",
          duration: scrubSmooth,
          onComplete: function onComplete() {
            return onScrubComplete && onScrubComplete(self);
          }
        }));
        snap1 = 0;
        id || (id = animation.vars.id);
      }
      if (snap) {
        _isObject(snap) || (snap = {
          snapTo: snap
        });
        ("scrollBehavior" in _body.style) && gsap.set(isViewport ? [_body, _docEl] : scroller, {
          scrollBehavior: "auto"
        });
        snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : gsap.utils.snap(snap.snapTo);
        snapDurClamp = snap.duration || ({
          min: 0.1,
          max: 2
        });
        snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
        snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function () {
          if (Math.abs(self.getVelocity()) < 10 && !_pointerIsDown) {
            var totalProgress = animation && !isToggle ? animation.totalProgress() : self.progress, velocity = (totalProgress - snap2) / (_getTime() - _time2) * 1000 || 0, change1 = _abs(velocity / 2) * velocity / 0.185, naturalEnd = totalProgress + (snap.inertia === false ? 0 : change1), endValue = _clamp(0, 1, snapFunc(naturalEnd, self)), scroll = self.scroll(), endScroll = Math.round(start + endValue * change), _snap = snap, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete, tween = tweenTo.tween;
            if (scroll <= end && scroll >= start && endScroll !== scroll) {
              if (tween && !tween._initted && tween.data <= Math.abs(endScroll - scroll)) {
                return;
              }
              tweenTo(endScroll, {
                duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                ease: snap.ease || "power3",
                data: Math.abs(endScroll - scroll),
                onInterrupt: function onInterrupt() {
                  return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
                },
                onComplete: function onComplete() {
                  snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                  onSnapComplete && onSnapComplete(self);
                  _onComplete && _onComplete(self);
                }
              }, scroll, change1 * change, endScroll - scroll - change1 * change);
              onStart && onStart(self, tweenTo.tween);
            }
          } else if (self.isActive) {
            snapDelayedCall.restart(true);
          }
        }).pause();
      }
      id && (_ids[id] = self);
      trigger = self.trigger = _toArray(trigger || pin)[0];
      pin = pin === true ? trigger : _toArray(pin)[0];
      _isString(toggleClass) && (toggleClass = {
        targets: trigger,
        className: toggleClass
      });
      if (pin) {
        pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
        self.pin = pin;
        vars.force3D !== false && gsap.set(pin, {
          force3D: true
        });
        pinCache = gsap.core.getCache(pin);
        if (!pinCache.spacer) {
          pinCache.spacer = spacer = _doc.createElement("div");
          spacer.setAttribute("class", "pin-spacer" + (id ? " pin-spacer-" + id : ""));
          pinCache.pinState = pinOriginalState = _getState(pin);
        } else {
          pinOriginalState = pinCache.pinState;
        }
        self.spacer = spacer = pinCache.spacer;
        cs = _getComputedStyle(pin);
        spacingStart = cs[pinSpacing + direction.os2];
        pinGetter = gsap.getProperty(pin);
        pinSetter = gsap.quickSetter(pin, direction.a, _px);
        _swapPinIn(pin, spacer, cs);
        pinState = _getState(pin);
      }
      if (markers) {
        markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
        markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
        markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
        offset = markerStartTrigger["offset" + direction.op.d2];
        markerStart = _createMarker("start", id, scroller, direction, markerVars, offset);
        markerEnd = _createMarker("end", id, scroller, direction, markerVars, offset);
        if (!useFixedPosition) {
          _makePositionable(isViewport ? _body : scroller);
          gsap.set([markerStartTrigger, markerEndTrigger], {
            force3D: true
          });
          markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
          markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
        }
      }
      self.revert = function (revert) {
        var r = revert !== false || !self.enabled, prevRefreshing = _refreshing;
        if (r !== isReverted) {
          if (r) {
            prevScroll = Math.max(self.scroll(), self.scroll.rec || 0);
            prevProgress = self.progress;
            prevAnimProgress = animation && animation.progress();
          }
          markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
            return m.style.display = r ? "none" : "block";
          });
          r && (_refreshing = 1);
          self.update(r);
          _refreshing = prevRefreshing;
          pin && (r ? _swapPinOut(pin, spacer, pinOriginalState) : (!pinReparent || !self.isActive) && _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState));
          isReverted = r;
        }
      };
      self.refresh = function (soft, force) {
        if ((_refreshing || !self.enabled) && !force) {
          return;
        }
        if (pin && soft && _lastScrollTime) {
          _addListener(ScrollTrigger, "scrollEnd", _softRefresh);
          return;
        }
        _refreshing = 1;
        scrubTween && scrubTween.pause();
        invalidateOnRefresh && animation && animation.progress(0).invalidate();
        isReverted || self.revert();
        var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = _maxScroll(scroller, direction), offset = 0, otherPinOffset = 0, parsedEnd = vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0, i = triggerIndex, cs, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted;
        while (i--) {
          curTrigger = _triggers[i];
          curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = 1);
          curPin = curTrigger.pin;
          curPin && (curPin === trigger || curPin === pin) && curTrigger.revert();
        }
        start = _parsePosition(parsedStart, trigger, size, direction, self.scroll(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max) || (pin ? -0.001 : 0);
        _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));
        if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
          if (~parsedEnd.indexOf(" ")) {
            parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
          } else {
            offset = _offsetToPx(parsedEnd.substr(2), size);
            parsedEnd = _isString(parsedStart) ? parsedStart : start + offset;
            parsedEndTrigger = trigger;
          }
        }
        end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, self.scroll() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max)) || -0.001;
        change = end - start || (start -= 0.01) && 0.001;
        offset = 0;
        i = triggerIndex;
        while (i--) {
          curTrigger = _triggers[i];
          curPin = curTrigger.pin;
          if (curPin && curTrigger.start - curTrigger._pinPush < start) {
            cs = curTrigger.end - curTrigger.start;
            curPin === trigger && (offset += cs);
            curPin === pin && (otherPinOffset += cs);
          }
        }
        start += offset;
        end += offset;
        self._pinPush = otherPinOffset;
        if (markerStart && offset) {
          cs = {};
          cs[direction.a] = "+=" + offset;
          gsap.set([markerStart, markerEnd], cs);
        }
        if (pin) {
          cs = _getComputedStyle(pin);
          isVertical = direction === _vertical;
          scroll = self.scroll();
          pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
          !max && end > 1 && ((isViewport ? _body : scroller).style["overflow-" + direction.a] = "scroll");
          _swapPinIn(pin, spacer, cs);
          pinState = _getState(pin);
          bounds = _getBounds(pin, true);
          oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
          if (pinSpacing) {
            spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
            spacerState.t = spacer;
            i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
            i && spacerState.push(direction.d, i + _px);
            _setState(spacerState);
            useFixedPosition && self.scroll(prevScroll);
          }
          if (useFixedPosition) {
            override = {
              top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
              left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
              boxSizing: "border-box",
              position: "fixed"
            };
            override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
            override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
            override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
            override[_padding] = cs[_padding];
            override[_padding + _Top] = cs[_padding + _Top];
            override[_padding + _Right] = cs[_padding + _Right];
            override[_padding + _Bottom] = cs[_padding + _Bottom];
            override[_padding + _Left] = cs[_padding + _Left];
            pinActiveState = _copyState(pinOriginalState, override, pinReparent);
          }
          if (animation) {
            initted = animation._initted;
            _suppressOverwrites(1);
            animation.progress(1, true);
            pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
            change !== pinChange && pinActiveState.splice(pinActiveState.length - 2, 2);
            animation.progress(0, true);
            initted || animation.invalidate();
            _suppressOverwrites(0);
          } else {
            pinChange = change;
          }
        } else if (trigger && self.scroll()) {
          bounds = trigger.parentNode;
          while (bounds && bounds !== _body) {
            if (bounds._pinOffset) {
              start -= bounds._pinOffset;
              end -= bounds._pinOffset;
            }
            bounds = bounds.parentNode;
          }
        }
        for (i = 0; i < triggerIndex; i++) {
          curTrigger = _triggers[i].pin;
          curTrigger && (curTrigger === trigger || curTrigger === pin) && _triggers[i].revert(false);
        }
        self.start = start;
        self.end = end;
        scroll1 = scroll2 = self.scroll();
        scroll1 < prevScroll && self.scroll(prevScroll);
        self.revert(false);
        _refreshing = 0;
        animation && isToggle && animation._initted && animation.progress(prevAnimProgress, true).render(animation.time(), true, true);
        if (prevProgress !== self.progress) {
          scrubTween && animation.totalProgress(prevProgress, true);
          self.progress = prevProgress;
          self.update();
        }
        pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
        onRefresh && onRefresh(self);
      };
      self.getVelocity = function () {
        return (self.scroll() - scroll2) / (_getTime() - _time2) * 1000 || 0;
      };
      self.update = function (reset, recordVelocity) {
        var scroll = self.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress = self.progress, isActive, wasActive, toggleState, action, stateChanged, toggled;
        if (recordVelocity) {
          scroll2 = scroll1;
          scroll1 = scroll;
          if (snap) {
            snap2 = snap1;
            snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
          }
        }
        anticipatePin && !clipped && pin && !_refreshing && !_startup && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin && (clipped = 0.0001);
        if (clipped !== prevProgress && self.enabled) {
          isActive = self.isActive = !!clipped && clipped < 1;
          wasActive = !!prevProgress && prevProgress < 1;
          toggled = isActive !== wasActive;
          stateChanged = toggled || !!clipped !== !!prevProgress;
          self.direction = clipped > prevProgress ? 1 : -1;
          self.progress = clipped;
          if (!isToggle) {
            if (scrubTween && !_refreshing && !_startup) {
              scrubTween.vars.totalProgress = clipped;
              scrubTween.invalidate().restart();
            } else if (animation) {
              animation.totalProgress(clipped, !!_refreshing);
            }
          }
          if (pin) {
            reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
            if (!useFixedPosition) {
              pinSetter(pinStart + pinChange * clipped);
            } else if (stateChanged) {
              action = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
              if (pinReparent) {
                if (!reset && (isActive || action)) {
                  var bounds = _getBounds(pin, true), _offset = scroll - start;
                  _reparent(pin, _body, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                } else {
                  _reparent(pin, spacer);
                }
              }
              _setState(isActive || action ? pinActiveState : pinState);
              pinChange !== change && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !action ? pinChange : 0));
            }
          }
          snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
          toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function (el) {
            return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
          });
          onUpdate && !isToggle && !reset && onUpdate(self);
          if (stateChanged && !_refreshing) {
            toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3;
            if (isToggle) {
              action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
              if (animation && (action === "complete" || action === "reset" || (action in animation))) {
                if (action === "complete") {
                  animation.pause().totalProgress(1);
                } else if (action === "reset") {
                  animation.restart(true).pause();
                } else {
                  animation[action]();
                }
              }
              onUpdate && onUpdate(self);
            }
            if (toggled || !_limitCallbacks) {
              onToggle && toggled && onToggle(self);
              callbacks[toggleState] && callbacks[toggleState](self);
              once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);
              if (!toggled) {
                toggleState = clipped === 1 ? 1 : 3;
                callbacks[toggleState] && callbacks[toggleState](self);
              }
            }
          } else if (isToggle && onUpdate && !_refreshing) {
            onUpdate(self);
          }
        }
        if (markerEndSetter) {
          markerStartSetter(scroll + (markerStartTrigger._isFlipped ? 1 : 0));
          markerEndSetter(scroll);
        }
      };
      self.enable = function () {
        if (!self.enabled) {
          self.enabled = true;
          _addListener(scroller, "resize", _onResize);
          _addListener(scroller, "scroll", _onScroll);
          onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);
          !animation || !animation.add ? self.refresh() : gsap.delayedCall(0.01, function () {
            return start || end || self.refresh();
          }) && (change = 0.01) && (start = end = 0);
        }
      };
      self.disable = function (reset, allowAnimation) {
        if (self.enabled) {
          reset !== false && self.revert();
          self.enabled = self.isActive = false;
          allowAnimation || scrubTween && scrubTween.pause();
          prevScroll = 0;
          pinCache && (pinCache.uncache = 1);
          onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);
          if (snapDelayedCall) {
            snapDelayedCall.pause();
            tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
          }
          if (!isViewport) {
            var i = _triggers.length;
            while (i--) {
              if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
                return;
              }
            }
            _removeListener(scroller, "resize", _onResize);
            _removeListener(scroller, "scroll", _onScroll);
          }
        }
      };
      self.kill = function (revert, allowAnimation) {
        self.disable(revert, allowAnimation);
        id && delete _ids[id];
        var i = _triggers.indexOf(self);
        _triggers.splice(i, 1);
        i === _i && _direction > 0 && _i--;
        if (animation) {
          animation.scrollTrigger = null;
          revert && animation.render(-1);
          allowAnimation || animation.kill();
        }
        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
          return m.parentNode.removeChild(m);
        });
        if (pin) {
          pinCache && (pinCache.uncache = 1);
          i = 0;
          _triggers.forEach(function (t) {
            return t.pin === pin && i++;
          });
          i || (pinCache.spacer = 0);
        }
      };
      self.enable();
    };
    ScrollTrigger.register = function register(core) {
      if (!_coreInitted) {
        gsap = core || _getGSAP();
        if (_windowExists() && window.document) {
          _win = window;
          _doc = document;
          _docEl = _doc.documentElement;
          _body = _doc.body;
        }
        if (gsap) {
          _toArray = gsap.utils.toArray;
          _clamp = gsap.utils.clamp;
          _suppressOverwrites = gsap.core.suppressOverwrites || _passThrough;
          gsap.core.globals("ScrollTrigger", ScrollTrigger);
          if (_body) {
            _raf = _win.requestAnimationFrame || (function (f) {
              return setTimeout(f, 16);
            });
            _addListener(_win, "wheel", _onScroll);
            _root = [_win, _doc, _docEl, _body];
            _addListener(_doc, "scroll", _onScroll);
            var bodyStyle = _body.style, border = bodyStyle.borderTop, bounds;
            bodyStyle.borderTop = "1px solid #000";
            bounds = _getBounds(_body);
            _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
            _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
            border ? bodyStyle.borderTop = border : bodyStyle.removeProperty("border-top");
            _syncInterval = setInterval(_sync, 200);
            gsap.delayedCall(0.5, function () {
              return _startup = 0;
            });
            _addListener(_doc, "touchcancel", _passThrough);
            _addListener(_body, "touchstart", _passThrough);
            _multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", function () {
              return _pointerIsDown = 1;
            });
            _multiListener(_addListener, _doc, "pointerup,touchend,mouseup", function () {
              return _pointerIsDown = 0;
            });
            _transformProp = gsap.utils.checkPrefix("transform");
            _stateProps.push(_transformProp);
            _coreInitted = _getTime();
            _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
            _autoRefresh = [_doc, "visibilitychange", function () {
              var w = _win.innerWidth, h = _win.innerHeight;
              if (_doc.hidden) {
                _prevWidth = w;
                _prevHeight = h;
              } else if (_prevWidth !== w || _prevHeight !== h) {
                _onResize();
              }
            }, _doc, "DOMContentLoaded", _refreshAll, _win, "load", function () {
              return _lastScrollTime || _refreshAll();
            }, _win, "resize", _onResize];
            _iterateAutoRefresh(_addListener);
          }
        }
      }
      return _coreInitted;
    };
    ScrollTrigger.defaults = function defaults(config) {
      for (var p in config) {
        _defaults[p] = config[p];
      }
    };
    ScrollTrigger.kill = function kill() {
      _enabled = 0;
      _triggers.slice(0).forEach(function (trigger) {
        return trigger.kill(1);
      });
    };
    ScrollTrigger.config = function config(vars) {
      ("limitCallbacks" in vars) && (_limitCallbacks = !!vars.limitCallbacks);
      var ms = vars.syncInterval;
      ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
      if (("autoRefreshEvents" in vars)) {
        _iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none");
        _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
      }
    };
    ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
      var t = _toArray(target)[0], i = _scrollers.indexOf(t), isViewport = _isViewport(t);
      if (~i) {
        _scrollers.splice(i, isViewport ? 6 : 2);
      }
      isViewport ? _proxies.unshift(_win, vars, _body, vars, _docEl, vars) : _proxies.unshift(t, vars);
    };
    ScrollTrigger.matchMedia = function matchMedia(vars) {
      var mq, p, i, func, result;
      for (p in vars) {
        i = _media.indexOf(p);
        func = vars[p];
        _creatingMedia = p;
        if (p === "all") {
          func();
        } else {
          mq = _win.matchMedia(p);
          if (mq) {
            mq.matches && (result = func());
            if (~i) {
              _media[i + 1] = _combineFunc(_media[i + 1], func);
              _media[i + 2] = _combineFunc(_media[i + 2], result);
            } else {
              i = _media.length;
              _media.push(p, func, result);
              mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
            }
            _media[i + 3] = mq.matches;
          }
        }
        _creatingMedia = 0;
      }
      return _media;
    };
    ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
      query || (_media.length = 0);
      query = _media.indexOf(query);
      query >= 0 && _media.splice(query, 4);
    };
    return ScrollTrigger;
  })();
  ScrollTrigger.version = "3.6.1";
  ScrollTrigger.saveStyles = function (targets) {
    return targets ? _toArray(targets).forEach(function (target) {
      if (target && target.style) {
        var i = _savedStyles.indexOf(target);
        i >= 0 && _savedStyles.splice(i, 4);
        _savedStyles.push(target, target.style.cssText, gsap.core.getCache(target), _creatingMedia);
      }
    }) : _savedStyles;
  };
  ScrollTrigger.revert = function (soft, media) {
    return _revertAll(!soft, media);
  };
  ScrollTrigger.create = function (vars, animation) {
    return new ScrollTrigger(vars, animation);
  };
  ScrollTrigger.refresh = function (safe) {
    return safe ? _onResize() : _refreshAll(true);
  };
  ScrollTrigger.update = _updateAll;
  ScrollTrigger.maxScroll = function (element, horizontal) {
    return _maxScroll(element, horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger.getScrollFunc = function (element, horizontal) {
    return _getScrollFunc(_toArray(element)[0], horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger.getById = function (id) {
    return _ids[id];
  };
  ScrollTrigger.getAll = function () {
    return _triggers.slice(0);
  };
  ScrollTrigger.isScrolling = function () {
    return !!_lastScrollTime;
  };
  ScrollTrigger.addEventListener = function (type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  };
  ScrollTrigger.removeEventListener = function (type, callback) {
    var a = _listeners[type], i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  };
  ScrollTrigger.batch = function (targets, vars) {
    var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback(type, callback) {
      var elements = [], triggers = [], delay = gsap.delayedCall(interval, function () {
        callback(elements, triggers);
        elements = [];
        triggers = [];
      }).pause();
      return function (self) {
        elements.length || delay.restart(true);
        elements.push(self.trigger);
        triggers.push(self);
        batchMax <= elements.length && delay.progress(1);
      };
    }, p;
    for (p in vars) {
      varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
    }
    if (_isFunction(batchMax)) {
      batchMax = batchMax();
      _addListener(ScrollTrigger, "refresh", function () {
        return batchMax = vars.batchMax();
      });
    }
    _toArray(targets).forEach(function (target) {
      var config = {};
      for (p in varsCopy) {
        config[p] = varsCopy[p];
      }
      config.trigger = target;
      result.push(ScrollTrigger.create(config));
    });
    return result;
  };
  ScrollTrigger.sort = function (func) {
    return _triggers.sort(func || (function (a, b) {
      return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
    }));
  };
  _getGSAP() && gsap.registerPlugin(ScrollTrigger);
  exports.ScrollTrigger = ScrollTrigger;
  exports.default = ScrollTrigger;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{}],"1Tv25":[function(require,module,exports) {
var define;
!(function (t, n) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = t || self).barba = n();
})(this, function () {
  function t(t, n) {
    for (var r = 0; r < n.length; r++) {
      var e = n[r];
      (e.enumerable = e.enumerable || !1, e.configurable = !0, ("value" in e) && (e.writable = !0), Object.defineProperty(t, e.key, e));
    }
  }
  function n(n, r, e) {
    return (r && t(n.prototype, r), e && t(n, e), n);
  }
  function r() {
    return (r = Object.assign || (function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n];
        for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
      }
      return t;
    })).apply(this, arguments);
  }
  function e(t, n) {
    (t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n);
  }
  function i(t) {
    return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }
  function o(t, n) {
    return (o = Object.setPrototypeOf || (function (t, n) {
      return (t.__proto__ = n, t);
    }))(t, n);
  }
  function u(t, n, r) {
    return (u = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0);
      } catch (t) {
        return !1;
      }
    })() ? Reflect.construct : function (t, n, r) {
      var e = [null];
      e.push.apply(e, n);
      var i = new (Function.bind.apply(t, e))();
      return (r && o(i, r.prototype), i);
    }).apply(null, arguments);
  }
  function f(t) {
    var n = "function" == typeof Map ? new Map() : void 0;
    return (f = function (t) {
      if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== n) {
        if (n.has(t)) return n.get(t);
        n.set(t, r);
      }
      function r() {
        return u(t, arguments, i(this).constructor);
      }
      return (r.prototype = Object.create(t.prototype, {
        constructor: {
          value: r,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), o(r, t));
    })(t);
  }
  function s(t, n) {
    try {
      var r = t();
    } catch (t) {
      return n(t);
    }
    return r && r.then ? r.then(void 0, n) : r;
  }
  ("undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))));
  var c, a = "2.9.7", h = function () {};
  !(function (t) {
    (t[t.off = 0] = "off", t[t.error = 1] = "error", t[t.warning = 2] = "warning", t[t.info = 3] = "info", t[t.debug = 4] = "debug");
  })(c || (c = {}));
  var v = c.off, l = (function () {
    function t(t) {
      this.t = t;
    }
    (t.getLevel = function () {
      return v;
    }, t.setLevel = function (t) {
      return v = c[t];
    });
    var n = t.prototype;
    return (n.error = function () {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      this.i(console.error, c.error, n);
    }, n.warn = function () {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      this.i(console.warn, c.warning, n);
    }, n.info = function () {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      this.i(console.info, c.info, n);
    }, n.debug = function () {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      this.i(console.log, c.debug, n);
    }, n.i = function (n, r, e) {
      r <= t.getLevel() && n.apply(console, ["[" + this.t + "] "].concat(e));
    }, t);
  })(), d = O, m = E, p = g, w = x, b = T, y = "/", P = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g");
  function g(t, n) {
    for (var r, e = [], i = 0, o = 0, u = "", f = n && n.delimiter || y, s = n && n.whitelist || void 0, c = !1; null !== (r = P.exec(t)); ) {
      var a = r[0], h = r[1], v = r.index;
      if ((u += t.slice(o, v), o = v + a.length, h)) (u += h[1], c = !0); else {
        var l = "", d = r[2], m = r[3], p = r[4], w = r[5];
        if (!c && u.length) {
          var b = u.length - 1, g = u[b];
          (!s || s.indexOf(g) > -1) && (l = g, u = u.slice(0, b));
        }
        u && (e.push(u), u = "", c = !1);
        var E = m || p, x = l || f;
        e.push({
          name: d || i++,
          prefix: l,
          delimiter: x,
          optional: "?" === w || "*" === w,
          repeat: "+" === w || "*" === w,
          pattern: E ? A(E) : "[^" + k(x === f ? x : x + f) + "]+?"
        });
      }
    }
    return ((u || o < t.length) && e.push(u + t.substr(o)), e);
  }
  function E(t, n) {
    return function (r, e) {
      var i = t.exec(r);
      if (!i) return !1;
      for (var o = i[0], u = i.index, f = {}, s = e && e.decode || decodeURIComponent, c = 1; c < i.length; c++) if (void 0 !== i[c]) {
        var a = n[c - 1];
        f[a.name] = a.repeat ? i[c].split(a.delimiter).map(function (t) {
          return s(t, a);
        }) : s(i[c], a);
      }
      return {
        path: o,
        index: u,
        params: f
      };
    };
  }
  function x(t, n) {
    for (var r = new Array(t.length), e = 0; e < t.length; e++) "object" == typeof t[e] && (r[e] = new RegExp("^(?:" + t[e].pattern + ")$", R(n)));
    return function (n, e) {
      for (var i = "", o = e && e.encode || encodeURIComponent, u = !e || !1 !== e.validate, f = 0; f < t.length; f++) {
        var s = t[f];
        if ("string" != typeof s) {
          var c, a = n ? n[s.name] : void 0;
          if (Array.isArray(a)) {
            if (!s.repeat) throw new TypeError('Expected "' + s.name + '" to not repeat, but got array');
            if (0 === a.length) {
              if (s.optional) continue;
              throw new TypeError('Expected "' + s.name + '" to not be empty');
            }
            for (var h = 0; h < a.length; h++) {
              if ((c = o(a[h], s), u && !r[f].test(c))) throw new TypeError('Expected all "' + s.name + '" to match "' + s.pattern + '"');
              i += (0 === h ? s.prefix : s.delimiter) + c;
            }
          } else if ("string" != typeof a && "number" != typeof a && "boolean" != typeof a) {
            if (!s.optional) throw new TypeError('Expected "' + s.name + '" to be ' + (s.repeat ? "an array" : "a string"));
          } else {
            if ((c = o(String(a), s), u && !r[f].test(c))) throw new TypeError('Expected "' + s.name + '" to match "' + s.pattern + '", but got "' + c + '"');
            i += s.prefix + c;
          }
        } else i += s;
      }
      return i;
    };
  }
  function k(t) {
    return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
  }
  function A(t) {
    return t.replace(/([=!:$/()])/g, "\\$1");
  }
  function R(t) {
    return t && t.sensitive ? "" : "i";
  }
  function T(t, n, r) {
    for (var e = (r = r || ({})).strict, i = !1 !== r.start, o = !1 !== r.end, u = r.delimiter || y, f = [].concat(r.endsWith || []).map(k).concat("$").join("|"), s = i ? "^" : "", c = 0; c < t.length; c++) {
      var a = t[c];
      if ("string" == typeof a) s += k(a); else {
        var h = a.repeat ? "(?:" + a.pattern + ")(?:" + k(a.delimiter) + "(?:" + a.pattern + "))*" : a.pattern;
        (n && n.push(a), s += a.optional ? a.prefix ? "(?:" + k(a.prefix) + "(" + h + "))?" : "(" + h + ")?" : k(a.prefix) + "(" + h + ")");
      }
    }
    if (o) (e || (s += "(?:" + k(u) + ")?"), s += "$" === f ? "$" : "(?=" + f + ")"); else {
      var v = t[t.length - 1], l = "string" == typeof v ? v[v.length - 1] === u : void 0 === v;
      (e || (s += "(?:" + k(u) + "(?=" + f + "))?"), l || (s += "(?=" + k(u) + "|" + f + ")"));
    }
    return new RegExp(s, R(r));
  }
  function O(t, n, r) {
    return t instanceof RegExp ? (function (t, n) {
      if (!n) return t;
      var r = t.source.match(/\((?!\?)/g);
      if (r) for (var e = 0; e < r.length; e++) n.push({
        name: e,
        prefix: null,
        delimiter: null,
        optional: !1,
        repeat: !1,
        pattern: null
      });
      return t;
    })(t, n) : Array.isArray(t) ? (function (t, n, r) {
      for (var e = [], i = 0; i < t.length; i++) e.push(O(t[i], n, r).source);
      return new RegExp("(?:" + e.join("|") + ")", R(r));
    })(t, n, r) : (function (t, n, r) {
      return T(g(t, r), n, r);
    })(t, n, r);
  }
  (d.match = function (t, n) {
    var r = [];
    return E(O(t, r, n), r);
  }, d.regexpToFunction = m, d.parse = p, d.compile = function (t, n) {
    return x(g(t, n), n);
  }, d.tokensToFunction = w, d.tokensToRegExp = b);
  var S = {
    container: "container",
    history: "history",
    namespace: "namespace",
    prefix: "data-barba",
    prevent: "prevent",
    wrapper: "wrapper"
  }, j = new ((function () {
    function t() {
      (this.o = S, this.u = new DOMParser());
    }
    var n = t.prototype;
    return (n.toString = function (t) {
      return t.outerHTML;
    }, n.toDocument = function (t) {
      return this.u.parseFromString(t, "text/html");
    }, n.toElement = function (t) {
      var n = document.createElement("div");
      return (n.innerHTML = t, n);
    }, n.getHtml = function (t) {
      return (void 0 === t && (t = document), this.toString(t.documentElement));
    }, n.getWrapper = function (t) {
      return (void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]'));
    }, n.getContainer = function (t) {
      return (void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]'));
    }, n.removeContainer = function (t) {
      document.body.contains(t) && t.parentNode.removeChild(t);
    }, n.addContainer = function (t, n) {
      var r = this.getContainer();
      r ? this.s(t, r) : n.appendChild(t);
    }, n.getNamespace = function (t) {
      void 0 === t && (t = document);
      var n = t.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
      return n ? n.getAttribute(this.o.prefix + "-" + this.o.namespace) : null;
    }, n.getHref = function (t) {
      if (t.tagName && "a" === t.tagName.toLowerCase()) {
        if ("string" == typeof t.href) return t.href;
        var n = t.getAttribute("href") || t.getAttribute("xlink:href");
        if (n) return this.resolveUrl(n.baseVal || n);
      }
      return null;
    }, n.resolveUrl = function () {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      var e = n.length;
      if (0 === e) throw new Error("resolveUrl requires at least one argument; got none.");
      var i = document.createElement("base");
      if ((i.href = arguments[0], 1 === e)) return i.href;
      var o = document.getElementsByTagName("head")[0];
      o.insertBefore(i, o.firstChild);
      for (var u, f = document.createElement("a"), s = 1; s < e; s++) (f.href = arguments[s], i.href = u = f.href);
      return (o.removeChild(i), u);
    }, n.s = function (t, n) {
      n.parentNode.insertBefore(t, n.nextSibling);
    }, t);
  })())(), M = new ((function () {
    function t() {
      (this.h = [], this.v = -1);
    }
    var e = t.prototype;
    return (e.init = function (t, n) {
      this.l = "barba";
      var r = {
        ns: n,
        scroll: {
          x: window.scrollX,
          y: window.scrollY
        },
        url: t
      };
      (this.h.push(r), this.v = 0);
      var e = {
        from: this.l,
        index: 0,
        states: [].concat(this.h)
      };
      window.history && window.history.replaceState(e, "", t);
    }, e.change = function (t, n, r) {
      if (r && r.state) {
        var e = r.state, i = e.index;
        (n = this.m(this.v - i), this.replace(e.states), this.v = i);
      } else this.add(t, n);
      return n;
    }, e.add = function (t, n) {
      var r = this.size, e = this.p(n), i = {
        ns: "tmp",
        scroll: {
          x: window.scrollX,
          y: window.scrollY
        },
        url: t
      };
      (this.h.push(i), this.v = r);
      var o = {
        from: this.l,
        index: r,
        states: [].concat(this.h)
      };
      switch (e) {
        case "push":
          window.history && window.history.pushState(o, "", t);
          break;
        case "replace":
          window.history && window.history.replaceState(o, "", t);
      }
    }, e.update = function (t, n) {
      var e = n || this.v, i = r({}, this.get(e), {}, t);
      this.set(e, i);
    }, e.remove = function (t) {
      (t ? this.h.splice(t, 1) : this.h.pop(), this.v--);
    }, e.clear = function () {
      (this.h = [], this.v = -1);
    }, e.replace = function (t) {
      this.h = t;
    }, e.get = function (t) {
      return this.h[t];
    }, e.set = function (t, n) {
      return this.h[t] = n;
    }, e.p = function (t) {
      var n = "push", r = t, e = S.prefix + "-" + S.history;
      return (r.hasAttribute && r.hasAttribute(e) && (n = r.getAttribute(e)), n);
    }, e.m = function (t) {
      return Math.abs(t) > 1 ? t > 0 ? "forward" : "back" : 0 === t ? "popstate" : t > 0 ? "back" : "forward";
    }, n(t, [{
      key: "current",
      get: function () {
        return this.h[this.v];
      }
    }, {
      key: "state",
      get: function () {
        return this.h[this.h.length - 1];
      }
    }, {
      key: "previous",
      get: function () {
        return this.v < 1 ? null : this.h[this.v - 1];
      }
    }, {
      key: "size",
      get: function () {
        return this.h.length;
      }
    }]), t);
  })())(), L = function (t, n) {
    try {
      var r = (function () {
        if (!n.next.html) return Promise.resolve(t).then(function (t) {
          var r = n.next;
          if (t) {
            var e = j.toElement(t);
            (r.namespace = j.getNamespace(e), r.container = j.getContainer(e), r.html = t, M.update({
              ns: r.namespace
            }));
            var i = j.toDocument(t);
            document.title = i.title;
          }
        });
      })();
      return Promise.resolve(r && r.then ? r.then(function () {}) : void 0);
    } catch (t) {
      return Promise.reject(t);
    }
  }, $ = d, _ = {
    __proto__: null,
    update: L,
    nextTick: function () {
      return new Promise(function (t) {
        window.requestAnimationFrame(t);
      });
    },
    pathToRegexp: $
  }, q = function () {
    return window.location.origin;
  }, B = function (t) {
    return (void 0 === t && (t = window.location.href), U(t).port);
  }, U = function (t) {
    var n, r = t.match(/:\d+/);
    if (null === r) ((/^http/).test(t) && (n = 80), (/^https/).test(t) && (n = 443)); else {
      var e = r[0].substring(1);
      n = parseInt(e, 10);
    }
    var i, o = t.replace(q(), ""), u = {}, f = o.indexOf("#");
    f >= 0 && (i = o.slice(f + 1), o = o.slice(0, f));
    var s = o.indexOf("?");
    return (s >= 0 && (u = D(o.slice(s + 1)), o = o.slice(0, s)), {
      hash: i,
      path: o,
      port: n,
      query: u
    });
  }, D = function (t) {
    return t.split("&").reduce(function (t, n) {
      var r = n.split("=");
      return (t[r[0]] = r[1], t);
    }, {});
  }, F = function (t) {
    return (void 0 === t && (t = window.location.href), t.replace(/(\/#.*|\/|#.*)$/, ""));
  }, H = {
    __proto__: null,
    getHref: function () {
      return window.location.href;
    },
    getOrigin: q,
    getPort: B,
    getPath: function (t) {
      return (void 0 === t && (t = window.location.href), U(t).path);
    },
    parse: U,
    parseQuery: D,
    clean: F
  };
  function I(t, n, r) {
    return (void 0 === n && (n = 2e3), new Promise(function (e, i) {
      var o = new XMLHttpRequest();
      (o.onreadystatechange = function () {
        if (o.readyState === XMLHttpRequest.DONE) if (200 === o.status) e(o.responseText); else if (o.status) {
          var n = {
            status: o.status,
            statusText: o.statusText
          };
          (r(t, n), i(n));
        }
      }, o.ontimeout = function () {
        var e = new Error("Timeout error [" + n + "]");
        (r(t, e), i(e));
      }, o.onerror = function () {
        var n = new Error("Fetch error");
        (r(t, n), i(n));
      }, o.open("GET", t), o.timeout = n, o.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), o.setRequestHeader("x-barba", "yes"), o.send());
    }));
  }
  var C = function (t) {
    return !!t && ("object" == typeof t || "function" == typeof t) && "function" == typeof t.then;
  };
  function N(t, n) {
    return (void 0 === n && (n = {}), function () {
      for (var r = arguments.length, e = new Array(r), i = 0; i < r; i++) e[i] = arguments[i];
      var o = !1, u = new Promise(function (r, i) {
        n.async = function () {
          return (o = !0, function (t, n) {
            t ? i(t) : r(n);
          });
        };
        var u = t.apply(n, e);
        o || (C(u) ? u.then(r, i) : r(u));
      });
      return u;
    });
  }
  var X = new ((function (t) {
    function n() {
      var n;
      return ((n = t.call(this) || this).logger = new l("@barba/core"), n.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"], n.registered = new Map(), n.init(), n);
    }
    e(n, t);
    var r = n.prototype;
    return (r.init = function () {
      var t = this;
      (this.registered.clear(), this.all.forEach(function (n) {
        t[n] || (t[n] = function (r, e) {
          (t.registered.has(n) || t.registered.set(n, new Set()), t.registered.get(n).add({
            ctx: e || ({}),
            fn: r
          }));
        });
      }));
    }, r.do = function (t) {
      for (var n = this, r = arguments.length, e = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) e[i - 1] = arguments[i];
      if (this.registered.has(t)) {
        var o = Promise.resolve();
        return (this.registered.get(t).forEach(function (t) {
          o = o.then(function () {
            return N(t.fn, t.ctx).apply(void 0, e);
          });
        }), o.catch(function (r) {
          (n.logger.debug("Hook error [" + t + "]"), n.logger.error(r));
        }));
      }
      return Promise.resolve();
    }, r.clear = function () {
      var t = this;
      (this.all.forEach(function (n) {
        delete t[n];
      }), this.init());
    }, r.help = function () {
      this.logger.info("Available hooks: " + this.all.join(","));
      var t = [];
      (this.registered.forEach(function (n, r) {
        return t.push(r);
      }), this.logger.info("Registered hooks: " + t.join(",")));
    }, n);
  })(h))(), z = (function () {
    function t(t) {
      if ((this.P = [], "boolean" == typeof t)) this.g = t; else {
        var n = Array.isArray(t) ? t : [t];
        this.P = n.map(function (t) {
          return $(t);
        });
      }
    }
    return (t.prototype.checkHref = function (t) {
      if ("boolean" == typeof this.g) return this.g;
      var n = U(t).path;
      return this.P.some(function (t) {
        return null !== t.exec(n);
      });
    }, t);
  })(), G = (function (t) {
    function n(n) {
      var r;
      return ((r = t.call(this, n) || this).k = new Map(), r);
    }
    e(n, t);
    var i = n.prototype;
    return (i.set = function (t, n, r) {
      return (this.k.set(t, {
        action: r,
        request: n
      }), {
        action: r,
        request: n
      });
    }, i.get = function (t) {
      return this.k.get(t);
    }, i.getRequest = function (t) {
      return this.k.get(t).request;
    }, i.getAction = function (t) {
      return this.k.get(t).action;
    }, i.has = function (t) {
      return !this.checkHref(t) && this.k.has(t);
    }, i.delete = function (t) {
      return this.k.delete(t);
    }, i.update = function (t, n) {
      var e = r({}, this.k.get(t), {}, n);
      return (this.k.set(t, e), e);
    }, n);
  })(z), Q = function () {
    return !window.history.pushState;
  }, W = function (t) {
    return !t.el || !t.href;
  }, J = function (t) {
    var n = t.event;
    return n.which > 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey;
  }, K = function (t) {
    var n = t.el;
    return n.hasAttribute("target") && "_blank" === n.target;
  }, V = function (t) {
    var n = t.el;
    return void 0 !== n.protocol && window.location.protocol !== n.protocol || void 0 !== n.hostname && window.location.hostname !== n.hostname;
  }, Y = function (t) {
    var n = t.el;
    return void 0 !== n.port && B() !== B(n.href);
  }, Z = function (t) {
    var n = t.el;
    return n.getAttribute && "string" == typeof n.getAttribute("download");
  }, tt = function (t) {
    return t.el.hasAttribute(S.prefix + "-" + S.prevent);
  }, nt = function (t) {
    return Boolean(t.el.closest("[" + S.prefix + "-" + S.prevent + '="all"]'));
  }, rt = function (t) {
    var n = t.href;
    return F(n) === F() && B(n) === B();
  }, et = (function (t) {
    function n(n) {
      var r;
      return ((r = t.call(this, n) || this).suite = [], r.tests = new Map(), r.init(), r);
    }
    e(n, t);
    var r = n.prototype;
    return (r.init = function () {
      (this.add("pushState", Q), this.add("exists", W), this.add("newTab", J), this.add("blank", K), this.add("corsDomain", V), this.add("corsPort", Y), this.add("download", Z), this.add("preventSelf", tt), this.add("preventAll", nt), this.add("sameUrl", rt, !1));
    }, r.add = function (t, n, r) {
      (void 0 === r && (r = !0), this.tests.set(t, n), r && this.suite.push(t));
    }, r.run = function (t, n, r, e) {
      return this.tests.get(t)({
        el: n,
        event: r,
        href: e
      });
    }, r.checkLink = function (t, n, r) {
      var e = this;
      return this.suite.some(function (i) {
        return e.run(i, t, n, r);
      });
    }, n);
  })(z), it = (function (t) {
    function n(r, e) {
      var i;
      void 0 === e && (e = "Barba error");
      for (var o = arguments.length, u = new Array(o > 2 ? o - 2 : 0), f = 2; f < o; f++) u[f - 2] = arguments[f];
      return ((i = t.call.apply(t, [this].concat(u)) || this).error = r, i.label = e, Error.captureStackTrace && Error.captureStackTrace((function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      })(i), n), i.name = "BarbaError", i);
    }
    return (e(n, t), n);
  })(f(Error)), ot = (function () {
    function t(t) {
      (void 0 === t && (t = []), this.logger = new l("@barba/core"), this.all = [], this.page = [], this.once = [], this.A = [{
        name: "namespace",
        type: "strings"
      }, {
        name: "custom",
        type: "function"
      }], t && (this.all = this.all.concat(t)), this.update());
    }
    var n = t.prototype;
    return (n.add = function (t, n) {
      switch (t) {
        case "rule":
          this.A.splice(n.position || 0, 0, n.value);
          break;
        case "transition":
        default:
          this.all.push(n);
      }
      this.update();
    }, n.resolve = function (t, n) {
      var r = this;
      void 0 === n && (n = {});
      var e = n.once ? this.once : this.page;
      e = e.filter(n.self ? function (t) {
        return t.name && "self" === t.name;
      } : function (t) {
        return !t.name || "self" !== t.name;
      });
      var i = new Map(), o = e.find(function (e) {
        var o = !0, u = {};
        return !(!n.self || "self" !== e.name) || (r.A.reverse().forEach(function (n) {
          o && (o = r.R(e, n, t, u), e.from && e.to && (o = r.R(e, n, t, u, "from") && r.R(e, n, t, u, "to")), e.from && !e.to && (o = r.R(e, n, t, u, "from")), !e.from && e.to && (o = r.R(e, n, t, u, "to")));
        }), i.set(e, u), o);
      }), u = i.get(o), f = [];
      if ((f.push(n.once ? "once" : "page"), n.self && f.push("self"), u)) {
        var s, c = [o];
        (Object.keys(u).length > 0 && c.push(u), (s = this.logger).info.apply(s, ["Transition found [" + f.join(",") + "]"].concat(c)));
      } else this.logger.info("No transition found [" + f.join(",") + "]");
      return o;
    }, n.update = function () {
      var t = this;
      (this.all = this.all.map(function (n) {
        return t.T(n);
      }).sort(function (t, n) {
        return t.priority - n.priority;
      }).reverse().map(function (t) {
        return (delete t.priority, t);
      }), this.page = this.all.filter(function (t) {
        return void 0 !== t.leave || void 0 !== t.enter;
      }), this.once = this.all.filter(function (t) {
        return void 0 !== t.once;
      }));
    }, n.R = function (t, n, r, e, i) {
      var o = !0, u = !1, f = t, s = n.name, c = s, a = s, h = s, v = i ? f[i] : f, l = "to" === i ? r.next : r.current;
      if (i ? v && v[s] : v[s]) {
        switch (n.type) {
          case "strings":
          default:
            var d = Array.isArray(v[c]) ? v[c] : [v[c]];
            (l[c] && -1 !== d.indexOf(l[c]) && (u = !0), -1 === d.indexOf(l[c]) && (o = !1));
            break;
          case "object":
            var m = Array.isArray(v[a]) ? v[a] : [v[a]];
            l[a] ? (l[a].name && -1 !== m.indexOf(l[a].name) && (u = !0), -1 === m.indexOf(l[a].name) && (o = !1)) : o = !1;
            break;
          case "function":
            v[h](r) ? u = !0 : o = !1;
        }
        u && (i ? (e[i] = e[i] || ({}), e[i][s] = f[i][s]) : e[s] = f[s]);
      }
      return o;
    }, n.O = function (t, n, r) {
      var e = 0;
      return ((t[n] || t.from && t.from[n] || t.to && t.to[n]) && (e += Math.pow(10, r), t.from && t.from[n] && (e += 1), t.to && t.to[n] && (e += 2)), e);
    }, n.T = function (t) {
      var n = this;
      t.priority = 0;
      var r = 0;
      return (this.A.forEach(function (e, i) {
        r += n.O(t, e.name, i + 1);
      }), t.priority = r, t);
    }, t);
  })(), ut = (function () {
    function t(t) {
      (void 0 === t && (t = []), this.logger = new l("@barba/core"), this.S = !1, this.store = new ot(t));
    }
    var r = t.prototype;
    return (r.get = function (t, n) {
      return this.store.resolve(t, n);
    }, r.doOnce = function (t) {
      var n = t.data, r = t.transition;
      try {
        var e = function () {
          i.S = !1;
        }, i = this, o = r || ({});
        i.S = !0;
        var u = s(function () {
          return Promise.resolve(i.j("beforeOnce", n, o)).then(function () {
            return Promise.resolve(i.once(n, o)).then(function () {
              return Promise.resolve(i.j("afterOnce", n, o)).then(function () {});
            });
          });
        }, function (t) {
          (i.S = !1, i.logger.debug("Transition error [before/after/once]"), i.logger.error(t));
        });
        return Promise.resolve(u && u.then ? u.then(e) : e());
      } catch (t) {
        return Promise.reject(t);
      }
    }, r.doPage = function (t) {
      var n = t.data, r = t.transition, e = t.page, i = t.wrapper;
      try {
        var o = function (t) {
          if (u) return t;
          f.S = !1;
        }, u = !1, f = this, c = r || ({}), a = !0 === c.sync || !1;
        f.S = !0;
        var h = s(function () {
          function t() {
            return Promise.resolve(f.j("before", n, c)).then(function () {
              var t = !1;
              function r(r) {
                return t ? r : Promise.resolve(f.remove(n)).then(function () {
                  return Promise.resolve(f.j("after", n, c)).then(function () {});
                });
              }
              var o = (function () {
                if (a) return s(function () {
                  return Promise.resolve(f.add(n, i)).then(function () {
                    return Promise.resolve(f.j("beforeLeave", n, c)).then(function () {
                      return Promise.resolve(f.j("beforeEnter", n, c)).then(function () {
                        return Promise.resolve(Promise.all([f.leave(n, c), f.enter(n, c)])).then(function () {
                          return Promise.resolve(f.j("afterLeave", n, c)).then(function () {
                            return Promise.resolve(f.j("afterEnter", n, c)).then(function () {});
                          });
                        });
                      });
                    });
                  });
                }, function (t) {
                  if (f.M(t)) throw new it(t, "Transition error [sync]");
                });
                var r = function (r) {
                  return t ? r : s(function () {
                    var t = (function () {
                      if (!1 !== o) return Promise.resolve(f.add(n, i)).then(function () {
                        return Promise.resolve(f.j("beforeEnter", n, c)).then(function () {
                          return Promise.resolve(f.enter(n, c, o)).then(function () {
                            return Promise.resolve(f.j("afterEnter", n, c)).then(function () {});
                          });
                        });
                      });
                    })();
                    if (t && t.then) return t.then(function () {});
                  }, function (t) {
                    if (f.M(t)) throw new it(t, "Transition error [before/after/enter]");
                  });
                }, o = !1, u = s(function () {
                  return Promise.resolve(f.j("beforeLeave", n, c)).then(function () {
                    return Promise.resolve(Promise.all([f.leave(n, c), L(e, n)]).then(function (t) {
                      return t[0];
                    })).then(function (t) {
                      return (o = t, Promise.resolve(f.j("afterLeave", n, c)).then(function () {}));
                    });
                  });
                }, function (t) {
                  if (f.M(t)) throw new it(t, "Transition error [before/after/leave]");
                });
                return u && u.then ? u.then(r) : r(u);
              })();
              return o && o.then ? o.then(r) : r(o);
            });
          }
          var r = (function () {
            if (a) return Promise.resolve(L(e, n)).then(function () {});
          })();
          return r && r.then ? r.then(t) : t();
        }, function (t) {
          if ((f.S = !1, t.name && "BarbaError" === t.name)) throw (f.logger.debug(t.label), f.logger.error(t.error), t);
          throw (f.logger.debug("Transition error [page]"), f.logger.error(t), t);
        });
        return Promise.resolve(h && h.then ? h.then(o) : o(h));
      } catch (t) {
        return Promise.reject(t);
      }
    }, r.once = function (t, n) {
      try {
        return Promise.resolve(X.do("once", t, n)).then(function () {
          return n.once ? N(n.once, n)(t) : Promise.resolve();
        });
      } catch (t) {
        return Promise.reject(t);
      }
    }, r.leave = function (t, n) {
      try {
        return Promise.resolve(X.do("leave", t, n)).then(function () {
          return n.leave ? N(n.leave, n)(t) : Promise.resolve();
        });
      } catch (t) {
        return Promise.reject(t);
      }
    }, r.enter = function (t, n, r) {
      try {
        return Promise.resolve(X.do("enter", t, n)).then(function () {
          return n.enter ? N(n.enter, n)(t, r) : Promise.resolve();
        });
      } catch (t) {
        return Promise.reject(t);
      }
    }, r.add = function (t, n) {
      try {
        return (j.addContainer(t.next.container, n), X.do("nextAdded", t), Promise.resolve());
      } catch (t) {
        return Promise.reject(t);
      }
    }, r.remove = function (t) {
      try {
        return (j.removeContainer(t.current.container), X.do("currentRemoved", t), Promise.resolve());
      } catch (t) {
        return Promise.reject(t);
      }
    }, r.M = function (t) {
      return t.message ? !(/Timeout error|Fetch error/).test(t.message) : !t.status;
    }, r.j = function (t, n, r) {
      try {
        return Promise.resolve(X.do(t, n, r)).then(function () {
          return r[t] ? N(r[t], r)(n) : Promise.resolve();
        });
      } catch (t) {
        return Promise.reject(t);
      }
    }, n(t, [{
      key: "isRunning",
      get: function () {
        return this.S;
      },
      set: function (t) {
        this.S = t;
      }
    }, {
      key: "hasOnce",
      get: function () {
        return this.store.once.length > 0;
      }
    }, {
      key: "hasSelf",
      get: function () {
        return this.store.all.some(function (t) {
          return "self" === t.name;
        });
      }
    }, {
      key: "shouldWait",
      get: function () {
        return this.store.all.some(function (t) {
          return t.to && !t.to.route || t.sync;
        });
      }
    }]), t);
  })(), ft = (function () {
    function t(t) {
      var n = this;
      (this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = new Map(), 0 !== t.length && (t.forEach(function (t) {
        n.byNamespace.set(t.namespace, t);
      }), this.names.forEach(function (t) {
        X[t](n.L(t));
      })));
    }
    return (t.prototype.L = function (t) {
      var n = this;
      return function (r) {
        var e = t.match(/enter/i) ? r.next : r.current, i = n.byNamespace.get(e.namespace);
        return i && i[t] ? N(i[t], i)(r) : Promise.resolve();
      };
    }, t);
  })();
  (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (t) {
    var n = this;
    do {
      if (n.matches(t)) return n;
      n = n.parentElement || n.parentNode;
    } while (null !== n && 1 === n.nodeType);
    return null;
  }));
  var st = {
    container: null,
    html: "",
    namespace: "",
    url: {
      hash: "",
      href: "",
      path: "",
      port: null,
      query: {}
    }
  };
  return new ((function () {
    function t() {
      (this.version = a, this.schemaPage = st, this.Logger = l, this.logger = new l("@barba/core"), this.plugins = [], this.hooks = X, this.dom = j, this.helpers = _, this.history = M, this.request = I, this.url = H);
    }
    var e = t.prototype;
    return (e.use = function (t, n) {
      var r = this.plugins;
      r.indexOf(t) > -1 ? this.logger.warn("Plugin [" + t.name + "] already installed.") : "function" == typeof t.install ? (t.install(this, n), r.push(t)) : this.logger.warn("Plugin [" + t.name + '] has no "install" method.');
    }, e.init = function (t) {
      var n = void 0 === t ? {} : t, e = n.transitions, i = void 0 === e ? [] : e, o = n.views, u = void 0 === o ? [] : o, f = n.schema, s = void 0 === f ? S : f, c = n.requestError, a = n.timeout, h = void 0 === a ? 2e3 : a, v = n.cacheIgnore, d = void 0 !== v && v, m = n.prefetchIgnore, p = void 0 !== m && m, w = n.preventRunning, b = void 0 !== w && w, y = n.prevent, P = void 0 === y ? null : y, g = n.debug, E = n.logLevel;
      if ((l.setLevel(!0 === (void 0 !== g && g) ? "debug" : void 0 === E ? "off" : E), this.logger.info(this.version), Object.keys(s).forEach(function (t) {
        S[t] && (S[t] = s[t]);
      }), this.$ = c, this.timeout = h, this.cacheIgnore = d, this.prefetchIgnore = p, this.preventRunning = b, this._ = this.dom.getWrapper(), !this._)) throw new Error("[@barba/core] No Barba wrapper found");
      (this._.setAttribute("aria-live", "polite"), this.q());
      var x = this.data.current;
      if (!x.container) throw new Error("[@barba/core] No Barba container found");
      if ((this.cache = new G(d), this.prevent = new et(p), this.transitions = new ut(i), this.views = new ft(u), null !== P)) {
        if ("function" != typeof P) throw new Error("[@barba/core] Prevent should be a function");
        this.prevent.add("preventCustom", P);
      }
      (this.history.init(x.url.href, x.namespace), this.B = this.B.bind(this), this.U = this.U.bind(this), this.D = this.D.bind(this), this.F(), this.plugins.forEach(function (t) {
        return t.init();
      }));
      var k = this.data;
      (k.trigger = "barba", k.next = k.current, k.current = r({}, this.schemaPage), this.hooks.do("ready", k), this.once(k), this.q());
    }, e.destroy = function () {
      (this.q(), this.H(), this.history.clear(), this.hooks.clear(), this.plugins = []);
    }, e.force = function (t) {
      window.location.assign(t);
    }, e.go = function (t, n, r) {
      var e;
      if ((void 0 === n && (n = "barba"), this.transitions.isRunning)) this.force(t); else if (!(e = "popstate" === n ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t) : this.prevent.run("sameUrl", null, null, t)) || this.transitions.hasSelf) return (n = this.history.change(t, n, r), r && (r.stopPropagation(), r.preventDefault()), this.page(t, n, e));
    }, e.once = function (t) {
      try {
        var n = this;
        return Promise.resolve(n.hooks.do("beforeEnter", t)).then(function () {
          function r() {
            return Promise.resolve(n.hooks.do("afterEnter", t)).then(function () {});
          }
          var e = (function () {
            if (n.transitions.hasOnce) {
              var r = n.transitions.get(t, {
                once: !0
              });
              return Promise.resolve(n.transitions.doOnce({
                transition: r,
                data: t
              })).then(function () {});
            }
          })();
          return e && e.then ? e.then(r) : r();
        });
      } catch (t) {
        return Promise.reject(t);
      }
    }, e.page = function (t, n, e) {
      try {
        var i = function () {
          var t = o.data;
          return Promise.resolve(o.hooks.do("page", t)).then(function () {
            var n = s(function () {
              var n = o.transitions.get(t, {
                once: !1,
                self: e
              });
              return Promise.resolve(o.transitions.doPage({
                data: t,
                page: u,
                transition: n,
                wrapper: o._
              })).then(function () {
                o.q();
              });
            }, function () {
              0 === l.getLevel() && o.force(t.current.url.href);
            });
            if (n && n.then) return n.then(function () {});
          });
        }, o = this;
        (o.data.next.url = r({
          href: t
        }, o.url.parse(t)), o.data.trigger = n);
        var u = o.cache.has(t) ? o.cache.update(t, {
          action: "click"
        }).request : o.cache.set(t, o.request(t, o.timeout, o.onRequestError.bind(o, n)), "click").request, f = (function () {
          if (o.transitions.shouldWait) return Promise.resolve(L(u, o.data)).then(function () {});
        })();
        return Promise.resolve(f && f.then ? f.then(i) : i());
      } catch (t) {
        return Promise.reject(t);
      }
    }, e.onRequestError = function (t) {
      this.transitions.isRunning = !1;
      for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++) r[e - 1] = arguments[e];
      var i = r[0], o = r[1], u = this.cache.getAction(i);
      return (this.cache.delete(i), !(this.$ && !1 === this.$(t, u, i, o) || ("click" === u && this.force(i), 1)));
    }, e.prefetch = function (t) {
      var n = this;
      this.cache.has(t) || this.cache.set(t, this.request(t, this.timeout, this.onRequestError.bind(this, "barba")).catch(function (t) {
        n.logger.error(t);
      }), "prefetch");
    }, e.F = function () {
      (!0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.B), document.addEventListener("touchstart", this.B)), document.addEventListener("click", this.U), window.addEventListener("popstate", this.D));
    }, e.H = function () {
      (!0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.B), document.removeEventListener("touchstart", this.B)), document.removeEventListener("click", this.U), window.removeEventListener("popstate", this.D));
    }, e.B = function (t) {
      var n = this, r = this.I(t);
      if (r) {
        var e = this.dom.getHref(r);
        this.prevent.checkHref(e) || this.cache.has(e) || this.cache.set(e, this.request(e, this.timeout, this.onRequestError.bind(this, r)).catch(function (t) {
          n.logger.error(t);
        }), "enter");
      }
    }, e.U = function (t) {
      var n = this.I(t);
      if (n) return this.transitions.isRunning && this.preventRunning ? (t.preventDefault(), void t.stopPropagation()) : void this.go(this.dom.getHref(n), n, t);
    }, e.D = function (t) {
      this.go(this.url.getHref(), "popstate", t);
    }, e.I = function (t) {
      for (var n = t.target; n && !this.dom.getHref(n); ) n = n.parentNode;
      if (n && !this.prevent.checkLink(n, t, this.dom.getHref(n))) return n;
    }, e.q = function () {
      var t = this.url.getHref(), n = {
        container: this.dom.getContainer(),
        html: this.dom.getHtml(),
        namespace: this.dom.getNamespace(),
        url: r({
          href: t
        }, this.url.parse(t))
      };
      (this.C = {
        current: n,
        next: r({}, this.schemaPage),
        trigger: void 0
      }, this.hooks.do("reset", this.data));
    }, n(t, [{
      key: "data",
      get: function () {
        return this.C;
      }
    }, {
      key: "wrapper",
      get: function () {
        return this._;
      }
    }]), t);
  })())();
});

},{}],"v9R4A":[function(require,module,exports) {
var define;
/*!
* imagesLoaded v4.1.4
* JavaScript is all like "You images are done yet or what?"
* MIT License
*/
(function (window, factory) {
  "use strict";
  // universal module definition
  /*global define: false, module: false, require: false*/
  if (typeof define == 'function' && define.amd) {
    // AMD
    define(['ev-emitter/ev-emitter'], function (EvEmitter) {
      return factory(window, EvEmitter);
    });
  } else if (typeof module == 'object' && module.exports) {
    // CommonJS
    module.exports = factory(window, require('ev-emitter'));
  } else {
    // browser global
    window.imagesLoaded = factory(window, window.EvEmitter);
  }
})(typeof window !== 'undefined' ? window : this, // --------------------------  factory -------------------------- //
function factory(window, EvEmitter) {
  "use strict";
  var $ = window.jQuery;
  var console = window.console;
  // -------------------------- helpers -------------------------- //
  // extend objects
  function extend(a, b) {
    for (var prop in b) {
      a[prop] = b[prop];
    }
    return a;
  }
  var arraySlice = Array.prototype.slice;
  // turn element or nodeList into an array
  function makeArray(obj) {
    if (Array.isArray(obj)) {
      // use object if already an array
      return obj;
    }
    var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
    if (isArrayLike) {
      // convert nodeList to array
      return arraySlice.call(obj);
    }
    // array of single index
    return [obj];
  }
  // -------------------------- imagesLoaded -------------------------- //
  /**
  * @param {Array, Element, NodeList, String} elem
  * @param {Object or Function} options - if function, use as callback
  * @param {Function} onAlways - callback function
  */
  function ImagesLoaded(elem, options, onAlways) {
    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
    if (!(this instanceof ImagesLoaded)) {
      return new ImagesLoaded(elem, options, onAlways);
    }
    // use elem as selector string
    var queryElem = elem;
    if (typeof elem == 'string') {
      queryElem = document.querySelectorAll(elem);
    }
    // bail if bad element
    if (!queryElem) {
      console.error('Bad element for imagesLoaded ' + (queryElem || elem));
      return;
    }
    this.elements = makeArray(queryElem);
    this.options = extend({}, this.options);
    // shift arguments if no options set
    if (typeof options == 'function') {
      onAlways = options;
    } else {
      extend(this.options, options);
    }
    if (onAlways) {
      this.on('always', onAlways);
    }
    this.getImages();
    if ($) {
      // add jQuery Deferred object
      this.jqDeferred = new $.Deferred();
    }
    // HACK check async to allow time to bind listeners
    setTimeout(this.check.bind(this));
  }
  ImagesLoaded.prototype = Object.create(EvEmitter.prototype);
  ImagesLoaded.prototype.options = {};
  ImagesLoaded.prototype.getImages = function () {
    this.images = [];
    // filter & find items if we have an item selector
    this.elements.forEach(this.addElementImages, this);
  };
  /**
  * @param {Node} element
  */
  ImagesLoaded.prototype.addElementImages = function (elem) {
    // filter siblings
    if (elem.nodeName == 'IMG') {
      this.addImage(elem);
    }
    // get background image on element
    if (this.options.background === true) {
      this.addElementBackgroundImages(elem);
    }
    // find children
    // no non-element nodes, #143
    var nodeType = elem.nodeType;
    if (!nodeType || !elementNodeTypes[nodeType]) {
      return;
    }
    var childImgs = elem.querySelectorAll('img');
    // concat childElems to filterFound array
    for (var i = 0; i < childImgs.length; i++) {
      var img = childImgs[i];
      this.addImage(img);
    }
    // get child background images
    if (typeof this.options.background == 'string') {
      var children = elem.querySelectorAll(this.options.background);
      for (i = 0; i < children.length; i++) {
        var child = children[i];
        this.addElementBackgroundImages(child);
      }
    }
  };
  var elementNodeTypes = {
    1: true,
    9: true,
    11: true
  };
  ImagesLoaded.prototype.addElementBackgroundImages = function (elem) {
    var style = getComputedStyle(elem);
    if (!style) {
      // Firefox returns null if in a hidden iframe https://bugzil.la/548397
      return;
    }
    // get url inside url("...")
    var reURL = /url\((['"])?(.*?)\1\)/gi;
    var matches = reURL.exec(style.backgroundImage);
    while (matches !== null) {
      var url = matches && matches[2];
      if (url) {
        this.addBackground(url, elem);
      }
      matches = reURL.exec(style.backgroundImage);
    }
  };
  /**
  * @param {Image} img
  */
  ImagesLoaded.prototype.addImage = function (img) {
    var loadingImage = new LoadingImage(img);
    this.images.push(loadingImage);
  };
  ImagesLoaded.prototype.addBackground = function (url, elem) {
    var background = new Background(url, elem);
    this.images.push(background);
  };
  ImagesLoaded.prototype.check = function () {
    var _this = this;
    this.progressedCount = 0;
    this.hasAnyBroken = false;
    // complete if no images
    if (!this.images.length) {
      this.complete();
      return;
    }
    function onProgress(image, elem, message) {
      // HACK - Chrome triggers event before object properties have changed. #83
      setTimeout(function () {
        _this.progress(image, elem, message);
      });
    }
    this.images.forEach(function (loadingImage) {
      loadingImage.once('progress', onProgress);
      loadingImage.check();
    });
  };
  ImagesLoaded.prototype.progress = function (image, elem, message) {
    this.progressedCount++;
    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
    // progress event
    this.emitEvent('progress', [this, image, elem]);
    if (this.jqDeferred && this.jqDeferred.notify) {
      this.jqDeferred.notify(this, image);
    }
    // check if completed
    if (this.progressedCount == this.images.length) {
      this.complete();
    }
    if (this.options.debug && console) {
      console.log('progress: ' + message, image, elem);
    }
  };
  ImagesLoaded.prototype.complete = function () {
    var eventName = this.hasAnyBroken ? 'fail' : 'done';
    this.isComplete = true;
    this.emitEvent(eventName, [this]);
    this.emitEvent('always', [this]);
    if (this.jqDeferred) {
      var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
      this.jqDeferred[jqMethod](this);
    }
  };
  // --------------------------  -------------------------- //
  function LoadingImage(img) {
    this.img = img;
  }
  LoadingImage.prototype = Object.create(EvEmitter.prototype);
  LoadingImage.prototype.check = function () {
    // If complete is true and browser supports natural sizes,
    // try to check for image status manually.
    var isComplete = this.getIsImageComplete();
    if (isComplete) {
      // report based on naturalWidth
      this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
      return;
    }
    // If none of the checks above matched, simulate loading on detached element.
    this.proxyImage = new Image();
    this.proxyImage.addEventListener('load', this);
    this.proxyImage.addEventListener('error', this);
    // bind to image as well for Firefox. #191
    this.img.addEventListener('load', this);
    this.img.addEventListener('error', this);
    this.proxyImage.src = this.img.src;
  };
  LoadingImage.prototype.getIsImageComplete = function () {
    // check for non-zero, non-undefined naturalWidth
    // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
    return this.img.complete && this.img.naturalWidth;
  };
  LoadingImage.prototype.confirm = function (isLoaded, message) {
    this.isLoaded = isLoaded;
    this.emitEvent('progress', [this, this.img, message]);
  };
  // ----- events ----- //
  // trigger specified handler for event type
  LoadingImage.prototype.handleEvent = function (event) {
    var method = 'on' + event.type;
    if (this[method]) {
      this[method](event);
    }
  };
  LoadingImage.prototype.onload = function () {
    this.confirm(true, 'onload');
    this.unbindEvents();
  };
  LoadingImage.prototype.onerror = function () {
    this.confirm(false, 'onerror');
    this.unbindEvents();
  };
  LoadingImage.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener('load', this);
    this.proxyImage.removeEventListener('error', this);
    this.img.removeEventListener('load', this);
    this.img.removeEventListener('error', this);
  };
  // -------------------------- Background -------------------------- //
  function Background(url, element) {
    this.url = url;
    this.element = element;
    this.img = new Image();
  }
  // inherit LoadingImage prototype
  Background.prototype = Object.create(LoadingImage.prototype);
  Background.prototype.check = function () {
    this.img.addEventListener('load', this);
    this.img.addEventListener('error', this);
    this.img.src = this.url;
    // check if image is already complete
    var isComplete = this.getIsImageComplete();
    if (isComplete) {
      this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
      this.unbindEvents();
    }
  };
  Background.prototype.unbindEvents = function () {
    this.img.removeEventListener('load', this);
    this.img.removeEventListener('error', this);
  };
  Background.prototype.confirm = function (isLoaded, message) {
    this.isLoaded = isLoaded;
    this.emitEvent('progress', [this, this.element, message]);
  };
  // -------------------------- jQuery -------------------------- //
  ImagesLoaded.makeJQueryPlugin = function (jQuery) {
    jQuery = jQuery || window.jQuery;
    if (!jQuery) {
      return;
    }
    // set local variable
    $ = jQuery;
    // $().imagesLoaded()
    $.fn.imagesLoaded = function (options, callback) {
      var instance = new ImagesLoaded(this, options, callback);
      return instance.jqDeferred.promise($(this));
    };
  };
  // try making plugin
  ImagesLoaded.makeJQueryPlugin();
  // --------------------------  -------------------------- //
  return ImagesLoaded;
});

},{"ev-emitter":"1nZTY"}],"1nZTY":[function(require,module,exports) {
var define;
/**
* EvEmitter v1.1.0
* Lil' event emitter
* MIT License
*/
/*jshint unused: true, undef: true, strict: true*/
(function (global, factory) {
  // universal module definition
  /*jshint strict: false*/
  /*globals define, module, window*/
  if (typeof define == 'function' && define.amd) {
    // AMD - RequireJS
    define(factory);
  } else if (typeof module == 'object' && module.exports) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }
})(typeof window != 'undefined' ? window : this, function () {
  "use strict";
  function EvEmitter() {}
  var proto = EvEmitter.prototype;
  proto.on = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    // set events hash
    var events = this._events = this._events || ({});
    // set listeners array
    var listeners = events[eventName] = events[eventName] || [];
    // only add once
    if (listeners.indexOf(listener) == -1) {
      listeners.push(listener);
    }
    return this;
  };
  proto.once = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    // add event
    this.on(eventName, listener);
    // set once flag
    // set onceEvents hash
    var onceEvents = this._onceEvents = this._onceEvents || ({});
    // set onceListeners object
    var onceListeners = onceEvents[eventName] = onceEvents[eventName] || ({});
    // set flag
    onceListeners[listener] = true;
    return this;
  };
  proto.off = function (eventName, listener) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    var index = listeners.indexOf(listener);
    if (index != -1) {
      listeners.splice(index, 1);
    }
    return this;
  };
  proto.emitEvent = function (eventName, args) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    // copy over to avoid interference if .off() in listener
    listeners = listeners.slice(0);
    args = args || [];
    // once stuff
    var onceListeners = this._onceEvents && this._onceEvents[eventName];
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      var isOnce = onceListeners && onceListeners[listener];
      if (isOnce) {
        // remove listener
        // remove before trigger to prevent recursion
        this.off(eventName, listener);
        // unset once flag
        delete onceListeners[listener];
      }
      // trigger listener
      listener.apply(this, args);
    }
    return this;
  };
  proto.allOff = function () {
    delete this._events;
    delete this._onceEvents;
  };
  return EvEmitter;
});

},{}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"613xV":[function(require,module,exports) {
var define;
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Scrollbar = e() : t.Scrollbar = e();
})(this, function () {
  return (function (t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var o = e[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return (t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports);
    }
    return (n.m = t, n.c = e, n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (t) {
      ("undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      }));
    }, n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if ((n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)) for (var o in t) n.d(r, o, (function (e) {
        return t[e];
      }).bind(null, o));
      return r;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return (n.d(e, "a", e), e);
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 67));
  })([function (t, e, n) {
    (function (e) {
      var n = function (t) {
        return t && t.Math == Math && t;
      };
      t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || Function("return this")();
    }).call(this, n(43));
  }, function (t, e, n) {
    var r = n(0), o = n(51), i = n(3), u = n(29), c = n(56), a = n(76), s = o("wks"), f = r.Symbol, l = a ? f : f && f.withoutSetter || u;
    t.exports = function (t) {
      return (i(s, t) || (c && i(f, t) ? s[t] = f[t] : s[t] = l("Symbol." + t)), s[t]);
    };
  }, function (t, e) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  }, function (t, e) {
    var n = ({}).hasOwnProperty;
    t.exports = function (t, e) {
      return n.call(t, e);
    };
  }, function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  }, function (t, e, n) {
    var r = n(6), o = n(46), i = n(7), u = n(25), c = Object.defineProperty;
    e.f = r ? c : function (t, e, n) {
      if ((i(t), e = u(e, !0), i(n), o)) try {
        return c(t, e, n);
      } catch (t) {}
      if (("get" in n) || ("set" in n)) throw TypeError("Accessors not supported");
      return (("value" in n) && (t[e] = n.value), t);
    };
  }, function (t, e, n) {
    var r = n(4);
    t.exports = !r(function () {
      return 7 != Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        }
      })[1];
    });
  }, function (t, e, n) {
    var r = n(2);
    t.exports = function (t) {
      if (!r(t)) throw TypeError(String(t) + " is not an object");
      return t;
    };
  }, function (t, e, n) {
    var r = n(6), o = n(5), i = n(14);
    t.exports = r ? function (t, e, n) {
      return o.f(t, e, i(1, n));
    } : function (t, e, n) {
      return (t[e] = n, t);
    };
  }, function (t, e, n) {
    var r, o, i, u = n(50), c = n(0), a = n(2), s = n(8), f = n(3), l = n(27), p = n(16), h = c.WeakMap;
    if (u) {
      var d = new h(), v = d.get, y = d.has, m = d.set;
      (r = function (t, e) {
        return (m.call(d, t, e), e);
      }, o = function (t) {
        return v.call(d, t) || ({});
      }, i = function (t) {
        return y.call(d, t);
      });
    } else {
      var g = l("state");
      (p[g] = !0, r = function (t, e) {
        return (s(t, g, e), e);
      }, o = function (t) {
        return f(t, g) ? t[g] : {};
      }, i = function (t) {
        return f(t, g);
      });
    }
    t.exports = {
      set: r,
      get: o,
      has: i,
      enforce: function (t) {
        return i(t) ? o(t) : r(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var n;
          if (!a(e) || (n = o(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
          return n;
        };
      }
    };
  }, function (t, e, n) {
    var r = n(0);
    t.exports = r;
  }, function (t, e, n) {
    var r = n(0), o = n(8), i = n(3), u = n(26), c = n(48), a = n(9), s = a.get, f = a.enforce, l = String(String).split("String");
    (t.exports = function (t, e, n, c) {
      var a = !!c && !!c.unsafe, s = !!c && !!c.enumerable, p = !!c && !!c.noTargetGet;
      ("function" == typeof n && ("string" != typeof e || i(n, "name") || o(n, "name", e), f(n).source = l.join("string" == typeof e ? e : "")), t !== r ? (a ? !p && t[e] && (s = !0) : delete t[e], s ? t[e] = n : o(t, e, n)) : s ? t[e] = n : u(e, n));
    })(Function.prototype, "toString", function () {
      return "function" == typeof this && s(this).source || c(this);
    });
  }, function (t, e) {
    t.exports = {};
  }, function (t, e, n) {
    var r = n(0), o = n(44).f, i = n(8), u = n(11), c = n(26), a = n(70), s = n(54);
    t.exports = function (t, e) {
      var n, f, l, p, h, d = t.target, v = t.global, y = t.stat;
      if (n = v ? r : y ? r[d] || c(d, {}) : (r[d] || ({})).prototype) for (f in e) {
        if ((p = e[f], l = t.noTargetGet ? (h = o(n, f)) && h.value : n[f], !s(v ? f : d + (y ? "." : "#") + f, t.forced) && void 0 !== l)) {
          if (typeof p == typeof l) continue;
          a(p, l);
        }
        ((t.sham || l && l.sham) && i(p, "sham", !0), u(n, f, p, t));
      }
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      };
    };
  }, function (t, e, n) {
    var r = n(22), o = n(24);
    t.exports = function (t) {
      return r(o(t));
    };
  }, function (t, e) {
    t.exports = {};
  }, function (t, e, n) {
    var r = n(31), o = Math.min;
    t.exports = function (t) {
      return t > 0 ? o(r(t), 9007199254740991) : 0;
    };
  }, function (t, e, n) {
    var r = n(16), o = n(2), i = n(3), u = n(5).f, c = n(29), a = n(75), s = c("meta"), f = 0, l = Object.isExtensible || (function () {
      return !0;
    }), p = function (t) {
      u(t, s, {
        value: {
          objectID: "O" + ++f,
          weakData: {}
        }
      });
    }, h = t.exports = {
      REQUIRED: !1,
      fastKey: function (t, e) {
        if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
        if (!i(t, s)) {
          if (!l(t)) return "F";
          if (!e) return "E";
          p(t);
        }
        return t[s].objectID;
      },
      getWeakData: function (t, e) {
        if (!i(t, s)) {
          if (!l(t)) return !0;
          if (!e) return !1;
          p(t);
        }
        return t[s].weakData;
      },
      onFreeze: function (t) {
        return (a && h.REQUIRED && l(t) && !i(t, s) && p(t), t);
      }
    };
    r[s] = !0;
  }, function (t, e, n) {
    var r = n(77);
    t.exports = function (t, e, n) {
      if ((r(t), void 0 === e)) return t;
      switch (n) {
        case 0:
          return function () {
            return t.call(e);
          };
        case 1:
          return function (n) {
            return t.call(e, n);
          };
        case 2:
          return function (n, r) {
            return t.call(e, n, r);
          };
        case 3:
          return function (n, r, o) {
            return t.call(e, n, r, o);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    };
  }, function (t, e, n) {
    var r = n(24);
    t.exports = function (t) {
      return Object(r(t));
    };
  }, function (t, e, n) {
    "use strict";
    var r = n(13), o = n(0), i = n(54), u = n(11), c = n(18), a = n(33), s = n(35), f = n(2), l = n(4), p = n(60), h = n(36), d = n(78);
    t.exports = function (t, e, n) {
      var v = -1 !== t.indexOf("Map"), y = -1 !== t.indexOf("Weak"), m = v ? "set" : "add", g = o[t], b = g && g.prototype, x = g, w = {}, S = function (t) {
        var e = b[t];
        u(b, t, "add" == t ? function (t) {
          return (e.call(this, 0 === t ? 0 : t), this);
        } : "delete" == t ? function (t) {
          return !(y && !f(t)) && e.call(this, 0 === t ? 0 : t);
        } : "get" == t ? function (t) {
          return y && !f(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
        } : "has" == t ? function (t) {
          return !(y && !f(t)) && e.call(this, 0 === t ? 0 : t);
        } : function (t, n) {
          return (e.call(this, 0 === t ? 0 : t, n), this);
        });
      };
      if (i(t, "function" != typeof g || !(y || b.forEach && !l(function () {
        new g().entries().next();
      })))) (x = n.getConstructor(e, t, v, m), c.REQUIRED = !0); else if (i(t, !0)) {
        var O = new x(), _ = O[m](y ? {} : -0, 1) != O, E = l(function () {
          O.has(1);
        }), T = p(function (t) {
          new g(t);
        }), A = !y && l(function () {
          for (var t = new g(), e = 5; e--; ) t[m](e, e);
          return !t.has(-0);
        });
        (T || ((x = e(function (e, n) {
          s(e, x, t);
          var r = d(new g(), e, x);
          return (null != n && a(n, r[m], r, v), r);
        })).prototype = b, b.constructor = x), (E || A) && (S("delete"), S("has"), v && S("get")), (A || _) && S(m), y && b.clear && delete b.clear);
      }
      return (w[t] = x, r({
        global: !0,
        forced: x != g
      }, w), h(x, t), y || n.setStrong(x, t, v), x);
    };
  }, function (t, e, n) {
    var r = n(4), o = n(23), i = ("").split;
    t.exports = r(function () {
      return !Object("z").propertyIsEnumerable(0);
    }) ? function (t) {
      return "String" == o(t) ? i.call(t, "") : Object(t);
    } : Object;
  }, function (t, e) {
    var n = ({}).toString;
    t.exports = function (t) {
      return n.call(t).slice(8, -1);
    };
  }, function (t, e) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    };
  }, function (t, e, n) {
    var r = n(2);
    t.exports = function (t, e) {
      if (!r(t)) return t;
      var n, o;
      if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
      if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;
      if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
      throw TypeError("Can't convert object to primitive value");
    };
  }, function (t, e, n) {
    var r = n(0), o = n(8);
    t.exports = function (t, e) {
      try {
        o(r, t, e);
      } catch (n) {
        r[t] = e;
      }
      return e;
    };
  }, function (t, e, n) {
    var r = n(51), o = n(29), i = r("keys");
    t.exports = function (t) {
      return i[t] || (i[t] = o(t));
    };
  }, function (t, e) {
    t.exports = !1;
  }, function (t, e) {
    var n = 0, r = Math.random();
    t.exports = function (t) {
      return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36);
    };
  }, function (t, e, n) {
    var r = n(10), o = n(0), i = function (t) {
      return "function" == typeof t ? t : void 0;
    };
    t.exports = function (t, e) {
      return arguments.length < 2 ? i(r[t]) || i(o[t]) : r[t] && r[t][e] || o[t] && o[t][e];
    };
  }, function (t, e) {
    var n = Math.ceil, r = Math.floor;
    t.exports = function (t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
    };
  }, function (t, e) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  }, function (t, e, n) {
    var r = n(7), o = n(55), i = n(17), u = n(19), c = n(57), a = n(59), s = function (t, e) {
      (this.stopped = t, this.result = e);
    };
    (t.exports = function (t, e, n, f, l) {
      var p, h, d, v, y, m, g, b = u(e, n, f ? 2 : 1);
      if (l) p = t; else {
        if ("function" != typeof (h = c(t))) throw TypeError("Target is not iterable");
        if (o(h)) {
          for ((d = 0, v = i(t.length)); v > d; d++) if ((y = f ? b(r(g = t[d])[0], g[1]) : b(t[d])) && y instanceof s) return y;
          return new s(!1);
        }
        p = h.call(t);
      }
      for (m = p.next; !(g = m.call(p)).done; ) if ("object" == typeof (y = a(p, b, g.value, f)) && y && y instanceof s) return y;
      return new s(!1);
    }).stop = function (t) {
      return new s(!0, t);
    };
  }, function (t, e, n) {
    var r = {};
    (r[n(1)("toStringTag")] = "z", t.exports = "[object z]" === String(r));
  }, function (t, e) {
    t.exports = function (t, e, n) {
      if (!(t instanceof e)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
      return t;
    };
  }, function (t, e, n) {
    var r = n(5).f, o = n(3), i = n(1)("toStringTag");
    t.exports = function (t, e, n) {
      t && !o(t = n ? t : t.prototype, i) && r(t, i, {
        configurable: !0,
        value: e
      });
    };
  }, function (t, e, n) {
    var r, o = n(7), i = n(80), u = n(32), c = n(16), a = n(81), s = n(47), f = n(27)("IE_PROTO"), l = function () {}, p = function (t) {
      return "<script>" + t + "<\/script>";
    }, h = function () {
      try {
        r = document.domain && new ActiveXObject("htmlfile");
      } catch (t) {}
      h = r ? (function (t) {
        (t.write(p("")), t.close());
        var e = t.parentWindow.Object;
        return (t = null, e);
      })(r) : (function () {
        var t, e = s("iframe");
        return (e.style.display = "none", a.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(p("document.F=Object")), t.close(), t.F);
      })();
      for (var t = u.length; t--; ) delete h.prototype[u[t]];
      return h();
    };
    (c[f] = !0, t.exports = Object.create || (function (t, e) {
      var n;
      return (null !== t ? (l.prototype = o(t), n = new l(), l.prototype = null, n[f] = t) : n = h(), void 0 === e ? n : i(n, e));
    }));
  }, function (t, e, n) {
    var r = n(11);
    t.exports = function (t, e, n) {
      for (var o in e) r(t, o, e[o], n);
      return t;
    };
  }, function (t, e, n) {
    "use strict";
    var r = n(13), o = n(82), i = n(65), u = n(61), c = n(36), a = n(8), s = n(11), f = n(1), l = n(28), p = n(12), h = n(64), d = h.IteratorPrototype, v = h.BUGGY_SAFARI_ITERATORS, y = f("iterator"), m = function () {
      return this;
    };
    t.exports = function (t, e, n, f, h, g, b) {
      o(n, e, f);
      var x, w, S, O = function (t) {
        if (t === h && j) return j;
        if (!v && (t in T)) return T[t];
        switch (t) {
          case "keys":
          case "values":
          case "entries":
            return function () {
              return new n(this, t);
            };
        }
        return function () {
          return new n(this);
        };
      }, _ = e + " Iterator", E = !1, T = t.prototype, A = T[y] || T["@@iterator"] || h && T[h], j = !v && A || O(h), P = "Array" == e && T.entries || A;
      if ((P && (x = i(P.call(new t())), d !== Object.prototype && x.next && (l || i(x) === d || (u ? u(x, d) : "function" != typeof x[y] && a(x, y, m)), c(x, _, !0, !0), l && (p[_] = m))), "values" == h && A && "values" !== A.name && (E = !0, j = function () {
        return A.call(this);
      }), l && !b || T[y] === j || a(T, y, j), p[e] = j, h)) if ((w = {
        values: O("values"),
        keys: g ? j : O("keys"),
        entries: O("entries")
      }, b)) for (S in w) !v && !E && (S in T) || s(T, S, w[S]); else r({
        target: e,
        proto: !0,
        forced: v || E
      }, w);
      return w;
    };
  }, function (t, e, n) {
    var r = n(34), o = n(11), i = n(85);
    r || o(Object.prototype, "toString", i, {
      unsafe: !0
    });
  }, function (t, e, n) {
    "use strict";
    var r = n(86).charAt, o = n(9), i = n(39), u = o.set, c = o.getterFor("String Iterator");
    i(String, "String", function (t) {
      u(this, {
        type: "String Iterator",
        string: String(t),
        index: 0
      });
    }, function () {
      var t, e = c(this), n = e.string, o = e.index;
      return o >= n.length ? {
        value: void 0,
        done: !0
      } : (t = r(n, o), e.index += t.length, {
        value: t,
        done: !1
      });
    });
  }, function (t, e, n) {
    var r = n(0), o = n(87), i = n(88), u = n(8), c = n(1), a = c("iterator"), s = c("toStringTag"), f = i.values;
    for (var l in o) {
      var p = r[l], h = p && p.prototype;
      if (h) {
        if (h[a] !== f) try {
          u(h, a, f);
        } catch (t) {
          h[a] = f;
        }
        if ((h[s] || u(h, s, l), o[l])) for (var d in i) if (h[d] !== i[d]) try {
          u(h, d, i[d]);
        } catch (t) {
          h[d] = i[d];
        }
      }
    }
  }, function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  }, function (t, e, n) {
    var r = n(6), o = n(45), i = n(14), u = n(15), c = n(25), a = n(3), s = n(46), f = Object.getOwnPropertyDescriptor;
    e.f = r ? f : function (t, e) {
      if ((t = u(t), e = c(e, !0), s)) try {
        return f(t, e);
      } catch (t) {}
      if (a(t, e)) return i(!o.f.call(t, e), t[e]);
    };
  }, function (t, e, n) {
    "use strict";
    var r = ({}).propertyIsEnumerable, o = Object.getOwnPropertyDescriptor, i = o && !r.call({
      1: 2
    }, 1);
    e.f = i ? function (t) {
      var e = o(this, t);
      return !!e && e.enumerable;
    } : r;
  }, function (t, e, n) {
    var r = n(6), o = n(4), i = n(47);
    t.exports = !r && !o(function () {
      return 7 != Object.defineProperty(i("div"), "a", {
        get: function () {
          return 7;
        }
      }).a;
    });
  }, function (t, e, n) {
    var r = n(0), o = n(2), i = r.document, u = o(i) && o(i.createElement);
    t.exports = function (t) {
      return u ? i.createElement(t) : {};
    };
  }, function (t, e, n) {
    var r = n(49), o = Function.toString;
    ("function" != typeof r.inspectSource && (r.inspectSource = function (t) {
      return o.call(t);
    }), t.exports = r.inspectSource);
  }, function (t, e, n) {
    var r = n(0), o = n(26), i = r["__core-js_shared__"] || o("__core-js_shared__", {});
    t.exports = i;
  }, function (t, e, n) {
    var r = n(0), o = n(48), i = r.WeakMap;
    t.exports = "function" == typeof i && (/native code/).test(o(i));
  }, function (t, e, n) {
    var r = n(28), o = n(49);
    (t.exports = function (t, e) {
      return o[t] || (o[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.6.4",
      mode: r ? "pure" : "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    });
  }, function (t, e, n) {
    var r = n(3), o = n(15), i = n(73).indexOf, u = n(16);
    t.exports = function (t, e) {
      var n, c = o(t), a = 0, s = [];
      for (n in c) !r(u, n) && r(c, n) && s.push(n);
      for (; e.length > a; ) r(c, n = e[a++]) && (~i(s, n) || s.push(n));
      return s;
    };
  }, function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  }, function (t, e, n) {
    var r = n(4), o = /#|\.prototype\./, i = function (t, e) {
      var n = c[u(t)];
      return n == s || n != a && ("function" == typeof e ? r(e) : !!e);
    }, u = i.normalize = function (t) {
      return String(t).replace(o, ".").toLowerCase();
    }, c = i.data = {}, a = i.NATIVE = "N", s = i.POLYFILL = "P";
    t.exports = i;
  }, function (t, e, n) {
    var r = n(1), o = n(12), i = r("iterator"), u = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (o.Array === t || u[i] === t);
    };
  }, function (t, e, n) {
    var r = n(4);
    t.exports = !!Object.getOwnPropertySymbols && !r(function () {
      return !String(Symbol());
    });
  }, function (t, e, n) {
    var r = n(58), o = n(12), i = n(1)("iterator");
    t.exports = function (t) {
      if (null != t) return t[i] || t["@@iterator"] || o[r(t)];
    };
  }, function (t, e, n) {
    var r = n(34), o = n(23), i = n(1)("toStringTag"), u = "Arguments" == o((function () {
      return arguments;
    })());
    t.exports = r ? o : function (t) {
      var e, n, r;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = (function (t, e) {
        try {
          return t[e];
        } catch (t) {}
      })(e = Object(t), i)) ? n : u ? o(e) : "Object" == (r = o(e)) && "function" == typeof e.callee ? "Arguments" : r;
    };
  }, function (t, e, n) {
    var r = n(7);
    t.exports = function (t, e, n, o) {
      try {
        return o ? e(r(n)[0], n[1]) : e(n);
      } catch (e) {
        var i = t.return;
        throw (void 0 !== i && r(i.call(t)), e);
      }
    };
  }, function (t, e, n) {
    var r = n(1)("iterator"), o = !1;
    try {
      var i = 0, u = {
        next: function () {
          return {
            done: !!i++
          };
        },
        return: function () {
          o = !0;
        }
      };
      (u[r] = function () {
        return this;
      }, Array.from(u, function () {
        throw 2;
      }));
    } catch (t) {}
    t.exports = function (t, e) {
      if (!e && !o) return !1;
      var n = !1;
      try {
        var i = {};
        (i[r] = function () {
          return {
            next: function () {
              return {
                done: n = !0
              };
            }
          };
        }, t(i));
      } catch (t) {}
      return n;
    };
  }, function (t, e, n) {
    var r = n(7), o = n(79);
    t.exports = Object.setPrototypeOf || (("__proto__" in ({})) ? (function () {
      var t, e = !1, n = {};
      try {
        ((t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), e = n instanceof Array);
      } catch (t) {}
      return function (n, i) {
        return (r(n), o(i), e ? t.call(n, i) : n.__proto__ = i, n);
      };
    })() : void 0);
  }, function (t, e, n) {
    "use strict";
    var r = n(5).f, o = n(37), i = n(38), u = n(19), c = n(35), a = n(33), s = n(39), f = n(84), l = n(6), p = n(18).fastKey, h = n(9), d = h.set, v = h.getterFor;
    t.exports = {
      getConstructor: function (t, e, n, s) {
        var f = t(function (t, r) {
          (c(t, f, e), d(t, {
            type: e,
            index: o(null),
            first: void 0,
            last: void 0,
            size: 0
          }), l || (t.size = 0), null != r && a(r, t[s], t, n));
        }), h = v(e), y = function (t, e, n) {
          var r, o, i = h(t), u = m(t, e);
          return (u ? u.value = n : (i.last = u = {
            index: o = p(e, !0),
            key: e,
            value: n,
            previous: r = i.last,
            next: void 0,
            removed: !1
          }, i.first || (i.first = u), r && (r.next = u), l ? i.size++ : t.size++, "F" !== o && (i.index[o] = u)), t);
        }, m = function (t, e) {
          var n, r = h(t), o = p(e);
          if ("F" !== o) return r.index[o];
          for (n = r.first; n; n = n.next) if (n.key == e) return n;
        };
        return (i(f.prototype, {
          clear: function () {
            for (var t = h(this), e = t.index, n = t.first; n; ) (n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete e[n.index], n = n.next);
            (t.first = t.last = void 0, l ? t.size = 0 : this.size = 0);
          },
          delete: function (t) {
            var e = h(this), n = m(this, t);
            if (n) {
              var r = n.next, o = n.previous;
              (delete e.index[n.index], n.removed = !0, o && (o.next = r), r && (r.previous = o), e.first == n && (e.first = r), e.last == n && (e.last = o), l ? e.size-- : this.size--);
            }
            return !!n;
          },
          forEach: function (t) {
            for (var e, n = h(this), r = u(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.next : n.first; ) for (r(e.value, e.key, this); e && e.removed; ) e = e.previous;
          },
          has: function (t) {
            return !!m(this, t);
          }
        }), i(f.prototype, n ? {
          get: function (t) {
            var e = m(this, t);
            return e && e.value;
          },
          set: function (t, e) {
            return y(this, 0 === t ? 0 : t, e);
          }
        } : {
          add: function (t) {
            return y(this, t = 0 === t ? 0 : t, t);
          }
        }), l && r(f.prototype, "size", {
          get: function () {
            return h(this).size;
          }
        }), f);
      },
      setStrong: function (t, e, n) {
        var r = e + " Iterator", o = v(e), i = v(r);
        (s(t, e, function (t, e) {
          d(this, {
            type: r,
            target: t,
            state: o(t),
            kind: e,
            last: void 0
          });
        }, function () {
          for (var t = i(this), e = t.kind, n = t.last; n && n.removed; ) n = n.previous;
          return t.target && (t.last = n = n ? n.next : t.state.first) ? "keys" == e ? {
            value: n.key,
            done: !1
          } : "values" == e ? {
            value: n.value,
            done: !1
          } : {
            value: [n.key, n.value],
            done: !1
          } : (t.target = void 0, {
            value: void 0,
            done: !0
          });
        }, n ? "entries" : "values", !n, !0), f(e));
      }
    };
  }, function (t, e, n) {
    var r = n(52), o = n(32);
    t.exports = Object.keys || (function (t) {
      return r(t, o);
    });
  }, function (t, e, n) {
    "use strict";
    var r, o, i, u = n(65), c = n(8), a = n(3), s = n(1), f = n(28), l = s("iterator"), p = !1;
    ([].keys && (("next" in (i = [].keys())) ? (o = u(u(i))) !== Object.prototype && (r = o) : p = !0), null == r && (r = {}), f || a(r, l) || c(r, l, function () {
      return this;
    }), t.exports = {
      IteratorPrototype: r,
      BUGGY_SAFARI_ITERATORS: p
    });
  }, function (t, e, n) {
    var r = n(3), o = n(20), i = n(27), u = n(83), c = i("IE_PROTO"), a = Object.prototype;
    t.exports = u ? Object.getPrototypeOf : function (t) {
      return (t = o(t), r(t, c) ? t[c] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null);
    };
  }, function (t, e, n) {
    "use strict";
    (function (t) {
      var n = "object" == typeof t && t && t.Object === Object && t;
      e.a = n;
    }).call(this, n(43));
  }, function (t, e, n) {
    t.exports = n(105);
  }, function (t, e, n) {
    (n(69), n(40), n(41), n(42));
    var r = n(10);
    t.exports = r.Map;
  }, function (t, e, n) {
    "use strict";
    var r = n(21), o = n(62);
    t.exports = r("Map", function (t) {
      return function () {
        return t(this, arguments.length ? arguments[0] : void 0);
      };
    }, o);
  }, function (t, e, n) {
    var r = n(3), o = n(71), i = n(44), u = n(5);
    t.exports = function (t, e) {
      for (var n = o(e), c = u.f, a = i.f, s = 0; s < n.length; s++) {
        var f = n[s];
        r(t, f) || c(t, f, a(e, f));
      }
    };
  }, function (t, e, n) {
    var r = n(30), o = n(72), i = n(53), u = n(7);
    t.exports = r("Reflect", "ownKeys") || (function (t) {
      var e = o.f(u(t)), n = i.f;
      return n ? e.concat(n(t)) : e;
    });
  }, function (t, e, n) {
    var r = n(52), o = n(32).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || (function (t) {
      return r(t, o);
    });
  }, function (t, e, n) {
    var r = n(15), o = n(17), i = n(74), u = function (t) {
      return function (e, n, u) {
        var c, a = r(e), s = o(a.length), f = i(u, s);
        if (t && n != n) {
          for (; s > f; ) if ((c = a[f++]) != c) return !0;
        } else for (; s > f; f++) if ((t || (f in a)) && a[f] === n) return t || f || 0;
        return !t && -1;
      };
    };
    t.exports = {
      includes: u(!0),
      indexOf: u(!1)
    };
  }, function (t, e, n) {
    var r = n(31), o = Math.max, i = Math.min;
    t.exports = function (t, e) {
      var n = r(t);
      return n < 0 ? o(n + e, 0) : i(n, e);
    };
  }, function (t, e, n) {
    var r = n(4);
    t.exports = !r(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  }, function (t, e, n) {
    var r = n(56);
    t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  }, function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
      return t;
    };
  }, function (t, e, n) {
    var r = n(2), o = n(61);
    t.exports = function (t, e, n) {
      var i, u;
      return (o && "function" == typeof (i = e.constructor) && i !== n && r(u = i.prototype) && u !== n.prototype && o(t, u), t);
    };
  }, function (t, e, n) {
    var r = n(2);
    t.exports = function (t) {
      if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
      return t;
    };
  }, function (t, e, n) {
    var r = n(6), o = n(5), i = n(7), u = n(63);
    t.exports = r ? Object.defineProperties : function (t, e) {
      i(t);
      for (var n, r = u(e), c = r.length, a = 0; c > a; ) o.f(t, n = r[a++], e[n]);
      return t;
    };
  }, function (t, e, n) {
    var r = n(30);
    t.exports = r("document", "documentElement");
  }, function (t, e, n) {
    "use strict";
    var r = n(64).IteratorPrototype, o = n(37), i = n(14), u = n(36), c = n(12), a = function () {
      return this;
    };
    t.exports = function (t, e, n) {
      var s = e + " Iterator";
      return (t.prototype = o(r, {
        next: i(1, n)
      }), u(t, s, !1, !0), c[s] = a, t);
    };
  }, function (t, e, n) {
    var r = n(4);
    t.exports = !r(function () {
      function t() {}
      return (t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype);
    });
  }, function (t, e, n) {
    "use strict";
    var r = n(30), o = n(5), i = n(1), u = n(6), c = i("species");
    t.exports = function (t) {
      var e = r(t), n = o.f;
      u && e && !e[c] && n(e, c, {
        configurable: !0,
        get: function () {
          return this;
        }
      });
    };
  }, function (t, e, n) {
    "use strict";
    var r = n(34), o = n(58);
    t.exports = r ? ({}).toString : function () {
      return "[object " + o(this) + "]";
    };
  }, function (t, e, n) {
    var r = n(31), o = n(24), i = function (t) {
      return function (e, n) {
        var i, u, c = String(o(e)), a = r(n), s = c.length;
        return a < 0 || a >= s ? t ? "" : void 0 : (i = c.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === s || (u = c.charCodeAt(a + 1)) < 56320 || u > 57343 ? t ? c.charAt(a) : i : t ? c.slice(a, a + 2) : u - 56320 + (i - 55296 << 10) + 65536;
      };
    };
    t.exports = {
      codeAt: i(!1),
      charAt: i(!0)
    };
  }, function (t, e) {
    t.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    };
  }, function (t, e, n) {
    "use strict";
    var r = n(15), o = n(89), i = n(12), u = n(9), c = n(39), a = u.set, s = u.getterFor("Array Iterator");
    (t.exports = c(Array, "Array", function (t, e) {
      a(this, {
        type: "Array Iterator",
        target: r(t),
        index: 0,
        kind: e
      });
    }, function () {
      var t = s(this), e = t.target, n = t.kind, r = t.index++;
      return !e || r >= e.length ? (t.target = void 0, {
        value: void 0,
        done: !0
      }) : "keys" == n ? {
        value: r,
        done: !1
      } : "values" == n ? {
        value: e[r],
        done: !1
      } : {
        value: [r, e[r]],
        done: !1
      };
    }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries"));
  }, function (t, e, n) {
    var r = n(1), o = n(37), i = n(5), u = r("unscopables"), c = Array.prototype;
    (null == c[u] && i.f(c, u, {
      configurable: !0,
      value: o(null)
    }), t.exports = function (t) {
      c[u][t] = !0;
    });
  }, function (t, e, n) {
    (n(91), n(40), n(41), n(42));
    var r = n(10);
    t.exports = r.Set;
  }, function (t, e, n) {
    "use strict";
    var r = n(21), o = n(62);
    t.exports = r("Set", function (t) {
      return function () {
        return t(this, arguments.length ? arguments[0] : void 0);
      };
    }, o);
  }, function (t, e, n) {
    (n(40), n(93), n(42));
    var r = n(10);
    t.exports = r.WeakMap;
  }, function (t, e, n) {
    "use strict";
    var r, o = n(0), i = n(38), u = n(18), c = n(21), a = n(94), s = n(2), f = n(9).enforce, l = n(50), p = !o.ActiveXObject && ("ActiveXObject" in o), h = Object.isExtensible, d = function (t) {
      return function () {
        return t(this, arguments.length ? arguments[0] : void 0);
      };
    }, v = t.exports = c("WeakMap", d, a);
    if (l && p) {
      (r = a.getConstructor(d, "WeakMap", !0), u.REQUIRED = !0);
      var y = v.prototype, m = y.delete, g = y.has, b = y.get, x = y.set;
      i(y, {
        delete: function (t) {
          if (s(t) && !h(t)) {
            var e = f(this);
            return (e.frozen || (e.frozen = new r()), m.call(this, t) || e.frozen.delete(t));
          }
          return m.call(this, t);
        },
        has: function (t) {
          if (s(t) && !h(t)) {
            var e = f(this);
            return (e.frozen || (e.frozen = new r()), g.call(this, t) || e.frozen.has(t));
          }
          return g.call(this, t);
        },
        get: function (t) {
          if (s(t) && !h(t)) {
            var e = f(this);
            return (e.frozen || (e.frozen = new r()), g.call(this, t) ? b.call(this, t) : e.frozen.get(t));
          }
          return b.call(this, t);
        },
        set: function (t, e) {
          if (s(t) && !h(t)) {
            var n = f(this);
            (n.frozen || (n.frozen = new r()), g.call(this, t) ? x.call(this, t, e) : n.frozen.set(t, e));
          } else x.call(this, t, e);
          return this;
        }
      });
    }
  }, function (t, e, n) {
    "use strict";
    var r = n(38), o = n(18).getWeakData, i = n(7), u = n(2), c = n(35), a = n(33), s = n(95), f = n(3), l = n(9), p = l.set, h = l.getterFor, d = s.find, v = s.findIndex, y = 0, m = function (t) {
      return t.frozen || (t.frozen = new g());
    }, g = function () {
      this.entries = [];
    }, b = function (t, e) {
      return d(t.entries, function (t) {
        return t[0] === e;
      });
    };
    (g.prototype = {
      get: function (t) {
        var e = b(this, t);
        if (e) return e[1];
      },
      has: function (t) {
        return !!b(this, t);
      },
      set: function (t, e) {
        var n = b(this, t);
        n ? n[1] = e : this.entries.push([t, e]);
      },
      delete: function (t) {
        var e = v(this.entries, function (e) {
          return e[0] === t;
        });
        return (~e && this.entries.splice(e, 1), !!~e);
      }
    }, t.exports = {
      getConstructor: function (t, e, n, s) {
        var l = t(function (t, r) {
          (c(t, l, e), p(t, {
            type: e,
            id: y++,
            frozen: void 0
          }), null != r && a(r, t[s], t, n));
        }), d = h(e), v = function (t, e, n) {
          var r = d(t), u = o(i(e), !0);
          return (!0 === u ? m(r).set(e, n) : u[r.id] = n, t);
        };
        return (r(l.prototype, {
          delete: function (t) {
            var e = d(this);
            if (!u(t)) return !1;
            var n = o(t);
            return !0 === n ? m(e).delete(t) : n && f(n, e.id) && delete n[e.id];
          },
          has: function (t) {
            var e = d(this);
            if (!u(t)) return !1;
            var n = o(t);
            return !0 === n ? m(e).has(t) : n && f(n, e.id);
          }
        }), r(l.prototype, n ? {
          get: function (t) {
            var e = d(this);
            if (u(t)) {
              var n = o(t);
              return !0 === n ? m(e).get(t) : n ? n[e.id] : void 0;
            }
          },
          set: function (t, e) {
            return v(this, t, e);
          }
        } : {
          add: function (t) {
            return v(this, t, !0);
          }
        }), l);
      }
    });
  }, function (t, e, n) {
    var r = n(19), o = n(22), i = n(20), u = n(17), c = n(96), a = [].push, s = function (t) {
      var e = 1 == t, n = 2 == t, s = 3 == t, f = 4 == t, l = 6 == t, p = 5 == t || l;
      return function (h, d, v, y) {
        for (var m, g, b = i(h), x = o(b), w = r(d, v, 3), S = u(x.length), O = 0, _ = y || c, E = e ? _(h, S) : n ? _(h, 0) : void 0; S > O; O++) if ((p || (O in x)) && (g = w(m = x[O], O, b), t)) if (e) E[O] = g; else if (g) switch (t) {
          case 3:
            return !0;
          case 5:
            return m;
          case 6:
            return O;
          case 2:
            a.call(E, m);
        } else if (f) return !1;
        return l ? -1 : s || f ? f : E;
      };
    };
    t.exports = {
      forEach: s(0),
      map: s(1),
      filter: s(2),
      some: s(3),
      every: s(4),
      find: s(5),
      findIndex: s(6)
    };
  }, function (t, e, n) {
    var r = n(2), o = n(97), i = n(1)("species");
    t.exports = function (t, e) {
      var n;
      return (o(t) && ("function" != typeof (n = t.constructor) || n !== Array && !o(n.prototype) ? r(n) && null === (n = n[i]) && (n = void 0) : n = void 0), new (void 0 === n ? Array : n)(0 === e ? 0 : e));
    };
  }, function (t, e, n) {
    var r = n(23);
    t.exports = Array.isArray || (function (t) {
      return "Array" == r(t);
    });
  }, function (t, e, n) {
    (n(41), n(99));
    var r = n(10);
    t.exports = r.Array.from;
  }, function (t, e, n) {
    var r = n(13), o = n(100);
    r({
      target: "Array",
      stat: !0,
      forced: !n(60)(function (t) {
        Array.from(t);
      })
    }, {
      from: o
    });
  }, function (t, e, n) {
    "use strict";
    var r = n(19), o = n(20), i = n(59), u = n(55), c = n(17), a = n(101), s = n(57);
    t.exports = function (t) {
      var e, n, f, l, p, h, d = o(t), v = "function" == typeof this ? this : Array, y = arguments.length, m = y > 1 ? arguments[1] : void 0, g = void 0 !== m, b = s(d), x = 0;
      if ((g && (m = r(m, y > 2 ? arguments[2] : void 0, 2)), null == b || v == Array && u(b))) for (n = new v(e = c(d.length)); e > x; x++) (h = g ? m(d[x], x) : d[x], a(n, x, h)); else for ((p = (l = b.call(d)).next, n = new v()); !(f = p.call(l)).done; x++) (h = g ? i(l, m, [f.value, x], !0) : f.value, a(n, x, h));
      return (n.length = x, n);
    };
  }, function (t, e, n) {
    "use strict";
    var r = n(25), o = n(5), i = n(14);
    t.exports = function (t, e, n) {
      var u = r(e);
      (u in t) ? o.f(t, u, i(0, n)) : t[u] = n;
    };
  }, function (t, e, n) {
    n(103);
    var r = n(10);
    t.exports = r.Object.assign;
  }, function (t, e, n) {
    var r = n(13), o = n(104);
    r({
      target: "Object",
      stat: !0,
      forced: Object.assign !== o
    }, {
      assign: o
    });
  }, function (t, e, n) {
    "use strict";
    var r = n(6), o = n(4), i = n(63), u = n(53), c = n(45), a = n(20), s = n(22), f = Object.assign, l = Object.defineProperty;
    t.exports = !f || o(function () {
      if (r && 1 !== f({
        b: 1
      }, f(l({}, "a", {
        enumerable: !0,
        get: function () {
          l(this, "b", {
            value: 3,
            enumerable: !1
          });
        }
      }), {
        b: 2
      })).b) return !0;
      var t = {}, e = {}, n = Symbol();
      return (t[n] = 7, ("abcdefghijklmnopqrst").split("").forEach(function (t) {
        e[t] = t;
      }), 7 != f({}, t)[n] || "abcdefghijklmnopqrst" != i(f({}, e)).join(""));
    }) ? function (t, e) {
      for (var n = a(t), o = arguments.length, f = 1, l = u.f, p = c.f; o > f; ) for (var h, d = s(arguments[f++]), v = l ? i(d).concat(l(d)) : i(d), y = v.length, m = 0; y > m; ) (h = v[m++], r && !p.call(d, h) || (n[h] = d[h]));
      return n;
    } : f;
  }, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = {};
    (n.r(r), n.d(r, "keyboardHandler", function () {
      return ot;
    }), n.d(r, "mouseHandler", function () {
      return it;
    }), n.d(r, "resizeHandler", function () {
      return ut;
    }), n.d(r, "selectHandler", function () {
      return ct;
    }), n.d(r, "touchHandler", function () {
      return at;
    }), n.d(r, "wheelHandler", function () {
      return st;
    }));
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ******************************************************************************/
    var o = function (t, e) {
      return (o = Object.setPrototypeOf || ({
        __proto__: []
      }) instanceof Array && (function (t, e) {
        t.__proto__ = e;
      }) || (function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
      }))(t, e);
    }, i = function () {
      return (i = Object.assign || (function (t) {
        for (var e, n = 1, r = arguments.length; n < r; n++) for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t;
      })).apply(this, arguments);
    };
    function u(t, e, n, r) {
      var o, i = arguments.length, u = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) u = Reflect.decorate(t, e, n, r); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (u = (i < 3 ? o(u) : i > 3 ? o(e, n, u) : o(e, n)) || u);
      return (i > 3 && u && Object.defineProperty(e, n, u), u);
    }
    (n(68), n(90), n(92), n(98), n(102));
    var c = /\s/, a = /^\s+/, s = function (t) {
      return t ? t.slice(0, (function (t) {
        for (var e = t.length; e-- && c.test(t.charAt(e)); ) ;
        return e;
      })(t) + 1).replace(a, "") : t;
    }, f = function (t) {
      var e = typeof t;
      return null != t && ("object" == e || "function" == e);
    }, l = n(66), p = "object" == typeof self && self && self.Object === Object && self, h = l.a || p || Function("return this")(), d = h.Symbol, v = Object.prototype, y = v.hasOwnProperty, m = v.toString, g = d ? d.toStringTag : void 0, b = Object.prototype.toString, x = d ? d.toStringTag : void 0, w = function (t) {
      return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : x && (x in Object(t)) ? (function (t) {
        var e = y.call(t, g), n = t[g];
        try {
          t[g] = void 0;
          var r = !0;
        } catch (t) {}
        var o = m.call(t);
        return (r && (e ? t[g] = n : delete t[g]), o);
      })(t) : (function (t) {
        return b.call(t);
      })(t);
    }, S = /^[-+]0x[0-9a-f]+$/i, O = /^0b[01]+$/i, _ = /^0o[0-7]+$/i, E = parseInt, T = function (t) {
      if ("number" == typeof t) return t;
      if ((function (t) {
        return "symbol" == typeof t || (function (t) {
          return null != t && "object" == typeof t;
        })(t) && "[object Symbol]" == w(t);
      })(t)) return NaN;
      if (f(t)) {
        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = f(e) ? e + "" : e;
      }
      if ("string" != typeof t) return 0 === t ? t : +t;
      t = s(t);
      var n = O.test(t);
      return n || _.test(t) ? E(t.slice(2), n ? 2 : 8) : S.test(t) ? NaN : +t;
    }, A = function (t, e, n) {
      return (void 0 === n && (n = e, e = void 0), void 0 !== n && (n = (n = T(n)) == n ? n : 0), void 0 !== e && (e = (e = T(e)) == e ? e : 0), (function (t, e, n) {
        return (t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t);
      })(T(t), e, n));
    };
    function j(t, e) {
      return (void 0 === t && (t = -1 / 0), void 0 === e && (e = 1 / 0), function (n, r) {
        var o = "_" + r;
        Object.defineProperty(n, r, {
          get: function () {
            return this[o];
          },
          set: function (n) {
            Object.defineProperty(this, o, {
              value: A(n, t, e),
              enumerable: !1,
              writable: !0,
              configurable: !0
            });
          },
          enumerable: !0,
          configurable: !0
        });
      });
    }
    function P(t, e) {
      var n = "_" + e;
      Object.defineProperty(t, e, {
        get: function () {
          return this[n];
        },
        set: function (t) {
          Object.defineProperty(this, n, {
            value: !!t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          });
        },
        enumerable: !0,
        configurable: !0
      });
    }
    var M = function () {
      return h.Date.now();
    }, k = Math.max, z = Math.min, D = function (t, e, n) {
      var r, o, i, u, c, a, s = 0, l = !1, p = !1, h = !0;
      if ("function" != typeof t) throw new TypeError("Expected a function");
      function d(e) {
        var n = r, i = o;
        return (r = o = void 0, s = e, u = t.apply(i, n));
      }
      function v(t) {
        var n = t - a;
        return void 0 === a || n >= e || n < 0 || p && t - s >= i;
      }
      function y() {
        var t = M();
        if (v(t)) return m(t);
        c = setTimeout(y, (function (t) {
          var n = e - (t - a);
          return p ? z(n, i - (t - s)) : n;
        })(t));
      }
      function m(t) {
        return (c = void 0, h && r ? d(t) : (r = o = void 0, u));
      }
      function g() {
        var t = M(), n = v(t);
        if ((r = arguments, o = this, a = t, n)) {
          if (void 0 === c) return (function (t) {
            return (s = t, c = setTimeout(y, e), l ? d(t) : u);
          })(a);
          if (p) return (clearTimeout(c), c = setTimeout(y, e), d(a));
        }
        return (void 0 === c && (c = setTimeout(y, e)), u);
      }
      return (e = T(e) || 0, f(n) && (l = !!n.leading, i = (p = ("maxWait" in n)) ? k(T(n.maxWait) || 0, e) : i, h = ("trailing" in n) ? !!n.trailing : h), g.cancel = function () {
        (void 0 !== c && clearTimeout(c), s = 0, r = a = o = c = void 0);
      }, g.flush = function () {
        return void 0 === c ? u : m(M());
      }, g);
    };
    function L() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      return function (e, n, r) {
        var o = r.value;
        return {
          get: function () {
            return (this.hasOwnProperty(n) || Object.defineProperty(this, n, {
              value: D.apply(void 0, (function () {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                var r = Array(t), o = 0;
                for (e = 0; e < n; e++) for (var i = arguments[e], u = 0, c = i.length; u < c; (u++, o++)) r[o] = i[u];
                return r;
              })([o], t))
            }), this[n]);
          }
        };
      };
    }
    var I, N = (function () {
      function t(t) {
        var e = this;
        (void 0 === t && (t = {}), this.damping = .1, this.thumbMinSize = 20, this.renderByPixels = !0, this.alwaysShowTracks = !1, this.continuousScrolling = !0, this.delegateTo = null, this.plugins = {}, Object.keys(t).forEach(function (n) {
          e[n] = t[n];
        }));
      }
      return (Object.defineProperty(t.prototype, "wheelEventTarget", {
        get: function () {
          return this.delegateTo;
        },
        set: function (t) {
          (console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."), this.delegateTo = t);
        },
        enumerable: !0,
        configurable: !0
      }), u([j(0, 1)], t.prototype, "damping", void 0), u([j(0, 1 / 0)], t.prototype, "thumbMinSize", void 0), u([P], t.prototype, "renderByPixels", void 0), u([P], t.prototype, "alwaysShowTracks", void 0), u([P], t.prototype, "continuousScrolling", void 0), t);
    })(), C = new WeakMap();
    function R() {
      if (void 0 !== I) return I;
      var t = !1;
      try {
        var e = function () {}, n = Object.defineProperty({}, "passive", {
          get: function () {
            t = !0;
          }
        });
        (window.addEventListener("testPassive", e, n), window.removeEventListener("testPassive", e, n));
      } catch (t) {}
      return I = !!t && ({
        passive: !1
      });
    }
    function F(t) {
      var e = C.get(t) || [];
      return (C.set(t, e), function (t, n, r) {
        function o(t) {
          t.defaultPrevented || r(t);
        }
        n.split(/\s+/g).forEach(function (n) {
          (e.push({
            elem: t,
            eventName: n,
            handler: o
          }), t.addEventListener(n, o, R()));
        });
      });
    }
    function H(t) {
      var e = (function (t) {
        return t.touches ? t.touches[t.touches.length - 1] : t;
      })(t);
      return {
        x: e.clientX,
        y: e.clientY
      };
    }
    function W(t, e) {
      return (void 0 === e && (e = []), e.some(function (e) {
        return t === e;
      }));
    }
    var G = ["webkit", "moz", "ms", "o"], B = new RegExp("^-(?!(?:" + G.join("|") + ")-)");
    function U(t, e) {
      (e = (function (t) {
        var e = {};
        return (Object.keys(t).forEach(function (n) {
          if (B.test(n)) {
            var r = t[n];
            (n = n.replace(/^-/, ""), e[n] = r, G.forEach(function (t) {
              e["-" + t + "-" + n] = r;
            }));
          } else e[n] = t[n];
        }), e);
      })(e), Object.keys(e).forEach(function (n) {
        var r = n.replace(/^-/, "").replace(/-([a-z])/g, function (t, e) {
          return e.toUpperCase();
        });
        t.style[r] = e[n];
      }));
    }
    var X, V = (function () {
      function t(t) {
        (this.updateTime = Date.now(), this.delta = {
          x: 0,
          y: 0
        }, this.velocity = {
          x: 0,
          y: 0
        }, this.lastPosition = {
          x: 0,
          y: 0
        }, this.lastPosition = H(t));
      }
      return (t.prototype.update = function (t) {
        var e = this.velocity, n = this.updateTime, r = this.lastPosition, o = Date.now(), i = H(t), u = {
          x: -(i.x - r.x),
          y: -(i.y - r.y)
        }, c = o - n || 16, a = u.x / c * 16, s = u.y / c * 16;
        (e.x = .9 * a + .1 * e.x, e.y = .9 * s + .1 * e.y, this.delta = u, this.updateTime = o, this.lastPosition = i);
      }, t);
    })(), Y = (function () {
      function t() {
        this._touchList = {};
      }
      return (Object.defineProperty(t.prototype, "_primitiveValue", {
        get: function () {
          return {
            x: 0,
            y: 0
          };
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.isActive = function () {
        return void 0 !== this._activeTouchID;
      }, t.prototype.getDelta = function () {
        var t = this._getActiveTracker();
        return t ? i({}, t.delta) : this._primitiveValue;
      }, t.prototype.getVelocity = function () {
        var t = this._getActiveTracker();
        return t ? i({}, t.velocity) : this._primitiveValue;
      }, t.prototype.track = function (t) {
        var e = this, n = t.targetTouches;
        return (Array.from(n).forEach(function (t) {
          e._add(t);
        }), this._touchList);
      }, t.prototype.update = function (t) {
        var e = this, n = t.touches, r = t.changedTouches;
        return (Array.from(n).forEach(function (t) {
          e._renew(t);
        }), this._setActiveID(r), this._touchList);
      }, t.prototype.release = function (t) {
        var e = this;
        (delete this._activeTouchID, Array.from(t.changedTouches).forEach(function (t) {
          e._delete(t);
        }));
      }, t.prototype._add = function (t) {
        if (!this._has(t)) {
          var e = new V(t);
          this._touchList[t.identifier] = e;
        }
      }, t.prototype._renew = function (t) {
        this._has(t) && this._touchList[t.identifier].update(t);
      }, t.prototype._delete = function (t) {
        delete this._touchList[t.identifier];
      }, t.prototype._has = function (t) {
        return this._touchList.hasOwnProperty(t.identifier);
      }, t.prototype._setActiveID = function (t) {
        this._activeTouchID = t[t.length - 1].identifier;
      }, t.prototype._getActiveTracker = function () {
        return this._touchList[this._activeTouchID];
      }, t);
    })();
    !(function (t) {
      (t.X = "x", t.Y = "y");
    })(X || (X = {}));
    var q = (function () {
      function t(t, e) {
        (void 0 === e && (e = 0), this._direction = t, this._minSize = e, this.element = document.createElement("div"), this.displaySize = 0, this.realSize = 0, this.offset = 0, this.element.className = "scrollbar-thumb scrollbar-thumb-" + t);
      }
      return (t.prototype.attachTo = function (t) {
        t.appendChild(this.element);
      }, t.prototype.update = function (t, e, n) {
        (this.realSize = Math.min(e / n, 1) * e, this.displaySize = Math.max(this.realSize, this._minSize), this.offset = t / n * (e + (this.realSize - this.displaySize)), U(this.element, this._getStyle()));
      }, t.prototype._getStyle = function () {
        switch (this._direction) {
          case X.X:
            return {
              width: this.displaySize + "px",
              "-transform": "translate3d(" + this.offset + "px, 0, 0)"
            };
          case X.Y:
            return {
              height: this.displaySize + "px",
              "-transform": "translate3d(0, " + this.offset + "px, 0)"
            };
          default:
            return null;
        }
      }, t);
    })(), K = (function () {
      function t(t, e) {
        (void 0 === e && (e = 0), this.element = document.createElement("div"), this._isShown = !1, this.element.className = "scrollbar-track scrollbar-track-" + t, this.thumb = new q(t, e), this.thumb.attachTo(this.element));
      }
      return (t.prototype.attachTo = function (t) {
        t.appendChild(this.element);
      }, t.prototype.show = function () {
        this._isShown || (this._isShown = !0, this.element.classList.add("show"));
      }, t.prototype.hide = function () {
        this._isShown && (this._isShown = !1, this.element.classList.remove("show"));
      }, t.prototype.update = function (t, e, n) {
        (U(this.element, {
          display: n <= e ? "none" : "block"
        }), this.thumb.update(t, e, n));
      }, t);
    })(), Q = (function () {
      function t(t) {
        this._scrollbar = t;
        var e = t.options.thumbMinSize;
        (this.xAxis = new K(X.X, e), this.yAxis = new K(X.Y, e), this.xAxis.attachTo(t.containerEl), this.yAxis.attachTo(t.containerEl), t.options.alwaysShowTracks && (this.xAxis.show(), this.yAxis.show()));
      }
      return (t.prototype.update = function () {
        var t = this._scrollbar, e = t.size, n = t.offset;
        (this.xAxis.update(n.x, e.container.width, e.content.width), this.yAxis.update(n.y, e.container.height, e.content.height));
      }, t.prototype.autoHideOnIdle = function () {
        this._scrollbar.options.alwaysShowTracks || (this.xAxis.hide(), this.yAxis.hide());
      }, u([L(300)], t.prototype, "autoHideOnIdle", null), t);
    })(), $ = new WeakMap();
    function J(t) {
      return Math.pow(t - 1, 3) + 1;
    }
    var Z, tt, et, nt = (function () {
      function t(t, e) {
        var n = this.constructor;
        (this.scrollbar = t, this.name = n.pluginName, this.options = i(i({}, n.defaultOptions), e));
      }
      return (t.prototype.onInit = function () {}, t.prototype.onDestroy = function () {}, t.prototype.onUpdate = function () {}, t.prototype.onRender = function (t) {}, t.prototype.transformDelta = function (t, e) {
        return i({}, t);
      }, t.pluginName = "", t.defaultOptions = {}, t);
    })(), rt = {
      order: new Set(),
      constructors: {}
    };
    function ot(t) {
      var e = F(t), n = t.containerEl;
      e(n, "keydown", function (e) {
        var r = document.activeElement;
        if ((r === n || n.contains(r)) && !(function (t) {
          return !("INPUT" !== t.tagName && "SELECT" !== t.tagName && "TEXTAREA" !== t.tagName && !t.isContentEditable) && !t.disabled;
        })(r)) {
          var o = (function (t, e) {
            var n = t.size, r = t.limit, o = t.offset;
            switch (e) {
              case Z.TAB:
                return (function (t) {
                  requestAnimationFrame(function () {
                    t.scrollIntoView(document.activeElement, {
                      offsetTop: t.size.container.height / 2,
                      onlyScrollIfNeeded: !0
                    });
                  });
                })(t);
              case Z.SPACE:
                return [0, 200];
              case Z.PAGE_UP:
                return [0, 40 - n.container.height];
              case Z.PAGE_DOWN:
                return [0, n.container.height - 40];
              case Z.END:
                return [0, r.y - o.y];
              case Z.HOME:
                return [0, -o.y];
              case Z.LEFT:
                return [-40, 0];
              case Z.UP:
                return [0, -40];
              case Z.RIGHT:
                return [40, 0];
              case Z.DOWN:
                return [0, 40];
              default:
                return null;
            }
          })(t, e.keyCode || e.which);
          if (o) {
            var i = o[0], u = o[1];
            t.addTransformableMomentum(i, u, e, function (n) {
              n ? e.preventDefault() : (t.containerEl.blur(), t.parent && t.parent.containerEl.focus());
            });
          }
        }
      });
    }
    function it(t) {
      var e, n, r, o, i, u = F(t), c = t.containerEl, a = t.track, s = a.xAxis, f = a.yAxis;
      function l(e, n) {
        var r = t.size;
        return e === tt.X ? n / (r.container.width + (s.thumb.realSize - s.thumb.displaySize)) * r.content.width : e === tt.Y ? n / (r.container.height + (f.thumb.realSize - f.thumb.displaySize)) * r.content.height : 0;
      }
      function p(t) {
        return W(t, [s.element, s.thumb.element]) ? tt.X : W(t, [f.element, f.thumb.element]) ? tt.Y : void 0;
      }
      (u(c, "click", function (e) {
        if (!n && W(e.target, [s.element, f.element])) {
          var r = e.target, o = p(r), i = r.getBoundingClientRect(), u = H(e), c = t.offset, a = t.limit;
          if (o === tt.X) {
            var h = u.x - i.left - s.thumb.displaySize / 2;
            t.setMomentum(A(l(o, h) - c.x, -c.x, a.x - c.x), 0);
          }
          o === tt.Y && (h = u.y - i.top - f.thumb.displaySize / 2, t.setMomentum(0, A(l(o, h) - c.y, -c.y, a.y - c.y)));
        }
      }), u(c, "mousedown", function (n) {
        if (W(n.target, [s.thumb.element, f.thumb.element])) {
          e = !0;
          var u = n.target, a = H(n), l = u.getBoundingClientRect();
          (o = p(u), r = {
            x: a.x - l.left,
            y: a.y - l.top
          }, i = c.getBoundingClientRect(), U(t.containerEl, {
            "-user-select": "none"
          }));
        }
      }), u(window, "mousemove", function (u) {
        if (e) {
          n = !0;
          var c = t.offset, a = H(u);
          if (o === tt.X) {
            var s = a.x - r.x - i.left;
            t.setPosition(l(o, s), c.y);
          }
          o === tt.Y && (s = a.y - r.y - i.top, t.setPosition(c.x, l(o, s)));
        }
      }), u(window, "mouseup blur", function () {
        (e = n = !1, U(t.containerEl, {
          "-user-select": ""
        }));
      }));
    }
    function ut(t) {
      F(t)(window, "resize", D(t.update.bind(t), 300));
    }
    function ct(t) {
      var e, n = F(t), r = t.containerEl, o = t.contentEl, i = !1;
      (n(window, "mousemove", function (n) {
        i && (cancelAnimationFrame(e), (function n(r) {
          var o = r.x, i = r.y;
          if (o || i) {
            var u = t.offset, c = t.limit;
            (t.setMomentum(A(u.x + o, 0, c.x) - u.x, A(u.y + i, 0, c.y) - u.y), e = requestAnimationFrame(function () {
              n({
                x: o,
                y: i
              });
            }));
          }
        })((function (t, e) {
          var n = t.bounding, r = n.top, o = n.right, i = n.bottom, u = n.left, c = H(e), a = c.x, s = c.y, f = {
            x: 0,
            y: 0
          };
          return (0 === a && 0 === s || (a > o - 20 ? f.x = a - o + 20 : a < u + 20 && (f.x = a - u - 20), s > i - 20 ? f.y = s - i + 20 : s < r + 20 && (f.y = s - r - 20), f.x *= 2, f.y *= 2), f);
        })(t, n)));
      }), n(o, "selectstart", function (t) {
        (t.stopPropagation(), cancelAnimationFrame(e), i = !0);
      }), n(window, "mouseup blur", function () {
        (cancelAnimationFrame(e), i = !1);
      }), n(r, "scroll", function (t) {
        (t.preventDefault(), r.scrollTop = r.scrollLeft = 0);
      }));
    }
    function at(t) {
      var e, n = (/Android/).test(navigator.userAgent) ? 3 : 2, r = t.options.delegateTo || t.containerEl, o = new Y(), i = F(t), u = 0;
      (i(r, "touchstart", function (n) {
        (o.track(n), t.setMomentum(0, 0), 0 === u && (e = t.options.damping, t.options.damping = Math.max(e, .5)), u++);
      }), i(r, "touchmove", function (e) {
        if (!et || et === t) {
          o.update(e);
          var n = o.getDelta(), r = n.x, i = n.y;
          t.addTransformableMomentum(r, i, e, function (n) {
            n && e.cancelable && (e.preventDefault(), et = t);
          });
        }
      }), i(r, "touchcancel touchend", function (r) {
        var i = o.getVelocity(), c = {
          x: 0,
          y: 0
        };
        (Object.keys(i).forEach(function (t) {
          var r = i[t] / e;
          c[t] = Math.abs(r) < 50 ? 0 : r * n;
        }), t.addTransformableMomentum(c.x, c.y, r), 0 == --u && (t.options.damping = e), o.release(r), et = null);
      }));
    }
    function st(t) {
      F(t)(t.options.delegateTo || t.containerEl, ("onwheel" in window) || document.implementation.hasFeature("Events.wheel", "3.0") ? "wheel" : "mousewheel", function (e) {
        var n = (function (t) {
          if (("deltaX" in t)) {
            var e = pt(t.deltaMode);
            return {
              x: t.deltaX / ft.STANDARD * e,
              y: t.deltaY / ft.STANDARD * e
            };
          }
          return ("wheelDeltaX" in t) ? {
            x: t.wheelDeltaX / ft.OTHERS,
            y: t.wheelDeltaY / ft.OTHERS
          } : {
            x: 0,
            y: t.wheelDelta / ft.OTHERS
          };
        })(e), r = n.x, o = n.y;
        t.addTransformableMomentum(r, o, e, function (t) {
          t && e.preventDefault();
        });
      });
    }
    (!(function (t) {
      (t[t.TAB = 9] = "TAB", t[t.SPACE = 32] = "SPACE", t[t.PAGE_UP = 33] = "PAGE_UP", t[t.PAGE_DOWN = 34] = "PAGE_DOWN", t[t.END = 35] = "END", t[t.HOME = 36] = "HOME", t[t.LEFT = 37] = "LEFT", t[t.UP = 38] = "UP", t[t.RIGHT = 39] = "RIGHT", t[t.DOWN = 40] = "DOWN");
    })(Z || (Z = {})), (function (t) {
      (t[t.X = 0] = "X", t[t.Y = 1] = "Y");
    })(tt || (tt = {})));
    var ft = {
      STANDARD: 1,
      OTHERS: -3
    }, lt = [1, 28, 500], pt = function (t) {
      return lt[t] || lt[0];
    }, ht = new Map(), dt = (function () {
      function t(t, e) {
        var n = this;
        (this.offset = {
          x: 0,
          y: 0
        }, this.limit = {
          x: 1 / 0,
          y: 1 / 0
        }, this.bounding = {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }, this._plugins = [], this._momentum = {
          x: 0,
          y: 0
        }, this._listeners = new Set(), this.containerEl = t);
        var r = this.contentEl = document.createElement("div");
        (this.options = new N(e), t.setAttribute("data-scrollbar", "true"), t.setAttribute("tabindex", "-1"), U(t, {
          overflow: "hidden",
          outline: "none"
        }), window.navigator.msPointerEnabled && (t.style.msTouchAction = "none"), r.className = "scroll-content", Array.from(t.childNodes).forEach(function (t) {
          r.appendChild(t);
        }), t.appendChild(r), this.track = new Q(this), this.size = this.getSize(), this._plugins = (function (t, e) {
          return Array.from(rt.order).filter(function (t) {
            return !1 !== e[t];
          }).map(function (n) {
            var r = new (0, rt.constructors[n])(t, e[n]);
            return (e[n] = r.options, r);
          });
        })(this, this.options.plugins));
        var o = t.scrollLeft, i = t.scrollTop;
        (t.scrollLeft = t.scrollTop = 0, this.setPosition(o, i, {
          withoutCallbacks: !0
        }));
        var u = window, c = u.MutationObserver || u.WebKitMutationObserver || u.MozMutationObserver;
        ("function" == typeof c && (this._observer = new c(function () {
          n.update();
        }), this._observer.observe(r, {
          subtree: !0,
          childList: !0
        })), ht.set(t, this), requestAnimationFrame(function () {
          n._init();
        }));
      }
      return (Object.defineProperty(t.prototype, "parent", {
        get: function () {
          for (var t = this.containerEl.parentElement; t; ) {
            var e = ht.get(t);
            if (e) return e;
            t = t.parentElement;
          }
          return null;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "scrollTop", {
        get: function () {
          return this.offset.y;
        },
        set: function (t) {
          this.setPosition(this.scrollLeft, t);
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "scrollLeft", {
        get: function () {
          return this.offset.x;
        },
        set: function (t) {
          this.setPosition(t, this.scrollTop);
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.getSize = function () {
        return (function (t) {
          var e = t.containerEl, n = t.contentEl;
          return {
            container: {
              width: e.clientWidth,
              height: e.clientHeight
            },
            content: {
              width: n.offsetWidth - n.clientWidth + n.scrollWidth,
              height: n.offsetHeight - n.clientHeight + n.scrollHeight
            }
          };
        })(this);
      }, t.prototype.update = function () {
        (!(function (t) {
          var e = t.getSize(), n = {
            x: Math.max(e.content.width - e.container.width, 0),
            y: Math.max(e.content.height - e.container.height, 0)
          }, r = t.containerEl.getBoundingClientRect(), o = {
            top: Math.max(r.top, 0),
            right: Math.min(r.right, window.innerWidth),
            bottom: Math.min(r.bottom, window.innerHeight),
            left: Math.max(r.left, 0)
          };
          (t.size = e, t.limit = n, t.bounding = o, t.track.update(), t.setPosition());
        })(this), this._plugins.forEach(function (t) {
          t.onUpdate();
        }));
      }, t.prototype.isVisible = function (t) {
        return (function (t, e) {
          var n = t.bounding, r = e.getBoundingClientRect(), o = Math.max(n.top, r.top), i = Math.max(n.left, r.left), u = Math.min(n.right, r.right);
          return o < Math.min(n.bottom, r.bottom) && i < u;
        })(this, t);
      }, t.prototype.setPosition = function (t, e, n) {
        var r = this;
        (void 0 === t && (t = this.offset.x), void 0 === e && (e = this.offset.y), void 0 === n && (n = {}));
        var o = (function (t, e, n) {
          var r = t.options, o = t.offset, u = t.limit, c = t.track, a = t.contentEl;
          return (r.renderByPixels && (e = Math.round(e), n = Math.round(n)), e = A(e, 0, u.x), n = A(n, 0, u.y), e !== o.x && c.xAxis.show(), n !== o.y && c.yAxis.show(), r.alwaysShowTracks || c.autoHideOnIdle(), e === o.x && n === o.y ? null : (o.x = e, o.y = n, U(a, {
            "-transform": "translate3d(" + -e + "px, " + -n + "px, 0)"
          }), c.update(), {
            offset: i({}, o),
            limit: i({}, u)
          }));
        })(this, t, e);
        o && !n.withoutCallbacks && this._listeners.forEach(function (t) {
          t.call(r, o);
        });
      }, t.prototype.scrollTo = function (t, e, n, r) {
        (void 0 === t && (t = this.offset.x), void 0 === e && (e = this.offset.y), void 0 === n && (n = 0), void 0 === r && (r = {}), (function (t, e, n, r, o) {
          void 0 === r && (r = 0);
          var i = void 0 === o ? {} : o, u = i.easing, c = void 0 === u ? J : u, a = i.callback, s = t.options, f = t.offset, l = t.limit;
          s.renderByPixels && (e = Math.round(e), n = Math.round(n));
          var p = f.x, h = f.y, d = A(e, 0, l.x) - p, v = A(n, 0, l.y) - h, y = Date.now();
          (cancelAnimationFrame($.get(t)), (function e() {
            var n = Date.now() - y, o = r ? c(Math.min(n / r, 1)) : 1;
            if ((t.setPosition(p + d * o, h + v * o), n >= r)) "function" == typeof a && a.call(t); else {
              var i = requestAnimationFrame(e);
              $.set(t, i);
            }
          })());
        })(this, t, e, n, r));
      }, t.prototype.scrollIntoView = function (t, e) {
        (void 0 === e && (e = {}), (function (t, e, n) {
          var r = void 0 === n ? {} : n, o = r.alignToTop, i = void 0 === o || o, u = r.onlyScrollIfNeeded, c = void 0 !== u && u, a = r.offsetTop, s = void 0 === a ? 0 : a, f = r.offsetLeft, l = void 0 === f ? 0 : f, p = r.offsetBottom, h = void 0 === p ? 0 : p, d = t.containerEl, v = t.bounding, y = t.offset, m = t.limit;
          if (e && d.contains(e)) {
            var g = e.getBoundingClientRect();
            if (!c || !t.isVisible(e)) {
              var b = i ? g.top - v.top - s : g.bottom - v.bottom + h;
              t.setMomentum(g.left - v.left - l, A(b, -y.y, m.y - y.y));
            }
          }
        })(this, t, e));
      }, t.prototype.addListener = function (t) {
        if ("function" != typeof t) throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");
        this._listeners.add(t);
      }, t.prototype.removeListener = function (t) {
        this._listeners.delete(t);
      }, t.prototype.addTransformableMomentum = function (t, e, n, r) {
        this._updateDebounced();
        var o = this._plugins.reduce(function (t, e) {
          return e.transformDelta(t, n) || t;
        }, {
          x: t,
          y: e
        }), i = !this._shouldPropagateMomentum(o.x, o.y);
        (i && this.addMomentum(o.x, o.y), r && r.call(this, i));
      }, t.prototype.addMomentum = function (t, e) {
        this.setMomentum(this._momentum.x + t, this._momentum.y + e);
      }, t.prototype.setMomentum = function (t, e) {
        (0 === this.limit.x && (t = 0), 0 === this.limit.y && (e = 0), this.options.renderByPixels && (t = Math.round(t), e = Math.round(e)), this._momentum.x = t, this._momentum.y = e);
      }, t.prototype.updatePluginOptions = function (t, e) {
        this._plugins.forEach(function (n) {
          n.name === t && Object.assign(n.options, e);
        });
      }, t.prototype.destroy = function () {
        var t = this.containerEl, e = this.contentEl;
        (!(function (t) {
          var e = C.get(t);
          e && (e.forEach(function (t) {
            var e = t.elem, n = t.eventName, r = t.handler;
            e.removeEventListener(n, r, R());
          }), C.delete(t));
        })(this), this._listeners.clear(), this.setMomentum(0, 0), cancelAnimationFrame(this._renderID), this._observer && this._observer.disconnect(), ht.delete(this.containerEl));
        for (var n = Array.from(e.childNodes); t.firstChild; ) t.removeChild(t.firstChild);
        (n.forEach(function (e) {
          t.appendChild(e);
        }), U(t, {
          overflow: ""
        }), t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, this._plugins.forEach(function (t) {
          t.onDestroy();
        }), this._plugins.length = 0);
      }, t.prototype._init = function () {
        var t = this;
        (this.update(), Object.keys(r).forEach(function (e) {
          r[e](t);
        }), this._plugins.forEach(function (t) {
          t.onInit();
        }), this._render());
      }, t.prototype._updateDebounced = function () {
        this.update();
      }, t.prototype._shouldPropagateMomentum = function (t, e) {
        (void 0 === t && (t = 0), void 0 === e && (e = 0));
        var n = this.options, r = this.offset, o = this.limit;
        if (!n.continuousScrolling) return !1;
        0 === o.x && 0 === o.y && this._updateDebounced();
        var i = A(t + r.x, 0, o.x), u = A(e + r.y, 0, o.y), c = !0;
        return (c = (c = c && i === r.x) && u === r.y) && (r.x === o.x || 0 === r.x || r.y === o.y || 0 === r.y);
      }, t.prototype._render = function () {
        var t = this._momentum;
        if (t.x || t.y) {
          var e = this._nextTick("x"), n = this._nextTick("y");
          (t.x = e.momentum, t.y = n.momentum, this.setPosition(e.position, n.position));
        }
        var r = i({}, this._momentum);
        (this._plugins.forEach(function (t) {
          t.onRender(r);
        }), this._renderID = requestAnimationFrame(this._render.bind(this)));
      }, t.prototype._nextTick = function (t) {
        var e = this.options, n = this.offset, r = this._momentum, o = n[t], i = r[t];
        if (Math.abs(i) <= .1) return {
          momentum: 0,
          position: o + i
        };
        var u = i * (1 - e.damping);
        return (e.renderByPixels && (u |= 0), {
          momentum: u,
          position: o + i - u
        });
      }, u([L(100, {
        leading: !0
      })], t.prototype, "_updateDebounced", null), t);
    })(), vt = "smooth-scrollbar-style", yt = !1;
    function mt() {
      if (!yt && "undefined" != typeof window) {
        var t = document.createElement("style");
        (t.id = vt, t.textContent = "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(222, 222, 222, .75);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n}\n", document.head && document.head.appendChild(t), yt = !0);
      }
    }
    n.d(e, "ScrollbarPlugin", function () {
      return nt;
    });
    /*!
    * cast `I.Scrollbar` to `Scrollbar` to avoid error
    *
    * `I.Scrollbar` is not assignable to `Scrollbar`:
    *     "privateProp" is missing in `I.Scrollbar`
    *
    * @see https://github.com/Microsoft/TypeScript/issues/2672
    */
    var gt = (function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return ((function (t, e) {
        function n() {
          this.constructor = t;
        }
        (o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n()));
      })(e, t), e.init = function (t, e) {
        if (!t || 1 !== t.nodeType) throw new TypeError("expect element to be DOM Element, but got " + t);
        return (mt(), ht.has(t) ? ht.get(t) : new dt(t, e));
      }, e.initAll = function (t) {
        return Array.from(document.querySelectorAll("[data-scrollbar]"), function (n) {
          return e.init(n, t);
        });
      }, e.has = function (t) {
        return ht.has(t);
      }, e.get = function (t) {
        return ht.get(t);
      }, e.getAll = function () {
        return Array.from(ht.values());
      }, e.destroy = function (t) {
        var e = ht.get(t);
        e && e.destroy();
      }, e.destroyAll = function () {
        ht.forEach(function (t) {
          t.destroy();
        });
      }, e.use = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return (function () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          t.forEach(function (t) {
            var e = t.pluginName;
            if (!e) throw new TypeError("plugin name is required");
            (rt.order.add(e), rt.constructors[e] = t);
          });
        }).apply(void 0, t);
      }, e.attachStyle = function () {
        return mt();
      }, e.detachStyle = function () {
        return (function () {
          if (yt && "undefined" != typeof window) {
            var t = document.getElementById(vt);
            t && t.parentNode && (t.parentNode.removeChild(t), yt = !1);
          }
        })();
      }, e.version = "8.6.2", e.ScrollbarPlugin = nt, e);
    })(dt);
    e.default = gt;
  }]).default;
});

},{}]},["1hFkf","XPJbz"], "XPJbz", "parcelRequirecfd7")

//# sourceMappingURL=index2.fd92a775.js.map
