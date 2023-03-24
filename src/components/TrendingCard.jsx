import { Link } from 'react-router-dom';
import banner from './banner.png'
import './trendingCard.css'

const TrendingCard = ({no}) => {
    return ( 
        <Link to={`/post/1`}>
        <div className="card">
           <div className="number">
            <h1>{no}</h1>
           </div>

           <div className='content'>
           <div className="author">
           <div className="author_img">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80b" alt="" />
            </div>
            <div className="author_name">
                <h3>Tom cooper</h3>
            </div>
           </div>
            <div className="trending_title">
                <h3>Ukraine War, 9 March 2023: Next Russian Air Strike</h3>
            </div>

            <div className="details">
                <p>Mar 9</p>
                <p style={{marginLeft:"10px"}}>4 min read</p>
            </div>
           </div>
        </div>
        </Link>
     );
}
 
export default TrendingCard;