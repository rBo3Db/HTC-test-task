import Router from './router';
import forEach from 'lodash/forEach';
class App {
    constructor() {
        this.router = new Router();
        this.blocks = [];
    }

    renderPage(history) {
        this.blocks = this.router.dispatch(history);
        if (this.blocks) {
            forEach(this.blocks, function(block) {
                block.init();
            });
        }
    }
}

export default App;
