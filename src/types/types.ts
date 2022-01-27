export interface ClientOptions {
  method?: string
  payload?: object | Array<any>
  headers?: object
}

export interface Coords {
  latitude: number | null
  longitude: number | null
}

export type Client = (
  endpoint: string,
  options?: ClientOptions,
) => Promise<any[]>

export type Scale = 'c' | 'f'
