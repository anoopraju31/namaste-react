import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const VideoTitle = ({ title, overview }) => {
	return (
		<div className='w-full aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black'>
			<h1 className='text-6xl font-bold'> {title} </h1>
			<p className='py-6 text-lg w-1/3'> {overview} </p>
			<div className='flex gap-6'>
				<button className='bg-white text-black py-3 px-8 text-xl hover:bg-opacity-80 rounded-lg flex items-center gap-2 '>
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
