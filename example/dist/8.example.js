webpackJsonp([8],{37:function(e,a,n){var l=React.createClass({displayName:"Example",followShowLoading:function(e){this.refs.followLoading.open(e.data)},fullShowLoading:function(e){this.refs.fullLoading.open(e.data)},render:function(){return React.createElement("div",{className:"example-tooltip"},React.createElement("h2",{className:"title"},"加载",React.createElement("span",null,"Loading")),React.createElement("h3",{className:"sub-title"},"演示"),React.createElement("div",{className:"example"},React.createElement(RUI.Button,{className:"primary",onClick:this.fullShowLoading},"全屏"),"  ",React.createElement(RUI.Button,{className:"primary",onClick:this.followShowLoading},"跟随")),React.createElement("h3",{className:"sub-title"},"源码"),React.createElement("div",{className:"source"},React.createElement("textarea",{defaultValue:n(81)})),React.createElement(RUI.Loading,{ref:"followLoading",type:"follow",mask:!0,size:"s-small"}),React.createElement(RUI.Loading,{ref:"fullLoading",type:"full-screen",mask:!0,size:"s-small"}))}});e.exports=l},81:function(e,a){e.exports='var Example = React.createClass({\n    followShowLoading:function(e) {\n        this.refs.followLoading.open(e.data);\n    },\n    fullShowLoading:function(e) {\n        this.refs.fullLoading.open(e.data);\n    },\n    render:function() {\n        return <div className="example-tooltip">\n            <h2 className="title">加载<span>Loading</span></h2>\n            <h3 className="sub-title">演示</h3>\n            <div className="example">\n                <RUI.Button className="primary" onClick={this.fullShowLoading}>全屏</RUI.Button> &nbsp;\n                <RUI.Button className="primary" onClick={this.followShowLoading}>跟随</RUI.Button>\n            </div>\n            <h3 className="sub-title">源码</h3>\n            <div className="source">\n                <textarea defaultValue={require(\'raw!./loading.js\')} />\n            </div>\n            <RUI.Loading\n                ref="followLoading"\n                type={\'follow\'}\n                mask={true}\n                size={\'s-small\'}>\n            </RUI.Loading>\n            <RUI.Loading\n                ref="fullLoading"\n                type={\'full-screen\'}\n                mask={true}\n                size={\'s-small\'}>\n            </RUI.Loading>\n        </div>;\n    }\n});\n\nmodule.exports = Example;'}});