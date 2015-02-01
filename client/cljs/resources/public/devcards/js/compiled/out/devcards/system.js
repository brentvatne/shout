// Compiled by ClojureScript 0.0-2725 {}
goog.provide('devcards.system');
goog.require('cljs.core');
goog.require('crate.core');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('goog.History');
goog.require('goog.events');
goog.require('jayq.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('frontier.core');
devcards.system.devcards_app_element_id = "devcards-main";
devcards.system.devcards_controls_element_id = "devcards-controls";
devcards.system.devcards_cards_element_id = "devcards-cards";
devcards.system.get_element_by_id = (function get_element_by_id(id){
return document.getElementById(id);
});
devcards.system.devcards_app_node = (function devcards_app_node(){
return devcards.system.get_element_by_id.call(null,devcards.system.devcards_app_element_id);
});
devcards.system.devcards_controls_node = (function devcards_controls_node(){
return devcards.system.get_element_by_id.call(null,devcards.system.devcards_controls_element_id);
});
devcards.system.devcards_cards_node = (function devcards_cards_node(){
return devcards.system.get_element_by_id.call(null,devcards.system.devcards_cards_element_id);
});
devcards.system.path__GT_unique_card_id = (function path__GT_unique_card_id(path){
return clojure.string.join.call(null,".",cljs.core.map.call(null,(function (x){
return [cljs.core.str("["),cljs.core.str(x),cljs.core.str("]")].join('');
}),cljs.core.map.call(null,cljs.core.name,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cardpath","cardpath",-1078069311),path))));
});
devcards.system.unique_card_id__GT_path = (function unique_card_id__GT_path(card_id){
return cljs.core.mapv.call(null,cljs.core.keyword,cljs.core.rest.call(null,clojure.string.split.call(null,cljs.core.subs.call(null,card_id,(1),(cljs.core.count.call(null,card_id) - (1))),/\].\[/)));
});
devcards.system.current_page = (function current_page(data){
var and__3743__auto__ = new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__3743__auto__)){
var and__3743__auto____$1 = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__3743__auto____$1)){
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data));
} else {
return and__3743__auto____$1;
}
} else {
return and__3743__auto__;
}
});
devcards.system.valid_path_QMARK_ = (function valid_path_QMARK_(state,path){
var or__3755__auto__ = cljs.core._EQ_.call(null,cljs.core.PersistentVector.EMPTY,path);
if(or__3755__auto__){
return or__3755__auto__;
} else {
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state),path);
}
});
devcards.system.enforce_valid_path = (function enforce_valid_path(state,path){
return cljs.core.vec.call(null,(cljs.core.truth_(devcards.system.valid_path_QMARK_.call(null,state,path))?path:cljs.core.PersistentVector.EMPTY));
});

devcards.system.IMount = (function (){var obj29695 = {};
return obj29695;
})();

devcards.system.mount = (function mount(o,data){
if((function (){var and__3743__auto__ = o;
if(and__3743__auto__){
return o.devcards$system$IMount$mount$arity$2;
} else {
return and__3743__auto__;
}
})()){
return o.devcards$system$IMount$mount$arity$2(o,data);
} else {
var x__4399__auto__ = (((o == null))?null:o);
return (function (){var or__3755__auto__ = (devcards.system.mount[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (devcards.system.mount["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IMount.mount",o);
}
}
})().call(null,o,data);
}
});


devcards.system.IUnMount = (function (){var obj29697 = {};
return obj29697;
})();

devcards.system.unmount = (function unmount(o,data){
if((function (){var and__3743__auto__ = o;
if(and__3743__auto__){
return o.devcards$system$IUnMount$unmount$arity$2;
} else {
return and__3743__auto__;
}
})()){
return o.devcards$system$IUnMount$unmount$arity$2(o,data);
} else {
var x__4399__auto__ = (((o == null))?null:o);
return (function (){var or__3755__auto__ = (devcards.system.unmount[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (devcards.system.unmount["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IUnMount.unmount",o);
}
}
})().call(null,o,data);
}
});


devcards.system.IConfig = (function (){var obj29699 = {};
return obj29699;
})();

devcards.system._options = (function _options(o){
if((function (){var and__3743__auto__ = o;
if(and__3743__auto__){
return o.devcards$system$IConfig$_options$arity$1;
} else {
return and__3743__auto__;
}
})()){
return o.devcards$system$IConfig$_options$arity$1(o);
} else {
var x__4399__auto__ = (((o == null))?null:o);
return (function (){var or__3755__auto__ = (devcards.system._options[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (devcards.system._options["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IConfig.-options",o);
}
}
})().call(null,o);
}
});

devcards.system.default_card_options = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"heading","heading",-1312171873),true,new cljs.core.Keyword(null,"padding","padding",1660304693),true,new cljs.core.Keyword(null,"unmount-on-reload","unmount-on-reload",-844964662),true,new cljs.core.Keyword(null,"hidden","hidden",-312506092),false], null);
devcards.system.get_options = (function get_options(card){
return cljs.core.merge.call(null,devcards.system.default_card_options,(function (){var or__3755__auto__ = (function (){var and__3743__auto__ = (function (){var G__29707 = card;
if(G__29707){
var bit__4436__auto__ = null;
if(cljs.core.truth_((function (){var or__3755__auto__ = bit__4436__auto__;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return G__29707.devcards$system$IConfig$;
}
})())){
return true;
} else {
if((!G__29707.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IConfig,G__29707);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IConfig,G__29707);
}
})();
if(and__3743__auto__){
return devcards.system._options.call(null,card);
} else {
return and__3743__auto__;
}
})();
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});

/**
* @constructor
* @param {*} path
* @param {*} options
* @param {*} func
* @param {*} position
* @param {*} data_atom
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
devcards.system.DevCard = (function (path,options,func,position,data_atom,__meta,__extmap,__hash){
this.path = path;
this.options = options;
this.func = func;
this.position = position;
this.data_atom = data_atom;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.system.DevCard.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4358__auto__,k__4359__auto__){
var self__ = this;
var this__4358__auto____$1 = this;
return cljs.core._lookup.call(null,this__4358__auto____$1,k__4359__auto__,null);
});

devcards.system.DevCard.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4360__auto__,k29709,else__4361__auto__){
var self__ = this;
var this__4360__auto____$1 = this;
var G__29711 = (((k29709 instanceof cljs.core.Keyword))?k29709.fqn:null);
switch (G__29711) {
case "data-atom":
return self__.data_atom;

break;
case "position":
return self__.position;

break;
case "func":
return self__.func;

break;
case "options":
return self__.options;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29709,else__4361__auto__);

}
});

devcards.system.DevCard.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4372__auto__,writer__4373__auto__,opts__4374__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
var pr_pair__4375__auto__ = ((function (this__4372__auto____$1){
return (function (keyval__4376__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4373__auto__,cljs.core.pr_writer,""," ","",opts__4374__auto__,keyval__4376__auto__);
});})(this__4372__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4373__auto__,pr_pair__4375__auto__,"#devcards.system.DevCard{",", ","}",opts__4374__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"position","position",-2011731912),self__.position],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-atom","data-atom",1035568414),self__.data_atom],null))], null),self__.__extmap));
});

devcards.system.DevCard.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4356__auto__){
var self__ = this;
var this__4356__auto____$1 = this;
return self__.__meta;
});

devcards.system.DevCard.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4352__auto__){
var self__ = this;
var this__4352__auto____$1 = this;
return (new devcards.system.DevCard(self__.path,self__.options,self__.func,self__.position,self__.data_atom,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.system.DevCard.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4362__auto__){
var self__ = this;
var this__4362__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

devcards.system.DevCard.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4353__auto__){
var self__ = this;
var this__4353__auto____$1 = this;
var h__4176__auto__ = self__.__hash;
if(!((h__4176__auto__ == null))){
return h__4176__auto__;
} else {
var h__4176__auto____$1 = cljs.core.hash_imap.call(null,this__4353__auto____$1);
self__.__hash = h__4176__auto____$1;

return h__4176__auto____$1;
}
});

devcards.system.DevCard.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4354__auto__,other__4355__auto__){
var self__ = this;
var this__4354__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3743__auto__ = other__4355__auto__;
if(cljs.core.truth_(and__3743__auto__)){
return ((this__4354__auto____$1.constructor === other__4355__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4354__auto____$1,other__4355__auto__));
} else {
return and__3743__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.system.DevCard.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4367__auto__,k__4368__auto__){
var self__ = this;
var this__4367__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"func","func",-238706040),null,new cljs.core.Keyword(null,"position","position",-2011731912),null,new cljs.core.Keyword(null,"options","options",99638489),null,new cljs.core.Keyword(null,"data-atom","data-atom",1035568414),null], null), null),k__4368__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4367__auto____$1),self__.__meta),k__4368__auto__);
} else {
return (new devcards.system.DevCard(self__.path,self__.options,self__.func,self__.position,self__.data_atom,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4368__auto__)),null));
}
});

devcards.system.DevCard.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4365__auto__,k__4366__auto__,G__29708){
var self__ = this;
var this__4365__auto____$1 = this;
var pred__29712 = cljs.core.keyword_identical_QMARK_;
var expr__29713 = k__4366__auto__;
if(cljs.core.truth_(pred__29712.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__29713))){
return (new devcards.system.DevCard(G__29708,self__.options,self__.func,self__.position,self__.data_atom,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29712.call(null,new cljs.core.Keyword(null,"options","options",99638489),expr__29713))){
return (new devcards.system.DevCard(self__.path,G__29708,self__.func,self__.position,self__.data_atom,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29712.call(null,new cljs.core.Keyword(null,"func","func",-238706040),expr__29713))){
return (new devcards.system.DevCard(self__.path,self__.options,G__29708,self__.position,self__.data_atom,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29712.call(null,new cljs.core.Keyword(null,"position","position",-2011731912),expr__29713))){
return (new devcards.system.DevCard(self__.path,self__.options,self__.func,G__29708,self__.data_atom,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29712.call(null,new cljs.core.Keyword(null,"data-atom","data-atom",1035568414),expr__29713))){
return (new devcards.system.DevCard(self__.path,self__.options,self__.func,self__.position,G__29708,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.system.DevCard(self__.path,self__.options,self__.func,self__.position,self__.data_atom,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4366__auto__,G__29708),null));
}
}
}
}
}
});

devcards.system.DevCard.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"position","position",-2011731912),self__.position],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-atom","data-atom",1035568414),self__.data_atom],null))], null),self__.__extmap));
});

devcards.system.DevCard.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4357__auto__,G__29708){
var self__ = this;
var this__4357__auto____$1 = this;
return (new devcards.system.DevCard(self__.path,self__.options,self__.func,self__.position,self__.data_atom,G__29708,self__.__extmap,self__.__hash));
});

devcards.system.DevCard.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4363__auto__,entry__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4364__auto__)){
return cljs.core._assoc.call(null,this__4363__auto____$1,cljs.core._nth.call(null,entry__4364__auto__,(0)),cljs.core._nth.call(null,entry__4364__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4363__auto____$1,entry__4364__auto__);
}
});

devcards.system.DevCard.cljs$lang$type = true;

devcards.system.DevCard.cljs$lang$ctorPrSeq = (function (this__4392__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.system/DevCard");
});

devcards.system.DevCard.cljs$lang$ctorPrWriter = (function (this__4392__auto__,writer__4393__auto__){
return cljs.core._write.call(null,writer__4393__auto__,"devcards.system/DevCard");
});

devcards.system.__GT_DevCard = (function __GT_DevCard(path,options,func,position,data_atom){
return (new devcards.system.DevCard(path,options,func,position,data_atom,null,null,null));
});

devcards.system.map__GT_DevCard = (function map__GT_DevCard(G__29710){
return (new devcards.system.DevCard(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__29710),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__29710),new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__29710),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(G__29710),new cljs.core.Keyword(null,"data-atom","data-atom",1035568414).cljs$core$IFn$_invoke$arity$1(G__29710),null,cljs.core.dissoc.call(null,G__29710,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"data-atom","data-atom",1035568414)),null));
});

devcards.system.devcard_QMARK_ = (function devcard_QMARK_(d){
var and__3743__auto__ = cljs.core.map_QMARK_.call(null,d);
if(and__3743__auto__){
var and__3743__auto____$1 = new cljs.core.Keyword(null,"data-atom","data-atom",1035568414).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__3743__auto____$1)){
var and__3743__auto____$2 = new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__3743__auto____$2)){
var and__3743__auto____$3 = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__3743__auto____$3)){
var and__3743__auto____$4 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__3743__auto____$4)){
return d;
} else {
return and__3743__auto____$4;
}
} else {
return and__3743__auto____$3;
}
} else {
return and__3743__auto____$2;
}
} else {
return and__3743__auto____$1;
}
} else {
return and__3743__auto__;
}
});
devcards.system.ifilter = (function (){var method_table__4652__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4653__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4656__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.system","ifilter"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4656__auto__,method_table__4652__auto__,prefer_table__4653__auto__,method_cache__4654__auto__,cached_hierarchy__4655__auto__));
})();
cljs.core._add_method.call(null,devcards.system.ifilter,new cljs.core.Keyword(null,"default","default",-1987822328),(function (msg,state){
return msg;
}));
cljs.core._add_method.call(null,devcards.system.ifilter,new cljs.core.Keyword(null,"set-current-path","set-current-path",-1071346366),(function (p__29716,state){
var vec__29717 = p__29716;
var _ = cljs.core.nth.call(null,vec__29717,(0),null);
var map__29718 = cljs.core.nth.call(null,vec__29717,(1),null);
var map__29718__$1 = ((cljs.core.seq_QMARK_.call(null,map__29718))?cljs.core.apply.call(null,cljs.core.hash_map,map__29718):map__29718);
var path = cljs.core.get.call(null,map__29718__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-path","current-path",-113759954),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),devcards.system.unique_card_id__GT_path.call(null,path)], null)], null);
}));
devcards.system.dev_trans = (function (){var method_table__4652__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4653__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4656__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.system","dev-trans"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4656__auto__,method_table__4652__auto__,prefer_table__4653__auto__,method_cache__4654__auto__,cached_hierarchy__4655__auto__));
})();
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"default","default",-1987822328),(function (msg,state){
return state;
}));
devcards.system.map_vals = (function map_vals(f,h_map){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__29721){
var vec__29722 = p__29721;
var k = cljs.core.nth.call(null,vec__29722,(0),null);
var v = cljs.core.nth.call(null,vec__29722,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
}),h_map));
});
devcards.system.map_all_cards_in_ns = (function map_all_cards_in_ns(f,state,ns){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038),ns], null),(function (p1__29723_SHARP_){
return devcards.system.map_vals.call(null,f,p1__29723_SHARP_);
}));
});
devcards.system.mark_card = (function mark_card(card){
return cljs.core.assoc.call(null,card,new cljs.core.Keyword(null,"sweep-marker","sweep-marker",1533682692),true);
});
devcards.system.remove_mark_from_card = (function remove_mark_from_card(card){
return cljs.core.dissoc.call(null,card,new cljs.core.Keyword(null,"sweep-marker","sweep-marker",1533682692));
});
devcards.system.set_card_to_be_deleted = (function set_card_to_be_deleted(card){
if(cljs.core.truth_(new cljs.core.Keyword(null,"sweep-marker","sweep-marker",1533682692).cljs$core$IFn$_invoke$arity$1(card))){
return cljs.core.assoc.call(null,card,new cljs.core.Keyword(null,"delete-card","delete-card",1559096851),true);
} else {
return card;
}
});
devcards.system.set_deleted_and_remove_marks_in_ns = (function set_deleted_and_remove_marks_in_ns(state,ns){
return devcards.system.map_all_cards_in_ns.call(null,cljs.core.comp.call(null,devcards.system.remove_mark_from_card,devcards.system.set_card_to_be_deleted),state,ns);
});
devcards.system.card_namespaces_being_reloaded = (function card_namespaces_being_reloaded(state,files){
return clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.keyword,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),files)),cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state))));
});
devcards.system.mark_all_cards = (function mark_all_cards(state,files){
return cljs.core.reduce.call(null,cljs.core.partial.call(null,devcards.system.map_all_cards_in_ns,devcards.system.mark_card),state,devcards.system.card_namespaces_being_reloaded.call(null,state,files));
});
devcards.system.remove_deleted_cards = (function remove_deleted_cards(card_map){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__29726){
var vec__29727 = p__29726;
var k = cljs.core.nth.call(null,vec__29727,(0),null);
var v = cljs.core.nth.call(null,vec__29727,(1),null);
return cljs.core.not.call(null,new cljs.core.Keyword(null,"delete-card","delete-card",1559096851).cljs$core$IFn$_invoke$arity$1(v));
}),card_map));
});
devcards.system.remove_deleted_cards_in_ns = (function remove_deleted_cards_in_ns(state,ns){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038),ns], null),devcards.system.remove_deleted_cards);
});
devcards.system.sweep_ns = (function sweep_ns(state,ns){
return devcards.system.set_deleted_and_remove_marks_in_ns.call(null,devcards.system.remove_deleted_cards_in_ns.call(null,state,ns),ns);
});
devcards.system.sweep = (function sweep(state,files){
return cljs.core.reduce.call(null,devcards.system.sweep_ns,state,cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state))));
});
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),(function (p__29728,state){
var vec__29729 = p__29728;
var _ = cljs.core.nth.call(null,vec__29729,(0),null);
var files = cljs.core.nth.call(null,vec__29729,(1),null);
return devcards.system.mark_all_cards.call(null,state,files);
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"jsreload","jsreload",331693051),(function (p__29730,state){
var vec__29731 = p__29730;
var _ = cljs.core.nth.call(null,vec__29731,(0),null);
var files = cljs.core.nth.call(null,vec__29731,(1),null);
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,devcards.system.sweep.call(null,state,files),new cljs.core.Keyword(null,"code-loaded","code-loaded",-775309567),new cljs.core.Keyword(null,"js","js",1768080579)),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289));
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"cssload","cssload",-1391978296),(function (msg,state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"code-loaded","code-loaded",-775309567),new cljs.core.Keyword(null,"css","css",1135045163));
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"remove-code-loaded-effect","remove-code-loaded-effect",858192647),(function (msg,state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"code-loaded","code-loaded",-775309567));
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"compile-fail","compile-fail",-1895835730),(function (msg,state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.last.call(null,msg));
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"register-card","register-card",-1375971588),(function (p__29732,state){
var vec__29733 = p__29732;
var _ = cljs.core.nth.call(null,vec__29733,(0),null);
var map__29734 = cljs.core.nth.call(null,vec__29733,(1),null);
var map__29734__$1 = ((cljs.core.seq_QMARK_.call(null,map__29734))?cljs.core.apply.call(null,cljs.core.hash_map,map__29734):map__29734);
var func = cljs.core.get.call(null,map__29734__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var options = cljs.core.get.call(null,map__29734__$1,new cljs.core.Keyword(null,"options","options",99638489));
var path = cljs.core.get.call(null,map__29734__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),cljs.core.inc),cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",169174038),path),((function (position,vec__29733,_,map__29734,map__29734__$1,func,options,path){
return (function (dc){
if(cljs.core.truth_(dc)){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,dc,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,devcards.system.default_card_options,options),new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"func","func",-238706040),func),new cljs.core.Keyword(null,"sweep-marker","sweep-marker",1533682692)),new cljs.core.Keyword(null,"delete-card","delete-card",1559096851));
} else {
return (new devcards.system.DevCard(path,cljs.core.merge.call(null,devcards.system.default_card_options,options),func,position,cljs.core.atom.call(null,(function (){var or__3755__auto__ = new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),null,null,null));
}
});})(position,vec__29733,_,map__29734,map__29734__$1,func,options,path))
);
}));
devcards.system.add_navigate_effect = (function add_navigate_effect(p__29735){
var map__29737 = p__29735;
var map__29737__$1 = ((cljs.core.seq_QMARK_.call(null,map__29737))?cljs.core.apply.call(null,cljs.core.hash_map,map__29737):map__29737);
var state = map__29737__$1;
var current_path = cljs.core.get.call(null,map__29737__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
return frontier.core.add_effects.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),current_path], null));
});
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"add-to-current-path","add-to-current-path",1680043668),(function (p__29738,p__29739){
var vec__29740 = p__29738;
var _ = cljs.core.nth.call(null,vec__29740,(0),null);
var map__29741 = cljs.core.nth.call(null,vec__29740,(1),null);
var map__29741__$1 = ((cljs.core.seq_QMARK_.call(null,map__29741))?cljs.core.apply.call(null,cljs.core.hash_map,map__29741):map__29741);
var path = cljs.core.get.call(null,map__29741__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var map__29742 = p__29739;
var map__29742__$1 = ((cljs.core.seq_QMARK_.call(null,map__29742))?cljs.core.apply.call(null,cljs.core.hash_map,map__29742):map__29742);
var state = map__29742__$1;
var current_path = cljs.core.get.call(null,map__29742__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
return devcards.system.add_navigate_effect.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path.call(null,state,cljs.core.conj.call(null,current_path,cljs.core.keyword.call(null,path)))));
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"current-path","current-path",-113759954),(function (p__29743,p__29744){
var vec__29745 = p__29743;
var _ = cljs.core.nth.call(null,vec__29745,(0),null);
var map__29746 = cljs.core.nth.call(null,vec__29745,(1),null);
var map__29746__$1 = ((cljs.core.seq_QMARK_.call(null,map__29746))?cljs.core.apply.call(null,cljs.core.hash_map,map__29746):map__29746);
var path = cljs.core.get.call(null,map__29746__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var map__29747 = p__29744;
var map__29747__$1 = ((cljs.core.seq_QMARK_.call(null,map__29747))?cljs.core.apply.call(null,cljs.core.hash_map,map__29747):map__29747);
var state = map__29747__$1;
var current_path = cljs.core.get.call(null,map__29747__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var path__$1 = cljs.core.vec.call(null,path);
if(cljs.core.not_EQ_.call(null,current_path,path__$1)){
return devcards.system.add_navigate_effect.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path.call(null,state,path__$1)));
} else {
return state;
}
}));
devcards.system.visible_cards = (function visible_cards(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"visible-card-nodes","visible-card-nodes",1955368082),devcards.system.visible_card_nodes.call(null,state));
});
devcards.system.display_current_cards = (function display_current_cards(state){
var cur = devcards.system.current_page.call(null,state);
if(cljs.core.truth_(devcards.system.devcard_QMARK_.call(null,cur))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"display-single-card","display-single-card",-1639298728),cur);
} else {
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"display-dir-paths","display-dir-paths",-1423485300),cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.comp.call(null,devcards.system.devcard_QMARK_,cljs.core.second)),cur)),new cljs.core.Keyword(null,"display-cards","display-cards",-656436093),cljs.core.filter.call(null,cljs.core.comp.call(null,((function (cur){
return (function (p1__29748_SHARP_){
var and__3743__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"delete-card","delete-card",1559096851).cljs$core$IFn$_invoke$arity$1(p1__29748_SHARP_));
if(and__3743__auto__){
return devcards.system.devcard_QMARK_.call(null,p1__29748_SHARP_);
} else {
return and__3743__auto__;
}
});})(cur))
,cljs.core.second),cur));
}
});
devcards.system.render_cards_QMARK_ = (function render_cards_QMARK_(state){
var visible_cards = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.first),new cljs.core.Keyword(null,"visible-card-nodes","visible-card-nodes",1955368082).cljs$core$IFn$_invoke$arity$1(state)));
var intended_cards = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-single-card","display-single-card",-1639298728).cljs$core$IFn$_invoke$arity$1(state)], null),cljs.core.vals.call(null,new cljs.core.Keyword(null,"display-cards","display-cards",-656436093).cljs$core$IFn$_invoke$arity$1(state)))));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"render-cards","render-cards",1987648199),cljs.core.not_EQ_.call(null,visible_cards,intended_cards));
});
devcards.system.breadcrumbs = (function breadcrumbs(p__29749){
var map__29751 = p__29749;
var map__29751__$1 = ((cljs.core.seq_QMARK_.call(null,map__29751))?cljs.core.apply.call(null,cljs.core.hash_map,map__29751):map__29751);
var state = map__29751__$1;
var current_path = cljs.core.get.call(null,map__29751__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var cpath = cljs.core.map.call(null,cljs.core.name,cljs.core.cons.call(null,new cljs.core.Keyword(null,"home","home",-74557309),current_path));
var crumbs = cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.last,cljs.core.rest),cljs.core.rest.call(null,cljs.core.map_indexed.call(null,((function (cpath,map__29751,map__29751__$1,state,current_path){
return (function (i,v){
return cljs.core.subvec.call(null,v,(0),i);
});})(cpath,map__29751,map__29751__$1,state,current_path))
,cljs.core.take.call(null,(cljs.core.count.call(null,cpath) + (1)),cljs.core.repeat.call(null,cljs.core.vec.call(null,cpath))))));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"breadcrumbs","breadcrumbs",-354629220),crumbs);
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
devcards.system.DevCards = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.system.DevCards.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4358__auto__,k__4359__auto__){
var self__ = this;
var this__4358__auto____$1 = this;
return cljs.core._lookup.call(null,this__4358__auto____$1,k__4359__auto__,null);
});

devcards.system.DevCards.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4360__auto__,k29753,else__4361__auto__){
var self__ = this;
var this__4360__auto____$1 = this;
var G__29755 = k29753;
switch (G__29755) {
default:
return cljs.core.get.call(null,self__.__extmap,k29753,else__4361__auto__);

}
});

devcards.system.DevCards.prototype.frontier$core$IInputFilter$ = true;

devcards.system.DevCards.prototype.frontier$core$IInputFilter$_filter_input$arity$3 = (function (o,msg,state){
var self__ = this;
var o__$1 = this;
return devcards.system.ifilter.call(null,msg,state);
});

devcards.system.DevCards.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4372__auto__,writer__4373__auto__,opts__4374__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
var pr_pair__4375__auto__ = ((function (this__4372__auto____$1){
return (function (keyval__4376__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4373__auto__,cljs.core.pr_writer,""," ","",opts__4374__auto__,keyval__4376__auto__);
});})(this__4372__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4373__auto__,pr_pair__4375__auto__,"#devcards.system.DevCards{",", ","}",opts__4374__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

devcards.system.DevCards.prototype.frontier$core$IDerive$ = true;

devcards.system.DevCards.prototype.frontier$core$IDerive$_derive$arity$2 = (function (o,state){
var self__ = this;
var o__$1 = this;
return devcards.system.breadcrumbs.call(null,devcards.system.render_cards_QMARK_.call(null,devcards.system.display_current_cards.call(null,devcards.system.visible_cards.call(null,state))));
});

devcards.system.DevCards.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4356__auto__){
var self__ = this;
var this__4356__auto____$1 = this;
return self__.__meta;
});

devcards.system.DevCards.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4352__auto__){
var self__ = this;
var this__4352__auto____$1 = this;
return (new devcards.system.DevCards(self__.__meta,self__.__extmap,self__.__hash));
});

devcards.system.DevCards.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4362__auto__){
var self__ = this;
var this__4362__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

devcards.system.DevCards.prototype.frontier$core$ITransform$ = true;

devcards.system.DevCards.prototype.frontier$core$ITransform$_transform$arity$3 = (function (o,msg,state){
var self__ = this;
var o__$1 = this;
return devcards.system.dev_trans.call(null,msg,state);
});

devcards.system.DevCards.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4353__auto__){
var self__ = this;
var this__4353__auto____$1 = this;
var h__4176__auto__ = self__.__hash;
if(!((h__4176__auto__ == null))){
return h__4176__auto__;
} else {
var h__4176__auto____$1 = cljs.core.hash_imap.call(null,this__4353__auto____$1);
self__.__hash = h__4176__auto____$1;

return h__4176__auto____$1;
}
});

devcards.system.DevCards.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4354__auto__,other__4355__auto__){
var self__ = this;
var this__4354__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3743__auto__ = other__4355__auto__;
if(cljs.core.truth_(and__3743__auto__)){
return ((this__4354__auto____$1.constructor === other__4355__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4354__auto____$1,other__4355__auto__));
} else {
return and__3743__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.system.DevCards.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4367__auto__,k__4368__auto__){
var self__ = this;
var this__4367__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4368__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4367__auto____$1),self__.__meta),k__4368__auto__);
} else {
return (new devcards.system.DevCards(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4368__auto__)),null));
}
});

devcards.system.DevCards.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4365__auto__,k__4366__auto__,G__29752){
var self__ = this;
var this__4365__auto____$1 = this;
var pred__29756 = cljs.core.keyword_identical_QMARK_;
var expr__29757 = k__4366__auto__;
return (new devcards.system.DevCards(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4366__auto__,G__29752),null));
});

devcards.system.DevCards.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

devcards.system.DevCards.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4357__auto__,G__29752){
var self__ = this;
var this__4357__auto____$1 = this;
return (new devcards.system.DevCards(G__29752,self__.__extmap,self__.__hash));
});

devcards.system.DevCards.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4363__auto__,entry__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4364__auto__)){
return cljs.core._assoc.call(null,this__4363__auto____$1,cljs.core._nth.call(null,entry__4364__auto__,(0)),cljs.core._nth.call(null,entry__4364__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4363__auto____$1,entry__4364__auto__);
}
});

devcards.system.DevCards.cljs$lang$type = true;

devcards.system.DevCards.cljs$lang$ctorPrSeq = (function (this__4392__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.system/DevCards");
});

devcards.system.DevCards.cljs$lang$ctorPrWriter = (function (this__4392__auto__,writer__4393__auto__){
return cljs.core._write.call(null,writer__4393__auto__,"devcards.system/DevCards");
});

devcards.system.__GT_DevCards = (function __GT_DevCards(){
return (new devcards.system.DevCards(null,null,null));
});

devcards.system.map__GT_DevCards = (function map__GT_DevCards(G__29754){
return (new devcards.system.DevCards(null,cljs.core.dissoc.call(null,G__29754),null));
});

if(typeof devcards.system.history !== 'undefined'){
} else {
devcards.system.history = (function (){var h = (new goog.History());
h.setEnabled(true);

return h;
})();
}
devcards.system.path__GT_token = (function path__GT_token(path){
return [cljs.core.str("!/"),cljs.core.str(clojure.string.join.call(null,"/",cljs.core.map.call(null,cljs.core.name,path)))].join('');
});
devcards.system.token__GT_path = (function token__GT_path(token){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,clojure.string.replace.call(null,token,/!\//,""),/\//)));
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
devcards.system.HashBangRouting = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.system.HashBangRouting.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4358__auto__,k__4359__auto__){
var self__ = this;
var this__4358__auto____$1 = this;
return cljs.core._lookup.call(null,this__4358__auto____$1,k__4359__auto__,null);
});

devcards.system.HashBangRouting.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4360__auto__,k29762,else__4361__auto__){
var self__ = this;
var this__4360__auto____$1 = this;
var G__29764 = k29762;
switch (G__29764) {
default:
return cljs.core.get.call(null,self__.__extmap,k29762,else__4361__auto__);

}
});

devcards.system.HashBangRouting.prototype.frontier$core$IInit$ = true;

devcards.system.HashBangRouting.prototype.frontier$core$IInit$_initialize$arity$3 = (function (_,state,event_chan){
var self__ = this;
var ___$1 = this;
goog.events.listen(devcards.system.history,goog.history.EventType.NAVIGATE,((function (___$1){
return (function (p1__29760_SHARP_){
return cljs.core.async.put_BANG_.call(null,event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-path","current-path",-113759954),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),devcards.system.token__GT_path.call(null,p1__29760_SHARP_.token)], null)], null));
});})(___$1))
);

var temp__4126__auto__ = devcards.system.history.getToken();
if(cljs.core.truth_(temp__4126__auto__)){
var token = temp__4126__auto__;
var c__13512__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto__,token,temp__4126__auto__,___$1){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto__,token,temp__4126__auto__,___$1){
return (function (state_29777){
var state_val_29778 = (state_29777[(1)]);
if((state_val_29778 === (2))){
var inst_29767 = (state_29777[(2)]);
var inst_29768 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29769 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_29770 = devcards.system.token__GT_path.call(null,token);
var inst_29771 = [inst_29770];
var inst_29772 = cljs.core.PersistentHashMap.fromArrays(inst_29769,inst_29771);
var inst_29773 = [new cljs.core.Keyword(null,"current-path","current-path",-113759954),inst_29772];
var inst_29774 = (new cljs.core.PersistentVector(null,2,(5),inst_29768,inst_29773,null));
var inst_29775 = cljs.core.async.put_BANG_.call(null,event_chan,inst_29774);
var state_29777__$1 = (function (){var statearr_29779 = state_29777;
(statearr_29779[(7)] = inst_29767);

return statearr_29779;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29777__$1,inst_29775);
} else {
if((state_val_29778 === (1))){
var inst_29765 = cljs.core.async.timeout.call(null,(20));
var state_29777__$1 = state_29777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29777__$1,(2),inst_29765);
} else {
return null;
}
}
});})(c__13512__auto__,token,temp__4126__auto__,___$1))
;
return ((function (switch__13456__auto__,c__13512__auto__,token,temp__4126__auto__,___$1){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_29783 = [null,null,null,null,null,null,null,null];
(statearr_29783[(0)] = state_machine__13457__auto__);

(statearr_29783[(1)] = (1));

return statearr_29783;
});
var state_machine__13457__auto____1 = (function (state_29777){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_29777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e29784){if((e29784 instanceof Object)){
var ex__13460__auto__ = e29784;
var statearr_29785_29793 = state_29777;
(statearr_29785_29793[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29794 = state_29777;
state_29777 = G__29794;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_29777){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_29777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto__,token,temp__4126__auto__,___$1))
})();
var state__13514__auto__ = (function (){var statearr_29786 = f__13513__auto__.call(null);
(statearr_29786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto__);

return statearr_29786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto__,token,temp__4126__auto__,___$1))
);

return c__13512__auto__;
} else {
return null;
}
});

devcards.system.HashBangRouting.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4372__auto__,writer__4373__auto__,opts__4374__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
var pr_pair__4375__auto__ = ((function (this__4372__auto____$1){
return (function (keyval__4376__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4373__auto__,cljs.core.pr_writer,""," ","",opts__4374__auto__,keyval__4376__auto__);
});})(this__4372__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4373__auto__,pr_pair__4375__auto__,"#devcards.system.HashBangRouting{",", ","}",opts__4374__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

devcards.system.HashBangRouting.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4356__auto__){
var self__ = this;
var this__4356__auto____$1 = this;
return self__.__meta;
});

devcards.system.HashBangRouting.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4352__auto__){
var self__ = this;
var this__4352__auto____$1 = this;
return (new devcards.system.HashBangRouting(self__.__meta,self__.__extmap,self__.__hash));
});

devcards.system.HashBangRouting.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4362__auto__){
var self__ = this;
var this__4362__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

devcards.system.HashBangRouting.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4353__auto__){
var self__ = this;
var this__4353__auto____$1 = this;
var h__4176__auto__ = self__.__hash;
if(!((h__4176__auto__ == null))){
return h__4176__auto__;
} else {
var h__4176__auto____$1 = cljs.core.hash_imap.call(null,this__4353__auto____$1);
self__.__hash = h__4176__auto____$1;

return h__4176__auto____$1;
}
});

devcards.system.HashBangRouting.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4354__auto__,other__4355__auto__){
var self__ = this;
var this__4354__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3743__auto__ = other__4355__auto__;
if(cljs.core.truth_(and__3743__auto__)){
return ((this__4354__auto____$1.constructor === other__4355__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4354__auto____$1,other__4355__auto__));
} else {
return and__3743__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.system.HashBangRouting.prototype.frontier$core$IEffect$ = true;

devcards.system.HashBangRouting.prototype.frontier$core$IEffect$_effect$arity$5 = (function (o,p__29787,system,event_chan,effect_chan){
var self__ = this;
var vec__29788 = p__29787;
var nm = cljs.core.nth.call(null,vec__29788,(0),null);
var path = cljs.core.nth.call(null,vec__29788,(1),null);
var o__$1 = this;
if(cljs.core._EQ_.call(null,nm,new cljs.core.Keyword(null,"navigate","navigate",657596805))){
return devcards.system.history.setToken(devcards.system.path__GT_token.call(null,path));
} else {
return null;
}
});

devcards.system.HashBangRouting.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4367__auto__,k__4368__auto__){
var self__ = this;
var this__4367__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4368__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4367__auto____$1),self__.__meta),k__4368__auto__);
} else {
return (new devcards.system.HashBangRouting(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4368__auto__)),null));
}
});

devcards.system.HashBangRouting.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4365__auto__,k__4366__auto__,G__29761){
var self__ = this;
var this__4365__auto____$1 = this;
var pred__29789 = cljs.core.keyword_identical_QMARK_;
var expr__29790 = k__4366__auto__;
return (new devcards.system.HashBangRouting(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4366__auto__,G__29761),null));
});

devcards.system.HashBangRouting.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

devcards.system.HashBangRouting.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4357__auto__,G__29761){
var self__ = this;
var this__4357__auto____$1 = this;
return (new devcards.system.HashBangRouting(G__29761,self__.__extmap,self__.__hash));
});

devcards.system.HashBangRouting.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4363__auto__,entry__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4364__auto__)){
return cljs.core._assoc.call(null,this__4363__auto____$1,cljs.core._nth.call(null,entry__4364__auto__,(0)),cljs.core._nth.call(null,entry__4364__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4363__auto____$1,entry__4364__auto__);
}
});

devcards.system.HashBangRouting.cljs$lang$type = true;

devcards.system.HashBangRouting.cljs$lang$ctorPrSeq = (function (this__4392__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.system/HashBangRouting");
});

devcards.system.HashBangRouting.cljs$lang$ctorPrWriter = (function (this__4392__auto__,writer__4393__auto__){
return cljs.core._write.call(null,writer__4393__auto__,"devcards.system/HashBangRouting");
});

devcards.system.__GT_HashBangRouting = (function __GT_HashBangRouting(){
return (new devcards.system.HashBangRouting(null,null,null));
});

devcards.system.map__GT_HashBangRouting = (function map__GT_HashBangRouting(G__29763){
return (new devcards.system.HashBangRouting(null,cljs.core.dissoc.call(null,G__29763),null));
});

devcards.system.naked_card = (function naked_card(p__29795){
var map__29797 = p__29795;
var map__29797__$1 = ((cljs.core.seq_QMARK_.call(null,map__29797))?cljs.core.apply.call(null,cljs.core.hash_map,map__29797):map__29797);
var options = cljs.core.get.call(null,map__29797__$1,new cljs.core.Keyword(null,"options","options",99638489));
var path = cljs.core.get.call(null,map__29797__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),devcards.system.path__GT_unique_card_id.call(null,path),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("devcard-rendered-card"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"padding","padding",1660304693).cljs$core$IFn$_invoke$arity$1(options))?" devcard-padding":""))].join('')], null)], null);
});
devcards.system.card_template = (function card_template(p__29798){
var map__29800 = p__29798;
var map__29800__$1 = ((cljs.core.seq_QMARK_.call(null,map__29800))?cljs.core.apply.call(null,cljs.core.hash_map,map__29800):map__29800);
var card = map__29800__$1;
var options = cljs.core.get.call(null,map__29800__$1,new cljs.core.Keyword(null,"options","options",99638489));
var path = cljs.core.get.call(null,map__29800__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default.devcard-panel","div.panel.panel-default.devcard-panel",-218257753),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading.devcards-set-current-path","div.panel-heading.devcards-set-current-path",1618326058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-path","data-path",674802181),devcards.system.path__GT_unique_card_id.call(null,path)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.panel-title","span.panel-title",-1730792584),cljs.core.name.call(null,cljs.core.last.call(null,path))," "], null)], null),devcards.system.naked_card.call(null,card)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default.devcard-panel","div.panel.panel-default.devcard-panel",-218257753),devcards.system.naked_card.call(null,card)], null);
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null);
}
});
devcards.system.display_cards = (function display_cards(cards){
return cljs.core.map.call(null,cljs.core.comp.call(null,devcards.system.card_template,cljs.core.second),cljs.core.sort_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.second),cards));
});
devcards.system.dir_links = (function dir_links(dirs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-group","div.list-group",1215632197),cljs.core.map.call(null,(function (p__29803){
var vec__29804 = p__29803;
var key = cljs.core.nth.call(null,vec__29804,(0),null);
var child_tree = cljs.core.nth.call(null,vec__29804,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.list-group-item.devcards-add-to-current-path","a.list-group-item.devcards-add-to-current-path",3289211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-path","data-path",674802181),cljs.core.name.call(null,key)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-folder-close","span.glyphicon.glyphicon-folder-close",1182038373)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.badge","span.badge",-1410699734),cljs.core.count.call(null,child_tree)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," ",cljs.core.name.call(null,key)], null)], null);
}),cljs.core.reverse.call(null,dirs))], null);
});
devcards.system.breadcrumbs_templ = (function breadcrumbs_templ(crumbs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol.breadcrumb.devcards-breadcrumb","ol.breadcrumb.devcards-breadcrumb",2141660738),cljs.core.map.call(null,(function (p__29807){
var vec__29808 = p__29807;
var n = cljs.core.nth.call(null,vec__29808,(0),null);
var path = cljs.core.nth.call(null,vec__29808,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.devcards-set-current-path","a.devcards-set-current-path",1527035350),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-path","data-path",674802181),devcards.system.path__GT_unique_card_id.call(null,path)], null),n], null)], null);
}),crumbs)], null);
});
devcards.system.main_template = (function main_template(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar.navbar-default.navbar-static-top.devards-main-navbar","div.navbar.navbar-default.navbar-static-top.devards-main-navbar",912191420),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-header","div.navbar-header",-515823511),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),"(:devcards ClojureScript)"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-9","div.col-md-9",-1879980145),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"breadcrumbs","breadcrumbs",-354629220).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__4126__auto__)){
var crumbs = temp__4126__auto__;
return devcards.system.breadcrumbs_templ.call(null,crumbs);
} else {
return null;
}
})(),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"display-dir-paths","display-dir-paths",-1423485300).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__4126__auto__)){
var dir_paths = temp__4126__auto__;
return devcards.system.dir_links.call(null,dir_paths);
} else {
return null;
}
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129)], null)], null)], null)], null);
});
devcards.system.cards_templates = (function cards_templates(data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-9","div.col-md-9",-1879980145),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"display-cards","display-cards",-656436093).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__4126__auto__)){
var cards = temp__4126__auto__;
return devcards.system.display_cards.call(null,cards);
} else {
return null;
}
})(),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"display-single-card","display-single-card",-1639298728).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__4126__auto__)){
var card = temp__4126__auto__;
return devcards.system.naked_card.call(null,card);
} else {
return null;
}
})()], null)], null)], null);
});
devcards.system.to_node = (function to_node(jq){
return (jq.get()[(0)]);
});
devcards.system.sel_nodes = (function sel_nodes(sel){
return cljs.core.mapv.call(null,devcards.system.to_node,jayq.core.$.call(null,sel));
});
devcards.system.visible_card_paths = (function visible_card_paths(){
var card_nodes = devcards.system.sel_nodes.call(null,".devcard-rendered-card");
return cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,((function (card_nodes){
return (function (p1__29809_SHARP_){
return devcards.system.unique_card_id__GT_path.call(null,p1__29809_SHARP_.id);
});})(card_nodes))
,card_nodes));
});
devcards.system.visible_card_nodes = (function visible_card_nodes(data){
var card_nodes = devcards.system.sel_nodes.call(null,".devcard-rendered-card");
return cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,cljs.core.juxt.call(null,((function (card_nodes){
return (function (p1__29810_SHARP_){
return cljs.core.get_in.call(null,data,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",169174038),devcards.system.unique_card_id__GT_path.call(null,p1__29810_SHARP_.id)));
});})(card_nodes))
,cljs.core.identity),card_nodes));
});
devcards.system.toggle_background_to_white = (function toggle_background_to_white(data){
if(cljs.core.truth_(new cljs.core.Keyword(null,"display-single-card","display-single-card",-1639298728).cljs$core$IFn$_invoke$arity$1(data))){
return $("body").addClass("devcards-white-background");
} else {
return $("body").removeClass("devcards-white-background");
}
});
devcards.system.compile_failure = (function compile_failure(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289).cljs$core$IFn$_invoke$arity$1(state))){
return $(devcards.system.devcards_app_node.call(null)).addClass("devcards-compile-failed");
} else {
return $(devcards.system.devcards_app_node.call(null)).removeClass("devcards-compile-failed");
}
});
devcards.system.code_loaded_class = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"js","js",1768080579),"devcards-load-highlight",new cljs.core.Keyword(null,"css","css",1135045163),"devcards-cssload-highlight"], null);
devcards.system.code_loaded = (function code_loaded(state,event_chan){
var temp__4126__auto__ = devcards.system.code_loaded_class.call(null,new cljs.core.Keyword(null,"code-loaded","code-loaded",-775309567).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(temp__4126__auto__)){
var class$ = temp__4126__auto__;
$(devcards.system.devcards_app_node.call(null)).addClass(class$);

var c__13512__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto__,class$,temp__4126__auto__){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto__,class$,temp__4126__auto__){
return (function (state_29843){
var state_val_29844 = (state_29843[(1)]);
if((state_val_29844 === (2))){
var inst_29834 = (state_29843[(2)]);
var inst_29835 = devcards.system.devcards_app_node.call(null);
var inst_29836 = $(inst_29835);
var inst_29837 = inst_29836.removeClass(class$);
var inst_29838 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29839 = [new cljs.core.Keyword(null,"remove-code-loaded-effect","remove-code-loaded-effect",858192647)];
var inst_29840 = (new cljs.core.PersistentVector(null,1,(5),inst_29838,inst_29839,null));
var inst_29841 = cljs.core.async.put_BANG_.call(null,event_chan,inst_29840);
var state_29843__$1 = (function (){var statearr_29845 = state_29843;
(statearr_29845[(7)] = inst_29837);

(statearr_29845[(8)] = inst_29834);

return statearr_29845;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29843__$1,inst_29841);
} else {
if((state_val_29844 === (1))){
var inst_29832 = cljs.core.async.timeout.call(null,(1400));
var state_29843__$1 = state_29843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29843__$1,(2),inst_29832);
} else {
return null;
}
}
});})(c__13512__auto__,class$,temp__4126__auto__))
;
return ((function (switch__13456__auto__,c__13512__auto__,class$,temp__4126__auto__){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_29849 = [null,null,null,null,null,null,null,null,null];
(statearr_29849[(0)] = state_machine__13457__auto__);

(statearr_29849[(1)] = (1));

return statearr_29849;
});
var state_machine__13457__auto____1 = (function (state_29843){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_29843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e29850){if((e29850 instanceof Object)){
var ex__13460__auto__ = e29850;
var statearr_29851_29853 = state_29843;
(statearr_29851_29853[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29854 = state_29843;
state_29843 = G__29854;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_29843){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_29843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto__,class$,temp__4126__auto__))
})();
var state__13514__auto__ = (function (){var statearr_29852 = f__13513__auto__.call(null);
(statearr_29852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto__);

return statearr_29852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto__,class$,temp__4126__auto__))
);

return c__13512__auto__;
} else {
return null;
}
});
devcards.system.create_needed_card_nodes = (function create_needed_card_nodes(data){
if(cljs.core.truth_(new cljs.core.Keyword(null,"render-cards","render-cards",1987648199).cljs$core$IFn$_invoke$arity$1(data))){
return jayq.core.$.call(null,devcards.system.devcards_cards_node.call(null)).html(crate.core.html.call(null,devcards.system.cards_templates.call(null,data)));
} else {
return null;
}
});
devcards.system.unmount_card_nodes = (function unmount_card_nodes(data){
var seq__29865 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"visible-card-nodes","visible-card-nodes",1955368082).cljs$core$IFn$_invoke$arity$1(data));
var chunk__29866 = null;
var count__29867 = (0);
var i__29868 = (0);
while(true){
if((i__29868 < count__29867)){
var vec__29869 = cljs.core._nth.call(null,chunk__29866,i__29868);
var card = cljs.core.nth.call(null,vec__29869,(0),null);
var node = cljs.core.nth.call(null,vec__29869,(1),null);
var temp__4126__auto___29875 = cljs.core.get_in.call(null,data,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",169174038),devcards.system.unique_card_id__GT_path.call(null,node.id)));
if(cljs.core.truth_(temp__4126__auto___29875)){
var card_29876__$1 = temp__4126__auto___29875;
var functionality_29877 = new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(card_29876__$1).call(null);
if(cljs.core.truth_((function (){var and__3743__auto__ = (function (){var G__29871 = functionality_29877;
if(G__29871){
var bit__4436__auto__ = null;
if(cljs.core.truth_((function (){var or__3755__auto__ = bit__4436__auto__;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return G__29871.devcards$system$IUnMount$;
}
})())){
return true;
} else {
if((!G__29871.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IUnMount,G__29871);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IUnMount,G__29871);
}
})();
if(and__3743__auto__){
var or__3755__auto__ = new cljs.core.Keyword(null,"render-cards","render-cards",1987648199).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = new cljs.core.Keyword(null,"unmount-on-reload","unmount-on-reload",-844964662).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card_29876__$1));
if(cljs.core.truth_(or__3755__auto____$1)){
return or__3755__auto____$1;
} else {
return new cljs.core.Keyword(null,"delete-card","delete-card",1559096851).cljs$core$IFn$_invoke$arity$1(card_29876__$1);
}
}
} else {
return and__3743__auto__;
}
})())){
devcards.system.unmount.call(null,functionality_29877,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"data-atom","data-atom",1035568414),new cljs.core.Keyword(null,"data-atom","data-atom",1035568414).cljs$core$IFn$_invoke$arity$1(card_29876__$1)], null));
} else {
}
} else {
}

var G__29878 = seq__29865;
var G__29879 = chunk__29866;
var G__29880 = count__29867;
var G__29881 = (i__29868 + (1));
seq__29865 = G__29878;
chunk__29866 = G__29879;
count__29867 = G__29880;
i__29868 = G__29881;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__29865);
if(temp__4126__auto__){
var seq__29865__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29865__$1)){
var c__4542__auto__ = cljs.core.chunk_first.call(null,seq__29865__$1);
var G__29882 = cljs.core.chunk_rest.call(null,seq__29865__$1);
var G__29883 = c__4542__auto__;
var G__29884 = cljs.core.count.call(null,c__4542__auto__);
var G__29885 = (0);
seq__29865 = G__29882;
chunk__29866 = G__29883;
count__29867 = G__29884;
i__29868 = G__29885;
continue;
} else {
var vec__29872 = cljs.core.first.call(null,seq__29865__$1);
var card = cljs.core.nth.call(null,vec__29872,(0),null);
var node = cljs.core.nth.call(null,vec__29872,(1),null);
var temp__4126__auto___29886__$1 = cljs.core.get_in.call(null,data,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",169174038),devcards.system.unique_card_id__GT_path.call(null,node.id)));
if(cljs.core.truth_(temp__4126__auto___29886__$1)){
var card_29887__$1 = temp__4126__auto___29886__$1;
var functionality_29888 = new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(card_29887__$1).call(null);
if(cljs.core.truth_((function (){var and__3743__auto__ = (function (){var G__29874 = functionality_29888;
if(G__29874){
var bit__4436__auto__ = null;
if(cljs.core.truth_((function (){var or__3755__auto__ = bit__4436__auto__;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return G__29874.devcards$system$IUnMount$;
}
})())){
return true;
} else {
if((!G__29874.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IUnMount,G__29874);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IUnMount,G__29874);
}
})();
if(and__3743__auto__){
var or__3755__auto__ = new cljs.core.Keyword(null,"render-cards","render-cards",1987648199).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = new cljs.core.Keyword(null,"unmount-on-reload","unmount-on-reload",-844964662).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card_29887__$1));
if(cljs.core.truth_(or__3755__auto____$1)){
return or__3755__auto____$1;
} else {
return new cljs.core.Keyword(null,"delete-card","delete-card",1559096851).cljs$core$IFn$_invoke$arity$1(card_29887__$1);
}
}
} else {
return and__3743__auto__;
}
})())){
devcards.system.unmount.call(null,functionality_29888,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"data-atom","data-atom",1035568414),new cljs.core.Keyword(null,"data-atom","data-atom",1035568414).cljs$core$IFn$_invoke$arity$1(card_29887__$1)], null));
} else {
}
} else {
}

var G__29889 = cljs.core.next.call(null,seq__29865__$1);
var G__29890 = null;
var G__29891 = (0);
var G__29892 = (0);
seq__29865 = G__29889;
chunk__29866 = G__29890;
count__29867 = G__29891;
i__29868 = G__29892;
continue;
}
} else {
return null;
}
}
break;
}
});
devcards.system.mount_card_nodes = (function mount_card_nodes(data){
var seq__29901 = cljs.core.seq.call(null,devcards.system.visible_card_nodes.call(null,data));
var chunk__29902 = null;
var count__29903 = (0);
var i__29904 = (0);
while(true){
if((i__29904 < count__29903)){
var vec__29905 = cljs.core._nth.call(null,chunk__29902,i__29904);
var card = cljs.core.nth.call(null,vec__29905,(0),null);
var node = cljs.core.nth.call(null,vec__29905,(1),null);
var functionality_29909 = new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(card).call(null);
var arg_29910 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"data-atom","data-atom",1035568414),new cljs.core.Keyword(null,"data-atom","data-atom",1035568414).cljs$core$IFn$_invoke$arity$1(card)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"delete-card","delete-card",1559096851).cljs$core$IFn$_invoke$arity$1(card))){
} else {
if((function (){var G__29906 = functionality_29909;
if(G__29906){
var bit__4436__auto__ = null;
if(cljs.core.truth_((function (){var or__3755__auto__ = bit__4436__auto__;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return G__29906.devcards$system$IMount$;
}
})())){
return true;
} else {
if((!G__29906.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IMount,G__29906);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IMount,G__29906);
}
})()){
devcards.system.mount.call(null,functionality_29909,arg_29910);
} else {
cljs.core.apply.call(null,functionality_29909,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_29910], null));
}
}

var G__29911 = seq__29901;
var G__29912 = chunk__29902;
var G__29913 = count__29903;
var G__29914 = (i__29904 + (1));
seq__29901 = G__29911;
chunk__29902 = G__29912;
count__29903 = G__29913;
i__29904 = G__29914;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__29901);
if(temp__4126__auto__){
var seq__29901__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29901__$1)){
var c__4542__auto__ = cljs.core.chunk_first.call(null,seq__29901__$1);
var G__29915 = cljs.core.chunk_rest.call(null,seq__29901__$1);
var G__29916 = c__4542__auto__;
var G__29917 = cljs.core.count.call(null,c__4542__auto__);
var G__29918 = (0);
seq__29901 = G__29915;
chunk__29902 = G__29916;
count__29903 = G__29917;
i__29904 = G__29918;
continue;
} else {
var vec__29907 = cljs.core.first.call(null,seq__29901__$1);
var card = cljs.core.nth.call(null,vec__29907,(0),null);
var node = cljs.core.nth.call(null,vec__29907,(1),null);
var functionality_29919 = new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(card).call(null);
var arg_29920 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"data-atom","data-atom",1035568414),new cljs.core.Keyword(null,"data-atom","data-atom",1035568414).cljs$core$IFn$_invoke$arity$1(card)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"delete-card","delete-card",1559096851).cljs$core$IFn$_invoke$arity$1(card))){
} else {
if((function (){var G__29908 = functionality_29919;
if(G__29908){
var bit__4436__auto__ = null;
if(cljs.core.truth_((function (){var or__3755__auto__ = bit__4436__auto__;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return G__29908.devcards$system$IMount$;
}
})())){
return true;
} else {
if((!G__29908.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IMount,G__29908);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.system.IMount,G__29908);
}
})()){
devcards.system.mount.call(null,functionality_29919,arg_29920);
} else {
cljs.core.apply.call(null,functionality_29919,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_29920], null));
}
}

var G__29921 = cljs.core.next.call(null,seq__29901__$1);
var G__29922 = null;
var G__29923 = (0);
var G__29924 = (0);
seq__29901 = G__29921;
chunk__29902 = G__29922;
count__29903 = G__29923;
i__29904 = G__29924;
continue;
}
} else {
return null;
}
}
break;
}
});
devcards.system.remove_node = (function remove_node(node){
if(cljs.core.truth_(node)){
return node.parentNode.removeChild(node);
} else {
return null;
}
});
devcards.system.remove_card = (function remove_card(card){
var temp__4126__auto__ = document.getElementById(devcards.system.path__GT_unique_card_id.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(card)));
if(cljs.core.truth_(temp__4126__auto__)){
var node = temp__4126__auto__;
return devcards.system.remove_node.call(null,node.parentNode);
} else {
return null;
}
});
devcards.system.delete_deleted_card_nodes = (function delete_deleted_card_nodes(data){
var seq__29931 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"visible-card-nodes","visible-card-nodes",1955368082).cljs$core$IFn$_invoke$arity$1(data));
var chunk__29932 = null;
var count__29933 = (0);
var i__29934 = (0);
while(true){
if((i__29934 < count__29933)){
var vec__29935 = cljs.core._nth.call(null,chunk__29932,i__29934);
var card = cljs.core.nth.call(null,vec__29935,(0),null);
var node = cljs.core.nth.call(null,vec__29935,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"delete-card","delete-card",1559096851).cljs$core$IFn$_invoke$arity$1(card))){
devcards.system.remove_card.call(null,card);
} else {
}

var G__29937 = seq__29931;
var G__29938 = chunk__29932;
var G__29939 = count__29933;
var G__29940 = (i__29934 + (1));
seq__29931 = G__29937;
chunk__29932 = G__29938;
count__29933 = G__29939;
i__29934 = G__29940;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__29931);
if(temp__4126__auto__){
var seq__29931__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29931__$1)){
var c__4542__auto__ = cljs.core.chunk_first.call(null,seq__29931__$1);
var G__29941 = cljs.core.chunk_rest.call(null,seq__29931__$1);
var G__29942 = c__4542__auto__;
var G__29943 = cljs.core.count.call(null,c__4542__auto__);
var G__29944 = (0);
seq__29931 = G__29941;
chunk__29932 = G__29942;
count__29933 = G__29943;
i__29934 = G__29944;
continue;
} else {
var vec__29936 = cljs.core.first.call(null,seq__29931__$1);
var card = cljs.core.nth.call(null,vec__29936,(0),null);
var node = cljs.core.nth.call(null,vec__29936,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"delete-card","delete-card",1559096851).cljs$core$IFn$_invoke$arity$1(card))){
devcards.system.remove_card.call(null,card);
} else {
}

var G__29945 = cljs.core.next.call(null,seq__29931__$1);
var G__29946 = null;
var G__29947 = (0);
var G__29948 = (0);
seq__29931 = G__29945;
chunk__29932 = G__29946;
count__29933 = G__29947;
i__29934 = G__29948;
continue;
}
} else {
return null;
}
}
break;
}
});
devcards.system.render_base_if_necessary_BANG_ = (function render_base_if_necessary_BANG_(){
var temp__4124__auto__ = devcards.system.devcards_app_node.call(null);
if(cljs.core.truth_(temp__4124__auto__)){
var devcards_node = temp__4124__auto__;
if(cljs.core.truth_(devcards.system.devcards_controls_node.call(null))){
} else {
devcards_node.appendChild(crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),devcards.system.devcards_controls_element_id], null)], null)));
}

if(cljs.core.truth_(devcards.system.devcards_cards_node.call(null))){
return null;
} else {
return devcards_node.appendChild(crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),devcards.system.devcards_cards_element_id], null)], null)));
}
} else {
throw (new Error([cljs.core.str("The devcards interface needs an element with an id of \""),cljs.core.str(devcards.system.devcards_app_element_id),cljs.core.str("\"")].join('')));
}
});
devcards.system.devcard_renderer = (function devcard_renderer(p__29949){
var map__29951 = p__29949;
var map__29951__$1 = ((cljs.core.seq_QMARK_.call(null,map__29951))?cljs.core.apply.call(null,cljs.core.hash_map,map__29951):map__29951);
var event_chan = cljs.core.get.call(null,map__29951__$1,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912));
var state = cljs.core.get.call(null,map__29951__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
devcards.system.unmount_card_nodes.call(null,state);

devcards.system.delete_deleted_card_nodes.call(null,state);

jayq.core.$.call(null,devcards.system.devcards_controls_node.call(null)).html(crate.core.html.call(null,devcards.system.main_template.call(null,state)));

devcards.system.create_needed_card_nodes.call(null,state);

devcards.system.toggle_background_to_white.call(null,state);

devcards.system.compile_failure.call(null,state);

devcards.system.code_loaded.call(null,state,event_chan);

return devcards.system.mount_card_nodes.call(null,state);
});
devcards.system.devcard_initial_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-path","current-path",-113759954),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"position","position",-2011731912),(0),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.PersistentArrayMap.EMPTY], null);
devcards.system.devcard_comp = frontier.core.compose.call(null,(new devcards.system.DevCards(null,null,null)),(new devcards.system.HashBangRouting(null,null,null)));
devcards.system.data_to_message = (function data_to_message(msg_name,event_chan){
return (function (e){
e.preventDefault();

var t = e.currentTarget;
var temp__4126__auto__ = jayq.core.$.call(null,t).data();
if(cljs.core.truth_(temp__4126__auto__)){
var data = temp__4126__auto__;
return cljs.core.async.put_BANG_.call(null,event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_name,cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null));
} else {
return null;
}
});
});
devcards.system.register_listeners = (function register_listeners(event_chan){
jayq.core.$.call(null,devcards.system.devcards_app_node.call(null)).on("click","a.devcards-add-to-current-path",devcards.system.data_to_message.call(null,new cljs.core.Keyword(null,"add-to-current-path","add-to-current-path",1680043668),event_chan));

return jayq.core.$.call(null,devcards.system.devcards_app_node.call(null)).on("click",".devcards-set-current-path",devcards.system.data_to_message.call(null,new cljs.core.Keyword(null,"set-current-path","set-current-path",-1071346366),event_chan));
});
devcards.system.devcard_system_start = (function devcard_system_start(event_chan,render_callback){
return frontier.core.runner_start.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,frontier.core.make_runnable.call(null,devcards.system.devcard_comp,devcards.system.devcard_initial_data),new cljs.core.Keyword(null,"state-callback","state-callback",-1311788585),render_callback),new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),event_chan));
});
devcards.system.throttle_chan = (function throttle_chan(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__13512__auto___30048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto___30048,out){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto___30048,out){
return (function (state_30027){
var state_val_30028 = (state_30027[(1)]);
if((state_val_30028 === (7))){
var inst_30003 = (state_30027[(7)]);
var inst_30011 = (state_30027[(2)]);
var inst_30012 = cljs.core.nth.call(null,inst_30011,(0),null);
var inst_30013 = cljs.core.nth.call(null,inst_30011,(1),null);
var inst_30014 = cljs.core._EQ_.call(null,inst_30013,inst_30003);
var state_30027__$1 = (function (){var statearr_30029 = state_30027;
(statearr_30029[(8)] = inst_30012);

return statearr_30029;
})();
if(inst_30014){
var statearr_30030_30049 = state_30027__$1;
(statearr_30030_30049[(1)] = (8));

} else {
var statearr_30031_30050 = state_30027__$1;
(statearr_30031_30050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (1))){
var state_30027__$1 = state_30027;
var statearr_30032_30051 = state_30027__$1;
(statearr_30032_30051[(2)] = null);

(statearr_30032_30051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (4))){
var inst_30002 = (state_30027[(2)]);
var inst_30003 = cljs.core.async.timeout.call(null,ms);
var inst_30004 = inst_30002;
var state_30027__$1 = (function (){var statearr_30033 = state_30027;
(statearr_30033[(9)] = inst_30004);

(statearr_30033[(7)] = inst_30003);

return statearr_30033;
})();
var statearr_30034_30052 = state_30027__$1;
(statearr_30034_30052[(2)] = null);

(statearr_30034_30052[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (6))){
var inst_30021 = (state_30027[(2)]);
var inst_30022 = cljs.core.async.put_BANG_.call(null,out,inst_30021);
var state_30027__$1 = (function (){var statearr_30035 = state_30027;
(statearr_30035[(10)] = inst_30022);

return statearr_30035;
})();
var statearr_30036_30053 = state_30027__$1;
(statearr_30036_30053[(2)] = null);

(statearr_30036_30053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (3))){
var inst_30025 = (state_30027[(2)]);
var state_30027__$1 = state_30027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30027__$1,inst_30025);
} else {
if((state_val_30028 === (2))){
var state_30027__$1 = state_30027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30027__$1,(4),in$);
} else {
if((state_val_30028 === (9))){
var inst_30012 = (state_30027[(8)]);
var inst_30004 = inst_30012;
var state_30027__$1 = (function (){var statearr_30037 = state_30027;
(statearr_30037[(9)] = inst_30004);

return statearr_30037;
})();
var statearr_30038_30054 = state_30027__$1;
(statearr_30038_30054[(2)] = null);

(statearr_30038_30054[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (5))){
var inst_30003 = (state_30027[(7)]);
var inst_30007 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30008 = [in$,inst_30003];
var inst_30009 = (new cljs.core.PersistentVector(null,2,(5),inst_30007,inst_30008,null));
var state_30027__$1 = state_30027;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30027__$1,(7),inst_30009);
} else {
if((state_val_30028 === (10))){
var inst_30019 = (state_30027[(2)]);
var state_30027__$1 = state_30027;
var statearr_30039_30055 = state_30027__$1;
(statearr_30039_30055[(2)] = inst_30019);

(statearr_30039_30055[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (8))){
var inst_30004 = (state_30027[(9)]);
var state_30027__$1 = state_30027;
var statearr_30040_30056 = state_30027__$1;
(statearr_30040_30056[(2)] = inst_30004);

(statearr_30040_30056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__13512__auto___30048,out))
;
return ((function (switch__13456__auto__,c__13512__auto___30048,out){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_30044 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30044[(0)] = state_machine__13457__auto__);

(statearr_30044[(1)] = (1));

return statearr_30044;
});
var state_machine__13457__auto____1 = (function (state_30027){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_30027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e30045){if((e30045 instanceof Object)){
var ex__13460__auto__ = e30045;
var statearr_30046_30057 = state_30027;
(statearr_30046_30057[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30058 = state_30027;
state_30027 = G__30058;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_30027){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_30027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto___30048,out))
})();
var state__13514__auto__ = (function (){var statearr_30047 = f__13513__auto__.call(null);
(statearr_30047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto___30048);

return statearr_30047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto___30048,out))
);


return out;
});
devcards.system.throttle_function = (function throttle_function(f,ms){
var q = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var tq = devcards.system.throttle_chan.call(null,q,ms);
var c__13512__auto___30117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto___30117,q,tq){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto___30117,q,tq){
return (function (state_30100){
var state_val_30101 = (state_30100[(1)]);
if((state_val_30101 === (7))){
var inst_30096 = (state_30100[(2)]);
var state_30100__$1 = state_30100;
var statearr_30102_30118 = state_30100__$1;
(statearr_30102_30118[(2)] = inst_30096);

(statearr_30102_30118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30101 === (6))){
var state_30100__$1 = state_30100;
var statearr_30103_30119 = state_30100__$1;
(statearr_30103_30119[(2)] = null);

(statearr_30103_30119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30101 === (5))){
var inst_30090 = (state_30100[(7)]);
var inst_30092 = f.call(null,inst_30090);
var state_30100__$1 = (function (){var statearr_30104 = state_30100;
(statearr_30104[(8)] = inst_30092);

return statearr_30104;
})();
var statearr_30105_30120 = state_30100__$1;
(statearr_30105_30120[(2)] = null);

(statearr_30105_30120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30101 === (4))){
var inst_30090 = (state_30100[(7)]);
var inst_30090__$1 = (state_30100[(2)]);
var state_30100__$1 = (function (){var statearr_30106 = state_30100;
(statearr_30106[(7)] = inst_30090__$1);

return statearr_30106;
})();
if(cljs.core.truth_(inst_30090__$1)){
var statearr_30107_30121 = state_30100__$1;
(statearr_30107_30121[(1)] = (5));

} else {
var statearr_30108_30122 = state_30100__$1;
(statearr_30108_30122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30101 === (3))){
var inst_30098 = (state_30100[(2)]);
var state_30100__$1 = state_30100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30100__$1,inst_30098);
} else {
if((state_val_30101 === (2))){
var state_30100__$1 = state_30100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30100__$1,(4),tq);
} else {
if((state_val_30101 === (1))){
var state_30100__$1 = state_30100;
var statearr_30109_30123 = state_30100__$1;
(statearr_30109_30123[(2)] = null);

(statearr_30109_30123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__13512__auto___30117,q,tq))
;
return ((function (switch__13456__auto__,c__13512__auto___30117,q,tq){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_30113 = [null,null,null,null,null,null,null,null,null];
(statearr_30113[(0)] = state_machine__13457__auto__);

(statearr_30113[(1)] = (1));

return statearr_30113;
});
var state_machine__13457__auto____1 = (function (state_30100){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_30100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e30114){if((e30114 instanceof Object)){
var ex__13460__auto__ = e30114;
var statearr_30115_30124 = state_30100;
(statearr_30115_30124[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30125 = state_30100;
state_30100 = G__30125;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_30100){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_30100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto___30117,q,tq))
})();
var state__13514__auto__ = (function (){var statearr_30116 = f__13513__auto__.call(null);
(statearr_30116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto___30117);

return statearr_30116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto___30117,q,tq))
);


return ((function (q,tq){
return (function (x){
return cljs.core.async.put_BANG_.call(null,q,x);
});
;})(q,tq))
});

//# sourceMappingURL=system.js.map