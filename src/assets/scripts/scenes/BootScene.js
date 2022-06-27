export default class BootScene extends Phaser.Scene {
    constructor() {
        super("Boot");
        console.log("BootScene")
    }
    preload() {
        // this.load.setBaseURL(document.location.href);
        this.load.setBaseURL(document.location.origin + document.location.pathname);
        // console.log(document.location) 

        this.load.image("circle", "assets/sprites/2version/PreloadScene/circle.png");
        this.load.image("pg_label", "assets/sprites/2version/PreloadScene/pg_label.png");
        this.load.image("pattern", "assets/sprites/2version/PreloadScene/pattern.png");

        this.load.audio("main_theme", "assets/sounds/main_theme.mp3");

    }
    create() {
        this.scene.start("Preload");
    }
}