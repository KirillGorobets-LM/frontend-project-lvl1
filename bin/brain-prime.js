#!/usr/bin/env node
import { gameEngine } from '../src/index.js';
import { rules, question, correctAnswer } from '../games/prime-game.js';
import { greeting } from '../src/cli.js';

const nameOfUser = greeting();
rules();
gameEngine(question, correctAnswer, nameOfUser);
