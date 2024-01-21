// Write your code here
import {Component} from 'react'
import {v4 as v4uuid} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {appointmentList: [], title: '', date: '', isClass: false}

  onStars = () => {
    const {appointmentList, isClass} = this.state
    this.setState(prevState => ({isClass: !prevState.isClass}))
    if (!isClass === true) {
      const filteredList = appointmentList.filter(each => each.isStar !== false)
      this.setState({appointmentList: filteredList})
      console.log(isClass)
      console.log(appointmentList)
    } else {
      const length = appointmentList
      this.setState({
        appointmentList: length,
      })
      console.log(isClass)
    }
  }

  getStarId = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(each => {
        if (each.id === id) {
          return {...each, isStar: !each.isStar}
        }
        return each
      }),
    }))
  }

  onPrevent = event => {
    event.preventDefault()
    const {title, date} = this.state

    const formatedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

    const newList = {
      id: v4uuid(),
      title,
      date: formatedDate,
      isStar: false,
    }

    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newList],
      title: '',
      date: '',
    }))

    console.log(title)
    console.log(date)
  }

  onTitle = event => {
    this.setState({title: event.target.value})
  }

  onDate = event => {
    this.setState({date: event.target.value})
  }

  render() {
    const {title, date, appointmentList, isClass} = this.state
    const classProp = isClass ? 'bg-star1' : 'star-btn1'

    return (
      <div className="bg-container">
        <div className="con1">
          <div className="container1">
            <form className="form-con1" onSubmit={this.onPrevent}>
              <h1>Add Appointment</h1>
              <label htmlFor="label1" className="app-label1">
                TITLE
              </label>
              <input
                id="label1"
                type="text"
                value={title}
                className="app-input-element"
                placeholder="Title"
                onChange={this.onTitle}
              />
              <label className="app-label1" htmlFor="label2">
                DATE
              </label>
              <input
                id="label2"
                type="date"
                value={date}
                onChange={this.onDate}
                className="app-input-element"
                placeholder="dd/mm/yyyy"
              />
              <button type="submit" className="app-button">
                Add
              </button>
            </form>
            <div>
              <img
                className="app-image1"
                alt="appointments"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              />
            </div>
          </div>
          <hr className="app-hr" />
          <div className="con2">
            <h2 className="app-h2">Appointments</h2>
            <button type="button" onClick={this.onStars} className={classProp}>
              Starred
            </button>
          </div>
          <ul className="ul-con">
            {appointmentList.map(each => (
              <AppointmentItem
                itemDetails={each}
                key={each.id}
                getStarId={this.getStarId}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
