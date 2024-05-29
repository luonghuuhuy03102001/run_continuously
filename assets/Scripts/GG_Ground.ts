import { _decorator, Component, director, Node, UITransform, Vec3, Canvas } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Ground')
export class Ground extends Component {

    @property({ type: Node })
    public ground1: Node;

    @property({ type: Node })
    public ground2: Node;

    @property({ type: Node })
    public ground3: Node;


    // Create ground with variables
    public groundWith1: number;
    public groundWith2: number;
    public groundWith3: number;

    public tempStartLocation1 = new Vec3;
    public tempStartLocation2 = new Vec3;
    public tempStartLocation3 = new Vec3;

    public gameSpeed: number;

    onLoad() {
        this.startUp();
    }

    startUp() {
        this.groundWith1 = this.ground1.getComponent(UITransform).width;
        this.groundWith2 = this.ground2.getComponent(UITransform).width;
        this.groundWith3 = this.ground3.getComponent(UITransform).width;

        this.tempStartLocation1.x = 0;
        this.tempStartLocation2.x = this.groundWith1;
        this.tempStartLocation3.x = this.groundWith1 + this.groundWith2;

        this.ground1.setPosition(this.tempStartLocation1);
        this.ground2.setPosition(this.tempStartLocation2);
        this.ground3.setPosition(this.tempStartLocation3);
    }

    update(deltaTime: number) {

        // console.log(deltaTime)
        this.gameSpeed = 200;
 
        this.tempStartLocation1 = this.ground1.position;
        this.tempStartLocation2 = this.ground2.position;
        this.tempStartLocation3 = this.ground3.position;

        // get the speed and subtract from x
        this.tempStartLocation1.x -= Math.floor(this.gameSpeed * 0.05);
        this.tempStartLocation2.x -= Math.floor(this.gameSpeed * 0.05);
        this.tempStartLocation3.x -= Math.floor(this.gameSpeed * 0.05);

        const scene = director.getScene();
        const canvas = scene.getComponentInChildren(Canvas);

        if(this.tempStartLocation1.x < (10 - this.groundWith1)) {
            this.tempStartLocation1.x = canvas.getComponent(UITransform).width;
        }

        if(this.tempStartLocation2.x < (10 - this.groundWith2)) {
            this.tempStartLocation2.x = canvas.getComponent(UITransform).width;
        }

        if(this.tempStartLocation3.x < (10 - this.groundWith3)) {
            this.tempStartLocation3.x = canvas.getComponent(UITransform).width;
        }

        this.ground1.setPosition(this.tempStartLocation1);
        this.ground2.setPosition(this.tempStartLocation2);
        this.ground3.setPosition(this.tempStartLocation3);
    }
}


