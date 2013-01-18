define(function(require, exports, module){
    var baidu = require('../../libs/tangram'),
        $ = require('../../libs/jquery'),
        Group = require('../../modules/base/Group'),
        group = new Group({
            title: '基础事件'
        }),
        handler = function(){},
        instance, ele;
        
    group.addItem({
        ident: 'jQuery.on()',
        interval: 50000,
        des: 'on注册事件',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
        },
        run: function(){
            var div = document.createElement('div');
            ele.appendChild(div);
            $(div).on('click', handler);
            div = null;
        }
    });
    group.addItem({
        ident: 'jQuery.off()',
        interval: 50000,
        des: 'off注销事件',
        run: function(){
            var div = ele.firstChild;
            $(div).off('click', handler);
            ele.removeChild(div);
        }
    });
    
    
    group.addItem({
        ident: 'baidu.on()',
        des: 'on注册事件',
        interval: 50000,
        run: function(){
            var span = document.createElement('span');
            ele.appendChild(span);
            baidu(span).on('click', handler);
            span = null;
        }
    });
    group.addItem({
        ident: 'baidu.off()',
        des: 'off注销事件',
        interval: 50000,
        run: function(){
            var span = ele.firstChild;
            $(span).off('click', handler);
            ele.removeChild(span);
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    return group;
});