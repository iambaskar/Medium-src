// import { Link } from "react-router-dom";
// import "./postCard.css"

// const PostCard = ({authorname, authorimg, postcatagory, postcontent, postread, posttitle, postdate}) => {

//     return (  
//         <Link to={`/post/1`}>

// {/* <div className="postcard">

// <div className="side">
//  <div className="top">
//      <h3>elon musk</h3>
//  </div>

//  <div className="content">
//      <h1>The art of quitting — lessons from my Ph.D. journey</h1>
//      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellat error harum dolores fugit quisquam, officia voluptates quaerat, necessitatibus distinctio nesciunt, quis corporis blanditiis perspiciatis sit at deleniti commodi provident.</p>
//      <h4>footer</h4>
//  </div>
// </div>

//  <div className="postimg">
//      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQug4f3E1Qxp_RI0eLEm_Ih8EByVE2bDxD9-g&usqp=CAU" alt="" />
//  </div>

// </div> */}
//         <div className="postcard">
            
//                 <div className="post_top">
//                     <div className="author_profile">
//                         <img src={authorimg} alt="" />
//                     </div>

//                     <div className="author_name">
//                         <h1>{authorname}</h1>
//                 </div>

//                 <div className="content">
//                     <div className="post_head" style={{marginTop:"10px"}}>
//                         <h3>{posttitle}</h3>
//                     </div>

//                     <div className="post_content" style={{marginTop:"10px"}}>
//                         <p>
//                             {(postcontent.slice(0, 150)).concat("", "...")}
//                         </p>
//                     </div>
                
//                     <div className="post_foo" style={{marginTop:"10px"}}>
//                         <div className="post_date">
//                             {postdate}
//                         </div>
//                         <div>.</div>
//                         <div className="post_read">
//                             {postread}
//                         </div>
//                         <div>.</div>
//                         <div className="post_catagory">
//                             {postcatagory}
//                         </div>

//                 </div>
                

//            </div>

            
           

//            </div>
          

//         </div>



//         </Link>
//     );
// }
 
// export default PostCard;

import "./postCard.css"

const PostCard = ({authorname,postimg, authorimg, postcatagory, postcontent, postread, posttitle, postdate}) => {
    return ( 
        <div className="postcard">
            <div className="left">
                <div className="top1">
                    <div className="authorpic">
                        <img src={authorimg} alt="" />
                    </div>
                    <div>{authorname}</div>
                </div>

                <div className="content">
                    <h1>{posttitle}</h1>
                    <h3>
                        {postcontent.slice(0,150).concat("","...")}
                    </h3>
                    <div className="footer">
                        <p>{postdate}</p>
                        <p>{postread}</p>
                        <p>{postcatagory}</p>
                    </div>
                </div>
            </div>

            <div className="right">
                <div className="postimg">
                    <img src={postimg} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default PostCard;