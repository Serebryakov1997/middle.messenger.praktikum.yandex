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

// export const withStore = (
//     mapStateToProps: (data: IState) => any,
//     Component: Block): Block => {

//     // let newState;
//     store.on(StoreEvents.Update, () => {
//         // console.log('component props: ', Component.props);
//         console.log('withStore state: ', store.getState());
//         const newState = mapStateToProps(store.getState());
//         // console.log('withStore newState: ', newState);

//         // console.log('current store.state: ', store.getState());
//         if (!isEqual(store.state, newState)) {
//             console.log('isEqual newState: ', newState);
//             Component.setProps({ ...newState })
//         }

//         // store.state = newState;
//     });
//     // if (newState) {

//     // }
//     console.log('component props: ', Component.props);
//     return Component;
// };

export const withStore = (mapStateToProps: (data: IState) => any) => {
    return (Component: typeof Block) => {
        return class extends Component {
            constructor(props: any) {
                let state = mapStateToProps(store.getState());
                // console.log('current state: ', state);
                // const st = store.getState();
                // console.log('keys: ', Object.keys(store.getState()));
                super('form', { ...props, ...mapStateToProps(store.getState()) });

                store.on(StoreEvents.Update, () => {
                    const newState = mapStateToProps(store.getState());

                    if (!isEqual(state, newState)) {
                        console.log('isEq st: ', state);
                        this.setProps({ ...newState });
                    }

                    state = newState;
                    console.log('state: ', newState);
                });
            }
        }
    }
};
export { store };
