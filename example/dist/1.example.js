webpackJsonp([1],{45:function(a,e,t){var n=React.createClass({displayName:"Example",getData:function(){return[{data:"Post",children:[{data:"All Post",children:[{data:"All"},{data:"Published"},{data:"Draft"}]},{data:"Add New"},{data:"Categories",children:[{data:"List"},{data:"Add New"}]},{data:"Tags",children:[{data:"List"},{data:"Add New"}]}]},{data:"Media",children:[{data:"Library"},{data:"Add New"}]},{data:"Appearance",children:[{data:"Themes"},{data:"Theme Options"},{data:"Customize"},{data:"Widgets"},{data:"Menus"},{data:"Editor"}]},{data:"Settings",children:[{data:"General",children:[{data:"Site Title"},{data:"Tagline"},{data:"Site Address"},{data:"Timezone"}]},{data:"Writing"},{data:"Reading"},{data:"Media"},{data:"Permalinks"}]}]},changeHandler:function(a){RUI.DialogManager.alert(JSON.stringify({type:a.type,dataSource:a.data.dataSource,expand:a.data.expand}))},clickHandler:function(a){RUI.DialogManager.alert(JSON.stringify({type:a.type,dataSource:a.data.dataSource}))},render:function(){var a=this.getData();return React.createElement("div",{className:"example-tree"},React.createElement("h2",{className:"title"},"树形菜单",React.createElement("span",null,"Tree")),React.createElement("h3",{className:"sub-title"},"演示"),React.createElement("div",{className:"example"},React.createElement("h4",{className:"final-title"},"初始数据"),React.createElement(RUI.Tree,{dataSource:a}),React.createElement("h4",{className:"final-title"},"事件"),React.createElement(RUI.Tree,{dataSource:a,onExpand:this.changeHandler,onSelect:this.clickHandler})),React.createElement("h3",{className:"sub-title"},"源码"),React.createElement("div",{className:"source"},React.createElement("textarea",{defaultValue:t(91)})))}});a.exports=n},91:function(a,e){a.exports='var Example = React.createClass({\n    getData:function() {\n        return [\n            {\n                data:"Post",\n                children:[\n                    {data:"All Post", children:[{data:"All"}, {data:"Published"}, {data:"Draft"}]},\n                    {data:"Add New"},\n                    {data:"Categories", children:[{data:"List"}, {data:"Add New"}]},\n                    {data:"Tags", children:[{data:"List"}, {data:"Add New"}]}\n                ]\n            },\n            {\n                data:"Media",\n                children:[\n                    {data:"Library"},\n                    {data:"Add New"}\n                ]\n            },\n            {\n                data:"Appearance",\n                children:[\n                    {data:"Themes"},\n                    {data:"Theme Options"},\n                    {data:"Customize"},\n                    {data:"Widgets"},\n                    {data:"Menus"},\n                    {data:"Editor"}\n                ]\n            },\n            {\n                data:"Settings",\n                children:[\n                    {data:"General", children:[{data:"Site Title"}, {data:"Tagline"}, {data:"Site Address"}, {data:"Timezone"}]},\n                    {data:"Writing"},\n                    {data:"Reading"},\n                    {data:"Media"},\n                    {data:"Permalinks"}\n                ]\n            }\n        ];\n    },\n    changeHandler:function(event) {\n        RUI.DialogManager.alert(JSON.stringify({\n            type:event.type,\n            dataSource:event.data.dataSource,\n            expand:event.data.expand\n        }));\n    },\n    clickHandler:function(event) {\n        RUI.DialogManager.alert(JSON.stringify({\n            type:event.type,\n            dataSource:event.data.dataSource\n        }));\n    },\n    render:function() {\n        var initData = this.getData();\n\n        return <div className="example-tree">\n            <h2 className="title">树形菜单<span>Tree</span></h2>\n            <h3 className="sub-title">演示</h3>\n            <div className="example">\n                <h4 className="final-title">初始数据</h4>\n                <RUI.Tree dataSource={initData} />\n                <h4 className="final-title">事件</h4>\n                <RUI.Tree dataSource={initData} onExpand={this.changeHandler} onSelect={this.clickHandler}/>\n            </div>\n            <h3 className="sub-title">源码</h3>\n            <div className="source">\n                <textarea defaultValue={require(\'raw!./tree.js\')} />\n            </div>\n        </div>;\n    }\n});\n\nmodule.exports = Example;'}});