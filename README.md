# The GrapeVine 🍇

## Jacqueline Cope & Nga Dang

🌟 Deployed App: https://thegrapevine.netlify.app/

🖥 Client Repo: https://github.com/TheGrapeVineCo/client

🖥 Server Repo: https://github.com/TheGrapeVineCo/Server

📖 Documentation Repo: https://github.com/TheGrapeVineCo/The-GrapeVine-Docs

The GrapeVine is a site that aims to bring people together on a dedicated platform where they can share their love of Australian wine and learn a tip or two along the way. This benefits the community of wine consumers at all levels to then be able to try recommended wines by those who have shared and contributed within the community. The application has been built with React and Rails and deployed with Netlify and Heroku.

## Installation Instructions

To use the production app, please visit https://thegrapevine.netlify.app/ and signup to get started. Alternatively, to use the app locally, please follow the below instructions.

**Requirements:**

Rails 6.1.6
Ruby 3.0.2

After cloning the repository locally and moving into `The GrapeVine` root directory:

_Server_

- Install required dependencies with `$ bundle install`
- Create the databases with `$ rails db:create` (this is a Postgresql database)
- Migrate the databases with `$ rails db:migrate`
- Seed the database with `$ rails db:seed`
- To start the server run `$ rails s`
- If the server and client are running simultaneously in a local environment this will display in the client browser http://localhost:3000

_Client_

- Install npm packages with `$ npm install` or `$ yarn install`
- From the CLI run `$ npm start` or `$ yarn start` to start the local client server
- A browser window will open following this prompt
- When in development mode the server will run at http://localhost:3000

## Testing

The application has been tested in Chrome on MacOS Monterey 12.5

## Client Libraries & Dependencies Implemented

- **React ^18.2.0** - A JavaScript library for building UI components. This is known as the view layer and maintains what users see and interact with.
- **ReactDOM ^18.2.0** - The ReactDOM library provides special methods that bind react to the DOM. This provides the ability to render react elements to the DOM.
- **React-router-dom ^6.3.0** - Provides dynamic web application routing that contains DOM bindings on a SPA.
- **Jest** - Although `Create-React-App` does include Jest out of the box, the app has been installed due to testing issues related to React Bootstrap. Jest is a testing framework built on Javascript that provides a testing framework for React applications.
- **Axios ^0.27.2** - Axios is a JavaScript library that facilitates HTTP requests to the server from the client. It has been implemented to provide a connection to the server in a safe and efficient manner.
- **React Bootstrap ^2.4.0** - Built specifically for React, Bootstrap is a component-based library that provides Bootstrap components as React components. This in turn provide a more intuitive and user friendly UX.
- **Autoprefixer ^10.4.5** - Autoprefixer assists in parsing CSS files by adding vendor prefixes to CSS rules.
- **Node-sass ^7.0.1** - This library binds Node.js to Sass, allowing us to compile SCSS files to CSS.
