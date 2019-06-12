import user from '../data/user';
import Presenter from './presenter';
import MainModel from '../models/main-model';
import FriendView from '../views/friend-view';
import { autobind } from 'core-decorators';

class FriendPresenter extends Presenter{
    constructor (history) {
        super();
        this.history = history;
        this.view = new FriendView();
        this.model = new MainModel();
        this.element = document.getElementsByClassName('main-conteiner')[0];
    }
    init() {
        this.element.innerHTML = '';
        user[0].friends.forEach((element, index) => {
            this.renderPlus(this.view.getTemplate(this.model.getData(element), index));
        });
    }
}
export default FriendPresenter;
