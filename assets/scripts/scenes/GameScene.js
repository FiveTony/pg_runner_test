import Borders from"@assets/scripts/classes/Borders";import Coins from"@assets/scripts/classes/Coins";import Negative from"@assets/scripts/classes/Negative";import Player from"@assets/scripts/classes/Player";import Positive from"@assets/scripts/classes/Positive";import Rooms from"@assets/scripts/classes/Rooms";import Spots from"@assets/scripts/classes/Spots";import UI_elements from"@assets/scripts/classes/UI_elements";import{popupShow}from"../../../js/files/game.js";const WIDTH=1920,HEIGHT=1080,GAME_VELOCITY=4.5,SCORE_SPOT=3,SCORE_COIN=1,SCORE_POSITIVE=5;export default class GameScene extends Phaser.Scene{constructor(){super("Game"),console.log("GameScene")}init(e){this.room_num=1,this.score=0,this.hearts=3,this.hero=e.hero,this.mute=!1,this.prompt1_flag=!0,this.prompt3_flag=!0,this.prompt5_flag=!0,this.count_created_scenes=0}create(){this.game_velocity=0;new Rooms(this);this.player=new Player(this,960,840,`player_${this.hero}_1`,{playerScale:.7,hero:this.hero}),this.start_button=this.add.sprite(960,640,"start").setInteractive().on("pointerdown",(()=>{this.player.play("player_animation"),this.createTouch(),this.game_velocity=4.5,this.events.emit("start_game"),this.events.removeAllListeners("start_game"),this.start_button.destroy()})),this.left_element=this.add.tileSprite(0,0,510,1080,"left_element").setOrigin(0),this.right_element=this.add.tileSprite(1410,0,0,1080,"right_element").setOrigin(0),this.border=new Borders(this),this.negative=new Negative(this),this.positive=new Positive(this),this.spots=new Spots(this),this.coins=new Coins(this),this.ui=new UI_elements(this,0,3),this.createSounds(),this.addOverlap(),this.onMusic()}update(e,t){this.left_element.tilePositionY-=this.game_velocity,this.right_element.tilePositionY-=this.game_velocity}addOverlap(){this.physics.add.overlap([this.border,this.negative],this.player,this.onNegativeOverlap,void 0,this),this.physics.add.overlap(this.positive,this.player,this.onPositiveOverlap,void 0,this),this.physics.add.overlap(this.coins,this.player,this.onCoinsOverlap,void 0,this),this.physics.add.overlap(this.spots,this.player,this.onSpotsOverlap,void 0,this)}onNegativeOverlap(e,t){t.body.enable=!1,this.cameras.main.shake(500,.005),this.mute||("musya"===this.hero?this.get_negative_musya.play():this.get_negative.play()),this.tweens.add({targets:e,alpha:.1,repeat:1,ease:"Power2",yoyo:!0,duration:250,onComplete:function(){e.alpha=1}}),this.tweens.add({targets:t,alpha:{from:1,to:0},ease:"Power2",duration:350,onComplete:function(){t.setAlive(!1),t.alpha=1}}),3===this.hearts?(this.tweens.add({targets:this.ui.heart_1,scale:{from:1,to:2},alpha:{from:1,to:0},ease:"Power2",duration:450,onComplete:()=>{this.ui.heart_1.setTexture("not_hp"),this.ui.heart_1.alpha=1,this.ui.heart_1.scale=1}}),this.hearts--):2===this.hearts?(this.tweens.add({targets:this.ui.heart_2,scale:{from:1,to:2},alpha:{from:1,to:0},ease:"Power2",duration:450,onComplete:()=>{this.ui.heart_2.setTexture("not_hp"),this.ui.heart_2.alpha=1,this.ui.heart_2.scale=1}}),this.hearts--):1===this.hearts&&(this.tweens.add({targets:this.ui.heart_3,scale:{from:1,to:2},alpha:{from:1,to:0},ease:"Power2",duration:450,onComplete:()=>{this.ui.heart_3.setTexture("not_hp"),this.scene.pause();const e=document.querySelector("[restart-game]");popupShow("#attempts",this.score);const t=()=>{console.log(this.game.scene.getScene("Start"),this.game.scene.getScenes()),this.scene.start("Start"),this.scene.remove("Game"),e.removeEventListener("click",t)};e.addEventListener("click",t)}}),this.hearts--)}onPositiveOverlap(e,t){this.mute||this.get_positive.play(),t.body.enable=!1,this.prompt5_flag&&(this.createPrompt(5,t.x,t.y),this.prompt5_flag=!1),this.tweens.add({targets:t,scale:{from:.6,to:1.2},alpha:{from:1,to:.8},ease:"Power2",duration:900,onComplete:()=>{t.setAlive(!1),t.alpha=1,t.scale=.6}}),this.score+=5,this.ui.score_text.setText(`${this.score}`)}onCoinsOverlap(e,t){this.mute||this.get_positive.play(),t.body.enable=!1,this.prompt1_flag&&(this.createPrompt(1,t.x,t.y),this.prompt1_flag=!1),this.tweens.add({targets:t,scale:{from:1,to:2},alpha:{from:1,to:0},ease:"Power2",duration:500,onComplete:function(){t.setAlive(!1),t.alpha=1,t.scale=1}}),this.score+=1,this.ui.score_text.setText(`${this.score}`)}onSpotsOverlap(e,t){this.mute||this.get_positive.play(),t.body.enable=!1,this.prompt3_flag&&(this.createPrompt(3,t.x,t.y),this.prompt3_flag=!1),this.tweens.add({targets:t,scale:{from:1,to:2},alpha:{from:1,to:0},ease:"Power2",duration:500,onComplete:function(){t.setAlive(!1),t.alpha=1,t.scale=1}}),this.score+=3,this.ui.score_text.setText(`${this.score}`)}muteMusic(){this.mute?this.scene.get("Preload").main_theme.pause():this.scene.get("Preload").main_theme.resume()}createSounds(){this.get_positive=this.sound.add("get_positive",{mute:!1,volume:.2,rate:1,detune:0,seek:0,delay:0}),this.get_negative=this.sound.add("get_negative",{mute:!1,volume:.2,rate:1,detune:0,seek:0,delay:0}),this.get_negative_musya=this.sound.add("get_negative_musya",{mute:!1,volume:.2,rate:1,detune:0,seek:0,delay:0}),this.win=this.sound.add("win",{mute:!1,volume:.2,rate:1,detune:0,seek:0,delay:0})}onMusic(){this.ui.sound.on("pointerdown",(()=>{0==this.mute?(this.ui.sound.setTexture("musicOff"),this.mute=!0,this.muteMusic()):(this.ui.sound.setTexture("musicOn"),this.mute=!1,this.muteMusic())}))}createTouch(){this.add.container(0,0).setInteractive(new Phaser.Geom.Rectangle(0,100,960,1080),Phaser.Geom.Rectangle.Contains).on("pointerdown",(()=>this.player.leftMove())),this.add.container(0,0).setInteractive(new Phaser.Geom.Rectangle(960,100,1920,1080),Phaser.Geom.Rectangle.Contains).on("pointerdown",(()=>this.player.rightMove()))}createPrompt(e,t,s){let i=this.add.sprite(t,s,`prompt${e}`);this.tweens.add({targets:i,alpha:{from:1,to:0},ease:"Power2",duration:1800,onComplete:()=>{i.destroy()}})}}