// Compiled by ClojureScript 0.0-2725 {}
goog.provide('frontier.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('cljs.core.async');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
frontier.core.dev_null = (function dev_null(in$){
var c__13512__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto__){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto__){
return (function (state_25757){
var state_val_25758 = (state_25757[(1)]);
if((state_val_25758 === (7))){
var inst_25753 = (state_25757[(2)]);
var state_25757__$1 = state_25757;
var statearr_25759_25772 = state_25757__$1;
(statearr_25759_25772[(2)] = inst_25753);

(statearr_25759_25772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25758 === (6))){
var state_25757__$1 = state_25757;
var statearr_25760_25773 = state_25757__$1;
(statearr_25760_25773[(2)] = null);

(statearr_25760_25773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25758 === (5))){
var state_25757__$1 = state_25757;
var statearr_25761_25774 = state_25757__$1;
(statearr_25761_25774[(2)] = new cljs.core.Keyword(null,"closed","closed",-919675359));

(statearr_25761_25774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25758 === (4))){
var inst_25747 = (state_25757[(2)]);
var inst_25748 = (inst_25747 == null);
var state_25757__$1 = state_25757;
if(cljs.core.truth_(inst_25748)){
var statearr_25762_25775 = state_25757__$1;
(statearr_25762_25775[(1)] = (5));

} else {
var statearr_25763_25776 = state_25757__$1;
(statearr_25763_25776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25758 === (3))){
var inst_25755 = (state_25757[(2)]);
var state_25757__$1 = state_25757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25757__$1,inst_25755);
} else {
if((state_val_25758 === (2))){
var state_25757__$1 = state_25757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25757__$1,(4),in$);
} else {
if((state_val_25758 === (1))){
var state_25757__$1 = state_25757;
var statearr_25764_25777 = state_25757__$1;
(statearr_25764_25777[(2)] = null);

(statearr_25764_25777[(1)] = (2));


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
});})(c__13512__auto__))
;
return ((function (switch__13456__auto__,c__13512__auto__){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_25768 = [null,null,null,null,null,null,null];
(statearr_25768[(0)] = state_machine__13457__auto__);

(statearr_25768[(1)] = (1));

return statearr_25768;
});
var state_machine__13457__auto____1 = (function (state_25757){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_25757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e25769){if((e25769 instanceof Object)){
var ex__13460__auto__ = e25769;
var statearr_25770_25778 = state_25757;
(statearr_25770_25778[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25779 = state_25757;
state_25757 = G__25779;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_25757){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_25757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto__))
})();
var state__13514__auto__ = (function (){var statearr_25771 = f__13513__auto__.call(null);
(statearr_25771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto__);

return statearr_25771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto__))
);

return c__13512__auto__;
});

frontier.core.IInit = (function (){var obj25781 = {};
return obj25781;
})();

frontier.core._initialize = (function _initialize(_,effect_chan,event_chan){
if((function (){var and__3743__auto__ = _;
if(and__3743__auto__){
return _.frontier$core$IInit$_initialize$arity$3;
} else {
return and__3743__auto__;
}
})()){
return _.frontier$core$IInit$_initialize$arity$3(_,effect_chan,event_chan);
} else {
var x__4399__auto__ = (((_ == null))?null:_);
return (function (){var or__3755__auto__ = (frontier.core._initialize[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (frontier.core._initialize["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInit.-initialize",_);
}
}
})().call(null,_,effect_chan,event_chan);
}
});


frontier.core.IStop = (function (){var obj25783 = {};
return obj25783;
})();

frontier.core._stop = (function _stop(_){
if((function (){var and__3743__auto__ = _;
if(and__3743__auto__){
return _.frontier$core$IStop$_stop$arity$1;
} else {
return and__3743__auto__;
}
})()){
return _.frontier$core$IStop$_stop$arity$1(_);
} else {
var x__4399__auto__ = (((_ == null))?null:_);
return (function (){var or__3755__auto__ = (frontier.core._stop[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (frontier.core._stop["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IStop.-stop",_);
}
}
})().call(null,_);
}
});


frontier.core.ITransform = (function (){var obj25785 = {};
return obj25785;
})();

frontier.core._transform = (function _transform(_,msg,state){
if((function (){var and__3743__auto__ = _;
if(and__3743__auto__){
return _.frontier$core$ITransform$_transform$arity$3;
} else {
return and__3743__auto__;
}
})()){
return _.frontier$core$ITransform$_transform$arity$3(_,msg,state);
} else {
var x__4399__auto__ = (((_ == null))?null:_);
return (function (){var or__3755__auto__ = (frontier.core._transform[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (frontier.core._transform["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransform.-transform",_);
}
}
})().call(null,_,msg,state);
}
});


frontier.core.IEffect = (function (){var obj25787 = {};
return obj25787;
})();

frontier.core._effect = (function _effect(_,msg,state,event_chan,effect_chan){
if((function (){var and__3743__auto__ = _;
if(and__3743__auto__){
return _.frontier$core$IEffect$_effect$arity$5;
} else {
return and__3743__auto__;
}
})()){
return _.frontier$core$IEffect$_effect$arity$5(_,msg,state,event_chan,effect_chan);
} else {
var x__4399__auto__ = (((_ == null))?null:_);
return (function (){var or__3755__auto__ = (frontier.core._effect[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (frontier.core._effect["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IEffect.-effect",_);
}
}
})().call(null,_,msg,state,event_chan,effect_chan);
}
});


frontier.core.IInputFilter = (function (){var obj25789 = {};
return obj25789;
})();

frontier.core._filter_input = (function _filter_input(_,msg,state){
if((function (){var and__3743__auto__ = _;
if(and__3743__auto__){
return _.frontier$core$IInputFilter$_filter_input$arity$3;
} else {
return and__3743__auto__;
}
})()){
return _.frontier$core$IInputFilter$_filter_input$arity$3(_,msg,state);
} else {
var x__4399__auto__ = (((_ == null))?null:_);
return (function (){var or__3755__auto__ = (frontier.core._filter_input[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (frontier.core._filter_input["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInputFilter.-filter-input",_);
}
}
})().call(null,_,msg,state);
}
});


frontier.core.IDerive = (function (){var obj25791 = {};
return obj25791;
})();

frontier.core._derive = (function _derive(_,state){
if((function (){var and__3743__auto__ = _;
if(and__3743__auto__){
return _.frontier$core$IDerive$_derive$arity$2;
} else {
return and__3743__auto__;
}
})()){
return _.frontier$core$IDerive$_derive$arity$2(_,state);
} else {
var x__4399__auto__ = (((_ == null))?null:_);
return (function (){var or__3755__auto__ = (frontier.core._derive[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (frontier.core._derive["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDerive.-derive",_);
}
}
})().call(null,_,state);
}
});


frontier.core.IRender = (function (){var obj25793 = {};
return obj25793;
})();

frontier.core._render = (function _render(_,state){
if((function (){var and__3743__auto__ = _;
if(and__3743__auto__){
return _.frontier$core$IRender$_render$arity$2;
} else {
return and__3743__auto__;
}
})()){
return _.frontier$core$IRender$_render$arity$2(_,state);
} else {
var x__4399__auto__ = (((_ == null))?null:_);
return (function (){var or__3755__auto__ = (frontier.core._render[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (frontier.core._render["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRender.-render",_);
}
}
})().call(null,_,state);
}
});


frontier.core.IWillAccept = (function (){var obj25795 = {};
return obj25795;
})();

frontier.core._will_accept_QMARK_ = (function _will_accept_QMARK_(o,msg){
if((function (){var and__3743__auto__ = o;
if(and__3743__auto__){
return o.frontier$core$IWillAccept$_will_accept_QMARK_$arity$2;
} else {
return and__3743__auto__;
}
})()){
return o.frontier$core$IWillAccept$_will_accept_QMARK_$arity$2(o,msg);
} else {
var x__4399__auto__ = (((o == null))?null:o);
return (function (){var or__3755__auto__ = (frontier.core._will_accept_QMARK_[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (frontier.core._will_accept_QMARK_["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillAccept.-will-accept?",o);
}
}
})().call(null,o,msg);
}
});

/**
* @param {...*} var_args
*/
frontier.core.add_effects = (function() { 
var add_effects__delegate = function (state,args){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__effects","__effects",259141453)], null),(function (effects){
return cljs.core.concat.call(null,effects,args);
}));
};
var add_effects = function (state,var_args){
var args = null;
if (arguments.length > 1) {
var G__25796__i = 0, G__25796__a = new Array(arguments.length -  1);
while (G__25796__i < G__25796__a.length) {G__25796__a[G__25796__i] = arguments[G__25796__i + 1]; ++G__25796__i;}
  args = new cljs.core.IndexedSeq(G__25796__a,0);
} 
return add_effects__delegate.call(this,state,args);};
add_effects.cljs$lang$maxFixedArity = 1;
add_effects.cljs$lang$applyTo = (function (arglist__25797){
var state = cljs.core.first(arglist__25797);
var args = cljs.core.rest(arglist__25797);
return add_effects__delegate(state,args);
});
add_effects.cljs$core$IFn$_invoke$arity$variadic = add_effects__delegate;
return add_effects;
})()
;
/**
* @param {...*} var_args
*/
frontier.core.compose = (function() { 
var compose__delegate = function (components){
var initializers = cljs.core.filter.call(null,(function (p1__25798_SHARP_){
var G__25829 = p1__25798_SHARP_;
if(G__25829){
var bit__4436__auto__ = null;
if(cljs.core.truth_((function (){var or__3755__auto__ = bit__4436__auto__;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return G__25829.frontier$core$IInit$;
}
})())){
return true;
} else {
if((!G__25829.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.IInit,G__25829);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.IInit,G__25829);
}
}),components);
var stoppers = cljs.core.filter.call(null,((function (initializers){
return (function (p1__25799_SHARP_){
var G__25830 = p1__25799_SHARP_;
if(G__25830){
var bit__4436__auto__ = null;
if(cljs.core.truth_((function (){var or__3755__auto__ = bit__4436__auto__;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return G__25830.frontier$core$IStop$;
}
})())){
return true;
} else {
if((!G__25830.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.IStop,G__25830);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.IStop,G__25830);
}
});})(initializers))
,components);
var transforms = cljs.core.filter.call(null,((function (initializers,stoppers){
return (function (p1__25800_SHARP_){
var G__25831 = p1__25800_SHARP_;
if(G__25831){
var bit__4436__auto__ = null;
if(cljs.core.truth_((function (){var or__3755__auto__ = bit__4436__auto__;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return G__25831.frontier$core$ITransform$;
}
})())){
return true;
} else {
if((!G__25831.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.ITransform,G__25831);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.ITransform,G__25831);
}
});})(initializers,stoppers))
,components);
var effects = cljs.core.filter.call(null,((function (initializers,stoppers,transforms){
return (function (p1__25801_SHARP_){
var G__25832 = p1__25801_SHARP_;
if(G__25832){
var bit__4436__auto__ = null;
if(cljs.core.truth_((function (){var or__3755__auto__ = bit__4436__auto__;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return G__25832.frontier$core$IEffect$;
}
})())){
return true;
} else {
if((!G__25832.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.IEffect,G__25832);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.IEffect,G__25832);
}
});})(initializers,stoppers,transforms))
,components);
var input_filters = cljs.core.filter.call(null,((function (initializers,stoppers,transforms,effects){
return (function (p1__25802_SHARP_){
var G__25833 = p1__25802_SHARP_;
if(G__25833){
var bit__4436__auto__ = null;
if(cljs.core.truth_((function (){var or__3755__auto__ = bit__4436__auto__;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return G__25833.frontier$core$IInputFilter$;
}
})())){
return true;
} else {
if((!G__25833.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.IInputFilter,G__25833);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.IInputFilter,G__25833);
}
});})(initializers,stoppers,transforms,effects))
,components);
var derivatives = cljs.core.filter.call(null,((function (initializers,stoppers,transforms,effects,input_filters){
return (function (p1__25803_SHARP_){
var G__25834 = p1__25803_SHARP_;
if(G__25834){
var bit__4436__auto__ = null;
if(cljs.core.truth_((function (){var or__3755__auto__ = bit__4436__auto__;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return G__25834.frontier$core$IDerive$;
}
})())){
return true;
} else {
if((!G__25834.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.IDerive,G__25834);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.IDerive,G__25834);
}
});})(initializers,stoppers,transforms,effects,input_filters))
,components);
var ifilter = cljs.core.apply.call(null,cljs.core.comp,cljs.core.mapv.call(null,((function (initializers,stoppers,transforms,effects,input_filters,derivatives){
return (function (pl){
var func = cljs.core.partial.call(null,frontier.core._filter_input,pl);
return ((function (func,initializers,stoppers,transforms,effects,input_filters,derivatives){
return (function (p__25835){
var vec__25836 = p__25835;
var msg = cljs.core.nth.call(null,vec__25836,(0),null);
var state = cljs.core.nth.call(null,vec__25836,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [func.call(null,msg,state),state], null);
});
;})(func,initializers,stoppers,transforms,effects,input_filters,derivatives))
});})(initializers,stoppers,transforms,effects,input_filters,derivatives))
,cljs.core.reverse.call(null,input_filters)));
var itrans = cljs.core.apply.call(null,cljs.core.comp,cljs.core.mapv.call(null,((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter){
return (function (pl){
var func = cljs.core.partial.call(null,frontier.core._transform,pl);
return ((function (func,initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter){
return (function (p__25837){
var vec__25838 = p__25837;
var msg = cljs.core.nth.call(null,vec__25838,(0),null);
var state = cljs.core.nth.call(null,vec__25838,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg,func.call(null,msg,state)], null);
});
;})(func,initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter))
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter))
,cljs.core.reverse.call(null,transforms)));
var ideriv = cljs.core.apply.call(null,cljs.core.comp,cljs.core.mapv.call(null,((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans){
return (function (pl){
return cljs.core.partial.call(null,frontier.core._derive,pl);
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans))
,cljs.core.reverse.call(null,derivatives)));
var ieffects = ((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv){
return (function (msg,state,event_chan,effect_chan){
var seq__25839 = cljs.core.seq.call(null,cljs.core.reverse.call(null,effects));
var chunk__25840 = null;
var count__25841 = (0);
var i__25842 = (0);
while(true){
if((i__25842 < count__25841)){
var pl = cljs.core._nth.call(null,chunk__25840,i__25842);
frontier.core._effect.call(null,pl,msg,state,event_chan,effect_chan);

var G__25854 = seq__25839;
var G__25855 = chunk__25840;
var G__25856 = count__25841;
var G__25857 = (i__25842 + (1));
seq__25839 = G__25854;
chunk__25840 = G__25855;
count__25841 = G__25856;
i__25842 = G__25857;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__25839);
if(temp__4126__auto__){
var seq__25839__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25839__$1)){
var c__4542__auto__ = cljs.core.chunk_first.call(null,seq__25839__$1);
var G__25858 = cljs.core.chunk_rest.call(null,seq__25839__$1);
var G__25859 = c__4542__auto__;
var G__25860 = cljs.core.count.call(null,c__4542__auto__);
var G__25861 = (0);
seq__25839 = G__25858;
chunk__25840 = G__25859;
count__25841 = G__25860;
i__25842 = G__25861;
continue;
} else {
var pl = cljs.core.first.call(null,seq__25839__$1);
frontier.core._effect.call(null,pl,msg,state,event_chan,effect_chan);

var G__25862 = cljs.core.next.call(null,seq__25839__$1);
var G__25863 = null;
var G__25864 = (0);
var G__25865 = (0);
seq__25839 = G__25862;
chunk__25840 = G__25863;
count__25841 = G__25864;
i__25842 = G__25865;
continue;
}
} else {
return null;
}
}
break;
}
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv))
;
if(typeof frontier.core.t25843 !== 'undefined'){
} else {

/**
* @constructor
*/
frontier.core.t25843 = (function (itrans,derivatives,compose,initializers,ideriv,transforms,stoppers,components,ifilter,input_filters,effects,ieffects,meta25844){
this.itrans = itrans;
this.derivatives = derivatives;
this.compose = compose;
this.initializers = initializers;
this.ideriv = ideriv;
this.transforms = transforms;
this.stoppers = stoppers;
this.components = components;
this.ifilter = ifilter;
this.input_filters = input_filters;
this.effects = effects;
this.ieffects = ieffects;
this.meta25844 = meta25844;
this.cljs$lang$protocol_mask$partition1$ = 8192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
frontier.core.t25843.prototype.frontier$core$IDerive$ = true;

frontier.core.t25843.prototype.frontier$core$IDerive$_derive$arity$2 = ((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects){
return (function (_,state){
var self__ = this;
var ___$1 = this;
return self__.ideriv.call(null,state);
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects))
;

frontier.core.t25843.prototype.frontier$core$IInputFilter$ = true;

frontier.core.t25843.prototype.frontier$core$IInputFilter$_filter_input$arity$3 = ((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects){
return (function (_,msg,state){
var self__ = this;
var ___$1 = this;
return cljs.core.first.call(null,self__.ifilter.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg,state], null)));
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects))
;

frontier.core.t25843.prototype.frontier$core$IEffect$ = true;

frontier.core.t25843.prototype.frontier$core$IEffect$_effect$arity$5 = ((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects){
return (function (_,msg,state,event_chan,effect_chan){
var self__ = this;
var ___$1 = this;
return self__.ieffects.call(null,msg,state,event_chan,effect_chan);
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects))
;

frontier.core.t25843.prototype.frontier$core$ITransform$ = true;

frontier.core.t25843.prototype.frontier$core$ITransform$_transform$arity$3 = ((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects){
return (function (_,msg,state){
var self__ = this;
var ___$1 = this;
return cljs.core.last.call(null,self__.itrans.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg,state], null)));
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects))
;

frontier.core.t25843.prototype.frontier$core$IStop$ = true;

frontier.core.t25843.prototype.frontier$core$IStop$_stop$arity$1 = ((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects){
return (function (_){
var self__ = this;
var ___$1 = this;
var seq__25846 = cljs.core.seq.call(null,self__.stoppers);
var chunk__25847 = null;
var count__25848 = (0);
var i__25849 = (0);
while(true){
if((i__25849 < count__25848)){
var pl = cljs.core._nth.call(null,chunk__25847,i__25849);
frontier.core._stop.call(null,pl);

var G__25866 = seq__25846;
var G__25867 = chunk__25847;
var G__25868 = count__25848;
var G__25869 = (i__25849 + (1));
seq__25846 = G__25866;
chunk__25847 = G__25867;
count__25848 = G__25868;
i__25849 = G__25869;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__25846);
if(temp__4126__auto__){
var seq__25846__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25846__$1)){
var c__4542__auto__ = cljs.core.chunk_first.call(null,seq__25846__$1);
var G__25870 = cljs.core.chunk_rest.call(null,seq__25846__$1);
var G__25871 = c__4542__auto__;
var G__25872 = cljs.core.count.call(null,c__4542__auto__);
var G__25873 = (0);
seq__25846 = G__25870;
chunk__25847 = G__25871;
count__25848 = G__25872;
i__25849 = G__25873;
continue;
} else {
var pl = cljs.core.first.call(null,seq__25846__$1);
frontier.core._stop.call(null,pl);

var G__25874 = cljs.core.next.call(null,seq__25846__$1);
var G__25875 = null;
var G__25876 = (0);
var G__25877 = (0);
seq__25846 = G__25874;
chunk__25847 = G__25875;
count__25848 = G__25876;
i__25849 = G__25877;
continue;
}
} else {
return null;
}
}
break;
}
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects))
;

frontier.core.t25843.prototype.frontier$core$IInit$ = true;

frontier.core.t25843.prototype.frontier$core$IInit$_initialize$arity$3 = ((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects){
return (function (_,state,event_chan){
var self__ = this;
var ___$1 = this;
var seq__25850 = cljs.core.seq.call(null,self__.initializers);
var chunk__25851 = null;
var count__25852 = (0);
var i__25853 = (0);
while(true){
if((i__25853 < count__25852)){
var pl = cljs.core._nth.call(null,chunk__25851,i__25853);
frontier.core._initialize.call(null,pl,state,event_chan);

var G__25878 = seq__25850;
var G__25879 = chunk__25851;
var G__25880 = count__25852;
var G__25881 = (i__25853 + (1));
seq__25850 = G__25878;
chunk__25851 = G__25879;
count__25852 = G__25880;
i__25853 = G__25881;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__25850);
if(temp__4126__auto__){
var seq__25850__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25850__$1)){
var c__4542__auto__ = cljs.core.chunk_first.call(null,seq__25850__$1);
var G__25882 = cljs.core.chunk_rest.call(null,seq__25850__$1);
var G__25883 = c__4542__auto__;
var G__25884 = cljs.core.count.call(null,c__4542__auto__);
var G__25885 = (0);
seq__25850 = G__25882;
chunk__25851 = G__25883;
count__25852 = G__25884;
i__25853 = G__25885;
continue;
} else {
var pl = cljs.core.first.call(null,seq__25850__$1);
frontier.core._initialize.call(null,pl,state,event_chan);

var G__25886 = cljs.core.next.call(null,seq__25850__$1);
var G__25887 = null;
var G__25888 = (0);
var G__25889 = (0);
seq__25850 = G__25886;
chunk__25851 = G__25887;
count__25852 = G__25888;
i__25853 = G__25889;
continue;
}
} else {
return null;
}
}
break;
}
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects))
;

frontier.core.t25843.prototype.cljs$core$ICloneable$_clone$arity$1 = ((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects){
return (function (o){
var self__ = this;
var o__$1 = this;
return o__$1;
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects))
;

frontier.core.t25843.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects){
return (function (_25845){
var self__ = this;
var _25845__$1 = this;
return self__.meta25844;
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects))
;

frontier.core.t25843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects){
return (function (_25845,meta25844__$1){
var self__ = this;
var _25845__$1 = this;
return (new frontier.core.t25843(self__.itrans,self__.derivatives,self__.compose,self__.initializers,self__.ideriv,self__.transforms,self__.stoppers,self__.components,self__.ifilter,self__.input_filters,self__.effects,self__.ieffects,meta25844__$1));
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects))
;

frontier.core.t25843.cljs$lang$type = true;

frontier.core.t25843.cljs$lang$ctorStr = "frontier.core/t25843";

frontier.core.t25843.cljs$lang$ctorPrWriter = ((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects){
return (function (this__4342__auto__,writer__4343__auto__,opt__4344__auto__){
return cljs.core._write.call(null,writer__4343__auto__,"frontier.core/t25843");
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects))
;

frontier.core.__GT_t25843 = ((function (initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects){
return (function __GT_t25843(itrans__$1,derivatives__$1,compose__$1,initializers__$1,ideriv__$1,transforms__$1,stoppers__$1,components__$1,ifilter__$1,input_filters__$1,effects__$1,ieffects__$1,meta25844){
return (new frontier.core.t25843(itrans__$1,derivatives__$1,compose__$1,initializers__$1,ideriv__$1,transforms__$1,stoppers__$1,components__$1,ifilter__$1,input_filters__$1,effects__$1,ieffects__$1,meta25844));
});})(initializers,stoppers,transforms,effects,input_filters,derivatives,ifilter,itrans,ideriv,ieffects))
;

}

return (new frontier.core.t25843(itrans,derivatives,compose,initializers,ideriv,transforms,stoppers,components,ifilter,input_filters,effects,ieffects,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),94,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),72,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/shout/client/cljs/resources/public/devcards/js/compiled/out/frontier/core.cljs"], null)));
};
var compose = function (var_args){
var components = null;
if (arguments.length > 0) {
var G__25890__i = 0, G__25890__a = new Array(arguments.length -  0);
while (G__25890__i < G__25890__a.length) {G__25890__a[G__25890__i] = arguments[G__25890__i + 0]; ++G__25890__i;}
  components = new cljs.core.IndexedSeq(G__25890__a,0);
} 
return compose__delegate.call(this,components);};
compose.cljs$lang$maxFixedArity = 0;
compose.cljs$lang$applyTo = (function (arglist__25891){
var components = cljs.core.seq(arglist__25891);
return compose__delegate(components);
});
compose.cljs$core$IFn$_invoke$arity$variadic = compose__delegate;
return compose;
})()
;
frontier.core.make_renderable = (function make_renderable(component,render_function){
var x25893 = cljs.core.clone.call(null,component);
x25893.frontier$core$IRender$ = true;

x25893.frontier$core$IRender$_render$arity$2 = ((function (x25893){
return (function (_,state){
var ___$1 = this;
return render_function.call(null,state);
});})(x25893))
;

return x25893;
});
frontier.core.trans_helper_STAR_ = (function trans_helper_STAR_(comp_STAR_,effect_handler,state,msg){
var temp__4124__auto__ = frontier.core._transform.call(null,comp_STAR_,msg,state);
if(cljs.core.truth_(temp__4124__auto__)){
var new_state = temp__4124__auto__;
effect_handler.call(null,new cljs.core.Keyword(null,"__effects","__effects",259141453).cljs$core$IFn$_invoke$arity$1(new_state));

return cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"__effects","__effects",259141453));
} else {
return state;
}
});
frontier.core.state_from_msg_list = (function state_from_msg_list(component,msg_list,initial_state){
return cljs.core.reduce.call(null,cljs.core.partial.call(null,frontier.core.trans_helper_STAR_,component,cljs.core.identity),initial_state,msg_list);
});
frontier.core.transform_with_effects = (function transform_with_effects(component,effect_chan,state,msg){
return frontier.core.trans_helper_STAR_.call(null,component,(function (p1__25894_SHARP_){
var seq__25899 = cljs.core.seq.call(null,p1__25894_SHARP_);
var chunk__25900 = null;
var count__25901 = (0);
var i__25902 = (0);
while(true){
if((i__25902 < count__25901)){
var ef = cljs.core._nth.call(null,chunk__25900,i__25902);
cljs.core.async.put_BANG_.call(null,effect_chan,ef);

var G__25903 = seq__25899;
var G__25904 = chunk__25900;
var G__25905 = count__25901;
var G__25906 = (i__25902 + (1));
seq__25899 = G__25903;
chunk__25900 = G__25904;
count__25901 = G__25905;
i__25902 = G__25906;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__25899);
if(temp__4126__auto__){
var seq__25899__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25899__$1)){
var c__4542__auto__ = cljs.core.chunk_first.call(null,seq__25899__$1);
var G__25907 = cljs.core.chunk_rest.call(null,seq__25899__$1);
var G__25908 = c__4542__auto__;
var G__25909 = cljs.core.count.call(null,c__4542__auto__);
var G__25910 = (0);
seq__25899 = G__25907;
chunk__25900 = G__25908;
count__25901 = G__25909;
i__25902 = G__25910;
continue;
} else {
var ef = cljs.core.first.call(null,seq__25899__$1);
cljs.core.async.put_BANG_.call(null,effect_chan,ef);

var G__25911 = cljs.core.next.call(null,seq__25899__$1);
var G__25912 = null;
var G__25913 = (0);
var G__25914 = (0);
seq__25899 = G__25911;
chunk__25900 = G__25912;
count__25901 = G__25913;
i__25902 = G__25914;
continue;
}
} else {
return null;
}
}
break;
}
}),state,msg);
});
frontier.core.move_to_top = (function move_to_top(path,state){
var temp__4124__auto__ = cljs.core.get_in.call(null,state,path);
if(cljs.core.truth_(temp__4124__auto__)){
var d = temp__4124__auto__;
var k = cljs.core.last.call(null,path);
var ns = cljs.core.update_in.call(null,state,cljs.core.butlast.call(null,path),((function (k,d,temp__4124__auto__){
return (function (s){
return cljs.core.dissoc.call(null,s,k);
});})(k,d,temp__4124__auto__))
);
return cljs.core.assoc.call(null,ns,k,d);
} else {
return state;
}
});
frontier.core.move_effects_to_top = (function move_effects_to_top(path,state){
return frontier.core.move_to_top.call(null,cljs.core.conj.call(null,(((path instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null):path),new cljs.core.Keyword(null,"__effects","__effects",259141453)),state);
});
frontier.core.path__GT_box = (function path__GT_box(path){
if((path instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null);
} else {
return path;
}
});
frontier.core.path__GT_unbox = (function path__GT_unbox(path){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,path))){
return cljs.core.first.call(null,path);
} else {
return path;
}
});
frontier.core.msg_prefix = (function msg_prefix(path,p__25915){
var vec__25917 = p__25915;
var msg_name = cljs.core.nth.call(null,vec__25917,(0),null);
var data = cljs.core.nth.call(null,vec__25917,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,frontier.core.path__GT_box.call(null,path),frontier.core.path__GT_box.call(null,msg_name))),data], null);
});
frontier.core.msg_path__GT_local_msg_name = (function msg_path__GT_local_msg_name(path,msg_name){
var path__$1 = frontier.core.path__GT_box.call(null,path);
var len = cljs.core.count.call(null,path__$1);
if(cljs.core._EQ_.call(null,cljs.core.take.call(null,len,frontier.core.path__GT_box.call(null,msg_name)),path__$1)){
var new_path = cljs.core.vec.call(null,cljs.core.drop.call(null,len,frontier.core.path__GT_box.call(null,msg_name)));
return frontier.core.path__GT_unbox.call(null,new_path);
} else {
return null;
}
});
frontier.core.msg__GT_local_msg = (function msg__GT_local_msg(path,p__25918){
var vec__25920 = p__25918;
var msg_name = cljs.core.nth.call(null,vec__25920,(0),null);
var data = cljs.core.nth.call(null,vec__25920,(1),null);
var temp__4126__auto__ = frontier.core.msg_path__GT_local_msg_name.call(null,path,msg_name);
if(cljs.core.truth_(temp__4126__auto__)){
var local_msg_name = temp__4126__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [local_msg_name,data], null);
} else {
return null;
}
});
frontier.core.ns_input_filter = (function ns_input_filter(path,p__25921,f){
var vec__25923 = p__25921;
var msg_name = cljs.core.nth.call(null,vec__25923,(0),null);
var data = cljs.core.nth.call(null,vec__25923,(1),null);
var temp__4124__auto__ = frontier.core.msg__GT_local_msg.call(null,path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontier.core.path__GT_box.call(null,msg_name),data], null));
if(cljs.core.truth_(temp__4124__auto__)){
var local_msg = temp__4124__auto__;
return frontier.core.msg_prefix.call(null,path,f.call(null,local_msg));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_name,data], null);
}
});
frontier.core.move_effects_to_top_fix_ns = (function move_effects_to_top_fix_ns(path,state){
var path_SINGLEQUOTE_ = frontier.core.path__GT_box.call(null,path);
var state_SINGLEQUOTE_ = frontier.core.move_to_top.call(null,cljs.core.conj.call(null,path_SINGLEQUOTE_,new cljs.core.Keyword(null,"__effects","__effects",259141453)),state);
var temp__4124__auto__ = new cljs.core.Keyword(null,"__effects","__effects",259141453).cljs$core$IFn$_invoke$arity$1(state_SINGLEQUOTE_);
if(cljs.core.truth_(temp__4124__auto__)){
var effects = temp__4124__auto__;
return cljs.core.assoc.call(null,state_SINGLEQUOTE_,new cljs.core.Keyword(null,"__effects","__effects",259141453),cljs.core.map.call(null,cljs.core.partial.call(null,frontier.core.msg_prefix,path_SINGLEQUOTE_),effects));
} else {
return state_SINGLEQUOTE_;
}
});
frontier.core.ns_transform = (function ns_transform(path,msg,state,system){
var path__$1 = frontier.core.path__GT_box.call(null,path);
var temp__4124__auto__ = frontier.core.msg__GT_local_msg.call(null,path__$1,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var local_msg = temp__4124__auto__;
return frontier.core.move_effects_to_top_fix_ns.call(null,path__$1,cljs.core.update_in.call(null,state,path__$1,((function (local_msg,temp__4124__auto__,path__$1){
return (function (scoped_state){
return frontier.core._transform.call(null,system,local_msg,scoped_state);
});})(local_msg,temp__4124__auto__,path__$1))
));
} else {
return state;
}
});
frontier.core.ns_scoped_channel = (function ns_scoped_channel(path,channel){
return cljs.core.async.map_GT_.call(null,cljs.core.partial.call(null,frontier.core.msg_prefix,path),channel);
});

/**
* @constructor
* @param {*} path
* @param {*} system
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
frontier.core.Namespacer = (function (path,system,__meta,__extmap,__hash){
this.path = path;
this.system = system;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
frontier.core.Namespacer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4358__auto__,k__4359__auto__){
var self__ = this;
var this__4358__auto____$1 = this;
return cljs.core._lookup.call(null,this__4358__auto____$1,k__4359__auto__,null);
});

frontier.core.Namespacer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4360__auto__,k25925,else__4361__auto__){
var self__ = this;
var this__4360__auto____$1 = this;
var G__25927 = (((k25925 instanceof cljs.core.Keyword))?k25925.fqn:null);
switch (G__25927) {
case "system":
return self__.system;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25925,else__4361__auto__);

}
});

frontier.core.Namespacer.prototype.frontier$core$IWillAccept$ = true;

frontier.core.Namespacer.prototype.frontier$core$IWillAccept$_will_accept_QMARK_$arity$2 = (function (_,p__25928){
var self__ = this;
var vec__25929 = p__25928;
var msg_name = cljs.core.nth.call(null,vec__25929,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__25929,(1),null);
var ___$2 = this;
return frontier.core.msg_path__GT_local_msg_name.call(null,self__.path,msg_name);
});

frontier.core.Namespacer.prototype.frontier$core$IInputFilter$ = true;

frontier.core.Namespacer.prototype.frontier$core$IInputFilter$_filter_input$arity$3 = (function (_,msg,state){
var self__ = this;
var ___$1 = this;
return frontier.core.ns_input_filter.call(null,self__.path,msg,((function (___$1){
return (function (msg__$1){
return frontier.core._filter_input.call(null,self__.system,msg__$1,state);
});})(___$1))
);
});

frontier.core.Namespacer.prototype.frontier$core$IStop$ = true;

frontier.core.Namespacer.prototype.frontier$core$IStop$_stop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return frontier.core._stop.call(null,self__.system);
});

frontier.core.Namespacer.prototype.frontier$core$IInit$ = true;

frontier.core.Namespacer.prototype.frontier$core$IInit$_initialize$arity$3 = (function (o,state,event_chan){
var self__ = this;
var o__$1 = this;
return frontier.core._initialize.call(null,self__.system,state,event_chan);
});

frontier.core.Namespacer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4372__auto__,writer__4373__auto__,opts__4374__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
var pr_pair__4375__auto__ = ((function (this__4372__auto____$1){
return (function (keyval__4376__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4373__auto__,cljs.core.pr_writer,""," ","",opts__4374__auto__,keyval__4376__auto__);
});})(this__4372__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4373__auto__,pr_pair__4375__auto__,"#frontier.core.Namespacer{",", ","}",opts__4374__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"system","system",-29381724),self__.system],null))], null),self__.__extmap));
});

frontier.core.Namespacer.prototype.frontier$core$IDerive$ = true;

frontier.core.Namespacer.prototype.frontier$core$IDerive$_derive$arity$2 = (function (o,state){
var self__ = this;
var o__$1 = this;
return cljs.core.update_in.call(null,state,frontier.core.path__GT_box.call(null,self__.path),((function (o__$1){
return (function (st){
return frontier.core._derive.call(null,self__.system,st);
});})(o__$1))
);
});

frontier.core.Namespacer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4356__auto__){
var self__ = this;
var this__4356__auto____$1 = this;
return self__.__meta;
});

frontier.core.Namespacer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4352__auto__){
var self__ = this;
var this__4352__auto____$1 = this;
return (new frontier.core.Namespacer(self__.path,self__.system,self__.__meta,self__.__extmap,self__.__hash));
});

frontier.core.Namespacer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4362__auto__){
var self__ = this;
var this__4362__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

frontier.core.Namespacer.prototype.frontier$core$ITransform$ = true;

frontier.core.Namespacer.prototype.frontier$core$ITransform$_transform$arity$3 = (function (o,msg,state){
var self__ = this;
var o__$1 = this;
return frontier.core.ns_transform.call(null,frontier.core.path__GT_box.call(null,self__.path),msg,state,self__.system);
});

frontier.core.Namespacer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4353__auto__){
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

frontier.core.Namespacer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4354__auto__,other__4355__auto__){
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

frontier.core.Namespacer.prototype.frontier$core$IEffect$ = true;

frontier.core.Namespacer.prototype.frontier$core$IEffect$_effect$arity$5 = (function (o,msg,state,event_chan,effect_chan){
var self__ = this;
var o__$1 = this;
var temp__4126__auto__ = frontier.core.msg__GT_local_msg.call(null,self__.path,msg);
if(cljs.core.truth_(temp__4126__auto__)){
var local_msg = temp__4126__auto__;
var local_event_chan = frontier.core.ns_scoped_channel.call(null,frontier.core.path__GT_box.call(null,self__.path),event_chan);
var local_effect_chan = frontier.core.ns_scoped_channel.call(null,frontier.core.path__GT_box.call(null,self__.path),effect_chan);
return frontier.core._effect.call(null,self__.system,local_msg,cljs.core.get_in.call(null,state,frontier.core.path__GT_box.call(null,self__.path)),local_event_chan,local_effect_chan);
} else {
return null;
}
});

frontier.core.Namespacer.prototype.frontier$core$IRender$ = true;

frontier.core.Namespacer.prototype.frontier$core$IRender$_render$arity$2 = (function (_,rstate){
var self__ = this;
var ___$1 = this;
return frontier.core._render.call(null,self__.system,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.get_in.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(rstate),frontier.core.path__GT_box.call(null,self__.path)),new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),frontier.core.ns_scoped_channel.call(null,self__.path,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912).cljs$core$IFn$_invoke$arity$1(rstate))], null));
});

frontier.core.Namespacer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4367__auto__,k__4368__auto__){
var self__ = this;
var this__4367__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"system","system",-29381724),null], null), null),k__4368__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4367__auto____$1),self__.__meta),k__4368__auto__);
} else {
return (new frontier.core.Namespacer(self__.path,self__.system,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4368__auto__)),null));
}
});

frontier.core.Namespacer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4365__auto__,k__4366__auto__,G__25924){
var self__ = this;
var this__4365__auto____$1 = this;
var pred__25930 = cljs.core.keyword_identical_QMARK_;
var expr__25931 = k__4366__auto__;
if(cljs.core.truth_(pred__25930.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__25931))){
return (new frontier.core.Namespacer(G__25924,self__.system,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25930.call(null,new cljs.core.Keyword(null,"system","system",-29381724),expr__25931))){
return (new frontier.core.Namespacer(self__.path,G__25924,self__.__meta,self__.__extmap,null));
} else {
return (new frontier.core.Namespacer(self__.path,self__.system,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4366__auto__,G__25924),null));
}
}
});

frontier.core.Namespacer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"system","system",-29381724),self__.system],null))], null),self__.__extmap));
});

frontier.core.Namespacer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4357__auto__,G__25924){
var self__ = this;
var this__4357__auto____$1 = this;
return (new frontier.core.Namespacer(self__.path,self__.system,G__25924,self__.__extmap,self__.__hash));
});

frontier.core.Namespacer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4363__auto__,entry__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4364__auto__)){
return cljs.core._assoc.call(null,this__4363__auto____$1,cljs.core._nth.call(null,entry__4364__auto__,(0)),cljs.core._nth.call(null,entry__4364__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4363__auto____$1,entry__4364__auto__);
}
});

frontier.core.Namespacer.cljs$lang$type = true;

frontier.core.Namespacer.cljs$lang$ctorPrSeq = (function (this__4392__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"frontier.core/Namespacer");
});

frontier.core.Namespacer.cljs$lang$ctorPrWriter = (function (this__4392__auto__,writer__4393__auto__){
return cljs.core._write.call(null,writer__4393__auto__,"frontier.core/Namespacer");
});

frontier.core.__GT_Namespacer = (function __GT_Namespacer(path,system){
return (new frontier.core.Namespacer(path,system,null,null,null));
});

frontier.core.map__GT_Namespacer = (function map__GT_Namespacer(G__25926){
return (new frontier.core.Namespacer(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__25926),new cljs.core.Keyword(null,"system","system",-29381724).cljs$core$IFn$_invoke$arity$1(G__25926),null,cljs.core.dissoc.call(null,G__25926,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"system","system",-29381724)),null));
});

frontier.core.history_keeper_transform = (function history_keeper_transform(p__25934,msg,state){
var map__25936 = p__25934;
var map__25936__$1 = ((cljs.core.seq_QMARK_.call(null,map__25936))?cljs.core.apply.call(null,cljs.core.hash_map,map__25936):map__25936);
var initial_state = cljs.core.get.call(null,map__25936__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806));
var system = cljs.core.get.call(null,map__25936__$1,new cljs.core.Keyword(null,"system","system",-29381724));
return cljs.core.assoc.call(null,frontier.core._transform.call(null,system,msg,frontier.core.state_from_msg_list.call(null,system,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(state),initial_state)),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj.call(null,cljs.core.vec.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(state)),msg),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),initial_state);
});

/**
* @constructor
* @param {*} system
* @param {*} initial_state
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
frontier.core.HistoryKeeper = (function (system,initial_state,__meta,__extmap,__hash){
this.system = system;
this.initial_state = initial_state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
frontier.core.HistoryKeeper.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4358__auto__,k__4359__auto__){
var self__ = this;
var this__4358__auto____$1 = this;
return cljs.core._lookup.call(null,this__4358__auto____$1,k__4359__auto__,null);
});

frontier.core.HistoryKeeper.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4360__auto__,k25938,else__4361__auto__){
var self__ = this;
var this__4360__auto____$1 = this;
var G__25940 = (((k25938 instanceof cljs.core.Keyword))?k25938.fqn:null);
switch (G__25940) {
case "initial-state":
return self__.initial_state;

break;
case "system":
return self__.system;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25938,else__4361__auto__);

}
});

frontier.core.HistoryKeeper.prototype.frontier$core$IInputFilter$ = true;

frontier.core.HistoryKeeper.prototype.frontier$core$IInputFilter$_filter_input$arity$3 = (function (_,msg,state){
var self__ = this;
var ___$1 = this;
return frontier.core._filter_input.call(null,self__.system,msg,state);
});

frontier.core.HistoryKeeper.prototype.frontier$core$IStop$ = true;

frontier.core.HistoryKeeper.prototype.frontier$core$IStop$_stop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return frontier.core._stop.call(null,self__.system);
});

frontier.core.HistoryKeeper.prototype.frontier$core$IInit$ = true;

frontier.core.HistoryKeeper.prototype.frontier$core$IInit$_initialize$arity$3 = (function (o,state,event_chan){
var self__ = this;
var o__$1 = this;
return frontier.core._initialize.call(null,self__.system,state,event_chan);
});

frontier.core.HistoryKeeper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4372__auto__,writer__4373__auto__,opts__4374__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
var pr_pair__4375__auto__ = ((function (this__4372__auto____$1){
return (function (keyval__4376__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4373__auto__,cljs.core.pr_writer,""," ","",opts__4374__auto__,keyval__4376__auto__);
});})(this__4372__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4373__auto__,pr_pair__4375__auto__,"#frontier.core.HistoryKeeper{",", ","}",opts__4374__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"system","system",-29381724),self__.system],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),self__.initial_state],null))], null),self__.__extmap));
});

frontier.core.HistoryKeeper.prototype.frontier$core$IDerive$ = true;

frontier.core.HistoryKeeper.prototype.frontier$core$IDerive$_derive$arity$2 = (function (o,state){
var self__ = this;
var o__$1 = this;
return frontier.core._derive.call(null,self__.system,state);
});

frontier.core.HistoryKeeper.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4356__auto__){
var self__ = this;
var this__4356__auto____$1 = this;
return self__.__meta;
});

frontier.core.HistoryKeeper.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4352__auto__){
var self__ = this;
var this__4352__auto____$1 = this;
return (new frontier.core.HistoryKeeper(self__.system,self__.initial_state,self__.__meta,self__.__extmap,self__.__hash));
});

frontier.core.HistoryKeeper.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4362__auto__){
var self__ = this;
var this__4362__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

frontier.core.HistoryKeeper.prototype.frontier$core$ITransform$ = true;

frontier.core.HistoryKeeper.prototype.frontier$core$ITransform$_transform$arity$3 = (function (o,msg,state){
var self__ = this;
var o__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"set-history","set-history",-2015424646),cljs.core.first.call(null,msg))){
return cljs.core.assoc_in.call(null,state,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.second.call(null,msg));
} else {
if((function (){var G__25941 = self__.system;
if(G__25941){
var bit__4436__auto__ = null;
if(cljs.core.truth_((function (){var or__3755__auto__ = bit__4436__auto__;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return G__25941.frontier$core$IWillAccept$;
}
})())){
return true;
} else {
if((!G__25941.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.IWillAccept,G__25941);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,frontier.core.IWillAccept,G__25941);
}
})()){
if(cljs.core.truth_(frontier.core._will_accept_QMARK_.call(null,self__.system,msg))){
return frontier.core.history_keeper_transform.call(null,o__$1,msg,state);
} else {
return state;
}
} else {
return frontier.core.history_keeper_transform.call(null,o__$1,msg,state);
}
}
});

frontier.core.HistoryKeeper.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4353__auto__){
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

frontier.core.HistoryKeeper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4354__auto__,other__4355__auto__){
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

frontier.core.HistoryKeeper.prototype.frontier$core$IEffect$ = true;

frontier.core.HistoryKeeper.prototype.frontier$core$IEffect$_effect$arity$5 = (function (o,msg,state,event_chan,effect_chan){
var self__ = this;
var o__$1 = this;
return frontier.core._effect.call(null,self__.system,msg,state,event_chan,effect_chan);
});

frontier.core.HistoryKeeper.prototype.frontier$core$IRender$ = true;

frontier.core.HistoryKeeper.prototype.frontier$core$IRender$_render$arity$2 = (function (_,rstate){
var self__ = this;
var ___$1 = this;
return frontier.core._render.call(null,self__.system,rstate);
});

frontier.core.HistoryKeeper.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4367__auto__,k__4368__auto__){
var self__ = this;
var this__4367__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"system","system",-29381724),null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),null], null), null),k__4368__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4367__auto____$1),self__.__meta),k__4368__auto__);
} else {
return (new frontier.core.HistoryKeeper(self__.system,self__.initial_state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4368__auto__)),null));
}
});

frontier.core.HistoryKeeper.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4365__auto__,k__4366__auto__,G__25937){
var self__ = this;
var this__4365__auto____$1 = this;
var pred__25942 = cljs.core.keyword_identical_QMARK_;
var expr__25943 = k__4366__auto__;
if(cljs.core.truth_(pred__25942.call(null,new cljs.core.Keyword(null,"system","system",-29381724),expr__25943))){
return (new frontier.core.HistoryKeeper(G__25937,self__.initial_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25942.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),expr__25943))){
return (new frontier.core.HistoryKeeper(self__.system,G__25937,self__.__meta,self__.__extmap,null));
} else {
return (new frontier.core.HistoryKeeper(self__.system,self__.initial_state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4366__auto__,G__25937),null));
}
}
});

frontier.core.HistoryKeeper.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"system","system",-29381724),self__.system],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),self__.initial_state],null))], null),self__.__extmap));
});

frontier.core.HistoryKeeper.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4357__auto__,G__25937){
var self__ = this;
var this__4357__auto____$1 = this;
return (new frontier.core.HistoryKeeper(self__.system,self__.initial_state,G__25937,self__.__extmap,self__.__hash));
});

frontier.core.HistoryKeeper.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4363__auto__,entry__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4364__auto__)){
return cljs.core._assoc.call(null,this__4363__auto____$1,cljs.core._nth.call(null,entry__4364__auto__,(0)),cljs.core._nth.call(null,entry__4364__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4363__auto____$1,entry__4364__auto__);
}
});

frontier.core.HistoryKeeper.cljs$lang$type = true;

frontier.core.HistoryKeeper.cljs$lang$ctorPrSeq = (function (this__4392__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"frontier.core/HistoryKeeper");
});

frontier.core.HistoryKeeper.cljs$lang$ctorPrWriter = (function (this__4392__auto__,writer__4393__auto__){
return cljs.core._write.call(null,writer__4393__auto__,"frontier.core/HistoryKeeper");
});

frontier.core.__GT_HistoryKeeper = (function __GT_HistoryKeeper(system,initial_state){
return (new frontier.core.HistoryKeeper(system,initial_state,null,null,null));
});

frontier.core.map__GT_HistoryKeeper = (function map__GT_HistoryKeeper(G__25939){
return (new frontier.core.HistoryKeeper(new cljs.core.Keyword(null,"system","system",-29381724).cljs$core$IFn$_invoke$arity$1(G__25939),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806).cljs$core$IFn$_invoke$arity$1(G__25939),null,cljs.core.dissoc.call(null,G__25939,new cljs.core.Keyword(null,"system","system",-29381724),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806)),null));
});


/**
* @constructor
* @param {*} component
* @param {*} initial_state
* @param {*} state_atom
* @param {*} event_chan
* @param {*} effect_chan
* @param {*} running
* @param {*} state_callback
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
frontier.core.RunnableSystem = (function (component,initial_state,state_atom,event_chan,effect_chan,running,state_callback,__meta,__extmap,__hash){
this.component = component;
this.initial_state = initial_state;
this.state_atom = state_atom;
this.event_chan = event_chan;
this.effect_chan = effect_chan;
this.running = running;
this.state_callback = state_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
frontier.core.RunnableSystem.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4358__auto__,k__4359__auto__){
var self__ = this;
var this__4358__auto____$1 = this;
return cljs.core._lookup.call(null,this__4358__auto____$1,k__4359__auto__,null);
});

frontier.core.RunnableSystem.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4360__auto__,k25947,else__4361__auto__){
var self__ = this;
var this__4360__auto____$1 = this;
var G__25949 = (((k25947 instanceof cljs.core.Keyword))?k25947.fqn:null);
switch (G__25949) {
case "state-callback":
return self__.state_callback;

break;
case "running":
return self__.running;

break;
case "effect-chan":
return self__.effect_chan;

break;
case "event-chan":
return self__.event_chan;

break;
case "state-atom":
return self__.state_atom;

break;
case "initial-state":
return self__.initial_state;

break;
case "component":
return self__.component;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25947,else__4361__auto__);

}
});

frontier.core.RunnableSystem.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4372__auto__,writer__4373__auto__,opts__4374__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
var pr_pair__4375__auto__ = ((function (this__4372__auto____$1){
return (function (keyval__4376__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4373__auto__,cljs.core.pr_writer,""," ","",opts__4374__auto__,keyval__4376__auto__);
});})(this__4372__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4373__auto__,pr_pair__4375__auto__,"#frontier.core.RunnableSystem{",", ","}",opts__4374__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component","component",1555936782),self__.component],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),self__.state_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),self__.event_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"effect-chan","effect-chan",1829890109),self__.effect_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"running","running",1554969103),self__.running],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state-callback","state-callback",-1311788585),self__.state_callback],null))], null),self__.__extmap));
});

frontier.core.RunnableSystem.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4356__auto__){
var self__ = this;
var this__4356__auto____$1 = this;
return self__.__meta;
});

frontier.core.RunnableSystem.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4352__auto__){
var self__ = this;
var this__4352__auto____$1 = this;
return (new frontier.core.RunnableSystem(self__.component,self__.initial_state,self__.state_atom,self__.event_chan,self__.effect_chan,self__.running,self__.state_callback,self__.__meta,self__.__extmap,self__.__hash));
});

frontier.core.RunnableSystem.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4362__auto__){
var self__ = this;
var this__4362__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

frontier.core.RunnableSystem.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4353__auto__){
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

frontier.core.RunnableSystem.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4354__auto__,other__4355__auto__){
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

frontier.core.RunnableSystem.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4367__auto__,k__4368__auto__){
var self__ = this;
var this__4367__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),null,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),null,new cljs.core.Keyword(null,"component","component",1555936782),null,new cljs.core.Keyword(null,"running","running",1554969103),null,new cljs.core.Keyword(null,"state-callback","state-callback",-1311788585),null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),null,new cljs.core.Keyword(null,"effect-chan","effect-chan",1829890109),null], null), null),k__4368__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4367__auto____$1),self__.__meta),k__4368__auto__);
} else {
return (new frontier.core.RunnableSystem(self__.component,self__.initial_state,self__.state_atom,self__.event_chan,self__.effect_chan,self__.running,self__.state_callback,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4368__auto__)),null));
}
});

frontier.core.RunnableSystem.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4365__auto__,k__4366__auto__,G__25946){
var self__ = this;
var this__4365__auto____$1 = this;
var pred__25950 = cljs.core.keyword_identical_QMARK_;
var expr__25951 = k__4366__auto__;
if(cljs.core.truth_(pred__25950.call(null,new cljs.core.Keyword(null,"component","component",1555936782),expr__25951))){
return (new frontier.core.RunnableSystem(G__25946,self__.initial_state,self__.state_atom,self__.event_chan,self__.effect_chan,self__.running,self__.state_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25950.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),expr__25951))){
return (new frontier.core.RunnableSystem(self__.component,G__25946,self__.state_atom,self__.event_chan,self__.effect_chan,self__.running,self__.state_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25950.call(null,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),expr__25951))){
return (new frontier.core.RunnableSystem(self__.component,self__.initial_state,G__25946,self__.event_chan,self__.effect_chan,self__.running,self__.state_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25950.call(null,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),expr__25951))){
return (new frontier.core.RunnableSystem(self__.component,self__.initial_state,self__.state_atom,G__25946,self__.effect_chan,self__.running,self__.state_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25950.call(null,new cljs.core.Keyword(null,"effect-chan","effect-chan",1829890109),expr__25951))){
return (new frontier.core.RunnableSystem(self__.component,self__.initial_state,self__.state_atom,self__.event_chan,G__25946,self__.running,self__.state_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25950.call(null,new cljs.core.Keyword(null,"running","running",1554969103),expr__25951))){
return (new frontier.core.RunnableSystem(self__.component,self__.initial_state,self__.state_atom,self__.event_chan,self__.effect_chan,G__25946,self__.state_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25950.call(null,new cljs.core.Keyword(null,"state-callback","state-callback",-1311788585),expr__25951))){
return (new frontier.core.RunnableSystem(self__.component,self__.initial_state,self__.state_atom,self__.event_chan,self__.effect_chan,self__.running,G__25946,self__.__meta,self__.__extmap,null));
} else {
return (new frontier.core.RunnableSystem(self__.component,self__.initial_state,self__.state_atom,self__.event_chan,self__.effect_chan,self__.running,self__.state_callback,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4366__auto__,G__25946),null));
}
}
}
}
}
}
}
});

frontier.core.RunnableSystem.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component","component",1555936782),self__.component],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),self__.state_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),self__.event_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"effect-chan","effect-chan",1829890109),self__.effect_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"running","running",1554969103),self__.running],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state-callback","state-callback",-1311788585),self__.state_callback],null))], null),self__.__extmap));
});

frontier.core.RunnableSystem.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4357__auto__,G__25946){
var self__ = this;
var this__4357__auto____$1 = this;
return (new frontier.core.RunnableSystem(self__.component,self__.initial_state,self__.state_atom,self__.event_chan,self__.effect_chan,self__.running,self__.state_callback,G__25946,self__.__extmap,self__.__hash));
});

frontier.core.RunnableSystem.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4363__auto__,entry__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4364__auto__)){
return cljs.core._assoc.call(null,this__4363__auto____$1,cljs.core._nth.call(null,entry__4364__auto__,(0)),cljs.core._nth.call(null,entry__4364__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4363__auto____$1,entry__4364__auto__);
}
});

frontier.core.RunnableSystem.cljs$lang$type = true;

frontier.core.RunnableSystem.cljs$lang$ctorPrSeq = (function (this__4392__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"frontier.core/RunnableSystem");
});

frontier.core.RunnableSystem.cljs$lang$ctorPrWriter = (function (this__4392__auto__,writer__4393__auto__){
return cljs.core._write.call(null,writer__4393__auto__,"frontier.core/RunnableSystem");
});

frontier.core.__GT_RunnableSystem = (function __GT_RunnableSystem(component,initial_state,state_atom,event_chan,effect_chan,running,state_callback){
return (new frontier.core.RunnableSystem(component,initial_state,state_atom,event_chan,effect_chan,running,state_callback,null,null,null));
});

frontier.core.map__GT_RunnableSystem = (function map__GT_RunnableSystem(G__25948){
return (new frontier.core.RunnableSystem(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(G__25948),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806).cljs$core$IFn$_invoke$arity$1(G__25948),new cljs.core.Keyword(null,"state-atom","state-atom",1303809857).cljs$core$IFn$_invoke$arity$1(G__25948),new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912).cljs$core$IFn$_invoke$arity$1(G__25948),new cljs.core.Keyword(null,"effect-chan","effect-chan",1829890109).cljs$core$IFn$_invoke$arity$1(G__25948),new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(G__25948),new cljs.core.Keyword(null,"state-callback","state-callback",-1311788585).cljs$core$IFn$_invoke$arity$1(G__25948),null,cljs.core.dissoc.call(null,G__25948,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),new cljs.core.Keyword(null,"effect-chan","effect-chan",1829890109),new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"state-callback","state-callback",-1311788585)),null));
});

frontier.core.message_transform = (function message_transform(runnable,state,msg){
return frontier.core.transform_with_effects.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(runnable),new cljs.core.Keyword(null,"effect-chan","effect-chan",1829890109).cljs$core$IFn$_invoke$arity$1(runnable),state,msg);
});
frontier.core.make_runnable = (function make_runnable(component,initial_state){
return frontier.core.map__GT_RunnableSystem.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),initial_state], null));
});
frontier.core.initialize = (function initialize(p__25954){
var map__25956 = p__25954;
var map__25956__$1 = ((cljs.core.seq_QMARK_.call(null,map__25956))?cljs.core.apply.call(null,cljs.core.hash_map,map__25956):map__25956);
var r = map__25956__$1;
var event_chan = cljs.core.get.call(null,map__25956__$1,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912));
var effect_chan = cljs.core.get.call(null,map__25956__$1,new cljs.core.Keyword(null,"effect-chan","effect-chan",1829890109));
var component = cljs.core.get.call(null,map__25956__$1,new cljs.core.Keyword(null,"component","component",1555936782));
frontier.core._initialize.call(null,component,effect_chan,event_chan);

return r;
});
frontier.core.listen_for_effects = (function listen_for_effects(p__25957){
var map__25959 = p__25957;
var map__25959__$1 = ((cljs.core.seq_QMARK_.call(null,map__25959))?cljs.core.apply.call(null,cljs.core.hash_map,map__25959):map__25959);
var r = map__25959__$1;
var effect_chan = cljs.core.get.call(null,map__25959__$1,new cljs.core.Keyword(null,"effect-chan","effect-chan",1829890109));
var event_chan = cljs.core.get.call(null,map__25959__$1,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912));
var state_atom = cljs.core.get.call(null,map__25959__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var component = cljs.core.get.call(null,map__25959__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var effect_chan__$1 = (function (){var or__3755__auto__ = effect_chan;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})();
var event_chan__$1 = (function (){var or__3755__auto__ = event_chan;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})();
frontier.core.dev_null.call(null,cljs.core.async.map_LT_.call(null,((function (effect_chan__$1,event_chan__$1,map__25959,map__25959__$1,r,effect_chan,event_chan,state_atom,component){
return (function (msg){
frontier.core._effect.call(null,component,msg,cljs.core.deref.call(null,state_atom),event_chan__$1,effect_chan__$1);

return true;
});})(effect_chan__$1,event_chan__$1,map__25959,map__25959__$1,r,effect_chan,event_chan,state_atom,component))
,effect_chan__$1));

return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"effect-chan","effect-chan",1829890109),effect_chan__$1,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),event_chan__$1);
});
frontier.core.listen_for_messages = (function listen_for_messages(p__25960){
var map__25962 = p__25960;
var map__25962__$1 = ((cljs.core.seq_QMARK_.call(null,map__25962))?cljs.core.apply.call(null,cljs.core.hash_map,map__25962):map__25962);
var r = map__25962__$1;
var effect_chan = cljs.core.get.call(null,map__25962__$1,new cljs.core.Keyword(null,"effect-chan","effect-chan",1829890109));
var event_chan = cljs.core.get.call(null,map__25962__$1,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912));
var state_atom = cljs.core.get.call(null,map__25962__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var component = cljs.core.get.call(null,map__25962__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var event_chan__$1 = (function (){var or__3755__auto__ = event_chan;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})();
var effect_chan__$1 = (function (){var or__3755__auto__ = effect_chan;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})();
frontier.core.dev_null.call(null,cljs.core.async.map_LT_.call(null,((function (event_chan__$1,effect_chan__$1,map__25962,map__25962__$1,r,effect_chan,event_chan,state_atom,component){
return (function (msg){
var new_msg = frontier.core._filter_input.call(null,component,msg,cljs.core.deref.call(null,state_atom));
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.partial.call(null,frontier.core.message_transform,r),new_msg);
});})(event_chan__$1,effect_chan__$1,map__25962,map__25962__$1,r,effect_chan,event_chan,state_atom,component))
,event_chan__$1));

return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"effect-chan","effect-chan",1829890109),effect_chan__$1,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),event_chan__$1);
});
frontier.core.install_initial_state = (function install_initial_state(p__25963){
var map__25965 = p__25963;
var map__25965__$1 = ((cljs.core.seq_QMARK_.call(null,map__25965))?cljs.core.apply.call(null,cljs.core.hash_map,map__25965):map__25965);
var r = map__25965__$1;
var state_atom = cljs.core.get.call(null,map__25965__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var initial_state = cljs.core.get.call(null,map__25965__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806));
if((state_atom == null)){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),cljs.core.atom.call(null,initial_state));
} else {
if((cljs.core.deref.call(null,state_atom) == null)){
cljs.core.reset_BANG_.call(null,state_atom,initial_state);

return r;
} else {
return r;
}
}
});
frontier.core.hook_up_state_callback = (function hook_up_state_callback(p__25966){
var map__25968 = p__25966;
var map__25968__$1 = ((cljs.core.seq_QMARK_.call(null,map__25968))?cljs.core.apply.call(null,cljs.core.hash_map,map__25968):map__25968);
var r = map__25968__$1;
var event_chan = cljs.core.get.call(null,map__25968__$1,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912));
var component = cljs.core.get.call(null,map__25968__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var state_atom = cljs.core.get.call(null,map__25968__$1,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857));
var state_callback = cljs.core.get.call(null,map__25968__$1,new cljs.core.Keyword(null,"state-callback","state-callback",-1311788585));
if(cljs.core.truth_(state_callback)){
cljs.core.add_watch.call(null,state_atom,new cljs.core.Keyword(null,"state-callback","state-callback",-1311788585),((function (map__25968,map__25968__$1,r,event_chan,component,state_atom,state_callback){
return (function (_,___$1,o,n){
return state_callback.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),frontier.core._derive.call(null,component,n),new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),event_chan], null));
});})(map__25968,map__25968__$1,r,event_chan,component,state_atom,state_callback))
);
} else {
}

return r;
});
frontier.core.runner_start = (function runner_start(runnable){
return cljs.core.assoc.call(null,frontier.core.initialize.call(null,frontier.core.hook_up_state_callback.call(null,frontier.core.listen_for_messages.call(null,frontier.core.listen_for_effects.call(null,frontier.core.install_initial_state.call(null,runnable))))),new cljs.core.Keyword(null,"running","running",1554969103),true);
});
frontier.core.runner_stop = (function runner_stop(runnable){
if(cljs.core.truth_(new cljs.core.Keyword(null,"state-atom","state-atom",1303809857).cljs$core$IFn$_invoke$arity$1(runnable))){
cljs.core.remove_watch.call(null,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857).cljs$core$IFn$_invoke$arity$1(runnable),new cljs.core.Keyword(null,"state-callback","state-callback",-1311788585));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912).cljs$core$IFn$_invoke$arity$1(runnable))){
cljs.core.async.close_BANG_.call(null,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912).cljs$core$IFn$_invoke$arity$1(runnable));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"effect-chan","effect-chan",1829890109).cljs$core$IFn$_invoke$arity$1(runnable))){
cljs.core.async.close_BANG_.call(null,new cljs.core.Keyword(null,"effect-chan","effect-chan",1829890109).cljs$core$IFn$_invoke$arity$1(runnable));
} else {
}

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,runnable,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),null),new cljs.core.Keyword(null,"effect-chan","effect-chan",1829890109),null),new cljs.core.Keyword(null,"running","running",1554969103),null);
});
frontier.core.run = (function run(initial_state,component,state_callback){
return frontier.core.runner_start.call(null,cljs.core.assoc.call(null,frontier.core.make_runnable.call(null,component,initial_state),new cljs.core.Keyword(null,"state-callback","state-callback",-1311788585),state_callback));
});
frontier.core.run_with_atom = (function run_with_atom(state_atom,initial_state,component,state_callback){
return frontier.core.runner_start.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,frontier.core.make_runnable.call(null,component,initial_state),new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),state_atom),new cljs.core.Keyword(null,"state-callback","state-callback",-1311788585),state_callback));
});

//# sourceMappingURL=core.js.map