// Compiled by ClojureScript 1.7.122 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('sablono.core');
var last_id_6388 = cljs.core.volatile_BANG_.call(null,(0));
rum.core.next_id = ((function (last_id_6388){
return (function rum$core$next_id(){
return cljs.core._vreset_BANG_.call(null,last_id_6388,(cljs.core._deref.call(null,last_id_6388) + (1)));
});})(last_id_6388))
;
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.id = (function rum$core$id(comp){
return new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rum.core.state.call(null,comp)));
});
rum.core.collect = (function rum$core$collect(fn_key,classes){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,fn_key,classes));
});
rum.core.call_all = (function rum$core$call_all(var_args){
var args__6054__auto__ = [];
var len__6047__auto___6392 = arguments.length;
var i__6048__auto___6393 = (0);
while(true){
if((i__6048__auto___6393 < len__6047__auto___6392)){
args__6054__auto__.push((arguments[i__6048__auto___6393]));

var G__6394 = (i__6048__auto___6393 + (1));
i__6048__auto___6393 = G__6394;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((2) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((2)),(0))):null);
return rum.core.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6055__auto__);
});

rum.core.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.core.call_all.cljs$lang$maxFixedArity = (2);

rum.core.call_all.cljs$lang$applyTo = (function (seq6389){
var G__6390 = cljs.core.first.call(null,seq6389);
var seq6389__$1 = cljs.core.next.call(null,seq6389);
var G__6391 = cljs.core.first.call(null,seq6389__$1);
var seq6389__$2 = cljs.core.next.call(null,seq6389__$1);
return rum.core.call_all.cljs$core$IFn$_invoke$arity$variadic(G__6390,G__6391,seq6389__$2);
});
rum.core.build_class = (function rum$core$build_class(classes,display_name){
if(cljs.core.sequential_QMARK_.call(null,classes)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),new cljs.core.Symbol(null,"classes","classes",-616631259,null))))].join('')));
}

var init = rum.core.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),classes);
var will_mount = rum.core.collect.call(null,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),classes);
var did_mount = rum.core.collect.call(null,new cljs.core.Keyword(null,"did-mount","did-mount",918232960),classes);
var transfer_state = rum.core.collect.call(null,new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),classes);
var should_update = rum.core.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),classes);
var will_update = rum.core.collect.call(null,new cljs.core.Keyword(null,"will-update","will-update",328062998),classes);
var render = cljs.core.first.call(null,rum.core.collect.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),classes));
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render){
return (function (p1__6396_SHARP_,p2__6395_SHARP_){
return p2__6395_SHARP_.call(null,p1__6396_SHARP_);
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render))
,render,rum.core.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),classes));
var did_update = rum.core.collect.call(null,new cljs.core.Keyword(null,"did-update","did-update",-2143702256),classes);
var will_unmount = rum.core.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),classes);
var props__GT_state = ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount){
return (function (props){
return rum.core.call_all.call(null,(props[":rum/initial-state"]),init,props);
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount))
;
var child_context = rum.core.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),classes);
var class_properties = cljs.core.reduce.call(null,cljs.core.merge,rum.core.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),classes));
return React.createClass(cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.core.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.core.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var next_state = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$,new cljs.core.Keyword("rum","id","rum/id",-1388417078),new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(old_state)], null),props__GT_state.call(null,next_props));
var next_state__$1 = cljs.core.reduce.call(null,((function (old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__6398_SHARP_,p2__6397_SHARP_){
return p2__6397_SHARP_.call(null,old_state,p1__6398_SHARP_);
});})(old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,next_state,transfer_state);
return this$.setState({":rum/state": cljs.core.volatile_BANG_.call(null,next_state__$1)});
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__4989__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__6399_SHARP_){
return p1__6399_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,should_update);
if(cljs.core.truth_(or__4989__auto__)){
return or__4989__auto__;
} else {
return false;
}
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__6402 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__6402,(0),null);
var next_state = cljs.core.nth.call(null,vec__6402,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__6400_SHARP_){
return p1__6400_SHARP_.call(null,state);
});})(state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.core.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var props = this$.props;
var state = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$,new cljs.core.Keyword("rum","id","rum/id",-1388417078),rum.core.next_id.call(null)], null),props__GT_state.call(null,props));
return {":rum/state": cljs.core.volatile_BANG_.call(null,state)};
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.core.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.core.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
)]),class_properties)));
});
rum.core.schedule = (function (){var or__4989__auto__ = (function (){var and__4977__auto__ = typeof window !== 'undefined';
if(and__4977__auto__){
var or__4989__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__4989__auto__)){
return or__4989__auto__;
} else {
var or__4989__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__4989__auto____$1)){
return or__4989__auto____$1;
} else {
var or__4989__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__4989__auto____$2)){
return or__4989__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__4977__auto__;
}
})();
if(cljs.core.truth_(or__4989__auto__)){
return or__4989__auto__;
} else {
return ((function (or__4989__auto__){
return (function (p1__6403_SHARP_){
return setTimeout(p1__6403_SHARP_,(16));
});
;})(or__4989__auto__))
}
})();
rum.core.compare_by = (function rum$core$compare_by(keyfn){
return (function (x,y){
return cljs.core.compare.call(null,keyfn.call(null,x),keyfn.call(null,y));
});
});
rum.core.empty_queue = cljs.core.sorted_set_by.call(null,rum.core.compare_by.call(null,rum.core.id));
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

var seq__6410 = cljs.core.seq.call(null,queue);
var chunk__6412 = null;
var count__6413 = (0);
var i__6414 = (0);
while(true){
if((i__6414 < count__6413)){
var comp = cljs.core._nth.call(null,chunk__6412,i__6414);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__6416 = seq__6410;
var G__6417 = chunk__6412;
var G__6418 = count__6413;
var G__6419 = (i__6414 + (1));
seq__6410 = G__6416;
chunk__6412 = G__6417;
count__6413 = G__6418;
i__6414 = G__6419;
continue;
} else {
var G__6420 = seq__6410;
var G__6421 = chunk__6412;
var G__6422 = count__6413;
var G__6423 = (i__6414 + (1));
seq__6410 = G__6420;
chunk__6412 = G__6421;
count__6413 = G__6422;
i__6414 = G__6423;
continue;
}
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__6410);
if(temp__4423__auto__){
var seq__6410__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6410__$1)){
var c__5792__auto__ = cljs.core.chunk_first.call(null,seq__6410__$1);
var G__6424 = cljs.core.chunk_rest.call(null,seq__6410__$1);
var G__6425 = c__5792__auto__;
var G__6426 = cljs.core.count.call(null,c__5792__auto__);
var G__6427 = (0);
seq__6410 = G__6424;
chunk__6412 = G__6425;
count__6413 = G__6426;
i__6414 = G__6427;
continue;
} else {
var comp = cljs.core.first.call(null,seq__6410__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__6428 = cljs.core.next.call(null,seq__6410__$1);
var G__6429 = null;
var G__6430 = (0);
var G__6431 = (0);
seq__6410 = G__6428;
chunk__6412 = G__6429;
count__6413 = G__6430;
i__6414 = G__6431;
continue;
} else {
var G__6432 = cljs.core.next.call(null,seq__6410__$1);
var G__6433 = null;
var G__6434 = (0);
var G__6435 = (0);
seq__6410 = G__6432;
chunk__6412 = G__6433;
count__6413 = G__6434;
i__6414 = G__6435;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
rum.core.mount = (function rum$core$mount(component,node){
return React.render(component,node);
});
rum.core.render__GT_mixin = (function rum$core$render__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.render_state__GT_mixin = (function rum$core$render_state__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.render_comp__GT_mixin = (function rum$core$render_comp__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.args__GT_state = (function rum$core$args__GT_state(args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null);
});
rum.core.element = (function rum$core$element(var_args){
var args__6054__auto__ = [];
var len__6047__auto___6441 = arguments.length;
var i__6048__auto___6442 = (0);
while(true){
if((i__6048__auto___6442 < len__6047__auto___6441)){
args__6054__auto__.push((arguments[i__6048__auto___6442]));

var G__6443 = (i__6048__auto___6442 + (1));
i__6048__auto___6442 = G__6443;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((2) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((2)),(0))):null);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6055__auto__);
});

rum.core.element.cljs$core$IFn$_invoke$arity$variadic = (function (class$,state,p__6439){
var vec__6440 = p__6439;
var props = cljs.core.nth.call(null,vec__6440,(0),null);
var props__$1 = (function (){var or__4989__auto__ = props;
if(cljs.core.truth_(or__4989__auto__)){
return or__4989__auto__;
} else {
return {};
}
})();
(props__$1[":rum/initial-state"] = state);

return React.createElement(class$,props__$1);
});

rum.core.element.cljs$lang$maxFixedArity = (2);

rum.core.element.cljs$lang$applyTo = (function (seq6436){
var G__6437 = cljs.core.first.call(null,seq6436);
var seq6436__$1 = cljs.core.next.call(null,seq6436);
var G__6438 = cljs.core.first.call(null,seq6436__$1);
var seq6436__$2 = cljs.core.next.call(null,seq6436__$1);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(G__6437,G__6438,seq6436__$2);
});
rum.core.ctor__GT_class = (function rum$core$ctor__GT_class(ctor){
return new cljs.core.Keyword("rum","class","rum/class",-2030775258).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ctor));
});
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,{"key": key},null);
});
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,{"ref": ref},null);
});
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Adds an atom to component’s state that can be used as local state.
 * Atom is stored under key `:rum/local`.
 * Component will be automatically re-rendered if atom’s value changes
 */
rum.core.local = (function rum$core$local(var_args){
var args__6054__auto__ = [];
var len__6047__auto___6448 = arguments.length;
var i__6048__auto___6449 = (0);
while(true){
if((i__6048__auto___6449 < len__6047__auto___6448)){
args__6054__auto__.push((arguments[i__6048__auto___6449]));

var G__6450 = (i__6048__auto___6449 + (1));
i__6048__auto___6449 = G__6450;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((1) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((1)),(0))):null);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6055__auto__);
});

rum.core.local.cljs$core$IFn$_invoke$arity$variadic = (function (initial,p__6446){
var vec__6447 = p__6446;
var key = cljs.core.nth.call(null,vec__6447,(0),null);
var key__$1 = (function (){var or__4989__auto__ = key;
if(cljs.core.truth_(or__4989__auto__)){
return or__4989__auto__;
} else {
return new cljs.core.Keyword("rum","local","rum/local",-1497916586);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),((function (key__$1,vec__6447,key){
return (function (old,new$){
return cljs.core.assoc.call(null,new$,key__$1,old.call(null,key__$1));
});})(key__$1,vec__6447,key))
,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),((function (key__$1,vec__6447,key){
return (function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key__$1,((function (local_state,component,key__$1,vec__6447,key){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component,key__$1,vec__6447,key))
);

return cljs.core.assoc.call(null,state,key__$1,local_state);
});})(key__$1,vec__6447,key))
], null);
});

rum.core.local.cljs$lang$maxFixedArity = (1);

rum.core.local.cljs$lang$applyTo = (function (seq6444){
var G__6445 = cljs.core.first.call(null,seq6444);
var seq6444__$1 = cljs.core.next.call(null,seq6444);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic(G__6445,seq6444__$1);
});
rum.core._STAR_reactions_STAR_;
rum.core.reactive_key = (function rum$core$reactive_key(state){
return [cljs.core.str(":rum/reactive-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_6451 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__6452 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__6452,(0),null);
var next_state = cljs.core.nth.call(null,vec__6452,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = rum.core.reactive_key.call(null,state);
var seq__6453_6465 = cljs.core.seq.call(null,old_reactions);
var chunk__6454_6466 = null;
var count__6455_6467 = (0);
var i__6456_6468 = (0);
while(true){
if((i__6456_6468 < count__6455_6467)){
var ref_6469 = cljs.core._nth.call(null,chunk__6454_6466,i__6456_6468);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_6469)){
} else {
cljs.core.remove_watch.call(null,ref_6469,key);
}

var G__6470 = seq__6453_6465;
var G__6471 = chunk__6454_6466;
var G__6472 = count__6455_6467;
var G__6473 = (i__6456_6468 + (1));
seq__6453_6465 = G__6470;
chunk__6454_6466 = G__6471;
count__6455_6467 = G__6472;
i__6456_6468 = G__6473;
continue;
} else {
var temp__4423__auto___6474 = cljs.core.seq.call(null,seq__6453_6465);
if(temp__4423__auto___6474){
var seq__6453_6475__$1 = temp__4423__auto___6474;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6453_6475__$1)){
var c__5792__auto___6476 = cljs.core.chunk_first.call(null,seq__6453_6475__$1);
var G__6477 = cljs.core.chunk_rest.call(null,seq__6453_6475__$1);
var G__6478 = c__5792__auto___6476;
var G__6479 = cljs.core.count.call(null,c__5792__auto___6476);
var G__6480 = (0);
seq__6453_6465 = G__6477;
chunk__6454_6466 = G__6478;
count__6455_6467 = G__6479;
i__6456_6468 = G__6480;
continue;
} else {
var ref_6481 = cljs.core.first.call(null,seq__6453_6475__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_6481)){
} else {
cljs.core.remove_watch.call(null,ref_6481,key);
}

var G__6482 = cljs.core.next.call(null,seq__6453_6475__$1);
var G__6483 = null;
var G__6484 = (0);
var G__6485 = (0);
seq__6453_6465 = G__6482;
chunk__6454_6466 = G__6483;
count__6455_6467 = G__6484;
i__6456_6468 = G__6485;
continue;
}
} else {
}
}
break;
}

var seq__6457_6486 = cljs.core.seq.call(null,new_reactions);
var chunk__6458_6487 = null;
var count__6459_6488 = (0);
var i__6460_6489 = (0);
while(true){
if((i__6460_6489 < count__6459_6488)){
var ref_6490 = cljs.core._nth.call(null,chunk__6458_6487,i__6460_6489);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_6490)){
} else {
cljs.core.add_watch.call(null,ref_6490,key,((function (seq__6457_6486,chunk__6458_6487,count__6459_6488,i__6460_6489,ref_6490,comp,old_reactions,vec__6452,dom,next_state,new_reactions,key,_STAR_reactions_STAR_6451){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__6457_6486,chunk__6458_6487,count__6459_6488,i__6460_6489,ref_6490,comp,old_reactions,vec__6452,dom,next_state,new_reactions,key,_STAR_reactions_STAR_6451))
);
}

var G__6491 = seq__6457_6486;
var G__6492 = chunk__6458_6487;
var G__6493 = count__6459_6488;
var G__6494 = (i__6460_6489 + (1));
seq__6457_6486 = G__6491;
chunk__6458_6487 = G__6492;
count__6459_6488 = G__6493;
i__6460_6489 = G__6494;
continue;
} else {
var temp__4423__auto___6495 = cljs.core.seq.call(null,seq__6457_6486);
if(temp__4423__auto___6495){
var seq__6457_6496__$1 = temp__4423__auto___6495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6457_6496__$1)){
var c__5792__auto___6497 = cljs.core.chunk_first.call(null,seq__6457_6496__$1);
var G__6498 = cljs.core.chunk_rest.call(null,seq__6457_6496__$1);
var G__6499 = c__5792__auto___6497;
var G__6500 = cljs.core.count.call(null,c__5792__auto___6497);
var G__6501 = (0);
seq__6457_6486 = G__6498;
chunk__6458_6487 = G__6499;
count__6459_6488 = G__6500;
i__6460_6489 = G__6501;
continue;
} else {
var ref_6502 = cljs.core.first.call(null,seq__6457_6496__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_6502)){
} else {
cljs.core.add_watch.call(null,ref_6502,key,((function (seq__6457_6486,chunk__6458_6487,count__6459_6488,i__6460_6489,ref_6502,seq__6457_6496__$1,temp__4423__auto___6495,comp,old_reactions,vec__6452,dom,next_state,new_reactions,key,_STAR_reactions_STAR_6451){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__6457_6486,chunk__6458_6487,count__6459_6488,i__6460_6489,ref_6502,seq__6457_6496__$1,temp__4423__auto___6495,comp,old_reactions,vec__6452,dom,next_state,new_reactions,key,_STAR_reactions_STAR_6451))
);
}

var G__6503 = cljs.core.next.call(null,seq__6457_6496__$1);
var G__6504 = null;
var G__6505 = (0);
var G__6506 = (0);
seq__6457_6486 = G__6503;
chunk__6458_6487 = G__6504;
count__6459_6488 = G__6505;
i__6460_6489 = G__6506;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_6451;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_6507 = rum.core.reactive_key.call(null,state);
var seq__6461_6508 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(state));
var chunk__6462_6509 = null;
var count__6463_6510 = (0);
var i__6464_6511 = (0);
while(true){
if((i__6464_6511 < count__6463_6510)){
var ref_6512 = cljs.core._nth.call(null,chunk__6462_6509,i__6464_6511);
cljs.core.remove_watch.call(null,ref_6512,key_6507);

var G__6513 = seq__6461_6508;
var G__6514 = chunk__6462_6509;
var G__6515 = count__6463_6510;
var G__6516 = (i__6464_6511 + (1));
seq__6461_6508 = G__6513;
chunk__6462_6509 = G__6514;
count__6463_6510 = G__6515;
i__6464_6511 = G__6516;
continue;
} else {
var temp__4423__auto___6517 = cljs.core.seq.call(null,seq__6461_6508);
if(temp__4423__auto___6517){
var seq__6461_6518__$1 = temp__4423__auto___6517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6461_6518__$1)){
var c__5792__auto___6519 = cljs.core.chunk_first.call(null,seq__6461_6518__$1);
var G__6520 = cljs.core.chunk_rest.call(null,seq__6461_6518__$1);
var G__6521 = c__5792__auto___6519;
var G__6522 = cljs.core.count.call(null,c__5792__auto___6519);
var G__6523 = (0);
seq__6461_6508 = G__6520;
chunk__6462_6509 = G__6521;
count__6463_6510 = G__6522;
i__6464_6511 = G__6523;
continue;
} else {
var ref_6524 = cljs.core.first.call(null,seq__6461_6518__$1);
cljs.core.remove_watch.call(null,ref_6524,key_6507);

var G__6525 = cljs.core.next.call(null,seq__6461_6518__$1);
var G__6526 = null;
var G__6527 = (0);
var G__6528 = (0);
seq__6461_6508 = G__6525;
chunk__6462_6509 = G__6526;
count__6463_6510 = G__6527;
i__6464_6511 = G__6528;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630));
})], null);
rum.core.react = (function rum$core$react(ref){
cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});

/**
* @constructor
 * @implements {rum.core.Object}
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
rum.core.LensCursor = (function (parent,getter,setter){
this.parent = parent;
this.getter = getter;
this.setter = setter;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
})
rum.core.LensCursor.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

rum.core.LensCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (this$__$1 === other);
});

rum.core.LensCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.getter.call(null,cljs.core._deref.call(null,self__.parent));
});

rum.core.LensCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch.call(null,self__.parent,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),this$__$1),((function (this$__$1){
return (function (_,___$1,oldp,newp){
var old = self__.getter.call(null,oldp);
var new$ = self__.getter.call(null,newp);
if(cljs.core.not_EQ_.call(null,old,new$)){
return f.call(null,key,this$__$1,old,new$);
} else {
return null;
}
});})(this$__$1))
);

return this$__$1;
});

rum.core.LensCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
cljs.core.remove_watch.call(null,self__.parent,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),this$__$1));

return this$__$1;
});

rum.core.LensCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

rum.core.LensCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new_value){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.parent,self__.setter,new_value);

return new_value;
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1)));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a,b));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,cljs.core._deref.call(null,this$__$1),a,b,xs));
});

rum.core.LensCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,"#<Cursor: ");

cljs.core.pr_writer.call(null,cljs.core._deref.call(null,this$__$1),writer,opts);

return cljs.core._write.call(null,writer,">");
});

rum.core.LensCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"setter","setter",-706080843,null)], null);
});

rum.core.LensCursor.cljs$lang$type = true;

rum.core.LensCursor.cljs$lang$ctorStr = "rum.core/LensCursor";

rum.core.LensCursor.cljs$lang$ctorPrWriter = (function (this__5587__auto__,writer__5588__auto__,opt__5589__auto__){
return cljs.core._write.call(null,writer__5588__auto__,"rum.core/LensCursor");
});

rum.core.__GT_LensCursor = (function rum$core$__GT_LensCursor(parent,getter,setter){
return (new rum.core.LensCursor(parent,getter,setter));
});

rum.core.cursor = (function rum$core$cursor(ref,path){
var getter = (function (p1__6529_SHARP_){
return cljs.core.get_in.call(null,p1__6529_SHARP_,path);
});
var setter = ((function (getter){
return (function (p1__6530_SHARP_,p2__6531_SHARP_){
return cljs.core.assoc_in.call(null,p1__6530_SHARP_,path,p2__6531_SHARP_);
});})(getter))
;
if((ref instanceof rum.core.LensCursor)){
return (new rum.core.LensCursor(ref.parent,cljs.core.comp.call(null,getter,ref.getter),((function (getter,setter){
return (function (where,what){
var focus = ref.getter.call(null,where);
var focus__$1 = setter.call(null,focus,what);
var focus__$2 = ref.setter.call(null,where,focus__$1);
return focus__$2;
});})(getter,setter))
));
} else {
return (new rum.core.LensCursor(ref,getter,setter));
}
});
rum.core.deref_args = (function rum$core$deref_args(xs){
return cljs.core.mapv.call(null,(function (p1__6532_SHARP_){
if(((!((p1__6532_SHARP_ == null)))?((((p1__6532_SHARP_.cljs$lang$protocol_mask$partition0$ & (32768))) || (p1__6532_SHARP_.cljs$core$IDeref$))?true:(((!p1__6532_SHARP_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__6532_SHARP_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__6532_SHARP_))){
return cljs.core.deref.call(null,p1__6532_SHARP_);
} else {
return p1__6532_SHARP_;
}
}),xs);
});
rum.core.cursored = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old_state),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state)));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var vec__6535 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__6535,(0),null);
var next_state = cljs.core.nth.call(null,vec__6535,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)))], null);
});
})], null);
rum.core.cursored_key = (function rum$core$cursored_key(state){
return [cljs.core.str(":rum/cursored-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.cursored_watch = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var seq__6536_6552 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__6538_6553 = null;
var count__6539_6554 = (0);
var i__6540_6555 = (0);
while(true){
if((i__6540_6555 < count__6539_6554)){
var arg_6556 = cljs.core._nth.call(null,chunk__6538_6553,i__6540_6555);
if(((!((arg_6556 == null)))?((((arg_6556.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_6556.cljs$core$IWatchable$))?true:(((!arg_6556.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_6556):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_6556))){
cljs.core.add_watch.call(null,arg_6556,rum.core.cursored_key.call(null,state),((function (seq__6536_6552,chunk__6538_6553,count__6539_6554,i__6540_6555,arg_6556){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__6536_6552,chunk__6538_6553,count__6539_6554,i__6540_6555,arg_6556))
);

var G__6557 = seq__6536_6552;
var G__6558 = chunk__6538_6553;
var G__6559 = count__6539_6554;
var G__6560 = (i__6540_6555 + (1));
seq__6536_6552 = G__6557;
chunk__6538_6553 = G__6558;
count__6539_6554 = G__6559;
i__6540_6555 = G__6560;
continue;
} else {
var G__6561 = seq__6536_6552;
var G__6562 = chunk__6538_6553;
var G__6563 = count__6539_6554;
var G__6564 = (i__6540_6555 + (1));
seq__6536_6552 = G__6561;
chunk__6538_6553 = G__6562;
count__6539_6554 = G__6563;
i__6540_6555 = G__6564;
continue;
}
} else {
var temp__4423__auto___6565 = cljs.core.seq.call(null,seq__6536_6552);
if(temp__4423__auto___6565){
var seq__6536_6566__$1 = temp__4423__auto___6565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6536_6566__$1)){
var c__5792__auto___6567 = cljs.core.chunk_first.call(null,seq__6536_6566__$1);
var G__6568 = cljs.core.chunk_rest.call(null,seq__6536_6566__$1);
var G__6569 = c__5792__auto___6567;
var G__6570 = cljs.core.count.call(null,c__5792__auto___6567);
var G__6571 = (0);
seq__6536_6552 = G__6568;
chunk__6538_6553 = G__6569;
count__6539_6554 = G__6570;
i__6540_6555 = G__6571;
continue;
} else {
var arg_6572 = cljs.core.first.call(null,seq__6536_6566__$1);
if(((!((arg_6572 == null)))?((((arg_6572.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_6572.cljs$core$IWatchable$))?true:(((!arg_6572.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_6572):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_6572))){
cljs.core.add_watch.call(null,arg_6572,rum.core.cursored_key.call(null,state),((function (seq__6536_6552,chunk__6538_6553,count__6539_6554,i__6540_6555,arg_6572,seq__6536_6566__$1,temp__4423__auto___6565){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__6536_6552,chunk__6538_6553,count__6539_6554,i__6540_6555,arg_6572,seq__6536_6566__$1,temp__4423__auto___6565))
);

var G__6573 = cljs.core.next.call(null,seq__6536_6566__$1);
var G__6574 = null;
var G__6575 = (0);
var G__6576 = (0);
seq__6536_6552 = G__6573;
chunk__6538_6553 = G__6574;
count__6539_6554 = G__6575;
i__6540_6555 = G__6576;
continue;
} else {
var G__6577 = cljs.core.next.call(null,seq__6536_6566__$1);
var G__6578 = null;
var G__6579 = (0);
var G__6580 = (0);
seq__6536_6552 = G__6577;
chunk__6538_6553 = G__6578;
count__6539_6554 = G__6579;
i__6540_6555 = G__6580;
continue;
}
}
} else {
}
}
break;
}

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var seq__6544_6581 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__6546_6582 = null;
var count__6547_6583 = (0);
var i__6548_6584 = (0);
while(true){
if((i__6548_6584 < count__6547_6583)){
var arg_6585 = cljs.core._nth.call(null,chunk__6546_6582,i__6548_6584);
if(((!((arg_6585 == null)))?((((arg_6585.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_6585.cljs$core$IWatchable$))?true:(((!arg_6585.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_6585):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_6585))){
cljs.core.remove_watch.call(null,arg_6585,rum.core.cursored_key.call(null,state));

var G__6586 = seq__6544_6581;
var G__6587 = chunk__6546_6582;
var G__6588 = count__6547_6583;
var G__6589 = (i__6548_6584 + (1));
seq__6544_6581 = G__6586;
chunk__6546_6582 = G__6587;
count__6547_6583 = G__6588;
i__6548_6584 = G__6589;
continue;
} else {
var G__6590 = seq__6544_6581;
var G__6591 = chunk__6546_6582;
var G__6592 = count__6547_6583;
var G__6593 = (i__6548_6584 + (1));
seq__6544_6581 = G__6590;
chunk__6546_6582 = G__6591;
count__6547_6583 = G__6592;
i__6548_6584 = G__6593;
continue;
}
} else {
var temp__4423__auto___6594 = cljs.core.seq.call(null,seq__6544_6581);
if(temp__4423__auto___6594){
var seq__6544_6595__$1 = temp__4423__auto___6594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6544_6595__$1)){
var c__5792__auto___6596 = cljs.core.chunk_first.call(null,seq__6544_6595__$1);
var G__6597 = cljs.core.chunk_rest.call(null,seq__6544_6595__$1);
var G__6598 = c__5792__auto___6596;
var G__6599 = cljs.core.count.call(null,c__5792__auto___6596);
var G__6600 = (0);
seq__6544_6581 = G__6597;
chunk__6546_6582 = G__6598;
count__6547_6583 = G__6599;
i__6548_6584 = G__6600;
continue;
} else {
var arg_6601 = cljs.core.first.call(null,seq__6544_6595__$1);
if(((!((arg_6601 == null)))?((((arg_6601.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_6601.cljs$core$IWatchable$))?true:(((!arg_6601.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_6601):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_6601))){
cljs.core.remove_watch.call(null,arg_6601,rum.core.cursored_key.call(null,state));

var G__6602 = cljs.core.next.call(null,seq__6544_6595__$1);
var G__6603 = null;
var G__6604 = (0);
var G__6605 = (0);
seq__6544_6581 = G__6602;
chunk__6546_6582 = G__6603;
count__6547_6583 = G__6604;
i__6548_6584 = G__6605;
continue;
} else {
var G__6606 = cljs.core.next.call(null,seq__6544_6595__$1);
var G__6607 = null;
var G__6608 = (0);
var G__6609 = (0);
seq__6544_6581 = G__6606;
chunk__6546_6582 = G__6607;
count__6547_6583 = G__6608;
i__6548_6584 = G__6609;
continue;
}
}
} else {
}
}
break;
}

return state;
})], null);

//# sourceMappingURL=core.js.map