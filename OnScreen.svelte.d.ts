import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        showing?: boolean | undefined;
        threshold?: number | undefined;
        rootMargin?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type OnScreenProps = typeof __propDef.props;
export type OnScreenEvents = typeof __propDef.events;
export type OnScreenSlots = typeof __propDef.slots;
export default class OnScreen extends SvelteComponentTyped<OnScreenProps, OnScreenEvents, OnScreenSlots> {
}
export {};
