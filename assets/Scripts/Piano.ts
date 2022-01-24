// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Piano extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    private keyString: string = "";
    private regularColorKey: cc.Color = null;

    start () {

    }

    public play(key: string){
        this.keyString = key;
        const currentKey = this.node.getChildByName("keyboard1").getChildByName(this.keyString);
        this.regularColorKey = currentKey.color;
        currentKey.color = cc.Color.GRAY;            
        currentKey.getComponent(cc.AudioSource).play();

    }
    public playKeyUp(){
        const currentKey = this.node.getChildByName("keyboard1").getChildByName(this.keyString);
        currentKey.color = this.regularColorKey;
        console.log("função playKeyUp funciona!")
    }
    public playBeat(){
        const beat = this.node.getChildByName("Beats").getComponent(cc.AudioSource);
        if(!beat.isPlaying){
            beat.play();
            console.log("beat on");
        }else{
            beat.pause();
            console.log("beat off");
        }
        
    }

    // update (dt) {}
}
