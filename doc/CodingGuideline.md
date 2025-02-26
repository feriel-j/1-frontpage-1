## Folder Structure


The File structure is composed as follow

+ `docs`: Contains documentation related to the frontend code
+ `public`: Contains files that are outside of webpack reach (such robots, manifest, etc.) and images folder 
+ `src`: Contains the source code of our application

  * `assets`: less files, font files, etc. for your project. Pretty much anything that isn't code related will be stored in this folder.
  * `_dist`: compiled css code from less themes
  * `data`: data needed for mock or similar
  * `services`: contains redux context
  * `routes`: contains routing logic
  * `hooks`: contains all  High Order Component HOC
  * `util`: contains all  commun fonctionalities.
  * `components`: contains reusable UI components.
  * `domains`: 
          * `domain`: ceach domain will contain those foldres
                         * `layoutss`: ccontains the possible layouts of the domain.
                         * `tests`: contains the unit testing files. 
                         * `communs`: contains the commun presential components present on this domain.
                         * `pages`: contains the different pages 