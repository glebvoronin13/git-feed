import React, { Component } from 'react';

import { Card, CardActions, CardHeader } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class ReposList extends Component {

    render() {

        return (
            <ul className="repos-list">
                { this.props.repos.items.map((item, index) =>
                    <li key={index}>
                    <Card>
                        <CardHeader
                            title={item.name}
                            subtitle={item.owner.login}
                            avatar={item.owner.avatar_url}
                        />
                        <CardActions>
                            <RaisedButton
                                href={item.svn_url}
                                target="_blank"
                                label="Github Link"
                                primary={true}
                            />
                        </CardActions>
                    </Card>
                    </li>
                ) }
            </ul>
        );
    }
}

export default ReposList;