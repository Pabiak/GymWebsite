import './Info.styles.scss'

const Info = () => {
  return (
    <div className="infowrapper">
      <div className="flexwrapper">  {/*I kinda needed this, but couldn't came out with better name idea */}
        <div className="info">
          <div className="infotext">
            <span className="white">welcome to&nbsp;</span>
            <span className="orange">gympower</span>
          </div>
          <p className="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aut
            accusamus unde voluptas numquam commodi nihil asperiores molestiae
            assumenda dolor nemo temporibus
          </p>{' '}
          <p className="lorem">
            rem maxime facere sequi voluptatum aperiam delectus voluptates velit
            iure. Obcaecati, enim repellat! Sint non laborum totam? Doloremque
            earum excepturi alias, u saepe enim accusamus
          </p>
          <p className="lorem">
            {' '}
            necessitatibus, quia porro. Eligendi neque explicabo numquam velit
            quidem magni quibusdam officiis modi veniam rerum dolore ratione,
            culpa accusantium 
          </p>
          <button className="readmore">read more</button>
        </div>
        <div className="location">
          <div className="infotext">
            <span className="white">where to find&nbsp;</span>
            <span className="orange">us</span>
          </div>
          <img src="map.png" alt="map with gym location" />
        </div>
      </div>
    </div>
  )
}

export default Info
