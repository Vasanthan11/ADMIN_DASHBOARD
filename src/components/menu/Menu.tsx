import { Link } from "react-router-dom";
import './menu.scss';
import { menu } from "../../data"

const Menu = () => {
  return (
    <div className='menu'>
      {/* mapping of the first object in array in the data structure */}
      {menu.map((item) => (<div className="item" key={item.id}>
        <span className='title'>{item.title}</span>

        {/* instead of the anchoe tag we are using a Link tag in the react-router-dom */}

        {/* mapping of the Second obiect inside the first object of array in the data structure */}

        {item.listItems.map((listitem) => (
          <Link to={listitem.url} className="listItem" key={listitem.id}>
            <img src={listitem.icon} alt="" />
            <span className="listItemTitle">{listitem.title}</span>
          </Link>
        ))}

      </div>))}
    </div>
  )
}

export default Menu;