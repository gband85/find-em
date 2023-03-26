import { useState } from "react";
import { useMatches, useRouteLoaderData } from "react-router-dom";

function Info() {
 //const title=useRouteLoaderData('puzz')
 //const [title1,setTitle1]=useState(title)
 //console.log(title);
 
    return (
<section class="hero has-text-centered">
  <div class="hero-body">
    <p class="title">
      Built by Gband85 using:
      
    </p>
    <p class="subtitle">
      <ul>
        <li>React</li>
        <li>Firebase</li>
        <li>Bulma</li>
      </ul>
    </p>
  </div>
</section>
    );
  }
  export default Info;