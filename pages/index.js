import MeetupList from "../components/meetups/MeetupList";
const Dummy = [
  {
    id: "1",
    title: "First Meet",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "someaddress",
    description: "My first meetup",
  },
];
const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};
export async function getStaticProps() {
  return {
    props: {
      meetups: Dummy,
    },
    revalidate: 10,
  };
}

export default HomePage;
