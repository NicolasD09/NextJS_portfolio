import Home from '@/components/pages/Home';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nicolas DURPOIX',
}
export default async function IndexPage() {
  return (
    <Home/>
  )
}
