// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {initial: 0, head: 0, tail: 0, total: 0}

  //   clickingthebutton = () => {
  //     this.setState({initial: Math.floor(Math.random() * 2)})
  //   }

  clickingthebutton = () => {
    const randomNumber = Math.floor(Math.random() * 2)
    console.log(`random no ${randomNumber}`)
    if (randomNumber === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        head: prevState.head + 1,
      }))

      this.setState({initial: 0})
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tail: prevState.tail + 1,
      }))
      this.setState({initial: 1})
    }
  }

  render() {
    const {initial, total, head, tail} = this.state
    console.log(`total :${total}`)
    console.log(`head : ${head}`)
    console.log(`tail: ${tail}`)
    console.log(`initial:${initial}`)
    return (
      <div className="bg_container">
        <div className="card_container">
          <h1 className="main_heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <div>
            {initial === 0 ? (
              <img
                className="image_1"
                src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
                alt="toss result"
              />
            ) : (
              <img
                className="image_1"
                src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
                alt="toss result"
              />
            )}
          </div>
          <div>
            <button
              onClick={this.clickingthebutton}
              className="button"
              type="button"
            >
              Toss Coin
            </button>
          </div>
          <div className="result_container">
            <p className="different_result">Total:{total}</p>
            <p className="different_result">Heads:{head}</p>
            <p className="different_result">Tails:{tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
