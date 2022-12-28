import { writable, type Writable, get } from 'svelte/store'

export interface Window {
    title: string,
    icon: string,
    id: number,
    minimized: Boolean,
    maximized: Boolean,
}
export interface WManager {
    id: number,
    focus_history: Array<Number>,
    windows: Record<number, Window>,
    start_menu_opened: Boolean
}

const wm_writable: Writable<WManager> = writable({
    id: 0,
    focus_history: [],
    windows: {},
    start_menu_opened: false,
});
export const WindowManager = {
    subscribe: wm_writable.subscribe,
    addWindow: function(icon: string, title: string) {
        const added: Window = {
            id: get(wm_writable).id,
            icon,
            title,
            maximized: false,
            minimized: false
        }
        wm_writable.update(w => {
            w.windows[w.id] = added;
            w.id += 1;
            return w;
        });

        return added;
    },
    minimize: (id: number) => {
        wm_writable.update(s => {
            // remove from focus history
            s.focus_history = s.focus_history.filter(w => w != id);
            s.windows[id].minimized = true;
            return s;
        })
    },
    maximize: (id: number) => wm_writable.update(s => {
        s.focus_history = s.focus_history.filter(w => w != id);
        s.focus_history.push(id);
        s.windows[id].maximized = true;
        return s;
    }),
    close: (id: number) => wm_writable.update(s => {
        s.focus_history = s.focus_history.filter(w => w != id);
        delete s.windows[id];
        return s;
    }),
    toggle: (id: number) => {
        wm_writable.update(s => {
            s.windows[id].minimized = !s.windows[id].minimized;

            if(s.windows[id].minimized)
                s.focus_history = s.focus_history.filter(w => w != id);
            else
                s.focus_history.push(id);
            
            return s;
        })
    },
    focus: (id: number) => {
        wm_writable.update(s => {
            s.focus_history = s.focus_history.filter(w => w != id);
            s.focus_history.push(id);

            return s;
        })
    },
    isLastFocused(id: number): Boolean {
        let s = get(wm_writable);
        if(s.start_menu_opened) return false;
        return s.focus_history[s.focus_history.length-1] === id;
    },
    toggleStartMenu() {
        wm_writable.update(s => {
            s.start_menu_opened = !s.start_menu_opened;
            return s;
        })
    },
    closeStartMenu() {
        wm_writable.update(s => {
            s.start_menu_opened = false;
            return s;
        })
    }
}
