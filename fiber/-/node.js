require( "source-map-support" ).install(); var exports = void 0;

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

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../mol/" ) + ".js" ] }; 

;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//mol.js.map
;

$node[ "../mol/mol.js" ] = $node[ "../mol/mol.js" ] = module.exports }.call( {} , {} )

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
//# sourceMappingURL=node.js.map