const BG_WIDTH=900,BG_HEIGHT=2880,WIDTH=1920,HEIGHT=1080;export default class Room extends Phaser.GameObjects.Sprite{constructor(e,t,s,i){super(e,t,s,i),this.init(),this.setOrigin(1),this.leave_flag=!1,this.destroy_flag=!1,this.scene.children.sendToBack(this)}init(){this.scene.add.existing(this),this.scene.events.on("update",this.update,this),this.scene.events.on("start_game",this.move,this)}update(e,t){this.y>3959&&!this.destroy_flag?(this.setAlive(!1),this.destroy_flag=!this.destroy_flag):this.y>2874&&!this.leave_flag&&(this.scene.events.emit("leave"),this.leave_flag=!this.leave_flag),this.y+=this.velocityY}setAlive(e){this.setVisible(e),this.setActive(e)}reset(e){this.leave_flag=!1,this.destroy_flag=!1,this.x=1410,this.y=0,this.setAlive(!0),this.setTexture(e),this.scene.children.sendToBack(this)}move(){this.velocityY=this.scene.game_velocity}isDead(){return this.y>2879}isLeave(){return this.y>1799}}