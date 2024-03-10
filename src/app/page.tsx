import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the YouTube URL when the component mounts
    router.push('https://www.youtube.com/');
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  // Render nothing or your main content, as the redirection will happen automatically

  return null;
}