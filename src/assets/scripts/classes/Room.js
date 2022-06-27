const BG_WIDTH = 900    
const BG_HEIGHT = 2880

const WIDTH = 1920
const HEIGHT = 1080

export default class Room extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,texture) {
        super(scene, x, y, texture)
        this.init()
        this.setOrigin(1)

        this.leave_flag = false
        this.destroy_flag = false
        this.scene.children.sendToBack(this)
    }
    init() {
        this.scene.add.existing(this)
        this.scene.events.on('update', this.update, this)
        this.scene.events.on('start', this.move, this)
    }
    update(timestep, dt) {
        if (this.y > BG_HEIGHT - 1 + HEIGHT && (!this.destroy_flag)) {
            this.setAlive(false)
            this.destroy_flag = !this.destroy_flag
        } else if ((this.y > BG_HEIGHT - 6) && (!this.leave_flag)) {
            this.scene.events.emit("leave")
            this.leave_flag = !this.leave_flag
        } 
        
        this.y += this.velocityY
    }
    setAlive(status) {     
        this.setVisible(status)
        this.setActive(status)
    }
    reset(room_sprite) {
        this.leave_flag = false
        this.destroy_flag = false
        this.x = WIDTH / 2 + BG_WIDTH / 2
        this.y = 0
        this.setAlive(true)
        this.setTexture(room_sprite)
        this.scene.children.sendToBack(this)
    }
    move() {
        console.log("MOVE()")
        this.velocityY = this.scene.game_velocity
    }
    isDead() {
        return this.y > BG_HEIGHT - 1
    }
    isLeave() {
        return this.y > BG_HEIGHT - 1 - HEIGHT
    }
}