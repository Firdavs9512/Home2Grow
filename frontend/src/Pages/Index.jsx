import React from 'react'
import { Star, Send, User, Settings, Layers, PlayCircle } from 'lucide-react'

const Index = () => {
    return (
        <div>
            <div className='w-full grid grid-cols-10 h-screen cursor-default'>
                <div className='col-span-3 border-r-2 border-r-gray-600 p-3'>
                    <div className='mt-8 mx-3'>
                        <h5 className='text-sm text-slate-400 font-semibold mb-3 ml-3'>Support</h5>
                        <ul className='flex flex-col gap-2'>
                            <li className='flex items-center px-4 py-3 gap-2 text-slate-100 cursor-pointer rounded-lg hover:text-slate-50 transition-all hover:bg-slate-400 hover:bg-opacity-20 backdrop-blur-sm'>
                                <Star size={22} className='text-amber-500' />
                                <span className='text-sm font-medium'>Sponsor on Github</span>
                            </li>
                            <li className='flex items-center px-4 py-3 gap-2 text-slate-100 cursor-pointer rounded-lg hover:text-slate-50 transition-all hover:bg-slate-400 hover:bg-opacity-20 backdrop-blur-sm'>
                                <Send size={22} className='text-amber-500' />
                                <span className='text-sm font-medium'>Author Telegram</span>
                            </li>
                        </ul>
                    </div>
                    <div className='mt-6 mx-3'>
                        <h5 className='text-sm text-slate-400 font-semibold mb-3 ml-3'>Services</h5>
                        <ul className='flex flex-col gap-2'>
                            <li className='flex items-center px-4 py-3 gap-2 text-slate-100 cursor-pointer rounded-lg hover:text-slate-50 transition-all hover:bg-slate-400 hover:bg-opacity-20 backdrop-blur-sm'>
                                <PlayCircle size={22} className='text-amber-500' />
                                <span className='text-sm font-medium'>Start Service</span>
                            </li>
                            <li className='flex items-center px-4 py-3 gap-2 text-slate-100 cursor-pointer rounded-lg hover:text-slate-50 transition-all hover:bg-slate-400 hover:bg-opacity-20 backdrop-blur-sm'>
                                <Layers size={22} className='text-amber-500' />
                                <span className='text-sm font-medium'>List Service</span>
                            </li>
                        </ul>
                    </div>
                    <div className='mt-6 mx-3'>
                        <h5 className='text-sm text-slate-400 font-semibold mb-3 ml-3'>Settings</h5>
                        <ul className='flex flex-col gap-2'>
                            <li className='flex items-center px-4 py-3 gap-2 text-slate-100 cursor-pointer rounded-lg hover:text-slate-50 transition-all hover:bg-slate-400 hover:bg-opacity-20 backdrop-blur-sm'>
                                <User size={22} className='text-amber-500' />
                                <span className='text-sm font-medium'>Profile</span>
                            </li>
                            <li className='flex items-center px-4 py-3 gap-2 text-slate-100 cursor-pointer rounded-lg hover:text-slate-50 transition-all hover:bg-slate-400 hover:bg-opacity-20 backdrop-blur-sm'>
                                <Settings size={22} className='text-amber-500' />
                                <span className='text-sm font-medium'>Setting</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-span-7 p-3'>
                    ajsncojn
                </div>
            </div>

        </div>
    )
}

export default Index