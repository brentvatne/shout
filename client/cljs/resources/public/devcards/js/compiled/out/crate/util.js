// Compiled by ClojureScript 0.0-2725 {}
goog.provide('crate.util');
goog.require('cljs.core');
goog.require('clojure.string');
crate.util._STAR_base_url_STAR_ = null;
/**
* @param {...*} var_args
*/
crate.util.as_str = (function() {
var as_str = null;
var as_str__0 = (function (){
return "";
});
var as_str__1 = (function (x){
if(((x instanceof cljs.core.Symbol)) || ((x instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,x);
} else {
return [cljs.core.str(x)].join('');
}
});
var as_str__2 = (function() { 
var G__30538__delegate = function (x,xs){
return (function (s,more){
while(true){
if(cljs.core.truth_(more)){
var G__30539 = [cljs.core.str(s),cljs.core.str(as_str.call(null,cljs.core.first.call(null,more)))].join('');
var G__30540 = cljs.core.next.call(null,more);
s = G__30539;
more = G__30540;
continue;
} else {
return s;
}
break;
}
}).call(null,as_str.call(null,x),xs);
};
var G__30538 = function (x,var_args){
var xs = null;
if (arguments.length > 1) {
var G__30541__i = 0, G__30541__a = new Array(arguments.length -  1);
while (G__30541__i < G__30541__a.length) {G__30541__a[G__30541__i] = arguments[G__30541__i + 1]; ++G__30541__i;}
  xs = new cljs.core.IndexedSeq(G__30541__a,0);
} 
return G__30538__delegate.call(this,x,xs);};
G__30538.cljs$lang$maxFixedArity = 1;
G__30538.cljs$lang$applyTo = (function (arglist__30542){
var x = cljs.core.first(arglist__30542);
var xs = cljs.core.rest(arglist__30542);
return G__30538__delegate(x,xs);
});
G__30538.cljs$core$IFn$_invoke$arity$variadic = G__30538__delegate;
return G__30538;
})()
;
as_str = function(x,var_args){
var xs = var_args;
switch(arguments.length){
case 0:
return as_str__0.call(this);
case 1:
return as_str__1.call(this,x);
default:
var G__30543 = null;
if (arguments.length > 1) {
var G__30544__i = 0, G__30544__a = new Array(arguments.length -  1);
while (G__30544__i < G__30544__a.length) {G__30544__a[G__30544__i] = arguments[G__30544__i + 1]; ++G__30544__i;}
G__30543 = new cljs.core.IndexedSeq(G__30544__a,0);
}
return as_str__2.cljs$core$IFn$_invoke$arity$variadic(x, G__30543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
as_str.cljs$lang$maxFixedArity = 1;
as_str.cljs$lang$applyTo = as_str__2.cljs$lang$applyTo;
as_str.cljs$core$IFn$_invoke$arity$0 = as_str__0;
as_str.cljs$core$IFn$_invoke$arity$1 = as_str__1;
as_str.cljs$core$IFn$_invoke$arity$variadic = as_str__2.cljs$core$IFn$_invoke$arity$variadic;
return as_str;
})()
;
/**
* Change special characters into HTML character entities.
*/
crate.util.escape_html = (function escape_html(text){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,crate.util.as_str.call(null,text),"&","&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
});
/**
* Prepends the base-url to the supplied URI.
*/
crate.util.to_uri = (function to_uri(uri){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^\w+:.*/,uri))){
return uri;
} else {
return [cljs.core.str(crate.util._STAR_base_url_STAR_),cljs.core.str(uri)].join('');
}
});
crate.util.url_encode_component = (function url_encode_component(s){

return encodeURIComponent(crate.util.as_str.call(null,s));
});
/**
* Turn a map of parameters into a urlencoded string.
*/
crate.util.url_encode = (function url_encode(params){
return clojure.string.join.call(null,"&",(function (){var iter__4511__auto__ = (function iter__30553(s__30554){
return (new cljs.core.LazySeq(null,(function (){
var s__30554__$1 = s__30554;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30554__$1);
if(temp__4126__auto__){
var s__30554__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30554__$2)){
var c__4509__auto__ = cljs.core.chunk_first.call(null,s__30554__$2);
var size__4510__auto__ = cljs.core.count.call(null,c__4509__auto__);
var b__30556 = cljs.core.chunk_buffer.call(null,size__4510__auto__);
if((function (){var i__30555 = (0);
while(true){
if((i__30555 < size__4510__auto__)){
var vec__30559 = cljs.core._nth.call(null,c__4509__auto__,i__30555);
var k = cljs.core.nth.call(null,vec__30559,(0),null);
var v = cljs.core.nth.call(null,vec__30559,(1),null);
cljs.core.chunk_append.call(null,b__30556,[cljs.core.str(crate.util.url_encode_component.call(null,k)),cljs.core.str("="),cljs.core.str(crate.util.url_encode_component.call(null,v))].join(''));

var G__30561 = (i__30555 + (1));
i__30555 = G__30561;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30556),iter__30553.call(null,cljs.core.chunk_rest.call(null,s__30554__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30556),null);
}
} else {
var vec__30560 = cljs.core.first.call(null,s__30554__$2);
var k = cljs.core.nth.call(null,vec__30560,(0),null);
var v = cljs.core.nth.call(null,vec__30560,(1),null);
return cljs.core.cons.call(null,[cljs.core.str(crate.util.url_encode_component.call(null,k)),cljs.core.str("="),cljs.core.str(crate.util.url_encode_component.call(null,v))].join(''),iter__30553.call(null,cljs.core.rest.call(null,s__30554__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4511__auto__.call(null,params);
})());
});
/**
* Creates a URL string from a variable list of arguments and an optional
* parameter map as the last argument. For example:
* (url "/group/" 4 "/products" {:page 9})
* => "/group/4/products?page=9"
* @param {...*} var_args
*/
crate.util.url = (function() { 
var url__delegate = function (args){
var params = cljs.core.last.call(null,args);
var args__$1 = cljs.core.butlast.call(null,args);
return [cljs.core.str(crate.util.to_uri.call(null,[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,args__$1)),cljs.core.str(((cljs.core.map_QMARK_.call(null,params))?[cljs.core.str("?"),cljs.core.str(crate.util.url_encode.call(null,params))].join(''):params))].join('')))].join('');
};
var url = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30562__i = 0, G__30562__a = new Array(arguments.length -  0);
while (G__30562__i < G__30562__a.length) {G__30562__a[G__30562__i] = arguments[G__30562__i + 0]; ++G__30562__i;}
  args = new cljs.core.IndexedSeq(G__30562__a,0);
} 
return url__delegate.call(this,args);};
url.cljs$lang$maxFixedArity = 0;
url.cljs$lang$applyTo = (function (arglist__30563){
var args = cljs.core.seq(arglist__30563);
return url__delegate(args);
});
url.cljs$core$IFn$_invoke$arity$variadic = url__delegate;
return url;
})()
;

//# sourceMappingURL=util.js.map