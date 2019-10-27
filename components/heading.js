import PropTypes from 'prop-types'
import styled from 'styled-components'

const Heading = styled.h1`
  font-family: ${({ theme }) => theme.typography.accent};
`

Heading.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Heading
