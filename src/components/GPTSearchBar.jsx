import React from 'react'
import lang from '../utils/languageConstant';
import { useSelector } from 'react-redux';
const GPTSearchBar = () => {
    const langKey = useSelector((store)=> store.config.lang)
    return (
        <div className="pt-[20%] rounded-lg flex justify-center items-center">
            <form className="w-1/2 bg-black grid grid-cols-12 rounded-lg">
                <input type="text" placeholder={lang[langKey].gptSearchPlaceholder} className='p-4 m-4 bg-amber-50 col-span-9 rounded-lg' />
                <button className='py-4 px-4 m-4 bg-red-500 text-white rounded-lg hover:cursor-pointer col-span-3'>{lang[langKey].search}</button>
            </form>
    </div>
    )
}
export default GPTSearchBar;
