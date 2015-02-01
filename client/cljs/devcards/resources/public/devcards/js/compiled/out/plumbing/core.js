// Compiled by ClojureScript 0.0-2725 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__18969__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__18969 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
var G__18970__i = 0, G__18970__a = new Array(arguments.length -  5);
while (G__18970__i < G__18970__a.length) {G__18970__a[G__18970__i] = arguments[G__18970__i + 5]; ++G__18970__i;}
  xs = new cljs.core.IndexedSeq(G__18970__a,0);
} 
return G__18969__delegate.call(this,m,k,f,x1,x2,xs);};
G__18969.cljs$lang$maxFixedArity = 5;
G__18969.cljs$lang$applyTo = (function (arglist__18971){
var m = cljs.core.first(arglist__18971);
arglist__18971 = cljs.core.next(arglist__18971);
var k = cljs.core.first(arglist__18971);
arglist__18971 = cljs.core.next(arglist__18971);
var f = cljs.core.first(arglist__18971);
arglist__18971 = cljs.core.next(arglist__18971);
var x1 = cljs.core.first(arglist__18971);
arglist__18971 = cljs.core.next(arglist__18971);
var x2 = cljs.core.first(arglist__18971);
var xs = cljs.core.rest(arglist__18971);
return G__18969__delegate(m,k,f,x1,x2,xs);
});
G__18969.cljs$core$IFn$_invoke$arity$variadic = G__18969__delegate;
return G__18969;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
var G__18972 = null;
if (arguments.length > 5) {
var G__18973__i = 0, G__18973__a = new Array(arguments.length -  5);
while (G__18973__i < G__18973__a.length) {G__18973__a[G__18973__i] = arguments[G__18973__i + 5]; ++G__18973__i;}
G__18972 = new cljs.core.IndexedSeq(G__18973__a,0);
}
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, G__18972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__10489__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__18982_18988 = cljs.core.seq.call(null,m);
var chunk__18983_18989 = null;
var count__18984_18990 = (0);
var i__18985_18991 = (0);
while(true){
if((i__18985_18991 < count__18984_18990)){
var vec__18986_18992 = cljs.core._nth.call(null,chunk__18983_18989,i__18985_18991);
var k_18993 = cljs.core.nth.call(null,vec__18986_18992,(0),null);
var v_18994 = cljs.core.nth.call(null,vec__18986_18992,(1),null);
var m18981_18995 = cljs.core.deref.call(null,m_atom__10489__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10489__auto__,cljs.core.assoc_BANG_.call(null,m18981_18995,k_18993,f.call(null,v_18994)));

var G__18996 = seq__18982_18988;
var G__18997 = chunk__18983_18989;
var G__18998 = count__18984_18990;
var G__18999 = (i__18985_18991 + (1));
seq__18982_18988 = G__18996;
chunk__18983_18989 = G__18997;
count__18984_18990 = G__18998;
i__18985_18991 = G__18999;
continue;
} else {
var temp__4126__auto___19000 = cljs.core.seq.call(null,seq__18982_18988);
if(temp__4126__auto___19000){
var seq__18982_19001__$1 = temp__4126__auto___19000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18982_19001__$1)){
var c__4542__auto___19002 = cljs.core.chunk_first.call(null,seq__18982_19001__$1);
var G__19003 = cljs.core.chunk_rest.call(null,seq__18982_19001__$1);
var G__19004 = c__4542__auto___19002;
var G__19005 = cljs.core.count.call(null,c__4542__auto___19002);
var G__19006 = (0);
seq__18982_18988 = G__19003;
chunk__18983_18989 = G__19004;
count__18984_18990 = G__19005;
i__18985_18991 = G__19006;
continue;
} else {
var vec__18987_19007 = cljs.core.first.call(null,seq__18982_19001__$1);
var k_19008 = cljs.core.nth.call(null,vec__18987_19007,(0),null);
var v_19009 = cljs.core.nth.call(null,vec__18987_19007,(1),null);
var m18981_19010 = cljs.core.deref.call(null,m_atom__10489__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10489__auto__,cljs.core.assoc_BANG_.call(null,m18981_19010,k_19008,f.call(null,v_19009)));

var G__19011 = cljs.core.next.call(null,seq__18982_19001__$1);
var G__19012 = null;
var G__19013 = (0);
var G__19014 = (0);
seq__18982_18988 = G__19011;
chunk__18983_18989 = G__19012;
count__18984_18990 = G__19013;
i__18985_18991 = G__19014;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__10489__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__10489__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__19023_19029 = cljs.core.seq.call(null,m);
var chunk__19024_19030 = null;
var count__19025_19031 = (0);
var i__19026_19032 = (0);
while(true){
if((i__19026_19032 < count__19025_19031)){
var vec__19027_19033 = cljs.core._nth.call(null,chunk__19024_19030,i__19026_19032);
var k_19034 = cljs.core.nth.call(null,vec__19027_19033,(0),null);
var v_19035 = cljs.core.nth.call(null,vec__19027_19033,(1),null);
var m19022_19036 = cljs.core.deref.call(null,m_atom__10489__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10489__auto__,cljs.core.assoc_BANG_.call(null,m19022_19036,f.call(null,k_19034),v_19035));

var G__19037 = seq__19023_19029;
var G__19038 = chunk__19024_19030;
var G__19039 = count__19025_19031;
var G__19040 = (i__19026_19032 + (1));
seq__19023_19029 = G__19037;
chunk__19024_19030 = G__19038;
count__19025_19031 = G__19039;
i__19026_19032 = G__19040;
continue;
} else {
var temp__4126__auto___19041 = cljs.core.seq.call(null,seq__19023_19029);
if(temp__4126__auto___19041){
var seq__19023_19042__$1 = temp__4126__auto___19041;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19023_19042__$1)){
var c__4542__auto___19043 = cljs.core.chunk_first.call(null,seq__19023_19042__$1);
var G__19044 = cljs.core.chunk_rest.call(null,seq__19023_19042__$1);
var G__19045 = c__4542__auto___19043;
var G__19046 = cljs.core.count.call(null,c__4542__auto___19043);
var G__19047 = (0);
seq__19023_19029 = G__19044;
chunk__19024_19030 = G__19045;
count__19025_19031 = G__19046;
i__19026_19032 = G__19047;
continue;
} else {
var vec__19028_19048 = cljs.core.first.call(null,seq__19023_19042__$1);
var k_19049 = cljs.core.nth.call(null,vec__19028_19048,(0),null);
var v_19050 = cljs.core.nth.call(null,vec__19028_19048,(1),null);
var m19022_19051 = cljs.core.deref.call(null,m_atom__10489__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10489__auto__,cljs.core.assoc_BANG_.call(null,m19022_19051,f.call(null,k_19049),v_19050));

var G__19052 = cljs.core.next.call(null,seq__19023_19042__$1);
var G__19053 = null;
var G__19054 = (0);
var G__19055 = (0);
seq__19023_19029 = G__19052;
chunk__19024_19030 = G__19053;
count__19025_19031 = G__19054;
i__19026_19032 = G__19055;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__10489__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__10489__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__19062_19066 = cljs.core.seq.call(null,ks);
var chunk__19063_19067 = null;
var count__19064_19068 = (0);
var i__19065_19069 = (0);
while(true){
if((i__19065_19069 < count__19064_19068)){
var k_19070 = cljs.core._nth.call(null,chunk__19063_19067,i__19065_19069);
var m19061_19071 = cljs.core.deref.call(null,m_atom__10489__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10489__auto__,cljs.core.assoc_BANG_.call(null,m19061_19071,k_19070,f.call(null,k_19070)));

var G__19072 = seq__19062_19066;
var G__19073 = chunk__19063_19067;
var G__19074 = count__19064_19068;
var G__19075 = (i__19065_19069 + (1));
seq__19062_19066 = G__19072;
chunk__19063_19067 = G__19073;
count__19064_19068 = G__19074;
i__19065_19069 = G__19075;
continue;
} else {
var temp__4126__auto___19076 = cljs.core.seq.call(null,seq__19062_19066);
if(temp__4126__auto___19076){
var seq__19062_19077__$1 = temp__4126__auto___19076;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19062_19077__$1)){
var c__4542__auto___19078 = cljs.core.chunk_first.call(null,seq__19062_19077__$1);
var G__19079 = cljs.core.chunk_rest.call(null,seq__19062_19077__$1);
var G__19080 = c__4542__auto___19078;
var G__19081 = cljs.core.count.call(null,c__4542__auto___19078);
var G__19082 = (0);
seq__19062_19066 = G__19079;
chunk__19063_19067 = G__19080;
count__19064_19068 = G__19081;
i__19065_19069 = G__19082;
continue;
} else {
var k_19083 = cljs.core.first.call(null,seq__19062_19077__$1);
var m19061_19084 = cljs.core.deref.call(null,m_atom__10489__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10489__auto__,cljs.core.assoc_BANG_.call(null,m19061_19084,k_19083,f.call(null,k_19083)));

var G__19085 = cljs.core.next.call(null,seq__19062_19077__$1);
var G__19086 = null;
var G__19087 = (0);
var G__19088 = (0);
seq__19062_19066 = G__19085;
chunk__19063_19067 = G__19086;
count__19064_19068 = G__19087;
i__19065_19069 = G__19088;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__10489__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__10489__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__19095_19099 = cljs.core.seq.call(null,vs);
var chunk__19096_19100 = null;
var count__19097_19101 = (0);
var i__19098_19102 = (0);
while(true){
if((i__19098_19102 < count__19097_19101)){
var v_19103 = cljs.core._nth.call(null,chunk__19096_19100,i__19098_19102);
var m19094_19104 = cljs.core.deref.call(null,m_atom__10489__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10489__auto__,cljs.core.assoc_BANG_.call(null,m19094_19104,f.call(null,v_19103),v_19103));

var G__19105 = seq__19095_19099;
var G__19106 = chunk__19096_19100;
var G__19107 = count__19097_19101;
var G__19108 = (i__19098_19102 + (1));
seq__19095_19099 = G__19105;
chunk__19096_19100 = G__19106;
count__19097_19101 = G__19107;
i__19098_19102 = G__19108;
continue;
} else {
var temp__4126__auto___19109 = cljs.core.seq.call(null,seq__19095_19099);
if(temp__4126__auto___19109){
var seq__19095_19110__$1 = temp__4126__auto___19109;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19095_19110__$1)){
var c__4542__auto___19111 = cljs.core.chunk_first.call(null,seq__19095_19110__$1);
var G__19112 = cljs.core.chunk_rest.call(null,seq__19095_19110__$1);
var G__19113 = c__4542__auto___19111;
var G__19114 = cljs.core.count.call(null,c__4542__auto___19111);
var G__19115 = (0);
seq__19095_19099 = G__19112;
chunk__19096_19100 = G__19113;
count__19097_19101 = G__19114;
i__19098_19102 = G__19115;
continue;
} else {
var v_19116 = cljs.core.first.call(null,seq__19095_19110__$1);
var m19094_19117 = cljs.core.deref.call(null,m_atom__10489__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10489__auto__,cljs.core.assoc_BANG_.call(null,m19094_19117,f.call(null,v_19116),v_19116));

var G__19118 = cljs.core.next.call(null,seq__19095_19110__$1);
var G__19119 = null;
var G__19120 = (0);
var G__19121 = (0);
seq__19095_19099 = G__19118;
chunk__19096_19100 = G__19119;
count__19097_19101 = G__19120;
i__19098_19102 = G__19121;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__10489__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__19122){
var vec__19124 = p__19122;
var k = cljs.core.nth.call(null,vec__19124,(0),null);
var ks = cljs.core.nthnext.call(null,vec__19124,(1));
if(cljs.core.truth_(m)){
var temp__4124__auto__ = (function (){var and__3743__auto__ = ks;
if(and__3743__auto__){
return dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__3743__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var res = temp__4124__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__10489__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__19133_19139 = cljs.core.seq.call(null,x);
var chunk__19134_19140 = null;
var count__19135_19141 = (0);
var i__19136_19142 = (0);
while(true){
if((i__19136_19142 < count__19135_19141)){
var vec__19137_19143 = cljs.core._nth.call(null,chunk__19134_19140,i__19136_19142);
var k_19144 = cljs.core.nth.call(null,vec__19137_19143,(0),null);
var v_19145 = cljs.core.nth.call(null,vec__19137_19143,(1),null);
var m19132_19146 = cljs.core.deref.call(null,m_atom__10489__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10489__auto__,cljs.core.assoc_BANG_.call(null,m19132_19146,((typeof k_19144 === 'string')?cljs.core.keyword.call(null,k_19144):k_19144),keywordize_map.call(null,v_19145)));

var G__19147 = seq__19133_19139;
var G__19148 = chunk__19134_19140;
var G__19149 = count__19135_19141;
var G__19150 = (i__19136_19142 + (1));
seq__19133_19139 = G__19147;
chunk__19134_19140 = G__19148;
count__19135_19141 = G__19149;
i__19136_19142 = G__19150;
continue;
} else {
var temp__4126__auto___19151 = cljs.core.seq.call(null,seq__19133_19139);
if(temp__4126__auto___19151){
var seq__19133_19152__$1 = temp__4126__auto___19151;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19133_19152__$1)){
var c__4542__auto___19153 = cljs.core.chunk_first.call(null,seq__19133_19152__$1);
var G__19154 = cljs.core.chunk_rest.call(null,seq__19133_19152__$1);
var G__19155 = c__4542__auto___19153;
var G__19156 = cljs.core.count.call(null,c__4542__auto___19153);
var G__19157 = (0);
seq__19133_19139 = G__19154;
chunk__19134_19140 = G__19155;
count__19135_19141 = G__19156;
i__19136_19142 = G__19157;
continue;
} else {
var vec__19138_19158 = cljs.core.first.call(null,seq__19133_19152__$1);
var k_19159 = cljs.core.nth.call(null,vec__19138_19158,(0),null);
var v_19160 = cljs.core.nth.call(null,vec__19138_19158,(1),null);
var m19132_19161 = cljs.core.deref.call(null,m_atom__10489__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10489__auto__,cljs.core.assoc_BANG_.call(null,m19132_19161,((typeof k_19159 === 'string')?cljs.core.keyword.call(null,k_19159):k_19159),keywordize_map.call(null,v_19160)));

var G__19162 = cljs.core.next.call(null,seq__19133_19152__$1);
var G__19163 = null;
var G__19164 = (0);
var G__19165 = (0);
seq__19133_19139 = G__19162;
chunk__19134_19140 = G__19163;
count__19135_19141 = G__19164;
i__19136_19142 = G__19165;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__10489__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,keywordize_map,x);
} else {
return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){
var temp__4124__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4124__auto__)){
var pair__10558__auto__ = temp__4124__auto__;
return cljs.core.val.call(null,pair__10558__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__19166 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__19167 = cljs.core.next.call(null,ks);
m = G__19166;
ks = G__19167;
continue;
} else {
return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__3755__auto__ = m;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4511__auto__ = (function iter__19176(s__19177){
return (new cljs.core.LazySeq(null,(function (){
var s__19177__$1 = s__19177;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19177__$1);
if(temp__4126__auto__){
var s__19177__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19177__$2)){
var c__4509__auto__ = cljs.core.chunk_first.call(null,s__19177__$2);
var size__4510__auto__ = cljs.core.count.call(null,c__4509__auto__);
var b__19179 = cljs.core.chunk_buffer.call(null,size__4510__auto__);
if((function (){var i__19178 = (0);
while(true){
if((i__19178 < size__4510__auto__)){
var vec__19182 = cljs.core._nth.call(null,c__4509__auto__,i__19178);
var k = cljs.core.nth.call(null,vec__19182,(0),null);
var v = cljs.core.nth.call(null,vec__19182,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__19179,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__19184 = (i__19178 + (1));
i__19178 = G__19184;
continue;
} else {
var G__19185 = (i__19178 + (1));
i__19178 = G__19185;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19179),iter__19176.call(null,cljs.core.chunk_rest.call(null,s__19177__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19179),null);
}
} else {
var vec__19183 = cljs.core.first.call(null,s__19177__$2);
var k = cljs.core.nth.call(null,vec__19183,(0),null);
var v = cljs.core.nth.call(null,vec__19183,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__19176.call(null,cljs.core.rest.call(null,s__19177__$2)));
} else {
var G__19186 = cljs.core.rest.call(null,s__19177__$2);
s__19177__$1 = G__19186;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4511__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__19187__i = 0, G__19187__a = new Array(arguments.length -  1);
while (G__19187__i < G__19187__a.length) {G__19187__a[G__19187__i] = arguments[G__19187__i + 1]; ++G__19187__i;}
  kvs = new cljs.core.IndexedSeq(G__19187__a,0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__19188){
var m = cljs.core.first(arglist__19188);
var kvs = cljs.core.rest(arglist__19188);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;
if (arguments.length > 3) {
var G__19189__i = 0, G__19189__a = new Array(arguments.length -  3);
while (G__19189__i < G__19189__a.length) {G__19189__a[G__19189__i] = arguments[G__19189__i + 3]; ++G__19189__i;}
  args = new cljs.core.IndexedSeq(G__19189__a,0);
} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__19190){
var m = cljs.core.first(arglist__19190);
arglist__19190 = cljs.core.next(arglist__19190);
var key_seq = cljs.core.first(arglist__19190);
arglist__19190 = cljs.core.next(arglist__19190);
var f = cljs.core.first(arglist__19190);
var args = cljs.core.rest(arglist__19190);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.next.call(null,s);
if(temp__4126__auto__){
var n = temp__4126__auto__;
return aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){
var temp__4126__auto__ = cljs.core.seq.call(null,xs);
if(temp__4126__auto__){
var xs__$1 = temp__4126__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__4511__auto__ = ((function (s){
return (function iter__19195(s__19196){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__19196__$1 = s__19196;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19196__$1);
if(temp__4126__auto__){
var s__19196__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19196__$2)){
var c__4509__auto__ = cljs.core.chunk_first.call(null,s__19196__$2);
var size__4510__auto__ = cljs.core.count.call(null,c__4509__auto__);
var b__19198 = cljs.core.chunk_buffer.call(null,size__4510__auto__);
if((function (){var i__19197 = (0);
while(true){
if((i__19197 < size__4510__auto__)){
var x = cljs.core._nth.call(null,c__4509__auto__,i__19197);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__19198,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__19199 = (i__19197 + (1));
i__19197 = G__19199;
continue;
} else {
var G__19200 = (i__19197 + (1));
i__19197 = G__19200;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19198),iter__19195.call(null,cljs.core.chunk_rest.call(null,s__19196__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19198),null);
}
} else {
var x = cljs.core.first.call(null,s__19196__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,iter__19195.call(null,cljs.core.rest.call(null,s__19196__$2)));
} else {
var G__19201 = cljs.core.rest.call(null,s__19196__$2);
s__19196__$1 = G__19201;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__4511__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;
if (arguments.length > 0) {
var G__19202__i = 0, G__19202__a = new Array(arguments.length -  0);
while (G__19202__i < G__19202__a.length) {G__19202__a[G__19202__i] = arguments[G__19202__i + 0]; ++G__19202__i;}
  colls = new cljs.core.IndexedSeq(G__19202__a,0);
} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__19203){
var colls = cljs.core.seq(arglist__19203);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});
var conj_when__3 = (function() { 
var G__19204__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__19205 = conj_when.call(null,coll,x);
var G__19206 = cljs.core.first.call(null,xs);
var G__19207 = cljs.core.next.call(null,xs);
coll = G__19205;
x = G__19206;
xs = G__19207;
continue;
} else {
return conj_when.call(null,coll,x);
}
break;
}
};
var G__19204 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
var G__19208__i = 0, G__19208__a = new Array(arguments.length -  2);
while (G__19208__i < G__19208__a.length) {G__19208__a[G__19208__i] = arguments[G__19208__i + 2]; ++G__19208__i;}
  xs = new cljs.core.IndexedSeq(G__19208__a,0);
} 
return G__19204__delegate.call(this,coll,x,xs);};
G__19204.cljs$lang$maxFixedArity = 2;
G__19204.cljs$lang$applyTo = (function (arglist__19209){
var coll = cljs.core.first(arglist__19209);
arglist__19209 = cljs.core.next(arglist__19209);
var x = cljs.core.first(arglist__19209);
var xs = cljs.core.rest(arglist__19209);
return G__19204__delegate(coll,x,xs);
});
G__19204.cljs$core$IFn$_invoke$arity$variadic = G__19204__delegate;
return G__19204;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
var G__19210 = null;
if (arguments.length > 2) {
var G__19211__i = 0, G__19211__a = new Array(arguments.length -  2);
while (G__19211__i < G__19211__a.length) {G__19211__a[G__19211__i] = arguments[G__19211__i + 2]; ++G__19211__i;}
G__19210 = new cljs.core.IndexedSeq(G__19211__a,0);
}
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, G__19210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__19213__delegate = function (a,f,args){
return swap_pair_BANG_.call(null,a,(function (p1__19212_SHARP_){
return cljs.core.apply.call(null,f,p1__19212_SHARP_,args);
}));
};
var G__19213 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__19214__i = 0, G__19214__a = new Array(arguments.length -  2);
while (G__19214__i < G__19214__a.length) {G__19214__a[G__19214__i] = arguments[G__19214__i + 2]; ++G__19214__i;}
  args = new cljs.core.IndexedSeq(G__19214__a,0);
} 
return G__19213__delegate.call(this,a,f,args);};
G__19213.cljs$lang$maxFixedArity = 2;
G__19213.cljs$lang$applyTo = (function (arglist__19215){
var a = cljs.core.first(arglist__19215);
arglist__19215 = cljs.core.next(arglist__19215);
var f = cljs.core.first(arglist__19215);
var args = cljs.core.rest(arglist__19215);
return G__19213__delegate(a,f,args);
});
G__19213.cljs$core$IFn$_invoke$arity$variadic = G__19213__delegate;
return G__19213;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
var G__19216 = null;
if (arguments.length > 2) {
var G__19217__i = 0, G__19217__a = new Array(arguments.length -  2);
while (G__19217__i < G__19217__a.length) {G__19217__a[G__19217__i] = arguments[G__19217__i + 2]; ++G__19217__i;}
G__19216 = new cljs.core.IndexedSeq(G__19217__a,0);
}
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, G__19216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){
return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__19218__delegate = function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__19218 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
var G__19219__i = 0, G__19219__a = new Array(arguments.length -  2);
while (G__19219__i < G__19219__a.length) {G__19219__a[G__19219__i] = arguments[G__19219__i + 2]; ++G__19219__i;}
  args = new cljs.core.IndexedSeq(G__19219__a,0);
} 
return G__19218__delegate.call(this,f,arg,args);};
G__19218.cljs$lang$maxFixedArity = 2;
G__19218.cljs$lang$applyTo = (function (arglist__19220){
var f = cljs.core.first(arglist__19220);
arglist__19220 = cljs.core.next(arglist__19220);
var arg = cljs.core.first(arglist__19220);
var args = cljs.core.rest(arglist__19220);
return G__19218__delegate(f,arg,args);
});
G__19218.cljs$core$IFn$_invoke$arity$variadic = G__19218__delegate;
return G__19218;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
var G__19221 = null;
if (arguments.length > 2) {
var G__19222__i = 0, G__19222__a = new Array(arguments.length -  2);
while (G__19222__i < G__19222__a.length) {G__19222__a[G__19222__i] = arguments[G__19222__i + 2]; ++G__19222__i;}
G__19221 = new cljs.core.IndexedSeq(G__19222__a,0);
}
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, G__19221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

//# sourceMappingURL=core.js.map