import React from "react";
import { Bar } from 'react-chartjs-2';
import "../App.css";

const TopLevelDomains = (props) => {

  const topLevelDomains = [];
  const topLevelDomainsForEmail = [];
  let domainFrequencies = {};
  let domainFrequenciesForEmail = {};

  if (!props.data) {
    return null;
  } else {
    props.data.forEach(contact => {
      topLevelDomains.push(`.${contact.website.split('.').pop()}`);
      const temp = `.${contact.email.split('@')}`;
      topLevelDomainsForEmail.push(`.${temp.split('.').pop()}`); //getting all top level domains from emails and websites
    })
    
    const uniqueDomains = topLevelDomains.filter(function (elem, index, self) {
      return index === self.indexOf(elem);  //gets all unique top level domains
    })


    const uniqueDomainsForEmail = topLevelDomainsForEmail.filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    })

    // eslint-disable-next-line no-sequences
    domainFrequencies = uniqueDomains.reduce((a, b) => (a[b] = 0, a), {}); //converts array of domains into an object
    // eslint-disable-next-line no-sequences
    domainFrequenciesForEmail = uniqueDomainsForEmail.reduce((a, b) => (a[b] = 0, a), {});
    
    props.data.forEach(contact => {
      domainFrequencies[`.${contact.website.split('.').pop()}`] += 1; //getting counts for each domain
      const temp = `.${contact.email.split('@')}`;
      domainFrequenciesForEmail[`.${temp.split('.').pop()}`] += 1;
    })
  }

  const emailDomain = {
    labels: Object.keys(domainFrequenciesForEmail),
    datasets: [
      {
        label: "Email",
        backgroundColor: '#F50057',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: Object.values(domainFrequenciesForEmail),
      }
    ]
  };

  const websiteDomain = {
    labels: Object.keys(domainFrequencies),
    datasets: [
      {
        label: "Websites",
        backgroundColor: '#f1c40f',
        borderWidth: 1,
        hoverBackgroundColor: '#f1c40f',
        hoverBorderColor: '#f1c40f',
        data: Object.values(domainFrequencies),
      }
    ]
  };

  const emailDomainOptions = {
    title: {
      display: true,
      text: 'Email Top Level Domains',
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Domain'
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

  const websiteDomainOptions = {
    title: {
      display: true,
      text: 'Website Top Level Domains',
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Domain'
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
    <>
      <div className="barGraph">
        <Bar data={emailDomain} options={emailDomainOptions} />
      </div>
      <div className="barGraph">
        <Bar data={websiteDomain} options={websiteDomainOptions} />
      </div>
    </>
  )
}



export default TopLevelDomains;
