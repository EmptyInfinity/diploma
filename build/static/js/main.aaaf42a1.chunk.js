(this.webpackJsonpcode=this.webpackJsonpcode||[]).push([[0],{148:function(e,n,s){},149:function(e,n,s){"use strict";s.r(n);var r=s(0),o=s(3),t=s.n(o),a=s(43),i=s.n(a),c=s(16),u=function(e){var n=e.left,s=e.right,o=e.value,t=void 0===o?50:o,a=e.onChange;return Object(r.jsxs)("div",{className:"Range",children:[Object(r.jsxs)("div",{className:"Labels",children:[Object(r.jsx)("span",{children:n}),Object(r.jsx)("span",{children:s})]}),Object(r.jsx)("div",{className:"wrap",children:Object(r.jsx)("input",{type:"range",min:"0",max:"100",step:"1",value:t,onChange:a})})]})},l=function(e){var n=e.label,s=e.options,o=e.value,t=e.onChange;return Object(r.jsx)("div",{className:"Item",children:Object(r.jsxs)("div",{className:"Question",children:[Object(r.jsx)("p",{className:"Label",children:n}),Object(r.jsx)(u,{left:s.firstAnswer,right:s.secondAnswer,value:o,onChange:function(e){return t(e.target.value)}})]})})},f=function(e){var n=e.value,s=e.onClick,o=e.disabled;return Object(r.jsx)("button",{className:"Button",onClick:s,disabled:o,children:n})},d=s(17),b=s(15),p={labels:["\u042d\u043a\u0441\u0442\u0440\u0430\u0432\u0435\u0440\u0442","\u0418\u043d\u0442\u0440\u043e\u0432\u0435\u0440\u0442","\u041b\u043e\u0433\u0438\u043a\u0430","\u042d\u0442\u0438\u043a\u0430","\u0421\u0435\u043d\u0441\u043e\u0440\u0438\u043a\u0430","\u0418\u043d\u0442\u0443\u0438\u0446\u0438\u044f","\u0420\u0430\u0446\u0438\u043e\u043d\u0430\u043b","\u0418\u0440\u0440\u0430\u0446\u0438\u043e\u043d\u0430\u043b"],datasets:[{label:"\u041f\u043e\u0440\u0442\u0440\u0435\u0442",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"rgba(255,255,255,.4)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:[440,560,730,270,620,380,710,290]}]},j={responsive:!0,legend:{labels:{fontColor:"rgba(0,0,0,.7)",fontSize:19}},scale:{pointLabels:{fontColor:"rgba(0,0,0,.7)",fontSize:14},ticks:{suggestedMin:0,suggestedMax:900,backdropColor:"transparent",fontColor:"rgba(0,0,0,.7)",fontSize:14},gridLines:{color:"rgba(0,0,0,0.2)"}}},w=function(e){var n=e.blocks,s=function(e){var n=0;return e.forEach((function(e){var s=e.value;n+=+(void 0===s?50:s)})),[n,1e3-n]},o=s(n[0]),t=s(n[1]),a=s(n[2]),i=[Math.abs(t[1]-t[0]),Math.abs(a[0]-a[1])];return console.log(i),p.datasets[0].data=[].concat(Object(d.a)(o),Object(d.a)(t),Object(d.a)(a),i),Object(r.jsx)("div",{className:"RadarComponent",children:Object(r.jsx)(b.Radar,{data:p,options:j})})},A={responsive:!0,legend:{labels:{fontColor:"rgba(0,0,0,.7)",fontSize:19}},scale:{pointLabels:{fontColor:"rgba(0,0,0,.7)",fontSize:14},ticks:{suggestedMin:0,suggestedMax:1,backdropColor:"transparent",fontColor:"rgba(0,0,0,.7)",fontSize:14},gridLines:{color:"rgba(0,0,0,0.2)"}}},v=[{type:"ILE",ua:"\u0406\u041b\u0415",ru:"\u0418\u041b\u042d",full:"\u0418\u043d\u0442\u0443\u0438\u0442\u0438\u0432\u043d\u043e-\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u044d\u043a\u0441\u0442\u0440\u0430\u0432\u0435\u0440\u0442 ",proffesion:"\u041d\u0430\u0443\u0447\u043d\u043e-\u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"},{type:"ILI",ua:"\u0406\u041b\u0406",ru:"\u0418\u041b\u0418",full:"\u0418\u043d\u0442\u0443\u0438\u0442\u0438\u0432\u043d\u043e-\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0438\u043d\u0442\u0440\u043e\u0432\u0435\u0440\u0442",proffesion:"\u041d\u0430\u0443\u0447\u043d\u043e-\u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"},{type:"LII",ua:"\u041b\u0406\u0406",ru:"\u041b\u0418\u0418",full:"\u041b\u043e\u0433\u0438\u043a\u043e-\u0438\u043d\u0442\u0443\u0438\u0442\u0438\u0432\u043d\u044b\u0439 \u0438\u043d\u0442\u0440\u043e\u0432\u0435\u0440\u0442",proffesion:"\u041d\u0430\u0443\u0447\u043d\u043e-\u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"},{type:"LIE",ua:"\u041b\u0406\u0415",ru:"\u041b\u0418\u042d",full:"\u041b\u043e\u0433\u0438\u043a\u043e-\u0438\u043d\u0442\u0443\u0438\u0442\u0438\u0432\u043d\u044b\u0439 \u044d\u043a\u0441\u0442\u0440\u0430\u0432\u0435\u0440\u0442",proffesion:"\u041d\u0430\u0443\u0447\u043d\u043e-\u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"},{type:"LSE",ua:"\u041b\u0421\u0415",ru:"\u041b\u0421\u042d",full:"\u041b\u043e\u0433\u0438\u043a\u043e-\u0441\u0435\u043d\u0441\u043e\u0440\u043d\u044b\u0439 \u044d\u043a\u0441\u0442\u0440\u0430\u0432\u0435\u0440\u0442",proffesion:"\u0422\u0435\u0445\u043d\u0438\u043a\u043e-\u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0447\u0435\u0441\u043a\u0430\u044f \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"},{type:"LSI",ua:"\u041b\u0421\u0406",ru:"\u041b\u0421\u0418",full:"\u041b\u043e\u0433\u0438\u043a\u043e-\u0441\u0435\u043d\u0441\u043e\u0440\u043d\u044b\u0439 \u0438\u043d\u0442\u0440\u043e\u0432\u0435\u0440\u0442",proffesion:"\u0422\u0435\u0445\u043d\u0438\u043a\u043e-\u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0447\u0435\u0441\u043a\u0430\u044f \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"},{type:"SLI",ua:"\u0421\u041b\u0406",ru:"\u0421\u041b\u0418",full:"\u0421\u0435\u043d\u0441\u043e\u0440\u043d\u043e-\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0438\u043d\u0442\u0440\u043e\u0432\u0435\u0440\u0442",proffesion:"\u0422\u0435\u0445\u043d\u0438\u043a\u043e-\u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0447\u0435\u0441\u043a\u0430\u044f \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"},{type:"SLE",ua:"\u0421\u041b\u0415",ru:"\u0421\u041b\u042d",full:"\u0421\u0435\u043d\u0441\u043e\u0440\u043d\u043e-\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u044d\u043a\u0441\u0442\u0440\u0430\u0432\u0435\u0440\u0442",proffesion:"\u0422\u0435\u0445\u043d\u0438\u043a\u043e-\u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0447\u0435\u0441\u043a\u0430\u044f \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"},{type:"SEE",ua:"\u0421\u0415\u0415",ru:"\u0421\u042d\u042d",full:"\u0421\u0435\u043d\u0441\u043e\u0440\u043d\u043e-\u044d\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u044d\u043a\u0441\u0442\u0440\u0430\u0432\u0435\u0440\u0442",proffesion:"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u043e-\u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"},{type:"SEI",ua:"\u0421\u0415\u0406",ru:"\u0421\u042d\u0418",full:"\u0421\u0435\u043d\u0441\u043e\u0440\u043d\u043e-\u044d\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0438\u043d\u0442\u0440\u043e\u0432\u0435\u0440\u0442",proffesion:"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u043e-\u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"},{type:"ESI",ua:"\u0415\u0421\u0406",ru:"\u042d\u0421\u0418",full:"\u042d\u0442\u0438\u043a\u043e-\u0441\u0435\u043d\u0441\u043e\u0440\u043d\u044b\u0439 \u0438\u043d\u0442\u0440\u043e\u0432\u0435\u0440\u0442",proffesion:"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u043e-\u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"},{type:"ESE",ua:"\u0415\u0421\u0415",ru:"\u042d\u0421\u042d",full:"\u042d\u0442\u0438\u043a\u043e-\u0441\u0435\u043d\u0441\u043e\u0440\u043d\u044b\u0439 \u044d\u043a\u0441\u0442\u0440\u0430\u0432\u0435\u0440\u0442",proffesion:"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u043e-\u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"},{type:"EIE",ua:"\u0415\u0406\u0415",ru:"\u042d\u0418\u042d",full:"\u042d\u0442\u0438\u043a\u043e-\u0438\u043d\u0442\u0443\u0438\u0442\u0438\u0432\u043d\u044b\u0439 \u044d\u043a\u0441\u0442\u0440\u0430\u0432\u0435\u0440\u0442",proffesion:"\u0413\u0443\u043c\u0430\u043d\u0438\u0442\u0430\u0440\u043d\u043e-\u0445\u0443\u0434\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"},{type:"EII",ua:"\u0415\u0406\u0406",ru:"\u042d\u0418\u0418",full:"\u042d\u0442\u0438\u043a\u043e-\u0438\u043d\u0442\u0443\u0438\u0442\u0438\u0432\u043d\u044b\u0439 \u0438\u043d\u0442\u0440\u043e\u0432\u0435\u0440\u0442",proffesion:"\u0413\u0443\u043c\u0430\u043d\u0438\u0442\u0430\u0440\u043d\u043e-\u0445\u0443\u0434\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"},{type:"IEI",ua:"\u0406\u0415\u0406",ru:"\u0418\u042d\u0418",full:"\u0418\u043d\u0442\u0443\u0438\u0442\u0438\u0432\u043d\u043e-\u044d\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0438\u043d\u0442\u0440\u043e\u0432\u0435\u0440\u0442",proffesion:"\u0413\u0443\u043c\u0430\u043d\u0438\u0442\u0430\u0440\u043d\u043e-\u0445\u0443\u0434\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"},{type:"IEE",ua:"\u0406\u0415\u0415",ru:"\u0418\u042d\u042d",full:"\u0418\u043d\u0442\u0443\u0438\u0442\u0438\u0432\u043d\u043e-\u044d\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u044d\u043a\u0441\u0442\u0440\u0430\u0432\u0435\u0440\u0442",proffesion:"\u0413\u0443\u043c\u0430\u043d\u0438\u0442\u0430\u0440\u043d\u043e-\u0445\u0443\u0434\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"}],g={labels:v.map((function(e){return e.ru})),datasets:[{label:"\u0422\u0418\u041c",backgroundColor:"rgb(76,192,192,.2)",borderColor:"rgb(76,192,192)",pointBackgroundColor:"rgb(76,192,192)",pointBorderColor:"rrgb(76,192,192,.4)",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgb(76,192,192)"}]},O=function(e){var n=e.blocks,s=function(e){var n=0;return e.forEach((function(e){var s=e.value;n+=+(void 0===s?50:s)})),[n,1e3-n]},o=s(n[0]),t=s(n[1]),a=s(n[2]),i=o[1]>o[0]?"I":"E",c=t[0]>t[1]?"L":"E",u=a[0]>a[1]?"S":"I",l="";"L"===c&&(l="S"===u?t[0]>a[0]?"LS":"SL":t[0]>a[1]?"LI":"IL"),"E"===c&&(l="S"===u?t[1]>a[0]?"ES":"SE":t[1]>a[1]?"EI":"IE");var f="".concat(l).concat(i);console.log(f);for(var d=v.findIndex((function(e){return e.type==f})),p=[],j=d;j<v.length;j++)p.push(v[j]);for(var w=0;w<d;w++)p.push(v[w]);for(var O=0;O<9;O++)p[O].range=O+1;for(var h=8,x=9;x<16;x++)p[x].range=h,h--;p.forEach((function(e){var n=v.findIndex((function(n){return n.type===e.type}));console.log(n),v[n].value=1-(e.range-1)/16}));var C=v.map((function(e){return e.value}));g.datasets[0].data=C;var m=v[d];return Object(r.jsxs)("div",{className:"RadarComponent",children:[Object(r.jsx)(b.Radar,{data:g,options:A}),Object(r.jsxs)("div",{className:"Description",children:[Object(r.jsxs)("p",{children:["\u0422\u0438\u043f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u043c\u0435\u0442\u0430\u0431\u043e\u043b\u0438\u0437\u043c\u0430: (",m.ru,") ",m.full]}),Object(r.jsxs)("p",{children:["\u0422\u0438\u043f \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438: ",m.proffesion]})]})]})},h=[[{question:"\u0427\u0442\u043e \u0412\u0430\u043c \u043a\u0430\u0436\u0435\u0442\u0441\u044f \u0431\u043e\u043b\u0435\u0435 \u0432\u0430\u0436\u043d\u044b\u043c?",firstAnswer:"\u041e\u0446\u0435\u043d\u043a\u0430 \u043e\u043a\u0440\u0443\u0436\u0430\u044e\u0449\u0438\u0445",secondAnswer:"\u0421\u0430\u043c\u043e\u043e\u0446\u0435\u043d\u043a\u0430"},{question:"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0432 \u043a\u0430\u043a\u043e\u043c-\u043b\u0438\u0431\u043e \u0432\u043e\u043f\u0440\u043e\u0441\u0435, \u0447\u0442\u043e \u043f\u0440\u043e\u0449\u0435 \u0434\u043b\u044f \u0412\u0430\u0441?",firstAnswer:"\u0421\u043f\u0440\u043e\u0441\u0438\u0442\u044c",secondAnswer:"\u041f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c"},{question:"\u041a\u0440\u0443\u0433 \u0412\u0430\u0448\u0438\u0445 \u0437\u043d\u0430\u043a\u043e\u043c\u0441\u0442\u0432...",firstAnswer:"\u0428\u0438\u0440\u043e\u043a",secondAnswer:"\u0423\u0437\u043e\u043a"},{question:"\u041b\u0435\u0433\u043a\u043e \u043b\u0438 \u0412\u0430\u043c \u0437\u0430\u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c \u043f\u0435\u0440\u0432\u044b\u043c \u0441 \u043d\u0435\u0437\u043d\u0430\u043a\u043e\u043c\u044b\u043c \u0412\u0430\u043c \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u043e\u043c?",firstAnswer:"\u0414\u0430",secondAnswer:"\u041d\u0435\u0442"},{question:"\u0415\u0441\u043b\u0438 \u0412\u0430\u043c \u0447\u0442\u043e-\u043b\u0438\u0431\u043e \u043d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c, \u043b\u0435\u0433\u043a\u043e \u043b\u0438 \u0412\u0430\u043c \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u043a \u0434\u0440\u0443\u0433\u0438\u043c \u043b\u044e\u0434\u044f\u043c?",firstAnswer:"\u0414\u0430",secondAnswer:"\u041d\u0435\u0442"},{question:"\u0412 \u0433\u043e\u0441\u0442\u044f\u0445 \u0412\u0430\u043c, \u043a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e \u043e\u0431\u0449\u0430\u0442\u044c\u0441\u044f \u0441 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e\u043c  \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445?",firstAnswer:"\u0414\u0430",secondAnswer:"\u041d\u0435\u0442"},{question:"\u041c\u043e\u0436\u043d\u043e \u043b\u0438 \u0441\u043a\u0430\u0437\u0430\u0442\u044c, \u0447\u0442\u043e \u0412\u044b \u0441\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e \u043e\u0431\u0449\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0447\u0435\u043b\u043e\u0432\u0435\u043a?",firstAnswer:"\u0414\u0430",secondAnswer:"\u041d\u0435\u0442"},{question:"\u041c\u043e\u0436\u043d\u043e \u043b\u0438 \u0441\u043a\u0430\u0437\u0430\u0442\u044c, \u0447\u0442\u043e \u0412\u044b \u0441\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e \u043e\u0431\u0449\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0447\u0435\u043b\u043e\u0432\u0435\u043a?",firstAnswer:"\u0420\u0430\u0441\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u0439",secondAnswer:"\u0421\u0434\u0435\u0440\u0436\u0430\u043d\u043d\u044b\u0439"},{question:"\u041a\u0430\u043a\u043e\u0435 \u0441\u043b\u043e\u0432\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0412\u0430\u0448\u0435\u043c\u0443 \u0434\u0443\u0445\u043e\u0432\u043d\u043e\u043c\u0443 \u0441\u043a\u043b\u0430\u0434\u0443?",firstAnswer:"\u041e\u0436\u0438\u0432\u043b\u0435\u043d\u043d\u044b\u0439",secondAnswer:"\u0421\u043f\u043e\u043a\u043e\u0439\u043d\u044b\u0439"},{question:"\u041a\u0430\u043a\u043e\u0435 \u0441\u043b\u043e\u0432\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0412\u0430\u0448\u0435\u043c\u0443 \u0434\u0443\u0445\u043e\u0432\u043d\u043e\u043c\u0443 \u0441\u043a\u043b\u0430\u0434\u0443?",firstAnswer:"\u041e\u0431\u0449\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439",secondAnswer:"\u0417\u0430\u043c\u043a\u043d\u0443\u0442\u044b\u0439"}],[{question:"\u041a\u0430\u043a\u043e\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0412\u0430\u0448\u0435\u043c\u0443 \u0434\u0443\u0445\u043e\u0432\u043d\u043e\u043c\u0443 \u0441\u043a\u043b\u0430\u0434\u0443?",firstAnswer:"\u041a\u0440\u0438\u0442\u0438\u0447\u043d\u044b\u0439",secondAnswer:"\u041d\u0435\u043a\u0440\u0438\u0442\u0438\u0447\u043d\u044b\u0439"},{question:"\u041a\u0430\u043a\u043e\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0412\u0430\u0448\u0435\u043c\u0443 \u0434\u0443\u0445\u043e\u0432\u043d\u043e\u043c\u0443 \u0441\u043a\u043b\u0430\u0434\u0443?",firstAnswer:"\u041f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439",secondAnswer:"\u0421\u043e\u0447\u0443\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439"},{question:"\u041a\u0430\u043a\u043e\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0412\u0430\u0448\u0435\u043c\u0443 \u0434\u0443\u0445\u043e\u0432\u043d\u043e\u043c\u0443 \u0441\u043a\u043b\u0430\u0434\u0443?",firstAnswer:"\u0421\u043f\u0440\u0430\u0432\u0435\u0434\u043b\u0438\u0432\u043e\u0441\u0442\u044c",secondAnswer:"\u041f\u043e\u0449\u0430\u0434\u0430"},{question:"\u041a\u0430\u043a\u043e\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0412\u0430\u0448\u0435\u043c\u0443 \u0434\u0443\u0445\u043e\u0432\u043d\u043e\u043c\u0443 \u0441\u043a\u043b\u0430\u0434\u0443?",firstAnswer:"\u041e\u0441\u0442\u043e\u0440\u043e\u0436\u043d\u044b\u0439",secondAnswer:"\u0414\u043e\u0432\u0435\u0440\u0447\u0438\u0432\u044b\u0439"},{question:"\u041a\u0430\u043a\u043e\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0412\u0430\u0448\u0435\u043c\u0443 \u0434\u0443\u0445\u043e\u0432\u043d\u043e\u043c\u0443 \u0441\u043a\u043b\u0430\u0434\u0443?",firstAnswer:"\u0414\u0443\u043c\u0430\u0442\u044c",secondAnswer:"\u041f\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u0442\u044c"},{question:"\u0412\u0430\u0448 \u0441\u043a\u043b\u0430\u0434 \u0443\u043c\u0430 \u0441\u043a\u043e\u0440\u0435\u0435...",firstAnswer:"\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0439",secondAnswer:"\u0413\u0443\u043c\u0430\u043d\u0438\u0442\u0430\u0440\u043d\u044b\u0439"},{question:"\u0427\u0442\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0412\u0430\u0448\u0435\u043c\u0443 \u0434\u0443\u0445\u043e\u0432\u043d\u043e\u043c\u0443 \u0441\u043a\u043b\u0430\u0434\u0443?",firstAnswer:"\u0420\u0430\u0441\u0441\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",secondAnswer:"\u0421\u043e\u0447\u0443\u0441\u0442\u0432\u0438\u0435"},{question:"\u0427\u0442\u043e \u0412\u044b \u043b\u0435\u0433\u0447\u0435 \u0437\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u0435\u0442\u0435?",firstAnswer:"\u0427\u0438\u0441\u043b\u0430",secondAnswer:"\u041b\u0438\u0446\u0430 \u0438 (\u0438\u043b\u0438) \u0438\u043c\u0435\u043d\u0430"},{question:"\u041a\u0430\u043a\u043e\u0435 \u0441\u043b\u043e\u0432\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0412\u0430\u0448\u0435\u043c\u0443 \u0434\u0443\u0445\u043e\u0432\u043d\u043e\u043c\u0443 \u0441\u043a\u043b\u0430\u0434\u0443?",firstAnswer:"\u0418\u0441\u0442\u0438\u043d\u0430",secondAnswer:"\u041a\u0440\u0430\u0441\u043e\u0442\u0430"},{question:"\u0421\u0447\u0438\u0442\u0430\u0435\u0442\u0435 \u043b\u0438 \u0412\u044b \u0441\u043f\u0440\u0430\u0432\u0435\u0434\u043b\u0438\u0432\u043e\u0439 \u0444\u043e\u0440\u043c\u0443\u043b\u0443: \xab\u0417\u0430\u043a\u043e\u043d \u0441\u0443\u0440\u043e\u0432, \u043d\u043e \u044d\u0442\u043e \u0437\u0430\u043a\u043e\u043d\xbb?",firstAnswer:"\u0414\u0430",secondAnswer:"\u041d\u0435\u0442"}],[{question:"\u0427\u0442\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442 \u0412\u0430\u0448\u0435 \u0434\u043e\u0432\u0435\u0440\u0438\u0435?",firstAnswer:"\u041e\u043f\u044b\u0442",secondAnswer:"\u041f\u0440\u0435\u0434\u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0435"},{question:"\u0427\u0442\u043e, \u043f\u043e \u0412\u0430\u0448\u0435\u043c\u0443 \u043c\u043d\u0435\u043d\u0438\u044e, \u0445\u0443\u0436\u0435?",firstAnswer:"\u0412\u0438\u0442\u0430\u0442\u044c \u0432 \u043e\u0431\u043b\u0430\u043a\u0430\u0445",secondAnswer:"\u0418\u0434\u0442\u0438 \u043f\u0440\u043e\u0442\u043e\u0440\u0435\u043d\u043d\u043e\u0439 \u0434\u043e\u0440\u043e\u0436\u043a\u043e\u0439"},{question:"\u0412\u044b \u0432 \u0436\u0438\u0437\u043d\u0438 \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u0441\u043a\u043e\u0440\u0435\u0435...",firstAnswer:"\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u043d\u044b\u0439.",secondAnswer:"\u041d\u0435\u043f\u0440\u0430\u043a\u0442\u0438\u0447\u043d\u044b\u0439."},{question:"\u0427\u0442\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u0412\u0430\u0441 \u0440\u0430\u0437\u0434\u0440\u0430\u0436\u0430\u0435\u0442 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0434\u043e\u0436\u0434\u044f?",firstAnswer:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0431\u044b\u0442\u044c \u043e\u0431\u0440\u044b\u0437\u0433\u0430\u043d\u043d\u044b\u043c \u0430\u0432\u0442\u043e\u043c\u0430\u0448\u0438\u043d\u043e\u0439.",secondAnswer:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0431\u0438\u0440\u0430\u0442\u044c\u0441\u044f \u043f\u043e \u043b\u0443\u0436\u0430\u043c \u0438 \u0433\u0440\u044f\u0437\u0438."},{question:"\u0427\u0442\u043e \u0434\u043b\u044f \u0412\u0430\u0441 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0439 \u043f\u043e\u0445\u0432\u0430\u043b\u043e\u0439? \u0421\u043a\u0430\u0437\u0430\u0442\u044c, \u0447\u0442\u043e \u0412\u044b \u0438\u043c\u0435\u0435\u0442\u0435...",firstAnswer:"\u0417\u0434\u0440\u0430\u0432\u044b\u0439 \u0441\u043c\u044b\u0441\u043b",secondAnswer:"\u0411\u043e\u0433\u0430\u0442\u0443\u044e \u0444\u0430\u043d\u0442\u0430\u0437\u0438\u044e"},{question:"\u0427\u0442\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0412\u0430\u0448\u0435\u043c\u0443 \u0434\u0443\u0445\u043e\u0432\u043d\u043e\u043c\u0443 \u0441\u043a\u043b\u0430\u0434\u0443?",firstAnswer:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430",secondAnswer:"\u0422\u0435\u043e\u0440\u0438\u044f"},{question:"\u041a\u0430\u043a\u043e\u0435 \u043f\u043e\u043d\u044f\u0442\u0438\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0412\u0430\u0448\u0435\u043c\u0443 \u0434\u0443\u0445\u043e\u0432\u043d\u043e\u043c\u0443 \u0441\u043a\u043b\u0430\u0434\u0443?",firstAnswer:"\u041a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0441\u0442\u044c (\u0442\u043e, \u0447\u0442\u043e \u043c\u043e\u0436\u043d\u043e \xab\u043f\u043e\u0449\u0443\u043f\u0430\u0442\u044c \u0440\u0443\u043a\u0430\u043c\u0438\xbb)",secondAnswer:"\u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u043e\u0441\u0442\u044c (\u0442\u043e, \u0447\u0442\u043e \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \xab\u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u043c \u0443\u043c\u043e\u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f\xbb"},{question:"\u0412\u0430\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u0447\u0442\u043e-\u0442\u043e...",firstAnswer:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c",secondAnswer:"\u041f\u0440\u0438\u0434\u0443\u043c\u0430\u0442\u044c"},{question:"\u041a\u0430\u043a\u043e\u0435 \u0441\u043b\u043e\u0432\u043e \u0412\u0430\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f?",firstAnswer:"\u0424\u0443\u043d\u0434\u0430\u043c\u0435\u043d\u0442",secondAnswer:"\u0428\u043f\u0438\u043b\u044c"},{question:"\u0427\u0442\u043e \u0412\u0430\u0441 \u0431\u043e\u043b\u044c\u0448\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442 \u0432 \u0440\u0430\u0431\u043e\u0442\u0435/\u0443\u0447\u0435\u0431\u0435?",firstAnswer:"\u041e\u043f\u044b\u0442",secondAnswer:"\u0422\u0435\u043e\u0440\u0438\u044f"}]],x=function(){var e=Object(o.useState)(0),n=Object(c.a)(e,2),s=n[0],t=n[1],a=Object(o.useState)(h),i=Object(c.a)(a,2),u=i[0],d=i[1],b=Object(o.useState)(!1),p=Object(c.a)(b,2),j=p[0],A=p[1],v=function(e){"next"===e&&t(s+1),"prev"===e&&t(s-1),"number"===typeof e&&t(e)},g=!!u[s+1],x=!!u[s-1];return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("div",{className:j?"main":"Container main",children:[Object(r.jsx)("h1",{className:j?"Container dark-font":""}),j?Object(r.jsxs)("div",{className:"Charts",children:[Object(r.jsx)(w,{blocks:u}),Object(r.jsx)(O,{blocks:u})]}):Object(r.jsx)("div",{className:"Items",children:u[s].map((function(e,n){var o=e.question,t=e.firstAnswer,a=e.secondAnswer,i=e.value;return Object(r.jsx)(l,{label:o,value:i,options:{firstAnswer:t,secondAnswer:a},onChange:function(e){var r=JSON.parse(JSON.stringify(u));r[s][n].value=e,d(r)}},n)}))}),j?Object(r.jsx)("div",{className:"Navigation justify-center",children:Object(r.jsx)(f,{value:"\u041d\u0430\u0437\u0430\u0434",onClick:function(){return A(!1)}})}):Object(r.jsxs)("div",{className:"Navigation",children:[Object(r.jsx)(f,{value:"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f",onClick:function(){return v("prev")},disabled:!x}),Object(r.jsx)("div",{className:"Pages",children:u.map((function(e,n){return Object(r.jsx)("span",{className:"Page ".concat(n===s&&"current"),onClick:function(){return v(n)},children:n+1},n)}))}),g?Object(r.jsx)(f,{value:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f",onClick:function(){return v("next")}}):Object(r.jsx)(f,{value:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",onClick:function(){return A(!0)}})]})]})})};s(148);i.a.render(Object(r.jsx)(t.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.aaaf42a1.chunk.js.map