export interface ClientOptions {
  method?: string
  payload?: object | Array<any>
  headers?: object
}

export interface Coords {
  latitude: number | null
  longitude: number | null
}
