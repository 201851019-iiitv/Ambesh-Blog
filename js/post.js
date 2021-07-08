/**
 * TODO (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = "https://my-blogging.herokuapp.com/api/posts/";
const API_BASE_URL = "https://my-blogging.herokuapp.com/";

window.onload = () => {
    getPost();
    getPostIdParam();
}

const getPostIdParam=()=>{
    let querystring=window.location.search;
    let url=new URLSearchParams(querystring);
    getPost(url.get('id'));
    // console.log(url.get('id'));
}

const getPost = (post_id) => {
    // CODE GOES HERE
    let url=`${API_URL}${post_id}`
   fetch(url,{
    method:'GET'
   }).then((Response)=>{
       return Response.json();
   }).then((data)=>{
       buildPost(data);
   })
    
}

const buildPost = (data) => {
    // HINT: Convert the date number to a Date string 
    
    // console.log(data);
    let blogdate=new Date(parseInt(data.added_date)).toDateString();

    document.querySelector("header").style.backgroundImage=`url(${API_BASE_URL}${data.post_image})`
     let Indiviualblogcontent="";
     Indiviualblogcontent +=
   `
    <div class="main-container1">
    <div class="navigation">
      <a href="index.html">Back</a>
    </div> 
    <div class="post-container">
     <div id="individual-post-title"><h3>${data.title}</h3></div>
     <div id="individual-post-date">Published on ${blogdate}</div>
     <div id="individual-post-content">${data.content}</div>
   </div>
   </div>
     
     `

document.querySelector('.blog-detail').innerHTML=Indiviualblogcontent;

}

