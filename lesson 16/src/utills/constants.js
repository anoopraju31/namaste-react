export const LOGO_IMG =
	'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
export const LOGIN_BG =
	'https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg'
export const USER_AVATAR =
	'https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e'
export const API_OPTIONS = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_API_KEY,
	},
}

export const TMDB_MOVIE_VIDEO_API = (movieId) =>
	`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`
export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w500'

export const YOUTUBE_VIDEO_URL = (videoKey) =>
	`https://www.youtube.com/embed/${videoKey}?&autoplay=1&mute=1&loop=1&controls=0&rel=0&showinfo=0&disablekb=1`
export const YOUTUBE_FEATURES =
	'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'

export const SUPPORTED_LANGUAGES = [
	{
		identifier: 'en',
		name: 'English',
	},
	{
		identifier: 'ml',
		name: 'Malayalam',
	},
	{
		identifier: 'hi',
		name: 'Hindi',
	},
	{
		identifier: 'es',
		name: 'Spanish',
	},
]

export const GET_GPT_QUERY = (searchText) =>
	'Act as a Movie Recommendation System and suggest some movies for the query : ' +
	searchText +
	'. only give me names of 5 movies, coma seperated like the example given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya'
