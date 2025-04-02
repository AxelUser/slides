import{s as pt,n as q,a as Gt,u as qt,g as Wt,b as Ft,f as J}from"../chunks/scheduler.DypdDQBO.js";import{S as ot,i as _t,e as g,t as I,s as h,c as v,a as z,h as B,j as C,d as i,b as k,f as c,k as L,l as Nt,m as R,n as S,z as H,r as Xt,p as Jt,g as Ht,v as O,w as A,x as D,y as K,A as Ut,B as jt}from"../chunks/index.D01Odw2v.js";import{e as gt}from"../chunks/each.D6YF6ztN.js";import{b as Qt}from"../chunks/paths.DcaYrCjo.js";import{S as Yt,a as Zt,b as U,N as G}from"../chunks/SocialIcons.CWHn959N.js";function yt(o){let t,l=`
        %%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
    `,n,e,s;return{c(){t=g("div"),n=I(l),e=h(),s=I(o[0]),this.h()},l($){t=v($,"DIV",{class:!0});var a=z(t);n=B(a,l),e=C(a),s=B(a,o[0]),a.forEach(i),this.h()},h(){k(t,"class","mermaid flex flex-col items-center")},m($,a){c($,t,a),L(t,n),L(t,e),L(t,s)},p($,[a]){a&1&&Nt(s,$[0])},i:q,o:q,d($){$&&i(t)}}}function te(o,t,l){let{code:n}=t;return o.$$set=e=>{"code"in e&&l(0,n=e.code)},[n]}class ee extends ot{constructor(t){super(),_t(this,t,te,yt,pt,{code:0})}}function se(o){let t,l;const n=o[1].default,e=Gt(n,o,o[0],null);return{c(){t=g("li"),e&&e.c(),this.h()},l(s){t=v(s,"LI",{class:!0});var $=z(t);e&&e.l($),$.forEach(i),this.h()},h(){k(t,"class","fragment text-2xl [&:not(.current-fragment)]:text-gray-400")},m(s,$){c(s,t,$),e&&e.m(t,null),l=!0},p(s,[$]){e&&e.p&&(!l||$&1)&&qt(e,n,s,s[0],l?Ft(n,s[0],$,null):Wt(s[0]),null)},i(s){l||(R(e,s),l=!0)},o(s){S(e,s),l=!1},d(s){s&&i(t),e&&e.d(s)}}}function le(o,t,l){let{$$slots:n={},$$scope:e}=t;return o.$$set=s=>{"$$scope"in s&&l(0,e=s.$$scope)},[e,n]}class F extends ot{constructor(t){super(),_t(this,t,le,se,pt,{})}}function Tt(o,t,l){const n=o.slice();return n[1]=t[l],n}function Pt(o){let t,l,n,e,s=o[1].title+"",$,a,f;return l=new Yt({props:{network:o[1].network,fgColor:"#111111",bgColor:"#eeeeee",width:"32",height:"32"}}),{c(){t=g("a"),O(l.$$.fragment),n=h(),e=g("span"),$=I(s),a=h(),this.h()},l(r){t=v(r,"A",{class:!0,href:!0,target:!0});var m=z(t);A(l.$$.fragment,m),n=C(m),e=v(m,"SPAN",{class:!0});var u=z(e);$=B(u,s),u.forEach(i),a=C(m),m.forEach(i),this.h()},h(){k(e,"class","!my-auto text-base"),k(t,"class","flex items-start gap-4"),k(t,"href",o[1].url),k(t,"target","_blank")},m(r,m){c(r,t,m),D(l,t,null),L(t,n),L(t,e),L(e,$),L(t,a),f=!0},p:q,i(r){f||(R(l.$$.fragment,r),f=!0)},o(r){S(l.$$.fragment,r),f=!1},d(r){r&&i(t),K(l)}}}function ne(o){let t,l,n='Алексей Мальцев, <a class="!text-orange-400" href="https://www.maltsev.space/" target="_blank">maltsev.space</a>',e,s,$,a=gt(o[0]),f=[];for(let m=0;m<a.length;m+=1)f[m]=Pt(Tt(o,a,m));const r=m=>S(f[m],1,1,()=>{f[m]=null});return{c(){t=g("div"),l=g("div"),l.innerHTML=n,e=h(),s=g("div");for(let m=0;m<f.length;m+=1)f[m].c();this.h()},l(m){t=v(m,"DIV",{class:!0});var u=z(t);l=v(u,"DIV",{class:!0,"data-svelte-h":!0}),H(l)!=="svelte-105cun2"&&(l.innerHTML=n),e=C(u),s=v(u,"DIV",{class:!0});var _=z(s);for(let b=0;b<f.length;b+=1)f[b].l(_);_.forEach(i),u.forEach(i),this.h()},h(){k(l,"class","mt-10 text-lg"),k(s,"class","mt-4 flex flex-col items-start gap-6"),k(t,"class","flex flex-col items-center")},m(m,u){c(m,t,u),L(t,l),L(t,e),L(t,s);for(let _=0;_<f.length;_+=1)f[_]&&f[_].m(s,null);$=!0},p(m,[u]){if(u&1){a=gt(m[0]);let _;for(_=0;_<a.length;_+=1){const b=Tt(m,a,_);f[_]?(f[_].p(b,u),R(f[_],1)):(f[_]=Pt(b),f[_].c(),R(f[_],1),f[_].m(s,null))}for(Xt(),_=a.length;_<f.length;_+=1)r(_);Jt()}},i(m){if(!$){for(let u=0;u<a.length;u+=1)R(f[u]);$=!0}},o(m){f=f.filter(Boolean);for(let u=0;u<f.length;u+=1)S(f[u]);$=!1},d(m){m&&i(t),Ht(f,m)}}}function $e(o){return[[{network:"github",title:"github.com/AxelUser",url:"https://github.com/AxelUser"},{network:"telegram",title:"t.me/AxelUser",url:"https://t.me/AxelUser"}]]}class zt extends ot{constructor(t){super(),_t(this,t,$e,ne,pt,{})}}function fe(o,t,l){const n=o.slice();return n[1]=t[l],n}function re(o){let t;return{c(){t=I(`Всем привет, меня зовут Алексей и сегодня я вам расскажу про то как готовить Apache Kafka на
			практике. Этот доклад немного пересекается с предыдущим вебинаром, но на этот раз я принёс вам
			немного картинок чтобы наглядно всё продемонстрировать.`)},l(l){t=B(l,`Всем привет, меня зовут Алексей и сегодня я вам расскажу про то как готовить Apache Kafka на
			практике. Этот доклад немного пересекается с предыдущим вебинаром, но на этот раз я принёс вам
			немного картинок чтобы наглядно всё продемонстрировать.`)},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function ae(o){let t,l="Apache Kafka на практике",n,e,s,$,a;return e=new zt({}),$=new G({props:{$$slots:{default:[re]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),O(e.$$.fragment),s=h(),O($.$$.fragment),this.h()},l(f){t=v(f,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-vyrlrc"&&(t.textContent=l),n=C(f),A(e.$$.fragment,f),s=C(f),A($.$$.fragment,f),this.h()},h(){k(t,"class","text-8xl")},m(f,r){c(f,t,r),c(f,n,r),D(e,f,r),c(f,s,r),D($,f,r),a=!0},p(f,r){const m={};r&16&&(m.$$scope={dirty:r,ctx:f}),$.$set(m)},i(f){a||(R(e.$$.fragment,f),R($.$$.fragment,f),a=!0)},o(f){S(e.$$.fragment,f),S($.$$.fragment,f),a=!1},d(f){f&&(i(t),i(n),i(s)),K(e,f),K($,f)}}}function ie(o){let t,l='<div class="text-8xl">Поговорим</div> <div><ol class="space-y-4"><li class="text-2xl">Что такое Apache Kafka</li> <li class="text-2xl">Внутреннее устройство</li> <li class="text-2xl">Как сервисы пишут и читают сообщения</li> <li class="text-2xl">Продвинутые паттерны работы с Apache Kafka</li> <li class="text-2xl">Live demo</li></ol></div>';return{c(){t=g("div"),t.innerHTML=l,this.h()},l(n){t=v(n,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-1nonizt"&&(t.innerHTML=l),this.h()},h(){k(t,"class","flex flex-col gap-16")},m(n,e){c(n,t,e)},p:q,d(n){n&&i(t)}}}function ue(o){let t,l,n="WHOAMI",e,s,$,a,f,r,m='<ul class="space-y-4"><li class="text-2xl">Senior Software Engineer @ Infobip</li> <li class="text-2xl">10 лет пишу софт</li> <li class="text-2xl">4 года работаю с Apache Kafka</li> <li class="text-2xl">Fan-boy распределённых систем</li></ul>';return{c(){t=g("div"),l=g("div"),l.textContent=n,e=h(),s=g("div"),$=g("img"),f=h(),r=g("div"),r.innerHTML=m,this.h()},l(u){t=v(u,"DIV",{});var _=z(t);l=v(_,"DIV",{class:!0,"data-svelte-h":!0}),H(l)!=="svelte-tjfync"&&(l.textContent=n),e=C(_),s=v(_,"DIV",{class:!0});var b=z(s);$=v(b,"IMG",{class:!0,src:!0,alt:!0}),f=C(b),r=v(b,"DIV",{class:!0,"data-svelte-h":!0}),H(r)!=="svelte-hhnq2d"&&(r.innerHTML=m),b.forEach(i),_.forEach(i),this.h()},h(){k(l,"class","text-8xl"),k($,"class","h-80 w-80 object-contain"),J($.src,a=o[0]+"/ava-ai.jpg")||k($,"src",a),k($,"alt","it's me"),k(r,"class","self-center"),k(s,"class","flex gap-48")},m(u,_){c(u,t,_),L(t,l),L(t,e),L(t,s),L(s,$),L(s,f),L(s,r)},p:q,d(u){u&&i(t)}}}function me(o){let t;return{c(){t=I(`Итак, в этом блоке мы проговорим основные моменты, как Apache Kafka работает и из каких
			компонентов состоит.`)},l(l){t=B(l,`Итак, в этом блоке мы проговорим основные моменты, как Apache Kafka работает и из каких
			компонентов состоит.`)},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function ce(o){let t,l="Всё что нужно знать про Apache Kafka",n,e,s;return e=new G({props:{$$slots:{default:[me]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),O(e.$$.fragment),this.h()},l($){t=v($,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-1orm90m"&&(t.textContent=l),n=C($),A(e.$$.fragment,$),this.h()},h(){k(t,"class","text-8xl")},m($,a){c($,t,a),c($,n,a),D(e,$,a),s=!0},p($,a){const f={};a&16&&(f.$$scope={dirty:a,ctx:$}),e.$set(f)},i($){s||(R(e.$$.fragment,$),s=!0)},o($){S(e.$$.fragment,$),s=!1},d($){$&&(i(t),i(n)),K(e,$)}}}function pe(o){let t;return{c(){t=I(`Apache Kafka это достаточно нестандартный брокер очередей. Очереди в нём по сути упрощенны до
			распределенного файла, в который можно только дописывать сообщения в конец. Удалением
			занимается сама Apache Kafka. Она идёт по файлу с начала и избавляется от старых сообщений,
			пока очередь не перестанет выходить за временные рамки или за рамки занимаемой памяти на
			диске.`)},l(l){t=B(l,`Apache Kafka это достаточно нестандартный брокер очередей. Очереди в нём по сути упрощенны до
			распределенного файла, в который можно только дописывать сообщения в конец. Удалением
			занимается сама Apache Kafka. Она идёт по файлу с начала и избавляется от старых сообщений,
			пока очередь не перестанет выходить за временные рамки или за рамки занимаемой памяти на
			диске.`)},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function oe(o){let t,l,n="Что оно такое?",e,s,$='<li class="text-xl">Реплицированный лог сообщений</li> <li class="text-xl">Время жизни сообщения ограничено по времени или памяти</li>',a,f,r,m,u,_;return u=new G({props:{$$slots:{default:[pe]},$$scope:{ctx:o}}}),{c(){t=g("div"),l=g("div"),l.textContent=n,e=h(),s=g("ul"),s.innerHTML=$,a=h(),f=g("img"),m=h(),O(u.$$.fragment),this.h()},l(b){t=v(b,"DIV",{class:!0});var p=z(t);l=v(p,"DIV",{class:!0,"data-svelte-h":!0}),H(l)!=="svelte-18dzluj"&&(l.textContent=n),e=C(p),s=v(p,"UL",{class:!0,"data-svelte-h":!0}),H(s)!=="svelte-awfgp6"&&(s.innerHTML=$),a=C(p),f=v(p,"IMG",{class:!0,src:!0,alt:!0}),p.forEach(i),m=C(b),A(u.$$.fragment,b),this.h()},h(){k(l,"class","text-4xl"),k(s,"class","w-2/3 space-y-4"),k(f,"class","!mt-4"),J(f.src,r=o[0]+"/kafka-queue-overview.png")||k(f,"src",r),k(f,"alt","top overview of queue in Apache Kafka"),k(t,"class","flex flex-col items-center gap-10")},m(b,p){c(b,t,p),L(t,l),L(t,e),L(t,s),L(t,a),L(t,f),c(b,m,p),D(u,b,p),_=!0},p(b,p){const d={};p&16&&(d.$$scope={dirty:p,ctx:b}),u.$set(d)},i(b){_||(R(u.$$.fragment,b),_=!0)},o(b){S(u.$$.fragment,b),_=!1},d(b){b&&(i(t),i(m)),K(u,b)}}}function _e(o){let t,l,n,e;return{c(){t=I(`Apache Kafka - это сервис, который занимается хранением сообщений и предоставляет доступ к
			ним, в терминах самой Kafka он называется брокер. Несколько брокеров можно объединить в
			кластер и в этом случае мы получим распределенное приложение, которое само балансирует
			нагрузку и данные между своими узлами. То есть одни и те же сообщения могут храниться сразу на
			нескольких узлах и в случае потери одного узла мы не потеряем все данные.
			`),l=g("br"),n=g("br"),e=I(`
			В кластере из нескольких брокеров всегда есть брокер, контролирующий остальных и занимающийся администрированием
			всего кластера. Эта должность выборная, то есть бремя контроллера может периодически передаваться
			от брокера к брокеру. Администрирование включает в себя в том числе создание и удаление очередей.`)},l(s){t=B(s,`Apache Kafka - это сервис, который занимается хранением сообщений и предоставляет доступ к
			ним, в терминах самой Kafka он называется брокер. Несколько брокеров можно объединить в
			кластер и в этом случае мы получим распределенное приложение, которое само балансирует
			нагрузку и данные между своими узлами. То есть одни и те же сообщения могут храниться сразу на
			нескольких узлах и в случае потери одного узла мы не потеряем все данные.
			`),l=v(s,"BR",{}),n=v(s,"BR",{}),e=B(s,`
			В кластере из нескольких брокеров всегда есть брокер, контролирующий остальных и занимающийся администрированием
			всего кластера. Эта должность выборная, то есть бремя контроллера может периодически передаваться
			от брокера к брокеру. Администрирование включает в себя в том числе создание и удаление очередей.`)},m(s,$){c(s,t,$),c(s,l,$),c(s,n,$),c(s,e,$)},p:q,d(s){s&&(i(t),i(l),i(n),i(e))}}}function ge(o){let t,l='<div class="text-8xl">Кластер Apache Kafka</div> <div><ul class="space-y-4"><li class="text-2xl">Apache Kafka - распределённое приложение</li> <li class="text-2xl">Данные реплицируются и шардируются между брокерами</li> <li class="text-2xl">Работа с очередями распределена между брокерами</li></ul></div>',n,e,s;return e=new G({props:{$$slots:{default:[_e]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.innerHTML=l,n=h(),O(e.$$.fragment),this.h()},l($){t=v($,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-2zivne"&&(t.innerHTML=l),n=C($),A(e.$$.fragment,$),this.h()},h(){k(t,"class","flex flex-col justify-center gap-16")},m($,a){c($,t,a),c($,n,a),D(e,$,a),s=!0},p($,a){const f={};a&16&&(f.$$scope={dirty:a,ctx:$}),e.$set(f)},i($){s||(R(e.$$.fragment,$),s=!0)},o($){S(e.$$.fragment,$),s=!1},d($){$&&(i(t),i(n)),K(e,$)}}}function ve(o){let t,l,n,e;return{c(){t=I(`В Apache Kafka очереди называются топиками (англ. topic, я не буду переводить его дословно
				как тема чтобы лишний раз никого не путать). Топики в свою очередь разбиты на мини-очереди,
				которые называются партициями (англ. partition).
				`),l=g("br"),n=g("br"),e=I(`
				У топика всегда есть хотя бы одна партиция, а зачастую гораздо больше. Сами разработчики Apache
				Kafka советуют хранить не более 200 тысяч партиций на одном брокере.`)},l(s){t=B(s,`В Apache Kafka очереди называются топиками (англ. topic, я не буду переводить его дословно
				как тема чтобы лишний раз никого не путать). Топики в свою очередь разбиты на мини-очереди,
				которые называются партициями (англ. partition).
				`),l=v(s,"BR",{}),n=v(s,"BR",{}),e=B(s,`
				У топика всегда есть хотя бы одна партиция, а зачастую гораздо больше. Сами разработчики Apache
				Kafka советуют хранить не более 200 тысяч партиций на одном брокере.`)},m(s,$){c(s,t,$),c(s,l,$),c(s,n,$),c(s,e,$)},p:q,d(s){s&&(i(t),i(l),i(n),i(e))}}}function be(o){let t,l="Топики и Партиции",n,e,s='<ul class="space-y-4"><li class="text-2xl">Очереди называются топиками (англ. topic)</li> <li class="text-2xl">Партиции - кусочки топика</li></ul>',$,a,f;return a=new G({props:{$$slots:{default:[ve]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("div"),e.innerHTML=s,$=h(),O(a.$$.fragment),this.h()},l(r){t=v(r,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-xscnqn"&&(t.textContent=l),n=C(r),e=v(r,"DIV",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-131u7zw"&&(e.innerHTML=s),$=C(r),A(a.$$.fragment,r),this.h()},h(){k(t,"class","text-8xl"),k(e,"class","m-10")},m(r,m){c(r,t,m),c(r,n,m),c(r,e,m),c(r,$,m),D(a,r,m),f=!0},p(r,m){const u={};m&16&&(u.$$scope={dirty:m,ctx:r}),a.$set(u)},i(r){f||(R(a.$$.fragment,r),f=!0)},o(r){S(a.$$.fragment,r),f=!1},d(r){r&&(i(t),i(n),i(e),i($)),K(a,r)}}}function de(o){let t,l,n,e,s,$,a,f,r,m,u,_,b;return{c(){t=I(`Более того эти партиции могут реплицироваться сразу на нескольких брокерах Kafka кластера,
				то есть условно на разных машинах может хранится по копии одной и той же партиции. Таким
				образом когда один брокер выйдет из строя - чтение и запись будет вестись на другом брокере
				с такими же данными.
				`),l=g("br"),n=g("br"),e=I(`
				Так же поскольку топик разделён на партиции, а партиции распределены по кластеру, клиенты будут
				работать сразу с несколькими брокерами Apache Kafka, что улучшает производительность.
				`),s=g("br"),$=g("br"),a=I(`
				Когда несколько копий одной партиции хранятся на нескольких брокерах, для этой партиции всегда
				есть главный брокер, его ещё называют лидером партиции. В схеме на экране копия хранящаяся на
				лидере помечена как L, то есть Leader, а другая помечена как F, то есть Follower.
				`),f=g("br"),r=g("br"),m=I(`
				Запись и чтение сообщений в партиции всегда должны происходить на лидере этой партиции, так как
				именно лидер занимается репликацией сообщений на все остальные копии. Как и в случае с контролером
				кластера, должность лидера партиции так же выборная, то есть лидер может меняться если система
				начинает терять стабильность.
				`),u=g("br"),_=g("br"),b=I(`
				В целом вам про это знать полезно, но беспокоиться не обязательно, так как выборами занимается
				сама Apache Kafka. Вам лишь нужно указать, сколько копий каждой партиции должно храниться в кластере.
				Тут как и для репликации в базах данных вы ищете баланс между надежностью, скоростью и потреблением
				памяти.`)},l(p){t=B(p,`Более того эти партиции могут реплицироваться сразу на нескольких брокерах Kafka кластера,
				то есть условно на разных машинах может хранится по копии одной и той же партиции. Таким
				образом когда один брокер выйдет из строя - чтение и запись будет вестись на другом брокере
				с такими же данными.
				`),l=v(p,"BR",{}),n=v(p,"BR",{}),e=B(p,`
				Так же поскольку топик разделён на партиции, а партиции распределены по кластеру, клиенты будут
				работать сразу с несколькими брокерами Apache Kafka, что улучшает производительность.
				`),s=v(p,"BR",{}),$=v(p,"BR",{}),a=B(p,`
				Когда несколько копий одной партиции хранятся на нескольких брокерах, для этой партиции всегда
				есть главный брокер, его ещё называют лидером партиции. В схеме на экране копия хранящаяся на
				лидере помечена как L, то есть Leader, а другая помечена как F, то есть Follower.
				`),f=v(p,"BR",{}),r=v(p,"BR",{}),m=B(p,`
				Запись и чтение сообщений в партиции всегда должны происходить на лидере этой партиции, так как
				именно лидер занимается репликацией сообщений на все остальные копии. Как и в случае с контролером
				кластера, должность лидера партиции так же выборная, то есть лидер может меняться если система
				начинает терять стабильность.
				`),u=v(p,"BR",{}),_=v(p,"BR",{}),b=B(p,`
				В целом вам про это знать полезно, но беспокоиться не обязательно, так как выборами занимается
				сама Apache Kafka. Вам лишь нужно указать, сколько копий каждой партиции должно храниться в кластере.
				Тут как и для репликации в базах данных вы ищете баланс между надежностью, скоростью и потреблением
				памяти.`)},m(p,d){c(p,t,d),c(p,l,d),c(p,n,d),c(p,e,d),c(p,s,d),c(p,$,d),c(p,a,d),c(p,f,d),c(p,r,d),c(p,m,d),c(p,u,d),c(p,_,d),c(p,b,d)},p:q,d(p){p&&(i(t),i(l),i(n),i(e),i(s),i($),i(a),i(f),i(r),i(m),i(u),i(_),i(b))}}}function xe(o){let t,l="Топики и Партиции",n,e,s,$,a,f;return a=new G({props:{$$slots:{default:[de]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("img"),$=h(),O(a.$$.fragment),this.h()},l(r){t=v(r,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-1mei5m1"&&(t.textContent=l),n=C(r),e=v(r,"IMG",{class:!0,src:!0,alt:!0}),$=C(r),A(a.$$.fragment,r),this.h()},h(){k(t,"class","text-6xl"),k(e,"class","!mx-auto block h-2/3 w-2/3"),J(e.src,s=o[0]+"/topics-and-partitions-scheme.webp")||k(e,"src",s),k(e,"alt","topics and partitions scheme")},m(r,m){c(r,t,m),c(r,n,m),c(r,e,m),c(r,$,m),D(a,r,m),f=!0},p(r,m){const u={};m&16&&(u.$$scope={dirty:m,ctx:r}),a.$set(u)},i(r){f||(R(a.$$.fragment,r),f=!0)},o(r){S(a.$$.fragment,r),f=!1},d(r){r&&(i(t),i(n),i(e),i($)),K(a,r)}}}function we(o){let t,l,n,e;return t=new U({props:{$$slots:{default:[be]},$$scope:{ctx:o}}}),n=new U({props:{$$slots:{default:[xe]},$$scope:{ctx:o}}}),{c(){O(t.$$.fragment),l=h(),O(n.$$.fragment)},l(s){A(t.$$.fragment,s),l=C(s),A(n.$$.fragment,s)},m(s,$){D(t,s,$),c(s,l,$),D(n,s,$),e=!0},p(s,$){const a={};$&16&&(a.$$scope={dirty:$,ctx:s}),t.$set(a);const f={};$&16&&(f.$$scope={dirty:$,ctx:s}),n.$set(f)},i(s){e||(R(t.$$.fragment,s),R(n.$$.fragment,s),e=!0)},o(s){S(t.$$.fragment,s),S(n.$$.fragment,s),e=!1},d(s){s&&i(l),K(t,s),K(n,s)}}}function he(o){let t;return{c(){t=I(`Сообщения по факту хранятся именно в партициях и упорядоченны только в рамках своей
				партиции. Когда ваше приложение отправляет связанные сообщения в топик - ваша задача сделать
				так, чтобы они все попали в одну и ту же партицию. Как это контролировать я расскажу позже,
				когда мы переидем к балансировке.`)},l(l){t=B(l,`Сообщения по факту хранятся именно в партициях и упорядоченны только в рамках своей
				партиции. Когда ваше приложение отправляет связанные сообщения в топик - ваша задача сделать
				так, чтобы они все попали в одну и ту же партицию. Как это контролировать я расскажу позже,
				когда мы переидем к балансировке.`)},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function Ce(o){let t,l="Куда записываются сообщения",n,e,s='<ul class="space-y-4"><li class="text-2xl">Сообщения хранятся в партициях топика</li> <li class="text-2xl text-yellow-400">Упорядочены только в рамках партиции</li></ul>',$,a,f;return a=new G({props:{$$slots:{default:[he]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("div"),e.innerHTML=s,$=h(),O(a.$$.fragment),this.h()},l(r){t=v(r,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-p3zygk"&&(t.textContent=l),n=C(r),e=v(r,"DIV",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-13y9lwy"&&(e.innerHTML=s),$=C(r),A(a.$$.fragment,r),this.h()},h(){k(t,"class","text-8xl"),k(e,"class","m-10")},m(r,m){c(r,t,m),c(r,n,m),c(r,e,m),c(r,$,m),D(a,r,m),f=!0},p(r,m){const u={};m&16&&(u.$$scope={dirty:m,ctx:r}),a.$set(u)},i(r){f||(R(a.$$.fragment,r),f=!0)},o(r){S(a.$$.fragment,r),f=!1},d(r){r&&(i(t),i(n),i(e),i($)),K(a,r)}}}function ke(o){let t,l,n,e;return{c(){t=I(`А пока посмотрим на примере обработки заказов в интернет-магазине. Допустим сообщения об
				изменении статуса заказов попадают в топик Orders. Все сообщения про один и тот же заказ
				попадают в одну и ту же партицию, поэтому при чтении они придут в том порядке, в котором
				записывались в топик.
				`),l=g("br"),n=g("br"),e=I(`
				Если сообщения про один и тот же заказ попадут в разные партиции, есть вероятность что они будут
				прочитаны не в том порядке, в котором вы это ожидаете. В таком случае сервис, который например
				читает сообщения и обновляет статус заказа в своей базе, может перетереть актуальное состояние
				более старым, так как порядок не сохранился.`)},l(s){t=B(s,`А пока посмотрим на примере обработки заказов в интернет-магазине. Допустим сообщения об
				изменении статуса заказов попадают в топик Orders. Все сообщения про один и тот же заказ
				попадают в одну и ту же партицию, поэтому при чтении они придут в том порядке, в котором
				записывались в топик.
				`),l=v(s,"BR",{}),n=v(s,"BR",{}),e=B(s,`
				Если сообщения про один и тот же заказ попадут в разные партиции, есть вероятность что они будут
				прочитаны не в том порядке, в котором вы это ожидаете. В таком случае сервис, который например
				читает сообщения и обновляет статус заказа в своей базе, может перетереть актуальное состояние
				более старым, так как порядок не сохранился.`)},m(s,$){c(s,t,$),c(s,l,$),c(s,n,$),c(s,e,$)},p:q,d(s){s&&(i(t),i(l),i(n),i(e))}}}function Ie(o){let t,l="Куда записываются сообщения",n,e,s,$,a,f;return a=new G({props:{$$slots:{default:[ke]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("div"),s=Ut("svg"),$=h(),O(a.$$.fragment),this.h()},l(r){t=v(r,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-1h6t6m0"&&(t.textContent=l),n=C(r),e=v(r,"DIV",{class:!0});var m=z(e);s=jt(m,"svg",{"data-src":!0});var u=z(s);u.forEach(i),m.forEach(i),$=C(r),A(a.$$.fragment,r),this.h()},h(){k(t,"class","text-4xl"),k(s,"data-src",o[0]+"/messages-in-partition-anim.svg"),k(e,"class","m-10 mx-auto flex flex-col items-center")},m(r,m){c(r,t,m),c(r,n,m),c(r,e,m),L(e,s),c(r,$,m),D(a,r,m),f=!0},p(r,m){const u={};m&16&&(u.$$scope={dirty:m,ctx:r}),a.$set(u)},i(r){f||(R(a.$$.fragment,r),f=!0)},o(r){S(a.$$.fragment,r),f=!1},d(r){r&&(i(t),i(n),i(e),i($)),K(a,r)}}}function Be(o){let t,l,n,e;return t=new U({props:{$$slots:{default:[Ce]},$$scope:{ctx:o}}}),n=new U({props:{$$slots:{default:[Ie]},$$scope:{ctx:o}}}),{c(){O(t.$$.fragment),l=h(),O(n.$$.fragment)},l(s){A(t.$$.fragment,s),l=C(s),A(n.$$.fragment,s)},m(s,$){D(t,s,$),c(s,l,$),D(n,s,$),e=!0},p(s,$){const a={};$&16&&(a.$$scope={dirty:$,ctx:s}),t.$set(a);const f={};$&16&&(f.$$scope={dirty:$,ctx:s}),n.$set(f)},i(s){e||(R(t.$$.fragment,s),R(n.$$.fragment,s),e=!0)},o(s){S(t.$$.fragment,s),S(n.$$.fragment,s),e=!1},d(s){s&&i(l),K(t,s),K(n,s)}}}function Re(o){let t,l,n=o[1].name+"",e,s,$,a=o[1].desc+"",f,r;return{c(){t=g("tr"),l=g("td"),e=I(n),s=h(),$=g("td"),f=I(a),r=h(),this.h()},l(m){t=v(m,"TR",{class:!0});var u=z(t);l=v(u,"TD",{class:!0});var _=z(l);e=B(_,n),_.forEach(i),s=C(u),$=v(u,"TD",{class:!0});var b=z($);f=B(b,a),b.forEach(i),r=C(u),u.forEach(i),this.h()},h(){k(l,"class","!border-b-0"),k($,"class","!border-b-0 !pl-10"),k(t,"class","fragment bg-black bg-opacity-5 [&:not(.current-fragment)]:text-gray-400")},m(m,u){c(m,t,u),L(t,l),L(l,e),L(t,s),L(t,$),L($,f),L(t,r)},p:q,d(m){m&&i(t)}}}function Se(o){let t,l,n,e,s,$,a,f,r,m,u,_,b;return{c(){t=I(`(1) У каждого сообщения может быть контент произвольного формата, например JSON, XML,
			Protobuf, по факту всё это не так важно так как в Apache Kafka хранятся просто байты и ваша
			задача записать их в том формате, из которого этот контент можно будет прочитать в других
			приложениях.
			`),l=g("br"),n=g("br"),e=I(`
			(2) Так же сообщение может иметь заголовки в формате словаря, т.е. у каждого заголовка есть строковое
			имя и его значение в произвольном формате. Если с контентом всё более-менее очевидно, ведь там
			хранится самая мякотка вашего сообщения - данные, то заголовки могут использоваться для хранения
			произвольных метаданных, например идентификатор запроса который привёл к появлению сообщения, версия
			сообщения если вы когда-то меняли его формат или любая другая полезная информация, которая поможет
			читателям ещё до того как они потратят процессорное время на чтение всего контента.
			`),s=g("br"),$=g("br"),a=I(`
			(3) Помимо заголовка ещё можно задать ключ сообщения, чтобы контролировать в какую партицию его
			записать, но об этом я расскажу отдельно.
			`),f=g("br"),r=g("br"),m=I(`
			(4) Ещё сообщению всегда присваивается offset, но и об этом чуть позже.
			`),u=g("br"),_=g("br"),b=I(`
			(5) Так же сообщение обязательно содержит время его создания в виде так называемого таймстемпа.
			Он может задаваться как на стороне клиента, так и на стороне брокера.`)},l(p){t=B(p,`(1) У каждого сообщения может быть контент произвольного формата, например JSON, XML,
			Protobuf, по факту всё это не так важно так как в Apache Kafka хранятся просто байты и ваша
			задача записать их в том формате, из которого этот контент можно будет прочитать в других
			приложениях.
			`),l=v(p,"BR",{}),n=v(p,"BR",{}),e=B(p,`
			(2) Так же сообщение может иметь заголовки в формате словаря, т.е. у каждого заголовка есть строковое
			имя и его значение в произвольном формате. Если с контентом всё более-менее очевидно, ведь там
			хранится самая мякотка вашего сообщения - данные, то заголовки могут использоваться для хранения
			произвольных метаданных, например идентификатор запроса который привёл к появлению сообщения, версия
			сообщения если вы когда-то меняли его формат или любая другая полезная информация, которая поможет
			читателям ещё до того как они потратят процессорное время на чтение всего контента.
			`),s=v(p,"BR",{}),$=v(p,"BR",{}),a=B(p,`
			(3) Помимо заголовка ещё можно задать ключ сообщения, чтобы контролировать в какую партицию его
			записать, но об этом я расскажу отдельно.
			`),f=v(p,"BR",{}),r=v(p,"BR",{}),m=B(p,`
			(4) Ещё сообщению всегда присваивается offset, но и об этом чуть позже.
			`),u=v(p,"BR",{}),_=v(p,"BR",{}),b=B(p,`
			(5) Так же сообщение обязательно содержит время его создания в виде так называемого таймстемпа.
			Он может задаваться как на стороне клиента, так и на стороне брокера.`)},m(p,d){c(p,t,d),c(p,l,d),c(p,n,d),c(p,e,d),c(p,s,d),c(p,$,d),c(p,a,d),c(p,f,d),c(p,r,d),c(p,m,d),c(p,u,d),c(p,_,d),c(p,b,d)},p:q,d(p){p&&(i(t),i(l),i(n),i(e),i(s),i($),i(a),i(f),i(r),i(m),i(u),i(_),i(b))}}}function Oe(o){let t,l="Структура сообщения",n,e,s,$,a,f,r=gt([{name:"Контент",desc:"Произвольное значение, например JSON, XML или Protobuf"},{name:"Заголовки",desc:"Ключ - значение, содержат метаданные о сообщении"},{name:"Ключ сообщения",desc:"Используется для определения партиции"},{name:"Offset",desc:"Порядковый номер сообщения"},{name:"Время сообщения",desc:"Задаётся на клиенте или самой Apache Kafka"}]),m=[];for(let u=0;u<5;u+=1)m[u]=Re(fe(o,r,u));return a=new G({props:{$$slots:{default:[Se]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("table"),s=g("tbody");for(let u=0;u<5;u+=1)m[u].c();$=h(),O(a.$$.fragment),this.h()},l(u){t=v(u,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-wtzf1k"&&(t.textContent=l),n=C(u),e=v(u,"TABLE",{class:!0});var _=z(e);s=v(_,"TBODY",{});var b=z(s);for(let p=0;p<5;p+=1)m[p].l(b);b.forEach(i),_.forEach(i),$=C(u),A(a.$$.fragment,u),this.h()},h(){k(t,"class","text-8xl"),k(e,"class","!mt-10 table-fixed text-xl")},m(u,_){c(u,t,_),c(u,n,_),c(u,e,_),L(e,s);for(let b=0;b<5;b+=1)m[b]&&m[b].m(s,null);c(u,$,_),D(a,u,_),f=!0},p(u,_){const b={};_&16&&(b.$$scope={dirty:_,ctx:u}),a.$set(b)},i(u){f||(R(a.$$.fragment,u),f=!0)},o(u){S(a.$$.fragment,u),f=!1},d(u){u&&(i(t),i(n),i(e),i($)),Ht(m,u),K(a,u)}}}function Ae(o){let t,l,n,e;return{c(){t=I(`Что же касается ключа сообщения, то у него тоже есть своя роль - его можно использовать
				чтобы автоматически определять в какую партицию нужно записать сообщения.
				`),l=g("br"),n=I(`
				Если опять же взять в пример историю обработки заказа, то записав в ключ номер заказа, вы поможете
				клиенту Kafka отправлять сообщения по одному и тому же заказу в одну и ту же партицию.
				`),e=g("br")},l(s){t=B(s,`Что же касается ключа сообщения, то у него тоже есть своя роль - его можно использовать
				чтобы автоматически определять в какую партицию нужно записать сообщения.
				`),l=v(s,"BR",{}),n=B(s,`
				Если опять же взять в пример историю обработки заказа, то записав в ключ номер заказа, вы поможете
				клиенту Kafka отправлять сообщения по одному и тому же заказу в одну и ту же партицию.
				`),e=v(s,"BR",{})},m(s,$){c(s,t,$),c(s,l,$),c(s,n,$),c(s,e,$)},p:q,d(s){s&&(i(t),i(l),i(n),i(e))}}}function De(o){let t,l="Ключ сообщения и балансировка",n,e,s,$,a,f,r;return f=new G({props:{$$slots:{default:[Ae]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("div"),s=g("img"),a=h(),O(f.$$.fragment),this.h()},l(m){t=v(m,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-1gmzxkr"&&(t.textContent=l),n=C(m),e=v(m,"DIV",{class:!0});var u=z(e);s=v(u,"IMG",{class:!0,src:!0,alt:!0}),u.forEach(i),a=C(m),A(f.$$.fragment,m),this.h()},h(){k(t,"class","text-8xl"),k(s,"class","h-full w-full object-contain"),J(s.src,$=o[0]+"/consistent-partitioning-by-key.png")||k(s,"src",$),k(s,"alt","example of how bad key can overflow partition"),k(e,"class","mx-auto mt-10 h-[66%] w-[66%]")},m(m,u){c(m,t,u),c(m,n,u),c(m,e,u),L(e,s),c(m,a,u),D(f,m,u),r=!0},p(m,u){const _={};u&16&&(_.$$scope={dirty:u,ctx:m}),f.$set(_)},i(m){r||(R(f.$$.fragment,m),r=!0)},o(m){S(f.$$.fragment,m),r=!1},d(m){m&&(i(t),i(n),i(e),i(a)),K(f,m)}}}function Ke(o){let t,l,n;return{c(){t=I(`Но помимо такого роутинга вам желательно добиться равномерного распределения сообщений между
				всеми партициями у топика, иначе теряется часть смысла этих партиций, так как они перестают
				балансировать нагрузку при чтении из них.
				`),l=g("br"),n=I(`
				Например если вы строите систему для сбора кликов пользователей на сайтах, то оставлять в ключе
				только идентификатор сайта будет плохой идеей, так как вероятнее всего вы столкнётесь с проблемой,
				что целая партиция забита сообщениями от какого-нибудь популярного веб-ресурса.`)},l(e){t=B(e,`Но помимо такого роутинга вам желательно добиться равномерного распределения сообщений между
				всеми партициями у топика, иначе теряется часть смысла этих партиций, так как они перестают
				балансировать нагрузку при чтении из них.
				`),l=v(e,"BR",{}),n=B(e,`
				Например если вы строите систему для сбора кликов пользователей на сайтах, то оставлять в ключе
				только идентификатор сайта будет плохой идеей, так как вероятнее всего вы столкнётесь с проблемой,
				что целая партиция забита сообщениями от какого-нибудь популярного веб-ресурса.`)},m(e,s){c(e,t,s),c(e,l,s),c(e,n,s)},p:q,d(e){e&&(i(t),i(l),i(n))}}}function Ve(o){let t,l="Плохой ключ",n,e,s,$,a,f,r;return f=new G({props:{$$slots:{default:[Ke]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("div"),s=g("img"),a=h(),O(f.$$.fragment),this.h()},l(m){t=v(m,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-15pv939"&&(t.textContent=l),n=C(m),e=v(m,"DIV",{class:!0});var u=z(e);s=v(u,"IMG",{class:!0,src:!0,alt:!0}),u.forEach(i),a=C(m),A(f.$$.fragment,m),this.h()},h(){k(t,"class","text-8xl"),k(s,"class","h-full w-full object-contain"),J(s.src,$=o[0]+"/bad-partition-ballancing.png")||k(s,"src",$),k(s,"alt","example of how bad key can overflow partition"),k(e,"class","mx-auto mt-10 h-[66%] w-[66%]")},m(m,u){c(m,t,u),c(m,n,u),c(m,e,u),L(e,s),c(m,a,u),D(f,m,u),r=!0},p(m,u){const _={};u&16&&(_.$$scope={dirty:u,ctx:m}),f.$set(_)},i(m){r||(R(f.$$.fragment,m),r=!0)},o(m){S(f.$$.fragment,m),r=!1},d(m){m&&(i(t),i(n),i(e),i(a)),K(f,m)}}}function Ee(o){let t;return{c(){t=I(`А если вы добавите, например, идентификатор пользовательской сессии на сайте, то вы всё так
				же добьётесь достаточной упорядоченности, но при этом улучшите распределение между
				партициями.`)},l(l){t=B(l,`А если вы добавите, например, идентификатор пользовательской сессии на сайте, то вы всё так
				же добьётесь достаточной упорядоченности, но при этом улучшите распределение между
				партициями.`)},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function Me(o){let t,l="Хороший ключ",n,e,s,$,a,f,r;return f=new G({props:{$$slots:{default:[Ee]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("div"),s=g("img"),a=h(),O(f.$$.fragment),this.h()},l(m){t=v(m,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-161sjil"&&(t.textContent=l),n=C(m),e=v(m,"DIV",{class:!0});var u=z(e);s=v(u,"IMG",{class:!0,src:!0,alt:!0}),u.forEach(i),a=C(m),A(f.$$.fragment,m),this.h()},h(){k(t,"class","text-8xl"),k(s,"class","h-full w-full object-contain"),J(s.src,$=o[0]+"/good-partition-ballancing.png")||k(s,"src",$),k(s,"alt","example of good message key and even distribution"),k(e,"class","mx-auto mt-10 h-[66%] w-[66%]")},m(m,u){c(m,t,u),c(m,n,u),c(m,e,u),L(e,s),c(m,a,u),D(f,m,u),r=!0},p(m,u){const _={};u&16&&(_.$$scope={dirty:u,ctx:m}),f.$set(_)},i(m){r||(R(f.$$.fragment,m),r=!0)},o(m){S(f.$$.fragment,m),r=!1},d(m){m&&(i(t),i(n),i(e),i(a)),K(f,m)}}}function Le(o){let t,l,n,e,s;return{c(){t=I(`Важно добавить, что сама Apache Kafka не связывает ключ сообщения с номером партиции, это
				всё происходит на стороне клиентов, которые используются в коде приложений.
				`),l=g("br"),n=I(`
				То есть по факту популярные клиенты берут хеш от ключа сообщения и по этому хешу вычисляют номер
				партиции, в которую оно будет отправлено.
				`),e=g("br"),s=I(`
				Если ключ не задан, то клиент будет выбирать партицию в стиле round-robin, то есть перебирать
				партиции по порядку, например сначала одно сообщение улетит в нулевую партицию, следующее в первую
				и так далее.`)},l($){t=B($,`Важно добавить, что сама Apache Kafka не связывает ключ сообщения с номером партиции, это
				всё происходит на стороне клиентов, которые используются в коде приложений.
				`),l=v($,"BR",{}),n=B($,`
				То есть по факту популярные клиенты берут хеш от ключа сообщения и по этому хешу вычисляют номер
				партиции, в которую оно будет отправлено.
				`),e=v($,"BR",{}),s=B($,`
				Если ключ не задан, то клиент будет выбирать партицию в стиле round-robin, то есть перебирать
				партиции по порядку, например сначала одно сообщение улетит в нулевую партицию, следующее в первую
				и так далее.`)},m($,a){c($,t,a),c($,l,a),c($,n,a),c($,e,a),c($,s,a)},p:q,d($){$&&(i(t),i(l),i(n),i(e),i(s))}}}function Te(o){let t,l="Как находят партицию",n,e,s='<ul class="space-y-4"><li class="text-2xl"><span class="text-green-400">Ключ есть</span> - считает хеш для выбора партиции</li> <li class="text-2xl"><span class="text-red-500">Ключа нет</span> - по порядку перебирает партиции</li></ul>',$,a,f;return a=new G({props:{$$slots:{default:[Le]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("div"),e.innerHTML=s,$=h(),O(a.$$.fragment),this.h()},l(r){t=v(r,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-6vnyax"&&(t.textContent=l),n=C(r),e=v(r,"DIV",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-1re4tp"&&(e.innerHTML=s),$=C(r),A(a.$$.fragment,r),this.h()},h(){k(t,"class","text-8xl"),k(e,"class","m-10")},m(r,m){c(r,t,m),c(r,n,m),c(r,e,m),c(r,$,m),D(a,r,m),f=!0},p(r,m){const u={};m&16&&(u.$$scope={dirty:m,ctx:r}),a.$set(u)},i(r){f||(R(a.$$.fragment,r),f=!0)},o(r){S(a.$$.fragment,r),f=!1},d(r){r&&(i(t),i(n),i(e),i($)),K(a,r)}}}function Pe(o){let t,l,n,e;return{c(){t=I(`Но и от такой автоматики можно отказаться, явно указав номер партиции или даже нескольких
				партиций. Полезным бывает подход, когда вы отправляете сообщение сразу во все партиции,
				например чтобы каждый потребитель вашего топика получал все изменения по какой-то сущности и
				кешировал актуальное значение в памяти.
				`),l=g("br"),n=g("br"),e=I(`
				Это конечно не самая лучшая замена распределённого кеша, вроде Redis, но например для небольших
				объемов данных и с уже имеющимся кластером Kafka - может подойти.`)},l(s){t=B(s,`Но и от такой автоматики можно отказаться, явно указав номер партиции или даже нескольких
				партиций. Полезным бывает подход, когда вы отправляете сообщение сразу во все партиции,
				например чтобы каждый потребитель вашего топика получал все изменения по какой-то сущности и
				кешировал актуальное значение в памяти.
				`),l=v(s,"BR",{}),n=v(s,"BR",{}),e=B(s,`
				Это конечно не самая лучшая замена распределённого кеша, вроде Redis, но например для небольших
				объемов данных и с уже имеющимся кластером Kafka - может подойти.`)},m(s,$){c(s,t,$),c(s,l,$),c(s,n,$),c(s,e,$)},p:q,d(s){s&&(i(t),i(l),i(n),i(e))}}}function He(o){let t,l="Отправка в несколько партиций",n,e,s,$,a,f,r;return f=new G({props:{$$slots:{default:[Pe]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("div"),s=g("img"),a=h(),O(f.$$.fragment),this.h()},l(m){t=v(m,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-1k64g8w"&&(t.textContent=l),n=C(m),e=v(m,"DIV",{class:!0});var u=z(e);s=v(u,"IMG",{class:!0,src:!0,alt:!0}),u.forEach(i),a=C(m),A(f.$$.fragment,m),this.h()},h(){k(t,"class","text-8xl"),k(s,"class","h-full w-full object-contain"),J(s.src,$=o[0]+"/message-broadcasting.png")||k(s,"src",$),k(s,"alt","sending all messages to all partitions"),k(e,"class","mx-auto mt-10 h-[66%] w-[66%]")},m(m,u){c(m,t,u),c(m,n,u),c(m,e,u),L(e,s),c(m,a,u),D(f,m,u),r=!0},p(m,u){const _={};u&16&&(_.$$scope={dirty:u,ctx:m}),f.$set(_)},i(m){r||(R(f.$$.fragment,m),r=!0)},o(m){S(f.$$.fragment,m),r=!1},d(m){m&&(i(t),i(n),i(e),i(a)),K(f,m)}}}function Ue(o){let t,l,n,e,s,$,a,f,r,m;return t=new U({props:{$$slots:{default:[De]},$$scope:{ctx:o}}}),n=new U({props:{$$slots:{default:[Ve]},$$scope:{ctx:o}}}),s=new U({props:{$$slots:{default:[Me]},$$scope:{ctx:o}}}),a=new U({props:{$$slots:{default:[Te]},$$scope:{ctx:o}}}),r=new U({props:{$$slots:{default:[He]},$$scope:{ctx:o}}}),{c(){O(t.$$.fragment),l=h(),O(n.$$.fragment),e=h(),O(s.$$.fragment),$=h(),O(a.$$.fragment),f=h(),O(r.$$.fragment)},l(u){A(t.$$.fragment,u),l=C(u),A(n.$$.fragment,u),e=C(u),A(s.$$.fragment,u),$=C(u),A(a.$$.fragment,u),f=C(u),A(r.$$.fragment,u)},m(u,_){D(t,u,_),c(u,l,_),D(n,u,_),c(u,e,_),D(s,u,_),c(u,$,_),D(a,u,_),c(u,f,_),D(r,u,_),m=!0},p(u,_){const b={};_&16&&(b.$$scope={dirty:_,ctx:u}),t.$set(b);const p={};_&16&&(p.$$scope={dirty:_,ctx:u}),n.$set(p);const d={};_&16&&(d.$$scope={dirty:_,ctx:u}),s.$set(d);const M={};_&16&&(M.$$scope={dirty:_,ctx:u}),a.$set(M);const x={};_&16&&(x.$$scope={dirty:_,ctx:u}),r.$set(x)},i(u){m||(R(t.$$.fragment,u),R(n.$$.fragment,u),R(s.$$.fragment,u),R(a.$$.fragment,u),R(r.$$.fragment,u),m=!0)},o(u){S(t.$$.fragment,u),S(n.$$.fragment,u),S(s.$$.fragment,u),S(a.$$.fragment,u),S(r.$$.fragment,u),m=!1},d(u){u&&(i(l),i(e),i($),i(f)),K(t,u),K(n,u),K(s,u),K(a,u),K(r,u)}}}function je(o){let t;return{c(){t=I("Порядковый номер начиная с нуля и далее по возрастанию")},l(l){t=B(l,"Порядковый номер начиная с нуля и далее по возрастанию")},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function ze(o){let t,l="Не уникален",n;return{c(){t=g("span"),t.textContent=l,n=I(" в рамках одного и того же топика"),this.h()},l(e){t=v(e,"SPAN",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-gpeh77"&&(t.textContent=l),n=B(e," в рамках одного и того же топика"),this.h()},h(){k(t,"class","text-red-500")},m(e,s){c(e,t,s),c(e,n,s)},p:q,d(e){e&&(i(t),i(n))}}}function Ge(o){let t,l,n="Уникальность";return{c(){t=I("Партиция + Offset = "),l=g("span"),l.textContent=n,this.h()},l(e){t=B(e,"Партиция + Offset = "),l=v(e,"SPAN",{class:!0,"data-svelte-h":!0}),H(l)!=="svelte-16q4oxq"&&(l.textContent=n),this.h()},h(){k(l,"class","wiggle-text text-yellow-400 svelte-13eezke")},m(e,s){c(e,t,s),c(e,l,s)},p:q,d(e){e&&(i(t),i(l))}}}function qe(o){let t,l,n,e,s,$,a;return{c(){t=I(`(1) Когда сообщение записывается в партицию, ему присваивается уникальный порядковый номер -
			offset. По сути offset это номер сообщения в этой партиции начиная с нуля.
			`),l=g("br"),n=g("br"),e=I(`
			(2) Сам по себе offset не будет уникальным в рамках всего топика, ведь это порядковый номер в определённой
			партиции. А партиций у топика может быть несколько. Соответственно и сообщений с одним и тем же
			offset-ом может быть тоже несколько.
			`),s=g("br"),$=g("br"),a=I(`
			(3) А вот уже номер партиции и порядковый номер сообщения является уникальной комбинацией, указывающий
			только на одно сообщение в топике.`)},l(f){t=B(f,`(1) Когда сообщение записывается в партицию, ему присваивается уникальный порядковый номер -
			offset. По сути offset это номер сообщения в этой партиции начиная с нуля.
			`),l=v(f,"BR",{}),n=v(f,"BR",{}),e=B(f,`
			(2) Сам по себе offset не будет уникальным в рамках всего топика, ведь это порядковый номер в определённой
			партиции. А партиций у топика может быть несколько. Соответственно и сообщений с одним и тем же
			offset-ом может быть тоже несколько.
			`),s=v(f,"BR",{}),$=v(f,"BR",{}),a=B(f,`
			(3) А вот уже номер партиции и порядковый номер сообщения является уникальной комбинацией, указывающий
			только на одно сообщение в топике.`)},m(f,r){c(f,t,r),c(f,l,r),c(f,n,r),c(f,e,r),c(f,s,r),c(f,$,r),c(f,a,r)},p:q,d(f){f&&(i(t),i(l),i(n),i(e),i(s),i($),i(a))}}}function We(o){let t,l="Offset сообщения",n,e,s,$,a,f,r,m,u,_,b;return $=new F({props:{$$slots:{default:[je]},$$scope:{ctx:o}}}),f=new F({props:{$$slots:{default:[ze]},$$scope:{ctx:o}}}),m=new F({props:{$$slots:{default:[Ge]},$$scope:{ctx:o}}}),_=new G({props:{$$slots:{default:[qe]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("div"),s=g("ul"),O($.$$.fragment),a=h(),O(f.$$.fragment),r=h(),O(m.$$.fragment),u=h(),O(_.$$.fragment),this.h()},l(p){t=v(p,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-ho9yes"&&(t.textContent=l),n=C(p),e=v(p,"DIV",{class:!0});var d=z(e);s=v(d,"UL",{});var M=z(s);A($.$$.fragment,M),a=C(M),A(f.$$.fragment,M),r=C(M),A(m.$$.fragment,M),M.forEach(i),d.forEach(i),u=C(p),A(_.$$.fragment,p),this.h()},h(){k(t,"class","text-8xl"),k(e,"class","m-10")},m(p,d){c(p,t,d),c(p,n,d),c(p,e,d),L(e,s),D($,s,null),L(s,a),D(f,s,null),L(s,r),D(m,s,null),c(p,u,d),D(_,p,d),b=!0},p(p,d){const M={};d&16&&(M.$$scope={dirty:d,ctx:p}),$.$set(M);const x={};d&16&&(x.$$scope={dirty:d,ctx:p}),f.$set(x);const E={};d&16&&(E.$$scope={dirty:d,ctx:p}),m.$set(E);const V={};d&16&&(V.$$scope={dirty:d,ctx:p}),_.$set(V)},i(p){b||(R($.$$.fragment,p),R(f.$$.fragment,p),R(m.$$.fragment,p),R(_.$$.fragment,p),b=!0)},o(p){S($.$$.fragment,p),S(f.$$.fragment,p),S(m.$$.fragment,p),S(_.$$.fragment,p),b=!1},d(p){p&&(i(t),i(n),i(e),i(u)),K($),K(f),K(m),K(_,p)}}}function Fe(o){let t;return{c(){t=I(`Apache Kafka удаляет сообщения в двух случаях - когда партиция вышла за максимально
				допустимый размер в байтах или когда эти самые старые сообщения вышли за пределы временного
				окна хранения сообщений, например лежат там дольше 3-х дней. Но удаляет она их не сразу.`)},l(l){t=B(l,`Apache Kafka удаляет сообщения в двух случаях - когда партиция вышла за максимально
				допустимый размер в байтах или когда эти самые старые сообщения вышли за пределы временного
				окна хранения сообщений, например лежат там дольше 3-х дней. Но удаляет она их не сразу.`)},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function Ne(o){let t,l='Когда сообщения <span class="fadeout-text svelte-13eezke" data-text="исчезают">исчезают</span>',n,e,s,$,a,f,r,m="Слишком старые",u,_,b,p,d,M,x="Партиция заполнилась",E,V,P;return V=new G({props:{$$slots:{default:[Fe]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.innerHTML=l,n=h(),e=g("div"),s=g("div"),$=g("img"),f=h(),r=g("div"),r.textContent=m,u=h(),_=g("div"),b=g("img"),d=h(),M=g("div"),M.textContent=x,E=h(),O(V.$$.fragment),this.h()},l(j){t=v(j,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-4tjd8m"&&(t.innerHTML=l),n=C(j),e=v(j,"DIV",{class:!0});var W=z(e);s=v(W,"DIV",{class:!0});var N=z(s);$=v(N,"IMG",{class:!0,src:!0,alt:!0}),f=C(N),r=v(N,"DIV",{class:!0,"data-svelte-h":!0}),H(r)!=="svelte-equ0vr"&&(r.textContent=m),N.forEach(i),u=C(W),_=v(W,"DIV",{class:!0});var X=z(_);b=v(X,"IMG",{class:!0,src:!0,alt:!0}),d=C(X),M=v(X,"DIV",{class:!0,"data-svelte-h":!0}),H(M)!=="svelte-rt5mjy"&&(M.textContent=x),X.forEach(i),W.forEach(i),E=C(j),A(V.$$.fragment,j),this.h()},h(){k(t,"class","text-6xl"),k($,"class","block h-full w-full object-contain"),J($.src,a=o[0]+"/old-message.webp")||k($,"src",a),k($,"alt","old message"),k(r,"class","text-3xl"),k(s,"class","flex w-2/6 flex-col items-center"),k(b,"class","block h-full w-full object-contain"),J(b.src,p=o[0]+"/partition-overflowed-with-messages.webp")||k(b,"src",p),k(b,"alt","partition full"),k(M,"class","text-3xl"),k(_,"class","flex w-2/6 flex-col items-center"),k(e,"class","mt-10 flex flex-row justify-center space-x-10")},m(j,W){c(j,t,W),c(j,n,W),c(j,e,W),L(e,s),L(s,$),L(s,f),L(s,r),L(e,u),L(e,_),L(_,b),L(_,d),L(_,M),c(j,E,W),D(V,j,W),P=!0},p(j,W){const N={};W&16&&(N.$$scope={dirty:W,ctx:j}),V.$set(N)},i(j){P||(R(V.$$.fragment,j),P=!0)},o(j){S(V.$$.fragment,j),P=!1},d(j){j&&(i(t),i(n),i(e),i(E)),K(V,j)}}}function Xe(o){let t,l,n,e,s;return{c(){t=I(`Дело в том, что сами партиции тоже делятся на сегменты. Сегмент может быть активным и
				неактивным. Активный сегмент - это тот в который идёт запись новых сообщений.
				`),l=g("br"),n=I(`
				Когда он достигнет определенного размера (например 1Гб) или возраста (например 7 дней), то Apache
				Kafka перестаёт в него записывать и переводит в неактивное состояние. То есть с него можно будет
				только читать. В то же время она создаёт новый активный сегмент, куда будут попадать новые сообщения.
				`),e=g("br"),s=I(`
				Apache Kafka удаляет не отдельные сообщения, а сегменты целиком, если они полностью подходят
				под условия про которые я сказал ранее. Причём под удаление попадают только неактивные сегменты,
				чтобы не замедлять запись в активном. В добавок к этому сегменты проверяются отдельным фоновым
				обработчиком, который запускается с заданным интервалом. Поэтому сообщения в Apache Kafka могут
				храниться дольше, чем вы этого ожидаете.`)},l($){t=B($,`Дело в том, что сами партиции тоже делятся на сегменты. Сегмент может быть активным и
				неактивным. Активный сегмент - это тот в который идёт запись новых сообщений.
				`),l=v($,"BR",{}),n=B($,`
				Когда он достигнет определенного размера (например 1Гб) или возраста (например 7 дней), то Apache
				Kafka перестаёт в него записывать и переводит в неактивное состояние. То есть с него можно будет
				только читать. В то же время она создаёт новый активный сегмент, куда будут попадать новые сообщения.
				`),e=v($,"BR",{}),s=B($,`
				Apache Kafka удаляет не отдельные сообщения, а сегменты целиком, если они полностью подходят
				под условия про которые я сказал ранее. Причём под удаление попадают только неактивные сегменты,
				чтобы не замедлять запись в активном. В добавок к этому сегменты проверяются отдельным фоновым
				обработчиком, который запускается с заданным интервалом. Поэтому сообщения в Apache Kafka могут
				храниться дольше, чем вы этого ожидаете.`)},m($,a){c($,t,a),c($,l,a),c($,n,a),c($,e,a),c($,s,a)},p:q,d($){$&&(i(t),i(l),i(n),i(e),i(s))}}}function Je(o){let t,l='Когда сообщения <span class="opacity-5" data-text="исчезают">исчезают</span>',n,e,s,$,a,f,r;return f=new G({props:{$$slots:{default:[Xe]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.innerHTML=l,n=h(),e=g("div"),s=g("img"),a=h(),O(f.$$.fragment),this.h()},l(m){t=v(m,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-1w2iesh"&&(t.innerHTML=l),n=C(m),e=v(m,"DIV",{class:!0});var u=z(e);s=v(u,"IMG",{src:!0,alt:!0}),u.forEach(i),a=C(m),A(f.$$.fragment,m),this.h()},h(){k(t,"class","text-6xl"),J(s.src,$=o[0]+"/partition-segments.png")||k(s,"src",$),k(s,"alt","segments in partition"),k(e,"class","mt-10 flex flex-row justify-center space-x-20")},m(m,u){c(m,t,u),c(m,n,u),c(m,e,u),L(e,s),c(m,a,u),D(f,m,u),r=!0},p(m,u){const _={};u&16&&(_.$$scope={dirty:u,ctx:m}),f.$set(_)},i(m){r||(R(f.$$.fragment,m),r=!0)},o(m){S(f.$$.fragment,m),r=!1},d(m){m&&(i(t),i(n),i(e),i(a)),K(f,m)}}}function Qe(o){let t,l,n,e;return t=new U({props:{$$slots:{default:[Ne]},$$scope:{ctx:o}}}),n=new U({props:{animate:!0,$$slots:{default:[Je]},$$scope:{ctx:o}}}),{c(){O(t.$$.fragment),l=h(),O(n.$$.fragment)},l(s){A(t.$$.fragment,s),l=C(s),A(n.$$.fragment,s)},m(s,$){D(t,s,$),c(s,l,$),D(n,s,$),e=!0},p(s,$){const a={};$&16&&(a.$$scope={dirty:$,ctx:s}),t.$set(a);const f={};$&16&&(f.$$scope={dirty:$,ctx:s}),n.$set(f)},i(s){e||(R(t.$$.fragment,s),R(n.$$.fragment,s),e=!0)},o(s){S(t.$$.fragment,s),S(n.$$.fragment,s),e=!1},d(s){s&&i(l),K(t,s),K(n,s)}}}function Ye(o){let t;return{c(){t=I(`В Apache Kafka потребители сообщений читают сообщения так же из партиций. Но не всё так
				просто, давайте для наглядности снова возьмём за пример заказы из интернет магазина.`)},l(l){t=B(l,`В Apache Kafka потребители сообщений читают сообщения так же из партиций. Но не всё так
				просто, давайте для наглядности снова возьмём за пример заказы из интернет магазина.`)},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function Ze(o){let t,l="Чтение сообщений",n,e,s;return e=new G({props:{$$slots:{default:[Ye]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),O(e.$$.fragment),this.h()},l($){t=v($,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-e544xd"&&(t.textContent=l),n=C($),A(e.$$.fragment,$),this.h()},h(){k(t,"class","text-8xl")},m($,a){c($,t,a),c($,n,a),D(e,$,a),s=!0},p($,a){const f={};a&16&&(f.$$scope={dirty:a,ctx:$}),e.$set(f)},i($){s||(R(e.$$.fragment,$),s=!0)},o($){S(e.$$.fragment,$),s=!1},d($){$&&(i(t),i(n)),K(e,$)}}}function ye(o){let t;return{c(){t=I(`Предположим что у нас есть топик Orders и есть Web API, которое пишет сообщение для каждого
				нового заказа. Для упрощения предположим что слушают этот топик два сервиса -
				MetricsCollector и OrderProcessor. Первый считает какие-то продуктовые метрики, а второй
				собственно занимается обработкой заказа.`)},l(l){t=B(l,`Предположим что у нас есть топик Orders и есть Web API, которое пишет сообщение для каждого
				нового заказа. Для упрощения предположим что слушают этот топик два сервиса -
				MetricsCollector и OrderProcessor. Первый считает какие-то продуктовые метрики, а второй
				собственно занимается обработкой заказа.`)},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function ts(o){let t,l="Пример: несколько разных сервисов читают один и тот же топик",n,e,s=`
					%%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
					flowchart LR
						WebAPI[Web API] --> |"Publishes messages"| OrdersTopic[Kafka Topic: Orders]
						OrdersTopic -->|Receive| MetricsCollector[MetricsCollector Service]
						OrdersTopic -->|Receive| OrderProcessor[OrderProcessor Service]
				`,$,a,f,r;return f=new G({props:{$$slots:{default:[ye]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("div"),$=I(s),a=h(),O(f.$$.fragment),this.h()},l(m){t=v(m,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-ypk60n"&&(t.textContent=l),n=C(m),e=v(m,"DIV",{class:!0});var u=z(e);$=B(u,s),u.forEach(i),a=C(m),A(f.$$.fragment,m),this.h()},h(){k(t,"class","text-start text-4xl"),k(e,"class","mermaid mb-10 mt-10 flex flex-col items-center")},m(m,u){c(m,t,u),c(m,n,u),c(m,e,u),L(e,$),c(m,a,u),D(f,m,u),r=!0},p(m,u){const _={};u&16&&(_.$$scope={dirty:u,ctx:m}),f.$set(_)},i(m){r||(R(f.$$.fragment,m),r=!0)},o(m){S(f.$$.fragment,m),r=!1},d(m){m&&(i(t),i(n),i(e),i(a)),K(f,m)}}}function es(o){let t,l,n,e,s,$,a;return{c(){t=I(`Как это обычно бывает, читают сообщения сразу несколько приложений MetricsCollector и
				несколько OrderProcessor. Например по две машины на каждый сервис, то есть два запущенных
				приложения MetricsCollector и два OrderProcessor.
				`),l=g("br"),n=g("br"),e=I(`
				MetricsCollector и OrderProcessor занимаются разными вещами и каждое сообщение должно быть прочитано
				ими обоими. Но при этом оба приложения MetricsCollector не должны прочесть одно сообщение дважды,
				ведь метрику по заказу нужно посчитать единожды. То же самое справедливо и для двух приложений
				OrderProcessor.
				`),s=g("br"),$=g("br"),a=I(`
				Как же в Apache Kafka достичь того, чтобы с одной стороны оба сервиса получили все сообщения,
				но при этом каждым сервисом сообщение было обработано единожды? Для этого в Apache Kafka есть
				consumer groups.`)},l(f){t=B(f,`Как это обычно бывает, читают сообщения сразу несколько приложений MetricsCollector и
				несколько OrderProcessor. Например по две машины на каждый сервис, то есть два запущенных
				приложения MetricsCollector и два OrderProcessor.
				`),l=v(f,"BR",{}),n=v(f,"BR",{}),e=B(f,`
				MetricsCollector и OrderProcessor занимаются разными вещами и каждое сообщение должно быть прочитано
				ими обоими. Но при этом оба приложения MetricsCollector не должны прочесть одно сообщение дважды,
				ведь метрику по заказу нужно посчитать единожды. То же самое справедливо и для двух приложений
				OrderProcessor.
				`),s=v(f,"BR",{}),$=v(f,"BR",{}),a=B(f,`
				Как же в Apache Kafka достичь того, чтобы с одной стороны оба сервиса получили все сообщения,
				но при этом каждым сервисом сообщение было обработано единожды? Для этого в Apache Kafka есть
				consumer groups.`)},m(f,r){c(f,t,r),c(f,l,r),c(f,n,r),c(f,e,r),c(f,s,r),c(f,$,r),c(f,a,r)},p:q,d(f){f&&(i(t),i(l),i(n),i(e),i(s),i($),i(a))}}}function ss(o){let t,l="Пример: несколько сервисов читают один и тот же топик",n,e,s,$,a,f,r;return f=new G({props:{$$slots:{default:[es]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("div"),s=g("div"),$=Ut("svg"),a=h(),O(f.$$.fragment),this.h()},l(m){t=v(m,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-1lcv21e"&&(t.textContent=l),n=C(m),e=v(m,"DIV",{class:!0});var u=z(e);s=v(u,"DIV",{class:!0});var _=z(s);$=jt(_,"svg",{"data-src":!0});var b=z($);b.forEach(i),_.forEach(i),u.forEach(i),a=C(m),A(f.$$.fragment,m),this.h()},h(){k(t,"class","text-start text-4xl"),k($,"data-src",o[0]+"/event-flow-animation.svg"),k(s,"class","m-10 flex flex-col"),k(e,"class","mb-10 mt-10 flex flex-col")},m(m,u){c(m,t,u),c(m,n,u),c(m,e,u),L(e,s),L(s,$),c(m,a,u),D(f,m,u),r=!0},p(m,u){const _={};u&16&&(_.$$scope={dirty:u,ctx:m}),f.$set(_)},i(m){r||(R(f.$$.fragment,m),r=!0)},o(m){S(f.$$.fragment,m),r=!1},d(m){m&&(i(t),i(n),i(e),i(a)),K(f,m)}}}function ls(o){let t;return{c(){t=I("Участники могут подписаться несколько топиков")},l(l){t=B(l,"Участники могут подписаться несколько топиков")},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function ns(o){let t,l,n="одной",e;return{c(){t=I(`Партиции каждого топика распределяются между участниками
						`),l=g("span"),l.textContent=n,e=I(" группы"),this.h()},l(s){t=B(s,`Партиции каждого топика распределяются между участниками
						`),l=v(s,"SPAN",{class:!0,"data-svelte-h":!0}),H(l)!=="svelte-1900kze"&&(l.textContent=n),e=B(s," группы"),this.h()},h(){k(l,"class","text-yellow-400")},m(s,$){c(s,t,$),c(s,l,$),c(s,e,$)},p:q,d(s){s&&(i(t),i(l),i(e))}}}function $s(o){let t;return{c(){t=I("Если подписчики располагаются в разных группах, то они получат одни и те же партиции")},l(l){t=B(l,"Если подписчики располагаются в разных группах, то они получат одни и те же партиции")},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function fs(o){let t,l,n,e,s,$,a;return{c(){t=I(`(1) Consumer group - это группа подписчиков на топики. Партиции каждого топика почти всегда
				делятся поровну между подписчиками, как апельсин.
				`),l=g("br"),n=g("br"),e=I(`
				(2) Разделение партиций происходит только между участниками одной и той же группы, а не между
				вообще всеми подписчиками на этот топик.
				`),s=g("br"),$=g("br"),a=I(`
				(3) То есть разные группы получают все сообщения, но каждый участник группы получает только часть
				сообщений, так как Apache Kafka сама распределяет какие партиции читает каждый участник группы.`)},l(f){t=B(f,`(1) Consumer group - это группа подписчиков на топики. Партиции каждого топика почти всегда
				делятся поровну между подписчиками, как апельсин.
				`),l=v(f,"BR",{}),n=v(f,"BR",{}),e=B(f,`
				(2) Разделение партиций происходит только между участниками одной и той же группы, а не между
				вообще всеми подписчиками на этот топик.
				`),s=v(f,"BR",{}),$=v(f,"BR",{}),a=B(f,`
				(3) То есть разные группы получают все сообщения, но каждый участник группы получает только часть
				сообщений, так как Apache Kafka сама распределяет какие партиции читает каждый участник группы.`)},m(f,r){c(f,t,r),c(f,l,r),c(f,n,r),c(f,e,r),c(f,s,r),c(f,$,r),c(f,a,r)},p:q,d(f){f&&(i(t),i(l),i(n),i(e),i(s),i($),i(a))}}}function rs(o){let t,l="Consumer Groups",n,e,s,$,a,f,r,m,u,_,b;return $=new F({props:{$$slots:{default:[ls]},$$scope:{ctx:o}}}),f=new F({props:{$$slots:{default:[ns]},$$scope:{ctx:o}}}),m=new F({props:{$$slots:{default:[$s]},$$scope:{ctx:o}}}),_=new G({props:{$$slots:{default:[fs]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("div"),s=g("ul"),O($.$$.fragment),a=h(),O(f.$$.fragment),r=h(),O(m.$$.fragment),u=h(),O(_.$$.fragment),this.h()},l(p){t=v(p,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-mkbmmj"&&(t.textContent=l),n=C(p),e=v(p,"DIV",{class:!0});var d=z(e);s=v(d,"UL",{class:!0});var M=z(s);A($.$$.fragment,M),a=C(M),A(f.$$.fragment,M),r=C(M),A(m.$$.fragment,M),M.forEach(i),d.forEach(i),u=C(p),A(_.$$.fragment,p),this.h()},h(){k(t,"class","text-8xl"),k(s,"class","space-y-2"),k(e,"class","mb-10 mt-10 flex flex-row items-center gap-10")},m(p,d){c(p,t,d),c(p,n,d),c(p,e,d),L(e,s),D($,s,null),L(s,a),D(f,s,null),L(s,r),D(m,s,null),c(p,u,d),D(_,p,d),b=!0},p(p,d){const M={};d&16&&(M.$$scope={dirty:d,ctx:p}),$.$set(M);const x={};d&16&&(x.$$scope={dirty:d,ctx:p}),f.$set(x);const E={};d&16&&(E.$$scope={dirty:d,ctx:p}),m.$set(E);const V={};d&16&&(V.$$scope={dirty:d,ctx:p}),_.$set(V)},i(p){b||(R($.$$.fragment,p),R(f.$$.fragment,p),R(m.$$.fragment,p),R(_.$$.fragment,p),b=!0)},o(p){S($.$$.fragment,p),S(f.$$.fragment,p),S(m.$$.fragment,p),S(_.$$.fragment,p),b=!1},d(p){p&&(i(t),i(n),i(e),i(u)),K($),K(f),K(m),K(_,p)}}}function as(o){let t,l,n,e;return{c(){t=I(`То есть чтобы достичь желаемого, мы должны для MetricsCollector и OrderProcessor создать по
				отдельной consumer group, назовём их metrics-collector-group и order-processor-group. Когда
				Web API отправляет сообщение в топик Orders, оно попадает в одну единственную партицию этого
				топика.
				`),l=g("br"),n=g("br"),e=I(`
				Далее это сообщение читается одним участником metrics-collector-group и одним частником order-processor-group.
				В результате заказ будет обработан и учтён в метриках, но при этом не будет проделано дублирующей
				работы с этим сообщением.`)},l(s){t=B(s,`То есть чтобы достичь желаемого, мы должны для MetricsCollector и OrderProcessor создать по
				отдельной consumer group, назовём их metrics-collector-group и order-processor-group. Когда
				Web API отправляет сообщение в топик Orders, оно попадает в одну единственную партицию этого
				топика.
				`),l=v(s,"BR",{}),n=v(s,"BR",{}),e=B(s,`
				Далее это сообщение читается одним участником metrics-collector-group и одним частником order-processor-group.
				В результате заказ будет обработан и учтён в метриках, но при этом не будет проделано дублирующей
				работы с этим сообщением.`)},m(s,$){c(s,t,$),c(s,l,$),c(s,n,$),c(s,e,$)},p:q,d(s){s&&(i(t),i(l),i(n),i(e))}}}function is(o){let t,l="Назначим группы",n,e,s,$,a,f;return a=new G({props:{$$slots:{default:[as]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("img"),$=h(),O(a.$$.fragment),this.h()},l(r){t=v(r,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-p9bgzg"&&(t.textContent=l),n=C(r),e=v(r,"IMG",{class:!0,src:!0,alt:!0}),$=C(r),A(a.$$.fragment,r),this.h()},h(){k(t,"class","text-6xl"),k(e,"class","!m-auto !mt-10 h-[66%] w-[66%]"),J(e.src,s=o[0]+"/consumer-groups.png")||k(e,"src",s),k(e,"alt","how consumer groups share partitions")},m(r,m){c(r,t,m),c(r,n,m),c(r,e,m),c(r,$,m),D(a,r,m),f=!0},p(r,m){const u={};m&16&&(u.$$scope={dirty:m,ctx:r}),a.$set(u)},i(r){f||(R(a.$$.fragment,r),f=!0)},o(r){S(a.$$.fragment,r),f=!1},d(r){r&&(i(t),i(n),i(e),i($)),K(a,r)}}}function us(o){let t,l,n,e;return{c(){t=I(`Но что произойдёт, если вдруг участник группы будет отключен или сломается? Apache Kafka в
				этом случае определит что с этим участником что-то не так и выполнит перебалансировку
				партиций между остальными. В данном простом примере все партиции топика Orders уйдут
				последнему оставшемуся участнику и работа продолжится.
				`),l=g("br"),n=g("br"),e=I(`
				И если через какое-то время упавший участник очнётся от безмолвного сна или команда решит добавить
				ещё больше приложений, партиции будут снова перебалансированы с учётом новой топологии.`)},l(s){t=B(s,`Но что произойдёт, если вдруг участник группы будет отключен или сломается? Apache Kafka в
				этом случае определит что с этим участником что-то не так и выполнит перебалансировку
				партиций между остальными. В данном простом примере все партиции топика Orders уйдут
				последнему оставшемуся участнику и работа продолжится.
				`),l=v(s,"BR",{}),n=v(s,"BR",{}),e=B(s,`
				И если через какое-то время упавший участник очнётся от безмолвного сна или команда решит добавить
				ещё больше приложений, партиции будут снова перебалансированы с учётом новой топологии.`)},m(s,$){c(s,t,$),c(s,l,$),c(s,n,$),c(s,e,$)},p:q,d(s){s&&(i(t),i(l),i(n),i(e))}}}function ms(o){let t,l='Если участник выйдет <span class="animated-strikethrough svelte-13eezke">в окно</span>',n,e,s,$,a,f;return a=new G({props:{$$slots:{default:[us]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.innerHTML=l,n=h(),e=g("img"),$=h(),O(a.$$.fragment),this.h()},l(r){t=v(r,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-1ynevtm"&&(t.innerHTML=l),n=C(r),e=v(r,"IMG",{class:!0,src:!0,alt:!0}),$=C(r),A(a.$$.fragment,r),this.h()},h(){k(t,"class","text-6xl"),k(e,"class","!m-auto !mt-10 h-[66%] w-[66%]"),J(e.src,s=o[0]+"/consumer-group-rebalancing.png")||k(e,"src",s),k(e,"alt","consumer group rebalanced")},m(r,m){c(r,t,m),c(r,n,m),c(r,e,m),c(r,$,m),D(a,r,m),f=!0},p(r,m){const u={};m&16&&(u.$$scope={dirty:m,ctx:r}),a.$set(u)},i(r){f||(R(a.$$.fragment,r),f=!0)},o(r){S(a.$$.fragment,r),f=!1},d(r){r&&(i(t),i(n),i(e),i($)),K(a,r)}}}function cs(o){let t;return{c(){t=I(`Кафка ожидает что потребитель будет часто забирать сообщения, иначе она выполнит
					ребалансировку`)},l(l){t=B(l,`Кафка ожидает что потребитель будет часто забирать сообщения, иначе она выполнит
					ребалансировку`)},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function ps(o){let t;return{c(){t=I("Долгая обработка = постоянная ребалансировка")},l(l){t=B(l,"Долгая обработка = постоянная ребалансировка")},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function os(o){let t;return{c(){t=I("Можно увеличить `max.poll.interval.ms` (по-умолчанию 5 минут)")},l(l){t=B(l,"Можно увеличить `max.poll.interval.ms` (по-умолчанию 5 минут)")},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function _s(o){let t;return{c(){t=I("Можно уменьшить количество потребляемых сообщений")},l(l){t=B(l,"Можно уменьшить количество потребляемых сообщений")},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function gs(o){let t;return{c(){t=I("Можно ускорить обработку одного сообщения")},l(l){t=B(l,"Можно ускорить обработку одного сообщения")},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function vs(o){let t,l,n,e,s,$,a;return{c(){t=I(`(1) Но будьте бдительны насчёт перебалансировки и механизма отслеживания подписчиков
				топиков. Apache Kafka определяет активен ли участник или нет в том числе исходя из того,
				успевает ли он забирать сообщения. Если обработка одного сообщения занимает очень
				продолжительное время, то брокер посчитает что подписчик перестал работать, хотя на самом
				деле это не так.
				`),l=g("br"),n=g("br"),e=I(`
				(2) В результате вы можете попасть в ситуацию, когда Apache Kafka очень часто или даже постоянное
				производит перебалансировку партиций, что часто крайне пагубно влияет на работу или может даже
				полностью остановить её.
				`),s=g("br"),$=g("br"),a=I(`
				(3) Решить эту проблему можно либо увеличив период, за который брокер ожидает получить запрос
				на новые сообщения, (4) уменьшить сколько сообщений забираем за раз, (5) или переписав приложение
				таким образом, чтобы обработка занимала гораздо меньше времени.`)},l(f){t=B(f,`(1) Но будьте бдительны насчёт перебалансировки и механизма отслеживания подписчиков
				топиков. Apache Kafka определяет активен ли участник или нет в том числе исходя из того,
				успевает ли он забирать сообщения. Если обработка одного сообщения занимает очень
				продолжительное время, то брокер посчитает что подписчик перестал работать, хотя на самом
				деле это не так.
				`),l=v(f,"BR",{}),n=v(f,"BR",{}),e=B(f,`
				(2) В результате вы можете попасть в ситуацию, когда Apache Kafka очень часто или даже постоянное
				производит перебалансировку партиций, что часто крайне пагубно влияет на работу или может даже
				полностью остановить её.
				`),s=v(f,"BR",{}),$=v(f,"BR",{}),a=B(f,`
				(3) Решить эту проблему можно либо увеличив период, за который брокер ожидает получить запрос
				на новые сообщения, (4) уменьшить сколько сообщений забираем за раз, (5) или переписав приложение
				таким образом, чтобы обработка занимала гораздо меньше времени.`)},m(f,r){c(f,t,r),c(f,l,r),c(f,n,r),c(f,e,r),c(f,s,r),c(f,$,r),c(f,a,r)},p:q,d(f){f&&(i(t),i(l),i(n),i(e),i(s),i($),i(a))}}}function bs(o){let t,l="Коварство ребалансировки",n,e,s,$,a,f,r,m,u,_,b,p,d,M;return s=new F({props:{$$slots:{default:[cs]},$$scope:{ctx:o}}}),a=new F({props:{$$slots:{default:[ps]},$$scope:{ctx:o}}}),r=new F({props:{$$slots:{default:[os]},$$scope:{ctx:o}}}),u=new F({props:{$$slots:{default:[_s]},$$scope:{ctx:o}}}),b=new F({props:{$$slots:{default:[gs]},$$scope:{ctx:o}}}),d=new G({props:{$$slots:{default:[vs]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("ul"),O(s.$$.fragment),$=h(),O(a.$$.fragment),f=h(),O(r.$$.fragment),m=h(),O(u.$$.fragment),_=h(),O(b.$$.fragment),p=h(),O(d.$$.fragment),this.h()},l(x){t=v(x,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-ohw01p"&&(t.textContent=l),n=C(x),e=v(x,"UL",{class:!0});var E=z(e);A(s.$$.fragment,E),$=C(E),A(a.$$.fragment,E),f=C(E),A(r.$$.fragment,E),m=C(E),A(u.$$.fragment,E),_=C(E),A(b.$$.fragment,E),E.forEach(i),p=C(x),A(d.$$.fragment,x),this.h()},h(){k(t,"class","text-6xl"),k(e,"class","!mt-10 w-5/6 space-y-4")},m(x,E){c(x,t,E),c(x,n,E),c(x,e,E),D(s,e,null),L(e,$),D(a,e,null),L(e,f),D(r,e,null),L(e,m),D(u,e,null),L(e,_),D(b,e,null),c(x,p,E),D(d,x,E),M=!0},p(x,E){const V={};E&16&&(V.$$scope={dirty:E,ctx:x}),s.$set(V);const P={};E&16&&(P.$$scope={dirty:E,ctx:x}),a.$set(P);const j={};E&16&&(j.$$scope={dirty:E,ctx:x}),r.$set(j);const W={};E&16&&(W.$$scope={dirty:E,ctx:x}),u.$set(W);const N={};E&16&&(N.$$scope={dirty:E,ctx:x}),b.$set(N);const X={};E&16&&(X.$$scope={dirty:E,ctx:x}),d.$set(X)},i(x){M||(R(s.$$.fragment,x),R(a.$$.fragment,x),R(r.$$.fragment,x),R(u.$$.fragment,x),R(b.$$.fragment,x),R(d.$$.fragment,x),M=!0)},o(x){S(s.$$.fragment,x),S(a.$$.fragment,x),S(r.$$.fragment,x),S(u.$$.fragment,x),S(b.$$.fragment,x),S(d.$$.fragment,x),M=!1},d(x){x&&(i(t),i(n),i(e),i(p)),K(s),K(a),K(r),K(u),K(b),K(d,x)}}}function ds(o){let t;return{c(){t=I("Нужно отправлять оповещения об обработке сообщения, чтобы не читать одни и те же данные")},l(l){t=B(l,"Нужно отправлять оповещения об обработке сообщения, чтобы не читать одни и те же данные")},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function xs(o){let t;return{c(){t=I("Лучше проставлять commit самостоятельно после обработки сообщения")},l(l){t=B(l,"Лучше проставлять commit самостоятельно после обработки сообщения")},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function ws(o){let t,l,n,e;return{c(){t=I(`(1) Ещё одной важной деталью является подтверждение об обработке сообщения, которое должны
				отправлять все участники группы. В терминах Apache Kafka это называет commit offset, то есть
				когда участник оповещает брокер что он обработал сообщение с определённым порядковым номером
				в определённой партиции. Если не отправить подтверждение, то при новом запросе сообщений из
				партиций, участник снова прочитает незакомиченные сообщения.
				`),l=g("br"),n=g("br"),e=I(`
				(2) Обычно в коде клиентов это делается автоматически, например при прочтении сообщения. Но часто
				программисты отправляют подтверждения вручную уже после фактической обработки, чтобы в случае
				ошибки не потерять сообщения, а прочитать их заново.`)},l(s){t=B(s,`(1) Ещё одной важной деталью является подтверждение об обработке сообщения, которое должны
				отправлять все участники группы. В терминах Apache Kafka это называет commit offset, то есть
				когда участник оповещает брокер что он обработал сообщение с определённым порядковым номером
				в определённой партиции. Если не отправить подтверждение, то при новом запросе сообщений из
				партиций, участник снова прочитает незакомиченные сообщения.
				`),l=v(s,"BR",{}),n=v(s,"BR",{}),e=B(s,`
				(2) Обычно в коде клиентов это делается автоматически, например при прочтении сообщения. Но часто
				программисты отправляют подтверждения вручную уже после фактической обработки, чтобы в случае
				ошибки не потерять сообщения, а прочитать их заново.`)},m(s,$){c(s,t,$),c(s,l,$),c(s,n,$),c(s,e,$)},p:q,d(s){s&&(i(t),i(l),i(n),i(e))}}}function hs(o){let t,l="Offset commit",n,e,s,$,a,f,r,m;return s=new F({props:{$$slots:{default:[ds]},$$scope:{ctx:o}}}),a=new F({props:{$$slots:{default:[xs]},$$scope:{ctx:o}}}),r=new G({props:{$$slots:{default:[ws]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("ul"),O(s.$$.fragment),$=h(),O(a.$$.fragment),f=h(),O(r.$$.fragment),this.h()},l(u){t=v(u,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-ls1hof"&&(t.textContent=l),n=C(u),e=v(u,"UL",{class:!0});var _=z(e);A(s.$$.fragment,_),$=C(_),A(a.$$.fragment,_),_.forEach(i),f=C(u),A(r.$$.fragment,u),this.h()},h(){k(t,"class","text-8xl"),k(e,"class","!mt-10 block space-y-4")},m(u,_){c(u,t,_),c(u,n,_),c(u,e,_),D(s,e,null),L(e,$),D(a,e,null),c(u,f,_),D(r,u,_),m=!0},p(u,_){const b={};_&16&&(b.$$scope={dirty:_,ctx:u}),s.$set(b);const p={};_&16&&(p.$$scope={dirty:_,ctx:u}),a.$set(p);const d={};_&16&&(d.$$scope={dirty:_,ctx:u}),r.$set(d)},i(u){m||(R(s.$$.fragment,u),R(a.$$.fragment,u),R(r.$$.fragment,u),m=!0)},o(u){S(s.$$.fragment,u),S(a.$$.fragment,u),S(r.$$.fragment,u),m=!1},d(u){u&&(i(t),i(n),i(e),i(f)),K(s),K(a),K(r,u)}}}function Cs(o){let t;return{c(){t=I("Потребители должны успевать читать сообщения, чтобы не потерять данные")},l(l){t=B(l,"Потребители должны успевать читать сообщения, чтобы не потерять данные")},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function ks(o){let t;return{c(){t=I("Ускоряйте и оптимизируйте код")},l(l){t=B(l,"Ускоряйте и оптимизируйте код")},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function Is(o){let t;return{c(){t=I("Добавьте побольше нод сервиса")},l(l){t=B(l,"Добавьте побольше нод сервиса")},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function Bs(o){let t,l,n,e;return{c(){t=I(`(1) Как я говорил ранее, Apache Kafka не даёт никаких гарантий того, что сообщения будут
				прочитаны. То есть если участник не успевает, то непрочитанные им сообщения могут быть
				автоматически удалены. Apache Kafka не будет дожидаться когда все участники проставят
				коммиты.
				`),l=g("br"),n=g("br"),e=I(`
				Популярных рецептов решения такой проблемы несколько - (2) нужно либо ускорять работу ваших сервисов,
				(3) либо добавлять больше участников, чтобы каждый из них был подписан на меньшее количество
				партиций и лучше справлялся с выделенной нагрузкой.`)},l(s){t=B(s,`(1) Как я говорил ранее, Apache Kafka не даёт никаких гарантий того, что сообщения будут
				прочитаны. То есть если участник не успевает, то непрочитанные им сообщения могут быть
				автоматически удалены. Apache Kafka не будет дожидаться когда все участники проставят
				коммиты.
				`),l=v(s,"BR",{}),n=v(s,"BR",{}),e=B(s,`
				Популярных рецептов решения такой проблемы несколько - (2) нужно либо ускорять работу ваших сервисов,
				(3) либо добавлять больше участников, чтобы каждый из них был подписан на меньшее количество
				партиций и лучше справлялся с выделенной нагрузкой.`)},m(s,$){c(s,t,$),c(s,l,$),c(s,n,$),c(s,e,$)},p:q,d(s){s&&(i(t),i(l),i(n),i(e))}}}function Rs(o){let t,l="Apache Kafka не будет вас ждать",n,e,s,$,a,f,r,m,u,_;return s=new F({props:{$$slots:{default:[Cs]},$$scope:{ctx:o}}}),a=new F({props:{$$slots:{default:[ks]},$$scope:{ctx:o}}}),r=new F({props:{$$slots:{default:[Is]},$$scope:{ctx:o}}}),u=new G({props:{$$slots:{default:[Bs]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("ul"),O(s.$$.fragment),$=h(),O(a.$$.fragment),f=h(),O(r.$$.fragment),m=h(),O(u.$$.fragment),this.h()},l(b){t=v(b,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-84cmr"&&(t.textContent=l),n=C(b),e=v(b,"UL",{class:!0});var p=z(e);A(s.$$.fragment,p),$=C(p),A(a.$$.fragment,p),f=C(p),A(r.$$.fragment,p),p.forEach(i),m=C(b),A(u.$$.fragment,b),this.h()},h(){k(t,"class","text-8xl"),k(e,"class","!mt-10 block space-y-4")},m(b,p){c(b,t,p),c(b,n,p),c(b,e,p),D(s,e,null),L(e,$),D(a,e,null),L(e,f),D(r,e,null),c(b,m,p),D(u,b,p),_=!0},p(b,p){const d={};p&16&&(d.$$scope={dirty:p,ctx:b}),s.$set(d);const M={};p&16&&(M.$$scope={dirty:p,ctx:b}),a.$set(M);const x={};p&16&&(x.$$scope={dirty:p,ctx:b}),r.$set(x);const E={};p&16&&(E.$$scope={dirty:p,ctx:b}),u.$set(E)},i(b){_||(R(s.$$.fragment,b),R(a.$$.fragment,b),R(r.$$.fragment,b),R(u.$$.fragment,b),_=!0)},o(b){S(s.$$.fragment,b),S(a.$$.fragment,b),S(r.$$.fragment,b),S(u.$$.fragment,b),_=!1},d(b){b&&(i(t),i(n),i(e),i(m)),K(s),K(a),K(r),K(u,b)}}}function Ss(o){let t,l,n,e,s,$,a,f,r,m,u,_,b,p,d,M,x,E;return t=new U({props:{$$slots:{default:[Ze]},$$scope:{ctx:o}}}),n=new U({props:{$$slots:{default:[ts]},$$scope:{ctx:o}}}),s=new U({props:{$$slots:{default:[ss]},$$scope:{ctx:o}}}),a=new U({props:{$$slots:{default:[rs]},$$scope:{ctx:o}}}),r=new U({props:{$$slots:{default:[is]},$$scope:{ctx:o}}}),u=new U({props:{slideId:"group-rebalancing-slide",$$slots:{default:[ms]},$$scope:{ctx:o}}}),b=new U({props:{$$slots:{default:[bs]},$$scope:{ctx:o}}}),d=new U({props:{$$slots:{default:[hs]},$$scope:{ctx:o}}}),x=new U({props:{$$slots:{default:[Rs]},$$scope:{ctx:o}}}),{c(){O(t.$$.fragment),l=h(),O(n.$$.fragment),e=h(),O(s.$$.fragment),$=h(),O(a.$$.fragment),f=h(),O(r.$$.fragment),m=h(),O(u.$$.fragment),_=h(),O(b.$$.fragment),p=h(),O(d.$$.fragment),M=h(),O(x.$$.fragment)},l(V){A(t.$$.fragment,V),l=C(V),A(n.$$.fragment,V),e=C(V),A(s.$$.fragment,V),$=C(V),A(a.$$.fragment,V),f=C(V),A(r.$$.fragment,V),m=C(V),A(u.$$.fragment,V),_=C(V),A(b.$$.fragment,V),p=C(V),A(d.$$.fragment,V),M=C(V),A(x.$$.fragment,V)},m(V,P){D(t,V,P),c(V,l,P),D(n,V,P),c(V,e,P),D(s,V,P),c(V,$,P),D(a,V,P),c(V,f,P),D(r,V,P),c(V,m,P),D(u,V,P),c(V,_,P),D(b,V,P),c(V,p,P),D(d,V,P),c(V,M,P),D(x,V,P),E=!0},p(V,P){const j={};P&16&&(j.$$scope={dirty:P,ctx:V}),t.$set(j);const W={};P&16&&(W.$$scope={dirty:P,ctx:V}),n.$set(W);const N={};P&16&&(N.$$scope={dirty:P,ctx:V}),s.$set(N);const X={};P&16&&(X.$$scope={dirty:P,ctx:V}),a.$set(X);const Y={};P&16&&(Y.$$scope={dirty:P,ctx:V}),r.$set(Y);const tt={};P&16&&(tt.$$scope={dirty:P,ctx:V}),u.$set(tt);const Z={};P&16&&(Z.$$scope={dirty:P,ctx:V}),b.$set(Z);const ft={};P&16&&(ft.$$scope={dirty:P,ctx:V}),d.$set(ft);const y={};P&16&&(y.$$scope={dirty:P,ctx:V}),x.$set(y)},i(V){E||(R(t.$$.fragment,V),R(n.$$.fragment,V),R(s.$$.fragment,V),R(a.$$.fragment,V),R(r.$$.fragment,V),R(u.$$.fragment,V),R(b.$$.fragment,V),R(d.$$.fragment,V),R(x.$$.fragment,V),E=!0)},o(V){S(t.$$.fragment,V),S(n.$$.fragment,V),S(s.$$.fragment,V),S(a.$$.fragment,V),S(r.$$.fragment,V),S(u.$$.fragment,V),S(b.$$.fragment,V),S(d.$$.fragment,V),S(x.$$.fragment,V),E=!1},d(V){V&&(i(l),i(e),i($),i(f),i(m),i(_),i(p),i(M)),K(t,V),K(n,V),K(s,V),K(a,V),K(r,V),K(u,V),K(b,V),K(d,V),K(x,V)}}}function Os(o){let t;return{c(){t=I(`В этом большом блоке я хочу поделиться некоторыми рецептами как решать основные по моему
			мнению проблемы, вызванными использованием промежуточного звена в виде брокера сообщений. Я
			буду опираться на примеры с Apache Kafka, но в целом решения эти самодостаточные и могут быть
			использованы вместе с другими брокерами.`)},l(l){t=B(l,`В этом большом блоке я хочу поделиться некоторыми рецептами как решать основные по моему
			мнению проблемы, вызванными использованием промежуточного звена в виде брокера сообщений. Я
			буду опираться на примеры с Apache Kafka, но в целом решения эти самодостаточные и могут быть
			использованы вместе с другими брокерами.`)},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function As(o){let t,l="Продвинутые паттерны",n,e,s;return e=new G({props:{$$slots:{default:[Os]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),O(e.$$.fragment),this.h()},l($){t=v($,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-c0z00a"&&(t.textContent=l),n=C($),A(e.$$.fragment,$),this.h()},h(){k(t,"class","text-8xl")},m($,a){c($,t,a),c($,n,a),D(e,$,a),s=!0},p($,a){const f={};a&16&&(f.$$scope={dirty:a,ctx:$}),e.$set(f)},i($){s||(R(e.$$.fragment,$),s=!0)},o($){S(e.$$.fragment,$),s=!1},d($){$&&(i(t),i(n)),K(e,$)}}}function Ds(o){let t,l,n,e,s,$,a;return{c(){t=I(`В общем Apache Kafka предоставляет достаточно слабые гарантии доставки и более того никак не
				гарантирует что сообщение в итоге будет кем-то обработано. Это всё в совокупности
				складывается из её дизайна и целей которым этот дизайн соответствует - скорость,
				масштабирование и надежность хранения данных.
				`),l=g("br"),n=g("br"),e=I(`
				Когда вы работаете над распределённым приложением, особенно высоконагруженным, то вы часто встречаете
				различные аномалии. Они могут быть вызваны нестабильной сетью, падением серверов, в конце-концов
				в вашем приложении может быть бага.
				`),s=g("br"),$=g("br"),a=I(`
				Одной из таких аномалий является дублирование, в нашем случае получение одного и того же сообщения
				несколько раз.`)},l(f){t=B(f,`В общем Apache Kafka предоставляет достаточно слабые гарантии доставки и более того никак не
				гарантирует что сообщение в итоге будет кем-то обработано. Это всё в совокупности
				складывается из её дизайна и целей которым этот дизайн соответствует - скорость,
				масштабирование и надежность хранения данных.
				`),l=v(f,"BR",{}),n=v(f,"BR",{}),e=B(f,`
				Когда вы работаете над распределённым приложением, особенно высоконагруженным, то вы часто встречаете
				различные аномалии. Они могут быть вызваны нестабильной сетью, падением серверов, в конце-концов
				в вашем приложении может быть бага.
				`),s=v(f,"BR",{}),$=v(f,"BR",{}),a=B(f,`
				Одной из таких аномалий является дублирование, в нашем случае получение одного и того же сообщения
				несколько раз.`)},m(f,r){c(f,t,r),c(f,l,r),c(f,n,r),c(f,e,r),c(f,s,r),c(f,$,r),c(f,a,r)},p:q,d(f){f&&(i(t),i(l),i(n),i(e),i(s),i($),i(a))}}}function Ks(o){let t,l="Дедупликация сообщений",n,e,s;return e=new G({props:{$$slots:{default:[Ds]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),O(e.$$.fragment),this.h()},l($){t=v($,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-1x4ooos"&&(t.textContent=l),n=C($),A(e.$$.fragment,$),this.h()},h(){k(t,"class","text-8xl")},m($,a){c($,t,a),c($,n,a),D(e,$,a),s=!0},p($,a){const f={};a&16&&(f.$$scope={dirty:a,ctx:$}),e.$set(f)},i($){s||(R(e.$$.fragment,$),s=!0)},o($){S(e.$$.fragment,$),s=!1},d($){$&&(i(t),i(n)),K(e,$)}}}function Vs(o){let t;return{c(){t=I('Из коробки только "At least once" доставка')},l(l){t=B(l,'Из коробки только "At least once" доставка')},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function Es(o){let t;return{c(){t=I("Встроенный идемпотентный отправитель отсеивает только повторы самого клиента")},l(l){t=B(l,"Встроенный идемпотентный отправитель отсеивает только повторы самого клиента")},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function Ms(o){let t;return{c(){t=I('"Exactly once" с помощью транзакций')},l(l){t=B(l,'"Exactly once" с помощью транзакций')},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function Ls(o){let t,l,n,e,s,$,a;return{c(){t=I(`(1) Упрощая, можно сказать, что популярные клиенты Kafka пытаются гарантировать at least
				once доставку сообщения, так как при возникновении сетевых ошибок пытаются повторить запрос.
				Средствами самой Apache Kafka улучшить ситуацию можно двумя способами.
				`),l=g("br"),n=g("br"),e=I(`
				(2) Самый простой вариант - это перевести продьюсера в режим идемпотентной отправки, когда повторы
				самого клиента Apache Kafka будут дедуплицироваться на стороне брокера. Но это вносит небольшие
				дополнительные издержки, да и полноценной защиты от дубликатов всё же нет. Так например при перезагрузке
				всего приложения вы всё так же можете повторно отправить сообщения, которые брокер уже не распознает
				как дубликаты.
				`),s=g("br"),$=g("br"),a=I(`
				(3) Так же есть поддержка Exactly once семантики при использовании транзакции на отправку. Но
				это вносит ещё больше издержек в процессинг, так как появляется менеджер транзакции на стороне
				самой Apache Kafka.`)},l(f){t=B(f,`(1) Упрощая, можно сказать, что популярные клиенты Kafka пытаются гарантировать at least
				once доставку сообщения, так как при возникновении сетевых ошибок пытаются повторить запрос.
				Средствами самой Apache Kafka улучшить ситуацию можно двумя способами.
				`),l=v(f,"BR",{}),n=v(f,"BR",{}),e=B(f,`
				(2) Самый простой вариант - это перевести продьюсера в режим идемпотентной отправки, когда повторы
				самого клиента Apache Kafka будут дедуплицироваться на стороне брокера. Но это вносит небольшие
				дополнительные издержки, да и полноценной защиты от дубликатов всё же нет. Так например при перезагрузке
				всего приложения вы всё так же можете повторно отправить сообщения, которые брокер уже не распознает
				как дубликаты.
				`),s=v(f,"BR",{}),$=v(f,"BR",{}),a=B(f,`
				(3) Так же есть поддержка Exactly once семантики при использовании транзакции на отправку. Но
				это вносит ещё больше издержек в процессинг, так как появляется менеджер транзакции на стороне
				самой Apache Kafka.`)},m(f,r){c(f,t,r),c(f,l,r),c(f,n,r),c(f,e,r),c(f,s,r),c(f,$,r),c(f,a,r)},p:q,d(f){f&&(i(t),i(l),i(n),i(e),i(s),i($),i(a))}}}function Ts(o){let t,l="Что предлагает сам брокер",n,e,s,$,a,f,r,m,u,_;return s=new F({props:{$$slots:{default:[Vs]},$$scope:{ctx:o}}}),a=new F({props:{$$slots:{default:[Es]},$$scope:{ctx:o}}}),r=new F({props:{$$slots:{default:[Ms]},$$scope:{ctx:o}}}),u=new G({props:{$$slots:{default:[Ls]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("ul"),O(s.$$.fragment),$=h(),O(a.$$.fragment),f=h(),O(r.$$.fragment),m=h(),O(u.$$.fragment),this.h()},l(b){t=v(b,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-1lgr2zm"&&(t.textContent=l),n=C(b),e=v(b,"UL",{class:!0});var p=z(e);A(s.$$.fragment,p),$=C(p),A(a.$$.fragment,p),f=C(p),A(r.$$.fragment,p),p.forEach(i),m=C(b),A(u.$$.fragment,b),this.h()},h(){k(t,"class","text-8xl"),k(e,"class","!mt-10 block space-y-4")},m(b,p){c(b,t,p),c(b,n,p),c(b,e,p),D(s,e,null),L(e,$),D(a,e,null),L(e,f),D(r,e,null),c(b,m,p),D(u,b,p),_=!0},p(b,p){const d={};p&16&&(d.$$scope={dirty:p,ctx:b}),s.$set(d);const M={};p&16&&(M.$$scope={dirty:p,ctx:b}),a.$set(M);const x={};p&16&&(x.$$scope={dirty:p,ctx:b}),r.$set(x);const E={};p&16&&(E.$$scope={dirty:p,ctx:b}),u.$set(E)},i(b){_||(R(s.$$.fragment,b),R(a.$$.fragment,b),R(r.$$.fragment,b),R(u.$$.fragment,b),_=!0)},o(b){S(s.$$.fragment,b),S(a.$$.fragment,b),S(r.$$.fragment,b),S(u.$$.fragment,b),_=!1},d(b){b&&(i(t),i(n),i(e),i(m)),K(s),K(a),K(r),K(u,b)}}}function Ps(o){let t,l,n,e,s,$,a;return{c(){t=I(`Мы у себя в команде пробовали включать этот режим и даже экспериментировали с транзакциями,
				но остались недовольны увеличившейся летенси и в целом отсутствия полноценного решения
				проблемы.
				`),l=g("br"),n=g("br"),e=I(`
				Поэтому решили задачу более надежным рабоче-крестьянским способом - создали уникальный и консистентный
				ключ идемпотентности. Он по сути уникально идентифицировал контент нашего сообщения, а проверка
				такого ключа происходила на уровне базы, так как по факту нам в любом случае требовалось сохранять
				данные.
				`),s=g("br"),$=g("br"),a=I(`
				Сразу хочу заметить, что идемпотентные операции это задача посложнее, чем идемпотентная отправка
				сообщения, но в нашем случае они были эквивалентны.`)},l(f){t=B(f,`Мы у себя в команде пробовали включать этот режим и даже экспериментировали с транзакциями,
				но остались недовольны увеличившейся летенси и в целом отсутствия полноценного решения
				проблемы.
				`),l=v(f,"BR",{}),n=v(f,"BR",{}),e=B(f,`
				Поэтому решили задачу более надежным рабоче-крестьянским способом - создали уникальный и консистентный
				ключ идемпотентности. Он по сути уникально идентифицировал контент нашего сообщения, а проверка
				такого ключа происходила на уровне базы, так как по факту нам в любом случае требовалось сохранять
				данные.
				`),s=v(f,"BR",{}),$=v(f,"BR",{}),a=B(f,`
				Сразу хочу заметить, что идемпотентные операции это задача посложнее, чем идемпотентная отправка
				сообщения, но в нашем случае они были эквивалентны.`)},m(f,r){c(f,t,r),c(f,l,r),c(f,n,r),c(f,e,r),c(f,s,r),c(f,$,r),c(f,a,r)},p:q,d(f){f&&(i(t),i(l),i(n),i(e),i(s),i($),i(a))}}}function Hs(o){let t,l="Идемпотентный потребитель",n,e,s,$,a,f;return s=new ee({props:{code:`
						flowchart LR
							Start["Новое сообщение"] --> Check{"Проверяем Message Id"}
							Check -->|Уже был такой| Discard[Прекращаем обработку]
							Check -->|Такого нет| Process[Обрабатываем сообщение]
					`}}),a=new G({props:{$$slots:{default:[Ps]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("div"),O(s.$$.fragment),$=h(),O(a.$$.fragment),this.h()},l(r){t=v(r,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-13f1a7r"&&(t.textContent=l),n=C(r),e=v(r,"DIV",{class:!0});var m=z(e);A(s.$$.fragment,m),m.forEach(i),$=C(r),A(a.$$.fragment,r),this.h()},h(){k(t,"class","text-4xl"),k(e,"class","al mx-auto mt-10 flex flex-col")},m(r,m){c(r,t,m),c(r,n,m),c(r,e,m),D(s,e,null),c(r,$,m),D(a,r,m),f=!0},p(r,m){const u={};m&16&&(u.$$scope={dirty:m,ctx:r}),a.$set(u)},i(r){f||(R(s.$$.fragment,r),R(a.$$.fragment,r),f=!0)},o(r){S(s.$$.fragment,r),S(a.$$.fragment,r),f=!1},d(r){r&&(i(t),i(n),i(e),i($)),K(s),K(a,r)}}}function Us(o){let t,l,n,e,s,$;return t=new U({props:{$$slots:{default:[Ks]},$$scope:{ctx:o}}}),n=new U({props:{$$slots:{default:[Ts]},$$scope:{ctx:o}}}),s=new U({props:{$$slots:{default:[Hs]},$$scope:{ctx:o}}}),{c(){O(t.$$.fragment),l=h(),O(n.$$.fragment),e=h(),O(s.$$.fragment)},l(a){A(t.$$.fragment,a),l=C(a),A(n.$$.fragment,a),e=C(a),A(s.$$.fragment,a)},m(a,f){D(t,a,f),c(a,l,f),D(n,a,f),c(a,e,f),D(s,a,f),$=!0},p(a,f){const r={};f&16&&(r.$$scope={dirty:f,ctx:a}),t.$set(r);const m={};f&16&&(m.$$scope={dirty:f,ctx:a}),n.$set(m);const u={};f&16&&(u.$$scope={dirty:f,ctx:a}),s.$set(u)},i(a){$||(R(t.$$.fragment,a),R(n.$$.fragment,a),R(s.$$.fragment,a),$=!0)},o(a){S(t.$$.fragment,a),S(n.$$.fragment,a),S(s.$$.fragment,a),$=!1},d(a){a&&(i(l),i(e)),K(t,a),K(n,a),K(s,a)}}}function js(o){let t,l,n,e;return{c(){t=I(`Другая аномалия заключается в том факте, что в более-менее реальных условиях сложно
				удостовериться в том, что сообщение было доставлено. Когда вы отправляете сообщение в Apache
				Kafka, вы зачастую явно указываете на скольких брокерах оно должно будет сохраниться. Так вы
				себя защищаете от ситуации, когда одна единственная копия с новым сообщением вдруг погорела
				вместе с хранившим её брокером.
				`),l=g("br"),n=g("br"),e=I(`
				Но в реальности ещё до отправки может быть много других операций, которые так же могут приводить
				к ошибке. И вот эта ошибка может стоить вам потерянного сообщения.`)},l(s){t=B(s,`Другая аномалия заключается в том факте, что в более-менее реальных условиях сложно
				удостовериться в том, что сообщение было доставлено. Когда вы отправляете сообщение в Apache
				Kafka, вы зачастую явно указываете на скольких брокерах оно должно будет сохраниться. Так вы
				себя защищаете от ситуации, когда одна единственная копия с новым сообщением вдруг погорела
				вместе с хранившим её брокером.
				`),l=v(s,"BR",{}),n=v(s,"BR",{}),e=B(s,`
				Но в реальности ещё до отправки может быть много других операций, которые так же могут приводить
				к ошибке. И вот эта ошибка может стоить вам потерянного сообщения.`)},m(s,$){c(s,t,$),c(s,l,$),c(s,n,$),c(s,e,$)},p:q,d(s){s&&(i(t),i(l),i(n),i(e))}}}function zs(o){let t,l="Гарантированная доставка",n,e,s;return e=new G({props:{$$slots:{default:[js]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),O(e.$$.fragment),this.h()},l($){t=v($,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-c69fex"&&(t.textContent=l),n=C($),A(e.$$.fragment,$),this.h()},h(){k(t,"class","text-8xl")},m($,a){c($,t,a),c($,n,a),D(e,$,a),s=!0},p($,a){const f={};a&16&&(f.$$scope={dirty:a,ctx:$}),e.$set(f)},i($){s||(R(e.$$.fragment,$),s=!0)},o($){S(e.$$.fragment,$),s=!1},d($){$&&(i(t),i(n)),K(e,$)}}}function Gs(o){let t,l,n;return{c(){t=I(`Возьмём упрощённый пример: сервис заказов получает запрос от пользователя, сохраняет запись
				в свою базу, отправляет сообщение в топик для сервиса доставки и сообщает пользователю, что
				заказ был создан.
				`),l=g("br"),n=I(`
				Потом сервис заказов так же асинхронно получает сообщение от сервиса доставки, что товар был
				отправлен. Например, получив данные об отправке, мы обновляем статус заказа в той же базе.`)},l(e){t=B(e,`Возьмём упрощённый пример: сервис заказов получает запрос от пользователя, сохраняет запись
				в свою базу, отправляет сообщение в топик для сервиса доставки и сообщает пользователю, что
				заказ был создан.
				`),l=v(e,"BR",{}),n=B(e,`
				Потом сервис заказов так же асинхронно получает сообщение от сервиса доставки, что товар был
				отправлен. Например, получив данные об отправке, мы обновляем статус заказа в той же базе.`)},m(e,s){c(e,t,s),c(e,l,s),c(e,n,s)},p:q,d(e){e&&(i(t),i(l),i(n))}}}function qs(o){let t,l=`
					%%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
					sequenceDiagram
						actor User as Грегор Замса
						participant OrdersService as Orders Service
						participant OrdersDB as Orders Database
						participant ShippingService as Shipping Service

						User->>OrdersService: Создать заказ
						
						activate OrdersService
						
						OrdersService->>OrdersDB: Создать запись о заказе
						
						activate OrdersDB

						alt Заказ уже создан

						OrdersDB-->>OrdersService: Заказ не сохранён из-за конфликта

						OrdersService-->>User: Ошибка: Заказ уже существует

						else Заказа в базе нет
						
						OrdersDB-->>OrdersService: Заказ сохранён
						deactivate OrdersDB

						OrdersService->>ShippingService: Отправить заказ (async)

						OrdersService-->>User: Заказ создан
						deactivate OrdersService

						end

						activate ShippingService
						ShippingService-->>OrdersService: Заказ отправлен
						deactivate ShippingService

						activate OrdersService

						OrdersService->>OrdersDB: Обновить запись заказа

						activate OrdersDB
						OrdersDB-->>OrdersService: Заказ обновлён
						deactivate OrdersDB

						deactivate OrdersService
				`,n,e,s,$;return s=new G({props:{$$slots:{default:[Gs]},$$scope:{ctx:o}}}),{c(){t=g("div"),n=I(l),e=h(),O(s.$$.fragment),this.h()},l(a){t=v(a,"DIV",{class:!0});var f=z(t);n=B(f,l),f.forEach(i),e=C(a),A(s.$$.fragment,a),this.h()},h(){k(t,"class","mermaid")},m(a,f){c(a,t,f),L(t,n),c(a,e,f),D(s,a,f),$=!0},p(a,f){const r={};f&16&&(r.$$scope={dirty:f,ctx:a}),s.$set(r)},i(a){$||(R(s.$$.fragment,a),$=!0)},o(a){S(s.$$.fragment,a),$=!1},d(a){a&&(i(t),i(e)),K(s,a)}}}function Ws(o){let t;return{c(){t=I("Сохранение в БД завершилось с ошибкой")},l(l){t=B(l,"Сохранение в БД завершилось с ошибкой")},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function Fs(o){let t;return{c(){t=I("Данные были сохранены, но отправка завершилась с ошибкой")},l(l){t=B(l,"Данные были сохранены, но отправка завершилась с ошибкой")},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function Ns(o){let t;return{c(){t=I("Сообщение было отправлено, но до пользователя ответ не дошёл")},l(l){t=B(l,"Сообщение было отправлено, но до пользователя ответ не дошёл")},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function Xs(o){let t,l,n="<li>(1) Сохранение завершилось с ошибкой</li> <li>(2) Данные были сохранены, но сообщение не было отправлено</li> <li>(3) Сообщение было отправлено, но до пользователя ответ не дошёл</li>",e,s,$,a,f,r,m,u,_,b;return{c(){t=I(`На этом пути возникает сразу 3 возможные плохие ситуации:
				`),l=g("ul"),l.innerHTML=n,e=I(`
				Все 3 случая могут привести к тому, что запрос на создание заказа будет отправлен заново. Но
				в случае повтора, мы можем не запросить отправку товара. Например в случае повторного запроса
				сервис снова будет проводить запись в БД, но запрос завершится с конфликтом так как такие данные
				уже есть.
				`),s=g("br"),$=g("br"),a=I(`
				И вот тут всё зависит от нашего решения, будем ли мы пытаться повторно отправить сообщение или
				нет. Мы могли бы вообще транзакционно создавать заказ и откатывать создание в случае ошибки,
				но вдруг сообщение на самом деле было отправлено в топик, просто из-за сетевой ошибки ответ до
				нас не дошёл? Ведь после этого мы получим ответ от сервиса доставки, но нигде в базе это не отразим.
				`),f=g("br"),r=g("br"),m=I(`
				А может нам в случае ошибки давать повторно пересоздать заказ, но тогда мы можем случайно перетереть
				важные данные и оставить запись в неконсистентном состоянии.
				`),u=g("br"),_=g("br"),b=I(`
				В общем голова пухнет. Но можем ли мы связать запись в базе с гарантированной доставкой?`)},l(p){t=B(p,`На этом пути возникает сразу 3 возможные плохие ситуации:
				`),l=v(p,"UL",{"data-svelte-h":!0}),H(l)!=="svelte-1taww8w"&&(l.innerHTML=n),e=B(p,`
				Все 3 случая могут привести к тому, что запрос на создание заказа будет отправлен заново. Но
				в случае повтора, мы можем не запросить отправку товара. Например в случае повторного запроса
				сервис снова будет проводить запись в БД, но запрос завершится с конфликтом так как такие данные
				уже есть.
				`),s=v(p,"BR",{}),$=v(p,"BR",{}),a=B(p,`
				И вот тут всё зависит от нашего решения, будем ли мы пытаться повторно отправить сообщение или
				нет. Мы могли бы вообще транзакционно создавать заказ и откатывать создание в случае ошибки,
				но вдруг сообщение на самом деле было отправлено в топик, просто из-за сетевой ошибки ответ до
				нас не дошёл? Ведь после этого мы получим ответ от сервиса доставки, но нигде в базе это не отразим.
				`),f=v(p,"BR",{}),r=v(p,"BR",{}),m=B(p,`
				А может нам в случае ошибки давать повторно пересоздать заказ, но тогда мы можем случайно перетереть
				важные данные и оставить запись в неконсистентном состоянии.
				`),u=v(p,"BR",{}),_=v(p,"BR",{}),b=B(p,`
				В общем голова пухнет. Но можем ли мы связать запись в базе с гарантированной доставкой?`)},m(p,d){c(p,t,d),c(p,l,d),c(p,e,d),c(p,s,d),c(p,$,d),c(p,a,d),c(p,f,d),c(p,r,d),c(p,m,d),c(p,u,d),c(p,_,d),c(p,b,d)},p:q,d(p){p&&(i(t),i(l),i(e),i(s),i($),i(a),i(f),i(r),i(m),i(u),i(_),i(b))}}}function Js(o){let t,l,n,e,s,$,a="Три плохих сценария:",f,r,m,u,_,b,p,d,M,x;return m=new F({props:{$$slots:{default:[Ws]},$$scope:{ctx:o}}}),_=new F({props:{$$slots:{default:[Fs]},$$scope:{ctx:o}}}),p=new F({props:{$$slots:{default:[Ns]},$$scope:{ctx:o}}}),M=new G({props:{$$slots:{default:[Xs]},$$scope:{ctx:o}}}),{c(){t=g("div"),l=g("img"),e=h(),s=g("div"),$=g("div"),$.textContent=a,f=h(),r=g("ul"),O(m.$$.fragment),u=h(),O(_.$$.fragment),b=h(),O(p.$$.fragment),d=h(),O(M.$$.fragment),this.h()},l(E){t=v(E,"DIV",{class:!0});var V=z(t);l=v(V,"IMG",{class:!0,src:!0,alt:!0}),e=C(V),s=v(V,"DIV",{class:!0});var P=z(s);$=v(P,"DIV",{class:!0,"data-svelte-h":!0}),H($)!=="svelte-1a6h33y"&&($.textContent=a),f=C(P),r=v(P,"UL",{class:!0});var j=z(r);A(m.$$.fragment,j),u=C(j),A(_.$$.fragment,j),b=C(j),A(p.$$.fragment,j),j.forEach(i),P.forEach(i),V.forEach(i),d=C(E),A(M.$$.fragment,E),this.h()},h(){k(l,"class","!mt-0 w-[70%]"),J(l.src,n=o[0]+"/delivery-failure-errors.png")||k(l,"src",n),k(l,"alt","3 points of failure in delivery use-case"),k($,"class","text-left text-2xl"),k(r,"class","!mt-10 space-y-4"),k(s,"class","flex flex-col"),k(t,"class","flex flex-row justify-start gap-10")},m(E,V){c(E,t,V),L(t,l),L(t,e),L(t,s),L(s,$),L(s,f),L(s,r),D(m,r,null),L(r,u),D(_,r,null),L(r,b),D(p,r,null),c(E,d,V),D(M,E,V),x=!0},p(E,V){const P={};V&16&&(P.$$scope={dirty:V,ctx:E}),m.$set(P);const j={};V&16&&(j.$$scope={dirty:V,ctx:E}),_.$set(j);const W={};V&16&&(W.$$scope={dirty:V,ctx:E}),p.$set(W);const N={};V&16&&(N.$$scope={dirty:V,ctx:E}),M.$set(N)},i(E){x||(R(m.$$.fragment,E),R(_.$$.fragment,E),R(p.$$.fragment,E),R(M.$$.fragment,E),x=!0)},o(E){S(m.$$.fragment,E),S(_.$$.fragment,E),S(p.$$.fragment,E),S(M.$$.fragment,E),x=!1},d(E){E&&(i(t),i(d)),K(m),K(_),K(p),K(M,E)}}}function Qs(o){let t,l,n,e,s,$,a,f,r,m;return{c(){t=I(`Решение которое предлагает сама Apache Kafka - это создание транзакции на отправку.
				`),l=g("br"),n=g("br"),e=I(`
				(1) Её можно объединить с транзакцией в БД и в случае поломки одной из них - они все откатятся.
				`),s=g("br"),$=g("br"),a=I(`
				(2) Один из недостатков такого подхода в том, что он может значительно замедлить обработку.
				`),f=g("br"),r=g("br"),m=I(`
				(3) Второй - мы всё равно полностью не защитимся от потери сообщения если полностью положимся
				на транзакции. Даже не смотря на то, что ваши коллеги-разработчики увидят связанные транзакции,
				по факту комитятся они по отдельности и если что-то произойдёт между этими двумя комитами - мы
				вернёмся к той же самой проблеме.`)},l(u){t=B(u,`Решение которое предлагает сама Apache Kafka - это создание транзакции на отправку.
				`),l=v(u,"BR",{}),n=v(u,"BR",{}),e=B(u,`
				(1) Её можно объединить с транзакцией в БД и в случае поломки одной из них - они все откатятся.
				`),s=v(u,"BR",{}),$=v(u,"BR",{}),a=B(u,`
				(2) Один из недостатков такого подхода в том, что он может значительно замедлить обработку.
				`),f=v(u,"BR",{}),r=v(u,"BR",{}),m=B(u,`
				(3) Второй - мы всё равно полностью не защитимся от потери сообщения если полностью положимся
				на транзакции. Даже не смотря на то, что ваши коллеги-разработчики увидят связанные транзакции,
				по факту комитятся они по отдельности и если что-то произойдёт между этими двумя комитами - мы
				вернёмся к той же самой проблеме.`)},m(u,_){c(u,t,_),c(u,l,_),c(u,n,_),c(u,e,_),c(u,s,_),c(u,$,_),c(u,a,_),c(u,f,_),c(u,r,_),c(u,m,_)},p:q,d(u){u&&(i(t),i(l),i(n),i(e),i(s),i($),i(a),i(f),i(r),i(m))}}}function Ys(o){let t,l="Транзакции на отправку в топик",n,e,s='<div class="w-1/3 text-green-400"><ul class="!mt-10 space-y-4"><li class="fragment">Можно объединить с транзакцией в БД</li></ul></div> <div class="w-1/3 text-red-500"><ul class="!ml-20 !mt-10 space-y-4"><li class="fragment">Дополнительные издержки</li> <li class="fragment">Всё ещё есть шанс потерять сообщение</li></ul></div>',$,a,f;return a=new G({props:{$$slots:{default:[Qs]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("div"),e.innerHTML=s,$=h(),O(a.$$.fragment),this.h()},l(r){t=v(r,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-18xg9zj"&&(t.textContent=l),n=C(r),e=v(r,"DIV",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-sr8xrb"&&(e.innerHTML=s),$=C(r),A(a.$$.fragment,r),this.h()},h(){k(t,"class","text-8xl"),k(e,"class","mx-auto flex flex-row items-start justify-center text-2xl")},m(r,m){c(r,t,m),c(r,n,m),c(r,e,m),c(r,$,m),D(a,r,m),f=!0},p(r,m){const u={};m&16&&(u.$$scope={dirty:m,ctx:r}),a.$set(u)},i(r){f||(R(a.$$.fragment,r),f=!0)},o(r){S(a.$$.fragment,r),f=!1},d(r){r&&(i(t),i(n),i(e),i($)),K(a,r)}}}function Zs(o){let t;return{c(){t=I(`Конечно этот способ в целом проще и удобнее с точки зрения дизайна, но есть и другой вариант
				- применить так называемый паттерн Outbox (или Transactional Outbox).`)},l(l){t=B(l,`Конечно этот способ в целом проще и удобнее с точки зрения дизайна, но есть и другой вариант
				- применить так называемый паттерн Outbox (или Transactional Outbox).`)},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function ys(o){let t,l="Transactional Outbox",n,e,s;return e=new G({props:{$$slots:{default:[Zs]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),O(e.$$.fragment),this.h()},l($){t=v($,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-12d2zk3"&&(t.textContent=l),n=C($),A(e.$$.fragment,$),this.h()},h(){k(t,"class","text-8xl")},m($,a){c($,t,a),c($,n,a),D(e,$,a),s=!0},p($,a){const f={};a&16&&(f.$$scope={dirty:a,ctx:$}),e.$set(f)},i($){s||(R(e.$$.fragment,$),s=!0)},o($){S(e.$$.fragment,$),s=!1},d($){$&&(i(t),i(n)),K(e,$)}}}function tl(o){let t,l,n,e,s,$,a;return{c(){t=I(`Его суть достаточно проста - вместо того чтобы одновременно сохранять данные и отправлять
				сообщение в топик, мы при обработке входящего запроса только сохраняем в базу. Оригинальная
				идея предлагает делать запись в два места - в саму таблицу с данными и в специальную таблицу
				Outbox, в которой будут храниться сообщения для отправки в Kafka.
				`),l=g("br"),n=g("br"),e=I(`
				Если вы используете для этих целей одну и ту же базу с поддержкой транзакций, то и обе записи
				будут надёжно обёрнуты одной транзакцией. В то же время отдельный фоновый обработчик отслеживает
				изменения в таблице Outbox и делает попытки отправить сообщения в топик.
				`),s=g("br"),$=g("br"),a=I(`
				Если отправка удалась, то он удаляет из Outbox соответствующие записи. Тут вы можете так же открыть
				транзакцию на удаление записей, чтобы в случае неудачной отправки у него была возможность попробовать
				снова.`)},l(f){t=B(f,`Его суть достаточно проста - вместо того чтобы одновременно сохранять данные и отправлять
				сообщение в топик, мы при обработке входящего запроса только сохраняем в базу. Оригинальная
				идея предлагает делать запись в два места - в саму таблицу с данными и в специальную таблицу
				Outbox, в которой будут храниться сообщения для отправки в Kafka.
				`),l=v(f,"BR",{}),n=v(f,"BR",{}),e=B(f,`
				Если вы используете для этих целей одну и ту же базу с поддержкой транзакций, то и обе записи
				будут надёжно обёрнуты одной транзакцией. В то же время отдельный фоновый обработчик отслеживает
				изменения в таблице Outbox и делает попытки отправить сообщения в топик.
				`),s=v(f,"BR",{}),$=v(f,"BR",{}),a=B(f,`
				Если отправка удалась, то он удаляет из Outbox соответствующие записи. Тут вы можете так же открыть
				транзакцию на удаление записей, чтобы в случае неудачной отправки у него была возможность попробовать
				снова.`)},m(f,r){c(f,t,r),c(f,l,r),c(f,n,r),c(f,e,r),c(f,s,r),c(f,$,r),c(f,a,r)},p:q,d(f){f&&(i(t),i(l),i(n),i(e),i(s),i($),i(a))}}}function el(o){let t,l,n,e,s;return e=new G({props:{$$slots:{default:[tl]},$$scope:{ctx:o}}}),{c(){t=g("img"),n=h(),O(e.$$.fragment),this.h()},l($){t=v($,"IMG",{src:!0,alt:!0}),n=C($),A(e.$$.fragment,$),this.h()},h(){J(t.src,l=o[0]+"/outbox-pattern-example.png")||k(t,"src",l),k(t,"alt","3 points of failure in delivery use-case")},m($,a){c($,t,a),c($,n,a),D(e,$,a),s=!0},p($,a){const f={};a&16&&(f.$$scope={dirty:a,ctx:$}),e.$set(f)},i($){s||(R(e.$$.fragment,$),s=!0)},o($){S(e.$$.fragment,$),s=!1},d($){$&&(i(t),i(n)),K(e,$)}}}function sl(o){let t;return{c(){t=I('"Стриминг" изменений из таблицы с данными')},l(l){t=B(l,'"Стриминг" изменений из таблицы с данными')},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function ll(o){let t;return{c(){t=I("Помечать сообщения отправленными, слушая топик в который сам пишешь")},l(l){t=B(l,"Помечать сообщения отправленными, слушая топик в который сам пишешь")},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function nl(o){let t,l,n,e,s,$,a;return{c(){t=I(`С этим подходом можно поэкспериментировать.
				`),l=g("br"),n=g("br"),e=I(`
				(1) Например у многих баз данный есть возможность стримить изменения в определённой таблице.
				Если например слушать оповещения о создании новых записей в таблице с данными, вы можете обойтись
				без дополнительной таблицы Outbox. Правда хочу заметить что такой подход не во всех случаях может
				сработать, так как у истории изменений в таблице так же есть своё время жизни.
				`),s=g("br"),$=g("br"),a=I(`
				(2) Так же вы можете обойтись и без транзакций на пометку отправленных данных. Например, если
				сервис отправляющий сообщение в топик будет его же и слушать. А каждое прочитанное сообщение
				уже будет приводить к удалению данных из Outbox, так как вы уже точно знаете, что сообщение было
				отправлено.`)},l(f){t=B(f,`С этим подходом можно поэкспериментировать.
				`),l=v(f,"BR",{}),n=v(f,"BR",{}),e=B(f,`
				(1) Например у многих баз данный есть возможность стримить изменения в определённой таблице.
				Если например слушать оповещения о создании новых записей в таблице с данными, вы можете обойтись
				без дополнительной таблицы Outbox. Правда хочу заметить что такой подход не во всех случаях может
				сработать, так как у истории изменений в таблице так же есть своё время жизни.
				`),s=v(f,"BR",{}),$=v(f,"BR",{}),a=B(f,`
				(2) Так же вы можете обойтись и без транзакций на пометку отправленных данных. Например, если
				сервис отправляющий сообщение в топик будет его же и слушать. А каждое прочитанное сообщение
				уже будет приводить к удалению данных из Outbox, так как вы уже точно знаете, что сообщение было
				отправлено.`)},m(f,r){c(f,t,r),c(f,l,r),c(f,n,r),c(f,e,r),c(f,s,r),c(f,$,r),c(f,a,r)},p:q,d(f){f&&(i(t),i(l),i(n),i(e),i(s),i($),i(a))}}}function $l(o){let t,l="Вариативность Outbox",n,e,s,$,a,f,r,m;return s=new F({props:{$$slots:{default:[sl]},$$scope:{ctx:o}}}),a=new F({props:{$$slots:{default:[ll]},$$scope:{ctx:o}}}),r=new G({props:{$$slots:{default:[nl]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("ul"),O(s.$$.fragment),$=h(),O(a.$$.fragment),f=h(),O(r.$$.fragment),this.h()},l(u){t=v(u,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-3sewmu"&&(t.textContent=l),n=C(u),e=v(u,"UL",{class:!0});var _=z(e);A(s.$$.fragment,_),$=C(_),A(a.$$.fragment,_),_.forEach(i),f=C(u),A(r.$$.fragment,u),this.h()},h(){k(t,"class","text-8xl"),k(e,"class","!mt-10 space-y-4")},m(u,_){c(u,t,_),c(u,n,_),c(u,e,_),D(s,e,null),L(e,$),D(a,e,null),c(u,f,_),D(r,u,_),m=!0},p(u,_){const b={};_&16&&(b.$$scope={dirty:_,ctx:u}),s.$set(b);const p={};_&16&&(p.$$scope={dirty:_,ctx:u}),a.$set(p);const d={};_&16&&(d.$$scope={dirty:_,ctx:u}),r.$set(d)},i(u){m||(R(s.$$.fragment,u),R(a.$$.fragment,u),R(r.$$.fragment,u),m=!0)},o(u){S(s.$$.fragment,u),S(a.$$.fragment,u),S(r.$$.fragment,u),m=!1},d(u){u&&(i(t),i(n),i(e),i(f)),K(s),K(a),K(r,u)}}}function fl(o){let t;return{c(){t=I(`И не забывайте, что при таком подходе вы по факту используете вашу базу данных как
				своеобразную очередь. Поэтому задумайтесь о том, сколько места она будет занимать и не
				опрокинете ли вы свою базу данных неотправленными сообщениями.`)},l(l){t=B(l,`И не забывайте, что при таком подходе вы по факту используете вашу базу данных как
				своеобразную очередь. Поэтому задумайтесь о том, сколько места она будет занимать и не
				опрокинете ли вы свою базу данных неотправленными сообщениями.`)},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function rl(o){let t,l="Таблица Outbox - по сути ещё одна очередь",n,e,s;return e=new G({props:{$$slots:{default:[fl]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),O(e.$$.fragment),this.h()},l($){t=v($,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-tj9nh0"&&(t.textContent=l),n=C($),A(e.$$.fragment,$),this.h()},h(){k(t,"class","text-5xl")},m($,a){c($,t,a),c($,n,a),D(e,$,a),s=!0},p($,a){const f={};a&16&&(f.$$scope={dirty:a,ctx:$}),e.$set(f)},i($){s||(R(e.$$.fragment,$),s=!0)},o($){S(e.$$.fragment,$),s=!1},d($){$&&(i(t),i(n)),K(e,$)}}}function al(o){let t,l,n,e,s,$,a,f,r,m,u,_,b,p,d,M;return t=new U({props:{$$slots:{default:[zs]},$$scope:{ctx:o}}}),n=new U({props:{$$slots:{default:[qs]},$$scope:{ctx:o}}}),s=new U({props:{$$slots:{default:[Js]},$$scope:{ctx:o}}}),a=new U({props:{$$slots:{default:[Ys]},$$scope:{ctx:o}}}),r=new U({props:{$$slots:{default:[ys]},$$scope:{ctx:o}}}),u=new U({props:{$$slots:{default:[el]},$$scope:{ctx:o}}}),b=new U({props:{$$slots:{default:[$l]},$$scope:{ctx:o}}}),d=new U({props:{$$slots:{default:[rl]},$$scope:{ctx:o}}}),{c(){O(t.$$.fragment),l=h(),O(n.$$.fragment),e=h(),O(s.$$.fragment),$=h(),O(a.$$.fragment),f=h(),O(r.$$.fragment),m=h(),O(u.$$.fragment),_=h(),O(b.$$.fragment),p=h(),O(d.$$.fragment)},l(x){A(t.$$.fragment,x),l=C(x),A(n.$$.fragment,x),e=C(x),A(s.$$.fragment,x),$=C(x),A(a.$$.fragment,x),f=C(x),A(r.$$.fragment,x),m=C(x),A(u.$$.fragment,x),_=C(x),A(b.$$.fragment,x),p=C(x),A(d.$$.fragment,x)},m(x,E){D(t,x,E),c(x,l,E),D(n,x,E),c(x,e,E),D(s,x,E),c(x,$,E),D(a,x,E),c(x,f,E),D(r,x,E),c(x,m,E),D(u,x,E),c(x,_,E),D(b,x,E),c(x,p,E),D(d,x,E),M=!0},p(x,E){const V={};E&16&&(V.$$scope={dirty:E,ctx:x}),t.$set(V);const P={};E&16&&(P.$$scope={dirty:E,ctx:x}),n.$set(P);const j={};E&16&&(j.$$scope={dirty:E,ctx:x}),s.$set(j);const W={};E&16&&(W.$$scope={dirty:E,ctx:x}),a.$set(W);const N={};E&16&&(N.$$scope={dirty:E,ctx:x}),r.$set(N);const X={};E&16&&(X.$$scope={dirty:E,ctx:x}),u.$set(X);const Y={};E&16&&(Y.$$scope={dirty:E,ctx:x}),b.$set(Y);const tt={};E&16&&(tt.$$scope={dirty:E,ctx:x}),d.$set(tt)},i(x){M||(R(t.$$.fragment,x),R(n.$$.fragment,x),R(s.$$.fragment,x),R(a.$$.fragment,x),R(r.$$.fragment,x),R(u.$$.fragment,x),R(b.$$.fragment,x),R(d.$$.fragment,x),M=!0)},o(x){S(t.$$.fragment,x),S(n.$$.fragment,x),S(s.$$.fragment,x),S(a.$$.fragment,x),S(r.$$.fragment,x),S(u.$$.fragment,x),S(b.$$.fragment,x),S(d.$$.fragment,x),M=!1},d(x){x&&(i(l),i(e),i($),i(f),i(m),i(_),i(p)),K(t,x),K(n,x),K(s,x),K(a,x),K(r,x),K(u,x),K(b,x),K(d,x)}}}function il(o){let t;return{c(){t=I("Синхронные алгоритмы")},l(l){t=B(l,"Синхронные алгоритмы")},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function ul(o){let t;return{c(){t=I("Сложно объединить очень разные сервисы одной транзакцией")},l(l){t=B(l,"Сложно объединить очень разные сервисы одной транзакцией")},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function ml(o){let t,l,n,e,s,$,a;return{c(){t=I(`Ну и раз мы затронули тему транзакций, я не могу не упомянуть про распределённые транзакции.
				`),l=g("br"),n=g("br"),e=I(`
				(1) Реализаций их много и пишут их очень давно, но большинство из них страдает одной болезнью
				- их алгоритмы блокирующие, оттого медленные, а некоторые, например двухфазный коммит, ещё и
				могут оставить систему в навечно повисшем состоянии, если вдруг лидер транзакции упадёт.
				`),s=g("br"),$=g("br"),a=I(`
				(2) Плюс в микросервисной архитектуре транзакции происходят не просто между совместимыми базами
				данных, а между сервисами, а реализовывать что-то вроде протокола eXtended Architecture transactions
				на сервисах с разными технологическими стеками и с разными базами - задача не самая простая.`)},l(f){t=B(f,`Ну и раз мы затронули тему транзакций, я не могу не упомянуть про распределённые транзакции.
				`),l=v(f,"BR",{}),n=v(f,"BR",{}),e=B(f,`
				(1) Реализаций их много и пишут их очень давно, но большинство из них страдает одной болезнью
				- их алгоритмы блокирующие, оттого медленные, а некоторые, например двухфазный коммит, ещё и
				могут оставить систему в навечно повисшем состоянии, если вдруг лидер транзакции упадёт.
				`),s=v(f,"BR",{}),$=v(f,"BR",{}),a=B(f,`
				(2) Плюс в микросервисной архитектуре транзакции происходят не просто между совместимыми базами
				данных, а между сервисами, а реализовывать что-то вроде протокола eXtended Architecture transactions
				на сервисах с разными технологическими стеками и с разными базами - задача не самая простая.`)},m(f,r){c(f,t,r),c(f,l,r),c(f,n,r),c(f,e,r),c(f,s,r),c(f,$,r),c(f,a,r)},p:q,d(f){f&&(i(t),i(l),i(n),i(e),i(s),i($),i(a))}}}function cl(o){let t,l="Распределённые транзакции в микросервисах",n,e,s,$,a,f,r,m;return s=new F({props:{$$slots:{default:[il]},$$scope:{ctx:o}}}),a=new F({props:{$$slots:{default:[ul]},$$scope:{ctx:o}}}),r=new G({props:{$$slots:{default:[ml]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("ul"),O(s.$$.fragment),$=h(),O(a.$$.fragment),f=h(),O(r.$$.fragment),this.h()},l(u){t=v(u,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-1ixfi1n"&&(t.textContent=l),n=C(u),e=v(u,"UL",{class:!0});var _=z(e);A(s.$$.fragment,_),$=C(_),A(a.$$.fragment,_),_.forEach(i),f=C(u),A(r.$$.fragment,u),this.h()},h(){k(t,"class","text-6xl"),k(e,"class","!mt-10 space-y-4")},m(u,_){c(u,t,_),c(u,n,_),c(u,e,_),D(s,e,null),L(e,$),D(a,e,null),c(u,f,_),D(r,u,_),m=!0},p(u,_){const b={};_&16&&(b.$$scope={dirty:_,ctx:u}),s.$set(b);const p={};_&16&&(p.$$scope={dirty:_,ctx:u}),a.$set(p);const d={};_&16&&(d.$$scope={dirty:_,ctx:u}),r.$set(d)},i(u){m||(R(s.$$.fragment,u),R(a.$$.fragment,u),R(r.$$.fragment,u),m=!0)},o(u){S(s.$$.fragment,u),S(a.$$.fragment,u),S(r.$$.fragment,u),m=!1},d(u){u&&(i(t),i(n),i(e),i(f)),K(s),K(a),K(r,u)}}}function pl(o){let t,l,n,e,s,$,a,f,r,m;return{c(){t=I(`Есть другой подход - паттерн Saga. Он очень похож на классические распределённые транзакции,
				но по факту делит одну большую транзакцию на несколько мелких, то есть каждый сервис
				транзакционно выполняет только свою часть.
				`),l=g("br"),n=g("br"),e=I(`
				В целом асинхронное общение не обязательно, но часто при таком подходе участники распределённой
				транзакции читают и пишут через брокера сообщений. В принципе если вы уже и так что-то читаете
				и пишете, то вы можете переиспользовать уже имеющиеся очереди, если так будет удобно.
				`),s=g("br"),$=g("br"),a=I(`
				Каждый участник на каждое сообщение с командой должен отправить ответ о результате её выполнения.
				Если одна локальная транзакция выполнилась успешно, то следующий участник выполняет свою, в противном
				случае все участники, которые выполнили свою работу перед свалившимся, должны совершить откатывающие
				изменения, которые по факту являются отменой проделанной работы.
				`),f=g("br"),r=g("br"),m=I(`
				Основная задача такого подхода - это правильно организовать координацию в рамках Sagа. С точки
				зрения архитектуры есть два варианта как это предлагают сделать - оркестрация и хореография,
				вот такая высокопарная терминология в распределённых системах.`)},l(u){t=B(u,`Есть другой подход - паттерн Saga. Он очень похож на классические распределённые транзакции,
				но по факту делит одну большую транзакцию на несколько мелких, то есть каждый сервис
				транзакционно выполняет только свою часть.
				`),l=v(u,"BR",{}),n=v(u,"BR",{}),e=B(u,`
				В целом асинхронное общение не обязательно, но часто при таком подходе участники распределённой
				транзакции читают и пишут через брокера сообщений. В принципе если вы уже и так что-то читаете
				и пишете, то вы можете переиспользовать уже имеющиеся очереди, если так будет удобно.
				`),s=v(u,"BR",{}),$=v(u,"BR",{}),a=B(u,`
				Каждый участник на каждое сообщение с командой должен отправить ответ о результате её выполнения.
				Если одна локальная транзакция выполнилась успешно, то следующий участник выполняет свою, в противном
				случае все участники, которые выполнили свою работу перед свалившимся, должны совершить откатывающие
				изменения, которые по факту являются отменой проделанной работы.
				`),f=v(u,"BR",{}),r=v(u,"BR",{}),m=B(u,`
				Основная задача такого подхода - это правильно организовать координацию в рамках Sagа. С точки
				зрения архитектуры есть два варианта как это предлагают сделать - оркестрация и хореография,
				вот такая высокопарная терминология в распределённых системах.`)},m(u,_){c(u,t,_),c(u,l,_),c(u,n,_),c(u,e,_),c(u,s,_),c(u,$,_),c(u,a,_),c(u,f,_),c(u,r,_),c(u,m,_)},p:q,d(u){u&&(i(t),i(l),i(n),i(e),i(s),i($),i(a),i(f),i(r),i(m))}}}function ol(o){let t,l="Паттерн Saga",n,e,s=`
					%%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
					graph LR
						A[Start Saga] -->|Command| B[Local Transaction 1]
						B -->|Command| C[Local Transaction 2]
						C -.->|Event| B
						C -->|Command| D[Local Transaction 3]
						D -.->|Event| C						
						D --> E[End Saga]

						subgraph Saga
							B
							C
							D
						end
				`,$,a,f,r;return f=new G({props:{$$slots:{default:[pl]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("div"),$=I(s),a=h(),O(f.$$.fragment),this.h()},l(m){t=v(m,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-fr3cs8"&&(t.textContent=l),n=C(m),e=v(m,"DIV",{class:!0});var u=z(e);$=B(u,s),u.forEach(i),a=C(m),A(f.$$.fragment,m),this.h()},h(){k(t,"class","text-6xl"),k(e,"class","mermaid mb-10 mt-28 flex flex-col items-center")},m(m,u){c(m,t,u),c(m,n,u),c(m,e,u),L(e,$),c(m,a,u),D(f,m,u),r=!0},p(m,u){const _={};u&16&&(_.$$scope={dirty:u,ctx:m}),f.$set(_)},i(m){r||(R(f.$$.fragment,m),r=!0)},o(m){S(f.$$.fragment,m),r=!1},d(m){m&&(i(t),i(n),i(e),i(a)),K(f,m)}}}function _l(o){let t,l,n,e,s,$,a;return{c(){t=I(`Простыми словами оркестрация - это когда у вас есть отдельно выделенный обработчик Saga, по
				сути конечный автомат, который знает, в каком порядке отправлять команды, откуда ждать
				ответы о результатах и в каком порядке откатывать изменения. Можно его назвать менеджером
				Saga, по аналогии с менеджером транзакции.
				`),l=g("br"),n=g("br"),e=I(`
				Такой подход хорош тем, что все остальные участники Saga мало что знают про саму Saga, они просто
				выполняют команду из одной очереди и пишут о результате в другую. По сути всё знание о транзакции
				лежит в оркестраторе.
				`),s=g("br"),$=g("br"),a=I(`
				Плох же он тем, что оркестратор Saga - это отдельный сервис или класс со сложной логикой, ещё
				и состояние конечного автомата нужно где-то хранить. А так же этот менеджер может упасть, и если
				он потом не восстановит состояние Saga - то транзакция так же повиснет, просто в отличии от двухфазного
				коммита вы не заблокируете базу, а оставите систему в неконсистентном состоянии.`)},l(f){t=B(f,`Простыми словами оркестрация - это когда у вас есть отдельно выделенный обработчик Saga, по
				сути конечный автомат, который знает, в каком порядке отправлять команды, откуда ждать
				ответы о результатах и в каком порядке откатывать изменения. Можно его назвать менеджером
				Saga, по аналогии с менеджером транзакции.
				`),l=v(f,"BR",{}),n=v(f,"BR",{}),e=B(f,`
				Такой подход хорош тем, что все остальные участники Saga мало что знают про саму Saga, они просто
				выполняют команду из одной очереди и пишут о результате в другую. По сути всё знание о транзакции
				лежит в оркестраторе.
				`),s=v(f,"BR",{}),$=v(f,"BR",{}),a=B(f,`
				Плох же он тем, что оркестратор Saga - это отдельный сервис или класс со сложной логикой, ещё
				и состояние конечного автомата нужно где-то хранить. А так же этот менеджер может упасть, и если
				он потом не восстановит состояние Saga - то транзакция так же повиснет, просто в отличии от двухфазного
				коммита вы не заблокируете базу, а оставите систему в неконсистентном состоянии.`)},m(f,r){c(f,t,r),c(f,l,r),c(f,n,r),c(f,e,r),c(f,s,r),c(f,$,r),c(f,a,r)},p:q,d(f){f&&(i(t),i(l),i(n),i(e),i(s),i($),i(a))}}}function gl(o){let t,l="Оркестрация",n,e,s=`
					%%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
					graph TB
						Start["Start Saga"] --> Saga

						subgraph Saga["Orchestration based saga"]

						SagaEventsTopic["Saga Events Topic"] -. consumed by .-> Orchestrator
						Orchestrator -- publish to --> Orders["Topic Orders"]
						Orders -. consumed by .-> OrdersService["Orders Service"]
						OrdersService -- publish to --> SagaEventsTopic["Topic SagaEvents"]
						
						
						Orchestrator -- publish to --> Shipping[Topic Shipping]
						Shipping -. consumed by .-> ShippingService["Shipping Service"]
						ShippingService -- publish to --> SagaEventsTopic

						end

						Saga --> Finish["Finish Saga"]
				`,$,a,f,r;return f=new G({props:{$$slots:{default:[_l]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("div"),$=I(s),a=h(),O(f.$$.fragment),this.h()},l(m){t=v(m,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-9ymlo"&&(t.textContent=l),n=C(m),e=v(m,"DIV",{class:!0});var u=z(e);$=B(u,s),u.forEach(i),a=C(m),A(f.$$.fragment,m),this.h()},h(){k(t,"class","text-6xl"),k(e,"class","mermaid mb-10 mt-10 flex flex-col items-center")},m(m,u){c(m,t,u),c(m,n,u),c(m,e,u),L(e,$),c(m,a,u),D(f,m,u),r=!0},p(m,u){const _={};u&16&&(_.$$scope={dirty:u,ctx:m}),f.$set(_)},i(m){r||(R(f.$$.fragment,m),r=!0)},o(m){S(f.$$.fragment,m),r=!1},d(m){m&&(i(t),i(n),i(e),i(a)),K(f,m)}}}function vl(o){let t,l,n,e,s,$,a,f,r,m,u,_,b;return{c(){t=I(`Хореография же подразумевает, что знание о Saga так или иначе размазано между разными
				сервисами, например сервисы связаны в цепочку, где каждое звено пишет в очередь, которое
				читает следующее, и наоборот.
				`),l=g("br"),n=g("br"),e=I(`
				Например если у вас интернет-магазин, то сервису заказов приходит сообщение о новом заказе в
				топик Orders, он создаёт запись в своей базе и отправляет событие о том, что заказ был создан
				в свой топик с результатами OrdersEvents.
				`),s=g("br"),$=g("br"),a=I(`
				Сообщение из топика OrdersEvents читает сервис доставки, отправляет запрос в Web API транспортной
				компании и затем отправляет событие о результате в топик ShippingEvents. Сервис заказов видит
				сообщение об успешной доставке и завершает Saga. Если доставка не удалась, то сервис заказов
				откатывает свои изменения.
				`),f=g("br"),r=g("br"),m=I(`
				Если вы немного запутались в работе хореографии, то вы уже сами поняли её главный недостаток
				- очень просто запутаться в связях между сервисами, поэтому такой способ подойдет для небольшого
				количества участников. Но зато у вас нет одного единственного менеджера Saga и меньше риск того,
				что всё сведётся к бутылочному горлышку. Хотя как по мне такая цель не оправдывает средства,
				но может быть у вас будет другой опыт.
				`),u=g("br"),_=g("br"),b=I(`
				Мне лично как разработчику понятнее логика работы конечного автомата в виде оркестратора Saga.
				Такой подход лучше масштабируется и подходит для реализации сложных сценариев, по сути кода так
				и так будет много, но хоть всё в одном месте. А состояние Saga можно надёжно хранить в базе,
				тем самым не переживая что оркестратор упадёт.`)},l(p){t=B(p,`Хореография же подразумевает, что знание о Saga так или иначе размазано между разными
				сервисами, например сервисы связаны в цепочку, где каждое звено пишет в очередь, которое
				читает следующее, и наоборот.
				`),l=v(p,"BR",{}),n=v(p,"BR",{}),e=B(p,`
				Например если у вас интернет-магазин, то сервису заказов приходит сообщение о новом заказе в
				топик Orders, он создаёт запись в своей базе и отправляет событие о том, что заказ был создан
				в свой топик с результатами OrdersEvents.
				`),s=v(p,"BR",{}),$=v(p,"BR",{}),a=B(p,`
				Сообщение из топика OrdersEvents читает сервис доставки, отправляет запрос в Web API транспортной
				компании и затем отправляет событие о результате в топик ShippingEvents. Сервис заказов видит
				сообщение об успешной доставке и завершает Saga. Если доставка не удалась, то сервис заказов
				откатывает свои изменения.
				`),f=v(p,"BR",{}),r=v(p,"BR",{}),m=B(p,`
				Если вы немного запутались в работе хореографии, то вы уже сами поняли её главный недостаток
				- очень просто запутаться в связях между сервисами, поэтому такой способ подойдет для небольшого
				количества участников. Но зато у вас нет одного единственного менеджера Saga и меньше риск того,
				что всё сведётся к бутылочному горлышку. Хотя как по мне такая цель не оправдывает средства,
				но может быть у вас будет другой опыт.
				`),u=v(p,"BR",{}),_=v(p,"BR",{}),b=B(p,`
				Мне лично как разработчику понятнее логика работы конечного автомата в виде оркестратора Saga.
				Такой подход лучше масштабируется и подходит для реализации сложных сценариев, по сути кода так
				и так будет много, но хоть всё в одном месте. А состояние Saga можно надёжно хранить в базе,
				тем самым не переживая что оркестратор упадёт.`)},m(p,d){c(p,t,d),c(p,l,d),c(p,n,d),c(p,e,d),c(p,s,d),c(p,$,d),c(p,a,d),c(p,f,d),c(p,r,d),c(p,m,d),c(p,u,d),c(p,_,d),c(p,b,d)},p:q,d(p){p&&(i(t),i(l),i(n),i(e),i(s),i($),i(a),i(f),i(r),i(m),i(u),i(_),i(b))}}}function bl(o){let t,l="Хореография",n,e,s=`
					%%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
					graph LR
						Start[Start Saga] --> Saga
						subgraph Saga["Choreography based saga"]
							direction TB
							OrdersTopic[Topic Orders] -. consumed by .-> OrdersService[Order Service]
							OrdersService -- publish to --> OrdersEventsTopic[Topic OrdersEvents]
							OrdersEventsTopic -. consumed by .-> ShippingService[Shipping Service]
							ShippingService -- publish to --> ShippingEventsTopic[Topic ShippingEvents]
							ShippingEventsTopic -. consumed by .-> OrdersService
						end

						Saga --> End[Finish Saga]
				`,$,a,f,r;return f=new G({props:{$$slots:{default:[vl]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("div"),$=I(s),a=h(),O(f.$$.fragment),this.h()},l(m){t=v(m,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-xyfqap"&&(t.textContent=l),n=C(m),e=v(m,"DIV",{class:!0});var u=z(e);$=B(u,s),u.forEach(i),a=C(m),A(f.$$.fragment,m),this.h()},h(){k(t,"class","text-6xl"),k(e,"class","mermaid mb-10 mt-10 flex flex-col items-center")},m(m,u){c(m,t,u),c(m,n,u),c(m,e,u),L(e,$),c(m,a,u),D(f,m,u),r=!0},p(m,u){const _={};u&16&&(_.$$scope={dirty:u,ctx:m}),f.$set(_)},i(m){r||(R(f.$$.fragment,m),r=!0)},o(m){S(f.$$.fragment,m),r=!1},d(m){m&&(i(t),i(n),i(e),i(a)),K(f,m)}}}function dl(o){let t,l,n,e,s,$,a,f;return t=new U({props:{$$slots:{default:[cl]},$$scope:{ctx:o}}}),n=new U({props:{$$slots:{default:[ol]},$$scope:{ctx:o}}}),s=new U({props:{$$slots:{default:[gl]},$$scope:{ctx:o}}}),a=new U({props:{$$slots:{default:[bl]},$$scope:{ctx:o}}}),{c(){O(t.$$.fragment),l=h(),O(n.$$.fragment),e=h(),O(s.$$.fragment),$=h(),O(a.$$.fragment)},l(r){A(t.$$.fragment,r),l=C(r),A(n.$$.fragment,r),e=C(r),A(s.$$.fragment,r),$=C(r),A(a.$$.fragment,r)},m(r,m){D(t,r,m),c(r,l,m),D(n,r,m),c(r,e,m),D(s,r,m),c(r,$,m),D(a,r,m),f=!0},p(r,m){const u={};m&16&&(u.$$scope={dirty:m,ctx:r}),t.$set(u);const _={};m&16&&(_.$$scope={dirty:m,ctx:r}),n.$set(_);const b={};m&16&&(b.$$scope={dirty:m,ctx:r}),s.$set(b);const p={};m&16&&(p.$$scope={dirty:m,ctx:r}),a.$set(p)},i(r){f||(R(t.$$.fragment,r),R(n.$$.fragment,r),R(s.$$.fragment,r),R(a.$$.fragment,r),f=!0)},o(r){S(t.$$.fragment,r),S(n.$$.fragment,r),S(s.$$.fragment,r),S(a.$$.fragment,r),f=!1},d(r){r&&(i(l),i(e),i($)),K(t,r),K(n,r),K(s,r),K(a,r)}}}function xl(o){let t,l,n;return{c(){t=I(`Отлично, мы прошлись по теории, давайте немного посмотрим как это выглядит на практике. У меня
			есть маленький игрушечный кластер, состоящий из двух приложений - Web API и фонового
			обработчика. В качестве инфраструктуры у меня поднят кластер Kafka? состоящий из трёх
			брокеров, а так же PostgreSQL в качестве базы данных. Для мониторинга есть Kafka UI и PgAdmin.
			`),l=g("br"),n=I(`
			Всё это вы так же можете поднять у себя на машине, просто установив Docker и выполнив одну команду,
			следуя инструкции в репозитории.`)},l(e){t=B(e,`Отлично, мы прошлись по теории, давайте немного посмотрим как это выглядит на практике. У меня
			есть маленький игрушечный кластер, состоящий из двух приложений - Web API и фонового
			обработчика. В качестве инфраструктуры у меня поднят кластер Kafka? состоящий из трёх
			брокеров, а так же PostgreSQL в качестве базы данных. Для мониторинга есть Kafka UI и PgAdmin.
			`),l=v(e,"BR",{}),n=B(e,`
			Всё это вы так же можете поднять у себя на машине, просто установив Docker и выполнив одну команду,
			следуя инструкции в репозитории.`)},m(e,s){c(e,t,s),c(e,l,s),c(e,n,s)},p:q,d(e){e&&(i(t),i(l),i(n))}}}function wl(o){let t,l="LIVE DEMO",n,e,s,$,a,f="github.com/AxelUser/kafka-test-app",r,m,u;return m=new G({props:{$$slots:{default:[xl]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("img"),$=h(),a=g("a"),a.textContent=f,r=h(),O(m.$$.fragment),this.h()},l(_){t=v(_,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-1mdggg4"&&(t.textContent=l),n=C(_),e=v(_,"IMG",{class:!0,src:!0,alt:!0}),$=C(_),a=v(_,"A",{href:!0,target:!0,"data-svelte-h":!0}),H(a)!=="svelte-nv2d1p"&&(a.textContent=f),r=C(_),A(m.$$.fragment,_),this.h()},h(){k(t,"class","text-8xl"),k(e,"class","!mx-auto w-1/3"),J(e.src,s=o[0]+"/live-demo-qr.png")||k(e,"src",s),k(e,"alt","qr code for the live demo"),k(a,"href","https://github.com/AxelUser/kafka-test-app"),k(a,"target","_blank")},m(_,b){c(_,t,b),c(_,n,b),c(_,e,b),c(_,$,b),c(_,a,b),c(_,r,b),D(m,_,b),u=!0},p(_,b){const p={};b&16&&(p.$$scope={dirty:b,ctx:_}),m.$set(p)},i(_){u||(R(m.$$.fragment,_),u=!0)},o(_){S(m.$$.fragment,_),u=!1},d(_){_&&(i(t),i(n),i(e),i($),i(a),i(r)),K(m,_)}}}function hl(o){let t;return{c(){t=I("Сообщения отпреплицированны и шардированы")},l(l){t=B(l,"Сообщения отпреплицированны и шардированы")},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function Cl(o){let t;return{c(){t=I("Нужно правильно выбирать партиции")},l(l){t=B(l,"Нужно правильно выбирать партиции")},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function kl(o){let t;return{c(){t=I("Будьте готовы что сообщения могут дублироваться")},l(l){t=B(l,"Будьте готовы что сообщения могут дублироваться")},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function Il(o){let t;return{c(){t=I("Готовьтесь что сообщения могут уйти из под ног")},l(l){t=B(l,"Готовьтесь что сообщения могут уйти из под ног")},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function Bl(o){let t,l,n,e,s,$,a,f,r,m,u,_,b;return{c(){t=I(`Отлично, мы прошлись по всем основным моментам. Давайте подведём черту и проговорим что мы
			узнали.
			`),l=g("br"),n=g("br"),e=I(`
			(1) Apache Kafka - распределённое приложение. Сообщения размазанных по всему кластеру, чтобы данные
			не терялись в случае поломки и чтобы приложения могли быстро писать и читать сообщения.
			`),s=g("br"),$=g("br"),a=I(`
			(2) Сообщения хранятся в партициях и упорядочены только в них. Связанные сообщения должны всегда
			попадать в одну и ту же партицию, но при этом все сообщения должны быть равномерно распределены
			между всеми имеющимися партициями.
			`),f=g("br"),r=g("br"),m=I(`
			(3) Повторы - это нормальная практика в распределённых системах. Их стоит делать чтобы не потерять
			данные и нужно быть готовыми к тому, что сообщения могут дублироваться.
			`),u=g("br"),_=g("br"),b=I(`
			(4) Но при этом Apache Kafka занимается только хранением и удаляет данные когда она сама решит.
			Аккуратно продумывайте время жизни сообщений, исходя из предполагаемой скорости продьюсеров и конзьюмеров.
			Если вам нужны железобетонные гарантии обработки, то лучше отказаться от Apache Kafka в угоду другим
			классическим брокерам.`)},l(p){t=B(p,`Отлично, мы прошлись по всем основным моментам. Давайте подведём черту и проговорим что мы
			узнали.
			`),l=v(p,"BR",{}),n=v(p,"BR",{}),e=B(p,`
			(1) Apache Kafka - распределённое приложение. Сообщения размазанных по всему кластеру, чтобы данные
			не терялись в случае поломки и чтобы приложения могли быстро писать и читать сообщения.
			`),s=v(p,"BR",{}),$=v(p,"BR",{}),a=B(p,`
			(2) Сообщения хранятся в партициях и упорядочены только в них. Связанные сообщения должны всегда
			попадать в одну и ту же партицию, но при этом все сообщения должны быть равномерно распределены
			между всеми имеющимися партициями.
			`),f=v(p,"BR",{}),r=v(p,"BR",{}),m=B(p,`
			(3) Повторы - это нормальная практика в распределённых системах. Их стоит делать чтобы не потерять
			данные и нужно быть готовыми к тому, что сообщения могут дублироваться.
			`),u=v(p,"BR",{}),_=v(p,"BR",{}),b=B(p,`
			(4) Но при этом Apache Kafka занимается только хранением и удаляет данные когда она сама решит.
			Аккуратно продумывайте время жизни сообщений, исходя из предполагаемой скорости продьюсеров и конзьюмеров.
			Если вам нужны железобетонные гарантии обработки, то лучше отказаться от Apache Kafka в угоду другим
			классическим брокерам.`)},m(p,d){c(p,t,d),c(p,l,d),c(p,n,d),c(p,e,d),c(p,s,d),c(p,$,d),c(p,a,d),c(p,f,d),c(p,r,d),c(p,m,d),c(p,u,d),c(p,_,d),c(p,b,d)},p:q,d(p){p&&(i(t),i(l),i(n),i(e),i(s),i($),i(a),i(f),i(r),i(m),i(u),i(_),i(b))}}}function Rl(o){let t,l="Итого",n,e,s,$,a,f,r,m,u,_,b,p;return s=new F({props:{$$slots:{default:[hl]},$$scope:{ctx:o}}}),a=new F({props:{$$slots:{default:[Cl]},$$scope:{ctx:o}}}),r=new F({props:{$$slots:{default:[kl]},$$scope:{ctx:o}}}),u=new F({props:{$$slots:{default:[Il]},$$scope:{ctx:o}}}),b=new G({props:{$$slots:{default:[Bl]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),e=g("ul"),O(s.$$.fragment),$=h(),O(a.$$.fragment),f=h(),O(r.$$.fragment),m=h(),O(u.$$.fragment),_=h(),O(b.$$.fragment),this.h()},l(d){t=v(d,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-177af3c"&&(t.textContent=l),n=C(d),e=v(d,"UL",{class:!0});var M=z(e);A(s.$$.fragment,M),$=C(M),A(a.$$.fragment,M),f=C(M),A(r.$$.fragment,M),m=C(M),A(u.$$.fragment,M),M.forEach(i),_=C(d),A(b.$$.fragment,d),this.h()},h(){k(t,"class","text-8xl"),k(e,"class","!mt-10 space-y-4")},m(d,M){c(d,t,M),c(d,n,M),c(d,e,M),D(s,e,null),L(e,$),D(a,e,null),L(e,f),D(r,e,null),L(e,m),D(u,e,null),c(d,_,M),D(b,d,M),p=!0},p(d,M){const x={};M&16&&(x.$$scope={dirty:M,ctx:d}),s.$set(x);const E={};M&16&&(E.$$scope={dirty:M,ctx:d}),a.$set(E);const V={};M&16&&(V.$$scope={dirty:M,ctx:d}),r.$set(V);const P={};M&16&&(P.$$scope={dirty:M,ctx:d}),u.$set(P);const j={};M&16&&(j.$$scope={dirty:M,ctx:d}),b.$set(j)},i(d){p||(R(s.$$.fragment,d),R(a.$$.fragment,d),R(r.$$.fragment,d),R(u.$$.fragment,d),R(b.$$.fragment,d),p=!0)},o(d){S(s.$$.fragment,d),S(a.$$.fragment,d),S(r.$$.fragment,d),S(u.$$.fragment,d),S(b.$$.fragment,d),p=!1},d(d){d&&(i(t),i(n),i(e),i(_)),K(s),K(a),K(r),K(u),K(b,d)}}}function Sl(o){let t;return{c(){t=I(`А на этом у меня всё, благодарю за ваше внимание. Если вы хотите подробнее изучить
			презентацию, то он доступна онлайн, а сейчас я готов ответить на вопросы.`)},l(l){t=B(l,`А на этом у меня всё, благодарю за ваше внимание. Если вы хотите подробнее изучить
			презентацию, то он доступна онлайн, а сейчас я готов ответить на вопросы.`)},m(l,n){c(l,t,n)},d(l){l&&i(t)}}}function Ol(o){let t,l="Спасибо за внимание",n,e,s,$,a,f,r,m,u,_,b,p,d;return e=new zt({}),p=new G({props:{$$slots:{default:[Sl]},$$scope:{ctx:o}}}),{c(){t=g("div"),t.textContent=l,n=h(),O(e.$$.fragment),s=h(),$=g("div"),a=g("div"),f=g("img"),m=h(),u=g("img"),b=h(),O(p.$$.fragment),this.h()},l(M){t=v(M,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-1689dex"&&(t.textContent=l),n=C(M),A(e.$$.fragment,M),s=C(M),$=v(M,"DIV",{class:!0});var x=z($);a=v(x,"DIV",{class:!0});var E=z(a);f=v(E,"IMG",{class:!0,src:!0,alt:!0}),E.forEach(i),m=C(x),u=v(x,"IMG",{class:!0,src:!0,alt:!0}),x.forEach(i),b=C(M),A(p.$$.fragment,M),this.h()},h(){k(t,"class","text-8xl"),k(f,"class","pulse svelte-13eezke"),J(f.src,r=o[0]+"/presentation-arrow.png")||k(f,"src",r),k(f,"alt","qr code this presentation"),k(a,"class","h-1/5 w-2/5 pr-2"),k(u,"class","h-1/5 w-1/5"),J(u.src,_=o[0]+"/presentation-link-qr.png")||k(u,"src",_),k(u,"alt","qr code this presentation"),k($,"class","mt-6 flex items-center")},m(M,x){c(M,t,x),c(M,n,x),D(e,M,x),c(M,s,x),c(M,$,x),L($,a),L(a,f),L($,m),L($,u),c(M,b,x),D(p,M,x),d=!0},p(M,x){const E={};x&16&&(E.$$scope={dirty:x,ctx:M}),p.$set(E)},i(M){d||(R(e.$$.fragment,M),R(p.$$.fragment,M),d=!0)},o(M){S(e.$$.fragment,M),S(p.$$.fragment,M),d=!1},d(M){M&&(i(t),i(n),i(s),i($),i(b)),K(e,M),K(p,M)}}}function Al(o){let t,l,n,e,s,$,a,f,r,m,u,_,b,p,d,M,x,E,V,P,j,W,N,X,Y,tt,Z,ft,y,rt,et,at,st,it,lt,ut,nt,mt,$t,ct;return t=new U({props:{bgImage:o[0]+"/title-cover.webp",bgImageOpacity:Q,$$slots:{default:[ae]},$$scope:{ctx:o}}}),n=new U({props:{bgImage:o[0]+"/title-cover.webp",bgImageOpacity:Q,$$slots:{default:[ie]},$$scope:{ctx:o}}}),s=new U({props:{$$slots:{default:[ue]},$$scope:{ctx:o}}}),a=new U({props:{bgImage:o[0]+"/all-about-apache-kafka.webp",bgImageOpacity:Q,$$slots:{default:[ce]},$$scope:{ctx:o}}}),r=new U({props:{bgImage:o[0]+"/what-is-kafka-bg.webp",bgImageOpacity:"0.05",$$slots:{default:[oe]},$$scope:{ctx:o}}}),u=new U({props:{bgImage:o[0]+"/kafka-cluster-bg.webp",bgImageOpacity:Q,$$slots:{default:[ge]},$$scope:{ctx:o}}}),b=new U({props:{bgImage:o[0]+"/bg-topics-and-partitions.webp",bgImageOpacity:Q,$$slots:{default:[we]},$$scope:{ctx:o}}}),d=new U({props:{bgImage:o[0]+"/bg-where-messages-are-written.webp",bgImageOpacity:Q,$$slots:{default:[Be]},$$scope:{ctx:o}}}),x=new U({props:{bgImage:o[0]+"/bg-message-structure.webp",bgImageOpacity:Q,$$slots:{default:[Oe]},$$scope:{ctx:o}}}),V=new U({props:{bgImage:o[0]+"/bg-message-key-and-ballancing.webp",bgImageOpacity:Q,$$slots:{default:[Ue]},$$scope:{ctx:o}}}),j=new U({props:{$$slots:{default:[We]},$$scope:{ctx:o}}}),N=new U({props:{bgImage:o[0]+"/topic-retention-bg.webp",bgImageOpacity:Q,$$slots:{default:[Qe]},$$scope:{ctx:o}}}),Y=new U({props:{bgImage:o[0]+"/bg-roach-reading-messages.webp",bgImageOpacity:Q,$$slots:{default:[Ss]},$$scope:{ctx:o}}}),Z=new U({props:{bgImage:o[0]+"/bg-advanced-patterns.webp",bgImageOpacity:Q,$$slots:{default:[As]},$$scope:{ctx:o}}}),y=new U({props:{bgImage:o[0]+"/bg-duplicates.webp",bgImageOpacity:Q,$$slots:{default:[Us]},$$scope:{ctx:o}}}),et=new U({props:{bgImage:o[0]+"/bg-delivery.webp",bgImageOpacity:Q,$$slots:{default:[al]},$$scope:{ctx:o}}}),st=new U({props:{bgImage:o[0]+"/bg-distributed-transactions.webp",bgImageOpacity:Q,$$slots:{default:[dl]},$$scope:{ctx:o}}}),lt=new U({props:{$$slots:{default:[wl]},$$scope:{ctx:o}}}),nt=new U({props:{bgImage:o[0]+"/bg-recap.webp",bgImageOpacity:Q,$$slots:{default:[Rl]},$$scope:{ctx:o}}}),$t=new U({props:{bgImage:o[0]+"/bg-thanks.webp",bgImageOpacity:Q,$$slots:{default:[Ol]},$$scope:{ctx:o}}}),{c(){O(t.$$.fragment),l=h(),O(n.$$.fragment),e=h(),O(s.$$.fragment),$=h(),O(a.$$.fragment),f=h(),O(r.$$.fragment),m=h(),O(u.$$.fragment),_=h(),O(b.$$.fragment),p=h(),O(d.$$.fragment),M=h(),O(x.$$.fragment),E=h(),O(V.$$.fragment),P=h(),O(j.$$.fragment),W=h(),O(N.$$.fragment),X=h(),O(Y.$$.fragment),tt=h(),O(Z.$$.fragment),ft=h(),O(y.$$.fragment),rt=h(),O(et.$$.fragment),at=h(),O(st.$$.fragment),it=h(),O(lt.$$.fragment),ut=h(),O(nt.$$.fragment),mt=h(),O($t.$$.fragment)},l(w){A(t.$$.fragment,w),l=C(w),A(n.$$.fragment,w),e=C(w),A(s.$$.fragment,w),$=C(w),A(a.$$.fragment,w),f=C(w),A(r.$$.fragment,w),m=C(w),A(u.$$.fragment,w),_=C(w),A(b.$$.fragment,w),p=C(w),A(d.$$.fragment,w),M=C(w),A(x.$$.fragment,w),E=C(w),A(V.$$.fragment,w),P=C(w),A(j.$$.fragment,w),W=C(w),A(N.$$.fragment,w),X=C(w),A(Y.$$.fragment,w),tt=C(w),A(Z.$$.fragment,w),ft=C(w),A(y.$$.fragment,w),rt=C(w),A(et.$$.fragment,w),at=C(w),A(st.$$.fragment,w),it=C(w),A(lt.$$.fragment,w),ut=C(w),A(nt.$$.fragment,w),mt=C(w),A($t.$$.fragment,w)},m(w,T){D(t,w,T),c(w,l,T),D(n,w,T),c(w,e,T),D(s,w,T),c(w,$,T),D(a,w,T),c(w,f,T),D(r,w,T),c(w,m,T),D(u,w,T),c(w,_,T),D(b,w,T),c(w,p,T),D(d,w,T),c(w,M,T),D(x,w,T),c(w,E,T),D(V,w,T),c(w,P,T),D(j,w,T),c(w,W,T),D(N,w,T),c(w,X,T),D(Y,w,T),c(w,tt,T),D(Z,w,T),c(w,ft,T),D(y,w,T),c(w,rt,T),D(et,w,T),c(w,at,T),D(st,w,T),c(w,it,T),D(lt,w,T),c(w,ut,T),D(nt,w,T),c(w,mt,T),D($t,w,T),ct=!0},p(w,T){const vt={};T&16&&(vt.$$scope={dirty:T,ctx:w}),t.$set(vt);const bt={};T&16&&(bt.$$scope={dirty:T,ctx:w}),n.$set(bt);const dt={};T&16&&(dt.$$scope={dirty:T,ctx:w}),s.$set(dt);const xt={};T&16&&(xt.$$scope={dirty:T,ctx:w}),a.$set(xt);const wt={};T&16&&(wt.$$scope={dirty:T,ctx:w}),r.$set(wt);const ht={};T&16&&(ht.$$scope={dirty:T,ctx:w}),u.$set(ht);const Ct={};T&16&&(Ct.$$scope={dirty:T,ctx:w}),b.$set(Ct);const kt={};T&16&&(kt.$$scope={dirty:T,ctx:w}),d.$set(kt);const It={};T&16&&(It.$$scope={dirty:T,ctx:w}),x.$set(It);const Bt={};T&16&&(Bt.$$scope={dirty:T,ctx:w}),V.$set(Bt);const Rt={};T&16&&(Rt.$$scope={dirty:T,ctx:w}),j.$set(Rt);const St={};T&16&&(St.$$scope={dirty:T,ctx:w}),N.$set(St);const Ot={};T&16&&(Ot.$$scope={dirty:T,ctx:w}),Y.$set(Ot);const At={};T&16&&(At.$$scope={dirty:T,ctx:w}),Z.$set(At);const Dt={};T&16&&(Dt.$$scope={dirty:T,ctx:w}),y.$set(Dt);const Kt={};T&16&&(Kt.$$scope={dirty:T,ctx:w}),et.$set(Kt);const Vt={};T&16&&(Vt.$$scope={dirty:T,ctx:w}),st.$set(Vt);const Et={};T&16&&(Et.$$scope={dirty:T,ctx:w}),lt.$set(Et);const Mt={};T&16&&(Mt.$$scope={dirty:T,ctx:w}),nt.$set(Mt);const Lt={};T&16&&(Lt.$$scope={dirty:T,ctx:w}),$t.$set(Lt)},i(w){ct||(R(t.$$.fragment,w),R(n.$$.fragment,w),R(s.$$.fragment,w),R(a.$$.fragment,w),R(r.$$.fragment,w),R(u.$$.fragment,w),R(b.$$.fragment,w),R(d.$$.fragment,w),R(x.$$.fragment,w),R(V.$$.fragment,w),R(j.$$.fragment,w),R(N.$$.fragment,w),R(Y.$$.fragment,w),R(Z.$$.fragment,w),R(y.$$.fragment,w),R(et.$$.fragment,w),R(st.$$.fragment,w),R(lt.$$.fragment,w),R(nt.$$.fragment,w),R($t.$$.fragment,w),ct=!0)},o(w){S(t.$$.fragment,w),S(n.$$.fragment,w),S(s.$$.fragment,w),S(a.$$.fragment,w),S(r.$$.fragment,w),S(u.$$.fragment,w),S(b.$$.fragment,w),S(d.$$.fragment,w),S(x.$$.fragment,w),S(V.$$.fragment,w),S(j.$$.fragment,w),S(N.$$.fragment,w),S(Y.$$.fragment,w),S(Z.$$.fragment,w),S(y.$$.fragment,w),S(et.$$.fragment,w),S(st.$$.fragment,w),S(lt.$$.fragment,w),S(nt.$$.fragment,w),S($t.$$.fragment,w),ct=!1},d(w){w&&(i(l),i(e),i($),i(f),i(m),i(_),i(p),i(M),i(E),i(P),i(W),i(X),i(tt),i(ft),i(rt),i(at),i(it),i(ut),i(mt)),K(t,w),K(n,w),K(s,w),K(a,w),K(r,w),K(u,w),K(b,w),K(d,w),K(x,w),K(V,w),K(j,w),K(N,w),K(Y,w),K(Z,w),K(y,w),K(et,w),K(st,w),K(lt,w),K(nt,w),K($t,w)}}}function Dl(o){let t,l;return t=new Zt({props:{title:"Apache Kafka на практике",$$slots:{default:[Al]},$$scope:{ctx:o}}}),{c(){O(t.$$.fragment)},l(n){A(t.$$.fragment,n)},m(n,e){D(t,n,e),l=!0},p(n,[e]){const s={};e&16&&(s.$$scope={dirty:e,ctx:n}),t.$set(s)},i(n){l||(R(t.$$.fragment,n),l=!0)},o(n){S(t.$$.fragment,n),l=!1},d(n){K(t,n)}}}const Q="0.1";function Kl(o){return[`${Qt}/slides/2024-07/kafka-on-practice`]}class Pl extends ot{constructor(t){super(),_t(this,t,Kl,Dl,pt,{})}}export{Pl as component};
