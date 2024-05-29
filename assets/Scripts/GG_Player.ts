import { _decorator, Collider2D, Component, Contact2DType, EventTouch, IPhysics2DContact, Node, RigidBody, RigidBody2D, tween, v2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GG_Player')
export class GG_Player extends Component {

    public jumpSpeedX: number = 16;
    public jumpSpeedY: number = -100;
    public rb;
    public isJumpUp: boolean = false;
    public collider;


    start() {
       
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
        if (otherCollider.node.name === "Ground") {
            this.isJumpUp = true;
            this.gg_btnJumpDown();
        }
    }
}


