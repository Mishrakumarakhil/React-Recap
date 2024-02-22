# what is use of Parcel

1. It is creating dev build for us
2. It is creatign local server for us
3. automatically refreshing our page, which is HMR -> Hot module replacement
4. File watching algo -> written in c++
5. caching -> faster builds
6. Image optimzation

7. minification in prod env
8. bundle in prod end
9. compress in prod end
10. Consistence hashing
11. code spliting /split file
12. diffrential bundling -> when your app is open, your app can be open any brwser(google, ie, safari)
13. error handling
14. we can host our app in http || https
15. tree shaking - remove unused code for us
16. diffrent build for dev and prod

#

  <!-- /* <div class="parent">
    <div class="child">
<h1>I am h1 tag</h1>
<h1>I am h2 tag</h1>
    </div>
     <div class="child2">
<h1>I am h1 tag</h1>
<h1>I am h2 tag</h1>
    </div>
</div> */
}

// const parent=React.createElement(
//     "div",
//     {id:"parent"},
//   [  React.createElement(
//         "div",
//         {id:"child"},
//       [  React.createElement(
//             "h1",
//             {},
//             "I am h1 Tag"
//             ),React.createElement(
//                 "h2",
//                 {},
//                 "I am h2 Tag"
//                 )]

//             ),

//             React.createElement(
//                 "div",
//                 {id:"child2"},
//               [  React.createElement(
//                     "h1",
//                     {},
//                     "I am h1 Tag"
//                     ),React.createElement(
//                         "h2",
//                         {},
//                         "I am h2 Tag"
//                         )]

//                     )

//         ]

//             )

// const heading=React.createElement("h1",{id:"heading",xyz:"abs"},"Hello world from React!")

// createElement(TagName,{attribute of tag},This to add in tag||children) -->
