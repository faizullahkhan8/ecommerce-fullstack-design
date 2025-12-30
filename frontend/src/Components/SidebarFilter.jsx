import { ChevronUp, ChevronDown, Star } from "lucide-react";
import { useState } from "react";

const FilterSection = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-gray-200 py-4 first:border-0 ">
      <button 
        className="flex items-center justify-between w-full mb-3 font-semibold text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={16} className="text-gray-500" /> : <ChevronDown size={16} className="text-gray-500" />}
      </button>
      {isOpen && <div className="space-y-2">{children}</div>}
    </div>
  );
};

const SidebarFilter = () => {
  return (
    <aside className="w-64 flex-shrink-0 hidden lg:block">
      {/* Category */}
      <FilterSection title="Category">
        <div className="flex flex-col gap-2 text-gray-600">
             <a href="#" className="hover:text-primary">Mobile accessory</a>
             <a href="#" className="hover:text-primary">Electronics</a>
             <a href="#" className="hover:text-primary">Smartphones</a>
             <a href="#" className="hover:text-primary">Modern tech</a>
             <a href="#" className="text-primary text-sm mt-1">See all</a>
        </div>
      </FilterSection>

      {/* Brands */}
      <FilterSection title="Brands">
        {["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"].map((brand) => (
          <label key={brand} className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
            <span className="text-gray-600 group-hover:text-gray-900">{brand}</span>
          </label>
        ))}
        <a href="#" className="text-primary text-sm block mt-1">See all</a>
      </FilterSection>

      {/* Features */}
      <FilterSection title="Features">
         {["Metallic", "Plastic cover", "8GB Ram", "Super power", "Large Memory"].map((feature) => (
          <label key={feature} className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
            <span className="text-gray-600 group-hover:text-gray-900">{feature}</span>
          </label>
        ))}
         <a href="#" className="text-primary text-sm block mt-1">See all</a>
      </FilterSection>

      {/* Price Range */}
      <FilterSection title="Price range">
         <input type="range" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mb-4" />
         <div className="flex items-center gap-3">
             <div className="flex-1">
                 <label className="text-xs text-gray-500 mb-1 block">Min</label>
                 <input type="number" placeholder="0" className="w-full border border-gray-300 rounded px-2 py-1 text-sm outline-none focus:border-primary" />
             </div>
             <div className="flex-1">
                 <label className="text-xs text-gray-500 mb-1 block">Max</label>
                 <input type="number" placeholder="99999" className="w-full border border-gray-300 rounded px-2 py-1 text-sm outline-none focus:border-primary" />
             </div>
         </div>
         <button className="w-full mt-3 bg-white border border-gray-200 text-primary font-medium py-1.5 rounded hover:bg-gray-50 transition-colors shadow-sm">
            Apply
         </button>
      </FilterSection>

       {/* Condition */}
       <FilterSection title="Condition">
          {["Any", "Refurbished", "Brand new", "Old items"].map((item, idx) => (
            <label key={item} className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="condition" defaultChecked={idx===0} className="w-4 h-4 text-primary focus:ring-primary" />
                <span className="text-gray-600 group-hover:text-gray-900">{item}</span>
            </label>
          ))}
       </FilterSection>

       {/* Ratings */}
       <FilterSection title="Ratings">
          {[5, 4, 3, 2].map((stars) => (
              <label key={stars} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded p-1 -ml-1">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < stars ? "currentColor" : "none"} className={i < stars ? "text-amber-500" : "text-gray-300"} />
                    ))}
                  </div>
              </label>
          ))}
       </FilterSection>
    </aside>
  );
};

export default SidebarFilter;
