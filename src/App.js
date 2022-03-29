import React from "react";
import CardList from "./cardList";
import Scroll from './Scroll'
import SearchBox from './SearchBox';


class  App extends React.Component{
    constructor(){
        super();
        this.state={
            robots:[],
            searchfield:''
        }
        
    }
    onSearchChange =(event)=>{
        this.setState({searchfield:event.target.value})

    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
           return response.json();
        }).then(users=>{
            this.setState({robots:users})
        })
    }
    
    
    render(){
        const filterdRobots= this.state.robots.filter(robots=>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
        
        return (
            <div className="tc">
                
                <h1 className="test-driver">roboFriends</h1>
                <SearchBox onSearchChange={this.onSearchChange}></SearchBox>
                <Scroll>
                <CardList robots={filterdRobots} ></CardList>
                </Scroll>
              <a href={'checkboxPage'}>tochekc box page</a>
                            <a href={'counterpage'}>ToCounter page</a>
                            <a href={'togglepage'}>To Toggle page</a>
                            <a href={'tictakgame'}>toRicTakGame</a>

            
                
            </div>
        )
    }

 
    
    
}

export default App;