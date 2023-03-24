import "./singlePost.css";

const SinglePost = () => {
    return (  
        <div className="singlepost">
            <div className="top">
                <div className="postcont">
                    <div className="authorimg">
                        <img src="https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                    <div>
                        <p>Elon musk</p>
                        <p style={{fontSize:"14px", color:" #85899b"}}>Feb 14 . 8 min read</p>
                    </div>
                </div>

                <div className="share">
                    <div>Twitter</div>
                    <div>Fb</div>
                    <div>Linked In</div>
                </div>
            </div>

            <div className="posttitle">
                <h1>The maze is in the mouse</h1>
            </div>

            <div className="postimg">
                <img src="https://miro.medium.com/v2/resize:fit:828/0*VsJFrT07L6k-lbx9" alt="" />
            </div>

        </div>
    );
}
 
export default SinglePost;