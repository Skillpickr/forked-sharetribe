// import the library
import { library, config } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fas, faCircleQuestion, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { fab } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false
library.add(
  fas,
  fab,
  faCircleQuestion,
  faMagnifyingGlass
  // more icons go here
)
