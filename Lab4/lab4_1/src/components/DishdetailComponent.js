import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {
    
    componentDidMount() {
        console.log("Dishdetail Component componentDidMount invoked!");
    }
    componentDidUpdate() {
        console.log("Dishdetail Component componentDidUpdate invoked!");

    }
    renderDish(dish) {
        return (
            <div  className="col-md-5 m-1">
                <Card>
                    <CardImg src={this.props.dish.image} alt={this.props.dish.name}></CardImg>
                    <CardBody>
                        <CardTitle><b>{this.props.dish.name}</b></CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    renderComments(comments) {
        if (comments != null) {
            return (
                <div  className="col-md-5 m-1 p-4">
                        <h4>Comments</h4>
                        <ul className="list-unstyled" >
                            {comments.map((comment) => {
                                return (
                                    <li key={comment.id}>
                                        <p>{comment.comment}</p>
                                        <p>--{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                    </li>
                                )
                            })}
                        </ul>
                </div>
            )
        }
    }
    render() {
        /*
        let comments = <div></div>;
        if (this.props.dish != null) {
            comments = this.props.dish.comments.map((comment, index) => {
                return (
                    <ul key={index}>
                        <li>{comment.comment}</li>
                        <li> -- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                    </ul>
                )
            })            
        }
        let detail = <div></div>
        if (this.props.dish != null) {
            detail = 
                <Card>
                    <CardImg src={this.props.dish.image} alt={this.props.dish.name}></CardImg>
                    <CardBody>
                        <CardTitle><b>{this.props.dish.name}</b></CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
        }*/
        if (this.props.dish != null)
        return(
            <div className="container">
                <div className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.dish.comments)}             
                </div>
            </div>
        );
    }
}

export default DishDetail;