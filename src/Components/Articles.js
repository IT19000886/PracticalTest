import React,{ Component, useEffect, useState } from "react";
import axios from 'axios';

import ArticleRow from "./ArticleRow";

class Articles extends Component{
    constructor(props) {
        super(props);

        this.state={
            articles:[]
        }
        this.fillTable = this.fillTable.bind(this);
        this.checkData = this.checkData.bind(this);
        
    }

    componentDidMount(){
        var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2021-10-29&' +
          'sortBy=popularity&' +
          'apiKey=eadee49985b745ffb8d0b3cca42abbfb';

        var req = new Request(url);

        fetch(req)
        .then(response =>
           response.json())
            .then(
                data => this.setState({articles: data.articles })
            );
    }
        
    fillTable(){
        return this.state.articles.map(article =>{
            return <ArticleRow key = {article._id} article ={article} />
        })
    }

    checkData(){
        return(
        <div>
            <h1 className="text-center">Articles</h1>
            <table  className="table border shadow "  responsive="xl">
                <thead className="table-light text-center">
                <tr>
                    <th scope="col">Author</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col" type="link">Url</th>
                    <th scope="col">Image</th>
                    <th scope="col">PublishedAt</th>
                    <th scope="col">Content</th>
                 
                </tr>
                </thead>
                <tbody> 
                    
                {this.fillTable()}

                </tbody>
            </table>
        </div>
     )
    }
    render(){
        return this.checkData()
    }
   }
   export default Articles;