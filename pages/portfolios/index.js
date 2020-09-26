import BaseLayout from '@/components/layouts/baseLayout'
import BasePage from '@/components/basePage'
import Link from 'next/link'
import axios from 'axios'

const Portfolio = ({posts}) => {
    const renderPosts = (posts) => {
        return posts.map(post => <li key = {post.id} style = {{'fontSize': '20px'}}>
            <Link as = {`/portfolios/${post.id}`} href = {`/portfolios/[id]`}>
                <a>
                    {post.title}
                </a>       
            </Link>
        </li> )
    }

    return(
        <BaseLayout>
            <BasePage>
                <h1> This is Portfolio page </h1>
                <ul>
                    {renderPosts(posts)}
                </ul>
            </BasePage>
        </BaseLayout>
    )
}

Portfolio.getInitialProps = async () => {
    let posts = []

    try{
        const res  = await axios.get('https://jsonplaceholder.typicode.com/posts')
        posts = res.data
    } 
    
    catch(e){
        console.error(e)
    }

    return {posts: posts.slice(0, 10)}
}

export default Portfolio;