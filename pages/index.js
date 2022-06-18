import {withRouter} from "next/router";
import Landingpage from "../components/Landing-Page";

const Home = ({trendingPost, recentPost}) => {

    return (
        <div>
            <Landingpage trendingPost={trendingPost} recentPost={recentPost}/>
        </div>
    );
};

export async function getServerSideProps(context) {
    let {trending, recent} = context?.query
    let recentPost = null
    let trendingPost = null
    if (recent) {
        const data = await fetch(`https://kuritr.herokuapp.com/api/explore/recent-posts`);
        recentPost = await data.json();
    } else if (trending) {
        let data = await fetch(`https://kuritr.herokuapp.com/api/trending-posts`);
        trendingPost = await data.json();
    } else {
        let data = await fetch(`https://kuritr.herokuapp.com/api/trending-posts`);
        trendingPost = await data.json();

    }
console.log( context?.query)
    return recent ? {props: {recentPost}} : {props: {trendingPost}}
}

export default withRouter(Home);
