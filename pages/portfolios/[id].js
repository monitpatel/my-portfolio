import BaseLayout from '@/components/layouts/baseLayout'
import BasePage from '@/components/basePage'
import {withRouter} from 'next/router'
import axios from 'axios'

const Portfolio = ({portfolio}) => {
    return(
        <BaseLayout>
          <BasePage>
              <h1>This is portfolio page</h1>
              <h1>{portfolio.title}</h1>
              <p>BODY: {portfolio.body}</p>
              <p>ID: {portfolio.id}</p>      
            </BasePage> 
        </BaseLayout>
    )
}

Portfolio.getInitialProps = async ({query}) => {
  let post = {}
  
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
    post = res.data;
  } 
  
  catch(e) {
    console.error(e);
  }

  return { portfolio: post };
}

export default withRouter(Portfolio)