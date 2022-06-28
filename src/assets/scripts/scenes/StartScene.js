const WIDTH = 1920
const HEIGHT = 1080

import GameScene from "./GameScene.js";

export default class StartScene extends Phaser.Scene {
  constructor() {
    super("Start");
    console.log("StartScene")
  }
  create() {
    this.createBackground();
    this.createCharacters()
  }
  createBackground() {
    this.add.graphics(0, 0, WIDTH, HEIGHT)
      .fillStyle(0x003DA6, 1)
      .fillRect(0, 0, WIDTH, HEIGHT);
    this.add.circle(220, HEIGHT / 2, 720, 0x00348E, 0.84 )

    this.add.text(WIDTH / 2, 110, "Выберите своего персонажа", {
      font: '80px Monserrat-Bold',
      fill: '#FFFFFF',
      align: 'center',  // 'left'|'center'|'right'|'justify'
      lineSpacing: 20,

  }).setOrigin(0.5)

  // this.add.bitmapText(WIDTH / 2, 235, 'Monserrat-Bold', "Выберите своего персонажа", 80).setOrigin(0.5)

  }
  createCharacters() {
    this.add.sprite(375, 240, "charactersChoose" ,"rita_label")
    this.rita_capture = this.add.sprite(370, 450, "charactersChoose" ,"rita_capture")
    this.rita_text = this.add.sprite(370, 730, "charactersChoose" ,"rita_text")
    this.rita_button = this.add.sprite(370, 910, "rita_button")
      .setInteractive()
      .on("pointerdown", () => {
        this.game.scene.add('Game', GameScene, true, {
          hero: "rita", 
          play_num: 1
        });
        this.scene.remove("Start")
      })
      .on(
        "pointermove",
        function (pointer, x, y, event) {
          this.rita_capture.scale = 1.2;
          this.rita_text.angle = 5
          this.rita_button.setTexture("rita_button_hover")
        }.bind(this)
      )
      .on(
        "pointerout",
        function (pointer, x, y, event) {
          this.rita_capture.scale = 1;
          this.rita_text.angle = 0
          this.rita_button.setTexture("rita_button")

        }.bind(this)
      );

    this.add.sprite(1920 / 2, 240, "charactersChoose" ,"dima_label")
    this.dima_capture = this.add.sprite(1920 / 2, 450, "charactersChoose" ,"dima_capture")
    this.dima_text = this.add.sprite(1920 / 2, 730, "charactersChoose" ,"dima_text")
    this.dima_button = this.add.sprite(1920 / 2, 910,"dima_button")
      .setInteractive()
      .on("pointerdown", () => {
        this.game.scene.add('Game', GameScene, true, {
          hero: "dima", 
          play_num: 1
        });
        this.scene.remove("Start")
      })
      .on(
        "pointermove",
        function (pointer, x, y, event) {
          this.dima_capture.scale = 1.2;
          this.dima_text.angle = 5
          this.dima_button.setTexture("dima_button_hover")
        }.bind(this)
      )
      .on(
        "pointerout",
        function (pointer, x, y, event) {
          this.dima_capture.scale = 1;
          this.dima_text.angle = 0
          this.dima_button.setTexture("dima_button")
        }.bind(this)
      );

    this.add.sprite(1920 - 370, 240, "charactersChoose" ,"musya_label")
    this.musya_capture = this.add.sprite(1920 - 370, 450, "charactersChoose" ,"musya_capture")
    this.musya_text = this.add.sprite(1920 - 370, 730, "charactersChoose" ,"musya_text")
    this.musya_button = this.add.sprite(1920 - 370, 910, "musya_button")
    .setInteractive()
    .on("pointerdown", () => {
        this.game.scene.add('Game', GameScene, true, {
          hero: "musya", 
          play_num: 1
        });
        this.scene.remove("Start")
      })
    .on(
      "pointermove",
      function (pointer, x, y, event) {
        this.musya_capture.scale = 1.2;
        this.musya_text.angle = 5
        this.musya_button.setTexture("musya_button_hover")
      }.bind(this)
    )
    .on(
      "pointerout",
      function (pointer, x, y, event) {
        this.musya_capture.scale = 1;
        this.musya_text.angle = 0
        this.musya_button.setTexture("musya_button")
      }.bind(this)
    );
  }
  createMusic() {
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
  }
}
