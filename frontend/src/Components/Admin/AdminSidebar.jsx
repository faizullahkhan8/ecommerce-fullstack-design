import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {
    LayoutDashboard,
    Package,
    Plus,
    List as ListIcon,
    Users,
    ShoppingCart,
    Layers,
    Menu as MenuIcon,
} from 'lucide-react';

const AdminSidebar = ({ activeView, setActiveView }) => {
    return (
        <Sidebar
            backgroundColor="white"
            rootStyles={{
                borderColor: '#E5E7EB',
                height: '100%',
                minHeight: 'max-content'
            }}
        >
            <div className="flex items-center justify-between p-4 border-b border-gray-200 h-[60px]">
                <span className="font-bold text-xl text-primary">Admin Panel</span>
            </div>

            <Menu
                menuItemStyles={{
                    button: {
                        '&:hover': {
                            backgroundColor: '#EFF6FF', // blue-50
                            color: '#0D6EFD', // primary blue roughly
                        },
                    },
                }}
            >
                <MenuItem
                    icon={<LayoutDashboard size={20} />}
                    onClick={() => setActiveView('dashboard')}
                    active={activeView === 'dashboard'}
                >
                    Dashboard
                </MenuItem>

                <SubMenu label="Products" icon={<Package size={20} />}>
                    <MenuItem
                        icon={<ListIcon size={18} />}
                        onClick={() => setActiveView('products-list')}
                        active={activeView === 'products-list'}
                    >
                        List Products
                    </MenuItem>
                    <MenuItem
                        icon={<Plus size={18} />}
                        onClick={() => setActiveView('products-add')}
                        active={activeView === 'products-add'}
                    >
                        Add Product
                    </MenuItem>
                </SubMenu>

                <SubMenu label="Categories" icon={<Layers size={20} />}>
                    <MenuItem
                        icon={<ListIcon size={18} />}
                        onClick={() => setActiveView('categories-list')}
                        active={activeView === 'categories-list'}
                    >
                        List Categories
                    </MenuItem>
                    <MenuItem
                        icon={<Plus size={18} />}
                        onClick={() => setActiveView('categories-add')}
                        active={activeView === 'categories-add'}
                    >
                        Add Category
                    </MenuItem>
                </SubMenu>

                <SubMenu label="Orders" icon={<ShoppingCart size={20} />}>
                    <MenuItem
                        icon={<ListIcon size={18} />}
                        onClick={() => setActiveView('orders-list')}
                        active={activeView === 'orders-list'}
                    >
                        List Orders
                    </MenuItem>
                    <MenuItem
                        icon={<Plus size={18} />}
                        onClick={() => setActiveView('orders-add')}
                        active={activeView === 'orders-add'}
                    >
                        Add Order
                    </MenuItem>
                </SubMenu>

                <SubMenu label="Users" icon={<Users size={20} />}>
                    <MenuItem
                        icon={<ListIcon size={18} />}
                        onClick={() => setActiveView('users-list')}
                        active={activeView === 'users-list'}
                    >
                        List Users
                    </MenuItem>
                    <MenuItem
                        icon={<Plus size={18} />}
                        onClick={() => setActiveView('users-add')}
                        active={activeView === 'users-add'}
                    >
                        Add User
                    </MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    );
};

export default AdminSidebar;
