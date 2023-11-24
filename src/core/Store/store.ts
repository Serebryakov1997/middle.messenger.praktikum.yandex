import { IState } from '../../models/interfaces/auth';
import { isEqual } from '../../utils';
import { set } from '../../utils/set';
import { Block } from '../Block';
import { EventBus } from '../EventBus/event-bus';

export enum StoreEvents {
    Update = 'Update',
}

class Store extends EventBus {
    state: IState = {};

    constructor() {
        super();
    }

    getState(): IState {
        return this.state;
    }

    set(path: string, value: unknown) {
        set(this.state, path, value);
        this.emit(StoreEvents.Update, this.getState());
    }
}

const store = new Store();

export const withStore = (
    mapStateToProps: (data: IState) => any,
    Component: Block): Block => {

    // let componentValuesObject: Record<string, unknown> = {};
    store.on(StoreEvents.Update, () => {
        const { children } = Component;
        const state = JSON.parse(String(store.getState().user));
        Object.keys(children).forEach(key => {
            if (key.includes('input')) {

                const { name, inputValue } = (<Block>children[key]).props;
                // componentValuesObject[name as string] = inputValue;
                // console.log('componentValuesObject: ', componentValuesObject);
                const state = JSON.parse(String(store.getState().user));
                if (<string>name in state) {
                    (<Block>Component.children[key]).props.inputValue = state[name as string]
                }
            }
        });

        // const newState = mapStateToProps(store.getState());
        // console.log('newState: ', newState);
        if (!isEqual(componentValuesObject, state)) {
            console.log('!isEqual store state: ', store.state);
            console.log('newState: ', state);
            Component.setProps({ ...Component.children })
        }

    });

    return Component;
};

// export const withStore = (mapStateToProps: (data: IState) => any) => {
//     return (Component: typeof Block) => {
//         return class extends Component {
//             constructor(props: any) {
//                 // console.log('withStore Component: ', Component);
//                 // const { props }
//                 // console.log('withStore Component: ', Component);
//                 // const { props } = <Block>Component;
//                 console.log('withStore props: ', props);
//                 let state = mapStateToProps(store.getState());
//                 // console.log('current state: ', state);
//                 // const st = store.getState();
//                 // console.log('keys: ', Object.keys(store.getState()));
//                 super('form', { ...props, ...mapStateToProps(store.getState()) });

//                 store.on(StoreEvents.Update, () => {
//                     const newState = mapStateToProps(store.getState());

//                     if (!isEqual(state, newState)) {
//                         // console.log('isEq st: ', state);
//                         this.setProps({ ...newState });
//                     }

//                     state = newState;
//                     // console.log('state: ', newState);
//                 });
//             }
//         }
//     }
// };
export { store };
