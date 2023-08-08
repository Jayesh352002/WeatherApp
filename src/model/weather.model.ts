export interface Root {
  success: boolean
  data: Data
}

export interface Data {
  city: string
  current_weather: string
  temp: string
  expected_temp: string
  insight_heading: string
  insight_description: string
  wind: string
  humidity: string
  visibility: string
  uv_index: string
  aqi: string
  aqi_remark: string
  aqi_description: string
  last_update: string
  bg_image: string
}
