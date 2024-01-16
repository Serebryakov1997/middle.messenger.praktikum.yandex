import { IState } from '../../models/interfaces/auth';
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

export const withStore = (mapStateToProps: (state: IState) => any) => {
    return (Component: typeof Block) => {
        let previousState: any;

        return class WithStore extends Component {
            constructor(props: any) {
                previousState = mapStateToProps(store.getState());

                super({ ...props, ...previousState });

                store.on(StoreEvents.Update, () => {
                    const newProps = mapStateToProps(store.getState());
                    previousState = newProps;

                    this.setProps({ ...newProps });
                })
            }
        }
    }
}

export { store };
