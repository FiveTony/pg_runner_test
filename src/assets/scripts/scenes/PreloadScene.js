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
    this.scene.start("Start");
    // this.scene.start("Game", {hero:"musya"});
  }
  preloadAssets() {
    // this.load.setBaseURL(document.location.href);
    // this.load.setBaseURL(document.location.origin + document.location.pathname);

    this.load.audio("main_theme", "assets/sounds/main_theme.mp3");
    this.load.audio("get_positive", "assets/sounds/get_positive.mp3");
    this.load.audio("get_negative", "assets/sounds/get_negative.mp3");
    this.load.audio("get_negative_musya", "assets/sounds/get_negative_musya.mp3");
    this.load.audio("win", "assets/sounds/win.mp3");

    this.load.image("prompt1", "assets/sprites/prompt1.png");
    this.load.image("prompt3", "assets/sprites/prompt3.png");
    this.load.image("prompt5", "assets/sprites/prompt5.png");


    this.load.image("rita_button_hover", "assets/sprites/2version/StartScene/rita_button_hover.png");
    this.load.image("dima_button_hover", "assets/sprites/2version/StartScene/dima_button_hover.png");
    this.load.image("musya_button_hover", "assets/sprites/2version/StartScene/musya_button_hover.png");
    
    this.load.image("rita_button", "assets/sprites/2version/StartScene/rita_button.png");
    this.load.image("dima_button", "assets/sprites/2version/StartScene/dima_button.png");
    this.load.image("musya_button", "assets/sprites/2version/StartScene/musya_button.png");

    this.load.image("start", "assets/sprites/2version/start.png");


    this.load.image("musicOn", "assets/sprites/2version/musicOn.png");
    this.load.image("musicOff", "assets/sprites/2version/musicOff.png");



    this.load.image("border", "assets/sprites/2version/border.png");
    this.load.image("border2", "assets/sprites/2version/border2.png");
    this.load.image("room1", "assets/sprites/2version/room1.jpg");
    this.load.image("room2", "assets/sprites/2version/room2.jpg");
    this.load.image("room3", "assets/sprites/2version/room3.jpg");
    this.load.image("room4", "assets/sprites/2version/room4.jpg");
    this.load.image("room5", "assets/sprites/2version/room5.jpg");
    this.load.image("left_element", "assets/sprites/2version/left_element.jpg");
    this.load.image("right_element", "assets/sprites/2version/right_element.jpg");

    this.load.image("room1_1", "assets/sprites/2version/negative/1_1_2.png");
    this.load.image("room1_2", "assets/sprites/2version/negative/1_2_2.png");
    this.load.image("room1_3", "assets/sprites/2version/negative/1_3_2.png");

    this.load.image("room2_1", "assets/sprites/2version/negative/2_1_2.png");
    this.load.image("room2_2", "assets/sprites/2version/negative/2_2_2.png");
    this.load.image("room2_3", "assets/sprites/2version/negative/2_3_2.png");

    this.load.image("room3_1", "assets/sprites/2version/negative/3_1_2.png");
    this.load.image("room3_2", "assets/sprites/2version/negative/3_2_2.png");
    this.load.image("room3_3", "assets/sprites/2version/negative/3_3_2.png");

    this.load.image("room4_1", "assets/sprites/2version/negative/4_1_2.png");
    this.load.image("room4_2", "assets/sprites/2version/negative/4_2_2.png");
    this.load.image("room4_3", "assets/sprites/2version/negative/4_3_2.png");

    this.load.image("room5_1", "assets/sprites/2version/negative/5_1_2.png");
    this.load.image("room5_2", "assets/sprites/2version/negative/5_2_2.png");
    this.load.image("room5_3", "assets/sprites/2version/negative/5_3_2.png");

    this.load.image("spot_1", "assets/sprites/2version/positive/spot1_2.png");
    this.load.image("spot_2", "assets/sprites/2version/positive/spot2_2.png");

    this.load.image("coin", "assets/sprites/2version/positive/coin_2.png");

    this.load.image("positive1", "assets/sprites/2version/positive2/positive1.png");
    this.load.image("positive2", "assets/sprites/2version/positive2/positive2.png");
    this.load.image("positive3", "assets/sprites/2version/positive2/positive3.png");
    this.load.image("positive4", "assets/sprites/2version/positive2/positive4.png");
    this.load.image("positive5", "assets/sprites/2version/positive2/positive5.png");
    this.load.image("positive6", "assets/sprites/2version/positive2/positive6.png");
    this.load.image("positive7", "assets/sprites/2version/positive2/positive7.png");
    this.load.image("positive8", "assets/sprites/2version/positive2/positive8.png");
    this.load.image("positive9", "assets/sprites/2version/positive2/positive9.png");
    this.load.image("positive10", "assets/sprites/2version/positive2/positive10.png");
    // this.load.image("positive1", "assets/sprites/2version/positive/positive1.png");
    // this.load.image("positive2", "assets/sprites/2version/positive/positive2.png");
    // this.load.image("positive3", "assets/sprites/2version/positive/positive3.png");
    // this.load.image("positive4", "assets/sprites/2version/positive/positive4.png");
    // this.load.image("positive5", "assets/sprites/2version/positive/positive5.png");
    // this.load.image("positive6", "assets/sprites/2version/positive/positive6.png");
    // this.load.image("positive7", "assets/sprites/2version/positive/positive7.png");
    // this.load.image("positive8", "assets/sprites/2version/positive/positive8.png");
    // this.load.image("positive9", "assets/sprites/2version/positive/positive9.png");
    // this.load.image("positive10", "assets/sprites/2version/positive/positive10.png");
    // this.load.image("positive11", "assets/sprites/2version/positive/positive11.png");

    this.load.image("hp", "assets/sprites/2version/ui/hp.png");
    this.load.image("not_hp", "assets/sprites/2version/ui/not_hp.png");
    this.load.image("score_coin", "assets/sprites/2version/ui/score_coin.png");
    this.load.image("score_rectangle", "assets/sprites/2version/ui/score_rectangle.png");

    this.preloadStartScene()
    this.preloadPlayers()

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