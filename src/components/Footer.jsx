import { Fragment } from 'react'
import Todos from './Todos'
import Posts from './Posts'
import Comments from './Comments'







function Footer() {

    return (
        <Fragment>
            <h2 className='w-[200px] mx-auto'>Bu Footer</h2>
            <div className="max-w-[500px] mx-auto mt-[200px] mb-[100px] flex gap-[20px]">
                <Todos />
                <Posts />
                <Comments />
            </div>
        </Fragment>
    )
}

export default Footer


