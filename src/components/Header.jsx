import { useRouter } from 'next/router';
import Button from './Button';

export default function Header() {
  const router = useRouter();
  return (
    <div className="flex w-full justify-between">
      <h1 className="text-3xl font-semibold">TasteMaster</h1>
      <Button onClick={() => router.push('/add')}>Add new survival cooking</Button>

    </div>
  );
}
