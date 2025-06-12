 import {Infinity} from 'ldrs/react' 
 import 'ldrs/react/Infinity.css'

const Loader = () => {
  return (
    <div>
     
      <Infinity
        size="80"
        stroke="8"
        strokeLength="0.15"
        bgOpacity="0.1"
        speed="1.3"
        color="black"
      />
    </div>
  );
};

export default Loader;
