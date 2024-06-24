import { _decorator, Component, Node, Prefab, instantiate, randomRangeInt, UITransform } from 'cc';
import { GG_Ground } from './GG_Ground';
const { ccclass, property } = _decorator;

@ccclass('GG_InstanGround')
export class GG_InstanGround extends Component {
    @property(Prefab)
    private gg_groundPF: Prefab = null!;

    start() {
        this.gg_spawnItem();
    }

    gg_destroy() {
        this.node.children[0].destroy();
    }

    gg_spawnItem() {
        let ground = instantiate(this.gg_groundPF);
        this.node.addChild(ground);
        ground.getComponent(GG_Ground).gg_createGround();
    }
}

