import { GlobalProvider } from "@ladle/react"
import React from "react"

import "../src/index.css"
import "./local.css"

export const Provider: GlobalProvider = ({ children }) => (
  <div className="ladle-layout">{children}</div>
)
