webpackJsonp([6],{39:function(e,a,t){var n=React.createClass({displayName:"Example",getInitialState:function(){return{asyncMode:0}},componentDidMount:function(){var e=this;setTimeout(function(){e.setState({asyncMode:1})},300)},valueChange:function(e){RUI.DialogManager.alert(JSON.stringify(e.data))},groupChange:function(e){RUI.DialogManager.alert(JSON.stringify(e.data))},render:function(){return React.createElement("div",{className:"example-input"},React.createElement("h2",{className:"title"},"单选框",React.createElement("span",null,"Radio")),React.createElement("h3",{className:"sub-title"},"演示"),React.createElement("div",{className:"example"},React.createElement("h4",{className:"final-title"},"单个按钮"),React.createElement("div",null,React.createElement(RUI.Radio,{value:"type_1",selected:1,onChange:this.valueChange},"初始已选"),React.createElement(RUI.Radio,{value:"type_2",selected:this.state.asyncMode},"初始未选"),React.createElement(RUI.Radio,{value:"type_3",selected:0,disable:!0},"禁用状态")),React.createElement("h4",{className:"final-title"},"组"),React.createElement("div",null,React.createElement(RUI.RadioGroup,{ref:"radioGroup",onChange:this.groupChange,value:"type_1"},React.createElement(RUI.Radio,{value:"type_1"},"初始已选"),React.createElement(RUI.Radio,{value:"type_2"},"初始未选"),React.createElement(RUI.Radio,{value:"type_3"},"分组测试"),React.createElement(RUI.Radio,{value:"type_4",disable:!0},"禁用状态")))),React.createElement("h3",{className:"sub-title"},"源码"),React.createElement("div",{className:"source"},React.createElement("textarea",{defaultValue:t(83)})))}});e.exports=n},83:function(e,a){e.exports='var Example = React.createClass({\n    getInitialState:function() {\n        return {\n            asyncMode:0\n        };\n    },\n    componentDidMount:function() {\n        var _this = this;\n        setTimeout(function() {\n            _this.setState({\n                asyncMode:1\n            });\n        }, 300);\n    },\n    valueChange:function(e) {\n        RUI.DialogManager.alert(JSON.stringify(e.data));\n    },\n    groupChange:function(e) {\n        RUI.DialogManager.alert(JSON.stringify(e.data));\n    },\n    render:function() {\n        return <div className="example-input">\n            <h2 className="title">单选框<span>Radio</span></h2>\n            <h3 className="sub-title">演示</h3>\n            <div className="example">\n                <h4 className="final-title">单个按钮</h4>\n                <div>\n                    <RUI.Radio value="type_1" selected={1} onChange={this.valueChange}>初始已选</RUI.Radio>\n                    <RUI.Radio value="type_2" selected={this.state.asyncMode}>初始未选</RUI.Radio>\n                    <RUI.Radio value="type_3" selected={0} disable={true}>禁用状态</RUI.Radio>\n                </div>\n                <h4 className="final-title">组</h4>\n                <div>\n                    <RUI.RadioGroup ref="radioGroup" onChange={this.groupChange} value={"type_1"}>\n                        <RUI.Radio value="type_1">初始已选</RUI.Radio>\n                        <RUI.Radio value="type_2">初始未选</RUI.Radio>\n                        <RUI.Radio value="type_3">分组测试</RUI.Radio>\n                        <RUI.Radio value="type_4" disable={true}>禁用状态</RUI.Radio>\n                    </RUI.RadioGroup>\n                </div>\n            </div>\n            <h3 className="sub-title">源码</h3>\n            <div className="source">\n                <textarea defaultValue={require(\'raw!./radio.js\')} />\n            </div>\n        </div>;\n    }\n});\n\nmodule.exports = Example;'}});