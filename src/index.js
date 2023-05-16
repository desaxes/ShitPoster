import { renderEntireTree } from './render';
import reportWebVitals from './reportWebVitals';
import { dataStorage } from './redux/dataStorage'
renderEntireTree(dataStorage);
reportWebVitals();

