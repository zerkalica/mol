require( "source-map-support" ).install()

;
"use strict"
/// Fake namespace for optional overrides
///
/// 	namespace $ { export var x = 1 , y = 1 } // defaults
/// 	namespace $.$$ { export var x = 2 } // overrides
/// 	namespace $.$$ { console.log( x , y ) } // usage
///
var $ = $ || ( typeof window === 'object' ) && window || ( typeof module === 'object' ) && module['export'+'s']
$.$$ = $

$.$mol = $  // deprecated

;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//mol.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log(path, ...values) {
        if ($.$mol_log_filter() == null)
            return;
        path = String(path);
        if (path.indexOf($.$mol_log_filter()) === -1)
            return;
        if ($.$mol_log_context())
            $.$mol_log_context()();
        console.debug(path, ...values);
        if ($.$mol_log_debug() == null)
            return;
        if (path.indexOf($.$mol_log_debug()) === -1)
            return;
        debugger;
    }
    $.$mol_log = $mol_log;
})($ || ($ = {}));
//log.js.map
;
"use strict";
var $;
(function ($) {
    let context = null;
    function $mol_log_context(next = context) {
        return context = next;
    }
    $.$mol_log_context = $mol_log_context;
})($ || ($ = {}));
//log_context.js.map
;
"use strict";
var $;
(function ($) {
    let debug;
    function $mol_log_debug(next = debug) {
        return debug = next;
    }
    $.$mol_log_debug = $mol_log_debug;
})($ || ($ = {}));
//log_debug.node.js.map
;
"use strict";
var $;
(function ($) {
    let filter;
    function $mol_log_filter(next = filter) {
        return filter = next;
    }
    $.$mol_log_filter = $mol_log_filter;
})($ || ($ = {}));
//log_filter.node.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log_group(name, task) {
        return function $mol_log_group_wrapper(...args) {
            const filter = $.$mol_log_filter();
            if (filter == null)
                return task.apply(this, args);
            let started = false;
            let prev = $.$mol_log_context();
            $.$mol_log_context(() => {
                if (prev)
                    prev();
                started = true;
                if (filter)
                    console.group(name);
                else
                    console.groupCollapsed(name);
                $.$mol_log_context(prev = null);
            });
            try {
                return task.apply(this, args);
            }
            finally {
                if (started)
                    console.groupEnd();
                $.$mol_log_context(prev);
            }
        };
    }
    $.$mol_log_group = $mol_log_group;
})($ || ($ = {}));
//log_group.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_test(set) {
        for (let name in set) {
            const code = set[name];
            const test = (typeof code === 'string') ? new Function('', code) : code;
            $.$mol_test_all.push(test);
        }
        $mol_test_schedule();
    }
    $.$mol_test = $mol_test;
    $.$mol_test_all = [];
    function $mol_test_run() {
        for (var test of $.$mol_test_all)
            test();
    }
    $.$mol_test_run = $mol_test_run;
    let scheduled = false;
    function $mol_test_schedule() {
        if (scheduled)
            return;
        scheduled = true;
        setTimeout($.$mol_log_group('$mol_test_run()', () => {
            scheduled = false;
            $mol_test_run();
        }));
    }
    $.$mol_test_schedule = $mol_test_schedule;
})($ || ($ = {}));
//test.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'must be false'() {
            $.$mol_assert_not(0);
        },
        'must be true'() {
            $.$mol_assert_ok(1);
        },
        'two must be equal'() {
            $.$mol_assert_equal(2, 2);
        },
        'three must be equal'() {
            $.$mol_assert_equal(2, 2, 2);
        },
        'two must be unique'() {
            $.$mol_assert_unique([3], [3]);
        },
        'three must be unique'() {
            $.$mol_assert_unique([3], [3], [3]);
        },
    });
})($ || ($ = {}));
//assert.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_assert_ok(value) {
        if (value)
            return;
        throw new Error(`Not true (${value})`);
    }
    $.$mol_assert_ok = $mol_assert_ok;
    function $mol_assert_not(value) {
        if (!value)
            return;
        throw new Error(`Not false (${value})`);
    }
    $.$mol_assert_not = $mol_assert_not;
    function $mol_assert_fail(handler, ErrorRight) {
        try {
            handler();
        }
        catch (error) {
            if (ErrorRight)
                if (!(error instanceof ErrorRight))
                    throw error;
            return error;
        }
        throw new Error('Not failed');
    }
    $.$mol_assert_fail = $mol_assert_fail;
    function $mol_assert_equal(...args) {
        for (let i = 0; i < args.length; ++i) {
            for (let j = 0; j < args.length; ++j) {
                if (i === j)
                    continue;
                if (Number.isNaN(args[i]) && Number.isNaN(args[j]))
                    continue;
                if (args[i] !== args[j])
                    throw new Error(`Not equal (${args[i]}!==${args[j]})`);
            }
        }
    }
    $.$mol_assert_equal = $mol_assert_equal;
    function $mol_assert_unique(...args) {
        for (let i = 0; i < args.length; ++i) {
            for (let j = 0; j < args.length; ++j) {
                if (i === j)
                    continue;
                if (args[i] === args[j] || (Number.isNaN(args[i]) && Number.isNaN(args[j]))) {
                    throw new Error(`Not unique (args[${i}]===args[${j}])===${args[i]}`);
                }
            }
        }
    }
    $.$mol_assert_unique = $mol_assert_unique;
})($ || ($ = {}));
//assert.js.map
;
"use strict";
var $node = new Proxy({}, { get(target, field, wrapper) {
        return require(field);
    } });
//node.node.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = $node['jsdom'].jsdom().defaultView;
})($ || ($ = {}));
//context.node.js.map
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//context.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fiber_warp() {
        while ($.$mol_fiber.queue.length) {
            $.$mol_fiber.tick();
        }
        $.$mol_fiber.tick();
    }
    $.$mol_fiber_warp = $mol_fiber_warp;
})($ || ($ = {}));
//warp.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fiber_make(handler) {
        let master = $.$mol_fiber.current && $.$mol_fiber.current.master;
        if (master)
            return master;
        return new $.$mol_fiber(handler, $.$mol_fiber.current);
    }
    $.$mol_fiber_make = $mol_fiber_make;
})($ || ($ = {}));
//make.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fiber_async(request) {
        const fiber = $.$mol_fiber_make(() => {
            const res = request(response => (...args) => {
                if (!fiber.masters)
                    return;
                try {
                    return fiber.done(response(...args));
                }
                catch (error) {
                    fiber.fail(error);
                }
            });
            if (res) {
                if (typeof res === 'function') {
                    fiber.abort = res;
                }
                else if (typeof res.then === 'function') {
                    res.then(result => fiber.done(result), error => fiber.fail(error));
                }
            }
            throw $.$mol_fiber_wait;
        });
        return fiber.start();
    }
    $.$mol_fiber_async = $mol_fiber_async;
})($ || ($ = {}));
//async.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_func_name_dict = new WeakMap();
    function $mol_func_name(func) {
        let name = $.$mol_func_name_dict.get(func);
        if (name != null)
            return name;
        name = func.name || Function.prototype.toString.call(func).match(/([a-z0-9_$]*) ?(\(|\{|extends)/)[1];
        $.$mol_func_name_dict.set(func, name);
        return name;
    }
    $.$mol_func_name = $mol_func_name;
})($ || ($ = {}));
//name.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'init with overload'() {
            class X extends $.$mol_object {
                foo() {
                    return 1;
                }
            }
            var x = X.make({
                foo: () => 2,
            });
            $.$mol_assert_equal(x.foo(), 2);
        },
    });
})($ || ($ = {}));
//object.test.js.map
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    class $mol_object {
        get $() {
            const owner = this.object_owner();
            return (owner && owner.$ || $);
        }
        static make(config) {
            const instance = new this;
            for (let key in config)
                instance[key] = config[key];
            return instance;
        }
        static toString() {
            return $_1.$mol_func_name(this);
        }
        object_owner(next) {
            return this['object_owner()'] || (this['object_owner()'] = next);
        }
        object_host(next) {
            return this['object_host()'] || (this['object_host()'] = next);
        }
        object_field(next) {
            return this['object_field()'] || (this['object_field()'] = next) || '';
        }
        object_id(next) {
            return this['object_id()'] || (this['object_id()'] = next) || '';
        }
        toString() {
            return this.object_id();
        }
        toJSON() {
            return this.toString();
        }
        destructor() { }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//object.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_defer extends $.$mol_object {
        constructor(run) {
            super();
            this.run = run;
            $mol_defer.add(this);
        }
        destructor() {
            $mol_defer.drop(this);
        }
        static schedule() {
            if (this.timer)
                return;
            this.timer = this.scheduleNative(() => {
                this.timer = 0;
                this.run();
            });
        }
        static unschedule() {
            if (!this.timer)
                return;
            cancelAnimationFrame(this.timer);
            this.timer = 0;
        }
        static add(defer) {
            this.all.push(defer);
            this.schedule();
        }
        static drop(defer) {
            var index = this.all.indexOf(defer);
            if (index >= 0)
                this.all.splice(index, 1);
        }
        static run() {
            if (this.all.length === 0)
                return;
            this.schedule();
            for (var defer; defer = this.all.shift();)
                defer.run();
        }
    }
    $mol_defer.all = [];
    $mol_defer.timer = 0;
    $mol_defer.scheduleNative = (typeof requestAnimationFrame == 'function')
        ? handler => requestAnimationFrame(handler)
        : handler => setTimeout(handler, 16);
    $.$mol_defer = $mol_defer;
})($ || ($ = {}));
//defer.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    $.$mol_test({
        'synchronous task'() {
            $.$mol_fiber_warp();
            const task1 = $.$mol_fiber_func(() => 1);
            const task2 = $.$mol_fiber_func(() => task1() + 1);
            $.$mol_assert_equal(task2(), 2);
        },
        'wrapped in wrapped in wrapped'() {
            $.$mol_fiber_warp();
            const history = [];
            const log = (val) => {
                return $.$mol_fiber_async(back => {
                    new $.$mol_defer(back(() => {
                        history.push(val);
                        return val;
                    }));
                });
            };
            const subtask = $.$mol_fiber_func((val) => log(val));
            $.$mol_fiber_sync(() => {
                history.push(subtask(1) + subtask(2));
            });
            $.$mol_defer.run();
            $.$mol_fiber_warp();
            $.$mol_defer.run();
            $.$mol_fiber_warp();
            $.$mol_assert_equal(history.join(','), '1,2,3');
        },
        'destroyed while executed'() {
            $.$mol_fiber_warp();
            const history = [];
            const log = (val) => {
                return $.$mol_fiber_async(back => {
                    new $.$mol_defer(back(() => {
                        history.push(val);
                        return val;
                    }));
                });
            };
            const task = new $.$mol_fiber(() => {
                history.push(log(1) + log(2));
            });
            task.start();
            task.destructor();
            $.$mol_defer.run();
            $.$mol_assert_equal(history.join(','), '');
        },
        'aborted while executed'() {
            $.$mol_fiber_warp();
            const history = [];
            const log = (val) => {
                return $.$mol_fiber_async(back => {
                    let disposed = false;
                    new $.$mol_defer(() => {
                        if (disposed)
                            return;
                        history.push(val);
                        return val;
                    });
                    return () => disposed = true;
                });
            };
            const task = new $.$mol_fiber(() => {
                history.push(log(1) + log(2));
            });
            task.start();
            task.destructor();
            $.$mol_defer.run();
            $.$mol_assert_equal(history.join(','), '');
        },
        'wrapped in func in decorated'() {
            $.$mol_fiber_warp();
            const history = [];
            const log = (val) => {
                return $.$mol_fiber_async(back => {
                    new $.$mol_defer(back(() => {
                        history.push(val);
                        return val;
                    }));
                });
            };
            class Test {
                static subtask(val) {
                    return log(val);
                }
                static task() {
                    history.push(this.subtask(1) + this.subtask(2));
                }
            }
            __decorate([
                $.$mol_fiber_method
            ], Test, "task", null);
            Test.task();
            $.$mol_defer.run();
            $.$mol_fiber_warp();
            $.$mol_defer.run();
            $.$mol_fiber_warp();
            $.$mol_assert_equal(history.join(','), '1,2,3');
        },
    });
})($ || ($ = {}));
//fiber.test.js.map
;
"use strict";
var requestIdleCallback = requestIdleCallback || setTimeout;
var $;
(function ($) {
    $.$mol_fiber_wait = new class $mol_fiber_wait {
    };
    class $mol_fiber {
        constructor(handler, slave = undefined) {
            this.handler = handler;
            this.slave = slave;
            this.masters = [];
            this.cursor = -1;
            this.error = undefined;
            this.result = undefined;
            if (slave)
                slave.master = this;
        }
        static tick() {
            $mol_fiber.scheduled = 0;
            $mol_fiber.deadline = Date.now() + $mol_fiber.quant;
            if ($mol_fiber.queue.length == 0)
                return;
            while (true) {
                const fiber = $mol_fiber.queue.shift();
                if (!fiber)
                    break;
                const res = fiber.start();
                if (res instanceof $.$mol_fiber_wait.constructor)
                    break;
            }
        }
        static schedule() {
            if ($mol_fiber.scheduled)
                return;
            $mol_fiber.scheduled = requestIdleCallback($mol_fiber.tick);
        }
        destructor() {
            if (!this.masters)
                return;
            for (let master of this.masters) {
                master.destructor();
            }
            this.masters = null;
            if (this.abort)
                this.abort();
        }
        schedule() {
            if (!this.masters)
                debugger;
            $mol_fiber.queue.push(this);
            $mol_fiber.schedule();
        }
        complete() {
            this.abort = null;
            this.destructor();
            if (!this.slave)
                return;
            if ($mol_fiber.current)
                return;
            this.slave.schedule();
        }
        done(result) {
            if (!this.masters)
                return;
            this.result = result;
            this.complete();
            return result;
        }
        fail(error) {
            if (!this.masters)
                return;
            this.error = error;
            this.complete();
            return error;
        }
        limit() {
            if (Date.now() <= $mol_fiber.deadline)
                return;
            if (!$mol_fiber.current && $mol_fiber.queue.length === 0) {
                $mol_fiber.deadline = Date.now() + $mol_fiber.quant;
                return;
            }
            this.schedule();
            throw $.$mol_fiber_wait;
        }
        start() {
            const slave = $mol_fiber.current;
            if (slave)
                slave.step();
            if (!this.masters) {
                if (this.error)
                    throw this.error;
                return this.result;
            }
            this.cursor = 0;
            try {
                this.limit();
                $mol_fiber.current = this;
                const result = this.handler();
                $mol_fiber.current = slave;
                return this.done(result);
            }
            catch (error) {
                $mol_fiber.current = slave;
                if (error !== $.$mol_fiber_wait)
                    this.fail(error);
                if (slave)
                    throw error;
                if (error !== $.$mol_fiber_wait)
                    throw error;
                return new Proxy(error, { get() { throw error; } });
            }
        }
        step() {
            ++this.cursor;
        }
        get master() {
            return this.masters[this.cursor];
        }
        set master(next) {
            this.masters[this.cursor] = next;
        }
        toString() {
            if (!this.slave)
                return '';
            return this.slave + '/' + this.slave.masters.indexOf(this);
        }
    }
    $mol_fiber.quant = 8;
    $mol_fiber.scheduled = 0;
    $mol_fiber.deadline = 0;
    $mol_fiber.queue = [];
    $.$mol_fiber = $mol_fiber;
})($ || ($ = {}));
//fiber.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fiber_method(obj, name, descr) {
        descr.value = $.$mol_fiber_func(descr.value);
    }
    $.$mol_fiber_method = $mol_fiber_method;
})($ || ($ = {}));
//method.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fiber_sync(handler) {
        return $.$mol_fiber_make(handler).start();
    }
    $.$mol_fiber_sync = $mol_fiber_sync;
})($ || ($ = {}));
//sync.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fiber_func(handler) {
        return function $mol_fiber_func_wrapper(...args) {
            return $.$mol_fiber_make(handler.bind(this, ...args)).start();
        };
    }
    $.$mol_fiber_func = $mol_fiber_func;
})($ || ($ = {}));
//func.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Make html:span'() {
            const dom = $.$mol_dom_make('$mol_dom_make_test');
            $.$mol_assert_equal(dom.outerHTML, '<span id="$mol_dom_make_test"></span>');
        },
        'Make svg:svg'() {
            const dom = $.$mol_dom_make('$mol_dom_make_test', 'svg', 'http://www.w3.org/2000/svg');
            $.$mol_assert_equal(dom.outerHTML, '<svg id="$mol_dom_make_test"></svg>');
        },
        'Make to exists element'() {
            const body = $.$mol_dom_context.document.body;
            const dom = $.$mol_dom_make('$mol_dom_make_test');
            try {
                body.appendChild(dom);
                $.$mol_assert_equal(dom, $.$mol_dom_make('$mol_dom_make_test'));
            }
            finally {
                body.removeChild(dom);
            }
        },
    });
})($ || ($ = {}));
//make.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_make(id, localName = 'span', namespaceURI = 'http://www.w3.org/1999/xhtml') {
        const document = $.$mol_dom_context.document;
        let node = id && document.getElementById(id);
        if (!node) {
            node = document.createElementNS(namespaceURI, localName);
            if (id)
                node.id = id;
        }
        return node;
    }
    $.$mol_dom_make = $mol_dom_make;
})($ || ($ = {}));
//make.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            if (el[key] === val)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
    function $mol_dom_render_children(el, childNodes) {
        const node_list = [];
        const node_set = new Set();
        for (let i = 0; i < childNodes.length; ++i) {
            let node = childNodes[i];
            if (node == null)
                continue;
            if (Object(node) === node) {
                if (node['dom_tree'])
                    node = node['dom_tree']();
                node_list.push(node);
                node_set.add(node);
            }
            else {
                node_list.push(String(node));
            }
        }
        let nextNode = el.firstChild;
        for (let view_ of node_list) {
            const view = view_.valueOf();
            if (view instanceof $.$mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    nextNode.nodeValue = String(view);
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $.$mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false)
                el.removeAttribute(name);
            else
                el.setAttribute(name, String(val));
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const cur = style[name];
            if (typeof val === 'number') {
                if (parseFloat(cur) == val)
                    continue;
                style[name] = `${val}px`;
            }
            if (cur !== val)
                style[name] = val;
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
    function $mol_dom_render_events(el, events) {
        for (let name in events) {
            el.addEventListener(name, $.$mol_log_group(el.id + ' ' + name, events[name]), { passive: false });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
    function $mol_dom_render_events_async(el, events) {
        for (let name in events) {
            el.addEventListener(name, $.$mol_log_group(el.id + ' ' + name, events[name]), { passive: true });
        }
    }
    $.$mol_dom_render_events_async = $mol_dom_render_events_async;
})($ || ($ = {}));
//render.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Make empty div'() {
            $.$mol_assert_equal(($.$mol_dom_jsx("div", null)).outerHTML, '<div></div>');
        },
        'Make input with id and value'() {
            const dom = $.$mol_dom_jsx("input", { id: "$mol_dom_jsx_test", value: 123 });
            $.$mol_assert_equal(dom.outerHTML, '<input id="$mol_dom_jsx_test">');
            $.$mol_assert_equal(dom.value, '123');
        },
        'Make content'() {
            const id = '$mol_dom_jsx_test';
            const dom = $.$mol_dom_jsx("div", null,
                "hello",
                $.$mol_dom_jsx("strong", null, "world"),
                "!");
            $.$mol_assert_equal(dom.outerHTML, '<div>' +
                'hello' +
                '<strong>world</strong>' +
                '!' +
                '</div>');
        },
        'Make to exists element'() {
            const dom1 = $.$mol_dom_jsx("div", { id: "$mol_dom_jsx_test" });
            $.$mol_dom_context.document.body.appendChild(dom1);
            const dom2 = $.$mol_dom_jsx("div", { id: "$mol_dom_jsx_test" }, "hello");
            $.$mol_dom_context.document.body.removeChild(dom1);
            $.$mol_assert_equal(dom1, dom2);
            $.$mol_assert_equal(dom1.outerHTML, '<div id="$mol_dom_jsx_test">hello</div>');
        },
        'Pure function as component'() {
            function Button(props) {
                return $.$mol_dom_jsx("button", { id: props.id }, props.text);
            }
            const dom = $.$mol_dom_jsx(Button, { id: "$mol_dom_jsx_test", text: "click me" });
            $.$mol_assert_equal(dom.outerHTML, '<button id="$mol_dom_jsx_test">click me</button>');
        },
    });
})($ || ($ = {}));
//jsx.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_jsx = $.$mol_fiber_func(function $mol_dom_jsx(Elem, props, ...children) {
        let node;
        if (typeof Elem === 'string') {
            node = $.$mol_dom_make(props && props['id'], Elem);
            if (props && props['childNodes']) {
                children = props['childNodes'];
                props['childNodes'] = undefined;
            }
            $.$mol_dom_render_children(node, [].concat.apply([], children));
            $.$mol_dom_render_fields(node, props);
        }
        else if (typeof Elem === 'function') {
            const props2 = props;
            node = Elem(Object.assign({ childNodes: children }, props2));
            if (node['render'])
                node = node['render']();
        }
        return node;
    });
})($ || ($ = {}));
//jsx.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_app_bench_list_tsx {
        static onClick(item, event) {
            this.selected = item.id;
            this.render();
        }
        static render() {
            $.$mol_fiber_sync(() => {
                if (this.rendering)
                    this.rendering.destructor();
            });
            this.rendering = $.$mol_fiber.current;
            let Item = ({ id, item }) => ($.$mol_dom_jsx("div", { id: id, className: `list-item list-item-selected-${this.selected === item.id}`, onclick: this.onClick.bind(this, item) },
                $.$mol_dom_jsx("div", { id: `${id}.title`, className: "list-item-title" }, item.title),
                $.$mol_dom_jsx("div", { id: `${id}.content`, className: "list-item-content" }, item.content)));
            return ($.$mol_dom_jsx("div", { id: "list", className: "list" }, this.data.items.map(item => $.$mol_dom_jsx(Item, { id: `list.item[${item.id}]`, item: item }))));
        }
    }
    $mol_app_bench_list_tsx.data = {
        sample: '',
        items: []
    };
    $mol_app_bench_list_tsx.selected = null;
    __decorate([
        $.$mol_fiber_method
    ], $mol_app_bench_list_tsx, "render", null);
    $.$mol_app_bench_list_tsx = $mol_app_bench_list_tsx;
})($ || ($ = {}));
//index.js.map
//# sourceMappingURL=node.test.js.map