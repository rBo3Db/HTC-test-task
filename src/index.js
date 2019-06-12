import App from './js/app';
import { createBrowserHistory } from 'history';
import './styles/main.scss';
const history = createBrowserHistory();
const app = new App();

app.renderPage(history);

history.listen((location, action) => {
    app.renderPage(history);
});
