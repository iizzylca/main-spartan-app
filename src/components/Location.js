import React from 'react'

const Location = () => {
    return (
        <section className='info-container' >
            <div className='map-wrap'>
                <iframe title='maps' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12106.054070563583!2d-73.6987432!3d40.662653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6f4b1004481602ae!2sSpartan&#39;s%20Grill!5e0!3m2!1sen!2sus!4v1612831362795!5m2!1sen!2sus" width='550' height='350' frameBorder='0' style={{border:1}} allowFullScreen='' aria-hidden="false" tabIndex="0"></iframe>            
            </div>
            <div className='info-wrap'>
                <h1>Questions?</h1>
                <p>Information: (516) 206-3000</p>
                <p>Email: spartansgrill@gmail.com</p>
                <br></br>
                <h1>Come On In</h1>
                <p>Address: 123 Rockaway Ave, Valley Stream, NY 11580</p>
                <p>Telephone: (516) 206-3000 </p>
                <p>Hours: Monday/Saturday 10am-10pm | Sunday 10am-4pm</p>
            </div>
        </section>
    )
}

export default Location
