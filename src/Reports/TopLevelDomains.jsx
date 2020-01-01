import React from "react";
import { Pie } from 'react-chartjs-2';
import "../App.css";

const TopLevelDomains = (props) => {

  const topLevelDomains = [];
  var object = {};

  if (!props.data) {
    return null;
  } else {
    props.data.forEach(contact => {
      topLevelDomains.push(`.${contact.website.split('.').pop()}`);
    })
    const uniqueDomains = topLevelDomains.filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    })
    object = uniqueDomains.reduce((a, b) => (a[b] = 0, a), {});
    props.data.forEach(contact => {
      object[`.${contact.website.split('.').pop()}`] += 1;
    })
  }

  const contactData = {
    labels: Object.keys(object),
    datasets: [
      {
        backgroundColor: [
          '#52D726',
          '#FFEC00',
          '#FF7300', 
          '#FF0000',
          '#007ED6',
          '#7CDDDD',
        ],
        data: Object.values(object),
      },
    ]
  };

  const contactDataOptions = {
    title: {
      display: true,
      text: 'Top Level Domains',
    },
  }

  return (
    <Pie data={contactData} options={contactDataOptions} />
  )
}



export default TopLevelDomains;