import {Alert} from 'reactstrap'


const Message = ({color,children}) => {
    return (
      <Alert color={color}>
          {children}
      </Alert>
    )
  }
export default Message