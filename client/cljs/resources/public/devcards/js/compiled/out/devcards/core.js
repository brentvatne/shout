// Compiled by ClojureScript 0.0-2725 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('om.dom');
goog.require('frontier.cards');
goog.require('frontier.core');
goog.require('cljs.core.async');
goog.require('devcards.system');
goog.require('sablono.core');
goog.require('figwheel.client');
goog.require('clojure.string');
goog.require('om.core');
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
* This function starts the full devcard UI.
*/
devcards.core.start_devcard_ui_BANG_ = (function start_devcard_ui_BANG_(){
if(typeof devcards.core.devcard_system !== 'undefined'){
return null;
} else {
devcards.core.devcard_system = (function (){
devcards.system.render_base_if_necessary_BANG_.call(null);

var ds = devcards.system.devcard_system_start.call(null,devcards.core.devcard_event_chan,devcards.system.throttle_function.call(null,devcards.system.devcard_renderer,(50)));
devcards.system.register_listeners.call(null,devcards.core.devcard_event_chan);

return ds;
})()
;
}
});
/**
* Start a devcard UI that allows you to cherry pick which cards to display.
* You will need to call render-single-card to put cards into the dom.
*/
devcards.core.start_single_card_ui_BANG_ = (function start_single_card_ui_BANG_(){
if(typeof devcards.core.devcard_single_card_system !== 'undefined'){
return null;
} else {
devcards.core.devcard_single_card_system = devcards.system.devcard_system_start.call(null,devcards.core.devcard_event_chan,devcards.system.throttle_function.call(null,(function (p__25572){
var map__25573 = p__25572;
var map__25573__$1 = ((cljs.core.seq_QMARK_.call(null,map__25573))?cljs.core.apply.call(null,cljs.core.hash_map,map__25573):map__25573);
var event_chan = cljs.core.get.call(null,map__25573__$1,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912));
var state = cljs.core.get.call(null,map__25573__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
devcards.system.unmount_card_nodes.call(null,state);

return devcards.system.mount_card_nodes.call(null,state);
}),(50)));
}
});
devcards.core.devcard_before_jsload = (function devcard_before_jsload(x){
cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),x], null));

return x;
});
devcards.core.devcard_on_jsload = (function devcard_on_jsload(x){
cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),x], null));

return x;
});
devcards.core.devcard_on_cssload = (function devcard_on_cssload(x){
cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cssload","cssload",-1391978296)], null));

return x;
});
devcards.core.devcard_on_compile_fail = (function devcard_on_compile_fail(exception_msg){
cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-fail","compile-fail",-1895835730),exception_msg], null));

return exception_msg;
});
/**
* Start the figwheel reloader and hook it into devcards so that cards
* are reloaded on code reloads.
*/
devcards.core.start_figwheel_reloader_BANG_ = (function() {
var start_figwheel_reloader_BANG_ = null;
var start_figwheel_reloader_BANG___0 = (function (){
return start_figwheel_reloader_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start_figwheel_reloader_BANG___1 = (function (opts){
return figwheel.client.watch_and_reload_with_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),cljs.core.comp.call(null,devcards.core.devcard_before_jsload,figwheel.client.default_before_load),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),devcards.core.devcard_on_jsload,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),cljs.core.comp.call(null,devcards.core.devcard_on_compile_fail,figwheel.client.default_on_compile_fail),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),cljs.core.comp.call(null,devcards.core.devcard_on_cssload,figwheel.client.default_on_cssload)));
});
start_figwheel_reloader_BANG_ = function(opts){
switch(arguments.length){
case 0:
return start_figwheel_reloader_BANG___0.call(this);
case 1:
return start_figwheel_reloader_BANG___1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start_figwheel_reloader_BANG_.cljs$core$IFn$_invoke$arity$0 = start_figwheel_reloader_BANG___0;
start_figwheel_reloader_BANG_.cljs$core$IFn$_invoke$arity$1 = start_figwheel_reloader_BANG___1;
return start_figwheel_reloader_BANG_;
})()
;
devcards.core.register_card = (function register_card(path,options,func){

return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"func","func",-238706040),func], null)], null));
});
devcards.core.render_single_card = (function render_single_card(card_path,node){

var id = devcards.system.path__GT_unique_card_id.call(null,card_path);
if(cljs.core.truth_(document.getElementById(id))){
return null;
} else {
return $(node).html([cljs.core.str("<div class='devcard-rendered-card' id='"),cljs.core.str(id),cljs.core.str("'></div>")].join(''));
}
});
devcards.core.edn__GT_html = devcards.util.edn_renderer.html_edn;
devcards.core.leading_space_count = (function leading_space_count(s){
var temp__4126__auto__ = cljs.core.second.call(null,cljs.core.re_matches.call(null,/^([\s]*).*/,s));
if(cljs.core.truth_(temp__4126__auto__)){
var ws = temp__4126__auto__;
return ws.length;
} else {
return null;
}
});
devcards.core.code_delim_QMARK_ = (function code_delim_QMARK_(s){
var and__3743__auto__ = !((s == null));
if(and__3743__auto__){
return cljs.core.re_matches.call(null,/^\s*```.*/,s);
} else {
return and__3743__auto__;
}
});
devcards.core.group_and_trim_code_block = (function group_and_trim_code_block(xs){
var opener = cljs.core.first.call(null,xs);
var leading_spaces = devcards.core.leading_space_count.call(null,opener);
var code_block = cljs.core.take_while.call(null,cljs.core.complement.call(null,devcards.core.code_delim_QMARK_),cljs.core.rest.call(null,xs));
var after_code_block = cljs.core.rest.call(null,cljs.core.drop_while.call(null,cljs.core.complement.call(null,devcards.core.code_delim_QMARK_),cljs.core.rest.call(null,xs)));
return cljs.core.cons.call(null,clojure.string.join.call(null,"\n",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.trim.call(null,opener)], null),cljs.core.map.call(null,((function (opener,leading_spaces,code_block,after_code_block){
return (function (p1__25574_SHARP_){
return cljs.core.subs.call(null,p1__25574_SHARP_,leading_spaces);
});})(opener,leading_spaces,code_block,after_code_block))
,code_block),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["```"], null))),after_code_block);
});
devcards.core.group_and_trim_code_blocks = (function group_and_trim_code_blocks(xs){
if((xs == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.empty_QMARK_.call(null,xs)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.truth_(devcards.core.code_delim_QMARK_.call(null,cljs.core.first.call(null,xs)))){
return group_and_trim_code_blocks.call(null,devcards.core.group_and_trim_code_block.call(null,xs));
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,xs),group_and_trim_code_blocks.call(null,cljs.core.rest.call(null,xs)));

}
}
}
});
devcards.core.trim_markdown_string = (function trim_markdown_string(s){
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.re_matches.call(null,/^```[\s\S]*/,s)))){
return s;
} else {
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,clojure.string.trim,devcards.core.group_and_trim_code_blocks.call(null,clojure.string.split.call(null,s,"\n"))));
}
});
devcards.core.preformat_markdown = (function preformat_markdown(mkdn_strs){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,devcards.core.trim_markdown_string,mkdn_strs));
});
var conv_class_25575 = Showdown.converter;
var converter_25576 = (new conv_class_25575());
/**
* render markdown
*/
devcards.core.markdown_to_html = ((function (conv_class_25575,converter_25576){
return (function markdown_to_html(markdown_txt){
return converter_25576.makeHtml(markdown_txt);
});})(conv_class_25575,converter_25576))
;
devcards.core.less_sensitive_markdown = cljs.core.comp.call(null,devcards.core.markdown_to_html,devcards.core.preformat_markdown);
/**
* Render a react component to a node.
*/
devcards.core.render_to = (function() {
var render_to = null;
var render_to__2 = (function (react_dom,html_node){
return render_to.call(null,react_dom,html_node,cljs.core.identity);
});
var render_to__3 = (function (react_dom,html_node,callback){
return React.renderComponent(react_dom,html_node,callback);
});
render_to = function(react_dom,html_node,callback){
switch(arguments.length){
case 2:
return render_to__2.call(this,react_dom,html_node);
case 3:
return render_to__3.call(this,react_dom,html_node,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_to.cljs$core$IFn$_invoke$arity$2 = render_to__2;
render_to.cljs$core$IFn$_invoke$arity$3 = render_to__3;
return render_to;
})()
;
devcards.core.unmount_react = (function unmount_react(node){

return React.unmountComponentAtNode(node);
});
devcards.core.react_raw = (function react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});

/**
* @constructor
* @param {*} react_component
* @param {*} options
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
devcards.core.ReactCard = (function (react_component,options,__meta,__extmap,__hash){
this.react_component = react_component;
this.options = options;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.ReactCard.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4358__auto__,k__4359__auto__){
var self__ = this;
var this__4358__auto____$1 = this;
return cljs.core._lookup.call(null,this__4358__auto____$1,k__4359__auto__,null);
});

devcards.core.ReactCard.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4360__auto__,k25578,else__4361__auto__){
var self__ = this;
var this__4360__auto____$1 = this;
var G__25580 = (((k25578 instanceof cljs.core.Keyword))?k25578.fqn:null);
switch (G__25580) {
case "options":
return self__.options;

break;
case "react-component":
return self__.react_component;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25578,else__4361__auto__);

}
});

devcards.core.ReactCard.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4372__auto__,writer__4373__auto__,opts__4374__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
var pr_pair__4375__auto__ = ((function (this__4372__auto____$1){
return (function (keyval__4376__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4373__auto__,cljs.core.pr_writer,""," ","",opts__4374__auto__,keyval__4376__auto__);
});})(this__4372__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4373__auto__,pr_pair__4375__auto__,"#devcards.core.ReactCard{",", ","}",opts__4374__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"react-component","react-component",-1880013598),self__.react_component],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null))], null),self__.__extmap));
});

devcards.core.ReactCard.prototype.devcards$system$IConfig$ = true;

devcards.core.ReactCard.prototype.devcards$system$IConfig$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unmount-on-reload","unmount-on-reload",-844964662),false], null),self__.options);
});

devcards.core.ReactCard.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4356__auto__){
var self__ = this;
var this__4356__auto____$1 = this;
return self__.__meta;
});

devcards.core.ReactCard.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4352__auto__){
var self__ = this;
var this__4352__auto____$1 = this;
return (new devcards.core.ReactCard(self__.react_component,self__.options,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.ReactCard.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4362__auto__){
var self__ = this;
var this__4362__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.ReactCard.prototype.devcards$system$IUnMount$ = true;

devcards.core.ReactCard.prototype.devcards$system$IUnMount$unmount$arity$2 = (function (_,p__25581){
var self__ = this;
var map__25582 = p__25581;
var map__25582__$1 = ((cljs.core.seq_QMARK_.call(null,map__25582))?cljs.core.apply.call(null,cljs.core.hash_map,map__25582):map__25582);
var node = cljs.core.get.call(null,map__25582__$1,new cljs.core.Keyword(null,"node","node",581201198));
var ___$1 = this;
return devcards.core.unmount_react.call(null,node);
});

devcards.core.ReactCard.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4353__auto__){
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

devcards.core.ReactCard.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4354__auto__,other__4355__auto__){
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

devcards.core.ReactCard.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4367__auto__,k__4368__auto__){
var self__ = this;
var this__4367__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"react-component","react-component",-1880013598),null,new cljs.core.Keyword(null,"options","options",99638489),null], null), null),k__4368__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4367__auto____$1),self__.__meta),k__4368__auto__);
} else {
return (new devcards.core.ReactCard(self__.react_component,self__.options,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4368__auto__)),null));
}
});

devcards.core.ReactCard.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4365__auto__,k__4366__auto__,G__25577){
var self__ = this;
var this__4365__auto____$1 = this;
var pred__25583 = cljs.core.keyword_identical_QMARK_;
var expr__25584 = k__4366__auto__;
if(cljs.core.truth_(pred__25583.call(null,new cljs.core.Keyword(null,"react-component","react-component",-1880013598),expr__25584))){
return (new devcards.core.ReactCard(G__25577,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25583.call(null,new cljs.core.Keyword(null,"options","options",99638489),expr__25584))){
return (new devcards.core.ReactCard(self__.react_component,G__25577,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.ReactCard(self__.react_component,self__.options,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4366__auto__,G__25577),null));
}
}
});

devcards.core.ReactCard.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"react-component","react-component",-1880013598),self__.react_component],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null))], null),self__.__extmap));
});

devcards.core.ReactCard.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4357__auto__,G__25577){
var self__ = this;
var this__4357__auto____$1 = this;
return (new devcards.core.ReactCard(self__.react_component,self__.options,G__25577,self__.__extmap,self__.__hash));
});

devcards.core.ReactCard.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4363__auto__,entry__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4364__auto__)){
return cljs.core._assoc.call(null,this__4363__auto____$1,cljs.core._nth.call(null,entry__4364__auto__,(0)),cljs.core._nth.call(null,entry__4364__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4363__auto____$1,entry__4364__auto__);
}
});

devcards.core.ReactCard.prototype.devcards$system$IMount$ = true;

devcards.core.ReactCard.prototype.devcards$system$IMount$mount$arity$2 = (function (_,p__25586){
var self__ = this;
var map__25587 = p__25586;
var map__25587__$1 = ((cljs.core.seq_QMARK_.call(null,map__25587))?cljs.core.apply.call(null,cljs.core.hash_map,map__25587):map__25587);
var node = cljs.core.get.call(null,map__25587__$1,new cljs.core.Keyword(null,"node","node",581201198));
var ___$1 = this;
return devcards.core.render_to.call(null,self__.react_component,node);
});

devcards.core.ReactCard.cljs$lang$type = true;

devcards.core.ReactCard.cljs$lang$ctorPrSeq = (function (this__4392__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/ReactCard");
});

devcards.core.ReactCard.cljs$lang$ctorPrWriter = (function (this__4392__auto__,writer__4393__auto__){
return cljs.core._write.call(null,writer__4393__auto__,"devcards.core/ReactCard");
});

devcards.core.__GT_ReactCard = (function __GT_ReactCard(react_component,options){
return (new devcards.core.ReactCard(react_component,options,null,null,null));
});

devcards.core.map__GT_ReactCard = (function map__GT_ReactCard(G__25579){
return (new devcards.core.ReactCard(new cljs.core.Keyword(null,"react-component","react-component",-1880013598).cljs$core$IFn$_invoke$arity$1(G__25579),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__25579),null,cljs.core.dissoc.call(null,G__25579,new cljs.core.Keyword(null,"react-component","react-component",-1880013598),new cljs.core.Keyword(null,"options","options",99638489)),null));
});

/**
* Simple react card. It only renders the react component passed in.
*/
devcards.core.react_card = (function() {
var react_card = null;
var react_card__1 = (function (react_component){
return react_card.call(null,react_component,cljs.core.PersistentArrayMap.EMPTY);
});
var react_card__2 = (function (react_component,options){
return (new devcards.core.ReactCard(react_component,options,null,null,null));
});
react_card = function(react_component,options){
switch(arguments.length){
case 1:
return react_card__1.call(this,react_component);
case 2:
return react_card__2.call(this,react_component,options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
react_card.cljs$core$IFn$_invoke$arity$1 = react_card__1;
react_card.cljs$core$IFn$_invoke$arity$2 = react_card__2;
return react_card;
})()
;
/**
* Card that renders sablono.
*/
devcards.core.sab_card = (function() {
var sab_card = null;
var sab_card__1 = (function (sab_template){
return devcards.core.react_card.call(null,sablono.interpreter.interpret.call(null,sab_template),cljs.core.PersistentArrayMap.EMPTY);
});
var sab_card__2 = (function (sab_template,options){
return devcards.core.react_card.call(null,sablono.interpreter.interpret.call(null,sab_template),options);
});
sab_card = function(sab_template,options){
switch(arguments.length){
case 1:
return sab_card__1.call(this,sab_template);
case 2:
return sab_card__2.call(this,sab_template,options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sab_card.cljs$core$IFn$_invoke$arity$1 = sab_card__1;
sab_card.cljs$core$IFn$_invoke$arity$2 = sab_card__2;
return sab_card;
})()
;
devcards.core.box_data_atom = (function box_data_atom(initial_state){
if(cljs.core.truth_((function (){var and__3743__auto__ = initial_state;
if(cljs.core.truth_(and__3743__auto__)){
var G__25590 = initial_state;
if(G__25590){
var bit__4436__auto__ = (G__25590.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__4436__auto__) || (G__25590.cljs$core$IAtom$)){
return true;
} else {
if((!G__25590.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__25590);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__25590);
}
} else {
return and__3743__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__devcards-atom-box","__devcards-atom-box",-747066353),initial_state], null);
} else {
return initial_state;
}
});
devcards.core.unbox_data_atom = (function unbox_data_atom(data_atom){
var or__3755__auto__ = (function (){var and__3743__auto__ = cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,data_atom));
if(and__3743__auto__){
return new cljs.core.Keyword(null,"__devcards-atom-box","__devcards-atom-box",-747066353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data_atom));
} else {
return and__3743__auto__;
}
})();
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return data_atom;
}
});
devcards.core.edn_card = (function edn_card(clj_data){

if((function (){var G__25596 = clj_data;
if(G__25596){
var bit__4436__auto__ = (G__25596.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__4436__auto__) || (G__25596.cljs$core$IAtom$)){
return true;
} else {
if((!G__25596.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__25596);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__25596);
}
})()){
return devcards.core.om_root_card.call(null,(function (p1__25591_SHARP_){
if(typeof devcards.core.t25597 !== 'undefined'){
} else {

/**
* @constructor
*/
devcards.core.t25597 = (function (p1__25591_SHARP_,clj_data,edn_card,meta25598){
this.p1__25591_SHARP_ = p1__25591_SHARP_;
this.clj_data = clj_data;
this.edn_card = edn_card;
this.meta25598 = meta25598;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
devcards.core.t25597.prototype.om$core$IRender$ = true;

devcards.core.t25597.prototype.om$core$IRender$render$arity$1 = (function (this__11925__auto__){
var self__ = this;
var this__11925__auto____$1 = this;
return devcards.core.edn__GT_html.call(null,self__.p1__25591_SHARP_);
});

devcards.core.t25597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25599){
var self__ = this;
var _25599__$1 = this;
return self__.meta25598;
});

devcards.core.t25597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25599,meta25598__$1){
var self__ = this;
var _25599__$1 = this;
return (new devcards.core.t25597(self__.p1__25591_SHARP_,self__.clj_data,self__.edn_card,meta25598__$1));
});

devcards.core.t25597.cljs$lang$type = true;

devcards.core.t25597.cljs$lang$ctorStr = "devcards.core/t25597";

devcards.core.t25597.cljs$lang$ctorPrWriter = (function (this__4342__auto__,writer__4343__auto__,opt__4344__auto__){
return cljs.core._write.call(null,writer__4343__auto__,"devcards.core/t25597");
});

devcards.core.__GT_t25597 = (function __GT_t25597(p1__25591_SHARP___$1,clj_data__$1,edn_card__$1,meta25598){
return (new devcards.core.t25597(p1__25591_SHARP___$1,clj_data__$1,edn_card__$1,meta25598));
});

}

return (new devcards.core.t25597(p1__25591_SHARP_,clj_data,edn_card,null));
}),clj_data);
} else {
return devcards.core.react_card.call(null,devcards.core.edn__GT_html.call(null,clj_data));
}
});

/**
* @constructor
* @param {*} react_component_fn
* @param {*} uniq_key
* @param {*} options
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
devcards.core.ReactRunnerCard = (function (react_component_fn,uniq_key,options,__meta,__extmap,__hash){
this.react_component_fn = react_component_fn;
this.uniq_key = uniq_key;
this.options = options;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.ReactRunnerCard.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4358__auto__,k__4359__auto__){
var self__ = this;
var this__4358__auto____$1 = this;
return cljs.core._lookup.call(null,this__4358__auto____$1,k__4359__auto__,null);
});

devcards.core.ReactRunnerCard.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4360__auto__,k25601,else__4361__auto__){
var self__ = this;
var this__4360__auto____$1 = this;
var G__25603 = (((k25601 instanceof cljs.core.Keyword))?k25601.fqn:null);
switch (G__25603) {
case "options":
return self__.options;

break;
case "uniq-key":
return self__.uniq_key;

break;
case "react-component-fn":
return self__.react_component_fn;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25601,else__4361__auto__);

}
});

devcards.core.ReactRunnerCard.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4372__auto__,writer__4373__auto__,opts__4374__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
var pr_pair__4375__auto__ = ((function (this__4372__auto____$1){
return (function (keyval__4376__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4373__auto__,cljs.core.pr_writer,""," ","",opts__4374__auto__,keyval__4376__auto__);
});})(this__4372__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4373__auto__,pr_pair__4375__auto__,"#devcards.core.ReactRunnerCard{",", ","}",opts__4374__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"react-component-fn","react-component-fn",1449530448),self__.react_component_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"uniq-key","uniq-key",764441087),self__.uniq_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null))], null),self__.__extmap));
});

devcards.core.ReactRunnerCard.prototype.devcards$system$IConfig$ = true;

devcards.core.ReactRunnerCard.prototype.devcards$system$IConfig$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unmount-on-reload","unmount-on-reload",-844964662),false], null),self__.options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),devcards.core.box_data_atom.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806).cljs$core$IFn$_invoke$arity$1(self__.options))], null));
});

devcards.core.ReactRunnerCard.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4356__auto__){
var self__ = this;
var this__4356__auto____$1 = this;
return self__.__meta;
});

devcards.core.ReactRunnerCard.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4352__auto__){
var self__ = this;
var this__4352__auto____$1 = this;
return (new devcards.core.ReactRunnerCard(self__.react_component_fn,self__.uniq_key,self__.options,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.ReactRunnerCard.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4362__auto__){
var self__ = this;
var this__4362__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.ReactRunnerCard.prototype.devcards$system$IUnMount$ = true;

devcards.core.ReactRunnerCard.prototype.devcards$system$IUnMount$unmount$arity$2 = (function (_,p__25604){
var self__ = this;
var map__25605 = p__25604;
var map__25605__$1 = ((cljs.core.seq_QMARK_.call(null,map__25605))?cljs.core.apply.call(null,cljs.core.hash_map,map__25605):map__25605);
var data_atom = cljs.core.get.call(null,map__25605__$1,new cljs.core.Keyword(null,"data-atom","data-atom",1035568414));
var node = cljs.core.get.call(null,map__25605__$1,new cljs.core.Keyword(null,"node","node",581201198));
var ___$1 = this;
cljs.core.remove_watch.call(null,devcards.core.unbox_data_atom.call(null,data_atom),self__.uniq_key);

return devcards.core.unmount_react.call(null,node);
});

devcards.core.ReactRunnerCard.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4353__auto__){
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

devcards.core.ReactRunnerCard.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4354__auto__,other__4355__auto__){
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

devcards.core.ReactRunnerCard.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4367__auto__,k__4368__auto__){
var self__ = this;
var this__4367__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"react-component-fn","react-component-fn",1449530448),null,new cljs.core.Keyword(null,"options","options",99638489),null,new cljs.core.Keyword(null,"uniq-key","uniq-key",764441087),null], null), null),k__4368__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4367__auto____$1),self__.__meta),k__4368__auto__);
} else {
return (new devcards.core.ReactRunnerCard(self__.react_component_fn,self__.uniq_key,self__.options,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4368__auto__)),null));
}
});

devcards.core.ReactRunnerCard.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4365__auto__,k__4366__auto__,G__25600){
var self__ = this;
var this__4365__auto____$1 = this;
var pred__25606 = cljs.core.keyword_identical_QMARK_;
var expr__25607 = k__4366__auto__;
if(cljs.core.truth_(pred__25606.call(null,new cljs.core.Keyword(null,"react-component-fn","react-component-fn",1449530448),expr__25607))){
return (new devcards.core.ReactRunnerCard(G__25600,self__.uniq_key,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25606.call(null,new cljs.core.Keyword(null,"uniq-key","uniq-key",764441087),expr__25607))){
return (new devcards.core.ReactRunnerCard(self__.react_component_fn,G__25600,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25606.call(null,new cljs.core.Keyword(null,"options","options",99638489),expr__25607))){
return (new devcards.core.ReactRunnerCard(self__.react_component_fn,self__.uniq_key,G__25600,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.ReactRunnerCard(self__.react_component_fn,self__.uniq_key,self__.options,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4366__auto__,G__25600),null));
}
}
}
});

devcards.core.ReactRunnerCard.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"react-component-fn","react-component-fn",1449530448),self__.react_component_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"uniq-key","uniq-key",764441087),self__.uniq_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null))], null),self__.__extmap));
});

devcards.core.ReactRunnerCard.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4357__auto__,G__25600){
var self__ = this;
var this__4357__auto____$1 = this;
return (new devcards.core.ReactRunnerCard(self__.react_component_fn,self__.uniq_key,self__.options,G__25600,self__.__extmap,self__.__hash));
});

devcards.core.ReactRunnerCard.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4363__auto__,entry__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4364__auto__)){
return cljs.core._assoc.call(null,this__4363__auto____$1,cljs.core._nth.call(null,entry__4364__auto__,(0)),cljs.core._nth.call(null,entry__4364__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4363__auto____$1,entry__4364__auto__);
}
});

devcards.core.ReactRunnerCard.prototype.devcards$system$IMount$ = true;

devcards.core.ReactRunnerCard.prototype.devcards$system$IMount$mount$arity$2 = (function (_,p__25609){
var self__ = this;
var map__25610 = p__25609;
var map__25610__$1 = ((cljs.core.seq_QMARK_.call(null,map__25610))?cljs.core.apply.call(null,cljs.core.hash_map,map__25610):map__25610);
var data_atom = cljs.core.get.call(null,map__25610__$1,new cljs.core.Keyword(null,"data-atom","data-atom",1035568414));
var node = cljs.core.get.call(null,map__25610__$1,new cljs.core.Keyword(null,"node","node",581201198));
var ___$1 = this;
var da = devcards.core.unbox_data_atom.call(null,data_atom);
cljs.core.add_watch.call(null,da,self__.uniq_key,((function (da,___$1,map__25610,map__25610__$1,data_atom,node){
return (function (___$2,___$3,___$4,___$5){
return devcards.core.render_to.call(null,self__.react_component_fn.call(null,da),node);
});})(da,___$1,map__25610,map__25610__$1,data_atom,node))
);

return cljs.core.reset_BANG_.call(null,da,cljs.core.deref.call(null,da));
});

devcards.core.ReactRunnerCard.cljs$lang$type = true;

devcards.core.ReactRunnerCard.cljs$lang$ctorPrSeq = (function (this__4392__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/ReactRunnerCard");
});

devcards.core.ReactRunnerCard.cljs$lang$ctorPrWriter = (function (this__4392__auto__,writer__4393__auto__){
return cljs.core._write.call(null,writer__4393__auto__,"devcards.core/ReactRunnerCard");
});

devcards.core.__GT_ReactRunnerCard = (function __GT_ReactRunnerCard(react_component_fn,uniq_key,options){
return (new devcards.core.ReactRunnerCard(react_component_fn,uniq_key,options,null,null,null));
});

devcards.core.map__GT_ReactRunnerCard = (function map__GT_ReactRunnerCard(G__25602){
return (new devcards.core.ReactRunnerCard(new cljs.core.Keyword(null,"react-component-fn","react-component-fn",1449530448).cljs$core$IFn$_invoke$arity$1(G__25602),new cljs.core.Keyword(null,"uniq-key","uniq-key",764441087).cljs$core$IFn$_invoke$arity$1(G__25602),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__25602),null,cljs.core.dissoc.call(null,G__25602,new cljs.core.Keyword(null,"react-component-fn","react-component-fn",1449530448),new cljs.core.Keyword(null,"uniq-key","uniq-key",764441087),new cljs.core.Keyword(null,"options","options",99638489)),null));
});

/**
* This card takes a function which takes a data atom and returns a
* react component. Any changes to the atom cause the component to
* rerender.
*/
devcards.core.react_runner_card = (function() {
var react_runner_card = null;
var react_runner_card__1 = (function (react_component_fn){
return react_runner_card.call(null,react_component_fn,cljs.core.PersistentArrayMap.EMPTY);
});
var react_runner_card__2 = (function (react_component_fn,options){
return (new devcards.core.ReactRunnerCard(react_component_fn,cljs.core.keyword.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"react-runner","react-runner",-1796199928,null))),options,null,null,null));
});
react_runner_card = function(react_component_fn,options){
switch(arguments.length){
case 1:
return react_runner_card__1.call(this,react_component_fn);
case 2:
return react_runner_card__2.call(this,react_component_fn,options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
react_runner_card.cljs$core$IFn$_invoke$arity$1 = react_runner_card__1;
react_runner_card.cljs$core$IFn$_invoke$arity$2 = react_runner_card__2;
return react_runner_card;
})()
;
devcards.core.render_test = (function (){var method_table__4652__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4653__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4656__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","render-test"),((function (method_table__4652__auto__,prefer_table__4653__auto__,method_cache__4654__auto__,cached_hierarchy__4655__auto__,hierarchy__4656__auto__){
return (function (x){
if(cljs.core.map_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(x);
} else {
if(typeof x === 'string'){
return new cljs.core.Keyword(null,"string","string",-1989541586);
} else {
return null;
}
}
});})(method_table__4652__auto__,prefer_table__4653__auto__,method_cache__4654__auto__,cached_hierarchy__4655__auto__,hierarchy__4656__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4656__auto__,method_table__4652__auto__,prefer_table__4653__auto__,method_cache__4654__auto__,cached_hierarchy__4655__auto__));
})();
devcards.core.test_wrapper = (function test_wrapper(test,body){
return React.DOM.li({"className": [cljs.core.str("list-group-item list-group-item-"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"passed","passed",-28165278).cljs$core$IFn$_invoke$arity$1(test))?"success":"danger"))].join('')},React.DOM.span({"className": [cljs.core.str("devcards-test-icon glyphicon glyphicon-"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"passed","passed",-28165278).cljs$core$IFn$_invoke$arity$1(test))?"ok":"remove"))].join('')}),body);
});
cljs.core._add_method.call(null,devcards.core.render_test,new cljs.core.Keyword(null,"string","string",-1989541586),(function (s){
return React.DOM.li({"className": "list-group-item"},devcards.core.react_raw.call(null,devcards.core.less_sensitive_markdown.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null))));
}));
devcards.core.error_message = (function error_message(test,val1,val_join_msg,val2){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"passed","passed",-28165278).cljs$core$IFn$_invoke$arity$1(test))){
return React.DOM.span({"className": "explain"},"Expected ",React.DOM.span({"className": "code"},val1),val_join_msg,React.DOM.span({"className": "code"},val2));
} else {
return React.DOM.span({},"");
}
});
cljs.core._add_method.call(null,devcards.core.render_test,new cljs.core.Keyword(null,"is","is",369128998),(function (test){
return devcards.core.test_wrapper.call(null,test,React.DOM.span({"className": "devcards-test-body"},React.DOM.span({"className": "operator"},"is"),React.DOM.span({"className": "result-area"},React.DOM.span({"className": "exp"},cljs.core.prn_str.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(test))),devcards.core.error_message.call(null,test,cljs.core.prn_str.call(null,new cljs.core.Keyword(null,"passed","passed",-28165278).cljs$core$IFn$_invoke$arity$1(test))," to be ","true"))));
}));
devcards.core.operator_relation_test = (function operator_relation_test(test,op,relation_phrase){
return devcards.core.test_wrapper.call(null,test,React.DOM.span({"className": "devcards-test-body"},React.DOM.span({"className": "operator"},op),React.DOM.span({"className": "result-area"},React.DOM.span({"className": "exp"},cljs.core.prn_str.call(null,new cljs.core.Keyword(null,"exp1","exp1",-169853525).cljs$core$IFn$_invoke$arity$1(test))),React.DOM.span({"className": "exp"},cljs.core.prn_str.call(null,new cljs.core.Keyword(null,"exp2","exp2",-1037021901).cljs$core$IFn$_invoke$arity$1(test))),devcards.core.error_message.call(null,test,cljs.core.prn_str.call(null,new cljs.core.Keyword(null,"val1","val1",-126859574).cljs$core$IFn$_invoke$arity$1(test)),relation_phrase,cljs.core.prn_str.call(null,new cljs.core.Keyword(null,"val2","val2",2138372881).cljs$core$IFn$_invoke$arity$1(test))))));
});
cljs.core._add_method.call(null,devcards.core.render_test,new cljs.core.Keyword(null,"are=","are=",-496029178),(function (test){
return devcards.core.operator_relation_test.call(null,test,"="," to equal ");
}));
cljs.core._add_method.call(null,devcards.core.render_test,new cljs.core.Keyword(null,"are-not=","are-not=",371167483),(function (test){
return devcards.core.operator_relation_test.call(null,test,"!="," not to equal ");
}));
/**
* @param {...*} var_args
*/
devcards.core.test_card = (function() { 
var test_card__delegate = function (assertions){
return devcards.core.react_card.call(null,React.DOM.ul({"className": "list-group devcards-test-group"},cljs.core.to_array.call(null,cljs.core.mapv.call(null,(function (t){
return devcards.core.render_test.call(null,t);
}),assertions))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),false], null));
};
var test_card = function (var_args){
var assertions = null;
if (arguments.length > 0) {
var G__25612__i = 0, G__25612__a = new Array(arguments.length -  0);
while (G__25612__i < G__25612__a.length) {G__25612__a[G__25612__i] = arguments[G__25612__i + 0]; ++G__25612__i;}
  assertions = new cljs.core.IndexedSeq(G__25612__a,0);
} 
return test_card__delegate.call(this,assertions);};
test_card.cljs$lang$maxFixedArity = 0;
test_card.cljs$lang$applyTo = (function (arglist__25613){
var assertions = cljs.core.seq(arglist__25613);
return test_card__delegate(assertions);
});
test_card.cljs$core$IFn$_invoke$arity$variadic = test_card__delegate;
return test_card;
})()
;

/**
* @constructor
* @param {*} f
* @param {*} arg_seqs
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
devcards.core.SliderCard = (function (f,arg_seqs,__meta,__extmap,__hash){
this.f = f;
this.arg_seqs = arg_seqs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.SliderCard.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4358__auto__,k__4359__auto__){
var self__ = this;
var this__4358__auto____$1 = this;
return cljs.core._lookup.call(null,this__4358__auto____$1,k__4359__auto__,null);
});

devcards.core.SliderCard.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4360__auto__,k25615,else__4361__auto__){
var self__ = this;
var this__4360__auto____$1 = this;
var G__25617 = (((k25615 instanceof cljs.core.Keyword))?k25615.fqn:null);
switch (G__25617) {
case "arg-seqs":
return self__.arg_seqs;

break;
case "f":
return self__.f;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25615,else__4361__auto__);

}
});

devcards.core.SliderCard.prototype.frontier$core$ITransform$ = true;

devcards.core.SliderCard.prototype.frontier$core$ITransform$_transform$arity$3 = (function (o,p__25618,state){
var self__ = this;
var vec__25619 = p__25618;
var msg_name = cljs.core.nth.call(null,vec__25619,(0),null);
var data = cljs.core.nth.call(null,vec__25619,(1),null);
var o__$1 = this;
var pred__25620 = cljs.core._EQ_;
var expr__25621 = msg_name;
if(cljs.core.truth_(pred__25620.call(null,new cljs.core.Keyword(null,"set-index-for-key","set-index-for-key",-1145392496),expr__25621))){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyed-vals","keyed-vals",1992601625),new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(data)], null),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(data));
} else {
return state;
}
});

devcards.core.SliderCard.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4372__auto__,writer__4373__auto__,opts__4374__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
var pr_pair__4375__auto__ = ((function (this__4372__auto____$1){
return (function (keyval__4376__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4373__auto__,cljs.core.pr_writer,""," ","",opts__4374__auto__,keyval__4376__auto__);
});})(this__4372__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4373__auto__,pr_pair__4375__auto__,"#devcards.core.SliderCard{",", ","}",opts__4374__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),self__.f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg-seqs","arg-seqs",-216934907),self__.arg_seqs],null))], null),self__.__extmap));
});

devcards.core.SliderCard.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4356__auto__){
var self__ = this;
var this__4356__auto____$1 = this;
return self__.__meta;
});

devcards.core.SliderCard.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4352__auto__){
var self__ = this;
var this__4352__auto____$1 = this;
return (new devcards.core.SliderCard(self__.f,self__.arg_seqs,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.SliderCard.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4362__auto__){
var self__ = this;
var this__4362__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.SliderCard.prototype.frontier$core$IDerive$ = true;

devcards.core.SliderCard.prototype.frontier$core$IDerive$_derive$arity$2 = (function (o,state){
var self__ = this;
var o__$1 = this;
var slider_inputs = cljs.core.map.call(null,((function (o__$1){
return (function (p__25623){
var vec__25624 = p__25623;
var k = cljs.core.nth.call(null,vec__25624,(0),null);
var seq_STAR_ = cljs.core.nth.call(null,vec__25624,(1),null);
var i = k.call(null,new cljs.core.Keyword(null,"keyed-vals","keyed-vals",1992601625).cljs$core$IFn$_invoke$arity$1(state));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"k","k",-2146297393),k,new cljs.core.Keyword(null,"index","index",-1531685915),i,new cljs.core.Keyword(null,"v","v",21465059),cljs.core.nth.call(null,seq_STAR_,i),new cljs.core.Keyword(null,"max","max",61366548),(cljs.core.count.call(null,seq_STAR_) - (1))], null);
});})(o__$1))
,self__.arg_seqs);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"slider-inputs","slider-inputs",-2136707139),slider_inputs,new cljs.core.Keyword(null,"result","result",1415092211),self__.f.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"v","v",21465059)),slider_inputs))));
});

devcards.core.SliderCard.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4353__auto__){
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

devcards.core.SliderCard.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4354__auto__,other__4355__auto__){
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

devcards.core.SliderCard.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4367__auto__,k__4368__auto__){
var self__ = this;
var this__4367__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg-seqs","arg-seqs",-216934907),null,new cljs.core.Keyword(null,"f","f",-1597136552),null], null), null),k__4368__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4367__auto____$1),self__.__meta),k__4368__auto__);
} else {
return (new devcards.core.SliderCard(self__.f,self__.arg_seqs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4368__auto__)),null));
}
});

devcards.core.SliderCard.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4365__auto__,k__4366__auto__,G__25614){
var self__ = this;
var this__4365__auto____$1 = this;
var pred__25625 = cljs.core.keyword_identical_QMARK_;
var expr__25626 = k__4366__auto__;
if(cljs.core.truth_(pred__25625.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),expr__25626))){
return (new devcards.core.SliderCard(G__25614,self__.arg_seqs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25625.call(null,new cljs.core.Keyword(null,"arg-seqs","arg-seqs",-216934907),expr__25626))){
return (new devcards.core.SliderCard(self__.f,G__25614,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.SliderCard(self__.f,self__.arg_seqs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4366__auto__,G__25614),null));
}
}
});

devcards.core.SliderCard.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),self__.f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg-seqs","arg-seqs",-216934907),self__.arg_seqs],null))], null),self__.__extmap));
});

devcards.core.SliderCard.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4357__auto__,G__25614){
var self__ = this;
var this__4357__auto____$1 = this;
return (new devcards.core.SliderCard(self__.f,self__.arg_seqs,G__25614,self__.__extmap,self__.__hash));
});

devcards.core.SliderCard.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4363__auto__,entry__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4364__auto__)){
return cljs.core._assoc.call(null,this__4363__auto____$1,cljs.core._nth.call(null,entry__4364__auto__,(0)),cljs.core._nth.call(null,entry__4364__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4363__auto____$1,entry__4364__auto__);
}
});

devcards.core.SliderCard.cljs$lang$type = true;

devcards.core.SliderCard.cljs$lang$ctorPrSeq = (function (this__4392__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/SliderCard");
});

devcards.core.SliderCard.cljs$lang$ctorPrWriter = (function (this__4392__auto__,writer__4393__auto__){
return cljs.core._write.call(null,writer__4393__auto__,"devcards.core/SliderCard");
});

devcards.core.__GT_SliderCard = (function __GT_SliderCard(f,arg_seqs){
return (new devcards.core.SliderCard(f,arg_seqs,null,null,null));
});

devcards.core.map__GT_SliderCard = (function map__GT_SliderCard(G__25616){
return (new devcards.core.SliderCard(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__25616),new cljs.core.Keyword(null,"arg-seqs","arg-seqs",-216934907).cljs$core$IFn$_invoke$arity$1(G__25616),null,cljs.core.dissoc.call(null,G__25616,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"arg-seqs","arg-seqs",-216934907)),null));
});

devcards.core.slider_input_control = (function slider_input_control(p__25629,event_chan){
var map__25631 = p__25629;
var map__25631__$1 = ((cljs.core.seq_QMARK_.call(null,map__25631))?cljs.core.apply.call(null,cljs.core.hash_map,map__25631):map__25631);
var ic = map__25631__$1;
var seq_STAR_ = cljs.core.get.call(null,map__25631__$1,new cljs.core.Keyword(null,"seq*","seq*",-1771291932));
var index = cljs.core.get.call(null,map__25631__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var v = cljs.core.get.call(null,map__25631__$1,new cljs.core.Keyword(null,"v","v",21465059));
var k = cljs.core.get.call(null,map__25631__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
return React.DOM.div({"className": "slider-control"},React.DOM.div({},React.DOM.strong({},[cljs.core.str(k)].join(''))," ",cljs.core.prn_str.call(null,v)),om.dom.input.call(null,{"max": new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(ic), "min": (0), "defaultValue": index, "onChange": ((function (map__25631,map__25631__$1,ic,seq_STAR_,index,v,k){
return (function (e){
return cljs.core.async.put_BANG_.call(null,event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-index-for-key","set-index-for-key",-1145392496),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"k","k",-2146297393),k,new cljs.core.Keyword(null,"index","index",-1531685915),window.parseInt(e.target.value)], null)], null));
});})(map__25631,map__25631__$1,ic,seq_STAR_,index,v,k))
, "type": "range"}));
});
devcards.core.make_slider_renderer = (function make_slider_renderer(value_render_func){
return (function (p__25634){
var map__25635 = p__25634;
var map__25635__$1 = ((cljs.core.seq_QMARK_.call(null,map__25635))?cljs.core.apply.call(null,cljs.core.hash_map,map__25635):map__25635);
var rstate = map__25635__$1;
var event_chan = cljs.core.get.call(null,map__25635__$1,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912));
var state = cljs.core.get.call(null,map__25635__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return React.DOM.div({"className": "devcard-padding"},React.DOM.div({"className": "col-md-4"},React.DOM.h4({},"args"),cljs.core.to_array.call(null,cljs.core.mapv.call(null,((function (map__25635,map__25635__$1,rstate,event_chan,state){
return (function (slider_in){
return devcards.core.slider_input_control.call(null,slider_in,event_chan);
});})(map__25635,map__25635__$1,rstate,event_chan,state))
,new cljs.core.Keyword(null,"slider-inputs","slider-inputs",-2136707139).cljs$core$IFn$_invoke$arity$1(state)))),React.DOM.div({"className": "col-md-8"},React.DOM.h4({},"result"),React.DOM.div({},sablono.interpreter.interpret.call(null,value_render_func.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(state))))),React.DOM.div({"className": "clearfix"}));
});
});
/**
* @param {...*} var_args
*/
devcards.core.slider_card = (function() { 
var slider_card__delegate = function (f,arg_seqs,p__25636){
var map__25638 = p__25636;
var map__25638__$1 = ((cljs.core.seq_QMARK_.call(null,map__25638))?cljs.core.apply.call(null,cljs.core.hash_map,map__25638):map__25638);
var value_render_func = cljs.core.get.call(null,map__25638__$1,new cljs.core.Keyword(null,"value-render-func","value-render-func",170207486));
return devcards.core.frontier_system_card.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyed-vals","keyed-vals",1992601625),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.call(null,cljs.core.vector,cljs.core.keys.call(null,arg_seqs),cljs.core.repeat.call(null,(0))))], null),frontier.core.make_renderable.call(null,frontier.core.compose.call(null,(new devcards.core.SliderCard(f,arg_seqs,null,null,null))),devcards.core.make_slider_renderer.call(null,(function (){var or__3755__auto__ = value_render_func;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return devcards.core.edn__GT_html;
}
})())),cljs.core.PersistentVector.EMPTY);
};
var slider_card = function (f,arg_seqs,var_args){
var p__25636 = null;
if (arguments.length > 2) {
var G__25639__i = 0, G__25639__a = new Array(arguments.length -  2);
while (G__25639__i < G__25639__a.length) {G__25639__a[G__25639__i] = arguments[G__25639__i + 2]; ++G__25639__i;}
  p__25636 = new cljs.core.IndexedSeq(G__25639__a,0);
} 
return slider_card__delegate.call(this,f,arg_seqs,p__25636);};
slider_card.cljs$lang$maxFixedArity = 2;
slider_card.cljs$lang$applyTo = (function (arglist__25640){
var f = cljs.core.first(arglist__25640);
arglist__25640 = cljs.core.next(arglist__25640);
var arg_seqs = cljs.core.first(arglist__25640);
var p__25636 = cljs.core.rest(arglist__25640);
return slider_card__delegate(f,arg_seqs,p__25636);
});
slider_card.cljs$core$IFn$_invoke$arity$variadic = slider_card__delegate;
return slider_card;
})()
;
devcards.core.heckle_values = (function heckle_values(generator){
return cljs.core.mapv.call(null,(function (args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null);
}),generator.call(null));
});
devcards.core.heckle_error_QMARK_ = (function heckle_error_QMARK_(res_val){
return cljs.core.get.call(null,cljs.core.meta.call(null,res_val),new cljs.core.Keyword(null,"heckle-error","heckle-error",-1254211350));
});
devcards.core.heckle_derive = (function heckle_derive(data,f,test_func){
return cljs.core.map.call(null,(function (args){
var res = (function (){try{return cljs.core.apply.call(null,f,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(args));
}catch (e25642){var e = e25642;
return cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heckle-error","heckle-error",-1254211350),e], null));
}})();
var passed = (cljs.core.truth_(devcards.core.heckle_error_QMARK_.call(null,res))?true:test_func.call(null,args,res));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(devcards.core.heckle_error_QMARK_.call(null,res))?"danger ":((cljs.core.not.call(null,passed))?"warning ":(cljs.core.truth_(new cljs.core.Keyword(null,"only-errors","only-errors",-273214335).cljs$core$IFn$_invoke$arity$1(data))?"hidden":""))),new cljs.core.Keyword(null,"res-val","res-val",1415474247),res,new cljs.core.Keyword(null,"passed","passed",-28165278),passed,new cljs.core.Keyword(null,"error","error",-978969032),(cljs.core.truth_(devcards.core.heckle_error_QMARK_.call(null,res))?new cljs.core.Keyword(null,"heckle-error","heckle-error",-1254211350).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,res)):null)], null);
}),new cljs.core.Keyword(null,"gen-arg-list","gen-arg-list",-1391241517).cljs$core$IFn$_invoke$arity$1(data));
});
devcards.core.heckle_renderer = (function heckle_renderer(f,data,generator,value_render_func,test_func){
var derived_data = devcards.core.heckle_derive.call(null,cljs.core.deref.call(null,data),f,test_func);
return React.DOM.div({"className": "devcards-heckler-card"},React.DOM.div({"className": "devcards-pad-left"},React.DOM.a({"onClick": ((function (derived_data){
return (function (){
return cljs.core.swap_BANG_.call(null,data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-arg-list","gen-arg-list",-1391241517)], null),devcards.core.heckle_values.call(null,generator));
});})(derived_data))
, "className": "btn btn-danger navbar-btn", "type": "button"},"Re-heckle!"),React.DOM.a({"onClick": ((function (derived_data){
return (function (){
return cljs.core.swap_BANG_.call(null,data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"only-errors","only-errors",-273214335)], null),((function (derived_data){
return (function (x){
return cljs.core.not.call(null,x);
});})(derived_data))
);
});})(derived_data))
, "className": [cljs.core.str("btn btn-default navbar-btn devcards-margin-left"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"only-errors","only-errors",-273214335).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))?" active":""))].join('')},"Filter Errors"),React.DOM.span({"className": "devcards-pad-left"},(function (){var error_count = cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"error","error",-978969032),derived_data));
if((error_count > (0))){
return React.DOM.span({"className": "label label-danger"},error_count," Errors");
} else {
return React.DOM.span({});
}
})()),React.DOM.span({"style": {"paddingLeft": "14px"}},(function (){var failed_tests = cljs.core.filter.call(null,((function (derived_data){
return (function (x){
return cljs.core._EQ_.call(null,false,new cljs.core.Keyword(null,"passed","passed",-28165278).cljs$core$IFn$_invoke$arity$1(x));
});})(derived_data))
,derived_data);
if((cljs.core.count.call(null,failed_tests) > (0))){
return React.DOM.span({"className": "label label-warning"},cljs.core.count.call(null,failed_tests)," Tests Failed");
} else {
return React.DOM.span({});
}
})())),React.DOM.table({"className": "table table-striped table-hover"},React.DOM.tr({},React.DOM.th({},"Called"),React.DOM.th({},"Result")),cljs.core.to_array.call(null,cljs.core.mapv.call(null,((function (derived_data){
return (function (p__25646){
var map__25647 = p__25646;
var map__25647__$1 = ((cljs.core.seq_QMARK_.call(null,map__25647))?cljs.core.apply.call(null,cljs.core.hash_map,map__25647):map__25647);
var res = map__25647__$1;
var res_val = cljs.core.get.call(null,map__25647__$1,new cljs.core.Keyword(null,"res-val","res-val",1415474247));
var error = cljs.core.get.call(null,map__25647__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var args = cljs.core.get.call(null,map__25647__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return React.DOM.tr({"className": [cljs.core.str(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(res))].join('')},(function (){var args_SINGLEQUOTE_ = cljs.core.map.call(null,((function (map__25647,map__25647__$1,res,res_val,error,args,derived_data){
return (function (p1__25643_SHARP_){
return React.DOM.span({},cljs.core.prn_str.call(null,p1__25643_SHARP_));
});})(map__25647,map__25647__$1,res,res_val,error,args,derived_data))
,args);
return React.DOM.td({},cljs.core.to_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.span({"className": "text-muted"},"(f ")], null),cljs.core.interleave.call(null,cljs.core.butlast.call(null,args_SINGLEQUOTE_),cljs.core.repeatedly.call(null,((function (args_SINGLEQUOTE_,map__25647,map__25647__$1,res,res_val,error,args,derived_data){
return (function (){
return React.DOM.span({"className": "text-muted"},",");
});})(args_SINGLEQUOTE_,map__25647,map__25647__$1,res,res_val,error,args,derived_data))
)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,args_SINGLEQUOTE_),React.DOM.span({"className": "text-muted"},")")], null))));
})(),React.DOM.td({},(cljs.core.truth_(error)?error.message:sablono.interpreter.interpret.call(null,value_render_func.call(null,res_val)))));
});})(derived_data))
,derived_data))));
});
/**
* @param {...*} var_args
*/
devcards.core.heckler_card = (function() { 
var heckler_card__delegate = function (f,generator,p__25648){
var map__25650 = p__25648;
var map__25650__$1 = ((cljs.core.seq_QMARK_.call(null,map__25650))?cljs.core.apply.call(null,cljs.core.hash_map,map__25650):map__25650);
var value_render_func = cljs.core.get.call(null,map__25650__$1,new cljs.core.Keyword(null,"value-render-func","value-render-func",170207486));
var test_func = cljs.core.get.call(null,map__25650__$1,new cljs.core.Keyword(null,"test-func","test-func",-881526733));
var system_func = ((function (map__25650,map__25650__$1,value_render_func,test_func){
return (function (data){
if(((cljs.core.deref.call(null,data) == null)) || ((cljs.core.count.call(null,cljs.core.deref.call(null,data)) === (0)))){
cljs.core.swap_BANG_.call(null,data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-arg-list","gen-arg-list",-1391241517)], null),devcards.core.heckle_values.call(null,generator));
} else {
}

return sablono.interpreter.interpret.call(null,devcards.core.heckle_renderer.call(null,f,data,generator,(function (){var or__3755__auto__ = value_render_func;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return devcards.core.edn__GT_html;
}
})(),(function (){var or__3755__auto__ = test_func;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return ((function (or__3755__auto__,map__25650,map__25650__$1,value_render_func,test_func){
return (function (x){
return true;
});
;})(or__3755__auto__,map__25650,map__25650__$1,value_render_func,test_func))
}
})()));
});})(map__25650,map__25650__$1,value_render_func,test_func))
;
return devcards.core.react_runner_card.call(null,system_func,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),false], null));
};
var heckler_card = function (f,generator,var_args){
var p__25648 = null;
if (arguments.length > 2) {
var G__25651__i = 0, G__25651__a = new Array(arguments.length -  2);
while (G__25651__i < G__25651__a.length) {G__25651__a[G__25651__i] = arguments[G__25651__i + 2]; ++G__25651__i;}
  p__25648 = new cljs.core.IndexedSeq(G__25651__a,0);
} 
return heckler_card__delegate.call(this,f,generator,p__25648);};
heckler_card.cljs$lang$maxFixedArity = 2;
heckler_card.cljs$lang$applyTo = (function (arglist__25652){
var f = cljs.core.first(arglist__25652);
arglist__25652 = cljs.core.next(arglist__25652);
var generator = cljs.core.first(arglist__25652);
var p__25648 = cljs.core.rest(arglist__25652);
return heckler_card__delegate(f,generator,p__25648);
});
heckler_card.cljs$core$IFn$_invoke$arity$variadic = heckler_card__delegate;
return heckler_card;
})()
;
devcards.core.reduce_card__GT_tests = (function reduce_card__GT_tests(f,curr,value_expected_vec){
if(cljs.core.empty_QMARK_.call(null,value_expected_vec)){
return cljs.core.PersistentVector.EMPTY;
} else {
var val_STAR_ = cljs.core.first.call(null,value_expected_vec);
var res_val = f.call(null,curr,cljs.core.first.call(null,val_STAR_));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"are=","are=",-496029178),new cljs.core.Keyword(null,"exp1","exp1",-169853525),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,val_STAR_)),curr),new cljs.core.Symbol(null,"f","f",43394975,null)),new cljs.core.Keyword(null,"exp2","exp2",-1037021901),cljs.core.second.call(null,val_STAR_),new cljs.core.Keyword(null,"passed","passed",-28165278),cljs.core._EQ_.call(null,res_val,cljs.core.second.call(null,val_STAR_))], null),reduce_card__GT_tests.call(null,f,res_val,cljs.core.rest.call(null,value_expected_vec)));
}
});
devcards.core.reduce_card = (function reduce_card(f,init,value_expected_vec){
var red_tests = devcards.core.reduce_card__GT_tests.call(null,f,init,cljs.core.partition.call(null,(2),value_expected_vec));
return cljs.core.apply.call(null,devcards.core.test_card,red_tests);
});
/**
* @param {...*} var_args
*/
devcards.core.reduce_fr_card = (function() { 
var reduce_fr_card__delegate = function (fr_comp,initial_state,msg_expects_vec){
return devcards.core.reduce_card.call(null,(function (state,msg){
return frontier.core._transform.call(null,(new devcards.core.SliderCard((1),(1),null,null,null)),msg,state);
}),initial_state,msg_expects_vec);
};
var reduce_fr_card = function (fr_comp,initial_state,var_args){
var msg_expects_vec = null;
if (arguments.length > 2) {
var G__25653__i = 0, G__25653__a = new Array(arguments.length -  2);
while (G__25653__i < G__25653__a.length) {G__25653__a[G__25653__i] = arguments[G__25653__i + 2]; ++G__25653__i;}
  msg_expects_vec = new cljs.core.IndexedSeq(G__25653__a,0);
} 
return reduce_fr_card__delegate.call(this,fr_comp,initial_state,msg_expects_vec);};
reduce_fr_card.cljs$lang$maxFixedArity = 2;
reduce_fr_card.cljs$lang$applyTo = (function (arglist__25654){
var fr_comp = cljs.core.first(arglist__25654);
arglist__25654 = cljs.core.next(arglist__25654);
var initial_state = cljs.core.first(arglist__25654);
var msg_expects_vec = cljs.core.rest(arglist__25654);
return reduce_fr_card__delegate(fr_comp,initial_state,msg_expects_vec);
});
reduce_fr_card.cljs$core$IFn$_invoke$arity$variadic = reduce_fr_card__delegate;
return reduce_fr_card;
})()
;
/**
* @param {...*} var_args
*/
devcards.core.markdown_card = (function() { 
var markdown_card__delegate = function (mkdn_strs){
if(typeof devcards.core.t25660 !== 'undefined'){
} else {

/**
* @constructor
*/
devcards.core.t25660 = (function (mkdn_strs,markdown_card,meta25661){
this.mkdn_strs = mkdn_strs;
this.markdown_card = markdown_card;
this.meta25661 = meta25661;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
devcards.core.t25660.prototype.devcards$system$IConfig$ = true;

devcards.core.t25660.prototype.devcards$system$IConfig$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null);
});

devcards.core.t25660.prototype.devcards$system$IMount$ = true;

devcards.core.t25660.prototype.devcards$system$IMount$mount$arity$2 = (function (_,p__25663){
var self__ = this;
var map__25664 = p__25663;
var map__25664__$1 = ((cljs.core.seq_QMARK_.call(null,map__25664))?cljs.core.apply.call(null,cljs.core.hash_map,map__25664):map__25664);
var node = cljs.core.get.call(null,map__25664__$1,new cljs.core.Keyword(null,"node","node",581201198));
var ___$1 = this;
return node.innerHTML = devcards.core.less_sensitive_markdown.call(null,self__.mkdn_strs);
});

devcards.core.t25660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25662){
var self__ = this;
var _25662__$1 = this;
return self__.meta25661;
});

devcards.core.t25660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25662,meta25661__$1){
var self__ = this;
var _25662__$1 = this;
return (new devcards.core.t25660(self__.mkdn_strs,self__.markdown_card,meta25661__$1));
});

devcards.core.t25660.cljs$lang$type = true;

devcards.core.t25660.cljs$lang$ctorStr = "devcards.core/t25660";

devcards.core.t25660.cljs$lang$ctorPrWriter = (function (this__4342__auto__,writer__4343__auto__,opt__4344__auto__){
return cljs.core._write.call(null,writer__4343__auto__,"devcards.core/t25660");
});

devcards.core.__GT_t25660 = (function __GT_t25660(mkdn_strs__$1,markdown_card__$1,meta25661){
return (new devcards.core.t25660(mkdn_strs__$1,markdown_card__$1,meta25661));
});

}

return (new devcards.core.t25660(mkdn_strs,markdown_card,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),39,new cljs.core.Keyword(null,"end-line","end-line",1837326455),517,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),511,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/shout/client/cljs/resources/public/devcards/js/compiled/out/devcards/core.cljs"], null)));
};
var markdown_card = function (var_args){
var mkdn_strs = null;
if (arguments.length > 0) {
var G__25665__i = 0, G__25665__a = new Array(arguments.length -  0);
while (G__25665__i < G__25665__a.length) {G__25665__a[G__25665__i] = arguments[G__25665__i + 0]; ++G__25665__i;}
  mkdn_strs = new cljs.core.IndexedSeq(G__25665__a,0);
} 
return markdown_card__delegate.call(this,mkdn_strs);};
markdown_card.cljs$lang$maxFixedArity = 0;
markdown_card.cljs$lang$applyTo = (function (arglist__25666){
var mkdn_strs = cljs.core.seq(arglist__25666);
return markdown_card__delegate(mkdn_strs);
});
markdown_card.cljs$core$IFn$_invoke$arity$variadic = markdown_card__delegate;
return markdown_card;
})()
;

/**
* @constructor
* @param {*} om_comp
* @param {*} initial_state
* @param {*} om_options
* @param {*} devcard_options
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
devcards.core.OmRootCard = (function (om_comp,initial_state,om_options,devcard_options,__meta,__extmap,__hash){
this.om_comp = om_comp;
this.initial_state = initial_state;
this.om_options = om_options;
this.devcard_options = devcard_options;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.OmRootCard.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4358__auto__,k__4359__auto__){
var self__ = this;
var this__4358__auto____$1 = this;
return cljs.core._lookup.call(null,this__4358__auto____$1,k__4359__auto__,null);
});

devcards.core.OmRootCard.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4360__auto__,k25668,else__4361__auto__){
var self__ = this;
var this__4360__auto____$1 = this;
var G__25670 = (((k25668 instanceof cljs.core.Keyword))?k25668.fqn:null);
switch (G__25670) {
case "devcard-options":
return self__.devcard_options;

break;
case "om-options":
return self__.om_options;

break;
case "initial-state":
return self__.initial_state;

break;
case "om-comp":
return self__.om_comp;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25668,else__4361__auto__);

}
});

devcards.core.OmRootCard.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4372__auto__,writer__4373__auto__,opts__4374__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
var pr_pair__4375__auto__ = ((function (this__4372__auto____$1){
return (function (keyval__4376__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4373__auto__,cljs.core.pr_writer,""," ","",opts__4374__auto__,keyval__4376__auto__);
});})(this__4372__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4373__auto__,pr_pair__4375__auto__,"#devcards.core.OmRootCard{",", ","}",opts__4374__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"om-comp","om-comp",2141791041),self__.om_comp],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"om-options","om-options",1167999078),self__.om_options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"devcard-options","devcard-options",934866907),self__.devcard_options],null))], null),self__.__extmap));
});

devcards.core.OmRootCard.prototype.devcards$system$IConfig$ = true;

devcards.core.OmRootCard.prototype.devcards$system$IConfig$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unmount-on-reload","unmount-on-reload",-844964662),false,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),devcards.core.box_data_atom.call(null,self__.initial_state)], null),self__.devcard_options);
});

devcards.core.OmRootCard.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4356__auto__){
var self__ = this;
var this__4356__auto____$1 = this;
return self__.__meta;
});

devcards.core.OmRootCard.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4352__auto__){
var self__ = this;
var this__4352__auto____$1 = this;
return (new devcards.core.OmRootCard(self__.om_comp,self__.initial_state,self__.om_options,self__.devcard_options,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.OmRootCard.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4362__auto__){
var self__ = this;
var this__4362__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.OmRootCard.prototype.devcards$system$IUnMount$ = true;

devcards.core.OmRootCard.prototype.devcards$system$IUnMount$unmount$arity$2 = (function (_,p__25671){
var self__ = this;
var map__25672 = p__25671;
var map__25672__$1 = ((cljs.core.seq_QMARK_.call(null,map__25672))?cljs.core.apply.call(null,cljs.core.hash_map,map__25672):map__25672);
var node = cljs.core.get.call(null,map__25672__$1,new cljs.core.Keyword(null,"node","node",581201198));
var ___$1 = this;
return devcards.core.unmount_react.call(null,node);
});

devcards.core.OmRootCard.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4353__auto__){
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

devcards.core.OmRootCard.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4354__auto__,other__4355__auto__){
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

devcards.core.OmRootCard.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4367__auto__,k__4368__auto__){
var self__ = this;
var this__4367__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"om-comp","om-comp",2141791041),null,new cljs.core.Keyword(null,"om-options","om-options",1167999078),null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),null,new cljs.core.Keyword(null,"devcard-options","devcard-options",934866907),null], null), null),k__4368__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4367__auto____$1),self__.__meta),k__4368__auto__);
} else {
return (new devcards.core.OmRootCard(self__.om_comp,self__.initial_state,self__.om_options,self__.devcard_options,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4368__auto__)),null));
}
});

devcards.core.OmRootCard.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4365__auto__,k__4366__auto__,G__25667){
var self__ = this;
var this__4365__auto____$1 = this;
var pred__25673 = cljs.core.keyword_identical_QMARK_;
var expr__25674 = k__4366__auto__;
if(cljs.core.truth_(pred__25673.call(null,new cljs.core.Keyword(null,"om-comp","om-comp",2141791041),expr__25674))){
return (new devcards.core.OmRootCard(G__25667,self__.initial_state,self__.om_options,self__.devcard_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25673.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),expr__25674))){
return (new devcards.core.OmRootCard(self__.om_comp,G__25667,self__.om_options,self__.devcard_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25673.call(null,new cljs.core.Keyword(null,"om-options","om-options",1167999078),expr__25674))){
return (new devcards.core.OmRootCard(self__.om_comp,self__.initial_state,G__25667,self__.devcard_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25673.call(null,new cljs.core.Keyword(null,"devcard-options","devcard-options",934866907),expr__25674))){
return (new devcards.core.OmRootCard(self__.om_comp,self__.initial_state,self__.om_options,G__25667,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.OmRootCard(self__.om_comp,self__.initial_state,self__.om_options,self__.devcard_options,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4366__auto__,G__25667),null));
}
}
}
}
});

devcards.core.OmRootCard.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"om-comp","om-comp",2141791041),self__.om_comp],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"om-options","om-options",1167999078),self__.om_options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"devcard-options","devcard-options",934866907),self__.devcard_options],null))], null),self__.__extmap));
});

devcards.core.OmRootCard.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4357__auto__,G__25667){
var self__ = this;
var this__4357__auto____$1 = this;
return (new devcards.core.OmRootCard(self__.om_comp,self__.initial_state,self__.om_options,self__.devcard_options,G__25667,self__.__extmap,self__.__hash));
});

devcards.core.OmRootCard.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4363__auto__,entry__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4364__auto__)){
return cljs.core._assoc.call(null,this__4363__auto____$1,cljs.core._nth.call(null,entry__4364__auto__,(0)),cljs.core._nth.call(null,entry__4364__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4363__auto____$1,entry__4364__auto__);
}
});

devcards.core.OmRootCard.prototype.devcards$system$IMount$ = true;

devcards.core.OmRootCard.prototype.devcards$system$IMount$mount$arity$2 = (function (_,p__25676){
var self__ = this;
var map__25677 = p__25676;
var map__25677__$1 = ((cljs.core.seq_QMARK_.call(null,map__25677))?cljs.core.apply.call(null,cljs.core.hash_map,map__25677):map__25677);
var data_atom = cljs.core.get.call(null,map__25677__$1,new cljs.core.Keyword(null,"data-atom","data-atom",1035568414));
var node = cljs.core.get.call(null,map__25677__$1,new cljs.core.Keyword(null,"node","node",581201198));
var ___$1 = this;
return om.core.root.call(null,self__.om_comp,devcards.core.unbox_data_atom.call(null,data_atom),cljs.core.merge.call(null,self__.om_options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),node], null)));
});

devcards.core.OmRootCard.cljs$lang$type = true;

devcards.core.OmRootCard.cljs$lang$ctorPrSeq = (function (this__4392__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/OmRootCard");
});

devcards.core.OmRootCard.cljs$lang$ctorPrWriter = (function (this__4392__auto__,writer__4393__auto__){
return cljs.core._write.call(null,writer__4393__auto__,"devcards.core/OmRootCard");
});

devcards.core.__GT_OmRootCard = (function __GT_OmRootCard(om_comp,initial_state,om_options,devcard_options){
return (new devcards.core.OmRootCard(om_comp,initial_state,om_options,devcard_options,null,null,null));
});

devcards.core.map__GT_OmRootCard = (function map__GT_OmRootCard(G__25669){
return (new devcards.core.OmRootCard(new cljs.core.Keyword(null,"om-comp","om-comp",2141791041).cljs$core$IFn$_invoke$arity$1(G__25669),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806).cljs$core$IFn$_invoke$arity$1(G__25669),new cljs.core.Keyword(null,"om-options","om-options",1167999078).cljs$core$IFn$_invoke$arity$1(G__25669),new cljs.core.Keyword(null,"devcard-options","devcard-options",934866907).cljs$core$IFn$_invoke$arity$1(G__25669),null,cljs.core.dissoc.call(null,G__25669,new cljs.core.Keyword(null,"om-comp","om-comp",2141791041),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"om-options","om-options",1167999078),new cljs.core.Keyword(null,"devcard-options","devcard-options",934866907)),null));
});

devcards.core.om_root_card = (function() {
var om_root_card = null;
var om_root_card__1 = (function (om_comp_fn){
return om_root_card.call(null,om_comp_fn,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
});
var om_root_card__2 = (function (om_comp_fn,initial_state){
return om_root_card.call(null,om_comp_fn,initial_state,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
});
var om_root_card__3 = (function (om_comp_fn,initial_state,om_options){
return om_root_card.call(null,om_comp_fn,initial_state,om_options,cljs.core.PersistentArrayMap.EMPTY);
});
var om_root_card__4 = (function (om_comp_fn,initial_state,om_options,devcard_options){
return (new devcards.core.OmRootCard(om_comp_fn,initial_state,om_options,devcard_options,null,null,null));
});
om_root_card = function(om_comp_fn,initial_state,om_options,devcard_options){
switch(arguments.length){
case 1:
return om_root_card__1.call(this,om_comp_fn);
case 2:
return om_root_card__2.call(this,om_comp_fn,initial_state);
case 3:
return om_root_card__3.call(this,om_comp_fn,initial_state,om_options);
case 4:
return om_root_card__4.call(this,om_comp_fn,initial_state,om_options,devcard_options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_root_card.cljs$core$IFn$_invoke$arity$1 = om_root_card__1;
om_root_card.cljs$core$IFn$_invoke$arity$2 = om_root_card__2;
om_root_card.cljs$core$IFn$_invoke$arity$3 = om_root_card__3;
om_root_card.cljs$core$IFn$_invoke$arity$4 = om_root_card__4;
return om_root_card;
})()
;

/**
* @constructor
* @param {*} initial_state
* @param {*} component
* @param {*} initial_inputs
* @param {*} devcard_options
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
devcards.core.FrontierSystemCard = (function (initial_state,component,initial_inputs,devcard_options,__meta,__extmap,__hash){
this.initial_state = initial_state;
this.component = component;
this.initial_inputs = initial_inputs;
this.devcard_options = devcard_options;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.FrontierSystemCard.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4358__auto__,k__4359__auto__){
var self__ = this;
var this__4358__auto____$1 = this;
return cljs.core._lookup.call(null,this__4358__auto____$1,k__4359__auto__,null);
});

devcards.core.FrontierSystemCard.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4360__auto__,k25680,else__4361__auto__){
var self__ = this;
var this__4360__auto____$1 = this;
var G__25682 = (((k25680 instanceof cljs.core.Keyword))?k25680.fqn:null);
switch (G__25682) {
case "devcard-options":
return self__.devcard_options;

break;
case "initial-inputs":
return self__.initial_inputs;

break;
case "component":
return self__.component;

break;
case "initial-state":
return self__.initial_state;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25680,else__4361__auto__);

}
});

devcards.core.FrontierSystemCard.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4372__auto__,writer__4373__auto__,opts__4374__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
var pr_pair__4375__auto__ = ((function (this__4372__auto____$1){
return (function (keyval__4376__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4373__auto__,cljs.core.pr_writer,""," ","",opts__4374__auto__,keyval__4376__auto__);
});})(this__4372__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4373__auto__,pr_pair__4375__auto__,"#devcards.core.FrontierSystemCard{",", ","}",opts__4374__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component","component",1555936782),self__.component],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-inputs","initial-inputs",220155326),self__.initial_inputs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"devcard-options","devcard-options",934866907),self__.devcard_options],null))], null),self__.__extmap));
});

devcards.core.FrontierSystemCard.prototype.devcards$system$IConfig$ = true;

devcards.core.FrontierSystemCard.prototype.devcards$system$IConfig$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unmount-on-reload","unmount-on-reload",-844964662),false,new cljs.core.Keyword(null,"padding","padding",1660304693),false], null),self__.devcard_options);
});

devcards.core.FrontierSystemCard.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4356__auto__){
var self__ = this;
var this__4356__auto____$1 = this;
return self__.__meta;
});

devcards.core.FrontierSystemCard.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4352__auto__){
var self__ = this;
var this__4352__auto____$1 = this;
return (new devcards.core.FrontierSystemCard(self__.initial_state,self__.component,self__.initial_inputs,self__.devcard_options,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.FrontierSystemCard.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4362__auto__){
var self__ = this;
var this__4362__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.FrontierSystemCard.prototype.devcards$system$IUnMount$ = true;

devcards.core.FrontierSystemCard.prototype.devcards$system$IUnMount$unmount$arity$2 = (function (_,p__25683){
var self__ = this;
var map__25684 = p__25683;
var map__25684__$1 = ((cljs.core.seq_QMARK_.call(null,map__25684))?cljs.core.apply.call(null,cljs.core.hash_map,map__25684):map__25684);
var data_atom = cljs.core.get.call(null,map__25684__$1,new cljs.core.Keyword(null,"data-atom","data-atom",1035568414));
var node = cljs.core.get.call(null,map__25684__$1,new cljs.core.Keyword(null,"node","node",581201198));
var ___$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data_atom)))){
cljs.core.reset_BANG_.call(null,data_atom,frontier.core.runner_stop.call(null,cljs.core.deref.call(null,data_atom)));
} else {
}

return React.unmountComponentAtNode(node);
});

devcards.core.FrontierSystemCard.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4353__auto__){
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

devcards.core.FrontierSystemCard.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4354__auto__,other__4355__auto__){
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

devcards.core.FrontierSystemCard.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4367__auto__,k__4368__auto__){
var self__ = this;
var this__4367__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),null,new cljs.core.Keyword(null,"devcard-options","devcard-options",934866907),null,new cljs.core.Keyword(null,"initial-inputs","initial-inputs",220155326),null], null), null),k__4368__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4367__auto____$1),self__.__meta),k__4368__auto__);
} else {
return (new devcards.core.FrontierSystemCard(self__.initial_state,self__.component,self__.initial_inputs,self__.devcard_options,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4368__auto__)),null));
}
});

devcards.core.FrontierSystemCard.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4365__auto__,k__4366__auto__,G__25679){
var self__ = this;
var this__4365__auto____$1 = this;
var pred__25685 = cljs.core.keyword_identical_QMARK_;
var expr__25686 = k__4366__auto__;
if(cljs.core.truth_(pred__25685.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),expr__25686))){
return (new devcards.core.FrontierSystemCard(G__25679,self__.component,self__.initial_inputs,self__.devcard_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25685.call(null,new cljs.core.Keyword(null,"component","component",1555936782),expr__25686))){
return (new devcards.core.FrontierSystemCard(self__.initial_state,G__25679,self__.initial_inputs,self__.devcard_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25685.call(null,new cljs.core.Keyword(null,"initial-inputs","initial-inputs",220155326),expr__25686))){
return (new devcards.core.FrontierSystemCard(self__.initial_state,self__.component,G__25679,self__.devcard_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25685.call(null,new cljs.core.Keyword(null,"devcard-options","devcard-options",934866907),expr__25686))){
return (new devcards.core.FrontierSystemCard(self__.initial_state,self__.component,self__.initial_inputs,G__25679,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.FrontierSystemCard(self__.initial_state,self__.component,self__.initial_inputs,self__.devcard_options,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4366__auto__,G__25679),null));
}
}
}
}
});

devcards.core.FrontierSystemCard.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component","component",1555936782),self__.component],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-inputs","initial-inputs",220155326),self__.initial_inputs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"devcard-options","devcard-options",934866907),self__.devcard_options],null))], null),self__.__extmap));
});

devcards.core.FrontierSystemCard.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4357__auto__,G__25679){
var self__ = this;
var this__4357__auto____$1 = this;
return (new devcards.core.FrontierSystemCard(self__.initial_state,self__.component,self__.initial_inputs,self__.devcard_options,G__25679,self__.__extmap,self__.__hash));
});

devcards.core.FrontierSystemCard.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4363__auto__,entry__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4364__auto__)){
return cljs.core._assoc.call(null,this__4363__auto____$1,cljs.core._nth.call(null,entry__4364__auto__,(0)),cljs.core._nth.call(null,entry__4364__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4363__auto____$1,entry__4364__auto__);
}
});

devcards.core.FrontierSystemCard.prototype.devcards$system$IMount$ = true;

devcards.core.FrontierSystemCard.prototype.devcards$system$IMount$mount$arity$2 = (function (_,p__25688){
var self__ = this;
var map__25689 = p__25688;
var map__25689__$1 = ((cljs.core.seq_QMARK_.call(null,map__25689))?cljs.core.apply.call(null,cljs.core.hash_map,map__25689):map__25689);
var data_atom = cljs.core.get.call(null,map__25689__$1,new cljs.core.Keyword(null,"data-atom","data-atom",1035568414));
var node = cljs.core.get.call(null,map__25689__$1,new cljs.core.Keyword(null,"node","node",581201198));
var ___$1 = this;
var sys = frontier.core.run_with_atom.call(null,(function (){var or__3755__auto__ = new cljs.core.Keyword(null,"state-atom","state-atom",1303809857).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data_atom));
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return cljs.core.atom.call(null,null);
}
})(),self__.initial_state,self__.component,((function (___$1,map__25689,map__25689__$1,data_atom,node){
return (function (state){
var temp__4126__auto__ = frontier.core._render.call(null,self__.component,state);
if(cljs.core.truth_(temp__4126__auto__)){
var react_dom = temp__4126__auto__;
return React.renderComponent(sablono.interpreter.interpret.call(null,react_dom),node,cljs.core.identity);
} else {
return null;
}
});})(___$1,map__25689,map__25689__$1,data_atom,node))
);
if(cljs.core.truth_((function (){var and__3743__auto__ = (new cljs.core.Keyword(null,"state-atom","state-atom",1303809857).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data_atom)) == null);
if(and__3743__auto__){
var and__3743__auto____$1 = self__.initial_inputs;
if(cljs.core.truth_(and__3743__auto____$1)){
return (cljs.core.count.call(null,self__.initial_inputs) > (0));
} else {
return and__3743__auto____$1;
}
} else {
return and__3743__auto__;
}
})())){
var seq__25690_25695 = cljs.core.seq.call(null,self__.initial_inputs);
var chunk__25691_25696 = null;
var count__25692_25697 = (0);
var i__25693_25698 = (0);
while(true){
if((i__25693_25698 < count__25692_25697)){
var msg_25699 = cljs.core._nth.call(null,chunk__25691_25696,i__25693_25698);
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912).cljs$core$IFn$_invoke$arity$1(sys),msg_25699);

var G__25700 = seq__25690_25695;
var G__25701 = chunk__25691_25696;
var G__25702 = count__25692_25697;
var G__25703 = (i__25693_25698 + (1));
seq__25690_25695 = G__25700;
chunk__25691_25696 = G__25701;
count__25692_25697 = G__25702;
i__25693_25698 = G__25703;
continue;
} else {
var temp__4126__auto___25704 = cljs.core.seq.call(null,seq__25690_25695);
if(temp__4126__auto___25704){
var seq__25690_25705__$1 = temp__4126__auto___25704;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25690_25705__$1)){
var c__4542__auto___25706 = cljs.core.chunk_first.call(null,seq__25690_25705__$1);
var G__25707 = cljs.core.chunk_rest.call(null,seq__25690_25705__$1);
var G__25708 = c__4542__auto___25706;
var G__25709 = cljs.core.count.call(null,c__4542__auto___25706);
var G__25710 = (0);
seq__25690_25695 = G__25707;
chunk__25691_25696 = G__25708;
count__25692_25697 = G__25709;
i__25693_25698 = G__25710;
continue;
} else {
var msg_25711 = cljs.core.first.call(null,seq__25690_25705__$1);
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912).cljs$core$IFn$_invoke$arity$1(sys),msg_25711);

var G__25712 = cljs.core.next.call(null,seq__25690_25705__$1);
var G__25713 = null;
var G__25714 = (0);
var G__25715 = (0);
seq__25690_25695 = G__25712;
chunk__25691_25696 = G__25713;
count__25692_25697 = G__25714;
i__25693_25698 = G__25715;
continue;
}
} else {
}
}
break;
}
} else {
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912).cljs$core$IFn$_invoke$arity$1(sys),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__system.noop","__system.noop",-749670835)], null));
}

return cljs.core.reset_BANG_.call(null,data_atom,sys);
});

devcards.core.FrontierSystemCard.cljs$lang$type = true;

devcards.core.FrontierSystemCard.cljs$lang$ctorPrSeq = (function (this__4392__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/FrontierSystemCard");
});

devcards.core.FrontierSystemCard.cljs$lang$ctorPrWriter = (function (this__4392__auto__,writer__4393__auto__){
return cljs.core._write.call(null,writer__4393__auto__,"devcards.core/FrontierSystemCard");
});

devcards.core.__GT_FrontierSystemCard = (function __GT_FrontierSystemCard(initial_state,component,initial_inputs,devcard_options){
return (new devcards.core.FrontierSystemCard(initial_state,component,initial_inputs,devcard_options,null,null,null));
});

devcards.core.map__GT_FrontierSystemCard = (function map__GT_FrontierSystemCard(G__25681){
return (new devcards.core.FrontierSystemCard(new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806).cljs$core$IFn$_invoke$arity$1(G__25681),new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__25681),new cljs.core.Keyword(null,"initial-inputs","initial-inputs",220155326).cljs$core$IFn$_invoke$arity$1(G__25681),new cljs.core.Keyword(null,"devcard-options","devcard-options",934866907).cljs$core$IFn$_invoke$arity$1(G__25681),null,cljs.core.dissoc.call(null,G__25681,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"initial-inputs","initial-inputs",220155326),new cljs.core.Keyword(null,"devcard-options","devcard-options",934866907)),null));
});

devcards.core.frontier_system_card = (function() {
var frontier_system_card = null;
var frontier_system_card__3 = (function (initial_state,component,initial_inputs){
return frontier_system_card.call(null,initial_state,component,initial_inputs,cljs.core.PersistentArrayMap.EMPTY);
});
var frontier_system_card__4 = (function (initial_state,component,initial_inputs,devcard_options){
return (new devcards.core.FrontierSystemCard(initial_state,component,initial_inputs,devcard_options,null,null,null));
});
frontier_system_card = function(initial_state,component,initial_inputs,devcard_options){
switch(arguments.length){
case 3:
return frontier_system_card__3.call(this,initial_state,component,initial_inputs);
case 4:
return frontier_system_card__4.call(this,initial_state,component,initial_inputs,devcard_options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontier_system_card.cljs$core$IFn$_invoke$arity$3 = frontier_system_card__3;
frontier_system_card.cljs$core$IFn$_invoke$arity$4 = frontier_system_card__4;
return frontier_system_card;
})()
;
devcards.core.managed_history_card = (function() {
var managed_history_card = null;
var managed_history_card__3 = (function (initial_state,component,initial_inputs){
return managed_history_card.call(null,initial_state,component,initial_inputs,cljs.core.PersistentArrayMap.EMPTY);
});
var managed_history_card__4 = (function (initial_state,component,initial_inputs,devcard_options){
var inputs = cljs.core.mapv.call(null,cljs.core.partial.call(null,frontier.core.msg_prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__history-keeper","__history-keeper",-1671309796),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),initial_inputs);
var initial_state_SINGLEQUOTE_ = cljs.core.assoc_in.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__history-keeper","__history-keeper",-1671309796),new cljs.core.Keyword(null,"state","state",-1988618099)], null),initial_state);
return devcards.core.frontier_system_card.call(null,initial_state_SINGLEQUOTE_,frontier.cards.history_manager.call(null,initial_state,component),inputs,devcard_options);
});
managed_history_card = function(initial_state,component,initial_inputs,devcard_options){
switch(arguments.length){
case 3:
return managed_history_card__3.call(this,initial_state,component,initial_inputs);
case 4:
return managed_history_card__4.call(this,initial_state,component,initial_inputs,devcard_options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
managed_history_card.cljs$core$IFn$_invoke$arity$3 = managed_history_card__3;
managed_history_card.cljs$core$IFn$_invoke$arity$4 = managed_history_card__4;
return managed_history_card;
})()
;

//# sourceMappingURL=core.js.map