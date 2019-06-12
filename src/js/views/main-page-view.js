import mainPage from '../../tpl/main-page.tpl';
import template from 'lodash/template';
import { autobind } from 'core-decorators';
class MainPageView {
    constructor () {

    }
    getTemplate(user, i) {
        const templateForInsert = template(mainPage)({user, i});
        return templateForInsert;
    }

    showEditInput(witch, input) {
        witch.classList.add('main-conteiner__change-input--hide');
        input.classList.remove('main-conteiner__change-input--hide');
    }

    hideEditPanel(witch, input) {
        witch.classList.add('main-conteiner__change-input--hide');
        input.classList.remove('main-conteiner__change-input--hide');
    }

    showEditBlock(block) {
        block.classList.toggle('change-block--hide');
    }
    addInterest(value) {
        let interestsButton = document.createElement('button');
        let conteiner = document.getElementById('interests');
        interestsButton.innerText = value;
        conteiner.appendChild(interestsButton).classList.add('main-conteiner__buttons');
    }
    deleteInterest(element) {
        element.remove();
    }
    changeViewFromLocalStorage(value) {
        let name = document.getElementById('name');
        name.innerText = value;
    }
}
export default MainPageView;
