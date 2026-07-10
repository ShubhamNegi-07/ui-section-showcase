import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import workImg1 from "./assets/Work img1.jpg";
import workImg2 from "./assets/Work img2.jpg";
import workImg3 from "./assets/Work img3.jpg";
import workImg4 from "./assets/Work img4.jpg";
import workImg5 from "./assets/Work img5.jpg";

const App = () => {

  const users = [
    {
      img: workImg1,
      intro: '',
      tag: 'Satisfied'
    },
    {
      img: workImg2,
      intro: '',
      tag:  'Underserved'
    },
   {
      img: workImg3,
      intro: '',
      tag: 'Underbanked'
    },
    {
      img: workImg4,
      intro: '',
      tag: 'Aesthetic'
    },
    {
      img: workImg5,
      intro: '',
      tag: 'professional'
    }
  ]

  return (
    <div>
      <Section1 users = {users}/>
      <Section2/>
    </div>
  )
}

export default App