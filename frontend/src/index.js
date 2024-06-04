import ReactDOM from 'react-dom/client';
import init from './init.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(await init());
