import React from 'react'
import "./Contact.css";

const Contact = () => {
  return (
    <div id='contacts'>
      <div className='contacts'>
        <div className='contact'>
        <div>
          <p className='text-3xl font-semibold'>Contact me</p>
          <p className='text-2xl text-pink-200'>Have a Project in Mind?</p>
          <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur similique laudantium iure. Fugit eveniet, itaque doloremque incidunt vel, voluptatum in fugiat quam, dicta molestias facere eius saepe aliquid sed.</p>
          </div>
          <div className='sm:flex sm:justify-between hidden'>
          <div className=' grid justify-between'>
            <input className='text-2xl border-2 rounded-3xl p-2' type="text" placeholder='Enter your name' />
            <input className='text-2xl border-2 rounded-3xl p-2' type="text" placeholder='Company(Optional)' />
            <input className='text-2xl border-2 rounded-3xl p-2' type="email" placeholder='Enter your Email' />
            <input className='text-2xl border-2 rounded-3xl p-2' type="text" placeholder='Phone Number' />
        </div>
          <div>
          <textarea
            name="note"
            cols="30"
            rows="10"
            placeholder="Tell me about your project"
            className="border-2 rounded-3xl border-pink-200 p-2 text-2xl"
              ></textarea>
              <button className="text-2xl bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >submit</button>
            </div>
            </div>
        </div>
        <div className='footer'>
            <div className='sb-footer-section'>
                <div className='sb-footer-links'>
                    <div className='sb-footer-links-div'>
                      <h1 className='f-h1'> Let's Talk!</h1>
                      <p className='f-p'>Contact Info</p>
                      <ul className='f-li'>
                      <li> <a href="https://www.instagram.com/ifeoluwa.oyeyemi/"><img className='footer-img' src="./src/Images/instagram.png" alt="" /></a></li>
                            <li> <a href="https://www.facebook.com/login.php"> <img className='footer-img' src="./src/Images/facebook.png" alt="" /></a></li>
                            <li><a href="https://github.com/dashboard"> <img className='footer-img' src="./src/Images/github.png" alt="" /></a></li>
                            <li><a href="https://twitter.com/Yourfavoriteife"> <img className='footer-img' src="./src/Images/twitter.png" alt="" /></a></li>
                    </ul>
                    </div>
                    <div className='sb-footer-links-div'>
                <h1 className='f-h1'> What I Do</h1>
              <p>The Studio</p>
              <p>Newsletter</p>
                <p>Sponsoring</p>
                <p>Website development</p>
              </div>
            <div className='sb-footer-links-div'>
              <h1 className='f-h1'>News</h1>
              <p>Hot Stuff</p>
              <p>Perfect Place</p>
              <p>Vintage</p>
              <p>Products</p>
            </div>
            <div className='sb-footer-links-div'>
              <h1 className='f-h1'>Quick Links</h1>
              <p>Style</p>
              <p>Health</p>
              <p>Relationship</p>
              <p>Legal & Privacy</p>
                    </div>
                    <hr />
                    <div className='sb-footer-below'>
                        <div className='sb-footer-copyright'>
                            <p>
                                @{new Date().getFullYear()} CodeInn.All right reserved.
                            </p>
                  <div className='sb-footer-below-links'>
                    <a href="/terms"> <div> <p>Terms & Conditions</p></div></a>
                    <a href="/privacy"> <div> <p>Privacy</p></div></a>
                    <a href="/security"> <div> <p>Security</p></div></a>
                    <a href="/cookie"> <div> <p>Cookie Declaration</p></div></a>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        
      </div>
      </div>       
    </div>
  )
}

export default Contact
