import { useQuery } from "@tanstack/react-query"
import { fetchDict } from "../services/services"

export const useFetchDict = (options = {}) => {
    return useQuery({
        queryKey: ["Get dictionary"],
        queryFn: fetchDict,
        ...options,
    })
}