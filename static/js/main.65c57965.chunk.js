(this["webpackJsonpamazon-copia"]=this["webpackJsonpamazon-copia"]||[]).push([[0],{45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},63:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c(3),i=c.n(s),n=c(34),r=c.n(n),o=(c(45),c(35)),l=c(10),j=(c(46),c(17)),d=c(8),u=(c(47),c(48),Object(s.createContext)()),h=function(e){var t=e.reducer,c=e.initialState,i=e.children;return Object(a.jsx)(u.Provider,{value:Object(s.useReducer)(t,c),children:i})},m=function(){return Object(s.useContext)(u)};var b=function(e){var t=e.id,c=e.title,s=e.image,i=e.price,n=e.rating,r=m(),o=Object(l.a)(r,2),j=(o[0].basket,o[1]);return Object(a.jsxs)("div",{className:"product",children:[Object(a.jsxs)("div",{className:"product__info",children:[Object(a.jsx)("p",{children:c}),Object(a.jsxs)("p",{className:"product__price",children:[Object(a.jsx)("small",{children:"$"}),Object(a.jsx)("strong",{children:i})]}),Object(a.jsx)("div",{className:"product__rating",children:Array(n).fill().map((function(e,t){return Object(a.jsx)("p",{children:"\ud83c\udf1f"})}))})]}),Object(a.jsx)("img",{src:s,alt:""}),Object(a.jsx)("button",{onClick:function(){j({type:"ADD_TO_BASKET",item:{id:t,title:c,image:s,price:i,rating:n}})},children:"Add to Basket"})]})};var O=function(){return Object(a.jsx)("div",{className:"home",children:Object(a.jsxs)("div",{className:"home__container",children:[Object(a.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(b,{id:"12321341",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:11.96,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}),Object(a.jsx)(b,{id:"49538094",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",price:239,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"})]}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(b,{id:"4903850",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",price:199.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),Object(a.jsx)(b,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),Object(a.jsx)(b,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})]}),Object(a.jsx)("div",{className:"home__row",children:Object(a.jsx)(b,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})})]})})},p=(c(49),c(36)),_=c.n(p),g=c(37),x=c.n(g),v=c(29),f=(v.a.initializeApp({apiKey:"AIzaSyCTdhIfXV6fL__Jdh7XT7kVBB8hPm8iPNM",authDomain:"amazom-copia.firebaseapp.com",databaseURL:"https://amazom-copia.firebaseio.com",projectId:"amazom-copia",storageBucket:"amazom-copia.appspot.com",messagingSenderId:"373363573172",appId:"1:373363573172:web:80e48ab53873e1b7ebf2e1",measurementId:"G-KLQNYYC0ZM"}).firestore(),v.a.auth());var N=function(){var e=m(),t=Object(l.a)(e,2),c=t[0],s=c.basket,i=c.user;return t[1],Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(j.b,{to:"/",children:Object(a.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})}),Object(a.jsxs)("div",{className:"header__search",children:[Object(a.jsx)("input",{className:"header__searchInput",type:"text"}),Object(a.jsx)(_.a,{className:"header__searchIcon"})]}),Object(a.jsxs)("div",{className:"header__nav",children:[Object(a.jsx)(j.b,{to:!i&&"/login",children:Object(a.jsxs)("div",{onClick:function(){i&&f.signOut()},className:"header__option",children:[Object(a.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",i?i.email:"Guest"]}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:i?"Sign Out":"Sign In"})]})}),Object(a.jsx)(j.b,{to:"/orders",children:Object(a.jsxs)("div",{className:"header__option",children:[Object(a.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),Object(a.jsxs)("div",{className:"header__option",children:[Object(a.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(a.jsx)(j.b,{to:"/checkout",children:Object(a.jsxs)("div",{className:"header__optionBasket",children:[Object(a.jsx)(x.a,{}),Object(a.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===s||void 0===s?void 0:s.length})]})})]})]})};c(59);var k=function(){var e=Object(d.f)(),t=Object(s.useState)(""),c=Object(l.a)(t,2),i=c[0],n=c[1],r=Object(s.useState)(""),o=Object(l.a)(r,2),u=o[0],h=o[1];return Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)(j.b,{to:"/",children:Object(a.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})}),Object(a.jsxs)("div",{className:"login__container",children:[Object(a.jsx)("h1",{children:"Sign-in"}),Object(a.jsxs)("form",{children:[Object(a.jsx)("h5",{children:"E-mail"}),Object(a.jsx)("input",{type:"text",value:i,onChange:function(e){return n(e.target.value)}}),Object(a.jsx)("h5",{children:"Password"}),Object(a.jsx)("input",{type:"password",value:u,onChange:function(e){return h(e.target.value)}}),Object(a.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),f.signInWithEmailAndPassword(i,u).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton",children:"Sign In"})]}),Object(a.jsx)("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(a.jsx)("button",{onClick:function(t){t.preventDefault(),f.createUserWithEmailAndPassword(i,u).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create your Amazon Account"})]})]})},S=(c(60),c(61),c(38)),C=c.n(S),A=c(30),E=c(19),B=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},y=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(E.a)(Object(E.a)({},e),{},{basket:[].concat(Object(A.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(E.a)(Object(E.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),a=Object(A.a)(e.basket);return c>=0?a.splice(c,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(E.a)(Object(E.a)({},e),{},{basket:a});case"SET_USER":return Object(E.a)(Object(E.a)({},e),{},{user:t.user});default:return e}};var w=function(){Object(d.f)();var e=m(),t=Object(l.a)(e,2),c=t[0].basket;return t[1],Object(a.jsxs)("div",{className:"subtotal",children:[Object(a.jsx)(C.a,{renderText:function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("p",{children:["Subtotal (",c.length," items): ",Object(a.jsx)("strong",{children:e})]}),Object(a.jsxs)("small",{className:"subtotal__gift",children:[Object(a.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:B(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(a.jsx)("button",{children:"Proceed to Checkout"})]})};c(63);var L=function(e){var t=e.id,c=e.image,s=e.title,i=e.price,n=e.rating,r=e.hideButton,o=m(),j=Object(l.a)(o,2),d=(j[0].basket,j[1]);return Object(a.jsxs)("div",{className:"checkoutProduct",children:[Object(a.jsx)("img",{className:"checkoutProduct__image",src:c}),Object(a.jsxs)("div",{className:"checkoutProduct__info",children:[Object(a.jsx)("p",{className:"checkoutProduct__title",children:s}),Object(a.jsxs)("p",{className:"checkoutProduct__price",children:[Object(a.jsx)("small",{children:"$"}),Object(a.jsx)("strong",{children:i})]}),Object(a.jsx)("div",{className:"checkoutProduct__rating",children:Array(n).fill().map((function(e,t){return Object(a.jsx)("p",{children:"\ud83c\udf1f"})}))}),!r&&Object(a.jsx)("button",{onClick:function(){d({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})};var P=function(){var e=m(),t=Object(l.a)(e,2),c=t[0],s=c.basket,i=c.user;return t[1],Object(a.jsxs)("div",{className:"checkout",children:[Object(a.jsxs)("div",{className:"checkout__left",children:[Object(a.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{children:["Hello, ",null===i||void 0===i?void 0:i.email]}),Object(a.jsx)("h2",{className:"checkout__title",children:"Your shopping Basket"}),s.map((function(e){return Object(a.jsx)(L,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(a.jsx)("div",{className:"checkout__right",children:Object(a.jsx)(w,{})})]})};var T=function(){var e=m(),t=Object(l.a)(e,2);Object(o.a)(t[0]);var c=t[1];return Object(s.useEffect)((function(){f.onAuthStateChanged((function(e){console.log("THE USER IS >>> ",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(a.jsx)(j.a,{basename:"/",children:Object(a.jsxs)(d.c,{children:[Object(a.jsx)(d.a,{path:"/login",children:Object(a.jsx)(k,{})}),Object(a.jsxs)(d.a,{path:"/checkout",children:[Object(a.jsx)(N,{}),Object(a.jsx)(P,{})]}),Object(a.jsxs)(d.a,{path:"/",children:[Object(a.jsx)(N,{}),Object(a.jsx)(O,{})]})]})})};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(h,{initialState:{basket:[],user:null},reducer:y,children:Object(a.jsx)(T,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.65c57965.chunk.js.map