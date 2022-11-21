import { Player } from '../models/player.model';
import { PlayerIn } from '../types/player.interface';

export interface BaseController<T> {
    data: T[];
    getAll(): T[];
    create(prop: T<k>): T;
}

export class PlayerController implements BaseController<PlayerIn> {

    private data: PlayerIn[] = []

    getAll(): PlayerIn[] {
        return this.data
    }

    create(name: PlayerIn['name']): PlayerIn {
        const player = new Player({ name })
        this.data.push(player)

        return player
    }
}