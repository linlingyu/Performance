void function(){
//    seajs.config({
//        base: '../js/'// for require()
//    });


    var val = location.search,
        fileSize = 7,
        moduleList = [],
        array;
    if(val){
        array = val.split('=')[1].split(',');
        for(var i = 0, item; item = array[i]; i++){
            moduleList.push('../js/modules/case/group' + item);
        }
    }else{
        for(var i = 0; i < fileSize; i++){
            moduleList.push('../js/modules/case/group' + i);
        }
    }
    
    seajs.use(moduleList, function(){
        
   });
}();