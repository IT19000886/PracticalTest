import React from "react";
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <>
    <div className="container">
      <div className="justify-content-md-center">
        <Link to="/search">
          <Button variant="primary" size="lg"> Searched News </Button>
        </Link>{' '}

        <Link to="/currentUs">
          <Button variant="primary" size="lg"> Current News on US </Button>
        </Link>
        {' '}
        
        <Link to="/current">
          <Button variant="primary" size="lg"> Current News </Button>
        </Link>
      </div>
    </div>

       
            </>
  );
}

export default Home;
