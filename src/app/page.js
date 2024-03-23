import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react"
import Main from "@/components/Main";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import Link from 'next/link'
export default function Home() {
  return (
    <main>
        <div className="p-5 mt-1 flex justify-between">
            <a href="#">
                <h1 className='pl-5 text-2xl font-bold tracking-tight'>solidServe</h1>
            </a>
            <Button className='new-transaction'>
                <Link href='/login'>
                    Login
                </Link>

            </Button>

        </div>
    </main>
  );
}
