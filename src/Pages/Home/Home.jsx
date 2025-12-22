// import React from 'react';
// import Banner from './Banner/Banner';
// import Service from './Functionalities/Service';
// import CurrentTuitions from '../../Current Tuitions/CurrentTuitions';

// const Home = () => {
//     return (
//         <div>
//             <Banner></Banner>
//             <section className="my-12">
//   <h2 className="text-3xl font-bold mb-6 text-center grid grid-cols-3">Latest Tuition Posts</h2>
 
//       <CurrentTuitions></CurrentTuitions> 
// </section>
//             </div>
//     );
// };

// export default Home;
import React from 'react';
import Banner from './Banner/Banner';
import CurrentTuitions from '../../Current Tuitions/CurrentTuitions';

const Home = () => {
  return (
    <div>
      <Banner />
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Latest Tuition Posts</h2>
        {/* Pass limit=6 to show only latest 6 tuitions */}
        <CurrentTuitions limit={6} />
      </section>
    </div>
  );
};

export default Home;
