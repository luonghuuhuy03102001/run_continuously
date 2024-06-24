import { _decorator, Component, Node, v3, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GG_Camera')
export class GG_Camera extends Component {
    @property({ type: Node })
    public target: Node;

    public damping: number = 10;
    start() {

    }

    update(deltaTime: number) {
        
    }

    lateUpdate (dt) {
        if (!this.target) {
            return;
        }

        let targetPos = this.target.position;
        let currentPos = this.node.position;

        let newPos = new Vec3(targetPos.x + 200, currentPos.y, currentPos.z);

        newPos = currentPos.lerp(newPos, this.damping * dt);

        this.node.position = newPos;
    }
}


