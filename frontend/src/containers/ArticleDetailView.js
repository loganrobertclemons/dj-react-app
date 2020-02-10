import React from 'react';
import axios from 'axios';

import { Card } from 'antd';

class ArticleDetail extends React.Component {

    state = {
        articles: {}
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`http://localhost:8000/api/${articleID}`)
            .then(res => {
                this.setState({
                    articles: res.data
                });
            })
    }

    render() {
        return (
            <Card title={this.state.articles.title}>
                <p>{this.state.articles.content}</p>
            </Card>
        )
    }
}

export default ArticleDetail;