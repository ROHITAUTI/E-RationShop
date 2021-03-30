const Header = (props) => {
  return (
    <div>
      <h3 className="title">{props.title}</h3>
    </div>
  )
}

Header.defaultProps = {
  title: '',
}

export default Header
