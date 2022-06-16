import { withRouter } from "next/router";
import React from "react";

    const removeUndefined = o =>
  Object.entries(o)
    .filter(([, val]) => val!==undefined)
    .reduce((result, [key, val]) => {
      result[key] = val;
      return result;
    }, {});

const Test = ({ recentPost,trendingPost,router }) => {
    console.log(trendingPost ? trendingPost :recentPost,"trending" )
  const { pathname, query } = router;
  const { a, b } = query;
  const changeQuery = val => e =>
    router.push({
      pathname,
      query: removeUndefined({
        ...query,
        [val]: e.target.checked ? 1 : undefined,
      }),
    });
    return(
        <>
           <pre>
        {JSON.stringify(query)}
      </pre>
      a:
      <input
        type="checkbox"
        value="a"
        checked={a}
        onChange={changeQuery('a')}
      />
      b:
      <input
        type="checkbox"
        value="b"
        checked={b}
        onChange={changeQuery('b')}
      /></>
    )
}


export default withRouter(Test)

export async function getServerSideProps(context) {
    console.log(context.query,"query")
    let {trending,recent} = context.query
    var recentPost = null 
    var trendingPost = null 
    if(recent){
        const data = await fetch(`https://kuritr.herokuapp.com/api/explore/recent-posts`);
        const recentpost = await data.json();
        recentPost = recentpost
    }else if(trending){
        let data = await fetch(`https://kuritr.herokuapp.com/api/trending-posts`);
        const TrendingPost = await data.json();
        trendingPost = TrendingPost
    }

    return recentPost !== null ? { props: { recentPost } } :{ props: { trendingPost } }
  }