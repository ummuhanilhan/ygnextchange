export type ErrorResponse = {
    title: string
    content: string
 }

export function isErrorResponse(
error: ErrorResponse | string | undefined
): error is ErrorResponse {
    return (error as ErrorResponse)?.title !== undefined
}

export type ErrorResult = {
    error: ErrorResponse | string
}

export type ThunkConfig = { rejectValue: ErrorResult }


 
 
 export enum LoadingState {
    IDLE = 'idle',
    LOADING = 'loading',
    LOADED = 'loaded',
    ERROR = 'error',
}
  
export type LoadingProps = {
    loading?: LoadingState
    error?: ErrorResponse | string | unknown
    message?: string
}

export type SignState = {
    email: string
    password: string
    name?: string
    first?: string
    last?: string
}

export type PersistedSign = SignState & {
    id: string
}

export type UserState = {
    email: string
    name: string
    first?: string
    last?: string
    slug?: string
    bio?: string
    password?: string
    date?: string
}

export type JwtState = {
    accessToken: string
    refreshToken: string
}

export type PersistedUser = UserState & {
    _id?: string
}

export type AuthState = {
    user: UserState
}
  
export type AuthProps = {
    user:Object
    session:Boolean
    isAuth:Boolean | undefined
} & LoadingProps




export type CargoState = {
    user: object;
    date:Date;
} | {}

export type CargoProps = {
    cargo?:CargoState|undefined
    filter?:any
    cargoes:CargoState[] | [] |undefined
} & LoadingProps




export type ProjectState = {
    user: string;
    title: string;
    slug: string;
    type?: string;
    text?: string;
    desc?: string;
    date:Date;
} | {}

export type ProjectProps = {
    project?:ProjectState
    projects:ProjectState[] | []
} & LoadingProps
