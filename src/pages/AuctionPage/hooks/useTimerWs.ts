import React from 'react'

import { MessageType, TimerWsDto } from '../../../types/timerDto.type'

const apiUrl = 'wss://docker.petrtcoi.ru/auction'



export function useTimerWs(auctionId: string, userName: string): number {

  const [seconds, setSeconds] = React.useState<number>(0)

  React.useEffect(() => {
    const ws = new WebSocket(apiUrl)
    ws.onopen = () => {
      ws.send(JSON.stringify({
        auctionId,
        userId: userName,
        type: MessageType.SubscribeAuction
      }))
    }
    ws.onmessage = (event) => {
      const data: TimerWsDto = JSON.parse(event.data)
      if (data.auctionId === auctionId) setSeconds(data.seconds)
    }
  }, [userName])



  return seconds
}

