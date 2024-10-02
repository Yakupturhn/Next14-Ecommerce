import React from 'react'

interface ShopDetailPageProps{
    params:{
        slug:string
    }
}

const ShopDetailPage = ({params}:ShopDetailPageProps) => {
  return (
    <div>
      ShopPage
      {params.slug}
    
    </div>
  )
}

export default ShopDetailPage
