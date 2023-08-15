
/**/

let title = document.getElementById("title");
let content = document.getElementById("content");
let img = document.getElementById("post-img");
let errortitle = document.getElementById('errortitle');
let errorimg = document.getElementById('errorimg');
let errorcontent = document.getElementById('errorcontent');
let submit = document.getElementById('submit');




/*Render Post Data*/

let viewBtn = document.getElementsByClassName("view")[0];
let post = document.getElementsByClassName('posts')[0];
const posts = [{
    img: "./asset/img/img-post1.png",
    tag: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    time: "August 20, 2022",
    user: {
      avatar: "./asset/img/img-user2.png",
      username: "Tracey Wilson",
    }
  },
  {
    img: "./asset/img/img-post2.png",
    tag: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    time: "August 20, 2022",
    user: {
      avatar: "./asset/img/img-user1.png",
      username: "Json Francisco",
    }
  },
  {
    img: "./asset/img/img-post3.png",
    tag: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    time: "August 20, 2022",
    user: {
      avatar: "./asset/img/img-user3.png",
      username: "Elizabeth Slavin",
    }
  },
  {
    img: "./asset/img/img-post4.png",
    tag: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    time: "August 20, 2022",
    user: {
      avatar: "./asset/img/img-user4.png",
      username: "Ernie Smith",
    }
  },
  {
    img: "./asset/img/img-post5.png",
    tag: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    time: "August 20, 2022",
    user: {
      avatar: "./asset/img/img-user5.png",
      username: "Eric Smith",
    }
  },
  {
    img: "./asset/img/img-post6.png",
    tag: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    time: "August 20, 2022",
    user: {
      avatar: "./asset/img/img-user2.png",
      username: "Tracey Wilson",
    }
  },
  {
    img: "./asset/img/img-post7.png",
    tag: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    time: "August 20, 2022",
    user: {
      avatar: "./asset/img/img-user1.png",
      username: "Jason Francisco",
    }
  },
  {
    img: "./asset/img/img-post8.png",
    tag: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    time: "August 20, 2022",
    user: {
      avatar: "./asset/img/img-user3.png",
      username: "Elizabeth Slavin",
    }
  },
  {
    img: "./asset/img/img-post9.png",
    tag: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    time: "August 20, 2022",
    user: {
      avatar: "./asset/img/img-user4.png",
      username: "Ernie Smith",
    }
  }
];

function RenderListPost(inforPost) {
  const postContent = inforPost.map((post) => {
   return `<div class="col-lg-4 col-md-6 col-sm-8 col-12">
                    <article class="post">
                        <img class="img-fluid" src="${post.img}" alt="">
                        <span class="tag rounded">${post.tag}</span>
                        <h4>${post.title}</h4>
                        <div class="infor-user">
                            <div class="user">
                                <img class="img-fluid" src="${post.user.avatar}" alt="">
                                <span>${post.user.username}</span>
                            </div>
                            <span class="time">${post.time}</span>
                        </div>
                    </article>
                </div>`
  }).join('');
  post.innerHTML = postContent;
}


/*Click View Post*/

function createPost(newInfor) {
  RenderListPost(newInfor);

}
let newInfor = posts.slice().concat(posts);
viewBtn.addEventListener('click', () => {
  newInfor = posts.slice().concat(newInfor);
  let newPost = createPost(newInfor);
});


document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  
  RenderListPost(posts);
});