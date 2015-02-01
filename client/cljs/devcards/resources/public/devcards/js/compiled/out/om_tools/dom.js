// Compiled by ClojureScript 0.0-2725 {}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('clojure.string');
/**
* Converts kebab-case to camelCase
*/
om_tools.dom.camel_case = (function camel_case(s){
return clojure.string.replace.call(null,s,/-(\w)/,cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.second));
});
/**
* Converts attributes that are kebab-case and should be camelCase
*/
om_tools.dom.opt_key_case = (function opt_key_case(attr){
if(cljs.core.truth_((function (){var or__3755__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__3755__auto__){
return or__3755__auto__;
} else {
var G__17458 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__17458) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case.call(null,attr);
}
});
/**
* Converts aliased attributes
*/
om_tools.dom.opt_key_alias = (function opt_key_alias(opt){
var G__17461 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__17461) {
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
default:
return opt;

}
});
/**
* Returns potentially formatted name for DOM element attribute.
* Converts kebab-case to camelCase.
*/
om_tools.dom.format_opt_key = (function format_opt_key(opt_key){
return cljs.core.keyword.call(null,om_tools.dom.opt_key_case.call(null,cljs.core.name.call(null,om_tools.dom.opt_key_alias.call(null,opt_key))));
});
/**
* Returns potentially modified value for DOM element attribute.
* Recursively formats map values (ie :style attribute)
*/
om_tools.dom.format_opt_val = (function format_opt_val(opt_val){
if(cljs.core.map_QMARK_.call(null,opt_val)){
return om_tools.dom.format_opts.call(null,opt_val);
} else {
return opt_val;

}
});
/**
* Returns JavaScript object for React DOM attributes from opts map
*/
om_tools.dom.format_opts = (function format_opts(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__17465){
var vec__17466 = p__17465;
var k = cljs.core.nth.call(null,vec__17466,(0),null);
var v = cljs.core.nth.call(null,vec__17466,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key.call(null,k),om_tools.dom.format_opt_val.call(null,v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_.call(null,form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_.call(null,form));
});
om_tools.dom.valid_element_QMARK_ = (function valid_element_QMARK_(x){
return (function (){var or__3755__auto__ = React.isValidElement;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function js_opts_QMARK_(x){
return (cljs.core.object_QMARK_.call(null,x)) && (!(om_tools.dom.valid_element_QMARK_.call(null,x)));
});
/**
* Returns a vector of [opts children] for from first and second
* argument given to DOM function
*/
om_tools.dom.element_args = (function element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts.call(null,opts),children], null);
} else {
if(om_tools.dom.js_opts_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons.call(null,opts,children)], null);

}
}
}
});
om_tools.dom.element = (function element(ctor,opts,children){
var vec__17468 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__17468,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__17468,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
/**
* @param {...*} var_args
*/
om_tools.dom.a = (function() {
var a = null;
var a__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});
var a__2 = (function() { 
var G__17469__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__7685__auto__,children__7686__auto__);
};
var G__17469 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17470__i = 0, G__17470__a = new Array(arguments.length -  1);
while (G__17470__i < G__17470__a.length) {G__17470__a[G__17470__i] = arguments[G__17470__i + 1]; ++G__17470__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17470__a,0);
} 
return G__17469__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17469.cljs$lang$maxFixedArity = 1;
G__17469.cljs$lang$applyTo = (function (arglist__17471){
var opts__7685__auto__ = cljs.core.first(arglist__17471);
var children__7686__auto__ = cljs.core.rest(arglist__17471);
return G__17469__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17469.cljs$core$IFn$_invoke$arity$variadic = G__17469__delegate;
return G__17469;
})()
;
a = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return a__0.call(this);
default:
var G__17472 = null;
if (arguments.length > 1) {
var G__17473__i = 0, G__17473__a = new Array(arguments.length -  1);
while (G__17473__i < G__17473__a.length) {G__17473__a[G__17473__i] = arguments[G__17473__i + 1]; ++G__17473__i;}
G__17472 = new cljs.core.IndexedSeq(G__17473__a,0);
}
return a__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
a.cljs$lang$maxFixedArity = 1;
a.cljs$lang$applyTo = a__2.cljs$lang$applyTo;
a.cljs$core$IFn$_invoke$arity$0 = a__0;
a.cljs$core$IFn$_invoke$arity$variadic = a__2.cljs$core$IFn$_invoke$arity$variadic;
return a;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.abbr = (function() {
var abbr = null;
var abbr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});
var abbr__2 = (function() { 
var G__17474__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__7685__auto__,children__7686__auto__);
};
var G__17474 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17475__i = 0, G__17475__a = new Array(arguments.length -  1);
while (G__17475__i < G__17475__a.length) {G__17475__a[G__17475__i] = arguments[G__17475__i + 1]; ++G__17475__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17475__a,0);
} 
return G__17474__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17474.cljs$lang$maxFixedArity = 1;
G__17474.cljs$lang$applyTo = (function (arglist__17476){
var opts__7685__auto__ = cljs.core.first(arglist__17476);
var children__7686__auto__ = cljs.core.rest(arglist__17476);
return G__17474__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17474.cljs$core$IFn$_invoke$arity$variadic = G__17474__delegate;
return G__17474;
})()
;
abbr = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return abbr__0.call(this);
default:
var G__17477 = null;
if (arguments.length > 1) {
var G__17478__i = 0, G__17478__a = new Array(arguments.length -  1);
while (G__17478__i < G__17478__a.length) {G__17478__a[G__17478__i] = arguments[G__17478__i + 1]; ++G__17478__i;}
G__17477 = new cljs.core.IndexedSeq(G__17478__a,0);
}
return abbr__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
abbr.cljs$lang$maxFixedArity = 1;
abbr.cljs$lang$applyTo = abbr__2.cljs$lang$applyTo;
abbr.cljs$core$IFn$_invoke$arity$0 = abbr__0;
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__2.cljs$core$IFn$_invoke$arity$variadic;
return abbr;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.address = (function() {
var address = null;
var address__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});
var address__2 = (function() { 
var G__17479__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__7685__auto__,children__7686__auto__);
};
var G__17479 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17480__i = 0, G__17480__a = new Array(arguments.length -  1);
while (G__17480__i < G__17480__a.length) {G__17480__a[G__17480__i] = arguments[G__17480__i + 1]; ++G__17480__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17480__a,0);
} 
return G__17479__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17479.cljs$lang$maxFixedArity = 1;
G__17479.cljs$lang$applyTo = (function (arglist__17481){
var opts__7685__auto__ = cljs.core.first(arglist__17481);
var children__7686__auto__ = cljs.core.rest(arglist__17481);
return G__17479__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17479.cljs$core$IFn$_invoke$arity$variadic = G__17479__delegate;
return G__17479;
})()
;
address = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return address__0.call(this);
default:
var G__17482 = null;
if (arguments.length > 1) {
var G__17483__i = 0, G__17483__a = new Array(arguments.length -  1);
while (G__17483__i < G__17483__a.length) {G__17483__a[G__17483__i] = arguments[G__17483__i + 1]; ++G__17483__i;}
G__17482 = new cljs.core.IndexedSeq(G__17483__a,0);
}
return address__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
address.cljs$lang$maxFixedArity = 1;
address.cljs$lang$applyTo = address__2.cljs$lang$applyTo;
address.cljs$core$IFn$_invoke$arity$0 = address__0;
address.cljs$core$IFn$_invoke$arity$variadic = address__2.cljs$core$IFn$_invoke$arity$variadic;
return address;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.area = (function() {
var area = null;
var area__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});
var area__2 = (function() { 
var G__17484__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__7685__auto__,children__7686__auto__);
};
var G__17484 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17485__i = 0, G__17485__a = new Array(arguments.length -  1);
while (G__17485__i < G__17485__a.length) {G__17485__a[G__17485__i] = arguments[G__17485__i + 1]; ++G__17485__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17485__a,0);
} 
return G__17484__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17484.cljs$lang$maxFixedArity = 1;
G__17484.cljs$lang$applyTo = (function (arglist__17486){
var opts__7685__auto__ = cljs.core.first(arglist__17486);
var children__7686__auto__ = cljs.core.rest(arglist__17486);
return G__17484__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17484.cljs$core$IFn$_invoke$arity$variadic = G__17484__delegate;
return G__17484;
})()
;
area = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return area__0.call(this);
default:
var G__17487 = null;
if (arguments.length > 1) {
var G__17488__i = 0, G__17488__a = new Array(arguments.length -  1);
while (G__17488__i < G__17488__a.length) {G__17488__a[G__17488__i] = arguments[G__17488__i + 1]; ++G__17488__i;}
G__17487 = new cljs.core.IndexedSeq(G__17488__a,0);
}
return area__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
area.cljs$lang$maxFixedArity = 1;
area.cljs$lang$applyTo = area__2.cljs$lang$applyTo;
area.cljs$core$IFn$_invoke$arity$0 = area__0;
area.cljs$core$IFn$_invoke$arity$variadic = area__2.cljs$core$IFn$_invoke$arity$variadic;
return area;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.article = (function() {
var article = null;
var article__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});
var article__2 = (function() { 
var G__17489__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__7685__auto__,children__7686__auto__);
};
var G__17489 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17490__i = 0, G__17490__a = new Array(arguments.length -  1);
while (G__17490__i < G__17490__a.length) {G__17490__a[G__17490__i] = arguments[G__17490__i + 1]; ++G__17490__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17490__a,0);
} 
return G__17489__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17489.cljs$lang$maxFixedArity = 1;
G__17489.cljs$lang$applyTo = (function (arglist__17491){
var opts__7685__auto__ = cljs.core.first(arglist__17491);
var children__7686__auto__ = cljs.core.rest(arglist__17491);
return G__17489__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17489.cljs$core$IFn$_invoke$arity$variadic = G__17489__delegate;
return G__17489;
})()
;
article = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return article__0.call(this);
default:
var G__17492 = null;
if (arguments.length > 1) {
var G__17493__i = 0, G__17493__a = new Array(arguments.length -  1);
while (G__17493__i < G__17493__a.length) {G__17493__a[G__17493__i] = arguments[G__17493__i + 1]; ++G__17493__i;}
G__17492 = new cljs.core.IndexedSeq(G__17493__a,0);
}
return article__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
article.cljs$lang$maxFixedArity = 1;
article.cljs$lang$applyTo = article__2.cljs$lang$applyTo;
article.cljs$core$IFn$_invoke$arity$0 = article__0;
article.cljs$core$IFn$_invoke$arity$variadic = article__2.cljs$core$IFn$_invoke$arity$variadic;
return article;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.aside = (function() {
var aside = null;
var aside__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});
var aside__2 = (function() { 
var G__17494__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__7685__auto__,children__7686__auto__);
};
var G__17494 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17495__i = 0, G__17495__a = new Array(arguments.length -  1);
while (G__17495__i < G__17495__a.length) {G__17495__a[G__17495__i] = arguments[G__17495__i + 1]; ++G__17495__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17495__a,0);
} 
return G__17494__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17494.cljs$lang$maxFixedArity = 1;
G__17494.cljs$lang$applyTo = (function (arglist__17496){
var opts__7685__auto__ = cljs.core.first(arglist__17496);
var children__7686__auto__ = cljs.core.rest(arglist__17496);
return G__17494__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17494.cljs$core$IFn$_invoke$arity$variadic = G__17494__delegate;
return G__17494;
})()
;
aside = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return aside__0.call(this);
default:
var G__17497 = null;
if (arguments.length > 1) {
var G__17498__i = 0, G__17498__a = new Array(arguments.length -  1);
while (G__17498__i < G__17498__a.length) {G__17498__a[G__17498__i] = arguments[G__17498__i + 1]; ++G__17498__i;}
G__17497 = new cljs.core.IndexedSeq(G__17498__a,0);
}
return aside__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aside.cljs$lang$maxFixedArity = 1;
aside.cljs$lang$applyTo = aside__2.cljs$lang$applyTo;
aside.cljs$core$IFn$_invoke$arity$0 = aside__0;
aside.cljs$core$IFn$_invoke$arity$variadic = aside__2.cljs$core$IFn$_invoke$arity$variadic;
return aside;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.audio = (function() {
var audio = null;
var audio__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});
var audio__2 = (function() { 
var G__17499__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__7685__auto__,children__7686__auto__);
};
var G__17499 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17500__i = 0, G__17500__a = new Array(arguments.length -  1);
while (G__17500__i < G__17500__a.length) {G__17500__a[G__17500__i] = arguments[G__17500__i + 1]; ++G__17500__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17500__a,0);
} 
return G__17499__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17499.cljs$lang$maxFixedArity = 1;
G__17499.cljs$lang$applyTo = (function (arglist__17501){
var opts__7685__auto__ = cljs.core.first(arglist__17501);
var children__7686__auto__ = cljs.core.rest(arglist__17501);
return G__17499__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17499.cljs$core$IFn$_invoke$arity$variadic = G__17499__delegate;
return G__17499;
})()
;
audio = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return audio__0.call(this);
default:
var G__17502 = null;
if (arguments.length > 1) {
var G__17503__i = 0, G__17503__a = new Array(arguments.length -  1);
while (G__17503__i < G__17503__a.length) {G__17503__a[G__17503__i] = arguments[G__17503__i + 1]; ++G__17503__i;}
G__17502 = new cljs.core.IndexedSeq(G__17503__a,0);
}
return audio__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
audio.cljs$lang$maxFixedArity = 1;
audio.cljs$lang$applyTo = audio__2.cljs$lang$applyTo;
audio.cljs$core$IFn$_invoke$arity$0 = audio__0;
audio.cljs$core$IFn$_invoke$arity$variadic = audio__2.cljs$core$IFn$_invoke$arity$variadic;
return audio;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.b = (function() {
var b = null;
var b__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});
var b__2 = (function() { 
var G__17504__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__7685__auto__,children__7686__auto__);
};
var G__17504 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17505__i = 0, G__17505__a = new Array(arguments.length -  1);
while (G__17505__i < G__17505__a.length) {G__17505__a[G__17505__i] = arguments[G__17505__i + 1]; ++G__17505__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17505__a,0);
} 
return G__17504__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17504.cljs$lang$maxFixedArity = 1;
G__17504.cljs$lang$applyTo = (function (arglist__17506){
var opts__7685__auto__ = cljs.core.first(arglist__17506);
var children__7686__auto__ = cljs.core.rest(arglist__17506);
return G__17504__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17504.cljs$core$IFn$_invoke$arity$variadic = G__17504__delegate;
return G__17504;
})()
;
b = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return b__0.call(this);
default:
var G__17507 = null;
if (arguments.length > 1) {
var G__17508__i = 0, G__17508__a = new Array(arguments.length -  1);
while (G__17508__i < G__17508__a.length) {G__17508__a[G__17508__i] = arguments[G__17508__i + 1]; ++G__17508__i;}
G__17507 = new cljs.core.IndexedSeq(G__17508__a,0);
}
return b__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
b.cljs$lang$maxFixedArity = 1;
b.cljs$lang$applyTo = b__2.cljs$lang$applyTo;
b.cljs$core$IFn$_invoke$arity$0 = b__0;
b.cljs$core$IFn$_invoke$arity$variadic = b__2.cljs$core$IFn$_invoke$arity$variadic;
return b;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.base = (function() {
var base = null;
var base__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});
var base__2 = (function() { 
var G__17509__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__7685__auto__,children__7686__auto__);
};
var G__17509 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17510__i = 0, G__17510__a = new Array(arguments.length -  1);
while (G__17510__i < G__17510__a.length) {G__17510__a[G__17510__i] = arguments[G__17510__i + 1]; ++G__17510__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17510__a,0);
} 
return G__17509__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17509.cljs$lang$maxFixedArity = 1;
G__17509.cljs$lang$applyTo = (function (arglist__17511){
var opts__7685__auto__ = cljs.core.first(arglist__17511);
var children__7686__auto__ = cljs.core.rest(arglist__17511);
return G__17509__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17509.cljs$core$IFn$_invoke$arity$variadic = G__17509__delegate;
return G__17509;
})()
;
base = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return base__0.call(this);
default:
var G__17512 = null;
if (arguments.length > 1) {
var G__17513__i = 0, G__17513__a = new Array(arguments.length -  1);
while (G__17513__i < G__17513__a.length) {G__17513__a[G__17513__i] = arguments[G__17513__i + 1]; ++G__17513__i;}
G__17512 = new cljs.core.IndexedSeq(G__17513__a,0);
}
return base__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
base.cljs$lang$maxFixedArity = 1;
base.cljs$lang$applyTo = base__2.cljs$lang$applyTo;
base.cljs$core$IFn$_invoke$arity$0 = base__0;
base.cljs$core$IFn$_invoke$arity$variadic = base__2.cljs$core$IFn$_invoke$arity$variadic;
return base;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.bdi = (function() {
var bdi = null;
var bdi__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});
var bdi__2 = (function() { 
var G__17514__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__7685__auto__,children__7686__auto__);
};
var G__17514 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17515__i = 0, G__17515__a = new Array(arguments.length -  1);
while (G__17515__i < G__17515__a.length) {G__17515__a[G__17515__i] = arguments[G__17515__i + 1]; ++G__17515__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17515__a,0);
} 
return G__17514__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17514.cljs$lang$maxFixedArity = 1;
G__17514.cljs$lang$applyTo = (function (arglist__17516){
var opts__7685__auto__ = cljs.core.first(arglist__17516);
var children__7686__auto__ = cljs.core.rest(arglist__17516);
return G__17514__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17514.cljs$core$IFn$_invoke$arity$variadic = G__17514__delegate;
return G__17514;
})()
;
bdi = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return bdi__0.call(this);
default:
var G__17517 = null;
if (arguments.length > 1) {
var G__17518__i = 0, G__17518__a = new Array(arguments.length -  1);
while (G__17518__i < G__17518__a.length) {G__17518__a[G__17518__i] = arguments[G__17518__i + 1]; ++G__17518__i;}
G__17517 = new cljs.core.IndexedSeq(G__17518__a,0);
}
return bdi__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bdi.cljs$lang$maxFixedArity = 1;
bdi.cljs$lang$applyTo = bdi__2.cljs$lang$applyTo;
bdi.cljs$core$IFn$_invoke$arity$0 = bdi__0;
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__2.cljs$core$IFn$_invoke$arity$variadic;
return bdi;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.bdo = (function() {
var bdo = null;
var bdo__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});
var bdo__2 = (function() { 
var G__17519__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__7685__auto__,children__7686__auto__);
};
var G__17519 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17520__i = 0, G__17520__a = new Array(arguments.length -  1);
while (G__17520__i < G__17520__a.length) {G__17520__a[G__17520__i] = arguments[G__17520__i + 1]; ++G__17520__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17520__a,0);
} 
return G__17519__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17519.cljs$lang$maxFixedArity = 1;
G__17519.cljs$lang$applyTo = (function (arglist__17521){
var opts__7685__auto__ = cljs.core.first(arglist__17521);
var children__7686__auto__ = cljs.core.rest(arglist__17521);
return G__17519__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17519.cljs$core$IFn$_invoke$arity$variadic = G__17519__delegate;
return G__17519;
})()
;
bdo = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return bdo__0.call(this);
default:
var G__17522 = null;
if (arguments.length > 1) {
var G__17523__i = 0, G__17523__a = new Array(arguments.length -  1);
while (G__17523__i < G__17523__a.length) {G__17523__a[G__17523__i] = arguments[G__17523__i + 1]; ++G__17523__i;}
G__17522 = new cljs.core.IndexedSeq(G__17523__a,0);
}
return bdo__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bdo.cljs$lang$maxFixedArity = 1;
bdo.cljs$lang$applyTo = bdo__2.cljs$lang$applyTo;
bdo.cljs$core$IFn$_invoke$arity$0 = bdo__0;
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__2.cljs$core$IFn$_invoke$arity$variadic;
return bdo;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.big = (function() {
var big = null;
var big__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});
var big__2 = (function() { 
var G__17524__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__7685__auto__,children__7686__auto__);
};
var G__17524 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17525__i = 0, G__17525__a = new Array(arguments.length -  1);
while (G__17525__i < G__17525__a.length) {G__17525__a[G__17525__i] = arguments[G__17525__i + 1]; ++G__17525__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17525__a,0);
} 
return G__17524__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17524.cljs$lang$maxFixedArity = 1;
G__17524.cljs$lang$applyTo = (function (arglist__17526){
var opts__7685__auto__ = cljs.core.first(arglist__17526);
var children__7686__auto__ = cljs.core.rest(arglist__17526);
return G__17524__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17524.cljs$core$IFn$_invoke$arity$variadic = G__17524__delegate;
return G__17524;
})()
;
big = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return big__0.call(this);
default:
var G__17527 = null;
if (arguments.length > 1) {
var G__17528__i = 0, G__17528__a = new Array(arguments.length -  1);
while (G__17528__i < G__17528__a.length) {G__17528__a[G__17528__i] = arguments[G__17528__i + 1]; ++G__17528__i;}
G__17527 = new cljs.core.IndexedSeq(G__17528__a,0);
}
return big__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
big.cljs$lang$maxFixedArity = 1;
big.cljs$lang$applyTo = big__2.cljs$lang$applyTo;
big.cljs$core$IFn$_invoke$arity$0 = big__0;
big.cljs$core$IFn$_invoke$arity$variadic = big__2.cljs$core$IFn$_invoke$arity$variadic;
return big;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.blockquote = (function() {
var blockquote = null;
var blockquote__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});
var blockquote__2 = (function() { 
var G__17529__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__7685__auto__,children__7686__auto__);
};
var G__17529 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17530__i = 0, G__17530__a = new Array(arguments.length -  1);
while (G__17530__i < G__17530__a.length) {G__17530__a[G__17530__i] = arguments[G__17530__i + 1]; ++G__17530__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17530__a,0);
} 
return G__17529__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17529.cljs$lang$maxFixedArity = 1;
G__17529.cljs$lang$applyTo = (function (arglist__17531){
var opts__7685__auto__ = cljs.core.first(arglist__17531);
var children__7686__auto__ = cljs.core.rest(arglist__17531);
return G__17529__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17529.cljs$core$IFn$_invoke$arity$variadic = G__17529__delegate;
return G__17529;
})()
;
blockquote = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return blockquote__0.call(this);
default:
var G__17532 = null;
if (arguments.length > 1) {
var G__17533__i = 0, G__17533__a = new Array(arguments.length -  1);
while (G__17533__i < G__17533__a.length) {G__17533__a[G__17533__i] = arguments[G__17533__i + 1]; ++G__17533__i;}
G__17532 = new cljs.core.IndexedSeq(G__17533__a,0);
}
return blockquote__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
blockquote.cljs$lang$maxFixedArity = 1;
blockquote.cljs$lang$applyTo = blockquote__2.cljs$lang$applyTo;
blockquote.cljs$core$IFn$_invoke$arity$0 = blockquote__0;
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__2.cljs$core$IFn$_invoke$arity$variadic;
return blockquote;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.body = (function() {
var body = null;
var body__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});
var body__2 = (function() { 
var G__17534__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__7685__auto__,children__7686__auto__);
};
var G__17534 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17535__i = 0, G__17535__a = new Array(arguments.length -  1);
while (G__17535__i < G__17535__a.length) {G__17535__a[G__17535__i] = arguments[G__17535__i + 1]; ++G__17535__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17535__a,0);
} 
return G__17534__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17534.cljs$lang$maxFixedArity = 1;
G__17534.cljs$lang$applyTo = (function (arglist__17536){
var opts__7685__auto__ = cljs.core.first(arglist__17536);
var children__7686__auto__ = cljs.core.rest(arglist__17536);
return G__17534__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17534.cljs$core$IFn$_invoke$arity$variadic = G__17534__delegate;
return G__17534;
})()
;
body = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return body__0.call(this);
default:
var G__17537 = null;
if (arguments.length > 1) {
var G__17538__i = 0, G__17538__a = new Array(arguments.length -  1);
while (G__17538__i < G__17538__a.length) {G__17538__a[G__17538__i] = arguments[G__17538__i + 1]; ++G__17538__i;}
G__17537 = new cljs.core.IndexedSeq(G__17538__a,0);
}
return body__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
body.cljs$lang$maxFixedArity = 1;
body.cljs$lang$applyTo = body__2.cljs$lang$applyTo;
body.cljs$core$IFn$_invoke$arity$0 = body__0;
body.cljs$core$IFn$_invoke$arity$variadic = body__2.cljs$core$IFn$_invoke$arity$variadic;
return body;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.br = (function() {
var br = null;
var br__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});
var br__2 = (function() { 
var G__17539__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__7685__auto__,children__7686__auto__);
};
var G__17539 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17540__i = 0, G__17540__a = new Array(arguments.length -  1);
while (G__17540__i < G__17540__a.length) {G__17540__a[G__17540__i] = arguments[G__17540__i + 1]; ++G__17540__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17540__a,0);
} 
return G__17539__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17539.cljs$lang$maxFixedArity = 1;
G__17539.cljs$lang$applyTo = (function (arglist__17541){
var opts__7685__auto__ = cljs.core.first(arglist__17541);
var children__7686__auto__ = cljs.core.rest(arglist__17541);
return G__17539__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17539.cljs$core$IFn$_invoke$arity$variadic = G__17539__delegate;
return G__17539;
})()
;
br = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return br__0.call(this);
default:
var G__17542 = null;
if (arguments.length > 1) {
var G__17543__i = 0, G__17543__a = new Array(arguments.length -  1);
while (G__17543__i < G__17543__a.length) {G__17543__a[G__17543__i] = arguments[G__17543__i + 1]; ++G__17543__i;}
G__17542 = new cljs.core.IndexedSeq(G__17543__a,0);
}
return br__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
br.cljs$lang$maxFixedArity = 1;
br.cljs$lang$applyTo = br__2.cljs$lang$applyTo;
br.cljs$core$IFn$_invoke$arity$0 = br__0;
br.cljs$core$IFn$_invoke$arity$variadic = br__2.cljs$core$IFn$_invoke$arity$variadic;
return br;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.button = (function() {
var button = null;
var button__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});
var button__2 = (function() { 
var G__17544__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__7685__auto__,children__7686__auto__);
};
var G__17544 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17545__i = 0, G__17545__a = new Array(arguments.length -  1);
while (G__17545__i < G__17545__a.length) {G__17545__a[G__17545__i] = arguments[G__17545__i + 1]; ++G__17545__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17545__a,0);
} 
return G__17544__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17544.cljs$lang$maxFixedArity = 1;
G__17544.cljs$lang$applyTo = (function (arglist__17546){
var opts__7685__auto__ = cljs.core.first(arglist__17546);
var children__7686__auto__ = cljs.core.rest(arglist__17546);
return G__17544__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17544.cljs$core$IFn$_invoke$arity$variadic = G__17544__delegate;
return G__17544;
})()
;
button = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return button__0.call(this);
default:
var G__17547 = null;
if (arguments.length > 1) {
var G__17548__i = 0, G__17548__a = new Array(arguments.length -  1);
while (G__17548__i < G__17548__a.length) {G__17548__a[G__17548__i] = arguments[G__17548__i + 1]; ++G__17548__i;}
G__17547 = new cljs.core.IndexedSeq(G__17548__a,0);
}
return button__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
button.cljs$lang$maxFixedArity = 1;
button.cljs$lang$applyTo = button__2.cljs$lang$applyTo;
button.cljs$core$IFn$_invoke$arity$0 = button__0;
button.cljs$core$IFn$_invoke$arity$variadic = button__2.cljs$core$IFn$_invoke$arity$variadic;
return button;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.canvas = (function() {
var canvas = null;
var canvas__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});
var canvas__2 = (function() { 
var G__17549__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__7685__auto__,children__7686__auto__);
};
var G__17549 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17550__i = 0, G__17550__a = new Array(arguments.length -  1);
while (G__17550__i < G__17550__a.length) {G__17550__a[G__17550__i] = arguments[G__17550__i + 1]; ++G__17550__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17550__a,0);
} 
return G__17549__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17549.cljs$lang$maxFixedArity = 1;
G__17549.cljs$lang$applyTo = (function (arglist__17551){
var opts__7685__auto__ = cljs.core.first(arglist__17551);
var children__7686__auto__ = cljs.core.rest(arglist__17551);
return G__17549__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17549.cljs$core$IFn$_invoke$arity$variadic = G__17549__delegate;
return G__17549;
})()
;
canvas = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return canvas__0.call(this);
default:
var G__17552 = null;
if (arguments.length > 1) {
var G__17553__i = 0, G__17553__a = new Array(arguments.length -  1);
while (G__17553__i < G__17553__a.length) {G__17553__a[G__17553__i] = arguments[G__17553__i + 1]; ++G__17553__i;}
G__17552 = new cljs.core.IndexedSeq(G__17553__a,0);
}
return canvas__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canvas.cljs$lang$maxFixedArity = 1;
canvas.cljs$lang$applyTo = canvas__2.cljs$lang$applyTo;
canvas.cljs$core$IFn$_invoke$arity$0 = canvas__0;
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__2.cljs$core$IFn$_invoke$arity$variadic;
return canvas;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.caption = (function() {
var caption = null;
var caption__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});
var caption__2 = (function() { 
var G__17554__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__7685__auto__,children__7686__auto__);
};
var G__17554 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17555__i = 0, G__17555__a = new Array(arguments.length -  1);
while (G__17555__i < G__17555__a.length) {G__17555__a[G__17555__i] = arguments[G__17555__i + 1]; ++G__17555__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17555__a,0);
} 
return G__17554__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17554.cljs$lang$maxFixedArity = 1;
G__17554.cljs$lang$applyTo = (function (arglist__17556){
var opts__7685__auto__ = cljs.core.first(arglist__17556);
var children__7686__auto__ = cljs.core.rest(arglist__17556);
return G__17554__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17554.cljs$core$IFn$_invoke$arity$variadic = G__17554__delegate;
return G__17554;
})()
;
caption = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return caption__0.call(this);
default:
var G__17557 = null;
if (arguments.length > 1) {
var G__17558__i = 0, G__17558__a = new Array(arguments.length -  1);
while (G__17558__i < G__17558__a.length) {G__17558__a[G__17558__i] = arguments[G__17558__i + 1]; ++G__17558__i;}
G__17557 = new cljs.core.IndexedSeq(G__17558__a,0);
}
return caption__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
caption.cljs$lang$maxFixedArity = 1;
caption.cljs$lang$applyTo = caption__2.cljs$lang$applyTo;
caption.cljs$core$IFn$_invoke$arity$0 = caption__0;
caption.cljs$core$IFn$_invoke$arity$variadic = caption__2.cljs$core$IFn$_invoke$arity$variadic;
return caption;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.cite = (function() {
var cite = null;
var cite__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});
var cite__2 = (function() { 
var G__17559__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__7685__auto__,children__7686__auto__);
};
var G__17559 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17560__i = 0, G__17560__a = new Array(arguments.length -  1);
while (G__17560__i < G__17560__a.length) {G__17560__a[G__17560__i] = arguments[G__17560__i + 1]; ++G__17560__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17560__a,0);
} 
return G__17559__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17559.cljs$lang$maxFixedArity = 1;
G__17559.cljs$lang$applyTo = (function (arglist__17561){
var opts__7685__auto__ = cljs.core.first(arglist__17561);
var children__7686__auto__ = cljs.core.rest(arglist__17561);
return G__17559__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17559.cljs$core$IFn$_invoke$arity$variadic = G__17559__delegate;
return G__17559;
})()
;
cite = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return cite__0.call(this);
default:
var G__17562 = null;
if (arguments.length > 1) {
var G__17563__i = 0, G__17563__a = new Array(arguments.length -  1);
while (G__17563__i < G__17563__a.length) {G__17563__a[G__17563__i] = arguments[G__17563__i + 1]; ++G__17563__i;}
G__17562 = new cljs.core.IndexedSeq(G__17563__a,0);
}
return cite__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cite.cljs$lang$maxFixedArity = 1;
cite.cljs$lang$applyTo = cite__2.cljs$lang$applyTo;
cite.cljs$core$IFn$_invoke$arity$0 = cite__0;
cite.cljs$core$IFn$_invoke$arity$variadic = cite__2.cljs$core$IFn$_invoke$arity$variadic;
return cite;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.code = (function() {
var code = null;
var code__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});
var code__2 = (function() { 
var G__17564__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__7685__auto__,children__7686__auto__);
};
var G__17564 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17565__i = 0, G__17565__a = new Array(arguments.length -  1);
while (G__17565__i < G__17565__a.length) {G__17565__a[G__17565__i] = arguments[G__17565__i + 1]; ++G__17565__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17565__a,0);
} 
return G__17564__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17564.cljs$lang$maxFixedArity = 1;
G__17564.cljs$lang$applyTo = (function (arglist__17566){
var opts__7685__auto__ = cljs.core.first(arglist__17566);
var children__7686__auto__ = cljs.core.rest(arglist__17566);
return G__17564__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17564.cljs$core$IFn$_invoke$arity$variadic = G__17564__delegate;
return G__17564;
})()
;
code = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return code__0.call(this);
default:
var G__17567 = null;
if (arguments.length > 1) {
var G__17568__i = 0, G__17568__a = new Array(arguments.length -  1);
while (G__17568__i < G__17568__a.length) {G__17568__a[G__17568__i] = arguments[G__17568__i + 1]; ++G__17568__i;}
G__17567 = new cljs.core.IndexedSeq(G__17568__a,0);
}
return code__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
code.cljs$lang$maxFixedArity = 1;
code.cljs$lang$applyTo = code__2.cljs$lang$applyTo;
code.cljs$core$IFn$_invoke$arity$0 = code__0;
code.cljs$core$IFn$_invoke$arity$variadic = code__2.cljs$core$IFn$_invoke$arity$variadic;
return code;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.col = (function() {
var col = null;
var col__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});
var col__2 = (function() { 
var G__17569__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__7685__auto__,children__7686__auto__);
};
var G__17569 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17570__i = 0, G__17570__a = new Array(arguments.length -  1);
while (G__17570__i < G__17570__a.length) {G__17570__a[G__17570__i] = arguments[G__17570__i + 1]; ++G__17570__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17570__a,0);
} 
return G__17569__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17569.cljs$lang$maxFixedArity = 1;
G__17569.cljs$lang$applyTo = (function (arglist__17571){
var opts__7685__auto__ = cljs.core.first(arglist__17571);
var children__7686__auto__ = cljs.core.rest(arglist__17571);
return G__17569__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17569.cljs$core$IFn$_invoke$arity$variadic = G__17569__delegate;
return G__17569;
})()
;
col = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return col__0.call(this);
default:
var G__17572 = null;
if (arguments.length > 1) {
var G__17573__i = 0, G__17573__a = new Array(arguments.length -  1);
while (G__17573__i < G__17573__a.length) {G__17573__a[G__17573__i] = arguments[G__17573__i + 1]; ++G__17573__i;}
G__17572 = new cljs.core.IndexedSeq(G__17573__a,0);
}
return col__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
col.cljs$lang$maxFixedArity = 1;
col.cljs$lang$applyTo = col__2.cljs$lang$applyTo;
col.cljs$core$IFn$_invoke$arity$0 = col__0;
col.cljs$core$IFn$_invoke$arity$variadic = col__2.cljs$core$IFn$_invoke$arity$variadic;
return col;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.colgroup = (function() {
var colgroup = null;
var colgroup__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});
var colgroup__2 = (function() { 
var G__17574__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__7685__auto__,children__7686__auto__);
};
var G__17574 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17575__i = 0, G__17575__a = new Array(arguments.length -  1);
while (G__17575__i < G__17575__a.length) {G__17575__a[G__17575__i] = arguments[G__17575__i + 1]; ++G__17575__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17575__a,0);
} 
return G__17574__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17574.cljs$lang$maxFixedArity = 1;
G__17574.cljs$lang$applyTo = (function (arglist__17576){
var opts__7685__auto__ = cljs.core.first(arglist__17576);
var children__7686__auto__ = cljs.core.rest(arglist__17576);
return G__17574__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17574.cljs$core$IFn$_invoke$arity$variadic = G__17574__delegate;
return G__17574;
})()
;
colgroup = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return colgroup__0.call(this);
default:
var G__17577 = null;
if (arguments.length > 1) {
var G__17578__i = 0, G__17578__a = new Array(arguments.length -  1);
while (G__17578__i < G__17578__a.length) {G__17578__a[G__17578__i] = arguments[G__17578__i + 1]; ++G__17578__i;}
G__17577 = new cljs.core.IndexedSeq(G__17578__a,0);
}
return colgroup__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
colgroup.cljs$lang$maxFixedArity = 1;
colgroup.cljs$lang$applyTo = colgroup__2.cljs$lang$applyTo;
colgroup.cljs$core$IFn$_invoke$arity$0 = colgroup__0;
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__2.cljs$core$IFn$_invoke$arity$variadic;
return colgroup;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.data = (function() {
var data = null;
var data__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});
var data__2 = (function() { 
var G__17579__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__7685__auto__,children__7686__auto__);
};
var G__17579 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17580__i = 0, G__17580__a = new Array(arguments.length -  1);
while (G__17580__i < G__17580__a.length) {G__17580__a[G__17580__i] = arguments[G__17580__i + 1]; ++G__17580__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17580__a,0);
} 
return G__17579__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17579.cljs$lang$maxFixedArity = 1;
G__17579.cljs$lang$applyTo = (function (arglist__17581){
var opts__7685__auto__ = cljs.core.first(arglist__17581);
var children__7686__auto__ = cljs.core.rest(arglist__17581);
return G__17579__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17579.cljs$core$IFn$_invoke$arity$variadic = G__17579__delegate;
return G__17579;
})()
;
data = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return data__0.call(this);
default:
var G__17582 = null;
if (arguments.length > 1) {
var G__17583__i = 0, G__17583__a = new Array(arguments.length -  1);
while (G__17583__i < G__17583__a.length) {G__17583__a[G__17583__i] = arguments[G__17583__i + 1]; ++G__17583__i;}
G__17582 = new cljs.core.IndexedSeq(G__17583__a,0);
}
return data__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
data.cljs$lang$maxFixedArity = 1;
data.cljs$lang$applyTo = data__2.cljs$lang$applyTo;
data.cljs$core$IFn$_invoke$arity$0 = data__0;
data.cljs$core$IFn$_invoke$arity$variadic = data__2.cljs$core$IFn$_invoke$arity$variadic;
return data;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.datalist = (function() {
var datalist = null;
var datalist__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});
var datalist__2 = (function() { 
var G__17584__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__7685__auto__,children__7686__auto__);
};
var G__17584 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17585__i = 0, G__17585__a = new Array(arguments.length -  1);
while (G__17585__i < G__17585__a.length) {G__17585__a[G__17585__i] = arguments[G__17585__i + 1]; ++G__17585__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17585__a,0);
} 
return G__17584__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17584.cljs$lang$maxFixedArity = 1;
G__17584.cljs$lang$applyTo = (function (arglist__17586){
var opts__7685__auto__ = cljs.core.first(arglist__17586);
var children__7686__auto__ = cljs.core.rest(arglist__17586);
return G__17584__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17584.cljs$core$IFn$_invoke$arity$variadic = G__17584__delegate;
return G__17584;
})()
;
datalist = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return datalist__0.call(this);
default:
var G__17587 = null;
if (arguments.length > 1) {
var G__17588__i = 0, G__17588__a = new Array(arguments.length -  1);
while (G__17588__i < G__17588__a.length) {G__17588__a[G__17588__i] = arguments[G__17588__i + 1]; ++G__17588__i;}
G__17587 = new cljs.core.IndexedSeq(G__17588__a,0);
}
return datalist__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datalist.cljs$lang$maxFixedArity = 1;
datalist.cljs$lang$applyTo = datalist__2.cljs$lang$applyTo;
datalist.cljs$core$IFn$_invoke$arity$0 = datalist__0;
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__2.cljs$core$IFn$_invoke$arity$variadic;
return datalist;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.dd = (function() {
var dd = null;
var dd__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});
var dd__2 = (function() { 
var G__17589__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__7685__auto__,children__7686__auto__);
};
var G__17589 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17590__i = 0, G__17590__a = new Array(arguments.length -  1);
while (G__17590__i < G__17590__a.length) {G__17590__a[G__17590__i] = arguments[G__17590__i + 1]; ++G__17590__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17590__a,0);
} 
return G__17589__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17589.cljs$lang$maxFixedArity = 1;
G__17589.cljs$lang$applyTo = (function (arglist__17591){
var opts__7685__auto__ = cljs.core.first(arglist__17591);
var children__7686__auto__ = cljs.core.rest(arglist__17591);
return G__17589__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17589.cljs$core$IFn$_invoke$arity$variadic = G__17589__delegate;
return G__17589;
})()
;
dd = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return dd__0.call(this);
default:
var G__17592 = null;
if (arguments.length > 1) {
var G__17593__i = 0, G__17593__a = new Array(arguments.length -  1);
while (G__17593__i < G__17593__a.length) {G__17593__a[G__17593__i] = arguments[G__17593__i + 1]; ++G__17593__i;}
G__17592 = new cljs.core.IndexedSeq(G__17593__a,0);
}
return dd__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dd.cljs$lang$maxFixedArity = 1;
dd.cljs$lang$applyTo = dd__2.cljs$lang$applyTo;
dd.cljs$core$IFn$_invoke$arity$0 = dd__0;
dd.cljs$core$IFn$_invoke$arity$variadic = dd__2.cljs$core$IFn$_invoke$arity$variadic;
return dd;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.del = (function() {
var del = null;
var del__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});
var del__2 = (function() { 
var G__17594__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__7685__auto__,children__7686__auto__);
};
var G__17594 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17595__i = 0, G__17595__a = new Array(arguments.length -  1);
while (G__17595__i < G__17595__a.length) {G__17595__a[G__17595__i] = arguments[G__17595__i + 1]; ++G__17595__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17595__a,0);
} 
return G__17594__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17594.cljs$lang$maxFixedArity = 1;
G__17594.cljs$lang$applyTo = (function (arglist__17596){
var opts__7685__auto__ = cljs.core.first(arglist__17596);
var children__7686__auto__ = cljs.core.rest(arglist__17596);
return G__17594__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17594.cljs$core$IFn$_invoke$arity$variadic = G__17594__delegate;
return G__17594;
})()
;
del = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return del__0.call(this);
default:
var G__17597 = null;
if (arguments.length > 1) {
var G__17598__i = 0, G__17598__a = new Array(arguments.length -  1);
while (G__17598__i < G__17598__a.length) {G__17598__a[G__17598__i] = arguments[G__17598__i + 1]; ++G__17598__i;}
G__17597 = new cljs.core.IndexedSeq(G__17598__a,0);
}
return del__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
del.cljs$lang$maxFixedArity = 1;
del.cljs$lang$applyTo = del__2.cljs$lang$applyTo;
del.cljs$core$IFn$_invoke$arity$0 = del__0;
del.cljs$core$IFn$_invoke$arity$variadic = del__2.cljs$core$IFn$_invoke$arity$variadic;
return del;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.dfn = (function() {
var dfn = null;
var dfn__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});
var dfn__2 = (function() { 
var G__17599__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__7685__auto__,children__7686__auto__);
};
var G__17599 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17600__i = 0, G__17600__a = new Array(arguments.length -  1);
while (G__17600__i < G__17600__a.length) {G__17600__a[G__17600__i] = arguments[G__17600__i + 1]; ++G__17600__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17600__a,0);
} 
return G__17599__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17599.cljs$lang$maxFixedArity = 1;
G__17599.cljs$lang$applyTo = (function (arglist__17601){
var opts__7685__auto__ = cljs.core.first(arglist__17601);
var children__7686__auto__ = cljs.core.rest(arglist__17601);
return G__17599__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17599.cljs$core$IFn$_invoke$arity$variadic = G__17599__delegate;
return G__17599;
})()
;
dfn = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return dfn__0.call(this);
default:
var G__17602 = null;
if (arguments.length > 1) {
var G__17603__i = 0, G__17603__a = new Array(arguments.length -  1);
while (G__17603__i < G__17603__a.length) {G__17603__a[G__17603__i] = arguments[G__17603__i + 1]; ++G__17603__i;}
G__17602 = new cljs.core.IndexedSeq(G__17603__a,0);
}
return dfn__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dfn.cljs$lang$maxFixedArity = 1;
dfn.cljs$lang$applyTo = dfn__2.cljs$lang$applyTo;
dfn.cljs$core$IFn$_invoke$arity$0 = dfn__0;
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__2.cljs$core$IFn$_invoke$arity$variadic;
return dfn;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.div = (function() {
var div = null;
var div__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});
var div__2 = (function() { 
var G__17604__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__7685__auto__,children__7686__auto__);
};
var G__17604 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17605__i = 0, G__17605__a = new Array(arguments.length -  1);
while (G__17605__i < G__17605__a.length) {G__17605__a[G__17605__i] = arguments[G__17605__i + 1]; ++G__17605__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17605__a,0);
} 
return G__17604__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17604.cljs$lang$maxFixedArity = 1;
G__17604.cljs$lang$applyTo = (function (arglist__17606){
var opts__7685__auto__ = cljs.core.first(arglist__17606);
var children__7686__auto__ = cljs.core.rest(arglist__17606);
return G__17604__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17604.cljs$core$IFn$_invoke$arity$variadic = G__17604__delegate;
return G__17604;
})()
;
div = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return div__0.call(this);
default:
var G__17607 = null;
if (arguments.length > 1) {
var G__17608__i = 0, G__17608__a = new Array(arguments.length -  1);
while (G__17608__i < G__17608__a.length) {G__17608__a[G__17608__i] = arguments[G__17608__i + 1]; ++G__17608__i;}
G__17607 = new cljs.core.IndexedSeq(G__17608__a,0);
}
return div__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
div.cljs$lang$maxFixedArity = 1;
div.cljs$lang$applyTo = div__2.cljs$lang$applyTo;
div.cljs$core$IFn$_invoke$arity$0 = div__0;
div.cljs$core$IFn$_invoke$arity$variadic = div__2.cljs$core$IFn$_invoke$arity$variadic;
return div;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.dl = (function() {
var dl = null;
var dl__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});
var dl__2 = (function() { 
var G__17609__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__7685__auto__,children__7686__auto__);
};
var G__17609 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17610__i = 0, G__17610__a = new Array(arguments.length -  1);
while (G__17610__i < G__17610__a.length) {G__17610__a[G__17610__i] = arguments[G__17610__i + 1]; ++G__17610__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17610__a,0);
} 
return G__17609__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17609.cljs$lang$maxFixedArity = 1;
G__17609.cljs$lang$applyTo = (function (arglist__17611){
var opts__7685__auto__ = cljs.core.first(arglist__17611);
var children__7686__auto__ = cljs.core.rest(arglist__17611);
return G__17609__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17609.cljs$core$IFn$_invoke$arity$variadic = G__17609__delegate;
return G__17609;
})()
;
dl = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return dl__0.call(this);
default:
var G__17612 = null;
if (arguments.length > 1) {
var G__17613__i = 0, G__17613__a = new Array(arguments.length -  1);
while (G__17613__i < G__17613__a.length) {G__17613__a[G__17613__i] = arguments[G__17613__i + 1]; ++G__17613__i;}
G__17612 = new cljs.core.IndexedSeq(G__17613__a,0);
}
return dl__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dl.cljs$lang$maxFixedArity = 1;
dl.cljs$lang$applyTo = dl__2.cljs$lang$applyTo;
dl.cljs$core$IFn$_invoke$arity$0 = dl__0;
dl.cljs$core$IFn$_invoke$arity$variadic = dl__2.cljs$core$IFn$_invoke$arity$variadic;
return dl;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.dt = (function() {
var dt = null;
var dt__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});
var dt__2 = (function() { 
var G__17614__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__7685__auto__,children__7686__auto__);
};
var G__17614 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17615__i = 0, G__17615__a = new Array(arguments.length -  1);
while (G__17615__i < G__17615__a.length) {G__17615__a[G__17615__i] = arguments[G__17615__i + 1]; ++G__17615__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17615__a,0);
} 
return G__17614__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17614.cljs$lang$maxFixedArity = 1;
G__17614.cljs$lang$applyTo = (function (arglist__17616){
var opts__7685__auto__ = cljs.core.first(arglist__17616);
var children__7686__auto__ = cljs.core.rest(arglist__17616);
return G__17614__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17614.cljs$core$IFn$_invoke$arity$variadic = G__17614__delegate;
return G__17614;
})()
;
dt = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return dt__0.call(this);
default:
var G__17617 = null;
if (arguments.length > 1) {
var G__17618__i = 0, G__17618__a = new Array(arguments.length -  1);
while (G__17618__i < G__17618__a.length) {G__17618__a[G__17618__i] = arguments[G__17618__i + 1]; ++G__17618__i;}
G__17617 = new cljs.core.IndexedSeq(G__17618__a,0);
}
return dt__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dt.cljs$lang$maxFixedArity = 1;
dt.cljs$lang$applyTo = dt__2.cljs$lang$applyTo;
dt.cljs$core$IFn$_invoke$arity$0 = dt__0;
dt.cljs$core$IFn$_invoke$arity$variadic = dt__2.cljs$core$IFn$_invoke$arity$variadic;
return dt;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.em = (function() {
var em = null;
var em__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});
var em__2 = (function() { 
var G__17619__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__7685__auto__,children__7686__auto__);
};
var G__17619 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17620__i = 0, G__17620__a = new Array(arguments.length -  1);
while (G__17620__i < G__17620__a.length) {G__17620__a[G__17620__i] = arguments[G__17620__i + 1]; ++G__17620__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17620__a,0);
} 
return G__17619__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17619.cljs$lang$maxFixedArity = 1;
G__17619.cljs$lang$applyTo = (function (arglist__17621){
var opts__7685__auto__ = cljs.core.first(arglist__17621);
var children__7686__auto__ = cljs.core.rest(arglist__17621);
return G__17619__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17619.cljs$core$IFn$_invoke$arity$variadic = G__17619__delegate;
return G__17619;
})()
;
em = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return em__0.call(this);
default:
var G__17622 = null;
if (arguments.length > 1) {
var G__17623__i = 0, G__17623__a = new Array(arguments.length -  1);
while (G__17623__i < G__17623__a.length) {G__17623__a[G__17623__i] = arguments[G__17623__i + 1]; ++G__17623__i;}
G__17622 = new cljs.core.IndexedSeq(G__17623__a,0);
}
return em__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
em.cljs$lang$maxFixedArity = 1;
em.cljs$lang$applyTo = em__2.cljs$lang$applyTo;
em.cljs$core$IFn$_invoke$arity$0 = em__0;
em.cljs$core$IFn$_invoke$arity$variadic = em__2.cljs$core$IFn$_invoke$arity$variadic;
return em;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.embed = (function() {
var embed = null;
var embed__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});
var embed__2 = (function() { 
var G__17624__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__7685__auto__,children__7686__auto__);
};
var G__17624 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17625__i = 0, G__17625__a = new Array(arguments.length -  1);
while (G__17625__i < G__17625__a.length) {G__17625__a[G__17625__i] = arguments[G__17625__i + 1]; ++G__17625__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17625__a,0);
} 
return G__17624__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17624.cljs$lang$maxFixedArity = 1;
G__17624.cljs$lang$applyTo = (function (arglist__17626){
var opts__7685__auto__ = cljs.core.first(arglist__17626);
var children__7686__auto__ = cljs.core.rest(arglist__17626);
return G__17624__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17624.cljs$core$IFn$_invoke$arity$variadic = G__17624__delegate;
return G__17624;
})()
;
embed = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return embed__0.call(this);
default:
var G__17627 = null;
if (arguments.length > 1) {
var G__17628__i = 0, G__17628__a = new Array(arguments.length -  1);
while (G__17628__i < G__17628__a.length) {G__17628__a[G__17628__i] = arguments[G__17628__i + 1]; ++G__17628__i;}
G__17627 = new cljs.core.IndexedSeq(G__17628__a,0);
}
return embed__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
embed.cljs$lang$maxFixedArity = 1;
embed.cljs$lang$applyTo = embed__2.cljs$lang$applyTo;
embed.cljs$core$IFn$_invoke$arity$0 = embed__0;
embed.cljs$core$IFn$_invoke$arity$variadic = embed__2.cljs$core$IFn$_invoke$arity$variadic;
return embed;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.fieldset = (function() {
var fieldset = null;
var fieldset__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});
var fieldset__2 = (function() { 
var G__17629__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__7685__auto__,children__7686__auto__);
};
var G__17629 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17630__i = 0, G__17630__a = new Array(arguments.length -  1);
while (G__17630__i < G__17630__a.length) {G__17630__a[G__17630__i] = arguments[G__17630__i + 1]; ++G__17630__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17630__a,0);
} 
return G__17629__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17629.cljs$lang$maxFixedArity = 1;
G__17629.cljs$lang$applyTo = (function (arglist__17631){
var opts__7685__auto__ = cljs.core.first(arglist__17631);
var children__7686__auto__ = cljs.core.rest(arglist__17631);
return G__17629__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17629.cljs$core$IFn$_invoke$arity$variadic = G__17629__delegate;
return G__17629;
})()
;
fieldset = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return fieldset__0.call(this);
default:
var G__17632 = null;
if (arguments.length > 1) {
var G__17633__i = 0, G__17633__a = new Array(arguments.length -  1);
while (G__17633__i < G__17633__a.length) {G__17633__a[G__17633__i] = arguments[G__17633__i + 1]; ++G__17633__i;}
G__17632 = new cljs.core.IndexedSeq(G__17633__a,0);
}
return fieldset__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fieldset.cljs$lang$maxFixedArity = 1;
fieldset.cljs$lang$applyTo = fieldset__2.cljs$lang$applyTo;
fieldset.cljs$core$IFn$_invoke$arity$0 = fieldset__0;
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__2.cljs$core$IFn$_invoke$arity$variadic;
return fieldset;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.figcaption = (function() {
var figcaption = null;
var figcaption__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});
var figcaption__2 = (function() { 
var G__17634__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__7685__auto__,children__7686__auto__);
};
var G__17634 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17635__i = 0, G__17635__a = new Array(arguments.length -  1);
while (G__17635__i < G__17635__a.length) {G__17635__a[G__17635__i] = arguments[G__17635__i + 1]; ++G__17635__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17635__a,0);
} 
return G__17634__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17634.cljs$lang$maxFixedArity = 1;
G__17634.cljs$lang$applyTo = (function (arglist__17636){
var opts__7685__auto__ = cljs.core.first(arglist__17636);
var children__7686__auto__ = cljs.core.rest(arglist__17636);
return G__17634__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17634.cljs$core$IFn$_invoke$arity$variadic = G__17634__delegate;
return G__17634;
})()
;
figcaption = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return figcaption__0.call(this);
default:
var G__17637 = null;
if (arguments.length > 1) {
var G__17638__i = 0, G__17638__a = new Array(arguments.length -  1);
while (G__17638__i < G__17638__a.length) {G__17638__a[G__17638__i] = arguments[G__17638__i + 1]; ++G__17638__i;}
G__17637 = new cljs.core.IndexedSeq(G__17638__a,0);
}
return figcaption__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figcaption.cljs$lang$maxFixedArity = 1;
figcaption.cljs$lang$applyTo = figcaption__2.cljs$lang$applyTo;
figcaption.cljs$core$IFn$_invoke$arity$0 = figcaption__0;
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__2.cljs$core$IFn$_invoke$arity$variadic;
return figcaption;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.figure = (function() {
var figure = null;
var figure__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});
var figure__2 = (function() { 
var G__17639__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__7685__auto__,children__7686__auto__);
};
var G__17639 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17640__i = 0, G__17640__a = new Array(arguments.length -  1);
while (G__17640__i < G__17640__a.length) {G__17640__a[G__17640__i] = arguments[G__17640__i + 1]; ++G__17640__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17640__a,0);
} 
return G__17639__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17639.cljs$lang$maxFixedArity = 1;
G__17639.cljs$lang$applyTo = (function (arglist__17641){
var opts__7685__auto__ = cljs.core.first(arglist__17641);
var children__7686__auto__ = cljs.core.rest(arglist__17641);
return G__17639__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17639.cljs$core$IFn$_invoke$arity$variadic = G__17639__delegate;
return G__17639;
})()
;
figure = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return figure__0.call(this);
default:
var G__17642 = null;
if (arguments.length > 1) {
var G__17643__i = 0, G__17643__a = new Array(arguments.length -  1);
while (G__17643__i < G__17643__a.length) {G__17643__a[G__17643__i] = arguments[G__17643__i + 1]; ++G__17643__i;}
G__17642 = new cljs.core.IndexedSeq(G__17643__a,0);
}
return figure__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figure.cljs$lang$maxFixedArity = 1;
figure.cljs$lang$applyTo = figure__2.cljs$lang$applyTo;
figure.cljs$core$IFn$_invoke$arity$0 = figure__0;
figure.cljs$core$IFn$_invoke$arity$variadic = figure__2.cljs$core$IFn$_invoke$arity$variadic;
return figure;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.footer = (function() {
var footer = null;
var footer__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});
var footer__2 = (function() { 
var G__17644__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__7685__auto__,children__7686__auto__);
};
var G__17644 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17645__i = 0, G__17645__a = new Array(arguments.length -  1);
while (G__17645__i < G__17645__a.length) {G__17645__a[G__17645__i] = arguments[G__17645__i + 1]; ++G__17645__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17645__a,0);
} 
return G__17644__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17644.cljs$lang$maxFixedArity = 1;
G__17644.cljs$lang$applyTo = (function (arglist__17646){
var opts__7685__auto__ = cljs.core.first(arglist__17646);
var children__7686__auto__ = cljs.core.rest(arglist__17646);
return G__17644__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17644.cljs$core$IFn$_invoke$arity$variadic = G__17644__delegate;
return G__17644;
})()
;
footer = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return footer__0.call(this);
default:
var G__17647 = null;
if (arguments.length > 1) {
var G__17648__i = 0, G__17648__a = new Array(arguments.length -  1);
while (G__17648__i < G__17648__a.length) {G__17648__a[G__17648__i] = arguments[G__17648__i + 1]; ++G__17648__i;}
G__17647 = new cljs.core.IndexedSeq(G__17648__a,0);
}
return footer__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
footer.cljs$lang$maxFixedArity = 1;
footer.cljs$lang$applyTo = footer__2.cljs$lang$applyTo;
footer.cljs$core$IFn$_invoke$arity$0 = footer__0;
footer.cljs$core$IFn$_invoke$arity$variadic = footer__2.cljs$core$IFn$_invoke$arity$variadic;
return footer;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.form = (function() {
var form = null;
var form__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});
var form__2 = (function() { 
var G__17649__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__7685__auto__,children__7686__auto__);
};
var G__17649 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17650__i = 0, G__17650__a = new Array(arguments.length -  1);
while (G__17650__i < G__17650__a.length) {G__17650__a[G__17650__i] = arguments[G__17650__i + 1]; ++G__17650__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17650__a,0);
} 
return G__17649__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17649.cljs$lang$maxFixedArity = 1;
G__17649.cljs$lang$applyTo = (function (arglist__17651){
var opts__7685__auto__ = cljs.core.first(arglist__17651);
var children__7686__auto__ = cljs.core.rest(arglist__17651);
return G__17649__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17649.cljs$core$IFn$_invoke$arity$variadic = G__17649__delegate;
return G__17649;
})()
;
form = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return form__0.call(this);
default:
var G__17652 = null;
if (arguments.length > 1) {
var G__17653__i = 0, G__17653__a = new Array(arguments.length -  1);
while (G__17653__i < G__17653__a.length) {G__17653__a[G__17653__i] = arguments[G__17653__i + 1]; ++G__17653__i;}
G__17652 = new cljs.core.IndexedSeq(G__17653__a,0);
}
return form__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
form.cljs$lang$maxFixedArity = 1;
form.cljs$lang$applyTo = form__2.cljs$lang$applyTo;
form.cljs$core$IFn$_invoke$arity$0 = form__0;
form.cljs$core$IFn$_invoke$arity$variadic = form__2.cljs$core$IFn$_invoke$arity$variadic;
return form;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.h1 = (function() {
var h1 = null;
var h1__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});
var h1__2 = (function() { 
var G__17654__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__7685__auto__,children__7686__auto__);
};
var G__17654 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17655__i = 0, G__17655__a = new Array(arguments.length -  1);
while (G__17655__i < G__17655__a.length) {G__17655__a[G__17655__i] = arguments[G__17655__i + 1]; ++G__17655__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17655__a,0);
} 
return G__17654__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17654.cljs$lang$maxFixedArity = 1;
G__17654.cljs$lang$applyTo = (function (arglist__17656){
var opts__7685__auto__ = cljs.core.first(arglist__17656);
var children__7686__auto__ = cljs.core.rest(arglist__17656);
return G__17654__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17654.cljs$core$IFn$_invoke$arity$variadic = G__17654__delegate;
return G__17654;
})()
;
h1 = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return h1__0.call(this);
default:
var G__17657 = null;
if (arguments.length > 1) {
var G__17658__i = 0, G__17658__a = new Array(arguments.length -  1);
while (G__17658__i < G__17658__a.length) {G__17658__a[G__17658__i] = arguments[G__17658__i + 1]; ++G__17658__i;}
G__17657 = new cljs.core.IndexedSeq(G__17658__a,0);
}
return h1__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
h1.cljs$lang$maxFixedArity = 1;
h1.cljs$lang$applyTo = h1__2.cljs$lang$applyTo;
h1.cljs$core$IFn$_invoke$arity$0 = h1__0;
h1.cljs$core$IFn$_invoke$arity$variadic = h1__2.cljs$core$IFn$_invoke$arity$variadic;
return h1;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.h2 = (function() {
var h2 = null;
var h2__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});
var h2__2 = (function() { 
var G__17659__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__7685__auto__,children__7686__auto__);
};
var G__17659 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17660__i = 0, G__17660__a = new Array(arguments.length -  1);
while (G__17660__i < G__17660__a.length) {G__17660__a[G__17660__i] = arguments[G__17660__i + 1]; ++G__17660__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17660__a,0);
} 
return G__17659__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17659.cljs$lang$maxFixedArity = 1;
G__17659.cljs$lang$applyTo = (function (arglist__17661){
var opts__7685__auto__ = cljs.core.first(arglist__17661);
var children__7686__auto__ = cljs.core.rest(arglist__17661);
return G__17659__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17659.cljs$core$IFn$_invoke$arity$variadic = G__17659__delegate;
return G__17659;
})()
;
h2 = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return h2__0.call(this);
default:
var G__17662 = null;
if (arguments.length > 1) {
var G__17663__i = 0, G__17663__a = new Array(arguments.length -  1);
while (G__17663__i < G__17663__a.length) {G__17663__a[G__17663__i] = arguments[G__17663__i + 1]; ++G__17663__i;}
G__17662 = new cljs.core.IndexedSeq(G__17663__a,0);
}
return h2__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
h2.cljs$lang$maxFixedArity = 1;
h2.cljs$lang$applyTo = h2__2.cljs$lang$applyTo;
h2.cljs$core$IFn$_invoke$arity$0 = h2__0;
h2.cljs$core$IFn$_invoke$arity$variadic = h2__2.cljs$core$IFn$_invoke$arity$variadic;
return h2;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.h3 = (function() {
var h3 = null;
var h3__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});
var h3__2 = (function() { 
var G__17664__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__7685__auto__,children__7686__auto__);
};
var G__17664 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17665__i = 0, G__17665__a = new Array(arguments.length -  1);
while (G__17665__i < G__17665__a.length) {G__17665__a[G__17665__i] = arguments[G__17665__i + 1]; ++G__17665__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17665__a,0);
} 
return G__17664__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17664.cljs$lang$maxFixedArity = 1;
G__17664.cljs$lang$applyTo = (function (arglist__17666){
var opts__7685__auto__ = cljs.core.first(arglist__17666);
var children__7686__auto__ = cljs.core.rest(arglist__17666);
return G__17664__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17664.cljs$core$IFn$_invoke$arity$variadic = G__17664__delegate;
return G__17664;
})()
;
h3 = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return h3__0.call(this);
default:
var G__17667 = null;
if (arguments.length > 1) {
var G__17668__i = 0, G__17668__a = new Array(arguments.length -  1);
while (G__17668__i < G__17668__a.length) {G__17668__a[G__17668__i] = arguments[G__17668__i + 1]; ++G__17668__i;}
G__17667 = new cljs.core.IndexedSeq(G__17668__a,0);
}
return h3__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
h3.cljs$lang$maxFixedArity = 1;
h3.cljs$lang$applyTo = h3__2.cljs$lang$applyTo;
h3.cljs$core$IFn$_invoke$arity$0 = h3__0;
h3.cljs$core$IFn$_invoke$arity$variadic = h3__2.cljs$core$IFn$_invoke$arity$variadic;
return h3;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.h4 = (function() {
var h4 = null;
var h4__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});
var h4__2 = (function() { 
var G__17669__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__7685__auto__,children__7686__auto__);
};
var G__17669 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17670__i = 0, G__17670__a = new Array(arguments.length -  1);
while (G__17670__i < G__17670__a.length) {G__17670__a[G__17670__i] = arguments[G__17670__i + 1]; ++G__17670__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17670__a,0);
} 
return G__17669__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17669.cljs$lang$maxFixedArity = 1;
G__17669.cljs$lang$applyTo = (function (arglist__17671){
var opts__7685__auto__ = cljs.core.first(arglist__17671);
var children__7686__auto__ = cljs.core.rest(arglist__17671);
return G__17669__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17669.cljs$core$IFn$_invoke$arity$variadic = G__17669__delegate;
return G__17669;
})()
;
h4 = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return h4__0.call(this);
default:
var G__17672 = null;
if (arguments.length > 1) {
var G__17673__i = 0, G__17673__a = new Array(arguments.length -  1);
while (G__17673__i < G__17673__a.length) {G__17673__a[G__17673__i] = arguments[G__17673__i + 1]; ++G__17673__i;}
G__17672 = new cljs.core.IndexedSeq(G__17673__a,0);
}
return h4__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
h4.cljs$lang$maxFixedArity = 1;
h4.cljs$lang$applyTo = h4__2.cljs$lang$applyTo;
h4.cljs$core$IFn$_invoke$arity$0 = h4__0;
h4.cljs$core$IFn$_invoke$arity$variadic = h4__2.cljs$core$IFn$_invoke$arity$variadic;
return h4;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.h5 = (function() {
var h5 = null;
var h5__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});
var h5__2 = (function() { 
var G__17674__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__7685__auto__,children__7686__auto__);
};
var G__17674 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17675__i = 0, G__17675__a = new Array(arguments.length -  1);
while (G__17675__i < G__17675__a.length) {G__17675__a[G__17675__i] = arguments[G__17675__i + 1]; ++G__17675__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17675__a,0);
} 
return G__17674__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17674.cljs$lang$maxFixedArity = 1;
G__17674.cljs$lang$applyTo = (function (arglist__17676){
var opts__7685__auto__ = cljs.core.first(arglist__17676);
var children__7686__auto__ = cljs.core.rest(arglist__17676);
return G__17674__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17674.cljs$core$IFn$_invoke$arity$variadic = G__17674__delegate;
return G__17674;
})()
;
h5 = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return h5__0.call(this);
default:
var G__17677 = null;
if (arguments.length > 1) {
var G__17678__i = 0, G__17678__a = new Array(arguments.length -  1);
while (G__17678__i < G__17678__a.length) {G__17678__a[G__17678__i] = arguments[G__17678__i + 1]; ++G__17678__i;}
G__17677 = new cljs.core.IndexedSeq(G__17678__a,0);
}
return h5__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
h5.cljs$lang$maxFixedArity = 1;
h5.cljs$lang$applyTo = h5__2.cljs$lang$applyTo;
h5.cljs$core$IFn$_invoke$arity$0 = h5__0;
h5.cljs$core$IFn$_invoke$arity$variadic = h5__2.cljs$core$IFn$_invoke$arity$variadic;
return h5;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.h6 = (function() {
var h6 = null;
var h6__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});
var h6__2 = (function() { 
var G__17679__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__7685__auto__,children__7686__auto__);
};
var G__17679 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17680__i = 0, G__17680__a = new Array(arguments.length -  1);
while (G__17680__i < G__17680__a.length) {G__17680__a[G__17680__i] = arguments[G__17680__i + 1]; ++G__17680__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17680__a,0);
} 
return G__17679__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17679.cljs$lang$maxFixedArity = 1;
G__17679.cljs$lang$applyTo = (function (arglist__17681){
var opts__7685__auto__ = cljs.core.first(arglist__17681);
var children__7686__auto__ = cljs.core.rest(arglist__17681);
return G__17679__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17679.cljs$core$IFn$_invoke$arity$variadic = G__17679__delegate;
return G__17679;
})()
;
h6 = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return h6__0.call(this);
default:
var G__17682 = null;
if (arguments.length > 1) {
var G__17683__i = 0, G__17683__a = new Array(arguments.length -  1);
while (G__17683__i < G__17683__a.length) {G__17683__a[G__17683__i] = arguments[G__17683__i + 1]; ++G__17683__i;}
G__17682 = new cljs.core.IndexedSeq(G__17683__a,0);
}
return h6__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
h6.cljs$lang$maxFixedArity = 1;
h6.cljs$lang$applyTo = h6__2.cljs$lang$applyTo;
h6.cljs$core$IFn$_invoke$arity$0 = h6__0;
h6.cljs$core$IFn$_invoke$arity$variadic = h6__2.cljs$core$IFn$_invoke$arity$variadic;
return h6;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.head = (function() {
var head = null;
var head__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});
var head__2 = (function() { 
var G__17684__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__7685__auto__,children__7686__auto__);
};
var G__17684 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17685__i = 0, G__17685__a = new Array(arguments.length -  1);
while (G__17685__i < G__17685__a.length) {G__17685__a[G__17685__i] = arguments[G__17685__i + 1]; ++G__17685__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17685__a,0);
} 
return G__17684__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17684.cljs$lang$maxFixedArity = 1;
G__17684.cljs$lang$applyTo = (function (arglist__17686){
var opts__7685__auto__ = cljs.core.first(arglist__17686);
var children__7686__auto__ = cljs.core.rest(arglist__17686);
return G__17684__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17684.cljs$core$IFn$_invoke$arity$variadic = G__17684__delegate;
return G__17684;
})()
;
head = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return head__0.call(this);
default:
var G__17687 = null;
if (arguments.length > 1) {
var G__17688__i = 0, G__17688__a = new Array(arguments.length -  1);
while (G__17688__i < G__17688__a.length) {G__17688__a[G__17688__i] = arguments[G__17688__i + 1]; ++G__17688__i;}
G__17687 = new cljs.core.IndexedSeq(G__17688__a,0);
}
return head__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = head__2.cljs$lang$applyTo;
head.cljs$core$IFn$_invoke$arity$0 = head__0;
head.cljs$core$IFn$_invoke$arity$variadic = head__2.cljs$core$IFn$_invoke$arity$variadic;
return head;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.header = (function() {
var header = null;
var header__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});
var header__2 = (function() { 
var G__17689__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__7685__auto__,children__7686__auto__);
};
var G__17689 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17690__i = 0, G__17690__a = new Array(arguments.length -  1);
while (G__17690__i < G__17690__a.length) {G__17690__a[G__17690__i] = arguments[G__17690__i + 1]; ++G__17690__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17690__a,0);
} 
return G__17689__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17689.cljs$lang$maxFixedArity = 1;
G__17689.cljs$lang$applyTo = (function (arglist__17691){
var opts__7685__auto__ = cljs.core.first(arglist__17691);
var children__7686__auto__ = cljs.core.rest(arglist__17691);
return G__17689__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17689.cljs$core$IFn$_invoke$arity$variadic = G__17689__delegate;
return G__17689;
})()
;
header = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return header__0.call(this);
default:
var G__17692 = null;
if (arguments.length > 1) {
var G__17693__i = 0, G__17693__a = new Array(arguments.length -  1);
while (G__17693__i < G__17693__a.length) {G__17693__a[G__17693__i] = arguments[G__17693__i + 1]; ++G__17693__i;}
G__17692 = new cljs.core.IndexedSeq(G__17693__a,0);
}
return header__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
header.cljs$lang$maxFixedArity = 1;
header.cljs$lang$applyTo = header__2.cljs$lang$applyTo;
header.cljs$core$IFn$_invoke$arity$0 = header__0;
header.cljs$core$IFn$_invoke$arity$variadic = header__2.cljs$core$IFn$_invoke$arity$variadic;
return header;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.hr = (function() {
var hr = null;
var hr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});
var hr__2 = (function() { 
var G__17694__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__7685__auto__,children__7686__auto__);
};
var G__17694 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17695__i = 0, G__17695__a = new Array(arguments.length -  1);
while (G__17695__i < G__17695__a.length) {G__17695__a[G__17695__i] = arguments[G__17695__i + 1]; ++G__17695__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17695__a,0);
} 
return G__17694__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17694.cljs$lang$maxFixedArity = 1;
G__17694.cljs$lang$applyTo = (function (arglist__17696){
var opts__7685__auto__ = cljs.core.first(arglist__17696);
var children__7686__auto__ = cljs.core.rest(arglist__17696);
return G__17694__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17694.cljs$core$IFn$_invoke$arity$variadic = G__17694__delegate;
return G__17694;
})()
;
hr = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return hr__0.call(this);
default:
var G__17697 = null;
if (arguments.length > 1) {
var G__17698__i = 0, G__17698__a = new Array(arguments.length -  1);
while (G__17698__i < G__17698__a.length) {G__17698__a[G__17698__i] = arguments[G__17698__i + 1]; ++G__17698__i;}
G__17697 = new cljs.core.IndexedSeq(G__17698__a,0);
}
return hr__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hr.cljs$lang$maxFixedArity = 1;
hr.cljs$lang$applyTo = hr__2.cljs$lang$applyTo;
hr.cljs$core$IFn$_invoke$arity$0 = hr__0;
hr.cljs$core$IFn$_invoke$arity$variadic = hr__2.cljs$core$IFn$_invoke$arity$variadic;
return hr;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.html = (function() {
var html = null;
var html__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});
var html__2 = (function() { 
var G__17699__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__7685__auto__,children__7686__auto__);
};
var G__17699 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17700__i = 0, G__17700__a = new Array(arguments.length -  1);
while (G__17700__i < G__17700__a.length) {G__17700__a[G__17700__i] = arguments[G__17700__i + 1]; ++G__17700__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17700__a,0);
} 
return G__17699__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17699.cljs$lang$maxFixedArity = 1;
G__17699.cljs$lang$applyTo = (function (arglist__17701){
var opts__7685__auto__ = cljs.core.first(arglist__17701);
var children__7686__auto__ = cljs.core.rest(arglist__17701);
return G__17699__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17699.cljs$core$IFn$_invoke$arity$variadic = G__17699__delegate;
return G__17699;
})()
;
html = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return html__0.call(this);
default:
var G__17702 = null;
if (arguments.length > 1) {
var G__17703__i = 0, G__17703__a = new Array(arguments.length -  1);
while (G__17703__i < G__17703__a.length) {G__17703__a[G__17703__i] = arguments[G__17703__i + 1]; ++G__17703__i;}
G__17702 = new cljs.core.IndexedSeq(G__17703__a,0);
}
return html__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
html.cljs$lang$maxFixedArity = 1;
html.cljs$lang$applyTo = html__2.cljs$lang$applyTo;
html.cljs$core$IFn$_invoke$arity$0 = html__0;
html.cljs$core$IFn$_invoke$arity$variadic = html__2.cljs$core$IFn$_invoke$arity$variadic;
return html;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.i = (function() {
var i = null;
var i__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});
var i__2 = (function() { 
var G__17704__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__7685__auto__,children__7686__auto__);
};
var G__17704 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17705__i = 0, G__17705__a = new Array(arguments.length -  1);
while (G__17705__i < G__17705__a.length) {G__17705__a[G__17705__i] = arguments[G__17705__i + 1]; ++G__17705__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17705__a,0);
} 
return G__17704__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17704.cljs$lang$maxFixedArity = 1;
G__17704.cljs$lang$applyTo = (function (arglist__17706){
var opts__7685__auto__ = cljs.core.first(arglist__17706);
var children__7686__auto__ = cljs.core.rest(arglist__17706);
return G__17704__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17704.cljs$core$IFn$_invoke$arity$variadic = G__17704__delegate;
return G__17704;
})()
;
i = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return i__0.call(this);
default:
var G__17707 = null;
if (arguments.length > 1) {
var G__17708__i = 0, G__17708__a = new Array(arguments.length -  1);
while (G__17708__i < G__17708__a.length) {G__17708__a[G__17708__i] = arguments[G__17708__i + 1]; ++G__17708__i;}
G__17707 = new cljs.core.IndexedSeq(G__17708__a,0);
}
return i__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
i.cljs$lang$maxFixedArity = 1;
i.cljs$lang$applyTo = i__2.cljs$lang$applyTo;
i.cljs$core$IFn$_invoke$arity$0 = i__0;
i.cljs$core$IFn$_invoke$arity$variadic = i__2.cljs$core$IFn$_invoke$arity$variadic;
return i;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.iframe = (function() {
var iframe = null;
var iframe__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});
var iframe__2 = (function() { 
var G__17709__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__7685__auto__,children__7686__auto__);
};
var G__17709 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17710__i = 0, G__17710__a = new Array(arguments.length -  1);
while (G__17710__i < G__17710__a.length) {G__17710__a[G__17710__i] = arguments[G__17710__i + 1]; ++G__17710__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17710__a,0);
} 
return G__17709__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17709.cljs$lang$maxFixedArity = 1;
G__17709.cljs$lang$applyTo = (function (arglist__17711){
var opts__7685__auto__ = cljs.core.first(arglist__17711);
var children__7686__auto__ = cljs.core.rest(arglist__17711);
return G__17709__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17709.cljs$core$IFn$_invoke$arity$variadic = G__17709__delegate;
return G__17709;
})()
;
iframe = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return iframe__0.call(this);
default:
var G__17712 = null;
if (arguments.length > 1) {
var G__17713__i = 0, G__17713__a = new Array(arguments.length -  1);
while (G__17713__i < G__17713__a.length) {G__17713__a[G__17713__i] = arguments[G__17713__i + 1]; ++G__17713__i;}
G__17712 = new cljs.core.IndexedSeq(G__17713__a,0);
}
return iframe__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
iframe.cljs$lang$maxFixedArity = 1;
iframe.cljs$lang$applyTo = iframe__2.cljs$lang$applyTo;
iframe.cljs$core$IFn$_invoke$arity$0 = iframe__0;
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__2.cljs$core$IFn$_invoke$arity$variadic;
return iframe;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.img = (function() {
var img = null;
var img__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});
var img__2 = (function() { 
var G__17714__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__7685__auto__,children__7686__auto__);
};
var G__17714 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17715__i = 0, G__17715__a = new Array(arguments.length -  1);
while (G__17715__i < G__17715__a.length) {G__17715__a[G__17715__i] = arguments[G__17715__i + 1]; ++G__17715__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17715__a,0);
} 
return G__17714__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17714.cljs$lang$maxFixedArity = 1;
G__17714.cljs$lang$applyTo = (function (arglist__17716){
var opts__7685__auto__ = cljs.core.first(arglist__17716);
var children__7686__auto__ = cljs.core.rest(arglist__17716);
return G__17714__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17714.cljs$core$IFn$_invoke$arity$variadic = G__17714__delegate;
return G__17714;
})()
;
img = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return img__0.call(this);
default:
var G__17717 = null;
if (arguments.length > 1) {
var G__17718__i = 0, G__17718__a = new Array(arguments.length -  1);
while (G__17718__i < G__17718__a.length) {G__17718__a[G__17718__i] = arguments[G__17718__i + 1]; ++G__17718__i;}
G__17717 = new cljs.core.IndexedSeq(G__17718__a,0);
}
return img__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
img.cljs$lang$maxFixedArity = 1;
img.cljs$lang$applyTo = img__2.cljs$lang$applyTo;
img.cljs$core$IFn$_invoke$arity$0 = img__0;
img.cljs$core$IFn$_invoke$arity$variadic = img__2.cljs$core$IFn$_invoke$arity$variadic;
return img;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.ins = (function() {
var ins = null;
var ins__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});
var ins__2 = (function() { 
var G__17719__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__7685__auto__,children__7686__auto__);
};
var G__17719 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17720__i = 0, G__17720__a = new Array(arguments.length -  1);
while (G__17720__i < G__17720__a.length) {G__17720__a[G__17720__i] = arguments[G__17720__i + 1]; ++G__17720__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17720__a,0);
} 
return G__17719__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17719.cljs$lang$maxFixedArity = 1;
G__17719.cljs$lang$applyTo = (function (arglist__17721){
var opts__7685__auto__ = cljs.core.first(arglist__17721);
var children__7686__auto__ = cljs.core.rest(arglist__17721);
return G__17719__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17719.cljs$core$IFn$_invoke$arity$variadic = G__17719__delegate;
return G__17719;
})()
;
ins = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return ins__0.call(this);
default:
var G__17722 = null;
if (arguments.length > 1) {
var G__17723__i = 0, G__17723__a = new Array(arguments.length -  1);
while (G__17723__i < G__17723__a.length) {G__17723__a[G__17723__i] = arguments[G__17723__i + 1]; ++G__17723__i;}
G__17722 = new cljs.core.IndexedSeq(G__17723__a,0);
}
return ins__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ins.cljs$lang$maxFixedArity = 1;
ins.cljs$lang$applyTo = ins__2.cljs$lang$applyTo;
ins.cljs$core$IFn$_invoke$arity$0 = ins__0;
ins.cljs$core$IFn$_invoke$arity$variadic = ins__2.cljs$core$IFn$_invoke$arity$variadic;
return ins;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.kbd = (function() {
var kbd = null;
var kbd__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});
var kbd__2 = (function() { 
var G__17724__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__7685__auto__,children__7686__auto__);
};
var G__17724 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17725__i = 0, G__17725__a = new Array(arguments.length -  1);
while (G__17725__i < G__17725__a.length) {G__17725__a[G__17725__i] = arguments[G__17725__i + 1]; ++G__17725__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17725__a,0);
} 
return G__17724__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17724.cljs$lang$maxFixedArity = 1;
G__17724.cljs$lang$applyTo = (function (arglist__17726){
var opts__7685__auto__ = cljs.core.first(arglist__17726);
var children__7686__auto__ = cljs.core.rest(arglist__17726);
return G__17724__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17724.cljs$core$IFn$_invoke$arity$variadic = G__17724__delegate;
return G__17724;
})()
;
kbd = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return kbd__0.call(this);
default:
var G__17727 = null;
if (arguments.length > 1) {
var G__17728__i = 0, G__17728__a = new Array(arguments.length -  1);
while (G__17728__i < G__17728__a.length) {G__17728__a[G__17728__i] = arguments[G__17728__i + 1]; ++G__17728__i;}
G__17727 = new cljs.core.IndexedSeq(G__17728__a,0);
}
return kbd__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kbd.cljs$lang$maxFixedArity = 1;
kbd.cljs$lang$applyTo = kbd__2.cljs$lang$applyTo;
kbd.cljs$core$IFn$_invoke$arity$0 = kbd__0;
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__2.cljs$core$IFn$_invoke$arity$variadic;
return kbd;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.keygen = (function() {
var keygen = null;
var keygen__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});
var keygen__2 = (function() { 
var G__17729__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__7685__auto__,children__7686__auto__);
};
var G__17729 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17730__i = 0, G__17730__a = new Array(arguments.length -  1);
while (G__17730__i < G__17730__a.length) {G__17730__a[G__17730__i] = arguments[G__17730__i + 1]; ++G__17730__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17730__a,0);
} 
return G__17729__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17729.cljs$lang$maxFixedArity = 1;
G__17729.cljs$lang$applyTo = (function (arglist__17731){
var opts__7685__auto__ = cljs.core.first(arglist__17731);
var children__7686__auto__ = cljs.core.rest(arglist__17731);
return G__17729__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17729.cljs$core$IFn$_invoke$arity$variadic = G__17729__delegate;
return G__17729;
})()
;
keygen = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return keygen__0.call(this);
default:
var G__17732 = null;
if (arguments.length > 1) {
var G__17733__i = 0, G__17733__a = new Array(arguments.length -  1);
while (G__17733__i < G__17733__a.length) {G__17733__a[G__17733__i] = arguments[G__17733__i + 1]; ++G__17733__i;}
G__17732 = new cljs.core.IndexedSeq(G__17733__a,0);
}
return keygen__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keygen.cljs$lang$maxFixedArity = 1;
keygen.cljs$lang$applyTo = keygen__2.cljs$lang$applyTo;
keygen.cljs$core$IFn$_invoke$arity$0 = keygen__0;
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__2.cljs$core$IFn$_invoke$arity$variadic;
return keygen;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.label = (function() {
var label = null;
var label__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});
var label__2 = (function() { 
var G__17734__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__7685__auto__,children__7686__auto__);
};
var G__17734 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17735__i = 0, G__17735__a = new Array(arguments.length -  1);
while (G__17735__i < G__17735__a.length) {G__17735__a[G__17735__i] = arguments[G__17735__i + 1]; ++G__17735__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17735__a,0);
} 
return G__17734__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17734.cljs$lang$maxFixedArity = 1;
G__17734.cljs$lang$applyTo = (function (arglist__17736){
var opts__7685__auto__ = cljs.core.first(arglist__17736);
var children__7686__auto__ = cljs.core.rest(arglist__17736);
return G__17734__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17734.cljs$core$IFn$_invoke$arity$variadic = G__17734__delegate;
return G__17734;
})()
;
label = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return label__0.call(this);
default:
var G__17737 = null;
if (arguments.length > 1) {
var G__17738__i = 0, G__17738__a = new Array(arguments.length -  1);
while (G__17738__i < G__17738__a.length) {G__17738__a[G__17738__i] = arguments[G__17738__i + 1]; ++G__17738__i;}
G__17737 = new cljs.core.IndexedSeq(G__17738__a,0);
}
return label__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
label.cljs$lang$maxFixedArity = 1;
label.cljs$lang$applyTo = label__2.cljs$lang$applyTo;
label.cljs$core$IFn$_invoke$arity$0 = label__0;
label.cljs$core$IFn$_invoke$arity$variadic = label__2.cljs$core$IFn$_invoke$arity$variadic;
return label;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.legend = (function() {
var legend = null;
var legend__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});
var legend__2 = (function() { 
var G__17739__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__7685__auto__,children__7686__auto__);
};
var G__17739 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17740__i = 0, G__17740__a = new Array(arguments.length -  1);
while (G__17740__i < G__17740__a.length) {G__17740__a[G__17740__i] = arguments[G__17740__i + 1]; ++G__17740__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17740__a,0);
} 
return G__17739__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17739.cljs$lang$maxFixedArity = 1;
G__17739.cljs$lang$applyTo = (function (arglist__17741){
var opts__7685__auto__ = cljs.core.first(arglist__17741);
var children__7686__auto__ = cljs.core.rest(arglist__17741);
return G__17739__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17739.cljs$core$IFn$_invoke$arity$variadic = G__17739__delegate;
return G__17739;
})()
;
legend = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return legend__0.call(this);
default:
var G__17742 = null;
if (arguments.length > 1) {
var G__17743__i = 0, G__17743__a = new Array(arguments.length -  1);
while (G__17743__i < G__17743__a.length) {G__17743__a[G__17743__i] = arguments[G__17743__i + 1]; ++G__17743__i;}
G__17742 = new cljs.core.IndexedSeq(G__17743__a,0);
}
return legend__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
legend.cljs$lang$maxFixedArity = 1;
legend.cljs$lang$applyTo = legend__2.cljs$lang$applyTo;
legend.cljs$core$IFn$_invoke$arity$0 = legend__0;
legend.cljs$core$IFn$_invoke$arity$variadic = legend__2.cljs$core$IFn$_invoke$arity$variadic;
return legend;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.li = (function() {
var li = null;
var li__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});
var li__2 = (function() { 
var G__17744__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__7685__auto__,children__7686__auto__);
};
var G__17744 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17745__i = 0, G__17745__a = new Array(arguments.length -  1);
while (G__17745__i < G__17745__a.length) {G__17745__a[G__17745__i] = arguments[G__17745__i + 1]; ++G__17745__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17745__a,0);
} 
return G__17744__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17744.cljs$lang$maxFixedArity = 1;
G__17744.cljs$lang$applyTo = (function (arglist__17746){
var opts__7685__auto__ = cljs.core.first(arglist__17746);
var children__7686__auto__ = cljs.core.rest(arglist__17746);
return G__17744__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17744.cljs$core$IFn$_invoke$arity$variadic = G__17744__delegate;
return G__17744;
})()
;
li = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return li__0.call(this);
default:
var G__17747 = null;
if (arguments.length > 1) {
var G__17748__i = 0, G__17748__a = new Array(arguments.length -  1);
while (G__17748__i < G__17748__a.length) {G__17748__a[G__17748__i] = arguments[G__17748__i + 1]; ++G__17748__i;}
G__17747 = new cljs.core.IndexedSeq(G__17748__a,0);
}
return li__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
li.cljs$lang$maxFixedArity = 1;
li.cljs$lang$applyTo = li__2.cljs$lang$applyTo;
li.cljs$core$IFn$_invoke$arity$0 = li__0;
li.cljs$core$IFn$_invoke$arity$variadic = li__2.cljs$core$IFn$_invoke$arity$variadic;
return li;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.link = (function() {
var link = null;
var link__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});
var link__2 = (function() { 
var G__17749__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__7685__auto__,children__7686__auto__);
};
var G__17749 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17750__i = 0, G__17750__a = new Array(arguments.length -  1);
while (G__17750__i < G__17750__a.length) {G__17750__a[G__17750__i] = arguments[G__17750__i + 1]; ++G__17750__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17750__a,0);
} 
return G__17749__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17749.cljs$lang$maxFixedArity = 1;
G__17749.cljs$lang$applyTo = (function (arglist__17751){
var opts__7685__auto__ = cljs.core.first(arglist__17751);
var children__7686__auto__ = cljs.core.rest(arglist__17751);
return G__17749__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17749.cljs$core$IFn$_invoke$arity$variadic = G__17749__delegate;
return G__17749;
})()
;
link = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return link__0.call(this);
default:
var G__17752 = null;
if (arguments.length > 1) {
var G__17753__i = 0, G__17753__a = new Array(arguments.length -  1);
while (G__17753__i < G__17753__a.length) {G__17753__a[G__17753__i] = arguments[G__17753__i + 1]; ++G__17753__i;}
G__17752 = new cljs.core.IndexedSeq(G__17753__a,0);
}
return link__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
link.cljs$lang$maxFixedArity = 1;
link.cljs$lang$applyTo = link__2.cljs$lang$applyTo;
link.cljs$core$IFn$_invoke$arity$0 = link__0;
link.cljs$core$IFn$_invoke$arity$variadic = link__2.cljs$core$IFn$_invoke$arity$variadic;
return link;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.main = (function() {
var main = null;
var main__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});
var main__2 = (function() { 
var G__17754__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__7685__auto__,children__7686__auto__);
};
var G__17754 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17755__i = 0, G__17755__a = new Array(arguments.length -  1);
while (G__17755__i < G__17755__a.length) {G__17755__a[G__17755__i] = arguments[G__17755__i + 1]; ++G__17755__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17755__a,0);
} 
return G__17754__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17754.cljs$lang$maxFixedArity = 1;
G__17754.cljs$lang$applyTo = (function (arglist__17756){
var opts__7685__auto__ = cljs.core.first(arglist__17756);
var children__7686__auto__ = cljs.core.rest(arglist__17756);
return G__17754__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17754.cljs$core$IFn$_invoke$arity$variadic = G__17754__delegate;
return G__17754;
})()
;
main = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return main__0.call(this);
default:
var G__17757 = null;
if (arguments.length > 1) {
var G__17758__i = 0, G__17758__a = new Array(arguments.length -  1);
while (G__17758__i < G__17758__a.length) {G__17758__a[G__17758__i] = arguments[G__17758__i + 1]; ++G__17758__i;}
G__17757 = new cljs.core.IndexedSeq(G__17758__a,0);
}
return main__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
main.cljs$lang$maxFixedArity = 1;
main.cljs$lang$applyTo = main__2.cljs$lang$applyTo;
main.cljs$core$IFn$_invoke$arity$0 = main__0;
main.cljs$core$IFn$_invoke$arity$variadic = main__2.cljs$core$IFn$_invoke$arity$variadic;
return main;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.map = (function() {
var map = null;
var map__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});
var map__2 = (function() { 
var G__17759__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__7685__auto__,children__7686__auto__);
};
var G__17759 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17760__i = 0, G__17760__a = new Array(arguments.length -  1);
while (G__17760__i < G__17760__a.length) {G__17760__a[G__17760__i] = arguments[G__17760__i + 1]; ++G__17760__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17760__a,0);
} 
return G__17759__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17759.cljs$lang$maxFixedArity = 1;
G__17759.cljs$lang$applyTo = (function (arglist__17761){
var opts__7685__auto__ = cljs.core.first(arglist__17761);
var children__7686__auto__ = cljs.core.rest(arglist__17761);
return G__17759__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17759.cljs$core$IFn$_invoke$arity$variadic = G__17759__delegate;
return G__17759;
})()
;
map = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return map__0.call(this);
default:
var G__17762 = null;
if (arguments.length > 1) {
var G__17763__i = 0, G__17763__a = new Array(arguments.length -  1);
while (G__17763__i < G__17763__a.length) {G__17763__a[G__17763__i] = arguments[G__17763__i + 1]; ++G__17763__i;}
G__17762 = new cljs.core.IndexedSeq(G__17763__a,0);
}
return map__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$lang$maxFixedArity = 1;
map.cljs$lang$applyTo = map__2.cljs$lang$applyTo;
map.cljs$core$IFn$_invoke$arity$0 = map__0;
map.cljs$core$IFn$_invoke$arity$variadic = map__2.cljs$core$IFn$_invoke$arity$variadic;
return map;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.mark = (function() {
var mark = null;
var mark__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});
var mark__2 = (function() { 
var G__17764__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__7685__auto__,children__7686__auto__);
};
var G__17764 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17765__i = 0, G__17765__a = new Array(arguments.length -  1);
while (G__17765__i < G__17765__a.length) {G__17765__a[G__17765__i] = arguments[G__17765__i + 1]; ++G__17765__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17765__a,0);
} 
return G__17764__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17764.cljs$lang$maxFixedArity = 1;
G__17764.cljs$lang$applyTo = (function (arglist__17766){
var opts__7685__auto__ = cljs.core.first(arglist__17766);
var children__7686__auto__ = cljs.core.rest(arglist__17766);
return G__17764__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17764.cljs$core$IFn$_invoke$arity$variadic = G__17764__delegate;
return G__17764;
})()
;
mark = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return mark__0.call(this);
default:
var G__17767 = null;
if (arguments.length > 1) {
var G__17768__i = 0, G__17768__a = new Array(arguments.length -  1);
while (G__17768__i < G__17768__a.length) {G__17768__a[G__17768__i] = arguments[G__17768__i + 1]; ++G__17768__i;}
G__17767 = new cljs.core.IndexedSeq(G__17768__a,0);
}
return mark__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mark.cljs$lang$maxFixedArity = 1;
mark.cljs$lang$applyTo = mark__2.cljs$lang$applyTo;
mark.cljs$core$IFn$_invoke$arity$0 = mark__0;
mark.cljs$core$IFn$_invoke$arity$variadic = mark__2.cljs$core$IFn$_invoke$arity$variadic;
return mark;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.marquee = (function() {
var marquee = null;
var marquee__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.marquee,null,null);
});
var marquee__2 = (function() { 
var G__17769__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.marquee,opts__7685__auto__,children__7686__auto__);
};
var G__17769 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17770__i = 0, G__17770__a = new Array(arguments.length -  1);
while (G__17770__i < G__17770__a.length) {G__17770__a[G__17770__i] = arguments[G__17770__i + 1]; ++G__17770__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17770__a,0);
} 
return G__17769__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17769.cljs$lang$maxFixedArity = 1;
G__17769.cljs$lang$applyTo = (function (arglist__17771){
var opts__7685__auto__ = cljs.core.first(arglist__17771);
var children__7686__auto__ = cljs.core.rest(arglist__17771);
return G__17769__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17769.cljs$core$IFn$_invoke$arity$variadic = G__17769__delegate;
return G__17769;
})()
;
marquee = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return marquee__0.call(this);
default:
var G__17772 = null;
if (arguments.length > 1) {
var G__17773__i = 0, G__17773__a = new Array(arguments.length -  1);
while (G__17773__i < G__17773__a.length) {G__17773__a[G__17773__i] = arguments[G__17773__i + 1]; ++G__17773__i;}
G__17772 = new cljs.core.IndexedSeq(G__17773__a,0);
}
return marquee__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
marquee.cljs$lang$maxFixedArity = 1;
marquee.cljs$lang$applyTo = marquee__2.cljs$lang$applyTo;
marquee.cljs$core$IFn$_invoke$arity$0 = marquee__0;
marquee.cljs$core$IFn$_invoke$arity$variadic = marquee__2.cljs$core$IFn$_invoke$arity$variadic;
return marquee;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.menu = (function() {
var menu = null;
var menu__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});
var menu__2 = (function() { 
var G__17774__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__7685__auto__,children__7686__auto__);
};
var G__17774 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17775__i = 0, G__17775__a = new Array(arguments.length -  1);
while (G__17775__i < G__17775__a.length) {G__17775__a[G__17775__i] = arguments[G__17775__i + 1]; ++G__17775__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17775__a,0);
} 
return G__17774__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17774.cljs$lang$maxFixedArity = 1;
G__17774.cljs$lang$applyTo = (function (arglist__17776){
var opts__7685__auto__ = cljs.core.first(arglist__17776);
var children__7686__auto__ = cljs.core.rest(arglist__17776);
return G__17774__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17774.cljs$core$IFn$_invoke$arity$variadic = G__17774__delegate;
return G__17774;
})()
;
menu = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return menu__0.call(this);
default:
var G__17777 = null;
if (arguments.length > 1) {
var G__17778__i = 0, G__17778__a = new Array(arguments.length -  1);
while (G__17778__i < G__17778__a.length) {G__17778__a[G__17778__i] = arguments[G__17778__i + 1]; ++G__17778__i;}
G__17777 = new cljs.core.IndexedSeq(G__17778__a,0);
}
return menu__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
menu.cljs$lang$maxFixedArity = 1;
menu.cljs$lang$applyTo = menu__2.cljs$lang$applyTo;
menu.cljs$core$IFn$_invoke$arity$0 = menu__0;
menu.cljs$core$IFn$_invoke$arity$variadic = menu__2.cljs$core$IFn$_invoke$arity$variadic;
return menu;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.menuitem = (function() {
var menuitem = null;
var menuitem__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});
var menuitem__2 = (function() { 
var G__17779__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__7685__auto__,children__7686__auto__);
};
var G__17779 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17780__i = 0, G__17780__a = new Array(arguments.length -  1);
while (G__17780__i < G__17780__a.length) {G__17780__a[G__17780__i] = arguments[G__17780__i + 1]; ++G__17780__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17780__a,0);
} 
return G__17779__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17779.cljs$lang$maxFixedArity = 1;
G__17779.cljs$lang$applyTo = (function (arglist__17781){
var opts__7685__auto__ = cljs.core.first(arglist__17781);
var children__7686__auto__ = cljs.core.rest(arglist__17781);
return G__17779__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17779.cljs$core$IFn$_invoke$arity$variadic = G__17779__delegate;
return G__17779;
})()
;
menuitem = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return menuitem__0.call(this);
default:
var G__17782 = null;
if (arguments.length > 1) {
var G__17783__i = 0, G__17783__a = new Array(arguments.length -  1);
while (G__17783__i < G__17783__a.length) {G__17783__a[G__17783__i] = arguments[G__17783__i + 1]; ++G__17783__i;}
G__17782 = new cljs.core.IndexedSeq(G__17783__a,0);
}
return menuitem__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
menuitem.cljs$lang$maxFixedArity = 1;
menuitem.cljs$lang$applyTo = menuitem__2.cljs$lang$applyTo;
menuitem.cljs$core$IFn$_invoke$arity$0 = menuitem__0;
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__2.cljs$core$IFn$_invoke$arity$variadic;
return menuitem;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.meta = (function() {
var meta = null;
var meta__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});
var meta__2 = (function() { 
var G__17784__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__7685__auto__,children__7686__auto__);
};
var G__17784 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17785__i = 0, G__17785__a = new Array(arguments.length -  1);
while (G__17785__i < G__17785__a.length) {G__17785__a[G__17785__i] = arguments[G__17785__i + 1]; ++G__17785__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17785__a,0);
} 
return G__17784__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17784.cljs$lang$maxFixedArity = 1;
G__17784.cljs$lang$applyTo = (function (arglist__17786){
var opts__7685__auto__ = cljs.core.first(arglist__17786);
var children__7686__auto__ = cljs.core.rest(arglist__17786);
return G__17784__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17784.cljs$core$IFn$_invoke$arity$variadic = G__17784__delegate;
return G__17784;
})()
;
meta = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return meta__0.call(this);
default:
var G__17787 = null;
if (arguments.length > 1) {
var G__17788__i = 0, G__17788__a = new Array(arguments.length -  1);
while (G__17788__i < G__17788__a.length) {G__17788__a[G__17788__i] = arguments[G__17788__i + 1]; ++G__17788__i;}
G__17787 = new cljs.core.IndexedSeq(G__17788__a,0);
}
return meta__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
meta.cljs$lang$maxFixedArity = 1;
meta.cljs$lang$applyTo = meta__2.cljs$lang$applyTo;
meta.cljs$core$IFn$_invoke$arity$0 = meta__0;
meta.cljs$core$IFn$_invoke$arity$variadic = meta__2.cljs$core$IFn$_invoke$arity$variadic;
return meta;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.meter = (function() {
var meter = null;
var meter__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});
var meter__2 = (function() { 
var G__17789__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__7685__auto__,children__7686__auto__);
};
var G__17789 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17790__i = 0, G__17790__a = new Array(arguments.length -  1);
while (G__17790__i < G__17790__a.length) {G__17790__a[G__17790__i] = arguments[G__17790__i + 1]; ++G__17790__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17790__a,0);
} 
return G__17789__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17789.cljs$lang$maxFixedArity = 1;
G__17789.cljs$lang$applyTo = (function (arglist__17791){
var opts__7685__auto__ = cljs.core.first(arglist__17791);
var children__7686__auto__ = cljs.core.rest(arglist__17791);
return G__17789__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17789.cljs$core$IFn$_invoke$arity$variadic = G__17789__delegate;
return G__17789;
})()
;
meter = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return meter__0.call(this);
default:
var G__17792 = null;
if (arguments.length > 1) {
var G__17793__i = 0, G__17793__a = new Array(arguments.length -  1);
while (G__17793__i < G__17793__a.length) {G__17793__a[G__17793__i] = arguments[G__17793__i + 1]; ++G__17793__i;}
G__17792 = new cljs.core.IndexedSeq(G__17793__a,0);
}
return meter__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
meter.cljs$lang$maxFixedArity = 1;
meter.cljs$lang$applyTo = meter__2.cljs$lang$applyTo;
meter.cljs$core$IFn$_invoke$arity$0 = meter__0;
meter.cljs$core$IFn$_invoke$arity$variadic = meter__2.cljs$core$IFn$_invoke$arity$variadic;
return meter;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.nav = (function() {
var nav = null;
var nav__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});
var nav__2 = (function() { 
var G__17794__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__7685__auto__,children__7686__auto__);
};
var G__17794 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17795__i = 0, G__17795__a = new Array(arguments.length -  1);
while (G__17795__i < G__17795__a.length) {G__17795__a[G__17795__i] = arguments[G__17795__i + 1]; ++G__17795__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17795__a,0);
} 
return G__17794__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17794.cljs$lang$maxFixedArity = 1;
G__17794.cljs$lang$applyTo = (function (arglist__17796){
var opts__7685__auto__ = cljs.core.first(arglist__17796);
var children__7686__auto__ = cljs.core.rest(arglist__17796);
return G__17794__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17794.cljs$core$IFn$_invoke$arity$variadic = G__17794__delegate;
return G__17794;
})()
;
nav = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return nav__0.call(this);
default:
var G__17797 = null;
if (arguments.length > 1) {
var G__17798__i = 0, G__17798__a = new Array(arguments.length -  1);
while (G__17798__i < G__17798__a.length) {G__17798__a[G__17798__i] = arguments[G__17798__i + 1]; ++G__17798__i;}
G__17797 = new cljs.core.IndexedSeq(G__17798__a,0);
}
return nav__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nav.cljs$lang$maxFixedArity = 1;
nav.cljs$lang$applyTo = nav__2.cljs$lang$applyTo;
nav.cljs$core$IFn$_invoke$arity$0 = nav__0;
nav.cljs$core$IFn$_invoke$arity$variadic = nav__2.cljs$core$IFn$_invoke$arity$variadic;
return nav;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.noscript = (function() {
var noscript = null;
var noscript__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});
var noscript__2 = (function() { 
var G__17799__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__7685__auto__,children__7686__auto__);
};
var G__17799 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17800__i = 0, G__17800__a = new Array(arguments.length -  1);
while (G__17800__i < G__17800__a.length) {G__17800__a[G__17800__i] = arguments[G__17800__i + 1]; ++G__17800__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17800__a,0);
} 
return G__17799__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17799.cljs$lang$maxFixedArity = 1;
G__17799.cljs$lang$applyTo = (function (arglist__17801){
var opts__7685__auto__ = cljs.core.first(arglist__17801);
var children__7686__auto__ = cljs.core.rest(arglist__17801);
return G__17799__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17799.cljs$core$IFn$_invoke$arity$variadic = G__17799__delegate;
return G__17799;
})()
;
noscript = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return noscript__0.call(this);
default:
var G__17802 = null;
if (arguments.length > 1) {
var G__17803__i = 0, G__17803__a = new Array(arguments.length -  1);
while (G__17803__i < G__17803__a.length) {G__17803__a[G__17803__i] = arguments[G__17803__i + 1]; ++G__17803__i;}
G__17802 = new cljs.core.IndexedSeq(G__17803__a,0);
}
return noscript__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
noscript.cljs$lang$maxFixedArity = 1;
noscript.cljs$lang$applyTo = noscript__2.cljs$lang$applyTo;
noscript.cljs$core$IFn$_invoke$arity$0 = noscript__0;
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__2.cljs$core$IFn$_invoke$arity$variadic;
return noscript;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.object = (function() {
var object = null;
var object__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});
var object__2 = (function() { 
var G__17804__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__7685__auto__,children__7686__auto__);
};
var G__17804 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17805__i = 0, G__17805__a = new Array(arguments.length -  1);
while (G__17805__i < G__17805__a.length) {G__17805__a[G__17805__i] = arguments[G__17805__i + 1]; ++G__17805__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17805__a,0);
} 
return G__17804__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17804.cljs$lang$maxFixedArity = 1;
G__17804.cljs$lang$applyTo = (function (arglist__17806){
var opts__7685__auto__ = cljs.core.first(arglist__17806);
var children__7686__auto__ = cljs.core.rest(arglist__17806);
return G__17804__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17804.cljs$core$IFn$_invoke$arity$variadic = G__17804__delegate;
return G__17804;
})()
;
object = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return object__0.call(this);
default:
var G__17807 = null;
if (arguments.length > 1) {
var G__17808__i = 0, G__17808__a = new Array(arguments.length -  1);
while (G__17808__i < G__17808__a.length) {G__17808__a[G__17808__i] = arguments[G__17808__i + 1]; ++G__17808__i;}
G__17807 = new cljs.core.IndexedSeq(G__17808__a,0);
}
return object__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
object.cljs$lang$maxFixedArity = 1;
object.cljs$lang$applyTo = object__2.cljs$lang$applyTo;
object.cljs$core$IFn$_invoke$arity$0 = object__0;
object.cljs$core$IFn$_invoke$arity$variadic = object__2.cljs$core$IFn$_invoke$arity$variadic;
return object;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.ol = (function() {
var ol = null;
var ol__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});
var ol__2 = (function() { 
var G__17809__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__7685__auto__,children__7686__auto__);
};
var G__17809 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17810__i = 0, G__17810__a = new Array(arguments.length -  1);
while (G__17810__i < G__17810__a.length) {G__17810__a[G__17810__i] = arguments[G__17810__i + 1]; ++G__17810__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17810__a,0);
} 
return G__17809__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17809.cljs$lang$maxFixedArity = 1;
G__17809.cljs$lang$applyTo = (function (arglist__17811){
var opts__7685__auto__ = cljs.core.first(arglist__17811);
var children__7686__auto__ = cljs.core.rest(arglist__17811);
return G__17809__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17809.cljs$core$IFn$_invoke$arity$variadic = G__17809__delegate;
return G__17809;
})()
;
ol = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return ol__0.call(this);
default:
var G__17812 = null;
if (arguments.length > 1) {
var G__17813__i = 0, G__17813__a = new Array(arguments.length -  1);
while (G__17813__i < G__17813__a.length) {G__17813__a[G__17813__i] = arguments[G__17813__i + 1]; ++G__17813__i;}
G__17812 = new cljs.core.IndexedSeq(G__17813__a,0);
}
return ol__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ol.cljs$lang$maxFixedArity = 1;
ol.cljs$lang$applyTo = ol__2.cljs$lang$applyTo;
ol.cljs$core$IFn$_invoke$arity$0 = ol__0;
ol.cljs$core$IFn$_invoke$arity$variadic = ol__2.cljs$core$IFn$_invoke$arity$variadic;
return ol;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.optgroup = (function() {
var optgroup = null;
var optgroup__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});
var optgroup__2 = (function() { 
var G__17814__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__7685__auto__,children__7686__auto__);
};
var G__17814 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17815__i = 0, G__17815__a = new Array(arguments.length -  1);
while (G__17815__i < G__17815__a.length) {G__17815__a[G__17815__i] = arguments[G__17815__i + 1]; ++G__17815__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17815__a,0);
} 
return G__17814__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17814.cljs$lang$maxFixedArity = 1;
G__17814.cljs$lang$applyTo = (function (arglist__17816){
var opts__7685__auto__ = cljs.core.first(arglist__17816);
var children__7686__auto__ = cljs.core.rest(arglist__17816);
return G__17814__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17814.cljs$core$IFn$_invoke$arity$variadic = G__17814__delegate;
return G__17814;
})()
;
optgroup = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return optgroup__0.call(this);
default:
var G__17817 = null;
if (arguments.length > 1) {
var G__17818__i = 0, G__17818__a = new Array(arguments.length -  1);
while (G__17818__i < G__17818__a.length) {G__17818__a[G__17818__i] = arguments[G__17818__i + 1]; ++G__17818__i;}
G__17817 = new cljs.core.IndexedSeq(G__17818__a,0);
}
return optgroup__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
optgroup.cljs$lang$maxFixedArity = 1;
optgroup.cljs$lang$applyTo = optgroup__2.cljs$lang$applyTo;
optgroup.cljs$core$IFn$_invoke$arity$0 = optgroup__0;
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__2.cljs$core$IFn$_invoke$arity$variadic;
return optgroup;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.output = (function() {
var output = null;
var output__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});
var output__2 = (function() { 
var G__17819__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__7685__auto__,children__7686__auto__);
};
var G__17819 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17820__i = 0, G__17820__a = new Array(arguments.length -  1);
while (G__17820__i < G__17820__a.length) {G__17820__a[G__17820__i] = arguments[G__17820__i + 1]; ++G__17820__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17820__a,0);
} 
return G__17819__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17819.cljs$lang$maxFixedArity = 1;
G__17819.cljs$lang$applyTo = (function (arglist__17821){
var opts__7685__auto__ = cljs.core.first(arglist__17821);
var children__7686__auto__ = cljs.core.rest(arglist__17821);
return G__17819__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17819.cljs$core$IFn$_invoke$arity$variadic = G__17819__delegate;
return G__17819;
})()
;
output = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return output__0.call(this);
default:
var G__17822 = null;
if (arguments.length > 1) {
var G__17823__i = 0, G__17823__a = new Array(arguments.length -  1);
while (G__17823__i < G__17823__a.length) {G__17823__a[G__17823__i] = arguments[G__17823__i + 1]; ++G__17823__i;}
G__17822 = new cljs.core.IndexedSeq(G__17823__a,0);
}
return output__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
output.cljs$lang$maxFixedArity = 1;
output.cljs$lang$applyTo = output__2.cljs$lang$applyTo;
output.cljs$core$IFn$_invoke$arity$0 = output__0;
output.cljs$core$IFn$_invoke$arity$variadic = output__2.cljs$core$IFn$_invoke$arity$variadic;
return output;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.p = (function() {
var p = null;
var p__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});
var p__2 = (function() { 
var G__17824__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__7685__auto__,children__7686__auto__);
};
var G__17824 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17825__i = 0, G__17825__a = new Array(arguments.length -  1);
while (G__17825__i < G__17825__a.length) {G__17825__a[G__17825__i] = arguments[G__17825__i + 1]; ++G__17825__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17825__a,0);
} 
return G__17824__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17824.cljs$lang$maxFixedArity = 1;
G__17824.cljs$lang$applyTo = (function (arglist__17826){
var opts__7685__auto__ = cljs.core.first(arglist__17826);
var children__7686__auto__ = cljs.core.rest(arglist__17826);
return G__17824__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17824.cljs$core$IFn$_invoke$arity$variadic = G__17824__delegate;
return G__17824;
})()
;
p = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return p__0.call(this);
default:
var G__17827 = null;
if (arguments.length > 1) {
var G__17828__i = 0, G__17828__a = new Array(arguments.length -  1);
while (G__17828__i < G__17828__a.length) {G__17828__a[G__17828__i] = arguments[G__17828__i + 1]; ++G__17828__i;}
G__17827 = new cljs.core.IndexedSeq(G__17828__a,0);
}
return p__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p.cljs$lang$maxFixedArity = 1;
p.cljs$lang$applyTo = p__2.cljs$lang$applyTo;
p.cljs$core$IFn$_invoke$arity$0 = p__0;
p.cljs$core$IFn$_invoke$arity$variadic = p__2.cljs$core$IFn$_invoke$arity$variadic;
return p;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.param = (function() {
var param = null;
var param__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});
var param__2 = (function() { 
var G__17829__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__7685__auto__,children__7686__auto__);
};
var G__17829 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17830__i = 0, G__17830__a = new Array(arguments.length -  1);
while (G__17830__i < G__17830__a.length) {G__17830__a[G__17830__i] = arguments[G__17830__i + 1]; ++G__17830__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17830__a,0);
} 
return G__17829__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17829.cljs$lang$maxFixedArity = 1;
G__17829.cljs$lang$applyTo = (function (arglist__17831){
var opts__7685__auto__ = cljs.core.first(arglist__17831);
var children__7686__auto__ = cljs.core.rest(arglist__17831);
return G__17829__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17829.cljs$core$IFn$_invoke$arity$variadic = G__17829__delegate;
return G__17829;
})()
;
param = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return param__0.call(this);
default:
var G__17832 = null;
if (arguments.length > 1) {
var G__17833__i = 0, G__17833__a = new Array(arguments.length -  1);
while (G__17833__i < G__17833__a.length) {G__17833__a[G__17833__i] = arguments[G__17833__i + 1]; ++G__17833__i;}
G__17832 = new cljs.core.IndexedSeq(G__17833__a,0);
}
return param__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
param.cljs$lang$maxFixedArity = 1;
param.cljs$lang$applyTo = param__2.cljs$lang$applyTo;
param.cljs$core$IFn$_invoke$arity$0 = param__0;
param.cljs$core$IFn$_invoke$arity$variadic = param__2.cljs$core$IFn$_invoke$arity$variadic;
return param;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.pre = (function() {
var pre = null;
var pre__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});
var pre__2 = (function() { 
var G__17834__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__7685__auto__,children__7686__auto__);
};
var G__17834 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17835__i = 0, G__17835__a = new Array(arguments.length -  1);
while (G__17835__i < G__17835__a.length) {G__17835__a[G__17835__i] = arguments[G__17835__i + 1]; ++G__17835__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17835__a,0);
} 
return G__17834__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17834.cljs$lang$maxFixedArity = 1;
G__17834.cljs$lang$applyTo = (function (arglist__17836){
var opts__7685__auto__ = cljs.core.first(arglist__17836);
var children__7686__auto__ = cljs.core.rest(arglist__17836);
return G__17834__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17834.cljs$core$IFn$_invoke$arity$variadic = G__17834__delegate;
return G__17834;
})()
;
pre = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return pre__0.call(this);
default:
var G__17837 = null;
if (arguments.length > 1) {
var G__17838__i = 0, G__17838__a = new Array(arguments.length -  1);
while (G__17838__i < G__17838__a.length) {G__17838__a[G__17838__i] = arguments[G__17838__i + 1]; ++G__17838__i;}
G__17837 = new cljs.core.IndexedSeq(G__17838__a,0);
}
return pre__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pre.cljs$lang$maxFixedArity = 1;
pre.cljs$lang$applyTo = pre__2.cljs$lang$applyTo;
pre.cljs$core$IFn$_invoke$arity$0 = pre__0;
pre.cljs$core$IFn$_invoke$arity$variadic = pre__2.cljs$core$IFn$_invoke$arity$variadic;
return pre;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.progress = (function() {
var progress = null;
var progress__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});
var progress__2 = (function() { 
var G__17839__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__7685__auto__,children__7686__auto__);
};
var G__17839 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17840__i = 0, G__17840__a = new Array(arguments.length -  1);
while (G__17840__i < G__17840__a.length) {G__17840__a[G__17840__i] = arguments[G__17840__i + 1]; ++G__17840__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17840__a,0);
} 
return G__17839__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17839.cljs$lang$maxFixedArity = 1;
G__17839.cljs$lang$applyTo = (function (arglist__17841){
var opts__7685__auto__ = cljs.core.first(arglist__17841);
var children__7686__auto__ = cljs.core.rest(arglist__17841);
return G__17839__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17839.cljs$core$IFn$_invoke$arity$variadic = G__17839__delegate;
return G__17839;
})()
;
progress = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return progress__0.call(this);
default:
var G__17842 = null;
if (arguments.length > 1) {
var G__17843__i = 0, G__17843__a = new Array(arguments.length -  1);
while (G__17843__i < G__17843__a.length) {G__17843__a[G__17843__i] = arguments[G__17843__i + 1]; ++G__17843__i;}
G__17842 = new cljs.core.IndexedSeq(G__17843__a,0);
}
return progress__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
progress.cljs$lang$maxFixedArity = 1;
progress.cljs$lang$applyTo = progress__2.cljs$lang$applyTo;
progress.cljs$core$IFn$_invoke$arity$0 = progress__0;
progress.cljs$core$IFn$_invoke$arity$variadic = progress__2.cljs$core$IFn$_invoke$arity$variadic;
return progress;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.q = (function() {
var q = null;
var q__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});
var q__2 = (function() { 
var G__17844__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__7685__auto__,children__7686__auto__);
};
var G__17844 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17845__i = 0, G__17845__a = new Array(arguments.length -  1);
while (G__17845__i < G__17845__a.length) {G__17845__a[G__17845__i] = arguments[G__17845__i + 1]; ++G__17845__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17845__a,0);
} 
return G__17844__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17844.cljs$lang$maxFixedArity = 1;
G__17844.cljs$lang$applyTo = (function (arglist__17846){
var opts__7685__auto__ = cljs.core.first(arglist__17846);
var children__7686__auto__ = cljs.core.rest(arglist__17846);
return G__17844__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17844.cljs$core$IFn$_invoke$arity$variadic = G__17844__delegate;
return G__17844;
})()
;
q = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return q__0.call(this);
default:
var G__17847 = null;
if (arguments.length > 1) {
var G__17848__i = 0, G__17848__a = new Array(arguments.length -  1);
while (G__17848__i < G__17848__a.length) {G__17848__a[G__17848__i] = arguments[G__17848__i + 1]; ++G__17848__i;}
G__17847 = new cljs.core.IndexedSeq(G__17848__a,0);
}
return q__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
q.cljs$lang$maxFixedArity = 1;
q.cljs$lang$applyTo = q__2.cljs$lang$applyTo;
q.cljs$core$IFn$_invoke$arity$0 = q__0;
q.cljs$core$IFn$_invoke$arity$variadic = q__2.cljs$core$IFn$_invoke$arity$variadic;
return q;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.rp = (function() {
var rp = null;
var rp__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});
var rp__2 = (function() { 
var G__17849__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__7685__auto__,children__7686__auto__);
};
var G__17849 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17850__i = 0, G__17850__a = new Array(arguments.length -  1);
while (G__17850__i < G__17850__a.length) {G__17850__a[G__17850__i] = arguments[G__17850__i + 1]; ++G__17850__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17850__a,0);
} 
return G__17849__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17849.cljs$lang$maxFixedArity = 1;
G__17849.cljs$lang$applyTo = (function (arglist__17851){
var opts__7685__auto__ = cljs.core.first(arglist__17851);
var children__7686__auto__ = cljs.core.rest(arglist__17851);
return G__17849__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17849.cljs$core$IFn$_invoke$arity$variadic = G__17849__delegate;
return G__17849;
})()
;
rp = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return rp__0.call(this);
default:
var G__17852 = null;
if (arguments.length > 1) {
var G__17853__i = 0, G__17853__a = new Array(arguments.length -  1);
while (G__17853__i < G__17853__a.length) {G__17853__a[G__17853__i] = arguments[G__17853__i + 1]; ++G__17853__i;}
G__17852 = new cljs.core.IndexedSeq(G__17853__a,0);
}
return rp__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rp.cljs$lang$maxFixedArity = 1;
rp.cljs$lang$applyTo = rp__2.cljs$lang$applyTo;
rp.cljs$core$IFn$_invoke$arity$0 = rp__0;
rp.cljs$core$IFn$_invoke$arity$variadic = rp__2.cljs$core$IFn$_invoke$arity$variadic;
return rp;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.rt = (function() {
var rt = null;
var rt__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});
var rt__2 = (function() { 
var G__17854__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__7685__auto__,children__7686__auto__);
};
var G__17854 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17855__i = 0, G__17855__a = new Array(arguments.length -  1);
while (G__17855__i < G__17855__a.length) {G__17855__a[G__17855__i] = arguments[G__17855__i + 1]; ++G__17855__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17855__a,0);
} 
return G__17854__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17854.cljs$lang$maxFixedArity = 1;
G__17854.cljs$lang$applyTo = (function (arglist__17856){
var opts__7685__auto__ = cljs.core.first(arglist__17856);
var children__7686__auto__ = cljs.core.rest(arglist__17856);
return G__17854__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17854.cljs$core$IFn$_invoke$arity$variadic = G__17854__delegate;
return G__17854;
})()
;
rt = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return rt__0.call(this);
default:
var G__17857 = null;
if (arguments.length > 1) {
var G__17858__i = 0, G__17858__a = new Array(arguments.length -  1);
while (G__17858__i < G__17858__a.length) {G__17858__a[G__17858__i] = arguments[G__17858__i + 1]; ++G__17858__i;}
G__17857 = new cljs.core.IndexedSeq(G__17858__a,0);
}
return rt__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rt.cljs$lang$maxFixedArity = 1;
rt.cljs$lang$applyTo = rt__2.cljs$lang$applyTo;
rt.cljs$core$IFn$_invoke$arity$0 = rt__0;
rt.cljs$core$IFn$_invoke$arity$variadic = rt__2.cljs$core$IFn$_invoke$arity$variadic;
return rt;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.ruby = (function() {
var ruby = null;
var ruby__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});
var ruby__2 = (function() { 
var G__17859__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__7685__auto__,children__7686__auto__);
};
var G__17859 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17860__i = 0, G__17860__a = new Array(arguments.length -  1);
while (G__17860__i < G__17860__a.length) {G__17860__a[G__17860__i] = arguments[G__17860__i + 1]; ++G__17860__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17860__a,0);
} 
return G__17859__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17859.cljs$lang$maxFixedArity = 1;
G__17859.cljs$lang$applyTo = (function (arglist__17861){
var opts__7685__auto__ = cljs.core.first(arglist__17861);
var children__7686__auto__ = cljs.core.rest(arglist__17861);
return G__17859__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17859.cljs$core$IFn$_invoke$arity$variadic = G__17859__delegate;
return G__17859;
})()
;
ruby = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return ruby__0.call(this);
default:
var G__17862 = null;
if (arguments.length > 1) {
var G__17863__i = 0, G__17863__a = new Array(arguments.length -  1);
while (G__17863__i < G__17863__a.length) {G__17863__a[G__17863__i] = arguments[G__17863__i + 1]; ++G__17863__i;}
G__17862 = new cljs.core.IndexedSeq(G__17863__a,0);
}
return ruby__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ruby.cljs$lang$maxFixedArity = 1;
ruby.cljs$lang$applyTo = ruby__2.cljs$lang$applyTo;
ruby.cljs$core$IFn$_invoke$arity$0 = ruby__0;
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__2.cljs$core$IFn$_invoke$arity$variadic;
return ruby;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.s = (function() {
var s = null;
var s__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});
var s__2 = (function() { 
var G__17864__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__7685__auto__,children__7686__auto__);
};
var G__17864 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17865__i = 0, G__17865__a = new Array(arguments.length -  1);
while (G__17865__i < G__17865__a.length) {G__17865__a[G__17865__i] = arguments[G__17865__i + 1]; ++G__17865__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17865__a,0);
} 
return G__17864__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17864.cljs$lang$maxFixedArity = 1;
G__17864.cljs$lang$applyTo = (function (arglist__17866){
var opts__7685__auto__ = cljs.core.first(arglist__17866);
var children__7686__auto__ = cljs.core.rest(arglist__17866);
return G__17864__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17864.cljs$core$IFn$_invoke$arity$variadic = G__17864__delegate;
return G__17864;
})()
;
s = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return s__0.call(this);
default:
var G__17867 = null;
if (arguments.length > 1) {
var G__17868__i = 0, G__17868__a = new Array(arguments.length -  1);
while (G__17868__i < G__17868__a.length) {G__17868__a[G__17868__i] = arguments[G__17868__i + 1]; ++G__17868__i;}
G__17867 = new cljs.core.IndexedSeq(G__17868__a,0);
}
return s__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
s.cljs$lang$maxFixedArity = 1;
s.cljs$lang$applyTo = s__2.cljs$lang$applyTo;
s.cljs$core$IFn$_invoke$arity$0 = s__0;
s.cljs$core$IFn$_invoke$arity$variadic = s__2.cljs$core$IFn$_invoke$arity$variadic;
return s;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.samp = (function() {
var samp = null;
var samp__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});
var samp__2 = (function() { 
var G__17869__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__7685__auto__,children__7686__auto__);
};
var G__17869 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17870__i = 0, G__17870__a = new Array(arguments.length -  1);
while (G__17870__i < G__17870__a.length) {G__17870__a[G__17870__i] = arguments[G__17870__i + 1]; ++G__17870__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17870__a,0);
} 
return G__17869__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17869.cljs$lang$maxFixedArity = 1;
G__17869.cljs$lang$applyTo = (function (arglist__17871){
var opts__7685__auto__ = cljs.core.first(arglist__17871);
var children__7686__auto__ = cljs.core.rest(arglist__17871);
return G__17869__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17869.cljs$core$IFn$_invoke$arity$variadic = G__17869__delegate;
return G__17869;
})()
;
samp = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return samp__0.call(this);
default:
var G__17872 = null;
if (arguments.length > 1) {
var G__17873__i = 0, G__17873__a = new Array(arguments.length -  1);
while (G__17873__i < G__17873__a.length) {G__17873__a[G__17873__i] = arguments[G__17873__i + 1]; ++G__17873__i;}
G__17872 = new cljs.core.IndexedSeq(G__17873__a,0);
}
return samp__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
samp.cljs$lang$maxFixedArity = 1;
samp.cljs$lang$applyTo = samp__2.cljs$lang$applyTo;
samp.cljs$core$IFn$_invoke$arity$0 = samp__0;
samp.cljs$core$IFn$_invoke$arity$variadic = samp__2.cljs$core$IFn$_invoke$arity$variadic;
return samp;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.script = (function() {
var script = null;
var script__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});
var script__2 = (function() { 
var G__17874__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__7685__auto__,children__7686__auto__);
};
var G__17874 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17875__i = 0, G__17875__a = new Array(arguments.length -  1);
while (G__17875__i < G__17875__a.length) {G__17875__a[G__17875__i] = arguments[G__17875__i + 1]; ++G__17875__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17875__a,0);
} 
return G__17874__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17874.cljs$lang$maxFixedArity = 1;
G__17874.cljs$lang$applyTo = (function (arglist__17876){
var opts__7685__auto__ = cljs.core.first(arglist__17876);
var children__7686__auto__ = cljs.core.rest(arglist__17876);
return G__17874__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17874.cljs$core$IFn$_invoke$arity$variadic = G__17874__delegate;
return G__17874;
})()
;
script = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return script__0.call(this);
default:
var G__17877 = null;
if (arguments.length > 1) {
var G__17878__i = 0, G__17878__a = new Array(arguments.length -  1);
while (G__17878__i < G__17878__a.length) {G__17878__a[G__17878__i] = arguments[G__17878__i + 1]; ++G__17878__i;}
G__17877 = new cljs.core.IndexedSeq(G__17878__a,0);
}
return script__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
script.cljs$lang$maxFixedArity = 1;
script.cljs$lang$applyTo = script__2.cljs$lang$applyTo;
script.cljs$core$IFn$_invoke$arity$0 = script__0;
script.cljs$core$IFn$_invoke$arity$variadic = script__2.cljs$core$IFn$_invoke$arity$variadic;
return script;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.section = (function() {
var section = null;
var section__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});
var section__2 = (function() { 
var G__17879__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__7685__auto__,children__7686__auto__);
};
var G__17879 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17880__i = 0, G__17880__a = new Array(arguments.length -  1);
while (G__17880__i < G__17880__a.length) {G__17880__a[G__17880__i] = arguments[G__17880__i + 1]; ++G__17880__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17880__a,0);
} 
return G__17879__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17879.cljs$lang$maxFixedArity = 1;
G__17879.cljs$lang$applyTo = (function (arglist__17881){
var opts__7685__auto__ = cljs.core.first(arglist__17881);
var children__7686__auto__ = cljs.core.rest(arglist__17881);
return G__17879__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17879.cljs$core$IFn$_invoke$arity$variadic = G__17879__delegate;
return G__17879;
})()
;
section = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return section__0.call(this);
default:
var G__17882 = null;
if (arguments.length > 1) {
var G__17883__i = 0, G__17883__a = new Array(arguments.length -  1);
while (G__17883__i < G__17883__a.length) {G__17883__a[G__17883__i] = arguments[G__17883__i + 1]; ++G__17883__i;}
G__17882 = new cljs.core.IndexedSeq(G__17883__a,0);
}
return section__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
section.cljs$lang$maxFixedArity = 1;
section.cljs$lang$applyTo = section__2.cljs$lang$applyTo;
section.cljs$core$IFn$_invoke$arity$0 = section__0;
section.cljs$core$IFn$_invoke$arity$variadic = section__2.cljs$core$IFn$_invoke$arity$variadic;
return section;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.select = (function() {
var select = null;
var select__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.select,null,null);
});
var select__2 = (function() { 
var G__17884__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.select,opts__7685__auto__,children__7686__auto__);
};
var G__17884 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17885__i = 0, G__17885__a = new Array(arguments.length -  1);
while (G__17885__i < G__17885__a.length) {G__17885__a[G__17885__i] = arguments[G__17885__i + 1]; ++G__17885__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17885__a,0);
} 
return G__17884__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17884.cljs$lang$maxFixedArity = 1;
G__17884.cljs$lang$applyTo = (function (arglist__17886){
var opts__7685__auto__ = cljs.core.first(arglist__17886);
var children__7686__auto__ = cljs.core.rest(arglist__17886);
return G__17884__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17884.cljs$core$IFn$_invoke$arity$variadic = G__17884__delegate;
return G__17884;
})()
;
select = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return select__0.call(this);
default:
var G__17887 = null;
if (arguments.length > 1) {
var G__17888__i = 0, G__17888__a = new Array(arguments.length -  1);
while (G__17888__i < G__17888__a.length) {G__17888__a[G__17888__i] = arguments[G__17888__i + 1]; ++G__17888__i;}
G__17887 = new cljs.core.IndexedSeq(G__17888__a,0);
}
return select__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select.cljs$lang$maxFixedArity = 1;
select.cljs$lang$applyTo = select__2.cljs$lang$applyTo;
select.cljs$core$IFn$_invoke$arity$0 = select__0;
select.cljs$core$IFn$_invoke$arity$variadic = select__2.cljs$core$IFn$_invoke$arity$variadic;
return select;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.small = (function() {
var small = null;
var small__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});
var small__2 = (function() { 
var G__17889__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__7685__auto__,children__7686__auto__);
};
var G__17889 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17890__i = 0, G__17890__a = new Array(arguments.length -  1);
while (G__17890__i < G__17890__a.length) {G__17890__a[G__17890__i] = arguments[G__17890__i + 1]; ++G__17890__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17890__a,0);
} 
return G__17889__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17889.cljs$lang$maxFixedArity = 1;
G__17889.cljs$lang$applyTo = (function (arglist__17891){
var opts__7685__auto__ = cljs.core.first(arglist__17891);
var children__7686__auto__ = cljs.core.rest(arglist__17891);
return G__17889__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17889.cljs$core$IFn$_invoke$arity$variadic = G__17889__delegate;
return G__17889;
})()
;
small = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return small__0.call(this);
default:
var G__17892 = null;
if (arguments.length > 1) {
var G__17893__i = 0, G__17893__a = new Array(arguments.length -  1);
while (G__17893__i < G__17893__a.length) {G__17893__a[G__17893__i] = arguments[G__17893__i + 1]; ++G__17893__i;}
G__17892 = new cljs.core.IndexedSeq(G__17893__a,0);
}
return small__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
small.cljs$lang$maxFixedArity = 1;
small.cljs$lang$applyTo = small__2.cljs$lang$applyTo;
small.cljs$core$IFn$_invoke$arity$0 = small__0;
small.cljs$core$IFn$_invoke$arity$variadic = small__2.cljs$core$IFn$_invoke$arity$variadic;
return small;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.source = (function() {
var source = null;
var source__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});
var source__2 = (function() { 
var G__17894__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__7685__auto__,children__7686__auto__);
};
var G__17894 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17895__i = 0, G__17895__a = new Array(arguments.length -  1);
while (G__17895__i < G__17895__a.length) {G__17895__a[G__17895__i] = arguments[G__17895__i + 1]; ++G__17895__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17895__a,0);
} 
return G__17894__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17894.cljs$lang$maxFixedArity = 1;
G__17894.cljs$lang$applyTo = (function (arglist__17896){
var opts__7685__auto__ = cljs.core.first(arglist__17896);
var children__7686__auto__ = cljs.core.rest(arglist__17896);
return G__17894__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17894.cljs$core$IFn$_invoke$arity$variadic = G__17894__delegate;
return G__17894;
})()
;
source = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return source__0.call(this);
default:
var G__17897 = null;
if (arguments.length > 1) {
var G__17898__i = 0, G__17898__a = new Array(arguments.length -  1);
while (G__17898__i < G__17898__a.length) {G__17898__a[G__17898__i] = arguments[G__17898__i + 1]; ++G__17898__i;}
G__17897 = new cljs.core.IndexedSeq(G__17898__a,0);
}
return source__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
source.cljs$lang$maxFixedArity = 1;
source.cljs$lang$applyTo = source__2.cljs$lang$applyTo;
source.cljs$core$IFn$_invoke$arity$0 = source__0;
source.cljs$core$IFn$_invoke$arity$variadic = source__2.cljs$core$IFn$_invoke$arity$variadic;
return source;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.span = (function() {
var span = null;
var span__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});
var span__2 = (function() { 
var G__17899__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__7685__auto__,children__7686__auto__);
};
var G__17899 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17900__i = 0, G__17900__a = new Array(arguments.length -  1);
while (G__17900__i < G__17900__a.length) {G__17900__a[G__17900__i] = arguments[G__17900__i + 1]; ++G__17900__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17900__a,0);
} 
return G__17899__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17899.cljs$lang$maxFixedArity = 1;
G__17899.cljs$lang$applyTo = (function (arglist__17901){
var opts__7685__auto__ = cljs.core.first(arglist__17901);
var children__7686__auto__ = cljs.core.rest(arglist__17901);
return G__17899__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17899.cljs$core$IFn$_invoke$arity$variadic = G__17899__delegate;
return G__17899;
})()
;
span = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return span__0.call(this);
default:
var G__17902 = null;
if (arguments.length > 1) {
var G__17903__i = 0, G__17903__a = new Array(arguments.length -  1);
while (G__17903__i < G__17903__a.length) {G__17903__a[G__17903__i] = arguments[G__17903__i + 1]; ++G__17903__i;}
G__17902 = new cljs.core.IndexedSeq(G__17903__a,0);
}
return span__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
span.cljs$lang$maxFixedArity = 1;
span.cljs$lang$applyTo = span__2.cljs$lang$applyTo;
span.cljs$core$IFn$_invoke$arity$0 = span__0;
span.cljs$core$IFn$_invoke$arity$variadic = span__2.cljs$core$IFn$_invoke$arity$variadic;
return span;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.strong = (function() {
var strong = null;
var strong__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});
var strong__2 = (function() { 
var G__17904__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__7685__auto__,children__7686__auto__);
};
var G__17904 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17905__i = 0, G__17905__a = new Array(arguments.length -  1);
while (G__17905__i < G__17905__a.length) {G__17905__a[G__17905__i] = arguments[G__17905__i + 1]; ++G__17905__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17905__a,0);
} 
return G__17904__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17904.cljs$lang$maxFixedArity = 1;
G__17904.cljs$lang$applyTo = (function (arglist__17906){
var opts__7685__auto__ = cljs.core.first(arglist__17906);
var children__7686__auto__ = cljs.core.rest(arglist__17906);
return G__17904__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17904.cljs$core$IFn$_invoke$arity$variadic = G__17904__delegate;
return G__17904;
})()
;
strong = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return strong__0.call(this);
default:
var G__17907 = null;
if (arguments.length > 1) {
var G__17908__i = 0, G__17908__a = new Array(arguments.length -  1);
while (G__17908__i < G__17908__a.length) {G__17908__a[G__17908__i] = arguments[G__17908__i + 1]; ++G__17908__i;}
G__17907 = new cljs.core.IndexedSeq(G__17908__a,0);
}
return strong__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
strong.cljs$lang$maxFixedArity = 1;
strong.cljs$lang$applyTo = strong__2.cljs$lang$applyTo;
strong.cljs$core$IFn$_invoke$arity$0 = strong__0;
strong.cljs$core$IFn$_invoke$arity$variadic = strong__2.cljs$core$IFn$_invoke$arity$variadic;
return strong;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.style = (function() {
var style = null;
var style__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});
var style__2 = (function() { 
var G__17909__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__7685__auto__,children__7686__auto__);
};
var G__17909 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17910__i = 0, G__17910__a = new Array(arguments.length -  1);
while (G__17910__i < G__17910__a.length) {G__17910__a[G__17910__i] = arguments[G__17910__i + 1]; ++G__17910__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17910__a,0);
} 
return G__17909__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17909.cljs$lang$maxFixedArity = 1;
G__17909.cljs$lang$applyTo = (function (arglist__17911){
var opts__7685__auto__ = cljs.core.first(arglist__17911);
var children__7686__auto__ = cljs.core.rest(arglist__17911);
return G__17909__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17909.cljs$core$IFn$_invoke$arity$variadic = G__17909__delegate;
return G__17909;
})()
;
style = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return style__0.call(this);
default:
var G__17912 = null;
if (arguments.length > 1) {
var G__17913__i = 0, G__17913__a = new Array(arguments.length -  1);
while (G__17913__i < G__17913__a.length) {G__17913__a[G__17913__i] = arguments[G__17913__i + 1]; ++G__17913__i;}
G__17912 = new cljs.core.IndexedSeq(G__17913__a,0);
}
return style__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
style.cljs$lang$maxFixedArity = 1;
style.cljs$lang$applyTo = style__2.cljs$lang$applyTo;
style.cljs$core$IFn$_invoke$arity$0 = style__0;
style.cljs$core$IFn$_invoke$arity$variadic = style__2.cljs$core$IFn$_invoke$arity$variadic;
return style;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.sub = (function() {
var sub = null;
var sub__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});
var sub__2 = (function() { 
var G__17914__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__7685__auto__,children__7686__auto__);
};
var G__17914 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17915__i = 0, G__17915__a = new Array(arguments.length -  1);
while (G__17915__i < G__17915__a.length) {G__17915__a[G__17915__i] = arguments[G__17915__i + 1]; ++G__17915__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17915__a,0);
} 
return G__17914__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17914.cljs$lang$maxFixedArity = 1;
G__17914.cljs$lang$applyTo = (function (arglist__17916){
var opts__7685__auto__ = cljs.core.first(arglist__17916);
var children__7686__auto__ = cljs.core.rest(arglist__17916);
return G__17914__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17914.cljs$core$IFn$_invoke$arity$variadic = G__17914__delegate;
return G__17914;
})()
;
sub = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return sub__0.call(this);
default:
var G__17917 = null;
if (arguments.length > 1) {
var G__17918__i = 0, G__17918__a = new Array(arguments.length -  1);
while (G__17918__i < G__17918__a.length) {G__17918__a[G__17918__i] = arguments[G__17918__i + 1]; ++G__17918__i;}
G__17917 = new cljs.core.IndexedSeq(G__17918__a,0);
}
return sub__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$lang$maxFixedArity = 1;
sub.cljs$lang$applyTo = sub__2.cljs$lang$applyTo;
sub.cljs$core$IFn$_invoke$arity$0 = sub__0;
sub.cljs$core$IFn$_invoke$arity$variadic = sub__2.cljs$core$IFn$_invoke$arity$variadic;
return sub;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.summary = (function() {
var summary = null;
var summary__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});
var summary__2 = (function() { 
var G__17919__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__7685__auto__,children__7686__auto__);
};
var G__17919 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17920__i = 0, G__17920__a = new Array(arguments.length -  1);
while (G__17920__i < G__17920__a.length) {G__17920__a[G__17920__i] = arguments[G__17920__i + 1]; ++G__17920__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17920__a,0);
} 
return G__17919__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17919.cljs$lang$maxFixedArity = 1;
G__17919.cljs$lang$applyTo = (function (arglist__17921){
var opts__7685__auto__ = cljs.core.first(arglist__17921);
var children__7686__auto__ = cljs.core.rest(arglist__17921);
return G__17919__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17919.cljs$core$IFn$_invoke$arity$variadic = G__17919__delegate;
return G__17919;
})()
;
summary = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return summary__0.call(this);
default:
var G__17922 = null;
if (arguments.length > 1) {
var G__17923__i = 0, G__17923__a = new Array(arguments.length -  1);
while (G__17923__i < G__17923__a.length) {G__17923__a[G__17923__i] = arguments[G__17923__i + 1]; ++G__17923__i;}
G__17922 = new cljs.core.IndexedSeq(G__17923__a,0);
}
return summary__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
summary.cljs$lang$maxFixedArity = 1;
summary.cljs$lang$applyTo = summary__2.cljs$lang$applyTo;
summary.cljs$core$IFn$_invoke$arity$0 = summary__0;
summary.cljs$core$IFn$_invoke$arity$variadic = summary__2.cljs$core$IFn$_invoke$arity$variadic;
return summary;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.sup = (function() {
var sup = null;
var sup__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});
var sup__2 = (function() { 
var G__17924__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__7685__auto__,children__7686__auto__);
};
var G__17924 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17925__i = 0, G__17925__a = new Array(arguments.length -  1);
while (G__17925__i < G__17925__a.length) {G__17925__a[G__17925__i] = arguments[G__17925__i + 1]; ++G__17925__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17925__a,0);
} 
return G__17924__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17924.cljs$lang$maxFixedArity = 1;
G__17924.cljs$lang$applyTo = (function (arglist__17926){
var opts__7685__auto__ = cljs.core.first(arglist__17926);
var children__7686__auto__ = cljs.core.rest(arglist__17926);
return G__17924__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17924.cljs$core$IFn$_invoke$arity$variadic = G__17924__delegate;
return G__17924;
})()
;
sup = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return sup__0.call(this);
default:
var G__17927 = null;
if (arguments.length > 1) {
var G__17928__i = 0, G__17928__a = new Array(arguments.length -  1);
while (G__17928__i < G__17928__a.length) {G__17928__a[G__17928__i] = arguments[G__17928__i + 1]; ++G__17928__i;}
G__17927 = new cljs.core.IndexedSeq(G__17928__a,0);
}
return sup__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sup.cljs$lang$maxFixedArity = 1;
sup.cljs$lang$applyTo = sup__2.cljs$lang$applyTo;
sup.cljs$core$IFn$_invoke$arity$0 = sup__0;
sup.cljs$core$IFn$_invoke$arity$variadic = sup__2.cljs$core$IFn$_invoke$arity$variadic;
return sup;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.table = (function() {
var table = null;
var table__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});
var table__2 = (function() { 
var G__17929__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__7685__auto__,children__7686__auto__);
};
var G__17929 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17930__i = 0, G__17930__a = new Array(arguments.length -  1);
while (G__17930__i < G__17930__a.length) {G__17930__a[G__17930__i] = arguments[G__17930__i + 1]; ++G__17930__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17930__a,0);
} 
return G__17929__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17929.cljs$lang$maxFixedArity = 1;
G__17929.cljs$lang$applyTo = (function (arglist__17931){
var opts__7685__auto__ = cljs.core.first(arglist__17931);
var children__7686__auto__ = cljs.core.rest(arglist__17931);
return G__17929__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17929.cljs$core$IFn$_invoke$arity$variadic = G__17929__delegate;
return G__17929;
})()
;
table = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return table__0.call(this);
default:
var G__17932 = null;
if (arguments.length > 1) {
var G__17933__i = 0, G__17933__a = new Array(arguments.length -  1);
while (G__17933__i < G__17933__a.length) {G__17933__a[G__17933__i] = arguments[G__17933__i + 1]; ++G__17933__i;}
G__17932 = new cljs.core.IndexedSeq(G__17933__a,0);
}
return table__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
table.cljs$lang$maxFixedArity = 1;
table.cljs$lang$applyTo = table__2.cljs$lang$applyTo;
table.cljs$core$IFn$_invoke$arity$0 = table__0;
table.cljs$core$IFn$_invoke$arity$variadic = table__2.cljs$core$IFn$_invoke$arity$variadic;
return table;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.tbody = (function() {
var tbody = null;
var tbody__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});
var tbody__2 = (function() { 
var G__17934__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__7685__auto__,children__7686__auto__);
};
var G__17934 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17935__i = 0, G__17935__a = new Array(arguments.length -  1);
while (G__17935__i < G__17935__a.length) {G__17935__a[G__17935__i] = arguments[G__17935__i + 1]; ++G__17935__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17935__a,0);
} 
return G__17934__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17934.cljs$lang$maxFixedArity = 1;
G__17934.cljs$lang$applyTo = (function (arglist__17936){
var opts__7685__auto__ = cljs.core.first(arglist__17936);
var children__7686__auto__ = cljs.core.rest(arglist__17936);
return G__17934__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17934.cljs$core$IFn$_invoke$arity$variadic = G__17934__delegate;
return G__17934;
})()
;
tbody = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return tbody__0.call(this);
default:
var G__17937 = null;
if (arguments.length > 1) {
var G__17938__i = 0, G__17938__a = new Array(arguments.length -  1);
while (G__17938__i < G__17938__a.length) {G__17938__a[G__17938__i] = arguments[G__17938__i + 1]; ++G__17938__i;}
G__17937 = new cljs.core.IndexedSeq(G__17938__a,0);
}
return tbody__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tbody.cljs$lang$maxFixedArity = 1;
tbody.cljs$lang$applyTo = tbody__2.cljs$lang$applyTo;
tbody.cljs$core$IFn$_invoke$arity$0 = tbody__0;
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__2.cljs$core$IFn$_invoke$arity$variadic;
return tbody;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.td = (function() {
var td = null;
var td__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});
var td__2 = (function() { 
var G__17939__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__7685__auto__,children__7686__auto__);
};
var G__17939 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17940__i = 0, G__17940__a = new Array(arguments.length -  1);
while (G__17940__i < G__17940__a.length) {G__17940__a[G__17940__i] = arguments[G__17940__i + 1]; ++G__17940__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17940__a,0);
} 
return G__17939__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17939.cljs$lang$maxFixedArity = 1;
G__17939.cljs$lang$applyTo = (function (arglist__17941){
var opts__7685__auto__ = cljs.core.first(arglist__17941);
var children__7686__auto__ = cljs.core.rest(arglist__17941);
return G__17939__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17939.cljs$core$IFn$_invoke$arity$variadic = G__17939__delegate;
return G__17939;
})()
;
td = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return td__0.call(this);
default:
var G__17942 = null;
if (arguments.length > 1) {
var G__17943__i = 0, G__17943__a = new Array(arguments.length -  1);
while (G__17943__i < G__17943__a.length) {G__17943__a[G__17943__i] = arguments[G__17943__i + 1]; ++G__17943__i;}
G__17942 = new cljs.core.IndexedSeq(G__17943__a,0);
}
return td__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
td.cljs$lang$maxFixedArity = 1;
td.cljs$lang$applyTo = td__2.cljs$lang$applyTo;
td.cljs$core$IFn$_invoke$arity$0 = td__0;
td.cljs$core$IFn$_invoke$arity$variadic = td__2.cljs$core$IFn$_invoke$arity$variadic;
return td;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.tfoot = (function() {
var tfoot = null;
var tfoot__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});
var tfoot__2 = (function() { 
var G__17944__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__7685__auto__,children__7686__auto__);
};
var G__17944 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17945__i = 0, G__17945__a = new Array(arguments.length -  1);
while (G__17945__i < G__17945__a.length) {G__17945__a[G__17945__i] = arguments[G__17945__i + 1]; ++G__17945__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17945__a,0);
} 
return G__17944__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17944.cljs$lang$maxFixedArity = 1;
G__17944.cljs$lang$applyTo = (function (arglist__17946){
var opts__7685__auto__ = cljs.core.first(arglist__17946);
var children__7686__auto__ = cljs.core.rest(arglist__17946);
return G__17944__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17944.cljs$core$IFn$_invoke$arity$variadic = G__17944__delegate;
return G__17944;
})()
;
tfoot = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return tfoot__0.call(this);
default:
var G__17947 = null;
if (arguments.length > 1) {
var G__17948__i = 0, G__17948__a = new Array(arguments.length -  1);
while (G__17948__i < G__17948__a.length) {G__17948__a[G__17948__i] = arguments[G__17948__i + 1]; ++G__17948__i;}
G__17947 = new cljs.core.IndexedSeq(G__17948__a,0);
}
return tfoot__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tfoot.cljs$lang$maxFixedArity = 1;
tfoot.cljs$lang$applyTo = tfoot__2.cljs$lang$applyTo;
tfoot.cljs$core$IFn$_invoke$arity$0 = tfoot__0;
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__2.cljs$core$IFn$_invoke$arity$variadic;
return tfoot;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.th = (function() {
var th = null;
var th__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});
var th__2 = (function() { 
var G__17949__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__7685__auto__,children__7686__auto__);
};
var G__17949 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17950__i = 0, G__17950__a = new Array(arguments.length -  1);
while (G__17950__i < G__17950__a.length) {G__17950__a[G__17950__i] = arguments[G__17950__i + 1]; ++G__17950__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17950__a,0);
} 
return G__17949__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17949.cljs$lang$maxFixedArity = 1;
G__17949.cljs$lang$applyTo = (function (arglist__17951){
var opts__7685__auto__ = cljs.core.first(arglist__17951);
var children__7686__auto__ = cljs.core.rest(arglist__17951);
return G__17949__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17949.cljs$core$IFn$_invoke$arity$variadic = G__17949__delegate;
return G__17949;
})()
;
th = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return th__0.call(this);
default:
var G__17952 = null;
if (arguments.length > 1) {
var G__17953__i = 0, G__17953__a = new Array(arguments.length -  1);
while (G__17953__i < G__17953__a.length) {G__17953__a[G__17953__i] = arguments[G__17953__i + 1]; ++G__17953__i;}
G__17952 = new cljs.core.IndexedSeq(G__17953__a,0);
}
return th__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
th.cljs$lang$maxFixedArity = 1;
th.cljs$lang$applyTo = th__2.cljs$lang$applyTo;
th.cljs$core$IFn$_invoke$arity$0 = th__0;
th.cljs$core$IFn$_invoke$arity$variadic = th__2.cljs$core$IFn$_invoke$arity$variadic;
return th;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.thead = (function() {
var thead = null;
var thead__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});
var thead__2 = (function() { 
var G__17954__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__7685__auto__,children__7686__auto__);
};
var G__17954 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17955__i = 0, G__17955__a = new Array(arguments.length -  1);
while (G__17955__i < G__17955__a.length) {G__17955__a[G__17955__i] = arguments[G__17955__i + 1]; ++G__17955__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17955__a,0);
} 
return G__17954__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17954.cljs$lang$maxFixedArity = 1;
G__17954.cljs$lang$applyTo = (function (arglist__17956){
var opts__7685__auto__ = cljs.core.first(arglist__17956);
var children__7686__auto__ = cljs.core.rest(arglist__17956);
return G__17954__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17954.cljs$core$IFn$_invoke$arity$variadic = G__17954__delegate;
return G__17954;
})()
;
thead = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return thead__0.call(this);
default:
var G__17957 = null;
if (arguments.length > 1) {
var G__17958__i = 0, G__17958__a = new Array(arguments.length -  1);
while (G__17958__i < G__17958__a.length) {G__17958__a[G__17958__i] = arguments[G__17958__i + 1]; ++G__17958__i;}
G__17957 = new cljs.core.IndexedSeq(G__17958__a,0);
}
return thead__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thead.cljs$lang$maxFixedArity = 1;
thead.cljs$lang$applyTo = thead__2.cljs$lang$applyTo;
thead.cljs$core$IFn$_invoke$arity$0 = thead__0;
thead.cljs$core$IFn$_invoke$arity$variadic = thead__2.cljs$core$IFn$_invoke$arity$variadic;
return thead;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.time = (function() {
var time = null;
var time__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});
var time__2 = (function() { 
var G__17959__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__7685__auto__,children__7686__auto__);
};
var G__17959 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17960__i = 0, G__17960__a = new Array(arguments.length -  1);
while (G__17960__i < G__17960__a.length) {G__17960__a[G__17960__i] = arguments[G__17960__i + 1]; ++G__17960__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17960__a,0);
} 
return G__17959__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17959.cljs$lang$maxFixedArity = 1;
G__17959.cljs$lang$applyTo = (function (arglist__17961){
var opts__7685__auto__ = cljs.core.first(arglist__17961);
var children__7686__auto__ = cljs.core.rest(arglist__17961);
return G__17959__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17959.cljs$core$IFn$_invoke$arity$variadic = G__17959__delegate;
return G__17959;
})()
;
time = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return time__0.call(this);
default:
var G__17962 = null;
if (arguments.length > 1) {
var G__17963__i = 0, G__17963__a = new Array(arguments.length -  1);
while (G__17963__i < G__17963__a.length) {G__17963__a[G__17963__i] = arguments[G__17963__i + 1]; ++G__17963__i;}
G__17962 = new cljs.core.IndexedSeq(G__17963__a,0);
}
return time__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time.cljs$lang$maxFixedArity = 1;
time.cljs$lang$applyTo = time__2.cljs$lang$applyTo;
time.cljs$core$IFn$_invoke$arity$0 = time__0;
time.cljs$core$IFn$_invoke$arity$variadic = time__2.cljs$core$IFn$_invoke$arity$variadic;
return time;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.title = (function() {
var title = null;
var title__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});
var title__2 = (function() { 
var G__17964__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__7685__auto__,children__7686__auto__);
};
var G__17964 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17965__i = 0, G__17965__a = new Array(arguments.length -  1);
while (G__17965__i < G__17965__a.length) {G__17965__a[G__17965__i] = arguments[G__17965__i + 1]; ++G__17965__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17965__a,0);
} 
return G__17964__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17964.cljs$lang$maxFixedArity = 1;
G__17964.cljs$lang$applyTo = (function (arglist__17966){
var opts__7685__auto__ = cljs.core.first(arglist__17966);
var children__7686__auto__ = cljs.core.rest(arglist__17966);
return G__17964__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17964.cljs$core$IFn$_invoke$arity$variadic = G__17964__delegate;
return G__17964;
})()
;
title = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return title__0.call(this);
default:
var G__17967 = null;
if (arguments.length > 1) {
var G__17968__i = 0, G__17968__a = new Array(arguments.length -  1);
while (G__17968__i < G__17968__a.length) {G__17968__a[G__17968__i] = arguments[G__17968__i + 1]; ++G__17968__i;}
G__17967 = new cljs.core.IndexedSeq(G__17968__a,0);
}
return title__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
title.cljs$lang$maxFixedArity = 1;
title.cljs$lang$applyTo = title__2.cljs$lang$applyTo;
title.cljs$core$IFn$_invoke$arity$0 = title__0;
title.cljs$core$IFn$_invoke$arity$variadic = title__2.cljs$core$IFn$_invoke$arity$variadic;
return title;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.tr = (function() {
var tr = null;
var tr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});
var tr__2 = (function() { 
var G__17969__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__7685__auto__,children__7686__auto__);
};
var G__17969 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17970__i = 0, G__17970__a = new Array(arguments.length -  1);
while (G__17970__i < G__17970__a.length) {G__17970__a[G__17970__i] = arguments[G__17970__i + 1]; ++G__17970__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17970__a,0);
} 
return G__17969__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17969.cljs$lang$maxFixedArity = 1;
G__17969.cljs$lang$applyTo = (function (arglist__17971){
var opts__7685__auto__ = cljs.core.first(arglist__17971);
var children__7686__auto__ = cljs.core.rest(arglist__17971);
return G__17969__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17969.cljs$core$IFn$_invoke$arity$variadic = G__17969__delegate;
return G__17969;
})()
;
tr = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return tr__0.call(this);
default:
var G__17972 = null;
if (arguments.length > 1) {
var G__17973__i = 0, G__17973__a = new Array(arguments.length -  1);
while (G__17973__i < G__17973__a.length) {G__17973__a[G__17973__i] = arguments[G__17973__i + 1]; ++G__17973__i;}
G__17972 = new cljs.core.IndexedSeq(G__17973__a,0);
}
return tr__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tr.cljs$lang$maxFixedArity = 1;
tr.cljs$lang$applyTo = tr__2.cljs$lang$applyTo;
tr.cljs$core$IFn$_invoke$arity$0 = tr__0;
tr.cljs$core$IFn$_invoke$arity$variadic = tr__2.cljs$core$IFn$_invoke$arity$variadic;
return tr;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.track = (function() {
var track = null;
var track__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});
var track__2 = (function() { 
var G__17974__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__7685__auto__,children__7686__auto__);
};
var G__17974 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17975__i = 0, G__17975__a = new Array(arguments.length -  1);
while (G__17975__i < G__17975__a.length) {G__17975__a[G__17975__i] = arguments[G__17975__i + 1]; ++G__17975__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17975__a,0);
} 
return G__17974__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17974.cljs$lang$maxFixedArity = 1;
G__17974.cljs$lang$applyTo = (function (arglist__17976){
var opts__7685__auto__ = cljs.core.first(arglist__17976);
var children__7686__auto__ = cljs.core.rest(arglist__17976);
return G__17974__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17974.cljs$core$IFn$_invoke$arity$variadic = G__17974__delegate;
return G__17974;
})()
;
track = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return track__0.call(this);
default:
var G__17977 = null;
if (arguments.length > 1) {
var G__17978__i = 0, G__17978__a = new Array(arguments.length -  1);
while (G__17978__i < G__17978__a.length) {G__17978__a[G__17978__i] = arguments[G__17978__i + 1]; ++G__17978__i;}
G__17977 = new cljs.core.IndexedSeq(G__17978__a,0);
}
return track__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
track.cljs$lang$maxFixedArity = 1;
track.cljs$lang$applyTo = track__2.cljs$lang$applyTo;
track.cljs$core$IFn$_invoke$arity$0 = track__0;
track.cljs$core$IFn$_invoke$arity$variadic = track__2.cljs$core$IFn$_invoke$arity$variadic;
return track;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.u = (function() {
var u = null;
var u__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});
var u__2 = (function() { 
var G__17979__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__7685__auto__,children__7686__auto__);
};
var G__17979 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17980__i = 0, G__17980__a = new Array(arguments.length -  1);
while (G__17980__i < G__17980__a.length) {G__17980__a[G__17980__i] = arguments[G__17980__i + 1]; ++G__17980__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17980__a,0);
} 
return G__17979__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17979.cljs$lang$maxFixedArity = 1;
G__17979.cljs$lang$applyTo = (function (arglist__17981){
var opts__7685__auto__ = cljs.core.first(arglist__17981);
var children__7686__auto__ = cljs.core.rest(arglist__17981);
return G__17979__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17979.cljs$core$IFn$_invoke$arity$variadic = G__17979__delegate;
return G__17979;
})()
;
u = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return u__0.call(this);
default:
var G__17982 = null;
if (arguments.length > 1) {
var G__17983__i = 0, G__17983__a = new Array(arguments.length -  1);
while (G__17983__i < G__17983__a.length) {G__17983__a[G__17983__i] = arguments[G__17983__i + 1]; ++G__17983__i;}
G__17982 = new cljs.core.IndexedSeq(G__17983__a,0);
}
return u__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
u.cljs$lang$maxFixedArity = 1;
u.cljs$lang$applyTo = u__2.cljs$lang$applyTo;
u.cljs$core$IFn$_invoke$arity$0 = u__0;
u.cljs$core$IFn$_invoke$arity$variadic = u__2.cljs$core$IFn$_invoke$arity$variadic;
return u;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.ul = (function() {
var ul = null;
var ul__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});
var ul__2 = (function() { 
var G__17984__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__7685__auto__,children__7686__auto__);
};
var G__17984 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17985__i = 0, G__17985__a = new Array(arguments.length -  1);
while (G__17985__i < G__17985__a.length) {G__17985__a[G__17985__i] = arguments[G__17985__i + 1]; ++G__17985__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17985__a,0);
} 
return G__17984__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17984.cljs$lang$maxFixedArity = 1;
G__17984.cljs$lang$applyTo = (function (arglist__17986){
var opts__7685__auto__ = cljs.core.first(arglist__17986);
var children__7686__auto__ = cljs.core.rest(arglist__17986);
return G__17984__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17984.cljs$core$IFn$_invoke$arity$variadic = G__17984__delegate;
return G__17984;
})()
;
ul = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return ul__0.call(this);
default:
var G__17987 = null;
if (arguments.length > 1) {
var G__17988__i = 0, G__17988__a = new Array(arguments.length -  1);
while (G__17988__i < G__17988__a.length) {G__17988__a[G__17988__i] = arguments[G__17988__i + 1]; ++G__17988__i;}
G__17987 = new cljs.core.IndexedSeq(G__17988__a,0);
}
return ul__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ul.cljs$lang$maxFixedArity = 1;
ul.cljs$lang$applyTo = ul__2.cljs$lang$applyTo;
ul.cljs$core$IFn$_invoke$arity$0 = ul__0;
ul.cljs$core$IFn$_invoke$arity$variadic = ul__2.cljs$core$IFn$_invoke$arity$variadic;
return ul;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.var$ = (function() {
var var$ = null;
var var$__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});
var var$__2 = (function() { 
var G__17989__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__7685__auto__,children__7686__auto__);
};
var G__17989 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17990__i = 0, G__17990__a = new Array(arguments.length -  1);
while (G__17990__i < G__17990__a.length) {G__17990__a[G__17990__i] = arguments[G__17990__i + 1]; ++G__17990__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17990__a,0);
} 
return G__17989__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17989.cljs$lang$maxFixedArity = 1;
G__17989.cljs$lang$applyTo = (function (arglist__17991){
var opts__7685__auto__ = cljs.core.first(arglist__17991);
var children__7686__auto__ = cljs.core.rest(arglist__17991);
return G__17989__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17989.cljs$core$IFn$_invoke$arity$variadic = G__17989__delegate;
return G__17989;
})()
;
var$ = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return var$__0.call(this);
default:
var G__17992 = null;
if (arguments.length > 1) {
var G__17993__i = 0, G__17993__a = new Array(arguments.length -  1);
while (G__17993__i < G__17993__a.length) {G__17993__a[G__17993__i] = arguments[G__17993__i + 1]; ++G__17993__i;}
G__17992 = new cljs.core.IndexedSeq(G__17993__a,0);
}
return var$__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
var$.cljs$lang$maxFixedArity = 1;
var$.cljs$lang$applyTo = var$__2.cljs$lang$applyTo;
var$.cljs$core$IFn$_invoke$arity$0 = var$__0;
var$.cljs$core$IFn$_invoke$arity$variadic = var$__2.cljs$core$IFn$_invoke$arity$variadic;
return var$;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.video = (function() {
var video = null;
var video__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});
var video__2 = (function() { 
var G__17994__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__7685__auto__,children__7686__auto__);
};
var G__17994 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__17995__i = 0, G__17995__a = new Array(arguments.length -  1);
while (G__17995__i < G__17995__a.length) {G__17995__a[G__17995__i] = arguments[G__17995__i + 1]; ++G__17995__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__17995__a,0);
} 
return G__17994__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17994.cljs$lang$maxFixedArity = 1;
G__17994.cljs$lang$applyTo = (function (arglist__17996){
var opts__7685__auto__ = cljs.core.first(arglist__17996);
var children__7686__auto__ = cljs.core.rest(arglist__17996);
return G__17994__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17994.cljs$core$IFn$_invoke$arity$variadic = G__17994__delegate;
return G__17994;
})()
;
video = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return video__0.call(this);
default:
var G__17997 = null;
if (arguments.length > 1) {
var G__17998__i = 0, G__17998__a = new Array(arguments.length -  1);
while (G__17998__i < G__17998__a.length) {G__17998__a[G__17998__i] = arguments[G__17998__i + 1]; ++G__17998__i;}
G__17997 = new cljs.core.IndexedSeq(G__17998__a,0);
}
return video__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__17997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
video.cljs$lang$maxFixedArity = 1;
video.cljs$lang$applyTo = video__2.cljs$lang$applyTo;
video.cljs$core$IFn$_invoke$arity$0 = video__0;
video.cljs$core$IFn$_invoke$arity$variadic = video__2.cljs$core$IFn$_invoke$arity$variadic;
return video;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.wbr = (function() {
var wbr = null;
var wbr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});
var wbr__2 = (function() { 
var G__17999__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__7685__auto__,children__7686__auto__);
};
var G__17999 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__18000__i = 0, G__18000__a = new Array(arguments.length -  1);
while (G__18000__i < G__18000__a.length) {G__18000__a[G__18000__i] = arguments[G__18000__i + 1]; ++G__18000__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__18000__a,0);
} 
return G__17999__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__17999.cljs$lang$maxFixedArity = 1;
G__17999.cljs$lang$applyTo = (function (arglist__18001){
var opts__7685__auto__ = cljs.core.first(arglist__18001);
var children__7686__auto__ = cljs.core.rest(arglist__18001);
return G__17999__delegate(opts__7685__auto__,children__7686__auto__);
});
G__17999.cljs$core$IFn$_invoke$arity$variadic = G__17999__delegate;
return G__17999;
})()
;
wbr = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return wbr__0.call(this);
default:
var G__18002 = null;
if (arguments.length > 1) {
var G__18003__i = 0, G__18003__a = new Array(arguments.length -  1);
while (G__18003__i < G__18003__a.length) {G__18003__a[G__18003__i] = arguments[G__18003__i + 1]; ++G__18003__i;}
G__18002 = new cljs.core.IndexedSeq(G__18003__a,0);
}
return wbr__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__18002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
wbr.cljs$lang$maxFixedArity = 1;
wbr.cljs$lang$applyTo = wbr__2.cljs$lang$applyTo;
wbr.cljs$core$IFn$_invoke$arity$0 = wbr__0;
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__2.cljs$core$IFn$_invoke$arity$variadic;
return wbr;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.circle = (function() {
var circle = null;
var circle__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});
var circle__2 = (function() { 
var G__18004__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__7685__auto__,children__7686__auto__);
};
var G__18004 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__18005__i = 0, G__18005__a = new Array(arguments.length -  1);
while (G__18005__i < G__18005__a.length) {G__18005__a[G__18005__i] = arguments[G__18005__i + 1]; ++G__18005__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__18005__a,0);
} 
return G__18004__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__18004.cljs$lang$maxFixedArity = 1;
G__18004.cljs$lang$applyTo = (function (arglist__18006){
var opts__7685__auto__ = cljs.core.first(arglist__18006);
var children__7686__auto__ = cljs.core.rest(arglist__18006);
return G__18004__delegate(opts__7685__auto__,children__7686__auto__);
});
G__18004.cljs$core$IFn$_invoke$arity$variadic = G__18004__delegate;
return G__18004;
})()
;
circle = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return circle__0.call(this);
default:
var G__18007 = null;
if (arguments.length > 1) {
var G__18008__i = 0, G__18008__a = new Array(arguments.length -  1);
while (G__18008__i < G__18008__a.length) {G__18008__a[G__18008__i] = arguments[G__18008__i + 1]; ++G__18008__i;}
G__18007 = new cljs.core.IndexedSeq(G__18008__a,0);
}
return circle__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__18007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
circle.cljs$lang$maxFixedArity = 1;
circle.cljs$lang$applyTo = circle__2.cljs$lang$applyTo;
circle.cljs$core$IFn$_invoke$arity$0 = circle__0;
circle.cljs$core$IFn$_invoke$arity$variadic = circle__2.cljs$core$IFn$_invoke$arity$variadic;
return circle;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.ellipse = (function() {
var ellipse = null;
var ellipse__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});
var ellipse__2 = (function() { 
var G__18009__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__7685__auto__,children__7686__auto__);
};
var G__18009 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__18010__i = 0, G__18010__a = new Array(arguments.length -  1);
while (G__18010__i < G__18010__a.length) {G__18010__a[G__18010__i] = arguments[G__18010__i + 1]; ++G__18010__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__18010__a,0);
} 
return G__18009__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__18009.cljs$lang$maxFixedArity = 1;
G__18009.cljs$lang$applyTo = (function (arglist__18011){
var opts__7685__auto__ = cljs.core.first(arglist__18011);
var children__7686__auto__ = cljs.core.rest(arglist__18011);
return G__18009__delegate(opts__7685__auto__,children__7686__auto__);
});
G__18009.cljs$core$IFn$_invoke$arity$variadic = G__18009__delegate;
return G__18009;
})()
;
ellipse = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return ellipse__0.call(this);
default:
var G__18012 = null;
if (arguments.length > 1) {
var G__18013__i = 0, G__18013__a = new Array(arguments.length -  1);
while (G__18013__i < G__18013__a.length) {G__18013__a[G__18013__i] = arguments[G__18013__i + 1]; ++G__18013__i;}
G__18012 = new cljs.core.IndexedSeq(G__18013__a,0);
}
return ellipse__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__18012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ellipse.cljs$lang$maxFixedArity = 1;
ellipse.cljs$lang$applyTo = ellipse__2.cljs$lang$applyTo;
ellipse.cljs$core$IFn$_invoke$arity$0 = ellipse__0;
ellipse.cljs$core$IFn$_invoke$arity$variadic = ellipse__2.cljs$core$IFn$_invoke$arity$variadic;
return ellipse;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.g = (function() {
var g = null;
var g__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});
var g__2 = (function() { 
var G__18014__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__7685__auto__,children__7686__auto__);
};
var G__18014 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__18015__i = 0, G__18015__a = new Array(arguments.length -  1);
while (G__18015__i < G__18015__a.length) {G__18015__a[G__18015__i] = arguments[G__18015__i + 1]; ++G__18015__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__18015__a,0);
} 
return G__18014__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__18014.cljs$lang$maxFixedArity = 1;
G__18014.cljs$lang$applyTo = (function (arglist__18016){
var opts__7685__auto__ = cljs.core.first(arglist__18016);
var children__7686__auto__ = cljs.core.rest(arglist__18016);
return G__18014__delegate(opts__7685__auto__,children__7686__auto__);
});
G__18014.cljs$core$IFn$_invoke$arity$variadic = G__18014__delegate;
return G__18014;
})()
;
g = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return g__0.call(this);
default:
var G__18017 = null;
if (arguments.length > 1) {
var G__18018__i = 0, G__18018__a = new Array(arguments.length -  1);
while (G__18018__i < G__18018__a.length) {G__18018__a[G__18018__i] = arguments[G__18018__i + 1]; ++G__18018__i;}
G__18017 = new cljs.core.IndexedSeq(G__18018__a,0);
}
return g__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__18017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
g.cljs$lang$maxFixedArity = 1;
g.cljs$lang$applyTo = g__2.cljs$lang$applyTo;
g.cljs$core$IFn$_invoke$arity$0 = g__0;
g.cljs$core$IFn$_invoke$arity$variadic = g__2.cljs$core$IFn$_invoke$arity$variadic;
return g;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.line = (function() {
var line = null;
var line__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});
var line__2 = (function() { 
var G__18019__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__7685__auto__,children__7686__auto__);
};
var G__18019 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__18020__i = 0, G__18020__a = new Array(arguments.length -  1);
while (G__18020__i < G__18020__a.length) {G__18020__a[G__18020__i] = arguments[G__18020__i + 1]; ++G__18020__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__18020__a,0);
} 
return G__18019__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__18019.cljs$lang$maxFixedArity = 1;
G__18019.cljs$lang$applyTo = (function (arglist__18021){
var opts__7685__auto__ = cljs.core.first(arglist__18021);
var children__7686__auto__ = cljs.core.rest(arglist__18021);
return G__18019__delegate(opts__7685__auto__,children__7686__auto__);
});
G__18019.cljs$core$IFn$_invoke$arity$variadic = G__18019__delegate;
return G__18019;
})()
;
line = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return line__0.call(this);
default:
var G__18022 = null;
if (arguments.length > 1) {
var G__18023__i = 0, G__18023__a = new Array(arguments.length -  1);
while (G__18023__i < G__18023__a.length) {G__18023__a[G__18023__i] = arguments[G__18023__i + 1]; ++G__18023__i;}
G__18022 = new cljs.core.IndexedSeq(G__18023__a,0);
}
return line__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__18022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
line.cljs$lang$maxFixedArity = 1;
line.cljs$lang$applyTo = line__2.cljs$lang$applyTo;
line.cljs$core$IFn$_invoke$arity$0 = line__0;
line.cljs$core$IFn$_invoke$arity$variadic = line__2.cljs$core$IFn$_invoke$arity$variadic;
return line;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.path = (function() {
var path = null;
var path__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});
var path__2 = (function() { 
var G__18024__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__7685__auto__,children__7686__auto__);
};
var G__18024 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__18025__i = 0, G__18025__a = new Array(arguments.length -  1);
while (G__18025__i < G__18025__a.length) {G__18025__a[G__18025__i] = arguments[G__18025__i + 1]; ++G__18025__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__18025__a,0);
} 
return G__18024__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__18024.cljs$lang$maxFixedArity = 1;
G__18024.cljs$lang$applyTo = (function (arglist__18026){
var opts__7685__auto__ = cljs.core.first(arglist__18026);
var children__7686__auto__ = cljs.core.rest(arglist__18026);
return G__18024__delegate(opts__7685__auto__,children__7686__auto__);
});
G__18024.cljs$core$IFn$_invoke$arity$variadic = G__18024__delegate;
return G__18024;
})()
;
path = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return path__0.call(this);
default:
var G__18027 = null;
if (arguments.length > 1) {
var G__18028__i = 0, G__18028__a = new Array(arguments.length -  1);
while (G__18028__i < G__18028__a.length) {G__18028__a[G__18028__i] = arguments[G__18028__i + 1]; ++G__18028__i;}
G__18027 = new cljs.core.IndexedSeq(G__18028__a,0);
}
return path__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__18027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
path.cljs$lang$maxFixedArity = 1;
path.cljs$lang$applyTo = path__2.cljs$lang$applyTo;
path.cljs$core$IFn$_invoke$arity$0 = path__0;
path.cljs$core$IFn$_invoke$arity$variadic = path__2.cljs$core$IFn$_invoke$arity$variadic;
return path;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.polyline = (function() {
var polyline = null;
var polyline__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});
var polyline__2 = (function() { 
var G__18029__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__7685__auto__,children__7686__auto__);
};
var G__18029 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__18030__i = 0, G__18030__a = new Array(arguments.length -  1);
while (G__18030__i < G__18030__a.length) {G__18030__a[G__18030__i] = arguments[G__18030__i + 1]; ++G__18030__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__18030__a,0);
} 
return G__18029__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__18029.cljs$lang$maxFixedArity = 1;
G__18029.cljs$lang$applyTo = (function (arglist__18031){
var opts__7685__auto__ = cljs.core.first(arglist__18031);
var children__7686__auto__ = cljs.core.rest(arglist__18031);
return G__18029__delegate(opts__7685__auto__,children__7686__auto__);
});
G__18029.cljs$core$IFn$_invoke$arity$variadic = G__18029__delegate;
return G__18029;
})()
;
polyline = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return polyline__0.call(this);
default:
var G__18032 = null;
if (arguments.length > 1) {
var G__18033__i = 0, G__18033__a = new Array(arguments.length -  1);
while (G__18033__i < G__18033__a.length) {G__18033__a[G__18033__i] = arguments[G__18033__i + 1]; ++G__18033__i;}
G__18032 = new cljs.core.IndexedSeq(G__18033__a,0);
}
return polyline__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__18032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
polyline.cljs$lang$maxFixedArity = 1;
polyline.cljs$lang$applyTo = polyline__2.cljs$lang$applyTo;
polyline.cljs$core$IFn$_invoke$arity$0 = polyline__0;
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__2.cljs$core$IFn$_invoke$arity$variadic;
return polyline;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.rect = (function() {
var rect = null;
var rect__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});
var rect__2 = (function() { 
var G__18034__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__7685__auto__,children__7686__auto__);
};
var G__18034 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__18035__i = 0, G__18035__a = new Array(arguments.length -  1);
while (G__18035__i < G__18035__a.length) {G__18035__a[G__18035__i] = arguments[G__18035__i + 1]; ++G__18035__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__18035__a,0);
} 
return G__18034__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__18034.cljs$lang$maxFixedArity = 1;
G__18034.cljs$lang$applyTo = (function (arglist__18036){
var opts__7685__auto__ = cljs.core.first(arglist__18036);
var children__7686__auto__ = cljs.core.rest(arglist__18036);
return G__18034__delegate(opts__7685__auto__,children__7686__auto__);
});
G__18034.cljs$core$IFn$_invoke$arity$variadic = G__18034__delegate;
return G__18034;
})()
;
rect = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return rect__0.call(this);
default:
var G__18037 = null;
if (arguments.length > 1) {
var G__18038__i = 0, G__18038__a = new Array(arguments.length -  1);
while (G__18038__i < G__18038__a.length) {G__18038__a[G__18038__i] = arguments[G__18038__i + 1]; ++G__18038__i;}
G__18037 = new cljs.core.IndexedSeq(G__18038__a,0);
}
return rect__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__18037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rect.cljs$lang$maxFixedArity = 1;
rect.cljs$lang$applyTo = rect__2.cljs$lang$applyTo;
rect.cljs$core$IFn$_invoke$arity$0 = rect__0;
rect.cljs$core$IFn$_invoke$arity$variadic = rect__2.cljs$core$IFn$_invoke$arity$variadic;
return rect;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.svg = (function() {
var svg = null;
var svg__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});
var svg__2 = (function() { 
var G__18039__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__7685__auto__,children__7686__auto__);
};
var G__18039 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__18040__i = 0, G__18040__a = new Array(arguments.length -  1);
while (G__18040__i < G__18040__a.length) {G__18040__a[G__18040__i] = arguments[G__18040__i + 1]; ++G__18040__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__18040__a,0);
} 
return G__18039__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__18039.cljs$lang$maxFixedArity = 1;
G__18039.cljs$lang$applyTo = (function (arglist__18041){
var opts__7685__auto__ = cljs.core.first(arglist__18041);
var children__7686__auto__ = cljs.core.rest(arglist__18041);
return G__18039__delegate(opts__7685__auto__,children__7686__auto__);
});
G__18039.cljs$core$IFn$_invoke$arity$variadic = G__18039__delegate;
return G__18039;
})()
;
svg = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return svg__0.call(this);
default:
var G__18042 = null;
if (arguments.length > 1) {
var G__18043__i = 0, G__18043__a = new Array(arguments.length -  1);
while (G__18043__i < G__18043__a.length) {G__18043__a[G__18043__i] = arguments[G__18043__i + 1]; ++G__18043__i;}
G__18042 = new cljs.core.IndexedSeq(G__18043__a,0);
}
return svg__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__18042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
svg.cljs$lang$maxFixedArity = 1;
svg.cljs$lang$applyTo = svg__2.cljs$lang$applyTo;
svg.cljs$core$IFn$_invoke$arity$0 = svg__0;
svg.cljs$core$IFn$_invoke$arity$variadic = svg__2.cljs$core$IFn$_invoke$arity$variadic;
return svg;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.text = (function() {
var text = null;
var text__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});
var text__2 = (function() { 
var G__18044__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__7685__auto__,children__7686__auto__);
};
var G__18044 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__18045__i = 0, G__18045__a = new Array(arguments.length -  1);
while (G__18045__i < G__18045__a.length) {G__18045__a[G__18045__i] = arguments[G__18045__i + 1]; ++G__18045__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__18045__a,0);
} 
return G__18044__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__18044.cljs$lang$maxFixedArity = 1;
G__18044.cljs$lang$applyTo = (function (arglist__18046){
var opts__7685__auto__ = cljs.core.first(arglist__18046);
var children__7686__auto__ = cljs.core.rest(arglist__18046);
return G__18044__delegate(opts__7685__auto__,children__7686__auto__);
});
G__18044.cljs$core$IFn$_invoke$arity$variadic = G__18044__delegate;
return G__18044;
})()
;
text = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return text__0.call(this);
default:
var G__18047 = null;
if (arguments.length > 1) {
var G__18048__i = 0, G__18048__a = new Array(arguments.length -  1);
while (G__18048__i < G__18048__a.length) {G__18048__a[G__18048__i] = arguments[G__18048__i + 1]; ++G__18048__i;}
G__18047 = new cljs.core.IndexedSeq(G__18048__a,0);
}
return text__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__18047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text.cljs$lang$maxFixedArity = 1;
text.cljs$lang$applyTo = text__2.cljs$lang$applyTo;
text.cljs$core$IFn$_invoke$arity$0 = text__0;
text.cljs$core$IFn$_invoke$arity$variadic = text__2.cljs$core$IFn$_invoke$arity$variadic;
return text;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.defs = (function() {
var defs = null;
var defs__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});
var defs__2 = (function() { 
var G__18049__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__7685__auto__,children__7686__auto__);
};
var G__18049 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__18050__i = 0, G__18050__a = new Array(arguments.length -  1);
while (G__18050__i < G__18050__a.length) {G__18050__a[G__18050__i] = arguments[G__18050__i + 1]; ++G__18050__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__18050__a,0);
} 
return G__18049__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__18049.cljs$lang$maxFixedArity = 1;
G__18049.cljs$lang$applyTo = (function (arglist__18051){
var opts__7685__auto__ = cljs.core.first(arglist__18051);
var children__7686__auto__ = cljs.core.rest(arglist__18051);
return G__18049__delegate(opts__7685__auto__,children__7686__auto__);
});
G__18049.cljs$core$IFn$_invoke$arity$variadic = G__18049__delegate;
return G__18049;
})()
;
defs = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return defs__0.call(this);
default:
var G__18052 = null;
if (arguments.length > 1) {
var G__18053__i = 0, G__18053__a = new Array(arguments.length -  1);
while (G__18053__i < G__18053__a.length) {G__18053__a[G__18053__i] = arguments[G__18053__i + 1]; ++G__18053__i;}
G__18052 = new cljs.core.IndexedSeq(G__18053__a,0);
}
return defs__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__18052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
defs.cljs$lang$maxFixedArity = 1;
defs.cljs$lang$applyTo = defs__2.cljs$lang$applyTo;
defs.cljs$core$IFn$_invoke$arity$0 = defs__0;
defs.cljs$core$IFn$_invoke$arity$variadic = defs__2.cljs$core$IFn$_invoke$arity$variadic;
return defs;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.linearGradient = (function() {
var linearGradient = null;
var linearGradient__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});
var linearGradient__2 = (function() { 
var G__18054__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__7685__auto__,children__7686__auto__);
};
var G__18054 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__18055__i = 0, G__18055__a = new Array(arguments.length -  1);
while (G__18055__i < G__18055__a.length) {G__18055__a[G__18055__i] = arguments[G__18055__i + 1]; ++G__18055__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__18055__a,0);
} 
return G__18054__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__18054.cljs$lang$maxFixedArity = 1;
G__18054.cljs$lang$applyTo = (function (arglist__18056){
var opts__7685__auto__ = cljs.core.first(arglist__18056);
var children__7686__auto__ = cljs.core.rest(arglist__18056);
return G__18054__delegate(opts__7685__auto__,children__7686__auto__);
});
G__18054.cljs$core$IFn$_invoke$arity$variadic = G__18054__delegate;
return G__18054;
})()
;
linearGradient = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return linearGradient__0.call(this);
default:
var G__18057 = null;
if (arguments.length > 1) {
var G__18058__i = 0, G__18058__a = new Array(arguments.length -  1);
while (G__18058__i < G__18058__a.length) {G__18058__a[G__18058__i] = arguments[G__18058__i + 1]; ++G__18058__i;}
G__18057 = new cljs.core.IndexedSeq(G__18058__a,0);
}
return linearGradient__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__18057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
linearGradient.cljs$lang$maxFixedArity = 1;
linearGradient.cljs$lang$applyTo = linearGradient__2.cljs$lang$applyTo;
linearGradient.cljs$core$IFn$_invoke$arity$0 = linearGradient__0;
linearGradient.cljs$core$IFn$_invoke$arity$variadic = linearGradient__2.cljs$core$IFn$_invoke$arity$variadic;
return linearGradient;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.polygon = (function() {
var polygon = null;
var polygon__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});
var polygon__2 = (function() { 
var G__18059__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__7685__auto__,children__7686__auto__);
};
var G__18059 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__18060__i = 0, G__18060__a = new Array(arguments.length -  1);
while (G__18060__i < G__18060__a.length) {G__18060__a[G__18060__i] = arguments[G__18060__i + 1]; ++G__18060__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__18060__a,0);
} 
return G__18059__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__18059.cljs$lang$maxFixedArity = 1;
G__18059.cljs$lang$applyTo = (function (arglist__18061){
var opts__7685__auto__ = cljs.core.first(arglist__18061);
var children__7686__auto__ = cljs.core.rest(arglist__18061);
return G__18059__delegate(opts__7685__auto__,children__7686__auto__);
});
G__18059.cljs$core$IFn$_invoke$arity$variadic = G__18059__delegate;
return G__18059;
})()
;
polygon = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return polygon__0.call(this);
default:
var G__18062 = null;
if (arguments.length > 1) {
var G__18063__i = 0, G__18063__a = new Array(arguments.length -  1);
while (G__18063__i < G__18063__a.length) {G__18063__a[G__18063__i] = arguments[G__18063__i + 1]; ++G__18063__i;}
G__18062 = new cljs.core.IndexedSeq(G__18063__a,0);
}
return polygon__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__18062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
polygon.cljs$lang$maxFixedArity = 1;
polygon.cljs$lang$applyTo = polygon__2.cljs$lang$applyTo;
polygon.cljs$core$IFn$_invoke$arity$0 = polygon__0;
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__2.cljs$core$IFn$_invoke$arity$variadic;
return polygon;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.radialGradient = (function() {
var radialGradient = null;
var radialGradient__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});
var radialGradient__2 = (function() { 
var G__18064__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__7685__auto__,children__7686__auto__);
};
var G__18064 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__18065__i = 0, G__18065__a = new Array(arguments.length -  1);
while (G__18065__i < G__18065__a.length) {G__18065__a[G__18065__i] = arguments[G__18065__i + 1]; ++G__18065__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__18065__a,0);
} 
return G__18064__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__18064.cljs$lang$maxFixedArity = 1;
G__18064.cljs$lang$applyTo = (function (arglist__18066){
var opts__7685__auto__ = cljs.core.first(arglist__18066);
var children__7686__auto__ = cljs.core.rest(arglist__18066);
return G__18064__delegate(opts__7685__auto__,children__7686__auto__);
});
G__18064.cljs$core$IFn$_invoke$arity$variadic = G__18064__delegate;
return G__18064;
})()
;
radialGradient = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return radialGradient__0.call(this);
default:
var G__18067 = null;
if (arguments.length > 1) {
var G__18068__i = 0, G__18068__a = new Array(arguments.length -  1);
while (G__18068__i < G__18068__a.length) {G__18068__a[G__18068__i] = arguments[G__18068__i + 1]; ++G__18068__i;}
G__18067 = new cljs.core.IndexedSeq(G__18068__a,0);
}
return radialGradient__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__18067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radialGradient.cljs$lang$maxFixedArity = 1;
radialGradient.cljs$lang$applyTo = radialGradient__2.cljs$lang$applyTo;
radialGradient.cljs$core$IFn$_invoke$arity$0 = radialGradient__0;
radialGradient.cljs$core$IFn$_invoke$arity$variadic = radialGradient__2.cljs$core$IFn$_invoke$arity$variadic;
return radialGradient;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.stop = (function() {
var stop = null;
var stop__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});
var stop__2 = (function() { 
var G__18069__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__7685__auto__,children__7686__auto__);
};
var G__18069 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__18070__i = 0, G__18070__a = new Array(arguments.length -  1);
while (G__18070__i < G__18070__a.length) {G__18070__a[G__18070__i] = arguments[G__18070__i + 1]; ++G__18070__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__18070__a,0);
} 
return G__18069__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__18069.cljs$lang$maxFixedArity = 1;
G__18069.cljs$lang$applyTo = (function (arglist__18071){
var opts__7685__auto__ = cljs.core.first(arglist__18071);
var children__7686__auto__ = cljs.core.rest(arglist__18071);
return G__18069__delegate(opts__7685__auto__,children__7686__auto__);
});
G__18069.cljs$core$IFn$_invoke$arity$variadic = G__18069__delegate;
return G__18069;
})()
;
stop = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return stop__0.call(this);
default:
var G__18072 = null;
if (arguments.length > 1) {
var G__18073__i = 0, G__18073__a = new Array(arguments.length -  1);
while (G__18073__i < G__18073__a.length) {G__18073__a[G__18073__i] = arguments[G__18073__i + 1]; ++G__18073__i;}
G__18072 = new cljs.core.IndexedSeq(G__18073__a,0);
}
return stop__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__18072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stop.cljs$lang$maxFixedArity = 1;
stop.cljs$lang$applyTo = stop__2.cljs$lang$applyTo;
stop.cljs$core$IFn$_invoke$arity$0 = stop__0;
stop.cljs$core$IFn$_invoke$arity$variadic = stop__2.cljs$core$IFn$_invoke$arity$variadic;
return stop;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.tspan = (function() {
var tspan = null;
var tspan__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});
var tspan__2 = (function() { 
var G__18074__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__7685__auto__,children__7686__auto__);
};
var G__18074 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__18075__i = 0, G__18075__a = new Array(arguments.length -  1);
while (G__18075__i < G__18075__a.length) {G__18075__a[G__18075__i] = arguments[G__18075__i + 1]; ++G__18075__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__18075__a,0);
} 
return G__18074__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__18074.cljs$lang$maxFixedArity = 1;
G__18074.cljs$lang$applyTo = (function (arglist__18076){
var opts__7685__auto__ = cljs.core.first(arglist__18076);
var children__7686__auto__ = cljs.core.rest(arglist__18076);
return G__18074__delegate(opts__7685__auto__,children__7686__auto__);
});
G__18074.cljs$core$IFn$_invoke$arity$variadic = G__18074__delegate;
return G__18074;
})()
;
tspan = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return tspan__0.call(this);
default:
var G__18077 = null;
if (arguments.length > 1) {
var G__18078__i = 0, G__18078__a = new Array(arguments.length -  1);
while (G__18078__i < G__18078__a.length) {G__18078__a[G__18078__i] = arguments[G__18078__i + 1]; ++G__18078__i;}
G__18077 = new cljs.core.IndexedSeq(G__18078__a,0);
}
return tspan__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__18077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tspan.cljs$lang$maxFixedArity = 1;
tspan.cljs$lang$applyTo = tspan__2.cljs$lang$applyTo;
tspan.cljs$core$IFn$_invoke$arity$0 = tspan__0;
tspan.cljs$core$IFn$_invoke$arity$variadic = tspan__2.cljs$core$IFn$_invoke$arity$variadic;
return tspan;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.input = (function() {
var input = null;
var input__0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});
var input__2 = (function() { 
var G__18079__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__7685__auto__,children__7686__auto__);
};
var G__18079 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__18080__i = 0, G__18080__a = new Array(arguments.length -  1);
while (G__18080__i < G__18080__a.length) {G__18080__a[G__18080__i] = arguments[G__18080__i + 1]; ++G__18080__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__18080__a,0);
} 
return G__18079__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__18079.cljs$lang$maxFixedArity = 1;
G__18079.cljs$lang$applyTo = (function (arglist__18081){
var opts__7685__auto__ = cljs.core.first(arglist__18081);
var children__7686__auto__ = cljs.core.rest(arglist__18081);
return G__18079__delegate(opts__7685__auto__,children__7686__auto__);
});
G__18079.cljs$core$IFn$_invoke$arity$variadic = G__18079__delegate;
return G__18079;
})()
;
input = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return input__0.call(this);
default:
var G__18082 = null;
if (arguments.length > 1) {
var G__18083__i = 0, G__18083__a = new Array(arguments.length -  1);
while (G__18083__i < G__18083__a.length) {G__18083__a[G__18083__i] = arguments[G__18083__i + 1]; ++G__18083__i;}
G__18082 = new cljs.core.IndexedSeq(G__18083__a,0);
}
return input__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__18082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
input.cljs$lang$maxFixedArity = 1;
input.cljs$lang$applyTo = input__2.cljs$lang$applyTo;
input.cljs$core$IFn$_invoke$arity$0 = input__0;
input.cljs$core$IFn$_invoke$arity$variadic = input__2.cljs$core$IFn$_invoke$arity$variadic;
return input;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.textarea = (function() {
var textarea = null;
var textarea__0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});
var textarea__2 = (function() { 
var G__18084__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__7685__auto__,children__7686__auto__);
};
var G__18084 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__18085__i = 0, G__18085__a = new Array(arguments.length -  1);
while (G__18085__i < G__18085__a.length) {G__18085__a[G__18085__i] = arguments[G__18085__i + 1]; ++G__18085__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__18085__a,0);
} 
return G__18084__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__18084.cljs$lang$maxFixedArity = 1;
G__18084.cljs$lang$applyTo = (function (arglist__18086){
var opts__7685__auto__ = cljs.core.first(arglist__18086);
var children__7686__auto__ = cljs.core.rest(arglist__18086);
return G__18084__delegate(opts__7685__auto__,children__7686__auto__);
});
G__18084.cljs$core$IFn$_invoke$arity$variadic = G__18084__delegate;
return G__18084;
})()
;
textarea = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return textarea__0.call(this);
default:
var G__18087 = null;
if (arguments.length > 1) {
var G__18088__i = 0, G__18088__a = new Array(arguments.length -  1);
while (G__18088__i < G__18088__a.length) {G__18088__a[G__18088__i] = arguments[G__18088__i + 1]; ++G__18088__i;}
G__18087 = new cljs.core.IndexedSeq(G__18088__a,0);
}
return textarea__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__18087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
textarea.cljs$lang$maxFixedArity = 1;
textarea.cljs$lang$applyTo = textarea__2.cljs$lang$applyTo;
textarea.cljs$core$IFn$_invoke$arity$0 = textarea__0;
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__2.cljs$core$IFn$_invoke$arity$variadic;
return textarea;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.option = (function() {
var option = null;
var option__0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});
var option__2 = (function() { 
var G__18089__delegate = function (opts__7685__auto__,children__7686__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__7685__auto__,children__7686__auto__);
};
var G__18089 = function (opts__7685__auto__,var_args){
var children__7686__auto__ = null;
if (arguments.length > 1) {
var G__18090__i = 0, G__18090__a = new Array(arguments.length -  1);
while (G__18090__i < G__18090__a.length) {G__18090__a[G__18090__i] = arguments[G__18090__i + 1]; ++G__18090__i;}
  children__7686__auto__ = new cljs.core.IndexedSeq(G__18090__a,0);
} 
return G__18089__delegate.call(this,opts__7685__auto__,children__7686__auto__);};
G__18089.cljs$lang$maxFixedArity = 1;
G__18089.cljs$lang$applyTo = (function (arglist__18091){
var opts__7685__auto__ = cljs.core.first(arglist__18091);
var children__7686__auto__ = cljs.core.rest(arglist__18091);
return G__18089__delegate(opts__7685__auto__,children__7686__auto__);
});
G__18089.cljs$core$IFn$_invoke$arity$variadic = G__18089__delegate;
return G__18089;
})()
;
option = function(opts__7685__auto__,var_args){
var children__7686__auto__ = var_args;
switch(arguments.length){
case 0:
return option__0.call(this);
default:
var G__18092 = null;
if (arguments.length > 1) {
var G__18093__i = 0, G__18093__a = new Array(arguments.length -  1);
while (G__18093__i < G__18093__a.length) {G__18093__a[G__18093__i] = arguments[G__18093__i + 1]; ++G__18093__i;}
G__18092 = new cljs.core.IndexedSeq(G__18093__a,0);
}
return option__2.cljs$core$IFn$_invoke$arity$variadic(opts__7685__auto__, G__18092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
option.cljs$lang$maxFixedArity = 1;
option.cljs$lang$applyTo = option__2.cljs$lang$applyTo;
option.cljs$core$IFn$_invoke$arity$0 = option__0;
option.cljs$core$IFn$_invoke$arity$variadic = option__2.cljs$core$IFn$_invoke$arity$variadic;
return option;
})()
;
om_tools.dom.class_set = (function class_set(m){

var temp__4126__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__4126__auto__){
var ks = temp__4126__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map