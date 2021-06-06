import { useInView } from 'react-intersection-observer';

// control when an animation start in framer motion then use useAnimation
import { useAnimation } from 'framer-motion';

export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });
  if (view) {
    controls.start('show');
  } else {
    controls.start('hidden');
  }

  return [element, controls];
};
