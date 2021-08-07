import MeetupList from "../components/meetups/MeetupList"

import { useState, useEffect } from "react"

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  
  useEffect(() => {
    setIsLoading(true);
    const base_url = 'https://react-getting-started-40b30-default-rtdb.firebaseio.com'
    fetch(`${base_url}/meetups.json`).then(response => {
      return response.json()
    }).then((data) => {
      const meetups = []

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }

        meetups.push(meetup)
      }
      console.log(meetups);
      setIsLoading(false);
      setLoadedMeetups(meetups);
    })
  }, [])



  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  } else {
    return <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>;
  }
}

export default AllMeetupsPage;