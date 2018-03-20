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
declare namespace $ {
    function $mol_fiber_make<Result = void>(handler: () => Result): $mol_fiber<Result>;
}
declare namespace $ {
    function $mol_fiber_func<Handler extends (...args: any[]) => Result, Result = void>(handler: Handler): Handler;
}
declare var require: (path: string) => any;
declare var $node: any;
declare namespace $ {
}
declare namespace $ {
    var $mol_dom_context: Window & {
        Node: typeof Node;
        Element: typeof Element;
        HTMLElement: typeof HTMLElement;
        XMLHttpRequest: typeof XMLHttpRequest;
    };
}
declare namespace $ {
    function $mol_dom_make(id?: string, localName?: string, namespaceURI?: string): Element;
}
declare namespace $ {
    function $mol_log(path: any, ...values: any[]): void;
}
declare namespace $ {
    function $mol_log_context(next?: () => void): () => void;
}
declare namespace $ {
    function $mol_log_debug(next?: () => void): () => void;
}
declare namespace $ {
    function $mol_log_filter(next?: () => void): () => void;
}
declare namespace $ {
    function $mol_log_group<Task extends Function>(name: string, task: Task): Task;
}
declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
    function $mol_dom_render_children(el: Element, childNodes: NodeList | Array<Node | string | number | boolean | {
        dom_tree: () => Node;
    }>): void;
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean;
    }): void;
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
    function $mol_dom_render_events(el: Element, events: {
        [key: string]: (event: Event) => any;
    }): void;
    function $mol_dom_render_events_async(el: Element, events: {
        [key: string]: (event: Event) => any;
    }): void;
}
declare namespace JSX {
    interface Element extends HTMLElement {
    }
    interface ElementClass {
        render(): Element;
    }
    interface IntrinsicElements {
        [key: string]: {
            [prop: string]: any;
        };
    }
    interface ElementAttributesProperty {
        props: {};
    }
}
declare namespace $ {
    const $mol_dom_jsx: (Elem: string | ((props: any) => Element), props: any, ...children: (string | Node)[]) => Element;
}
declare namespace $ {
    function $mol_fiber_method<Host, Result>(obj: Host, name: string, descr: TypedPropertyDescriptor<(...args: any[]) => Result>): void;
}
declare namespace $ {
    function $mol_fiber_sync<Result = void>(handler: () => Result): Result;
}
declare namespace $ {
    class $mol_app_bench_list_tsx {
        static data: {
            sample: string;
            items: {
                id: number;
                title: string;
                content: string;
            }[];
        };
        static selected: number;
        static onClick(item: {
            id: number;
        }, event: MouseEvent): void;
        static rendering: $mol_fiber;
        static render(): JSX.Element;
    }
}
