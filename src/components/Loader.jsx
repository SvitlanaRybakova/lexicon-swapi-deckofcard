import { RingLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 bg-black bg-opacity-50">
      <div className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 transform">
        <RingLoader color={'#eab308'} />
      </div>
    </div>
  );
};

export default Loader;
