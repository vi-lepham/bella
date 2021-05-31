import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import barba from "@barba/core"
import imagesLoaded from "imagesloaded"
import Scrollbar from "smooth-scrollbar"

gsap.registerPlugin(ScrollTrigger)

let bodyScrollBar

const select = (e) => document.querySelector(e)
const selectAll = (e) => document.querySelectorAll(e)

const sections = selectAll(".cv-column")

const loader = select(".a-loader")
const loaderInner = select(".a-loader .inner")
const progressBar = select(".a-loader .progress")
const loaderMask = select(".loader-mask")

// images loaded
function init() {
  // show loader on page load
  gsap.set(loader, { autoAlpha: 1 })

  // scale loader down
  gsap.set(loaderInner, { scaleY: 0.005, transformOrigin: "bottom" })

  // make a tween that scales the loader
  const progressTween = gsap.to(progressBar, {
    paused: true,
    scaleX: 0,
    ease: "none",
    transformOrigin: "right",
  })

  let loadedImageCount = 0,
    imageCount
  const container = select(".a-main")

  // setup Images loaded
  const preloadImages = imagesLoaded(container)
  imageCount = preloadImages.images.length

  // set the initial progress to 0
  updateProgress(0)

  // triggered after each item is loaded
  preloadImages.on("progress", function () {
    loadedImageCount++

    updateProgress(loadedImageCount)
  })

  // update the progress of progressBar tween
  function updateProgress(value) {
    gsap.to(progressTween, {
      progress: value / imageCount,
      duration: 0.3,
      ease: "power1.out",
    })
  }

  preloadImages.on("done", function (instance) {
    gsap.set(progressBar, { autoAlpha: 0, onComplete: initPageTransitions })
  })
}

init()

function pageTransitionIn({ container }) {
  // timeline to stretch the loader over the whole screen
  const tl = gsap.timeline({
    defaults: {
      duration: 0.8,
      ease: "power1.inOut",
    },
  })
  tl.set(loaderInner, { autoAlpha: 0 })
    .fromTo(loader, { yPercent: -100 }, { yPercent: 0 })
    .fromTo(loaderMask, { yPercent: 80 }, { yPercent: 0 }, 0)
    .to(container, { y: 150 }, 0)
  return tl
}

function pageTransitionOut({ container }) {
  // timeline to move loader away down
  const tl = gsap.timeline({
    defaults: {
      duration: 0.8,
      ease: "power1.inOut",
    },
    onComplete: () => initContent(),
  })
  tl.to(loader, { yPercent: 100 })
    .to(loaderMask, { yPercent: -80 }, 0)
    .from(container, { y: -150 }, 0)
  return tl
}

function initPageTransitions() {
  // do something before the transition starts
  barba.hooks.before(() => {
    select("html").classList.add("is-transitioning")
  })
  // do something after the transition finishes
  barba.hooks.after(() => {
    select("html").classList.remove("is-transitioning")
  })

  // scroll to the top of the page
  barba.hooks.enter(() => {
    window.scrollTo(0, 0)
  })

  barba.init({
    transitions: [
      {
        once() {
          // do something once on the initial page load
          initLoader()
        },
        async leave({ current }) {
          // animate loading screen in
          await pageTransitionIn(current)
        },
        enter({ next }) {
          // animate loading screen away
          pageTransitionOut(next)
        },
      },
    ],
  })
}

function initLoader() {
  const tlLoaderIn = gsap.timeline({
    id: "tlLoaderIn",
    defaults: {
      duration: 1.1,
      ease: "power2.out",
    },
    onComplete: () => initContent(),
  })

  const image = select(".loader-image img")
  const mask = select(".loader-image-mask")
  const line1 = select(".loader-title-mask:nth-child(1) span")
  const line2 = select(".loader-title-mask:nth-child(2) span")
  const lines = selectAll(".loader-title-mask")
  const loaderContent = select(".loader-content")

  tlLoaderIn
    .set(loaderContent, { autoAlpha: 1 })
    .to(loaderInner, {
      scaleY: 1,
      transformOrigin: "bottom",
      ease: "power1.inOut",
    })
    .addLabel("revealImage")
    .from(mask, { yPercent: 100 }, "revealImage-=0.6")
    .from(image, { yPercent: -80 }, "revealImage-=0.6")
    .from([line1, line2], { yPercent: 100, stagger: 0.1 }, "revealImage-=0.4")

  const tlLoaderOut = gsap.timeline({
    id: "tlLoaderOut",
    defaults: {
      duration: 1.2,
      ease: "power2.inOut",
    },
    delay: 1,
  })

  tlLoaderOut
    .to(lines, { yPercent: -500, stagger: 0.2 }, 0)
    .to([loader, loaderContent], { yPercent: -100 }, 0.2)
    .from(".a-main", { y: 150 }, 0.2)

  const tlLoader = gsap.timeline()
  tlLoader.add(tlLoaderIn).add(tlLoaderOut)
}

function initContent() {
  select("body").classList.remove("is-loading")
  initSmoothScrollbar()
  //initNavigation()
  initHeaderTilt()
  //initHoverReveal()
  initPortfolioHover()
  initImageParallax()
  initPinSteps()
  initScrollTo()
}

const updateBodyColor = (color) => {
  document.documentElement.style.setProperty("--bcg-fill-color", color)
}
const getTextHeight = (textCopy) => {
  return textCopy.clientHeight
}

// Smoooth Scrollbar
function initSmoothScrollbar() {
  bodyScrollBar = Scrollbar.init(select("#viewport"), { damping: 0.07 })

  // remove horizontal scrollbar
  bodyScrollBar.track.xAxis.element.remove()

  // keep ScrollTrigger in sync with Smooth Scrollbar
  ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value // setter
      }
      return bodyScrollBar.scrollTop // getter
    },
  })

  // when the smooth scroller updates, tell ScrollTrigger to update() too:
  bodyScrollBar.addListener(ScrollTrigger.update)
}

// Navigation Away - with updated trigger
function initNavigation() {
  const mainNavLinks = gsap.utils.toArray(".a-nav a")
  const mainNavLinksRev = gsap.utils.toArray(".a-nav a").reverse()

  mainNavLinks.forEach((link) => {
    link.addEventListener("mouseleave", (e) => {
      // add class
      link.classList.add("animate-out")
    })
    link.ontransitionend = function () {
      //remove class
      link.classList.remove("animate-out")
    }
  })

  function navAnimation(direction) {
    const scrollingDown = direction === 1
    const links = scrollingDown ? mainNavLinks : mainNavLinksRev
    return gsap.to(links, {
      duration: 0.3,
      stagger: 0.05,
      autoAlpha: () => (scrollingDown ? 0 : 1),
      y: () => (scrollingDown ? 20 : 0),
      ease: "power4.out",
    })
  }

  // updated trigger to .a-main instead of absolute 100
  ScrollTrigger.create({
    trigger: ".a-main",
    start: "top top-=100",
    end: "bottom bottom-=200",
    toggleClass: {
      targets: "body",
      className: "has-scrolled",
    },
    onEnter: ({ direction }) => navAnimation(direction),
    onLeaveBack: ({ direction }) => navAnimation(direction),
  })
}

// Header Tilt
function initHeaderTilt() {
  select("header").addEventListener("mousemove", moveImages)
}

function moveImages(e) {
  const { offsetX, offsetY, target } = e
  const { clientWidth, clientHeight } = target

  // get 0 0 in the center
  const xPos = offsetX / clientWidth - 0.5
  const yPos = offsetY / clientHeight - 0.5

  const leftImages = gsap.utils.toArray(".hg-left .hg-image")
  const rightImages = gsap.utils.toArray(".hg-right .hg-image")

  const modifier = (index) => index * 1.2 + 0.5

  // move left 3 images
  leftImages.forEach((image, index) => {
    gsap.to(image, {
      duration: 1.2,
      x: xPos * 20 * modifier(index),
      y: yPos * 30 * modifier(index),
      rotationY: xPos * 40,
      rotationX: yPos * 10,
      ease: "power3.out",
    })
  })

  // move right 3 images
  rightImages.forEach((image, index) => {
    gsap.to(image, {
      duration: 1.2,
      x: xPos * 20 * modifier(index),
      y: -yPos * 30 * modifier(index),
      rotationY: xPos * 40,
      rotationX: yPos * 10,
      ease: "power3.out",
    })
  })

  gsap.to(".decor-circle", {
    duration: 1.7,
    x: 100 * xPos,
    y: 120 * yPos,
    ease: "power4.out",
  })
}

// Core Values
function initHoverReveal() {
  sections.forEach((section) => {
    // get componenets for animation
    section.imageBlock = section.querySelector(".cv-image")
    section.image = section.querySelector(".cv-image img")
    section.mask = section.querySelector(".cv-image-mask")
    section.text = section.querySelector(".cv-text")
    section.textCopy = section.querySelector(".cv-text-copy")
    section.textMask = section.querySelector(".cv-text-mask")
    section.textP = section.querySelector(".cv-text-copy p")

    // reset the initial position
    gsap.set([section.imageBlock, section.textMask], { yPercent: -101 })
    gsap.set([section.mask, section.textP], { yPercent: 100 })
    gsap.set(section.image, { scale: 1.2 })

    // add event listeners to each section
    section.addEventListener("mouseenter", createHoverReveal)
    section.addEventListener("mouseleave", createHoverReveal)
  })
}

function createHoverReveal(e) {
  const { imageBlock, mask, text, textCopy, textMask, textP, image, dataset } =
    e.target

  const { color } = dataset

  let tl = gsap.timeline({
    defaults: {
      duration: 1.8,
      ease: "power4.out",
    },
  })

  if (e.type === "mouseenter") {
    tl.to([mask, imageBlock, textMask, textP], {
      yPercent: 0,
      onStart: () => updateBodyColor(color),
    })
      .to(text, { y: () => -getTextHeight(textCopy) / 2 }, 0)
      .to(image, { duration: 1.1, scale: 1 }, 0)
  } else if (e.type === "mouseleave") {
    tl.to([mask, textP], { yPercent: 100 })
      .to([imageBlock, textMask], { yPercent: -101 }, 0)
      .to(text, { y: 0 }, 0)
      .to(image, { scale: 1.2 }, 0)
  }

  return tl
}

// Portfolio Hover
function initPortfolioHover() {
  allLinks.forEach((link) => {
    link.addEventListener("mouseenter", createPortfolioHover)
    link.addEventListener("mouseleave", createPortfolioHover)
    link.addEventListener("mousemove", createPortfolioMove)
  })
}

const allLinks = gsap.utils.toArray(".portfolio-categories a")
const largeImage = select(".portfolio-image-l")
const smallImage = select(".portfolio-image-s")

function createPortfolioHover(e) {

  const lInside = select(".portfolio-image-l .image_inside")
  const sInside = select(".portfolio-image-s .image_inside")

  if (e.type === "mouseenter") {

    const { color, imagelarge, imagesmall } = e.target.dataset
    const allSiblings = allLinks.filter((item) => item !== e.target)
    const tl = gsap.timeline({
      onStart: () => updateBodyColor(color),
    })
    tl.set(lInside, { backgroundImage: `require(${imagelarge})` })
      .set(sInside, { backgroundImage: `require(${imagesmall})` })
      .to([largeImage, smallImage], { autoAlpha: 1 })
      .to(allSiblings, { color: "#fff", autoAlpha: 0.2 }, 0)
      .to(e.target, { color: "#fff", autoAlpha: 1 }, 0)

  } else if (e.type === "mouseleave") {

    const tl = gsap.timeline({
      onStart: () => updateBodyColor("#ACB7AE"),
    })
    tl.to([largeImage, smallImage], { autoAlpha: 0 }).to(
      allLinks,
      { color: "#fff", autoAlpha: 1 },
      0
    )
  }
}

function createPortfolioMove(e) {
  const { clientY } = e

  // move large image
  gsap.to(largeImage, {
    duration: 1.2,
    y: getPortfolioOffset(clientY) / 6,
    ease: "power3.out",
  })

  // move small image
  gsap.to(smallImage, {
    duration: 1.5,
    y: getPortfolioOffset(clientY) / 3,
    ease: "power3.out",
  })
}

function getPortfolioOffset(clientY) {
  return -(select(".portfolio-categories").clientHeight - clientY)
}

// Parallax Images
function initImageParallax() {
  // select all sections .with-parallax
  gsap.utils.toArray(".with-parallax").forEach((section) => {
    // get the image
    const image = section.querySelector("img")

    // create tween for the image
    gsap.to(image, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        scrub: true,
      },
    })
  })
}

// Fixed navigation
function initPinSteps() {
  ScrollTrigger.create({
    trigger: ".fixed-nav",
    start: "top center",
    endTrigger: "#stage4",
    end: "center center",
    pin: true,
    pinReparent: true,
  })

  const getVh = () => {
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    )
    return vh
  }

  gsap.utils.toArray(".stage").forEach((stage, index) => {
    const navLinks = gsap.utils.toArray(".fixed-nav li")

    ScrollTrigger.create({
      trigger: stage,
      start: "top center",
      end: () => `+=${stage.clientHeight + getVh() / 10}`,
      toggleClass: {
        targets: navLinks[index],
        className: "is-active",
      },
      onEnter: () => updateBodyColor(stage.dataset.color),
      onEnterBack: () => updateBodyColor(stage.dataset.color),
    })
  })
}

function initScrollTo() {
  // find all links and animate to the right position
  gsap.utils.toArray(".fixed-nav a").forEach((link) => {
    const target = link.getAttribute("href")

    link.addEventListener("click", (e) => {
      e.preventDefault()
      console.log(select(target))
      bodyScrollBar.scrollIntoView(select(target), {
        damping: 0.07,
        offsetTop: 100,
      })
    })
  })
}

// Media query
function handleWithChange(mq) {
  if (mq.matches) {

    removeHoverReveal()
    initMobileNavigation()

  } else {

    initHoverReveal()
    initNavigation()

  }
}

const mq = window.matchMedia("screen and (max-width: 480px)")

// first page load
handleWithChange(mq)

mq.addEventListener("change", handleWithChange(mq))

// reset all props
function resetProps(elements) {
  //stop all tweens
  gsap.killTweensOf("*")

  if (elements.length) {
    elements.forEach((el) => {
      el && gsap.set(el, { clearProps: "all" })
    })
  }
}

function removeHoverReveal() {
  sections.forEach((section) => {
    section.removeEventListener("mouseenter", createHoverReveal)
    section.removeEventListener("mouseleave", createHoverReveal)

    const {
      imageBlock,
      mask,
      text,
      textCopy,
      textMask,
      textP,
      image,
      dataset,
    } = section
    resetProps([
      imageBlock,
      mask,
      text,
      textCopy,
      textMask,
      textP,
      image,
      dataset,
    ])
  })
}

function initMobileNavigation() {

  ScrollTrigger.create({
    trigger: ".a-main",
    start: "top top-=100",
    end: "bottom bottom-=200",
    toggleClass: {
      targets: "body",
      className: "has-scrolled-mobile",
    },
  })

}

