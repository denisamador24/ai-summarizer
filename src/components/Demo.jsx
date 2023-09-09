import { useState, useEffect } from 'react';
import { copy, linkIcon, loader, tick } from '../assets';
import { useLazyGetSummaryQuery } from '../services/article';

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: ''
  });

  const [getSummary, status] = useLazyGetSummaryQuery();

  const handleSumit = async (e) => {
    e.preventDefault();


    const { data } = await getSummary({ articleUrl: article.url });
    console.log(data);
    if (data?.summary) {
      const newArticle = {
        ...article,
        summary: data.summary
      }

      setArticle(newArticle);
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

      <DisplayResult
        summary={article.summary}
        status={status}
      />
    </section>
  )
}

function DisplayResult(status, summary) {
  let show = <p>...</p>
  console.log(JSON.stringify(status));

  if (status.status.isFetching) {
    show = <img width={40} height={20} src={loader} alt="loader" />
  }

  if (status.isError) {
    show = (
      <p className='font-inter font-bold text-black text-center'>
        Well, something was wrong
        <br />
        <span>
          {/* {error.data.error} */}
        </span>
      </p>
    )

  }

  if (summary !== '') {
    show = (
      <div className='flex flex-col gap-3'>
        <h2 className='font-poppins font-bold text-gray-600 text-xl'>
          Article
          <span className='blue_gradient'>
            Summary
          </span>
        </h2>
        <div className='summary_box'>
          <p className=''>
            {status.summary}
          </p>
        </div>
      </div>
    )
  }


  return (
    <div className='my-10 max-w-full flex justify-cente items-center'>
      {show}
    </div>
  )
}

export default Demo