import OpenAI from 'openai'

const openai = new OpenAI({
	apiKey: process.env.REACT_APP_OPENAI_API_KEY,
	dangerouslyAllowBrowser: true, //! Only if API is using in a browser environment.
})

export default openai
