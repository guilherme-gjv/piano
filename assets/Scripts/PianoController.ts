import Controller from "./Controller";
import Piano from "./Piano";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PianoController extends Controller {
    @property(Piano)
    public Piano: Piano = null;
    protected onKeyDown(event: cc.Event.EventKeyboard): void {
        switch(event.keyCode){
            case cc.macro.KEY.q:    //beat
                this.Piano.playBeat();
                break;
            case cc.macro.KEY.z:
                this.Piano.play("C");
                break;
            case cc.macro.KEY.x:
                this.Piano.play("D");
                break;
            case cc.macro.KEY.c:
                this.Piano.play("E");
                break;
            case cc.macro.KEY.v:
                this.Piano.play("F");
                break;
            case cc.macro.KEY.b:
                this.Piano.play("G");
                break;
            case cc.macro.KEY.n:
                this.Piano.play("A");
                break;
            case cc.macro.KEY.m:
                this.Piano.play("B");
                break;
            case cc.macro.KEY.s:
                this.Piano.play("C#");
                break;
            case cc.macro.KEY.d:
                this.Piano.play("D#");
                break;
            case cc.macro.KEY.g:
                this.Piano.play("F#");
                break;  
            case cc.macro.KEY.h:
                this.Piano.play("G#");
                break;
            case cc.macro.KEY.j:
                this.Piano.play("A#");
                break;
                //upper octave
            case cc.macro.KEY.r:
                this.Piano.play("C5");
                break;
            case cc.macro.KEY.t:
                this.Piano.play("D5");
                break;
            case cc.macro.KEY.y:
                this.Piano.play("E5");
                break;
            case cc.macro.KEY.u:
                this.Piano.play("F5");
                break;
            case cc.macro.KEY.i:
                this.Piano.play("G5");
                break;
            case cc.macro.KEY.o:
                this.Piano.play("A5");
                break;
            case cc.macro.KEY.p:
                this.Piano.play("B5");
                break;
            case cc.macro.KEY.num5:
                this.Piano.play("C#5");
                break;
            case cc.macro.KEY.num6:
                this.Piano.play("D#5");
                break;
            case cc.macro.KEY.num8:
                this.Piano.play("F#5");
                break;  
            case cc.macro.KEY.num9:
                this.Piano.play("G#5");
                break;
            case cc.macro.KEY.num0:
                this.Piano.play("A#5");
                break;
        }
    }
    protected onKeyUp(event: cc.Event.EventKeyboard): void {
        this.Piano.playKeyUp();
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}
}

