import BaseLayout from '@/components/layouts/baseLayout'
import BasePage from '@/components/basePage'
import Link from 'next/link'
import {useGetPosts} from '@/actions'

const Portfolio = () => {
    
    const {data, error, loading} = useGetPosts()

    const renderPosts = (posts) => {
        return posts.map(post => 
            <li key = {post.id} style = {{'fontSize': '20px'}}>
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
                {
                    loading &&
                    <p>Loading...</p>
                }
                {
                    data &&
                    <ul>
                        {renderPosts(data)}
                    </ul>
                }
                {
                    error &&
                    <div className = "alert alert-danger">{error.message}</div>
                }
                
            </BasePage>
        </BaseLayout>
    )
}

export default Portfolio;