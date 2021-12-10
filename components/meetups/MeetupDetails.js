import classes from "./MeetupDetails.module.css";

const MeetupDetails = (props) => {
  return (
    <section className={classes.details}>
      <img src={props.img} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.address}</p>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetails;
