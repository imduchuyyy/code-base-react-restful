import React, {
  useContext,
  createContext,
  useEffect,
  useCallback,
  useState,
  useRef
} from 'react'

import socket from 'socket.io-client'
import { TOKEN_NAME, URL } from '@environments'

const SocketContext = createContext()

export const useSocket = () => useContext(SocketContext)

function SocketValue() {
  const socketRef = useRef()
  const token = localStorage.getItem(TOKEN_NAME)

  useEffect(() => {
    let isCancelled = false
    const runAsync = async () => {
      try {
        if (!isCancelled) {
          socketRef.current = socket.connect(URL, {
            query: { token }
          })
        }
      } catch (e) {
        if (!isCancelled) {
          throw e
        }
      }
    }
    runAsync()
    return () => {
      isCancelled = true
    }
  }, [])

  const socketOn = useCallback((key = '', callback) => {
    socket.current.on(key, data => callback(data))
  })

  const socketEmit = useCallback((key, data) => {
    socket.current.emit(key, data)
  })

  return {
    socketOn,
    socketEmit
  }
}

export function SocketProvider({ children }) {
  return (
    <SocketContext.Provider value={SocketValue()}>
      {children}
    </SocketContext.Provider>
  )
}
