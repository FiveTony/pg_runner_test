export default class LoadingBar {
    constructor(scene) {
        this.scene = scene

        this.style = {
            boxColor: 0x595DCC,
            barColor: 0xFFF85B,
            x: 80,
            y: 408,
            width: 320,
            height: 30
        }

        this.createText()

        this.progressBox = this.scene.add.graphics()
        this.progressBar1 = this.scene.add.graphics()
        this.progressBar2 = this.scene.add.graphics()

        this.showProgressBox()
        this.setEvents()
    }

    setEvents() {
        this.scene.load.on('progress', this.showProgressBar, this)
        // this.scene.load.on('fileprogress', this.onFileProgress, this)
        this.scene.load.on('complete', this.onLoadComplete, this)
    }

    showProgressBox() {
        this.progressBox
            .fillStyle(0x2D2756)
            .lineGradientStyle(22, 0x195DCC, 0x195DCC, 0x7266EF, 0x7266EF)
            .strokeRoundedRect(this.style.x, this.style.y, this.style.width, this.style.height, 1)
            .fillRoundedRect(this.style.x, this.style.y, this.style.width, this.style.height, 10)
    }
    showProgressBar(value) {
        this.progressBar1
            .clear()
            .fillStyle(0xF6BB03, 1)
            .fillRoundedRect(this.style.x, this.style.y + 10, this.style.width * value, this.style.height - 10, 4)

        this.progressBar2
            .clear()
            .fillStyle(0xFFF85B, 1)
            .fillRoundedRect(this.style.x, this.style.y, this.style.width * value, this.style.height - 10, 4)
    }
    onLoadComplete() {
        this.progressBar1.destroy()
        this.progressBar2.destroy()
        this.progressBox.destroy()
        this.playText.destroy()
    }
    createText() {
        this.playText = this.scene.add.text(this.scene.game.config.width / 2, 342, 'Подождите...', {
            font: '32px BalsamiqSans'
        }).setOrigin(0.5).setTint(0xFAFF00, 0xFAFF00, 0xFFC700, 0xFFC700)
    }
}