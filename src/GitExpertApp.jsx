import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GitExpertApp = () => {

    const [categories, setCategories ] = useState([ 'One Punch'  ])
    
    const onAddCategory = (NewCategory) => {

        if ( categories.includes(NewCategory) ) return

        setCategories([ NewCategory, ...categories ])
        // setCategories(cat => [...cat, 'Valorant'])
    }

    return (
        <>
            <h1>GitExpertApp</h1>
            <AddCategory 
                onNewCategory={ onAddCategory }
            // setCategories={ setCategories }
            />
            {
                categories.map( category =>(
                        <GifGrid key={ category } category={ category }/>
                    )
                )
            }
        </>
    )
}
