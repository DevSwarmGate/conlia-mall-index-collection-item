const   Deploy = require('sg-qa-deploy'),
        BuildSystem = require('dev-env-build-system');
    
let argv = process.argv,
    buildSystem = new BuildSystem(),
    deploy = new Deploy(
        `test.swarmgate.com.cn/`, 
        `3rdParty`,                
        `3rdParty`,                        
        `3rdParty123`,                        
        `/inQA/conlia-mall-index-collection-item`   
    );

deploy.thirdParty = `test.swarmgate.com.cn` === 'test.swarmgate.com.cn'
                  ? true
                  : false;

buildSystem.bundle_component(argv,(file_obj)=>{
    deploy.push_fileList(file_obj.dir,[`${file_obj.dir}/${file_obj.base}`]);
});