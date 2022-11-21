import { PlayerIn } from '../types/player.interface';
import { faker } from '@faker-js/faker';

export class Player implements PlayerIn {

  private _id: PlayerIn['id']
  private _name: PlayerIn['name']
  private _str: PlayerIn['str'];
  private _speed: PlayerIn['speed'];

  constructor({ name }: { name: PlayerIn['name'] }) {
    this._id = faker.datatype.uuid()
    this._name = name
    this._str = this.random({ min: 1, max: 10 })
    this._speed = this.random({ min: 1, max: 10 })
  }

  /** 
   * @param { public accesors } user_props
   * 
  */
  get id(): PlayerIn['id'] { return this._id; }

  get name(): PlayerIn['name'] { return this._name; }
  set name(_name: string) { this._name = _name; }

  get str(): PlayerIn['str'] { return this._str; }
  set str(_str: PlayerIn['str']) { this._str = _str; }

  get speed(): PlayerIn['speed'] { return this._speed; }
  set speed(_speed: PlayerIn['speed']) { this._speed = _speed; }

  get lucky(): number {
    return this.random({ min: 0.7, max: 1.3 })
  }

  /** 
  * @param { private methods } user_private_mnethods
  * 
  */
  private random = (props: { min: number, max: number }): number => {
    const { min, max } = props
    return Math.random() * (max - min) + min;
  }


  /** 
  * @param { public methods } user_public_mnethods 
  * 
  */
  public score = (): number => {
    return ((this.str + this.speed) * this.lucky) / 3
  }

}