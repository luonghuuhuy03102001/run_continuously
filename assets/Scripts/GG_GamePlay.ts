import { _decorator, Component, find, Node } from 'cc';
import { GG_Player } from './GG_Player';
const { ccclass, property } = _decorator;

@ccclass('GG_GamePlay')
export class GG_GamePlay extends Component {

    @property({ type: Node })
    public btnJumpUp: Node;

    @property({ type: Node })
    public btnJumpDown: Node;

    private _player;

    onLoad() {
        
    }

    gg_btnJumpUp() {
        this._player = find("Canvas/GamePlay/Player");
        this._player.getComponent(GG_Player).gg_btnJumpUp()
    }

    gg_btnJumpDown() {
        this._player = find("Canvas/GamePlay/Player");
        this._player.getComponent(GG_Player).gg_btnJumpDown()
    }
}


