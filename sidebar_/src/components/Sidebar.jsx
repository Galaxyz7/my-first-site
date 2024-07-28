import { Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

function MySidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const [image, setImage] = useState(false);
    const [toggled, setToggled] = useState(false);
  
    const handleCollapsedChange = () => {
        setCollapsed(!collapsed);
      };
    
      const handleImageChange = (checked) => {
        setImage(checked);
      };
    
      const handleToggleSidebar = (value) => {
        setToggled(value);
      };

  return (
    <div>
      <Sidebar/>
      <main>
        <div onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
          <Menu>
            <SubMenu label="Writeups">
                <MenuItem> Hello </MenuItem>
                <MenuItem> Hello </MenuItem>
                <MenuItem> Hello </MenuItem>
            </SubMenu>
            
            <MenuItem> Documentation</MenuItem>
            <MenuItem> Calendar</MenuItem>
            <MenuItem> E-commerce</MenuItem>
          </Menu>
      </main>
    </div>
    )
}

export default MySidebar;
