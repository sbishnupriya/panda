import React from 'react';

import Home from "../Home.js";
import Login from "../Login.js";
import Album from "../Album.js";
import Jeans from "../Jeans.js"

var indexRoutes = [
  { exact:false, path: "/login", name: "Login", component: Login },
  {exact : false, path:"/album", name: "Album", component: Album},
  {exact : false, path:"/jeans", name:"Jeans", component : Jeans},
  { exact:false, path: "/", name: "Home", component: Home }



];

export default indexRoutes;