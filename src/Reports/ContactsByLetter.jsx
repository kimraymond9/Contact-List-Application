import React from "react";
import { Bar } from 'react-chartjs-2';
import "../App.css";

const ContactsByLetter = (props) => {

  const letterFrequencies =
    Object.fromEntries([...Array(26).keys()].map(i =>
    [String.fromCharCode(65 + i), 0]));

  if(!props.data){
    return null;
  }else{
      props.data.map(contact => {
        return letterFrequencies[contact.name[0]] += 1
      })
    }

    const contactData = {
      labels: Object.keys(letterFrequencies),
      datasets: [
        {
          label:"Contacts",
          backgroundColor: '#F50057',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: Object.values(letterFrequencies),
        }
      ]
    };

    const contactDataOptions = {
      title: {
        display: true,
        text: 'Number of Contacts by Letter',
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Letter'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Frequency'
          }
        }]
      },
    }

    return (
      <div className="graph">
        <Bar data={contactData} options={contactDataOptions}/>
      </div>
    )
  }



export default ContactsByLetter;