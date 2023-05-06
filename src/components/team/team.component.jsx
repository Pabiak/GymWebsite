import TeamImage from './TeamImage/teamImage.component'

import './team.styles.scss'

const Team = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="text">
          <span className="white">our&nbsp;</span>
          <span className="orange">team</span>
        </div>
        <div className="team">
          <div className="up">
            <TeamImage name={'Jan Grabowski'} imgSource={'member.jpg'} />
            <TeamImage name={'Andrzej Duda'} imgSource={'andrzej.jpg'} />
          </div>
          <div className="down">
            <TeamImage name={'Grażyna Żarko'} imgSource={'grazyna.jpg'} />
            <TeamImage name={'Adam Tomczak'} imgSource={'adam.jpg'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
