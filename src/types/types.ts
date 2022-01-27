export interface ClientOptions {
  method?: string
  payload?: object | Array<any> | undefined
  headers?: object
}

export interface Coords {
  latitude: number | null
  longitude: number | null
}
