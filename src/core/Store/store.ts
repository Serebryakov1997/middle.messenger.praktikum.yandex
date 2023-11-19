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

    // let newProps;
    store.on(StoreEvents.Update, () => {
        const newProps = mapStateToProps(store.getState());

        if (!isEqual(Component.props, newProps)) {
            Component.setProps(newProps)
        }
    });
    // if (newProps) {

    // }
    return Component;
};

// export const withStore = (mapStateToProps: (data: IState) => any) => {
//     return (Component: typeof Block) => {
//         return class extends Component {
//             constructor(props: any) {
//                 super('div', { ...props, ...mapStateToProps(store.getState()) });

//                 store.on(StoreEvents.Update, () => {
//                     const newProps = mapStateToProps(store.getState());

//                     this.setProps(newProps);
//                 });
//             }
//         }
//     }
// };
export { store };
