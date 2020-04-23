# Node.js TypeScript Express Boilerplate

## Run scripts

`yarn start`

Starts the application in production mode

`yarn build:prod`

Builds the applcation in production mode. Excludes all source maps.

`yarn build:dev`

Builds the applcation in development mode. Includes source maps. If you are using VSCode you can attach to the running process to begin debugging.

`yarn dev`

Builds the applcation in development mode and enabled webpack HMR which will watch any changes while working. It's possible to attach to the running process to debug and the debugger shouldn't drop even when reloading the application.

## Tech stack

List of technologies that will be used to build out this project (likely subject to change).

### Server

- Express.js
  
### Data layer

- MongoDB
- Mongoose
  
### Testing suite

- Jest

### Aditional tools and technologies used

- Docker
- Typescript
- Webpack
