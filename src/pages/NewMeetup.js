import NewMeetupForm from '../components/meetups/NewMeetupForm'
import { useHistory } from 'react-router-dom'

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    const base_url = 'https://react-getting-started-40b30-default-rtdb.firebaseio.com'
    fetch(`${base_url}/meetups.json`,
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'appliction/json'
        }
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return <div>
    <h1>Add New Meetup</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>

  </div>;
 }
 
 export default NewMeetupPage;