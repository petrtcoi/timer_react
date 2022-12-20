import React from 'react'

type HomePageProps = {}

const HomePage: React.FC<HomePageProps> = (_props) => {
  return(
    <div>
      <div>Страница аукциона: "/auctions/:auctionID"</div>
      <div><a href="/_inspect" target="_blank">Инспекция всех аукционов</a></div>
      <div style={{marginTop: "100px"}}>
        Удалить акцион: DELETE запрос "https://45.12.18.61/auction/:auctionID"
      </div>
    </div>
    
  )
}

export default HomePage