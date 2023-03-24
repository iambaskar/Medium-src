import { useEffect, useState } from 'react';
import { db } from '../firebase.config';
import { collection, doc, getDocs } from "firebase/firestore";

import PostCard from './PostCard';
import './posts.css'
import TrendingCard from './TrendingCard';
import PostCard1 from './PostCard1';

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const postsCollectionRef = collection(db, "posts");


    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getPosts();
    }, []);

    return ( 
        <div className="posts">
            {
                posts.map((post) => {
                    return <div>
                        <PostCard authorname={post.auhtor_name} authorimg={post.author_img}
                            posttitle = {post.post_title} postcontent={post.post_content}
                            postread = {post.post_read} postimg={post.post_img}
                            postcatagory = {post.post_catagory} postdate={new Date(post.post_date.seconds * 1000).toLocaleDateString("en-IN")}
                            />

                           
                    </div>
                })
            }
        </div>
     );
}
 
export default Posts;
