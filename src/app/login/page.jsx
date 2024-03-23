import React from 'react'
import Link from 'next/link'
import {Button} from "@/components/ui/button";
const Login = () => {
    return (
        <div className='flex justify-center align-top place-content-center'>
            <Button className='new-transaction'>
                <Link href='/dashboard'>
                    Sign-in with Google
                </Link>
            </Button>
        </div>
    );
}

export default Login;