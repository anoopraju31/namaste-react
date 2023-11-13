import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import GPTSearch from './GPTSearch'

const Browse = () => {
	const showGPTSearch = useSelector((state) => state?.gpt?.showGPTSearch)

	useNowPlayingMovies()
	usePopularMovies()
	useTopRatedMovies()
	useTrendingMovies()

	return (
		<main className='bg-black min-h-screen'>
			<Header />

			{showGPTSearch ? (
				<GPTSearch />
			) : (
				<div className='max-w-[1536px] mx-auto'>
					<MainContainer />
					<SecondaryContainer />
				</div>
			)}
		</main>
	)
}

export default Browse
