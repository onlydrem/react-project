require('normalize.css/normalize.css');

require('styles/Reset.css');

import React from 'react'
import HeadNav from '../components/header/HeadNav'
import FootNav from '../components/footer/FooterNav'
import Job from '../components/container/Job/jobWanted'
import Daily from './container/Daily/Daily'
import Rend from './container/Rend/Rend'
import IndexShow from './container/IndexShow/IndexShow'
import Commition from './container/Commition/Commition'
import Second from './container/Second/Second'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initTab: 'job'
    }
  }
  render() {
    return (
      <div className="index">
        <HeadNav/> {/* <Job  url="https://cnodejs.org/api/v1/topics?page=1&tab=job&limit=40" /> */}
        {/* <Daily url="components/container/Daily/Daily.json"/> */}
        {
          this.state.initTab == 'job'
          ? <Job url="https://cnodejs.org/api/v1/topics?page=1&tab=job&limit=40"/>
          : this.state.initTab == 'daily'
          ? <Daily url="components/container/Daily/Daily.json"/>
          : this.state.initTab=='rend'
          ?<Rend/>
          :this.state.initTab=='indexShow'
          ?<IndexShow/>
          :this.state.initTab=='commition'
          ?<Commition/>
          :this.state.initTab=='second'
          ?<Second/>
          :''
        }
        <FootNav onHandleClick={this.onHandleClick}/>
      </div>
    );
  }
  onHandleClick = (tab) => {
    this.setState({initTab: tab})
  }
}

App.defaultProps = {};

export default App;
