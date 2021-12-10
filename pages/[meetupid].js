import MeetupDetails from "../components/meetups/MeetupDetails";

const MeetDetails = () => {
  return (
    <MeetupDetails
      img="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      title="First Meet"
      address="Some Street 5, Some City"
      description="My first meetup"
    />
  );
};

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupid = context.params.meetupid;

  console.log(meetupid);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        id: meetupid,
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
      },
    },
  };
}
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupid: "1",
        },
      },
    ],
  };
}
export default MeetDetails;
