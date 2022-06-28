import StartScene from "./StartScene.js";

const WIDTH = 1920
const HEIGHT = 1080

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super("Preload");
    console.log("PreloadScene")
  }
  preload() {
    this.main_theme = this.sound.add("main_theme", {
      mute: false,
      volume: 0.2,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0,
    });
    this.main_theme.play();   

    this.createElements()
    this.preloadAssets();
  }
  create() {
  this.game.scene.add('Start', StartScene, true);
  // this.scene.start("Start");
  }
  preloadAssets() {
    // this.load.setBaseURL(document.location.href);
    // this.load.setBaseURL(document.location.origin + document.location.pathname);

    // this.load.audio("main_theme", "assets/sounds/main_theme.mp3");
    this.load.audio("get_positive", "assets/sounds/get_positive.mp3");
    this.load.audio("get_negative", "assets/sounds/get_negative.mp3");
    this.load.audio("get_negative_musya", "assets/sounds/get_negative_musya.mp3");
    this.load.audio("win", "assets/sounds/win.mp3");


    // this.load.bitmapFont('Monserrat-Bold', 'assets/fonts/test.png', 'assets/fonts/test.xml');

    
    
    // this.load.image("start", "assets/sprites/2version/start.png");
    
    
    // this.load.image("musicOn", "assets/sprites/2version/musicOn.png");
    // this.load.image("musicOff", "assets/sprites/2version/musicOff.png");
    
    
    // this.load.image("hp", "assets/sprites/2version/ui/hp.png");
    // this.load.image("not_hp", "assets/sprites/2version/ui/not_hp.png");
    // this.load.image("score_coin", "assets/sprites/2version/ui/score_coin.png");
    // this.load.image("score_rectangle", "assets/sprites/2version/ui/score_rectangle.png");


    
    this.load.image("border", "assets/sprites/2version/border.png");

    this.load.atlas(
      "ui_spritesheet", "assets/sprites/2version/ui/ui_spritesheet.png", 
      "assets/sprites/2version/ui/ui_spritesheet.json");

    this.load.atlas(
      "prompts_spritesheet", "assets/sprites/2version/prompts_spritesheet.png", 
      "assets/sprites/2version/prompts_spritesheet.json");
    
      
    this.load.image("left_element", "assets/sprites/2version/left_element.jpg");
    this.load.image("right_element", "assets/sprites/2version/right_element.jpg");


    this.preloadStartScene()
    this.preloadPlayers()
    this.preloadRooms()
    this.preloadNegativePositive()

  }
  preloadPlayers() {
    this.load.image("player_rita_1", "assets/sprites/2version/player/player_rita_1.png");
    this.load.atlas(
      "player_rita", "assets/sprites/2version/player/player_rita.png", 
      "assets/sprites/2version/player/player_rita.json");

    this.load.image("player_musya_1", "assets/sprites/2version/player/player_musya_1.png");
    this.load.atlas(
      "player_musya", "assets/sprites/2version/player/player_musya.png", 
      "assets/sprites/2version/player/player_musya.json");

    this.load.image("player_dima_1", "assets/sprites/2version/player/player_dima_1.png");
    this.load.atlas(
      "player_dima", "assets/sprites/2version/player/player_dima.png", 
      "assets/sprites/2version/player/player_dima.json");
  }
  preloadStartScene() {
    this.load.atlas(
      "charactersChoose", "assets/sprites/2version/StartScene/charactersChoose.png", 
      "assets/sprites/2version/StartScene/charactersChoose.json");

    this.load.image("rita_button_hover", "assets/sprites/2version/StartScene/rita_button_hover.png");
    this.load.image("dima_button_hover", "assets/sprites/2version/StartScene/dima_button_hover.png");
    this.load.image("musya_button_hover", "assets/sprites/2version/StartScene/musya_button_hover.png");
    
    this.load.image("rita_button", "assets/sprites/2version/StartScene/rita_button.png");
    this.load.image("dima_button", "assets/sprites/2version/StartScene/dima_button.png");
    this.load.image("musya_button", "assets/sprites/2version/StartScene/musya_button.png");

  }
  preloadRooms() {
    this.load.image("room1", "assets/sprites/2version/rooms/room1.png");
    this.load.image("room2", "assets/sprites/2version/rooms/room2.png");
    this.load.image("room3", "assets/sprites/2version/rooms/room3.png");
    this.load.image("room4", "assets/sprites/2version/rooms/room4.png");
    this.load.image("room5", "assets/sprites/2version/rooms/room5.png");

    // this.load.atlas(
    //   "rooms", "assets/sprites/2version/rooms/rooms_spritesheet.png", 
    //   "assets/sprites/2version/rooms/rooms_spritesheet.json");
  }
  preloadNegativePositive() {
    this.load.atlas(
      "negative_spritesheet", "assets/sprites/2version/negative/negative_spritesheet.png", 
      "assets/sprites/2version/negative/negative_spritesheet.json");

    this.load.atlas(
      "positive_spritesheet", "assets/sprites/2version/positive/positive_spritesheet.png", 
      "assets/sprites/2version/positive/positive_spritesheet.json");
  }
  createElements() {
    this.add.graphics()
      .fillGradientStyle(0x062A67,0x062A67,0x1A499B, 0x1A499B, 1)
      .fillRect(0, 0, WIDTH, HEIGHT);

    this.add.text(WIDTH / 2, 235, "Подумайте о хорошем,\nпока ждёте 😊", {
        font: '76px Monserrat-Bold',
        fill: '#FFFFFF',
        align: 'center',  // 'left'|'center'|'right'|'justify'
        lineSpacing: 20,
      }).setOrigin(0.5)

    // this.add.bitmapText(WIDTH / 2, 235, 'Monserrat-Bold', "Подумайте о хорошем,\nпока ждёте 😊", 76, 'center').setOrigin(0.5)


    this.add.sprite(WIDTH / 2, 725 + 120, "pg_label")
    this.add.sprite(WIDTH / 2, HEIGHT / 2, "pattern")
    this.circle = this.add.sprite(WIDTH / 2, HEIGHT / 2, "circle")
    this.load.on('progress', ()=> {
      this.circle.angle += 1
    }, this)
    this.load.on('complete', ()=> {
      // this.circle.destroy()
      // this.load.removeAllListeners()
    }, this)
  }
}
