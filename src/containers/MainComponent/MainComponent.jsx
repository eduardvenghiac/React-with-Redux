import React , {Component} from 'react';
import Header from '../../components/Header/Header'
import TaskList from '../TaskList'
import Footer from '../../components/Footer/Footer'

class MainComponent extends Component{
    render(){
        return(
            <div className="mainComponent">
                <Header />
                <TaskList />
                <Footer />
            </div>
        );
    }
}

export default MainComponent;