webpackJsonp([5],{41:function(e,a,l){var t=React.createClass({displayName:"Example",render:function(){return React.createElement("div",{className:"example-input"},React.createElement("h2",{className:"title"},"下拉选框",React.createElement("span",null,"Select")),React.createElement("h3",{className:"sub-title"},"演示"),React.createElement("div",{className:"example"},React.createElement("h4",{className:"final-title"},"默认"),React.createElement("div",null,React.createElement(RUI.Select,{data:[{key:"查看",value:"1"},{key:"编辑",value:"2"},{key:"删除",value:"3"}],value:{key:"查看",value:"1"},stuff:!0,event:"click",className:"rui-theme-1"})),React.createElement("h4",{className:"final-title"},"另外一种样式"),React.createElement("div",null,React.createElement(RUI.Select,{ref:"selectBody",data:[{key:"查看",value:"1"},{key:"你好",value:"2"}],value:{key:"查看",value:"1"},className:"rui-theme-3",stuff:!0,callback:this.selectCallback})),React.createElement("h4",{className:"final-title"},"带搜索框"),React.createElement("div",null,React.createElement(RUI.Select,{data:[{key:"查看",value:"1"},{key:"a",value:"1"},{key:"aa",value:"1"},{key:"b",value:"1"},{key:"bba",value:"1"}],value:{key:"查看",value:"1"},filter:!0,className:"rui-theme-3",stuff:!0,filterCallback:this.filterHandle}))),React.createElement("h3",{className:"sub-title"},"源码"),React.createElement("div",{className:"source"},React.createElement("textarea",{defaultValue:l(87)})))}});e.exports=t},87:function(e,a){e.exports="var Example = React.createClass({\n    render:function() {\n        return <div className=\"example-input\">\n            <h2 className=\"title\">下拉选框<span>Select</span></h2>\n            <h3 className=\"sub-title\">演示</h3>\n            <div className=\"example\">\n                <h4 className=\"final-title\">默认</h4>\n                <div>\n                    <RUI.Select\n                        data={[{key:'查看',value:'1'}, {key:'编辑',value:'2'}, {key:'删除',value:'3'}]}\n                        value={{key:'查看',value:'1'}}\n                        stuff={true}\n                        event={'click'}\n                        className=\"rui-theme-1\">\n                    </RUI.Select>\n                </div>\n                <h4 className=\"final-title\">另外一种样式</h4>\n                <div>\n                    <RUI.Select\n                        ref=\"selectBody\"\n                        data={[{key:'查看',value:'1'},{key:'你好',value:'2'}]}\n                        value={{key:'查看',value:'1'}}\n                        className=\"rui-theme-3\"\n                        stuff={true}\n                        callback={this.selectCallback}>\n                    </RUI.Select>\n                </div>\n                <h4 className=\"final-title\">带搜索框</h4>\n                <div>\n                    <RUI.Select\n                        data={[{key:'查看',value:'1'}, {key:'a',value:'1'}, {key:'aa',value:'1'}, {key:'b',value:'1'}, {key:'bba',value:'1'}]}\n                        value={{key:'查看',value:'1'}}\n                        filter={true}\n                        className=\"rui-theme-3\"\n                        stuff={true}\n                        filterCallback={this.filterHandle}>\n                    </RUI.Select>\n                </div>\n            </div>\n            <h3 className=\"sub-title\">源码</h3>\n            <div className=\"source\">\n                <textarea defaultValue={require('raw!./select.js')} />\n            </div>\n        </div>;\n    }\n});\n\nmodule.exports = Example;"}});