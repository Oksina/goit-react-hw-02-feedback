(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,n){t.exports={list:"FeedbackOptions_list__kCLU9",item:"FeedbackOptions_item__2xrA_",button:"FeedbackOptions_button__22POK"}},,function(t,e,n){t.exports={section:"Section_section__3xAlp",title:"Section_title__2Hiz2"}},,,,,function(t,e,n){t.exports={list:"Statistics_list__3XDOR"}},function(t,e,n){t.exports={notification:"Notification_notification__104m0"}},,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),a=n(5),o=n.n(a),s=n(6),r=n(7),l=n(8),d=n(12),b=n(11),u=n(4),j=n.n(u),h=n(0),O=function(t){var e=t.title,n=t.children;return Object(h.jsxs)("section",{className:j.a.section,children:[Object(h.jsx)("h2",{className:j.a.title,children:e}),n]})},p=n(2),x=n.n(p),f=function(t){var e=t.options,n=t.onLeaveFeedback,c=Object.keys(e);return Object(h.jsx)("ul",{className:x.a.list,children:c.map((function(t){return Object(h.jsx)("li",{className:x.a.item,children:Object(h.jsx)("button",{type:"button",name:t,onClick:function(){return n({option:t})},className:x.a.button,children:t})},t)}))})},k=n(9),v=n.n(k),_=function(t){var e=t.good,n=t.neutral,c=t.bad,i=t.total,a=t.positivePercentage;return Object(h.jsxs)("ul",{className:v.a.list,children:[Object(h.jsx)("li",{children:Object(h.jsxs)("p",{children:["Good: ",e]})},"good"),Object(h.jsx)("li",{children:Object(h.jsxs)("p",{children:["Neutral: ",n]})},"neutral"),Object(h.jsx)("li",{children:Object(h.jsxs)("p",{children:["Bad: ",c]})},"bad"),Object(h.jsx)("li",{children:Object(h.jsxs)("p",{children:["Total: ",i]})},"total"),Object(h.jsx)("li",{children:Object(h.jsxs)("p",{children:["Positive feedback: ",a," %"]})},"positive")]})},m=n(10),g=n.n(m),F=function(t){var e=t.message;return Object(h.jsx)("p",{className:g.a.notification,children:e})},N=(n(18),n(19),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={good:0,neutral:0,bad:0},t.handleCountFeedback=function(e){var n=e.option;t.setState((function(t){return Object(s.a)({},n.toLowerCase(),t[n]+1)}))},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){var e=t.countTotalFeedback(),n=100*t.state.good/e;return 0===e?0:Math.round(n)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,c=t.bad,i=this.countTotalFeedback(),a=this.handleCountFeedback;return Object(h.jsxs)("div",{className:"main",children:[Object(h.jsx)(O,{title:"Please leave feedback",children:Object(h.jsx)(f,{options:this.state,onLeaveFeedback:a})}),Object(h.jsx)(O,{title:"Statistics",children:0!==i?Object(h.jsx)(_,{good:e,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(h.jsx)(F,{message:"No feedback given"})})]})}}]),n}(c.Component));n(20);o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.b29a1424.chunk.js.map