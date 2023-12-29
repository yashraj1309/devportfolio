import profilePhoto from '../resources/yashraj.jpg'
export default function Main() {
  return (
    <>
      {/* Main Container of Profile and About me */}
      <div className="main-container">
        <img
          src={profilePhoto}
          alt="profile photo"
          srcset=""
          width="400vh"
          height="400vh"
          style={{borderRadius: "100vh"}}
          data-aos={"fade-right"}
        />
        <div
        data-aos={"fade-left"}
        >
          <h1>
            I'm Yashraj Dudhatra<span style={{ color: '#5F99FF' }}>.</span> <br /> A
            Software-Developer{" "}
            <span style={{color: 'hsla(0, 0%, 100%, 0.5)'}}>based in India.</span>
          </h1>
          <p>
            I'm probably the most passionate Software-Developer you will ever
            get to work with. If you have a great project that needs some
            amazing skills, I'm your guy.
          </p>
        </div>
      </div>
    </>
  );
}
