(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(t,e,n){t.exports=n(64)},36:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(28),c=n.n(r),l=n(15),i=n(6),d=n(7),s=n(9),u=n(8),p=n(10),m=n(13),h=n(11),f=(n(36),function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{padding:".4rem",borderBottom:".1rem #ccc dotted",textDecoration:n.props.todo.completed?"line-through":"none",backgroundColor:n.props.todo.completed?"#adffbb":"#f4f4f4"}},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e),style:{marginRight:".4rem"}}),n,a.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:b},"x")))}}]),e}(o.Component)),b={background:"red",color:"white",border:"none",padding:"4px 7.5px",borderRadius:"50%",marginLeft:".4rem",cursor:"pointer",float:"right"},y=f,g=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map(function(e){return a.a.createElement(y,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})})}}]),e}(o.Component);function j(){return a.a.createElement("header",{style:v},a.a.createElement("h1",null,"Todo List"),a.a.createElement(m.b,{to:"/",style:{color:"white"}},"Home")," | ",a.a.createElement(m.b,{to:"/about",style:{color:"white"}},"About"))}var v={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},E=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},n.onChange=function(t){return n.setState({title:t.target.value})},n.onSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",placeholder:"add todo...",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),e}(o.Component);function O(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"this is the Todo List application about page v1.0.0"))}var k=n(14),C=n.n(k),x=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},n.markComplete=function(t){n.setState({todos:n.state.todos.map(function(e){return e.id===t&&(e.completed=!e.completed),e})})},n.delTodo=function(t){C.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then(function(e){return n.setState({todos:Object(l.a)(n.state.todos.filter(function(e){return e.id!==t}))})}),n.setState({todos:Object(l.a)(n.state.todos.filter(function(e){return e.id!==t}))})},n.addTodo=function(t){C.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then(function(t){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t.data])})})},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){var t=this;C.a.get("https://jsonplaceholder.typicode.com/todos?_limit=18").then(function(e){return t.setState({todos:e.data})})}},{key:"render",value:function(){var t=this;return a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(j,null),a.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(E,{addTodo:t.addTodo}),a.a.createElement(g,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),a.a.createElement(h.a,{path:"/about",component:O}))))}}]),e}(o.Component);c.a.render(a.a.createElement(x,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.aa3fa36a.chunk.js.map