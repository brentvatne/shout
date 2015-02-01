// Compiled by ClojureScript 0.0-2725 {}
goog.provide('crate.compiler');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('goog.dom');
crate.compiler.xmlns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xhtml","xhtml",1912943770),"http://www.w3.org/1999/xhtml",new cljs.core.Keyword(null,"svg","svg",856789142),"http://www.w3.org/2000/svg"], null);


crate.compiler.group_id = cljs.core.atom.call(null,(0));
crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.compiler.capture_binding = (function capture_binding(tag,b){
return cljs.core.swap_BANG_.call(null,crate.compiler.bindings,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,b], null));
});
crate.compiler.as_content = (function as_content(parent,content){
var seq__30214 = cljs.core.seq.call(null,content);
var chunk__30215 = null;
var count__30216 = (0);
var i__30217 = (0);
while(true){
if((i__30217 < count__30216)){
var c = cljs.core._nth.call(null,chunk__30215,i__30217);
var child_30218 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):((crate.binding.binding_coll_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1647737163),c);

return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:((crate.binding.binding_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),c);

return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):goog.dom.createTextNode([cljs.core.str(c)].join(''))
)))))))));
if(cljs.core.truth_(child_30218)){
goog.dom.appendChild(parent,child_30218);
} else {
}

var G__30219 = seq__30214;
var G__30220 = chunk__30215;
var G__30221 = count__30216;
var G__30222 = (i__30217 + (1));
seq__30214 = G__30219;
chunk__30215 = G__30220;
count__30216 = G__30221;
i__30217 = G__30222;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30214);
if(temp__4126__auto__){
var seq__30214__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30214__$1)){
var c__4542__auto__ = cljs.core.chunk_first.call(null,seq__30214__$1);
var G__30223 = cljs.core.chunk_rest.call(null,seq__30214__$1);
var G__30224 = c__4542__auto__;
var G__30225 = cljs.core.count.call(null,c__4542__auto__);
var G__30226 = (0);
seq__30214 = G__30223;
chunk__30215 = G__30224;
count__30216 = G__30225;
i__30217 = G__30226;
continue;
} else {
var c = cljs.core.first.call(null,seq__30214__$1);
var child_30227 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):((crate.binding.binding_coll_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1647737163),c);

return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:((crate.binding.binding_QMARK_.call(null,c))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),c);

return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})()
:(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):goog.dom.createTextNode([cljs.core.str(c)].join(''))
)))))))));
if(cljs.core.truth_(child_30227)){
goog.dom.appendChild(parent,child_30227);
} else {
}

var G__30228 = cljs.core.next.call(null,seq__30214__$1);
var G__30229 = null;
var G__30230 = (0);
var G__30231 = (0);
seq__30214 = G__30228;
chunk__30215 = G__30229;
count__30216 = G__30230;
i__30217 = G__30231;
continue;
}
} else {
return null;
}
}
break;
}
});
crate.compiler.dom_binding = (function (){var method_table__4652__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4653__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4656__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"crate.compiler","dom-binding"),((function (method_table__4652__auto__,prefer_table__4653__auto__,method_cache__4654__auto__,cached_hierarchy__4655__auto__,hierarchy__4656__auto__){
return (function (type,_,___$1){
return type;
});})(method_table__4652__auto__,prefer_table__4653__auto__,method_cache__4654__auto__,cached_hierarchy__4655__auto__,hierarchy__4656__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4656__auto__,method_table__4652__auto__,prefer_table__4653__auto__,method_cache__4654__auto__,cached_hierarchy__4655__auto__));
})();
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"text","text",-1790561697),(function (_,b,elem){
return crate.binding.on_change.call(null,b,(function (v){
goog.dom.removeChildren(elem);

return crate.compiler.as_content.call(null,elem,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (_,p__30232,elem){
var vec__30233 = p__30232;
var k = cljs.core.nth.call(null,vec__30233,(0),null);
var b = cljs.core.nth.call(null,vec__30233,(1),null);
return crate.binding.on_change.call(null,b,((function (vec__30233,k,b){
return (function (v){
return crate.compiler.dom_attr.call(null,elem,k,v);
});})(vec__30233,k,b))
);
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"style","style",-496642736),(function (_,p__30234,elem){
var vec__30235 = p__30234;
var k = cljs.core.nth.call(null,vec__30235,(0),null);
var b = cljs.core.nth.call(null,vec__30235,(1),null);
return crate.binding.on_change.call(null,b,((function (vec__30235,k,b){
return (function (v){
if(cljs.core.truth_(k)){
return crate.compiler.dom_style.call(null,elem,k,v);
} else {
return crate.compiler.dom_style.call(null,elem,v);
}
});})(vec__30235,k,b))
);
}));
crate.compiler.dom_add = (function dom_add(bc,parent,elem,v){
var temp__4124__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"add","add",235287739));
if(cljs.core.truth_(temp__4124__auto__)){
var adder = temp__4124__auto__;
return adder.call(null,parent,elem,v);
} else {
return goog.dom.appendChild(parent,elem);
}
});
crate.compiler.dom_remove = (function dom_remove(bc,elem){
var temp__4124__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"remove","remove",-131428414));
if(cljs.core.truth_(temp__4124__auto__)){
var remover = temp__4124__auto__;
return remover.call(null,elem);
} else {
return goog.dom.removeNode(elem);
}
});
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"coll","coll",1647737163),(function (_,bc,parent){
return crate.binding.on_change.call(null,bc,(function (type,elem,v){
var pred__30236 = cljs.core._EQ_;
var expr__30237 = type;
if(cljs.core.truth_(pred__30236.call(null,new cljs.core.Keyword(null,"add","add",235287739),expr__30237))){
return crate.compiler.dom_add.call(null,bc,parent,elem,v);
} else {
if(cljs.core.truth_(pred__30236.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__30237))){
return crate.compiler.dom_remove.call(null,bc,elem);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30237)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function handle_bindings(bs,elem){
var seq__30245 = cljs.core.seq.call(null,bs);
var chunk__30246 = null;
var count__30247 = (0);
var i__30248 = (0);
while(true){
if((i__30248 < count__30247)){
var vec__30249 = cljs.core._nth.call(null,chunk__30246,i__30248);
var type = cljs.core.nth.call(null,vec__30249,(0),null);
var b = cljs.core.nth.call(null,vec__30249,(1),null);
crate.compiler.dom_binding.call(null,type,b,elem);

var G__30251 = seq__30245;
var G__30252 = chunk__30246;
var G__30253 = count__30247;
var G__30254 = (i__30248 + (1));
seq__30245 = G__30251;
chunk__30246 = G__30252;
count__30247 = G__30253;
i__30248 = G__30254;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30245);
if(temp__4126__auto__){
var seq__30245__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30245__$1)){
var c__4542__auto__ = cljs.core.chunk_first.call(null,seq__30245__$1);
var G__30255 = cljs.core.chunk_rest.call(null,seq__30245__$1);
var G__30256 = c__4542__auto__;
var G__30257 = cljs.core.count.call(null,c__4542__auto__);
var G__30258 = (0);
seq__30245 = G__30255;
chunk__30246 = G__30256;
count__30247 = G__30257;
i__30248 = G__30258;
continue;
} else {
var vec__30250 = cljs.core.first.call(null,seq__30245__$1);
var type = cljs.core.nth.call(null,vec__30250,(0),null);
var b = cljs.core.nth.call(null,vec__30250,(1),null);
crate.compiler.dom_binding.call(null,type,b,elem);

var G__30259 = cljs.core.next.call(null,seq__30245__$1);
var G__30260 = null;
var G__30261 = (0);
var G__30262 = (0);
seq__30245 = G__30259;
chunk__30246 = G__30260;
count__30247 = G__30261;
i__30248 = G__30262;
continue;
}
} else {
return null;
}
}
break;
}
});
crate.compiler.dom_style = (function() {
var dom_style = null;
var dom_style__2 = (function (elem,v){
if(typeof v === 'string'){
elem.setAttribute("style",v);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
var seq__30269_30275 = cljs.core.seq.call(null,v);
var chunk__30270_30276 = null;
var count__30271_30277 = (0);
var i__30272_30278 = (0);
while(true){
if((i__30272_30278 < count__30271_30277)){
var vec__30273_30279 = cljs.core._nth.call(null,chunk__30270_30276,i__30272_30278);
var k_30280 = cljs.core.nth.call(null,vec__30273_30279,(0),null);
var v_30281__$1 = cljs.core.nth.call(null,vec__30273_30279,(1),null);
dom_style.call(null,elem,k_30280,v_30281__$1);

var G__30282 = seq__30269_30275;
var G__30283 = chunk__30270_30276;
var G__30284 = count__30271_30277;
var G__30285 = (i__30272_30278 + (1));
seq__30269_30275 = G__30282;
chunk__30270_30276 = G__30283;
count__30271_30277 = G__30284;
i__30272_30278 = G__30285;
continue;
} else {
var temp__4126__auto___30286 = cljs.core.seq.call(null,seq__30269_30275);
if(temp__4126__auto___30286){
var seq__30269_30287__$1 = temp__4126__auto___30286;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30269_30287__$1)){
var c__4542__auto___30288 = cljs.core.chunk_first.call(null,seq__30269_30287__$1);
var G__30289 = cljs.core.chunk_rest.call(null,seq__30269_30287__$1);
var G__30290 = c__4542__auto___30288;
var G__30291 = cljs.core.count.call(null,c__4542__auto___30288);
var G__30292 = (0);
seq__30269_30275 = G__30289;
chunk__30270_30276 = G__30290;
count__30271_30277 = G__30291;
i__30272_30278 = G__30292;
continue;
} else {
var vec__30274_30293 = cljs.core.first.call(null,seq__30269_30287__$1);
var k_30294 = cljs.core.nth.call(null,vec__30274_30293,(0),null);
var v_30295__$1 = cljs.core.nth.call(null,vec__30274_30293,(1),null);
dom_style.call(null,elem,k_30294,v_30295__$1);

var G__30296 = cljs.core.next.call(null,seq__30269_30287__$1);
var G__30297 = null;
var G__30298 = (0);
var G__30299 = (0);
seq__30269_30275 = G__30296;
chunk__30270_30276 = G__30297;
count__30271_30277 = G__30298;
i__30272_30278 = G__30299;
continue;
}
} else {
}
}
break;
}
} else {
if(crate.binding.binding_QMARK_.call(null,v)){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v], null));

dom_style.call(null,elem,crate.binding.value.call(null,v));
} else {
}
}
}

return elem;
});
var dom_style__3 = (function (elem,k,v){
var v__$1 = ((crate.binding.binding_QMARK_.call(null,v))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

return crate.binding.value.call(null,v);
})()
:v);
return goog.style.setStyle(elem,cljs.core.name.call(null,k),v__$1);
});
dom_style = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_style__2.call(this,elem,k);
case 3:
return dom_style__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_style.cljs$core$IFn$_invoke$arity$2 = dom_style__2;
dom_style.cljs$core$IFn$_invoke$arity$3 = dom_style__3;
return dom_style;
})()
;
crate.compiler.dom_attr = (function() {
var dom_attr = null;
var dom_attr__2 = (function (elem,attrs){
if(cljs.core.truth_(elem)){
if(!(cljs.core.map_QMARK_.call(null,attrs))){
return elem.getAttribute(cljs.core.name.call(null,attrs));
} else {
var seq__30306_30312 = cljs.core.seq.call(null,attrs);
var chunk__30307_30313 = null;
var count__30308_30314 = (0);
var i__30309_30315 = (0);
while(true){
if((i__30309_30315 < count__30308_30314)){
var vec__30310_30316 = cljs.core._nth.call(null,chunk__30307_30313,i__30309_30315);
var k_30317 = cljs.core.nth.call(null,vec__30310_30316,(0),null);
var v_30318 = cljs.core.nth.call(null,vec__30310_30316,(1),null);
dom_attr.call(null,elem,k_30317,v_30318);

var G__30319 = seq__30306_30312;
var G__30320 = chunk__30307_30313;
var G__30321 = count__30308_30314;
var G__30322 = (i__30309_30315 + (1));
seq__30306_30312 = G__30319;
chunk__30307_30313 = G__30320;
count__30308_30314 = G__30321;
i__30309_30315 = G__30322;
continue;
} else {
var temp__4126__auto___30323 = cljs.core.seq.call(null,seq__30306_30312);
if(temp__4126__auto___30323){
var seq__30306_30324__$1 = temp__4126__auto___30323;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30306_30324__$1)){
var c__4542__auto___30325 = cljs.core.chunk_first.call(null,seq__30306_30324__$1);
var G__30326 = cljs.core.chunk_rest.call(null,seq__30306_30324__$1);
var G__30327 = c__4542__auto___30325;
var G__30328 = cljs.core.count.call(null,c__4542__auto___30325);
var G__30329 = (0);
seq__30306_30312 = G__30326;
chunk__30307_30313 = G__30327;
count__30308_30314 = G__30328;
i__30309_30315 = G__30329;
continue;
} else {
var vec__30311_30330 = cljs.core.first.call(null,seq__30306_30324__$1);
var k_30331 = cljs.core.nth.call(null,vec__30311_30330,(0),null);
var v_30332 = cljs.core.nth.call(null,vec__30311_30330,(1),null);
dom_attr.call(null,elem,k_30331,v_30332);

var G__30333 = cljs.core.next.call(null,seq__30306_30324__$1);
var G__30334 = null;
var G__30335 = (0);
var G__30336 = (0);
seq__30306_30312 = G__30333;
chunk__30307_30313 = G__30334;
count__30308_30314 = G__30335;
i__30309_30315 = G__30336;
continue;
}
} else {
}
}
break;
}

return elem;
}
} else {
return null;
}
});
var dom_attr__3 = (function (elem,k,v){
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736))){
crate.compiler.dom_style.call(null,elem,v);
} else {
var v_30337__$1 = ((crate.binding.binding_QMARK_.call(null,v))?(function (){
crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

return crate.binding.value.call(null,v);
})()
:v);
elem.setAttribute(cljs.core.name.call(null,k),v_30337__$1);
}

return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_attr__2.call(this,elem,k);
case 3:
return dom_attr__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_attr.cljs$core$IFn$_invoke$arity$2 = dom_attr__2;
dom_attr.cljs$core$IFn$_invoke$arity$3 = dom_attr__3;
return dom_attr;
})()
;
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.compiler.normalize_map_attrs = (function normalize_map_attrs(map_attrs){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__30340){
var vec__30341 = p__30340;
var n = cljs.core.nth.call(null,vec__30341,(0),null);
var v = cljs.core.nth.call(null,vec__30341,(1),null);
if(v === true){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.name.call(null,n)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,v], null);
}
}),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.boolean$,cljs.core.second),map_attrs)));
});
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.compiler.normalize_element = (function normalize_element(p__30343){
var vec__30348 = p__30343;
var tag = cljs.core.nth.call(null,vec__30348,(0),null);
var content = cljs.core.nthnext.call(null,vec__30348,(1));
if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name.")].join('');
} else {
}

var vec__30349 = cljs.core.re_matches.call(null,crate.compiler.re_tag,cljs.core.name.call(null,tag));
var _ = cljs.core.nth.call(null,vec__30349,(0),null);
var tag__$1 = cljs.core.nth.call(null,vec__30349,(1),null);
var id = cljs.core.nth.call(null,vec__30349,(2),null);
var class$ = cljs.core.nth.call(null,vec__30349,(3),null);
var vec__30350 = (function (){var vec__30351 = clojure.string.split.call(null,tag__$1,/:/);
var nsp = cljs.core.nth.call(null,vec__30351,(0),null);
var t = cljs.core.nth.call(null,vec__30351,(1),null);
var ns_xmlns = crate.compiler.xmlns.call(null,cljs.core.keyword.call(null,nsp));
if(cljs.core.truth_(t)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3755__auto__ = ns_xmlns;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return nsp;
}
})(),t], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhtml","xhtml",1912943770).cljs$core$IFn$_invoke$arity$1(crate.compiler.xmlns),nsp], null);
}
})();
var nsp = cljs.core.nth.call(null,vec__30350,(0),null);
var tag__$2 = cljs.core.nth.call(null,vec__30350,(1),null);
var tag_attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (vec__30349,_,tag__$1,id,class$,vec__30350,nsp,tag__$2,vec__30348,tag,content){
return (function (p1__30342_SHARP_){
return !((cljs.core.second.call(null,p1__30342_SHARP_) == null));
});})(vec__30349,_,tag__$1,id,class$,vec__30350,nsp,tag__$2,vec__30348,tag,content))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__3755__auto__ = id;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return null;
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null)], null)));
var map_attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,map_attrs)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,cljs.core.merge.call(null,tag_attrs,crate.compiler.normalize_map_attrs.call(null,map_attrs)),cljs.core.next.call(null,content)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,tag_attrs,content], null);
}
});
crate.compiler.parse_content = (function parse_content(elem,content){
var attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,attrs)){
crate.compiler.dom_attr.call(null,elem,attrs);

return cljs.core.rest.call(null,content);
} else {
return content;
}
});
crate.compiler.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){
return document.createElementNS(nsp,tag);
}):(function (_,tag){
return document.createElement(tag);
}));
crate.compiler.elem_factory = (function elem_factory(tag_def){
var bindings30354 = crate.compiler.bindings;
try{crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);

var vec__30355 = crate.compiler.normalize_element.call(null,tag_def);
var nsp = cljs.core.nth.call(null,vec__30355,(0),null);
var tag = cljs.core.nth.call(null,vec__30355,(1),null);
var attrs = cljs.core.nth.call(null,vec__30355,(2),null);
var content = cljs.core.nth.call(null,vec__30355,(3),null);
var elem = crate.compiler.create_elem.call(null,nsp,tag);
crate.compiler.dom_attr.call(null,elem,attrs);

crate.compiler.as_content.call(null,elem,content);

crate.compiler.handle_bindings.call(null,cljs.core.deref.call(null,crate.compiler.bindings),elem);

return elem;
}finally {crate.compiler.bindings = bindings30354;
}});
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.compiler.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__30358__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__30357 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__30357,(0),null);
var body = cljs.core.nthnext.call(null,vec__30357,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__30358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30359__i = 0, G__30359__a = new Array(arguments.length -  0);
while (G__30359__i < G__30359__a.length) {G__30359__a[G__30359__i] = arguments[G__30359__i + 0]; ++G__30359__i;}
  args = new cljs.core.IndexedSeq(G__30359__a,0);
} 
return G__30358__delegate.call(this,args);};
G__30358.cljs$lang$maxFixedArity = 0;
G__30358.cljs$lang$applyTo = (function (arglist__30360){
var args = cljs.core.seq(arglist__30360);
return G__30358__delegate(args);
});
G__30358.cljs$core$IFn$_invoke$arity$variadic = G__30358__delegate;
return G__30358;
})()
;
});

//# sourceMappingURL=compiler.js.map