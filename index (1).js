// import './index.css'

// const countryAndCapitalsList = [
//   {
//     id: 'NEW_DELHI',
//     capitalDisplayText: 'New Delhi',
//     country: 'India',
//   },
//   {
//     id: 'LONDON',
//     capitalDisplayText: 'London',
//     country: 'United Kingdom',
//   },
//   {
//     id: 'PARIS',
//     capitalDisplayText: 'Paris',
//     country: 'France',
//   },
//   {
//     id: 'KATHMANDU',
//     capitalDisplayText: 'Kathmandu',
//     country: 'Nepal',
//   },
//   {
//     id: 'HELSINKI',
//     capitalDisplayText: 'Helsinki',
//     country: 'Finland',
//   },
// ]

// // Write your code here

// const Capitals = () => (
//   state = {country: countryAndCapitalsList[0].country}
//   <div className="bg-container">
//     <div className="card-container">
//       <h1 className="heading">Countries and Capitals</h1>
//       <div className="select-container">
//         <select id="capitals" name="capitals" className="select-box">
//           {countryAndCapitalsList.map(eachItem => (
//             <option
//               key={eachItem.id}
//               value={eachItem.capitalDisplayText.toLowerCase()}
//             >
//               {eachItem.capitalDisplayText}
//             </option>
//           ))}
//         </select>
//         <label htmlFor="capitals" className="label-item">
//           is Capital of which country
//         </label>
//       </div>
//     </div>
//   </div>
// )

// export default Capitals

import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    selectedCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({selectedCapitalId: event.target.value})
  }

  getCountry = () => {
    const {selectedCapitalId} = this.state
    const selectedCapital = countryAndCapitalsList.find(
      each => each.id === selectedCapitalId,
    )
    return selectedCapital.country
  }

  render() {
    const {selectedCapitalId} = this.state
    const country = this.getCountry()

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="select-container">
            <select
              id="capitals"
              className="select-box"
              value={selectedCapitalId}
              onChange={this.onChangeCapital}
            >
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="capitals" className="label-item">
              is Capital of which country
            </label>
          </div>
          <p className="label-item">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
