import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";

import { Loading } from './LoadingComponent';

function RenderDish({ dish }) {
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg src={dish.image} alt={dish.name}></CardImg>
        <CardBody>
          <CardTitle>
            <b>{dish.name}</b>
          </CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
function RenderComments({ comments, addComment, dishId }) {
  if (comments != null) {
    return (
      <div className="col-md-5 m-1 p-4">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  --{comment.author} ,{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            );
          })}
        </ul>
        <hr />
        <CommentForm dishId={dishId} addComment={addComment} />
      </div>
    );
  }
}
const DishDetail = (props) => {
  if (props.isLoading) {
    return(
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  else if (props.errMess) {
    return(
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  }
  else if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>      
            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>      
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr/>
          </div>
        </div>
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.comments} 
          addComment={props.addComment}
          dishId={props.dish.id}
          />                    
        </div>
        <hr />
      </div>
    );
  }
};

export default DishDetail;
