import { IAccessibilityDefinition, FocusZoneMode } from '../../interfaces'
import { FocusZoneDirection } from '../../FocusZone'

const BasicMenuBehavior: IAccessibilityDefinition = {
  attributes: {
    root: {
      role: 'menu',
    },
  },

  focusZone: {
    mode: FocusZoneMode.Wrap,
    props: {
      onActiveElementChanged: (element, ev) => {
        console.warn('MENU BEHAVIOR', 'on active element changed', 'element', element, 'ev', ev)
      },
      direction: FocusZoneDirection.horizontal,
      isCircularNavigation: true,
    },
  },
}

export default BasicMenuBehavior
