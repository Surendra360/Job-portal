import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'

const Navbar = () => {
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-20'>
                <div className='text-3xl font-bold'>
                    <h1 className='text-blue-400'>Job <span className='text-orange-600'>Portal </span></h1>
                </div>
                <div className='flex items-center gap-12'>
                    <ul className='flex gap-5 items-center font-medium'>
                        {/* <li><Link>Home</Link></li>
                            <li><Link>Jobs</Link></li>
                            <li><Link>Browse</Link></li> */}
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Browse</li>

                    </ul>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Avatar className='cursor-pointer'>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent className='w-80 p-2 border rounded shadow-md mt-5 mr-2'>
                            <div>
                                <div className='flex items-center gap-2'>
                                    <Avatar className='cursor-pointer'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    </Avatar>
                                    <div>
                                        <h1 className='font-medium text-lg'>Surendra Kumar</h1>
                                        <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col text-gray-600 py-5 items-start'>
                                <Button variant="link">Profile</Button>
                                <Button variant="link">Logout</Button>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>

        </div>
    )
}

export default Navbar