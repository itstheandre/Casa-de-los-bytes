# Casa-de-los-bytes

test
Ironhack P5 Game Project

# Introduction

During the third week of Ironhack Berlin's Summer Cohort, we were to create and deploy the first challenge. In this case, a game. We could choose between either DOM Manipulation or using P5.js library.
After some research, brainstorming I decided to create this game - Casa de los bytes.

# What is the game?

Inspired by Netflix show 'Casa de Papel' and other games from my youth, Casa de los bytes is a maze game.
The goal of the game is to go from the basement to the roof without getting caught by the security guards.

## Inspirations

If you've ever seen or played the former GameBoy or GameBoy Advance Pokemon games, then you will be able to fit right in. The basement was based out of a cave I remember playing. Not the exact cave, because I can't remember which one it is, but the idea is that you have multiple ways of going through each level without getting caught - but each one is harder and, therefore, riskier than the other.

![Example of the basement level](https://github.com/itstheandre/Casa-de-los-bytes/blob/master/assets/example/example.png)

# Technologies Used

The game is written in Javascript and using the P5js library. The characters and levels were custom designed to fit closely with the style intended.

# Approach

First steps of the game was to initially design the maze in paper. Coming from a 10x10 grid, and then figure out different ways to go through each level, thinking of walls and obstacles:

## GRID

Each level is a nested array with 10 other arrays in themn. 0s represent "walkable" space, whilst 1s represent walls. The 2 is supposed to trigger a new level. After this grid is written, there has to be way to render it according to the level, so the grid is drawn everytime always depending on the level and, therefore, it's position in the array.

## Player

The player is built with 2 properties that have to be created - it's position in the row and column. The player does not have a huge amount of functions. Mostly movement functions that define how it moves, where it can move, and what happens when it either is seen by a guard, or reaches a stair (2s in the grid). Reaching the stairs triggers a new level, getting caught, ends the game and forces you to start over.

![example of Player](https://github.com/itstheandre/Casa-de-los-bytes/blob/master/assets/characters/thief-still-front.png)

## Guard(s)

The guards are the real trouble makers in this game. There are guards on every level, each of them with its own properties. So the idea was to first create a guard Class and from that point on figure out movements, rotations, sizes, etc.
The guards have a different "size". Originally they were thought with the same size of the player - 100x100, but then I would have to figure out how to get a "field of view" to them. Creating a guard with a light already in the image turned out to be the easiest, most sensible solution for the time restraint.
Here, it is important to define this Object's dimensions, and it's action area, because it's important for whoever is playing the game to immediately know where the thief can go without getting caught.

![example of Guard](https://github.com/itstheandre/Casa-de-los-bytes/blob/master/assets/characters/light_guard/guard-right-light.png)

### GuardExtensions

Like I mentioned, there are different types of guards - there are 3:

1. Rotating guards:

- Guards that are always in the same spot, but every few frames turn either right or left in a continuos loop until the end of time.

2. Still guards:

- Guards that are just standing still. Ment to create a visual tip of where the player can go to. More of a corridor.

3. Moving guards:

- The hardest to create. Each has a position, a rotation, and a number of steps. These were extremely complicated to create, because of the continuos loop and the fact that, depedning on their amount of steps, they would have to call a specific a function _x_ number of times, before rotating and repeating. A "for loop" was not the way to go, for it's done too fast. The problem is that you need each function to be called on a specific frame rate, and not all of them at once.

# Unsolved Problems (to be updated on a later date)

The "Game Over" and "Congratulations" screens are extremely poor and must be improved;
On a future iteration, maybe create a new type of guard that can be just turning and moving on a set of 4 grid cells.
Improve the welcome screen, with better designed instructions and game board.

### Special Thanks

To the people that helped this game be live right now - the Ironhack teaching staff - [Montasar](https://github.com/mjarraya), [Svenja](https://github.com/Svemakawe), [Bruno](https://github.com/brudolce), [Min](https://github.com/angminsheng), and [Pierre](https://github.com/pierreportal) - the colleagues that gave me a hand either by brainstorming, or providing feedback, [Catarina Rosa](https://catarinarosa.co), for designing the levels and the characters and for [Tonnyy \*](https://www.youtube.com/channel/UCfKFtytQgZWBVNs4Q1Y9gFw) for letting me use the 8bit track in the game.
