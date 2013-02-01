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

	group.addItem({
        ident: 'jQuery.trigger()',
        des: '触发事件默认行为',
        interval: 50000,
		onbeforestart: function(evt){
			var me = evt.target,
				box = me.container = document.createElement('div'),
				element = me.ele = $(box);
            document.body.appendChild(box);
			element.on('click', handler);
        },
        run: function(){
	        this.ele.trigger('click');
        },

        onafterend: function(evt){
	        var me = evt.target;
            document.body.removeChild(me.container);
	        me.ele = null;
        }
    });

	group.addItem({
        ident: 'baidu.trigger()',
        des: '触发事件默认行为',
        interval: 50000,
		onbeforestart: function(evt){
			var me = evt.target,
				box = me.container = document.createElement('div'),
				element = me.ele = baidu(box);
            document.body.appendChild(box);
			element.on('click', handler);
        },
        run: function(){
	        this.ele.trigger('click');
        },

        onafterend: function(evt){
	        var me = evt.target;
            document.body.removeChild(me.container);
	        me.ele = null;
        }
    });

	group.addItem({
        ident: 'jQuery.mouseenter()',
        des: '鼠标指针穿过元素时触发事件',
        interval: 50000,
		onbeforestart: function(evt){
			var me = evt.target;
			me.ele = $('fieldset table');
        },
        run: function(){
	        this.ele.mouseenter(handler);
        },

        onafterend: function(evt){
	        evt.target.ele = null;
        }
    });

	group.addItem({
        ident: 'baidu.mouseenter()',
        des: '鼠标指针穿过元素时触发事件',
        interval: 50000,
		onbeforestart: function(evt){
			var me = evt.target;
			me.ele = baidu('fieldset table');
        },
        run: function(){
	        this.ele.mouseenter(handler);
        },

        onafterend: function(evt){
	        evt.target.ele = null;
        }
    });

	group.addItem({
        ident: 'jQuery.mouseleave()',
        des: '鼠标指针离开元素时触发事件',
        interval: 50000,
		onbeforestart: function(evt){
			var me = evt.target;
			me.ele = $('fieldset table');
        },
        run: function(){
	        this.ele.mouseleave(handler);
        },

        onafterend: function(evt){
	        evt.target.ele = null;
        }
    });

	group.addItem({
        ident: 'baidu.mouseleave()',
        des: '鼠标指针离开元素时触发事件',
        interval: 50000,
		onbeforestart: function(evt){
			var me = evt.target;
			me.ele = baidu('fieldset table');
        },
        run: function(){
	        this.ele.mouseleave(handler);
        },

        onafterend: function(evt){
	        evt.target.ele = null;
        }
    });

	group.addItem({
        ident: 'jQuery.delegate()',
        des: '添加事件代理',
        interval: 50000,
		onbeforestart: function(evt){
			var me = evt.target;
			me.ele = $('fieldset');
        },
        run: function(){
	        this.ele.delegate('table', 'mouseover', handler);
        },

        onafterend: function(evt){
	        evt.target.ele = null;
        }
    });

	group.addItem({
        ident: 'baidu.delegate()',
        des: '添加事件代理',
        interval: 50000,
		onbeforestart: function(evt){
			var me = evt.target;
			me.ele = baidu('fieldset');
        },
        run: function(){
	        this.ele.delegate('table', 'mouseover', handler);
        },

        onafterend: function(evt){
	        evt.target.ele = null;
        }
    });

	group.addItem({
        ident: 'jQuery.undelegate()',
        des: '卸载事件代理',
        interval: 50000,
		onbeforestart: function(evt){
			var me = evt.target;
			me.ele = $('fieldset');
        },
        run: function(){
	        this.ele.undelegate('table', 'mouseover', handler);
        },

        onafterend: function(evt){
	        evt.target.ele = null;
        }
    });

	group.addItem({
        ident: 'baidu.undelegate()',
        des: '卸载事件代理',
        interval: 50000,
		onbeforestart: function(evt){
			var me = evt.target;
			me.ele = baidu('fieldset');
        },
        run: function(){
	        this.ele.undelegate('table', 'mouseover', handler);
        },

        onafterend: function(evt){
	        evt.target.ele = null;
        }
    });

	group.addItem({
        ident: 'jQuery.focusin()',
        des: '元素获得焦点时，触发事件',
        interval: 50000,
		onbeforestart: function(evt){
			var me = evt.target,
				box = me.container = document.createElement('div');
            document.body.appendChild(box);
			box.innerHTML = '<input type="text" value="name">';
			$(box).focusin(handler);
	        me.ele = $('input',box).get(0);
        },
        run: function(){
	        this.ele.focus();
	        this.ele.blur();
        },

        onafterend: function(evt){
	        var me = evt.target;
            document.body.removeChild(me.container);
	        me.ele = null;
		}
    });

	group.addItem({
        ident: 'baidu.focusin()',
        des: '元素获得焦点时，触发事件',
        interval: 50000,
		onbeforestart: function(evt){
			var me = evt.target,
				box = me.container = document.createElement('div');
            document.body.appendChild(box);
			box.innerHTML = '<input type="text" value="name">';
			baidu(box).focusin(handler);
	        me.ele = baidu('input',box).get(0);
        },
        run: function(){
	        this.ele.focus();
	        this.ele.blur();
        },

        onafterend: function(evt){
	        var me = evt.target;
            document.body.removeChild(me.container);
	        me.ele = null;
		}
    });

	group.addItem({
        ident: 'jQuery.focusout()',
        des: '元素失去焦点时，触发事件',
        interval: 50000,
		onbeforestart: function(evt){
			var me = evt.target,
				box = me.container = document.createElement('div');
            document.body.appendChild(box);
			box.innerHTML = '<input type="text" value="name">';
			$(box).focusout(handler);
	        me.ele = $('input',box).get(0);
        },
        run: function(){
	        this.ele.blur();
	        this.ele.focus();
        },

        onafterend: function(evt){
	        var me = evt.target;
            document.body.removeChild(me.container);
	        me.ele = null;
		}
    });

	group.addItem({
        ident: 'baidu.focusout()',
        des: '元素失去焦点时，触发事件',
        interval: 50000,
		onbeforestart: function(evt){
			var me = evt.target,
				box = me.container = document.createElement('div');
            document.body.appendChild(box);
			box.innerHTML = '<input type="text" value="name">';
			baidu(box).focusout(handler);
	        me.ele = baidu('input',box).get(0);
        },
        run: function(){
	        this.ele.blur();
	        this.ele.focus();
        },

        onafterend: function(evt){
	        var me = evt.target;
            document.body.removeChild(me.container);
	        me.ele = null;
		}
    });
    
    return group;
});