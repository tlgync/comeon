import Lottie from 'react-lottie';
import * as animationData from '../assets/slotanimation.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export const Loader = () => (

  <div style={{
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#eee',
    zIndex: 99,
  }}
  >
    <Lottie
      options={defaultOptions}
      height={200}
      width={200}
    />
  </div>

);
