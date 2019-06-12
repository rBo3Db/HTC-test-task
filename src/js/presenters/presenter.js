
export default class Presenter {

    render(compiledTemplate) {
        this.element.innerHTML = compiledTemplate;
    }
    
    renderPlus(compiledTemplate) {
        this.element.innerHTML += compiledTemplate;
    }

    clean() {
        this.element.innerHTML = '';
    }
}