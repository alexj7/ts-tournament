import { PlayerIn } from "./player.interface";

export interface GameIn {
    id: string;
    name: string;
    date: string;
    players: PlayerIn['id'][];
}
