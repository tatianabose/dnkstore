import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function FollowUs() {
    return (
        <div>
            <section className='follow-us'>
                <div className='followus-bg-color'>
                    <div className='follow-us-bg-color'>
                        <div className='followus-items'>
                        <hr />
                        <h4>Follow Us</h4>
                        <ul>
                        <li>< FacebookRoundedIcon style={{ fontSize: "20px" }} /></li>
                        <li><InstagramIcon style={{ fontSize: "20px" }} /></li>
                        <li>< FavoriteBorderIcon style={{ fontSize: "20px" }} /></li>
                        <li>< YouTubeIcon style={{ fontSize: "20px" }} /></li>
                        <li> <TwitterIcon style={{ fontSize: "20px" }} /></li>
                        </ul>

                        </div>
                       
                    </div>

                </div>

            </section>
        </div>
    )
}

export default FollowUs