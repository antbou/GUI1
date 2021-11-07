# GUI1

Realize for the GUI1 project

Group : `Anthony Bouillant` and `Noah Delgado`.

Development realized by `Anthony Bouillant`.

## Tools to install :

- [NPM](https://docs.npmjs.com/getting-started/)

## Tools used

- [webpack](https://webpack.js.org/)
- [fullcalendar](https://fullcalendar.io/)
- [jsgrid](http://js-grid.com/)
- [fontawesome](https://fontawesome.com/)

The list of the different dependencies used is available in package.json.

## Folder structure
```
GUI1
│   README.md
│   index.html 
│   ....
│
└───assets
│   │   app.js
│   │   absencesApp.js
│   │   ....
│   │
│   └───js
│   └───styles 
└───dist
│   │
│   └───js
│   └───styles 
└───doc
│   └───specifications
│   └───moodboard
│   └───analysis
└───src
    │
    └───html
    └───styles 
```

The `assets` folder contains the files not bundled by webpack. By default the dist folder is empty. To fill it, start webpack.
Webpack will use the following two entries:
- app.js 
- absencesApp.js

The `dist` folder contains the files bundled by webpack.

The `doc` folder contains the following documentation:
- The specifications (specification)
- The Moodboard (moodboard)
- Competitive Analysis (analysis)

The `src` folder contains the html files (index not included) and the project images.

## Setting up the project

Installing dependencies with npm :

`npm i`

Launch webpack to group the assets in the "dist" folder :

`npm run build`

## Install PWA

In the **Chrome browser**: For sites that fully provide PWA functionality, you see an Install app choice in the main Chrome menu. Once you select that option, the app icon appears on your home screen.

In **Firefox**: For sites that can be turned into PWAs, Firefox’s menu has a simple Install option. After you tap this choice, you see the Add to Screen dialog box. The home screen icons for Firefox-created PWAs have a small orange Firefox logo at the bottom right of the main app logo.

## Hosting
The website is available on the following url : [mobile.onionsking.tk](https://mobile.onionsking.tk/)

## Sources
- [navbar](https://codepen.io/sanketbodke/pen/qBXBOgb)
- [webpack](https://medium.com/js-imaginea/webpack-why-and-what-4948433cc2d3)
- [install PWA](https://www.pcmag.com/how-to/how-to-use-progressive-web-apps)

