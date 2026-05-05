import { useSelector } from 'react-redux'
import ResultGrid from '../components/ResultGrid'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'


const HomePage = () => {

        const { query } = useSelector((store) => store.search)

        return (
                <main className='min-h-[calc(100vh-88px)]'>
                    {query == '' ? (
                        <section className='flex min-h-[calc(100vh-88px)] items-center justify-center px-4 py-10 sm:px-6 lg:px-8'>
                            <div className='w-full max-w-5xl'>
                                <div className='mx-auto mb-8 max-w-3xl text-center'>
                                    <h1 className='text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl'>Find photos, videos, and GIFs in one sleek search.</h1>
                                    <p className='mt-4 text-base text-slate-300 sm:text-lg'>Search fast, save what you like, and keep your collections organized with a cleaner layout.</p>
                                </div>
                                <SearchBar />
                                <Tabs />
                            </div>
                        </section>
                    ) : (
                        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
                            <Tabs />
                            <ResultGrid />
                        </div>
                    )}
                </main>
        )
}

export default HomePage