define(function(require, exports, module){
    var baidu = require('../../libs/tangram'),
        Item = require('../../modules/base/Item'),
        Timer = require('../../modules/base/Timer'),
        Group = baidu.lang.createClass(function(options){
            var me = this;
            me._options = baidu.extend({
                title: 'default title'
            }, options);
            me._items = [];
            me._timer = new Timer({
                onfinish: function(){me.updateBtn({launch: false, stop: true, toggle: true})}
            });
            me._createUI();
        }).extend({
            _createUI: function(){
                var me = this,
                    guid = me.guid;
                baidu(document.body).append(me.toHTMLString());
                baidu('#' + guid + '-launch').on('click', baidu.fn('launch').bind(me));
                baidu('#' + guid + '-stop').on('click', baidu.fn('_onStop').bind(me));
                baidu('#' + guid + '-toggle').on('click', baidu.fn('_onToggle').bind(me));
                baidu('#' + guid + '-select').on('click', baidu.fn('_onSelect').bind(me));
            },
            
            toHTMLString: function(){
                var me = this,
                    guid = me.guid,
                    opts = me._options,
                    tplContainer = '<fieldset><legend>#{legend}</legend>#{content}</fieldset>',
                    tplTable = '<input id="#{launchId}" type="button" value="launch"/>&nbsp;<input id="#{stopId}" type="button" value="stop" disabled="true"/>&nbsp;<input id="#{toggleId}" type="button" value="pause" disabled="true"/><table id="#{rsid}" cellpadding="3" cellspacing="0" border="1"><thead><tr><th style="width: 5%;"><input type="checkbox" id="#{selectId}" checked="true"><label for="#{labelId}">选择</label></th><th>ID</th><th>说明</th><th>循环次数</th><th>进度</th><th>耗时</th><th>速度</th></tr></thead><tbody></tbody></table>';
                    
                return baidu.string(tplContainer).format({
                    legend: opts.title,
                    content: baidu.string(tplTable).format({
                        launchId: guid + '-launch',
                        stopId: guid + '-stop',
                        toggleId: guid + '-toggle',
                        rsid: guid + '-table',
                        selectId: guid + '-select',
                        labelId: guid + '-select'
                    })
                });
            },
            
            updateBtn: function(options){
                var me = this,
                    btn0 = baidu('#' + me.guid + '-launch').get(0),
                    btn1 = baidu('#' + me.guid + '-stop').get(0),
                    btn2 = baidu('#' + me.guid + '-toggle').get(0);
                btn0.disabled = options.launch;
                btn1.disabled = options.stop;
                btn2.disabled = options.toggle;
            },
            
            _createItem: function(item){
                var me = this,
                    table = me._table || (me._table = baidu('#' + me.guid + '-table').get(0)),
                    tbody = table.tBodies[0],
                    row = tbody.insertRow(tbody.rows.length),
                    cell;
                baidu.forEach(item.getColumns(), function(item, index){
                    cell = row.insertCell(index);
                    cell.innerHTML = item;
                });
            },
            
            addItem: function(options){
                var me = this,
                    item = new Item(options);
                item._initialize(me);
                me._items.push(item);
                me._createItem(item);
            },
            
            launch: function(){
                var me = this;
                baidu.forEach(me._items, function(item){
                    item.updateUI();
                    item.isEnable() && me._timer.add(item);
                });
                me.updateBtn({launch: true, stop: false, toggle: false});
                me._timer.run();
            },
            
            _onStop: function(){
                this._timer.stop();
                this.updateBtn({launch: false, stop: true, toggle: true});
            },
            
            _onToggle: function(){
                var me = this,
                    btn = baidu('#' + me.guid + '-toggle').get(0),
                    mc = btn.value === 'pause' ? 'pause' : 'run',
                    val = btn.value === 'pause' ? 'continue' : 'pause';
                me._timer[mc]();
                btn.value = val;
            },
            
            _onSelect: function(){
                var me = this,
                    ele = baidu('#' + me.guid + '-select').get(0);
                baidu('#' + me.guid + '-table tbody input').prop('checked', ele.checked);
            }
        });
    return Group;
});