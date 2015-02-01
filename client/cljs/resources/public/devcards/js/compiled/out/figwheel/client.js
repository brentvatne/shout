// Compiled by ClojureScript 0.0-2725 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__25971,args){
var map__25973 = p__25971;
var map__25973__$1 = ((cljs.core.seq_QMARK_.call(null,map__25973))?cljs.core.apply.call(null,cljs.core.hash_map,map__25973):map__25973);
var debug = cljs.core.get.call(null,map__25973__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
if(cljs.core.truth_(debug)){
return console.log(cljs.core.to_array.call(null,args));
} else {
return null;
}
};
var log = function (p__25971,var_args){
var args = null;
if (arguments.length > 1) {
var G__25974__i = 0, G__25974__a = new Array(arguments.length -  1);
while (G__25974__i < G__25974__a.length) {G__25974__a[G__25974__i] = arguments[G__25974__i + 1]; ++G__25974__i;}
  args = new cljs.core.IndexedSeq(G__25974__a,0);
} 
return log__delegate.call(this,p__25971,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__25975){
var p__25971 = cljs.core.first(arglist__25975);
var args = cljs.core.rest(arglist__25975);
return log__delegate(p__25971,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__25976){
var map__25978 = p__25976;
var map__25978__$1 = ((cljs.core.seq_QMARK_.call(null,map__25978))?cljs.core.apply.call(null,cljs.core.hash_map,map__25978):map__25978);
var websocket_url = cljs.core.get.call(null,map__25978__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){
return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__25979,callback){
var map__25981 = p__25979;
var map__25981__$1 = ((cljs.core.seq_QMARK_.call(null,map__25981))?cljs.core.apply.call(null,cljs.core.hash_map,map__25981):map__25981);
var msg = map__25981__$1;
var dependency_file = cljs.core.get.call(null,map__25981__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__25981__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__25981__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(cljs.core.truth_((function (){var or__3755__auto__ = dependency_file;
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return goog.isProvided_(namespace);
}
})())){
return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__25981,map__25981__$1,msg,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__25981,map__25981__$1,msg,dependency_file,namespace,request_url))
);
} else {
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){

return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__25982,p__25983){
var map__25986 = p__25982;
var map__25986__$1 = ((cljs.core.seq_QMARK_.call(null,map__25986))?cljs.core.apply.call(null,cljs.core.hash_map,map__25986):map__25986);
var opts = map__25986__$1;
var url_rewriter = cljs.core.get.call(null,map__25986__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__25987 = p__25983;
var map__25987__$1 = ((cljs.core.seq_QMARK_.call(null,map__25987))?cljs.core.apply.call(null,cljs.core.hash_map,map__25987):map__25987);
var d = map__25987__$1;
var file = cljs.core.get.call(null,map__25987__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__25988,p__25989){
var map__26031 = p__25988;
var map__26031__$1 = ((cljs.core.seq_QMARK_.call(null,map__26031))?cljs.core.apply.call(null,cljs.core.hash_map,map__26031):map__26031);
var opts = map__26031__$1;
var on_jsload = cljs.core.get.call(null,map__26031__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__26031__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__26032 = p__25989;
var map__26032__$1 = ((cljs.core.seq_QMARK_.call(null,map__26032))?cljs.core.apply.call(null,cljs.core.hash_map,map__26032):map__26032);
var files = cljs.core.get.call(null,map__26032__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__13512__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto__,map__26031,map__26031__$1,opts,on_jsload,before_jsload,map__26032,map__26032__$1,files){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto__,map__26031,map__26031__$1,opts,on_jsload,before_jsload,map__26032,map__26032__$1,files){
return (function (state_26055){
var state_val_26056 = (state_26055[(1)]);
if((state_val_26056 === (6))){
var inst_26037 = (state_26055[(7)]);
var inst_26046 = (state_26055[(2)]);
var inst_26047 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26048 = [inst_26037];
var inst_26049 = (new cljs.core.PersistentVector(null,1,(5),inst_26047,inst_26048,null));
var inst_26050 = cljs.core.apply.call(null,on_jsload,inst_26049);
var state_26055__$1 = (function (){var statearr_26057 = state_26055;
(statearr_26057[(8)] = inst_26046);

return statearr_26057;
})();
var statearr_26058_26072 = state_26055__$1;
(statearr_26058_26072[(2)] = inst_26050);

(statearr_26058_26072[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (5))){
var inst_26053 = (state_26055[(2)]);
var state_26055__$1 = state_26055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26055__$1,inst_26053);
} else {
if((state_val_26056 === (4))){
var state_26055__$1 = state_26055;
var statearr_26059_26073 = state_26055__$1;
(statearr_26059_26073[(2)] = null);

(statearr_26059_26073[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (3))){
var inst_26037 = (state_26055[(7)]);
var inst_26040 = console.debug("Figwheel: loaded these files");
var inst_26041 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26037);
var inst_26042 = cljs.core.prn_str.call(null,inst_26041);
var inst_26043 = console.log(inst_26042);
var inst_26044 = cljs.core.async.timeout.call(null,(10));
var state_26055__$1 = (function (){var statearr_26060 = state_26055;
(statearr_26060[(9)] = inst_26040);

(statearr_26060[(10)] = inst_26043);

return statearr_26060;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26055__$1,(6),inst_26044);
} else {
if((state_val_26056 === (2))){
var inst_26037 = (state_26055[(7)]);
var inst_26037__$1 = (state_26055[(2)]);
var inst_26038 = cljs.core.not_empty.call(null,inst_26037__$1);
var state_26055__$1 = (function (){var statearr_26061 = state_26055;
(statearr_26061[(7)] = inst_26037__$1);

return statearr_26061;
})();
if(cljs.core.truth_(inst_26038)){
var statearr_26062_26074 = state_26055__$1;
(statearr_26062_26074[(1)] = (3));

} else {
var statearr_26063_26075 = state_26055__$1;
(statearr_26063_26075[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26056 === (1))){
var inst_26033 = before_jsload.call(null,files);
var inst_26034 = figwheel.client.add_request_urls.call(null,opts,files);
var inst_26035 = figwheel.client.load_all_js_files.call(null,inst_26034);
var state_26055__$1 = (function (){var statearr_26064 = state_26055;
(statearr_26064[(11)] = inst_26033);

return statearr_26064;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26055__$1,(2),inst_26035);
} else {
return null;
}
}
}
}
}
}
});})(c__13512__auto__,map__26031,map__26031__$1,opts,on_jsload,before_jsload,map__26032,map__26032__$1,files))
;
return ((function (switch__13456__auto__,c__13512__auto__,map__26031,map__26031__$1,opts,on_jsload,before_jsload,map__26032,map__26032__$1,files){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_26068 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26068[(0)] = state_machine__13457__auto__);

(statearr_26068[(1)] = (1));

return statearr_26068;
});
var state_machine__13457__auto____1 = (function (state_26055){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_26055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e26069){if((e26069 instanceof Object)){
var ex__13460__auto__ = e26069;
var statearr_26070_26076 = state_26055;
(statearr_26070_26076[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26077 = state_26055;
state_26055 = G__26077;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_26055){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_26055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto__,map__26031,map__26031__$1,opts,on_jsload,before_jsload,map__26032,map__26032__$1,files))
})();
var state__13514__auto__ = (function (){var statearr_26071 = f__13513__auto__.call(null);
(statearr_26071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto__);

return statearr_26071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto__,map__26031,map__26031__$1,opts,on_jsload,before_jsload,map__26032,map__26032__$1,files))
);

return c__13512__auto__;
});
figwheel.client.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__26078,link_href){
var map__26080 = p__26078;
var map__26080__$1 = ((cljs.core.seq_QMARK_.call(null,map__26080))?cljs.core.apply.call(null,cljs.core.hash_map,map__26080):map__26080);
var request_url = cljs.core.get.call(null,map__26080__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__26080__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var trunc_href = figwheel.client.truncate_url.call(null,link_href);
return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){
return cljs.core.some.call(null,(function (l){
if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href)){
return l;
} else {
return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.add_cache_buster.call(null,url);

return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

var c__13512__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto__,parent){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto__,parent){
return (function (state_26101){
var state_val_26102 = (state_26101[(1)]);
if((state_val_26102 === (2))){
var inst_26098 = (state_26101[(2)]);
var inst_26099 = parent.removeChild(orig_link);
var state_26101__$1 = (function (){var statearr_26103 = state_26101;
(statearr_26103[(7)] = inst_26098);

return statearr_26103;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26101__$1,inst_26099);
} else {
if((state_val_26102 === (1))){
var inst_26096 = cljs.core.async.timeout.call(null,(200));
var state_26101__$1 = state_26101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26101__$1,(2),inst_26096);
} else {
return null;
}
}
});})(c__13512__auto__,parent))
;
return ((function (switch__13456__auto__,c__13512__auto__,parent){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_26107 = [null,null,null,null,null,null,null,null];
(statearr_26107[(0)] = state_machine__13457__auto__);

(statearr_26107[(1)] = (1));

return statearr_26107;
});
var state_machine__13457__auto____1 = (function (state_26101){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_26101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e26108){if((e26108 instanceof Object)){
var ex__13460__auto__ = e26108;
var statearr_26109_26111 = state_26101;
(statearr_26109_26111[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26112 = state_26101;
state_26101 = G__26112;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_26101){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_26101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto__,parent))
})();
var state__13514__auto__ = (function (){var statearr_26110 = f__13513__auto__.call(null);
(statearr_26110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto__);

return statearr_26110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto__,parent))
);

return c__13512__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__26113){
var map__26115 = p__26113;
var map__26115__$1 = ((cljs.core.seq_QMARK_.call(null,map__26115))?cljs.core.apply.call(null,cljs.core.hash_map,map__26115):map__26115);
var f_data = map__26115__$1;
var request_url = cljs.core.get.call(null,map__26115__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__26115__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else {
return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__26116,files_msg){
var map__26138 = p__26116;
var map__26138__$1 = ((cljs.core.seq_QMARK_.call(null,map__26138))?cljs.core.apply.call(null,cljs.core.hash_map,map__26138):map__26138);
var opts = map__26138__$1;
var on_cssload = cljs.core.get.call(null,map__26138__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__26139_26159 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26140_26160 = null;
var count__26141_26161 = (0);
var i__26142_26162 = (0);
while(true){
if((i__26142_26162 < count__26141_26161)){
var f_26163 = cljs.core._nth.call(null,chunk__26140_26160,i__26142_26162);
figwheel.client.reload_css_file.call(null,f_26163);

var G__26164 = seq__26139_26159;
var G__26165 = chunk__26140_26160;
var G__26166 = count__26141_26161;
var G__26167 = (i__26142_26162 + (1));
seq__26139_26159 = G__26164;
chunk__26140_26160 = G__26165;
count__26141_26161 = G__26166;
i__26142_26162 = G__26167;
continue;
} else {
var temp__4126__auto___26168 = cljs.core.seq.call(null,seq__26139_26159);
if(temp__4126__auto___26168){
var seq__26139_26169__$1 = temp__4126__auto___26168;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26139_26169__$1)){
var c__4542__auto___26170 = cljs.core.chunk_first.call(null,seq__26139_26169__$1);
var G__26171 = cljs.core.chunk_rest.call(null,seq__26139_26169__$1);
var G__26172 = c__4542__auto___26170;
var G__26173 = cljs.core.count.call(null,c__4542__auto___26170);
var G__26174 = (0);
seq__26139_26159 = G__26171;
chunk__26140_26160 = G__26172;
count__26141_26161 = G__26173;
i__26142_26162 = G__26174;
continue;
} else {
var f_26175 = cljs.core.first.call(null,seq__26139_26169__$1);
figwheel.client.reload_css_file.call(null,f_26175);

var G__26176 = cljs.core.next.call(null,seq__26139_26169__$1);
var G__26177 = null;
var G__26178 = (0);
var G__26179 = (0);
seq__26139_26159 = G__26176;
chunk__26140_26160 = G__26177;
count__26141_26161 = G__26178;
i__26142_26162 = G__26179;
continue;
}
} else {
}
}
break;
}

var c__13512__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13512__auto__,map__26138,map__26138__$1,opts,on_cssload){
return (function (){
var f__13513__auto__ = (function (){var switch__13456__auto__ = ((function (c__13512__auto__,map__26138,map__26138__$1,opts,on_cssload){
return (function (state_26149){
var state_val_26150 = (state_26149[(1)]);
if((state_val_26150 === (2))){
var inst_26145 = (state_26149[(2)]);
var inst_26146 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_26147 = on_cssload.call(null,inst_26146);
var state_26149__$1 = (function (){var statearr_26151 = state_26149;
(statearr_26151[(7)] = inst_26145);

return statearr_26151;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26149__$1,inst_26147);
} else {
if((state_val_26150 === (1))){
var inst_26143 = cljs.core.async.timeout.call(null,(100));
var state_26149__$1 = state_26149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26149__$1,(2),inst_26143);
} else {
return null;
}
}
});})(c__13512__auto__,map__26138,map__26138__$1,opts,on_cssload))
;
return ((function (switch__13456__auto__,c__13512__auto__,map__26138,map__26138__$1,opts,on_cssload){
return (function() {
var state_machine__13457__auto__ = null;
var state_machine__13457__auto____0 = (function (){
var statearr_26155 = [null,null,null,null,null,null,null,null];
(statearr_26155[(0)] = state_machine__13457__auto__);

(statearr_26155[(1)] = (1));

return statearr_26155;
});
var state_machine__13457__auto____1 = (function (state_26149){
while(true){
var ret_value__13458__auto__ = (function (){try{while(true){
var result__13459__auto__ = switch__13456__auto__.call(null,state_26149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13459__auto__;
}
break;
}
}catch (e26156){if((e26156 instanceof Object)){
var ex__13460__auto__ = e26156;
var statearr_26157_26180 = state_26149;
(statearr_26157_26180[(5)] = ex__13460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26181 = state_26149;
state_26149 = G__26181;
continue;
} else {
return ret_value__13458__auto__;
}
break;
}
});
state_machine__13457__auto__ = function(state_26149){
switch(arguments.length){
case 0:
return state_machine__13457__auto____0.call(this);
case 1:
return state_machine__13457__auto____1.call(this,state_26149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13457__auto____0;
state_machine__13457__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13457__auto____1;
return state_machine__13457__auto__;
})()
;})(switch__13456__auto__,c__13512__auto__,map__26138,map__26138__$1,opts,on_cssload))
})();
var state__13514__auto__ = (function (){var statearr_26158 = f__13513__auto__.call(null);
(statearr_26158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13512__auto__);

return statearr_26158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13514__auto__);
});})(c__13512__auto__,map__26138,map__26138__$1,opts,on_cssload))
);

return c__13512__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){
return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){
if(cljs.core.truth_(goog.inHtmlDocument_())){
goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));

return true;
} else {
return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__26182){
var map__26187 = p__26182;
var map__26187__$1 = ((cljs.core.seq_QMARK_.call(null,map__26187))?cljs.core.apply.call(null,cljs.core.hash_map,map__26187):map__26187);
var opts = map__26187__$1;
var on_compile_fail = cljs.core.get.call(null,map__26187__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var jsload_callback = cljs.core.get.call(null,map__26187__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
var websocket_url = cljs.core.get.call(null,map__26187__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
var retry_count = cljs.core.get.call(null,map__26187__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));
console.debug("Figwheel: trying to open cljs reload socket");

var socket = (new WebSocket(websocket_url));
socket.onmessage = ((function (socket,map__26187,map__26187__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){
var msg = cljs.reader.read_string.call(null,msg_str.data);
var pred__26188 = cljs.core._EQ_;
var expr__26189 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(pred__26188.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__26189))){
return figwheel.client.reload_js_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__26188.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__26189))){
return figwheel.client.reload_css_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__26188.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26189))){
return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else {
return null;
}
}
}
});})(socket,map__26187,map__26187__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onopen = ((function (socket,map__26187,map__26187__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.patch_goog_base.call(null);

return console.debug("Figwheel: socket connection established");
});})(socket,map__26187,map__26187__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onclose = ((function (socket,map__26187,map__26187__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");

if((retry_count > (0))){
return window.setTimeout(((function (socket,map__26187,map__26187__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){
return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__26187,map__26187__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else {
return null;
}
});})(socket,map__26187,map__26187__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

return socket.onerror = ((function (socket,map__26187,map__26187__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__26187,map__26187__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj26194 = {"detail":url};
return obj26194;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__26195){
var map__26197 = p__26195;
var map__26197__$1 = ((cljs.core.seq_QMARK_.call(null,map__26197))?cljs.core.apply.call(null,cljs.core.hash_map,map__26197):map__26197);
var class$ = cljs.core.get.call(null,map__26197__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__26197__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__26198){
var map__26204 = p__26198;
var map__26204__$1 = ((cljs.core.seq_QMARK_.call(null,map__26204))?cljs.core.apply.call(null,cljs.core.hash_map,map__26204):map__26204);
var ed = map__26204__$1;
var exception_data = cljs.core.get.call(null,map__26204__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__26204__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__26205_26209 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26206_26210 = null;
var count__26207_26211 = (0);
var i__26208_26212 = (0);
while(true){
if((i__26208_26212 < count__26207_26211)){
var msg_26213 = cljs.core._nth.call(null,chunk__26206_26210,i__26208_26212);
console.log(msg_26213);

var G__26214 = seq__26205_26209;
var G__26215 = chunk__26206_26210;
var G__26216 = count__26207_26211;
var G__26217 = (i__26208_26212 + (1));
seq__26205_26209 = G__26214;
chunk__26206_26210 = G__26215;
count__26207_26211 = G__26216;
i__26208_26212 = G__26217;
continue;
} else {
var temp__4126__auto___26218 = cljs.core.seq.call(null,seq__26205_26209);
if(temp__4126__auto___26218){
var seq__26205_26219__$1 = temp__4126__auto___26218;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26205_26219__$1)){
var c__4542__auto___26220 = cljs.core.chunk_first.call(null,seq__26205_26219__$1);
var G__26221 = cljs.core.chunk_rest.call(null,seq__26205_26219__$1);
var G__26222 = c__4542__auto___26220;
var G__26223 = cljs.core.count.call(null,c__4542__auto___26220);
var G__26224 = (0);
seq__26205_26209 = G__26221;
chunk__26206_26210 = G__26222;
count__26207_26211 = G__26223;
i__26208_26212 = G__26224;
continue;
} else {
var msg_26225 = cljs.core.first.call(null,seq__26205_26219__$1);
console.log(msg_26225);

var G__26226 = cljs.core.next.call(null,seq__26205_26219__$1);
var G__26227 = null;
var G__26228 = (0);
var G__26229 = (0);
seq__26205_26209 = G__26226;
chunk__26206_26210 = G__26227;
count__26207_26211 = G__26228;
i__26208_26212 = G__26229;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){
console.debug("Figwheel: loading files");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
console.debug("Figwheel: loaded CSS files");

console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){
if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton"))){
return null;
} else {
figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3755__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3755__auto__)){
return or__3755__auto__;
} else {
return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__26230){
var map__26232 = p__26230;
var map__26232__$1 = ((cljs.core.seq_QMARK_.call(null,map__26232))?cljs.core.apply.call(null,cljs.core.hash_map,map__26232):map__26232);
var opts = map__26232__$1;
return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__26230 = null;
if (arguments.length > 0) {
var G__26233__i = 0, G__26233__a = new Array(arguments.length -  0);
while (G__26233__i < G__26233__a.length) {G__26233__a[G__26233__i] = arguments[G__26233__i + 0]; ++G__26233__i;}
  p__26230 = new cljs.core.IndexedSeq(G__26233__a,0);
} 
return watch_and_reload__delegate.call(this,p__26230);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__26234){
var p__26230 = cljs.core.seq(arglist__26234);
return watch_and_reload__delegate(p__26230);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map