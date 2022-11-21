import { Player } from "./src/models/player.model";
import { PlayerIn } from "./src/types/player.interface";
import { PlayerController } from './src/controllers/player.controller';

const playerController = new PlayerController()

const player = playerController.create('alex')
const allPlayers = playerController.getAll()

player.name = 'juan'
console.log("player name: ", player);
console.log(`luck of ${player.name}: ${player.lucky} on first game`);
console.log(`luck of ${player.name}: ${player.lucky} on second game`);
console.log(`luck of ${player.name}: ${player.lucky} onn third game`);
console.log(`luck of ${player.name}: ${player.lucky} onn fourth game`);
console.log(`luck of ${player.name}: ${player.lucky} onn fifth game`);
console.log(`luck of ${player.name}: ${player.lucky} onn sixth game`);

console.log("all player: ", allPlayers);