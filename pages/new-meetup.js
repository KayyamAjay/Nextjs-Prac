import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewmeetUpPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewmeetUpPage;
