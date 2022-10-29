import React from 'react'
import t1 from '../DNK/t1.png'
import t2 from '../DNK/t2.png'
import t3 from '../DNK/t3.png'
import t4 from '../DNK/t4.png'
import t5 from '../DNK/t5.png'
import t6 from '../DNK/t6.png'
function Members() {
  return (
    <div>
        <section className='members-bg'>
            <div className='for-members'>    
            <img src={t1} alt="t1" />
            <h3>Harvey Spector</h3>
            <a>Founder - CEO</a>
            </div>

            <div className='for-members'>    
            <img src={t2} alt="t1" />
            <h3>Jessica Pearson</h3>
            <a>COO</a>
            </div>

            <div className='for-members'>    
            <img src={t3} alt="t1" />
            <h3>Rachel Zain</h3>
            <a>Marketing Head</a>
            </div>

            <div className='for-members'>    
            <img src={t4} alt="t1" />
            <h3>Luise Litt</h3>
            <a>Founder - CEO</a>
            </div>

            <div className='for-members'>    
            <img src={t5} alt="t1" />
            <h3>Katrina Bennett</h3>
            <a>Intern Designer</a>
            </div>

            <div className='for-members'>    
            <img src={t6} alt="t1" />
            <h3>Mike Ross</h3>
            <a>Intern Designer</a>
            </div>
        </section>
    </div>
  )
}

export default Members