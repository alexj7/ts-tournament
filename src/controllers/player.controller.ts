import { Player } from '../models/player.model';
import { BaseControllerIn } from '../types/base-controller.interface';
import { PlayerIn } from '../types/player.interface';
export class PlayerController implements BaseControllerIn<PlayerIn> {

    /** 
     * @prop { public accesor } data  
     * 
    */
    private _data: PlayerIn[] = []
    get data(): PlayerIn[] { return this._data }
    set data(_data: PlayerIn[]) { this._data = _data }


    getAll(): PlayerIn[] {
        return this.data
    }

    create(name: PlayerIn['name']): PlayerIn {
        const player = new Player({ name })
        this.data.push(player)

        return player
    }
}