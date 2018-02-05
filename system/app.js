const   BuildSystem = require('dev-env-build-system'),
        Path = require('path'),
        _root = Path.dirname(__dirname);

let buildSystem = new BuildSystem(
        `${_root}\/client\/src`,
        `${_root}\/client\/dist`,
        {
            "app":{
                ".js":"js/app.js",
                ".scss":"css/app.scss",
                ".html":"html/app.html"
            }
        }
    );

buildSystem.watch();