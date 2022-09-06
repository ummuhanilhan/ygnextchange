
export const View = ({}:any) => {

    return (
        <div className='view rounded-md bg-yukgetir-lightblue ml-[15.5em]'>
            <Heading />
            {Array.from(Array(7)).map((item,i:number)=>(
                <Item item={item} key={`cargo-item-${i}`} />
            ))}
            <SimplePagination />
        </div>
    )
}

const Item = ({}:any) => {

    return (
        <div className="cargo-item bg-white p-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat autem delectus libero obcaecati quasi, eligendi quas dicta id mollitia, sed nobis dolorum, incidunt debitis aliquam amet unde quaerat iste vitae?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat autem delectus libero obcaecati quasi, eligendi quas dicta id mollitia, sed nobis dolorum, incidunt debitis aliquam amet unde quaerat iste vitae?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat autem delectus libero obcaecati quasi, eligendi quas dicta id mollitia, sed nobis dolorum, incidunt debitis aliquam amet unde quaerat iste vitae?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat autem delectus libero obcaecati quasi, eligendi quas dicta id mollitia, sed nobis dolorum, incidunt debitis aliquam amet unde quaerat iste vitae?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat autem delectus libero obcaecati quasi, eligendi quas dicta id mollitia, sed nobis dolorum, incidunt debitis aliquam amet unde quaerat iste vitae?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat autem delectus libero obcaecati quasi, eligendi quas dicta id mollitia, sed nobis dolorum, incidunt debitis aliquam amet unde quaerat iste vitae?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat autem delectus libero obcaecati quasi, eligendi quas dicta id mollitia, sed nobis dolorum, incidunt debitis aliquam amet unde quaerat iste vitae?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat autem delectus libero obcaecati quasi, eligendi quas dicta id mollitia, sed nobis dolorum, incidunt debitis aliquam amet unde quaerat iste vitae?
        </div>
    )
}

export const Heading = () => {

    return (
        <div className='heading'>

        </div>
    )
}

export const SimplePagination = () => {

    return (
        <div className='simple-pagination'>

        </div>
    )
}