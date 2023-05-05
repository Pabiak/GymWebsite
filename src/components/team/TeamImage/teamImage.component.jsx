import './teamImage.styles.scss'

const TeamImage = ({ name, imgSource }) => {
  return (
    <div className="person">
      <img src={imgSource} alt="Team member" className="personimg" />
      <div className="overlay">
        <p className="personname">{name}</p>
      </div>
    </div>
  )
}

export default TeamImage
