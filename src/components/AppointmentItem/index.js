// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {itemDetails, getStarId} = props
  const {title, date, id, isStar} = itemDetails

  const getStar = () => {
    getStarId(id)
  }

  const getUrl = isStar
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="list-con">
      <div className="item-con1">
        <p className="list-p1">{title}</p>
        <button
          type="button"
          data-testid="star"
          className="star-btn"
          onClick={getStar}
        >
          <img className="star-img" alt="star" src={getUrl} />
        </button>
      </div>
      <p>Date: {date} </p>
    </li>
  )
}

export default AppointmentItem
