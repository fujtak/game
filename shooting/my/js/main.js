"use strict";

(() => {

const CANVAS_WIDTH = 640
const CANVAS_HEIGHT = 480

// --------------------------------------------------

let util = null
let canvas = null
let ctx = null

let image = null

// --------------------------------------------------

const initialize = () => {
  util = new Canvas2DUtility({canvas: document.getElementById('main-canvas')})
  canvas = util.canvas
  ctx = util.context
  canvas.width = CANVAS_WIDTH
  canvas.height = CANVAS_HEIGHT
}

const render = () => {
  util.drawRect({
    x: 0,
    y: 0,
    width: canvas.width,
    height: canvas.height,
    color: '#eee'
  })
  ctx.drawImage(image, 30, 30)
}

// --------------------------------------------------

window.addEventListener('load', () => {
  initialize()
  // コールバックで画像読み込みの非同期処理ハンドリング
  util.imageLoader({
    path: './image/viper.png',
    callback: (loadedImage) => {
      image = loadedImage
      render()
    }
  })
})

})()