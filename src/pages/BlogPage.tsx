import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '../components/styles/MainContent.css'
import Header from "../components/Header";
import GeneralInfoCardProfile from '../components/GeneralInfoCardProfile';
import '../components/styles/BlogPage.css'

export default function BlogPage() {

    const [posts, setPosts] = useState([
        {
            "id": 1,
            "title": {
                "rendered": "Hello world!"
            },
            "content": {
                "rendered": "\n<p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>\n",
                "protected": false
            }
        }
    ]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://www.serbeld.space/en/wp-json/wp/v2/posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="App" id='website'>
            <Helmet>
                <link rel="canonical" href="https://www.serbeld.space/blog" />

                <title>My Blog | Technical Leader & Full Stack Web Developer</title>
                <meta name="description" content="Unlock digital success with VTEX, SEO, and e-commerce insights. Join the impactful journey on my blog." />

                <meta property="og:locale" content="en_CO" />
                <meta property="og:title" content="My Blog | Technical Leader & Full Stack Web Developer" />
                <meta property="og:description" content="Unlock digital success with VTEX, SEO, and e-commerce insights. Join the impactful journey on my blog." />
                <meta property="og:url" content="https://www.serbeld.space/blog" />
                <meta property="og:site_name" content="Sergio Beleño's Blog" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@serbeld" />
                <meta name="twitter:title" content="My Blog | Technical Leader & Full Stack Web Developer" />
                <meta name="twitter:description" content="Unlock digital success with VTEX, SEO, and e-commerce insights. Join the impactful journey on my blog." />
                <meta name="twitter:url" content="https://www.serbeld.space/blog" />
            </Helmet>

            <div className='flex' id='person'>
                <Header />

                <GeneralInfoCardProfile />

                <div className="card-wrap">
                    <div className="content blog">
                        <h1>My Blog | Serbeld Digital Creations</h1>
                        <ul>
                            {posts.map(post => (
                                <li key={post.id}>
                                    <h2>{post.title.rendered}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                                </li>
                            ))}
                        </ul>
                        <div className='showMore'>
                            See more posts on my <a href="https://www.serbeld.space/en" className="one-page-menu-item" title="Blog" target="_blank" rel="noreferrer"> wordpress page</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}