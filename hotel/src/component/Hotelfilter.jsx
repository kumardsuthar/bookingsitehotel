



import React, { useState } from 'react';
import '../css/Hotel.css';
import Hotelfiltercard from './Hotelfiltercard';
import listimg1 from '../media/hotelimg/cardhotel.jpg';

export default function Hotelfilter() {
  const [showFilter, setShowFilter] = useState(false);

  const [showMore, setShowMore] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedPriceOptions, setSelectedPriceOptions] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);

  const hotelTypes = ['All', 'Hotel', 'Aparment', 'Resort', 'Villa', 'Loadge', 'Guest House', 'Cottage', 'Beach Hut', 'Farm House'];
  const Pricerange = ['Free Breakfast Included', 'Pay At Hotel Available', 'Free Cancellation Available'];
  const rating = ['1', '2', '3','4', '5'];
  const Amenities = ['All', 'Air Conditioning', 'Bar', 'Bonfire', 'Business Services', 'Caretaker', 'Dining', 'Free Internet', 'Hair nets', 'Masks'];

  const hotelData = [
    {
      img: listimg1,
      name: 'Courtyard by Marriott New York',
      type: 'Hotel',
      priceTag: 'Free Breakfast Included',
      rating: '3',
      amenities: ['Air Conditioning', 'Bar', 'Free Internet'],
      confirmation: 'Free Cancellation till 7 Jan 2022',
      price: '$370',
      location: '5855 W Century Blvd, Los Angeles - 90045'
    },
    {
      img: listimg1,
      name: 'Urban Stay Resort',
      type: 'Aparment',
      priceTag: 'Free Cancellation Available',
      rating: '2',
      amenities: ['Caretaker', 'Dining'],
      confirmation: 'Pay at Hotel',
      price: '$280',
      location: 'Beachfront, Miami'
    },
    {
      img: listimg1,
      name: 'Urban Stay Resort',
      type: 'Resort',
      priceTag: 'Pay At Hotel Available',
      rating: '2',
      amenities: ['Caretaker', 'Dining'],
      confirmation: 'Pay at Hotel',
      price: '$280',
      location: 'Beachfront, Miami'
    },
    {
      img: listimg1,
      name: 'Urban Stay Resort',
      type: 'Resort',
      priceTag: 'Pay At Hotel Available',
      rating: '2',
      amenities: ['Caretaker', 'Dining'],
      confirmation: 'Pay at Hotel',
      price: '$280',
      location: 'Beachfront, Miami'
    },
    {
      img: listimg1,
      name: 'Urban Stay Resort',
      type: 'Resort',
      priceTag: 'Pay At Hotel Available',
      rating: '2',
      amenities: ['Caretaker', 'Dining'],
      confirmation: 'Pay at Hotel',
      price: '$280',
      location: 'Beachfront, Miami'
    },
    {
      img: listimg1,
      name: 'Urban Stay Resort',
      type: 'Resort',
      priceTag: 'Pay At Hotel Available',
      rating: '2',
      amenities: ['Caretaker', 'Dining'],
      confirmation: 'Pay at Hotel',
      price: '$280',
      location: 'Beachfront, Miami'
    }
  ];

  const handleCheckboxChange = (value, list, setList) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  const handleFilter = (e) => {
    e.preventDefault();

    const results =  hotelData.filter((hotel) => {
      const matchType = selectedTypes.length === 0 || selectedTypes.includes(hotel.type);
      const matchPrice = selectedPriceOptions.length === 0 || selectedPriceOptions.includes(hotel.priceTag);
      const matchRating = selectedRatings.length === 0 || selectedRatings.includes(hotel.rating);
      const matchAmenities = selectedAmenities.length === 0 || selectedAmenities.every((item) => hotel.amenities.includes(item));
      return matchType && matchPrice && matchRating && matchAmenities;
    });

    setFilteredHotels(results);
  };

  return (
    <div>
      <div className="container d-flex gap-5 mainfilter">
        <div className={`filters ${showFilter ? 'show' : ''}`} style={{ width: "100%" ,}}>
          <h4>Hotel Type</h4>
          <form>
            {(showMore ? hotelTypes : hotelTypes.slice(0, 5)).map((type, index) => (
              <div className="checbox-input" key={index}>
                <input type="checkbox" id={type} onChange={() => handleCheckboxChange(type, selectedTypes, setSelectedTypes)} />
                <span className="mx-2">{type}</span>
              </div>
            ))}
          </form>
          <p className="text-blue-500 mt-2 hover:underline border-none" onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Show Less ▲' : 'Show More ▼'}
          </p>

          <h4>Price range</h4>
          {Pricerange.map((type, index) => (
            <div className="checbox-input" key={index}>
              <input type="checkbox" id={type} onChange={() => handleCheckboxChange(type, selectedPriceOptions, setSelectedPriceOptions)} />
              <span className="mx-2">{type}</span>
            </div>
          ))}

          <h4>Customer Rating</h4>
          {rating.map((rate, index) => (
            <div className="checbox-input" key={index}>
              <input type="checkbox" id={rate} onChange={() => handleCheckboxChange(rate, selectedRatings, setSelectedRatings)} />
              <span className="mx-2">{rate} <i className="fa-solid fa-star"></i></span>
            </div>
          ))}

          <h4>Amenities</h4>
          {Amenities.map((type, index) => (
            <div className="checbox-input" key={index}>
              <input type="checkbox" id={type} onChange={() => handleCheckboxChange(type, selectedAmenities, setSelectedAmenities)} />
              <span className="mx-2">{type}</span>
            </div>
          ))}

          <div className="btns d-flex">
            <button type="reset" onClick={() => {
              setSelectedTypes([]);
              setSelectedPriceOptions([]);
              setSelectedRatings([]);
              setSelectedAmenities([]);
              setFilteredHotels([]);
            }}>Clear All</button>
            <button type="submit" className="mx-2 result" onClick={handleFilter}>Filter Result</button>
          </div>
        </div>

        <div className="filtercard">
          <Hotelfiltercard data={filteredHotels} />
        </div>
      </div>
    </div>
  );
}
