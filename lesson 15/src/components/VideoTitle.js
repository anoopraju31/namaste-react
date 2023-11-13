import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const VideoTitle = ({ title, overview }) => {
	return (
		<div className='max-w-[1536px] aspect-video mx-auto pt-[20%] px-20 absolute text-white  bg-gradient-to-r from-black'>
			<h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>
				{' '}
				{title}{' '}
			</h1>
			<p className='py-6 text-base lg:text-lg bg-green-500 max-w-lg '>
				{' '}
				{overview}{' '}
			</p>
			<div className='flex gap-6'>
				<button className='bg-white text-black py-3 px-8 text-xl font-medium hover:bg-opacity-80 rounded-lg flex items-center gap-2 '>
					<BsFillPlayFill size={24} />
					<span> Play </span>
				</button>
				<button className='bg-gray-500 text-white py-3 px-8 text-xl bg-opacity-50 rounded-lg flex items-center gap-2'>
					<AiOutlineInfoCircle size={20} />
					<span> More Info </span>
				</button>
			</div>
		</div>
	)
}

export default VideoTitle
