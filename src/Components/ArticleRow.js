import React,{Component} from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';

import { render } from '@testing-library/react';

class ArticleRow extends Component {
    constructor(props){
        super(props);

        this.state={
            article:props.article
        }
        
    }
  


render(){
    return(
        <tr className = 'text-center'>
            <td> {this.state.article.author}</td>
            <td> {this.state.article.title}</td>
            <td> {this.state.article.description}</td>
            <td> <Link> {this.state.article.url}</Link></td>
            <td> <img style={{width: 175, height: 175}} src = {this.state.article.urlToImage}></img></td>
            <td> {this.state.article.publishedAt}</td>
            <td> {this.state.article.content}</td>
            

        </tr>
    )
}
}
export default ArticleRow;