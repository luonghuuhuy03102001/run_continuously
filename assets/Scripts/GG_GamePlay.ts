import { _decorator, Collider2D, Component, Contact2DType, find, IPhysics2DContact, Node, Prefab, RigidBody2D, v2 } from 'cc';
import { GG_Player } from './GG_Player';
import { GG_Ground } from './GG_Ground';
import { GG_InstanGround } from './GG_InstanGround';
const { ccclass, property } = _decorator;

@ccclass('GG_GamePlay')
export class GG_GamePlay extends Component {

    @property({ type: Node })
    public btnJumpUp: Node;

    @property({ type: Node })
    public btnJumpDown: Node;

    @property({ type: Node })
    public ground: Node;

    private _player;
    private _ground;

    protected start(): void {
    }
    
    protected update(dt: number): void {
        
    }

    protected onLoad(): void {
        
    }

    gg_btnJumpUp() {
        this._player = find("Canvas/GamePlay/Player");
        this._ground = find("Canvas/GamePlay/ground");
        this._player.getComponent(GG_Player).gg_btnJumpUp();
        this._ground.children[0].getComponent(GG_Ground).gg_Run();
    }

    gg_btnJumpDown() {
        this._player = find("Canvas/GamePlay/Player");
        this._player.getComponent(GG_Player).gg_btnJumpDown()
        this._player.getComponent(GG_Player).gg_cancelRun()
    }

    gg_delete() {
        this._ground = find("Canvas/GamePlay/ground");
        this._ground.getComponent(GG_InstanGround).gg_destroy();
        this._ground.getComponent(GG_InstanGround).gg_spawnItem();
        this._ground.children[1].getComponent(GG_Ground).gg_Run();
    }
}


