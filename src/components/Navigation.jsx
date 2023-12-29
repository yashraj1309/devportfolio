export default function Navigation({ scrollToSection }) {

    function getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        )
    };
    function amountscrolled(){
        var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
        var docheight = getDocHeight()
        var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
        var trackLength = docheight - winheight
        var pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
        let progressBar = document.getElementById("progress-bar");
        if(pctScrolled > 98) {
            progressBar.style.width = 0;
        }
        else {
        progressBar.style.width = pctScrolled+'%';
        }
    }
     
    window.addEventListener("scroll", function(){
        amountscrolled()
    }, false)
    return <>
    {/* Navigation */}
    <div className="progress-bar" id="progress-bar"></div>
    <nav>
        <h1>Yashraj.D</h1>
        <div  onClick={() => scrollToSection('skills')}>Skills</div>
        <div  onClick={() => scrollToSection('experience')}>Experience</div>
        <div  onClick={() => scrollToSection('certificates')}>Certificates</div>
        <div  onClick={() => scrollToSection('contact')}>Contact</div>
    </nav>
    </>
}