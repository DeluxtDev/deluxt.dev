import bit from "../assets/images/bit.jpg";

function Sidebar() {
  return (
    <>
      <div className="col-sm-12 col-md-4 sidebar">
        <div className="panel">
          <h5>
            <i className="fa-solid fa-bars mx-1"></i>Menu
          </h5>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
        <div className="panel">
          <h5>
            <i className="fa-solid fa-share-nodes mx-1"></i>Socials
          </h5>
          <ul>
            <li>
              <a href="https://discordapp.com/users/1200252993749143604">
                Discord
              </a>
            </li>
            <li>
              <a href="https://github.com/DeluxtDev">Github</a>
            </li>
          </ul>
        </div>
        <div className="panel">
          <h5>
            <i className="fa-solid fa-web-awesome mx-1"></i>Support Me
          </h5>
          <ul>
            <li>
              <a href="https://buy.stripe.com/5kAaGB4eA4zw2Vq8wB">
                Direct Gift
              </a>
            </li>
          </ul>
        </div>
        <div className="panel">
          <h5>
            <i className="fa-solid fa-cat mx-1"></i>My Cat
          </h5>
          <img className="img" src={bit} />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
