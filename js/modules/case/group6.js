define(function(require, exports, module){
    var baidu = require('../../libs/tangram'),
        $ = require('../../libs/jquery'),
        Group = require('../../modules/base/Group'),
        group = new Group({
            title: '属性'
        }),
        parEl, ele;
        
    group.addItem({
        ident: 'jQuery.attr()',
        des: '设置属性',
        run: function(){
            var div = document.createElement('div');
            document.body.appendChild(div);
            $(div).attr('testAttr', 'hello world');
            document.body.removeChild(div);
            div = null;
        }
    });
    group.addItem({
        ident: 'baidu.attr()',
        des: '设置属性',
        run: function(){
            var div = document.createElement('div');
            document.body.appendChild(div);
            baidu(div).attr('testAttr', 'hello world');
            document.body.removeChild(div);
            div = null;
        }
    });
    group.addItem({
        ident: 'jQuery.attr()',
        des: '取得属性',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.setAttribute('testAttr', 'hello world');
        },
        run: function(){
            $(ele).attr('testAttr');
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.attr()',
        des: '取得属性',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.setAttribute('testAttr', 'hello world');
        },
        run: function(){
            baidu(ele).attr('testAttr');
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'jQuery.removeAttr()',
        des: '移除属性',
        run: function(){
            var div = document.createElement('div');
            document.body.appendChild(div);
            div.setAttribute('testAttr', 'hello world');
            $(div).removeAttr('testAttr');
            document.body.removeChild(div);
            div = null;
        }
    });
    group.addItem({
        ident: 'baidu.removeAttr()',
        des: '移除属性',
        run: function(){
            var div = document.createElement('div');
            document.body.appendChild(div);
            div.setAttribute('testAttr', 'hello world');
            baidu(div).removeAttr('testAttr');
            document.body.removeChild(div);
            div = null;
        }
    });
    ////
    group.addItem({
        ident: 'jQuery.prop()',
        des: '设置系统定义属性',
        run: function(){
            var div = document.createElement('div');
            document.body.appendChild(div);
            $(div).prop('align', 'center');
            document.body.removeChild(div);
            div = null;
        }
    });
    group.addItem({
        ident: 'baidu.prop()',
        des: '设置系统定义属性',
        run: function(){
            var div = document.createElement('div');
            document.body.appendChild(div);
            baidu(div).prop('align', 'center');
            document.body.removeChild(div);
            div = null;
        }
    });
    group.addItem({
        ident: 'jQuery.prop()',
        des: '取得系统定义属性',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.align = 'center';
        },
        run: function(){
            $(ele).prop('align');
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.prop()',
        des: '取得系统定义属性',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.align = 'center';
        },
        run: function(){
            baidu(ele).prop('align');
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'jQuery.removeProp()',
        des: '移除系统定义属性',
        run: function(){
            var div = document.createElement('div');
            document.body.appendChild(div);
            div.align = 'center';
            $(div).removeProp('align');
            document.body.removeChild(div);
            div = null;
        }
    });
    group.addItem({
        ident: 'baidu.removeProp()',
        des: '移除系统定义属性',
        run: function(){
            var div = document.createElement('div');
            document.body.appendChild(div);
            div.align = 'center';
            baidu(div).removeProp('align');
            document.body.removeChild(div);
            div = null;
        }
    });
    return group;
});