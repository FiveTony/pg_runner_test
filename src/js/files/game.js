import Phaser from "phaser";
import BootScene from "@assets/scripts/scenes/BootScene";
import PreloadScene from "@assets/scripts/scenes/PreloadScene";
// import StartScene from "@assets/scripts/scenes/StartScene";
// import GameScene from "@assets/scripts/scenes/GameScene";
import { Popup } from "@js/libs/popup.js";
import WebFont from '../../../node_modules/webfontloader/webfontloader.js'
import openFullscreen from "./fullscreen.js";

var scenes = [
    BootScene,
    PreloadScene,
    // StartScene,
    // GameScene,
];

var config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scene: scenes,

    // multiTexture: true,
    enableDebug: false,
    
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: { x: 0, y: 0 },
            debug: false,
        },
    },
    render: {
        antialias: true,
        antialiasGL: true,
        desynchronized: false,
        pixelArt: false,
        roundPixels: false,
        // transparent: false,
        clearBeforeRender: true,
        preserveDrawingBuffer: true,
        // premultipliedAlpha: true,
        // failIfMajorPerformanceCaveat: true,
        powerPreference: "high-performance", // 'high-performance', 'low-power' or 'default'
        batchSize: 4096,
        // maxLights: 10,
        maxTextures: -1,
        mipmapFilter: "LINEAR_MIPMAP_LINEAR", // 'NEAREST', 'LINEAR', 'NEAREST_MIPMAP_NEAREST', 'LINEAR_MIPMAP_NEAREST', 'NEAREST_MIPMAP_LINEAR', 'LINEAR_MIPMAP_LINEAR'
        // pipeline: []
    },
    fps: {
        min: 32,
        target: 42,
        forceSetTimeOut: false,
        deltaHistory: 320,
        panicMax: 600,
        smoothStep: true,
    },
    parent: "game", // чтобы игра была внутри div
};

export function startGame(e) {
    console.log("CLICK")
    e.preventDefault();

    const elem = document.documentElement

    // const main_landing = document.querySelector('[data-render-scene]');
    // main_landing.classList.add("hidden")
    var game = new Phaser.Game(config);
    openFullscreen(elem)
    document.querySelector('body').classList.add('remove-scroll');

    // var WebFont = require("webfontloader");

    // WebFont.load({
    //   custom: {
    //     families: ["Monserrat-Bold, Monserrat-Medium"],
    //     urls: ["@assets/styles/fonts.css"],
    //   },
    //   // google: {
    //   //   families: ['Montserrat:Bold']
    //   // },
    //   active: function () {
    //     console.log("FONTS")
    //     var game = new Phaser.Game(config);
    //   },
    // });
}

// - - - - - - - - - - 

// ! Close Popup
// Добавить атрибут ---- data-close
// Example:
// ? <button data-close>Close Popup</button>

// ! Open Popup
export function popupShow(namePopup, score) {
    let popup = new Popup();
    let popupCounter = document.querySelector(`${namePopup} .popup__counter`);
    popup.open(namePopup);
    popupCounter.innerHTML = score;
}
// popupShow('#attempts');
// --- #attempts - попытки остались
// --- #not-attempts - попыток не осталось
// --- #get-prize - получить приз