import React from "react"
import Article from "./Article"

function ArticleList({ posts }) {
    const postsElems = posts.map(({ id, title, date, preview, minutes })=> {
        return (
        <Article 
        title={ title }
        date={ date }
        preview={ preview }
        minutes={ minutes }
        key={ id }/>
        )
    })

    return (
        <main>
            { postsElems }
        </main>
    )
}

export default ArticleList