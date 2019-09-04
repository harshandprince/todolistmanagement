let appConfig={};
appConfig.port="3000";
appConfig.env="dev";
appConfig.db={uri:"mongodb://localhost:27017/todolistdb"};
appConfig.allowedCors="*";
appConfig.apiVersion="/api/v1";
module.exports={
    port:appConfig.port,
    env:appConfig.env,
    db:appConfig.db,
    allowedCors:appConfig.allowedCors,
    apiVersion:appConfig.apiVersion
}