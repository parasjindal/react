import * as React from 'react'
import { PrototypeSection, ComponentPrototype } from '../Prototypes'
import AsyncDropdownSearch from './AsyncDropdownSearch'
import MentionsWithDropdown from './MentionsWithDropdown'

export default () => (
  <PrototypeSection title="Dropdowns">
    <ComponentPrototype
      title="Async Dropdown Search"
      description="Use the field to perform a simulated search."
    >
      <AsyncDropdownSearch />
    </ComponentPrototype>
    <ComponentPrototype
      title="Editable Area with Dropdown"
      description="Type text into editable area below. Use the '@' key to mention people."
    >
      <MentionsWithDropdown />
    </ComponentPrototype>
  </PrototypeSection>
)
