import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from '../Navigation'
import LandingPage from '../Landing'
import SignUpPage from '../SignUp'
import SignInPage from '../SignIn'
import PasswordForgetPage from '../PasswordForget'
import HomePage from '../Home'
import AccountPage from '../Account'
import AdminPage from '../Admin'
// import { withFirebase } from '../Firebase'
import * as ROUTES from '../../constants/routes'
// import { AuthUserContext } from '../Session'
import { withAuthentication } from '../Session'

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  // this.state = {
  //   authUser: null,
  // }
  // }

  // componentDidMount() {
  //   this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
  //     authUser ? this.setState({ authUser }) : this.setState({ authUser: null })
  //   })
  // }

  // componentWillUnmount() {
  //   this.listener()
  // }

  render() {
    return (
      // <AuthUserContext.Provider value={this.state.authUser}>
      <Router>
        <div>
          <Navigation />
          <hr />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.PASSWORD_FORGOT} component={PasswordForgetPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        </div>
      </Router>
      // </AuthUserContext.Provider>
    )
  }
}
export default withAuthentication(App)
