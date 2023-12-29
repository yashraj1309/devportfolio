import CSSCERTI from '../resources/CSS Certificate Hacker Rank.png';
import UDEMYWEB from '../resources/udemyCss.jpg';
import AMCAT from '../resources/amcat.png';
export default function Certificates() {
  return (
    <>
      {/* <!-- Certificates --> */}
      <div class="certificate" id='certificates'>
        <h1>Certificates</h1>
        <div>
          <img
            src={CSSCERTI}
            alt="HackerrankCss"
            height="240vh"
            width="auto"
            data-aos={"fade-right"}
          />
          <img
            src={UDEMYWEB}
            alt="UdemyResposiveWeb"
            height="250vh"
            width="auto"
            data-aos={"fade-left"}
          />
        </div>
        <div>
          <img
            src={AMCAT}
            alt="My Amcat Report"
            height="250vh"
            width="auto"
            data-aos={"fade-left"}
          />
          <div class="amcat">
            <a
              href="https://drive.google.com/file/d/1G7mlrjOQmc_ovSOQR50mytnGNUZuT6Ih/view?usp=sharing"
              title="My Amacat Report"
              target="_blank"
            >
              View Full Amcat Report
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
