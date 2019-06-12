import Presenter from './presenter';
import MainModel from '../models/main-model';
import MenuView from '../views/menu-view';
import { autobind } from 'core-decorators';

class MenuPresenter extends Presenter{
    constructor (history) {
        super();
        this.history = history;
        this.view = new MenuView();
        this.model = new MainModel();
        this.element = document.getElementById('mainMenu');
    }
    init() {
        this.render(this.view.getTemplate());
        this.getButtons();
        this.bindEvents();
        this.view.stylizationOfActiveTab(this.history, this.profile, this.friends);
    }
    getButtons() {
        this.profile = document.getElementById('profile');
        this.friends = document.getElementById('friends');
    }

    bindEvents() {
        this.profile.addEventListener('click', this.handleProfileButtonClick);
        this.friends.addEventListener('click', this.handleFriendsButtonClick);
    }
    
    @autobind
    handleProfileButtonClick(event) {
        this.history.push('/');
    }

    @autobind
    handleFriendsButtonClick(event) {
        this.history.push('/' + event.currentTarget.id );
    }
    clean() {
        this.profile.removeEventListener('click', this.handleProfileButtonClick);
        this.friends.removeEventListener('click', this.handleFriendsButtonClick);
    }
}
export default MenuPresenter;
