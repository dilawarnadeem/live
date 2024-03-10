import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  const redirectToYouTube = () => {
    // Redirect to the YouTube URL
    router.push('https://www.youtube.com/');
  };

  return (
    <div>
      {/* Your other components and content here */}

      {/* Add an element (e.g., a button) that triggers the redirect */}
      <button onClick={redirectToYouTube}>Go to YouTube</button>
    </div>
  );
}