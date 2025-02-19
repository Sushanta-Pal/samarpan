
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Navbar=() =>{
  return (
    <>
  <div class="ui pointing menu">
  <a class="active item">
    Home
  </a>
  <a class="item">
    Messages
  </a>
  <a class="item">
    Friends
  </a>
  <div class="right menu">
    <div class="item">
      <div class="ui transparent icon input">
        <input type="text" placeholder="Search..."/>
        <i class="search link icon"></i>
      </div>
    </div>
  </div>
</div>
<div class="ui segment">
  <p></p>
</div>
    </>
     )
}

export default Navbar;