import { isConformant } from 'test/specs/commonTests'
import { initKeyboardFocusMock } from 'test/specs/lib/keyboardFocusMock'

import Radio from 'src/components/Radio'

initKeyboardFocusMock()

describe('Radio', () => {
  isConformant(Radio, {
    eventTargets: {
      onChange: 'input',
    },
  })
})
