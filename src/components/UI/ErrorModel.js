import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModel.module.css";

const ErrorModel = (props) => {
  return (
      
          <div className={classes.backdrop} >
    <Card className={classes.modal}>
      <header className={classes.header}>{props.title}</header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick = {props.onConfirm}>Okay</Button>
      </footer>
    </Card>
    </div>
    
  );
};

export default ErrorModel;
