import React from 'react'

const EmailFilled = (props) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 612 612">
        <path d="M306.768 346.814h.131c4.615 0 9.176-1.339 12.866-3.777l1.001-.643c.218-.142.446-.271.675-.424l11.658-9.645 278.259-229.624c-.576-.795-1.557-1.339-2.602-1.339H3.233c-.751 0-1.448.272-2.003.729l291.125 239.954c3.669 3.038 8.904 4.769 14.413 4.769zM0 133.899v340.37l208.55-168.471L0 133.899zm403.668 173.042L612 474.356V135.031l-208.332 171.91zm-66.237 54.644c-8.305 6.814-19.168 10.57-30.576 10.57-11.451 0-22.304-3.734-30.587-10.516l-47.765-39.394L0 506.806v.587c0 1.753 1.502 3.244  3.276 3.244h605.491c1.741 0 3.232-1.491 3.232-3.255v-.544L383.693 323.4l-46.262 38.185z" fill={props.color}/>
        </svg>
    )
}

export default EmailFilled
