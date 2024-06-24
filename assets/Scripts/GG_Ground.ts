import { _decorator, Component, RigidBody2D, Collider2D, v2, IPhysics2DContact, Contact2DType, Prefab, instantiate, find, tween, v3, Vec3 } from 'cc';
import { GG_InstanGround } from './GG_InstanGround';
import { GG_GamePlay } from './GG_GamePlay';
const { ccclass, property } = _decorator;

@ccclass('GG_Ground')
export class GG_Ground extends Component {

    public speed: number = 10;
    public rb;
    public moveDir: number;
    public collider;

    private _ground;
    private _gamePlay;

    onLoad() {
        this.rb = this.getComponent(RigidBody2D);
        this.collider = this.getComponent(Collider2D);
        this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }

    update(dt: number): void {
        // this.rb.linearVelocity = v2(this.moveDir * this.speed, this.rb.linearVelocity.y);
    }

    protected start(): void {
        
    }

    // chạy
    gg_Run() {
        tween()
            .target(this.node)
            .to(5, { position: new Vec3(-1707, 0, 0) }, { easing: "linear" })
            .call(() => {
                this._gamePlay = find("Canvas/GamePlay");
                this._gamePlay.getComponent(GG_GamePlay).gg_delete();
            })
            .start()
    }

    // tắt hiệu ứng chạy
    gg_cancelRun() {
        this.moveDir = 0;
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {

    }

    gg_createGround() {
        this.node.setPosition(0, 0);
    }
}


