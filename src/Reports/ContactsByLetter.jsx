import React from "react";
import { Bar } from 'react-chartjs-2';

import "../App.css";

const ContactsByLetter = (props) => {

  const letterFrequenciesName =
    Object.fromEntries([...Array(26).keys()].map(i =>
    [String.fromCharCode(65 + i), 0])); //creating an object containing every letter of the alphabet.

  const letterFrequenciesEmail =
    Object.fromEntries([...Array(26).keys()].map(i =>
    [String.fromCharCode(65 + i), 0]));
      
  if(!props.data){
    return null;
  }else{
    props.data.forEach(contact => {
      letterFrequenciesName[contact.name[0]] += 1;
      letterFrequenciesEmail[contact.email[0]] += 1;
    })
  }

  const contactData = {
    labels: Object.keys(letterFrequenciesName),
    datasets: [
      {
        label:"Contacts",
        backgroundColor: '#F50057',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: Object.values(letterFrequenciesName),
      },
      {
        label: "Email",
        backgroundColor: ' #f1c40f ',
        borderWidth: 1,
        hoverBackgroundColor: ' #f1c40f ',
        hoverBorderColor: '#f1c40f ',
        data: Object.values(letterFrequenciesEmail),
      },
    ]
  };

  const contactDataOptions = {
    title: {
      display: true,
      text: 'Number of Contacts and Email by Letter',
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
        labelString: 'Frequency',
        ticks: {
          min: 0,
          stepSize: 1,
        }
      }]
    },
  }

  return (
      <Bar data={contactData} options={contactDataOptions}/>
  )
}



export default ContactsByLetter;