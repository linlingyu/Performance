define(function(require, exports, module){
    baidu = require('../../libs/tangram');
    $ = require('../../libs/jquery');

    var Group = require('../../modules/base/Group'),
        group = new Group({
            title: '筛选'
        });
    
    var html = "<div id='test-something' style='display:none;'>"+ 
                    "<div class='a'><span>a</span><p>aa</p></div>"+
                    "<div class='b'><span>b</span><p>bb</p></div>"+
                    "<div class='c'><span>c</span><p>cc</p></div>"+
                    "<div class='d'><span>d</span><p>dd</p></div>"+
                    "<div class='e'><span>e</span><p>ee</p></div>"+
                    "<div class='f'><span>f</span><p>ff</p></div>"+
               "</div>";

    baidu('body').append(html);

    var ele,ele2;

    group.addItem({
        ident: 'jQuery().eq()',
        des: '获取jQueryDom里的第N个元素',
        onbeforestart: function(){
            ele = $('#test-something').find('div');
        },
        run: function(){
            ele.eq(3);
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'baidu().eq()',
        des: '获取tangramDom里的第N个元素',
        onbeforestart: function(){
            ele = baidu('#test-something').find('div');
        },
        run: function(){
            ele.eq(3);
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'jQuery().is()',
        des: '监测jQueryDom里是否有某Selector',
        onbeforestart: function(){
            ele = $('#test-something').find('div');
        },
        run: function(){
            ele.is('.c');
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'baidu().is()',
        des: '监测tangramDom里是否有某Selector',
        onbeforestart: function(){
            ele = baidu('#test-something').find('div');
        },
        run: function(){
            ele.is('.c');
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'jQuery().first()',
        des: '获取jQueryDom里第一个元素',
        onbeforestart: function(){
            ele = $('#test-something').find('div');
        },
        run: function(){
            ele.first();
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'baidu().first()',
        des: '获取tangramDom里第一个元素',
        onbeforestart: function(){
            ele = baidu('#test-something').find('div');
        },
        run: function(){
            ele.first();
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'jQuery().last()',
        des: '获取jQueryDom里最后一个元素',
        onbeforestart: function(){
            ele = $('#test-something').find('div');
        },
        run: function(){
            ele.last();
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'baidu().last()',
        des: '获取tangramDom里最后一个元素',
        onbeforestart: function(){
            ele = baidu('#test-something').find('div');
        },
        run: function(){
            ele.last();
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'jQuery().filter()',
        des: '过滤jQueryDom里某个selector',
        onbeforestart: function(){
            ele = $('#test-something').find('div');
        },
        run: function(){
            ele.filter('.c');
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'baidu().filter()',
        des: '过滤tangramDom里某个selector',
        onbeforestart: function(){
            ele = baidu('#test-something').find('div');
        },
        run: function(){
            ele.filter('.c');
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'jQuery().map()',
        des: '获取jQueryDom里当前的元素',
        onbeforestart: function(){
            ele = $('#test-something').find('div');
        },
        run: function(){
            ele.map(function(){return this.id;});
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'baidu().map()',
        des: '获取tangramDom里当前的元素',
        onbeforestart: function(){
            ele = baidu('#test-something').find('div');
        },
        run: function(){
            ele.map(function(){return this.id;});
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'jQuery().has()',
        des: '获取jQueryDom里符合某selector的元素',
        onbeforestart: function(){
            ele = $('#test-something').find('div');
        },
        run: function(){
            ele.has('.c');
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'baidu().has()',
        des: '获取tangramDom里符合某selector的元素',
        onbeforestart: function(){
            ele = baidu('#test-something').find('div');
        },
        run: function(){
            ele.has('.c');
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'jQuery().contains()',
        des: '判断jQueryDom是否包含某元素',
        onbeforestart: function(){
            ele = $('#test-something')[0];
            ele2 = $('#test-something .c')[0];
        },
        run: function(){
            $.contains(ele,ele2);
        },
        onafterend: function(){
            ele = null;
            ele2 = null;
        }
    });

    group.addItem({
        ident: 'baidu().contains()',
        des: '判断tangramDom是否包含某元素',
        onbeforestart: function(){
            ele = baidu('#test-something')[0];
            ele2 = baidu('#test-something .c')[0];
        },
        run: function(){
            baidu.dom.contains(ele,ele2);
        },
        onafterend: function(){
            ele = null;
            ele2 = null;
        }
    });

    group.addItem({
        ident: 'jQuery().not()',
        des: '过滤掉jQueryDom中某些符合selector的元素',
        onbeforestart: function(){
            ele = $('#test-something div');
        },
        run: function(){
            ele.not('.c');
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'baidu().not()',
        des: '过滤掉tangramDom中某些符合selector的元素',
        onbeforestart: function(){
            ele = baidu('#test-something div');
        },
        run: function(){
            ele.not('.c');
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'jQuery().slice()',
        des: '获取jQueryDom中某些元素',
        onbeforestart: function(){
            ele = $('#test-something div');
        },
        run: function(){
            ele.slice(1,3);
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'baidu().slice()',
        des: '获取tangramDom中某些元素',
        onbeforestart: function(){
            ele = baidu('#test-something div');
        },
        run: function(){
            ele.slice(1,3);
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'jQuery().children()',
        des: '获取jQueryDom中子元素',
        onbeforestart: function(){
            ele = $('#test-something div');
        },
        run: function(){
            ele.children();
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'baidu().children()',
        des: '获取tangramDom中子元素',
        onbeforestart: function(){
            ele = baidu('#test-something div');
        },
        run: function(){
            ele.children();
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'jQuery().closest()',
        des: '获取jQueryDom中相邻的上一级元素',
        onbeforestart: function(){
            ele = $('#test-something div.c');
        },
        run: function(){
            ele.closest('div');
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'baidu().closest()',
        des: '获取tangramDom中相邻的上一级元素',
        onbeforestart: function(){
            ele = baidu('#test-something div.c');
        },
        run: function(){
            ele.closest('div');
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'jQuery().find()',
        des: '在jQueryDom中查找符合selector的元素',
        onbeforestart: function(){
            ele = $('#test-something');
        },
        run: function(){
            ele.find('.c');
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'baidu().find()',
        des: '在tangramDom中查找符合selector的元素',
        onbeforestart: function(){
            ele = baidu('#test-something');
        },
        run: function(){
            ele.find('.c');
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'jQuery().next()',
        des: '在jQueryDom中查找下一个元素',
        onbeforestart: function(){
            ele = $('#test-something div.c');
        },
        run: function(){
            ele.next();
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'baidu().next()',
        des: '在tangramDom中查找下一个元素',
        onbeforestart: function(){
            ele = baidu('#test-something div.c');
        },
        run: function(){
            ele.next();
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'jQuery().nextAll()',
        des: '在jQueryDom中查找之后的所有元素',
        onbeforestart: function(){
            ele = $('#test-something div.c');
        },
        run: function(){
            ele.nextAll();
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'baidu().nextAll()',
        des: '在tangramDom中查找之后的所有元素',
        onbeforestart: function(){
            ele = baidu('#test-something div.c');
        },
        run: function(){
            ele.nextAll();
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'jQuery().nextUntil()',
        des: '在jQueryDom中查找之后的所有元素，直到符合selector的元素',
        onbeforestart: function(){
            ele = $('#test-something div.c');
        },
        run: function(){
            ele.nextUntil('.f');
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'baidu().nextUntil()',
        des: '在tangramDom中查找之后的所有元素，直到符合selector的元素',
        onbeforestart: function(){
            ele = baidu('#test-something div.c');
        },
        run: function(){
            ele.nextUntil('.f');
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'jQuery().offsetParent()',
        des: 'jQueryDom中返回最近一个被定位的父元素',
        onbeforestart: function(){
            ele = $('#test-something div.c');
        },
        run: function(){
            ele.offsetParent();
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'baidu().offsetParent()',
        des: 'tangramDom中返回最近一个被定位的父元素',
        onbeforestart: function(){
            ele = baidu('#test-something div.c');
        },
        run: function(){
            ele.offsetParent();
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'jQuery().parent()',
        des: 'jQueryDom中返回最近一个父元素',
        onbeforestart: function(){
            ele = $('#test-something div.c');
        },
        run: function(){
            ele.parent();
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'baidu().parent()',
        des: 'tangramDom中返回最近一个父元素',
        onbeforestart: function(){
            ele = baidu('#test-something div.c');
        },
        run: function(){
            ele.parent();
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'jQuery().parents()',
        des: 'jQueryDom中返回所有的父元素',
        onbeforestart: function(){
            ele = $('#test-something div.c');
        },
        run: function(){
            ele.parents();
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'baidu().parents()',
        des: 'tangramDom中返回所有的父元素',
        onbeforestart: function(){
            ele = baidu('#test-something div.c');
        },
        run: function(){
            ele.parents();
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'jQuery().parentsUntil()',
        des: 'jQueryDom中返回所有的父元素，直到符合某个selector的元素',
        onbeforestart: function(){
            ele = $('#test-something div.c');
        },
        run: function(){
            ele.parentsUntil('html');
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'baidu().parentsUntil()',
        des: 'tangramDom中返回所有的父元素，直到符合某个selector的元素',
        onbeforestart: function(){
            ele = baidu('#test-something div.c');
        },
        run: function(){
            ele.parentsUntil('html');
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'jQuery().prev()',
        des: 'jQueryDom中返回相邻的前一个元素',
        onbeforestart: function(){
            ele = $('#test-something div.c');
        },
        run: function(){
            ele.prev('html');
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'baidu().prev()',
        des: 'tangramDom中返回相邻的前一个元素',
        onbeforestart: function(){
            ele = baidu('#test-something div.c');
        },
        run: function(){
            ele.prev('html');
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'jQuery().prevAll()',
        des: '在jQueryDom中相邻的前面所有元素',
        onbeforestart: function(){
            ele = $('#test-something div.c');
        },
        run: function(){
            ele.prevAll();
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'baidu().prevAll()',
        des: '在tangramDom中相邻的前面所有元素',
        onbeforestart: function(){
            ele = baidu('#test-something div.c');
        },
        run: function(){
            ele.prevAll();
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'jQuery().prevUntil()',
        des: '在jQueryDom中相邻的前面所有元素，直到符合某selector停止',
        onbeforestart: function(){
            ele = $('#test-something div.f');
        },
        run: function(){
            ele.prevUntil('.a');
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'baidu().prevUntil()',
        des: '在tangramDom中相邻的前面所有元素，直到符合某selector停止',
        onbeforestart: function(){
            ele = baidu('#test-something div.f');
        },
        run: function(){
            ele.prevUntil('.a');
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'jQuery().siblings()',
        des: '在jQueryDom中相邻的前面所有元素，不包含自身',
        onbeforestart: function(){
            ele = $('#test-something div.c');
        },
        run: function(){
            ele.siblings();
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'baidu().siblings()',
        des: '在tangramDom中相邻的前面所有元素，不包含自身',
        onbeforestart: function(){
            ele = baidu('#test-something div.c');
        },
        run: function(){
            ele.siblings();
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'jQuery().add()',
        des: '在jQueryDom中添加元素',
        onbeforestart: function(){
            ele = $('#test-something div.c');
        },
        run: function(){
            ele.add('#test-something div.d');
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'baidu().add()',
        des: '在tangramDom中添加元素',
        onbeforestart: function(){
            ele = baidu('#test-something div.c');
        },
        run: function(){
            ele.add('#test-something div.d');
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'jQuery().contents()',
        des: '获取jQueryDom中所有元素',
        onbeforestart: function(){
            ele = $('#test-something');
        },
        run: function(){
            ele.contents();
        },
        onafterend: function(){
            ele = null;
        }
    });

    group.addItem({
        ident: 'baidu().contents()',
        des: '获取tangramDom中所有元素',
        onbeforestart: function(){
            ele = baidu('#test-something');
        },
        run: function(){
            ele.contents();
        },
        onafterend: function(){
            ele = null;
        }
    });
    
    return group;
});