import React , {Component} from 'react';
import Header from '../../components/Header/Header'
import TaskList from '../TaskList'
import Footer from '../../components/Footer/Footer'

class MainComponent extends Component{
    render(){
        return(
            <div className="mainComponent">
                <Header />
                <hr />
                <TaskList />
                <hr />
                <Footer />
            </div>
        );
    }
}

export default MainComponent;