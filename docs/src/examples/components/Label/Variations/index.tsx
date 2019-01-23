import * as React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Variations = () => (
  <ExampleSection title="Variations">
    <ComponentExample
      title="Circular"
      description="A Label can be circular."
      examplePath="components/Label/Variations/LabelExampleCircular"
    />
    <ComponentExample
      title="Color"
      description="A Label can have different colors."
      examplePath="components/Label/Variations/LabelExampleColor"
    />
  </ExampleSection>
)

export default Variations
