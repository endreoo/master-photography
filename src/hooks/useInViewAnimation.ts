import { useInView } from 'react-intersection-observer';

export function useInViewAnimation(threshold = 0.1) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold
  });

  return { ref, inView };
}