import ListingItem from "../components/ListingItem";
import { Link ,useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Home = () => {
  const navigate = useNavigate();
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  useEffect(() => {
    const fetchListings = async (type, limit = 4, whom = 'both') => {
      try {
        let url;
        if (type === 'offer') {
          url = `/api/listing/get?offer=true&limit=${limit}&whom=${whom}`;
        } else {
          url = `/api/listing/get?type=${type}&limit=${limit}&whom=${whom}`;
        }
       
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Failed to fetch listings: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        
        return data || [];
      } catch (error) {
        console.error(`Error fetching ${type} listings for ${whom}:`, error);
        return [];
      }
    };
  
    const fetchAllListings = async () => {
      try {
        const whomCategories = ['girls', 'boys', 'both'];
        let allOfferListings = [];
        let allRentListings = [];
        let allSaleListings = [];
    
        for (const whom of whomCategories) {
          const offerListings = await fetchListings('offer', 4, whom);
          allOfferListings = [...allOfferListings, ...offerListings];
          const rentListings = await fetchListings('rent', 4, whom);

          allRentListings = [...allRentListings, ...rentListings];
    
          
          const saleListings = await fetchListings('sale', 4, whom);
          
          allSaleListings = [...allSaleListings, ...saleListings];
        }
    
       
        setOfferListings(allOfferListings);
    
        
        setRentListings(allRentListings);
    
        
        setSaleListings(allSaleListings);
      } catch (error) {
        console.error('Error fetching all listings:', error);
      }
    };
  
    fetchAllListings();
  }, []);

  return (
    <div>
      {/* Top section */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          Find your next <span className='text-slate-500'>perfect</span>
          <br />
          place with ease
        </h1>
        <div className='text-gray-400 text-xs sm:text-sm'>
          PgFinder is the best place to find your next perfect place to live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link to='/search' className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'>
          Let's get started...
        </Link>
      </div>

      {offerListings.length > 0 && (
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {offerListings.flatMap((listing) =>
            listing.imageUrls.map((url, index) => (
              <SwiperSlide key={`${listing._id}-${index}`}>
                <div 
                 
                  className="cursor-pointer h-[500px]"
                >
                  <img 
                    src={url} 
                    onClick={() => navigate(`/listing/${listing._id}`)}
                    alt={listing.name} 
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      )}

      {/* Listing results for offer, rent, and sale */}
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {/* Rent Listings */}
        {rentListings && rentListings.length > 0 && (
          <div>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>
                Show more places for rent
              </Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {/* Pg Listings */}
        {saleListings && saleListings.length > 0 && (
          <div>
          <div className='my-3'>
            <h2 className='text-2xl font-semibold text-slate-600'>Recent places for PG</h2>
            <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>
              Show more places for PG
            </Link>
          </div>
          <div className='flex flex-wrap gap-4'>
            {saleListings.map((listing) => (
              <ListingItem listing={listing} key={listing._id} />
            ))}
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default Home;
