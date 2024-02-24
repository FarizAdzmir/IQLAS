'use client';
import { useState, useEffect } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import Bike from './Bike';

const BikeCategories = ({ bikes }) => {
  const [category, setCategory] = useState('all');
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [price, setPrice] = useState(900);

  useEffect(() => {
    const filtered = bikes.filter((bike) => {
      const categoryMatch =
        category === 'all'
          ? bikes
          : bike.categories.some((categ) => categ.name === category);
      const priceMatch = bike.price <= price;
      return categoryMatch && priceMatch;
    });
    setFilteredBikes(filtered);
  }, [category, price, bikes]);

  return (
    <section className='min-h-[1200px] py-10 bg-primary'>
      <div className='container mx-auto'>
        <div className='flex flex-col'>
          {/* sidebar */}
          <aside className='w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed'>
            <RadioGroup
              defaultValue='all'
              className='flex flex-col gap-6 mb-12'
            >
              <div className='flex items-center space-x-2'>
                <RadioGroupItem
                  value='all'
                  id='all'
                  onClick={() => setCategory('all')}
                />
                <label htmlFor='all' className='text-[#E4E3D6]'>All</label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem
                  value='essential'
                  id='essential'
                  onClick={() => setCategory('essential')}
                />
                <label htmlFor='essential' className='text-[#E4E3D6]'>Essential</label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem
                  value='perfumes'
                  id='perfumes'
                  onClick={() => setCategory('perfumes')}
                />
                <label htmlFor='perfumes' className='text-[#E4E3D6]'>Perfumes</label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem
                  value='food'
                  id='food'
                  onClick={() => setCategory('food')}
                />
                <label htmlFor='food' className='text-[#E4E3D6]'>Food</label>
              </div>
            </RadioGroup>
            {/* price slider */}
            <div className='max-w-56'>
              <div className='text-lg mb-4 font-medium text-[#E4E3D6]'>
                Max Price:{' '}
                <span className='text-accent font-semibold ml-2'>RM{price}</span>
                <span className='ml-2'>
                  (
                  {filteredBikes.length > 1
                    ? `${filteredBikes.length} items`
                    : filteredBikes === 0
                    ? `${filteredBikes.length} items`
                    : `${filteredBikes.length} item`}
                  )
                </span>
              </div>
              <Slider
                defaultValue={[900]}
                max={1000}
                step={1}
                onValueChange={(val) => setPrice(val[0])}
              />
            </div>
          </aside>
          {/* bike list */}
          <div className='w-full xl:w-[1050px] ml-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]'>
              {filteredBikes.map((bike) => {
                return <Bike bike={bike} key={bike.price_id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikeCategories;
