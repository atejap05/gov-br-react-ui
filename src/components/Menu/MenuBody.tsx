import { useState } from "react";

export type LayerItem = {
  id: string;
  icon?: string;
  content: string;
};

export type MenuItem = {
  id: string;
  icon?: string;
  content: string;
  layer?: LayerItem[];
};

export type MenuBodyProps = {
  onClick?: (id: string) => void;
  menuItems: MenuItem[];
};

export type ClickedItens = {
  id: string;
  active: boolean;
}[];

const MenuBody = ({ menuItems, onClick }: MenuBodyProps) => {
  const [clickedItens, setClickedItens] = useState<ClickedItens>(
    menuItems.map(item => ({ id: item.id, active: false }))
  );

  const handleItemClick = (id: string) => {
    const clickedItem = clickedItens.find(item => item.id === id);
    const updatedClickedItem = clickedItem
      ? { ...clickedItem, active: !clickedItem.active }
      : null;
    const updatedClickedItemId = clickedItens.map(item =>
      item.id === id ? updatedClickedItem : item
    );

    setClickedItens(
      updatedClickedItemId.filter(item => item !== null) as ClickedItens
    );

    onClick && onClick(id);
  };

  return (
    <nav className="menu-body" role="tree">
      {menuItems.map(({ id, icon, content, layer }) => {
        const active = clickedItens.find(item => item.id === id)?.active;
        return (
          <div
            key={id}
            className={
              active ? "menu-folder drop-menu active" : "menu-folder drop-menu"
            }
          >
            <a
              className="menu-item"
              role="treeitem"
              aria-expanded={active}
              data-click-listener="true"
              aria-haspopup="true"
              onClick={handleItemClick.bind(null, id)}
            >
              <span className="icon">
                <i className={`fas ${icon}`} aria-hidden="true"></i>
              </span>
              <span className="content">{content}</span>
              {layer && (
                <span className="support">
                  <i className="fas fa-chevron-down" aria-hidden="true"></i>
                </span>
              )}
            </a>
            {layer && (
              <ul>
                {layer.map(({ id, icon, content }) => (
                  <li key={id}>
                    <a
                      className="menu-item"
                      role="treeitem"
                      onClick={handleItemClick.bind(null, id)}
                    >
                      <span className="icon">
                        <i className={`fas ${icon}`} aria-hidden="true"></i>
                      </span>
                      <span className="content">{content}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}

      {/* 
      <div
        className={
          isItemActive && id === "menu-item-1"
            ? "menu-folder drop-menu active"
            : "menu-folder drop-menu"
        }
      >
        <a
          className="menu-item"
          role="treeitem"
          aria-expanded={isItemActive}
          data-click-listener="true"
          aria-haspopup="true"
          onClick={() => setIsItemActive(!isItemActive)}
          hidden={isSideMenuActive}
        >
          <span className="icon">
            <i className="fas fa-bell" aria-hidden="true"></i>
          </span>
          <span className="content">Camada 1 Item 1</span>
          <span className="support">
            <i className="fas fa-chevron-down" aria-hidden="true"></i>
          </span>
        </a>
        <ul>
          <li>
            <a className="menu-item" role="treeitem" hidden={isSideMenuActive}>
              <span className="icon">
                <i className="fas fa-heart" aria-hidden="true"></i>
              </span>
              <span className="content">Camada 2</span>
            </a>
          </li>
          <li className={isSideMenuActive ? "side-menu active" : "side-menu"}>
            <a
              className="menu-item"
              role="treeitem"
              onClick={() => setIsSideMenuActive(!isSideMenuActive)}
            >
              <span className="icon">
                <i className="fas fa-address-book" aria-hidden="true"></i>
              </span>
              <span className="content">Camada 2</span>
              <span className="support">
                <i className="fas fa-chevron-right" aria-hidden="true"></i>
              </span>
            </a>
            <ul role="group" aria-label="Camada 2">
              <li>
                <a className="menu-item" role="treeitem">
                  <span className="icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                  </span>
                  <span className="content">Camada 3</span>
                </a>
              </li>
              <li className="side-menu" role="none">
                <a className="menu-item" role="treeitem">
                  <span className="icon">
                    <i className="fas fa-tree" aria-hidden="true"></i>
                  </span>
                  <span className="content">Camada 3</span>
                  <span className="support">
                    <i className="fas fa-chevron-right" aria-hidden="true"></i>
                  </span>
                </a>
                <ul role="group">
                  <li>
                    <a className="menu-item" role="treeitem">
                      <span className="content">Camada 4</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" role="treeitem">
                      <span className="content">Camada 4</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" role="treeitem">
                      <span className="content">Camada 4</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="menu-item">
                  <span className="icon">
                    <i className="fas fa-moon" aria-hidden="true"></i>
                  </span>
                  <span className="content">Camada 3</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="menu-item" hidden={isSideMenuActive}>
              <span className="icon">
                <i className="fas fa-archive" aria-hidden="true"></i>
              </span>
              <span className="content">Camada 2</span>
            </a>
          </li>
        </ul>
      </div>

      <div
        className={
          isItemActive && id === "menu-item-2"
            ? "menu-folder drop-menu active"
            : "menu-folder drop-menu"
        }
      >
        <a
          // id={"menu-item-2"}
          className="menu-item"
          role="treeitem"
          hidden={isSideMenuActive}
          onClick={e => {
            console.log(e);
            setIsItemActive(!isItemActive);
          }}
        >
          <span className="icon">
            <i className="fas fa-bell" aria-hidden="true"></i>
          </span>
          <span className="content">Camada 1</span>
          <span className="support">
            <i className="fas fa-chevron-down" aria-hidden="true"></i>
          </span>
        </a>

        <ul>
          <li>
            <a className="menu-item" role="treeitem">
              <span className="icon">
                <i className="fas fa-heart" aria-hidden="true"></i>
              </span>
              <span className="content">Camada 2</span>
            </a>
          </li>
          <li>
            <a className="menu-item" role="treeitem">
              <span className="icon">
                <i className="fas fa-address-book" aria-hidden="true"></i>
              </span>
              <span className="content">Camada 2</span>
            </a>
            <ul>
              <li>
                <a className="menu-item" role="treeitem">
                  <span className="icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                  </span>
                  <span className="content">Camada 3</span>
                </a>
              </li>
              <li>
                <a className="menu-item" role="treeitem">
                  <span className="icon">
                    <i className="fas fa-tree" aria-hidden="true"></i>
                  </span>
                  <span className="content">Camada 3</span>
                </a>
                <ul>
                  <li>
                    <a className="menu-item" role="treeitem">
                      <span className="content">Camada 4</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" role="treeitem">
                      <span className="content">Camada 4</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" role="treeitem">
                      <span className="content">Camada 4</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="menu-item">
                  <span className="icon">
                    <i className="fas fa-moon" aria-hidden="true"></i>
                  </span>
                  <span className="content">Camada 3</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="menu-item">
              <span className="icon">
                <i className="fas fa-archive" aria-hidden="true"></i>
              </span>
              <span className="content">Camada 2</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="menu-folder drop-menu">
        <a className="menu-item" role="treeitem" hidden={isSideMenuActive}>
          <span className="icon">
            <i className="fas fa-bell" aria-hidden="true"></i>
          </span>
          <span className="content">Camada 1</span>
          <span className="support">
            <i className="fas fa-chevron-down" aria-hidden="true"></i>
          </span>
        </a>
        <ul>
          <li>
            <a className="menu-item" role="treeitem">
              <span className="icon">
                <i className="fas fa-heart" aria-hidden="true"></i>
              </span>
              <span className="content">Camada 2</span>
            </a>
          </li>
          <li>
            <a className="menu-item" role="treeitem">
              <span className="icon">
                <i className="fas fa-address-book" aria-hidden="true"></i>
              </span>
              <span className="content">Camada 2</span>
            </a>
            <ul>
              <li>
                <a className="menu-item" role="treeitem">
                  <span className="icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                  </span>
                  <span className="content">Camada 3</span>
                </a>
              </li>
              <li>
                <a className="menu-item" role="treeitem">
                  <span className="icon">
                    <i className="fas fa-tree" aria-hidden="true"></i>
                  </span>
                  <span className="content">Camada 3</span>
                </a>
                <ul>
                  <li>
                    <a className="menu-item" role="treeitem">
                      <span className="content">Camada 4</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" role="treeitem">
                      <span className="content">Camada 4</span>
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" role="treeitem">
                      <span className="content">Camada 4</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="menu-item">
                  <span className="icon">
                    <i className="fas fa-moon" aria-hidden="true"></i>
                  </span>
                  <span className="content">Camada 3</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="menu-item">
              <span className="icon">
                <i className="fas fa-archive" aria-hidden="true"></i>
              </span>
              <span className="content">Camada 2</span>
            </a>
          </li>
        </ul>
      </div>
      <a
        className="menu-item divider"
        role="treeitem"
        hidden={isSideMenuActive}
      >
        <span className="icon">
          <i className="fas fa-bell" aria-hidden="true"></i>
        </span>
        <span className="content">Item de Camada 1</span>
      </a>
      <a
        className="menu-item divider"
        role="treeitem"
        hidden={isSideMenuActive}
      >
        <span className="icon">
          <i className="fas fa-bell" aria-hidden="true"></i>
        </span>
        <span className="content">Item de Camada 1</span>
      </a> */}
    </nav>
  );
};

MenuBody.displayName = "MenuBody";

export { MenuBody };

// type SimpleItemProps = {
//   id: string;
//   icon: string;
//   content: string;
//   layer?: boolean;
//   hidden?: boolean;
// };

// const SimpleItem = ({ icon, content, id, layer, hidden }: SimpleItemProps) => {
//   return (
//     <a className="menu-item divider" role="treeitem" id={id} hidden={hidden}>
//       <span className="icon">
//         <i className={`fas ${icon}`} aria-hidden="true"></i>
//       </span>
//       <span className="content">{content}</span>
//       {layer && (
//         <span className="support">
//           <i className="fas fa-chevron-down" aria-hidden="true"></i>
//         </span>
//       )}
//     </a>
//   );
// };

// LayerItem Component renderiza um item de camada com um ícone e um texto e pode ser clicado para expandir ou recolher

// type LayerItemProps = {
//   icon: string;
//   content: string;
//   children: React.ReactNode;
//   id: string;
// };

// const LayerItem = ({ icon, content, id, children }) => {
//   const [isItemActive, setIsItemActive] = useState(false);
//   const [isSideMenuActive, setIsSideMenuActive] = useState(false);

//   return (
//     <div
//       className={
//         isItemActive ? "menu-folder drop-menu active" : "menu-folder drop-menu"
//       }
//     >
//       <a
//         className="menu-item"
//         role="treeitem"
//         aria-expanded={isItemActive}
//         data-click-listener="true"
//         aria-haspopup="true"
//         onClick={() => setIsItemActive(!isItemActive)}
//         hidden={isSideMenuActive}
//       >
//         <span className="icon">
//           <i className={`fas ${icon}`} aria-hidden="true"></i>
//         </span>
//         <span className="content">{content}</span>
//         <span className="support">
//           <i className="fas fa-chevron-down" aria-hidden="true"></i>
//         </span>
//       </a>
//       {children}
//     </div>
//   );
// };
