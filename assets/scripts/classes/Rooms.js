import Room from"@assets/scripts/classes/Room";const BG_WIDTH=900,BG_HEIGHT=2880,WIDTH=1920,HEIGHT=1080;export default class Rooms extends Phaser.Physics.Arcade.Group{constructor(e){super(e.physics.world,e),this.scene=e,this.countCreated=0,this.createFirstRoom(),this.scene.events.on("leave",(()=>{this.createSecondRoom()}),this)}createFirstRoom(){console.log("CREATEFIRSTROOM");let e=new Room(this.scene,1410,1080,"room1");this.add(e),e.move(),this.countCreated++,this.scene.room_num++,this.scene.count_created_scenes++}createSecondRoom(){console.log("CREATESECONDROOM");let e=this.getFirstDead();if(e){let o;5===this.scene.room_num?(o="room5",this.scene.room_num=0):o=2===this.scene.room_num?"room2":3===this.scene.room_num?"room3":4===this.scene.room_num?"room4":"room1",e.reset(o)}else e=new Room(this.scene,1410,0,"room2"),this.add(e);this.countCreated++,this.scene.room_num++,this.scene.count_created_scenes++,e.move()}}