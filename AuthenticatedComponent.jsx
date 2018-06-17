import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../redux/actions/actions';
//import { browserHistory } from 'react-router'

export function requireAuthentication(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount() {
            // this.checkAuth();
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth();
        }

        checkAuth() {
            if (!this.props.isAuthenticated) {
                const redirectAfterLogin = this.props.location.pathname;
                this.props.dispatch(Actions.isAuthenticated(redirectAfterLogin));
                //this.context.router.push('/login');
            }
        }

        render() {
            return (
                <div>
                    {this.props.user && this.props.isAuthenticated === true
                        ? <Component {...this.props}/>
                        : null
                    }
                </div>
            )

        }
    }

    AuthenticatedComponent.contextTypes = {
      router: React.PropTypes.object
    }
    const mapStateToProps = (state) => ({
        user: state.user,
        isAuthenticated:state.isAuthenticated
    });

    return connect(mapStateToProps)(AuthenticatedComponent);
}
