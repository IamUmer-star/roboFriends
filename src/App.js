import React from "react";
import CardList from "./cardList";
import Scroll from './Scroll'
import SearchBox from './SearchBox';
import Addition  from "./mango";


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
                <h1>roboFriends</h1>
                <SearchBox onSearchChange={this.onSearchChange}></SearchBox>
                <Scroll>
                <CardList robots={filterdRobots} ></CardList>
                </Scroll>
                <Addition a={85 } b ={87} ></Addition>
            </div>
        )
    }

 
    
    
}

export default App;