const TEXT_STYLE={font:"50px Monserrat-Bold",fill:"#FFFFFF"},WIDTH=1920,HEIGHT=1080;export default class UI_elements{constructor(t,e,s){this.scene=t,this.score=e,this.hearts=s,this.createStats(),this.createHearts(),this.createSoundButtons()}createStats(){this.scene.add.sprite(678,69,"score_rectangle"),this.scene.add.sprite(622,68,"score_coin"),this.score_text=this.scene.add.text(690,42,`${this.score}`,TEXT_STYLE)}createHearts(){this.heart_1=this.scene.add.sprite(1126,66,"hp"),this.heart_2=this.scene.add.sprite(1216,66,"hp"),this.heart_3=this.scene.add.sprite(1308,66,"hp")}createSoundButtons(){this.sound=this.scene.add.sprite(1810,66,"musicOn").setInteractive()}}