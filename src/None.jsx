import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function None() {

    useEffect(() => {
        document.title = 'Srikanth Reddy | 404 '
    }, [])

    return (
        <>
            <div className="b-page row">
                <div className="column-fs">
                    <h3>Nice Try |  404 Error</h3>
                    <p className="para b-page-para">
                        An Error 404, or "Not Found," is an HTTP standard status code indicating that the browser successfully connected to a server, but the specific requested webpage or file does not exist. This "dead end" occurs when a URL is mistyped.
                    </p>
                    <p className="para b-page-para">
                        Honey, <Link to='/'>Go Back</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default None