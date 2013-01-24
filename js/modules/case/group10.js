define(function(require, exports, module){
    
    //暴露全局变量，为了在控制台调试
    baidu = require('../../libs/tangram');
    $ = require('../../libs/jquery');

    var Group = require('../../modules/base/Group'),
        group = new Group({
            title: '常用静态方法'
        });

    var obj = {
            a:'1',
            b:'2',
            c:'3',
            d:'4',
            e:'5'
        },
        obj2 = {
            e:'5',
            f:'6',
            g:'7',
            h:'8'
        },

        obj3 = {
            a:'1',
            b:'2',
            c:'3',
            d:'4',
            e:'5'
        };

    group.addItem({
        ident: 'jQuery.each()',
        des: '遍历元素',
        run: function(){
            jQuery.each(obj,function(v,k){
                return v;
            });
        }
    });

    group.addItem({
        ident: 'baidu.each()',
        des: '遍历元素',
        run: function(){
            baidu.each(obj,function(v,k){
                return v;
            });
        }
    });

    group.addItem({
        ident: 'jQuery.extend()',
        des: '扩展元素',
        run: function(){
            jQuery.extend(obj,obj2);
        }
    });

    group.addItem({
        ident: 'baidu.extend()',
        des: '扩展元素',
        run: function(){
            baidu.extend(obj,obj2);
        }
    });

    group.addItem({
        ident: 'jQuery.merge()',
        des: '合并元素',
        run: function(){
            jQuery.merge(obj,obj2);
        }
    });

    group.addItem({
        ident: 'baidu.merge()',
        des: '合并元素',
        run: function(){
            baidu.merge(obj3,obj2);
        }
    });

    group.addItem({
        ident: 'jQuery.makeArray()',
        des: '转成数组',
        run: function(){
            jQuery.makeArray(obj);
        }
    });

    group.addItem({
        ident: 'baidu.makeArray()',
        des: '转成数组',
        run: function(){
            baidu.makeArray(obj);
        }
    });

      
    return group;
});