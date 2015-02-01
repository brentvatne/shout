// Compiled by ClojureScript 0.0-2725 {}
goog.provide('frontier.cards');
goog.require('cljs.core');
goog.require('frontier.core');
goog.require('devcards.util.edn_renderer');
goog.require('sablono.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
frontier.cards.can_go_forward_QMARK_ = (function can_go_forward_QMARK_(p__29575){
var map__29577 = p__29575;
var map__29577__$1 = ((cljs.core.seq_QMARK_.call(null,map__29577))?cljs.core.apply.call(null,cljs.core.hash_map,map__29577):map__29577);
var __history_keeper = cljs.core.get.call(null,map__29577__$1,new cljs.core.Keyword(null,"__history-keeper","__history-keeper",-1671309796));
var pointer = cljs.core.get.call(null,map__29577__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return (pointer < cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(__history_keeper)));
});
frontier.cards.can_go_back_QMARK_ = (function can_go_back_QMARK_(p__29578){
var map__29580 = p__29578;
var map__29580__$1 = ((cljs.core.seq_QMARK_.call(null,map__29580))?cljs.core.apply.call(null,cljs.core.hash_map,map__29580):map__29580);
var pointer = cljs.core.get.call(null,map__29580__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return (pointer > (0));
});
frontier.cards.under_control_QMARK_ = (function under_control_QMARK_(p__29581){
var map__29583 = p__29581;
var map__29583__$1 = ((cljs.core.seq_QMARK_.call(null,map__29583))?cljs.core.apply.call(null,cljs.core.hash_map,map__29583):map__29583);
var __history_keeper = cljs.core.get.call(null,map__29583__$1,new cljs.core.Keyword(null,"__history-keeper","__history-keeper",-1671309796));
var pointer = cljs.core.get.call(null,map__29583__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return cljs.core.not_EQ_.call(null,pointer,cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(__history_keeper)));
});
frontier.cards.msg_history = (function msg_history(state){
return cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__history-keeper","__history-keeper",-1671309796),new cljs.core.Keyword(null,"history","history",-247395220)], null));
});
frontier.cards.hist_trans = (function (){var method_table__4652__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4653__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4656__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"frontier.cards","hist-trans"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4656__auto__,method_table__4652__auto__,prefer_table__4653__auto__,method_cache__4654__auto__,cached_hierarchy__4655__auto__));
})();
cljs.core._add_method.call(null,frontier.cards.hist_trans,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,state,___$1){
return state;
}));
cljs.core._add_method.call(null,frontier.cards.hist_trans,new cljs.core.Keyword(null,"history.goto","history.goto",1536453405),(function (p__29584,state,_){
var vec__29585 = p__29584;
var ___$1 = cljs.core.nth.call(null,vec__29585,(0),null);
var pointer = cljs.core.nth.call(null,vec__29585,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pointer","pointer",85071187),pointer);
}));
cljs.core._add_method.call(null,frontier.cards.hist_trans,new cljs.core.Keyword(null,"history.back","history.back",-1323731191),(function (_,state,___$1){
if(frontier.cards.can_go_back_QMARK_.call(null,state)){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),cljs.core.dec);
} else {
return state;
}
}));
cljs.core._add_method.call(null,frontier.cards.hist_trans,new cljs.core.Keyword(null,"history.forward","history.forward",-1635553585),(function (_,state,___$1){
if(frontier.cards.can_go_forward_QMARK_.call(null,state)){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),cljs.core.inc);
} else {
return state;
}
}));
cljs.core._add_method.call(null,frontier.cards.hist_trans,new cljs.core.Keyword(null,"history.keep","history.keep",782248835),(function (_,p__29586,___$1){
var map__29587 = p__29586;
var map__29587__$1 = ((cljs.core.seq_QMARK_.call(null,map__29587))?cljs.core.apply.call(null,cljs.core.hash_map,map__29587):map__29587);
var state = map__29587__$1;
var pointer = cljs.core.get.call(null,map__29587__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__history-keeper","__history-keeper",-1671309796),new cljs.core.Keyword(null,"history","history",-247395220)], null),((function (map__29587,map__29587__$1,state,pointer){
return (function (history){
return cljs.core.subvec.call(null,history,(0),pointer);
});})(map__29587,map__29587__$1,state,pointer))
);
}));
cljs.core._add_method.call(null,frontier.cards.hist_trans,new cljs.core.Keyword(null,"history.cancel","history.cancel",-1293804092),(function (_,state,___$1){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pointer","pointer",85071187),cljs.core.count.call(null,frontier.cards.msg_history.call(null,state)));
}));
frontier.cards.under_control = (function under_control(system){
return cljs.core.assoc.call(null,system,new cljs.core.Keyword(null,"under-control","under-control",-1258968636),frontier.cards.under_control_QMARK_.call(null,system));
});
frontier.cards.current_state_STAR__STAR_ = (function() {
var current_state_STAR__STAR_ = null;
var current_state_STAR__STAR___2 = (function (p__29589,component){
var map__29593 = p__29589;
var map__29593__$1 = ((cljs.core.seq_QMARK_.call(null,map__29593))?cljs.core.apply.call(null,cljs.core.hash_map,map__29593):map__29593);
var virt_state = map__29593__$1;
var history = cljs.core.get.call(null,map__29593__$1,new cljs.core.Keyword(null,"history","history",-247395220));
return current_state_STAR__STAR_.call(null,virt_state,cljs.core.count.call(null,history),component);
});
var current_state_STAR__STAR___3 = (function (p__29588,pointer,component){
var map__29592 = p__29588;
var map__29592__$1 = ((cljs.core.seq_QMARK_.call(null,map__29592))?cljs.core.apply.call(null,cljs.core.hash_map,map__29592):map__29592);
var virt_state = map__29592__$1;
var state = cljs.core.get.call(null,map__29592__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var history = cljs.core.get.call(null,map__29592__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var initial_state = cljs.core.get_in.call(null,component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system","system",-29381724),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806)], null));
return frontier.core._derive.call(null,component,((((pointer === (0))) || ((cljs.core.count.call(null,history) === (0))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__history-keeper","__history-keeper",-1671309796),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(initial_state),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),initial_state,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentVector.EMPTY], null)], null):(function (){var temp_history = cljs.core.subvec.call(null,history,(0),pointer);
return frontier.core._transform.call(null,component,frontier.core.msg_prefix.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__history-keeper","__history-keeper",-1671309796)], null),cljs.core.last.call(null,temp_history)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__history-keeper","__history-keeper",-1671309796),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),initial_state,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.butlast.call(null,temp_history)], null)], null));
})()));
});
current_state_STAR__STAR_ = function(p__29588,pointer,component){
switch(arguments.length){
case 2:
return current_state_STAR__STAR___2.call(this,p__29588,pointer);
case 3:
return current_state_STAR__STAR___3.call(this,p__29588,pointer,component);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
current_state_STAR__STAR_.cljs$core$IFn$_invoke$arity$2 = current_state_STAR__STAR___2;
current_state_STAR__STAR_.cljs$core$IFn$_invoke$arity$3 = current_state_STAR__STAR___3;
return current_state_STAR__STAR_;
})()
;
frontier.cards.render_state = (function render_state(p__29594,comp_STAR_){
var map__29596 = p__29594;
var map__29596__$1 = ((cljs.core.seq_QMARK_.call(null,map__29596))?cljs.core.apply.call(null,cljs.core.hash_map,map__29596):map__29596);
var state = map__29596__$1;
var __history_keeper = cljs.core.get.call(null,map__29596__$1,new cljs.core.Keyword(null,"__history-keeper","__history-keeper",-1671309796));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"render-stater","render-stater",-671605486),((frontier.cards.under_control_QMARK_.call(null,state))?frontier.cards.current_state_STAR__STAR_.call(null,__history_keeper,new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(state),comp_STAR_):frontier.cards.current_state_STAR__STAR_.call(null,__history_keeper,comp_STAR_)));
});
frontier.cards.can_go_forward = (function can_go_forward(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"can-go-forward","can-go-forward",-1999782771),frontier.cards.can_go_forward_QMARK_.call(null,state));
});
frontier.cards.can_go_back = (function can_go_back(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"can-go-back","can-go-back",503206789),frontier.cards.can_go_back_QMARK_.call(null,state));
});
frontier.cards.add_msg = (function add_msg(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"msg","msg",-1386103444),frontier.core.msg__GT_local_msg.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core.get.call(null,frontier.cards.msg_history.call(null,state),(new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(state) - (1)))));
});
frontier.cards.messages = (function messages(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.take.call(null,(20),cljs.core.reverse.call(null,cljs.core.map_indexed.call(null,(function (i,x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + (1)),x], null);
}),cljs.core.map.call(null,cljs.core.partial.call(null,frontier.core.msg__GT_local_msg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099)], null)),frontier.cards.msg_history.call(null,state))))));
});
frontier.cards.history_message_QMARK_ = (function history_message_QMARK_(msg){
return ((cljs.core.first.call(null,msg) instanceof cljs.core.Keyword)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.name.call(null,cljs.core.first.call(null,msg)),/\./)),"history"));
});

/**
* @constructor
* @param {*} virtual_system
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
frontier.cards.HistoryManager = (function (virtual_system,__meta,__extmap,__hash){
this.virtual_system = virtual_system;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
frontier.cards.HistoryManager.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4358__auto__,k__4359__auto__){
var self__ = this;
var this__4358__auto____$1 = this;
return cljs.core._lookup.call(null,this__4358__auto____$1,k__4359__auto__,null);
});

frontier.cards.HistoryManager.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4360__auto__,k29598,else__4361__auto__){
var self__ = this;
var this__4360__auto____$1 = this;
var G__29600 = (((k29598 instanceof cljs.core.Keyword))?k29598.fqn:null);
switch (G__29600) {
case "virtual-system":
return self__.virtual_system;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29598,else__4361__auto__);

}
});

frontier.cards.HistoryManager.prototype.frontier$core$IInputFilter$ = true;

frontier.cards.HistoryManager.prototype.frontier$core$IInputFilter$_filter_input$arity$3 = (function (_,msg,state){
var self__ = this;
var ___$1 = this;
return frontier.core._filter_input.call(null,self__.virtual_system,msg,state);
});

frontier.cards.HistoryManager.prototype.frontier$core$IStop$ = true;

frontier.cards.HistoryManager.prototype.frontier$core$IStop$_stop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return frontier.core._stop.call(null,self__.virtual_system);
});

frontier.cards.HistoryManager.prototype.frontier$core$IInit$ = true;

frontier.cards.HistoryManager.prototype.frontier$core$IInit$_initialize$arity$3 = (function (_,state,event_chan){
var self__ = this;
var ___$1 = this;
return frontier.core._initialize.call(null,self__.virtual_system,state,event_chan);
});

frontier.cards.HistoryManager.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4372__auto__,writer__4373__auto__,opts__4374__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
var pr_pair__4375__auto__ = ((function (this__4372__auto____$1){
return (function (keyval__4376__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4373__auto__,cljs.core.pr_writer,""," ","",opts__4374__auto__,keyval__4376__auto__);
});})(this__4372__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4373__auto__,pr_pair__4375__auto__,"#frontier.cards.HistoryManager{",", ","}",opts__4374__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"virtual-system","virtual-system",1819405367),self__.virtual_system],null))], null),self__.__extmap));
});

frontier.cards.HistoryManager.prototype.frontier$core$IDerive$ = true;

frontier.cards.HistoryManager.prototype.frontier$core$IDerive$_derive$arity$2 = (function (o,state){
var self__ = this;
var o__$1 = this;
return frontier.cards.render_state.call(null,frontier.cards.messages.call(null,frontier.cards.add_msg.call(null,frontier.cards.can_go_back.call(null,frontier.cards.can_go_forward.call(null,frontier.cards.under_control.call(null,state))))),self__.virtual_system);
});

frontier.cards.HistoryManager.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4356__auto__){
var self__ = this;
var this__4356__auto____$1 = this;
return self__.__meta;
});

frontier.cards.HistoryManager.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4352__auto__){
var self__ = this;
var this__4352__auto____$1 = this;
return (new frontier.cards.HistoryManager(self__.virtual_system,self__.__meta,self__.__extmap,self__.__hash));
});

frontier.cards.HistoryManager.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4362__auto__){
var self__ = this;
var this__4362__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

frontier.cards.HistoryManager.prototype.frontier$core$ITransform$ = true;

frontier.cards.HistoryManager.prototype.frontier$core$ITransform$_transform$arity$3 = (function (o,msg,state){
var self__ = this;
var o__$1 = this;
if(frontier.cards.history_message_QMARK_.call(null,msg)){
return frontier.cards.hist_trans.call(null,msg,state,new cljs.core.Keyword(null,"__history-keeper","__history-keeper",-1671309796).cljs$core$IFn$_invoke$arity$1(state));
} else {
var new_state = frontier.core._transform.call(null,self__.virtual_system,msg,state);
return cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"pointer","pointer",85071187),cljs.core.count.call(null,cljs.core.get_in.call(null,new_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__history-keeper","__history-keeper",-1671309796),new cljs.core.Keyword(null,"history","history",-247395220)], null))));
}
});

frontier.cards.HistoryManager.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4353__auto__){
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

frontier.cards.HistoryManager.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4354__auto__,other__4355__auto__){
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

frontier.cards.HistoryManager.prototype.frontier$core$IEffect$ = true;

frontier.cards.HistoryManager.prototype.frontier$core$IEffect$_effect$arity$5 = (function (o,msg,state,event_chan,effect_chan){
var self__ = this;
var o__$1 = this;
return frontier.core._effect.call(null,self__.virtual_system,msg,state,event_chan,effect_chan);
});

frontier.cards.HistoryManager.prototype.frontier$core$IRender$ = true;

frontier.cards.HistoryManager.prototype.frontier$core$IRender$_render$arity$2 = (function (_,p__29601){
var self__ = this;
var map__29602 = p__29601;
var map__29602__$1 = ((cljs.core.seq_QMARK_.call(null,map__29602))?cljs.core.apply.call(null,cljs.core.hash_map,map__29602):map__29602);
var hist_state = map__29602__$1;
var event_chan = cljs.core.get.call(null,map__29602__$1,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912));
var state = cljs.core.get.call(null,map__29602__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ___$1 = this;
var derived_state = new cljs.core.Keyword(null,"render-stater","render-stater",-671605486).cljs$core$IFn$_invoke$arity$1(state);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-manager","div.history-manager",1693139467),frontier.cards.render_history_controls.call(null,state,event_chan),frontier.core._render.call(null,self__.virtual_system,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),derived_state,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),event_chan], null)),devcards.util.edn_renderer.html_edn.call(null,cljs.core.get_in.call(null,derived_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__history-keeper","__history-keeper",-1671309796),new cljs.core.Keyword(null,"state","state",-1988618099)], null)))], null);
});

frontier.cards.HistoryManager.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4367__auto__,k__4368__auto__){
var self__ = this;
var this__4367__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"virtual-system","virtual-system",1819405367),null], null), null),k__4368__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4367__auto____$1),self__.__meta),k__4368__auto__);
} else {
return (new frontier.cards.HistoryManager(self__.virtual_system,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4368__auto__)),null));
}
});

frontier.cards.HistoryManager.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4365__auto__,k__4366__auto__,G__29597){
var self__ = this;
var this__4365__auto____$1 = this;
var pred__29603 = cljs.core.keyword_identical_QMARK_;
var expr__29604 = k__4366__auto__;
if(cljs.core.truth_(pred__29603.call(null,new cljs.core.Keyword(null,"virtual-system","virtual-system",1819405367),expr__29604))){
return (new frontier.cards.HistoryManager(G__29597,self__.__meta,self__.__extmap,null));
} else {
return (new frontier.cards.HistoryManager(self__.virtual_system,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4366__auto__,G__29597),null));
}
});

frontier.cards.HistoryManager.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"virtual-system","virtual-system",1819405367),self__.virtual_system],null))], null),self__.__extmap));
});

frontier.cards.HistoryManager.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4357__auto__,G__29597){
var self__ = this;
var this__4357__auto____$1 = this;
return (new frontier.cards.HistoryManager(self__.virtual_system,G__29597,self__.__extmap,self__.__hash));
});

frontier.cards.HistoryManager.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4363__auto__,entry__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4364__auto__)){
return cljs.core._assoc.call(null,this__4363__auto____$1,cljs.core._nth.call(null,entry__4364__auto__,(0)),cljs.core._nth.call(null,entry__4364__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4363__auto____$1,entry__4364__auto__);
}
});

frontier.cards.HistoryManager.cljs$lang$type = true;

frontier.cards.HistoryManager.cljs$lang$ctorPrSeq = (function (this__4392__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"frontier.cards/HistoryManager");
});

frontier.cards.HistoryManager.cljs$lang$ctorPrWriter = (function (this__4392__auto__,writer__4393__auto__){
return cljs.core._write.call(null,writer__4393__auto__,"frontier.cards/HistoryManager");
});

frontier.cards.__GT_HistoryManager = (function __GT_HistoryManager(virtual_system){
return (new frontier.cards.HistoryManager(virtual_system,null,null,null));
});

frontier.cards.map__GT_HistoryManager = (function map__GT_HistoryManager(G__29599){
return (new frontier.cards.HistoryManager(new cljs.core.Keyword(null,"virtual-system","virtual-system",1819405367).cljs$core$IFn$_invoke$arity$1(G__29599),null,cljs.core.dissoc.call(null,G__29599,new cljs.core.Keyword(null,"virtual-system","virtual-system",1819405367)),null));
});

frontier.cards.render_history_controls = (function render_history_controls(p__29607,hist_chan){
var map__29642 = p__29607;
var map__29642__$1 = ((cljs.core.seq_QMARK_.call(null,map__29642))?cljs.core.apply.call(null,cljs.core.hash_map,map__29642):map__29642);
var sys = map__29642__$1;
var messages = cljs.core.get.call(null,map__29642__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var msg = cljs.core.get.call(null,map__29642__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var can_go_forward = cljs.core.get.call(null,map__29642__$1,new cljs.core.Keyword(null,"can-go-forward","can-go-forward",-1999782771));
var can_go_back = cljs.core.get.call(null,map__29642__$1,new cljs.core.Keyword(null,"can-go-back","can-go-back",503206789));
var under_control = cljs.core.get.call(null,map__29642__$1,new cljs.core.Keyword(null,"under-control","under-control",-1258968636));
return React.DOM.div({"className": "navbar navbar-default navbar-static-top", "style": cljs.core.clj__GT_js.call(null,(function (){var obj29649 = {"paddingLeft":"14px"};
return obj29649;
})())},(function (){var attrs29643 = (cljs.core.truth_(can_go_back)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-default.navbar-btn","a.btn.btn-default.navbar-btn",648984884),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),"",new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__29642,map__29642__$1,sys,messages,msg,can_go_forward,can_go_back,under_control){
return (function (x){
x.preventDefault();

return cljs.core.async.put_BANG_.call(null,hist_chan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history.back","history.back",-1323731191)], null));
});})(map__29642,map__29642__$1,sys,messages,msg,can_go_forward,can_go_back,under_control))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-step-backward","span.glyphicon.glyphicon-step-backward",1036620418)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-default.navbar-btn.disabled","a.btn.btn-default.navbar-btn.disabled",631860609),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-step-backward","span.glyphicon.glyphicon-step-backward",1036620418)], null)], null));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs29643))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nav","navbar-nav","btn-group"], null)], null),attrs29643)):{"className": "nav navbar-nav btn-group"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29643))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(under_control)?React.DOM.a({"className": "btn btn-default navbar-btn", "onClick": ((function (attrs29643,map__29642,map__29642__$1,sys,messages,msg,can_go_forward,can_go_back,under_control){
return (function (x){
x.preventDefault();

return cljs.core.async.put_BANG_.call(null,hist_chan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history.cancel","history.cancel",-1293804092)], null));
});})(attrs29643,map__29642,map__29642__$1,sys,messages,msg,can_go_forward,can_go_back,under_control))
},React.DOM.span({"className": "glyphicon glyphicon-stop"})):React.DOM.a({"className": "btn btn-default navbar-btn disabled"},React.DOM.span({"className": "glyphicon glyphicon-stop"}))),(cljs.core.truth_(under_control)?React.DOM.a({"className": "btn btn-default navbar-btn", "onClick": ((function (attrs29643,map__29642,map__29642__$1,sys,messages,msg,can_go_forward,can_go_back,under_control){
return (function (x){
x.preventDefault();

return cljs.core.async.put_BANG_.call(null,hist_chan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history.keep","history.keep",782248835)], null));
});})(attrs29643,map__29642,map__29642__$1,sys,messages,msg,can_go_forward,can_go_back,under_control))
},React.DOM.span({"className": "glyphicon glyphicon-download-alt"})):React.DOM.a({"className": "btn btn-default navbar-btn disabled"},React.DOM.span({"className": "glyphicon glyphicon-download-alt"}))),(cljs.core.truth_((function (){var and__3743__auto__ = under_control;
if(cljs.core.truth_(and__3743__auto__)){
return can_go_forward;
} else {
return and__3743__auto__;
}
})())?React.DOM.a({"className": "btn btn-default navbar-btn", "onClick": ((function (attrs29643,map__29642,map__29642__$1,sys,messages,msg,can_go_forward,can_go_back,under_control){
return (function (x){
x.preventDefault();

return cljs.core.async.put_BANG_.call(null,hist_chan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history.forward","history.forward",-1635553585)], null));
});})(attrs29643,map__29642,map__29642__$1,sys,messages,msg,can_go_forward,can_go_back,under_control))
},React.DOM.span({"className": "glyphicon glyphicon-step-forward"})):React.DOM.a({"className": "btn btn-default navbar-btn disabled"},React.DOM.span({"className": "glyphicon glyphicon-step-forward"})))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29643),(cljs.core.truth_(under_control)?React.DOM.a({"className": "btn btn-default navbar-btn", "onClick": ((function (attrs29643,map__29642,map__29642__$1,sys,messages,msg,can_go_forward,can_go_back,under_control){
return (function (x){
x.preventDefault();

return cljs.core.async.put_BANG_.call(null,hist_chan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history.cancel","history.cancel",-1293804092)], null));
});})(attrs29643,map__29642,map__29642__$1,sys,messages,msg,can_go_forward,can_go_back,under_control))
},React.DOM.span({"className": "glyphicon glyphicon-stop"})):React.DOM.a({"className": "btn btn-default navbar-btn disabled"},React.DOM.span({"className": "glyphicon glyphicon-stop"}))),(cljs.core.truth_(under_control)?React.DOM.a({"className": "btn btn-default navbar-btn", "onClick": ((function (attrs29643,map__29642,map__29642__$1,sys,messages,msg,can_go_forward,can_go_back,under_control){
return (function (x){
x.preventDefault();

return cljs.core.async.put_BANG_.call(null,hist_chan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history.keep","history.keep",782248835)], null));
});})(attrs29643,map__29642,map__29642__$1,sys,messages,msg,can_go_forward,can_go_back,under_control))
},React.DOM.span({"className": "glyphicon glyphicon-download-alt"})):React.DOM.a({"className": "btn btn-default navbar-btn disabled"},React.DOM.span({"className": "glyphicon glyphicon-download-alt"}))),(cljs.core.truth_((function (){var and__3743__auto__ = under_control;
if(cljs.core.truth_(and__3743__auto__)){
return can_go_forward;
} else {
return and__3743__auto__;
}
})())?React.DOM.a({"className": "btn btn-default navbar-btn", "onClick": ((function (attrs29643,map__29642,map__29642__$1,sys,messages,msg,can_go_forward,can_go_back,under_control){
return (function (x){
x.preventDefault();

return cljs.core.async.put_BANG_.call(null,hist_chan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history.forward","history.forward",-1635553585)], null));
});})(attrs29643,map__29642,map__29642__$1,sys,messages,msg,can_go_forward,can_go_back,under_control))
},React.DOM.span({"className": "glyphicon glyphicon-step-forward"})):React.DOM.a({"className": "btn btn-default navbar-btn disabled"},React.DOM.span({"className": "glyphicon glyphicon-step-forward"})))], null))));
})(),React.DOM.ul({"className": "nav navbar-nav"},React.DOM.li({"className": "dropdown"},React.DOM.a({"className": "dropdown-toggle", "data-toggle": "dropdown"},"Input history ",React.DOM.b({"className": "caret"})),(function (){var attrs29646 = cljs.core.map.call(null,((function (map__29642,map__29642__$1,sys,messages,msg,can_go_forward,can_go_back,under_control){
return (function (p__29674){
var vec__29675 = p__29674;
var i = cljs.core.nth.call(null,vec__29675,(0),null);
var m = cljs.core.nth.call(null,vec__29675,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (vec__29675,i,m,map__29642,map__29642__$1,sys,messages,msg,can_go_forward,can_go_back,under_control){
return (function (x){
x.preventDefault();

return cljs.core.async.put_BANG_.call(null,hist_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history.goto","history.goto",1536453405),i], null));
});})(vec__29675,i,m,map__29642,map__29642__$1,sys,messages,msg,can_go_forward,can_go_back,under_control))
], null),[cljs.core.str(i),cljs.core.str(" "),cljs.core.str(cljs.core.prn_str.call(null,m))].join('')], null)], null);
});})(map__29642,map__29642__$1,sys,messages,msg,can_go_forward,can_go_back,under_control))
,messages);
return cljs.core.apply.call(null,React.DOM.ul,((cljs.core.map_QMARK_.call(null,attrs29646))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dropdown-menu"], null)], null),attrs29646)):{"className": "dropdown-menu"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29646))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29646)], null))));
})())),(function (){var attrs29647 = new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(sys);
return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs29647))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["navbar-text"], null)], null),attrs29647)):{"className": "navbar-text"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29647))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",sablono.interpreter.interpret.call(null,cljs.core.prn_str.call(null,msg))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29647)," ",sablono.interpreter.interpret.call(null,cljs.core.prn_str.call(null,msg))], null))));
})());
});
/**
* @param {...*} var_args
*/
frontier.cards.render_input_message_links = (function() { 
var render_input_message_links__delegate = function (msgs,event_chan,p__29676){
var map__29678 = p__29676;
var map__29678__$1 = ((cljs.core.seq_QMARK_.call(null,map__29678))?cljs.core.apply.call(null,cljs.core.hash_map,map__29678):map__29678);
var disabled = cljs.core.get.call(null,map__29678__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.call(null,((function (map__29678,map__29678__$1,disabled){
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(disabled)?cljs.core.prn_str.call(null,x):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__29678,map__29678__$1,disabled){
return (function (){
return cljs.core.async.put_BANG_.call(null,event_chan,x);
});})(map__29678,map__29678__$1,disabled))
], null),cljs.core.prn_str.call(null,x)], null))], null);
});})(map__29678,map__29678__$1,disabled))
,msgs)], null);
};
var render_input_message_links = function (msgs,event_chan,var_args){
var p__29676 = null;
if (arguments.length > 2) {
var G__29679__i = 0, G__29679__a = new Array(arguments.length -  2);
while (G__29679__i < G__29679__a.length) {G__29679__a[G__29679__i] = arguments[G__29679__i + 2]; ++G__29679__i;}
  p__29676 = new cljs.core.IndexedSeq(G__29679__a,0);
} 
return render_input_message_links__delegate.call(this,msgs,event_chan,p__29676);};
render_input_message_links.cljs$lang$maxFixedArity = 2;
render_input_message_links.cljs$lang$applyTo = (function (arglist__29680){
var msgs = cljs.core.first(arglist__29680);
arglist__29680 = cljs.core.next(arglist__29680);
var event_chan = cljs.core.first(arglist__29680);
var p__29676 = cljs.core.rest(arglist__29680);
return render_input_message_links__delegate(msgs,event_chan,p__29676);
});
render_input_message_links.cljs$core$IFn$_invoke$arity$variadic = render_input_message_links__delegate;
return render_input_message_links;
})()
;
frontier.cards.input_controls_renderer = (function input_controls_renderer(input_messages){
return (function() { 
var G__29689__delegate = function (p__29685,p__29686){
var map__29687 = p__29685;
var map__29687__$1 = ((cljs.core.seq_QMARK_.call(null,map__29687))?cljs.core.apply.call(null,cljs.core.hash_map,map__29687):map__29687);
var event_chan = cljs.core.get.call(null,map__29687__$1,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912));
var map__29688 = p__29686;
var map__29688__$1 = ((cljs.core.seq_QMARK_.call(null,map__29688))?cljs.core.apply.call(null,cljs.core.hash_map,map__29688):map__29688);
var disabled = cljs.core.get.call(null,map__29688__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
return frontier.cards.render_input_message_links.call(null,input_messages,event_chan);
};
var G__29689 = function (p__29685,var_args){
var p__29686 = null;
if (arguments.length > 1) {
var G__29690__i = 0, G__29690__a = new Array(arguments.length -  1);
while (G__29690__i < G__29690__a.length) {G__29690__a[G__29690__i] = arguments[G__29690__i + 1]; ++G__29690__i;}
  p__29686 = new cljs.core.IndexedSeq(G__29690__a,0);
} 
return G__29689__delegate.call(this,p__29685,p__29686);};
G__29689.cljs$lang$maxFixedArity = 1;
G__29689.cljs$lang$applyTo = (function (arglist__29691){
var p__29685 = cljs.core.first(arglist__29691);
var p__29686 = cljs.core.rest(arglist__29691);
return G__29689__delegate(p__29685,p__29686);
});
G__29689.cljs$core$IFn$_invoke$arity$variadic = G__29689__delegate;
return G__29689;
})()
;
});
frontier.cards.history_manager = (function history_manager(initial_state,component){
var initial_state_SINGLEQUOTE_ = cljs.core.assoc_in.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__history-keeper","__history-keeper",-1671309796),new cljs.core.Keyword(null,"state","state",-1988618099)], null),initial_state);
return (new frontier.cards.HistoryManager((new frontier.core.Namespacer(new cljs.core.Keyword(null,"__history-keeper","__history-keeper",-1671309796),(new frontier.core.HistoryKeeper((new frontier.core.Namespacer(new cljs.core.Keyword(null,"state","state",-1988618099),component,null,null,null)),new cljs.core.Keyword(null,"__history-keeper","__history-keeper",-1671309796).cljs$core$IFn$_invoke$arity$1(initial_state_SINGLEQUOTE_),null,null,null)),null,null,null)),null,null,null));
});

//# sourceMappingURL=cards.js.map