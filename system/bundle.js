const BuildSystem = require('dev-env-build-system');
        
let argv = process.argv,
    buildSystem = new BuildSystem();

buildSystem.bundle_component(argv);