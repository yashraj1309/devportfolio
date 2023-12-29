export default function ContactForm() {
    return <>
     {/* <!-- Contact Form --> */}
    <div class="contact-form" data-aos="fade-up" id="contact">
        <div>
            <h3>WHATS NEXT</h3>
            <h2>Lets work together<span style={{color: '#689AF8'}}>.</span></h2>
            <p>If you'd like to talk about a project you want help with or need an advice about product design and developement, just drop me a message at <span style={{color: 'white', fontWeight: 'bold'}}>dudhatrayashraj@gmail.com</span> {" "}
                I'm currently Available for any website systems projects, dashboard designs or landing pages.</p>
        </div>
        <form>
            <span>WRITE ME AN EMAIL</span>
            <span>-</span>
            <a href="mailto:dudhatrayashraj@gmail.com" title="click here to write an email">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="3.2vh" style={{fill: 'white', marginTop:'4px'}}><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg>
            </a>
        </form>
    </div>
    </>
}