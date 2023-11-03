window.onload = function() {
    fetch("https://api.npoint.io/3f4694ef55128b25424a")
        .then((response) => response.json())
        .then(json => {
            addPostsFromJSON(json);
        })
        .catch(error => {
            console.error(error);
        });
};

function addPostsFromJSON(posts) {
    let section = document.getElementById("posts");
    for (let i = 0; i < posts.length; i++) {
        // Get next post and start a new article
        let post = posts[i];
        let newArticle = document.createElement("article");
        // Create a new top for article
        let newDiv = document.createElement("div");
        let userImg = document.createElement("img");
        let userName = document.createElement("p");
        let postDate = document.createElement("p");
        newDiv.classList.add("articleTop");
        userImg.classList.add("profilePicture");
        // Include profile and post date
        userImg.src = "/res/images/profile.jpg";
        userName.appendChild(document.createTextNode(post.author));
        postDate.appendChild(document.createTextNode(post.createTime));
        newDiv.appendChild(userImg);
        newDiv.appendChild(userName);
        newDiv.appendChild(postDate);
        newArticle.appendChild(newDiv);
        // Include post image if it exists
        if (post.imageLink) {
            let postImg = document.createElement("img");
            postImg.src = post.imageLink
            newArticle.appendChild(postImg);
        }
        // Include post body
        let postBody = document.createElement("p");
        postBody.appendChild(document.createTextNode(post.postBody));
        newArticle.appendChild(postBody);
        // Include like button
        let likeButton = document.createElement("img");
        likeButton.classList.add("likeButton");
        likeButton.src = "/res/images/like.png";
        newArticle.appendChild(likeButton);
        // Attach new article/post to page section (newer on top)
        section.insertBefore(newArticle, section.firstChild);
    };
};