import api from "@utils/api"
import {fetcher} from "@utils/helper"
import useSWR from "swr"

export const useOffer = (props:any) => {
    const { data, error } = useSWR( props.url, fetcher, { refreshInterval: 1000 } )
    return {
      data,
      loading: !error && !data,
      error
    }
}
