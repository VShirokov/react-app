import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Hello= props => {
    // useEffect(() => {
    //   axios.get(`http://localhost:3636/api/hello`, {
    //   })
    //     .then(res => setState(res.data))
    //     .then(res => console.log(res))
    //     .catch(err => console.log(`error - ${err}`))
    //     .finally(() => console.log("axios in hello.js"));
    // }, []);

    const [state, setState] = useState('');

  return (
    <div>
      Home page update
      <p>{state}</p>
    </div>
 );
};

export default Hello;
