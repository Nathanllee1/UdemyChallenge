(this.webpackJsonpudemychallenge=this.webpackJsonpudemychallenge||[]).push([[0],{10:function(e,t,n){e.exports=n(22)},15:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},16:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(8),o=n.n(r),i=n(9),c=n(1),l=n(2),u=n(3),m=n(4),h=(n(15),n(16),n(17),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onChange=function(e){a.setState({buttonToggle:!1})},a.state={buttonToggle:!0,formValue:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e,t=this;return e=this.props.questionNumber<this.props.lastQuestion-1?s.a.createElement("a",{class:this.state.buttonToggle?"btn btn-primary disabled":"btn btn-primary",href:"#q"+(this.props.questionNumber+1).toString()},"Next"):s.a.createElement("input",{class:"btn btn-primary",type:"submit",value:"Submit Quiz",disabled:this.state.buttonToggle}),s.a.createElement("div",{className:"question",id:"q"+this.props.questionNumber.toString()},s.a.createElement("div",{className:"questionBox"},s.a.createElement("h1",{className:"questionTitle"},this.props.question.question),this.props.question.answers.map((function(e,n){return s.a.createElement("div",{className:"radio"},s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:n,name:t.props.questionNumber,onChange:t.onChange}),e))})),e))}}]),n}(s.a.Component));function b(e){console.log(e.questions);for(var t=0,n=0;n<e.answerObject.length;n++)e.answerObject[n][0]==e.answerObject[n][1]&&(t+=1);return s.a.createElement("div",{className:"results"},s.a.createElement("div",{className:"resultsBox"},s.a.createElement("h1",null,"You got ",t," out of ",e.questions.length," questions right"),s.a.createElement("br",null),e.answerObject.map((function(t,n){return s.a.createElement("div",{className:"answerBox"},s.a.createElement("h3",null,s.a.createElement("b",null,"Question ",n),": ",e.questions[n].question),e.questions[n].answers[t[1]]!=e.questions[n].answers[t[0]]?s.a.createElement("div",{className:"incorrectAnswer"},s.a.createElement("h4",null,e.questions[n].answers[t[1]],"  ",s.a.createElement("i",{className:"fas fa-times"})),s.a.createElement("h4",null,"Correct Answer: ",e.questions[n].answers[t[0]])):s.a.createElement("div",{className:"correctAnswer"},s.a.createElement("h4",null,e.questions[n].answers[t[0]],"  ",s.a.createElement("i",{className:"fas fa-check"}))),s.a.createElement("br",null))})),s.a.createElement("a",{type:"button",class:"btn btn-primary",href:"/"},"Take Quiz Again")))}var g=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onQuestionSubmit=function(){a.setState({currentScreen:"Results"}),fetch("/answers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a.state.answers)}).then((function(e){return e.json()})).then((function(e){a.setState({answerObject:e}),console.log("Success:",a.state.answerObject)})).catch((function(e){console.error("Error:",e)}))},a.onQuestionChange=function(e){var t=a.state.answers;t[[e.target.name]]=e.target.value,a.setState({answers:t}),console.log(Object(i.a)({},e.target.name,e.target.value))},a.beginQuiz=function(e){console.log("beginning quiz")},a.state={questions:[],questionCount:0,currentScreen:"Questions",answers:[],answerObject:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/questions").then((function(e){return e.json()})).then((function(t){return e.setState({questions:t})})).catch((function(e){console.log("Couldn't fetch data")}))}},{key:"render",value:function(){var e=this;return"Questions"==this.state.currentScreen?s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"intro"},s.a.createElement("div",{class:"introBox"},s.a.createElement("h1",null,"Welcome Udemy!"),s.a.createElement("h2",null,"Here's a quiz about me, ",s.a.createElement("b",null,"Nathan Lee")," "),s.a.createElement("p",null,"(Hint: my resume might help)"),s.a.createElement("br",null),s.a.createElement("h3",null,"My response to the ",s.a.createElement("a",{href:"https://github.com/udemy/coding-challenge"},"Udemy Web App Coding Challenge")),s.a.createElement("h4",null,"The ",s.a.createElement("a",{href:"https://github.com/Nathanllee1/UdemyChallenge"},"code and writeup"))," ",s.a.createElement("br",null),s.a.createElement("a",{type:"button",class:"btn btn-primary",href:"#q0"},"Begin Quiz"))),s.a.createElement("form",{onSubmit:this.onQuestionSubmit,onChange:this.onQuestionChange},this.state.questions.map((function(t,n){return s.a.createElement(h,{question:t,questionNumber:n,onSubmit:e.onQuestionSubmit,lastQuestion:e.state.questions.length})})))):"Results"==this.state.currentScreen?s.a.createElement(b,{answerObject:this.state.answerObject,questions:this.state.questions}):void 0}}]),n}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.7297bbaa.chunk.js.map