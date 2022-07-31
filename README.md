# 🚀 Examen Angular - Vueling Academy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14, [Other vesrions](#Versions-installed)
It has a complete development environment configured, including build, routing and routing history, simple components, services, models and internationalization.
This app is deployed on `Heroku` with Node and Express. Access now --> [a link](https://github.com/samu-hv)

## Table of Contents

- [Project structure](#project-structure)
- [Versions Installed](#versions-installed)
- [Code scaffolding](#code-scaffolding)
- [Scaffolding](#scaffolding)
- [Development server](#development-server)
- [Deploy on Heroku](#deploy-on-heroku)
- [SASS](#sass)
- [Internationalization](#internationalization)

## Project structure

Based on what I have learned in Vueling Academy, best practices from the community, [Angular coding style guide](https://angular.io/guide/styleguide), other github Angular projects and developer experience, the project looks like this:

As you can see, `src` has four main folders and app-component:

- Components --> this folder contains all the project components
- Core --> this one contains interfaces, models and services
- Shared --> components loads core functions/views that will be used globally across the application
- Styles --> just a scss styles folder. It contains mixins, color variables or global classes
- App-component --> in the app-routing I define the routes and create router-outlet into app-html. It is important to declare all new components in the app-module.

Besides, the assets folder handles app images and json translations.

## Versions Installed

1. node --> 16.15.1
2. npm --> 8.11.0
3. Angular --> 14.0.5
4. Angular Material --> 14.0.4
5. Express --> 4.18.1
6. TypeScript --> 4.7.2
7. S.O. --> Windows 10

## Installation

1. Download the repository zip or clone this repository to your own folder with: `git clone projectURL`
2. Remember to install the dependencies `npm i` at the root of your project
3. Run this command `ng build` to compile it.

## Code scaffolding

Run `ng generate component component-name` to generate a new component.
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Scaffolding

The next Scaffolding has been used to start the project --> [a link](https://github.com/samu-hv/Scaffolding.git)

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`.
The app will automatically reload if you change any of the source files.

## Deploy on Heroku

To deploy the app on Heroku it must be installed node and express. Node as it helps Heroku to run the app.
The file `server.js` has to be created to make the connection to Heroku. The ng serve command it is only for development, that's why a real server is needed for our production environment.

In the `package.json`:

```json
{
  "start": "node server.js"
}
```

## SASS

The following sass options have been used:

- Variables to define main colors
  ![alt text]()

- Mixins to implement in a simple way the breakpoints (responsive design) in the app
  ![alt text]()

- Global functions
  ![alt text]()

## Internationalization

This project is using internationalization. It's possible to navigate through every language with the library [ngx-translate](http://www.ngx-translate.com/)
It allows to define translations for the content in different languages and switch between them easily.
In this case it is used the `TranslateService`
This is how it is included:

```html
<div>{{ '' | translate }}</div>
```

Translations are stored in a JSON file. This file looks like this:

```json
{
  "": ""
}
```

## Navigation History

Basically, when we get a new URL address we get a new page, this URL is saved in the browser history. Using this history we can go back.
In our navigation service where we store route history, we subscribe to events of the route change. Every new route is saved in an array. Obviously, this service contains a method to get the previous route and go back.
It is important to initialize the navigation service where we subscribe to a route change.

## Polymorphism

It occurs when we have many classes that are related to each other by inheritance, so, polymorphism allows to create consistent code. In this case, the superclass Team has subclasses.

## Linting and formatting code

[Prettier](https://prettier.io/) help me to maintain the code quality, following the same rules.

## Author

👤 **Samuel Hayas**

- LinkedIn: [@Samuel_Hayas](www.linkedin.com/in/samuel-hayas-frontend-developer)
- Github: [@samu-hv](https://github.com/samu-hv)
