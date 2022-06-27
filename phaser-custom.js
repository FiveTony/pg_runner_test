import "./node_modules/phaser/src/polyfills/index.js"

import CONST from "./node_modules/phaser/src/const.js";
import Extend from "./node_modules/phaser/src/utils/object/Extend.js";

/**
 * @namespace Phaser
 */

var Phaser = {
  Cameras: {
    Scene2D: require(["./node_modules/phaser/src/cameras/2d/index.js"]),
  },
  Core: require("./node_modules/phaser/src/core"),
  Events: require("./node_modules/phaser/src/events/index"),
  Game: require("./node_modules/phaser/src/core/Game"),
  GameObjects: require("./node_modules/phaser/src/gameobjects"),
  Geom: require("./node_modules/phaser/src/geom"),
  Input: require("./node_modules/phaser/src/input"),
  Loader: {
    FileTypes: {
      AudioFile: require('./node_modules/phaser/src/loader/filetypes/AudioFile'),
      AudioSpriteFile: require('./node_modules/phaser/src/loader/filetypes/AudioSpriteFile'),
      AtlasJSONFile: require('./node_modules/phaser/src/loader/filetypes/AtlasJSONFile'),
      HTML5AudioFile: require('./node_modules/phaser/src/loader/filetypes/HTML5AudioFile'),
      ImageFile: require('./node_modules/phaser/src/loader/filetypes/ImageFile'),
      JSONFile: require('./node_modules/phaser/src/loader/filetypes/JSONFile'),
      PluginFile: require('./node_modules/phaser/src/loader/filetypes/PluginFile'),
      ScriptFile: require('./node_modules/phaser/src/loader/filetypes/ScriptFile'),
      SVGFile: require('./node_modules/phaser/src/loader/filetypes/SVGFile'),
    },
    File: require('./node_modules/phaser/src/loader/File'),
    FileTypesManager: require('./node_modules/phaser/src/loader/FileTypesManager'),
    LoaderPlugin: require('./node_modules/phaser/src/loader/LoaderPlugin'),
  },
  Math: {
    Between: require("./node_modules/phaser/src/math/Between"),
    FloatBetween: require("./node_modules/phaser/src/math/FloatBetween"),
    DegToRad: require("./node_modules/phaser/src/math/DegToRad")
  },
  DOM: require("./node_modules/phaser/src/dom"),
  Physics: require("./node_modules/phaser/src/physics"),
  Plugins: require("./node_modules/phaser/src/plugins"),
  Scene: require("./node_modules/phaser/src/scene/Scene"),
  Scenes: require("./node_modules/phaser/src/scene"),
  Scale: require("./node_modules/phaser/src/scale"),
  ScaleModes: require("./node_modules/phaser/src/renderer/ScaleModes"),
  Time: require("./node_modules/phaser/src/time"),
  Tweens: require("./node_modules/phaser/src/tweens"),
  Textures: require("./node_modules/phaser/src/textures"),
  Utils: require("./node_modules/phaser/src/utils"),
};

Phaser = Extend(false, Phaser, CONST);

export default Phaser;
global.Phaser = Phaser;
