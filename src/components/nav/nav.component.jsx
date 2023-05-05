import './nav.styles.scss'

const Nav = () => {
  return (
    <nav>
      <div className="left">
        <div className="logo">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(90)"
          >
            <g clipPath="url(#clip0_2_17)">
              <path
                d="M68.5667 30.4667L73.3334 35.2333L68.5667 40L56.6668 28.1L28.1001 56.6667L40.0001 68.5667L35.2334 73.3333L30.4668 68.5667L25.7001 73.3333L18.5667 66.2L13.8001 70.9667L9.03341 66.2L13.8001 61.4333L6.66675 54.3L11.4334 49.5333L6.66675 44.7667L11.4334 40L23.3334 51.9L51.9001 23.3333L40.0001 11.4333L44.7668 6.66667L49.5334 11.4333L54.3001 6.66667L61.4334 13.8L66.2001 9.03334L70.9668 13.8L66.2001 18.5667L73.3334 25.7L68.5667 30.4667Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_17">
                <rect
                  width="80"
                  height="80"
                  fill="white"
                  transform="matrix(1 0 0 -1 0 80)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className='rightDumbell'
          >
            <g clipPath="url(#clip0_2_17)">
              <path
                d="M68.5667 30.4667L73.3334 35.2333L68.5667 40L56.6668 28.1L28.1001 56.6667L40.0001 68.5667L35.2334 73.3333L30.4668 68.5667L25.7001 73.3333L18.5667 66.2L13.8001 70.9667L9.03341 66.2L13.8001 61.4333L6.66675 54.3L11.4334 49.5333L6.66675 44.7667L11.4334 40L23.3334 51.9L51.9001 23.3333L40.0001 11.4333L44.7668 6.66667L49.5334 11.4333L54.3001 6.66667L61.4334 13.8L66.2001 9.03334L70.9668 13.8L66.2001 18.5667L73.3334 25.7L68.5667 30.4667Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_17">
                <rect
                  width="80"
                  height="80"
                  fill="white"
                  transform="matrix(1 0 0 -1 0 80)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="title">
            <span className="white">gym</span><span className="orange">power</span>
        </div>
      </div>
      <div className="right">
        <div className="linkWrapper">
          <a href="#" className="link">Home</a>
          <a href="#" className="link">About</a>
          <a href="#" className="link">Team</a>
          <a href="#" className="link">Prices</a>
          <a href="#" className="link">Contact</a>
        </div>
      </div>
    </nav>
  )
}
export default Nav;