import TrendingCard from "./TrendingCard";
import './trending.css'
import { MdTrendingUp } from 'react-icons/md'

const Trending = () => {
    return ( 
        <div className="trending_box">
            <div className="trending">
                <div className="logo1">
                    <MdTrendingUp style={{fontSize:"18px"}} />
                </div>
                <h3>Trending on Medium</h3>
            </div>

           <div className="boxes">
           <TrendingCard no="01" />
            <TrendingCard no="02" />
            <TrendingCard no="03" />
            <TrendingCard no="04" />
            <TrendingCard no="05" />
            <TrendingCard no="06" />
           </div>
        </div>
     );
}
 
export default Trending;