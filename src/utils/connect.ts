import { Block } from '../core/Block/block';
import store from '../core/Store/store';


export function connect(
    tagName: string,
    Component: typeof Block,
    mapStateToProps: (state: unknown) => Record<string, unknown>
) {
    return class extends Component {
        constructor() {
            super(tagName, mapStateToProps(store.getState()));
        }
    }
}
