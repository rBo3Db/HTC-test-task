import MainPagePresenter from './presenters/main-page-presenter';
import FriendPresenter from './presenters/friend-presenter';
import MenuPresenter from './presenters/menu-presenter';
class Router {
    constructor() {
        this.currentPreseners = [];
    }

    clean() {
        this.currentPreseners.forEach(elem => {
            elem.clean();
        });
    }

    dispatch(history) {
        if (history.location.pathname === '/') {
            this.clean();
            this.currentPreseners = [new MenuPresenter(history), new MainPagePresenter(history)];
            return this.currentPreseners;
        }
        if (history.location.pathname === '/friends') {
            this.clean();
            this.currentPreseners = [new MenuPresenter(history), new FriendPresenter(history)];
            return this.currentPreseners;
        }
        return [];
    }
}
export default Router;