// Compiled by ClojureScript 0.0-2725 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){
return (function() { 
var G__25382__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__25381 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__25381,(0),null);
var body = cljs.core.nthnext.call(null,vec__25381,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__25382 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25383__i = 0, G__25383__a = new Array(arguments.length -  0);
while (G__25383__i < G__25383__a.length) {G__25383__a[G__25383__i] = arguments[G__25383__i + 0]; ++G__25383__i;}
  args = new cljs.core.IndexedSeq(G__25383__a,0);
} 
return G__25382__delegate.call(this,args);};
G__25382.cljs$lang$maxFixedArity = 0;
G__25382.cljs$lang$applyTo = (function (arglist__25384){
var args = cljs.core.seq(arglist__25384);
return G__25382__delegate(args);
});
G__25382.cljs$core$IFn$_invoke$arity$variadic = G__25382__delegate;
return G__25382;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4511__auto__ = (function iter__25389(s__25390){
return (new cljs.core.LazySeq(null,(function (){
var s__25390__$1 = s__25390;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25390__$1);
if(temp__4126__auto__){
var s__25390__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25390__$2)){
var c__4509__auto__ = cljs.core.chunk_first.call(null,s__25390__$2);
var size__4510__auto__ = cljs.core.count.call(null,c__4509__auto__);
var b__25392 = cljs.core.chunk_buffer.call(null,size__4510__auto__);
if((function (){var i__25391 = (0);
while(true){
if((i__25391 < size__4510__auto__)){
var args = cljs.core._nth.call(null,c__4509__auto__,i__25391);
cljs.core.chunk_append.call(null,b__25392,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__25393 = (i__25391 + (1));
i__25391 = G__25393;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25392),iter__25389.call(null,cljs.core.chunk_rest.call(null,s__25390__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25392),null);
}
} else {
var args = cljs.core.first.call(null,s__25390__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__25389.call(null,cljs.core.rest.call(null,s__25390__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4511__auto__.call(null,arglists);
});
/**
* Render `element` as HTML string.
*/
sablono.core.render = (function render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
* Render `element` as HTML string, without React internal attributes.
*/
sablono.core.render_static = (function render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){
var iter__4511__auto__ = (function iter__25398(s__25399){
return (new cljs.core.LazySeq(null,(function (){
var s__25399__$1 = s__25399;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25399__$1);
if(temp__4126__auto__){
var s__25399__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25399__$2)){
var c__4509__auto__ = cljs.core.chunk_first.call(null,s__25399__$2);
var size__4510__auto__ = cljs.core.count.call(null,c__4509__auto__);
var b__25401 = cljs.core.chunk_buffer.call(null,size__4510__auto__);
if((function (){var i__25400 = (0);
while(true){
if((i__25400 < size__4510__auto__)){
var style = cljs.core._nth.call(null,c__4509__auto__,i__25400);
cljs.core.chunk_append.call(null,b__25401,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__25402 = (i__25400 + (1));
i__25400 = G__25402;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25401),iter__25398.call(null,cljs.core.chunk_rest.call(null,s__25399__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25401),null);
}
} else {
var style = cljs.core.first.call(null,s__25399__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__25398.call(null,cljs.core.rest.call(null,s__25399__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4511__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
var G__25403__i = 0, G__25403__a = new Array(arguments.length -  0);
while (G__25403__i < G__25403__a.length) {G__25403__a[G__25403__i] = arguments[G__25403__i + 0]; ++G__25403__i;}
  styles = new cljs.core.IndexedSeq(G__25403__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__25404){
var styles = cljs.core.seq(arglist__25404);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to25405 = (function() { 
var link_to25405__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to25405 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__25406__i = 0, G__25406__a = new Array(arguments.length -  1);
while (G__25406__i < G__25406__a.length) {G__25406__a[G__25406__i] = arguments[G__25406__i + 1]; ++G__25406__i;}
  content = new cljs.core.IndexedSeq(G__25406__a,0);
} 
return link_to25405__delegate.call(this,url,content);};
link_to25405.cljs$lang$maxFixedArity = 1;
link_to25405.cljs$lang$applyTo = (function (arglist__25407){
var url = cljs.core.first(arglist__25407);
var content = cljs.core.rest(arglist__25407);
return link_to25405__delegate(url,content);
});
link_to25405.cljs$core$IFn$_invoke$arity$variadic = link_to25405__delegate;
return link_to25405;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to25405);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to25408 = (function() { 
var mail_to25408__delegate = function (e_mail,p__25409){
var vec__25411 = p__25409;
var content = cljs.core.nth.call(null,vec__25411,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3755__auto__ = content;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to25408 = function (e_mail,var_args){
var p__25409 = null;
if (arguments.length > 1) {
var G__25412__i = 0, G__25412__a = new Array(arguments.length -  1);
while (G__25412__i < G__25412__a.length) {G__25412__a[G__25412__i] = arguments[G__25412__i + 1]; ++G__25412__i;}
  p__25409 = new cljs.core.IndexedSeq(G__25412__a,0);
} 
return mail_to25408__delegate.call(this,e_mail,p__25409);};
mail_to25408.cljs$lang$maxFixedArity = 1;
mail_to25408.cljs$lang$applyTo = (function (arglist__25413){
var e_mail = cljs.core.first(arglist__25413);
var p__25409 = cljs.core.rest(arglist__25413);
return mail_to25408__delegate(e_mail,p__25409);
});
mail_to25408.cljs$core$IFn$_invoke$arity$variadic = mail_to25408__delegate;
return mail_to25408;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to25408);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list25414 = (function unordered_list25414(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4511__auto__ = (function iter__25419(s__25420){
return (new cljs.core.LazySeq(null,(function (){
var s__25420__$1 = s__25420;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25420__$1);
if(temp__4126__auto__){
var s__25420__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25420__$2)){
var c__4509__auto__ = cljs.core.chunk_first.call(null,s__25420__$2);
var size__4510__auto__ = cljs.core.count.call(null,c__4509__auto__);
var b__25422 = cljs.core.chunk_buffer.call(null,size__4510__auto__);
if((function (){var i__25421 = (0);
while(true){
if((i__25421 < size__4510__auto__)){
var x = cljs.core._nth.call(null,c__4509__auto__,i__25421);
cljs.core.chunk_append.call(null,b__25422,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25423 = (i__25421 + (1));
i__25421 = G__25423;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25422),iter__25419.call(null,cljs.core.chunk_rest.call(null,s__25420__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25422),null);
}
} else {
var x = cljs.core.first.call(null,s__25420__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__25419.call(null,cljs.core.rest.call(null,s__25420__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4511__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list25414);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list25424 = (function ordered_list25424(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4511__auto__ = (function iter__25429(s__25430){
return (new cljs.core.LazySeq(null,(function (){
var s__25430__$1 = s__25430;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25430__$1);
if(temp__4126__auto__){
var s__25430__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25430__$2)){
var c__4509__auto__ = cljs.core.chunk_first.call(null,s__25430__$2);
var size__4510__auto__ = cljs.core.count.call(null,c__4509__auto__);
var b__25432 = cljs.core.chunk_buffer.call(null,size__4510__auto__);
if((function (){var i__25431 = (0);
while(true){
if((i__25431 < size__4510__auto__)){
var x = cljs.core._nth.call(null,c__4509__auto__,i__25431);
cljs.core.chunk_append.call(null,b__25432,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25433 = (i__25431 + (1));
i__25431 = G__25433;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25432),iter__25429.call(null,cljs.core.chunk_rest.call(null,s__25430__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25432),null);
}
} else {
var x = cljs.core.first.call(null,s__25430__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__25429.call(null,cljs.core.rest.call(null,s__25430__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4511__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list25424);
/**
* Create an image element.
*/
sablono.core.image25434 = (function() {
var image25434 = null;
var image25434__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image25434__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image25434 = function(src,alt){
switch(arguments.length){
case 1:
return image25434__1.call(this,src);
case 2:
return image25434__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image25434.cljs$core$IFn$_invoke$arity$1 = image25434__1;
image25434.cljs$core$IFn$_invoke$arity$2 = image25434__2;
return image25434;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image25434);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__25435_SHARP_,p2__25436_SHARP_){
return [cljs.core.str(p1__25435_SHARP_),cljs.core.str("["),cljs.core.str(p2__25436_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__25437_SHARP_,p2__25438_SHARP_){
return [cljs.core.str(p1__25437_SHARP_),cljs.core.str("-"),cljs.core.str(p2__25438_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field25439 = (function() {
var color_field25439 = null;
var color_field25439__1 = (function (name__11740__auto__){
return color_field25439.call(null,name__11740__auto__,null);
});
var color_field25439__2 = (function (name__11740__auto__,value__11741__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__11740__auto__,value__11741__auto__);
});
color_field25439 = function(name__11740__auto__,value__11741__auto__){
switch(arguments.length){
case 1:
return color_field25439__1.call(this,name__11740__auto__);
case 2:
return color_field25439__2.call(this,name__11740__auto__,value__11741__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field25439.cljs$core$IFn$_invoke$arity$1 = color_field25439__1;
color_field25439.cljs$core$IFn$_invoke$arity$2 = color_field25439__2;
return color_field25439;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field25439);

/**
* Creates a date input field.
*/
sablono.core.date_field25440 = (function() {
var date_field25440 = null;
var date_field25440__1 = (function (name__11740__auto__){
return date_field25440.call(null,name__11740__auto__,null);
});
var date_field25440__2 = (function (name__11740__auto__,value__11741__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__11740__auto__,value__11741__auto__);
});
date_field25440 = function(name__11740__auto__,value__11741__auto__){
switch(arguments.length){
case 1:
return date_field25440__1.call(this,name__11740__auto__);
case 2:
return date_field25440__2.call(this,name__11740__auto__,value__11741__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field25440.cljs$core$IFn$_invoke$arity$1 = date_field25440__1;
date_field25440.cljs$core$IFn$_invoke$arity$2 = date_field25440__2;
return date_field25440;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field25440);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field25441 = (function() {
var datetime_field25441 = null;
var datetime_field25441__1 = (function (name__11740__auto__){
return datetime_field25441.call(null,name__11740__auto__,null);
});
var datetime_field25441__2 = (function (name__11740__auto__,value__11741__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__11740__auto__,value__11741__auto__);
});
datetime_field25441 = function(name__11740__auto__,value__11741__auto__){
switch(arguments.length){
case 1:
return datetime_field25441__1.call(this,name__11740__auto__);
case 2:
return datetime_field25441__2.call(this,name__11740__auto__,value__11741__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field25441.cljs$core$IFn$_invoke$arity$1 = datetime_field25441__1;
datetime_field25441.cljs$core$IFn$_invoke$arity$2 = datetime_field25441__2;
return datetime_field25441;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field25441);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field25442 = (function() {
var datetime_local_field25442 = null;
var datetime_local_field25442__1 = (function (name__11740__auto__){
return datetime_local_field25442.call(null,name__11740__auto__,null);
});
var datetime_local_field25442__2 = (function (name__11740__auto__,value__11741__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__11740__auto__,value__11741__auto__);
});
datetime_local_field25442 = function(name__11740__auto__,value__11741__auto__){
switch(arguments.length){
case 1:
return datetime_local_field25442__1.call(this,name__11740__auto__);
case 2:
return datetime_local_field25442__2.call(this,name__11740__auto__,value__11741__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field25442.cljs$core$IFn$_invoke$arity$1 = datetime_local_field25442__1;
datetime_local_field25442.cljs$core$IFn$_invoke$arity$2 = datetime_local_field25442__2;
return datetime_local_field25442;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field25442);

/**
* Creates a email input field.
*/
sablono.core.email_field25443 = (function() {
var email_field25443 = null;
var email_field25443__1 = (function (name__11740__auto__){
return email_field25443.call(null,name__11740__auto__,null);
});
var email_field25443__2 = (function (name__11740__auto__,value__11741__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__11740__auto__,value__11741__auto__);
});
email_field25443 = function(name__11740__auto__,value__11741__auto__){
switch(arguments.length){
case 1:
return email_field25443__1.call(this,name__11740__auto__);
case 2:
return email_field25443__2.call(this,name__11740__auto__,value__11741__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field25443.cljs$core$IFn$_invoke$arity$1 = email_field25443__1;
email_field25443.cljs$core$IFn$_invoke$arity$2 = email_field25443__2;
return email_field25443;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field25443);

/**
* Creates a file input field.
*/
sablono.core.file_field25444 = (function() {
var file_field25444 = null;
var file_field25444__1 = (function (name__11740__auto__){
return file_field25444.call(null,name__11740__auto__,null);
});
var file_field25444__2 = (function (name__11740__auto__,value__11741__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__11740__auto__,value__11741__auto__);
});
file_field25444 = function(name__11740__auto__,value__11741__auto__){
switch(arguments.length){
case 1:
return file_field25444__1.call(this,name__11740__auto__);
case 2:
return file_field25444__2.call(this,name__11740__auto__,value__11741__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field25444.cljs$core$IFn$_invoke$arity$1 = file_field25444__1;
file_field25444.cljs$core$IFn$_invoke$arity$2 = file_field25444__2;
return file_field25444;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field25444);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field25445 = (function() {
var hidden_field25445 = null;
var hidden_field25445__1 = (function (name__11740__auto__){
return hidden_field25445.call(null,name__11740__auto__,null);
});
var hidden_field25445__2 = (function (name__11740__auto__,value__11741__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__11740__auto__,value__11741__auto__);
});
hidden_field25445 = function(name__11740__auto__,value__11741__auto__){
switch(arguments.length){
case 1:
return hidden_field25445__1.call(this,name__11740__auto__);
case 2:
return hidden_field25445__2.call(this,name__11740__auto__,value__11741__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field25445.cljs$core$IFn$_invoke$arity$1 = hidden_field25445__1;
hidden_field25445.cljs$core$IFn$_invoke$arity$2 = hidden_field25445__2;
return hidden_field25445;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field25445);

/**
* Creates a month input field.
*/
sablono.core.month_field25446 = (function() {
var month_field25446 = null;
var month_field25446__1 = (function (name__11740__auto__){
return month_field25446.call(null,name__11740__auto__,null);
});
var month_field25446__2 = (function (name__11740__auto__,value__11741__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__11740__auto__,value__11741__auto__);
});
month_field25446 = function(name__11740__auto__,value__11741__auto__){
switch(arguments.length){
case 1:
return month_field25446__1.call(this,name__11740__auto__);
case 2:
return month_field25446__2.call(this,name__11740__auto__,value__11741__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field25446.cljs$core$IFn$_invoke$arity$1 = month_field25446__1;
month_field25446.cljs$core$IFn$_invoke$arity$2 = month_field25446__2;
return month_field25446;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field25446);

/**
* Creates a number input field.
*/
sablono.core.number_field25447 = (function() {
var number_field25447 = null;
var number_field25447__1 = (function (name__11740__auto__){
return number_field25447.call(null,name__11740__auto__,null);
});
var number_field25447__2 = (function (name__11740__auto__,value__11741__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__11740__auto__,value__11741__auto__);
});
number_field25447 = function(name__11740__auto__,value__11741__auto__){
switch(arguments.length){
case 1:
return number_field25447__1.call(this,name__11740__auto__);
case 2:
return number_field25447__2.call(this,name__11740__auto__,value__11741__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field25447.cljs$core$IFn$_invoke$arity$1 = number_field25447__1;
number_field25447.cljs$core$IFn$_invoke$arity$2 = number_field25447__2;
return number_field25447;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field25447);

/**
* Creates a password input field.
*/
sablono.core.password_field25448 = (function() {
var password_field25448 = null;
var password_field25448__1 = (function (name__11740__auto__){
return password_field25448.call(null,name__11740__auto__,null);
});
var password_field25448__2 = (function (name__11740__auto__,value__11741__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__11740__auto__,value__11741__auto__);
});
password_field25448 = function(name__11740__auto__,value__11741__auto__){
switch(arguments.length){
case 1:
return password_field25448__1.call(this,name__11740__auto__);
case 2:
return password_field25448__2.call(this,name__11740__auto__,value__11741__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field25448.cljs$core$IFn$_invoke$arity$1 = password_field25448__1;
password_field25448.cljs$core$IFn$_invoke$arity$2 = password_field25448__2;
return password_field25448;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field25448);

/**
* Creates a range input field.
*/
sablono.core.range_field25449 = (function() {
var range_field25449 = null;
var range_field25449__1 = (function (name__11740__auto__){
return range_field25449.call(null,name__11740__auto__,null);
});
var range_field25449__2 = (function (name__11740__auto__,value__11741__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__11740__auto__,value__11741__auto__);
});
range_field25449 = function(name__11740__auto__,value__11741__auto__){
switch(arguments.length){
case 1:
return range_field25449__1.call(this,name__11740__auto__);
case 2:
return range_field25449__2.call(this,name__11740__auto__,value__11741__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field25449.cljs$core$IFn$_invoke$arity$1 = range_field25449__1;
range_field25449.cljs$core$IFn$_invoke$arity$2 = range_field25449__2;
return range_field25449;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field25449);

/**
* Creates a search input field.
*/
sablono.core.search_field25450 = (function() {
var search_field25450 = null;
var search_field25450__1 = (function (name__11740__auto__){
return search_field25450.call(null,name__11740__auto__,null);
});
var search_field25450__2 = (function (name__11740__auto__,value__11741__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__11740__auto__,value__11741__auto__);
});
search_field25450 = function(name__11740__auto__,value__11741__auto__){
switch(arguments.length){
case 1:
return search_field25450__1.call(this,name__11740__auto__);
case 2:
return search_field25450__2.call(this,name__11740__auto__,value__11741__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field25450.cljs$core$IFn$_invoke$arity$1 = search_field25450__1;
search_field25450.cljs$core$IFn$_invoke$arity$2 = search_field25450__2;
return search_field25450;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field25450);

/**
* Creates a tel input field.
*/
sablono.core.tel_field25451 = (function() {
var tel_field25451 = null;
var tel_field25451__1 = (function (name__11740__auto__){
return tel_field25451.call(null,name__11740__auto__,null);
});
var tel_field25451__2 = (function (name__11740__auto__,value__11741__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__11740__auto__,value__11741__auto__);
});
tel_field25451 = function(name__11740__auto__,value__11741__auto__){
switch(arguments.length){
case 1:
return tel_field25451__1.call(this,name__11740__auto__);
case 2:
return tel_field25451__2.call(this,name__11740__auto__,value__11741__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field25451.cljs$core$IFn$_invoke$arity$1 = tel_field25451__1;
tel_field25451.cljs$core$IFn$_invoke$arity$2 = tel_field25451__2;
return tel_field25451;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field25451);

/**
* Creates a text input field.
*/
sablono.core.text_field25452 = (function() {
var text_field25452 = null;
var text_field25452__1 = (function (name__11740__auto__){
return text_field25452.call(null,name__11740__auto__,null);
});
var text_field25452__2 = (function (name__11740__auto__,value__11741__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__11740__auto__,value__11741__auto__);
});
text_field25452 = function(name__11740__auto__,value__11741__auto__){
switch(arguments.length){
case 1:
return text_field25452__1.call(this,name__11740__auto__);
case 2:
return text_field25452__2.call(this,name__11740__auto__,value__11741__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field25452.cljs$core$IFn$_invoke$arity$1 = text_field25452__1;
text_field25452.cljs$core$IFn$_invoke$arity$2 = text_field25452__2;
return text_field25452;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field25452);

/**
* Creates a time input field.
*/
sablono.core.time_field25453 = (function() {
var time_field25453 = null;
var time_field25453__1 = (function (name__11740__auto__){
return time_field25453.call(null,name__11740__auto__,null);
});
var time_field25453__2 = (function (name__11740__auto__,value__11741__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__11740__auto__,value__11741__auto__);
});
time_field25453 = function(name__11740__auto__,value__11741__auto__){
switch(arguments.length){
case 1:
return time_field25453__1.call(this,name__11740__auto__);
case 2:
return time_field25453__2.call(this,name__11740__auto__,value__11741__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field25453.cljs$core$IFn$_invoke$arity$1 = time_field25453__1;
time_field25453.cljs$core$IFn$_invoke$arity$2 = time_field25453__2;
return time_field25453;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field25453);

/**
* Creates a url input field.
*/
sablono.core.url_field25454 = (function() {
var url_field25454 = null;
var url_field25454__1 = (function (name__11740__auto__){
return url_field25454.call(null,name__11740__auto__,null);
});
var url_field25454__2 = (function (name__11740__auto__,value__11741__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__11740__auto__,value__11741__auto__);
});
url_field25454 = function(name__11740__auto__,value__11741__auto__){
switch(arguments.length){
case 1:
return url_field25454__1.call(this,name__11740__auto__);
case 2:
return url_field25454__2.call(this,name__11740__auto__,value__11741__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field25454.cljs$core$IFn$_invoke$arity$1 = url_field25454__1;
url_field25454.cljs$core$IFn$_invoke$arity$2 = url_field25454__2;
return url_field25454;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field25454);

/**
* Creates a week input field.
*/
sablono.core.week_field25455 = (function() {
var week_field25455 = null;
var week_field25455__1 = (function (name__11740__auto__){
return week_field25455.call(null,name__11740__auto__,null);
});
var week_field25455__2 = (function (name__11740__auto__,value__11741__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__11740__auto__,value__11741__auto__);
});
week_field25455 = function(name__11740__auto__,value__11741__auto__){
switch(arguments.length){
case 1:
return week_field25455__1.call(this,name__11740__auto__);
case 2:
return week_field25455__2.call(this,name__11740__auto__,value__11741__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field25455.cljs$core$IFn$_invoke$arity$1 = week_field25455__1;
week_field25455.cljs$core$IFn$_invoke$arity$2 = week_field25455__2;
return week_field25455;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field25455);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box25456 = (function() {
var check_box25456 = null;
var check_box25456__1 = (function (name){
return check_box25456.call(null,name,null);
});
var check_box25456__2 = (function (name,checked_QMARK_){
return check_box25456.call(null,name,checked_QMARK_,"true");
});
var check_box25456__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box25456 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box25456__1.call(this,name);
case 2:
return check_box25456__2.call(this,name,checked_QMARK_);
case 3:
return check_box25456__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box25456.cljs$core$IFn$_invoke$arity$1 = check_box25456__1;
check_box25456.cljs$core$IFn$_invoke$arity$2 = check_box25456__2;
check_box25456.cljs$core$IFn$_invoke$arity$3 = check_box25456__3;
return check_box25456;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box25456);
/**
* Creates a radio button.
*/
sablono.core.radio_button25457 = (function() {
var radio_button25457 = null;
var radio_button25457__1 = (function (group){
return radio_button25457.call(null,group,null);
});
var radio_button25457__2 = (function (group,checked_QMARK_){
return radio_button25457.call(null,group,checked_QMARK_,"true");
});
var radio_button25457__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button25457 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button25457__1.call(this,group);
case 2:
return radio_button25457__2.call(this,group,checked_QMARK_);
case 3:
return radio_button25457__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button25457.cljs$core$IFn$_invoke$arity$1 = radio_button25457__1;
radio_button25457.cljs$core$IFn$_invoke$arity$2 = radio_button25457__2;
radio_button25457.cljs$core$IFn$_invoke$arity$3 = radio_button25457__3;
return radio_button25457;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button25457);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options25458 = (function() {
var select_options25458 = null;
var select_options25458__1 = (function (coll){
return select_options25458.call(null,coll,null);
});
var select_options25458__2 = (function (coll,selected){
var iter__4511__auto__ = (function iter__25467(s__25468){
return (new cljs.core.LazySeq(null,(function (){
var s__25468__$1 = s__25468;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25468__$1);
if(temp__4126__auto__){
var s__25468__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25468__$2)){
var c__4509__auto__ = cljs.core.chunk_first.call(null,s__25468__$2);
var size__4510__auto__ = cljs.core.count.call(null,c__4509__auto__);
var b__25470 = cljs.core.chunk_buffer.call(null,size__4510__auto__);
if((function (){var i__25469 = (0);
while(true){
if((i__25469 < size__4510__auto__)){
var x = cljs.core._nth.call(null,c__4509__auto__,i__25469);
cljs.core.chunk_append.call(null,b__25470,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25473 = x;
var text = cljs.core.nth.call(null,vec__25473,(0),null);
var val = cljs.core.nth.call(null,vec__25473,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__25473,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options25458.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__25475 = (i__25469 + (1));
i__25469 = G__25475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25470),iter__25467.call(null,cljs.core.chunk_rest.call(null,s__25468__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25470),null);
}
} else {
var x = cljs.core.first.call(null,s__25468__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25474 = x;
var text = cljs.core.nth.call(null,vec__25474,(0),null);
var val = cljs.core.nth.call(null,vec__25474,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__25474,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options25458.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__25467.call(null,cljs.core.rest.call(null,s__25468__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4511__auto__.call(null,coll);
});
select_options25458 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options25458__1.call(this,coll);
case 2:
return select_options25458__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options25458.cljs$core$IFn$_invoke$arity$1 = select_options25458__1;
select_options25458.cljs$core$IFn$_invoke$arity$2 = select_options25458__2;
return select_options25458;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options25458);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down25476 = (function() {
var drop_down25476 = null;
var drop_down25476__2 = (function (name,options){
return drop_down25476.call(null,name,options,null);
});
var drop_down25476__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down25476 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down25476__2.call(this,name,options);
case 3:
return drop_down25476__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down25476.cljs$core$IFn$_invoke$arity$2 = drop_down25476__2;
drop_down25476.cljs$core$IFn$_invoke$arity$3 = drop_down25476__3;
return drop_down25476;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down25476);
/**
* Creates a text area element.
*/
sablono.core.text_area25477 = (function() {
var text_area25477 = null;
var text_area25477__1 = (function (name){
return text_area25477.call(null,name,null);
});
var text_area25477__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area25477 = function(name,value){
switch(arguments.length){
case 1:
return text_area25477__1.call(this,name);
case 2:
return text_area25477__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area25477.cljs$core$IFn$_invoke$arity$1 = text_area25477__1;
text_area25477.cljs$core$IFn$_invoke$arity$2 = text_area25477__2;
return text_area25477;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area25477);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label25478 = (function label25478(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label25478);
/**
* Creates a submit button.
*/
sablono.core.submit_button25479 = (function submit_button25479(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button25479);
/**
* Creates a form reset button.
*/
sablono.core.reset_button25480 = (function reset_button25480(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button25480);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to25481 = (function() { 
var form_to25481__delegate = function (p__25482,body){
var vec__25484 = p__25482;
var method = cljs.core.nth.call(null,vec__25484,(0),null);
var action = cljs.core.nth.call(null,vec__25484,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to25481 = function (p__25482,var_args){
var body = null;
if (arguments.length > 1) {
var G__25485__i = 0, G__25485__a = new Array(arguments.length -  1);
while (G__25485__i < G__25485__a.length) {G__25485__a[G__25485__i] = arguments[G__25485__i + 1]; ++G__25485__i;}
  body = new cljs.core.IndexedSeq(G__25485__a,0);
} 
return form_to25481__delegate.call(this,p__25482,body);};
form_to25481.cljs$lang$maxFixedArity = 1;
form_to25481.cljs$lang$applyTo = (function (arglist__25486){
var p__25482 = cljs.core.first(arglist__25486);
var body = cljs.core.rest(arglist__25486);
return form_to25481__delegate(p__25482,body);
});
form_to25481.cljs$core$IFn$_invoke$arity$variadic = form_to25481__delegate;
return form_to25481;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to25481);

//# sourceMappingURL=core.js.map