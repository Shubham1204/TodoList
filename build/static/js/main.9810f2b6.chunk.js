(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{21:function(t,e,n){},35:function(t,e,n){t.exports=n(65)},40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(31),c=n.n(r),l=(n(40),n(16)),i=n(4),d=n(5),s=n(7),u=n(6),m=n(8),p=n(14),h=n(11),f=(n(41),n(21),function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(m.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return a.a.createElement("div",{className:"todoitem",style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",className:"mr-3 ml-2",onChange:this.props.markComplete.bind(this,e)}),n,a.a.createElement("button",{className:"btn mr-4",onClick:this.props.delTodo.bind(this,e)},"X")))}}]),e}(o.Component)),b=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement("div",null,a.a.createElement(f,{todo:e,key:e.id,markComplete:t.props.markComplete,delTodo:t.props.delTodo}))}))}}]),e}(o.Component),j=(n(42),function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"ToDo List"),a.a.createElement(p.b,{className:"link",to:"/"},"Home")," | ",a.a.createElement(p.b,{className:"link",to:"/about"},"About"))}}]),e}(o.Component)),v=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"lorehjbjbfd fdv dfjfvfv dfk dkrk fdk kjd fkjdf kjfvdkj fdkj vdj"))}}]),e}(o.Component),O=n(15),k=n.n(O),y=n(34),E=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},n.onChange=function(t){return n.setState(Object(y.a)({},t.target.name,t.target.value))},n.onSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n}return Object(m.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo...",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Add",className:"add-btn",style:{flex:"2"}}))}}]),e}(o.Component),g=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},n.markComplete=function(t){n.setState({todos:n.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},n.delTodo=function(t){n.setState({todos:Object(l.a)(n.state.todos.filter((function(e){return e.id!==t})))})},n.delTodo=function(t){k.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(e){return n.setState({todos:Object(l.a)(n.state.todos.filter((function(e){return e.id!==t})))})}))},n.addTodo=function(t){k.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then((function(t){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t.data])})}))},n}return Object(m.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){var t=this;k.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return a.a.createElement(p.a,null,a.a.createElement("div",{className:"container"},a.a.createElement(j,null),a.a.createElement(h.a,{exact:!0,path:"/",render:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(E,{addTodo:t.addTodo}),a.a.createElement(b,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),a.a.createElement(h.a,{path:"/about",component:v})))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.9810f2b6.chunk.js.map