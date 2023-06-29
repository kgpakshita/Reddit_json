# Reddit Clone Webpage

This is a Reddit clone webpage built using HTML, CSS, JavaScript, and API fetching. It aims to replicate the basic functionality and user experience of the popular social news aggregation and discussion platform, Reddit.

## Features

- User Registration and Login: Users can create new accounts and log in to the system using their credentials. The user authentication is handled on the client-side for simplicity.

- Subreddits: Users can browse various subreddits and view the posts within each subreddit. The subreddit data is fetched from an external API.

- Post Submission: Authenticated users can create new posts within a subreddit. They can provide a title, content, and choose the subreddit to which the post belongs.

- Commenting: Users can leave comments on posts within a subreddit. They can also reply to existing comments.

- Upvoting and Downvoting: Users can upvote or downvote both posts and comments to express their opinions.

## Technologies Used

The Reddit clone webpage is built using the following technologies:

- HTML: Provides the structure and layout of the webpage.
- CSS: Handles the presentation and styling of the webpage.
- JavaScript: Implements the dynamic behavior and interactivity of the webpage.
- Fetch API: Communicates with the backend API to retrieve and submit data.

## Setup and Usage

To run the Reddit clone webpage locally, follow these steps:

1. Clone the repository to your local machine.

```bash
git clone https://github.com/your-username/reddit-clone.git
```

2. Open the project directory.

```bash
cd reddit-clone
```

3. Launch a local development server. You can use tools like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for Visual Studio Code or any other preferred method.

4. Open the webpage in your browser by navigating to `http://localhost:your-port`, where `your-port` is the port number specified by the local development server.

5. Interact with the Reddit clone webpage by registering a new account, logging in, browsing subreddits, creating posts, leaving comments, and upvoting or downvoting content.

## API Integration

The Reddit clone webpage relies on an external API to fetch subreddit data and interact with the backend. The API endpoints used by the webpage are as follows:

- `GET /subreddits`: Retrieves a list of available subreddits.
- `GET /subreddits/{subredditId}`: Retrieves detailed information about a specific subreddit.
- `GET /subreddits/{subredditId}/posts`: Retrieves a list of posts within a subreddit.
- `GET /posts/{postId}`: Retrieves detailed information about a specific post.
- `POST /posts`: Creates a new post within a subreddit.
- `POST /posts/{postId}/comments`: Creates a new comment on a post.
- `POST /posts/{postId}/upvote`: Upvotes a post.
- `POST /posts/{postId}/downvote`: Downvotes a post.
- `POST /comments/{commentId}/upvote`: Upvotes a comment.
- `POST /comments/{commentId}/downvote`: Downvotes a comment.

Please refer to the API documentation for detailed information on the request and response formats for each endpoint.

## Contributions

Contributions to the Reddit clone webpage project are welcome. If you encounter any issues or have suggestions for improvements, please open an issue on the project's GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and distribute the codebase as needed.
