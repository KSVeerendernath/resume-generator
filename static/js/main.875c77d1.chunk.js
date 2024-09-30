(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),o=a.n(r);a(12);var i=function(e){let{nextStep:t,handleFormData:a,formData:r}=e;const[o,i]=Object(n.useState)(""),[m,c]=Object(n.useState)("+1"),[s,u]=Object(n.useState)("");return l.a.createElement("div",{className:"form-container"},l.a.createElement("h2",null,"Basic Details"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},"Full Name"),l.a.createElement("input",{id:"name",type:"text",placeholder:"Enter your full name",value:r.name,onChange:e=>a({name:e.target.value})})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{id:"email",type:"email",placeholder:"Enter your email address",value:r.email,onChange:e=>a({email:e.target.value})})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"mobile"},"Mobile Number"),l.a.createElement("div",{className:"mobile-input"},l.a.createElement("select",{value:m,onChange:e=>c(e.target.value),className:"country-code"},[{code:"+1",country:"US"},{code:"+44",country:"UK"},{code:"+91",country:"IN"},{code:"other",country:"Other"}].map(e=>l.a.createElement("option",{key:e.code,value:e.code},"other"===e.code?"Other":`${e.code} (${e.country})`))),"other"===m&&l.a.createElement("input",{type:"text",placeholder:"Enter country code",value:s,onChange:e=>u(e.target.value),className:"custom-country-code"}),l.a.createElement("input",{id:"mobile",type:"tel",placeholder:"Enter your 10-digit mobile number",value:r.mobile,onChange:e=>a({mobile:e.target.value}),className:"mobile-number"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"linkedin"},"LinkedIn URL (Optional)"),l.a.createElement("input",{id:"linkedin",type:"url",placeholder:"Enter your LinkedIn URL",value:r.linkedin||"",onChange:e=>a({linkedin:e.target.value})})),o&&l.a.createElement("p",{className:"error-message"},o),l.a.createElement("div",{className:"form-buttons"},l.a.createElement("button",{onClick:()=>{r.name.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email)?/^[0-9]{10}$/.test(r.mobile)?(i(""),a({mobile:`${"other"===m?s:m} ${r.mobile}`}),t()):i("Invalid mobile number (should be 10 digits)"):i("Invalid email address"):i("Please enter your full name")}},"Next")))};var m=function(e){let{nextStep:t,prevStep:a,handleFormData:r,formData:o}=e;const[i,m]=Object(n.useState)(o.profileSummary||"");return l.a.createElement("div",{className:"form-container"},l.a.createElement("h2",null,"Profile Summary"),l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{placeholder:"Write a brief profile summary",value:i,onChange:e=>m(e.target.value)})),l.a.createElement("div",{className:"form-buttons"},l.a.createElement("button",{onClick:a},"Previous"),l.a.createElement("button",{onClick:()=>{r({profileSummary:i}),t()}},"Next")))};var c=function(e){let{nextStep:t,prevStep:a,handleFormData:r,formData:o}=e;const[i,m]=Object(n.useState)(o.experience||[]),[c,s]=Object(n.useState)({company:"",location:"",joiningDate:"",endDate:"",designation:"",role:""}),[u,p]=Object(n.useState)(""),d=(e,t)=>new Date(e)>=new Date(t)?(p("Joining date must be earlier than the end date"),!1):(p(""),!0);return l.a.createElement("div",{className:"form-container"},l.a.createElement("h2",null,"Experience"),l.a.createElement("div",{className:"company-list"},l.a.createElement("h3",null,"Previous Experiences"),i.map((e,t)=>l.a.createElement("div",{key:t,className:"experience-item",style:{display:"flex",alignItems:"center"}},l.a.createElement("p",{style:{margin:"0"}},e.company," - ",e.location),l.a.createElement("button",{onClick:()=>(e=>{m(i.filter((t,a)=>a!==e))})(t),style:{marginLeft:"10px",color:"red",cursor:"pointer",background:"none",border:"none",fontSize:"14px",fontWeight:"bold"},title:"Remove Experience"},"x")))),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",placeholder:"Company Name",value:c.company,onChange:e=>s({...c,company:e.target.value})})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",placeholder:"Location (from Google)",value:c.location,onChange:e=>s({...c,location:e.target.value})})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Joining Date"),l.a.createElement("input",{type:"date",value:c.joiningDate,onChange:e=>{s({...c,joiningDate:e.target.value}),c.endDate&&d(e.target.value,c.endDate)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"End Date"),l.a.createElement("input",{type:"date",value:c.endDate,onChange:e=>{s({...c,endDate:e.target.value}),c.joiningDate&&d(c.joiningDate,e.target.value)}})),u&&l.a.createElement("p",{className:"error-message"},u),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",placeholder:"Designation",value:c.designation,onChange:e=>s({...c,designation:e.target.value})})),l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{placeholder:"Roles and Responsibilities",value:c.role,onChange:e=>s({...c,role:e.target.value})})),l.a.createElement("div",{className:"button-container",style:{textAlign:"center",marginBottom:"20px"}},l.a.createElement("button",{onClick:()=>{c.company&&c.joiningDate&&c.endDate&&c.designation&&c.role&&d(c.joiningDate,c.endDate)&&(m([...i,c]),s({company:"",location:"",joiningDate:"",endDate:"",designation:"",role:""}))},style:{padding:"10px 20px"}},"Add Experience")),l.a.createElement("div",{className:"form-buttons"},l.a.createElement("button",{onClick:a},"Previous"),l.a.createElement("button",{onClick:()=>{r({experience:i}),t()}},"Next")))};var s=function(e){let{nextStep:t,prevStep:a,handleFormData:r,formData:o}=e;const[i,m]=Object(n.useState)(o.skills||["Java","Spring Boot"]),[c,s]=Object(n.useState)("");return l.a.createElement("div",{className:"form-container"},l.a.createElement("h2",null,"Skills"),l.a.createElement("div",{className:"form-group"},l.a.createElement("ul",null,i.map((e,t)=>l.a.createElement("li",{key:t},e,l.a.createElement("button",{onClick:()=>(e=>{m(i.filter((t,a)=>a!==e))})(t),style:{marginLeft:"10px",color:"red",cursor:"pointer",background:"none",border:"none",fontSize:"14px",fontWeight:"bold"},title:"Remove Experience"},"x"))))),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",placeholder:"Add a new skill",value:c,onChange:e=>s(e.target.value)}),l.a.createElement("button",{onClick:()=>{""!==c.trim()&&(m([...i,c]),s(""))}},"Add Skill")),l.a.createElement("div",{className:"form-buttons"},l.a.createElement("button",{onClick:a},"Previous"),l.a.createElement("button",{onClick:()=>{r({skills:i}),t()}},"Next")))},u=a(5);var p=function(e){let{prevStep:t,formData:a}=e;return l.a.createElement("div",{className:"form-container"},l.a.createElement("h2",null,"Preview"),l.a.createElement("div",{className:"resume-preview"},l.a.createElement("h3",null,"Personal Information"),l.a.createElement("p",null,l.a.createElement("strong",null,"Name:")," ",a.name),l.a.createElement("p",null,l.a.createElement("strong",null,"Email:")," ",a.email),l.a.createElement("p",null,l.a.createElement("strong",null,"Mobile:")," ",a.mobile),l.a.createElement("p",null,l.a.createElement("strong",null,"LinkedIn:")," ",a.linkedin||"N/A"),l.a.createElement("p",null,l.a.createElement("strong",null,"Location:")," ",a.location||""),l.a.createElement("h3",null,"Profile Summary"),l.a.createElement("p",null,a.profileSummary),l.a.createElement("h3",null,"Skills"),l.a.createElement("ul",null,a.skills.map((e,t)=>l.a.createElement("li",{key:t},e))),l.a.createElement("h3",null,"Experience"),a.experience.map((e,t)=>l.a.createElement("div",{key:t},l.a.createElement("p",null,l.a.createElement("strong",null,e.company," - ",e.designation)),l.a.createElement("p",null,e.joiningDate," to ",e.endDate),l.a.createElement("p",null,e.role)))),l.a.createElement("div",{className:"form-buttons"},l.a.createElement("button",{onClick:t},"Previous"),l.a.createElement("button",{onClick:()=>{const e=new u.a,t=e.internal.pageSize.width,n=e.internal.pageSize.height;let l=20;const r=function(a,r){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal",m=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];e.setFontSize(r),e.setFont("times",o),e.splitTextToSize(a,t-40).forEach(t=>{l>n-20&&(e.addPage(),l=40,i()),e.text(t,20,l),m&&(l+=.75*r)})},o=()=>{e.setLineWidth(.5),l+=1,e.line(20,l,t-20,l),l+=5},i=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],e.setFillColor(178,190,181),e.rect(0,0,t,30,"F"),e.setFont("times","bold"),e.setFontSize(16),e.setTextColor(0,0,0),e.text(a.name,20,15),e.setFontSize(10),e.text(`${a.mobile} | ${a.email}`,20,25),e.text(`${a.linkedin||""} | ${a.location||""}`,t-20,25,{align:"right"}),l=45};i(!0),r("Profile Summary",14,"bold"),o(),r(a.profileSummary,12),l+=5,r("Skills",14,"bold"),o(),Array.isArray(a.skills)&&a.skills.length>0&&a.skills.forEach(e=>{r(`\u2022 ${e}`,12,"normal"),l+=3}),l+=2,r("Experience",14,"bold"),o(),Array.isArray(a.experience)&&a.experience.length>0&&a.experience.forEach(e=>{r(`${e.company} - ${e.designation}`,12,"bold"),r(`${e.joiningDate} to ${e.endDate}`,12),r(e.role,12),l+=2}),(()=>{const a=e.internal.getNumberOfPages();for(let l=1;l<=a;l++)e.setPage(l),e.setFillColor(178,190,181),e.rect(0,n-20,t,20,"F"),e.setTextColor(0,0,0),e.setFontSize(10),e.text(`Page ${l} of ${a}`,t/2,n-10,{align:"center"})})();const m=`${a.name.replace(/\s+/g,"_")}_Resume.pdf`;e.save(m)}},"Download PDF")))};var d=function(){const[e,t]=Object(n.useState)(1),[a,r]=Object(n.useState)({name:"",email:"",mobile:"",experience:[],skills:[]}),o=()=>t(e+1),u=()=>t(e-1),d=e=>r({...a,...e});switch(e){case 1:return l.a.createElement(i,{nextStep:o,handleFormData:d,formData:a});case 2:return l.a.createElement(m,{nextStep:o,handleFormData:d,formData:a});case 3:return l.a.createElement(c,{nextStep:o,prevStep:u,handleFormData:d,formData:a});case 4:return l.a.createElement(s,{nextStep:o,prevStep:u,handleFormData:d,formData:a});case 5:return l.a.createElement(p,{prevStep:u,formData:a});default:return l.a.createElement(i,{nextStep:o,handleFormData:d,formData:a})}};o.a.render(l.a.createElement(d,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,3]]]);
//# sourceMappingURL=main.875c77d1.chunk.js.map