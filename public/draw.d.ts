declare type JAppDrawType = "point" | "polygon" | "line_string"
declare type JAppDrawMode = "draw" | "select" | "delete"
declare interface JAppDrawStyle {
  fillColor?: string
  fillOpacity?: number
  lineColor?: string
  lineOpacity?: number
  lineWidth?: number
}
