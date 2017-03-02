import React,{Component} from "react";
import Header from "../../compontents/Header";
import Footer from "../../compontents/Footer";

import  "./index.css";
export default class App extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
            <div className="app">
                <Header/>
                <Footer/>
            </div>
		);
	}
}