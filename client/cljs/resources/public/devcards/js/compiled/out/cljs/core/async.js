// Compiled by ClojureScript 0.0-2725 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t26363 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26363 = (function (f,fn_handler,meta26364){
this.f = f;
this.fn_handler = fn_handler;
this.meta26364 = meta26364;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26363.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26363.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26363.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26365){
var self__ = this;
var _26365__$1 = this;
return self__.meta26364;
});

cljs.core.async.t26363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26365,meta26364__$1){
var self__ = this;
var _26365__$1 = this;
return (new cljs.core.async.t26363(self__.f,self__.fn_handler,meta26364__$1));
});

cljs.core.async.t26363.cljs$lang$type = true;

cljs.core.async.t26363.cljs$lang$ctorStr = "cljs.core.async/t26363";

cljs.core.async.t26363.cljs$lang$ctorPrWriter = (function (this__4342__auto__,writer__4343__auto__,opt__4344__auto__){
return cljs.core._write.call(null,writer__4343__auto__,"cljs.core.async/t26363");
});

cljs.core.async.__GT_t26363 = (function __GT_t26363(f__$1,fn_handler__$1,meta26364){
return (new cljs.core.async.t26363(f__$1,fn_handler__$1,meta26364));
});

}

return (new cljs.core.async.t26363(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/shout/client/cljs/resources/public/devcards/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__26367 = buff;
if(G__26367){
var bit__4436__auto__ = null;
if(cljs.core.truth_((function (){var or__3755__auto__ = bit__4436__auto__;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return G__26367.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__26367.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26367);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26367);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26368 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26368);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26368,ret){
return (function (){
return fn1.call(null,val_26368);
});})(val_26368,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4642__auto___26369 = n;
var x_26370 = (0);
while(true){
if((x_26370 < n__4642__auto___26369)){
(a[x_26370] = (0));

var G__26371 = (x_26370 + (1));
x_26370 = G__26371;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26372 = (i + (1));
i = G__26372;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26376 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26376 = (function (flag,alt_flag,meta26377){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26377 = meta26377;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26376.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26376.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26376.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26376.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26378){
var self__ = this;
var _26378__$1 = this;
return self__.meta26377;
});})(flag))
;

cljs.core.async.t26376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26378,meta26377__$1){
var self__ = this;
var _26378__$1 = this;
return (new cljs.core.async.t26376(self__.flag,self__.alt_flag,meta26377__$1));
});})(flag))
;

cljs.core.async.t26376.cljs$lang$type = true;

cljs.core.async.t26376.cljs$lang$ctorStr = "cljs.core.async/t26376";

cljs.core.async.t26376.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4342__auto__,writer__4343__auto__,opt__4344__auto__){
return cljs.core._write.call(null,writer__4343__auto__,"cljs.core.async/t26376");
});})(flag))
;

cljs.core.async.__GT_t26376 = ((function (flag){
return (function __GT_t26376(flag__$1,alt_flag__$1,meta26377){
return (new cljs.core.async.t26376(flag__$1,alt_flag__$1,meta26377));
});})(flag))
;

}

return (new cljs.core.async.t26376(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/shout/client/cljs/resources/public/devcards/js/compiled/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t26382 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26382 = (function (cb,flag,alt_handler,meta26383){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26383 = meta26383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26382.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26382.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26382.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26384){
var self__ = this;
var _26384__$1 = this;
return self__.meta26383;
});

cljs.core.async.t26382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26384,meta26383__$1){
var self__ = this;
var _26384__$1 = this;
return (new cljs.core.async.t26382(self__.cb,self__.flag,self__.alt_handler,meta26383__$1));
});

cljs.core.async.t26382.cljs$lang$type = true;

cljs.core.async.t26382.cljs$lang$ctorStr = "cljs.core.async/t26382";

cljs.core.async.t26382.cljs$lang$ctorPrWriter = (function (this__4342__auto__,writer__4343__auto__,opt__4344__auto__){
return cljs.core._write.call(null,writer__4343__auto__,"cljs.core.async/t26382");
});

cljs.core.async.__GT_t26382 = (function __GT_t26382(cb__$1,flag__$1,alt_handler__$1,meta26383){
return (new cljs.core.async.t26382(cb__$1,flag__$1,alt_handler__$1,meta26383));
});

}

return (new cljs.core.async.t26382(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/shout/client/cljs/resources/public/devcards/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26385_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26385_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26386_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26386_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3755__auto__ = wport;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26387 = (i + (1));
i = G__26387;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3755__auto__ = ret;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3743__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3743__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3743__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__26388){
var map__26390 = p__26388;
var map__26390__$1 = ((cljs.core.seq_QMARK_.call(null,map__26390))?cljs.core.apply.call(null,cljs.core.hash_map,map__26390):map__26390);
var opts = map__26390__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__26388 = null;
if (arguments.length > 1) {
var G__26391__i = 0, G__26391__a = new Array(arguments.length -  1);
while (G__26391__i < G__26391__a.length) {G__26391__a[G__26391__i] = arguments[G__26391__i + 1]; ++G__26391__i;}
  p__26388 = new cljs.core.IndexedSeq(G__26391__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__26388);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__26392){
var ports = cljs.core.first(arglist__26392);
var p__26388 = cljs.core.rest(arglist__26392);
return alts_BANG___delegate(ports,p__26388);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__13512__auto___26487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto___26487){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto___26487){
return (function (state_26463){
var state_val_26464 = (state_26463[(1)]);
if((state_val_26464 === (7))){
var inst_26459 = (state_26463[(2)]);
var state_26463__$1 = state_26463;
var statearr_26465_26488 = state_26463__$1;
(statearr_26465_26488[(2)] = inst_26459);

(statearr_26465_26488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26464 === (1))){
var state_26463__$1 = state_26463;
var statearr_26466_26489 = state_26463__$1;
(statearr_26466_26489[(2)] = null);

(statearr_26466_26489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26464 === (4))){
var inst_26442 = (state_26463[(7)]);
var inst_26442__$1 = (state_26463[(2)]);
var inst_26443 = (inst_26442__$1 == null);
var state_26463__$1 = (function (){var statearr_26467 = state_26463;
(statearr_26467[(7)] = inst_26442__$1);

return statearr_26467;
})();
if(cljs.core.truth_(inst_26443)){
var statearr_26468_26490 = state_26463__$1;
(statearr_26468_26490[(1)] = (5));

} else {
var statearr_26469_26491 = state_26463__$1;
(statearr_26469_26491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26464 === (13))){
var state_26463__$1 = state_26463;
var statearr_26470_26492 = state_26463__$1;
(statearr_26470_26492[(2)] = null);

(statearr_26470_26492[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26464 === (6))){
var inst_26442 = (state_26463[(7)]);
var state_26463__$1 = state_26463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26463__$1,(11),to,inst_26442);
} else {
if((state_val_26464 === (3))){
var inst_26461 = (state_26463[(2)]);
var state_26463__$1 = state_26463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26463__$1,inst_26461);
} else {
if((state_val_26464 === (12))){
var state_26463__$1 = state_26463;
var statearr_26471_26493 = state_26463__$1;
(statearr_26471_26493[(2)] = null);

(statearr_26471_26493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26464 === (2))){
var state_26463__$1 = state_26463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26463__$1,(4),from);
} else {
if((state_val_26464 === (11))){
var inst_26452 = (state_26463[(2)]);
var state_26463__$1 = state_26463;
if(cljs.core.truth_(inst_26452)){
var statearr_26472_26494 = state_26463__$1;
(statearr_26472_26494[(1)] = (12));

} else {
var statearr_26473_26495 = state_26463__$1;
(statearr_26473_26495[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26464 === (9))){
var state_26463__$1 = state_26463;
var statearr_26474_26496 = state_26463__$1;
(statearr_26474_26496[(2)] = null);

(statearr_26474_26496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26464 === (5))){
var state_26463__$1 = state_26463;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26475_26497 = state_26463__$1;
(statearr_26475_26497[(1)] = (8));

} else {
var statearr_26476_26498 = state_26463__$1;
(statearr_26476_26498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26464 === (14))){
var inst_26457 = (state_26463[(2)]);
var state_26463__$1 = state_26463;
var statearr_26477_26499 = state_26463__$1;
(statearr_26477_26499[(2)] = inst_26457);

(statearr_26477_26499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26464 === (10))){
var inst_26449 = (state_26463[(2)]);
var state_26463__$1 = state_26463;
var statearr_26478_26500 = state_26463__$1;
(statearr_26478_26500[(2)] = inst_26449);

(statearr_26478_26500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26464 === (8))){
var inst_26446 = cljs.core.async.close_BANG_.call(null,to);
var state_26463__$1 = state_26463;
var statearr_26479_26501 = state_26463__$1;
(statearr_26479_26501[(2)] = inst_26446);

(statearr_26479_26501[(1)] = (10));


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
}
}
}
}
});})(c__13512__auto___26487))
;
return ((function (switch__13456__auto__,c__13512__auto___26487){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_26483 = [null,null,null,null,null,null,null,null];
(statearr_26483[(0)] = state_machine__13457__auto__);

(statearr_26483[(1)] = (1));

return statearr_26483;
});
var state_machine__13457__auto____1 = (function (state_26463){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_26463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e26484){if((e26484 instanceof Object)){
var ex__13460__auto__ = e26484;
var statearr_26485_26502 = state_26463;
(statearr_26485_26502[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26503 = state_26463;
state_26463 = G__26503;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_26463){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_26463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto___26487))
})();
var state__13514__auto__ = (function (){var statearr_26486 = f__13513__auto__.call(null);
(statearr_26486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto___26487);

return statearr_26486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto___26487))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26687){
var vec__26688 = p__26687;
var v = cljs.core.nth.call(null,vec__26688,(0),null);
var p = cljs.core.nth.call(null,vec__26688,(1),null);
var job = vec__26688;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__13512__auto___26870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto___26870,res,vec__26688,v,p,job,jobs,results){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto___26870,res,vec__26688,v,p,job,jobs,results){
return (function (state_26693){
var state_val_26694 = (state_26693[(1)]);
if((state_val_26694 === (2))){
var inst_26690 = (state_26693[(2)]);
var inst_26691 = cljs.core.async.close_BANG_.call(null,res);
var state_26693__$1 = (function (){var statearr_26695 = state_26693;
(statearr_26695[(7)] = inst_26690);

return statearr_26695;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26693__$1,inst_26691);
} else {
if((state_val_26694 === (1))){
var state_26693__$1 = state_26693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26693__$1,(2),res,v);
} else {
return null;
}
}
});})(c__13512__auto___26870,res,vec__26688,v,p,job,jobs,results))
;
return ((function (switch__13456__auto__,c__13512__auto___26870,res,vec__26688,v,p,job,jobs,results){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_26699 = [null,null,null,null,null,null,null,null];
(statearr_26699[(0)] = state_machine__13457__auto__);

(statearr_26699[(1)] = (1));

return statearr_26699;
});
var state_machine__13457__auto____1 = (function (state_26693){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_26693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e26700){if((e26700 instanceof Object)){
var ex__13460__auto__ = e26700;
var statearr_26701_26871 = state_26693;
(statearr_26701_26871[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26872 = state_26693;
state_26693 = G__26872;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_26693){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_26693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto___26870,res,vec__26688,v,p,job,jobs,results))
})();
var state__13514__auto__ = (function (){var statearr_26702 = f__13513__auto__.call(null);
(statearr_26702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto___26870);

return statearr_26702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto___26870,res,vec__26688,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26703){
var vec__26704 = p__26703;
var v = cljs.core.nth.call(null,vec__26704,(0),null);
var p = cljs.core.nth.call(null,vec__26704,(1),null);
var job = vec__26704;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4642__auto___26873 = n;
var __26874 = (0);
while(true){
if((__26874 < n__4642__auto___26873)){
var G__26705_26875 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26705_26875) {
case "async":
var c__13512__auto___26877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26874,c__13512__auto___26877,G__26705_26875,n__4642__auto___26873,jobs,results,process,async){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (__26874,c__13512__auto___26877,G__26705_26875,n__4642__auto___26873,jobs,results,process,async){
return (function (state_26718){
var state_val_26719 = (state_26718[(1)]);
if((state_val_26719 === (7))){
var inst_26714 = (state_26718[(2)]);
var state_26718__$1 = state_26718;
var statearr_26720_26878 = state_26718__$1;
(statearr_26720_26878[(2)] = inst_26714);

(statearr_26720_26878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (6))){
var state_26718__$1 = state_26718;
var statearr_26721_26879 = state_26718__$1;
(statearr_26721_26879[(2)] = null);

(statearr_26721_26879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (5))){
var state_26718__$1 = state_26718;
var statearr_26722_26880 = state_26718__$1;
(statearr_26722_26880[(2)] = null);

(statearr_26722_26880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (4))){
var inst_26708 = (state_26718[(2)]);
var inst_26709 = async.call(null,inst_26708);
var state_26718__$1 = state_26718;
if(cljs.core.truth_(inst_26709)){
var statearr_26723_26881 = state_26718__$1;
(statearr_26723_26881[(1)] = (5));

} else {
var statearr_26724_26882 = state_26718__$1;
(statearr_26724_26882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (3))){
var inst_26716 = (state_26718[(2)]);
var state_26718__$1 = state_26718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26718__$1,inst_26716);
} else {
if((state_val_26719 === (2))){
var state_26718__$1 = state_26718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26718__$1,(4),jobs);
} else {
if((state_val_26719 === (1))){
var state_26718__$1 = state_26718;
var statearr_26725_26883 = state_26718__$1;
(statearr_26725_26883[(2)] = null);

(statearr_26725_26883[(1)] = (2));


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
});})(__26874,c__13512__auto___26877,G__26705_26875,n__4642__auto___26873,jobs,results,process,async))
;
return ((function (__26874,switch__13456__auto__,c__13512__auto___26877,G__26705_26875,n__4642__auto___26873,jobs,results,process,async){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_26729 = [null,null,null,null,null,null,null];
(statearr_26729[(0)] = state_machine__13457__auto__);

(statearr_26729[(1)] = (1));

return statearr_26729;
});
var state_machine__13457__auto____1 = (function (state_26718){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_26718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e26730){if((e26730 instanceof Object)){
var ex__13460__auto__ = e26730;
var statearr_26731_26884 = state_26718;
(statearr_26731_26884[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26885 = state_26718;
state_26718 = G__26885;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_26718){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_26718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(__26874,switch__13456__auto__,c__13512__auto___26877,G__26705_26875,n__4642__auto___26873,jobs,results,process,async))
})();
var state__13514__auto__ = (function (){var statearr_26732 = f__13513__auto__.call(null);
(statearr_26732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto___26877);

return statearr_26732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(__26874,c__13512__auto___26877,G__26705_26875,n__4642__auto___26873,jobs,results,process,async))
);


break;
case "compute":
var c__13512__auto___26886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26874,c__13512__auto___26886,G__26705_26875,n__4642__auto___26873,jobs,results,process,async){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (__26874,c__13512__auto___26886,G__26705_26875,n__4642__auto___26873,jobs,results,process,async){
return (function (state_26745){
var state_val_26746 = (state_26745[(1)]);
if((state_val_26746 === (7))){
var inst_26741 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
var statearr_26747_26887 = state_26745__$1;
(statearr_26747_26887[(2)] = inst_26741);

(statearr_26747_26887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (6))){
var state_26745__$1 = state_26745;
var statearr_26748_26888 = state_26745__$1;
(statearr_26748_26888[(2)] = null);

(statearr_26748_26888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (5))){
var state_26745__$1 = state_26745;
var statearr_26749_26889 = state_26745__$1;
(statearr_26749_26889[(2)] = null);

(statearr_26749_26889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (4))){
var inst_26735 = (state_26745[(2)]);
var inst_26736 = process.call(null,inst_26735);
var state_26745__$1 = state_26745;
if(cljs.core.truth_(inst_26736)){
var statearr_26750_26890 = state_26745__$1;
(statearr_26750_26890[(1)] = (5));

} else {
var statearr_26751_26891 = state_26745__$1;
(statearr_26751_26891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26746 === (3))){
var inst_26743 = (state_26745[(2)]);
var state_26745__$1 = state_26745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26745__$1,inst_26743);
} else {
if((state_val_26746 === (2))){
var state_26745__$1 = state_26745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26745__$1,(4),jobs);
} else {
if((state_val_26746 === (1))){
var state_26745__$1 = state_26745;
var statearr_26752_26892 = state_26745__$1;
(statearr_26752_26892[(2)] = null);

(statearr_26752_26892[(1)] = (2));


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
});})(__26874,c__13512__auto___26886,G__26705_26875,n__4642__auto___26873,jobs,results,process,async))
;
return ((function (__26874,switch__13456__auto__,c__13512__auto___26886,G__26705_26875,n__4642__auto___26873,jobs,results,process,async){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_26756 = [null,null,null,null,null,null,null];
(statearr_26756[(0)] = state_machine__13457__auto__);

(statearr_26756[(1)] = (1));

return statearr_26756;
});
var state_machine__13457__auto____1 = (function (state_26745){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_26745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e26757){if((e26757 instanceof Object)){
var ex__13460__auto__ = e26757;
var statearr_26758_26893 = state_26745;
(statearr_26758_26893[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26894 = state_26745;
state_26745 = G__26894;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_26745){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_26745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(__26874,switch__13456__auto__,c__13512__auto___26886,G__26705_26875,n__4642__auto___26873,jobs,results,process,async))
})();
var state__13514__auto__ = (function (){var statearr_26759 = f__13513__auto__.call(null);
(statearr_26759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto___26886);

return statearr_26759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(__26874,c__13512__auto___26886,G__26705_26875,n__4642__auto___26873,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26895 = (__26874 + (1));
__26874 = G__26895;
continue;
} else {
}
break;
}

var c__13512__auto___26896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto___26896,jobs,results,process,async){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto___26896,jobs,results,process,async){
return (function (state_26781){
var state_val_26782 = (state_26781[(1)]);
if((state_val_26782 === (9))){
var inst_26774 = (state_26781[(2)]);
var state_26781__$1 = (function (){var statearr_26783 = state_26781;
(statearr_26783[(7)] = inst_26774);

return statearr_26783;
})();
var statearr_26784_26897 = state_26781__$1;
(statearr_26784_26897[(2)] = null);

(statearr_26784_26897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26782 === (8))){
var inst_26767 = (state_26781[(8)]);
var inst_26772 = (state_26781[(2)]);
var state_26781__$1 = (function (){var statearr_26785 = state_26781;
(statearr_26785[(9)] = inst_26772);

return statearr_26785;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26781__$1,(9),results,inst_26767);
} else {
if((state_val_26782 === (7))){
var inst_26777 = (state_26781[(2)]);
var state_26781__$1 = state_26781;
var statearr_26786_26898 = state_26781__$1;
(statearr_26786_26898[(2)] = inst_26777);

(statearr_26786_26898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26782 === (6))){
var inst_26767 = (state_26781[(8)]);
var inst_26762 = (state_26781[(10)]);
var inst_26767__$1 = cljs.core.async.chan.call(null,(1));
var inst_26768 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26769 = [inst_26762,inst_26767__$1];
var inst_26770 = (new cljs.core.PersistentVector(null,2,(5),inst_26768,inst_26769,null));
var state_26781__$1 = (function (){var statearr_26787 = state_26781;
(statearr_26787[(8)] = inst_26767__$1);

return statearr_26787;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26781__$1,(8),jobs,inst_26770);
} else {
if((state_val_26782 === (5))){
var inst_26765 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26781__$1 = state_26781;
var statearr_26788_26899 = state_26781__$1;
(statearr_26788_26899[(2)] = inst_26765);

(statearr_26788_26899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26782 === (4))){
var inst_26762 = (state_26781[(10)]);
var inst_26762__$1 = (state_26781[(2)]);
var inst_26763 = (inst_26762__$1 == null);
var state_26781__$1 = (function (){var statearr_26789 = state_26781;
(statearr_26789[(10)] = inst_26762__$1);

return statearr_26789;
})();
if(cljs.core.truth_(inst_26763)){
var statearr_26790_26900 = state_26781__$1;
(statearr_26790_26900[(1)] = (5));

} else {
var statearr_26791_26901 = state_26781__$1;
(statearr_26791_26901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26782 === (3))){
var inst_26779 = (state_26781[(2)]);
var state_26781__$1 = state_26781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26781__$1,inst_26779);
} else {
if((state_val_26782 === (2))){
var state_26781__$1 = state_26781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26781__$1,(4),from);
} else {
if((state_val_26782 === (1))){
var state_26781__$1 = state_26781;
var statearr_26792_26902 = state_26781__$1;
(statearr_26792_26902[(2)] = null);

(statearr_26792_26902[(1)] = (2));


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
});})(c__13512__auto___26896,jobs,results,process,async))
;
return ((function (switch__13456__auto__,c__13512__auto___26896,jobs,results,process,async){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_26796 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26796[(0)] = state_machine__13457__auto__);

(statearr_26796[(1)] = (1));

return statearr_26796;
});
var state_machine__13457__auto____1 = (function (state_26781){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_26781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e26797){if((e26797 instanceof Object)){
var ex__13460__auto__ = e26797;
var statearr_26798_26903 = state_26781;
(statearr_26798_26903[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26904 = state_26781;
state_26781 = G__26904;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_26781){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_26781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto___26896,jobs,results,process,async))
})();
var state__13514__auto__ = (function (){var statearr_26799 = f__13513__auto__.call(null);
(statearr_26799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto___26896);

return statearr_26799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto___26896,jobs,results,process,async))
);


var c__13512__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto__,jobs,results,process,async){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto__,jobs,results,process,async){
return (function (state_26837){
var state_val_26838 = (state_26837[(1)]);
if((state_val_26838 === (7))){
var inst_26833 = (state_26837[(2)]);
var state_26837__$1 = state_26837;
var statearr_26839_26905 = state_26837__$1;
(statearr_26839_26905[(2)] = inst_26833);

(statearr_26839_26905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (20))){
var state_26837__$1 = state_26837;
var statearr_26840_26906 = state_26837__$1;
(statearr_26840_26906[(2)] = null);

(statearr_26840_26906[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (1))){
var state_26837__$1 = state_26837;
var statearr_26841_26907 = state_26837__$1;
(statearr_26841_26907[(2)] = null);

(statearr_26841_26907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (4))){
var inst_26802 = (state_26837[(7)]);
var inst_26802__$1 = (state_26837[(2)]);
var inst_26803 = (inst_26802__$1 == null);
var state_26837__$1 = (function (){var statearr_26842 = state_26837;
(statearr_26842[(7)] = inst_26802__$1);

return statearr_26842;
})();
if(cljs.core.truth_(inst_26803)){
var statearr_26843_26908 = state_26837__$1;
(statearr_26843_26908[(1)] = (5));

} else {
var statearr_26844_26909 = state_26837__$1;
(statearr_26844_26909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (15))){
var inst_26815 = (state_26837[(8)]);
var state_26837__$1 = state_26837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26837__$1,(18),to,inst_26815);
} else {
if((state_val_26838 === (21))){
var inst_26828 = (state_26837[(2)]);
var state_26837__$1 = state_26837;
var statearr_26845_26910 = state_26837__$1;
(statearr_26845_26910[(2)] = inst_26828);

(statearr_26845_26910[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (13))){
var inst_26830 = (state_26837[(2)]);
var state_26837__$1 = (function (){var statearr_26846 = state_26837;
(statearr_26846[(9)] = inst_26830);

return statearr_26846;
})();
var statearr_26847_26911 = state_26837__$1;
(statearr_26847_26911[(2)] = null);

(statearr_26847_26911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (6))){
var inst_26802 = (state_26837[(7)]);
var state_26837__$1 = state_26837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26837__$1,(11),inst_26802);
} else {
if((state_val_26838 === (17))){
var inst_26823 = (state_26837[(2)]);
var state_26837__$1 = state_26837;
if(cljs.core.truth_(inst_26823)){
var statearr_26848_26912 = state_26837__$1;
(statearr_26848_26912[(1)] = (19));

} else {
var statearr_26849_26913 = state_26837__$1;
(statearr_26849_26913[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (3))){
var inst_26835 = (state_26837[(2)]);
var state_26837__$1 = state_26837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26837__$1,inst_26835);
} else {
if((state_val_26838 === (12))){
var inst_26812 = (state_26837[(10)]);
var state_26837__$1 = state_26837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26837__$1,(14),inst_26812);
} else {
if((state_val_26838 === (2))){
var state_26837__$1 = state_26837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26837__$1,(4),results);
} else {
if((state_val_26838 === (19))){
var state_26837__$1 = state_26837;
var statearr_26850_26914 = state_26837__$1;
(statearr_26850_26914[(2)] = null);

(statearr_26850_26914[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (11))){
var inst_26812 = (state_26837[(2)]);
var state_26837__$1 = (function (){var statearr_26851 = state_26837;
(statearr_26851[(10)] = inst_26812);

return statearr_26851;
})();
var statearr_26852_26915 = state_26837__$1;
(statearr_26852_26915[(2)] = null);

(statearr_26852_26915[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (9))){
var state_26837__$1 = state_26837;
var statearr_26853_26916 = state_26837__$1;
(statearr_26853_26916[(2)] = null);

(statearr_26853_26916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (5))){
var state_26837__$1 = state_26837;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26854_26917 = state_26837__$1;
(statearr_26854_26917[(1)] = (8));

} else {
var statearr_26855_26918 = state_26837__$1;
(statearr_26855_26918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (14))){
var inst_26815 = (state_26837[(8)]);
var inst_26817 = (state_26837[(11)]);
var inst_26815__$1 = (state_26837[(2)]);
var inst_26816 = (inst_26815__$1 == null);
var inst_26817__$1 = cljs.core.not.call(null,inst_26816);
var state_26837__$1 = (function (){var statearr_26856 = state_26837;
(statearr_26856[(8)] = inst_26815__$1);

(statearr_26856[(11)] = inst_26817__$1);

return statearr_26856;
})();
if(inst_26817__$1){
var statearr_26857_26919 = state_26837__$1;
(statearr_26857_26919[(1)] = (15));

} else {
var statearr_26858_26920 = state_26837__$1;
(statearr_26858_26920[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (16))){
var inst_26817 = (state_26837[(11)]);
var state_26837__$1 = state_26837;
var statearr_26859_26921 = state_26837__$1;
(statearr_26859_26921[(2)] = inst_26817);

(statearr_26859_26921[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (10))){
var inst_26809 = (state_26837[(2)]);
var state_26837__$1 = state_26837;
var statearr_26860_26922 = state_26837__$1;
(statearr_26860_26922[(2)] = inst_26809);

(statearr_26860_26922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (18))){
var inst_26820 = (state_26837[(2)]);
var state_26837__$1 = state_26837;
var statearr_26861_26923 = state_26837__$1;
(statearr_26861_26923[(2)] = inst_26820);

(statearr_26861_26923[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26838 === (8))){
var inst_26806 = cljs.core.async.close_BANG_.call(null,to);
var state_26837__$1 = state_26837;
var statearr_26862_26924 = state_26837__$1;
(statearr_26862_26924[(2)] = inst_26806);

(statearr_26862_26924[(1)] = (10));


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
}
});})(c__13512__auto__,jobs,results,process,async))
;
return ((function (switch__13456__auto__,c__13512__auto__,jobs,results,process,async){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_26866 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26866[(0)] = state_machine__13457__auto__);

(statearr_26866[(1)] = (1));

return statearr_26866;
});
var state_machine__13457__auto____1 = (function (state_26837){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_26837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e26867){if((e26867 instanceof Object)){
var ex__13460__auto__ = e26867;
var statearr_26868_26925 = state_26837;
(statearr_26868_26925[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26926 = state_26837;
state_26837 = G__26926;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_26837){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_26837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto__,jobs,results,process,async))
})();
var state__13514__auto__ = (function (){var statearr_26869 = f__13513__auto__.call(null);
(statearr_26869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto__);

return statearr_26869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto__,jobs,results,process,async))
);

return c__13512__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__13512__auto___27027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto___27027,tc,fc){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto___27027,tc,fc){
return (function (state_27002){
var state_val_27003 = (state_27002[(1)]);
if((state_val_27003 === (7))){
var inst_26998 = (state_27002[(2)]);
var state_27002__$1 = state_27002;
var statearr_27004_27028 = state_27002__$1;
(statearr_27004_27028[(2)] = inst_26998);

(statearr_27004_27028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (1))){
var state_27002__$1 = state_27002;
var statearr_27005_27029 = state_27002__$1;
(statearr_27005_27029[(2)] = null);

(statearr_27005_27029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (4))){
var inst_26979 = (state_27002[(7)]);
var inst_26979__$1 = (state_27002[(2)]);
var inst_26980 = (inst_26979__$1 == null);
var state_27002__$1 = (function (){var statearr_27006 = state_27002;
(statearr_27006[(7)] = inst_26979__$1);

return statearr_27006;
})();
if(cljs.core.truth_(inst_26980)){
var statearr_27007_27030 = state_27002__$1;
(statearr_27007_27030[(1)] = (5));

} else {
var statearr_27008_27031 = state_27002__$1;
(statearr_27008_27031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (13))){
var state_27002__$1 = state_27002;
var statearr_27009_27032 = state_27002__$1;
(statearr_27009_27032[(2)] = null);

(statearr_27009_27032[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (6))){
var inst_26979 = (state_27002[(7)]);
var inst_26985 = p.call(null,inst_26979);
var state_27002__$1 = state_27002;
if(cljs.core.truth_(inst_26985)){
var statearr_27010_27033 = state_27002__$1;
(statearr_27010_27033[(1)] = (9));

} else {
var statearr_27011_27034 = state_27002__$1;
(statearr_27011_27034[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (3))){
var inst_27000 = (state_27002[(2)]);
var state_27002__$1 = state_27002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27002__$1,inst_27000);
} else {
if((state_val_27003 === (12))){
var state_27002__$1 = state_27002;
var statearr_27012_27035 = state_27002__$1;
(statearr_27012_27035[(2)] = null);

(statearr_27012_27035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (2))){
var state_27002__$1 = state_27002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27002__$1,(4),ch);
} else {
if((state_val_27003 === (11))){
var inst_26979 = (state_27002[(7)]);
var inst_26989 = (state_27002[(2)]);
var state_27002__$1 = state_27002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27002__$1,(8),inst_26989,inst_26979);
} else {
if((state_val_27003 === (9))){
var state_27002__$1 = state_27002;
var statearr_27013_27036 = state_27002__$1;
(statearr_27013_27036[(2)] = tc);

(statearr_27013_27036[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (5))){
var inst_26982 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26983 = cljs.core.async.close_BANG_.call(null,fc);
var state_27002__$1 = (function (){var statearr_27014 = state_27002;
(statearr_27014[(8)] = inst_26982);

return statearr_27014;
})();
var statearr_27015_27037 = state_27002__$1;
(statearr_27015_27037[(2)] = inst_26983);

(statearr_27015_27037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (14))){
var inst_26996 = (state_27002[(2)]);
var state_27002__$1 = state_27002;
var statearr_27016_27038 = state_27002__$1;
(statearr_27016_27038[(2)] = inst_26996);

(statearr_27016_27038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (10))){
var state_27002__$1 = state_27002;
var statearr_27017_27039 = state_27002__$1;
(statearr_27017_27039[(2)] = fc);

(statearr_27017_27039[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (8))){
var inst_26991 = (state_27002[(2)]);
var state_27002__$1 = state_27002;
if(cljs.core.truth_(inst_26991)){
var statearr_27018_27040 = state_27002__$1;
(statearr_27018_27040[(1)] = (12));

} else {
var statearr_27019_27041 = state_27002__$1;
(statearr_27019_27041[(1)] = (13));

}

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
}
}
}
}
});})(c__13512__auto___27027,tc,fc))
;
return ((function (switch__13456__auto__,c__13512__auto___27027,tc,fc){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_27023 = [null,null,null,null,null,null,null,null,null];
(statearr_27023[(0)] = state_machine__13457__auto__);

(statearr_27023[(1)] = (1));

return statearr_27023;
});
var state_machine__13457__auto____1 = (function (state_27002){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_27002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e27024){if((e27024 instanceof Object)){
var ex__13460__auto__ = e27024;
var statearr_27025_27042 = state_27002;
(statearr_27025_27042[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27043 = state_27002;
state_27002 = G__27043;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_27002){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_27002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto___27027,tc,fc))
})();
var state__13514__auto__ = (function (){var statearr_27026 = f__13513__auto__.call(null);
(statearr_27026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto___27027);

return statearr_27026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto___27027,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__13512__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto__){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto__){
return (function (state_27090){
var state_val_27091 = (state_27090[(1)]);
if((state_val_27091 === (7))){
var inst_27086 = (state_27090[(2)]);
var state_27090__$1 = state_27090;
var statearr_27092_27108 = state_27090__$1;
(statearr_27092_27108[(2)] = inst_27086);

(statearr_27092_27108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (6))){
var inst_27076 = (state_27090[(7)]);
var inst_27079 = (state_27090[(8)]);
var inst_27083 = f.call(null,inst_27076,inst_27079);
var inst_27076__$1 = inst_27083;
var state_27090__$1 = (function (){var statearr_27093 = state_27090;
(statearr_27093[(7)] = inst_27076__$1);

return statearr_27093;
})();
var statearr_27094_27109 = state_27090__$1;
(statearr_27094_27109[(2)] = null);

(statearr_27094_27109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (5))){
var inst_27076 = (state_27090[(7)]);
var state_27090__$1 = state_27090;
var statearr_27095_27110 = state_27090__$1;
(statearr_27095_27110[(2)] = inst_27076);

(statearr_27095_27110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (4))){
var inst_27079 = (state_27090[(8)]);
var inst_27079__$1 = (state_27090[(2)]);
var inst_27080 = (inst_27079__$1 == null);
var state_27090__$1 = (function (){var statearr_27096 = state_27090;
(statearr_27096[(8)] = inst_27079__$1);

return statearr_27096;
})();
if(cljs.core.truth_(inst_27080)){
var statearr_27097_27111 = state_27090__$1;
(statearr_27097_27111[(1)] = (5));

} else {
var statearr_27098_27112 = state_27090__$1;
(statearr_27098_27112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (3))){
var inst_27088 = (state_27090[(2)]);
var state_27090__$1 = state_27090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27090__$1,inst_27088);
} else {
if((state_val_27091 === (2))){
var state_27090__$1 = state_27090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27090__$1,(4),ch);
} else {
if((state_val_27091 === (1))){
var inst_27076 = init;
var state_27090__$1 = (function (){var statearr_27099 = state_27090;
(statearr_27099[(7)] = inst_27076);

return statearr_27099;
})();
var statearr_27100_27113 = state_27090__$1;
(statearr_27100_27113[(2)] = null);

(statearr_27100_27113[(1)] = (2));


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
var statearr_27104 = [null,null,null,null,null,null,null,null,null];
(statearr_27104[(0)] = state_machine__13457__auto__);

(statearr_27104[(1)] = (1));

return statearr_27104;
});
var state_machine__13457__auto____1 = (function (state_27090){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_27090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e27105){if((e27105 instanceof Object)){
var ex__13460__auto__ = e27105;
var statearr_27106_27114 = state_27090;
(statearr_27106_27114[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27115 = state_27090;
state_27090 = G__27115;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_27090){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_27090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto__))
})();
var state__13514__auto__ = (function (){var statearr_27107 = f__13513__auto__.call(null);
(statearr_27107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto__);

return statearr_27107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto__))
);

return c__13512__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__13512__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto__){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto__){
return (function (state_27189){
var state_val_27190 = (state_27189[(1)]);
if((state_val_27190 === (7))){
var inst_27171 = (state_27189[(2)]);
var state_27189__$1 = state_27189;
var statearr_27191_27214 = state_27189__$1;
(statearr_27191_27214[(2)] = inst_27171);

(statearr_27191_27214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27190 === (1))){
var inst_27165 = cljs.core.seq.call(null,coll);
var inst_27166 = inst_27165;
var state_27189__$1 = (function (){var statearr_27192 = state_27189;
(statearr_27192[(7)] = inst_27166);

return statearr_27192;
})();
var statearr_27193_27215 = state_27189__$1;
(statearr_27193_27215[(2)] = null);

(statearr_27193_27215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27190 === (4))){
var inst_27166 = (state_27189[(7)]);
var inst_27169 = cljs.core.first.call(null,inst_27166);
var state_27189__$1 = state_27189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27189__$1,(7),ch,inst_27169);
} else {
if((state_val_27190 === (13))){
var inst_27183 = (state_27189[(2)]);
var state_27189__$1 = state_27189;
var statearr_27194_27216 = state_27189__$1;
(statearr_27194_27216[(2)] = inst_27183);

(statearr_27194_27216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27190 === (6))){
var inst_27174 = (state_27189[(2)]);
var state_27189__$1 = state_27189;
if(cljs.core.truth_(inst_27174)){
var statearr_27195_27217 = state_27189__$1;
(statearr_27195_27217[(1)] = (8));

} else {
var statearr_27196_27218 = state_27189__$1;
(statearr_27196_27218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27190 === (3))){
var inst_27187 = (state_27189[(2)]);
var state_27189__$1 = state_27189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27189__$1,inst_27187);
} else {
if((state_val_27190 === (12))){
var state_27189__$1 = state_27189;
var statearr_27197_27219 = state_27189__$1;
(statearr_27197_27219[(2)] = null);

(statearr_27197_27219[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27190 === (2))){
var inst_27166 = (state_27189[(7)]);
var state_27189__$1 = state_27189;
if(cljs.core.truth_(inst_27166)){
var statearr_27198_27220 = state_27189__$1;
(statearr_27198_27220[(1)] = (4));

} else {
var statearr_27199_27221 = state_27189__$1;
(statearr_27199_27221[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27190 === (11))){
var inst_27180 = cljs.core.async.close_BANG_.call(null,ch);
var state_27189__$1 = state_27189;
var statearr_27200_27222 = state_27189__$1;
(statearr_27200_27222[(2)] = inst_27180);

(statearr_27200_27222[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27190 === (9))){
var state_27189__$1 = state_27189;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27201_27223 = state_27189__$1;
(statearr_27201_27223[(1)] = (11));

} else {
var statearr_27202_27224 = state_27189__$1;
(statearr_27202_27224[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27190 === (5))){
var inst_27166 = (state_27189[(7)]);
var state_27189__$1 = state_27189;
var statearr_27203_27225 = state_27189__$1;
(statearr_27203_27225[(2)] = inst_27166);

(statearr_27203_27225[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27190 === (10))){
var inst_27185 = (state_27189[(2)]);
var state_27189__$1 = state_27189;
var statearr_27204_27226 = state_27189__$1;
(statearr_27204_27226[(2)] = inst_27185);

(statearr_27204_27226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27190 === (8))){
var inst_27166 = (state_27189[(7)]);
var inst_27176 = cljs.core.next.call(null,inst_27166);
var inst_27166__$1 = inst_27176;
var state_27189__$1 = (function (){var statearr_27205 = state_27189;
(statearr_27205[(7)] = inst_27166__$1);

return statearr_27205;
})();
var statearr_27206_27227 = state_27189__$1;
(statearr_27206_27227[(2)] = null);

(statearr_27206_27227[(1)] = (2));


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
}
}
}
});})(c__13512__auto__))
;
return ((function (switch__13456__auto__,c__13512__auto__){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_27210 = [null,null,null,null,null,null,null,null];
(statearr_27210[(0)] = state_machine__13457__auto__);

(statearr_27210[(1)] = (1));

return statearr_27210;
});
var state_machine__13457__auto____1 = (function (state_27189){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_27189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e27211){if((e27211 instanceof Object)){
var ex__13460__auto__ = e27211;
var statearr_27212_27228 = state_27189;
(statearr_27212_27228[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27229 = state_27189;
state_27189 = G__27229;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_27189){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_27189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto__))
})();
var state__13514__auto__ = (function (){var statearr_27213 = f__13513__auto__.call(null);
(statearr_27213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto__);

return statearr_27213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto__))
);

return c__13512__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj27231 = {};
return obj27231;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3743__auto__ = _;
if(and__3743__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3743__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4399__auto__ = (((_ == null))?null:_);
return (function (){var or__3755__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj27233 = {};
return obj27233;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3743__auto__ = m;
if(and__3743__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3743__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4399__auto__ = (((m == null))?null:m);
return (function (){var or__3755__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3743__auto__ = m;
if(and__3743__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3743__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4399__auto__ = (((m == null))?null:m);
return (function (){var or__3755__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3743__auto__ = m;
if(and__3743__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3743__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4399__auto__ = (((m == null))?null:m);
return (function (){var or__3755__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t27455 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27455 = (function (cs,ch,mult,meta27456){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27456 = meta27456;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27455.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t27455.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t27455.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t27455.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t27455.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27455.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t27455.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27457){
var self__ = this;
var _27457__$1 = this;
return self__.meta27456;
});})(cs))
;

cljs.core.async.t27455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27457,meta27456__$1){
var self__ = this;
var _27457__$1 = this;
return (new cljs.core.async.t27455(self__.cs,self__.ch,self__.mult,meta27456__$1));
});})(cs))
;

cljs.core.async.t27455.cljs$lang$type = true;

cljs.core.async.t27455.cljs$lang$ctorStr = "cljs.core.async/t27455";

cljs.core.async.t27455.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4342__auto__,writer__4343__auto__,opt__4344__auto__){
return cljs.core._write.call(null,writer__4343__auto__,"cljs.core.async/t27455");
});})(cs))
;

cljs.core.async.__GT_t27455 = ((function (cs){
return (function __GT_t27455(cs__$1,ch__$1,mult__$1,meta27456){
return (new cljs.core.async.t27455(cs__$1,ch__$1,mult__$1,meta27456));
});})(cs))
;

}

return (new cljs.core.async.t27455(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/shout/client/cljs/resources/public/devcards/js/compiled/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__13512__auto___27676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto___27676,cs,m,dchan,dctr,done){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto___27676,cs,m,dchan,dctr,done){
return (function (state_27588){
var state_val_27589 = (state_27588[(1)]);
if((state_val_27589 === (7))){
var inst_27584 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27590_27677 = state_27588__$1;
(statearr_27590_27677[(2)] = inst_27584);

(statearr_27590_27677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (20))){
var inst_27489 = (state_27588[(7)]);
var inst_27499 = cljs.core.first.call(null,inst_27489);
var inst_27500 = cljs.core.nth.call(null,inst_27499,(0),null);
var inst_27501 = cljs.core.nth.call(null,inst_27499,(1),null);
var state_27588__$1 = (function (){var statearr_27591 = state_27588;
(statearr_27591[(8)] = inst_27500);

return statearr_27591;
})();
if(cljs.core.truth_(inst_27501)){
var statearr_27592_27678 = state_27588__$1;
(statearr_27592_27678[(1)] = (22));

} else {
var statearr_27593_27679 = state_27588__$1;
(statearr_27593_27679[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (27))){
var inst_27529 = (state_27588[(9)]);
var inst_27531 = (state_27588[(10)]);
var inst_27460 = (state_27588[(11)]);
var inst_27536 = (state_27588[(12)]);
var inst_27536__$1 = cljs.core._nth.call(null,inst_27529,inst_27531);
var inst_27537 = cljs.core.async.put_BANG_.call(null,inst_27536__$1,inst_27460,done);
var state_27588__$1 = (function (){var statearr_27594 = state_27588;
(statearr_27594[(12)] = inst_27536__$1);

return statearr_27594;
})();
if(cljs.core.truth_(inst_27537)){
var statearr_27595_27680 = state_27588__$1;
(statearr_27595_27680[(1)] = (30));

} else {
var statearr_27596_27681 = state_27588__$1;
(statearr_27596_27681[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (1))){
var state_27588__$1 = state_27588;
var statearr_27597_27682 = state_27588__$1;
(statearr_27597_27682[(2)] = null);

(statearr_27597_27682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (24))){
var inst_27489 = (state_27588[(7)]);
var inst_27506 = (state_27588[(2)]);
var inst_27507 = cljs.core.next.call(null,inst_27489);
var inst_27469 = inst_27507;
var inst_27470 = null;
var inst_27471 = (0);
var inst_27472 = (0);
var state_27588__$1 = (function (){var statearr_27598 = state_27588;
(statearr_27598[(13)] = inst_27506);

(statearr_27598[(14)] = inst_27471);

(statearr_27598[(15)] = inst_27470);

(statearr_27598[(16)] = inst_27472);

(statearr_27598[(17)] = inst_27469);

return statearr_27598;
})();
var statearr_27599_27683 = state_27588__$1;
(statearr_27599_27683[(2)] = null);

(statearr_27599_27683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (39))){
var state_27588__$1 = state_27588;
var statearr_27603_27684 = state_27588__$1;
(statearr_27603_27684[(2)] = null);

(statearr_27603_27684[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (4))){
var inst_27460 = (state_27588[(11)]);
var inst_27460__$1 = (state_27588[(2)]);
var inst_27461 = (inst_27460__$1 == null);
var state_27588__$1 = (function (){var statearr_27604 = state_27588;
(statearr_27604[(11)] = inst_27460__$1);

return statearr_27604;
})();
if(cljs.core.truth_(inst_27461)){
var statearr_27605_27685 = state_27588__$1;
(statearr_27605_27685[(1)] = (5));

} else {
var statearr_27606_27686 = state_27588__$1;
(statearr_27606_27686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (15))){
var inst_27471 = (state_27588[(14)]);
var inst_27470 = (state_27588[(15)]);
var inst_27472 = (state_27588[(16)]);
var inst_27469 = (state_27588[(17)]);
var inst_27485 = (state_27588[(2)]);
var inst_27486 = (inst_27472 + (1));
var tmp27600 = inst_27471;
var tmp27601 = inst_27470;
var tmp27602 = inst_27469;
var inst_27469__$1 = tmp27602;
var inst_27470__$1 = tmp27601;
var inst_27471__$1 = tmp27600;
var inst_27472__$1 = inst_27486;
var state_27588__$1 = (function (){var statearr_27607 = state_27588;
(statearr_27607[(18)] = inst_27485);

(statearr_27607[(14)] = inst_27471__$1);

(statearr_27607[(15)] = inst_27470__$1);

(statearr_27607[(16)] = inst_27472__$1);

(statearr_27607[(17)] = inst_27469__$1);

return statearr_27607;
})();
var statearr_27608_27687 = state_27588__$1;
(statearr_27608_27687[(2)] = null);

(statearr_27608_27687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (21))){
var inst_27510 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27612_27688 = state_27588__$1;
(statearr_27612_27688[(2)] = inst_27510);

(statearr_27612_27688[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (31))){
var inst_27536 = (state_27588[(12)]);
var inst_27540 = done.call(null,null);
var inst_27541 = cljs.core.async.untap_STAR_.call(null,m,inst_27536);
var state_27588__$1 = (function (){var statearr_27613 = state_27588;
(statearr_27613[(19)] = inst_27540);

return statearr_27613;
})();
var statearr_27614_27689 = state_27588__$1;
(statearr_27614_27689[(2)] = inst_27541);

(statearr_27614_27689[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (32))){
var inst_27529 = (state_27588[(9)]);
var inst_27530 = (state_27588[(20)]);
var inst_27531 = (state_27588[(10)]);
var inst_27528 = (state_27588[(21)]);
var inst_27543 = (state_27588[(2)]);
var inst_27544 = (inst_27531 + (1));
var tmp27609 = inst_27529;
var tmp27610 = inst_27530;
var tmp27611 = inst_27528;
var inst_27528__$1 = tmp27611;
var inst_27529__$1 = tmp27609;
var inst_27530__$1 = tmp27610;
var inst_27531__$1 = inst_27544;
var state_27588__$1 = (function (){var statearr_27615 = state_27588;
(statearr_27615[(9)] = inst_27529__$1);

(statearr_27615[(20)] = inst_27530__$1);

(statearr_27615[(22)] = inst_27543);

(statearr_27615[(10)] = inst_27531__$1);

(statearr_27615[(21)] = inst_27528__$1);

return statearr_27615;
})();
var statearr_27616_27690 = state_27588__$1;
(statearr_27616_27690[(2)] = null);

(statearr_27616_27690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (40))){
var inst_27556 = (state_27588[(23)]);
var inst_27560 = done.call(null,null);
var inst_27561 = cljs.core.async.untap_STAR_.call(null,m,inst_27556);
var state_27588__$1 = (function (){var statearr_27617 = state_27588;
(statearr_27617[(24)] = inst_27560);

return statearr_27617;
})();
var statearr_27618_27691 = state_27588__$1;
(statearr_27618_27691[(2)] = inst_27561);

(statearr_27618_27691[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (33))){
var inst_27547 = (state_27588[(25)]);
var inst_27549 = cljs.core.chunked_seq_QMARK_.call(null,inst_27547);
var state_27588__$1 = state_27588;
if(inst_27549){
var statearr_27619_27692 = state_27588__$1;
(statearr_27619_27692[(1)] = (36));

} else {
var statearr_27620_27693 = state_27588__$1;
(statearr_27620_27693[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (13))){
var inst_27479 = (state_27588[(26)]);
var inst_27482 = cljs.core.async.close_BANG_.call(null,inst_27479);
var state_27588__$1 = state_27588;
var statearr_27621_27694 = state_27588__$1;
(statearr_27621_27694[(2)] = inst_27482);

(statearr_27621_27694[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (22))){
var inst_27500 = (state_27588[(8)]);
var inst_27503 = cljs.core.async.close_BANG_.call(null,inst_27500);
var state_27588__$1 = state_27588;
var statearr_27622_27695 = state_27588__$1;
(statearr_27622_27695[(2)] = inst_27503);

(statearr_27622_27695[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (36))){
var inst_27547 = (state_27588[(25)]);
var inst_27551 = cljs.core.chunk_first.call(null,inst_27547);
var inst_27552 = cljs.core.chunk_rest.call(null,inst_27547);
var inst_27553 = cljs.core.count.call(null,inst_27551);
var inst_27528 = inst_27552;
var inst_27529 = inst_27551;
var inst_27530 = inst_27553;
var inst_27531 = (0);
var state_27588__$1 = (function (){var statearr_27623 = state_27588;
(statearr_27623[(9)] = inst_27529);

(statearr_27623[(20)] = inst_27530);

(statearr_27623[(10)] = inst_27531);

(statearr_27623[(21)] = inst_27528);

return statearr_27623;
})();
var statearr_27624_27696 = state_27588__$1;
(statearr_27624_27696[(2)] = null);

(statearr_27624_27696[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (41))){
var inst_27547 = (state_27588[(25)]);
var inst_27563 = (state_27588[(2)]);
var inst_27564 = cljs.core.next.call(null,inst_27547);
var inst_27528 = inst_27564;
var inst_27529 = null;
var inst_27530 = (0);
var inst_27531 = (0);
var state_27588__$1 = (function (){var statearr_27625 = state_27588;
(statearr_27625[(9)] = inst_27529);

(statearr_27625[(27)] = inst_27563);

(statearr_27625[(20)] = inst_27530);

(statearr_27625[(10)] = inst_27531);

(statearr_27625[(21)] = inst_27528);

return statearr_27625;
})();
var statearr_27626_27697 = state_27588__$1;
(statearr_27626_27697[(2)] = null);

(statearr_27626_27697[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (43))){
var state_27588__$1 = state_27588;
var statearr_27627_27698 = state_27588__$1;
(statearr_27627_27698[(2)] = null);

(statearr_27627_27698[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (29))){
var inst_27572 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27628_27699 = state_27588__$1;
(statearr_27628_27699[(2)] = inst_27572);

(statearr_27628_27699[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (44))){
var inst_27581 = (state_27588[(2)]);
var state_27588__$1 = (function (){var statearr_27629 = state_27588;
(statearr_27629[(28)] = inst_27581);

return statearr_27629;
})();
var statearr_27630_27700 = state_27588__$1;
(statearr_27630_27700[(2)] = null);

(statearr_27630_27700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (6))){
var inst_27520 = (state_27588[(29)]);
var inst_27519 = cljs.core.deref.call(null,cs);
var inst_27520__$1 = cljs.core.keys.call(null,inst_27519);
var inst_27521 = cljs.core.count.call(null,inst_27520__$1);
var inst_27522 = cljs.core.reset_BANG_.call(null,dctr,inst_27521);
var inst_27527 = cljs.core.seq.call(null,inst_27520__$1);
var inst_27528 = inst_27527;
var inst_27529 = null;
var inst_27530 = (0);
var inst_27531 = (0);
var state_27588__$1 = (function (){var statearr_27631 = state_27588;
(statearr_27631[(30)] = inst_27522);

(statearr_27631[(9)] = inst_27529);

(statearr_27631[(29)] = inst_27520__$1);

(statearr_27631[(20)] = inst_27530);

(statearr_27631[(10)] = inst_27531);

(statearr_27631[(21)] = inst_27528);

return statearr_27631;
})();
var statearr_27632_27701 = state_27588__$1;
(statearr_27632_27701[(2)] = null);

(statearr_27632_27701[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (28))){
var inst_27547 = (state_27588[(25)]);
var inst_27528 = (state_27588[(21)]);
var inst_27547__$1 = cljs.core.seq.call(null,inst_27528);
var state_27588__$1 = (function (){var statearr_27633 = state_27588;
(statearr_27633[(25)] = inst_27547__$1);

return statearr_27633;
})();
if(inst_27547__$1){
var statearr_27634_27702 = state_27588__$1;
(statearr_27634_27702[(1)] = (33));

} else {
var statearr_27635_27703 = state_27588__$1;
(statearr_27635_27703[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (25))){
var inst_27530 = (state_27588[(20)]);
var inst_27531 = (state_27588[(10)]);
var inst_27533 = (inst_27531 < inst_27530);
var inst_27534 = inst_27533;
var state_27588__$1 = state_27588;
if(cljs.core.truth_(inst_27534)){
var statearr_27636_27704 = state_27588__$1;
(statearr_27636_27704[(1)] = (27));

} else {
var statearr_27637_27705 = state_27588__$1;
(statearr_27637_27705[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (34))){
var state_27588__$1 = state_27588;
var statearr_27638_27706 = state_27588__$1;
(statearr_27638_27706[(2)] = null);

(statearr_27638_27706[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (17))){
var state_27588__$1 = state_27588;
var statearr_27639_27707 = state_27588__$1;
(statearr_27639_27707[(2)] = null);

(statearr_27639_27707[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (3))){
var inst_27586 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27588__$1,inst_27586);
} else {
if((state_val_27589 === (12))){
var inst_27515 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27640_27708 = state_27588__$1;
(statearr_27640_27708[(2)] = inst_27515);

(statearr_27640_27708[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (2))){
var state_27588__$1 = state_27588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27588__$1,(4),ch);
} else {
if((state_val_27589 === (23))){
var state_27588__$1 = state_27588;
var statearr_27641_27709 = state_27588__$1;
(statearr_27641_27709[(2)] = null);

(statearr_27641_27709[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (35))){
var inst_27570 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27642_27710 = state_27588__$1;
(statearr_27642_27710[(2)] = inst_27570);

(statearr_27642_27710[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (19))){
var inst_27489 = (state_27588[(7)]);
var inst_27493 = cljs.core.chunk_first.call(null,inst_27489);
var inst_27494 = cljs.core.chunk_rest.call(null,inst_27489);
var inst_27495 = cljs.core.count.call(null,inst_27493);
var inst_27469 = inst_27494;
var inst_27470 = inst_27493;
var inst_27471 = inst_27495;
var inst_27472 = (0);
var state_27588__$1 = (function (){var statearr_27643 = state_27588;
(statearr_27643[(14)] = inst_27471);

(statearr_27643[(15)] = inst_27470);

(statearr_27643[(16)] = inst_27472);

(statearr_27643[(17)] = inst_27469);

return statearr_27643;
})();
var statearr_27644_27711 = state_27588__$1;
(statearr_27644_27711[(2)] = null);

(statearr_27644_27711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (11))){
var inst_27489 = (state_27588[(7)]);
var inst_27469 = (state_27588[(17)]);
var inst_27489__$1 = cljs.core.seq.call(null,inst_27469);
var state_27588__$1 = (function (){var statearr_27645 = state_27588;
(statearr_27645[(7)] = inst_27489__$1);

return statearr_27645;
})();
if(inst_27489__$1){
var statearr_27646_27712 = state_27588__$1;
(statearr_27646_27712[(1)] = (16));

} else {
var statearr_27647_27713 = state_27588__$1;
(statearr_27647_27713[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (9))){
var inst_27517 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27648_27714 = state_27588__$1;
(statearr_27648_27714[(2)] = inst_27517);

(statearr_27648_27714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (5))){
var inst_27467 = cljs.core.deref.call(null,cs);
var inst_27468 = cljs.core.seq.call(null,inst_27467);
var inst_27469 = inst_27468;
var inst_27470 = null;
var inst_27471 = (0);
var inst_27472 = (0);
var state_27588__$1 = (function (){var statearr_27649 = state_27588;
(statearr_27649[(14)] = inst_27471);

(statearr_27649[(15)] = inst_27470);

(statearr_27649[(16)] = inst_27472);

(statearr_27649[(17)] = inst_27469);

return statearr_27649;
})();
var statearr_27650_27715 = state_27588__$1;
(statearr_27650_27715[(2)] = null);

(statearr_27650_27715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (14))){
var state_27588__$1 = state_27588;
var statearr_27651_27716 = state_27588__$1;
(statearr_27651_27716[(2)] = null);

(statearr_27651_27716[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (45))){
var inst_27578 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27652_27717 = state_27588__$1;
(statearr_27652_27717[(2)] = inst_27578);

(statearr_27652_27717[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (26))){
var inst_27520 = (state_27588[(29)]);
var inst_27574 = (state_27588[(2)]);
var inst_27575 = cljs.core.seq.call(null,inst_27520);
var state_27588__$1 = (function (){var statearr_27653 = state_27588;
(statearr_27653[(31)] = inst_27574);

return statearr_27653;
})();
if(inst_27575){
var statearr_27654_27718 = state_27588__$1;
(statearr_27654_27718[(1)] = (42));

} else {
var statearr_27655_27719 = state_27588__$1;
(statearr_27655_27719[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (16))){
var inst_27489 = (state_27588[(7)]);
var inst_27491 = cljs.core.chunked_seq_QMARK_.call(null,inst_27489);
var state_27588__$1 = state_27588;
if(inst_27491){
var statearr_27656_27720 = state_27588__$1;
(statearr_27656_27720[(1)] = (19));

} else {
var statearr_27657_27721 = state_27588__$1;
(statearr_27657_27721[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (38))){
var inst_27567 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27658_27722 = state_27588__$1;
(statearr_27658_27722[(2)] = inst_27567);

(statearr_27658_27722[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (30))){
var state_27588__$1 = state_27588;
var statearr_27659_27723 = state_27588__$1;
(statearr_27659_27723[(2)] = null);

(statearr_27659_27723[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (10))){
var inst_27470 = (state_27588[(15)]);
var inst_27472 = (state_27588[(16)]);
var inst_27478 = cljs.core._nth.call(null,inst_27470,inst_27472);
var inst_27479 = cljs.core.nth.call(null,inst_27478,(0),null);
var inst_27480 = cljs.core.nth.call(null,inst_27478,(1),null);
var state_27588__$1 = (function (){var statearr_27660 = state_27588;
(statearr_27660[(26)] = inst_27479);

return statearr_27660;
})();
if(cljs.core.truth_(inst_27480)){
var statearr_27661_27724 = state_27588__$1;
(statearr_27661_27724[(1)] = (13));

} else {
var statearr_27662_27725 = state_27588__$1;
(statearr_27662_27725[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (18))){
var inst_27513 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27663_27726 = state_27588__$1;
(statearr_27663_27726[(2)] = inst_27513);

(statearr_27663_27726[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (42))){
var state_27588__$1 = state_27588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27588__$1,(45),dchan);
} else {
if((state_val_27589 === (37))){
var inst_27547 = (state_27588[(25)]);
var inst_27556 = (state_27588[(23)]);
var inst_27460 = (state_27588[(11)]);
var inst_27556__$1 = cljs.core.first.call(null,inst_27547);
var inst_27557 = cljs.core.async.put_BANG_.call(null,inst_27556__$1,inst_27460,done);
var state_27588__$1 = (function (){var statearr_27664 = state_27588;
(statearr_27664[(23)] = inst_27556__$1);

return statearr_27664;
})();
if(cljs.core.truth_(inst_27557)){
var statearr_27665_27727 = state_27588__$1;
(statearr_27665_27727[(1)] = (39));

} else {
var statearr_27666_27728 = state_27588__$1;
(statearr_27666_27728[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (8))){
var inst_27471 = (state_27588[(14)]);
var inst_27472 = (state_27588[(16)]);
var inst_27474 = (inst_27472 < inst_27471);
var inst_27475 = inst_27474;
var state_27588__$1 = state_27588;
if(cljs.core.truth_(inst_27475)){
var statearr_27667_27729 = state_27588__$1;
(statearr_27667_27729[(1)] = (10));

} else {
var statearr_27668_27730 = state_27588__$1;
(statearr_27668_27730[(1)] = (11));

}

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
}
}
}
}
}
});})(c__13512__auto___27676,cs,m,dchan,dctr,done))
;
return ((function (switch__13456__auto__,c__13512__auto___27676,cs,m,dchan,dctr,done){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_27672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27672[(0)] = state_machine__13457__auto__);

(statearr_27672[(1)] = (1));

return statearr_27672;
});
var state_machine__13457__auto____1 = (function (state_27588){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_27588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e27673){if((e27673 instanceof Object)){
var ex__13460__auto__ = e27673;
var statearr_27674_27731 = state_27588;
(statearr_27674_27731[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27732 = state_27588;
state_27588 = G__27732;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_27588){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_27588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto___27676,cs,m,dchan,dctr,done))
})();
var state__13514__auto__ = (function (){var statearr_27675 = f__13513__auto__.call(null);
(statearr_27675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto___27676);

return statearr_27675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto___27676,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj27734 = {};
return obj27734;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3743__auto__ = m;
if(and__3743__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3743__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4399__auto__ = (((m == null))?null:m);
return (function (){var or__3755__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3743__auto__ = m;
if(and__3743__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3743__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4399__auto__ = (((m == null))?null:m);
return (function (){var or__3755__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3743__auto__ = m;
if(and__3743__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3743__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4399__auto__ = (((m == null))?null:m);
return (function (){var or__3755__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3743__auto__ = m;
if(and__3743__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3743__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4399__auto__ = (((m == null))?null:m);
return (function (){var or__3755__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3743__auto__ = m;
if(and__3743__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3743__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4399__auto__ = (((m == null))?null:m);
return (function (){var or__3755__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__27735){
var map__27740 = p__27735;
var map__27740__$1 = ((cljs.core.seq_QMARK_.call(null,map__27740))?cljs.core.apply.call(null,cljs.core.hash_map,map__27740):map__27740);
var opts = map__27740__$1;
var statearr_27741_27744 = state;
(statearr_27741_27744[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__27740,map__27740__$1,opts){
return (function (val){
var statearr_27742_27745 = state;
(statearr_27742_27745[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27740,map__27740__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_27743_27746 = state;
(statearr_27743_27746[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__27735 = null;
if (arguments.length > 3) {
var G__27747__i = 0, G__27747__a = new Array(arguments.length -  3);
while (G__27747__i < G__27747__a.length) {G__27747__a[G__27747__i] = arguments[G__27747__i + 3]; ++G__27747__i;}
  p__27735 = new cljs.core.IndexedSeq(G__27747__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__27735);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__27748){
var state = cljs.core.first(arglist__27748);
arglist__27748 = cljs.core.next(arglist__27748);
var cont_block = cljs.core.first(arglist__27748);
arglist__27748 = cljs.core.next(arglist__27748);
var ports = cljs.core.first(arglist__27748);
var p__27735 = cljs.core.rest(arglist__27748);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__27735);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t27868 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27868 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27869){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27869 = meta27869;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27868.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27868.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27868.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27868.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27868.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27868.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27868.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27868.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27870){
var self__ = this;
var _27870__$1 = this;
return self__.meta27869;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27870,meta27869__$1){
var self__ = this;
var _27870__$1 = this;
return (new cljs.core.async.t27868(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27869__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27868.cljs$lang$type = true;

cljs.core.async.t27868.cljs$lang$ctorStr = "cljs.core.async/t27868";

cljs.core.async.t27868.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4342__auto__,writer__4343__auto__,opt__4344__auto__){
return cljs.core._write.call(null,writer__4343__auto__,"cljs.core.async/t27868");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27868 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t27868(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27869){
return (new cljs.core.async.t27868(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27869));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27868(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/shout/client/cljs/resources/public/devcards/js/compiled/out/cljs/core/async.cljs"], null)));
})()
;
var c__13512__auto___27987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto___27987,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto___27987,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27940){
var state_val_27941 = (state_27940[(1)]);
if((state_val_27941 === (7))){
var inst_27884 = (state_27940[(7)]);
var inst_27889 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27884);
var state_27940__$1 = state_27940;
var statearr_27942_27988 = state_27940__$1;
(statearr_27942_27988[(2)] = inst_27889);

(statearr_27942_27988[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (20))){
var inst_27899 = (state_27940[(8)]);
var state_27940__$1 = state_27940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27940__$1,(23),out,inst_27899);
} else {
if((state_val_27941 === (1))){
var inst_27874 = (state_27940[(9)]);
var inst_27874__$1 = calc_state.call(null);
var inst_27875 = cljs.core.seq_QMARK_.call(null,inst_27874__$1);
var state_27940__$1 = (function (){var statearr_27943 = state_27940;
(statearr_27943[(9)] = inst_27874__$1);

return statearr_27943;
})();
if(inst_27875){
var statearr_27944_27989 = state_27940__$1;
(statearr_27944_27989[(1)] = (2));

} else {
var statearr_27945_27990 = state_27940__$1;
(statearr_27945_27990[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (24))){
var inst_27892 = (state_27940[(10)]);
var inst_27884 = inst_27892;
var state_27940__$1 = (function (){var statearr_27946 = state_27940;
(statearr_27946[(7)] = inst_27884);

return statearr_27946;
})();
var statearr_27947_27991 = state_27940__$1;
(statearr_27947_27991[(2)] = null);

(statearr_27947_27991[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (4))){
var inst_27874 = (state_27940[(9)]);
var inst_27880 = (state_27940[(2)]);
var inst_27881 = cljs.core.get.call(null,inst_27880,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27882 = cljs.core.get.call(null,inst_27880,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27883 = cljs.core.get.call(null,inst_27880,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27884 = inst_27874;
var state_27940__$1 = (function (){var statearr_27948 = state_27940;
(statearr_27948[(11)] = inst_27882);

(statearr_27948[(12)] = inst_27881);

(statearr_27948[(7)] = inst_27884);

(statearr_27948[(13)] = inst_27883);

return statearr_27948;
})();
var statearr_27949_27992 = state_27940__$1;
(statearr_27949_27992[(2)] = null);

(statearr_27949_27992[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (15))){
var state_27940__$1 = state_27940;
var statearr_27950_27993 = state_27940__$1;
(statearr_27950_27993[(2)] = null);

(statearr_27950_27993[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (21))){
var inst_27892 = (state_27940[(10)]);
var inst_27884 = inst_27892;
var state_27940__$1 = (function (){var statearr_27951 = state_27940;
(statearr_27951[(7)] = inst_27884);

return statearr_27951;
})();
var statearr_27952_27994 = state_27940__$1;
(statearr_27952_27994[(2)] = null);

(statearr_27952_27994[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (13))){
var inst_27936 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
var statearr_27953_27995 = state_27940__$1;
(statearr_27953_27995[(2)] = inst_27936);

(statearr_27953_27995[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (22))){
var inst_27934 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
var statearr_27954_27996 = state_27940__$1;
(statearr_27954_27996[(2)] = inst_27934);

(statearr_27954_27996[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (6))){
var inst_27938 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27940__$1,inst_27938);
} else {
if((state_val_27941 === (25))){
var state_27940__$1 = state_27940;
var statearr_27955_27997 = state_27940__$1;
(statearr_27955_27997[(2)] = null);

(statearr_27955_27997[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (17))){
var inst_27914 = (state_27940[(14)]);
var state_27940__$1 = state_27940;
var statearr_27956_27998 = state_27940__$1;
(statearr_27956_27998[(2)] = inst_27914);

(statearr_27956_27998[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (3))){
var inst_27874 = (state_27940[(9)]);
var state_27940__$1 = state_27940;
var statearr_27957_27999 = state_27940__$1;
(statearr_27957_27999[(2)] = inst_27874);

(statearr_27957_27999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (12))){
var inst_27895 = (state_27940[(15)]);
var inst_27900 = (state_27940[(16)]);
var inst_27914 = (state_27940[(14)]);
var inst_27914__$1 = inst_27895.call(null,inst_27900);
var state_27940__$1 = (function (){var statearr_27958 = state_27940;
(statearr_27958[(14)] = inst_27914__$1);

return statearr_27958;
})();
if(cljs.core.truth_(inst_27914__$1)){
var statearr_27959_28000 = state_27940__$1;
(statearr_27959_28000[(1)] = (17));

} else {
var statearr_27960_28001 = state_27940__$1;
(statearr_27960_28001[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (2))){
var inst_27874 = (state_27940[(9)]);
var inst_27877 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27874);
var state_27940__$1 = state_27940;
var statearr_27961_28002 = state_27940__$1;
(statearr_27961_28002[(2)] = inst_27877);

(statearr_27961_28002[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (23))){
var inst_27925 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
if(cljs.core.truth_(inst_27925)){
var statearr_27962_28003 = state_27940__$1;
(statearr_27962_28003[(1)] = (24));

} else {
var statearr_27963_28004 = state_27940__$1;
(statearr_27963_28004[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (19))){
var inst_27922 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
if(cljs.core.truth_(inst_27922)){
var statearr_27964_28005 = state_27940__$1;
(statearr_27964_28005[(1)] = (20));

} else {
var statearr_27965_28006 = state_27940__$1;
(statearr_27965_28006[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (11))){
var inst_27899 = (state_27940[(8)]);
var inst_27905 = (inst_27899 == null);
var state_27940__$1 = state_27940;
if(cljs.core.truth_(inst_27905)){
var statearr_27966_28007 = state_27940__$1;
(statearr_27966_28007[(1)] = (14));

} else {
var statearr_27967_28008 = state_27940__$1;
(statearr_27967_28008[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (9))){
var inst_27892 = (state_27940[(10)]);
var inst_27892__$1 = (state_27940[(2)]);
var inst_27893 = cljs.core.get.call(null,inst_27892__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27894 = cljs.core.get.call(null,inst_27892__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27895 = cljs.core.get.call(null,inst_27892__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_27940__$1 = (function (){var statearr_27968 = state_27940;
(statearr_27968[(15)] = inst_27895);

(statearr_27968[(10)] = inst_27892__$1);

(statearr_27968[(17)] = inst_27894);

return statearr_27968;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27940__$1,(10),inst_27893);
} else {
if((state_val_27941 === (5))){
var inst_27884 = (state_27940[(7)]);
var inst_27887 = cljs.core.seq_QMARK_.call(null,inst_27884);
var state_27940__$1 = state_27940;
if(inst_27887){
var statearr_27969_28009 = state_27940__$1;
(statearr_27969_28009[(1)] = (7));

} else {
var statearr_27970_28010 = state_27940__$1;
(statearr_27970_28010[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (14))){
var inst_27900 = (state_27940[(16)]);
var inst_27907 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27900);
var state_27940__$1 = state_27940;
var statearr_27971_28011 = state_27940__$1;
(statearr_27971_28011[(2)] = inst_27907);

(statearr_27971_28011[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (26))){
var inst_27930 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
var statearr_27972_28012 = state_27940__$1;
(statearr_27972_28012[(2)] = inst_27930);

(statearr_27972_28012[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (16))){
var inst_27910 = (state_27940[(2)]);
var inst_27911 = calc_state.call(null);
var inst_27884 = inst_27911;
var state_27940__$1 = (function (){var statearr_27973 = state_27940;
(statearr_27973[(18)] = inst_27910);

(statearr_27973[(7)] = inst_27884);

return statearr_27973;
})();
var statearr_27974_28013 = state_27940__$1;
(statearr_27974_28013[(2)] = null);

(statearr_27974_28013[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (10))){
var inst_27900 = (state_27940[(16)]);
var inst_27899 = (state_27940[(8)]);
var inst_27898 = (state_27940[(2)]);
var inst_27899__$1 = cljs.core.nth.call(null,inst_27898,(0),null);
var inst_27900__$1 = cljs.core.nth.call(null,inst_27898,(1),null);
var inst_27901 = (inst_27899__$1 == null);
var inst_27902 = cljs.core._EQ_.call(null,inst_27900__$1,change);
var inst_27903 = (inst_27901) || (inst_27902);
var state_27940__$1 = (function (){var statearr_27975 = state_27940;
(statearr_27975[(16)] = inst_27900__$1);

(statearr_27975[(8)] = inst_27899__$1);

return statearr_27975;
})();
if(cljs.core.truth_(inst_27903)){
var statearr_27976_28014 = state_27940__$1;
(statearr_27976_28014[(1)] = (11));

} else {
var statearr_27977_28015 = state_27940__$1;
(statearr_27977_28015[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (18))){
var inst_27895 = (state_27940[(15)]);
var inst_27900 = (state_27940[(16)]);
var inst_27894 = (state_27940[(17)]);
var inst_27917 = cljs.core.empty_QMARK_.call(null,inst_27895);
var inst_27918 = inst_27894.call(null,inst_27900);
var inst_27919 = cljs.core.not.call(null,inst_27918);
var inst_27920 = (inst_27917) && (inst_27919);
var state_27940__$1 = state_27940;
var statearr_27978_28016 = state_27940__$1;
(statearr_27978_28016[(2)] = inst_27920);

(statearr_27978_28016[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (8))){
var inst_27884 = (state_27940[(7)]);
var state_27940__$1 = state_27940;
var statearr_27979_28017 = state_27940__$1;
(statearr_27979_28017[(2)] = inst_27884);

(statearr_27979_28017[(1)] = (9));


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
}
}
}
}
}
}
});})(c__13512__auto___27987,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13456__auto__,c__13512__auto___27987,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_27983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27983[(0)] = state_machine__13457__auto__);

(statearr_27983[(1)] = (1));

return statearr_27983;
});
var state_machine__13457__auto____1 = (function (state_27940){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_27940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e27984){if((e27984 instanceof Object)){
var ex__13460__auto__ = e27984;
var statearr_27985_28018 = state_27940;
(statearr_27985_28018[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28019 = state_27940;
state_27940 = G__28019;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_27940){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_27940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto___27987,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13514__auto__ = (function (){var statearr_27986 = f__13513__auto__.call(null);
(statearr_27986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto___27987);

return statearr_27986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto___27987,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj28021 = {};
return obj28021;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3743__auto__ = p;
if(and__3743__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3743__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4399__auto__ = (((p == null))?null:p);
return (function (){var or__3755__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3743__auto__ = p;
if(and__3743__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3743__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4399__auto__ = (((p == null))?null:p);
return (function (){var or__3755__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3743__auto__ = p;
if(and__3743__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3743__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4399__auto__ = (((p == null))?null:p);
return (function (){var or__3755__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3743__auto__ = p;
if(and__3743__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3743__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4399__auto__ = (((p == null))?null:p);
return (function (){var or__3755__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4399__auto__)]);
if(or__3755__auto__){
return or__3755__auto__;
} else {
var or__3755__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3755__auto____$1){
return or__3755__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3755__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3755__auto__,mults){
return (function (p1__28022_SHARP_){
if(cljs.core.truth_(p1__28022_SHARP_.call(null,topic))){
return p1__28022_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28022_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3755__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28145 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28145 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta28146){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta28146 = meta28146;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28145.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28145.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28145.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t28145.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28145.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28145.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28145.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28145.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28147){
var self__ = this;
var _28147__$1 = this;
return self__.meta28146;
});})(mults,ensure_mult))
;

cljs.core.async.t28145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28147,meta28146__$1){
var self__ = this;
var _28147__$1 = this;
return (new cljs.core.async.t28145(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta28146__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28145.cljs$lang$type = true;

cljs.core.async.t28145.cljs$lang$ctorStr = "cljs.core.async/t28145";

cljs.core.async.t28145.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4342__auto__,writer__4343__auto__,opt__4344__auto__){
return cljs.core._write.call(null,writer__4343__auto__,"cljs.core.async/t28145");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28145 = ((function (mults,ensure_mult){
return (function __GT_t28145(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28146){
return (new cljs.core.async.t28145(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28146));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28145(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/shout/client/cljs/resources/public/devcards/js/compiled/out/cljs/core/async.cljs"], null)));
})()
;
var c__13512__auto___28267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto___28267,mults,ensure_mult,p){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto___28267,mults,ensure_mult,p){
return (function (state_28219){
var state_val_28220 = (state_28219[(1)]);
if((state_val_28220 === (7))){
var inst_28215 = (state_28219[(2)]);
var state_28219__$1 = state_28219;
var statearr_28221_28268 = state_28219__$1;
(statearr_28221_28268[(2)] = inst_28215);

(statearr_28221_28268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28220 === (20))){
var state_28219__$1 = state_28219;
var statearr_28222_28269 = state_28219__$1;
(statearr_28222_28269[(2)] = null);

(statearr_28222_28269[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28220 === (1))){
var state_28219__$1 = state_28219;
var statearr_28223_28270 = state_28219__$1;
(statearr_28223_28270[(2)] = null);

(statearr_28223_28270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28220 === (24))){
var inst_28198 = (state_28219[(7)]);
var inst_28207 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28198);
var state_28219__$1 = state_28219;
var statearr_28224_28271 = state_28219__$1;
(statearr_28224_28271[(2)] = inst_28207);

(statearr_28224_28271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28220 === (4))){
var inst_28150 = (state_28219[(8)]);
var inst_28150__$1 = (state_28219[(2)]);
var inst_28151 = (inst_28150__$1 == null);
var state_28219__$1 = (function (){var statearr_28225 = state_28219;
(statearr_28225[(8)] = inst_28150__$1);

return statearr_28225;
})();
if(cljs.core.truth_(inst_28151)){
var statearr_28226_28272 = state_28219__$1;
(statearr_28226_28272[(1)] = (5));

} else {
var statearr_28227_28273 = state_28219__$1;
(statearr_28227_28273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28220 === (15))){
var inst_28192 = (state_28219[(2)]);
var state_28219__$1 = state_28219;
var statearr_28228_28274 = state_28219__$1;
(statearr_28228_28274[(2)] = inst_28192);

(statearr_28228_28274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28220 === (21))){
var inst_28212 = (state_28219[(2)]);
var state_28219__$1 = (function (){var statearr_28229 = state_28219;
(statearr_28229[(9)] = inst_28212);

return statearr_28229;
})();
var statearr_28230_28275 = state_28219__$1;
(statearr_28230_28275[(2)] = null);

(statearr_28230_28275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28220 === (13))){
var inst_28174 = (state_28219[(10)]);
var inst_28176 = cljs.core.chunked_seq_QMARK_.call(null,inst_28174);
var state_28219__$1 = state_28219;
if(inst_28176){
var statearr_28231_28276 = state_28219__$1;
(statearr_28231_28276[(1)] = (16));

} else {
var statearr_28232_28277 = state_28219__$1;
(statearr_28232_28277[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28220 === (22))){
var inst_28204 = (state_28219[(2)]);
var state_28219__$1 = state_28219;
if(cljs.core.truth_(inst_28204)){
var statearr_28233_28278 = state_28219__$1;
(statearr_28233_28278[(1)] = (23));

} else {
var statearr_28234_28279 = state_28219__$1;
(statearr_28234_28279[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28220 === (6))){
var inst_28150 = (state_28219[(8)]);
var inst_28200 = (state_28219[(11)]);
var inst_28198 = (state_28219[(7)]);
var inst_28198__$1 = topic_fn.call(null,inst_28150);
var inst_28199 = cljs.core.deref.call(null,mults);
var inst_28200__$1 = cljs.core.get.call(null,inst_28199,inst_28198__$1);
var state_28219__$1 = (function (){var statearr_28235 = state_28219;
(statearr_28235[(11)] = inst_28200__$1);

(statearr_28235[(7)] = inst_28198__$1);

return statearr_28235;
})();
if(cljs.core.truth_(inst_28200__$1)){
var statearr_28236_28280 = state_28219__$1;
(statearr_28236_28280[(1)] = (19));

} else {
var statearr_28237_28281 = state_28219__$1;
(statearr_28237_28281[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28220 === (25))){
var inst_28209 = (state_28219[(2)]);
var state_28219__$1 = state_28219;
var statearr_28238_28282 = state_28219__$1;
(statearr_28238_28282[(2)] = inst_28209);

(statearr_28238_28282[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28220 === (17))){
var inst_28174 = (state_28219[(10)]);
var inst_28183 = cljs.core.first.call(null,inst_28174);
var inst_28184 = cljs.core.async.muxch_STAR_.call(null,inst_28183);
var inst_28185 = cljs.core.async.close_BANG_.call(null,inst_28184);
var inst_28186 = cljs.core.next.call(null,inst_28174);
var inst_28160 = inst_28186;
var inst_28161 = null;
var inst_28162 = (0);
var inst_28163 = (0);
var state_28219__$1 = (function (){var statearr_28239 = state_28219;
(statearr_28239[(12)] = inst_28185);

(statearr_28239[(13)] = inst_28163);

(statearr_28239[(14)] = inst_28162);

(statearr_28239[(15)] = inst_28161);

(statearr_28239[(16)] = inst_28160);

return statearr_28239;
})();
var statearr_28240_28283 = state_28219__$1;
(statearr_28240_28283[(2)] = null);

(statearr_28240_28283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28220 === (3))){
var inst_28217 = (state_28219[(2)]);
var state_28219__$1 = state_28219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28219__$1,inst_28217);
} else {
if((state_val_28220 === (12))){
var inst_28194 = (state_28219[(2)]);
var state_28219__$1 = state_28219;
var statearr_28241_28284 = state_28219__$1;
(statearr_28241_28284[(2)] = inst_28194);

(statearr_28241_28284[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28220 === (2))){
var state_28219__$1 = state_28219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28219__$1,(4),ch);
} else {
if((state_val_28220 === (23))){
var state_28219__$1 = state_28219;
var statearr_28242_28285 = state_28219__$1;
(statearr_28242_28285[(2)] = null);

(statearr_28242_28285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28220 === (19))){
var inst_28150 = (state_28219[(8)]);
var inst_28200 = (state_28219[(11)]);
var inst_28202 = cljs.core.async.muxch_STAR_.call(null,inst_28200);
var state_28219__$1 = state_28219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28219__$1,(22),inst_28202,inst_28150);
} else {
if((state_val_28220 === (11))){
var inst_28174 = (state_28219[(10)]);
var inst_28160 = (state_28219[(16)]);
var inst_28174__$1 = cljs.core.seq.call(null,inst_28160);
var state_28219__$1 = (function (){var statearr_28243 = state_28219;
(statearr_28243[(10)] = inst_28174__$1);

return statearr_28243;
})();
if(inst_28174__$1){
var statearr_28244_28286 = state_28219__$1;
(statearr_28244_28286[(1)] = (13));

} else {
var statearr_28245_28287 = state_28219__$1;
(statearr_28245_28287[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28220 === (9))){
var inst_28196 = (state_28219[(2)]);
var state_28219__$1 = state_28219;
var statearr_28246_28288 = state_28219__$1;
(statearr_28246_28288[(2)] = inst_28196);

(statearr_28246_28288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28220 === (5))){
var inst_28157 = cljs.core.deref.call(null,mults);
var inst_28158 = cljs.core.vals.call(null,inst_28157);
var inst_28159 = cljs.core.seq.call(null,inst_28158);
var inst_28160 = inst_28159;
var inst_28161 = null;
var inst_28162 = (0);
var inst_28163 = (0);
var state_28219__$1 = (function (){var statearr_28247 = state_28219;
(statearr_28247[(13)] = inst_28163);

(statearr_28247[(14)] = inst_28162);

(statearr_28247[(15)] = inst_28161);

(statearr_28247[(16)] = inst_28160);

return statearr_28247;
})();
var statearr_28248_28289 = state_28219__$1;
(statearr_28248_28289[(2)] = null);

(statearr_28248_28289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28220 === (14))){
var state_28219__$1 = state_28219;
var statearr_28252_28290 = state_28219__$1;
(statearr_28252_28290[(2)] = null);

(statearr_28252_28290[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28220 === (16))){
var inst_28174 = (state_28219[(10)]);
var inst_28178 = cljs.core.chunk_first.call(null,inst_28174);
var inst_28179 = cljs.core.chunk_rest.call(null,inst_28174);
var inst_28180 = cljs.core.count.call(null,inst_28178);
var inst_28160 = inst_28179;
var inst_28161 = inst_28178;
var inst_28162 = inst_28180;
var inst_28163 = (0);
var state_28219__$1 = (function (){var statearr_28253 = state_28219;
(statearr_28253[(13)] = inst_28163);

(statearr_28253[(14)] = inst_28162);

(statearr_28253[(15)] = inst_28161);

(statearr_28253[(16)] = inst_28160);

return statearr_28253;
})();
var statearr_28254_28291 = state_28219__$1;
(statearr_28254_28291[(2)] = null);

(statearr_28254_28291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28220 === (10))){
var inst_28163 = (state_28219[(13)]);
var inst_28162 = (state_28219[(14)]);
var inst_28161 = (state_28219[(15)]);
var inst_28160 = (state_28219[(16)]);
var inst_28168 = cljs.core._nth.call(null,inst_28161,inst_28163);
var inst_28169 = cljs.core.async.muxch_STAR_.call(null,inst_28168);
var inst_28170 = cljs.core.async.close_BANG_.call(null,inst_28169);
var inst_28171 = (inst_28163 + (1));
var tmp28249 = inst_28162;
var tmp28250 = inst_28161;
var tmp28251 = inst_28160;
var inst_28160__$1 = tmp28251;
var inst_28161__$1 = tmp28250;
var inst_28162__$1 = tmp28249;
var inst_28163__$1 = inst_28171;
var state_28219__$1 = (function (){var statearr_28255 = state_28219;
(statearr_28255[(13)] = inst_28163__$1);

(statearr_28255[(17)] = inst_28170);

(statearr_28255[(14)] = inst_28162__$1);

(statearr_28255[(15)] = inst_28161__$1);

(statearr_28255[(16)] = inst_28160__$1);

return statearr_28255;
})();
var statearr_28256_28292 = state_28219__$1;
(statearr_28256_28292[(2)] = null);

(statearr_28256_28292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28220 === (18))){
var inst_28189 = (state_28219[(2)]);
var state_28219__$1 = state_28219;
var statearr_28257_28293 = state_28219__$1;
(statearr_28257_28293[(2)] = inst_28189);

(statearr_28257_28293[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28220 === (8))){
var inst_28163 = (state_28219[(13)]);
var inst_28162 = (state_28219[(14)]);
var inst_28165 = (inst_28163 < inst_28162);
var inst_28166 = inst_28165;
var state_28219__$1 = state_28219;
if(cljs.core.truth_(inst_28166)){
var statearr_28258_28294 = state_28219__$1;
(statearr_28258_28294[(1)] = (10));

} else {
var statearr_28259_28295 = state_28219__$1;
(statearr_28259_28295[(1)] = (11));

}

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
}
}
}
}
}
});})(c__13512__auto___28267,mults,ensure_mult,p))
;
return ((function (switch__13456__auto__,c__13512__auto___28267,mults,ensure_mult,p){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_28263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28263[(0)] = state_machine__13457__auto__);

(statearr_28263[(1)] = (1));

return statearr_28263;
});
var state_machine__13457__auto____1 = (function (state_28219){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_28219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e28264){if((e28264 instanceof Object)){
var ex__13460__auto__ = e28264;
var statearr_28265_28296 = state_28219;
(statearr_28265_28296[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28297 = state_28219;
state_28219 = G__28297;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_28219){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_28219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto___28267,mults,ensure_mult,p))
})();
var state__13514__auto__ = (function (){var statearr_28266 = f__13513__auto__.call(null);
(statearr_28266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto___28267);

return statearr_28266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto___28267,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__13512__auto___28434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto___28434,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto___28434,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28404){
var state_val_28405 = (state_28404[(1)]);
if((state_val_28405 === (7))){
var state_28404__$1 = state_28404;
var statearr_28406_28435 = state_28404__$1;
(statearr_28406_28435[(2)] = null);

(statearr_28406_28435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (1))){
var state_28404__$1 = state_28404;
var statearr_28407_28436 = state_28404__$1;
(statearr_28407_28436[(2)] = null);

(statearr_28407_28436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (4))){
var inst_28368 = (state_28404[(7)]);
var inst_28370 = (inst_28368 < cnt);
var state_28404__$1 = state_28404;
if(cljs.core.truth_(inst_28370)){
var statearr_28408_28437 = state_28404__$1;
(statearr_28408_28437[(1)] = (6));

} else {
var statearr_28409_28438 = state_28404__$1;
(statearr_28409_28438[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (15))){
var inst_28400 = (state_28404[(2)]);
var state_28404__$1 = state_28404;
var statearr_28410_28439 = state_28404__$1;
(statearr_28410_28439[(2)] = inst_28400);

(statearr_28410_28439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (13))){
var inst_28393 = cljs.core.async.close_BANG_.call(null,out);
var state_28404__$1 = state_28404;
var statearr_28411_28440 = state_28404__$1;
(statearr_28411_28440[(2)] = inst_28393);

(statearr_28411_28440[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (6))){
var state_28404__$1 = state_28404;
var statearr_28412_28441 = state_28404__$1;
(statearr_28412_28441[(2)] = null);

(statearr_28412_28441[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (3))){
var inst_28402 = (state_28404[(2)]);
var state_28404__$1 = state_28404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28404__$1,inst_28402);
} else {
if((state_val_28405 === (12))){
var inst_28390 = (state_28404[(8)]);
var inst_28390__$1 = (state_28404[(2)]);
var inst_28391 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28390__$1);
var state_28404__$1 = (function (){var statearr_28413 = state_28404;
(statearr_28413[(8)] = inst_28390__$1);

return statearr_28413;
})();
if(cljs.core.truth_(inst_28391)){
var statearr_28414_28442 = state_28404__$1;
(statearr_28414_28442[(1)] = (13));

} else {
var statearr_28415_28443 = state_28404__$1;
(statearr_28415_28443[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (2))){
var inst_28367 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28368 = (0);
var state_28404__$1 = (function (){var statearr_28416 = state_28404;
(statearr_28416[(9)] = inst_28367);

(statearr_28416[(7)] = inst_28368);

return statearr_28416;
})();
var statearr_28417_28444 = state_28404__$1;
(statearr_28417_28444[(2)] = null);

(statearr_28417_28444[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (11))){
var inst_28368 = (state_28404[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28404,(10),Object,null,(9));
var inst_28377 = chs__$1.call(null,inst_28368);
var inst_28378 = done.call(null,inst_28368);
var inst_28379 = cljs.core.async.take_BANG_.call(null,inst_28377,inst_28378);
var state_28404__$1 = state_28404;
var statearr_28418_28445 = state_28404__$1;
(statearr_28418_28445[(2)] = inst_28379);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28404__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (9))){
var inst_28368 = (state_28404[(7)]);
var inst_28381 = (state_28404[(2)]);
var inst_28382 = (inst_28368 + (1));
var inst_28368__$1 = inst_28382;
var state_28404__$1 = (function (){var statearr_28419 = state_28404;
(statearr_28419[(10)] = inst_28381);

(statearr_28419[(7)] = inst_28368__$1);

return statearr_28419;
})();
var statearr_28420_28446 = state_28404__$1;
(statearr_28420_28446[(2)] = null);

(statearr_28420_28446[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (5))){
var inst_28388 = (state_28404[(2)]);
var state_28404__$1 = (function (){var statearr_28421 = state_28404;
(statearr_28421[(11)] = inst_28388);

return statearr_28421;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28404__$1,(12),dchan);
} else {
if((state_val_28405 === (14))){
var inst_28390 = (state_28404[(8)]);
var inst_28395 = cljs.core.apply.call(null,f,inst_28390);
var state_28404__$1 = state_28404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28404__$1,(16),out,inst_28395);
} else {
if((state_val_28405 === (16))){
var inst_28397 = (state_28404[(2)]);
var state_28404__$1 = (function (){var statearr_28422 = state_28404;
(statearr_28422[(12)] = inst_28397);

return statearr_28422;
})();
var statearr_28423_28447 = state_28404__$1;
(statearr_28423_28447[(2)] = null);

(statearr_28423_28447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (10))){
var inst_28372 = (state_28404[(2)]);
var inst_28373 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28404__$1 = (function (){var statearr_28424 = state_28404;
(statearr_28424[(13)] = inst_28372);

return statearr_28424;
})();
var statearr_28425_28448 = state_28404__$1;
(statearr_28425_28448[(2)] = inst_28373);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28404__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (8))){
var inst_28386 = (state_28404[(2)]);
var state_28404__$1 = state_28404;
var statearr_28426_28449 = state_28404__$1;
(statearr_28426_28449[(2)] = inst_28386);

(statearr_28426_28449[(1)] = (5));


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
}
}
}
}
}
}
});})(c__13512__auto___28434,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13456__auto__,c__13512__auto___28434,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_28430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28430[(0)] = state_machine__13457__auto__);

(statearr_28430[(1)] = (1));

return statearr_28430;
});
var state_machine__13457__auto____1 = (function (state_28404){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_28404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e28431){if((e28431 instanceof Object)){
var ex__13460__auto__ = e28431;
var statearr_28432_28450 = state_28404;
(statearr_28432_28450[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28451 = state_28404;
state_28404 = G__28451;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_28404){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_28404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto___28434,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13514__auto__ = (function (){var statearr_28433 = f__13513__auto__.call(null);
(statearr_28433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto___28434);

return statearr_28433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto___28434,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13512__auto___28559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto___28559,out){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto___28559,out){
return (function (state_28535){
var state_val_28536 = (state_28535[(1)]);
if((state_val_28536 === (7))){
var inst_28514 = (state_28535[(7)]);
var inst_28515 = (state_28535[(8)]);
var inst_28514__$1 = (state_28535[(2)]);
var inst_28515__$1 = cljs.core.nth.call(null,inst_28514__$1,(0),null);
var inst_28516 = cljs.core.nth.call(null,inst_28514__$1,(1),null);
var inst_28517 = (inst_28515__$1 == null);
var state_28535__$1 = (function (){var statearr_28537 = state_28535;
(statearr_28537[(7)] = inst_28514__$1);

(statearr_28537[(8)] = inst_28515__$1);

(statearr_28537[(9)] = inst_28516);

return statearr_28537;
})();
if(cljs.core.truth_(inst_28517)){
var statearr_28538_28560 = state_28535__$1;
(statearr_28538_28560[(1)] = (8));

} else {
var statearr_28539_28561 = state_28535__$1;
(statearr_28539_28561[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28536 === (1))){
var inst_28506 = cljs.core.vec.call(null,chs);
var inst_28507 = inst_28506;
var state_28535__$1 = (function (){var statearr_28540 = state_28535;
(statearr_28540[(10)] = inst_28507);

return statearr_28540;
})();
var statearr_28541_28562 = state_28535__$1;
(statearr_28541_28562[(2)] = null);

(statearr_28541_28562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28536 === (4))){
var inst_28507 = (state_28535[(10)]);
var state_28535__$1 = state_28535;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28535__$1,(7),inst_28507);
} else {
if((state_val_28536 === (6))){
var inst_28531 = (state_28535[(2)]);
var state_28535__$1 = state_28535;
var statearr_28542_28563 = state_28535__$1;
(statearr_28542_28563[(2)] = inst_28531);

(statearr_28542_28563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28536 === (3))){
var inst_28533 = (state_28535[(2)]);
var state_28535__$1 = state_28535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28535__$1,inst_28533);
} else {
if((state_val_28536 === (2))){
var inst_28507 = (state_28535[(10)]);
var inst_28509 = cljs.core.count.call(null,inst_28507);
var inst_28510 = (inst_28509 > (0));
var state_28535__$1 = state_28535;
if(cljs.core.truth_(inst_28510)){
var statearr_28544_28564 = state_28535__$1;
(statearr_28544_28564[(1)] = (4));

} else {
var statearr_28545_28565 = state_28535__$1;
(statearr_28545_28565[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28536 === (11))){
var inst_28507 = (state_28535[(10)]);
var inst_28524 = (state_28535[(2)]);
var tmp28543 = inst_28507;
var inst_28507__$1 = tmp28543;
var state_28535__$1 = (function (){var statearr_28546 = state_28535;
(statearr_28546[(10)] = inst_28507__$1);

(statearr_28546[(11)] = inst_28524);

return statearr_28546;
})();
var statearr_28547_28566 = state_28535__$1;
(statearr_28547_28566[(2)] = null);

(statearr_28547_28566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28536 === (9))){
var inst_28515 = (state_28535[(8)]);
var state_28535__$1 = state_28535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28535__$1,(11),out,inst_28515);
} else {
if((state_val_28536 === (5))){
var inst_28529 = cljs.core.async.close_BANG_.call(null,out);
var state_28535__$1 = state_28535;
var statearr_28548_28567 = state_28535__$1;
(statearr_28548_28567[(2)] = inst_28529);

(statearr_28548_28567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28536 === (10))){
var inst_28527 = (state_28535[(2)]);
var state_28535__$1 = state_28535;
var statearr_28549_28568 = state_28535__$1;
(statearr_28549_28568[(2)] = inst_28527);

(statearr_28549_28568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28536 === (8))){
var inst_28507 = (state_28535[(10)]);
var inst_28514 = (state_28535[(7)]);
var inst_28515 = (state_28535[(8)]);
var inst_28516 = (state_28535[(9)]);
var inst_28519 = (function (){var c = inst_28516;
var v = inst_28515;
var vec__28512 = inst_28514;
var cs = inst_28507;
return ((function (c,v,vec__28512,cs,inst_28507,inst_28514,inst_28515,inst_28516,state_val_28536,c__13512__auto___28559,out){
return (function (p1__28452_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28452_SHARP_);
});
;})(c,v,vec__28512,cs,inst_28507,inst_28514,inst_28515,inst_28516,state_val_28536,c__13512__auto___28559,out))
})();
var inst_28520 = cljs.core.filterv.call(null,inst_28519,inst_28507);
var inst_28507__$1 = inst_28520;
var state_28535__$1 = (function (){var statearr_28550 = state_28535;
(statearr_28550[(10)] = inst_28507__$1);

return statearr_28550;
})();
var statearr_28551_28569 = state_28535__$1;
(statearr_28551_28569[(2)] = null);

(statearr_28551_28569[(1)] = (2));


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
}
});})(c__13512__auto___28559,out))
;
return ((function (switch__13456__auto__,c__13512__auto___28559,out){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_28555 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28555[(0)] = state_machine__13457__auto__);

(statearr_28555[(1)] = (1));

return statearr_28555;
});
var state_machine__13457__auto____1 = (function (state_28535){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_28535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e28556){if((e28556 instanceof Object)){
var ex__13460__auto__ = e28556;
var statearr_28557_28570 = state_28535;
(statearr_28557_28570[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28571 = state_28535;
state_28535 = G__28571;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_28535){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_28535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto___28559,out))
})();
var state__13514__auto__ = (function (){var statearr_28558 = f__13513__auto__.call(null);
(statearr_28558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto___28559);

return statearr_28558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto___28559,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13512__auto___28664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto___28664,out){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto___28664,out){
return (function (state_28641){
var state_val_28642 = (state_28641[(1)]);
if((state_val_28642 === (7))){
var inst_28623 = (state_28641[(7)]);
var inst_28623__$1 = (state_28641[(2)]);
var inst_28624 = (inst_28623__$1 == null);
var inst_28625 = cljs.core.not.call(null,inst_28624);
var state_28641__$1 = (function (){var statearr_28643 = state_28641;
(statearr_28643[(7)] = inst_28623__$1);

return statearr_28643;
})();
if(inst_28625){
var statearr_28644_28665 = state_28641__$1;
(statearr_28644_28665[(1)] = (8));

} else {
var statearr_28645_28666 = state_28641__$1;
(statearr_28645_28666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28642 === (1))){
var inst_28618 = (0);
var state_28641__$1 = (function (){var statearr_28646 = state_28641;
(statearr_28646[(8)] = inst_28618);

return statearr_28646;
})();
var statearr_28647_28667 = state_28641__$1;
(statearr_28647_28667[(2)] = null);

(statearr_28647_28667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28642 === (4))){
var state_28641__$1 = state_28641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28641__$1,(7),ch);
} else {
if((state_val_28642 === (6))){
var inst_28636 = (state_28641[(2)]);
var state_28641__$1 = state_28641;
var statearr_28648_28668 = state_28641__$1;
(statearr_28648_28668[(2)] = inst_28636);

(statearr_28648_28668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28642 === (3))){
var inst_28638 = (state_28641[(2)]);
var inst_28639 = cljs.core.async.close_BANG_.call(null,out);
var state_28641__$1 = (function (){var statearr_28649 = state_28641;
(statearr_28649[(9)] = inst_28638);

return statearr_28649;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28641__$1,inst_28639);
} else {
if((state_val_28642 === (2))){
var inst_28618 = (state_28641[(8)]);
var inst_28620 = (inst_28618 < n);
var state_28641__$1 = state_28641;
if(cljs.core.truth_(inst_28620)){
var statearr_28650_28669 = state_28641__$1;
(statearr_28650_28669[(1)] = (4));

} else {
var statearr_28651_28670 = state_28641__$1;
(statearr_28651_28670[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28642 === (11))){
var inst_28618 = (state_28641[(8)]);
var inst_28628 = (state_28641[(2)]);
var inst_28629 = (inst_28618 + (1));
var inst_28618__$1 = inst_28629;
var state_28641__$1 = (function (){var statearr_28652 = state_28641;
(statearr_28652[(10)] = inst_28628);

(statearr_28652[(8)] = inst_28618__$1);

return statearr_28652;
})();
var statearr_28653_28671 = state_28641__$1;
(statearr_28653_28671[(2)] = null);

(statearr_28653_28671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28642 === (9))){
var state_28641__$1 = state_28641;
var statearr_28654_28672 = state_28641__$1;
(statearr_28654_28672[(2)] = null);

(statearr_28654_28672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28642 === (5))){
var state_28641__$1 = state_28641;
var statearr_28655_28673 = state_28641__$1;
(statearr_28655_28673[(2)] = null);

(statearr_28655_28673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28642 === (10))){
var inst_28633 = (state_28641[(2)]);
var state_28641__$1 = state_28641;
var statearr_28656_28674 = state_28641__$1;
(statearr_28656_28674[(2)] = inst_28633);

(statearr_28656_28674[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28642 === (8))){
var inst_28623 = (state_28641[(7)]);
var state_28641__$1 = state_28641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28641__$1,(11),out,inst_28623);
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
}
});})(c__13512__auto___28664,out))
;
return ((function (switch__13456__auto__,c__13512__auto___28664,out){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_28660 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28660[(0)] = state_machine__13457__auto__);

(statearr_28660[(1)] = (1));

return statearr_28660;
});
var state_machine__13457__auto____1 = (function (state_28641){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_28641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e28661){if((e28661 instanceof Object)){
var ex__13460__auto__ = e28661;
var statearr_28662_28675 = state_28641;
(statearr_28662_28675[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28676 = state_28641;
state_28641 = G__28676;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_28641){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_28641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto___28664,out))
})();
var state__13514__auto__ = (function (){var statearr_28663 = f__13513__auto__.call(null);
(statearr_28663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto___28664);

return statearr_28663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto___28664,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t28684 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28684 = (function (ch,f,map_LT_,meta28685){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28685 = meta28685;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28684.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28684.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t28684.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28684.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t28687 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28687 = (function (fn1,_,meta28685,map_LT_,f,ch,meta28688){
this.fn1 = fn1;
this._ = _;
this.meta28685 = meta28685;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28688 = meta28688;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28687.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28687.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t28687.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28677_SHARP_){
return f1.call(null,(((p1__28677_SHARP_ == null))?null:self__.f.call(null,p1__28677_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t28687.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28689){
var self__ = this;
var _28689__$1 = this;
return self__.meta28688;
});})(___$1))
;

cljs.core.async.t28687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28689,meta28688__$1){
var self__ = this;
var _28689__$1 = this;
return (new cljs.core.async.t28687(self__.fn1,self__._,self__.meta28685,self__.map_LT_,self__.f,self__.ch,meta28688__$1));
});})(___$1))
;

cljs.core.async.t28687.cljs$lang$type = true;

cljs.core.async.t28687.cljs$lang$ctorStr = "cljs.core.async/t28687";

cljs.core.async.t28687.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4342__auto__,writer__4343__auto__,opt__4344__auto__){
return cljs.core._write.call(null,writer__4343__auto__,"cljs.core.async/t28687");
});})(___$1))
;

cljs.core.async.__GT_t28687 = ((function (___$1){
return (function __GT_t28687(fn1__$1,___$2,meta28685__$1,map_LT___$1,f__$1,ch__$1,meta28688){
return (new cljs.core.async.t28687(fn1__$1,___$2,meta28685__$1,map_LT___$1,f__$1,ch__$1,meta28688));
});})(___$1))
;

}

return (new cljs.core.async.t28687(fn1,___$1,self__.meta28685,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/shout/client/cljs/resources/public/devcards/js/compiled/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3743__auto__ = ret;
if(cljs.core.truth_(and__3743__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3743__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t28684.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28684.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28684.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28686){
var self__ = this;
var _28686__$1 = this;
return self__.meta28685;
});

cljs.core.async.t28684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28686,meta28685__$1){
var self__ = this;
var _28686__$1 = this;
return (new cljs.core.async.t28684(self__.ch,self__.f,self__.map_LT_,meta28685__$1));
});

cljs.core.async.t28684.cljs$lang$type = true;

cljs.core.async.t28684.cljs$lang$ctorStr = "cljs.core.async/t28684";

cljs.core.async.t28684.cljs$lang$ctorPrWriter = (function (this__4342__auto__,writer__4343__auto__,opt__4344__auto__){
return cljs.core._write.call(null,writer__4343__auto__,"cljs.core.async/t28684");
});

cljs.core.async.__GT_t28684 = (function __GT_t28684(ch__$1,f__$1,map_LT___$1,meta28685){
return (new cljs.core.async.t28684(ch__$1,f__$1,map_LT___$1,meta28685));
});

}

return (new cljs.core.async.t28684(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/shout/client/cljs/resources/public/devcards/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t28693 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28693 = (function (ch,f,map_GT_,meta28694){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28694 = meta28694;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28693.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28693.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t28693.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28693.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28693.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28693.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28695){
var self__ = this;
var _28695__$1 = this;
return self__.meta28694;
});

cljs.core.async.t28693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28695,meta28694__$1){
var self__ = this;
var _28695__$1 = this;
return (new cljs.core.async.t28693(self__.ch,self__.f,self__.map_GT_,meta28694__$1));
});

cljs.core.async.t28693.cljs$lang$type = true;

cljs.core.async.t28693.cljs$lang$ctorStr = "cljs.core.async/t28693";

cljs.core.async.t28693.cljs$lang$ctorPrWriter = (function (this__4342__auto__,writer__4343__auto__,opt__4344__auto__){
return cljs.core._write.call(null,writer__4343__auto__,"cljs.core.async/t28693");
});

cljs.core.async.__GT_t28693 = (function __GT_t28693(ch__$1,f__$1,map_GT___$1,meta28694){
return (new cljs.core.async.t28693(ch__$1,f__$1,map_GT___$1,meta28694));
});

}

return (new cljs.core.async.t28693(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/shout/client/cljs/resources/public/devcards/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t28699 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28699 = (function (ch,p,filter_GT_,meta28700){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28700 = meta28700;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28699.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28699.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t28699.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28699.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28699.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28699.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28699.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28701){
var self__ = this;
var _28701__$1 = this;
return self__.meta28700;
});

cljs.core.async.t28699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28701,meta28700__$1){
var self__ = this;
var _28701__$1 = this;
return (new cljs.core.async.t28699(self__.ch,self__.p,self__.filter_GT_,meta28700__$1));
});

cljs.core.async.t28699.cljs$lang$type = true;

cljs.core.async.t28699.cljs$lang$ctorStr = "cljs.core.async/t28699";

cljs.core.async.t28699.cljs$lang$ctorPrWriter = (function (this__4342__auto__,writer__4343__auto__,opt__4344__auto__){
return cljs.core._write.call(null,writer__4343__auto__,"cljs.core.async/t28699");
});

cljs.core.async.__GT_t28699 = (function __GT_t28699(ch__$1,p__$1,filter_GT___$1,meta28700){
return (new cljs.core.async.t28699(ch__$1,p__$1,filter_GT___$1,meta28700));
});

}

return (new cljs.core.async.t28699(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/brentvatne/coding/shout/client/cljs/resources/public/devcards/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13512__auto___28784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto___28784,out){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto___28784,out){
return (function (state_28763){
var state_val_28764 = (state_28763[(1)]);
if((state_val_28764 === (7))){
var inst_28759 = (state_28763[(2)]);
var state_28763__$1 = state_28763;
var statearr_28765_28785 = state_28763__$1;
(statearr_28765_28785[(2)] = inst_28759);

(statearr_28765_28785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28764 === (1))){
var state_28763__$1 = state_28763;
var statearr_28766_28786 = state_28763__$1;
(statearr_28766_28786[(2)] = null);

(statearr_28766_28786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28764 === (4))){
var inst_28745 = (state_28763[(7)]);
var inst_28745__$1 = (state_28763[(2)]);
var inst_28746 = (inst_28745__$1 == null);
var state_28763__$1 = (function (){var statearr_28767 = state_28763;
(statearr_28767[(7)] = inst_28745__$1);

return statearr_28767;
})();
if(cljs.core.truth_(inst_28746)){
var statearr_28768_28787 = state_28763__$1;
(statearr_28768_28787[(1)] = (5));

} else {
var statearr_28769_28788 = state_28763__$1;
(statearr_28769_28788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28764 === (6))){
var inst_28745 = (state_28763[(7)]);
var inst_28750 = p.call(null,inst_28745);
var state_28763__$1 = state_28763;
if(cljs.core.truth_(inst_28750)){
var statearr_28770_28789 = state_28763__$1;
(statearr_28770_28789[(1)] = (8));

} else {
var statearr_28771_28790 = state_28763__$1;
(statearr_28771_28790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28764 === (3))){
var inst_28761 = (state_28763[(2)]);
var state_28763__$1 = state_28763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28763__$1,inst_28761);
} else {
if((state_val_28764 === (2))){
var state_28763__$1 = state_28763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28763__$1,(4),ch);
} else {
if((state_val_28764 === (11))){
var inst_28753 = (state_28763[(2)]);
var state_28763__$1 = state_28763;
var statearr_28772_28791 = state_28763__$1;
(statearr_28772_28791[(2)] = inst_28753);

(statearr_28772_28791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28764 === (9))){
var state_28763__$1 = state_28763;
var statearr_28773_28792 = state_28763__$1;
(statearr_28773_28792[(2)] = null);

(statearr_28773_28792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28764 === (5))){
var inst_28748 = cljs.core.async.close_BANG_.call(null,out);
var state_28763__$1 = state_28763;
var statearr_28774_28793 = state_28763__$1;
(statearr_28774_28793[(2)] = inst_28748);

(statearr_28774_28793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28764 === (10))){
var inst_28756 = (state_28763[(2)]);
var state_28763__$1 = (function (){var statearr_28775 = state_28763;
(statearr_28775[(8)] = inst_28756);

return statearr_28775;
})();
var statearr_28776_28794 = state_28763__$1;
(statearr_28776_28794[(2)] = null);

(statearr_28776_28794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28764 === (8))){
var inst_28745 = (state_28763[(7)]);
var state_28763__$1 = state_28763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28763__$1,(11),out,inst_28745);
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
}
});})(c__13512__auto___28784,out))
;
return ((function (switch__13456__auto__,c__13512__auto___28784,out){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_28780 = [null,null,null,null,null,null,null,null,null];
(statearr_28780[(0)] = state_machine__13457__auto__);

(statearr_28780[(1)] = (1));

return statearr_28780;
});
var state_machine__13457__auto____1 = (function (state_28763){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_28763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e28781){if((e28781 instanceof Object)){
var ex__13460__auto__ = e28781;
var statearr_28782_28795 = state_28763;
(statearr_28782_28795[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28796 = state_28763;
state_28763 = G__28796;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_28763){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_28763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto___28784,out))
})();
var state__13514__auto__ = (function (){var statearr_28783 = f__13513__auto__.call(null);
(statearr_28783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto___28784);

return statearr_28783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto___28784,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__13512__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto__){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto__){
return (function (state_28962){
var state_val_28963 = (state_28962[(1)]);
if((state_val_28963 === (7))){
var inst_28958 = (state_28962[(2)]);
var state_28962__$1 = state_28962;
var statearr_28964_29005 = state_28962__$1;
(statearr_28964_29005[(2)] = inst_28958);

(statearr_28964_29005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (20))){
var inst_28928 = (state_28962[(7)]);
var inst_28939 = (state_28962[(2)]);
var inst_28940 = cljs.core.next.call(null,inst_28928);
var inst_28914 = inst_28940;
var inst_28915 = null;
var inst_28916 = (0);
var inst_28917 = (0);
var state_28962__$1 = (function (){var statearr_28965 = state_28962;
(statearr_28965[(8)] = inst_28914);

(statearr_28965[(9)] = inst_28939);

(statearr_28965[(10)] = inst_28915);

(statearr_28965[(11)] = inst_28916);

(statearr_28965[(12)] = inst_28917);

return statearr_28965;
})();
var statearr_28966_29006 = state_28962__$1;
(statearr_28966_29006[(2)] = null);

(statearr_28966_29006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (1))){
var state_28962__$1 = state_28962;
var statearr_28967_29007 = state_28962__$1;
(statearr_28967_29007[(2)] = null);

(statearr_28967_29007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (4))){
var inst_28903 = (state_28962[(13)]);
var inst_28903__$1 = (state_28962[(2)]);
var inst_28904 = (inst_28903__$1 == null);
var state_28962__$1 = (function (){var statearr_28968 = state_28962;
(statearr_28968[(13)] = inst_28903__$1);

return statearr_28968;
})();
if(cljs.core.truth_(inst_28904)){
var statearr_28969_29008 = state_28962__$1;
(statearr_28969_29008[(1)] = (5));

} else {
var statearr_28970_29009 = state_28962__$1;
(statearr_28970_29009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (15))){
var state_28962__$1 = state_28962;
var statearr_28974_29010 = state_28962__$1;
(statearr_28974_29010[(2)] = null);

(statearr_28974_29010[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (21))){
var state_28962__$1 = state_28962;
var statearr_28975_29011 = state_28962__$1;
(statearr_28975_29011[(2)] = null);

(statearr_28975_29011[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (13))){
var inst_28914 = (state_28962[(8)]);
var inst_28915 = (state_28962[(10)]);
var inst_28916 = (state_28962[(11)]);
var inst_28917 = (state_28962[(12)]);
var inst_28924 = (state_28962[(2)]);
var inst_28925 = (inst_28917 + (1));
var tmp28971 = inst_28914;
var tmp28972 = inst_28915;
var tmp28973 = inst_28916;
var inst_28914__$1 = tmp28971;
var inst_28915__$1 = tmp28972;
var inst_28916__$1 = tmp28973;
var inst_28917__$1 = inst_28925;
var state_28962__$1 = (function (){var statearr_28976 = state_28962;
(statearr_28976[(8)] = inst_28914__$1);

(statearr_28976[(14)] = inst_28924);

(statearr_28976[(10)] = inst_28915__$1);

(statearr_28976[(11)] = inst_28916__$1);

(statearr_28976[(12)] = inst_28917__$1);

return statearr_28976;
})();
var statearr_28977_29012 = state_28962__$1;
(statearr_28977_29012[(2)] = null);

(statearr_28977_29012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (22))){
var state_28962__$1 = state_28962;
var statearr_28978_29013 = state_28962__$1;
(statearr_28978_29013[(2)] = null);

(statearr_28978_29013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (6))){
var inst_28903 = (state_28962[(13)]);
var inst_28912 = f.call(null,inst_28903);
var inst_28913 = cljs.core.seq.call(null,inst_28912);
var inst_28914 = inst_28913;
var inst_28915 = null;
var inst_28916 = (0);
var inst_28917 = (0);
var state_28962__$1 = (function (){var statearr_28979 = state_28962;
(statearr_28979[(8)] = inst_28914);

(statearr_28979[(10)] = inst_28915);

(statearr_28979[(11)] = inst_28916);

(statearr_28979[(12)] = inst_28917);

return statearr_28979;
})();
var statearr_28980_29014 = state_28962__$1;
(statearr_28980_29014[(2)] = null);

(statearr_28980_29014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (17))){
var inst_28928 = (state_28962[(7)]);
var inst_28932 = cljs.core.chunk_first.call(null,inst_28928);
var inst_28933 = cljs.core.chunk_rest.call(null,inst_28928);
var inst_28934 = cljs.core.count.call(null,inst_28932);
var inst_28914 = inst_28933;
var inst_28915 = inst_28932;
var inst_28916 = inst_28934;
var inst_28917 = (0);
var state_28962__$1 = (function (){var statearr_28981 = state_28962;
(statearr_28981[(8)] = inst_28914);

(statearr_28981[(10)] = inst_28915);

(statearr_28981[(11)] = inst_28916);

(statearr_28981[(12)] = inst_28917);

return statearr_28981;
})();
var statearr_28982_29015 = state_28962__$1;
(statearr_28982_29015[(2)] = null);

(statearr_28982_29015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (3))){
var inst_28960 = (state_28962[(2)]);
var state_28962__$1 = state_28962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28962__$1,inst_28960);
} else {
if((state_val_28963 === (12))){
var inst_28948 = (state_28962[(2)]);
var state_28962__$1 = state_28962;
var statearr_28983_29016 = state_28962__$1;
(statearr_28983_29016[(2)] = inst_28948);

(statearr_28983_29016[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (2))){
var state_28962__$1 = state_28962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28962__$1,(4),in$);
} else {
if((state_val_28963 === (23))){
var inst_28956 = (state_28962[(2)]);
var state_28962__$1 = state_28962;
var statearr_28984_29017 = state_28962__$1;
(statearr_28984_29017[(2)] = inst_28956);

(statearr_28984_29017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (19))){
var inst_28943 = (state_28962[(2)]);
var state_28962__$1 = state_28962;
var statearr_28985_29018 = state_28962__$1;
(statearr_28985_29018[(2)] = inst_28943);

(statearr_28985_29018[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (11))){
var inst_28914 = (state_28962[(8)]);
var inst_28928 = (state_28962[(7)]);
var inst_28928__$1 = cljs.core.seq.call(null,inst_28914);
var state_28962__$1 = (function (){var statearr_28986 = state_28962;
(statearr_28986[(7)] = inst_28928__$1);

return statearr_28986;
})();
if(inst_28928__$1){
var statearr_28987_29019 = state_28962__$1;
(statearr_28987_29019[(1)] = (14));

} else {
var statearr_28988_29020 = state_28962__$1;
(statearr_28988_29020[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (9))){
var inst_28950 = (state_28962[(2)]);
var inst_28951 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28962__$1 = (function (){var statearr_28989 = state_28962;
(statearr_28989[(15)] = inst_28950);

return statearr_28989;
})();
if(cljs.core.truth_(inst_28951)){
var statearr_28990_29021 = state_28962__$1;
(statearr_28990_29021[(1)] = (21));

} else {
var statearr_28991_29022 = state_28962__$1;
(statearr_28991_29022[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (5))){
var inst_28906 = cljs.core.async.close_BANG_.call(null,out);
var state_28962__$1 = state_28962;
var statearr_28992_29023 = state_28962__$1;
(statearr_28992_29023[(2)] = inst_28906);

(statearr_28992_29023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (14))){
var inst_28928 = (state_28962[(7)]);
var inst_28930 = cljs.core.chunked_seq_QMARK_.call(null,inst_28928);
var state_28962__$1 = state_28962;
if(inst_28930){
var statearr_28993_29024 = state_28962__$1;
(statearr_28993_29024[(1)] = (17));

} else {
var statearr_28994_29025 = state_28962__$1;
(statearr_28994_29025[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (16))){
var inst_28946 = (state_28962[(2)]);
var state_28962__$1 = state_28962;
var statearr_28995_29026 = state_28962__$1;
(statearr_28995_29026[(2)] = inst_28946);

(statearr_28995_29026[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (10))){
var inst_28915 = (state_28962[(10)]);
var inst_28917 = (state_28962[(12)]);
var inst_28922 = cljs.core._nth.call(null,inst_28915,inst_28917);
var state_28962__$1 = state_28962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28962__$1,(13),out,inst_28922);
} else {
if((state_val_28963 === (18))){
var inst_28928 = (state_28962[(7)]);
var inst_28937 = cljs.core.first.call(null,inst_28928);
var state_28962__$1 = state_28962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28962__$1,(20),out,inst_28937);
} else {
if((state_val_28963 === (8))){
var inst_28916 = (state_28962[(11)]);
var inst_28917 = (state_28962[(12)]);
var inst_28919 = (inst_28917 < inst_28916);
var inst_28920 = inst_28919;
var state_28962__$1 = state_28962;
if(cljs.core.truth_(inst_28920)){
var statearr_28996_29027 = state_28962__$1;
(statearr_28996_29027[(1)] = (10));

} else {
var statearr_28997_29028 = state_28962__$1;
(statearr_28997_29028[(1)] = (11));

}

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
}
}
}
});})(c__13512__auto__))
;
return ((function (switch__13456__auto__,c__13512__auto__){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_29001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29001[(0)] = state_machine__13457__auto__);

(statearr_29001[(1)] = (1));

return statearr_29001;
});
var state_machine__13457__auto____1 = (function (state_28962){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_28962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e29002){if((e29002 instanceof Object)){
var ex__13460__auto__ = e29002;
var statearr_29003_29029 = state_28962;
(statearr_29003_29029[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29030 = state_28962;
state_28962 = G__29030;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_28962){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_28962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto__))
})();
var state__13514__auto__ = (function (){var statearr_29004 = f__13513__auto__.call(null);
(statearr_29004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto__);

return statearr_29004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto__))
);

return c__13512__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13512__auto___29127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto___29127,out){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto___29127,out){
return (function (state_29102){
var state_val_29103 = (state_29102[(1)]);
if((state_val_29103 === (7))){
var inst_29097 = (state_29102[(2)]);
var state_29102__$1 = state_29102;
var statearr_29104_29128 = state_29102__$1;
(statearr_29104_29128[(2)] = inst_29097);

(statearr_29104_29128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (1))){
var inst_29079 = null;
var state_29102__$1 = (function (){var statearr_29105 = state_29102;
(statearr_29105[(7)] = inst_29079);

return statearr_29105;
})();
var statearr_29106_29129 = state_29102__$1;
(statearr_29106_29129[(2)] = null);

(statearr_29106_29129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (4))){
var inst_29082 = (state_29102[(8)]);
var inst_29082__$1 = (state_29102[(2)]);
var inst_29083 = (inst_29082__$1 == null);
var inst_29084 = cljs.core.not.call(null,inst_29083);
var state_29102__$1 = (function (){var statearr_29107 = state_29102;
(statearr_29107[(8)] = inst_29082__$1);

return statearr_29107;
})();
if(inst_29084){
var statearr_29108_29130 = state_29102__$1;
(statearr_29108_29130[(1)] = (5));

} else {
var statearr_29109_29131 = state_29102__$1;
(statearr_29109_29131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (6))){
var state_29102__$1 = state_29102;
var statearr_29110_29132 = state_29102__$1;
(statearr_29110_29132[(2)] = null);

(statearr_29110_29132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (3))){
var inst_29099 = (state_29102[(2)]);
var inst_29100 = cljs.core.async.close_BANG_.call(null,out);
var state_29102__$1 = (function (){var statearr_29111 = state_29102;
(statearr_29111[(9)] = inst_29099);

return statearr_29111;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29102__$1,inst_29100);
} else {
if((state_val_29103 === (2))){
var state_29102__$1 = state_29102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29102__$1,(4),ch);
} else {
if((state_val_29103 === (11))){
var inst_29082 = (state_29102[(8)]);
var inst_29091 = (state_29102[(2)]);
var inst_29079 = inst_29082;
var state_29102__$1 = (function (){var statearr_29112 = state_29102;
(statearr_29112[(10)] = inst_29091);

(statearr_29112[(7)] = inst_29079);

return statearr_29112;
})();
var statearr_29113_29133 = state_29102__$1;
(statearr_29113_29133[(2)] = null);

(statearr_29113_29133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (9))){
var inst_29082 = (state_29102[(8)]);
var state_29102__$1 = state_29102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29102__$1,(11),out,inst_29082);
} else {
if((state_val_29103 === (5))){
var inst_29082 = (state_29102[(8)]);
var inst_29079 = (state_29102[(7)]);
var inst_29086 = cljs.core._EQ_.call(null,inst_29082,inst_29079);
var state_29102__$1 = state_29102;
if(inst_29086){
var statearr_29115_29134 = state_29102__$1;
(statearr_29115_29134[(1)] = (8));

} else {
var statearr_29116_29135 = state_29102__$1;
(statearr_29116_29135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (10))){
var inst_29094 = (state_29102[(2)]);
var state_29102__$1 = state_29102;
var statearr_29117_29136 = state_29102__$1;
(statearr_29117_29136[(2)] = inst_29094);

(statearr_29117_29136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (8))){
var inst_29079 = (state_29102[(7)]);
var tmp29114 = inst_29079;
var inst_29079__$1 = tmp29114;
var state_29102__$1 = (function (){var statearr_29118 = state_29102;
(statearr_29118[(7)] = inst_29079__$1);

return statearr_29118;
})();
var statearr_29119_29137 = state_29102__$1;
(statearr_29119_29137[(2)] = null);

(statearr_29119_29137[(1)] = (2));


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
}
});})(c__13512__auto___29127,out))
;
return ((function (switch__13456__auto__,c__13512__auto___29127,out){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_29123 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29123[(0)] = state_machine__13457__auto__);

(statearr_29123[(1)] = (1));

return statearr_29123;
});
var state_machine__13457__auto____1 = (function (state_29102){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_29102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e29124){if((e29124 instanceof Object)){
var ex__13460__auto__ = e29124;
var statearr_29125_29138 = state_29102;
(statearr_29125_29138[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29139 = state_29102;
state_29102 = G__29139;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_29102){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_29102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto___29127,out))
})();
var state__13514__auto__ = (function (){var statearr_29126 = f__13513__auto__.call(null);
(statearr_29126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto___29127);

return statearr_29126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto___29127,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13512__auto___29274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto___29274,out){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto___29274,out){
return (function (state_29244){
var state_val_29245 = (state_29244[(1)]);
if((state_val_29245 === (7))){
var inst_29240 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
var statearr_29246_29275 = state_29244__$1;
(statearr_29246_29275[(2)] = inst_29240);

(statearr_29246_29275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (1))){
var inst_29207 = (new Array(n));
var inst_29208 = inst_29207;
var inst_29209 = (0);
var state_29244__$1 = (function (){var statearr_29247 = state_29244;
(statearr_29247[(7)] = inst_29208);

(statearr_29247[(8)] = inst_29209);

return statearr_29247;
})();
var statearr_29248_29276 = state_29244__$1;
(statearr_29248_29276[(2)] = null);

(statearr_29248_29276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (4))){
var inst_29212 = (state_29244[(9)]);
var inst_29212__$1 = (state_29244[(2)]);
var inst_29213 = (inst_29212__$1 == null);
var inst_29214 = cljs.core.not.call(null,inst_29213);
var state_29244__$1 = (function (){var statearr_29249 = state_29244;
(statearr_29249[(9)] = inst_29212__$1);

return statearr_29249;
})();
if(inst_29214){
var statearr_29250_29277 = state_29244__$1;
(statearr_29250_29277[(1)] = (5));

} else {
var statearr_29251_29278 = state_29244__$1;
(statearr_29251_29278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (15))){
var inst_29234 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
var statearr_29252_29279 = state_29244__$1;
(statearr_29252_29279[(2)] = inst_29234);

(statearr_29252_29279[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (13))){
var state_29244__$1 = state_29244;
var statearr_29253_29280 = state_29244__$1;
(statearr_29253_29280[(2)] = null);

(statearr_29253_29280[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (6))){
var inst_29209 = (state_29244[(8)]);
var inst_29230 = (inst_29209 > (0));
var state_29244__$1 = state_29244;
if(cljs.core.truth_(inst_29230)){
var statearr_29254_29281 = state_29244__$1;
(statearr_29254_29281[(1)] = (12));

} else {
var statearr_29255_29282 = state_29244__$1;
(statearr_29255_29282[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (3))){
var inst_29242 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29244__$1,inst_29242);
} else {
if((state_val_29245 === (12))){
var inst_29208 = (state_29244[(7)]);
var inst_29232 = cljs.core.vec.call(null,inst_29208);
var state_29244__$1 = state_29244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29244__$1,(15),out,inst_29232);
} else {
if((state_val_29245 === (2))){
var state_29244__$1 = state_29244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29244__$1,(4),ch);
} else {
if((state_val_29245 === (11))){
var inst_29224 = (state_29244[(2)]);
var inst_29225 = (new Array(n));
var inst_29208 = inst_29225;
var inst_29209 = (0);
var state_29244__$1 = (function (){var statearr_29256 = state_29244;
(statearr_29256[(10)] = inst_29224);

(statearr_29256[(7)] = inst_29208);

(statearr_29256[(8)] = inst_29209);

return statearr_29256;
})();
var statearr_29257_29283 = state_29244__$1;
(statearr_29257_29283[(2)] = null);

(statearr_29257_29283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (9))){
var inst_29208 = (state_29244[(7)]);
var inst_29222 = cljs.core.vec.call(null,inst_29208);
var state_29244__$1 = state_29244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29244__$1,(11),out,inst_29222);
} else {
if((state_val_29245 === (5))){
var inst_29217 = (state_29244[(11)]);
var inst_29212 = (state_29244[(9)]);
var inst_29208 = (state_29244[(7)]);
var inst_29209 = (state_29244[(8)]);
var inst_29216 = (inst_29208[inst_29209] = inst_29212);
var inst_29217__$1 = (inst_29209 + (1));
var inst_29218 = (inst_29217__$1 < n);
var state_29244__$1 = (function (){var statearr_29258 = state_29244;
(statearr_29258[(11)] = inst_29217__$1);

(statearr_29258[(12)] = inst_29216);

return statearr_29258;
})();
if(cljs.core.truth_(inst_29218)){
var statearr_29259_29284 = state_29244__$1;
(statearr_29259_29284[(1)] = (8));

} else {
var statearr_29260_29285 = state_29244__$1;
(statearr_29260_29285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (14))){
var inst_29237 = (state_29244[(2)]);
var inst_29238 = cljs.core.async.close_BANG_.call(null,out);
var state_29244__$1 = (function (){var statearr_29262 = state_29244;
(statearr_29262[(13)] = inst_29237);

return statearr_29262;
})();
var statearr_29263_29286 = state_29244__$1;
(statearr_29263_29286[(2)] = inst_29238);

(statearr_29263_29286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (10))){
var inst_29228 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
var statearr_29264_29287 = state_29244__$1;
(statearr_29264_29287[(2)] = inst_29228);

(statearr_29264_29287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (8))){
var inst_29217 = (state_29244[(11)]);
var inst_29208 = (state_29244[(7)]);
var tmp29261 = inst_29208;
var inst_29208__$1 = tmp29261;
var inst_29209 = inst_29217;
var state_29244__$1 = (function (){var statearr_29265 = state_29244;
(statearr_29265[(7)] = inst_29208__$1);

(statearr_29265[(8)] = inst_29209);

return statearr_29265;
})();
var statearr_29266_29288 = state_29244__$1;
(statearr_29266_29288[(2)] = null);

(statearr_29266_29288[(1)] = (2));


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
}
}
}
}
}
});})(c__13512__auto___29274,out))
;
return ((function (switch__13456__auto__,c__13512__auto___29274,out){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_29270 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29270[(0)] = state_machine__13457__auto__);

(statearr_29270[(1)] = (1));

return statearr_29270;
});
var state_machine__13457__auto____1 = (function (state_29244){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_29244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e29271){if((e29271 instanceof Object)){
var ex__13460__auto__ = e29271;
var statearr_29272_29289 = state_29244;
(statearr_29272_29289[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29290 = state_29244;
state_29244 = G__29290;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_29244){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_29244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto___29274,out))
})();
var state__13514__auto__ = (function (){var statearr_29273 = f__13513__auto__.call(null);
(statearr_29273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto___29274);

return statearr_29273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto___29274,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13512__auto___29433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto___29433,out){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto___29433,out){
return (function (state_29403){
var state_val_29404 = (state_29403[(1)]);
if((state_val_29404 === (7))){
var inst_29399 = (state_29403[(2)]);
var state_29403__$1 = state_29403;
var statearr_29405_29434 = state_29403__$1;
(statearr_29405_29434[(2)] = inst_29399);

(statearr_29405_29434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29404 === (1))){
var inst_29362 = [];
var inst_29363 = inst_29362;
var inst_29364 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29403__$1 = (function (){var statearr_29406 = state_29403;
(statearr_29406[(7)] = inst_29364);

(statearr_29406[(8)] = inst_29363);

return statearr_29406;
})();
var statearr_29407_29435 = state_29403__$1;
(statearr_29407_29435[(2)] = null);

(statearr_29407_29435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29404 === (4))){
var inst_29367 = (state_29403[(9)]);
var inst_29367__$1 = (state_29403[(2)]);
var inst_29368 = (inst_29367__$1 == null);
var inst_29369 = cljs.core.not.call(null,inst_29368);
var state_29403__$1 = (function (){var statearr_29408 = state_29403;
(statearr_29408[(9)] = inst_29367__$1);

return statearr_29408;
})();
if(inst_29369){
var statearr_29409_29436 = state_29403__$1;
(statearr_29409_29436[(1)] = (5));

} else {
var statearr_29410_29437 = state_29403__$1;
(statearr_29410_29437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29404 === (15))){
var inst_29393 = (state_29403[(2)]);
var state_29403__$1 = state_29403;
var statearr_29411_29438 = state_29403__$1;
(statearr_29411_29438[(2)] = inst_29393);

(statearr_29411_29438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29404 === (13))){
var state_29403__$1 = state_29403;
var statearr_29412_29439 = state_29403__$1;
(statearr_29412_29439[(2)] = null);

(statearr_29412_29439[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29404 === (6))){
var inst_29363 = (state_29403[(8)]);
var inst_29388 = inst_29363.length;
var inst_29389 = (inst_29388 > (0));
var state_29403__$1 = state_29403;
if(cljs.core.truth_(inst_29389)){
var statearr_29413_29440 = state_29403__$1;
(statearr_29413_29440[(1)] = (12));

} else {
var statearr_29414_29441 = state_29403__$1;
(statearr_29414_29441[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29404 === (3))){
var inst_29401 = (state_29403[(2)]);
var state_29403__$1 = state_29403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29403__$1,inst_29401);
} else {
if((state_val_29404 === (12))){
var inst_29363 = (state_29403[(8)]);
var inst_29391 = cljs.core.vec.call(null,inst_29363);
var state_29403__$1 = state_29403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29403__$1,(15),out,inst_29391);
} else {
if((state_val_29404 === (2))){
var state_29403__$1 = state_29403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29403__$1,(4),ch);
} else {
if((state_val_29404 === (11))){
var inst_29371 = (state_29403[(10)]);
var inst_29367 = (state_29403[(9)]);
var inst_29381 = (state_29403[(2)]);
var inst_29382 = [];
var inst_29383 = inst_29382.push(inst_29367);
var inst_29363 = inst_29382;
var inst_29364 = inst_29371;
var state_29403__$1 = (function (){var statearr_29415 = state_29403;
(statearr_29415[(11)] = inst_29381);

(statearr_29415[(12)] = inst_29383);

(statearr_29415[(7)] = inst_29364);

(statearr_29415[(8)] = inst_29363);

return statearr_29415;
})();
var statearr_29416_29442 = state_29403__$1;
(statearr_29416_29442[(2)] = null);

(statearr_29416_29442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29404 === (9))){
var inst_29363 = (state_29403[(8)]);
var inst_29379 = cljs.core.vec.call(null,inst_29363);
var state_29403__$1 = state_29403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29403__$1,(11),out,inst_29379);
} else {
if((state_val_29404 === (5))){
var inst_29371 = (state_29403[(10)]);
var inst_29367 = (state_29403[(9)]);
var inst_29364 = (state_29403[(7)]);
var inst_29371__$1 = f.call(null,inst_29367);
var inst_29372 = cljs.core._EQ_.call(null,inst_29371__$1,inst_29364);
var inst_29373 = cljs.core.keyword_identical_QMARK_.call(null,inst_29364,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29374 = (inst_29372) || (inst_29373);
var state_29403__$1 = (function (){var statearr_29417 = state_29403;
(statearr_29417[(10)] = inst_29371__$1);

return statearr_29417;
})();
if(cljs.core.truth_(inst_29374)){
var statearr_29418_29443 = state_29403__$1;
(statearr_29418_29443[(1)] = (8));

} else {
var statearr_29419_29444 = state_29403__$1;
(statearr_29419_29444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29404 === (14))){
var inst_29396 = (state_29403[(2)]);
var inst_29397 = cljs.core.async.close_BANG_.call(null,out);
var state_29403__$1 = (function (){var statearr_29421 = state_29403;
(statearr_29421[(13)] = inst_29396);

return statearr_29421;
})();
var statearr_29422_29445 = state_29403__$1;
(statearr_29422_29445[(2)] = inst_29397);

(statearr_29422_29445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29404 === (10))){
var inst_29386 = (state_29403[(2)]);
var state_29403__$1 = state_29403;
var statearr_29423_29446 = state_29403__$1;
(statearr_29423_29446[(2)] = inst_29386);

(statearr_29423_29446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29404 === (8))){
var inst_29371 = (state_29403[(10)]);
var inst_29367 = (state_29403[(9)]);
var inst_29363 = (state_29403[(8)]);
var inst_29376 = inst_29363.push(inst_29367);
var tmp29420 = inst_29363;
var inst_29363__$1 = tmp29420;
var inst_29364 = inst_29371;
var state_29403__$1 = (function (){var statearr_29424 = state_29403;
(statearr_29424[(7)] = inst_29364);

(statearr_29424[(8)] = inst_29363__$1);

(statearr_29424[(14)] = inst_29376);

return statearr_29424;
})();
var statearr_29425_29447 = state_29403__$1;
(statearr_29425_29447[(2)] = null);

(statearr_29425_29447[(1)] = (2));


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
}
}
}
}
}
});})(c__13512__auto___29433,out))
;
return ((function (switch__13456__auto__,c__13512__auto___29433,out){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_29429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29429[(0)] = state_machine__13457__auto__);

(statearr_29429[(1)] = (1));

return statearr_29429;
});
var state_machine__13457__auto____1 = (function (state_29403){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_29403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e29430){if((e29430 instanceof Object)){
var ex__13460__auto__ = e29430;
var statearr_29431_29448 = state_29403;
(statearr_29431_29448[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29449 = state_29403;
state_29403 = G__29449;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_29403){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_29403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto___29433,out))
})();
var state__13514__auto__ = (function (){var statearr_29432 = f__13513__auto__.call(null);
(statearr_29432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto___29433);

return statearr_29432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto___29433,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map