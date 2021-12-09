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
const HomePage = () => {
  return <MeetupList meetups={Dummy} />;
};
export default HomePage;
