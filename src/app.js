import { PureComponent } from 'react'
import { BrowserRouter } from 'react-router-dom';
import Menu from './menu';


class App extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Menu />
            </BrowserRouter>
        );
    }


}

export default App;