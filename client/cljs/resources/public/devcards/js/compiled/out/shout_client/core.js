// Compiled by ClojureScript 0.0-2725 {}
goog.provide('shout_client.core');
goog.require('cljs.core');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('sablono.core');
shout_client.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);

var ufv___26529 = schema.utils.use_fn_validation;
var output_schema26513_26530 = schema.core.Any;
var input_schema26514_26531 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker26515_26532 = schema.core.checker.call(null,input_schema26514_26531);
var output_checker26516_26533 = schema.core.checker.call(null,output_schema26513_26530);
/**
* Inputs: [data owner]
*/
shout_client.core.connect_page = ((function (ufv___26529,output_schema26513_26530,input_schema26514_26531,input_checker26515_26532,output_checker26516_26533){
return (function connect_page(G__26517,G__26518){
var validate__22447__auto__ = ufv___26529.get_cell();
if(cljs.core.truth_(validate__22447__auto__)){
var args__22448__auto___26534 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26517,G__26518], null);
var temp__4126__auto___26535 = input_checker26515_26532.call(null,args__22448__auto___26534);
if(cljs.core.truth_(temp__4126__auto___26535)){
var error__22449__auto___26536 = temp__4126__auto___26535;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"connect-page","connect-page",-434177238,null),cljs.core.pr_str.call(null,error__22449__auto___26536)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__22449__auto___26536,new cljs.core.Keyword(null,"value","value",305978217),args__22448__auto___26534,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26514_26531,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__22450__auto__ = (function (){var data = G__26517;
var owner = G__26518;
while(true){
if(typeof shout_client.core.t26524 !== 'undefined'){
} else {

/**
* @constructor
*/
shout_client.core.t26524 = (function (G__26517,owner,output_schema26513,data,input_schema26514,connect_page,G__26518,validate__22447__auto__,output_checker26516,ufv__,input_checker26515,meta26525){
this.G__26517 = G__26517;
this.owner = owner;
this.output_schema26513 = output_schema26513;
this.data = data;
this.input_schema26514 = input_schema26514;
this.connect_page = connect_page;
this.G__26518 = G__26518;
this.validate__22447__auto__ = validate__22447__auto__;
this.output_checker26516 = output_checker26516;
this.ufv__ = ufv__;
this.input_checker26515 = input_checker26515;
this.meta26525 = meta26525;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shout_client.core.t26524.prototype.om$core$IDisplayName$ = true;

shout_client.core.t26524.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__22447__auto__,ufv___26529,output_schema26513_26530,input_schema26514_26531,input_checker26515_26532,output_checker26516_26533){
return (function (_){
var self__ = this;
var ___$1 = this;
return "connect-page";
});})(validate__22447__auto__,ufv___26529,output_schema26513_26530,input_schema26514_26531,input_checker26515_26532,output_checker26516_26533))
;

shout_client.core.t26524.prototype.om$core$IRender$ = true;

shout_client.core.t26524.prototype.om$core$IRender$render$arity$1 = ((function (validate__22447__auto__,ufv___26529,output_schema26513_26530,input_schema26514_26531,input_checker26515_26532,output_checker26516_26533){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "window", "id": "connect"},React.DOM.div({"className": "header"},React.DOM.button({"className": "lt"})));
});})(validate__22447__auto__,ufv___26529,output_schema26513_26530,input_schema26514_26531,input_checker26515_26532,output_checker26516_26533))
;

shout_client.core.t26524.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__22447__auto__,ufv___26529,output_schema26513_26530,input_schema26514_26531,input_checker26515_26532,output_checker26516_26533){
return (function (_26526){
var self__ = this;
var _26526__$1 = this;
return self__.meta26525;
});})(validate__22447__auto__,ufv___26529,output_schema26513_26530,input_schema26514_26531,input_checker26515_26532,output_checker26516_26533))
;

shout_client.core.t26524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__22447__auto__,ufv___26529,output_schema26513_26530,input_schema26514_26531,input_checker26515_26532,output_checker26516_26533){
return (function (_26526,meta26525__$1){
var self__ = this;
var _26526__$1 = this;
return (new shout_client.core.t26524(self__.G__26517,self__.owner,self__.output_schema26513,self__.data,self__.input_schema26514,self__.connect_page,self__.G__26518,self__.validate__22447__auto__,self__.output_checker26516,self__.ufv__,self__.input_checker26515,meta26525__$1));
});})(validate__22447__auto__,ufv___26529,output_schema26513_26530,input_schema26514_26531,input_checker26515_26532,output_checker26516_26533))
;

shout_client.core.t26524.cljs$lang$type = true;

shout_client.core.t26524.cljs$lang$ctorStr = "shout-client.core/t26524";

shout_client.core.t26524.cljs$lang$ctorPrWriter = ((function (validate__22447__auto__,ufv___26529,output_schema26513_26530,input_schema26514_26531,input_checker26515_26532,output_checker26516_26533){
return (function (this__12197__auto__,writer__12198__auto__,opt__12199__auto__){
return cljs.core._write.call(null,writer__12198__auto__,"shout-client.core/t26524");
});})(validate__22447__auto__,ufv___26529,output_schema26513_26530,input_schema26514_26531,input_checker26515_26532,output_checker26516_26533))
;

shout_client.core.__GT_t26524 = ((function (validate__22447__auto__,ufv___26529,output_schema26513_26530,input_schema26514_26531,input_checker26515_26532,output_checker26516_26533){
return (function __GT_t26524(G__26517__$1,owner__$1,output_schema26513__$1,data__$1,input_schema26514__$1,connect_page__$1,G__26518__$1,validate__22447__auto____$1,output_checker26516__$1,ufv____$1,input_checker26515__$1,meta26525){
return (new shout_client.core.t26524(G__26517__$1,owner__$1,output_schema26513__$1,data__$1,input_schema26514__$1,connect_page__$1,G__26518__$1,validate__22447__auto____$1,output_checker26516__$1,ufv____$1,input_checker26515__$1,meta26525));
});})(validate__22447__auto__,ufv___26529,output_schema26513_26530,input_schema26514_26531,input_checker26515_26532,output_checker26516_26533))
;

}

return (new shout_client.core.t26524(G__26517,owner,output_schema26513_26530,data,input_schema26514_26531,connect_page,G__26518,validate__22447__auto__,output_checker26516_26533,ufv___26529,input_checker26515_26532,null));
break;
}
})();
if(cljs.core.truth_(validate__22447__auto__)){
var temp__4126__auto___26537 = output_checker26516_26533.call(null,o__22450__auto__);
if(cljs.core.truth_(temp__4126__auto___26537)){
var error__22449__auto___26538 = temp__4126__auto___26537;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"connect-page","connect-page",-434177238,null),cljs.core.pr_str.call(null,error__22449__auto___26538)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__22449__auto___26538,new cljs.core.Keyword(null,"value","value",305978217),o__22450__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26513_26530,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__22450__auto__;
});})(ufv___26529,output_schema26513_26530,input_schema26514_26531,input_checker26515_26532,output_checker26516_26533))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shout_client.core.connect_page),schema.core.make_fn_schema.call(null,output_schema26513_26530,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26514_26531], null)));

shout_client.core.__GT_connect_page = (function() {
var __GT_connect_page = null;
var __GT_connect_page__1 = (function (cursor__24770__auto__){
return om.core.build.call(null,shout_client.core.connect_page,cursor__24770__auto__);
});
var __GT_connect_page__2 = (function (cursor__24770__auto__,m26512){
return om.core.build.call(null,shout_client.core.connect_page,cursor__24770__auto__,m26512);
});
__GT_connect_page = function(cursor__24770__auto__,m26512){
switch(arguments.length){
case 1:
return __GT_connect_page__1.call(this,cursor__24770__auto__);
case 2:
return __GT_connect_page__2.call(this,cursor__24770__auto__,m26512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_connect_page.cljs$core$IFn$_invoke$arity$1 = __GT_connect_page__1;
__GT_connect_page.cljs$core$IFn$_invoke$arity$2 = __GT_connect_page__2;
return __GT_connect_page;
})()
;

var ufv___26552 = schema.utils.use_fn_validation;
var output_schema26540_26553 = schema.core.Any;
var input_schema26541_26554 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker26542_26555 = schema.core.checker.call(null,input_schema26541_26554);
var output_checker26543_26556 = schema.core.checker.call(null,output_schema26540_26553);
/**
* Inputs: [data owner]
*/
shout_client.core.network_details = ((function (ufv___26552,output_schema26540_26553,input_schema26541_26554,input_checker26542_26555,output_checker26543_26556){
return (function network_details(G__26544,G__26545){
var validate__22447__auto__ = ufv___26552.get_cell();
if(cljs.core.truth_(validate__22447__auto__)){
var args__22448__auto___26557 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26544,G__26545], null);
var temp__4126__auto___26558 = input_checker26542_26555.call(null,args__22448__auto___26557);
if(cljs.core.truth_(temp__4126__auto___26558)){
var error__22449__auto___26559 = temp__4126__auto___26558;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"network-details","network-details",1029982107,null),cljs.core.pr_str.call(null,error__22449__auto___26559)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__22449__auto___26559,new cljs.core.Keyword(null,"value","value",305978217),args__22448__auto___26557,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26541_26554,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__22450__auto__ = (function (){var data = G__26544;
var owner = G__26545;
while(true){
if(typeof shout_client.core.t26549 !== 'undefined'){
} else {

/**
* @constructor
*/
shout_client.core.t26549 = (function (G__26545,owner,data,input_checker26542,output_checker26543,output_schema26540,validate__22447__auto__,G__26544,network_details,ufv__,input_schema26541,meta26550){
this.G__26545 = G__26545;
this.owner = owner;
this.data = data;
this.input_checker26542 = input_checker26542;
this.output_checker26543 = output_checker26543;
this.output_schema26540 = output_schema26540;
this.validate__22447__auto__ = validate__22447__auto__;
this.G__26544 = G__26544;
this.network_details = network_details;
this.ufv__ = ufv__;
this.input_schema26541 = input_schema26541;
this.meta26550 = meta26550;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shout_client.core.t26549.prototype.om$core$IDisplayName$ = true;

shout_client.core.t26549.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__22447__auto__,ufv___26552,output_schema26540_26553,input_schema26541_26554,input_checker26542_26555,output_checker26543_26556){
return (function (_){
var self__ = this;
var ___$1 = this;
return "network-details";
});})(validate__22447__auto__,ufv___26552,output_schema26540_26553,input_schema26541_26554,input_checker26542_26555,output_checker26543_26556))
;

shout_client.core.t26549.prototype.om$core$IRender$ = true;

shout_client.core.t26549.prototype.om$core$IRender$render$arity$1 = ((function (validate__22447__auto__,ufv___26552,output_schema26540_26553,input_schema26541_26554,input_checker26542_26555,output_checker26543_26556){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "___"},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.data)),sablono.interpreter.interpret.call(null,cljs.core.doall.call(null,cljs.core.map.call(null,((function (___$1,validate__22447__auto__,ufv___26552,output_schema26540_26553,input_schema26541_26554,input_checker26542_26555,output_checker26543_26556){
return (function (channel){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"____"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"channel-name"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(channel)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"channel-unread-count"], null),new cljs.core.Keyword(null,"unread","unread",-1950424572).cljs$core$IFn$_invoke$arity$1(channel)], null)], null);
});})(___$1,validate__22447__auto__,ufv___26552,output_schema26540_26553,input_schema26541_26554,input_checker26542_26555,output_checker26543_26556))
,new cljs.core.Keyword(null,"channels","channels",1132759174).cljs$core$IFn$_invoke$arity$1(self__.data)))));
});})(validate__22447__auto__,ufv___26552,output_schema26540_26553,input_schema26541_26554,input_checker26542_26555,output_checker26543_26556))
;

shout_client.core.t26549.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__22447__auto__,ufv___26552,output_schema26540_26553,input_schema26541_26554,input_checker26542_26555,output_checker26543_26556){
return (function (_26551){
var self__ = this;
var _26551__$1 = this;
return self__.meta26550;
});})(validate__22447__auto__,ufv___26552,output_schema26540_26553,input_schema26541_26554,input_checker26542_26555,output_checker26543_26556))
;

shout_client.core.t26549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__22447__auto__,ufv___26552,output_schema26540_26553,input_schema26541_26554,input_checker26542_26555,output_checker26543_26556){
return (function (_26551,meta26550__$1){
var self__ = this;
var _26551__$1 = this;
return (new shout_client.core.t26549(self__.G__26545,self__.owner,self__.data,self__.input_checker26542,self__.output_checker26543,self__.output_schema26540,self__.validate__22447__auto__,self__.G__26544,self__.network_details,self__.ufv__,self__.input_schema26541,meta26550__$1));
});})(validate__22447__auto__,ufv___26552,output_schema26540_26553,input_schema26541_26554,input_checker26542_26555,output_checker26543_26556))
;

shout_client.core.t26549.cljs$lang$type = true;

shout_client.core.t26549.cljs$lang$ctorStr = "shout-client.core/t26549";

shout_client.core.t26549.cljs$lang$ctorPrWriter = ((function (validate__22447__auto__,ufv___26552,output_schema26540_26553,input_schema26541_26554,input_checker26542_26555,output_checker26543_26556){
return (function (this__12197__auto__,writer__12198__auto__,opt__12199__auto__){
return cljs.core._write.call(null,writer__12198__auto__,"shout-client.core/t26549");
});})(validate__22447__auto__,ufv___26552,output_schema26540_26553,input_schema26541_26554,input_checker26542_26555,output_checker26543_26556))
;

shout_client.core.__GT_t26549 = ((function (validate__22447__auto__,ufv___26552,output_schema26540_26553,input_schema26541_26554,input_checker26542_26555,output_checker26543_26556){
return (function __GT_t26549(G__26545__$1,owner__$1,data__$1,input_checker26542__$1,output_checker26543__$1,output_schema26540__$1,validate__22447__auto____$1,G__26544__$1,network_details__$1,ufv____$1,input_schema26541__$1,meta26550){
return (new shout_client.core.t26549(G__26545__$1,owner__$1,data__$1,input_checker26542__$1,output_checker26543__$1,output_schema26540__$1,validate__22447__auto____$1,G__26544__$1,network_details__$1,ufv____$1,input_schema26541__$1,meta26550));
});})(validate__22447__auto__,ufv___26552,output_schema26540_26553,input_schema26541_26554,input_checker26542_26555,output_checker26543_26556))
;

}

return (new shout_client.core.t26549(G__26545,owner,data,input_checker26542_26555,output_checker26543_26556,output_schema26540_26553,validate__22447__auto__,G__26544,network_details,ufv___26552,input_schema26541_26554,null));
break;
}
})();
if(cljs.core.truth_(validate__22447__auto__)){
var temp__4126__auto___26560 = output_checker26543_26556.call(null,o__22450__auto__);
if(cljs.core.truth_(temp__4126__auto___26560)){
var error__22449__auto___26561 = temp__4126__auto___26560;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"network-details","network-details",1029982107,null),cljs.core.pr_str.call(null,error__22449__auto___26561)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__22449__auto___26561,new cljs.core.Keyword(null,"value","value",305978217),o__22450__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26540_26553,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__22450__auto__;
});})(ufv___26552,output_schema26540_26553,input_schema26541_26554,input_checker26542_26555,output_checker26543_26556))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shout_client.core.network_details),schema.core.make_fn_schema.call(null,output_schema26540_26553,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26541_26554], null)));

shout_client.core.__GT_network_details = (function() {
var __GT_network_details = null;
var __GT_network_details__1 = (function (cursor__24770__auto__){
return om.core.build.call(null,shout_client.core.network_details,cursor__24770__auto__);
});
var __GT_network_details__2 = (function (cursor__24770__auto__,m26539){
return om.core.build.call(null,shout_client.core.network_details,cursor__24770__auto__,m26539);
});
__GT_network_details = function(cursor__24770__auto__,m26539){
switch(arguments.length){
case 1:
return __GT_network_details__1.call(this,cursor__24770__auto__);
case 2:
return __GT_network_details__2.call(this,cursor__24770__auto__,m26539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_network_details.cljs$core$IFn$_invoke$arity$1 = __GT_network_details__1;
__GT_network_details.cljs$core$IFn$_invoke$arity$2 = __GT_network_details__2;
return __GT_network_details;
})()
;

var ufv___26579 = schema.utils.use_fn_validation;
var output_schema26563_26580 = schema.core.Any;
var input_schema26564_26581 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker26565_26582 = schema.core.checker.call(null,input_schema26564_26581);
var output_checker26566_26583 = schema.core.checker.call(null,output_schema26563_26580);
/**
* Inputs: [data owner]
*/
shout_client.core.sidebar = ((function (ufv___26579,output_schema26563_26580,input_schema26564_26581,input_checker26565_26582,output_checker26566_26583){
return (function sidebar(G__26567,G__26568){
var validate__22447__auto__ = ufv___26579.get_cell();
if(cljs.core.truth_(validate__22447__auto__)){
var args__22448__auto___26584 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26567,G__26568], null);
var temp__4126__auto___26585 = input_checker26565_26582.call(null,args__22448__auto___26584);
if(cljs.core.truth_(temp__4126__auto___26585)){
var error__22449__auto___26586 = temp__4126__auto___26585;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sidebar","sidebar",1676315985,null),cljs.core.pr_str.call(null,error__22449__auto___26586)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__22449__auto___26586,new cljs.core.Keyword(null,"value","value",305978217),args__22448__auto___26584,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26564_26581,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__22450__auto__ = (function (){var data = G__26567;
var owner = G__26568;
while(true){
if(typeof shout_client.core.t26574 !== 'undefined'){
} else {

/**
* @constructor
*/
shout_client.core.t26574 = (function (owner,data,input_checker26565,G__26567,sidebar,validate__22447__auto__,G__26568,input_schema26564,output_schema26563,ufv__,output_checker26566,meta26575){
this.owner = owner;
this.data = data;
this.input_checker26565 = input_checker26565;
this.G__26567 = G__26567;
this.sidebar = sidebar;
this.validate__22447__auto__ = validate__22447__auto__;
this.G__26568 = G__26568;
this.input_schema26564 = input_schema26564;
this.output_schema26563 = output_schema26563;
this.ufv__ = ufv__;
this.output_checker26566 = output_checker26566;
this.meta26575 = meta26575;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shout_client.core.t26574.prototype.om$core$IDisplayName$ = true;

shout_client.core.t26574.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__22447__auto__,ufv___26579,output_schema26563_26580,input_schema26564_26581,input_checker26565_26582,output_checker26566_26583){
return (function (_){
var self__ = this;
var ___$1 = this;
return "sidebar";
});})(validate__22447__auto__,ufv___26579,output_schema26563_26580,input_schema26564_26581,input_checker26565_26582,output_checker26566_26583))
;

shout_client.core.t26574.prototype.om$core$IRender$ = true;

shout_client.core.t26574.prototype.om$core$IRender$render$arity$1 = ((function (validate__22447__auto__,ufv___26579,output_schema26563_26580,input_schema26564_26581,input_checker26565_26582,output_checker26566_26583){
return (function (_){
var self__ = this;
var ___$1 = this;
var temp__4124__auto__ = new cljs.core.Keyword(null,"networks","networks",1319553937).cljs$core$IFn$_invoke$arity$1(self__.data);
if(cljs.core.truth_(temp__4124__auto__)){
var networks = temp__4124__auto__;
return React.DOM.div({"className": "__"},sablono.interpreter.interpret.call(null,om.core.build_all.call(null,shout_client.core.network_details,networks)));
} else {
return React.DOM.div({"className": "empty"},"You're not connected to any networks yet.");
}
});})(validate__22447__auto__,ufv___26579,output_schema26563_26580,input_schema26564_26581,input_checker26565_26582,output_checker26566_26583))
;

shout_client.core.t26574.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__22447__auto__,ufv___26579,output_schema26563_26580,input_schema26564_26581,input_checker26565_26582,output_checker26566_26583){
return (function (_26576){
var self__ = this;
var _26576__$1 = this;
return self__.meta26575;
});})(validate__22447__auto__,ufv___26579,output_schema26563_26580,input_schema26564_26581,input_checker26565_26582,output_checker26566_26583))
;

shout_client.core.t26574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__22447__auto__,ufv___26579,output_schema26563_26580,input_schema26564_26581,input_checker26565_26582,output_checker26566_26583){
return (function (_26576,meta26575__$1){
var self__ = this;
var _26576__$1 = this;
return (new shout_client.core.t26574(self__.owner,self__.data,self__.input_checker26565,self__.G__26567,self__.sidebar,self__.validate__22447__auto__,self__.G__26568,self__.input_schema26564,self__.output_schema26563,self__.ufv__,self__.output_checker26566,meta26575__$1));
});})(validate__22447__auto__,ufv___26579,output_schema26563_26580,input_schema26564_26581,input_checker26565_26582,output_checker26566_26583))
;

shout_client.core.t26574.cljs$lang$type = true;

shout_client.core.t26574.cljs$lang$ctorStr = "shout-client.core/t26574";

shout_client.core.t26574.cljs$lang$ctorPrWriter = ((function (validate__22447__auto__,ufv___26579,output_schema26563_26580,input_schema26564_26581,input_checker26565_26582,output_checker26566_26583){
return (function (this__12197__auto__,writer__12198__auto__,opt__12199__auto__){
return cljs.core._write.call(null,writer__12198__auto__,"shout-client.core/t26574");
});})(validate__22447__auto__,ufv___26579,output_schema26563_26580,input_schema26564_26581,input_checker26565_26582,output_checker26566_26583))
;

shout_client.core.__GT_t26574 = ((function (validate__22447__auto__,ufv___26579,output_schema26563_26580,input_schema26564_26581,input_checker26565_26582,output_checker26566_26583){
return (function __GT_t26574(owner__$1,data__$1,input_checker26565__$1,G__26567__$1,sidebar__$1,validate__22447__auto____$1,G__26568__$1,input_schema26564__$1,output_schema26563__$1,ufv____$1,output_checker26566__$1,meta26575){
return (new shout_client.core.t26574(owner__$1,data__$1,input_checker26565__$1,G__26567__$1,sidebar__$1,validate__22447__auto____$1,G__26568__$1,input_schema26564__$1,output_schema26563__$1,ufv____$1,output_checker26566__$1,meta26575));
});})(validate__22447__auto__,ufv___26579,output_schema26563_26580,input_schema26564_26581,input_checker26565_26582,output_checker26566_26583))
;

}

return (new shout_client.core.t26574(owner,data,input_checker26565_26582,G__26567,sidebar,validate__22447__auto__,G__26568,input_schema26564_26581,output_schema26563_26580,ufv___26579,output_checker26566_26583,null));
break;
}
})();
if(cljs.core.truth_(validate__22447__auto__)){
var temp__4126__auto___26587 = output_checker26566_26583.call(null,o__22450__auto__);
if(cljs.core.truth_(temp__4126__auto___26587)){
var error__22449__auto___26588 = temp__4126__auto___26587;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sidebar","sidebar",1676315985,null),cljs.core.pr_str.call(null,error__22449__auto___26588)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__22449__auto___26588,new cljs.core.Keyword(null,"value","value",305978217),o__22450__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26563_26580,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__22450__auto__;
});})(ufv___26579,output_schema26563_26580,input_schema26564_26581,input_checker26565_26582,output_checker26566_26583))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shout_client.core.sidebar),schema.core.make_fn_schema.call(null,output_schema26563_26580,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26564_26581], null)));

shout_client.core.__GT_sidebar = (function() {
var __GT_sidebar = null;
var __GT_sidebar__1 = (function (cursor__24770__auto__){
return om.core.build.call(null,shout_client.core.sidebar,cursor__24770__auto__);
});
var __GT_sidebar__2 = (function (cursor__24770__auto__,m26562){
return om.core.build.call(null,shout_client.core.sidebar,cursor__24770__auto__,m26562);
});
__GT_sidebar = function(cursor__24770__auto__,m26562){
switch(arguments.length){
case 1:
return __GT_sidebar__1.call(this,cursor__24770__auto__);
case 2:
return __GT_sidebar__2.call(this,cursor__24770__auto__,m26562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_sidebar.cljs$core$IFn$_invoke$arity$1 = __GT_sidebar__1;
__GT_sidebar.cljs$core$IFn$_invoke$arity$2 = __GT_sidebar__2;
return __GT_sidebar;
})()
;

var ufv___26606 = schema.utils.use_fn_validation;
var output_schema26590_26607 = schema.core.Any;
var input_schema26591_26608 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker26592_26609 = schema.core.checker.call(null,input_schema26591_26608);
var output_checker26593_26610 = schema.core.checker.call(null,output_schema26590_26607);
/**
* Inputs: [data owner]
*/
shout_client.core.shout_app = ((function (ufv___26606,output_schema26590_26607,input_schema26591_26608,input_checker26592_26609,output_checker26593_26610){
return (function shout_app(G__26594,G__26595){
var validate__22447__auto__ = ufv___26606.get_cell();
if(cljs.core.truth_(validate__22447__auto__)){
var args__22448__auto___26611 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26594,G__26595], null);
var temp__4126__auto___26612 = input_checker26592_26609.call(null,args__22448__auto___26611);
if(cljs.core.truth_(temp__4126__auto___26612)){
var error__22449__auto___26613 = temp__4126__auto___26612;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"shout-app","shout-app",-19976875,null),cljs.core.pr_str.call(null,error__22449__auto___26613)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__22449__auto___26613,new cljs.core.Keyword(null,"value","value",305978217),args__22448__auto___26611,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26591_26608,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__22450__auto__ = (function (){var data = G__26594;
var owner = G__26595;
while(true){
if(typeof shout_client.core.t26601 !== 'undefined'){
} else {

/**
* @constructor
*/
shout_client.core.t26601 = (function (owner,output_checker26593,G__26594,data,output_schema26590,input_schema26591,G__26595,validate__22447__auto__,shout_app,ufv__,input_checker26592,meta26602){
this.owner = owner;
this.output_checker26593 = output_checker26593;
this.G__26594 = G__26594;
this.data = data;
this.output_schema26590 = output_schema26590;
this.input_schema26591 = input_schema26591;
this.G__26595 = G__26595;
this.validate__22447__auto__ = validate__22447__auto__;
this.shout_app = shout_app;
this.ufv__ = ufv__;
this.input_checker26592 = input_checker26592;
this.meta26602 = meta26602;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shout_client.core.t26601.prototype.om$core$IDisplayName$ = true;

shout_client.core.t26601.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__22447__auto__,ufv___26606,output_schema26590_26607,input_schema26591_26608,input_checker26592_26609,output_checker26593_26610){
return (function (_){
var self__ = this;
var ___$1 = this;
return "shout-app";
});})(validate__22447__auto__,ufv___26606,output_schema26590_26607,input_schema26591_26608,input_checker26592_26609,output_checker26593_26610))
;

shout_client.core.t26601.prototype.om$core$IRender$ = true;

shout_client.core.t26601.prototype.om$core$IRender$render$arity$1 = ((function (validate__22447__auto__,ufv___26606,output_schema26590_26607,input_schema26591_26608,input_checker26592_26609,output_checker26593_26610){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"id": "wrap"},React.DOM.div({"id": "viewport"},React.DOM.aside({"id": "sidebar"}),React.DOM.div({"id": "main"},sablono.interpreter.interpret.call(null,om.core.build.call(null,shout_client.core.connect_page,cljs.core.PersistentArrayMap.EMPTY)))));
});})(validate__22447__auto__,ufv___26606,output_schema26590_26607,input_schema26591_26608,input_checker26592_26609,output_checker26593_26610))
;

shout_client.core.t26601.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__22447__auto__,ufv___26606,output_schema26590_26607,input_schema26591_26608,input_checker26592_26609,output_checker26593_26610){
return (function (_26603){
var self__ = this;
var _26603__$1 = this;
return self__.meta26602;
});})(validate__22447__auto__,ufv___26606,output_schema26590_26607,input_schema26591_26608,input_checker26592_26609,output_checker26593_26610))
;

shout_client.core.t26601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__22447__auto__,ufv___26606,output_schema26590_26607,input_schema26591_26608,input_checker26592_26609,output_checker26593_26610){
return (function (_26603,meta26602__$1){
var self__ = this;
var _26603__$1 = this;
return (new shout_client.core.t26601(self__.owner,self__.output_checker26593,self__.G__26594,self__.data,self__.output_schema26590,self__.input_schema26591,self__.G__26595,self__.validate__22447__auto__,self__.shout_app,self__.ufv__,self__.input_checker26592,meta26602__$1));
});})(validate__22447__auto__,ufv___26606,output_schema26590_26607,input_schema26591_26608,input_checker26592_26609,output_checker26593_26610))
;

shout_client.core.t26601.cljs$lang$type = true;

shout_client.core.t26601.cljs$lang$ctorStr = "shout-client.core/t26601";

shout_client.core.t26601.cljs$lang$ctorPrWriter = ((function (validate__22447__auto__,ufv___26606,output_schema26590_26607,input_schema26591_26608,input_checker26592_26609,output_checker26593_26610){
return (function (this__12197__auto__,writer__12198__auto__,opt__12199__auto__){
return cljs.core._write.call(null,writer__12198__auto__,"shout-client.core/t26601");
});})(validate__22447__auto__,ufv___26606,output_schema26590_26607,input_schema26591_26608,input_checker26592_26609,output_checker26593_26610))
;

shout_client.core.__GT_t26601 = ((function (validate__22447__auto__,ufv___26606,output_schema26590_26607,input_schema26591_26608,input_checker26592_26609,output_checker26593_26610){
return (function __GT_t26601(owner__$1,output_checker26593__$1,G__26594__$1,data__$1,output_schema26590__$1,input_schema26591__$1,G__26595__$1,validate__22447__auto____$1,shout_app__$1,ufv____$1,input_checker26592__$1,meta26602){
return (new shout_client.core.t26601(owner__$1,output_checker26593__$1,G__26594__$1,data__$1,output_schema26590__$1,input_schema26591__$1,G__26595__$1,validate__22447__auto____$1,shout_app__$1,ufv____$1,input_checker26592__$1,meta26602));
});})(validate__22447__auto__,ufv___26606,output_schema26590_26607,input_schema26591_26608,input_checker26592_26609,output_checker26593_26610))
;

}

return (new shout_client.core.t26601(owner,output_checker26593_26610,G__26594,data,output_schema26590_26607,input_schema26591_26608,G__26595,validate__22447__auto__,shout_app,ufv___26606,input_checker26592_26609,null));
break;
}
})();
if(cljs.core.truth_(validate__22447__auto__)){
var temp__4126__auto___26614 = output_checker26593_26610.call(null,o__22450__auto__);
if(cljs.core.truth_(temp__4126__auto___26614)){
var error__22449__auto___26615 = temp__4126__auto___26614;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"shout-app","shout-app",-19976875,null),cljs.core.pr_str.call(null,error__22449__auto___26615)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__22449__auto___26615,new cljs.core.Keyword(null,"value","value",305978217),o__22450__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26590_26607,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__22450__auto__;
});})(ufv___26606,output_schema26590_26607,input_schema26591_26608,input_checker26592_26609,output_checker26593_26610))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shout_client.core.shout_app),schema.core.make_fn_schema.call(null,output_schema26590_26607,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26591_26608], null)));

shout_client.core.__GT_shout_app = (function() {
var __GT_shout_app = null;
var __GT_shout_app__1 = (function (cursor__24770__auto__){
return om.core.build.call(null,shout_client.core.shout_app,cursor__24770__auto__);
});
var __GT_shout_app__2 = (function (cursor__24770__auto__,m26589){
return om.core.build.call(null,shout_client.core.shout_app,cursor__24770__auto__,m26589);
});
__GT_shout_app = function(cursor__24770__auto__,m26589){
switch(arguments.length){
case 1:
return __GT_shout_app__1.call(this,cursor__24770__auto__);
case 2:
return __GT_shout_app__2.call(this,cursor__24770__auto__,m26589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_shout_app.cljs$core$IFn$_invoke$arity$1 = __GT_shout_app__1;
__GT_shout_app.cljs$core$IFn$_invoke$arity$2 = __GT_shout_app__2;
return __GT_shout_app;
})()
;

//# sourceMappingURL=core.js.map