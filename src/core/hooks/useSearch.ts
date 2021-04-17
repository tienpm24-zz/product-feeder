import { useRef, useState } from 'react'
import { useAsyncAbortable } from 'react-async-hook'
import AwesomeDebouncePromise from 'awesome-debounce-promise'

type SearchAsyncFunction = (text: string, abortSignal?: AbortSignal) => Promise<any[]>

export const useSearch = (callApi: SearchAsyncFunction) => {
  const [inputText, setInputText] = useState('')

  const debouncedSearch = useRef<typeof callApi>(
    AwesomeDebouncePromise(callApi, 300)
  )

  const search = useAsyncAbortable(
    async (abortSignal, text) => {
      if (text.length < 2) {
        return []
      }
      else {
        return debouncedSearch.current(text, abortSignal)
      }
    },
    [inputText]
  )

  return {
    inputText,
    setInputText,
    search,
  }
}