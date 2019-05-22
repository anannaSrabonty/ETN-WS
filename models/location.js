'use strict';

exports.getSuggestion = async query => {
  return [
    {
      AddressID: null,
      AddressType: 1,
      Building_Name: '',
      CategoryID: '27',
      Dependent_Locality: 'Glasgow',
      FA: 'Glasgow SECC Conference Centre (G3 8YW)',
      Latitude: 55.8607181267,
      Longitude: -4.2906048162,
      Organisation_Name: '',
      Post_Town: 'Glasgow',
      Postcode: 'G3 8YW',
      Text: '',
      TextTo: '',
      Thoroughfare: 'Exhibition Way',
      poiAttributes: {}
    },
    {
      AddressID: null,
      AddressType: 1,
      Building_Name: '',
      CategoryID: '11',
      Dependent_Locality: 'Kent',
      FA: 'Dover ferry port (CT16 1JA)',
      Latitude: 51.128307,
      Longitude: 1.33317,
      Organisation_Name: '',
      Post_Town: 'Dover',
      Postcode: 'CT16 1JA',
      Text: '',
      TextTo: '',
      Thoroughfare: 'Eastern Docks',
      poiAttributes: {}
    },
    {
      AddressID: '586',
      Building_Name: '',
      Building_Number: '160',
      Department_Name: '',
      Dependent_Locality: '',
      Dependent_Thoroughfare: '',
      FA: 'Fergus & Glover, 160, Union Street, ABERDEEN, AB10 1QT',
      Organisation_Name: 'Fergus & Glover',
      Post_Town: 'ABERDEEN',
      Postcode: 'AB10 1QT',
      PostcodeNoSpace: 'AB101QT',
      Sub_Building_Name: '',
      Thoroughfare: 'Union Street'
    }
  ];
};
