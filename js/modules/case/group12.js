define(function(require, exports, module){
    
    //暴露全局变量，为了在控制台调试
    baidu = require('../../libs/tangram');
    $ = require('../../libs/jquery');

    var Group = require('../../modules/base/Group'),
        group = new Group({
            title: '延迟对象'
        });

    var fun = function(deferred,flag){
        switch(flag){
            case true:
                deferred.resolve();
            break;
            case false:
                deferred.reject();
            break;
        }
    };

    var j,b;

    group.addItem({
        ident: 'jQuery.Deferred()',
        des: '创建Deferred对象',
        run: function(){
            jQuery.Deferred();
        }
    });

    group.addItem({
        ident: 'baidu.Deferred()',
        des: '创建Deferred对象',
        run: function(){
            baidu.Deferred();
        }
    });

    group.addItem({
        ident: 'jQuery.Deferred().resolve()',
        des: 'Deferred对象状态改为已解决',
        run: function(){
            j.resolve();
        },
        onbeforestart: function(){
            j = jQuery.Deferred();
        },
        onafterend: function(){
            j = null;
        }
    });

    group.addItem({
        ident: 'baidu.Deferred().resolve()',
        des: 'Deferred对象状态改为已解决',
        run: function(){
            b.resolve();
        },
        onbeforestart: function(){
            b = baidu.Deferred();
        },
        onafterend: function(){
            b = null;
        }
    });

    group.addItem({
        ident: 'jQuery.Deferred().resolveWith()',
        des: 'Deferred对象状态改为已解决',
        run: function(){
            j.resolveWith({name:'wangxiao'});
        },
        onbeforestart: function(){
            j = jQuery.Deferred();
        },
        onafterend: function(){
            j = null;
        }
    });

    group.addItem({
        ident: 'baidu.Deferred().resolveWith()',
        des: 'Deferred对象状态改为已解决',
        run: function(){
            b.resolveWith({name:'wangxiao'});
        },
        onbeforestart: function(){
            b = baidu.Deferred();
        },
        onafterend: function(){
            b = null;
        }
    });

    group.addItem({
        ident: 'jQuery.Deferred().reject()',
        des: 'Deferred对象状态改为已拒绝',
        run: function(){
            j.reject();
        },
        onbeforestart: function(){
            j = jQuery.Deferred();
        },
        onafterend: function(){
            j = null;
        }
    });

    group.addItem({
        ident: 'baidu.Deferred().reject()',
        des: 'Deferred对象状态改为已拒绝',
        run: function(){
            b.reject();
        },
        onbeforestart: function(){
            b = baidu.Deferred();
        },
        onafterend: function(){
            b = null;
        }
    });

    group.addItem({
        ident: 'jQuery.Deferred().rejectWith()',
        des: 'Deferred对象状态改为已拒绝',
        run: function(){
            j.rejectWith({name:'wangxiao'});
        },
        onbeforestart: function(){
            j = jQuery.Deferred();
        },
        onafterend: function(){
            j = null;
        }
    });

    group.addItem({
        ident: 'baidu.Deferred().rejectWith()',
        des: 'Deferred对象状态改为已拒绝',
        run: function(){
            b.rejectWith({name:'wangxiao'});
        },
        onbeforestart: function(){
            b = baidu.Deferred();
        },
        onafterend: function(){
            b = null;
        }
    });

    group.addItem({
        ident: 'jQuery.Deferred().state()',
        des: '获取Deferred对象的状态',
        run: function(){
            j.state();
        },
        onbeforestart: function(){
            j = jQuery.Deferred();
        },
        onafterend: function(){
            j = null;
        }
    });

    group.addItem({
        ident: 'baidu.Deferred().state()',
        des: '获取Deferred对象的状态',
        run: function(){
            b.state();
        },
        onbeforestart: function(){
            b = baidu.Deferred();
        },
        onafterend: function(){
            b = null;
        }
    });

    group.addItem({
        ident: 'jQuery.Deferred().always()',
        des: 'Deferred对象无论成功失败都会被调用函数',
        run: function(){
            j.always(function(){var i=0;i++;return i;});
        },
        onbeforestart: function(){
            j = jQuery.Deferred();
            jQuery.when(fun(j,true));
        },
        onafterend: function(){
            j = null;
        }
    });

    group.addItem({
        ident: 'baidu.Deferred().always()',
        des: 'Deferred对象无论成功失败都会被调用函数',
        run: function(){
            b.always(function(){var i=0;i++;return i;});
        },
        onbeforestart: function(){
            b = baidu.Deferred();
            baidu.when(fun(b,true));
        },
        onafterend: function(){
            b = null;
        }
    });

    group.addItem({
        ident: 'jQuery.Deferred().done()',
        des: 'Deferred对象成功时调用函数',
        run: function(){
            j.done(function(){var i=0;i++;return i;});
        },
        onbeforestart: function(){
            j = jQuery.Deferred();
            jQuery.when(fun(j,true));
        },
        onafterend: function(){
            j = null;
        }
    });

    group.addItem({
        ident: 'baidu.Deferred().done()',
        des: 'Deferred对象成功时调用函数',
        run: function(){
            b.done(function(){var i=0;i++;return i;});
        },
        onbeforestart: function(){
            b = baidu.Deferred();
            baidu.when(fun(b,true));
        },
        onafterend: function(){
            b = null;
        }
    });

    group.addItem({
        ident: 'jQuery.Deferred().fail()',
        des: 'Deferred对象失败时调用函数',
        run: function(){
            j.fail(function(){var i=0;i++;return i;});
        },
        onbeforestart: function(){
            j = jQuery.Deferred();
            jQuery.when(fun(j,false));
        },
        onafterend: function(){
            j = null;
        }
    });

    group.addItem({
        ident: 'baidu.Deferred().fail()',
        des: 'Deferred对象失败时调用函数',
        run: function(){
            b.fail(function(){var i=0;i++;return i;});
        },
        onbeforestart: function(){
            b = baidu.Deferred();
            baidu.when(fun(b,false));
        },
        onafterend: function(){
            b = null;
        }
    });

    group.addItem({
        ident: 'jQuery.Deferred().promise()',
        des: '创建promise对象',
        run: function(){
            jQuery.Deferred().promise();
        }
    });

    group.addItem({
        ident: 'baidu.Deferred().promise()',
        des: '创建promise对象',
        run: function(){
            baidu.Deferred().promise();
        }
    });

    group.addItem({
        ident: 'jQuery.when()',
        des: '执行deferred对象',
        run: function(){
            jQuery.when(fun(j,false));
        },
        onbeforestart: function(){
            j = jQuery.Deferred();
        },
        onafterend: function(){
            j = null;
        }
    });

    group.addItem({
        ident: 'baidu.when()',
        des: '执行deferred对象',
        run: function(){
            baidu.when(fun(b,false));
        },
        onbeforestart: function(){
            b = baidu.Deferred();
        },
        onafterend: function(){
            b = null;
        }
    });

    group.addItem({
        ident: 'jQuery.then()',
        des: '执行deferred对象之后，快捷设置后续执行方法',
        run: function(){
            j.then(function(){var i=0;i++;return i;});
        },
        onbeforestart: function(){
            j = jQuery.Deferred();
            jQuery.when(fun(j,true));
        },
        onafterend: function(){
            j = null;
        }
    });

    group.addItem({
        ident: 'baidu.then()',
        des: '执行deferred对象之后，快捷设置后续执行方法',
        run: function(){
            b.then(function(){var i=0;i++;return i;});
        },
        onbeforestart: function(){
            b = baidu.Deferred();
            baidu.when(fun(b,true));
        },
        onafterend: function(){
            b = null;
        }
    });

    group.addItem({
        ident: 'jQuery.Deferred().notify()',
        des: 'Deferred对象状态为正在进行',
        run: function(){
            j.notify(function(){var i=0;i++;return i;});
        },
        onbeforestart: function(){
            j = jQuery.Deferred();
        },
        onafterend: function(){
            j = null;
        }
    });

    group.addItem({
        ident: 'baidu.Deferred().notify()',
        des: 'Deferred对象状态为正在进行',
        run: function(){
            b.notify(function(){var i=0;i++;return i;});
        },
        onbeforestart: function(){
            b = baidu.Deferred();
        },
        onafterend: function(){
            b = null;
        }
    });

    group.addItem({
        ident: 'jQuery.Deferred().notifyWith()',
        des: 'Deferred对象状态为正在进行',
        run: function(){
            j.notifyWith({name:'wangxiao'});
        },
        onbeforestart: function(){
            j = jQuery.Deferred();
        },
        onafterend: function(){
            j = null;
        }
    });

    group.addItem({
        ident: 'baidu.Deferred().notifyWith()',
        des: 'Deferred对象状态为正在进行',
        run: function(){
            b.notifyWith({name:'wangxiao'});
        },
        onbeforestart: function(){
            b = baidu.Deferred();
        },
        onafterend: function(){
            b = null;
        }
    });

    group.addItem({
        ident: 'jQuery.Deferred().progress()',
        des: 'Deferred对象进行中的进度调度函数',
        run: function(){
            j.progress(function(){var i=0;i++;return i;});
        },
        onbeforestart: function(){
            j = jQuery.Deferred();
        },
        onafterend: function(){
            j = null;
        }
    });

    group.addItem({
        ident: 'baidu.Deferred().progress()',
        des: 'Deferred对象进行中的进度调度函数',
        run: function(){
            b.progress(function(){var i=0;i++;return i;});
        },
        onbeforestart: function(){
            b = baidu.Deferred();
        },
        onafterend: function(){
            b = null;
        }
    });

    group.addItem({
        ident: 'jQuery.Deferred().promise().pipe()',
        des: 'promise对象成功或失败的调度函数',
        run: function(){
            j.pipe(function(){return true;},function(){return false;});
        },
        onbeforestart: function(){
            j = jQuery.Deferred().promise();
        },
        onafterend: function(){
            j = null;
        }
    });

    group.addItem({
        ident: 'baidu.Deferred().promise().pipe()',
        des: 'promise对象成功或失败的调度函数',
        run: function(){
            b.pipe(function(){return true;},function(){return false;});
        },
        onbeforestart: function(){
            b = baidu.Deferred().promise();
        },
        onafterend: function(){
            b = null;
        }
    });
    
    return group;
});