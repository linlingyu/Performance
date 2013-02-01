define(function(require, exports, module){
    var baidu = require('../../libs/tangram'),
        $ = require('../../libs/jquery'),
        Group = require('../../modules/base/Group'),
        group = new Group({
            title: '有关样式'
        }),
        
        ele;
        
    group.addItem({
        ident: 'jQuery.addClass()',
        des: '添加样式名称',
        run: function(){
            var ele = document.createElement('div');
            document.body.appendChild(ele);
            $(ele).addClass('testClass');
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.addClass()',
        des: '添加样式名称',
        run: function(){
            var ele = document.createElement('div');
            document.body.appendChild(ele);
            baidu(ele).addClass('testClass');
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    group.addItem({
        ident: 'jQuery.removeClass()',
        des: '删除样式名称',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
        },
        run: function(){
            ele.innerHTML = '<div class="testClass"></div>';
            $(ele.firstChild).removeClass('testClass');
            ele.innerHTML = '';
        },
        
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.removeClass()',
        des: '删除样式名称',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
        },
        run: function(){
            ele.innerHTML = '<div class="testClass"></div>';
            baidu(ele.firstChild).removeClass('testClass');
            ele.innerHTML = '';
        },
        
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });

	group.addItem({
        ident: 'jQuery.toggle()',
        des: '显示或隐藏匹配的元素',
		onbeforestart: function(evt){
			var me = evt.target,
				box = me.container = document.createElement('div');
            document.body.appendChild(box);
	        me.ele = $(box);
        },
        run: function(){
	        this.ele.toggle();
        },

        onafterend: function(evt){
	        var me = evt.target;
            document.body.removeChild(me.container);
	        me.ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.toggle()',
        des: '显示或隐藏匹配的元素',
	    onbeforestart: function(evt){
		    var me = evt.target,
                box = me.container = document.createElement('div');
            document.body.appendChild(box);
            me.ele = $(box);
        },
        run: function(){
            this.ele.toggle();
        },

        onafterend: function(evt){
            var me = evt.target;
            document.body.removeChild(me.container);
            me.ele = null;
        }
    });
    
    group.addItem({
        ident: 'jQuery.toggleClass()',
        des: '切换样式名称',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
        },
        run: function(){
            $(ele).toggleClass('testClass');
        },
        
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.toggleClass()',
        des: '切换样式名称',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
        },
        run: function(){
            baidu(ele).toggleClass('testClass');
        },
        
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    group.addItem({
        ident: 'jQuery.hasClass()',
        des: '判断样式名称',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.className = 'testClass';
        },
        run: function(){
            $(ele).hasClass('testClass');
        },
        
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.hasClass()',
        des: '判断样式名称',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.className = 'testClass';
        },
        run: function(){
            baidu(ele).hasClass('testClass');
        },
        
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    group.addItem({
        ident: 'jQuery.css()',
        des: '设置取得样式',
        run: function(){
            var ele = document.createElement('div');
            document.body.appendChild(ele);
            $(ele).css('width', 100);
            $(ele).css('width');
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.css()',
        des: '设置取得样式',
        run: function(){
            var ele = document.createElement('div');
            document.body.appendChild(ele);
            baidu(ele).css('width', 100);
            baidu(ele).css('width');
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    group.addItem({
        ident: 'jQuery.hide()',
        des: '隐藏',
        run: function(){
            var ele = document.createElement('div');
            document.body.appendChild(ele);
            $(ele).hide();
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.hide()',
        des: '隐藏',
        run: function(){
            var ele = document.createElement('div');
            document.body.appendChild(ele);
            baidu(ele).hide();
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    group.addItem({
        ident: 'jQuery.show()',
        des: '显示',
        run: function(){
            var ele = document.createElement('div');
            ele.style.display = 'none';
            document.body.appendChild(ele);
            $(ele).show();
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.show()',
        des: '显示',
        run: function(){
            var ele = document.createElement('div');
            ele.style.display = 'none';
            document.body.appendChild(ele);
            baidu(ele).show();
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    return group;
});