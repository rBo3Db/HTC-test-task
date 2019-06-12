import menu from '../../tpl/menu.tpl'
import template from 'lodash/template';
class MenuView {

    getTemplate(e, i) {
        const templateForInsert = template(menu)({e, i});
        return templateForInsert;
    }
    stylizationOfActiveTab(history, profile, friends) {
        if (history.location.pathname === '/') {
            profile.classList.remove('main-menu__element-of-menu--unactive');
            friends.classList.add('main-menu__element-of-menu--unactive');
        } else if (history.location.pathname === '/friends') {
            friends.classList.remove('main-menu__element-of-menu--unactive');
            profile.classList.add('main-menu__element-of-menu--unactive');
        }
    }
}
export default MenuView;
