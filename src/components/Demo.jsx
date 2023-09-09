import { useState, useEffect } from 'react';
import { copy, linkIcon, loader, tick } from '../assets';
import { useLazyGetSummaryQuery } from '../services/article';

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: ''
  });

  const [getSummary, { eror, isFeching }] = useLazyGetSummaryQuery();

  const handleSumit = async (e) => {
    e.preventDefault();
    alert('jj')

    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = {
        ...article,
        summary: data.summary
      }

      setArticle(newArticle);

      console.log(newArticle)
    }
  }

  return (
    <section className='mt-16 w-full'>

      {/* search */}
      <div className='w-full'>
        <form
          className="url_input"
          onSubmit={handleSumit}
        >
          <img
            width={20}
            src={linkIcon}
            alt="link icon"
            className=''
          />
          <input
            type="url"
            value={article.url}
            placeholder='Enter a URL'
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className='peer h-8 flex-1 outline-none'
          />
          <button
            type='submit'
            className='summit_btn peer-focus:border-gray-700'
          >
            ⏎
          </button>
        </form>
      </div>
    </section>
  )
}

export default Demo