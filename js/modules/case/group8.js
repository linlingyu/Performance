define(function(require, exports, module){
    
    //暴露全局变量，为了在控制台调试
    baidu = require('../../libs/tangram');
    $ = require('../../libs/jquery');

    var Group = require('../../modules/base/Group'),
        group = new Group({
            title: '数据类型判断'
        });

    var arr = [0,1,2,3,4],
        str = 'hello baidu',
        fun = function(){var n = 0 ; n++; return n;},
        reg = /\w.*?$/g,
        obj = {a:'x',b:'y'},
        bool = false
        ele = document.createElement('div');

    group.addItem({
        ident: 'jQuery.type(arr)',
        des: '判断数组',
        run: function(){
            jQuery.type(arr);
        }
    });

    group.addItem({
        ident: 'baidu.type(arr)',
        des: '判断数组',
        run: function(){
            baidu.type(arr);
        }
    });

    group.addItem({
        ident: 'jQuery.type(str)',
        des: '判断字符串',
        run: function(){
            jQuery.type(str);
        }
    });

    group.addItem({
        ident: 'baidu.type(str)',
        des: '判断字符串',
        run: function(){
            baidu.type(str);
        }
    });

    group.addItem({
        ident: 'jQuery.type(fun)',
        des: '判断函数',
        run: function(){
            jQuery.type(fun);
        }
    });

    group.addItem({
        ident: 'baidu.type(fun)',
        des: '判断函数',
        run: function(){
            baidu.type(fun);
        }
    });

    group.addItem({
        ident: 'jQuery.type(reg)',
        des: '判断正则类型',
        run: function(){
            jQuery.type(reg);
        }
    });

    group.addItem({
        ident: 'baidu.type(reg)',
        des: '判断正则类型',
        run: function(){
            baidu.type(reg);
        }
    });

    group.addItem({
        ident: 'jQuery.type(obj)',
        des: '判断Object类型',
        run: function(){
            jQuery.type(obj);
        }
    });

    group.addItem({
        ident: 'baidu.type(obj)',
        des: '判断Object类型',
        run: function(){
            baidu.type(obj);
        }
    });

    group.addItem({
        ident: 'jQuery.type(bool)',
        des: '判断布尔类型',
        run: function(){
            jQuery.type(bool);
        }
    });

    group.addItem({
        ident: 'baidu.type(bool)',
        des: '判断布尔类型',
        run: function(){
            baidu.type(bool);
        }
    });

    group.addItem({
        ident: 'jQuery.type(null)',
        des: '判断null类型',
        run: function(){
            jQuery.type(null);
        }
    });

    group.addItem({
        ident: 'baidu.type(null)',
        des: '判断null类型',
        run: function(){
            baidu.type(null);
        }
    });

    group.addItem({
        ident: 'jQuery.type(num)',
        des: '判断数字类型',
        run: function(){
            jQuery.type(2);
        }
    });

    group.addItem({
        ident: 'baidu.type(num)',
        des: '判断数字类型',
        run: function(){
            baidu.type(2);
        }
    });

    group.addItem({
        ident: 'jQuery.type(undefined)',
        des: '判断undefined类型',
        run: function(){
            jQuery.type(undefined);
        }
    });

    group.addItem({
        ident: 'baidu.type(undefined)',
        des: '判断undefined类型',
        run: function(){
            baidu.type(undefined);
        }
    });

    group.addItem({
        ident: 'jQuery.type(document)',
        des: '判断document类型',
        run: function(){
            jQuery.type(document);
        }
    });

    group.addItem({
        ident: 'baidu.type(document)',
        des: '判断document类型',
        run: function(){
            baidu.type(document);
        }
    });

    //jquery结果不正确
    // group.addItem({
    //     ident: 'jQuery.type()',
    //     des: '判断undefined类型',
    //     run: function(){
    //         jQuery.type(ele);
            
    //     }
    // });

    // group.addItem({
    //     ident: 'baidu.type()',
    //     des: '判断undefined类型',
    //     run: function(){
    //         baidu.type(ele);
    //     }
    // });

    return group;
});