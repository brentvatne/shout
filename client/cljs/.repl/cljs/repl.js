// Compiled by ClojureScript 0.0-2725 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7835_7839 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7836_7840 = null;
var count__7837_7841 = (0);
var i__7838_7842 = (0);
while(true){
if((i__7838_7842 < count__7837_7841)){
var f_7843 = cljs.core._nth.call(null,chunk__7836_7840,i__7838_7842);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_7843);

var G__7844 = seq__7835_7839;
var G__7845 = chunk__7836_7840;
var G__7846 = count__7837_7841;
var G__7847 = (i__7838_7842 + (1));
seq__7835_7839 = G__7844;
chunk__7836_7840 = G__7845;
count__7837_7841 = G__7846;
i__7838_7842 = G__7847;
continue;
} else {
var temp__4126__auto___7848 = cljs.core.seq.call(null,seq__7835_7839);
if(temp__4126__auto___7848){
var seq__7835_7849__$1 = temp__4126__auto___7848;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7835_7849__$1)){
var c__4595__auto___7850 = cljs.core.chunk_first.call(null,seq__7835_7849__$1);
var G__7851 = cljs.core.chunk_rest.call(null,seq__7835_7849__$1);
var G__7852 = c__4595__auto___7850;
var G__7853 = cljs.core.count.call(null,c__4595__auto___7850);
var G__7854 = (0);
seq__7835_7839 = G__7851;
chunk__7836_7840 = G__7852;
count__7837_7841 = G__7853;
i__7838_7842 = G__7854;
continue;
} else {
var f_7855 = cljs.core.first.call(null,seq__7835_7849__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_7855);

var G__7856 = cljs.core.next.call(null,seq__7835_7849__$1);
var G__7857 = null;
var G__7858 = (0);
var G__7859 = (0);
seq__7835_7839 = G__7856;
chunk__7836_7840 = G__7857;
count__7837_7841 = G__7858;
i__7838_7842 = G__7859;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});
