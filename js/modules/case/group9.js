define(function(require, exports, module){

    //暴露全局变量，为了在控制台调试
    baidu = require('../../libs/tangram');
    $ = require('../../libs/jquery');

    var Group = require('../../modules/base/Group'),
        group = new Group({
            title: '网络传输'
        });

    var url = String(location.href).replace('html/main.html?case=9','php/');

    group.addItem({
        ident: 'jQuery.ajax()',
        des: '发送ajax POST请求，并取得返回值',
        run: function(){
            jQuery.ajax({
                'url': url+'ajax-test.php',
                'type': 'POST',
                'data': {
                    'abc':123
                },
                'success': function(data){
                    return data;
                }
            });
        }
    });

    group.addItem({
        ident: 'baidu.ajax()',
        des: '发送ajax POST请求，并取得返回值',
        run: function(){
            baidu.ajax({
                'url': url+'ajax-test.php',
                'type': 'POST',
                'data': {
                    'abc':123
                },
                'success': function(data){
                    return data;
                }
            });
        }
    });

    group.addItem({
        ident: 'jQuery.ajax()',
        des: '发送ajax GET请求，并取得返回值',
        run: function(){
            jQuery.ajax({
                'url': url+'ajax-test.php',
                'type': 'GET',
                'data': {
                    'abc':123
                },
                'success': function(data){
                    return data;
                }
            });
        }
    });

    group.addItem({
        ident: 'baidu.ajax()',
        des: '发送ajax GET请求，并取得返回值',
        run: function(){
            baidu.ajax({
                'url': url+'ajax-test.php',
                'type': 'GET',
                'data': {
                    'abc':123
                },
                'success': function(data){
                    return data;
                }
            });
        }
    });

    group.addItem({
        ident: 'jQuery.ajax()',
        des: '发送ajax失败',
        run: function(){
            jQuery.ajax({
                'url': url+'undefined.php',
                'data': {
                    'abc':123
                },
                'error': function(){
                    var i = 0; i++; return i;
                }
            });
        }
    });

    group.addItem({
        ident: 'baidu.ajax()',
        des: '发送ajax失败',
        run: function(){
            baidu.ajax({
                'url': url+'undefined.php',
                'data': {
                    'abc':123
                },
                'error': function(){
                    var i = 0; i++; return i;
                }
            });
        }
    });

    group.addItem({
        ident: 'jQuery.param()',
        des: '创建一个序列化的对象',
        run: function(){
            jQuery.param({name:'wangxiao',test:123});
        }
    });

    group.addItem({
        ident: 'baidu.param()',
        des: '创建一个序列化的对象',
        run: function(){
            baidu.param({name:'wangxiao',test:123});
        }
    });

    group.addItem({
        ident: 'jQuery.get()',
        des: '发送ajax GET请求，并取得返回值',
        run: function(){
            jQuery.get(url+'ajax-test.php',{abc:123},function(data){
                return data;
            });
        }
    });

    group.addItem({
        ident: 'baidu.get()',
        des: '发送ajax GET请求，并取得返回值',
        run: function(){
            baidu.get(url+'ajax-test.php',{abc:123},function(data){
                return data;
            });
        }
    });

    group.addItem({
        ident: 'jQuery.post()',
        des: '发送ajax POST请求，并取得返回值',
        run: function(){
            jQuery.post(url+'ajax-test.php',{abc:123},function(data){
                return data;
            });
        }
    });

    group.addItem({
        ident: 'baidu.post()',
        des: '发送ajax POST请求，并取得返回值',
        run: function(){
            baidu.post(url+'ajax-test.php',{abc:123},function(data){
                return data;
            });
        }
    });

    return group;
});