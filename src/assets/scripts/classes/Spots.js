const BG_WIDTH = 900
const BG_HEIGHT = 2880

const X_1 = 700
const X_2 = 975
const X_3 = 1250
const DATA = [
    [X_1, -450, 'spot_1'],
    [X_2, -1120, 'spot_2'],
    [X_2, -2400, 'spot_1'],

    [X_2, -980, 'spot_2'],
    [X_1, -1260, 'spot_1'],
    [X_3, -2600, 'spot_2'],
    
    [X_1, -450, 'spot_2'],
    [X_3, -920, 'spot_1'],
    [X_3, -2600, 'spot_2'],

    [X_3, -410, 'spot_1'],
    [X_3, -1530, 'spot_2'],
    [X_1, -2090, 'spot_2'],

    [X_3, -550, 'spot_2'],
    [X_1, -800, 'spot_2'],
    [X_1, -2100, 'spot_1'],
]

const WIDTH = 1920
const HEIGHT = 1080

export default class Spots extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super(scene.physics.world, scene)
        this.scene = scene

        this.count_created = 0
        this.createFirstElements()

        this.scene.events.on("leave", ()=>{
            if (this.scene.count_created_scenes > 2 ) {
                // console.log("UPDATE ",this.scene.events.listenerCount("update"))
                // console.log("LEAVE ",this.scene.events.listenerCount("leave"))
                    if (this.count_created === 15) this.count_created = 0
                this.createSpot()
                this.createSpot()
                this.createSpot()
            }
        }, this)
    }
    createFirstElements() {
        let data_1 = DATA[0]
        let elem_1 = new Spot(this.scene, X_1, 500, 'spot_2')
        elem_1.move()
        this.add(elem_1)

        let data_2 = DATA[1]
        let elem_2 = new Spot(this.scene, X_2, -200, 'spot_1')
        elem_2.move()
        this.add(elem_2)

        let data_3 = DATA[2]
        let elem_3 = new Spot(this.scene, X_2, -1500, 'spot_2')
        elem_3.move()
        this.add(elem_3)

        let data_4 = DATA[3]
        let elem_4 = new Spot(this.scene, X_2, -3030, 'spot_1')
        elem_4.move()
        this.add(elem_4)

        let data_5 = DATA[4]
        let elem_5 = new Spot(this.scene, X_1, -3560, 'spot_2')
        elem_5.move()
        this.add(elem_5)

        let data_6 = DATA[5]
        let elem_6 = new Spot(this.scene, X_3, -4420, 'spot_1')
        elem_6.move()
        this.add(elem_6)

        this.count_created = 6
    }
    createSpot() {
        let data = DATA[this.count_created]
        let elem = this.getFirstDead()
        if (!elem) {
            console.log("!elem________")
            elem = new Spot(this.scene, data[0], data[1], data[2])
        } else {
            elem.reset(data[0], data[1], data[2])
        }
        this.count_created++
        }
    }


class Spot extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,texture) {
        super(scene, x, y, texture)
        this.scene.add.existing(this)
        this.scene.physics.add.existing(this)
        this.body.enable = true
        // this.setScale(2)
        this.init()
        // this.setOrigin(0.5)
        // this.scene.children.moveDown(this)
        this.alive_status = true
        // this.scene.children.bringToTop(this)
        this.scene.events.on('start', this.move, this)
    }
    init() {
        this.scene.events.on('update', this.update, this)
    }
    update(timestep, dt) {
        if (this.y > 1200 && this.alive_status){
            this.setAlive(false)
        } 
        this.y += this.velocityY
    }
    setAlive(status) {   
        this.alive_status = status
        this.body.enable = status  
        this.setVisible(status)
        this.setActive(status)
    }
    reset(x, y, sprite) {
        this.x = x
        this.y = y
        this.setTexture(sprite)
        this.setAlive(true)

        // this.scene.children.bringToTop(this)
        
    }
    move() {
        this.velocityY = this.scene.game_velocity
    }
}