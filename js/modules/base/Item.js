define(function(require, exports, module){
    var baidu = require('../../libs/tangram'),
        Item = baidu.lang.createClass(function(options){
            var me = this;
            me._options = baidu.extend({
                ident: 'default ident',
                des: 'default description',
//                interval: 10
                interval: 100000
            }, options);
            me._parent = null;
            me._columns = [];
            me._times = 0;
            me._createUI();
        }).extend({
            _createUI: function(){
                var me = this,
                    guid = me.guid,
                    opts = me._options,
                    cols = me._columns,
                    tplCheckbox = '<input id="#{guid}" type="checkbox" checked="true"/>',
                    tplProgress = '<span class="#{class}"><span id="#{proId}" class="#{proClass}"></span></span><span id="#{numId}" class="#{numClass}">0%</span>',
                    tplTimer = '<div id="#{rsid}" class="#{class}">未开始</div>',
                    tplSpeed = '<div id="#{rsid}" class="#{class}">未开始</div>',
                    
                    
                    checkbox = baidu.string(tplCheckbox).format({
                        guid: guid + '-checkbox'
                    }),
                    progress = baidu.string(tplProgress).format({
                        'class': 'progress-bar',
                        proId: guid + '-progressValue',
                        proClass: 'progress-value',
                        numId: guid + '-progressNum',
                        numClass: 'progress-num'
                    }),
                    timer = baidu.string(tplTimer).format({
                        rsid: guid + '-timer',
                        'class': guid + '-timer'
                    }),
                    speed = baidu.string(tplSpeed).format({
                        rsid: guid + '-speed',
                        'class': guid + '-speed'
                    });
                cols.push(checkbox);
                cols.push(opts.ident);
                cols.push(opts.des);
                cols.push(opts.interval);
                cols.push(progress);
                cols.push(timer);
                cols.push(speed);
            },
            
            
            
            _initialize: function(_parent){
                this._parent = _parent;
            },
            
            getColumns: function(){
                return this._columns;
            },
            
            getInterval: function(){
                return this._options.interval;
            },
            
            isEnable: function(){
                var me = this,
                    checkbox = me._checkbox || (me._checkbox = baidu('#' + me.guid + '-checkbox').get(0));
                return checkbox.checked;
            },
            
            updateUI: function(count, times){
                count = count || 0;
                times = times || 0;
                var me = this,
                    opts = me._options,
                    percent = Math.round(count / opts.interval * 100) + '%',
                    speed = times ? Math.round(count / times * 1000) : 'N',
                    proValue = me._progressValue || (me._progressalue = baidu('#' + me.guid + '-progressValue').get(0)),
                    proNum = me._progressNum || (me._progressNum = baidu('#' + me.guid + '-progressNum').get(0)),
                    timeEl = me._progressTime || (me._progressTime = baidu('#' + me.guid + '-timer').get(0)),
                    speedEl = me._progressSpeed || (me._progressSpeed = baidu('#' + me.guid + '-speed').get(0));
                proValue.style.width = percent;
                proNum.innerHTML = percent;
                timeEl.innerHTML = times + '&nbsp;ms';
                speedEl.innerHTML = speed + '&nbsp;次/s';
            },
            
            launch: function(val){
                var me = this,
                    opts = me._options;
	            opts.run.call(me);
            }
        });
    return Item;
});