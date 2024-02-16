import React from "react";
import  ReactDOM  from "react-dom/client";

{/* <div class="parent">
    <div class="child">
<h1>I am h1 tag</h1>
<h1>I am h2 tag</h1>
    </div>
     <div class="child2">
<h1>I am h1 tag</h1>
<h1>I am h2 tag</h1>
    </div>
</div> */}



const parent=React.createElement(
    "div",
    {id:"parent"},
  [  React.createElement(
        "div",
        {id:"child"},
      [  React.createElement(
            "h1",
            {},
            "I am h1 Tag"
            ),React.createElement(
                "h2",
                {},
                "I am h2 Tag"
                )]
            
            
            ),

            React.createElement(
                "div",
                {id:"child2"},
              [  React.createElement(
                    "h1",
                    {},
                    "I am h1 Tag"
                    ),React.createElement(
                        "h2",
                        {},
                        "I am h2 Tag"
                        )]
                    
                    
                    )
        
        ]
            
            
            )


// const heading=React.createElement("h1",{id:"heading",xyz:"abs"},"Hello world from React!")

// createElement(TagName,{attribute of tag},This to add in tag||children)

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)