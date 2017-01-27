import React, { Component } from 'react';

import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ReposList from './ReposList';
import CircularProgress from 'material-ui/CircularProgress';

import { getUserRepos } from '../actions/repos';

@connect((store) => {
    return {
        repos: store.repos
    }
})

class Home extends Component {

    getUserRepos() {
        this.props.dispatch(getUserRepos(this.searchInput.input.value));
    }

    getErrorMessage(err) {
        if (!err || !err.status) { return null; }
        switch (err.status) {
            case 404:
                return 'repository ' + err.message;
            case 'NO_REPOS':
                return err.message;
            default:
                return (err.message) ? err.message : 'unexpected error';
        }
    }

    render() {


        const errorMessage = this.getErrorMessage(this.props.repos.error);

        return (
            <div>
                <div className="search-box">
                    <TextField
                        defaultValue=""
                        floatingLabelText="Enter GitHub account"
                        ref={ (input) => {this.searchInput = input} }
                    />
                    <RaisedButton
                        label="Fetch"
                        secondary={true}
                        style={ { margin: 12 } }
                        onClick={this.getUserRepos.bind(this)}
                    />
                </div>

                { this.props.repos.fetching &&
                <div className="message-box">
                    <CircularProgress />
                </div>
                }

                { !this.props.repos.fetching && this.props.repos.error ? (
                        <div className="message-box">Sorry, {errorMessage}
                        </div>
                    ) : (
                        <ReposList repos={this.props.repos}></ReposList>
                    )
                }

            </div>

        );
    }
}

export default Home;
