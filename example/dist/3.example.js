webpackJsonp([3],{42:function(e,t,a){var n=React.createClass({displayName:"Example",getInitialState:function(){return{ajaxData:[],data:this.getData()}},componentDidMount:function(){this.setState({ajaxData:this.getData()})},getData:function(){return[{id:1,name:"张三",phone:"13312341234",prov:"北京",role:"管理员"},{id:3,name:"李四",phone:"18912341234",prov:"四川",role:"超级管理员"},{id:2,name:"王五",phone:"13512341234",prov:"杭州",role:"编辑"}]},sortData:function(){var e=Array.prototype.slice.call(this.state.data);e.sort(function(e,t){return e.id-t.id}),this.setState({data:e})},tableDelete:function(e){RUI.DialogManager.alert(JSON.stringify(e))},fieldFormat:function(e,t){return t.name+" "+(e+"").replace(/(\d{3})(\d{4})(\d{4})/g,function(e,t,a,n){return t+"-"+a+"-"+n})},render:function(){var e=this.state.data;return React.createElement("div",{className:"example-input"},React.createElement("h2",{className:"title"},"表格",React.createElement("span",null,"Table")),React.createElement("h3",{className:"sub-title"},"演示"),React.createElement("div",{className:"example"},React.createElement("h4",{className:"final-title"},"默认表格"),React.createElement("div",null,React.createElement(RUI.Table,{dataSource:e})),React.createElement("h4",{className:"final-title"},"动态渲染"),React.createElement("div",null,React.createElement(RUI.Table,{dataSource:this.state.ajaxData})),React.createElement("h4",{className:"final-title"},"自定义标题格"),React.createElement("div",null,React.createElement(RUI.Table,{dataSource:e},React.createElement(RUI.Column,{dataField:"id"},React.createElement(RUI.Table.TitleRender,null,React.createElement("a",{onClick:this.sortData},"序号(点击后排序)"))),React.createElement(RUI.Column,{title:"用户名",dataField:"name"}),React.createElement(RUI.Column,{title:"手机号",dataField:"phone",fieldFunction:this.fieldFormat}),React.createElement(RUI.Column,{title:"省份",dataField:"prov"}),React.createElement(RUI.Column,{title:"角色",dataField:"role"}))),React.createElement("h4",{className:"final-title"},"自定义单元格"),React.createElement("div",null,React.createElement(RUI.Table,{dataSource:e},React.createElement(RUI.Column,{checkbox:!0},React.createElement(RUI.Table.TitleRender,null,React.createElement(RUI.Checkbox,{selected:0})),React.createElement(RUI.Table.ItemRender,null,React.createElement(RUI.Checkbox,{selected:0}))),React.createElement(RUI.Column,{title:"用户名",dataField:"name"}),React.createElement(RUI.Column,{title:"手机号",dataField:"phone"}),React.createElement(RUI.Column,{title:"省份",dataField:"prov"}),React.createElement(RUI.Column,{title:"角色",dataField:"role"}),React.createElement(RUI.Column,{title:"操作"},React.createElement(RUI.Table.ItemRender,null,React.createElement(RUI.Button,{onClick:this.tableDelete},"删除")))))),React.createElement("h3",{className:"sub-title"},"源码"),React.createElement("div",{className:"source"},React.createElement("textarea",{defaultValue:a(86)})))}});e.exports=n},86:function(e,t){e.exports='var Example = React.createClass({\n    getInitialState:function() {\n        return {\n            ajaxData:[],\n            data:this.getData()\n        };\n    },\n    componentDidMount:function() {\n        // 你就假设这儿有一个ajax请求吧\n        this.setState({\n            ajaxData:this.getData()\n        });\n    },\n    getData:function() {\n        return [\n            {id:1,name:"张三",phone:"13312341234", prov:"北京", role:"管理员"},\n            {id:3,name:"李四",phone:"18912341234", prov:"四川", role:"超级管理员"},\n            {id:2,name:"王五",phone:"13512341234", prov:"杭州", role:"编辑"}\n        ];\n    },\n    sortData:function() {\n        var array = Array.prototype.slice.call(this.state.data);\n        array.sort(function(a, b) {\n            return a.id - b.id;\n        });\n        this.setState({\n            data:array\n        });\n    },\n    tableDelete:function(data) {\n        RUI.DialogManager.alert(JSON.stringify(data));\n    },\n    fieldFormat:function(data, source) {\n        return source.name + \' \' + (data+"").replace(/(\\d{3})(\\d{4})(\\d{4})/g, function(match, a1, a2, a3) {\n            return a1 + \'-\' + a2 + \'-\' + a3;\n        });\n    },\n    render:function() {\n        var sourceData = this.state.data;\n\n        return <div className="example-input">\n            <h2 className="title">表格<span>Table</span></h2>\n            <h3 className="sub-title">演示</h3>\n            <div className="example">\n                <h4 className="final-title">默认表格</h4>\n                <div>\n                    <RUI.Table dataSource={sourceData} />\n                </div>\n                <h4 className="final-title">动态渲染</h4>\n                <div>\n                    <RUI.Table dataSource={this.state.ajaxData} />\n                </div>\n                <h4 className="final-title">自定义标题格</h4>\n                <div>\n                    <RUI.Table dataSource={sourceData}>\n                        <RUI.Column dataField={"id"}>\n                            <RUI.Table.TitleRender>\n                                <a onClick={this.sortData}>序号(点击后排序)</a>\n                            </RUI.Table.TitleRender>\n                        </RUI.Column>\n                        <RUI.Column title={"用户名"} dataField={"name"} />\n                        <RUI.Column title={"手机号"} dataField={"phone"} fieldFunction={this.fieldFormat} />\n                        <RUI.Column title={"省份"} dataField={"prov"} />\n                        <RUI.Column title={"角色"} dataField={"role"} />\n                    </RUI.Table>\n                </div>\n                <h4 className="final-title">自定义单元格</h4>\n                <div>\n                    <RUI.Table dataSource={sourceData}>\n                        <RUI.Column checkbox={true}>\n                            <RUI.Table.TitleRender>\n                                <RUI.Checkbox selected={0} />\n                            </RUI.Table.TitleRender>\n                            <RUI.Table.ItemRender>\n                                <RUI.Checkbox selected={0} />\n                            </RUI.Table.ItemRender>\n                        </RUI.Column>\n                        <RUI.Column title={"用户名"} dataField={"name"}/>\n                        <RUI.Column title={"手机号"} dataField={"phone"} />\n                        <RUI.Column title={"省份"} dataField={"prov"} />\n                        <RUI.Column title={"角色"} dataField={"role"} />\n                        <RUI.Column title={"操作"}>\n                            <RUI.Table.ItemRender>\n                                <RUI.Button onClick={this.tableDelete}>删除</RUI.Button>\n                            </RUI.Table.ItemRender>\n                        </RUI.Column>\n                    </RUI.Table>\n                </div>\n            </div>\n            <h3 className="sub-title">源码</h3>\n            <div className="source">\n                <textarea defaultValue={require(\'raw!./table.js\')} />\n            </div>\n        </div>;\n    }\n});\n\nmodule.exports = Example;'}});