

const API_URL = "https://my-blogging.herokuapp.com/api/posts/";
const API_BASE_URL = "https://my-blogging.herokuapp.com/";

window.onload = () => {
    getPosts();
}

const getPosts = () => {
   fetch(API_URL,{
       method:'GET'
   }).then((Response)=>{
       
    return Response.json();
   }).then((data)=>{
     buildPosts(data);
   })

}

const buildPosts = (blogPosts) => {

   let  blogcontent="";

   for(blogs of blogPosts )
   {
    let blogdate=new Date(parseInt(blogs.added_date)).toDateString();
    let blogimage=`${API_BASE_URL}${blogs.post_image}` ;
    let blogurl=`/post.html?id=${blogs.id}`
     blogcontent +=`
     <a class="post-link" href="${blogurl}">
     <div class="post">
     <div class="post-image" style="background-image:url(${blogimage})"></div>
     <div class="post-content">
       <div class="post-date">${blogdate}</div>
       <div class="post-title"><h3>${blogs.title}</h3></div>
       <div class="post-text">${blogs.content}</div>
     </div>
   </div>
   </a>
   `


   }
 document.querySelector('.blog-post').innerHTML=blogcontent;

}