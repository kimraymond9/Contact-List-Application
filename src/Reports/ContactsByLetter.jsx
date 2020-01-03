import React from "react";
import { Bar } from 'react-chartjs-2';

import "../App.css";
import COLORS from "../colors.js";

import fromEntries from 'fromentries';

const ContactsByLetter = (props) => {

  const letterFrequenciesName =
    fromEntries([...Array(26).keys()].map(i =>
    [String.fromCharCode(65 + i), 0])); //creating an object containing every letter of the alphabet.

  const letterFrequenciesEmail =
    fromEntries([...Array(26).keys()].map(i =>
    [String.fromCharCode(65 + i), 0]));
      
  props.data.forEach(contact => {
    letterFrequenciesName[contact.name[0]] += 1;
    letterFrequenciesEmail[contact.email[0]] += 1;
  })

  const contactData = {
    labels: Object.keys(letterFrequenciesName),
    datasets: [
      {
        label:"Contacts",
        backgroundColor: COLORS.PRIMARY_COLOR,
        borderWidth: 1,
        hoverBackgroundColor: COLORS.PRIMARY_COLOR,
        hoverBorderColor: COLORS.PRIMARY_COLOR,
        data: Object.values(letterFrequenciesName),
      },
      {
        label: "Email",
        backgroundColor: COLORS.SECONDARY_COLOR,
        borderWidth: 1,
        hoverBackgroundColor: COLORS.SECONDARY_COLOR,
        hoverBorderColor: COLORS.SECONDARY_COLOR,
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