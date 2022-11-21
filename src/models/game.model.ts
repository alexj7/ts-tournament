import { faker } from "@faker-js/faker";
import { GameIn } from "../types/game.interface";
import { PlayerIn } from './../types/player.interface';
import dayjs from "dayjs";

export class Game implements GameIn {

    private _id: GameIn['id'];
    private _name: GameIn['name'];
    private _date: Date;
    private _players: PlayerIn['id'][];

    constructor({ players, name }: { players: PlayerIn['id'][], name: GameIn['name'] }) {
        this._id = faker.datatype.uuid()
        this._name = name
        this._date = new Date();
        this._players = players
    }

    /** 
     * @param { public accesors } user_props
     * 
    */
    get id(): GameIn['id'] { return this._id; }

    get name(): GameIn['name'] { return this._name; }
    set name(_name: GameIn['name']) { this._name = _name }

    get players(): PlayerIn['id'][] { return this._players; }

    get date(): string { return dayjs(this._date).format('dd[.] DD MMM[,] YYYY - hh:mm a'); }

    /** 
     * @param { private methods } game_private_mnethods
     * 
     */
    private initGame = (): PlayerIn['id'] => {

        const [player1, player2] = this._players

        const _gamesSets = []
        // for (const x of Array(3).keys()) {
        //     if (player1. > )
        // }

        return player1
    }

}