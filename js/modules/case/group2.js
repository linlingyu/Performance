define(function(require, exports, module){
    var baidu = require('../../libs/tangram'),
        $ = require('../../libs/jquery'),
        Group = require('../../modules/base/Group'),
        group = new Group({
            title: '文档操作、控制'
        }),
        parEl, ele;
        
    group.addItem({
        ident: 'jQuery.append()',
        des: '内部末端插入内容',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.style.visibility = 'hidden';
        },
        run: function(){
            $(ele).append('hello world');
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.append()',
        des: '内部末端插入内容',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.style.visibility = 'hidden';
        },
        run: function(){
            baidu(ele).append('hello world');
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    group.addItem({
        ident: 'jQuery.prepend()',
        des: '内部前端插入内容',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.style.visibility = 'hidden';
        },
        run: function(){
            $(ele).prepend('hello world');
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.prepend()',
        des: '内部前端插入内容',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.style.visibility = 'hidden';
        },
        run: function(){
            baidu(ele).prepend('hello world');
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    group.addItem({
        ident: 'jQuery.appendTo()',
        des: '匹配插入到指定元素之后',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.style.visibility = 'hidden';
        },
        run: function(){
            $(document.createTextNode('hello world')).appendTo(ele);
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.appendTo()',
        des: '匹配插入到指定元素之后',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.style.visibility = 'hidden';
        },
        run: function(){
            baidu(document.createTextNode('hello world')).appendTo(ele);
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    group.addItem({
        ident: 'jQuery.prependTo()',
        des: '匹配插入到指定元素之前',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.style.visibility = 'hidden';
        },
        run: function(){
            $(document.createTextNode('hello world')).prependTo(ele);
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.prependTo()',
        des: '匹配插入到指定元素之前',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.style.visibility = 'hidden';
        },
        run: function(){
            baidu(document.createTextNode('hello world')).prependTo(ele);
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    group.addItem({
        ident: 'jQuery.after()',
        des: '匹配后插入指定元素',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.innerHTML = '<div></div>';
            ele.style.visibility = 'hidden';
        },
        run: function(){
            $(ele.firstChild).after('hello world');
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.after()',
        des: '匹配后插入指定元素',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.innerHTML = '<div></div>';
            ele.style.visibility = 'hidden';
        },
        run: function(){
            baidu(ele.firstChild).after('hello world');
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    group.addItem({
        ident: 'jQuery.before()',
        des: '匹配前插入指定元素',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.innerHTML = '<div></div>';
            ele.style.visibility = 'hidden';
        },
        run: function(){
            $(ele.firstChild).before('hello world');
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.before()',
        des: '匹配前插入指定元素',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.innerHTML = '<div></div>';
            ele.style.visibility = 'hidden';
        },
        run: function(){
            baidu(ele.firstChild).before('hello world');
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    group.addItem({
        ident: 'jQuery.insertAfter()',
        des: '匹配插入指定元素后',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.innerHTML = '<div></div>';
            ele.style.visibility = 'hidden';
        },
        run: function(){
            $(document.createTextNode('hello world')).insertAfter(ele.firstChild);
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.insertAfter()',
        des: '匹配插入指定元素后',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.innerHTML = '<div></div>';
            ele.style.visibility = 'hidden';
        },
        run: function(){
            baidu(document.createTextNode('hello world')).insertAfter(ele.firstChild);
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    group.addItem({
        ident: 'jQuery.insertBefore()',
        des: '匹配插入指定元素前',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.innerHTML = '<div></div>';
            ele.style.visibility = 'hidden';
        },
        run: function(){
            $(document.createTextNode('hello world')).insertBefore(ele.firstChild);
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.insertBefore()',
        des: '匹配插入指定元素前',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.innerHTML = '<div></div>';
            ele.style.visibility = 'hidden';
        },
        run: function(){
            baidu(document.createTextNode('hello world')).insertBefore(ele.firstChild);
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    group.addItem({
        ident: 'jQuery.empty()',
        des: '清空内容',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
        },
        run: function(){
            ele.innerHTML = '<div>hello world</div>';
            $(ele).empty();
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.empty()',
        des: '清空内容',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
        },
        run: function(){
            ele.innerHTML = '<div>hello world</div>';
            baidu(ele).empty();
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    group.addItem({
        ident: 'jQuery.remove()',
        des: '删除元素（移除事件）',
        run: function(){
            var div = document.createElement('div');
            document.body.appendChild(div);
            div.innerHTML = '<div>hello world</div>';
            $(div).remove();
        }
    });
    group.addItem({
        ident: 'baidu.remove()',
        des: '删除元素（移除事件）',
        run: function(){
            var div = document.createElement('div');
            document.body.appendChild(div);
            div.innerHTML = '<div>hello world</div>';
            baidu(div).remove();
        }
    });
    
    group.addItem({
        ident: 'jQuery.detach()',
        des: '删除元素',
        run: function(){
            var div = document.createElement('div');
            document.body.appendChild(div);
            div.innerHTML = '<div>hello world</div>';
            $(div).detach();
        }
    });
    group.addItem({
        ident: 'baidu.detach()',
        des: '删除元素',
        run: function(){
            var div = document.createElement('div');
            document.body.appendChild(div);
            div.innerHTML = '<div>hello world</div>';
            baidu(div).detach();
        }
    });
    
    group.addItem({
        ident: 'jQuery.clone()',
        des: '克隆元素',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.innerHTML = '<div></div>';
        },
        run: function(){
            $(ele).clone(true, true);
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.clone()',
        des: '克隆元素',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.innerHTML = '<div></div>';
        },
        run: function(){
            baidu(ele).clone(true, true);
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    
    
    
    
    
    
    
    group.addItem({
        ident: 'baidu.getDocument()',
        des: '取得document',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
        },
        run: function(){
            baidu(ele).getDocument();
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.getWindow()',
        des: '取得window',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
        },
        run: function(){
            baidu(ele).getWindow();
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    return group;
});