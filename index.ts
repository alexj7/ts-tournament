import { Player } from "./src/models/player.model";
import { PlayerIn } from "./src/types/player.interface";
import { PlayerController } from './src/controllers/player.controller';
import { Game } from './src/models/game.model';

const playerController = new PlayerController()

const player = playerController.create('alex')
const player2 = playerController.create('juan')

const game = new Game({ players: [player.id, player2.id], name: 'Juego de Campeonato' })

player.name = 'juan'
console.log("player name: ", player);
console.log("New game: ", game);


console.log(`luck of ${player.name}: ${player.lucky} on first game`);
console.log(`luck of ${player.name}: ${player.lucky} on second game`);
console.log(`luck of ${player.name}: ${player.lucky} onn third game`);
console.log(`luck of ${player.name}: ${player.lucky} onn fourth game`);
console.log(`luck of ${player.name}: ${player.lucky} onn fifth game`);
console.log(`luck of ${player.name}: ${player.lucky} onn sixth game`);
