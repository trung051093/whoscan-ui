import React from 'react'
import { QUERY_KEYS } from '@/common/constants/query'
import { useQuery } from 'react-query'
import { UserServices } from '@/services/user.services'
import { ResponsePageination, User } from '@/models'

const userServices = new UserServices()

export const useSearchUsers = () => {
    const [page, setPage] = React.useState(0)
    const [limit, setLimit] = React.useState(1000)

    return {
        page,
        setPage,
        limit,
        setLimit,
        ...useQuery<ResponsePageination<User[]>>([QUERY_KEYS.Users, page, limit], () => userServices.searchUser(page + 1, limit))
    }
}