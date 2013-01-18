define(function(require, exports, module){
    var baidu = require('../../libs/tangram'),
        Timer = baidu.lang.createClass(function(options){
            !Timer._caseQueue && (Timer._caseQueue = []);
            var me = this;
            me._items = [];
            me._timeOut = null;
            me._interval = 10;//
            
            me._currItem = null;//当前正在运行的项
            me._currCount = 0;//当前项运行的次数
            me._stepTime = 10;
            me._times = 0;
            
            me.onfinish = options.onfinish;
            
        }).extend({
            add: function(item){
                var me = this;
                !baidu.array(Timer._caseQueue).contains(me) && Timer._caseQueue.push(me);
                me._items.push(item);
            },
            
            isOverStepTime: function(time){
                var me = this;
                return +new Date() - time >= me._stepTime;
            },
            
            run: function(){
                if(Timer._running){return;}
                Timer._running = true;
                var me = this, startTime;
                clearTimeout(me._timeOut);
                me._timeOut = setTimeout(function(){
                    //当需要退出
                    if(me._items.length <= 0
                        && me._currCount >= (me._currItem ? me._currItem.getInterval() : 0)){
                        me._currItem && me._currItem.fire('onafterend');
                        me.fire('onfinish');
                        return me.stop();
                    }
                    //当需要切换到下一项
                    if(!me._currItem
                        || me._currCount >= me._currItem.getInterval()){
                        me._currItem && me._currItem.fire('onafterend');
                        me._currItem = me._items.shift();
                        me._currCount = 0;
                        me._startTime = +new Date();
                        me._times = 0;
                        me._currItem.fire('onbeforestart');
                    }
                    startTime = +new Date();
                    while(me._currCount < me._currItem.getInterval()
                        && !me.isOverStepTime(startTime)){
                        me._currItem.launch();
                        me._currCount++;
                    }
                    me._times += +new Date() - startTime;
                    me._currItem.updateUI(me._currCount, me._times);
                    me._timeOut = setTimeout(arguments.callee, me._interval);
                }, 0);
            },
           
            stop: function(){
                var me = this, timer;
                me.pause();
                me._items = [];
                baidu.array(Timer._caseQueue).remove(me);
                me._currItem = null;
                timer = Timer._caseQueue.shift();
                timer && timer.run();
            },
            
            pause: function(){
                var me = this;
                clearTimeout(me._timeOut);
                Timer._running = false;
            }
        });
    return Timer;
});