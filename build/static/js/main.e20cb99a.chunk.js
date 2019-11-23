(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{21:function(t,e,n){},35:function(t,e,n){t.exports=n(65)},40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(31),c=n.n(r),l=(n(40),n(16)),i=n(4),s=n(5),u=n(7),d=n(6),p=n(8),m=n(14),h=n(11),b=(n(41),n(21),function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).getStyle=function(){return{background:"#f4f4f4",padding:"2px",borderBottom:"1px #ccc dashed",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return o.a.createElement("div",{className:"todoitem",style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",className:"mr-3 ml-2",onChange:this.props.markComplete.bind(this,e)}),n,o.a.createElement("button",{className:"btn mr-4",onClick:this.props.delTodo.bind(this,e)},"Delete")))}}]),e}(a.Component)),f=function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return o.a.createElement("div",null,o.a.createElement(b,{todo:e,key:e.id,markComplete:t.props.markComplete,delTodo:t.props.delTodo}))}))}}]),e}(a.Component),j=(n(42),function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"ToDo List"),o.a.createElement(m.b,{className:"link",to:"/"},"Home")," | ",o.a.createElement(m.b,{className:"link",to:"/about"},"About"))}}]),e}(a.Component)),O=function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is a Todo Application. Made by Shubham Gupta"))}}]),e}(a.Component),y=n(15),v=n.n(y),E=n(34),k=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={title:""},n.onChange=function(t){return n.setState(Object(E.a)({},t.target.name,t.target.value))},n.onSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo...",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"Add",className:"add-btn",style:{flex:"2"}}))}}]),e}(a.Component),g=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={todos:[]},n.markComplete=function(t){n.setState({todos:n.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},n.delTodo=function(t){n.setState({todos:Object(l.a)(n.state.todos.filter((function(e){return e.id!==t})))})},n.delTodo=function(t){v.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(e){return n.setState({todos:Object(l.a)(n.state.todos.filter((function(e){return e.id!==t})))})}))},n.addTodo=function(t){v.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then((function(t){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t.data])})}))},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;v.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return o.a.createElement(m.a,null,o.a.createElement("div",{className:"container-fluid"},o.a.createElement(j,null),o.a.createElement(h.a,{exact:!0,path:"/",render:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,{addTodo:t.addTodo}),o.a.createElement(f,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),o.a.createElement(h.a,{path:"/about",component:O})))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.e20cb99a.chunk.js.map