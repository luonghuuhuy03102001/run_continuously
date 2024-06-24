import { _decorator, Collider2D, Component, Contact2DType, EventTouch, IPhysics2DContact, Node, RigidBody, RigidBody2D, tween, v2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GG_Player')
export class GG_Player extends Component {

    public speed: number = 10;
    public jumpSpeedX: number = 16;
    public jumpSpeedY: number = -100;
    public rb;
    public isJumpUp: boolean = false;
    public collider;
    public moveDir: number;


    start() {

    }

    update(dt: number): void {
        this.rb.linearVelocity = v2(this.moveDir * this.speed, this.rb.linearVelocity.y);
    }

    onLoad() {
        this.rb = this.getComponent(RigidBody2D);
        this.collider = this.getComponent(Collider2D);
        this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }

    gg_btnJumpUp() {
        if (this.isJumpUp) {
            this.rb.linearVelocity = v2(this.rb.linearVelocity.x, this.jumpSpeedX);
            this.isJumpUp = false;
        }
    }

    gg_btnJumpDown() {
        this.rb.linearVelocity = v2(this.rb.linearVelocity.x, this.jumpSpeedY);
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (otherCollider.node.name === "groundBase") {
            this.isJumpUp = true;
            this.gg_btnJumpDown();
        }
    }

    // chạy
    gg_Run() {
        this.moveDir = 1;
    }

    // tắt hiệu ứng chạy
    gg_cancelRun() {
        this.moveDir = 0;
    }
}


