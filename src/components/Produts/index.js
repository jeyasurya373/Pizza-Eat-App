import React from 'react';

import {
    ProductsContainer,
    ProductsWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCart,
    Productimg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton

} from "./Productselements";

function Products({ heading, data }) {
    return (
        <>
            <ProductsContainer>
                <ProductsHeading>{heading}</ProductsHeading>
                <ProductsWrapper>
                    {data.map((Product, index) => {
                        return (
                            <ProductCart key={index}>
                                <Productimg src={Product.img} alt={Product.alt} />
                                <ProductInfo>
                                    <ProductTitle>{Product.name}</ProductTitle>
                                    <ProductDesc>{Product.desc}</ProductDesc>
                                    <ProductPrice>{Product.price}</ProductPrice>
                                    <ProductButton>{Product.button}</ProductButton>
                                </ProductInfo>
                            </ProductCart>
                        )


                    })}
                </ProductsWrapper>
            </ProductsContainer>


        </>
    )
}

export default Products
