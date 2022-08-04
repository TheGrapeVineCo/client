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

## Server Libraries & Dependencies

- **Rails ~>6.1.6** - Rails is a server-side fullstack application framework. It provides an out of the box structure for both the front and back end of a web application. For the purpose of this project, it has been used to facilitate the backend of the application.
- **Pg ~>1.1** - This is the Postgresql gem that is used for the database for the application. All data is maintained in postgres and data obtained through requests.
- **Puma ~>5.0** - Puma is a fast and easy to use HTTP server that is used by Rails. It is the default server for Rails to pass data to its delegated client.
- **Bootsnap >=1.4.4** - This is a library that is automatically installed with Rails. It is used to optimise and cache expensive computations.
- **Devise** - Provides complete MVC authentication for Rails applications. It provides a reliable, easy to implement and safe solution for authentication that is widely used across the Rails community.
- **Devise-jwt** - This gem expands from Devise, using JWT Tokens for user authentication. It assists in allowing users to signup, login and logout safely from the application.
- **Faker** - The Faker library provides a wide range of test data that can be used to populate a database. To reduce time spent writing out seed files, this gem has been used to populate users as well as comments.
- **Listen** - Listen is an out of the box gem that tracks and notifies whoever is subscribed of file modifications.
- **Spring** - The Spring preloader gem allows the application to be running in the background simultaneously as tje user makes changes to files. This is another out of the box gem that comes when installing Rails.
- **tzinfo-data** - This gem provides access to a time zone database which allows times to be converted using the rules that are in the gem.

## Client Libraries & Dependencies

- **Autoprefixer ^10.4.5** - Autoprefixer assists in parsing CSS files by adding vendor prefixes to CSS rules.
- **Axios ^0.27.2** - Axios is a JavaScript library that facilitates HTTP requests to the server from the client. It has been implemented to provide a connection to the server in a safe and efficient manner.
- **Bootstrap ^5.1.3** - Bootstrap is a collection of HTML, CSS abd JavaScript tools that is used to build sleek and intuitive user interfaces. Elements can be easily styled with the out of the box designs that allow a responsive web app environment.
- **Node-sass ^7.0.1** - This library binds Node.js to Sass, allowing us to compile SCSS files to CSS.
- **React ^18.2.0** - A JavaScript library for building UI components. This is known as the view layer and maintains what users see and interact with.
- **React-bootstrap ^2.4.0** - Built specifically for React, Bootstrap is a component-based library that provides Bootstrap components as React components. This in turn provide a more intuitive and user friendly UX.
- **React-dom ^18.2.0** - The ReactDOM library provides special methods that bind react to the DOM. This provides the ability to render react elements to the DOM.
- **React-router-dom ^6.3.0** - Provides dynamic web application routing that contains DOM bindings on a SPA.
- **React-scripts ^5.0.1** - Provided when installing `create-react-app` this dependency assists in setting up the development environment and starts a server and provides hot reloading functionality.
- **Jest** - Although `Create-React-App` does include Jest out of the box, the app has been installed due to testing issues related to React Bootstrap. Jest is a testing framework built on Javascript that provides a testing framework for React applications.
