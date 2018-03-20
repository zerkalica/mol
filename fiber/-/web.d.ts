declare namespace $ {
}
export = $;
declare var requestIdleCallback: (handler: () => void) => number;
declare namespace $ {
    const $mol_fiber_wait: {};
    class $mol_fiber<Result = any> {
        readonly handler: () => Result;
        readonly slave: $mol_fiber;
        static quant: number;
        static current: $mol_fiber;
        static scheduled: number;
        static deadline: number;
        static tick(): void;
        static schedule(): void;
        static queue: $mol_fiber<any>[];
        constructor(handler: () => Result, slave?: $mol_fiber);
        destructor(): void;
        abort: () => void;
        masters: $mol_fiber<any>[];
        cursor: number;
        error: Error;
        result: Result;
        schedule(): void;
        complete(): void;
        done(result: Result): Result;
        fail(error: Error): Error;
        limit(): void;
        start(): Result;
        step(): void;
        master: $mol_fiber;
        toString(): string;
    }
}
