// import React from 'react';
import axios from 'axios';


export default async function getTheWHales () {
  let URL = 'http://hotline.whalemuseum.org/api.json?near=47.5755,-122.4107&radius=1.5&limit=1';

  let res = await axios.get(URL);
  
  console.log(res.data)
  console.log('SPECIES', res.data[0].species);
  console.log('DESCRIPTION', res.data.description)
  }

 
