import { AuthController } from '../../../controllers/auth-controller';
import { Block } from '../../../core';
import { withStore } from '../../../core/Store';
import { IState } from '../../../models/interfaces/auth';

class BaseTestStorePage extends Block {
    // constructor() {
    //     super('form', {});
    // }

    render(): DocumentFragment {
        console.log('this.props render: ', this.props);
        const { user } = this.props;
        console.log('user render: ', user);
        return this.compile(`
            <h1>{{user}}</h1>
        `, this.props);
    }

    protected componentDidMount(oldProps: Record<string, unknown>): void {
        AuthController.fetchUser();
    }
}

const mapStateToProps = (state: IState) => ({
    user: state.user!
});

export const TestStorePage = withStore(mapStateToProps)(BaseTestStorePage);
