import { createGlobalStyle } from 'styled-components'

// import the library
import { library, config, dom } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fas, faCircleQuestion, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { fab } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false
export const GlobalStyles = createGlobalStyle`
    ${dom.css()}
`
library.add(
  fas,
  fab,
  faCircleQuestion,
  faMagnifyingGlass
  // more icons go here
)
