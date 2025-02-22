const postsContainer = document.getElementById('posts-container');

async function fetchPosts() {
    try {
        const response = await axios.get('https://api.github.com/repos/manikantan07/netlify-1/contents/content/posts');
        const posts = response.data;

        posts.forEach(post => {
            // Assuming post.content is Base64 encoded
            const postContent = atob(post.content);
            const postElement = document.createElement('div');
            postElement.innerHTML = `<h2>${post.name}</h2><div>${postContent}</div>`;
            postsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

fetchPosts();
