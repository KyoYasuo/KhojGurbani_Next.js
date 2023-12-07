import { getArchives } from '@/Lib/archives';
import { redirect } from 'next/navigation';

export default async function Page() {
    const data = await getArchives();
    redirect('/Home');
}