'use client'

import { useWindowSize } from '../utils/useWindowSize'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'

const ResponsiveNavigation = () => {
  const { width } = useWindowSize()

  if (width === undefined) {
    // Return null or a loading indicator while the width is being determined
    return null
  }

  return width < 768 ? <MobileNavigation /> : <Navigation />
}

export default ResponsiveNavigation