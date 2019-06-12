import user from '../data/user';
import Presenter from './presenter';
import MainModel from '../models/main-model';
import MainPageView from '../views/main-page-view';
import { autobind } from 'core-decorators';

class MainPagePresenter extends Presenter{
    constructor (history) {
        super();
        this.history = history;
        this.view = new MainPageView();
        this.model = new MainModel();
        this.element = document.getElementsByClassName('main-conteiner')[0];
    }
    init() {
        let i;        
        for ( i = 0; i < this.model.getData(user).length ; i++ ) {
            this.render(this.view.getTemplate(this.model.getData(user), i));
        };
        this.getInputsBlocks();
        this.getInputs();
        this.getButtons();
        this.bindEvents();
        this.loadName();
        
    }
    loadName() {
        try {
            let localValue = localStorage.getItem('nameInput');
            this.view.changeViewFromLocalStorage(localValue);
        } catch(e) {
            console.log(e);
        }
    }
    getButtons() {
        this.name = document.getElementById('name');
        this.phone = document.getElementById('phone');
        this.email = document.getElementById('email');
        this.createNewInterest = document.getElementById('createNewInterest');
        this.interestsButton = document.getElementById('interestsButton');
    }

    getInputsBlocks() {
        this.inputBlockOfInterests = document.getElementById('inputBlockOfInterests');
        this.interestsBlock = document.getElementById('interests')
    }

    getInputs() {
        this.nameInput = document.getElementById('nameInput');
        this.phoneInput = document.getElementById('phoneInput');
        this.emailInput = document.getElementById('emailInput');
        this.interests = document.getElementById('interestsInput');
    }


    bindEvents() {
        this.name.addEventListener('click', this.handleClick);
        this.phone.addEventListener('click', this.handleClick);
        this.email.addEventListener('click', this.handleClick);

        this.nameInput.addEventListener('blur', this.handleFocus);
        this.phoneInput.addEventListener('blur', this.handleFocus);
        this.emailInput.addEventListener('blur', this.handleFocus);

        this.createNewInterest.addEventListener('click', this.handleClick);
        this.interestsButton.addEventListener('click', this.handleClick);
        this.interestsBlock.addEventListener('click', this.handleClick);
    }

    @autobind
    handleClick(event) {
        let targetElement = event.currentTarget;
        switch (targetElement.id) {
            case "name":
                this.nameInput.value = targetElement.innerText;
                this.view.showEditInput(targetElement, this.nameInput);
                this.nameInput.focus();
                break;
            case "phone":
                this.phoneInput.text = targetElement.innerText;
                this.view.showEditInput(targetElement, this.phoneInput);
                this.phoneInput.focus();
                break;
            case "email":
                this.emailInput.text = targetElement.innerText;
                this.view.showEditInput(targetElement, this.emailInput);
                this.emailInput.focus();
                break;
            case "createNewInterest":
                this.view.showEditBlock(this.inputBlockOfInterests);
                break;
            case "interestsButton":
                if (this.checkInRegex(this.interests.value)) {
                    this.view.addInterest(this.interests.value);
                }
                break;
            case "interests":
                if (event.target.id != 'interests') {
                    this.view.deleteInterest(event.target);
                }
                break;
        }
    }
    @autobind
    handleFocus(event) {
        let targetElement = event.currentTarget;
        switch (targetElement.id) {
            case "nameInput":
                this.changeValue(this.name, targetElement, /^[A-Za-zА-Яа-яЁё ,.'-][A-Za-zА-Яа-яЁё ,.'-]+$/i);
                this.view.hideEditPanel(targetElement, this.name);
                try {
                    localStorage.setItem(targetElement.id, targetElement.value);
                } catch(e) {
                    console.log(e);
                }
                break;
            case "phoneInput":
                this.changeValue(this.phone, targetElement, /^[\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?$/);
                this.view.hideEditPanel(targetElement, this.phone);
                break;
            case "emailInput":
                this.changeValue(this.email, targetElement,  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ );
                this.view.hideEditPanel(targetElement, this.email);
                break;
        }
    }

    changeValue(element, input, reg) {
        let elementValue = element.innerText;
        let inputValue = input.value;
        if (inputValue && elementValue !== inputValue && this.checkInRegex(inputValue, reg)) {
            element.text = inputValue;
        }
    }
    checkInRegex(input,reg) {
        let regex = new RegExp(reg);
        let checked = regex.test(input);
        if(checked) {
            return checked;
        }
        else {
            alert('pls recheck value');
        }
    }

    clean() {
        this.name.removeEventListener('click', this.handleClick);
        this.phone.removeEventListener('click', this.handleClick);
        this.email.removeEventListener('click', this.handleClick);

        this.nameInput.removeEventListener('blur', this.handleFocus);
        this.phoneInput.removeEventListener('blur', this.handleFocus);
        this.emailInput.removeEventListener('blur', this.handleFocus);

        this.createNewInterest.removeEventListener('click', this.handleClick);
        this.interestsButton.removeEventListener('click', this.handleClick);
        this.interestsBlock.removeEventListener('click', this.handleClick);
    }
}
export default MainPagePresenter;
