import Image from 'next/image';
import PrimaryButton from '../app/components/buttons/PrimaryButton';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
} from "@/components/ui/carousel"

// import { Link } from 'lucide-react';
import Link from 'next/link'
import { ArrowRight } from 'lucide-react';

export default function Home() {
    return (
        <>
            < div className='font-sans overflow-x-hidden' >

                {/* Header */}
                <header className="flex flex-wrap justify-between items-center px-6 py-3 mx-4" >
                    <div className="text-2xl font-bold text-MintGreen">banquee.</div>

                    <div className='md:hidden lg:hidden'>
                        <Sheet >
                            <SheetTrigger><i className="fa-solid fa-bars-staggered text-MintGreen"></i></SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle className='text-2xl font-bold text-MintGreen my-6'>banquee. <br></br></SheetTitle>
                                    <SheetDescription className="flex flex-col font-medium">

                                        <Link href="#" className="text-gray-600 hover:text-gray-900 bg-MutedGray rounded px-4 py-2 bg-opacity-40 my-3">Home</Link>
                                        <Link href="#" className="text-gray-600 hover:text-gray-900 my-3">Features</Link>
                                        <Link href="#" className="text-gray-600 hover:text-gray-900 my-3">Compare</Link>
                                        <Link href="#" className="text-gray-600 hover:text-gray-900 my-3">Support</Link>
                                        <Link href="#" className="text-gray-600 hover:text-gray-900 my-3">Blog</Link>

                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <nav className="hidden items-center md:flex space-x-8 font-medium">
                        <Link href="#" className="text-gray-600 hover:text-gray-900 bg-MutedGray rounded px-4 py-2 bg-opacity-40">Home</Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-900">Features</Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-900">Compare</Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-900">Support</Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-900">Blog</Link>
                    </nav>

                    <div className="hidden md:flex mt-4 md:mt-0 ">
                        <button className="ml-4 px-4 py-2 text-MintGreen hover:text-Charcoal transition duration-300 ease-in-out">Login</button>
                        <PrimaryButton text='Open Account' />
                    </div>
                </header>

                {/* Hero Section */}
                < section className="flex flex-col-reverse md:flex-row justify-between items-center p-6 my-10 mx-12" >

                    {/* small device image */}
                    <div className="w-60 md:hidden md:w-72 h-2/4 mt-14" >
                        <Image
                            src="/assets/herocards.png"
                            alt="credit card"
                            width={500}
                            height={500}
                        />
                    </div>
                    {/* ------------------ */}


                    <div className="max-w-lg ">
                        <h1 className="text-5xl md:text-6xl font-semibold text-Charcoal leading-tight">Banking<br />starts here.</h1>
                        <p className="text-lg font-medium text-Charcoal my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque expedita odio neque voluptate? Itaque amet
                        </p>

                        <ul className='mt-6 mb-6 grid grid-cols-1 md:grid-cols-2'>
                            <li className='font-medium'><i className="fa-solid fa-check bg-PaleGreen text-MintGreen text-sm p-2 mr-4 my-3 rounded-full"></i>Instant Transfer</li>
                            <li className='font-medium'><i className="fa-solid fa-check bg-PaleGreen text-MintGreen text-sm p-2 mr-4 my-3 rounded-full"></i>Payment worldwide</li>
                            <li className='font-medium'><i className="fa-solid fa-check bg-PaleGreen text-MintGreen text-sm p-2 mr-4 my-3 rounded-full"></i>Saving accounts</li>
                            <li className='font-medium'><i className="fa-solid fa-check bg-PaleGreen text-MintGreen text-sm p-2 mr-4 my-3 rounded-full"></i>100% mobile banking</li>
                        </ul>

                        <div className=' hidden md:flex md:justify-start  py-2'>

                            <button className="mt-4 md:mt-0 px-4 py-2 mx-4 bg-MintGreen text-white rounded border-2 border-transparent hover:bg-transparent hover:text-MintGreen hover:border-MintGreen transition duration-300 ease-in-out">Get Started</button>

                            <button className="mt-4 md:mt-0 px-3 py-2 bg-transparent text-MintGreen rounded border-2 border-transparent hover:bg-transparent hover:text-MintGreen hover:border-MintGreen transition duration-300 ease-in-out">Compare Cards <i className="fa-solid fa-arrow-right"></i></button>
                        </div>

                        <div className='md:hidden flex flex-col py-2'>

                            <button className="mt-4 md:mt-0 px-4 py-2 mx-4 bg-MintGreen text-white rounded border-2 border-transparent hover:bg-transparent hover:text-MintGreen hover:border-MintGreen transition duration-300 ease-in-out">Get Started</button>

                            <button className="mt-4 md:mt-0 px-3 py-2 bg-transparent text-MintGreen rounded border-2 border-transparent hover:bg-transparent hover:text-MintGreen hover:border-MintGreen transition duration-300 ease-in-out">Compare Cards <i className="fa-solid fa-arrow-right"></i></button>
                        </div>

                    </div>

                    <div className="w-60 hidden md:flex md:w-72 h-2/4 ">
                        <Image
                            src="/assets/herocards.png"
                            alt="credit card"
                            width={500}
                            height={500}
                        />
                    </div>

                </section >

                {/* Feature Section */}
                < section className="py-16 text-Charcoal  p-12 my-10 md:mx-16" >
                    <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-12 lg:space-y-0">

                        <div className="flex-1">
                            <h2 className="text-5xl font-semibold mb-12">
                                One app. <br /> One banking.
                            </h2>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-6">

                                <div className='border-2 rounded-2xl border-MutedGray p-6'>
                                    <i className="fa-solid fa-bolt bg-PaleGreen text-MintGreen text-2xl p-3 rounded-full"></i>
                                    <h2 className='font-bold mt-4 mb-2 leading-tight'>Instant <br></br>transaction</h2>
                                    <p className='text-sm font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                                <div className='border-2 rounded-2xl border-MutedGray p-6'>
                                    <i className="fa-solid fa-vault bg-PaleGreen text-MintGreen text-2xl p-3 rounded-full"></i>
                                    <h2 className='font-bold mt-4 mb-2 leading-tight'>Saving <br></br>accounts</h2>
                                    <p className='text-sm font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                                <div className='border-2 rounded-2xl border-MutedGray p-6'>
                                    <i className="fa-solid fa-mobile-screen-button bg-PaleGreen text-MintGreen text-2xl p-3 rounded-full"></i>
                                    <h2 className='font-bold mt-4 mb-2 leading-tight'>Mobile<br></br>banking</h2>
                                    <p className='text-sm font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                                <div className='border-2 rounded-2xl border-MutedGray p-6'>
                                    <i className="fa-solid fa-chart-line bg-PaleGreen text-MintGreen text-2xl p-3 rounded-full"></i>
                                    <h2 className='font-bold mt-4 mb-2 leading-tight'>Advanced<br></br>statics</h2>
                                    <p className='text-sm font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                                <div className='border-2 rounded-2xl border-MutedGray p-6'>
                                    <i className="fa-regular fa-credit-card bg-PaleGreen text-MintGreen text-2xl p-3 rounded-full"></i>
                                    <h2 className='font-bold mt-4 mb-2 leading-tight'>Virtual<br></br>cards</h2>
                                    <p className='text-sm font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                                <div className='border-2 rounded-2xl border-MutedGray p-6'>
                                    <i className="fa-solid fa-wifi bg-PaleGreen text-MintGreen text-2xl p-3 rounded-full"></i>
                                    <h2 className='font-bold mt-4 mb-2 leading-tight'>Contactless<br></br>payments</h2>
                                    <p className='text-sm font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>

                            </div>
                        </div>

                        <div className="flex-1 flex justify-center ">
                            <Image
                                src="/assets/app.png"
                                alt="Mobile banking app"
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                </ section>

                {/* Transaction Section */}
                <section className='bg-PaleGreen w-full flex flex-col md:flex-row justify-around px-8 pt-12' >
                    <div className='w-full md:w-2/5'>
                        <h2 className='text-4xl font-semibold'>Send & receive <br />money instantly</h2>
                        <p className='my-4 text-sm font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos labore quas iste harum culpa.</p>
                        <ul>
                            <li className='text-sm font-medium'><i className="fa-solid fa-check bg-MintGreen text-white text-xs p-2 mt-2 mr-4 rounded-full "></i>Commodi in saepe</li>
                            <li className='text-sm font-medium'><i className="fa-solid fa-check bg-MintGreen text-white text-xs p-2 mt-2 mr-4 rounded-full"></i>Adipisicing elit</li>
                            <li className='text-sm font-medium'><i className="fa-solid fa-check bg-MintGreen text-white text-xs p-2 mt-2 mr-4 rounded-full"></i>Eligendi fugit quos</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-auto mt-8 md:mt-0 flex justify-center">
                        <Image
                            src="/assets/transactions.png"
                            alt="transactions"
                            width={200}
                            height={200}
                        />
                    </div>
                </section>

                {/* Saving Accounts Section */}
                < section className='my-40 mx-8 lg:mx-16' >
                    <div>
                        <div className='mx-4 lg:mx-10'>
                            <h3 className='text-sm font-semibold'>Saving Accounts</h3>
                            <h2 className='text-3xl lg:text-4xl font-semibold my-6'>
                                Organize your<br />money the right way
                            </h2>
                            <div className='lg:flex justify-between'>
                                <p className='lg:w-2/5 font-medium'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam animi culpa nemo accusamus debitis.
                                </p>

                                <button className="mt-4 lg:mt-0 px-4 py-2 bg-transparent text-MintGreen rounded border-2 border-transparent hover:bg-transparent hover:text-MintGreen hover:border-MintGreen transition duration-300 ease-in-out">
                                    All Features <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center'>
                            <div className='mt-8 text-center'>
                                <Image
                                    src="/assets/laptop.png"
                                    alt="laptop"
                                    width={200}
                                    height={200}
                                    className='mb-4 w-40 h-40 hover:cursor-pointer mx-auto'
                                />
                                <h2 className='font-medium'>New Laptop</h2>
                                <p className='text-Charcoal opacity-60 text-sm font-semibold'>400$</p>
                            </div>

                            <div className='mt-8 text-center'>
                                <Image
                                    src="/assets/bike.png"
                                    alt="bike"
                                    width={200}
                                    height={200}
                                    className='mb-4 w-40 h-40 hover:cursor-pointer mx-auto'
                                />
                                <h2 className='font-medium'>New Bike</h2>
                                <p className='text-Charcoal opacity-60 text-sm font-semibold'>200$</p>
                            </div>

                            <div className='mt-8 text-center'>
                                <Image
                                    src="/assets/holiday.png"
                                    alt="holiday"
                                    width={200}
                                    height={200}
                                    className='mb-4 w-40 h-40 hover:cursor-pointer mx-auto'
                                />
                                <h2 className='font-medium'>Holiday</h2>
                                <p className='text-Charcoal opacity-60 text-sm font-semibold'>14000$</p>
                            </div>

                            <div className='mt-8 text-center'>
                                <Image
                                    src="/assets/camera.png"
                                    alt="camera"
                                    width={200}
                                    height={200}
                                    className='mb-4 w-40 h-40 hover:cursor-pointer mx-auto'
                                />
                                <h2 className='font-medium'>Camera</h2>
                                <p className='text-Charcoal opacity-60 text-sm font-semibold'>100$</p>
                            </div>

                            <div className='mt-8 flex justify-center'>
                                <div className="bg-MutedGray w-40 h-40 rounded-xl flex justify-center items-center">
                                    <i className="fa-solid fa-plus bg-Charcoal text-white rounded-full p-2 hover:bg-white hover:text-black transition duration-300 ease-in-out hover:cursor-pointer"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </ section>

                {/* Notification Section */}
                <section className="my-36 mx-8 lg:mx-20">
                    <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-12 lg:space-y-0">
                        <div className="lg:w-2/4">
                            <h2 className="text-sm font-semibold">Notifications</h2>
                            <h2 className="text-4xl lg:text-5xl font-semibold my-5">Stay notified</h2>
                            <p className="w-full lg:w-2/5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reiciendis beatae ipsam voluptatibus at aperiam hic error eligendi.
                            </p>

                            <ul className="mt-6 mb-6">
                                <li className="flex items-center">
                                    <i className="fa-solid fa-check bg-PaleGreen text-MintGreen text-sm p-2 mr-4 my-2 rounded-full"></i>Instant Transfer
                                </li>
                                <li className="flex items-center">
                                    <i className="fa-solid fa-check bg-PaleGreen text-MintGreen text-sm p-2 mr-4 my-2 rounded-full"></i>Payment worldwide
                                </li>
                                <li className="flex items-center">
                                    <i className="fa-solid fa-check bg-PaleGreen text-MintGreen text-sm p-2 mr-4 my-2 rounded-full"></i>Saving accounts
                                </li>
                            </ul>

                            <button className="px-4 py-2 bg-transparent text-MintGreen rounded border-2 border-transparent hover:bg-transparent hover:text-MintGreen hover:border-MintGreen transition duration-300 ease-in-out">
                                All Features <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>

                        <div className="w-full md:w-3/4 lg:w-1/2">
                            <Image
                                src="/assets/grid.png"
                                alt="laptop"
                                width={500}
                                height={500}
                                className="mb-4 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Integration Section */}
                <section className="my-20 md:w-2/4 px-4 sm:px-6 lg:px-16">
                    {/* Image Grid */}
                    <div className="overflow-hidden w-full">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-start">

                            <div className="bg-MutedGray md:px-3 md:py-6 px-2 py-2 rounded-lg flex justify-center items-center h-12 sm:h-8">
                                <Image src="/assets/integration/Webflow.png" alt="webflow" width={70} height={70} className="object-contain" />
                            </div>

                            <div className="bg-MutedGray md:px-3 md:py-6 px-2 py-2 rounded-lg flex justify-center items-center h-12 sm:h-8">
                                <Image src="/assets/integration/Shopify.png" alt="shopify" width={70} height={70} className="object-contain" />
                            </div>
                            <div className="bg-MutedGray md:px-3 md:py-6 px-2 py-2 rounded-lg flex justify-center items-center h-12 sm:h-8">
                                <Image src="/assets/integration/Zapier.png" alt="zapier" width={70} height={70} className="object-contain" />
                            </div>
                            <div className="bg-MutedGray md:px-3 md:py-6 px-2 py-2 rounded-lg flex justify-center items-center h-12 sm:h-8">
                                <Image src="/assets/integration/Bitcoin.png" alt="bitcoin" width={70} height={70} className="object-contain" />
                            </div>
                            <div className="bg-MutedGray md:px-3 md:py-6 px-2 py-2 rounded-lg flex justify-center items-center h-12 sm:h-8">
                                <Image src="/assets/integration/PayPal.png" alt="paypal" width={70} height={70} className="object-contain" />
                            </div>
                            <div className="bg-MutedGray md:px-3 md:py-6 px-2 py-2 rounded-lg flex justify-center items-center h-12 sm:h-8">
                                <Image src="/assets/integration/Visa.png" alt="visa" width={70} height={70} className="object-contain" />
                            </div>
                            <div className="bg-MutedGray md:px-3 md:py-6 px-2 py-2 rounded-lg flex justify-center items-center h-12 sm:h-8">
                                <Image src="/assets/integration/Google_Pay.png" alt="google pay" width={70} height={70} className="object-contain" />
                            </div>
                            <div className="bg-MutedGray md:px-3 md:py-6 px-2 py-2 rounded-lg flex justify-center items-center h-12 sm:h-8">
                                <Image src="/assets/integration/Apple_Pay.png" alt="apple pay" width={70} height={70} className="object-contain" />
                            </div>
                            <div className="bg-MutedGray md:px-3 md:py-6 px-2 py-2 rounded-lg flex justify-center items-center h-12 sm:h-8">
                                <Image src="/assets/integration/Amazon_Pay.png" alt="amazon pay" width={70} height={70} className="object-contain" />
                            </div>
                            <div className="bg-MutedGray md:px-3 md:py-6 px-2 py-2 rounded-lg flex justify-center items-center h-12 sm:h-8">
                                <Image src="/assets/integration/Mastercard.png" alt="mastercard" width={70} height={70} className="object-contain" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Content */}
                <section className='my-20 mx-8 lg:mx-16 container flex flex-col  sm:px-6 lg:px-16'>


                    <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center mt-6 space-y-8 lg:space-y-0'>
                        <div className='lg:w-1/2'>
                            <h3 className='text-sm font-semibold'>Tools</h3>
                            <h2 className='text-3xl lg:text-4xl font-semibold'>Seamless<br /> Integration</h2>
                            <p className='my-4 text-sm w-3/4'>
                                Porro accusamus voluptas omnis, veritatis quam incidunt eaque culpa iure rerum id architecto. Beatae modi reprehenderit
                            </p>
                        </div>

                        <div className='lg:w-1/2'>
                            <ul className='space-y-4'>
                                <li className='flex items-center font-medium'><i className="fa-solid fa-check bg-MutedGray text-MintGreen text-sm p-2 mr-4 rounded-full"></i>Commodi in saepe</li>
                                <li className='flex items-center font-medium'><i className="fa-solid fa-check bg-MutedGray text-MintGreen text-sm p-2 mr-4 rounded-full"></i>Adipisicing elit.</li>
                                <li className='flex items-center font-medium'><i className="fa-solid fa-check bg-MutedGray text-MintGreen text-sm p-2 mr-4 rounded-full"></i>Eligendi fugit</li>
                            </ul>
                        </div>
                    </div>

                </section>

                {/* Account Section */}
                <section className='text-center my-20'>
                    <div className='mx-8 lg:mx-16'>
                        <div>
                            <h3 className='text-sm font-semibold'>Account</h3>
                            <h2 className='text-3xl lg:text-5xl font-semibold my-6'>
                                Perfect card<br /> for your needs.
                            </h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br className='hidden md:flex lg:flex' /> Dicta modi alias eius cum rerum perferendis.</p>
                        </div>

                        <div className='flex justify-center my-8'>
                            <Image
                                src="/assets/cards.png"
                                alt="credit card"
                                width={300}
                                height={300}
                            />
                        </div>

                        <div className="flex flex-col lg:flex-row justify-center space-y-2 lg:space-y-0 lg:space-x-4">
                            <button className="px-4 py-3 text-sm mx-1 bg-MintGreen text-white rounded border-2 border-transparent hover:bg-transparent hover:text-MintGreen hover:border-MintGreen transition duration-300 ease-in-out">
                                Open Account
                            </button>
                            <button className="px-4 py-3 mx-1 bg-transparent text-sm rounded text-MintGreen border-2 border-transparent hover:bg-transparent hover:text-MintGreen hover:border-MintGreen transition duration-300 ease-in-out">
                                Compare Cards
                            </button>
                        </div>
                    </div>
                </section>

                {/* Tesimonial Section */}
                <section className='my-20 px-4 lg:mx-16'>
                    <div className='mx-4 lg:mx-28'>
                        <div className='flex flex-col lg:flex-row lg:justify-between'>
                            <div>
                                <h3 className='text-sm font-semibold'>Testimonials</h3>
                                <h2 className='text-3xl lg:text-5xl font-semibold my-6'>People all over the<br /> world use banko.</h2>
                            </div>
                            <div className='flex items-center lg:items-baseline'>
                                <p className='font-semibold'>
                                    <i className="fa-solid fa-star bg-PaleGreen text-MintGreen rounded-full mr-2 p-2"></i>
                                    Rated <span className='text-MintGreen'>4.8/5</span> from over 1000 users
                                </p>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:hidden'>
                            <div className=' gap-4 my-4'>
                                <div className='border-2 rounded-2xl border-MutedGray h-fit p-6 mx-2 my-2'>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>

                                    <h2 className='font-semibold mt-4 mb-2'>Animi maxime reprehenderi repudiandae!</h2>
                                    <p className='text-sm'>Repellat quasi corrupti, tempore necessitatibus autem eius quaerat eaque. Pariatur, quasi! Expedita.</p>

                                    <div className='text-xs font-medium my-4'>
                                        <h3>Cody Fisher</h3>
                                        <p className='text-charcoal opacity-60'>Medical Assistant</p>
                                    </div>
                                </div>
                            </div>

                            <div className=' gap-4 my-4'>
                                <div className='border-2 rounded-2xl border-MutedGray h-fit p-6 mx-2 my-2'>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>

                                    <h2 className='font-semibold mt-4 mb-2'>Animi maxime reprehenderi repudiandae!</h2>
                                    <p className='text-sm'>Repellat quasi corrupti, tempore necessitatibus autem eius quaerat eaque. Pariatur, quasi! Expedita.</p>

                                    <div className='text-xs font-medium my-4'>
                                        <h3>Cody Fisher</h3>
                                        <p className='text-charcoal opacity-60'>Medical Assistant</p>
                                    </div>
                                </div>
                            </div>

                            <div className=' gap-4 my-4'>
                                <div className='border-2 rounded-2xl border-MutedGray h-fit p-6 mx-2 my-2'>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>

                                    <h2 className='font-semibold mt-4 mb-2'>Animi maxime reprehenderi repudiandae!</h2>
                                    <p className='text-sm'>Repellat quasi corrupti, tempore necessitatibus autem eius quaerat eaque. Pariatur, quasi! Expedita.</p>

                                    <div className='text-xs font-medium my-4'>
                                        <h3>Cody Fisher</h3>
                                        <p className='text-charcoal opacity-60'>Medical Assistant</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='hidden md:grid md:grid-cols-3'>
                            <div className=' gap-4 my-2'>
                                <div className='border-2 rounded-2xl border-MutedGray h-fit p-6 mx-2 my-2'>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>

                                    <h2 className='font-semibold mt-4 mb-2'>Animi maxime reprehenderi repudiandae!</h2>
                                    <p className='text-sm'>Repellat quasi corrupti, tempore necessitatibus autem eius quaerat eaque. Pariatur, quasi! Expedita.</p>

                                    <div className='text-xs font-medium my-4'>
                                        <h3>Cody Fisher</h3>
                                        <p className='text-charcoal opacity-60'>Medical Assistant</p>
                                    </div>
                                </div>
                            </div>

                            <div className=' gap-4 my-2'>
                                <div className='border-2 rounded-2xl border-MutedGray h-fit p-6 mx-2 my-2'>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>

                                    <h2 className='font-semibold mt-4 mb-2'>Animi maxime reprehenderi repudiandae!</h2>
                                    <p className='text-sm'>Repellat quasi corrupti, tempore necessitatibus autem eius quaerat eaque. Pariatur, quasi! Expedita.</p>

                                    <div className='text-xs font-medium my-4'>
                                        <h3>Cody Fisher</h3>
                                        <p className='text-charcoal opacity-60'>Medical Assistant</p>
                                    </div>
                                </div>
                            </div>

                            <div className=' gap-4 my-2'>
                                <div className='border-2 rounded-2xl border-MutedGray h-fit p-6 mx-2 my-2'>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>

                                    <h2 className='font-semibold mt-4 mb-2'>Animi maxime reprehenderi repudiandae!</h2>
                                    <p className='text-sm'>Repellat quasi corrupti, tempore necessitatibus autem eius quaerat eaque. Pariatur, quasi! Expedita.</p>

                                    <div className='text-xs font-medium my-4'>
                                        <h3>Cody Fisher</h3>
                                        <p className='text-charcoal opacity-60'>Medical Assistant</p>
                                    </div>
                                </div>
                            </div>

                            <div className=' gap-4 my-2'>
                                <div className='border-2 rounded-2xl border-MutedGray h-fit p-6 mx-2 my-2'>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>

                                    <h2 className='font-semibold mt-4 mb-2'>Animi maxime reprehenderi repudiandae!</h2>
                                    <p className='text-sm'>Repellat quasi corrupti, tempore necessitatibus autem eius quaerat eaque. Pariatur, quasi! Expedita.</p>

                                    <div className='text-xs font-medium my-4'>
                                        <h3>Cody Fisher</h3>
                                        <p className='text-charcoal opacity-60'>Medical Assistant</p>
                                    </div>
                                </div>
                            </div>

                            <div className=' gap-4 my-2'>
                                <div className='border-2 rounded-2xl border-MutedGray h-fit p-6 mx-2 my-2'>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>

                                    <h2 className='font-semibold mt-4 mb-2'>Animi maxime reprehenderi repudiandae!</h2>
                                    <p className='text-sm'>Repellat quasi corrupti, tempore necessitatibus autem eius quaerat eaque. Pariatur, quasi! Expedita.</p>

                                    <div className='text-xs font-medium my-4'>
                                        <h3>Cody Fisher</h3>
                                        <p className='text-charcoal opacity-60'>Medical Assistant</p>
                                    </div>
                                </div>
                            </div>

                            <div className=' gap-4 my-2'>
                                <div className='border-2 rounded-2xl border-MutedGray h-fit p-6 mx-2 my-2'>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>
                                    <i className="fa-solid fa-star text-MintGreen m-1 rounded-full"></i>

                                    <h2 className='font-semibold mt-4 mb-2'>Animi maxime reprehenderi repudiandae!</h2>
                                    <p className='text-sm'>Repellat quasi corrupti, tempore necessitatibus autem eius quaerat eaque. Pariatur, quasi! Expedita.</p>

                                    <div className='text-xs font-medium my-4'>
                                        <h3>Cody Fisher</h3>
                                        <p className='text-charcoal opacity-60'>Medical Assistant</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                {/* CTA Section */}
                < section className='flex justify-center items-center my-16 px-4 md:px-0'>
                    <div className="bg-MintGreen rounded-2xl w-full md:w-10/12 flex flex-col md:flex-row justify-center px-6 pt-10 md:py-0">
                        <div className='w-full md:w-3/5 h-full px-6 md:px-10 py-6 md:py-10'>
                            <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight">One app.<br />One banking.</h1>
                            <p className="text-base text-white my-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque expedita odio neque voluptate? Itaque amet.
                            </p>

                            <ul className='grid grid-cols-1 md:grid-cols-2'>
                                <li className='font-medium text-white'>
                                    <i className="fa-solid fa-check bg-PaleGreen bg-opacity-40 text-white text-sm p-2 mr-4 my-3 rounded-full"></i>Instant Transfer
                                </li>
                                <li className='font-medium text-white'>
                                    <i className="fa-solid fa-check bg-PaleGreen bg-opacity-40 text-white text-sm p-2 mr-4 my-3 rounded-full"></i>Payment worldwide
                                </li>
                                <li className='font-medium text-white'>
                                    <i className="fa-solid fa-check bg-PaleGreen bg-opacity-40 text-white text-sm p-2 mr-4 my-3 rounded-full"></i>Saving accounts
                                </li>
                                <li className='font-medium text-white'>
                                    <i className="fa-solid fa-check bg-PaleGreen bg-opacity-40 text-white text-sm p-2 mr-4 my-3 rounded-full"></i>100% mobile banking
                                </li>
                            </ul>

                            <div className='my-8'>
                                <Image
                                    src="/assets/cta-app.png"
                                    alt="credit card"
                                    width={200}
                                    height={200}
                                    className="w-full md:w-48 h-auto"
                                />
                            </div>
                        </div>

                        <div className='flex justify-center align-baseline md:mt-10'>
                            <Image
                                src="/assets/cta-mobile.png"
                                alt="credit card"
                                width={300}
                                height={300}
                                className="w-full md:w-72 h-auto"
                            />
                        </div>
                    </div>
                </ section>;

                {/* FAQ's Section */}
                < section className='my-10 space-y-12 mx-6 md:mx-16 md:px-12' >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col space-y-6">
                            <h2 className="text-2xl md:text-3xl font-semibold">Need help?</h2>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-PaleGreen rounded-full">
                                    <i className="fa fa-phone text-MintGreen"></i>
                                </div>
                                <div>
                                    <p className="font-semibold">+49 176 123 456</p>
                                    <p className="text-gray-500">Support Hotline</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-PaleGreen rounded-full">
                                    <i className="fa fa-envelope text-MintGreen"></i>
                                </div>
                                <div>
                                    <p className="font-semibold">help@banque.com</p>
                                    <p className="text-gray-500">Support Email</p>
                                </div>
                            </div>
                            <button className="my-4 px-4 py-2 w-32 bg-transparent text-MintGreen rounded border-2 border-transparent hover:bg-transparent hover:text-MintGreen hover:border-MintGreen transition duration-300 ease-in-out">
                                Support <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>

                        <div>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>How do I open a Banko account?</AccordionTrigger>
                                    <AccordionContent>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nesciunt magni quas molestias libero.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger>How do I order a new card?</AccordionTrigger>
                                    <AccordionContent>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi porro error velit, modi nihil veniam.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                    <AccordionTrigger>How to change my account limits?</AccordionTrigger>
                                    <AccordionContent>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iusto, labore velit aperiam repellendus.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4">
                                    <AccordionTrigger>How does Banko premium work?</AccordionTrigger>
                                    <AccordionContent>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, facilis asperiores suscipit fugiat libero.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-5">
                                    <AccordionTrigger>Can I have two Banko accounts?</AccordionTrigger>
                                    <AccordionContent>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellendus aliquid, corrupti voluptatum.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </ section>;

                {/* Blog Section */}
                <section className='my-16 mx-6 md:mx-10 md:px-12'>
                    <div className='flex justify-between items-center'>
                        <h2 className='font-semibold text-4xl md:text-5xl'>Blog</h2>
                        <button className="my-4 px-4 py-2 w-fit md:w-36 bg-transparent text-MintGreen rounded border-2 border-transparent hover:bg-transparent hover:text-MintGreen hover:border-MintGreen transition duration-300 ease-in-out">
                            All Articles <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>


                    {/* Small Screen Blog */}
                    <div className="relative flex justify-center items-center md:hidden my-16 mx-4">
                        <Carousel className="flex overflow-x-scroll space-x-4 items-center relative">
                            {/* Carousel Content */}
                            <CarouselContent className="flex space-x-4">
                                {/* Blog 1 */}
                                <CarouselItem>
                                    <div className="w-80">
                                        <Image
                                            src="/assets/blog1.png" // First blog image
                                            alt="Blog 1"
                                            width={300}
                                            height={300}
                                            className="object-cover rounded-lg"
                                        />
                                        <h3 className="text-lg font-semibold mt-3">How To Start Using Banko For Your Startup</h3>
                                        <p className="my-3 text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <div className="flex gap-2">
                                            <p className="bg-gray-200 rounded px-2 py-1 text-sm">Product</p>
                                            <p className="bg-gray-200 rounded px-2 py-1 text-sm">Technology</p>
                                        </div>
                                    </div>
                                </CarouselItem>

                                {/* Blog 2 */}
                                <CarouselItem>
                                    <div className="w-80">
                                        <Image
                                            src="/assets/blog2.png" // Second blog image
                                            alt="Blog 2"
                                            width={300}
                                            height={300}
                                            className="object-cover rounded-lg"
                                        />
                                        <h3 className="text-lg font-semibold mt-3">Tips for Growing Your Startup with Banko</h3>
                                        <p className="my-3 text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <div className="flex gap-2">
                                            <p className="bg-gray-200 rounded px-2 py-1 text-sm">Business</p>
                                            <p className="bg-gray-200 rounded px-2 py-1 text-sm">Finance</p>
                                        </div>
                                    </div>
                                </CarouselItem>

                                {/* Blog 3 */}
                                <CarouselItem>
                                    <div className="w-80">
                                        <Image
                                            src="/assets/blog3.png" // Third blog image
                                            alt="Blog 3"
                                            width={300}
                                            height={300}
                                            className="object-cover rounded-lg"
                                        />
                                        <h3 className="text-lg font-semibold mt-3">Best Practices for Financial Planning in Startups</h3>
                                        <p className="my-3 text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <div className="flex gap-2">
                                            <p className="bg-gray-200 rounded px-2 py-1 text-sm">Finance</p>
                                            <p className="bg-gray-200 rounded px-2 py-1 text-sm">Startup</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>


                            {/* Carousel Next Arrow */}
                            <CarouselNext className="absolute right-2 top-1/3 transform -translate-y-1/2 z-10">
                                <button className="bg-PaleGreen text-MintGreen p-2 rounded-full">
                                    <ArrowRight className='' />
                                </button>
                            </CarouselNext>
                        </Carousel>
                    </div>


                    {/* Medium Screen Blog */}
                    <div className='md:flex flex-col md:flex-row justify-between items-start mt-8 gap-6 hidden '>
                        {/* First Blog Section */}
                        <div className='w-full md:max-w-xs'>
                            <Image
                                src="/assets/blog1.png"  // First blog image
                                alt="Blog 1"
                                width={300}
                                height={300}
                                className='my-8 md:w-full md:h-auto object-cover rounded-lg'
                            />
                            <h3 className='text-xl font-semibold'>How To Start Using Banko For Your Startup</h3>
                            <p className='my-3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className='flex gap-2'>
                                <p className='bg-gray-200 rounded px-2 py-1 text-sm'>Product</p>
                                <p className='bg-gray-200 rounded px-2 py-1 text-sm'>Technology</p>
                            </div>
                        </div>

                        {/* Second Blog Section */}
                        <div className='w-full md:max-w-xs'>
                            <Image
                                src="/assets/blog2.png"  // Second blog image
                                alt="Blog 2"
                                width={300}
                                height={300}
                                className='my-8 md:w-full md:h-auto object-cover rounded-lg'
                            />
                            <h3 className='text-xl font-semibold'>Tips for Growing Your Startup with Banko</h3>
                            <p className='my-3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className='flex gap-2'>
                                <p className='bg-gray-200 rounded px-2 py-1 text-sm'>Business</p>
                                <p className='bg-gray-200 rounded px-2 py-1 text-sm'>Finance</p>
                            </div>
                        </div>

                        {/* Third Blog Section */}
                        <div className='w-full md:max-w-xs'>
                            <Image
                                src="/assets/blog3.png"  // Third blog image
                                alt="Blog 3"
                                width={300}
                                height={300}
                                className='my-8 md:w-full md:h-auto object-cover rounded-lg'
                            />
                            <h3 className='text-xl font-semibold'>Best Practices for Financial Planning in Startups</h3>
                            <p className='my-3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className='flex gap-2'>
                                <p className='bg-gray-200 rounded px-2 py-1 text-sm'>Finance</p>
                                <p className='bg-gray-200 rounded px-2 py-1 text-sm'>Startup</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="text-Charcoal py-16 px-6 sm:px-10">
                    <div className="container mx-auto flex flex-col md:flex-row md:flex-wrap justify-between items-start gap-8 md:gap-12">

                        <div className="w-full md:w-auto flex flex-col items-center md:items-start">
                            <div className="text-2xl font-bold text-MintGreen">banquee.</div>
                        </div>

                        {/* Navigation Links */}
                        <div className="w-full sm:w-auto flex flex-col items-center md:items-start">
                            <h4 className="font-semibold text-lg mb-4">About</h4>
                            <ul className="space-y-3 text-gray-500">
                                <li><a href="#" className="hover:text-teal-500">Features</a></li>
                                <li><a href="#" className="hover:text-teal-500">Pricing</a></li>
                                <li><a href="#" className="hover:text-teal-500">Support</a></li>
                            </ul>
                        </div>

                        <div className="w-full sm:w-auto flex flex-col items-center md:items-start">
                            <h4 className="font-semibold text-lg mb-4">Blog</h4>
                            <ul className="space-y-3 text-gray-500">
                                <li><a href="#" className="hover:text-teal-500">Products</a></li>
                                <li><a href="#" className="hover:text-teal-500">Technology</a></li>
                                <li><a href="#" className="hover:text-teal-500">Crypto</a></li>
                            </ul>
                        </div>

                        <div className="w-full sm:w-auto flex flex-col items-center md:items-start">
                            <h4 className="font-semibold text-lg mb-4">Webflow</h4>
                            <ul className="space-y-3 text-gray-500">
                                <li><a href="#" className="hover:text-teal-500">Styleguide</a></li>
                                <li><a href="#" className="hover:text-teal-500">Licensing</a></li>
                                <li><a href="#" className="hover:text-teal-500">Changelog</a></li>
                            </ul>
                        </div>

                        <div className="w-full sm:w-auto flex flex-col items-center md:items-start">
                            <h4 className="font-semibold text-lg mb-4">Social Media</h4>
                            <ul className="space-y-3 text-gray-500">
                                <li><a href="#" className="hover:text-teal-500">Twitter</a></li>
                                <li><a href="#" className="hover:text-teal-500">Facebook</a></li>
                                <li><a href="#" className="hover:text-teal-500">Instagram</a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="container mx-auto mt-12 border-t border-MutedGray pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                        <p className="text-gray-500">&copy; Made by <span className="text-MintGreen">Ayesha Abdul Qadir</span> - Powered by <span className="text-MintGreen">Figma</span></p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-teal-500">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-teal-500">Terms of Service</a>
                        </div>
                    </div>
                </footer>

            </div>
        </>
    );

}
