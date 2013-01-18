define(function(require, exports, module){
    var baidu = require('../../libs/tangram'),
        $ = require('../../libs/jquery'),
        Group = require('../../modules/base/Group'),
        group = new Group({
            title: 'html/text/value操作'
        }),
        parEl, ele;
        
    group.addItem({
        ident: 'jQuery.html()',
        des: '设置html',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
        },
        run: function(){
            $(ele).html('hello world');
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.html()',
        des: '设置html',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
        },
        run: function(){
            baidu(ele).html('hello world');
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'jQuery.html()',
        des: '取得html',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.innerHTML = '<div>hello world</div>';
        },
        run: function(){
            $(ele).html();
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.html()',
        des: '取得html',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.innerHTML = '<div>hello world</div>';
        },
        run: function(){
            baidu(ele).html();
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'jQuery.text()',
        des: '设置text',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
        },
        run: function(){
            $(ele).text('hello world');
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.text()',
        des: '设置text',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
        },
        run: function(){
            baidu(ele).text('hello world');
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'jQuery.text()',
        des: '取得text',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.innerHTML = '<div>hello world</div>';
        },
        run: function(){
            $(ele).text();
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.text()',
        des: '取得text',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.innerHTML = '<div>hello world</div>';
        },
        run: function(){
            baidu(ele).text();
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    group.addItem({
        ident: 'jQuery.val()',
        des: '设置val',
        onbeforestart: function(){
            ele = document.createElement('input');
            ele.type = 'text';
            document.body.appendChild(ele);
        },
        run: function(){
            $(ele).val('hello world');
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.val()',
        des: '设置val',
        onbeforestart: function(){
            ele = document.createElement('input');
            ele.type = 'text';
            document.body.appendChild(ele);
        },
        run: function(){
            baidu(ele).val('hello world');
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    group.addItem({
        ident: 'jQuery.val()',
        des: '取得val',
        onbeforestart: function(){
            ele = document.createElement('input');
            ele.type = 'text';
            document.body.appendChild(ele);
            ele.value = 'hello world';
        },
        run: function(){
            $(ele).val();
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.val()',
        des: '取得val',
        onbeforestart: function(){
            ele = document.createElement('input');
            ele.type = 'text';
            document.body.appendChild(ele);
            ele.value = 'hello world';
        },
        run: function(){
            baidu(ele).val();
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    
    
    
    group.addItem({
        ident: 'baidu.insertHTML()',
        des: '插入HTML',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.style.visibility = 'hidden';
        },
        run: function(){
            baidu(ele).insertHTML('afterBegin', '<div>hello world</div>');
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    return group;
});