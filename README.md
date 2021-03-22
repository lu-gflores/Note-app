# Node Notes App

## Description

A small note keeping app using Node.js that stores user's text in a json file

## How to use:

Once cloned, navigate to the repo via terminal and run the command `npm install` to install npm dependencies.
After dependencies are installed, run `node app.js` with any of the following commands:

| Command                                    | Description          |
| ------------------------------------------ | :------------------- |
| `add --title="My title" --body="Item one"` | add a new note       |
| `remove --title="My title"`                | delete a note        |
| `list`                                     | list all notes saved |
| `read --title="My title"`                  | read a note saved    |

- ex: `node app.js add --title="Shopping List" --body="Eggs, Bacon, Milk"` will create and update notes.json

run `node app.js --help` for reference

## npm packages used:

- [Node.js](https://nodejs.org/dist/latest-v14.x/docs/api/)
- [yargs](https://www.npmjs.com/package/yargs)
- [chalk](https://www.npmjs.com/package/chalk)
