const TEXT_STYLE = {
    font: '50px Monserrat-Bold',
    fill: '#FFFFFF'
}

const WIDTH = 1920
const HEIGHT = 1080

export default class UI_elements {
    constructor(scene, score, hearts) {
        this.scene = scene
        this.score = score
        this.hearts = hearts
        this.createStats()
        this.createHearts()
        this.createSoundButtons()
    }
    createStats() {
        this.scene.add.sprite(678, 69, "ui_spritesheet", 'score_rectangle')
        this.scene.add.sprite(622, 68, "ui_spritesheet", 'score_coin')
        // this.score_text = this.scene.add.text(690, 42, `${this.score}`, TEXT_STYLE)
        this.score_text = this.scene.add.bitmapText(690, 42, 'Monserrat-Bold', `${this.score}`, 50)
    }
    createHearts() {
        this.heart_1 = this.scene.add.sprite(1126, 66, "ui_spritesheet", 'hp')
        this.heart_2 = this.scene.add.sprite(1216, 66, "ui_spritesheet", 'hp')
        this.heart_3 = this.scene.add.sprite(1308, 66, "ui_spritesheet", 'hp')
    }
    createSoundButtons() {
        this.sound = this.scene.add.sprite(WIDTH - 110, 66, "ui_spritesheet", 'musicOn').setInteractive()
    }

}