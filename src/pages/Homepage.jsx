import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import Footer from '../components/footer'

const Homepage = () => {

    const [value, setValue] = useState('')
    const [valueQRCode, setValueQRCode] = useState('')
    const [showQRCode, setShowQRCode] = useState(false)

    const handleGenerate = (e) => {
        e.preventDefault()

        setValueQRCode(value)
        setShowQRCode(true)
    }

    return (
        <>
            <div className='min-h-screen md:flex'>
                <header className='w-full md:w-1/2 h-56 flex items-center justify-center md:flex-col md:h-screen'>
                    <h1 className='font-bold text-4xl'>QRCode <br /> <span className='font-normal'>Generator</span></h1>

                    <div className={`hidden md:block p-14 ${showQRCode ? 'opacity-100 h-fit' : 'opacity-0 h-0'} duration-[2s]`}>
                        <div className='p-7 bg-white rounded-md'>
                            <QRCode value={valueQRCode} className='w-full' />
                        </div>
                    </div>
                </header>
                <main className='w-full md:w-1/2 md:h-screen md:flex md:items-center md:justify-center'>
                    <form onSubmit={handleGenerate} action="#" className='flex flex-col gap-4 px-14 justify-center md:w-full md:max-w-lg md:bg-slate-900 md:py-14 md:rounded-xl'>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="value">Value QRCode</label>
                            <input type="text" name='value' id='value' onChange={(e) => setValue(e.target.value)} value={value} className='rounded-full px-2 py-1 outline outline-1 outline-stone-500 duration-300 focus:outline-2 focus:outline-blue-400 dark:bg-slate-900 focus:bg-slate-700 placeholder:text-slate-700' />
                        </div>

                        <button className='bg-slate-800 drop-shadow-md duration-300 hover:opacity-70 py-2 rounded-full'>Generate</button>

                        <p className='hidden md:block'>You can generate link with type <b>https://yourlink.com</b> on value QRCode</p>
                    </form>
                    {showQRCode &&
                        <div className='p-14 md:hidden'>
                            <div className='p-7 bg-white rounded-md'>
                                <QRCode value={valueQRCode} className='w-full' />
                            </div>
                        </div>}
                </main>
            </div>


            <Footer />
        </>
    )
}

export default Homepage