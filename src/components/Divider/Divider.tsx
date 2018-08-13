import * as React from 'react'
import * as PropTypes from 'prop-types'

import { childrenExist, createShorthandFactory, customPropTypes, UIComponent } from '../../lib'

/**
 * @accessibility
 * If there is no text provided inside divider, then "role='separator'" should be set.
 *
 *
 * Other considerations:
 *  - if separator contains text, then "role='separator'" cannnot be used because text is not narrated by VoiceOver (even with aria-label)
 */
class Divider extends UIComponent<any, any> {
  static displayName = 'Divider'

  static create: Function

  static className = 'ui-divider'

  static propTypes = {
    as: customPropTypes.as,

    /** Child content * */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Shorthand for primary content. */
    content: customPropTypes.contentShorthand,

    /** Size multiplier (default 0) * */
    size: PropTypes.number,

    /** A Divider can be formatted to show different levels of emphasis. */
    type: PropTypes.oneOf(['primary', 'secondary']),

    /** A divider can appear more important and draw the user's attention. */
    important: PropTypes.bool,
  }

  static handledProps = ['as', 'children', 'className', 'content', 'important', 'size', 'type']

  static defaultProps = {
    size: 0,
  }

  renderComponent({ ElementType, classes, rest }) {
    const { children, content } = this.props

    return (
      <ElementType {...rest} className={classes.root}>
        {childrenExist(children) ? children : content}
      </ElementType>
    )
  }
}

Divider.create = createShorthandFactory(Divider, content => ({ content }))

export default Divider
