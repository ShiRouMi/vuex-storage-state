import { omit, pick, cloneDeep } from 'lodash'
const LS = window.localStorage;
let KEY = "vuex-storage-state";
const getStorage = (key) => {
    if (!key)
        return false;
    let val = LS.getItem(key);
    return JSON.parse(val);
};
const setStorage = (key, value) => {
    if (!key)
        return false;
    value = JSON.stringify(value);
    LS.setItem(key, value);
};
const removeStorage = (key) => {
    if (!key)
        return false;
    LS.removeItem(key);
};
class VuexStorageState {
    constructor({ name = KEY, observer = {} }) {
        this.name = name;
        this.observer = observer;
        window
            ? window.removeVuexStorageState = () => {
                this.remove();
            }
            : undefined;
    }
    initState(store) {
        let data = getStorage(this.name), 
            mergeData = Object.assign(store.state, data);
        data && store.replaceState(mergeData);
    }
    storageState(state) {
        let observerState = cloneDeep(state);
        let { list, isFilter=false } = this.observer;
        
        if(list && list.length) {
            observerState = !isFilter 
            ? pick(observerState, list) 
            : omit(observerState, list)
        }

        setStorage(this.name, observerState);
    }
    remove() {
        removeStorage(this.name);
    }
}
const storagePlugins = (options = {}) => {
    let vuexStorageState = new VuexStorageState(options);
    return (store) => {
        vuexStorageState.initState(store);
        store.subscribe((mutation, state) => {
            vuexStorageState.storageState(state);
        });
    };
};
export default storagePlugins;
