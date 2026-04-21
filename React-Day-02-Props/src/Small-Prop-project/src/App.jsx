import React from 'react';
import './index.css';
import {Bookmark} from 'lucide-react';
import Jobcard from './components/Jobcard';

function App() {
  return (
    <div className="parent">
<Jobcard 
  logo="https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png"
  company="Google"
  postedAt="2 days ago"
  title="Frontend Developer"
  tags={["Full-Time", "Mid Level"]}
  salary="$100/hr"
  location="Bangalore, India"
/>

<Jobcard 
  logo="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
  company="Netflix"
  postedAt="1 week ago"
  title="Product Designer"
  tags={["Remote", "Senior Level"]}
  salary="$130/hr"
  location="Remote"
/>

<Jobcard 
  logo="https://upload.wikimedia.org/wikipedia/commons/6/6e/Meta_Platforms_Inc._logo.svg"
  company="Meta"
  postedAt="3 days ago"
  title="UI Engineer"
  tags={["Full-Time", "Junior Level"]}
  salary="$90/hr"
  location="Hyderabad, India"
/>

<Jobcard 
  logo="https://upload.wikimedia.org/wikipedia/commons/a/a9/Apple_logo_black.svg"
  company="Apple"
  postedAt="4 days ago"
  title="UX Researcher"
  tags={["Contract", "Senior Level"]}
  salary="$150/hr"
  location="Delhi, India"
/>

<Jobcard 
  logo="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_logo.svg"
  company="Microsoft"
  postedAt="6 days ago"
  title="Interaction Designer"
  tags={["Full-Time", "Mid Level"]}
  salary="$110/hr"
  location="Noida, India"
/>
    </div>
  );
}

export default App;