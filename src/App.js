import './App.css';
import Picture from './jay.JPG';
import { useEffect } from 'react';




function App() {

  useEffect(() => {
    const profilepage = document.querySelectorAll(".accordion");
    console.log(profilepage);
    profilepage.forEach(accordion => {
      accordion.addEventListener("click", () => {
        accordion.classList.toggle("active");
      });
    });
  }, [])



  return (
    <div className="App">
      <img className="image" src={Picture} alt="jay.JPG" />

      <div className="text">
        <h3> Jennifer Lotse </h3>
        <h4>Holy Ghost Encounter Service</h4>
      </div>
      <div className="accordion-container">
        <div className="accordion">

          <div className="question">
            <h3>Bio</h3>

            <svg width="15" height="10" viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="white"
                stroke-width="7"
                stroke-linecap="round"
              />
            </svg>
          </div>

          <div className="answer">
            <table>
              <tr>
                <td> First name</td>
                <td>Jennifer </td>
              </tr>
              <tr>
                <td>Middle name </td>
                <td>Delali</td>
              </tr>
              <tr>
                <td>Last name </td>
                <td>Lotse </td>
              </tr>
              <tr>
                <td>Email Address</td>
                <td>delalilotse@gmail.com </td>
              </tr>
              <tr>
                <td> Date Of Birth</td>
                <td>13 December 2022 </td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>female </td>
              </tr>
              <tr>
                <td>Marital Status</td>
                <td>Single </td>
              </tr>
              <tr>
                <td>Occupation</td>
                <td> Software Developer </td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>+233243156347 </td>
              </tr>
              <tr>
                <td>Whatsapp Number</td>
                <td>+233243156347 </td>
              </tr>

            </table>
          </div>



          <div className="question">
            <h3>History</h3>

            <svg width="15" height="10" viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="white"
                stroke-width="7"
                stroke-linecap="round"
              />
            </svg>
          </div>

          <div className="answer">

            <p>
              Helper at Methodist University <br></br>
              shepherd at Accra Wesley girls kaneshie <br></br>
              Moved to Osu<br></br>
              And later moved to Dome.
            </p>
          </div>


          <div className="question">
            <h3>Church Groups</h3>

            <svg width="15" height="10" viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="white"
                stroke-width="7"
                stroke-linecap="round"
              />
            </svg>
          </div>

          <div className="answer">

            <table>
              <tr>
                <td> Overseeing Pastor</td>
                <td>John-Dag Addy </td>
              </tr>
              <tr>
                <td>fellowship </td>
                <td>My first Love Followship</td>

              </tr>
              <tr>
                <td>Ministry</td>
                <td>Dancing Stars</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
};

export default App;
