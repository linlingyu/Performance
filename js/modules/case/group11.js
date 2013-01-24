define(function(require, exports, module){
    
    //暴露全局变量，为了在控制台调试
    baidu = require('../../libs/tangram');
    $ = require('../../libs/jquery');

    var Group = require('../../modules/base/Group'),
        group = new Group({
            title: '回调对象'
        });

    var fun = function(){
        var num = 0 ;
        num ++;
        return num;
    };

    var j,b;

    group.addItem({
        ident: 'jQuery.Callbacks()',
        des: '创建Callbacks对象',
        run: function(){
            jQuery.Callbacks();
        }
    });

    group.addItem({
        ident: 'baidu.Callbacks()',
        des: '创建Callbacks对象',
        run: function(){
            baidu.Callbacks();
        }
    });

    group.addItem({
        ident: 'jQuery.Callbacks().add()',
        des: '给Callbacks添加一个方法',
        run: function(){
            j.add(fun);
        },
        onbeforestart: function(){
            j = jQuery.Callbacks();
        },
        onafterend: function(){
            j = null;
        }
    });

    group.addItem({
        ident: 'baidu.Callbacks().add()',
        des: '给Callbacks添加一个方法',
        run: function(){
            b.add(fun);
        },
        onbeforestart: function(){
            b = baidu.Callbacks();
        },
        onafterend: function(){
            b = null;
        }
    });

    group.addItem({
        ident: 'jQuery.Callbacks().disable()',
        des: '禁用Callbacks中的回调函数',
        run: function(){
            j.disable();
        },
        onbeforestart: function(){
            j = jQuery.Callbacks();
            j.add(fun);
        },
        onafterend: function(){
            j = null;
        }
    });

    group.addItem({
        ident: 'baidu.Callbacks().disable()',
        des: '禁用Callbacks中的回调函数',
        run: function(){
            b.disable();
        },
        onbeforestart: function(){
            b = baidu.Callbacks();
            b.add(fun);
        },
        onafterend: function(){
            b = null;
        }
    });

    group.addItem({
        ident: 'jQuery.Callbacks().disabled()',
        des: '判断当前Callbacks是否被禁用',
        run: function(){
            j.disabled();
        },
        onbeforestart: function(){
            j = jQuery.Callbacks();
            j.add(fun);
            j.disable();
        },
        onafterend: function(){
            j = null;
        }
    });

    group.addItem({
        ident: 'baidu.Callbacks().disabled()',
        des: '判断当前Callbacks是否被禁用',
        run: function(){
            b.disabled();
        },
        onbeforestart: function(){
            b = baidu.Callbacks();
            b.add(fun);
            b.disable();
        },
        onafterend: function(){
            b = null;
        }
    });

    group.addItem({
        ident: 'jQuery.Callbacks().empty()',
        des: '从当前Callbacks中删除所有的回调',
        run: function(){
            j.add(fun);
            j.empty();
        },
        onbeforestart: function(){
            j = jQuery.Callbacks();
        },
        onafterend: function(){
            j = null;
        }
    });

    group.addItem({
        ident: 'baidu.Callbacks().empty()',
        des: '从当前Callbacks中删除所有的回调',
        run: function(){
            b.add(fun);
            b.empty();
        },
        onbeforestart: function(){
            b = baidu.Callbacks();
        },
        onafterend: function(){
            b = null;
        }
    });

    group.addItem({
        ident: 'jQuery.Callbacks().fire()',
        des: '触发Callbacks中的方法',
        run: function(){
            j.fire();
        },
        onbeforestart: function(){
            j = jQuery.Callbacks();
            j.add(fun);
        },
        onafterend: function(){
            j = null;
        }
    });

    group.addItem({
        ident: 'baidu.Callbacks().fire()',
        des: '触发Callbacks中的方法',
        run: function(){
            b.fire();
        },
        onbeforestart: function(){
            b = baidu.Callbacks();
            b.add(fun);
        },
        onafterend: function(){
            b = null;
        }
    });

    group.addItem({
        ident: 'jQuery.Callbacks().fired()',
        des: '确定Callbacks已经被触发过',
        run: function(){
            j.fired();
        },
        onbeforestart: function(){
            j = jQuery.Callbacks();
            j.add(fun);
            j.fire();
        },
        onafterend: function(){
            j = null;
        }
    });

    group.addItem({
        ident: 'baidu.Callbacks().fired()',
        des: '确定Callbacks已经被触发过',
        run: function(){
            b.fired();
        },
        onbeforestart: function(){
            b = baidu.Callbacks();
            b.add(fun);
            b.fire();
        },
        onafterend: function(){
            b = null;
        }
    });

    group.addItem({
        ident: 'jQuery.Callbacks().fireWith()',
        des: '触发Callbacks中的方法',
        run: function(){
            j.fireWith({name:'wangxiao'});
        },
        onbeforestart: function(){
            j = jQuery.Callbacks();
            j.add(fun);
        },
        onafterend: function(){
            j = null;
        }
    });

    group.addItem({
        ident: 'baidu.Callbacks().fireWith()',
        des: '触发Callbacks中的方法',
        run: function(){
            b.fireWith({name:'wangxiao'});
        },
        onbeforestart: function(){
            b = baidu.Callbacks();
            b.add(fun);
        },
        onafterend: function(){
            b = null;
        }
    });

    group.addItem({
        ident: 'jQuery.Callbacks().has()',
        des: '判断回调是否在Callbacks中',
        run: function(){
            j.has(fun);
        },
        onbeforestart: function(){
            j = jQuery.Callbacks();
            j.add(fun);
        },
        onafterend: function(){
            j = null;
        }
    });

    group.addItem({
        ident: 'baidu.Callbacks().has()',
        des: '判断回调是否在Callbacks中',
        run: function(){
            b.has(fun);
        },
        onbeforestart: function(){
            b = baidu.Callbacks();
            b.add(fun);
        },
        onafterend: function(){
            b = null;
        }
    });

    group.addItem({
        ident: 'jQuery.Callbacks().lock()',
        des: '锁住Callbacks中的回调函数',
        run: function(){
            j.lock();
        },
        onbeforestart: function(){
            j = jQuery.Callbacks();
            j.add(fun);
        },
        onafterend: function(){
            j = null;
        }
    });

    group.addItem({
        ident: 'baidu.Callbacks().lock()',
        des: '锁住Callbacks中的回调函数',
        run: function(){
            b.lock();
        },
        onbeforestart: function(){
            b = baidu.Callbacks();
            b.add(fun);
        },
        onafterend: function(){
            b = null;
        }
    });

    group.addItem({
        ident: 'jQuery.Callbacks().remove()',
        des: '从当前Callbacks中删除某个回调',
        run: function(){
            j.add(fun);
            j.remove(fun);
        },
        onbeforestart: function(){
            j = jQuery.Callbacks();
        },
        onafterend: function(){
            j = null;
        }
    });

    group.addItem({
        ident: 'baidu.Callbacks().remove()',
        des: '从当前Callbacks中删除某个回调',
        run: function(){
            b.add(fun);
            b.remove(fun);
        },
        onbeforestart: function(){
            b = baidu.Callbacks();
        },
        onafterend: function(){
            b = null;
        }
    });

    return group;
});