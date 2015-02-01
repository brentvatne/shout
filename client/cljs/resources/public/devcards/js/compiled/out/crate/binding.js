// Compiled by ClojureScript 0.0-2725 {}
goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');

/**
* @constructor
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__30363 = cljs.core.seq.call(null,self__.watches);
var chunk__30364 = null;
var count__30365 = (0);
var i__30366 = (0);
while(true){
if((i__30366 < count__30365)){
var vec__30367 = cljs.core._nth.call(null,chunk__30364,i__30366);
var key__$1 = cljs.core.nth.call(null,vec__30367,(0),null);
var f = cljs.core.nth.call(null,vec__30367,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__30369 = seq__30363;
var G__30370 = chunk__30364;
var G__30371 = count__30365;
var G__30372 = (i__30366 + (1));
seq__30363 = G__30369;
chunk__30364 = G__30370;
count__30365 = G__30371;
i__30366 = G__30372;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30363);
if(temp__4126__auto__){
var seq__30363__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30363__$1)){
var c__4542__auto__ = cljs.core.chunk_first.call(null,seq__30363__$1);
var G__30373 = cljs.core.chunk_rest.call(null,seq__30363__$1);
var G__30374 = c__4542__auto__;
var G__30375 = cljs.core.count.call(null,c__4542__auto__);
var G__30376 = (0);
seq__30363 = G__30373;
chunk__30364 = G__30374;
count__30365 = G__30375;
i__30366 = G__30376;
continue;
} else {
var vec__30368 = cljs.core.first.call(null,seq__30363__$1);
var key__$1 = cljs.core.nth.call(null,vec__30368,(0),null);
var f = cljs.core.nth.call(null,vec__30368,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__30377 = cljs.core.next.call(null,seq__30363__$1);
var G__30378 = null;
var G__30379 = (0);
var G__30380 = (0);
seq__30363 = G__30377;
chunk__30364 = G__30378;
count__30365 = G__30379;
i__30366 = G__30380;
continue;
}
} else {
return null;
}
}
break;
}
});

crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(f)){
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else {
return null;
}
});

crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});

crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#<SubAtom: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path))),cljs.core.str(">")].join(''));
});

crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
});

crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

crate.binding.SubAtom.cljs$lang$type = true;

crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom";

crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__4342__auto__,writer__4343__auto__,opt__4344__auto__){
return cljs.core._write.call(null,writer__4343__auto__,"crate.binding/SubAtom");
});

crate.binding.__GT_SubAtom = (function __GT_SubAtom(atm,path,prevhash,watches,key){
return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});

crate.binding.subatom = (function subatom(atm,path){
var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var vec__30382 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));
var atm__$1 = cljs.core.nth.call(null,vec__30382,(0),null);
var path__$2 = cljs.core.nth.call(null,vec__30382,(1),null);
var k = cljs.core.gensym.call(null,"subatom");
var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));
cljs.core.add_watch.call(null,atm__$1,k,((function (path__$1,vec__30382,atm__$1,path__$2,k,sa){
return (function (_,___$1,ov,nv){
var latest = cljs.core.get_in.call(null,nv,path__$2);
var prev = cljs.core.get_in.call(null,ov,path__$2);
var latest_hash = cljs.core.hash.call(null,latest);
if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest))){
sa.prevhash = latest_hash;

return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else {
return null;
}
});})(path__$1,vec__30382,atm__$1,path__$2,k,sa))
);

return sa;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){
cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);

return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
crate.binding.sub_swap_BANG_ = (function() {
var sub_swap_BANG_ = null;
var sub_swap_BANG___2 = (function (sa,f){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});
var sub_swap_BANG___3 = (function (sa,f,x){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});
var sub_swap_BANG___6 = (function() { 
var G__30383__delegate = function (sa,f,x,y,z,more){
return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__30383 = function (sa,f,x,y,z,var_args){
var more = null;
if (arguments.length > 5) {
var G__30384__i = 0, G__30384__a = new Array(arguments.length -  5);
while (G__30384__i < G__30384__a.length) {G__30384__a[G__30384__i] = arguments[G__30384__i + 5]; ++G__30384__i;}
  more = new cljs.core.IndexedSeq(G__30384__a,0);
} 
return G__30383__delegate.call(this,sa,f,x,y,z,more);};
G__30383.cljs$lang$maxFixedArity = 5;
G__30383.cljs$lang$applyTo = (function (arglist__30385){
var sa = cljs.core.first(arglist__30385);
arglist__30385 = cljs.core.next(arglist__30385);
var f = cljs.core.first(arglist__30385);
arglist__30385 = cljs.core.next(arglist__30385);
var x = cljs.core.first(arglist__30385);
arglist__30385 = cljs.core.next(arglist__30385);
var y = cljs.core.first(arglist__30385);
arglist__30385 = cljs.core.next(arglist__30385);
var z = cljs.core.first(arglist__30385);
var more = cljs.core.rest(arglist__30385);
return G__30383__delegate(sa,f,x,y,z,more);
});
G__30383.cljs$core$IFn$_invoke$arity$variadic = G__30383__delegate;
return G__30383;
})()
;
sub_swap_BANG_ = function(sa,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return sub_swap_BANG___2.call(this,sa,f);
case 3:
return sub_swap_BANG___3.call(this,sa,f,x);
case 4:
return sub_swap_BANG___4.call(this,sa,f,x,y);
case 5:
return sub_swap_BANG___5.call(this,sa,f,x,y,z);
default:
var G__30386 = null;
if (arguments.length > 5) {
var G__30387__i = 0, G__30387__a = new Array(arguments.length -  5);
while (G__30387__i < G__30387__a.length) {G__30387__a[G__30387__i] = arguments[G__30387__i + 5]; ++G__30387__i;}
G__30386 = new cljs.core.IndexedSeq(G__30387__a,0);
}
return sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic(sa,f,x,y,z, G__30386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub_swap_BANG_.cljs$lang$maxFixedArity = 5;
sub_swap_BANG_.cljs$lang$applyTo = sub_swap_BANG___6.cljs$lang$applyTo;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = sub_swap_BANG___2;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = sub_swap_BANG___3;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = sub_swap_BANG___4;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = sub_swap_BANG___5;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic;
return sub_swap_BANG_;
})()
;
crate.binding.sub_destroy_BANG_ = (function sub_destroy_BANG_(sa){
cljs.core.remove_watch.call(null,sa.atm,sa.key);

sa.watches = null;

return sa.atm = null;
});

crate.binding.computable = (function (){var obj30389 = {};
return obj30389;
})();

crate.binding._compute = (function _compute(this$){
if((function (){var and__3743__auto__ = this$;
if(and__3743__auto__){
return this$.crate$binding$computable$_compute$arity$1;
} else {
return and__3743__auto__;
}
})()){
return this$.crate$binding$computable$_compute$arity$1(this$);
} else {
var x__4399__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3755__auto__ = (crate.binding._compute[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (crate.binding._compute["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"computable.-compute",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
*/
crate.binding.Computed = (function (atms,value,func,watches,key){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.Computed.prototype.crate$binding$computable$ = true;

crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var old = this$__$1.value;
this$__$1.value = cljs.core.apply.call(null,self__.func,cljs.core.map.call(null,cljs.core.deref,self__.atms));

return cljs.core._notify_watches.call(null,this$__$1,old,this$__$1.value);
});

crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__30390 = cljs.core.seq.call(null,self__.watches);
var chunk__30391 = null;
var count__30392 = (0);
var i__30393 = (0);
while(true){
if((i__30393 < count__30392)){
var vec__30394 = cljs.core._nth.call(null,chunk__30391,i__30393);
var key__$1 = cljs.core.nth.call(null,vec__30394,(0),null);
var f = cljs.core.nth.call(null,vec__30394,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__30396 = seq__30390;
var G__30397 = chunk__30391;
var G__30398 = count__30392;
var G__30399 = (i__30393 + (1));
seq__30390 = G__30396;
chunk__30391 = G__30397;
count__30392 = G__30398;
i__30393 = G__30399;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30390);
if(temp__4126__auto__){
var seq__30390__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30390__$1)){
var c__4542__auto__ = cljs.core.chunk_first.call(null,seq__30390__$1);
var G__30400 = cljs.core.chunk_rest.call(null,seq__30390__$1);
var G__30401 = c__4542__auto__;
var G__30402 = cljs.core.count.call(null,c__4542__auto__);
var G__30403 = (0);
seq__30390 = G__30400;
chunk__30391 = G__30401;
count__30392 = G__30402;
i__30393 = G__30403;
continue;
} else {
var vec__30395 = cljs.core.first.call(null,seq__30390__$1);
var key__$1 = cljs.core.nth.call(null,vec__30395,(0),null);
var f = cljs.core.nth.call(null,vec__30395,(1),null);
f.call(null,key__$1,this$__$1,oldval,newval);

var G__30404 = cljs.core.next.call(null,seq__30390__$1);
var G__30405 = null;
var G__30406 = (0);
var G__30407 = (0);
seq__30390 = G__30404;
chunk__30391 = G__30405;
count__30392 = G__30406;
i__30393 = G__30407;
continue;
}
} else {
return null;
}
}
break;
}
});

crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(f)){
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else {
return null;
}
});

crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});

crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#<Computed: "),cljs.core.str(cljs.core.pr_str.call(null,self__.value)),cljs.core.str(">")].join(''));
});

crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

crate.binding.Computed.cljs$lang$type = true;

crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed";

crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__4342__auto__,writer__4343__auto__,opt__4344__auto__){
return cljs.core._write.call(null,writer__4343__auto__,"crate.binding/Computed");
});

crate.binding.__GT_Computed = (function __GT_Computed(atms,value,func,watches,key){
return (new crate.binding.Computed(atms,value,func,watches,key));
});

crate.binding.computed = (function computed(atms,func){
var k = cljs.core.gensym.call(null,"computed");
var neue = (new crate.binding.Computed(atms,null,func,null,k));
crate.binding._compute.call(null,neue);

var seq__30412_30416 = cljs.core.seq.call(null,atms);
var chunk__30413_30417 = null;
var count__30414_30418 = (0);
var i__30415_30419 = (0);
while(true){
if((i__30415_30419 < count__30414_30418)){
var atm_30420 = cljs.core._nth.call(null,chunk__30413_30417,i__30415_30419);
cljs.core.add_watch.call(null,atm_30420,k,((function (seq__30412_30416,chunk__30413_30417,count__30414_30418,i__30415_30419,atm_30420,k,neue){
return (function (_,___$1,___$2,___$3){
return crate.binding._compute.call(null,neue);
});})(seq__30412_30416,chunk__30413_30417,count__30414_30418,i__30415_30419,atm_30420,k,neue))
);

var G__30421 = seq__30412_30416;
var G__30422 = chunk__30413_30417;
var G__30423 = count__30414_30418;
var G__30424 = (i__30415_30419 + (1));
seq__30412_30416 = G__30421;
chunk__30413_30417 = G__30422;
count__30414_30418 = G__30423;
i__30415_30419 = G__30424;
continue;
} else {
var temp__4126__auto___30425 = cljs.core.seq.call(null,seq__30412_30416);
if(temp__4126__auto___30425){
var seq__30412_30426__$1 = temp__4126__auto___30425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30412_30426__$1)){
var c__4542__auto___30427 = cljs.core.chunk_first.call(null,seq__30412_30426__$1);
var G__30428 = cljs.core.chunk_rest.call(null,seq__30412_30426__$1);
var G__30429 = c__4542__auto___30427;
var G__30430 = cljs.core.count.call(null,c__4542__auto___30427);
var G__30431 = (0);
seq__30412_30416 = G__30428;
chunk__30413_30417 = G__30429;
count__30414_30418 = G__30430;
i__30415_30419 = G__30431;
continue;
} else {
var atm_30432 = cljs.core.first.call(null,seq__30412_30426__$1);
cljs.core.add_watch.call(null,atm_30432,k,((function (seq__30412_30416,chunk__30413_30417,count__30414_30418,i__30415_30419,atm_30432,seq__30412_30426__$1,temp__4126__auto___30425,k,neue){
return (function (_,___$1,___$2,___$3){
return crate.binding._compute.call(null,neue);
});})(seq__30412_30416,chunk__30413_30417,count__30414_30418,i__30415_30419,atm_30432,seq__30412_30426__$1,temp__4126__auto___30425,k,neue))
);

var G__30433 = cljs.core.next.call(null,seq__30412_30426__$1);
var G__30434 = null;
var G__30435 = (0);
var G__30436 = (0);
seq__30412_30416 = G__30433;
chunk__30413_30417 = G__30434;
count__30414_30418 = G__30435;
i__30415_30419 = G__30436;
continue;
}
} else {
}
}
break;
}

return neue;
});
crate.binding.z = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.binding.y = crate.binding.computed.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.z], null),(function (z){
return cljs.core.filter.call(null,cljs.core.even_QMARK_,z);
}));
crate.binding.r = crate.binding.computed.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.y], null),(function (y){
return cljs.core.filter.call(null,(function (p1__30437_SHARP_){
return (p1__30437_SHARP_ > (100));
}),y);
}));
cljs.core.swap_BANG_.call(null,crate.binding.z,cljs.core.conj,(1340));
cljs.core.deref.call(null,crate.binding.y);
cljs.core.deref.call(null,crate.binding.r);
crate.binding.notify = (function notify(w,o,v){
return cljs.core._notify_watches.call(null,w,o,v);
});

crate.binding.bindable_coll = (function (){var obj30439 = {};
return obj30439;
})();


crate.binding.bindable = (function (){var obj30441 = {};
return obj30441;
})();

crate.binding._value = (function _value(this$){
if((function (){var and__3743__auto__ = this$;
if(and__3743__auto__){
return this$.crate$binding$bindable$_value$arity$1;
} else {
return and__3743__auto__;
}
})()){
return this$.crate$binding$bindable$_value$arity$1(this$);
} else {
var x__4399__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3755__auto__ = (crate.binding._value[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (crate.binding._value["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});

crate.binding._on_change = (function _on_change(this$,func){
if((function (){var and__3743__auto__ = this$;
if(and__3743__auto__){
return this$.crate$binding$bindable$_on_change$arity$2;
} else {
return and__3743__auto__;
}
})()){
return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else {
var x__4399__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3755__auto__ = (crate.binding._on_change[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (crate.binding._on_change["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});


/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;

crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
});

crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var self__ = this;
var this$__$1 = this;
return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),((function (this$__$1){
return (function (){
return func.call(null,crate.binding._value.call(null,this$__$1));
});})(this$__$1))
);
});

crate.binding.atom_binding.cljs$lang$type = true;

crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";

crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__4342__auto__,writer__4343__auto__,opt__4344__auto__){
return cljs.core._write.call(null,writer__4343__auto__,"crate.binding/atom-binding");
});

crate.binding.__GT_atom_binding = (function __GT_atom_binding(atm,value_func){
return (new crate.binding.atom_binding(atm,value_func));
});


/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 0;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__30442 = cljs.core.seq.call(null,self__.watches);
var chunk__30443 = null;
var count__30444 = (0);
var i__30445 = (0);
while(true){
if((i__30445 < count__30444)){
var vec__30446 = cljs.core._nth.call(null,chunk__30443,i__30445);
var key = cljs.core.nth.call(null,vec__30446,(0),null);
var f = cljs.core.nth.call(null,vec__30446,(1),null);
f.call(null,key,this$__$1,oldval,newval);

var G__30448 = seq__30442;
var G__30449 = chunk__30443;
var G__30450 = count__30444;
var G__30451 = (i__30445 + (1));
seq__30442 = G__30448;
chunk__30443 = G__30449;
count__30444 = G__30450;
i__30445 = G__30451;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30442);
if(temp__4126__auto__){
var seq__30442__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30442__$1)){
var c__4542__auto__ = cljs.core.chunk_first.call(null,seq__30442__$1);
var G__30452 = cljs.core.chunk_rest.call(null,seq__30442__$1);
var G__30453 = c__4542__auto__;
var G__30454 = cljs.core.count.call(null,c__4542__auto__);
var G__30455 = (0);
seq__30442 = G__30452;
chunk__30443 = G__30453;
count__30444 = G__30454;
i__30445 = G__30455;
continue;
} else {
var vec__30447 = cljs.core.first.call(null,seq__30442__$1);
var key = cljs.core.nth.call(null,vec__30447,(0),null);
var f = cljs.core.nth.call(null,vec__30447,(1),null);
f.call(null,key,this$__$1,oldval,newval);

var G__30456 = cljs.core.next.call(null,seq__30442__$1);
var G__30457 = null;
var G__30458 = (0);
var G__30459 = (0);
seq__30442 = G__30456;
chunk__30443 = G__30457;
count__30444 = G__30458;
i__30445 = G__30459;
continue;
}
} else {
return null;
}
}
break;
}
});

crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

crate.binding.notifier.cljs$lang$type = true;

crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";

crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__4342__auto__,writer__4343__auto__,opt__4344__auto__){
return cljs.core._write.call(null,writer__4343__auto__,"crate.binding/notifier");
});

crate.binding.__GT_notifier = (function __GT_notifier(watches){
return (new crate.binding.notifier(watches));
});


/**
* @constructor
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;

crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.call(null,new cljs.core.Keyword(null,"elem","elem",618631056),cljs.core.vals.call(null,this$__$1.stuff));
});

crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var self__ = this;
var this$__$1 = this;
return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),((function (this$__$1){
return (function (_,___$1,___$2,p__30460){
var vec__30461 = p__30460;
var event = cljs.core.nth.call(null,vec__30461,(0),null);
var el = cljs.core.nth.call(null,vec__30461,(1),null);
var v = cljs.core.nth.call(null,vec__30461,(2),null);
return func.call(null,event,el,v);
});})(this$__$1))
);
});

crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;

crate.binding.bound_collection.cljs$lang$type = true;

crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";

crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__4342__auto__,writer__4343__auto__,opt__4344__auto__){
return cljs.core._write.call(null,writer__4343__auto__,"crate.binding/bound-collection");
});

crate.binding.__GT_bound_collection = (function __GT_bound_collection(atm,notif,opts,stuff){
return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});

crate.binding.opt = (function opt(bc,k){
return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){
var sa = crate.binding.subatom.call(null,bc.atm,path);
var elem = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"as","as",1148689641)).call(null,sa);
bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",618631056),elem,new cljs.core.Keyword(null,"subatom","subatom",-95454370),sa], null));

return crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add","add",235287739),elem,cljs.core.deref.call(null,sa)], null));
});
crate.binding.bc_remove = (function bc_remove(bc,key){
var notif = bc.notif;
var prev = bc.stuff.call(null,key);
bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);

crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(prev),null], null));

return crate.binding.sub_destroy_BANG_.call(null,new cljs.core.Keyword(null,"subatom","subatom",-95454370).cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){
if(cljs.core.map_QMARK_.call(null,coll)){
return cljs.core.seq.call(null,coll);
} else {
if(cljs.core.set_QMARK_.call(null,coll)){
return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else {
return cljs.core.map_indexed.call(null,cljs.core.vector,coll);

}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){
return cljs.core.concat.call(null,(function (){var or__3755__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
};
var __GT_path = function (bc,var_args){
var segs = null;
if (arguments.length > 1) {
var G__30462__i = 0, G__30462__a = new Array(arguments.length -  1);
while (G__30462__i < G__30462__a.length) {G__30462__a[G__30462__i] = arguments[G__30462__i + 1]; ++G__30462__i;}
  segs = new cljs.core.IndexedSeq(G__30462__a,0);
} 
return __GT_path__delegate.call(this,bc,segs);};
__GT_path.cljs$lang$maxFixedArity = 1;
__GT_path.cljs$lang$applyTo = (function (arglist__30463){
var bc = cljs.core.first(arglist__30463);
var segs = cljs.core.rest(arglist__30463);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){
var prev = bc.stuff;
var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));
var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",780060332)));
var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));
var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));
var seq__30472_30480 = cljs.core.seq.call(null,added);
var chunk__30473_30481 = null;
var count__30474_30482 = (0);
var i__30475_30483 = (0);
while(true){
if((i__30475_30483 < count__30474_30482)){
var a_30484 = cljs.core._nth.call(null,chunk__30473_30481,i__30475_30483);
crate.binding.bc_add.call(null,bc,a_30484,a_30484);

var G__30485 = seq__30472_30480;
var G__30486 = chunk__30473_30481;
var G__30487 = count__30474_30482;
var G__30488 = (i__30475_30483 + (1));
seq__30472_30480 = G__30485;
chunk__30473_30481 = G__30486;
count__30474_30482 = G__30487;
i__30475_30483 = G__30488;
continue;
} else {
var temp__4126__auto___30489 = cljs.core.seq.call(null,seq__30472_30480);
if(temp__4126__auto___30489){
var seq__30472_30490__$1 = temp__4126__auto___30489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30472_30490__$1)){
var c__4542__auto___30491 = cljs.core.chunk_first.call(null,seq__30472_30490__$1);
var G__30492 = cljs.core.chunk_rest.call(null,seq__30472_30490__$1);
var G__30493 = c__4542__auto___30491;
var G__30494 = cljs.core.count.call(null,c__4542__auto___30491);
var G__30495 = (0);
seq__30472_30480 = G__30492;
chunk__30473_30481 = G__30493;
count__30474_30482 = G__30494;
i__30475_30483 = G__30495;
continue;
} else {
var a_30496 = cljs.core.first.call(null,seq__30472_30490__$1);
crate.binding.bc_add.call(null,bc,a_30496,a_30496);

var G__30497 = cljs.core.next.call(null,seq__30472_30490__$1);
var G__30498 = null;
var G__30499 = (0);
var G__30500 = (0);
seq__30472_30480 = G__30497;
chunk__30473_30481 = G__30498;
count__30474_30482 = G__30499;
i__30475_30483 = G__30500;
continue;
}
} else {
}
}
break;
}

var seq__30476 = cljs.core.seq.call(null,removed);
var chunk__30477 = null;
var count__30478 = (0);
var i__30479 = (0);
while(true){
if((i__30479 < count__30478)){
var r = cljs.core._nth.call(null,chunk__30477,i__30479);
crate.binding.bc_remove.call(null,bc,r);

var G__30501 = seq__30476;
var G__30502 = chunk__30477;
var G__30503 = count__30478;
var G__30504 = (i__30479 + (1));
seq__30476 = G__30501;
chunk__30477 = G__30502;
count__30478 = G__30503;
i__30479 = G__30504;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30476);
if(temp__4126__auto__){
var seq__30476__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30476__$1)){
var c__4542__auto__ = cljs.core.chunk_first.call(null,seq__30476__$1);
var G__30505 = cljs.core.chunk_rest.call(null,seq__30476__$1);
var G__30506 = c__4542__auto__;
var G__30507 = cljs.core.count.call(null,c__4542__auto__);
var G__30508 = (0);
seq__30476 = G__30505;
chunk__30477 = G__30506;
count__30478 = G__30507;
i__30479 = G__30508;
continue;
} else {
var r = cljs.core.first.call(null,seq__30476__$1);
crate.binding.bc_remove.call(null,bc,r);

var G__30509 = cljs.core.next.call(null,seq__30476__$1);
var G__30510 = null;
var G__30511 = (0);
var G__30512 = (0);
seq__30476 = G__30509;
chunk__30477 = G__30510;
count__30478 = G__30511;
i__30479 = G__30512;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
* @param {...*} var_args
*/
crate.binding.bound_coll = (function() { 
var bound_coll__delegate = function (atm,p__30513){
var vec__30516 = p__30513;
var path = cljs.core.nth.call(null,vec__30516,(0),null);
var opts = cljs.core.nth.call(null,vec__30516,(1),null);
var vec__30517 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));
var path__$1 = cljs.core.nth.call(null,vec__30517,(0),null);
var opts__$1 = cljs.core.nth.call(null,vec__30517,(1),null);
var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));
var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",-188191168),path__$1);
var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));
cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (vec__30517,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__30516,path,opts){
return (function (_,___$1,___$2,neue){
return crate.binding.bc_compare.call(null,bc,neue);
});})(vec__30517,path__$1,opts__$1,atm__$1,opts__$2,opts__$3,bc,vec__30516,path,opts))
);

crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));

return bc;
};
var bound_coll = function (atm,var_args){
var p__30513 = null;
if (arguments.length > 1) {
var G__30518__i = 0, G__30518__a = new Array(arguments.length -  1);
while (G__30518__i < G__30518__a.length) {G__30518__a[G__30518__i] = arguments[G__30518__i + 1]; ++G__30518__i;}
  p__30513 = new cljs.core.IndexedSeq(G__30518__a,0);
} 
return bound_coll__delegate.call(this,atm,p__30513);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__30519){
var atm = cljs.core.first(arglist__30519);
var p__30513 = cljs.core.rest(arglist__30519);
return bound_coll__delegate(atm,p__30513);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__30520){
var vec__30522 = p__30520;
var opts = cljs.core.nth.call(null,vec__30522,(0),null);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1148689641),as);
var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts__$1)));
var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));
cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),((function (opts__$1,atm__$1,opts__$2,bc,vec__30522,opts){
return (function (_,___$1,___$2,neue){
return crate.binding.bc_compare.call(null,bc,neue);
});})(opts__$1,atm__$1,opts__$2,bc,vec__30522,opts))
);

crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));

return bc;
};
var map_bound = function (as,atm,var_args){
var p__30520 = null;
if (arguments.length > 2) {
var G__30523__i = 0, G__30523__a = new Array(arguments.length -  2);
while (G__30523__i < G__30523__a.length) {G__30523__a[G__30523__i] = arguments[G__30523__i + 2]; ++G__30523__i;}
  p__30520 = new cljs.core.IndexedSeq(G__30523__a,0);
} 
return map_bound__delegate.call(this,as,atm,p__30520);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__30524){
var as = cljs.core.first(arglist__30524);
arglist__30524 = cljs.core.next(arglist__30524);
var atm = cljs.core.first(arglist__30524);
var p__30520 = cljs.core.rest(arglist__30524);
return map_bound__delegate(as,atm,p__30520);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){
var G__30526 = b;
if(G__30526){
var bit__4436__auto__ = null;
if(cljs.core.truth_((function (){var or__3755__auto__ = bit__4436__auto__;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return G__30526.crate$binding$bindable$;
}
})())){
return true;
} else {
if((!G__30526.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__30526);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__30526);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){
var G__30528 = b;
if(G__30528){
var bit__4436__auto__ = null;
if(cljs.core.truth_((function (){var or__3755__auto__ = bit__4436__auto__;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return G__30528.crate$binding$bindable_coll$;
}
})())){
return true;
} else {
if((!G__30528.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__30528);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__30528);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){
var G__30530 = atm;
if(G__30530){
var bit__4436__auto__ = (G__30530.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4436__auto__) || (G__30530.cljs$core$IDeref$)){
return true;
} else {
if((!G__30530.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__30530);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__30530);
}
});
crate.binding.value = (function value(b){
return crate.binding._value.call(null,b);
});
crate.binding.index = (function index(sub_atom){
return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){
return crate.binding._on_change.call(null,b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__30531){
var vec__30533 = p__30531;
var func = cljs.core.nth.call(null,vec__30533,(0),null);
var func__$1 = (function (){var or__3755__auto__ = func;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return cljs.core.identity;
}
})();
return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__30531 = null;
if (arguments.length > 1) {
var G__30534__i = 0, G__30534__a = new Array(arguments.length -  1);
while (G__30534__i < G__30534__a.length) {G__30534__a[G__30534__i] = arguments[G__30534__i + 1]; ++G__30534__i;}
  p__30531 = new cljs.core.IndexedSeq(G__30534__a,0);
} 
return bound__delegate.call(this,atm,p__30531);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__30535){
var atm = cljs.core.first(arglist__30535);
var p__30531 = cljs.core.rest(arglist__30535);
return bound__delegate(atm,p__30531);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;

//# sourceMappingURL=binding.js.map