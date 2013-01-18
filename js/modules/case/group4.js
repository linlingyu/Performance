define(function(require, exports, module){
    var baidu = require('../../libs/tangram'),
        $ = require('../../libs/jquery'),
        Group = require('../../modules/base/Group'),
        group = new Group({
            title: '位置、范围'
        }),
        parEl, ele;
        
    group.addItem({
        ident: 'jQuery.offset()',
        des: '取得元素偏移量',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
        },
        run: function(){
            $(ele).offset();
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.offset()',
        des: '取得元素偏移量',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
        },
        run: function(){
            baidu(ele).offset();
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'jQuery.position()',
        des: '取得元素相对于父元素的偏移量',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
        },
        run: function(){
            $(ele).position();
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.position()',
        des: '取得元素相对于父元素的偏移量',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
        },
        run: function(){
            baidu(ele).position();
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'jQuery.scrollLeft/scrollTop()',
        des: '取得滚动距离',
        run: function(){
            $(document.body).scrollLeft();
            $(document.body).scrollTop();
        }
    });
    group.addItem({
        ident: 'baidu.scrollLeft/scrollTop()',
        des: '取得滚动距离',
        run: function(){
            baidu(document.body).scrollLeft();
            baidu(document.body).scrollTop();
        }
    });
    group.addItem({
        ident: 'jQuery.width()',
        des: '取得宽度',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.style.width = '100px';
        },
        run: function(){
            $(ele).width();
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.width()',
        des: '取得宽度',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.style.width = '100px';
        },
        run: function(){
            baidu(ele).width();
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'jQuery.height()',
        des: '取得高度',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.style.height = '100px';
        },
        run: function(){
            $(ele).height();
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.height()',
        des: '取得高度',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.style.height = '100px';
        },
        run: function(){
            baidu(ele).height();
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    group.addItem({
        ident: 'jQuery.innerWidth()',
        des: '取得宽度（包括padding）',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.style.width = '100px';
            ele.style.padding = '10px';
        },
        run: function(){
            $(ele).innerWidth();
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.innerWidth()',
        des: '取得宽度（包括padding）',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.style.width = '100px';
            ele.style.padding = '10px';
        },
        run: function(){
            baidu(ele).innerWidth();
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    group.addItem({
        ident: 'jQuery.innerHeight()',
        des: '取得高度（包括padding）',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.style.height = '100px';
            ele.style.padding = '10px';
        },
        run: function(){
            $(ele).innerHeight();
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.innerHeight()',
        des: '取得高度（包括padding）',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.style.height = '100px';
            ele.style.padding = '10px';
        },
        run: function(){
            baidu(ele).innerHeight();
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    group.addItem({
        ident: 'jQuery.outerWidth(true)',
        des: '取得宽度（包括margin）',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.style.width = '100px';
            ele.style.padding = '10px';
            ele.style.margin = '10px';
        },
        run: function(){
            $(ele).outerWidth(true);
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.outerWidth(true)',
        des: '取得宽度（包括margin）',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.style.width = '100px';
            ele.style.padding = '10px';
            ele.style.margin = '10px';
        },
        run: function(){
            baidu(ele).outerWidth(true);
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'jQuery.outerHeight(true)',
        des: '取得高度（包括margin）',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.style.height = '100px';
            ele.style.padding = '10px';
            ele.style.margin = '10px';
        },
        run: function(){
            $(ele).outerHeight(true);
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    group.addItem({
        ident: 'baidu.outerHeight(true)',
        des: '取得高度（包括margin）',
        onbeforestart: function(){
            ele = document.createElement('div');
            document.body.appendChild(ele);
            ele.style.height = '100px';
            ele.style.padding = '10px';
            ele.style.margin = '10px';
        },
        run: function(){
            baidu(ele).outerHeight(true);
        },
        onafterend: function(){
            document.body.removeChild(ele);
            ele = null;
        }
    });
    
    
    return group;
});