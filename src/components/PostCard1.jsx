import "./postcard1.css";

const PostCard1 = ({authorname, authorimg, postcatagory, postcontent, postread, posttitle, postdate}) => {
    return ( 
        <div className="postcard">

       <div className="side">
        <div className="top">
            <h3>elon musk</h3>
        </div>

        <div className="content">
            <h1>The art of quitting lessons from my Ph.D. journey</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellat error harum dolores fugit quisquam, officia voluptates quaerat, necessitatibus distinctio nesciunt, quis corporis blanditiis perspiciatis sit at deleniti commodi provident.</p>
            <h4>footer</h4>
        </div>
       </div>

        <div className="postimg">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQug4f3E1Qxp_RI0eLEm_Ih8EByVE2bDxD9-g&usqp=CAU" alt="" />
        </div>

    </div>
    );
}
 
export default PostCard1;