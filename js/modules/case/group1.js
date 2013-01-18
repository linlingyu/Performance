define(function(require, exports, module){
    var baidu = require('../../libs/tangram'),
        $ = require('../../libs/jquery'),
        Group = require('../../modules/base/Group'),
        group = new Group({
            title: '有关核心'
        }),
        ele;
        
    group.addItem({
        ident: 'jQuery()',
        des: '#id 选择器',
        onbeforestart: function(){
            ele = document.createElement('div');
            ele.id = 'ident-test';
            document.body.appendChild(ele);
        },
        run: function(){
            $('#ident-test');
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu()',
        des: '#id 选择器',
        onbeforestart: function(){
            ele = document.createElement('div');
            ele.id = 'ident-test';
            document.body.appendChild(ele);
        },
        run: function(){
            baidu('#ident-test');
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    //
    group.addItem({
        ident: 'jQuery()',
        des: '.class 选择器',
        onbeforestart: function(){
            ele = document.createElement('div');
            ele.className = 'testClass';
            document.body.appendChild(ele);
        },
        run: function(){
            $('.testClass');
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu()',
        des: '.class 选择器',
        onbeforestart: function(){
            ele = document.createElement('div');
            ele.className = 'testClass';
            document.body.appendChild(ele);
        },
        run: function(){
            baidu('.testClass');
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    group.addItem({
        ident: 'jQuery()',
        des: '元素 选择器',
        run: function(){
            $('input');
        }
    });
    group.addItem({
        ident: 'baidu()',
        des: '元素 选择器',
        run: function(){
            baidu('input');
        }
    });
    
    group.addItem({
        ident: 'jQuery()',
        des: '后代 选择器',
        run: function(){
            $('table td');
        }
    });
    group.addItem({
        ident: 'baidu()',
        des: '后代 选择器',
        run: function(){
            baidu('table td');
        }
    });
    
    group.addItem({
        ident: 'jQuery.each()',
        des: '迭代器',
        onbeforestart: function(){
            ele = $('table td');
        },
        run: function(){
            ele.each(function(){});
        },
        onafterend: function(){
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.each()',
        des: '迭代器',
        onbeforestart: function(){
            ele = baidu('table td');
        },
        run: function(){
            ele.each(function(){});
        },
        onafterend: function(){
            ele = null;
        }
    });
    
    return group;
});